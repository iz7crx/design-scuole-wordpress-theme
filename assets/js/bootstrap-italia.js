/*!
 * Bootstrap Italia è un tema Bootstrap 4 per la creazione di applicazioni web nel pieno rispetto delle Linee guida di design per i servizi web della PA
 * @version v1.6.2
 * @link https://italia.github.io/bootstrap-italia/
 * @license BSD-3-Clause
 */
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass2(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _createForOfIteratorHelperLoose(e, t) {
  var n,
    i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (
    Array.isArray(e) ||
    (i = _unsupportedIterableToArray(e)) ||
    (t && e && "number" == typeof e.length)
  )
    return (
      i && (e = i),
      (n = 0),
      function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }
    );
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Map" ===
      (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
      "Set" === n
      ? Array.from(e)
      : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (e.document) return t(e);
            throw new Error("jQuery requires a window with a document");
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (_, N) {
  "use strict";
  function b(e) {
    return (
      "function" == typeof e &&
      "number" != typeof e.nodeType &&
      "function" != typeof e.item
    );
  }
  function m(e) {
    return null != e && e === e.window;
  }
  var t = [],
    F = Object.getPrototypeOf,
    s = t.slice,
    H = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    B = t.push,
    j = t.indexOf,
    R = {},
    q = R.toString,
    U = R.hasOwnProperty,
    W = U.toString,
    z = W.call(Object),
    g = {},
    x = _.document,
    Y = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function V(e, t, n) {
    var i,
      r,
      o = (n = n || x).createElement("script");
    if (((o.text = e), t))
      for (i in Y)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function p(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? R[q.call(e)] || "object"
      : typeof e;
  }
  var e = "3.6.0",
    C = function e(t, n) {
      return new e.fn.init(t, n);
    };
  function G(e) {
    var t = !!e && "length" in e && e.length,
      n = p(e);
    return (
      !b(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (C.fn = C.prototype =
    {
      jquery: e,
      constructor: C,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        e = C.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return C.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          C.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          C.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          C.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: B,
      sort: t.sort,
      splice: t.splice,
    }),
    (C.extend = C.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o = arguments[0] || {},
          a = 1,
          s = arguments.length,
          l = !1;
        for (
          "boolean" == typeof o && ((l = o), (o = arguments[a] || {}), a++),
            "object" == typeof o || b(o) || (o = {}),
            a === s && ((o = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = e[t]),
                "__proto__" !== t &&
                  o !== n &&
                  (l && n && (C.isPlainObject(n) || (i = Array.isArray(n)))
                    ? ((r = o[t]),
                      (r =
                        i && !Array.isArray(r)
                          ? []
                          : i || C.isPlainObject(r)
                          ? r
                          : {}),
                      (i = !1),
                      (o[t] = C.extend(l, r, n)))
                    : void 0 !== n && (o[t] = n));
        return o;
      }),
    C.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        return (
          !(!e || "[object Object]" !== q.call(e)) &&
          (!(e = F(e)) ||
            ("function" ==
              typeof (e = U.call(e, "constructor") && e.constructor) &&
              W.call(e) === z))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        V(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (G(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (G(Object(e))
              ? C.merge(t, "string" == typeof e ? [e] : e)
              : B.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : j.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
          !t(e[r], r) != a && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (G(e))
          for (i = e.length; o < i; o++)
            null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return H(a);
      },
      guid: 1,
      support: g,
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        R["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function i(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (r && C(e).is(n)) break;
        i.push(e);
      }
    return i;
  }
  function K(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var e = (function (N) {
      function d(e, t) {
        return (
          (e = "0x" + e.slice(1) - 65536),
          t ||
            (e < 0
              ? String.fromCharCode(65536 + e)
              : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
        );
      }
      function F(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      function H() {
        x();
      }
      var e,
        h,
        w,
        o,
        B,
        f,
        j,
        R,
        _,
        l,
        c,
        x,
        C,
        n,
        k,
        p,
        i,
        r,
        m,
        T = "sizzle" + +new Date(),
        u = N.document,
        E = 0,
        q = 0,
        U = A(),
        W = A(),
        z = A(),
        g = A(),
        Y = function (e, t) {
          return e === t && (c = !0), 0;
        },
        V = {}.hasOwnProperty,
        t = [],
        G = t.pop,
        K = t.push,
        S = t.push,
        Q = t.slice,
        b = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        X =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        a = "[\\x20\\t\\r\\n\\f]",
        s =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          a +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        J =
          "\\[" +
          a +
          "*(" +
          s +
          ")(?:" +
          a +
          "*([*^$|!~]?=)" +
          a +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          s +
          "))|)" +
          a +
          "*\\]",
        Z =
          ":(" +
          s +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          J +
          ")*)|.*)\\)|)",
        ee = new RegExp(a + "+", "g"),
        v = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
        te = new RegExp("^" + a + "*," + a + "*"),
        ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
        ie = new RegExp(a + "|>"),
        re = new RegExp(Z),
        oe = new RegExp("^" + s + "$"),
        y = {
          ID: new RegExp("^#(" + s + ")"),
          CLASS: new RegExp("^\\.(" + s + ")"),
          TAG: new RegExp("^(" + s + "|[*])"),
          ATTR: new RegExp("^" + J),
          PSEUDO: new RegExp("^" + Z),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              a +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              a +
              "*(?:([+-]|)" +
              a +
              "*(\\d+)|))" +
              a +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + X + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              a +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              a +
              "*((?:-\\d)?\\d*)" +
              a +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ae = /HTML$/i,
        se = /^(?:input|select|textarea|button)$/i,
        le = /^h\d$/i,
        I = /^[^{]+\{\s*\[native \w/,
        ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ue = /[+~]/,
        L = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        he = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        S.apply((t = Q.call(u.childNodes)), u.childNodes),
          t[u.childNodes.length].nodeType;
      } catch (e) {
        S = {
          apply: t.length
            ? function (e, t) {
                K.apply(e, Q.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function D(t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          c,
          u = e && e.ownerDocument,
          d = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
        )
          return n;
        if (!i && (x(e), (e = e || C), k)) {
          if (11 !== d && (s = ce.exec(t)))
            if ((r = s[1])) {
              if (9 === d) {
                if (!(c = e.getElementById(r))) return n;
                if (c.id === r) return n.push(c), n;
              } else if (
                u &&
                (c = u.getElementById(r)) &&
                m(e, c) &&
                c.id === r
              )
                return n.push(c), n;
            } else {
              if (s[2]) return S.apply(n, e.getElementsByTagName(t)), n;
              if (
                (r = s[3]) &&
                h.getElementsByClassName &&
                e.getElementsByClassName
              )
                return S.apply(n, e.getElementsByClassName(r)), n;
            }
          if (
            h.qsa &&
            !g[t + " "] &&
            (!p || !p.test(t)) &&
            (1 !== d || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (u = e), 1 === d && (ie.test(t) || ne.test(t)))) {
              for (
                ((u = (ue.test(t) && ge(e.parentNode)) || e) === e &&
                  h.scope) ||
                  ((a = e.getAttribute("id"))
                    ? (a = a.replace(de, F))
                    : e.setAttribute("id", (a = T))),
                  o = (l = f(t)).length;
                o--;

              )
                l[o] = (a ? "#" + a : ":scope") + " " + M(l[o]);
              c = l.join(",");
            }
            try {
              return S.apply(n, u.querySelectorAll(c)), n;
            } catch (e) {
              g(t, !0);
            } finally {
              a === T && e.removeAttribute("id");
            }
          }
        }
        return R(t.replace(v, "$1"), e, n, i);
      }
      function A() {
        var n = [];
        function i(e, t) {
          return (
            n.push(e + " ") > w.cacheLength && delete i[n.shift()],
            (i[e + " "] = t)
          );
        }
        return i;
      }
      function $(e) {
        return (e[T] = !0), e;
      }
      function O(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }
      function fe(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function me(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && he(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function P(a) {
        return $(function (o) {
          return (
            (o = +o),
            $(function (e, t) {
              for (var n, i = a([], e.length, o), r = i.length; r--; )
                e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (e in ((h = D.support = {}),
      (B = D.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            e = e && (e.ownerDocument || e).documentElement;
          return !ae.test(t || (e && e.nodeName) || "HTML");
        }),
      (x = D.setDocument =
        function (e) {
          var e = e ? e.ownerDocument || e : u;
          return (
            e != C &&
              9 === e.nodeType &&
              e.documentElement &&
              ((n = (C = e).documentElement),
              (k = !B(C)),
              u != C &&
                (e = C.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", H, !1)
                  : e.attachEvent && e.attachEvent("onunload", H)),
              (h.scope = O(function (e) {
                return (
                  n.appendChild(e).appendChild(C.createElement("div")),
                  void 0 !== e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (h.attributes = O(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (h.getElementsByTagName = O(function (e) {
                return (
                  e.appendChild(C.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (h.getElementsByClassName = I.test(C.getElementsByClassName)),
              (h.getById = O(function (e) {
                return (
                  (n.appendChild(e).id = T),
                  !C.getElementsByName || !C.getElementsByName(T).length
                );
              })),
              h.getById
                ? ((w.filter.ID = function (e) {
                    var t = e.replace(L, d);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && k)
                      return (t = t.getElementById(e)) ? [t] : [];
                  }))
                : ((w.filter.ID = function (e) {
                    var t = e.replace(L, d);
                    return function (e) {
                      e =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return e && e.value === t;
                    };
                  }),
                  (w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && k) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (w.find.TAG = h.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : h.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (w.find.CLASS =
                h.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && k)
                    return t.getElementsByClassName(e);
                }),
              (i = []),
              (p = []),
              (h.qsa = I.test(C.querySelectorAll)) &&
                (O(function (e) {
                  var t;
                  (n.appendChild(e).innerHTML =
                    "<a id='" +
                    T +
                    "'></a><select id='" +
                    T +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      p.push("[*^$]=" + a + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      p.push("\\[" + a + "*(?:value|" + X + ")"),
                    e.querySelectorAll("[id~=" + T + "-]").length ||
                      p.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      p.push(
                        "\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"
                      ),
                    e.querySelectorAll(":checked").length || p.push(":checked"),
                    e.querySelectorAll("a#" + T + "+*").length ||
                      p.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    p.push("[\\r\\n\\f]");
                }),
                O(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = C.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      p.push("name" + a + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      p.push(":enabled", ":disabled"),
                    (n.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      p.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    p.push(",.*:");
                })),
              (h.matchesSelector = I.test(
                (r =
                  n.matches ||
                  n.webkitMatchesSelector ||
                  n.mozMatchesSelector ||
                  n.oMatchesSelector ||
                  n.msMatchesSelector)
              )) &&
                O(function (e) {
                  (h.disconnectedMatch = r.call(e, "*")),
                    r.call(e, "[s!='']:x"),
                    i.push("!=", Z);
                }),
              (p = p.length && new RegExp(p.join("|"))),
              (i = i.length && new RegExp(i.join("|"))),
              (e = I.test(n.compareDocumentPosition)),
              (m =
                e || I.test(n.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                      return (
                        e === t ||
                        !(
                          !t ||
                          1 !== t.nodeType ||
                          !(n.contains
                            ? n.contains(t)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(t))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Y = e
                ? function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!h.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == C || (e.ownerDocument == u && m(u, e))
                          ? -1
                          : t == C || (t.ownerDocument == u && m(u, t))
                          ? 1
                          : l
                          ? b(l, e) - b(l, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!r || !o)
                      return e == C
                        ? -1
                        : t == C
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : l
                        ? b(l, e) - b(l, t)
                        : 0;
                    if (r === o) return pe(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[i] === s[i]; ) i++;
                    return i
                      ? pe(a[i], s[i])
                      : a[i] == u
                      ? -1
                      : s[i] == u
                      ? 1
                      : 0;
                  })),
            C
          );
        }),
      (D.matches = function (e, t) {
        return D(e, null, null, t);
      }),
      (D.matchesSelector = function (e, t) {
        if (
          (x(e),
          h.matchesSelector &&
            k &&
            !g[t + " "] &&
            (!i || !i.test(t)) &&
            (!p || !p.test(t)))
        )
          try {
            var n = r.call(e, t);
            if (
              n ||
              h.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            g(t, !0);
          }
        return 0 < D(t, C, null, [e]).length;
      }),
      (D.contains = function (e, t) {
        return (e.ownerDocument || e) != C && x(e), m(e, t);
      }),
      (D.attr = function (e, t) {
        (e.ownerDocument || e) != C && x(e);
        var n = w.attrHandle[t.toLowerCase()],
          n = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
        return void 0 !== n
          ? n
          : h.attributes || !k
          ? e.getAttribute(t)
          : (n = e.getAttributeNode(t)) && n.specified
          ? n.value
          : null;
      }),
      (D.escape = function (e) {
        return (e + "").replace(de, F);
      }),
      (D.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (D.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0;
        if (
          ((c = !h.detectDuplicates),
          (l = !h.sortStable && e.slice(0)),
          e.sort(Y),
          c)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (l = null), e;
      }),
      (o = D.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += o(t);
          return n;
        }),
      ((w = D.selectors =
        {
          cacheLength: 50,
          createPseudo: $,
          match: y,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(L, d)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(L, d)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || D.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && D.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return y.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      re.test(n) &&
                      (t = f(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(L, d).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = U[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) &&
                  U(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, n, i) {
              return function (e) {
                e = D.attr(e, t);
                return null == e
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === i
                        : "!=" === n
                        ? e !== i
                        : "^=" === n
                        ? i && 0 === e.indexOf(i)
                        : "*=" === n
                        ? i && -1 < e.indexOf(i)
                        : "$=" === n
                        ? i && e.slice(-i.length) === i
                        : "~=" === n
                        ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(i)
                        : "|=" === n &&
                          (e === i || e.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (p, e, t, m, g) {
              var v = "nth" !== p.slice(0, 3),
                b = "last" !== p.slice(-4),
                y = "of-type" === e;
              return 1 === m && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var i,
                      r,
                      o,
                      a,
                      s,
                      l,
                      c = v != b ? "nextSibling" : "previousSibling",
                      u = e.parentNode,
                      d = y && e.nodeName.toLowerCase(),
                      h = !n && !y,
                      f = !1;
                    if (u) {
                      if (v) {
                        for (; c; ) {
                          for (a = e; (a = a[c]); )
                            if (
                              y
                                ? a.nodeName.toLowerCase() === d
                                : 1 === a.nodeType
                            )
                              return !1;
                          l = c = "only" === p && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (((l = [b ? u.firstChild : u.lastChild]), b && h)) {
                        for (
                          f =
                            (s =
                              (i =
                                (r =
                                  (o = (a = u)[T] || (a[T] = {}))[a.uniqueID] ||
                                  (o[a.uniqueID] = {}))[p] || [])[0] === E &&
                              i[1]) && i[2],
                            a = s && u.childNodes[s];
                          (a = (++s && a && a[c]) || (f = s = 0) || l.pop());

                        )
                          if (1 === a.nodeType && ++f && a === e) {
                            r[p] = [E, s, f];
                            break;
                          }
                      } else if (
                        !1 ===
                        (f = h
                          ? (s =
                              (i =
                                (r =
                                  (o = (a = e)[T] || (a[T] = {}))[a.uniqueID] ||
                                  (o[a.uniqueID] = {}))[p] || [])[0] === E &&
                              i[1])
                          : f)
                      )
                        for (
                          ;
                          (a = (++s && a && a[c]) || (f = s = 0) || l.pop()) &&
                          ((y
                            ? a.nodeName.toLowerCase() !== d
                            : 1 !== a.nodeType) ||
                            !++f ||
                            (h &&
                              ((r =
                                (o = a[T] || (a[T] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[p] = [E, f]),
                            a !== e));

                        );
                      return (f -= g) === m || (f % m == 0 && 0 <= f / m);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  w.pseudos[e] ||
                  w.setFilters[e.toLowerCase()] ||
                  D.error("unsupported pseudo: " + e);
              return a[T]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  w.setFilters.hasOwnProperty(e.toLowerCase())
                    ? $(function (e, t) {
                        for (var n, i = a(e, o), r = i.length; r--; )
                          e[(n = b(e, i[r]))] = !(t[n] = i[r]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: $(function (e) {
              var i = [],
                r = [],
                s = j(e.replace(v, "$1"));
              return s[T]
                ? $(function (e, t, n, i) {
                    for (var r, o = s(e, null, i, []), a = e.length; a--; )
                      (r = o[a]) && (e[a] = !(t[a] = r));
                  })
                : function (e, t, n) {
                    return (
                      (i[0] = e), s(i, null, n, r), (i[0] = null), !r.pop()
                    );
                  };
            }),
            has: $(function (t) {
              return function (e) {
                return 0 < D(t, e).length;
              };
            }),
            contains: $(function (t) {
              return (
                (t = t.replace(L, d)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: $(function (n) {
              return (
                oe.test(n || "") || D.error("unsupported lang: " + n),
                (n = n.replace(L, d).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = k
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = N.location && N.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === n;
            },
            focus: function (e) {
              return (
                e === C.activeElement &&
                (!C.hasFocus || C.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !w.pseudos.empty(e);
            },
            header: function (e) {
              return le.test(e.nodeName);
            },
            input: function (e) {
              return se.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (e = e.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: P(function () {
              return [0];
            }),
            last: P(function (e, t) {
              return [t - 1];
            }),
            eq: P(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: P(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: P(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: P(function (e, t, n) {
              for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
              return e;
            }),
            gt: P(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = w.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        w.pseudos[e] = (function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        })(e);
      for (e in { submit: !0, reset: !0 })
        w.pseudos[e] = (function (n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          };
        })(e);
      function ve() {}
      function M(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function be(a, e, t) {
        var s = e.dir,
          l = e.next,
          c = l || s,
          u = t && "parentNode" === c,
          d = q++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[s]); ) if (1 === e.nodeType || u) return a(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var i,
                r,
                o = [E, d];
              if (n) {
                for (; (e = e[s]); )
                  if ((1 === e.nodeType || u) && a(e, t, n)) return !0;
              } else
                for (; (e = e[s]); )
                  if (1 === e.nodeType || u)
                    if (
                      ((r =
                        (r = e[T] || (e[T] = {}))[e.uniqueID] ||
                        (r[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[s] || e;
                    else {
                      if ((i = r[c]) && i[0] === E && i[1] === d)
                        return (o[2] = i[2]);
                      if (((r[c] = o)[2] = a(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function ye(r) {
        return 1 < r.length
          ? function (e, t, n) {
              for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
              return !0;
            }
          : r[0];
      }
      function we(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
          !(o = e[s]) || (n && !n(o, i, r)) || (a.push(o), c && t.push(s));
        return a;
      }
      function _e(f, p, m, g, v, e) {
        return (
          g && !g[T] && (g = _e(g)),
          v && !v[T] && (v = _e(v, e)),
          $(function (e, t, n, i) {
            var r,
              o,
              a,
              s = [],
              l = [],
              c = t.length,
              u =
                e ||
                (function (e, t, n) {
                  for (var i = 0, r = t.length; i < r; i++) D(e, t[i], n);
                  return n;
                })(p || "*", n.nodeType ? [n] : n, []),
              d = !f || (!e && p) ? u : we(u, s, f, n, i),
              h = m ? (v || (e ? f : c || g) ? [] : t) : d;
            if ((m && m(d, h, n, i), g))
              for (r = we(h, l), g(r, [], n, i), o = r.length; o--; )
                (a = r[o]) && (h[l[o]] = !(d[l[o]] = a));
            if (e) {
              if (v || f) {
                if (v) {
                  for (r = [], o = h.length; o--; )
                    (a = h[o]) && r.push((d[o] = a));
                  v(null, (h = []), r, i);
                }
                for (o = h.length; o--; )
                  (a = h[o]) &&
                    -1 < (r = v ? b(e, a) : s[o]) &&
                    (e[r] = !(t[r] = a));
              }
            } else (h = we(h === t ? h.splice(c, h.length) : h)), v ? v(null, t, h, i) : S.apply(t, h);
          })
        );
      }
      function xe(g, v) {
        function e(e, t, n, i, r) {
          var o,
            a,
            s,
            l = 0,
            c = "0",
            u = e && [],
            d = [],
            h = _,
            f = e || (y && w.find.TAG("*", r)),
            p = (E += null == h ? 1 : Math.random() || 0.1),
            m = f.length;
          for (
            r && (_ = t == C || t || r);
            c !== m && null != (o = f[c]);
            c++
          ) {
            if (y && o) {
              for (
                a = 0, t || o.ownerDocument == C || (x(o), (n = !k));
                (s = g[a++]);

              )
                if (s(o, t || C, n)) {
                  i.push(o);
                  break;
                }
              r && (E = p);
            }
            b && ((o = !s && o) && l--, e && u.push(o));
          }
          if (((l += c), b && c !== l)) {
            for (a = 0; (s = v[a++]); ) s(u, d, t, n);
            if (e) {
              if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = G.call(i));
              d = we(d);
            }
            S.apply(i, d),
              r && !e && 0 < d.length && 1 < l + v.length && D.uniqueSort(i);
          }
          return r && ((E = p), (_ = h)), u;
        }
        var b = 0 < v.length,
          y = 0 < g.length;
        return b ? $(e) : e;
      }
      return (
        (ve.prototype = w.filters = w.pseudos),
        (w.setFilters = new ve()),
        (f = D.tokenize =
          function (e, t) {
            var n,
              i,
              r,
              o,
              a,
              s,
              l,
              c = W[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = w.preFilter; a; ) {
              for (o in ((n && !(i = te.exec(a))) ||
                (i && (a = a.slice(i[0].length) || a), s.push((r = []))),
              (n = !1),
              (i = ne.exec(a)) &&
                ((n = i.shift()),
                r.push({ value: n, type: i[0].replace(v, " ") }),
                (a = a.slice(n.length))),
              w.filter))
                !(i = y[o].exec(a)) ||
                  (l[o] && !(i = l[o](i))) ||
                  ((n = i.shift()),
                  r.push({ value: n, type: o, matches: i }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? D.error(e) : W(e, s).slice(0);
          }),
        (j = D.compile =
          function (e, t) {
            var n,
              i = [],
              r = [],
              o = z[e + " "];
            if (!o) {
              for (n = (t = t || f(e)).length; n--; )
                ((o = (function e(t) {
                  for (
                    var i,
                      n,
                      r,
                      o = t.length,
                      a = w.relative[t[0].type],
                      s = a || w.relative[" "],
                      l = a ? 1 : 0,
                      c = be(
                        function (e) {
                          return e === i;
                        },
                        s,
                        !0
                      ),
                      u = be(
                        function (e) {
                          return -1 < b(i, e);
                        },
                        s,
                        !0
                      ),
                      d = [
                        function (e, t, n) {
                          return (
                            (e =
                              (!a && (n || t !== _)) ||
                              ((i = t).nodeType ? c : u)(e, t, n)),
                            (i = null),
                            e
                          );
                        },
                      ];
                    l < o;
                    l++
                  )
                    if ((n = w.relative[t[l].type])) d = [be(ye(d), n)];
                    else {
                      if (
                        (n = w.filter[t[l].type].apply(null, t[l].matches))[T]
                      ) {
                        for (r = ++l; r < o && !w.relative[t[r].type]; r++);
                        return _e(
                          1 < l && ye(d),
                          1 < l &&
                            M(
                              t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : "",
                              })
                            ).replace(v, "$1"),
                          n,
                          l < r && e(t.slice(l, r)),
                          r < o && e((t = t.slice(r))),
                          r < o && M(t)
                        );
                      }
                      d.push(n);
                    }
                  return ye(d);
                })(t[n]))[T]
                  ? i
                  : r
                ).push(o);
              (o = z(e, xe(r, i))).selector = e;
            }
            return o;
          }),
        (R = D.select =
          function (e, t, n, i) {
            var r,
              o,
              a,
              s,
              l,
              c = "function" == typeof e && e,
              u = !i && f((e = c.selector || e));
            if (((n = n || []), 1 === u.length)) {
              if (
                2 < (o = u[0] = u[0].slice(0)).length &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                k &&
                w.relative[o[1].type]
              ) {
                if (!(t = (w.find.ID(a.matches[0].replace(L, d), t) || [])[0]))
                  return n;
                c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                r = y.needsContext.test(e) ? 0 : o.length;
                r-- && ((a = o[r]), !w.relative[(s = a.type)]);

              )
                if (
                  (l = w.find[s]) &&
                  (i = l(
                    a.matches[0].replace(L, d),
                    (ue.test(o[0].type) && ge(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(r, 1), (e = i.length && M(o)))) break;
                  return S.apply(n, i), n;
                }
            }
            return (
              (c || j(e, u))(
                i,
                t,
                !k,
                n,
                !t || (ue.test(e) && ge(t.parentNode)) || t
              ),
              n
            );
          }),
        (h.sortStable = T.split("").sort(Y).join("") === T),
        (h.detectDuplicates = !!c),
        x(),
        (h.sortDetached = O(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        O(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (h.attributes &&
          O(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        O(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(X, function (e, t, n) {
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                ? n.value
                : null;
          }),
        D
      );
    })(_),
    Q =
      ((C.find = e),
      (C.expr = e.selectors),
      (C.expr[":"] = C.expr.pseudos),
      (C.uniqueSort = C.unique = e.uniqueSort),
      (C.text = e.getText),
      (C.isXMLDoc = e.isXML),
      (C.contains = e.contains),
      (C.escapeSelector = e.escape),
      C.expr.match.needsContext);
  function l(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var X = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function J(e, n, i) {
    return b(n)
      ? C.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? C.grep(e, function (e) {
          return (e === n) !== i;
        })
      : "string" != typeof n
      ? C.grep(e, function (e) {
          return -1 < j.call(n, e) !== i;
        })
      : C.filter(n, e, i);
  }
  (C.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? C.find.matchesSelector(i, e)
          ? [i]
          : []
        : C.find.matches(
            e,
            C.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    C.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            C(e).filter(function () {
              for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
        return 1 < i ? C.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(J(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(J(this, e || [], !0));
      },
      is: function (e) {
        return !!J(this, "string" == typeof e && Q.test(e) ? C(e) : e || [], !1)
          .length;
      },
    });
  var Z,
    ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    te =
      (((C.fn.init = function (e, t, n) {
        if (!e) return this;
        if (((n = n || Z), "string" != typeof e))
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : b(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(C)
            : C.makeArray(e, this);
        if (
          !(i =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : ee.exec(e)) ||
          (!i[1] && t)
        )
          return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof C ? t[0] : t),
            C.merge(
              this,
              C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)
            ),
            X.test(i[1]) && C.isPlainObject(t))
          )
            for (var i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (n = x.getElementById(i[2])) && ((this[0] = n), (this.length = 1)),
          this
        );
      }).prototype = C.fn),
      (Z = C(x)),
      /^(?:parents|prev(?:Until|All))/),
    ne = { children: !0, contents: !0, next: !0, prev: !0 };
  function ie(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  C.fn.extend({
    has: function (e) {
      var t = C(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && C(e);
      if (!Q.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && C.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? j.call(C(e), this[0])
          : j.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    C.each(
      {
        parent: function (e) {
          return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return i(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return i(e, "parentNode", n);
        },
        next: function (e) {
          return ie(e, "nextSibling");
        },
        prev: function (e) {
          return ie(e, "previousSibling");
        },
        nextAll: function (e) {
          return i(e, "nextSibling");
        },
        prevAll: function (e) {
          return i(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return i(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return i(e, "previousSibling", n);
        },
        siblings: function (e) {
          return K((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return K(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && F(e.contentDocument)
            ? e.contentDocument
            : (l(e, "template") && (e = e.content || e),
              C.merge([], e.childNodes));
        },
      },
      function (i, r) {
        C.fn[i] = function (e, t) {
          var n = C.map(this, r, e);
          return (
            (t = "Until" !== i.slice(-5) ? e : t) &&
              "string" == typeof t &&
              (n = C.filter(t, n)),
            1 < this.length &&
              (ne[i] || C.uniqueSort(n), te.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var k = /[^\x20\t\r\n\f]+/g;
  function u(e) {
    return e;
  }
  function re(e) {
    throw e;
  }
  function oe(e, t, n, i) {
    var r;
    try {
      e && b((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && b((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (C.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          C.each(e.match(k) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : C.extend({}, i);
    function r() {
      for (s = s || i.once, a = o = !0; c.length; u = -1)
        for (t = c.shift(); ++u < l.length; )
          !1 === l[u].apply(t[0], t[1]) &&
            i.stopOnFalse &&
            ((u = l.length), (t = !1));
      i.memory || (t = !1), (o = !1), s && (l = t ? [] : "");
    }
    var o,
      t,
      a,
      s,
      l = [],
      c = [],
      u = -1,
      d = {
        add: function () {
          return (
            l &&
              (t && !o && ((u = l.length - 1), c.push(t)),
              (function n(e) {
                C.each(e, function (e, t) {
                  b(t)
                    ? (i.unique && d.has(t)) || l.push(t)
                    : t && t.length && "string" !== p(t) && n(t);
                });
              })(arguments),
              t && !o && r()),
            this
          );
        },
        remove: function () {
          return (
            C.each(arguments, function (e, t) {
              for (var n; -1 < (n = C.inArray(t, l, n)); )
                l.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < C.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return (l = l && []), this;
        },
        disable: function () {
          return (s = c = []), (l = t = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (s = c = []), t || o || (l = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              c.push(t),
              o || r()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return d;
  }),
    C.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              C.Callbacks("memory"),
              C.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              C.Callbacks("once memory"),
              C.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              C.Callbacks("once memory"),
              C.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          a = {
            state: function () {
              return r;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var r = arguments;
              return C.Deferred(function (i) {
                C.each(o, function (e, t) {
                  var n = b(r[t[4]]) && r[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (r = null);
              }).promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function c(r, o, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(r < l)) {
                      if ((e = a.apply(n, i)) === o.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        b(t)
                          ? s
                            ? t.call(e, c(l, o, u, s), c(l, o, re, s))
                            : (l++,
                              t.call(
                                e,
                                c(l, o, u, s),
                                c(l, o, re, s),
                                c(l, o, u, o.notifyWith)
                              ))
                          : (a !== u && ((n = void 0), (i = [e])),
                            (s || o.resolveWith)(n, i));
                    }
                  }
                  var n = this,
                    i = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            C.Deferred.exceptionHook &&
                              C.Deferred.exceptionHook(e, t.stackTrace),
                              l <= r + 1 &&
                                (a !== re && ((n = void 0), (i = [e])),
                                o.rejectWith(n, i));
                          }
                        };
                  r
                    ? t()
                    : (C.Deferred.getStackHook &&
                        (t.stackTrace = C.Deferred.getStackHook()),
                      _.setTimeout(t));
                };
              }
              return C.Deferred(function (e) {
                o[0][3].add(c(0, e, b(i) ? i : u, e.notifyWith)),
                  o[1][3].add(c(0, e, b(t) ? t : u)),
                  o[2][3].add(c(0, e, b(n) ? n : re));
              }).promise();
            },
            promise: function (e) {
              return null != e ? C.extend(e, a) : a;
            },
          },
          s = {};
        return (
          C.each(o, function (e, t) {
            var n = t[2],
              i = t[5];
            (a[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    r = i;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (r[t] = this),
              (o[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(r, o);
          };
        }
        var n = arguments.length,
          i = n,
          r = Array(i),
          o = s.call(arguments),
          a = C.Deferred();
        if (
          n <= 1 &&
          (oe(e, a.done(t(i)).resolve, a.reject, !n),
          "pending" === a.state() || b(o[i] && o[i].then))
        )
          return a.then();
        for (; i--; ) oe(o[i], t(i), a.reject);
        return a.promise();
      },
    });
  var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    se =
      ((C.Deferred.exceptionHook = function (e, t) {
        _.console &&
          _.console.warn &&
          e &&
          ae.test(e.name) &&
          _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
      (C.readyException = function (e) {
        _.setTimeout(function () {
          throw e;
        });
      }),
      C.Deferred());
  function le() {
    x.removeEventListener("DOMContentLoaded", le),
      _.removeEventListener("load", le),
      C.ready();
  }
  (C.fn.ready = function (e) {
    return (
      se.then(e).catch(function (e) {
        C.readyException(e);
      }),
      this
    );
  }),
    C.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --C.readyWait : C.isReady) ||
          ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
          se.resolveWith(x, [C]);
      },
    }),
    (C.ready.then = se.then),
    "complete" === x.readyState ||
    ("loading" !== x.readyState && !x.documentElement.doScroll)
      ? _.setTimeout(C.ready)
      : (x.addEventListener("DOMContentLoaded", le),
        _.addEventListener("load", le));
  function d(e, t, n, i, r, o, a) {
    var s = 0,
      l = e.length,
      c = null == n;
    if ("object" === p(n)) for (s in ((r = !0), n)) d(e, t, s, n[s], !0, o, a);
    else if (
      void 0 !== i &&
      ((r = !0),
      b(i) || (a = !0),
      (t = c
        ? a
          ? (t.call(e, i), null)
          : ((c = t),
            function (e, t, n) {
              return c.call(C(e), n);
            })
        : t))
    )
      for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
    return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
  }
  var ce = /^-ms-/,
    ue = /-([a-z])/g;
  function de(e, t) {
    return t.toUpperCase();
  }
  function y(e) {
    return e.replace(ce, "ms-").replace(ue, de);
  }
  function v(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function he() {
    this.expando = C.expando + he.uid++;
  }
  (he.uid = 1),
    (he.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            v(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[y(t)] = n;
        else for (i in t) r[y(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][y(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(y)
              : (t = y(t)) in i
              ? [t]
              : t.match(k) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 !== t && !C.isEmptyObject(i)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !C.isEmptyObject(e);
      },
    });
  var w = new he(),
    c = new he(),
    fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    pe = /[A-Z]/g;
  function me(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(pe, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : fe.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        c.set(e, t, n);
      } else n = void 0;
    return n;
  }
  C.extend({
    hasData: function (e) {
      return c.hasData(e) || w.hasData(e);
    },
    data: function (e, t, n) {
      return c.access(e, t, n);
    },
    removeData: function (e, t) {
      c.remove(e, t);
    },
    _data: function (e, t, n) {
      return w.access(e, t, n);
    },
    _removeData: function (e, t) {
      w.remove(e, t);
    },
  }),
    C.fn.extend({
      data: function (n, e) {
        var t,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                c.set(this, n);
              })
            : d(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = c.get(o, n)) ||
                      void 0 !== (t = me(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    c.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((r = c.get(o)), 1 === o.nodeType && !w.get(o, "hasDataAttrs"))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (i = a[t].name).indexOf("data-") &&
              ((i = y(i.slice(5))), me(o, i, r[i]));
          w.set(o, "hasDataAttrs", !0);
        }
        return r;
      },
      removeData: function (e) {
        return this.each(function () {
          c.remove(this, e);
        });
      },
    }),
    C.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = w.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = w.access(e, t, C.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = C.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = C._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                C.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          w.get(e, n) ||
          w.access(e, n, {
            empty: C.Callbacks("once memory").add(function () {
              w.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    C.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? C.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --r || o.resolveWith(a, [a]);
        }
        var i,
          r = 1,
          o = C.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (i = w.get(a[s], e + "queueHooks")) &&
            i.empty &&
            (r++, i.empty.add(n));
        return n(), o.promise(t);
      },
    });
  function ge(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && E(e) && "none" === C.css(e, "display"))
    );
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    h = ["Top", "Right", "Bottom", "Left"],
    T = x.documentElement,
    E = function (e) {
      return C.contains(e.ownerDocument, e);
    },
    be = { composed: !0 };
  T.getRootNode &&
    (E = function (e) {
      return (
        C.contains(e.ownerDocument, e) || e.getRootNode(be) === e.ownerDocument
      );
    });
  function ye(e, t, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return C.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (C.cssNumber[t] || ("px" !== c && +l)) &&
        ve.exec(C.css(e, t));
    if (u && u[3] !== c) {
      for (c = c || u[3], u = +(l /= 2) || 1; a--; )
        C.style(e, t, u + c),
          (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
          (u /= o);
      C.style(e, t, (u *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var we = {};
  function S(e, t) {
    for (var n, i, r, o, a, s = [], l = 0, c = e.length; l < c; l++)
      (i = e[l]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((s[l] = w.get(i, "display") || null),
              s[l] || (i.style.display = "")),
            "" === i.style.display &&
              ge(i) &&
              (s[l] =
                ((a = o = void 0),
                (o = (r = i).ownerDocument),
                (r = r.nodeName),
                (a = we[r]) ||
                  ((o = o.body.appendChild(o.createElement(r))),
                  (a = C.css(o, "display")),
                  o.parentNode.removeChild(o),
                  (we[r] = a = "none" === a ? "block" : a)))))
          : "none" !== n && ((s[l] = "none"), w.set(i, "display", n)));
    for (l = 0; l < c; l++) null != s[l] && (e[l].style.display = s[l]);
    return e;
  }
  C.fn.extend({
    show: function () {
      return S(this, !0);
    },
    hide: function () {
      return S(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ge(this) ? C(this).show() : C(this).hide();
          });
    },
  });
  var _e = /^(?:checkbox|radio)$/i,
    xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i,
    I =
      (($ = x.createDocumentFragment().appendChild(x.createElement("div"))),
      (a = x.createElement("input")).setAttribute("type", "radio"),
      a.setAttribute("checked", "checked"),
      a.setAttribute("name", "t"),
      $.appendChild(a),
      (g.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked),
      ($.innerHTML = "<textarea>x</textarea>"),
      (g.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue),
      ($.innerHTML = "<option></option>"),
      (g.option = !!$.lastChild),
      {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      });
  function L(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && l(e, t)) ? C.merge([e], n) : n;
  }
  function ke(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      w.set(e[n], "globalEval", !t || w.get(t[n], "globalEval"));
  }
  (I.tbody = I.tfoot = I.colgroup = I.caption = I.thead),
    (I.th = I.td),
    g.option ||
      (I.optgroup = I.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var Te = /<|&#?\w+;/;
  function Ee(e, t, n, i, r) {
    for (
      var o,
        a,
        s,
        l,
        c,
        u = t.createDocumentFragment(),
        d = [],
        h = 0,
        f = e.length;
      h < f;
      h++
    )
      if ((o = e[h]) || 0 === o)
        if ("object" === p(o)) C.merge(d, o.nodeType ? [o] : o);
        else if (Te.test(o)) {
          for (
            a = a || u.appendChild(t.createElement("div")),
              s = (xe.exec(o) || ["", ""])[1].toLowerCase(),
              s = I[s] || I._default,
              a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2],
              c = s[0];
            c--;

          )
            a = a.lastChild;
          C.merge(d, a.childNodes), ((a = u.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    for (u.textContent = "", h = 0; (o = d[h++]); )
      if (i && -1 < C.inArray(o, i)) r && r.push(o);
      else if (((l = E(o)), (a = L(u.appendChild(o), "script")), l && ke(a), n))
        for (c = 0; (o = a[c++]); ) Ce.test(o.type || "") && n.push(o);
    return u;
  }
  var Se = /^([^.]*)(?:\.(.+)|)/;
  function n() {
    return !0;
  }
  function f() {
    return !1;
  }
  function Ie(e, t) {
    return (
      (e ===
        (function () {
          try {
            return x.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Le(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Le(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = f;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        ((r = function (e) {
          return C().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = C.guid++))),
      e.each(function () {
        C.event.add(this, t, r, i, n);
      })
    );
  }
  function De(e, r, o) {
    o
      ? (w.set(e, r, !1),
        C.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              i = w.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (i.length)
                (C.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = s.call(arguments)),
                w.set(this, r, i),
                (t = o(this, r)),
                this[r](),
                i !== (n = w.get(this, r)) || t ? w.set(this, r, !1) : (n = {}),
                i !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              i.length &&
                (w.set(this, r, {
                  value: C.event.trigger(
                    C.extend(i[0], C.Event.prototype),
                    i.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === w.get(e, r) && C.event.add(e, r, n);
  }
  (C.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        f,
        p = w.get(t);
      if (v(t))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && C.find.matchesSelector(T, r),
            n.guid || (n.guid = C.guid++),
            (s = p.events) || (s = p.events = Object.create(null)),
            (a = p.handle) ||
              (a = p.handle =
                function (e) {
                  return void 0 !== C && C.event.triggered !== e.type
                    ? C.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            l = (e = (e || "").match(k) || [""]).length;
          l--;

        )
          (d = f = (h = Se.exec(e[l]) || [])[1]),
            (h = (h[2] || "").split(".").sort()),
            d &&
              ((c = C.event.special[d] || {}),
              (d = (r ? c.delegateType : c.bindType) || d),
              (c = C.event.special[d] || {}),
              (f = C.extend(
                {
                  type: d,
                  origType: f,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && C.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (u = s[d]) ||
                (((u = s[d] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, i, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              c.add &&
                (c.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)),
              r ? u.splice(u.delegateCount++, 0, f) : u.push(f),
              (C.event.global[d] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        f,
        p,
        m,
        g = w.hasData(e) && w.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(k) || [""]).length; c--; )
          if (
            ((f = m = (s = Se.exec(t[c]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = C.event.special[f] || {},
                h = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = h.length;
              o--;

            )
              (u = h[o]),
                (!r && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (s && !s.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (h.splice(o, 1),
                  u.selector && h.delegateCount--,
                  d.remove && d.remove.call(e, u));
            a &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(e, p, g.handle)) ||
                C.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
        C.isEmptyObject(l) && w.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a = new Array(arguments.length),
        s = C.event.fix(e),
        e = (w.get(this, "events") || Object.create(null))[s.type] || [],
        l = C.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, s))
      ) {
        for (
          o = C.event.handlers.call(this, s, e), t = 0;
          (i = o[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== r.namespace &&
              !s.rnamespace.test(r.namespace)) ||
              ((s.handleObj = r),
              (s.data = r.data),
              void 0 !==
                (r = (
                  (C.event.special[r.origType] || {}).handle || r.handler
                ).apply(i.elem, a)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(r = (i = t[n]).selector + " ")] &&
                (a[r] = i.needsContext
                  ? -1 < C(r, this).index(c)
                  : C.find(r, this, null, [c]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(C.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[C.expando] ? e : new C.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          e = this || e;
          return (
            _e.test(e.type) && e.click && l(e, "input") && De(e, "click", n), !1
          );
        },
        trigger: function (e) {
          e = this || e;
          return (
            _e.test(e.type) && e.click && l(e, "input") && De(e, "click"), !0
          );
        },
        _default: function (e) {
          e = e.target;
          return (
            (_e.test(e.type) &&
              e.click &&
              l(e, "input") &&
              w.get(e, "click")) ||
            l(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? n
              : f),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && C.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[C.expando] = !0);
    }),
    (C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = n),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = n),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = n),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    C.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      C.event.addProp
    ),
    C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      C.event.special[e] = {
        setup: function () {
          return De(this, e, Ie), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    C.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, r) {
        C.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || C.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = r)),
              t
            );
          },
        };
      }
    ),
    C.fn.extend({
      on: function (e, t, n, i) {
        return Le(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Le(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            C(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = f),
            this.each(function () {
              C.event.remove(this, e, n, t);
            })
          );
        for (r in e) this.off(r, t, e[r]);
        return this;
      },
    });
  var Ae = /<script|<style|<link/i,
    $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Pe(e, t) {
    return (
      (l(e, "table") &&
        l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        C(e).children("tbody")[0]) ||
      e
    );
  }
  function Me(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ne(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, i, r, o;
    if (1 === t.nodeType) {
      if (w.hasData(e) && (o = w.get(e).events))
        for (r in (w.remove(t, "handle events"), o))
          for (n = 0, i = o[r].length; n < i; n++) C.event.add(t, r, o[r][n]);
      c.hasData(e) && ((e = c.access(e)), (e = C.extend({}, e)), c.set(t, e));
    }
  }
  function D(n, i, r, o) {
    i = H(i);
    var e,
      t,
      a,
      s,
      l,
      c,
      u = 0,
      d = n.length,
      h = d - 1,
      f = i[0],
      p = b(f);
    if (p || (1 < d && "string" == typeof f && !g.checkClone && $e.test(f)))
      return n.each(function (e) {
        var t = n.eq(e);
        p && (i[0] = f.call(this, e, t.html())), D(t, i, r, o);
      });
    if (
      d &&
      ((t = (e = Ee(i, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = C.map(L(e, "script"), Me)).length; u < d; u++)
        (l = e),
          u !== h &&
            ((l = C.clone(l, !0, !0)), s && C.merge(a, L(l, "script"))),
          r.call(n[u], l, u);
      if (s)
        for (c = a[a.length - 1].ownerDocument, C.map(a, Ne), u = 0; u < s; u++)
          (l = a[u]),
            Ce.test(l.type || "") &&
              !w.access(l, "globalEval") &&
              C.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? C._evalUrl &&
                  !l.noModule &&
                  C._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : V(l.textContent.replace(Oe, ""), l, c));
    }
    return n;
  }
  function He(e, t, n) {
    for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || C.cleanData(L(i)),
        i.parentNode &&
          (n && E(i) && ke(L(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  C.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        u = e.cloneNode(!0),
        d = E(e);
      if (
        !(
          g.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          C.isXMLDoc(e)
        )
      )
        for (a = L(u), i = 0, r = (o = L(e)).length; i < r; i++)
          (s = o[i]),
            (l = a[i]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && _e.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || L(e), a = a || L(u), i = 0, r = o.length; i < r; i++)
            Fe(o[i], a[i]);
        else Fe(e, u);
      return 0 < (a = L(u, "script")).length && ke(a, !d && L(e, "script")), u;
    },
    cleanData: function (e) {
      for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (v(n)) {
          if ((t = n[w.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
            n[w.expando] = void 0;
          }
          n[c.expando] && (n[c.expando] = void 0);
        }
    },
  }),
    C.fn.extend({
      detach: function (e) {
        return He(this, e, !0);
      },
      remove: function (e) {
        return He(this, e);
      },
      text: function (e) {
        return d(
          this,
          function (e) {
            return void 0 === e
              ? C.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return D(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Pe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return D(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = Pe(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return D(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (C.cleanData(L(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return C.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return d(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !I[(xe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = C.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (C.cleanData(L(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return D(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            C.inArray(this, n) < 0 &&
              (C.cleanData(L(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    C.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        C.fn[e] = function (e) {
          for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++)
            (t = o === r ? this : this.clone(!0)),
              C(i[o])[a](t),
              B.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  function Be(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : _).getComputedStyle(e);
  }
  function je(e, t, n) {
    var i,
      r = {};
    for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
    for (i in ((n = n.call(e)), t)) e.style[i] = r[i];
    return n;
  }
  var Re,
    qe,
    Ue,
    We,
    ze,
    Ye,
    Ve,
    r,
    Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
    Ke = new RegExp(h.join("|"), "i");
  function Qe() {
    var e;
    r &&
      ((Ve.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (r.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      T.appendChild(Ve).appendChild(r),
      (e = _.getComputedStyle(r)),
      (Re = "1%" !== e.top),
      (Ye = 12 === Xe(e.marginLeft)),
      (r.style.right = "60%"),
      (We = 36 === Xe(e.right)),
      (qe = 36 === Xe(e.width)),
      (r.style.position = "absolute"),
      (Ue = 12 === Xe(r.offsetWidth / 3)),
      T.removeChild(Ve),
      (r = null));
  }
  function Xe(e) {
    return Math.round(parseFloat(e));
  }
  function Je(e, t, n) {
    var i,
      r,
      o = e.style;
    return (
      (n = n || Be(e)) &&
        ("" !== (r = n.getPropertyValue(t) || n[t]) ||
          E(e) ||
          (r = C.style(e, t)),
        !g.pixelBoxStyles() &&
          Ge.test(r) &&
          Ke.test(t) &&
          ((e = o.width),
          (t = o.minWidth),
          (i = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = r),
          (r = n.width),
          (o.width = e),
          (o.minWidth = t),
          (o.maxWidth = i))),
      void 0 !== r ? r + "" : r
    );
  }
  function Ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (Ve = x.createElement("div")),
    (r = x.createElement("div")).style &&
      ((r.style.backgroundClip = "content-box"),
      (r.cloneNode(!0).style.backgroundClip = ""),
      (g.clearCloneStyle = "content-box" === r.style.backgroundClip),
      C.extend(g, {
        boxSizingReliable: function () {
          return Qe(), qe;
        },
        pixelBoxStyles: function () {
          return Qe(), We;
        },
        pixelPosition: function () {
          return Qe(), Re;
        },
        reliableMarginLeft: function () {
          return Qe(), Ye;
        },
        scrollboxSize: function () {
          return Qe(), Ue;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return (
            null == ze &&
              ((e = x.createElement("table")),
              (t = x.createElement("tr")),
              (n = x.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              T.appendChild(e).appendChild(t).appendChild(n),
              (n = _.getComputedStyle(t)),
              (ze =
                parseInt(n.height, 10) +
                  parseInt(n.borderTopWidth, 10) +
                  parseInt(n.borderBottomWidth, 10) ===
                t.offsetHeight),
              T.removeChild(e)),
            ze
          );
        },
      }));
  var et = ["Webkit", "Moz", "ms"],
    tt = x.createElement("div").style,
    nt = {};
  function it(e) {
    var t = C.cssProps[e] || nt[e];
    return (
      t ||
      (e in tt
        ? e
        : (nt[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = et.length;
                n--;

              )
                if ((e = et[n] + t) in tt) return e;
            })(e) || e))
    );
  }
  var rt = /^(none|table(?!-c[ea]).+)/,
    ot = /^--/,
    at = { position: "absolute", visibility: "hidden", display: "block" },
    st = { letterSpacing: "0", fontWeight: "400" };
  function lt(e, t, n) {
    var i = ve.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function ct(e, t, n, i, r, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += C.css(e, n + h[a], !0, r)),
        i
          ? ("content" === n && (l -= C.css(e, "padding" + h[a], !0, r)),
            "margin" !== n && (l -= C.css(e, "border" + h[a] + "Width", !0, r)))
          : ((l += C.css(e, "padding" + h[a], !0, r)),
            "padding" !== n
              ? (l += C.css(e, "border" + h[a] + "Width", !0, r))
              : (s += C.css(e, "border" + h[a] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function ut(e, t, n) {
    var i = Be(e),
      r =
        (!g.boxSizingReliable() || n) &&
        "border-box" === C.css(e, "boxSizing", !1, i),
      o = r,
      a = Je(e, t, i),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ge.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!g.boxSizingReliable() && r) ||
        (!g.reliableTrDimensions() && l(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === C.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        ct(e, t, n || (r ? "border" : "content"), o, i, a) +
        "px"
    );
  }
  function o(e, t, n, i, r) {
    return new o.prototype.init(e, t, n, i, r);
  }
  C.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (t = Je(e, "opacity")) ? "1" : t;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = y(t),
          l = ot.test(t),
          c = e.style;
        if (
          (l || (t = it(s)), (a = C.cssHooks[t] || C.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
        "string" === (o = typeof n) &&
          (r = ve.exec(n)) &&
          r[1] &&
          ((n = ye(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (C.cssNumber[s] ? "" : "px")),
            g.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o = y(t);
      return (
        ot.test(t) || (t = it(o)),
        "normal" ===
          (r =
            void 0 ===
            (r =
              (o = C.cssHooks[t] || C.cssHooks[o]) && "get" in o
                ? o.get(e, !0, n)
                : r)
              ? Je(e, t, i)
              : r) &&
          t in st &&
          (r = st[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    C.each(["height", "width"], function (e, a) {
      C.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !rt.test(C.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ut(e, a, n)
              : je(e, at, function () {
                  return ut(e, a, n);
                });
        },
        set: function (e, t, n) {
          var i = Be(e),
            r = !g.scrollboxSize() && "absolute" === i.position,
            o = (r || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            n = n ? ct(e, a, n, o, i) : 0;
          return (
            o &&
              r &&
              (n -= Math.ceil(
                e["offset" + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(i[a]) -
                  ct(e, a, "border", !1, i) -
                  0.5
              )),
            n &&
              (o = ve.exec(t)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[a] = t), (t = C.css(e, a))),
            lt(0, t, n)
          );
        },
      };
    }),
    (C.cssHooks.marginLeft = Ze(g.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Je(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              je(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
      (C.cssHooks[r + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[r + h[t] + o] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        "margin" !== r && (C.cssHooks[r + o].set = lt);
    }),
    C.fn.extend({
      css: function (e, t) {
        return d(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Be(e), r = t.length; a < r; a++)
                o[t[a]] = C.css(e, t[a], !1, i);
              return o;
            }
            return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((C.Tween = o).prototype = {
      constructor: o,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || C.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (C.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = o.propHooks[this.prop];
        return (e && e.get ? e : o.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = o.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                C.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : o.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = o.prototype),
    ((o.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = C.css(e.elem, e.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (e) {
          C.fx.step[e.prop]
            ? C.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!C.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : C.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = o.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (C.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (C.fx = o.prototype.init),
    (C.fx.step = {});
  var A,
    dt,
    a,
    $,
    ht = /^(?:toggle|show|hide)$/,
    ft = /queueHooks$/;
  function pt() {
    dt &&
      (!1 === x.hidden && _.requestAnimationFrame
        ? _.requestAnimationFrame(pt)
        : _.setTimeout(pt, C.fx.interval),
      C.fx.tick());
  }
  function mt() {
    return (
      _.setTimeout(function () {
        A = void 0;
      }),
      (A = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = h[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function vt(e, t, n) {
    for (
      var i,
        r = (O.tweeners[t] || []).concat(O.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function O(r, e, t) {
    var n,
      o,
      i,
      a,
      s,
      l,
      c,
      u = 0,
      d = O.prefilters.length,
      h = C.Deferred().always(function () {
        delete f.elem;
      }),
      f = function () {
        if (o) return !1;
        for (
          var e = A || mt(),
            e = Math.max(0, p.startTime + p.duration - e),
            t = 1 - (e / p.duration || 0),
            n = 0,
            i = p.tweens.length;
          n < i;
          n++
        )
          p.tweens[n].run(t);
        return (
          h.notifyWith(r, [p, t, e]),
          t < 1 && i
            ? e
            : (i || h.notifyWith(r, [p, 1, 0]), h.resolveWith(r, [p]), !1)
        );
      },
      p = h.promise({
        elem: r,
        props: C.extend({}, e),
        opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: A || mt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          t = C.Tween(
            r,
            p.opts,
            e,
            t,
            p.opts.specialEasing[e] || p.opts.easing
          );
          return p.tweens.push(t), t;
        },
        stop: function (e) {
          var t = 0,
            n = e ? p.tweens.length : 0;
          if (o) return this;
          for (o = !0; t < n; t++) p.tweens[t].run(1);
          return (
            e
              ? (h.notifyWith(r, [p, 1, 0]), h.resolveWith(r, [p, e]))
              : h.rejectWith(r, [p, e]),
            this
          );
        },
      }),
      m = p.props,
      g = m,
      v = p.opts.specialEasing;
    for (i in g)
      if (
        ((s = v[(a = y(i))]),
        (l = g[i]),
        Array.isArray(l) && ((s = l[1]), (l = g[i] = l[0])),
        i !== a && ((g[a] = l), delete g[i]),
        (c = C.cssHooks[a]) && "expand" in c)
      )
        for (i in ((l = c.expand(l)), delete g[a], l))
          i in g || ((g[i] = l[i]), (v[i] = s));
      else v[a] = s;
    for (; u < d; u++)
      if ((n = O.prefilters[u].call(p, r, m, p.opts)))
        return (
          b(n.stop) &&
            (C._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      C.map(m, vt, p),
      b(p.opts.start) && p.opts.start.call(r, p),
      p
        .progress(p.opts.progress)
        .done(p.opts.done, p.opts.complete)
        .fail(p.opts.fail)
        .always(p.opts.always),
      C.fx.timer(C.extend(f, { elem: r, anim: p, queue: p.opts.queue })),
      p
    );
  }
  (C.Animation = C.extend(O, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ye(n.elem, e, ve.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, i = 0, r = (e = b(e) ? ((t = e), ["*"]) : e.match(k)).length;
        i < r;
        i++
      )
        (n = e[i]),
          (O.tweeners[n] = O.tweeners[n] || []),
          O.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          u = "width" in t || "height" in t,
          d = this,
          h = {},
          f = e.style,
          p = e.nodeType && ge(e),
          m = w.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = C._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), ht.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (p ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              p = !0;
            }
            h[i] = (m && m[i]) || C.style(e, i);
          }
        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
          for (i in (u &&
            1 === e.nodeType &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = m && m.display) && (c = w.get(e, "display")),
            "none" === (u = C.css(e, "display")) &&
              (c
                ? (u = c)
                : (S([e], !0),
                  (c = e.style.display || c),
                  (u = C.css(e, "display")),
                  S([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === C.css(e, "float") &&
              (l ||
                (d.done(function () {
                  f.display = c;
                }),
                null == c && ((u = f.display), (c = "none" === u ? "" : u))),
              (f.display = "inline-block"))),
          n.overflow &&
            ((f.overflow = "hidden"),
            d.always(function () {
              (f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (p = m.hidden)
                : (m = w.access(e, "fxshow", { display: c })),
              o && (m.hidden = !p),
              p && S([e], !0),
              d.done(function () {
                for (i in (p || S([e]), w.remove(e, "fxshow"), h))
                  C.style(e, i, h[i]);
              })),
              (l = vt(p ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), p && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? O.prefilters.unshift(e) : O.prefilters.push(e);
    },
  })),
    (C.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? C.extend({}, e)
          : {
              complete: n || (!n && t) || (b(e) && e),
              duration: e,
              easing: (n && t) || (t && !b(t) && t),
            };
      return (
        C.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in C.fx.speeds
              ? (i.duration = C.fx.speeds[i.duration])
              : (i.duration = C.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
        }),
        i
      );
    }),
    C.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ge)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        function r() {
          var e = O(this, C.extend({}, t), a);
          (o || w.get(this, "finish")) && e.stop(!0);
        }
        var o = C.isEmptyObject(t),
          a = C.speed(e, n, i);
        return (
          (r.finish = r),
          o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
        );
      },
      stop: function (r, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof r && ((o = e), (e = r), (r = void 0)),
          e && this.queue(r || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != r && r + "queueHooks",
              n = C.timers,
              i = w.get(this);
            if (t) i[t] && i[t].stop && a(i[t]);
            else for (t in i) i[t] && i[t].stop && ft.test(t) && a(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != r && n[t].queue !== r) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || C.dequeue(this, r);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = w.get(this),
              n = t[a + "queue"],
              i = t[a + "queueHooks"],
              r = C.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                C.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === a &&
                (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    C.each(["toggle", "show", "hide"], function (e, i) {
      var r = C.fn[i];
      C.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? r.apply(this, arguments)
          : this.animate(gt(i, !0), e, t, n);
      };
    }),
    C.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        C.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (C.timers = []),
    (C.fx.tick = function () {
      var e,
        t = 0,
        n = C.timers;
      for (A = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || C.fx.stop(), (A = void 0);
    }),
    (C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }),
    (C.fx.interval = 13),
    (C.fx.start = function () {
      dt || ((dt = !0), pt());
    }),
    (C.fx.stop = function () {
      dt = null;
    }),
    (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (C.fn.delay = function (i, e) {
      return (
        (i = (C.fx && C.fx.speeds[i]) || i),
        this.queue((e = e || "fx"), function (e, t) {
          var n = _.setTimeout(e, i);
          t.stop = function () {
            _.clearTimeout(n);
          };
        })
      );
    }),
    (a = x.createElement("input")),
    ($ = x.createElement("select").appendChild(x.createElement("option"))),
    (a.type = "checkbox"),
    (g.checkOn = "" !== a.value),
    (g.optSelected = $.selected),
    ((a = x.createElement("input")).value = "t"),
    (a.type = "radio"),
    (g.radioValue = "t" === a.value);
  var bt,
    yt = C.expr.attrHandle,
    wt =
      (C.fn.extend({
        attr: function (e, t) {
          return d(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
      C.extend({
        attr: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === e.getAttribute
              ? C.prop(e, t, n)
              : ((1 === o && C.isXMLDoc(e)) ||
                  (r =
                    C.attrHooks[t.toLowerCase()] ||
                    (C.expr.match.bool.test(t) ? bt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void C.removeAttr(e, t)
                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : !(r && "get" in r && null !== (i = r.get(e, t))) &&
                    null == (i = C.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              var n;
              if (!g.radioValue && "radio" === t && l(e, "input"))
                return (
                  (n = e.value),
                  e.setAttribute("type", t),
                  n && (e.value = n),
                  t
                );
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            r = t && t.match(k);
          if (r && 1 === e.nodeType)
            for (; (n = r[i++]); ) e.removeAttribute(n);
        },
      }),
      (bt = {
        set: function (e, t, n) {
          return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = yt[t] || C.find.attr;
        yt[t] = function (e, t, n) {
          var i,
            r,
            o = t.toLowerCase();
          return (
            n ||
              ((r = yt[o]),
              (yt[o] = i),
              (i = null != a(e, t, n) ? o : null),
              (yt[o] = r)),
            i
          );
        };
      }),
      /^(?:input|select|textarea|button)$/i),
    _t = /^(?:a|area)$/i;
  function P(e) {
    return (e.match(k) || []).join(" ");
  }
  function M(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(k)) || [];
  }
  C.fn.extend({
    prop: function (e, t) {
      return d(this, C.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[C.propFix[e] || e];
      });
    },
  }),
    C.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && C.isXMLDoc(e)) ||
              ((t = C.propFix[t] || t), (r = C.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = C.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wt.test(e.nodeName) || (_t.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    g.optSelected ||
      (C.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    C.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        C.propFix[this.toLowerCase()] = this;
      }
    ),
    C.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s = 0;
        if (b(t))
          return this.each(function (e) {
            C(this).addClass(t.call(this, e, M(this)));
          });
        if ((e = xt(t)).length)
          for (; (n = this[s++]); )
            if (((a = M(n)), (i = 1 === n.nodeType && " " + P(a) + " "))) {
              for (o = 0; (r = e[o++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              a !== (a = P(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s = 0;
        if (b(t))
          return this.each(function (e) {
            C(this).removeClass(t.call(this, e, M(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = xt(t)).length)
          for (; (n = this[s++]); )
            if (((a = M(n)), (i = 1 === n.nodeType && " " + P(a) + " "))) {
              for (o = 0; (r = e[o++]); )
                for (; -1 < i.indexOf(" " + r + " "); )
                  i = i.replace(" " + r + " ", " ");
              a !== (a = P(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (r, t) {
        var o = typeof r,
          a = "string" == o || Array.isArray(r);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(r)
            : this.removeClass(r)
          : b(r)
          ? this.each(function (e) {
              C(this).toggleClass(r.call(this, e, M(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if (a)
                for (t = 0, n = C(this), i = xt(r); (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== r && "boolean" != o) ||
                  ((e = M(this)) && w.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== r && w.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (" " + P(M(t)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  function Ct(e) {
    e.stopPropagation();
  }
  var kt = /\r/g,
    Tt =
      (C.fn.extend({
        val: function (t) {
          var n,
            e,
            i,
            r = this[0];
          return arguments.length
            ? ((i = b(t)),
              this.each(function (e) {
                1 === this.nodeType &&
                  (null == (e = i ? t.call(this, e, C(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : Array.isArray(e) &&
                      (e = C.map(e, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((n =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n &&
                    void 0 !== n.set(this, e, "value")) ||
                    (this.value = e));
              }))
            : r
            ? (n =
                C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in n &&
              void 0 !== (e = n.get(r, "value"))
              ? e
              : "string" == typeof (e = r.value)
              ? e.replace(kt, "")
              : null == e
              ? ""
              : e
            : void 0;
        },
      }),
      C.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = C.find.attr(e, "value");
              return null != t ? t : P(C.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n = e.options,
                  i = e.selectedIndex,
                  r = "select-one" === e.type,
                  o = r ? null : [],
                  a = r ? i + 1 : n.length,
                  s = i < 0 ? a : r ? i : 0;
                s < a;
                s++
              )
                if (
                  ((t = n[s]).selected || s === i) &&
                  !t.disabled &&
                  (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))
                ) {
                  if (((t = C(t).val()), r)) return t;
                  o.push(t);
                }
              return o;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, o = C.makeArray(t), a = r.length;
                a--;

              )
                ((i = r[a]).selected =
                  -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      C.each(["radio", "checkbox"], function () {
        (C.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < C.inArray(C(e).val(), t));
          },
        }),
          g.checkOn ||
            (C.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (g.focusin = "onfocusin" in _),
      /^(?:focusinfocus|focusoutblur)$/),
    Et =
      (C.extend(C.event, {
        trigger: function (e, t, n, i) {
          var r,
            o,
            a,
            s,
            l,
            c,
            u,
            d = [n || x],
            h = U.call(e, "type") ? e.type : e,
            f = U.call(e, "namespace") ? e.namespace.split(".") : [],
            p = (u = o = n = n || x);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Tt.test(h + C.event.triggered) &&
            (-1 < h.indexOf(".") &&
              ((h = (f = h.split(".")).shift()), f.sort()),
            (s = h.indexOf(":") < 0 && "on" + h),
            ((e = e[C.expando]
              ? e
              : new C.Event(h, "object" == typeof e && e)).isTrigger = i
              ? 2
              : 3),
            (e.namespace = f.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : C.makeArray(t, [e])),
            (c = C.event.special[h] || {}),
            i || !c.trigger || !1 !== c.trigger.apply(n, t))
          ) {
            if (!i && !c.noBubble && !m(n)) {
              for (
                a = c.delegateType || h, Tt.test(a + h) || (p = p.parentNode);
                p;
                p = p.parentNode
              )
                d.push(p), (o = p);
              o === (n.ownerDocument || x) &&
                d.push(o.defaultView || o.parentWindow || _);
            }
            for (r = 0; (p = d[r++]) && !e.isPropagationStopped(); )
              (u = p),
                (e.type = 1 < r ? a : c.bindType || h),
                (l =
                  (w.get(p, "events") || Object.create(null))[e.type] &&
                  w.get(p, "handle")) && l.apply(p, t),
                (l = s && p[s]) &&
                  l.apply &&
                  v(p) &&
                  ((e.result = l.apply(p, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = h),
              i ||
                e.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                !v(n) ||
                (s &&
                  b(n[h]) &&
                  !m(n) &&
                  ((o = n[s]) && (n[s] = null),
                  (C.event.triggered = h),
                  e.isPropagationStopped() && u.addEventListener(h, Ct),
                  n[h](),
                  e.isPropagationStopped() && u.removeEventListener(h, Ct),
                  (C.event.triggered = void 0),
                  o && (n[s] = o))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          n = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(n, null, t);
        },
      }),
      C.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            C.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return C.event.trigger(e, t, n, !0);
        },
      }),
      g.focusin ||
        C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
          function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e));
          }
          C.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = w.access(e, i);
              t || e.addEventListener(n, r, !0), w.access(e, i, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = w.access(e, i) - 1;
              t
                ? w.access(e, i, t)
                : (e.removeEventListener(n, r, !0), w.remove(e, i));
            },
          };
        }),
      _.location),
    St = { guid: Date.now() },
    It = /\?/,
    Lt =
      ((C.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          t = new _.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (t && !n) ||
            C.error(
              "Invalid XML: " +
                (n
                  ? C.map(n.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      }),
      /\[\]$/),
    Dt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    $t = /^(?:input|select|textarea|keygen)/i;
  (C.param = function (e, t) {
    function n(e, t) {
      (t = b(t) ? t() : t),
        (r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
    }
    var i,
      r = [];
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
      C.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (i in e)
        !(function n(i, e, r, o) {
          if (Array.isArray(e))
            C.each(e, function (e, t) {
              r || Lt.test(i)
                ? o(i, t)
                : n(
                    i +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    r,
                    o
                  );
            });
          else if (r || "object" !== p(e)) o(i, e);
          else for (var t in e) n(i + "[" + t + "]", e[t], r, o);
        })(i, e[i], t, n);
    return r.join("&");
  }),
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !C(this).is(":disabled") &&
              $t.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !_e.test(e))
            );
          })
          .map(function (e, t) {
            var n = C(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? C.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var Ot = /%20/g,
    Pt = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Bt = {},
    jt = {},
    Rt = "*/".concat("*"),
    qt = x.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        r = e.toLowerCase().match(k) || [];
      if (b(t))
        for (; (n = r[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, r, o) {
    var a = {},
      s = t === jt;
    function l(e) {
      var n;
      return (
        (a[e] = !0),
        C.each(t[e] || [], function (e, t) {
          t = t(i, r, o);
          return "string" != typeof t || s || a[t]
            ? s
              ? !(n = t)
              : void 0
            : (i.dataTypes.unshift(t), l(t), !1);
        }),
        n
      );
    }
    return l(i.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      i,
      r = C.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
    return i && C.extend(!0, e, i), e;
  }
  (qt.href = Et.href),
    C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": C.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(jt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var l,
          c,
          u,
          n,
          d,
          h,
          f,
          i,
          p = C.ajaxSetup({}, (t = t || {})),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? C(m) : C.event,
          v = C.Deferred(),
          b = C.Callbacks("once memory"),
          y = p.statusCode || {},
          r = {},
          o = {},
          a = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = Nt.exec(u)); )
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? u : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = o[e.toLowerCase()] = o[e.toLowerCase()] || e),
                  (r[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (h) w.always(e[w.status]);
                else for (var t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || a;
              return l && l.abort(e), s(0, e), this;
            },
          };
        if (
          (v.promise(w),
          (p.url = ((e || p.url || Et.href) + "").replace(
            Ht,
            Et.protocol + "//"
          )),
          (p.type = t.method || t.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(k) || [""]),
          null == p.crossDomain)
        ) {
          e = x.createElement("a");
          try {
            (e.href = p.url),
              (e.href = e.href),
              (p.crossDomain =
                qt.protocol + "//" + qt.host != e.protocol + "//" + e.host);
          } catch (e) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = C.param(p.data, p.traditional)),
          Wt(Bt, p, t, w),
          h)
        )
          return w;
        for (i in ((f = C.event && p.global) &&
          0 == C.active++ &&
          C.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Ft.test(p.type)),
        (c = p.url.replace(Pt, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(Ot, "+"))
          : ((e = p.url.slice(c.length)),
            p.data &&
              (p.processData || "string" == typeof p.data) &&
              ((c += (It.test(c) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((c = c.replace(Mt, "$1")),
              (e = (It.test(c) ? "&" : "?") + "_=" + St.guid++ + e)),
            (p.url = c + e)),
        p.ifModified &&
          (C.lastModified[c] &&
            w.setRequestHeader("If-Modified-Since", C.lastModified[c]),
          C.etag[c] && w.setRequestHeader("If-None-Match", C.etag[c])),
        ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", p.contentType),
        w.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          w.setRequestHeader(i, p.headers[i]);
        if (p.beforeSend && (!1 === p.beforeSend.call(m, w, p) || h))
          return w.abort();
        if (
          ((a = "abort"),
          b.add(p.complete),
          w.done(p.success),
          w.fail(p.error),
          (l = Wt(jt, p, t, w)))
        ) {
          if (((w.readyState = 1), f && g.trigger("ajaxSend", [w, p]), h))
            return w;
          p.async &&
            0 < p.timeout &&
            (d = _.setTimeout(function () {
              w.abort("timeout");
            }, p.timeout));
          try {
            (h = !1), l.send(r, s);
          } catch (e) {
            if (h) throw e;
            s(-1, e);
          }
        } else s(-1, "No Transport");
        function s(e, t, n, i) {
          var r,
            o,
            a,
            s = t;
          h ||
            ((h = !0),
            d && _.clearTimeout(d),
            (l = void 0),
            (u = i || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var i, r, o, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in s)
                    if (s[r] && s[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    a = a || r;
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(p, w, n)),
            !i &&
              -1 < C.inArray("script", p.dataTypes) &&
              C.inArray("json", p.dataTypes) < 0 &&
              (p.converters["text script"] = function () {}),
            (a = (function (e, t, n, i) {
              var r,
                o,
                a,
                s,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = c[l + " " + o] || c["* " + o]))
                      for (r in c)
                        if (
                          (s = r.split(" "))[1] === o &&
                          (a = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = c[r])
                            : !0 !== c[r] && ((o = s[0]), u.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(p, a, w, i)),
            i
              ? (p.ifModified &&
                  ((n = w.getResponseHeader("Last-Modified")) &&
                    (C.lastModified[c] = n),
                  (n = w.getResponseHeader("etag")) && (C.etag[c] = n)),
                204 === e || "HEAD" === p.type
                  ? (s = "nocontent")
                  : 304 === e
                  ? (s = "notmodified")
                  : ((s = a.state), (r = a.data), (i = !(o = a.error))))
              : ((o = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || s) + ""),
            i ? v.resolveWith(m, [r, s, w]) : v.rejectWith(m, [w, s, o]),
            w.statusCode(y),
            (y = void 0),
            f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? r : o]),
            b.fireWith(m, [w, s]),
            f &&
              (g.trigger("ajaxComplete", [w, p]),
              --C.active || C.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (e, t, n) {
        return C.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return C.get(e, void 0, t, "script");
      },
    }),
    C.each(["get", "post"], function (e, r) {
      C[r] = function (e, t, n, i) {
        return (
          b(t) && ((i = i || n), (n = t), (t = void 0)),
          C.ajax(
            C.extend(
              { url: e, type: r, dataType: i, data: t, success: n },
              C.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    C.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (C._evalUrl = function (e, t, n) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          C.globalEval(e, t, n);
        },
      });
    }),
    C.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (b(e) && (e = e.call(this[0])),
            (e = C(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return b(n)
          ? this.each(function (e) {
              C(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = C(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = b(t);
        return this.each(function (e) {
          C(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              C(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }),
    (C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (C.ajaxSettings.xhr = function () {
      try {
        return new _.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Vt = C.ajaxSettings.xhr(),
    Gt =
      ((g.cors = !!Vt && "withCredentials" in Vt),
      (g.ajax = Vt = !!Vt),
      C.ajaxTransport(function (r) {
        var o, a;
        if (g.cors || (Vt && !r.crossDomain))
          return {
            send: function (e, t) {
              var n,
                i = r.xhr();
              if (
                (i.open(r.type, r.url, r.async, r.username, r.password),
                r.xhrFields)
              )
                for (n in r.xhrFields) i[n] = r.xhrFields[n];
              for (n in (r.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(r.mimeType),
              r.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                i.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      a =
                      i.onload =
                      i.onerror =
                      i.onabort =
                      i.ontimeout =
                      i.onreadystatechange =
                        null),
                    "abort" === e
                      ? i.abort()
                      : "error" === e
                      ? "number" != typeof i.status
                        ? t(0, "error")
                        : t(i.status, i.statusText)
                      : t(
                          Yt[i.status] || i.status,
                          i.statusText,
                          "text" !== (i.responseType || "text") ||
                            "string" != typeof i.responseText
                            ? { binary: i.response }
                            : { text: i.responseText },
                          i.getAllResponseHeaders()
                        ));
                };
              }),
                (i.onload = o()),
                (a = i.onerror = i.ontimeout = o("error")),
                void 0 !== i.onabort
                  ? (i.onabort = a)
                  : (i.onreadystatechange = function () {
                      4 === i.readyState &&
                        _.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                i.send((r.hasContent && r.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      C.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      C.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return C.globalEval(e), e;
          },
        },
      }),
      C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      C.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (i = C("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (r = function (e) {
                    i.remove(),
                      (r = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                x.head.appendChild(i[0]);
            },
            abort: function () {
              r && r();
            },
          };
      }),
      []),
    Kt = /(=)\?(?=&|$)|\?\?/,
    Qt =
      (C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || C.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
      C.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i,
          r,
          o,
          a =
            !1 !== e.jsonp &&
            (Kt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Kt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (i = e.jsonpCallback =
              b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Kt, "$1" + i))
              : !1 !== e.jsonp &&
                (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            (e.converters["script json"] = function () {
              return o || C.error(i + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (r = _[i]),
            (_[i] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === r ? C(_).removeProp(i) : (_[i] = r),
                e[i] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(i)),
                o && b(r) && r(o[0]),
                (o = r = void 0);
            }),
            "script"
          );
      }),
      (g.createHTMLDocument =
        (((e = x.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === e.childNodes.length)),
      (C.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (g.createHTMLDocument
                ? (((i = (t =
                    x.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = x.location.href),
                  t.head.appendChild(i))
                : (t = x)),
            (i = !n && []),
            (n = X.exec(e))
              ? [t.createElement(n[1])]
              : ((n = Ee([e], t, i)),
                i && i.length && C(i).remove(),
                C.merge([], n.childNodes)));
        var i;
      }),
      (C.fn.load = function (e, t, n) {
        var i,
          r,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((i = P(e.slice(s))), (e = e.slice(0, s))),
          b(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (r = "POST"),
          0 < a.length &&
            C.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (C.expr.pseudos.animated = function (t) {
        return C.grep(C.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (C.offset = {
        setOffset: function (e, t, n) {
          var i,
            r,
            o,
            a,
            s = C.css(e, "position"),
            l = C(e),
            c = {};
          "static" === s && (e.style.position = "relative"),
            (o = l.offset()),
            (i = C.css(e, "top")),
            (a = C.css(e, "left")),
            (s =
              ("absolute" === s || "fixed" === s) &&
              -1 < (i + a).indexOf("auto")
                ? ((r = (s = l.position()).top), s.left)
                : ((r = parseFloat(i) || 0), parseFloat(a) || 0)),
            null != (t = b(t) ? t.call(e, n, C.extend({}, o)) : t).top &&
              (c.top = t.top - o.top + r),
            null != t.left && (c.left = t.left - o.left + s),
            "using" in t ? t.using.call(e, c) : l.css(c);
        },
      }),
      C.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  C.offset.setOffset(this, t, e);
                });
          var e,
            n = this[0];
          return n
            ? n.getClientRects().length
              ? ((e = n.getBoundingClientRect()),
                (n = n.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              r = { top: 0, left: 0 };
            if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = i.ownerDocument,
                  e = i.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === C.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                (((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                (r.left += C.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - r.top - C.css(i, "marginTop", !0),
              left: t.left - r.left - C.css(i, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === C.css(e, "position");

            )
              e = e.offsetParent;
            return e || T;
          });
        },
      }),
      C.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, r) {
          var o = "pageYOffset" === r;
          C.fn[t] = function (e) {
            return d(
              this,
              function (e, t, n) {
                var i;
                if (
                  (m(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                  void 0 === n)
                )
                  return i ? i[r] : e[t];
                i
                  ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      C.each(["top", "left"], function (e, n) {
        C.cssHooks[n] = Ze(g.pixelPosition, function (e, t) {
          if (t)
            return (t = Je(e, n)), Ge.test(t) ? C(e).position()[n] + "px" : t;
        });
      }),
      C.each({ Height: "height", Width: "width" }, function (a, s) {
        C.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (i, o) {
            C.fn[o] = function (e, t) {
              var n = arguments.length && (i || "boolean" != typeof e),
                r = i || (!0 === e || !0 === t ? "margin" : "border");
              return d(
                this,
                function (e, t, n) {
                  var i;
                  return m(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        i["scroll" + a],
                        e.body["offset" + a],
                        i["offset" + a],
                        i["client" + a]
                      ))
                    : void 0 === n
                    ? C.css(e, t, r)
                    : C.style(e, t, n, r);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      C.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          C.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      C.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      C.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          C.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      ),
      /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
    Xt =
      ((C.proxy = function (e, t) {
        var n, i;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), b(e)))
          return (
            (n = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, n.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            i
          );
      }),
      (C.holdReady = function (e) {
        e ? C.readyWait++ : C.ready(!0);
      }),
      (C.isArray = Array.isArray),
      (C.parseJSON = JSON.parse),
      (C.nodeName = l),
      (C.isFunction = b),
      (C.isWindow = m),
      (C.camelCase = y),
      (C.type = p),
      (C.now = Date.now),
      (C.isNumeric = function (e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (C.trim = function (e) {
        return null == e ? "" : (e + "").replace(Qt, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return C;
        }),
      _.jQuery),
    Jt = _.$;
  return (
    (C.noConflict = function (e) {
      return _.$ === C && (_.$ = Jt), e && _.jQuery === C && (_.jQuery = Xt), C;
    }),
    void 0 === N && (_.jQuery = _.$ = C),
    C
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    "use strict";
    var n =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator,
      N = (function () {
        for (
          var e = ["Edge", "Trident", "Firefox"], t = 0;
          t < e.length;
          t += 1
        )
          if (n && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
      })();
    var F =
      n && window.Promise
        ? function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  (t = !1), e();
                }));
            };
          }
        : function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), e();
                }, N));
            };
          };
    function a(e) {
      return e && "[object Function]" === {}.toString.call(e);
    }
    function d(e, t) {
      if (1 !== e.nodeType) return [];
      e = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? e[t] : e;
    }
    function l(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function u(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var t = d(e),
        n = t.overflow,
        i = t.overflowX,
        t = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + t + i) ? e : u(l(e));
    }
    function c(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    var t = n && !(!window.MSInputMethodContext || !document.documentMode),
      H = n && /MSIE 10/.test(navigator.userAgent);
    function h(e) {
      return 11 === e ? t : (10 !== e && t) || H;
    }
    function f(e) {
      if (!e) return document.documentElement;
      for (
        var t = h(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === d(n, "position")
          ? f(n)
          : n
        : (e ? e.ownerDocument : document).documentElement;
    }
    function o(e) {
      return null !== e.parentNode ? o(e.parentNode) : e;
    }
    function p(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        n = n ? t : e,
        r = document.createRange(),
        r = (r.setStart(i, 0), r.setEnd(n, 0), r.commonAncestorContainer);
      if ((e !== r && t !== r) || i.contains(n))
        return "BODY" === (n = (i = r).nodeName) ||
          ("HTML" !== n && f(i.firstElementChild) !== i)
          ? f(r)
          : r;
      n = o(e);
      return n.host ? p(n.host, t) : p(e, o(t).host);
    }
    function m(e, t) {
      var t =
          "top" === (1 < arguments.length && void 0 !== t ? t : "top")
            ? "scrollTop"
            : "scrollLeft",
        n = e.nodeName;
      return "BODY" === n || "HTML" === n
        ? ((n = e.ownerDocument.documentElement),
          (e.ownerDocument.scrollingElement || n)[t])
        : e[t];
    }
    function r(e, t) {
      var t = "x" === t ? "Left" : "Top",
        n = "Left" == t ? "Right" : "Bottom";
      return (
        parseFloat(e["border" + t + "Width"]) +
        parseFloat(e["border" + n + "Width"])
      );
    }
    function i(e, t, n, i) {
      return Math.max(
        t["offset" + e],
        t["scroll" + e],
        n["client" + e],
        n["offset" + e],
        n["scroll" + e],
        h(10)
          ? parseInt(n["offset" + e]) +
              parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
              parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
          : 0
      );
    }
    function g(e) {
      var t = e.body,
        e = e.documentElement,
        n = h(10) && getComputedStyle(e);
      return { height: i("Height", t, e, n), width: i("Width", t, e, n) };
    }
    var e = function (e, t, n) {
      return t && s(e.prototype, t), n && s(e, n), e;
    };
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function v(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var b =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            i = arguments[t];
          for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      };
    function y(e) {
      return b({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function w(e) {
      var t = {};
      try {
        h(10)
          ? ((t = e.getBoundingClientRect()),
            (n = m(e, "top")),
            (i = m(e, "left")),
            (t.top += n),
            (t.left += i),
            (t.bottom += n),
            (t.right += i))
          : (t = e.getBoundingClientRect());
      } catch (e) {}
      var n = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top,
        },
        i = "HTML" === e.nodeName ? g(e.ownerDocument) : {},
        t = i.width || e.clientWidth || n.width,
        i = i.height || e.clientHeight || n.height,
        t = e.offsetWidth - t,
        i = e.offsetHeight - i;
      return (
        (t || i) &&
          ((t -= r((e = d(e)), "x")),
          (i -= r(e, "y")),
          (n.width -= t),
          (n.height -= i)),
        y(n)
      );
    }
    function _(e, t, n) {
      var n = 2 < arguments.length && void 0 !== n && n,
        i = h(10),
        r = "HTML" === t.nodeName,
        o = w(e),
        a = w(t),
        e = u(e),
        s = d(t),
        l = parseFloat(s.borderTopWidth),
        c = parseFloat(s.borderLeftWidth),
        a =
          (n &&
            r &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0))),
          y({
            top: o.top - a.top - l,
            left: o.left - a.left - c,
            width: o.width,
            height: o.height,
          }));
      return (
        (a.marginTop = 0),
        (a.marginLeft = 0),
        !i &&
          r &&
          ((o = parseFloat(s.marginTop)),
          (r = parseFloat(s.marginLeft)),
          (a.top -= l - o),
          (a.bottom -= l - o),
          (a.left -= c - r),
          (a.right -= c - r),
          (a.marginTop = o),
          (a.marginLeft = r)),
        (a = (i && !n ? t.contains(e) : t === e && "BODY" !== e.nodeName)
          ? (function (e, t, n) {
              var n = 2 < arguments.length && void 0 !== n && n,
                i = m(t, "top"),
                t = m(t, "left"),
                n = n ? -1 : 1;
              return (
                (e.top += i * n),
                (e.bottom += i * n),
                (e.left += t * n),
                (e.right += t * n),
                e
              );
            })(a, t)
          : a)
      );
    }
    function x(e) {
      if (!e || !e.parentElement || h()) return document.documentElement;
      for (var t = e.parentElement; t && "none" === d(t, "transform"); )
        t = t.parentElement;
      return t || document.documentElement;
    }
    function C(e, t, n, i, r) {
      var o,
        r = 4 < arguments.length && void 0 !== r && r,
        a = { top: 0, left: 0 },
        s = r ? x(e) : p(e, c(t)),
        s =
          ("viewport" === i
            ? (a = (function (e, t) {
                var t = 1 < arguments.length && void 0 !== t && t,
                  n = e.ownerDocument.documentElement,
                  e = _(e, n),
                  i = Math.max(n.clientWidth, window.innerWidth || 0),
                  r = Math.max(n.clientHeight, window.innerHeight || 0),
                  o = t ? 0 : m(n),
                  t = t ? 0 : m(n, "left");
                return y({
                  top: o - e.top + e.marginTop,
                  left: t - e.left + e.marginLeft,
                  width: i,
                  height: r,
                });
              })(s, r))
            : ((o = void 0),
              "scrollParent" === i
                ? "BODY" === (o = u(l(t))).nodeName &&
                  (o = e.ownerDocument.documentElement)
                : (o = "window" === i ? e.ownerDocument.documentElement : i),
              (t = _(o, s, r)),
              "HTML" !== o.nodeName ||
              (function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n) return !1;
                if ("fixed" === d(t, "position")) return !0;
                n = l(t);
                return !!n && e(n);
              })(s)
                ? (a = t)
                : ((r = (i = g(e.ownerDocument)).height),
                  (o = i.width),
                  (a.top += t.top - t.marginTop),
                  (a.bottom = r + t.top),
                  (a.left += t.left - t.marginLeft),
                  (a.right = o + t.left))),
          "number" == typeof (n = n || 0));
      return (
        (a.left += s ? n : n.left || 0),
        (a.top += s ? n : n.top || 0),
        (a.right -= s ? n : n.right || 0),
        (a.bottom -= s ? n : n.bottom || 0),
        a
      );
    }
    function k(e, t, n, i, r, o) {
      o = 5 < arguments.length && void 0 !== o ? o : 0;
      if (-1 === e.indexOf("auto")) return e;
      var i = C(n, i, o, r),
        a = {
          top: { width: i.width, height: t.top - i.top },
          right: { width: i.right - t.right, height: i.height },
          bottom: { width: i.width, height: i.bottom - t.bottom },
          left: { width: t.left - i.left, height: i.height },
        },
        o = Object.keys(a)
          .map(function (e) {
            return b({ key: e }, a[e], { area: (e = a[e]).width * e.height });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        r = o.filter(function (e) {
          var t = e.width,
            e = e.height;
          return t >= n.clientWidth && e >= n.clientHeight;
        }),
        t = (0 < r.length ? r : o)[0].key,
        i = e.split("-")[1];
      return t + (i ? "-" + i : "");
    }
    function T(e, t, n, i) {
      i = 3 < arguments.length && void 0 !== i ? i : null;
      return _(n, i ? x(t) : p(t, c(n)), i);
    }
    function E(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return { width: e.offsetWidth + t, height: e.offsetHeight + n };
    }
    function S(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function I(e, t, n) {
      n = n.split("-")[0];
      var e = E(e),
        i = { width: e.width, height: e.height },
        r = -1 !== ["right", "left"].indexOf(n),
        o = r ? "top" : "left",
        a = r ? "left" : "top",
        s = r ? "height" : "width",
        r = r ? "width" : "height";
      return (
        (i[o] = t[o] + t[s] / 2 - e[s] / 2),
        (i[a] = n === a ? t[a] - e[r] : t[S(a)]),
        i
      );
    }
    function L(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function D(e, n, t) {
      return (
        (void 0 === t
          ? e
          : e.slice(
              0,
              (function (e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function (e) {
                    return e[t] === n;
                  });
                var i = L(e, function (e) {
                  return e[t] === n;
                });
                return e.indexOf(i);
              })(e, "name", t)
            )
        ).forEach(function (e) {
          e.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var t = e.function || e.fn;
          e.enabled &&
            a(t) &&
            ((n.offsets.popper = y(n.offsets.popper)),
            (n.offsets.reference = y(n.offsets.reference)),
            (n = t(n, e)));
        }),
        n
      );
    }
    function B(e, n) {
      return e.some(function (e) {
        var t = e.name;
        return e.enabled && t === n;
      });
    }
    function A(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length;
        i++
      ) {
        var r = t[i],
          r = r ? "" + r + n : e;
        if (void 0 !== document.body.style[r]) return r;
      }
      return null;
    }
    function j(e) {
      e = e.ownerDocument;
      return e ? e.defaultView : window;
    }
    function R(e, t, n, i) {
      (n.updateBound = i),
        j(e).addEventListener("resize", n.updateBound, { passive: !0 });
      i = u(e);
      return (
        (function e(t, n, i, r) {
          var o = "BODY" === t.nodeName,
            t = o ? t.ownerDocument.defaultView : t;
          t.addEventListener(n, i, { passive: !0 }),
            o || e(u(t.parentNode), n, i, r),
            r.push(t);
        })(i, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = i),
        (n.eventsEnabled = !0),
        n
      );
    }
    function q() {
      var e, t;
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((e = this.reference),
          (t = this.state),
          j(e).removeEventListener("resize", t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t)));
    }
    function $(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function O(n, i) {
      Object.keys(i).forEach(function (e) {
        var t = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(e) &&
          $(i[e]) &&
          (t = "px"),
          (n.style[e] = i[e] + t);
      });
    }
    function U(e, t) {
      function n(e) {
        return e;
      }
      var i = e.offsets,
        r = i.popper,
        i = i.reference,
        o = Math.round,
        a = Math.floor,
        i = o(i.width),
        s = o(r.width),
        l = -1 !== ["left", "right"].indexOf(e.placement),
        e = -1 !== e.placement.indexOf("-"),
        l = t ? (l || e || i % 2 == s % 2 ? o : a) : n,
        a = t ? o : n;
      return {
        left: l(i % 2 == 1 && s % 2 == 1 && !e && t ? r.left - 1 : r.left),
        top: a(r.top),
        bottom: a(r.bottom),
        right: l(r.right),
      };
    }
    var W = n && /Firefox/i.test(navigator.userAgent);
    function z(e, t, n) {
      var i,
        r = L(e, function (e) {
          return e.name === t;
        }),
        e =
          !!r &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < r.order;
          });
      return (
        e ||
          ((i = "`" + t + "`"),
          console.warn(
            "`" +
              n +
              "`" +
              " modifier is required by " +
              i +
              " modifier in order to work, be sure to include it before " +
              i +
              "!"
          )),
        e
      );
    }
    var Y = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      P = Y.slice(3);
    function V(e, t) {
      (t = 1 < arguments.length && void 0 !== t && t),
        (e = P.indexOf(e)),
        (e = P.slice(e + 1).concat(P.slice(0, e)));
      return t ? e.reverse() : e;
    }
    var G = "flip",
      K = "clockwise",
      Q = "counterclockwise";
    function X(e, s, l, t) {
      var r = [0, 0],
        i = -1 !== ["right", "left"].indexOf(t),
        t = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        e = t.indexOf(
          L(t, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        ),
        n =
          (t[e] &&
            -1 === t[e].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            ),
          /\s*,\s*|\s+/);
      return (
        (-1 !== e
          ? [
              t.slice(0, e).concat([t[e].split(n)[0]]),
              [t[e].split(n)[1]].concat(t.slice(e + 1)),
            ]
          : [t]
        )
          .map(function (e, t) {
            var a = (1 === t ? !i : i) ? "height" : "width",
              n = !1;
            return e
              .reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                  ? ((e[e.length - 1] = t), (n = !0), e)
                  : n
                  ? ((e[e.length - 1] += t), (n = !1), e)
                  : e.concat(t);
              }, [])
              .map(function (e) {
                return (
                  (t = a),
                  (n = s),
                  (i = l),
                  (r = +(o = (e = e).match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1]),
                  (o = o[2]),
                  r
                    ? 0 === o.indexOf("%")
                      ? (y("%p" === o ? n : i)[t] / 100) * r
                      : "vh" === o || "vw" === o
                      ? (("vh" === o
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        r
                      : r
                    : e
                );
                var t, n, i, r, o;
              });
          })
          .forEach(function (n, i) {
            n.forEach(function (e, t) {
              $(e) && (r[i] += e * ("-" === n[t - 1] ? -1 : 1));
            });
          }),
        r
      );
    }
    var J = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t,
                n,
                i,
                r = e.placement,
                o = r.split("-")[0];
              return (
                (r = r.split("-")[1]) &&
                  ((t = (n = e.offsets).reference),
                  (n = n.popper),
                  (i = (o = -1 !== ["bottom", "top"].indexOf(o))
                    ? "width"
                    : "height"),
                  (o = {
                    start: v({}, (o = o ? "left" : "top"), t[o]),
                    end: v({}, o, t[o] + t[i] - n[i]),
                  }),
                  (e.offsets.popper = b({}, n, o[r]))),
                e
              );
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var t = t.offset,
                n = e.placement,
                i = (r = e.offsets).popper,
                r = r.reference,
                n = n.split("-")[0],
                o = void 0,
                o = $(+t) ? [+t, 0] : X(t, i, r, n);
              return (
                "left" === n
                  ? ((i.top += o[0]), (i.left -= o[1]))
                  : "right" === n
                  ? ((i.top += o[0]), (i.left += o[1]))
                  : "top" === n
                  ? ((i.left += o[0]), (i.top -= o[1]))
                  : "bottom" === n && ((i.left += o[0]), (i.top += o[1])),
                (e.popper = i),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, i) {
              var t = i.boundariesElement || f(e.instance.popper),
                n = (e.instance.reference === t && (t = f(t)), A("transform")),
                r = e.instance.popper.style,
                o = r.top,
                a = r.left,
                s = r[n],
                l =
                  ((r.top = ""),
                  (r.left = ""),
                  (r[n] = ""),
                  C(
                    e.instance.popper,
                    e.instance.reference,
                    i.padding,
                    t,
                    e.positionFixed
                  )),
                t =
                  ((r.top = o),
                  (r.left = a),
                  (r[n] = s),
                  (i.boundaries = l),
                  i.priority),
                c = e.offsets.popper,
                u = {
                  primary: function (e) {
                    var t = c[e];
                    return (
                      c[e] < l[e] &&
                        !i.escapeWithReference &&
                        (t = Math.max(c[e], l[e])),
                      v({}, e, t)
                    );
                  },
                  secondary: function (e) {
                    var t = "right" === e ? "left" : "top",
                      n = c[t];
                    return (
                      c[e] > l[e] &&
                        !i.escapeWithReference &&
                        (n = Math.min(
                          c[t],
                          l[e] - ("right" === e ? c.width : c.height)
                        )),
                      v({}, t, n)
                    );
                  },
                };
              return (
                t.forEach(function (e) {
                  var t =
                    -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  c = b({}, c, u[t](e));
                }),
                (e.offsets.popper = c),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = (n = e.offsets).popper,
                n = n.reference,
                i = e.placement.split("-")[0],
                r = Math.floor,
                o = (i = -1 !== ["top", "bottom"].indexOf(i))
                  ? "right"
                  : "bottom",
                a = i ? "left" : "top",
                i = i ? "width" : "height";
              return (
                t[o] < r(n[a]) && (e.offsets.popper[a] = r(n[a]) - t[i]),
                t[a] > r(n[o]) && (e.offsets.popper[a] = r(n[o])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;
              if ("string" == typeof (t = t.element)) {
                if (!(t = e.instance.popper.querySelector(t))) return e;
              } else if (!e.instance.popper.contains(t))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var n = e.placement.split("-")[0],
                i = (r = e.offsets).popper,
                r = r.reference,
                o = (n = -1 !== ["left", "right"].indexOf(n))
                  ? "height"
                  : "width",
                a = (u = n ? "Top" : "Left").toLowerCase(),
                s = n ? "left" : "top",
                n = n ? "bottom" : "right",
                l = E(t)[o],
                n =
                  (r[n] - l < i[a] &&
                    (e.offsets.popper[a] -= i[a] - (r[n] - l)),
                  r[a] + l > i[n] && (e.offsets.popper[a] += r[a] + l - i[n]),
                  (e.offsets.popper = y(e.offsets.popper)),
                  r[a] + r[o] / 2 - l / 2),
                r = d(e.instance.popper),
                c = parseFloat(r["margin" + u]),
                r = parseFloat(r["border" + u + "Width"]),
                u = n - e.offsets.popper[a] - c - r,
                u = Math.max(Math.min(i[o] - l, u), 0);
              return (
                (e.arrowElement = t),
                (e.offsets.arrow =
                  (v((n = {}), a, Math.round(u)), v(n, s, ""), n)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (c, u) {
              if (B(c.instance.modifiers, "inner")) return c;
              if (c.flipped && c.placement === c.originalPlacement) return c;
              var d = C(
                  c.instance.popper,
                  c.instance.reference,
                  u.padding,
                  u.boundariesElement,
                  c.positionFixed
                ),
                h = c.placement.split("-")[0],
                f = S(h),
                p = c.placement.split("-")[1] || "",
                m = [];
              switch (u.behavior) {
                case G:
                  m = [h, f];
                  break;
                case K:
                  m = V(h);
                  break;
                case Q:
                  m = V(h, !0);
                  break;
                default:
                  m = u.behavior;
              }
              return (
                m.forEach(function (e, t) {
                  if (h !== e || m.length === t + 1) return c;
                  (h = c.placement.split("-")[0]), (f = S(h));
                  var e = c.offsets.popper,
                    n = c.offsets.reference,
                    i = Math.floor,
                    n =
                      ("left" === h && i(e.right) > i(n.left)) ||
                      ("right" === h && i(e.left) < i(n.right)) ||
                      ("top" === h && i(e.bottom) > i(n.top)) ||
                      ("bottom" === h && i(e.top) < i(n.bottom)),
                    r = i(e.left) < i(d.left),
                    o = i(e.right) > i(d.right),
                    a = i(e.top) < i(d.top),
                    e = i(e.bottom) > i(d.bottom),
                    i =
                      ("left" === h && r) ||
                      ("right" === h && o) ||
                      ("top" === h && a) ||
                      ("bottom" === h && e),
                    s = -1 !== ["top", "bottom"].indexOf(h),
                    l =
                      !!u.flipVariations &&
                      ((s && "start" === p && r) ||
                        (s && "end" === p && o) ||
                        (!s && "start" === p && a) ||
                        (!s && "end" === p && e)),
                    o =
                      !!u.flipVariationsByContent &&
                      ((s && "start" === p && o) ||
                        (s && "end" === p && r) ||
                        (!s && "start" === p && e) ||
                        (!s && "end" === p && a)),
                    r = l || o;
                  (n || i || r) &&
                    ((c.flipped = !0),
                    (n || i) && (h = m[t + 1]),
                    r &&
                      (p =
                        "end" === (e = p)
                          ? "start"
                          : "start" === e
                          ? "end"
                          : e),
                    (c.placement = h + (p ? "-" + p : "")),
                    (c.offsets.popper = b(
                      {},
                      c.offsets.popper,
                      I(c.instance.popper, c.offsets.reference, c.placement)
                    )),
                    (c = D(c.instance.modifiers, c, "flip")));
                }),
                c
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = (r = e.offsets).popper,
                r = r.reference,
                o = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (i[o ? "left" : "top"] =
                  r[n] - (a ? i[o ? "width" : "height"] : 0)),
                (e.placement = S(t)),
                (e.offsets.popper = y(i)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = L(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                r = e.offsets.popper,
                o =
                  (void 0 !==
                    (o = L(e.instance.modifiers, function (e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration) &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    ),
                  void 0 !== o ? o : t.gpuAcceleration),
                a = w((t = f(e.instance.popper))),
                r = { position: r.position },
                s = U(e, window.devicePixelRatio < 2 || !W),
                n = "bottom" === n ? "top" : "bottom",
                i = "right" === i ? "left" : "right",
                l = A("transform"),
                c = void 0,
                u = void 0,
                u =
                  "bottom" == n
                    ? "HTML" === t.nodeName
                      ? -t.clientHeight + s.bottom
                      : -a.height + s.bottom
                    : s.top,
                c =
                  "right" == i
                    ? "HTML" === t.nodeName
                      ? -t.clientWidth + s.right
                      : -a.width + s.right
                    : s.left,
                a =
                  (o && l
                    ? ((r[l] = "translate3d(" + c + "px, " + u + "px, 0)"),
                      (r[n] = 0),
                      (r[i] = 0),
                      (r.willChange = "transform"))
                    : ((t = "right" == i ? -1 : 1),
                      (r[n] = u * ("bottom" == n ? -1 : 1)),
                      (r[i] = c * t),
                      (r.willChange = n + ", " + i)),
                  { "x-placement": e.placement });
              return (
                (e.attributes = b({}, a, e.attributes)),
                (e.styles = b({}, r, e.styles)),
                (e.arrowStyles = b({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              var t, n;
              return (
                O(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (n = e.attributes),
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  O(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, i, r) {
              return (
                (r = T(r, t, e, n.positionFixed)),
                (r = k(
                  n.placement,
                  r,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                )),
                t.setAttribute("x-placement", r),
                O(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      },
      e =
        (e(M, [
          {
            key: "update",
            value: function () {
              return function () {
                var e;
                this.state.isDestroyed ||
                  (((e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  }).offsets.reference = T(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                  (e.placement = k(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (e.originalPlacement = e.placement),
                  (e.positionFixed = this.options.positionFixed),
                  (e.offsets.popper = I(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                  )),
                  (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                  (e = D(this.modifiers, e)),
                  this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e)));
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  B(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[A("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = R(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return q.call(this);
            },
          },
        ]),
        M);
    function M(e, t) {
      var n = this,
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        r = this,
        o = M;
      if (!(r instanceof o))
        throw new TypeError("Cannot call a class as a function");
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }),
        (this.update = F(this.update.bind(this))),
        (this.options = b({}, M.Defaults, i)),
        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
        (this.reference = e && e.jquery ? e[0] : e),
        (this.popper = t && t.jquery ? t[0] : t),
        (this.options.modifiers = {}),
        Object.keys(b({}, M.Defaults.modifiers, i.modifiers)).forEach(function (
          e
        ) {
          n.options.modifiers[e] = b(
            {},
            M.Defaults.modifiers[e] || {},
            i.modifiers ? i.modifiers[e] : {}
          );
        }),
        (this.modifiers = Object.keys(this.options.modifiers)
          .map(function (e) {
            return b({ name: e }, n.options.modifiers[e]);
          })
          .sort(function (e, t) {
            return e.order - t.order;
          })),
        this.modifiers.forEach(function (e) {
          e.enabled &&
            a(e.onLoad) &&
            e.onLoad(n.reference, n.popper, n.options, e, n.state);
        }),
        this.update();
      r = this.options.eventsEnabled;
      r && this.enableEventListeners(), (this.state.eventsEnabled = r);
    }
    return (
      (e.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
      (e.placements = Y),
      (e.Defaults = J),
      e
    );
  });
var _ = Object.defineProperty,
  S = Object.getOwnPropertySymbols,
  X = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable,
  L = function (e, t, n) {
    return t in e
      ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  k = function (e, t) {
    for (var n in (t = t || {})) X.call(t, n) && L(e, n, t[n]);
    if (S)
      for (
        var i, r = _createForOfIteratorHelperLoose(S(t));
        !(i = r()).done;

      ) {
        n = i.value;
        Z.call(t, n) && L(e, n, t[n]);
      }
    return e;
  },
  u = function (e, t, n) {
    return L(e, "symbol" != typeof t ? t + "" : t, n), n;
  };
function showCapsLockMsg(e) {
  $(".password-caps").remove(),
    e
      .parents(".form-group")
      .append(
        '<small class="password-caps form-text text-warning position-absolute bg-white w-100">CAPS LOCK inserito</small>'
      );
}
function isIe() {
  return (
    0 < window.navigator.userAgent.indexOf("MSIE ") ||
    !!navigator.userAgent.match(/Trident.*rv:11\./)
  );
}
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).JustValidate = t());
})(this, function () {
  "use strict";
  function w(e) {
    return !!e && "function" == typeof e.then;
  }
  var _,
    c,
    r,
    e,
    x =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    C = /^[0-9]+$/,
    T = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    E = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    a =
      (((e = _ = _ || {}).Required = "required"),
      (e.Email = "email"),
      (e.MinLength = "minLength"),
      (e.MaxLength = "maxLength"),
      (e.Password = "password"),
      (e.Number = "number"),
      (e.MaxNumber = "maxNumber"),
      (e.MinNumber = "minNumber"),
      (e.StrongPassword = "strongPassword"),
      (e.CustomRegexp = "customRegexp"),
      (e.MinFilesCount = "minFilesCount"),
      (e.MaxFilesCount = "maxFilesCount"),
      (e.Files = "files"),
      ((c = c || {}).Required = "required"),
      ((e = r = r || {}).Label = "label"),
      (e.LabelArrow = "labelArrow"),
      {
        errorFieldStyle: { color: "#b81111", border: "1px solid #B81111" },
        errorFieldCssClass: "just-validate-error-field",
        successFieldCssClass: "just-validate-success-field",
        errorLabelStyle: { color: "#b81111" },
        errorLabelCssClass: "just-validate-error-label",
        successLabelCssClass: "just-validate-success-label",
        focusInvalidField: !0,
        lockForm: !0,
        testingMode: !1,
      });
  return (function () {
    function e(e, t, n) {
      var o = this;
      u(this, "form", null),
        u(this, "fields", {}),
        u(this, "groupFields", {}),
        u(this, "errors", {}),
        u(this, "isValid", !1),
        u(this, "isSubmitted", !1),
        u(this, "globalConfig", a),
        u(this, "errorLabels", {}),
        u(this, "successLabels", {}),
        u(this, "eventListeners", []),
        u(this, "dictLocale", []),
        u(this, "currentLocale"),
        u(this, "customStyleTags", {}),
        u(this, "onSuccessCallback"),
        u(this, "onFailCallback"),
        u(this, "tooltips", []),
        u(this, "lastScrollPosition"),
        u(this, "isScrollTick"),
        u(this, "refreshAllTooltips", function () {
          o.tooltips.forEach(function (e) {
            e.refresh();
          });
        }),
        u(this, "handleDocumentScroll", function () {
          (o.lastScrollPosition = window.scrollY),
            o.isScrollTick ||
              (window.requestAnimationFrame(function () {
                o.refreshAllTooltips(), (o.isScrollTick = !1);
              }),
              (o.isScrollTick = !0));
        }),
        u(this, "formSubmitHandler", function (e) {
          e.preventDefault(), (o.isSubmitted = !0), o.validateHandler(e);
        }),
        u(this, "handleFieldChange", function (e) {
          var t, n;
          for (n in o.fields)
            if (o.fields[n].elem === e) {
              t = n;
              break;
            }
          t && o.validateField(t, !0);
        }),
        u(this, "handleGroupChange", function (t) {
          var e, n, i;
          for (i in o.groupFields) {
            var r = o.groupFields[i];
            if (
              r.elems.find(function (e) {
                return e === t;
              })
            ) {
              (e = r), (n = i);
              break;
            }
          }
          e && n && o.validateGroup(n, e);
        }),
        u(this, "handlerChange", function (e) {
          e.target &&
            (o.handleFieldChange(e.target),
            o.handleGroupChange(e.target),
            o.renderErrors());
        }),
        this.initialize(e, t, n);
    }
    var t = e.prototype;
    return (
      (t.initialize = function (e, t, n) {
        if (
          ((this.form = null),
          (this.errors = {}),
          (this.isValid = !1),
          (this.isSubmitted = !1),
          (this.globalConfig = a),
          (this.errorLabels = {}),
          (this.successLabels = {}),
          (this.eventListeners = []),
          (this.customStyleTags = {}),
          (this.tooltips = []),
          "string" == typeof e)
        ) {
          var i = document.querySelector(e);
          if (!i)
            throw Error(
              "Form with " +
                e +
                " selector not found! Please check the form selector"
            );
          this.setForm(i);
        } else {
          if (!(e instanceof HTMLFormElement))
            throw Error(
              "Form selector is not valid. Please specify a string selector or a DOM element."
            );
          this.setForm(e);
        }
        (this.globalConfig = k(k({}, a), t)),
          n && (this.dictLocale = n),
          this.isTooltip() &&
            (((i = document.createElement("style")).textContent =
              ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}"),
            (this.customStyleTags[r.Label] = document.head.appendChild(i)),
            this.addListener("scroll", document, this.handleDocumentScroll));
      }),
      (t.getLocalisedString = function (t) {
        var e;
        return (
          (this.currentLocale &&
            this.dictLocale.length &&
            (null ==
            (e = this.dictLocale.find(function (e) {
              return e.key === t;
            }))
              ? void 0
              : e.dict[this.currentLocale])) ||
          t
        );
      }),
      (t.getFieldErrorMessage = function (e, t) {
        t =
          "function" == typeof e.errorMessage
            ? e.errorMessage(this.getElemValue(t), this.fields)
            : e.errorMessage;
        return (
          this.getLocalisedString(t) ||
          (function (e, t) {
            switch (e) {
              case _.Required:
                return "The field is required";
              case _.Email:
                return "Email has invalid format";
              case _.MaxLength:
                return "The field must contain a maximum of :value characters".replace(
                  ":value",
                  String(t)
                );
              case _.MinLength:
                return "The field must contain a minimum of :value characters".replace(
                  ":value",
                  String(t)
                );
              case _.Password:
                return "Password must contain minimum eight characters, at least one letter and one number";
              case _.Number:
                return "Value should be a number";
              case _.StrongPassword:
                return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
              case _.MaxNumber:
                return "Number should be less or equal than :value".replace(
                  ":value",
                  String(t)
                );
              case _.MinNumber:
                return "Number should be more or equal than :value".replace(
                  ":value",
                  String(t)
                );
              case _.MinFilesCount:
                return "Files count should be more or equal than :value".replace(
                  ":value",
                  String(t)
                );
              case _.MaxFilesCount:
                return "Files count should be less or equal than :value".replace(
                  ":value",
                  String(t)
                );
              case _.Files:
                return "Uploaded files have one or several invalid properties (extension/size/type etc)";
              default:
                return "Value is incorrect";
            }
          })(e.rule, e.value)
        );
      }),
      (t.getFieldSuccessMessage = function (e, t) {
        t = "function" == typeof e ? e(this.getElemValue(t), this.fields) : e;
        return this.getLocalisedString(t);
      }),
      (t.getGroupErrorMessage = function (e) {
        return (
          this.getLocalisedString(e.errorMessage) ||
          (e.rule !== c.Required
            ? "Group is incorrect"
            : "The field is required")
        );
      }),
      (t.getGroupSuccessMessage = function (e) {
        return this.getLocalisedString(e.successMessage);
      }),
      (t.setFieldInvalid = function (e, t) {
        (this.fields[e].isValid = !1),
          (this.fields[e].errorMessage = this.getFieldErrorMessage(
            t,
            this.fields[e].elem
          ));
      }),
      (t.setFieldValid = function (e, t) {
        (this.fields[e].isValid = !0),
          void 0 !== t &&
            (this.fields[e].successMessage = this.getFieldSuccessMessage(
              t,
              this.fields[e].elem
            ));
      }),
      (t.setGroupInvalid = function (e, t) {
        (this.groupFields[e].isValid = !1),
          (this.groupFields[e].errorMessage = this.getGroupErrorMessage(t));
      }),
      (t.setGroupValid = function (e, t) {
        (this.groupFields[e].isValid = !0),
          (this.groupFields[e].successMessage = this.getGroupSuccessMessage(t));
      }),
      (t.getElemValue = function (e) {
        switch (e.type) {
          case "checkbox":
            return e.checked;
          case "file":
            return e.files;
          default:
            return e.value;
        }
      }),
      (t.validateGroupRule = function (e, t, n, i) {
        i.rule !== c.Required ||
          ("radio" !== t && "checkbox" !== t) ||
          (n.every(function (e) {
            return !e.checked;
          })
            ? this.setGroupInvalid(e, i)
            : this.setGroupValid(e, i));
      }),
      (t.validateFieldRule = function (t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          c = this,
          u = (void 0 === i && (i = !1), n.value),
          d = this.getElemValue(e);
        if (n.plugin) n.plugin(d, this.fields) || this.setFieldInvalid(t, n);
        else
          switch (n.rule) {
            case _.Required:
              (f = "string" == typeof (f = h = d) ? h.trim() : f) ||
                this.setFieldInvalid(t, n);
              break;
            case _.Email:
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              x.test(d) || this.setFieldInvalid(t, n);
              break;
            case _.MaxLength:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              d.length > u && this.setFieldInvalid(t, n);
              break;
            case _.MinLength:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              d.length < u && this.setFieldInvalid(t, n);
              break;
            case _.Password:
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              T.test(d) || this.setFieldInvalid(t, n);
              break;
            case _.StrongPassword:
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              E.test(d) || this.setFieldInvalid(t, n);
              break;
            case _.Number:
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              C.test(d) || this.setFieldInvalid(t, n);
              break;
            case _.MaxNumber:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              var h = +d;
              (Number.isNaN(h) || u < h) && this.setFieldInvalid(t, n);
              break;
            case _.MinNumber:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("string" != typeof d) {
                this.setFieldInvalid(t, n);
                break;
              }
              if ("" === d) break;
              var f = +d;
              (Number.isNaN(f) || f < u) && this.setFieldInvalid(t, n);
              break;
            case _.CustomRegexp:
              if (void 0 === u)
                return (
                  console.error(
                    "Value for " +
                      n.rule +
                      " rule for [" +
                      t +
                      "] field is not defined. This field will be always invalid."
                  ),
                  void this.setFieldInvalid(t, n)
                );
              try {
                y = new RegExp(u);
              } catch (e) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] should be a valid regexp. This field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              var p = String(d);
              "" === p || y.test(p) || this.setFieldInvalid(t, n);
              break;
            case _.MinFilesCount:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. This field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if (
                Number.isFinite(null == d ? void 0 : d.length) &&
                d.length < u
              ) {
                this.setFieldInvalid(t, n);
                break;
              }
              break;
            case _.MaxFilesCount:
              if (void 0 === u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field is not defined. This field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if ("number" != typeof u) {
                console.error(
                  "Value for " +
                    n.rule +
                    " rule for [" +
                    t +
                    "] field should be a number. The field will be always invalid."
                ),
                  this.setFieldInvalid(t, n);
                break;
              }
              if (
                Number.isFinite(null == d ? void 0 : d.length) &&
                d.length > u
              ) {
                this.setFieldInvalid(t, n);
                break;
              }
              break;
            case _.Files:
              if (void 0 === u)
                return (
                  console.error(
                    "Value for " +
                      n.rule +
                      " rule for [" +
                      t +
                      "] field is not defined. This field will be always invalid."
                  ),
                  void this.setFieldInvalid(t, n)
                );
              if ("object" != typeof u)
                return (
                  console.error(
                    "Value for " +
                      n.rule +
                      " rule for [" +
                      t +
                      "] field should be an object. This field will be always invalid."
                  ),
                  void this.setFieldInvalid(t, n)
                );
              var m = u.files;
              if ("object" != typeof m)
                return (
                  console.error(
                    "Value for " +
                      n.rule +
                      " rule for [" +
                      t +
                      "] field should be an object with files array. This field will be always invalid."
                  ),
                  void this.setFieldInvalid(t, n)
                );
              if ("object" == typeof d && null !== d)
                for (var g = 0, v = d.length; g < v; ++g) {
                  var b = d.item(g);
                  if (!b) {
                    this.setFieldInvalid(t, n);
                    break;
                  }
                  if (
                    ((b = b),
                    (r = m),
                    (l = s = a = o = void 0),
                    (o = Number.isFinite(r.minSize) && b.size < r.minSize),
                    (a = Number.isFinite(r.maxSize) && b.size > r.maxSize),
                    (s = Array.isArray(r.names) && !r.names.includes(b.name)),
                    (l =
                      Array.isArray(r.extensions) &&
                      !r.extensions.includes(
                        b.name.split(".")[b.name.split(".").length - 1]
                      )),
                    (r = Array.isArray(r.types) && !r.types.includes(b.type)),
                    o || a || s || l || r)
                  ) {
                    this.setFieldInvalid(t, n);
                    break;
                  }
                }
              break;
            default:
              if ("function" != typeof n.validator)
                return (
                  console.error(
                    "Validator for custom rule for [" +
                      t +
                      "] field should be a function. This field will be always invalid."
                  ),
                  void this.setFieldInvalid(t, n)
                );
              var y = n.validator(d, this.fields);
              if (
                ("boolean" != typeof y &&
                  "function" != typeof y &&
                  console.error(
                    "Validator return value for [" +
                      t +
                      "] field should be boolean or function. It will be cast to boolean."
                  ),
                "function" == typeof y)
              ) {
                if (!i)
                  return (
                    (this.fields[t].asyncCheckPending = !1),
                    (p = y()),
                    w(p)
                      ? p
                          .then(function (e) {
                            e || c.setFieldInvalid(t, n);
                          })
                          .catch(function () {
                            c.setFieldInvalid(t, n);
                          })
                      : (console.error(
                          "Validator function for custom rule for [" +
                            t +
                            "] field should return a Promise. This field will be always invalid."
                        ),
                        void this.setFieldInvalid(t, n))
                  );
                this.fields[t].asyncCheckPending = !0;
              }
              y || this.setFieldInvalid(t, n);
          }
      }),
      (t.validateField = function (t, n) {
        var e,
          i = this,
          r = (void 0 === n && (n = !1), this.fields[t]),
          o = ((r.isValid = !0), []);
        return (
          []
            .concat(r.rules)
            .reverse()
            .forEach(function (e) {
              e = i.validateFieldRule(t, r.elem, e, n);
              w(e) && o.push(e);
            }),
          r.isValid &&
            this.setFieldValid(
              t,
              null == (e = r.config) ? void 0 : e.successMessage
            ),
          Promise.allSettled(o)
        );
      }),
      (t.revalidateField = function (t) {
        var n = this;
        if ("string" != typeof t)
          throw Error(
            "Field selector is not valid. Please specify a string selector."
          );
        return this.fields[t]
          ? new Promise(function (e) {
              n.validateField(t, !0).finally(function () {
                n.clearFieldError(t),
                  n.clearFieldLabel(t),
                  n.renderFieldError(t),
                  e(!!n.fields[t].isValid);
              });
            })
          : (console.error("Field not found. Check the field selector."),
            Promise.reject());
      }),
      (t.validateGroup = function (t, n) {
        var i = this,
          r = [];
        return (
          []
            .concat(n.rules)
            .reverse()
            .forEach(function (e) {
              e = i.validateGroupRule(t, n.type, n.elems, e);
              w(e) && r.push(e);
            }),
          Promise.allSettled(r)
        );
      }),
      (t.focusInvalidField = function () {
        var e,
          n = this;
        for (e in this.fields)
          if (
            "break" ===
            (function (e) {
              var t = n.fields[e];
              if (!t.isValid)
                return (
                  setTimeout(function () {
                    return t.elem.focus();
                  }, 0),
                  "break"
                );
            })(e)
          )
            break;
      }),
      (t.afterSubmitValidation = function (e) {
        this.renderErrors((e = void 0 === e ? !1 : e)),
          this.globalConfig.focusInvalidField && this.focusInvalidField();
      }),
      (t.validate = function (t) {
        var i = this;
        return (
          void 0 === t && (t = !1),
          new Promise(function (e) {
            var n = [];
            Object.keys(i.fields).forEach(function (e) {
              e = i.validateField(e);
              w(e) && n.push(e);
            }),
              Object.keys(i.groupFields).forEach(function (e) {
                var t = i.groupFields[e],
                  e = i.validateGroup(e, t);
                w(e) && n.push(e);
              }),
              n.length
                ? Promise.allSettled(n).then(function () {
                    i.afterSubmitValidation(t), e(!0);
                  })
                : (i.afterSubmitValidation(t), e(!1));
          })
        );
      }),
      (t.revalidate = function () {
        var t = this;
        return new Promise(function (e) {
          t.validateHandler(void 0, !0).finally(function () {
            t.globalConfig.focusInvalidField && t.focusInvalidField(),
              e(t.isValid);
          });
        });
      }),
      (t.validateHandler = function (t, e) {
        var n = this;
        return (
          void 0 === e && (e = !1),
          this.globalConfig.lockForm && this.lockForm(),
          this.validate(e).finally(function () {
            var e;
            n.globalConfig.lockForm && n.unlockForm(),
              n.isValid
                ? null != (e = n.onSuccessCallback) && e.call(n, t)
                : null != (e = n.onFailCallback) &&
                  e.call(n, n.fields, n.groupFields);
          })
        );
      }),
      (t.setForm = function (e) {
        (this.form = e),
          this.form.setAttribute("novalidate", "novalidate"),
          this.removeListener("submit", this.form, this.formSubmitHandler),
          this.addListener("submit", this.form, this.formSubmitHandler);
      }),
      (t.addListener = function (e, t, n) {
        t.addEventListener(e, n),
          this.eventListeners.push({ type: e, elem: t, func: n });
      }),
      (t.removeListener = function (t, n, e) {
        n.removeEventListener(t, e),
          (this.eventListeners = this.eventListeners.filter(function (e) {
            return e.type !== t || e.elem !== n;
          }));
      }),
      (t.addField = function (t, e, n) {
        if ("string" != typeof t)
          throw Error(
            "Field selector is not valid. Please specify a string selector."
          );
        var i = this.form.querySelector(t);
        if (!i)
          throw Error(
            "Field with " +
              t +
              " selector not found! Please check the field selector."
          );
        if (Array.isArray(e) && e.length)
          return (
            e.forEach(function (e) {
              if (!("rule" in e || "validator" in e || "plugin" in e))
                throw Error(
                  "Rules argument for the field [" +
                    t +
                    "] must contain at least one rule or validator property."
                );
              if (
                !(
                  e.validator ||
                  e.plugin ||
                  (e.rule && Object.values(_).includes(e.rule))
                )
              )
                throw Error(
                  "Rule should be one of these types: " +
                    Object.values(_).join(", ") +
                    ". Provided value: " +
                    e.rule
                );
            }),
            (this.fields[t] = {
              elem: i,
              rules: e,
              isValid: void 0,
              config: n,
            }),
            this.setListeners(i),
            this.isSubmitted && this.validate(),
            this
          );
        throw Error(
          "Rules argument for the field [" +
            t +
            "] should be an array and should contain at least 1 element."
        );
      }),
      (t.removeField = function (e) {
        if ("string" != typeof e)
          throw Error(
            "Field selector is not valid. Please specify a string selector."
          );
        if (!this.fields[e])
          return (
            console.error("Field not found. Check the field selector."), this
          );
        var t = this.getListenerType(this.fields[e].elem.type);
        return (
          this.removeListener(t, this.fields[e].elem, this.handlerChange),
          this.clearErrors(),
          delete this.fields[e],
          this
        );
      }),
      (t.removeGroup = function (e) {
        var n = this;
        if ("string" != typeof e)
          throw Error(
            "Group selector is not valid. Please specify a string selector."
          );
        return (
          this.groupFields[e]
            ? (this.groupFields[e].elems.forEach(function (e) {
                var t = n.getListenerType(e.type);
                n.removeListener(t, e, n.handlerChange);
              }),
              this.clearErrors(),
              delete this.groupFields[e])
            : console.error("Group not found. Check the group selector."),
          this
        );
      }),
      (t.addRequiredGroup = function (e, t, n, i) {
        var r = this;
        if ("string" != typeof e)
          throw Error(
            "Group selector is not valid. Please specify a string selector."
          );
        var o = this.form.querySelector(e);
        if (!o)
          throw Error(
            "Group with " +
              e +
              " selector not found! Please check the group selector."
          );
        var a = o.querySelectorAll("input"),
          s = Array.from(a).every(function (e) {
            return "radio" === e.type;
          }),
          l = Array.from(a).every(function (e) {
            return "checkbox" === e.type;
          });
        if (s || l)
          return (
            (this.groupFields[e] = {
              rules: [{ rule: c.Required, errorMessage: t, successMessage: i }],
              groupElem: o,
              elems: Array.from(a),
              type: s ? "radio" : "checkbox",
              isDirty: !1,
              isValid: void 0,
              config: n,
            }),
            a.forEach(function (e) {
              r.setListeners(e);
            }),
            this
          );
        throw Error(
          "Group should contain either or checkboxes or radio buttons"
        );
      }),
      (t.getListenerType = function (e) {
        switch (e) {
          case "checkbox":
          case "select-one":
          case "file":
          case "radio":
            return "change";
          default:
            return "input";
        }
      }),
      (t.setListeners = function (e) {
        var t = this.getListenerType(e.type);
        this.removeListener(t, e, this.handlerChange),
          this.addListener(t, e, this.handlerChange);
      }),
      (t.clearFieldLabel = function (e) {
        var t;
        null != (t = this.errorLabels[e]) && t.remove(),
          null != (t = this.successLabels[e]) && t.remove();
      }),
      (t.clearFieldError = function (e) {
        var t = this.fields[e],
          e =
            (null == (e = t.config) ? void 0 : e.errorFieldStyle) ||
            this.globalConfig.errorFieldStyle,
          e =
            (Object.keys(e).forEach(function (e) {
              t.elem.style[e] = "";
            }),
            (null == (e = t.config) ? void 0 : e.successFieldStyle) ||
              this.globalConfig.successFieldStyle ||
              {});
        Object.keys(e).forEach(function (e) {
          t.elem.style[e] = "";
        }),
          t.elem.classList.remove(
            (null == (e = t.config) ? void 0 : e.errorFieldCssClass) ||
              this.globalConfig.errorFieldCssClass,
            (null == (e = t.config) ? void 0 : e.successFieldCssClass) ||
              this.globalConfig.successFieldCssClass
          );
      }),
      (t.clearErrors = function () {
        var t,
          e,
          i = this;
        for (e in (Object.keys(this.errorLabels).forEach(function (e) {
          return i.errorLabels[e].remove();
        }),
        Object.keys(this.successLabels).forEach(function (e) {
          return i.successLabels[e].remove();
        }),
        this.fields))
          this.clearFieldError(e);
        for (var n in this.groupFields)
          !(function (e) {
            var n = i.groupFields[e],
              e =
                (null == (t = n.config) ? void 0 : t.errorFieldStyle) ||
                i.globalConfig.errorFieldStyle,
              e =
                (Object.keys(e).forEach(function (t) {
                  n.elems.forEach(function (e) {
                    (e.style[t] = ""),
                      e.classList.remove(
                        (null == (e = n.config)
                          ? void 0
                          : e.errorFieldCssClass) ||
                          i.globalConfig.errorFieldCssClass
                      );
                  });
                }),
                (null == (t = n.config) ? void 0 : t.successFieldStyle) ||
                  i.globalConfig.successFieldStyle ||
                  {});
            Object.keys(e).forEach(function (t) {
              n.elems.forEach(function (e) {
                (e.style[t] = ""),
                  e.classList.remove(
                    (null == (e = n.config)
                      ? void 0
                      : e.successFieldCssClass) ||
                      i.globalConfig.successFieldCssClass
                  );
              });
            });
          })(n);
        this.tooltips = [];
      }),
      (t.isTooltip = function () {
        return !!this.globalConfig.tooltip;
      }),
      (t.lockForm = function () {
        for (
          var e = this.form.querySelectorAll("input, textarea, button, select"),
            t = 0,
            n = e.length;
          t < n;
          ++t
        )
          e[t].setAttribute("disabled", "disabled"),
            (e[t].style.pointerEvents = "none"),
            (e[t].style.webkitFilter = "grayscale(100%)"),
            (e[t].style.filter = "grayscale(100%)");
      }),
      (t.unlockForm = function () {
        for (
          var e = this.form.querySelectorAll("input, textarea, button, select"),
            t = 0,
            n = e.length;
          t < n;
          ++t
        )
          e[t].removeAttribute("disabled"),
            (e[t].style.pointerEvents = ""),
            (e[t].style.webkitFilter = ""),
            (e[t].style.filter = "");
      }),
      (t.renderTooltip = function (e, t, n) {
        var i = this,
          r = e.getBoundingClientRect(),
          o = r.top,
          a = r.left,
          s = r.width,
          l = r.height,
          c = t.getBoundingClientRect(),
          r =
            n ||
            (null == (r = this.globalConfig.tooltip) ? void 0 : r.position);
        switch (r) {
          case "left":
            (t.style.top = o + l / 2 - c.height / 2 + "px"),
              (t.style.left = a - c.width - 5 + "px");
            break;
          case "top":
            (t.style.top = o - c.height - 5 + "px"),
              (t.style.left = a + s / 2 - c.width / 2 + "px");
            break;
          case "right":
            (t.style.top = o + l / 2 - c.height / 2 + "px"),
              (t.style.left = a + s + 5 + "px");
            break;
          case "bottom":
            (t.style.top = o + l + 5 + "px"),
              (t.style.left = a + s / 2 - c.width / 2 + "px");
        }
        return (
          (t.dataset.direction = r),
          {
            refresh: function () {
              i.renderTooltip(e, t, n);
            },
          }
        );
      }),
      (t.createErrorLabelElem = function (e, t, n) {
        var i = document.createElement("div"),
          t =
            ((i.innerHTML = t),
            this.isTooltip()
              ? null == n
                ? void 0
                : n.errorLabelStyle
              : (null == n ? void 0 : n.errorLabelStyle) ||
                this.globalConfig.errorLabelStyle);
        return (
          Object.assign(i.style, t),
          i.classList.add(
            (null == n ? void 0 : n.errorLabelCssClass) ||
              this.globalConfig.errorLabelCssClass,
            "just-validate-error-label"
          ),
          this.isTooltip() && (i.dataset.tooltip = "true"),
          this.globalConfig.testingMode &&
            (i.dataset.testId = "error-label-" + e),
          (this.errorLabels[e] = i)
        );
      }),
      (t.createSuccessLabelElem = function (e, t, n) {
        if (void 0 === t) return null;
        var i = document.createElement("div"),
          t =
            ((i.innerHTML = t),
            (null == n ? void 0 : n.successLabelStyle) ||
              this.globalConfig.successLabelStyle);
        return (
          Object.assign(i.style, t),
          i.classList.add(
            (null == n ? void 0 : n.successLabelCssClass) ||
              this.globalConfig.successLabelCssClass,
            "just-validate-success-label"
          ),
          this.globalConfig.testingMode &&
            (i.dataset.testId = "success-label-" + e),
          (this.successLabels[e] = i)
        );
      }),
      (t.renderErrorsContainer = function (e, t) {
        t = t || this.globalConfig.errorsContainer;
        if ("string" == typeof t) {
          var n = this.form.querySelector(t);
          if (n) return n.appendChild(e), !0;
          console.error(
            "Error container with " +
              t +
              " selector not found. Errors will be rendered as usual"
          );
        }
        return t instanceof Element
          ? (t.appendChild(e), !0)
          : (void 0 !== t &&
              console.error(
                "Error container not found. It should be a string or existing Element. Errors will be rendered as usual"
              ),
            !1);
      }),
      (t.renderGroupLabel = function (e, t, n, i) {
        (!i && this.renderErrorsContainer(t, n)) || e.appendChild(t);
      }),
      (t.renderFieldLabel = function (e, t, n, i) {
        (!i && this.renderErrorsContainer(t, n)) ||
          ("checkbox" === e.type || "radio" === e.type
            ? ((i = document.querySelector(
                'label[for="' + e.getAttribute("id") + '"]'
              )),
              "label" ===
              (null == (n = null == (n = e.parentElement) ? void 0 : n.tagName)
                ? void 0
                : n.toLowerCase())
                ? null !=
                    (n =
                      null == (n = e.parentElement)
                        ? void 0
                        : n.parentElement) && n.appendChild(t)
                : i
                ? null != (n = i.parentElement) && n.appendChild(t)
                : null != (i = e.parentElement) && i.appendChild(t))
            : null != (n = e.parentElement) && n.appendChild(t));
      }),
      (t.renderFieldError = function (e) {
        var t,
          n = this.fields[e];
        n.isValid
          ? n.asyncCheckPending ||
            ((t = this.createSuccessLabelElem(e, n.successMessage, n.config)) &&
              this.renderFieldLabel(
                n.elem,
                t,
                null == (t = n.config) ? void 0 : t.errorsContainer,
                !0
              ),
            n.elem.classList.add(
              (null == (t = n.config) ? void 0 : t.successFieldCssClass) ||
                this.globalConfig.successFieldCssClass
            ))
          : ((this.isValid = !1),
            n.elem.classList.add(
              (null == (t = n.config) ? void 0 : t.errorFieldCssClass) ||
                this.globalConfig.errorFieldCssClass
            ),
            (t = this.createErrorLabelElem(e, n.errorMessage, n.config)),
            this.renderFieldLabel(
              n.elem,
              t,
              null == (e = n.config) ? void 0 : e.errorsContainer
            ),
            this.isTooltip() &&
              this.tooltips.push(
                this.renderTooltip(
                  n.elem,
                  t,
                  null == (t = null == (e = n.config) ? void 0 : e.tooltip)
                    ? void 0
                    : t.position
                )
              ));
      }),
      (t.renderErrors = function (e) {
        var i,
          r,
          o = this;
        if ((void 0 === e && (e = !1), this.isSubmitted || e)) {
          this.clearErrors(), (this.isValid = !0);
          var t, n;
          for (t in this.groupFields)
            (function (e) {
              var n = o.groupFields[e];
              if (n.isValid)
                return (
                  n.elems.forEach(function (e) {
                    var t;
                    Object.assign(
                      e.style,
                      (null == (t = n.config) ? void 0 : t.successFieldStyle) ||
                        o.globalConfig.successFieldStyle
                    ),
                      e.classList.add(
                        (null == (t = n.config)
                          ? void 0
                          : t.successFieldCssClass) ||
                          o.globalConfig.successFieldCssClass
                      );
                  }),
                  (t = o.createSuccessLabelElem(
                    e,
                    n.successMessage,
                    n.config
                  )) &&
                    o.renderGroupLabel(
                      n.groupElem,
                      t,
                      null == (i = n.config) ? void 0 : i.errorsContainer,
                      !0
                    )
                );
              (o.isValid = !1),
                n.elems.forEach(function (e) {
                  var t;
                  Object.assign(
                    e.style,
                    (null == (t = n.config) ? void 0 : t.errorFieldStyle) ||
                      o.globalConfig.errorFieldStyle
                  ),
                    e.classList.add(
                      (null == (t = n.config)
                        ? void 0
                        : t.errorFieldCssClass) ||
                        o.globalConfig.errorFieldCssClass
                    );
                });
              var t = o.createErrorLabelElem(e, n.errorMessage, n.config);
              o.renderGroupLabel(
                n.groupElem,
                t,
                null == (i = n.config) ? void 0 : i.errorsContainer
              ),
                o.isTooltip() &&
                  o.tooltips.push(
                    o.renderTooltip(
                      n.groupElem,
                      t,
                      null == (r = null == (r = n.config) ? void 0 : r.tooltip)
                        ? void 0
                        : r.position
                    )
                  );
            })(t);
          for (n in this.fields) this.renderFieldError(n);
        }
      }),
      (t.destroy = function () {
        var t = this;
        this.eventListeners.forEach(function (e) {
          t.removeListener(e.type, e.elem, e.func);
        }),
          Object.keys(this.customStyleTags).forEach(function (e) {
            t.customStyleTags[e].remove();
          }),
          this.clearErrors(),
          this.globalConfig.lockForm && this.unlockForm();
      }),
      (t.refresh = function () {
        var t = this;
        this.destroy(),
          this.form
            ? (this.initialize(this.form, this.globalConfig),
              Object.keys(this.fields).forEach(function (e) {
                t.addField(e, [].concat(t.fields[e].rules), t.fields[e].config);
              }))
            : console.error(
                "Cannot initialize the library! Form is not defined"
              );
      }),
      (t.setCurrentLocale = function (e) {
        "string" != typeof e && void 0 !== e
          ? console.error("Current locale should be a string")
          : ((this.currentLocale = e), this.isSubmitted && this.validate());
      }),
      (t.onSuccess = function (e) {
        return (this.onSuccessCallback = e), this;
      }),
      (t.onFail = function (e) {
        return (this.onFailCallback = e), this;
      }),
      e
    );
  })();
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).JustValidatePluginDate = t());
  })(this, function () {
    "use strict";
    var i = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
    function e(t) {
      return function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[e] || t.formats[t.defaultWidth];
      };
    }
    var N = {
        date: e({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: e({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: e({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      },
      F = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
    function t(r) {
      return function (e, t) {
        var n,
          t = t || {},
          i =
            ((t =
              "formatting" === (t.context ? String(t.context) : "standalone") &&
              r.formattingValues
                ? ((i = r.defaultFormattingWidth || r.defaultWidth),
                  (n = t.width ? String(t.width) : i),
                  r.formattingValues[n] || r.formattingValues[i])
                : ((n = r.defaultWidth),
                  (i = t.width ? String(t.width) : r.defaultWidth),
                  r.values[i] || r.values[n])),
            r.argumentCallback ? r.argumentCallback(e) : e);
        return t[i];
      };
    }
    function n(o) {
      return function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.width,
          i = (n && o.matchPatterns[n]) || o.matchPatterns[o.defaultMatchWidth],
          i = e.match(i);
        if (!i) return null;
        var r = i[0],
          i = (n && o.parsePatterns[n]) || o.parsePatterns[o.defaultParseWidth],
          n = Array.isArray(i)
            ? (function (e, t) {
                for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
              })(i, function (e) {
                return e.test(r);
              })
            : (function (e, t) {
                for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
              })(i, function (e) {
                return e.test(r);
              }),
          i = o.valueCallback ? o.valueCallback(n) : n;
        return {
          value: (i = t.valueCallback ? t.valueCallback(i) : i),
          rest: e.slice(r.length),
        };
      };
    }
    var r,
      H = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          (e = i[e]),
            (e =
              "string" == typeof e
                ? e
                : 1 === t
                ? e.one
                : e.other.replace("{{count}}", t.toString()));
          return null != n && n.addSuffix
            ? n.comparison && 0 < n.comparison
              ? "in " + e
              : e + " ago"
            : e;
        },
        formatLong: N,
        formatRelative: function (e, t, n, i) {
          return F[e];
        },
        localize: {
          ordinalNumber: function (e, t) {
            var n = Number(e),
              e = n % 100;
            if (20 < e || e < 10)
              switch (e % 10) {
                case 1:
                  return n + "st";
                case 2:
                  return n + "nd";
                case 3:
                  return n + "rd";
              }
            return n + "th";
          },
          era: t({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: t({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: t({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: t({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: t({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber:
            ((r = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match(r.matchPattern);
              if (!n) return null;
              var n = n[0],
                i = e.match(r.parsePattern);
              if (!i) return null;
              i = r.valueCallback ? r.valueCallback(i[0]) : i[0];
              return {
                value: (i = t.valueCallback ? t.valueCallback(i) : i),
                rest: e.slice(n.length),
              };
            }),
          era: n({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: n({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: n({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: n({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: n({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
    function L(e) {
      if (null === e || !0 === e || !1 === e) return NaN;
      e = Number(e);
      return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
    }
    function D(e, t) {
      if (t.length < e)
        throw new TypeError(
          e +
            " argument" +
            (1 < e ? "s" : "") +
            " required, but only " +
            t.length +
            " present"
        );
    }
    function A(e) {
      D(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date ||
        ("object" == typeof e && "[object Date]" === t)
        ? new Date(e.getTime())
        : "number" == typeof e || "[object Number]" === t
        ? new Date(e)
        : (("string" != typeof e && "[object String]" !== t) ||
            "undefined" == typeof console ||
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    function B(e, t) {
      return (
        D(2, arguments),
        (function (e, t) {
          return (
            D(2, arguments), (e = A(e).getTime()), (t = L(t)), new Date(e + t)
          );
        })(e, -L(t))
      );
    }
    function o(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        default:
          return t.date({ width: "full" });
      }
    }
    function a(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        default:
          return t.time({ width: "full" });
      }
    }
    var j = {
      p: a,
      P: function (e, t) {
        var n,
          i = e.match(/(P+)(p+)?/) || [],
          r = i[1];
        if (!(i = i[2])) return o(e, t);
        switch (r) {
          case "P":
            n = t.dateTime({ width: "short" });
            break;
          case "PP":
            n = t.dateTime({ width: "medium" });
            break;
          case "PPP":
            n = t.dateTime({ width: "long" });
            break;
          default:
            n = t.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", o(r, t)).replace("{{time}}", a(i, t));
      },
    };
    var R = ["D", "DD"],
      q = ["YY", "YYYY"];
    function $(e, t, n) {
      if ("YYYY" === e)
        throw new RangeError(
          "Use `yyyy` instead of `YYYY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(n, "`; see: https://git.io/fxCyr")
        );
      if ("YY" === e)
        throw new RangeError(
          "Use `yy` instead of `YY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(n, "`; see: https://git.io/fxCyr")
        );
      if ("D" === e)
        throw new RangeError(
          "Use `d` instead of `D` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(n, "`; see: https://git.io/fxCyr")
        );
      if ("DD" === e)
        throw new RangeError(
          "Use `dd` instead of `DD` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(n, "`; see: https://git.io/fxCyr")
        );
    }
    function s(e, t) {
      D(1, arguments);
      var t = t || {},
        n = t.locale,
        n = n && n.options && n.options.weekStartsOn,
        n = null == n ? 0 : L(n),
        n = null == t.weekStartsOn ? n : L(t.weekStartsOn);
      if (!(0 <= n && n <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      (t = A(e)), (e = t.getUTCDay()), (e = (e < n ? 7 : 0) + e - n);
      return t.setUTCDate(t.getUTCDate() - e), t.setUTCHours(0, 0, 0, 0), t;
    }
    function l(e, t) {
      D(1, arguments);
      var e = A(e),
        n = e.getUTCFullYear(),
        i = t || {},
        r = i.locale,
        r = r && r.options && r.options.firstWeekContainsDate,
        r = null == r ? 1 : L(r),
        r = null == i.firstWeekContainsDate ? r : L(i.firstWeekContainsDate);
      if (!(1 <= r && r <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var i = new Date(0),
        i = (i.setUTCFullYear(n + 1, 0, r), i.setUTCHours(0, 0, 0, 0), s(i, t)),
        o = new Date(0),
        r = (o.setUTCFullYear(n, 0, r), o.setUTCHours(0, 0, 0, 0), s(o, t));
      return e.getTime() >= i.getTime()
        ? n + 1
        : e.getTime() >= r.getTime()
        ? n
        : n - 1;
    }
    function c(e, t, n) {
      D(2, arguments);
      var n = n || {},
        i = n.locale,
        i = i && i.options && i.options.weekStartsOn,
        i = null == i ? 0 : L(i),
        i = null == n.weekStartsOn ? i : L(n.weekStartsOn);
      if (!(0 <= i && i <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      (n = A(e)),
        (e = L(t)),
        (t = ((7 + (e % 7)) % 7 < i ? 7 : 0) + e - n.getUTCDay());
      return n.setUTCDate(n.getUTCDate() + t), n;
    }
    function u(e) {
      D(1, arguments);
      var e = A(e),
        t = e.getUTCDay(),
        t = (t < 1 ? 7 : 0) + t - 1;
      return e.setUTCDate(e.getUTCDate() - t), e.setUTCHours(0, 0, 0, 0), e;
    }
    function U(e) {
      D(1, arguments);
      var e = (function (e) {
          D(1, arguments);
          var e = A(e),
            t = e.getUTCFullYear(),
            n =
              ((n = new Date(0)).setUTCFullYear(t + 1, 0, 4),
              n.setUTCHours(0, 0, 0, 0),
              u(n)),
            i =
              ((i = new Date(0)).setUTCFullYear(t, 0, 4),
              i.setUTCHours(0, 0, 0, 0),
              u(i));
          return e.getTime() >= n.getTime()
            ? t + 1
            : e.getTime() >= i.getTime()
            ? t
            : t - 1;
        })(e),
        t = new Date(0);
      return t.setUTCFullYear(e, 0, 4), t.setUTCHours(0, 0, 0, 0), u(t);
    }
    var W = 6048e5;
    function z(e, t) {
      D(2, arguments);
      (e = A(e)),
        (t = L(t)),
        (t =
          (function (e) {
            return (
              D(1, arguments),
              (e = u((e = A(e))).getTime() - U(e).getTime()),
              Math.round(e / W) + 1
            );
          })(e) - t);
      return e.setUTCDate(e.getUTCDate() - 7 * t), e;
    }
    var Y = 6048e5;
    function V(e, t) {
      D(1, arguments);
      (e = A(e)),
        (e =
          s(e, t).getTime() -
          (function (e, t) {
            D(1, arguments);
            var n =
                null ==
                (n =
                  (n = (i = t || {}).locale) &&
                  n.options &&
                  n.options.firstWeekContainsDate)
                  ? 1
                  : L(n),
              n =
                null == i.firstWeekContainsDate
                  ? n
                  : L(i.firstWeekContainsDate),
              i = l(e, t),
              e = new Date(0);
            return (
              e.setUTCFullYear(i, 0, n), e.setUTCHours(0, 0, 0, 0), s(e, t)
            );
          })(e, t).getTime());
      return Math.round(e / Y) + 1;
    }
    var d = /^(1[0-2]|0?\d)/,
      G = /^(3[0-1]|[0-2]?\d)/,
      K = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      h = /^(5[0-3]|[0-4]?\d)/,
      Q = /^(2[0-3]|[0-1]?\d)/,
      X = /^(2[0-4]|[0-1]?\d)/,
      J = /^(1[0-1]|0?\d)/,
      Z = /^(1[0-2]|0?\d)/,
      ee = /^[0-5]?\d/,
      te = /^[0-5]?\d/,
      ne = /^\d/,
      ie = /^\d{1,2}/,
      re = /^\d{1,3}/,
      oe = /^\d{1,4}/,
      ae = /^-?\d+/,
      se = /^-?\d/,
      le = /^-?\d{1,2}/,
      ce = /^-?\d{1,3}/,
      ue = /^-?\d{1,4}/,
      f = /^([+-])(\d{2})(\d{2})?|Z/,
      p = /^([+-])(\d{2})(\d{2})|Z/,
      m = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      g = /^([+-])(\d{2}):(\d{2})|Z/,
      v = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
    function b(e, t, n) {
      e = t.match(e);
      if (!e) return null;
      var i = parseInt(e[0], 10);
      return { value: n ? n(i) : i, rest: t.slice(e[0].length) };
    }
    function y(e, t) {
      e = t.match(e);
      return e
        ? "Z" === e[0]
          ? { value: 0, rest: t.slice(1) }
          : {
              value:
                ("+" === e[1] ? 1 : -1) *
                (36e5 * (e[2] ? parseInt(e[2], 10) : 0) +
                  6e4 * (e[3] ? parseInt(e[3], 10) : 0) +
                  1e3 * (e[5] ? parseInt(e[5], 10) : 0)),
              rest: t.slice(e[0].length),
            }
        : null;
    }
    function w(e, t) {
      return b(ae, e, t);
    }
    function _(e, t, n) {
      switch (e) {
        case 1:
          return b(ne, t, n);
        case 2:
          return b(ie, t, n);
        case 3:
          return b(re, t, n);
        case 4:
          return b(oe, t, n);
        default:
          return b(new RegExp("^\\d{1," + e + "}"), t, n);
      }
    }
    function x(e, t, n) {
      switch (e) {
        case 1:
          return b(se, t, n);
        case 2:
          return b(le, t, n);
        case 3:
          return b(ce, t, n);
        case 4:
          return b(ue, t, n);
        default:
          return b(new RegExp("^-?\\d{1," + e + "}"), t, n);
      }
    }
    function C(e) {
      switch (e) {
        case "morning":
          return 4;
        case "evening":
          return 17;
        case "pm":
        case "noon":
        case "afternoon":
          return 12;
        default:
          return 0;
      }
    }
    function k(e, t) {
      var n = 0 < t,
        t = n ? t : 1 - t;
      return (
        (t =
          t <= 50
            ? e || 100
            : ((t = t + 50),
              e + 100 * Math.floor(t / 100) - (t % 100 <= e ? 100 : 0))),
        n ? t : 1 - t
      );
    }
    var de = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      he = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function T(e) {
      return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
    }
    var fe = {
        G: {
          priority: 140,
          parse: function (e, t, n, i) {
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  n.era(e, { width: "abbreviated" }) ||
                  n.era(e, { width: "narrow" })
                );
              case "GGGGG":
                return n.era(e, { width: "narrow" });
              default:
                return (
                  n.era(e, { width: "wide" }) ||
                  n.era(e, { width: "abbreviated" }) ||
                  n.era(e, { width: "narrow" })
                );
            }
          },
          set: function (e, t, n, i) {
            return (
              (t.era = n),
              e.setUTCFullYear(n, 0, 1),
              e.setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["R", "u", "t", "T"],
        },
        y: {
          priority: 130,
          parse: function (e, t, n, i) {
            function r(e) {
              return { year: e, isTwoDigitYear: "yy" === t };
            }
            switch (t) {
              case "y":
                return _(4, e, r);
              case "yo":
                return n.ordinalNumber(e, { unit: "year", valueCallback: r });
              default:
                return _(t.length, e, r);
            }
          },
          validate: function (e, t, n) {
            return t.isTwoDigitYear || 0 < t.year;
          },
          set: function (e, t, n, i) {
            var r = e.getUTCFullYear();
            if (n.isTwoDigitYear)
              return (
                (r = k(n.year, r)),
                e.setUTCFullYear(r, 0, 1),
                e.setUTCHours(0, 0, 0, 0),
                e
              );
            r = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
            return e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        Y: {
          priority: 130,
          parse: function (e, t, n, i) {
            function r(e) {
              return { year: e, isTwoDigitYear: "YY" === t };
            }
            switch (t) {
              case "Y":
                return _(4, e, r);
              case "Yo":
                return n.ordinalNumber(e, { unit: "year", valueCallback: r });
              default:
                return _(t.length, e, r);
            }
          },
          validate: function (e, t, n) {
            return t.isTwoDigitYear || 0 < t.year;
          },
          set: function (e, t, n, i) {
            var r = l(e, i);
            if (n.isTwoDigitYear)
              return (
                (r = k(n.year, r)),
                e.setUTCFullYear(r, 0, i.firstWeekContainsDate),
                e.setUTCHours(0, 0, 0, 0),
                s(e, i)
              );
            r = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
            return (
              e.setUTCFullYear(r, 0, i.firstWeekContainsDate),
              e.setUTCHours(0, 0, 0, 0),
              s(e, i)
            );
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ],
        },
        R: {
          priority: 130,
          parse: function (e, t, n, i) {
            return x("R" === t ? 4 : t.length, e);
          },
          set: function (e, t, n, i) {
            var r = new Date(0);
            return r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), u(r);
          },
          incompatibleTokens: [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        u: {
          priority: 130,
          parse: function (e, t, n, i) {
            return x("u" === t ? 4 : t.length, e);
          },
          set: function (e, t, n, i) {
            return e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        Q: {
          priority: 120,
          parse: function (e, t, n, i) {
            switch (t) {
              case "Q":
              case "QQ":
                return _(t.length, e);
              case "Qo":
                return n.ordinalNumber(e, { unit: "quarter" });
              case "QQQ":
                return (
                  n.quarter(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || n.quarter(e, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return n.quarter(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.quarter(e, { width: "wide", context: "formatting" }) ||
                  n.quarter(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.quarter(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 4;
          },
          set: function (e, t, n, i) {
            return e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        q: {
          priority: 120,
          parse: function (e, t, n, i) {
            switch (t) {
              case "q":
              case "qq":
                return _(t.length, e);
              case "qo":
                return n.ordinalNumber(e, { unit: "quarter" });
              case "qqq":
                return (
                  n.quarter(e, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || n.quarter(e, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return n.quarter(e, { width: "narrow", context: "standalone" });
              default:
                return (
                  n.quarter(e, { width: "wide", context: "standalone" }) ||
                  n.quarter(e, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  n.quarter(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 4;
          },
          set: function (e, t, n, i) {
            return e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        M: {
          priority: 110,
          parse: function (e, t, n, i) {
            function r(e) {
              return e - 1;
            }
            switch (t) {
              case "M":
                return b(d, e, r);
              case "MM":
                return _(2, e, r);
              case "Mo":
                return n.ordinalNumber(e, { unit: "month", valueCallback: r });
              case "MMM":
                return (
                  n.month(e, { width: "abbreviated", context: "formatting" }) ||
                  n.month(e, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return n.month(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.month(e, { width: "wide", context: "formatting" }) ||
                  n.month(e, { width: "abbreviated", context: "formatting" }) ||
                  n.month(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 11;
          },
          set: function (e, t, n, i) {
            return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        L: {
          priority: 110,
          parse: function (e, t, n, i) {
            function r(e) {
              return e - 1;
            }
            switch (t) {
              case "L":
                return b(d, e, r);
              case "LL":
                return _(2, e, r);
              case "Lo":
                return n.ordinalNumber(e, { unit: "month", valueCallback: r });
              case "LLL":
                return (
                  n.month(e, { width: "abbreviated", context: "standalone" }) ||
                  n.month(e, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return n.month(e, { width: "narrow", context: "standalone" });
              default:
                return (
                  n.month(e, { width: "wide", context: "standalone" }) ||
                  n.month(e, { width: "abbreviated", context: "standalone" }) ||
                  n.month(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 11;
          },
          set: function (e, t, n, i) {
            return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        w: {
          priority: 100,
          parse: function (e, t, n, i) {
            switch (t) {
              case "w":
                return b(h, e);
              case "wo":
                return n.ordinalNumber(e, { unit: "week" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 53;
          },
          set: function (e, t, n, i) {
            return s(
              (function (e, t, n) {
                return (
                  D(2, arguments),
                  (e = A(e)),
                  (t = L(t)),
                  (n = V(e, n) - t),
                  e.setUTCDate(e.getUTCDate() - 7 * n),
                  e
                );
              })(e, n, i),
              i
            );
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ],
        },
        I: {
          priority: 100,
          parse: function (e, t, n, i) {
            switch (t) {
              case "I":
                return b(h, e);
              case "Io":
                return n.ordinalNumber(e, { unit: "week" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 53;
          },
          set: function (e, t, n, i) {
            return u(z(e, n, i), i);
          },
          incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        d: {
          priority: 90,
          subPriority: 1,
          parse: function (e, t, n, i) {
            switch (t) {
              case "d":
                return b(G, e);
              case "do":
                return n.ordinalNumber(e, { unit: "date" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            var i = T(e.getUTCFullYear()),
              e = e.getUTCMonth();
            return i ? 1 <= t && t <= he[e] : 1 <= t && t <= de[e];
          },
          set: function (e, t, n, i) {
            return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        D: {
          priority: 90,
          subPriority: 1,
          parse: function (e, t, n, i) {
            switch (t) {
              case "D":
              case "DD":
                return b(K, e);
              case "Do":
                return n.ordinalNumber(e, { unit: "date" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return T(e.getUTCFullYear())
              ? 1 <= t && t <= 366
              : 1 <= t && t <= 365;
          },
          set: function (e, t, n, i) {
            return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        E: {
          priority: 90,
          parse: function (e, t, n, i) {
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return n.day(e, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "formatting" }) ||
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 6;
          },
          set: function (e, t, n, i) {
            return (e = c(e, n, i)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: ["D", "i", "e", "c", "t", "T"],
        },
        e: {
          priority: 90,
          parse: function (e, t, n, i) {
            function r(e) {
              var t = 7 * Math.floor((e - 1) / 7);
              return ((e + i.weekStartsOn + 6) % 7) + t;
            }
            switch (t) {
              case "e":
              case "ee":
                return _(t.length, e, r);
              case "eo":
                return n.ordinalNumber(e, { unit: "day", valueCallback: r });
              case "eee":
                return (
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return n.day(e, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "formatting" }) ||
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 6;
          },
          set: function (e, t, n, i) {
            return (e = c(e, n, i)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T",
          ],
        },
        c: {
          priority: 90,
          parse: function (e, t, n, i) {
            function r(e) {
              var t = 7 * Math.floor((e - 1) / 7);
              return ((e + i.weekStartsOn + 6) % 7) + t;
            }
            switch (t) {
              case "c":
              case "cc":
                return _(t.length, e, r);
              case "co":
                return n.ordinalNumber(e, { unit: "day", valueCallback: r });
              case "ccc":
                return (
                  n.day(e, { width: "abbreviated", context: "standalone" }) ||
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return n.day(e, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "standalone" }) ||
                  n.day(e, { width: "abbreviated", context: "standalone" }) ||
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 6;
          },
          set: function (e, t, n, i) {
            return (e = c(e, n, i)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T",
          ],
        },
        i: {
          priority: 90,
          parse: function (e, t, n, i) {
            function r(e) {
              return 0 === e ? 7 : e;
            }
            switch (t) {
              case "i":
              case "ii":
                return _(t.length, e);
              case "io":
                return n.ordinalNumber(e, { unit: "day" });
              case "iii":
                return (
                  n.day(e, {
                    width: "abbreviated",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: r,
                  })
                );
              case "iiiii":
                return n.day(e, {
                  width: "narrow",
                  context: "formatting",
                  valueCallback: r,
                });
              case "iiiiii":
                return (
                  n.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: r,
                  })
                );
              default:
                return (
                  n.day(e, {
                    width: "wide",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "abbreviated",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: r,
                  }) ||
                  n.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: r,
                  })
                );
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 7;
          },
          set: function (e, t, n, i) {
            return (
              (e = (function (e, t) {
                return (
                  D(2, arguments),
                  (t = L(t)) % 7 == 0 && (t -= 7),
                  (e = A(e)),
                  (t = ((7 + (t % 7)) % 7 < 1 ? 7 : 0) + t - e.getUTCDay()),
                  e.setUTCDate(e.getUTCDate() + t),
                  e
                );
              })(e, n, i)).setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        a: {
          priority: 80,
          parse: function (e, t, n, i) {
            switch (t) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return n.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, t, n, i) {
            return e.setUTCHours(C(n), 0, 0, 0), e;
          },
          incompatibleTokens: ["b", "B", "H", "k", "t", "T"],
        },
        b: {
          priority: 80,
          parse: function (e, t, n, i) {
            switch (t) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return n.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, t, n, i) {
            return e.setUTCHours(C(n), 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "B", "H", "k", "t", "T"],
        },
        B: {
          priority: 80,
          parse: function (e, t, n, i) {
            switch (t) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return n.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, t, n, i) {
            return e.setUTCHours(C(n), 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "t", "T"],
        },
        h: {
          priority: 70,
          parse: function (e, t, n, i) {
            switch (t) {
              case "h":
                return b(Z, e);
              case "ho":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 12;
          },
          set: function (e, t, n, i) {
            var r = 12 <= e.getUTCHours();
            return (
              r && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : r || 12 !== n
                ? e.setUTCHours(n, 0, 0, 0)
                : e.setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["H", "K", "k", "t", "T"],
        },
        H: {
          priority: 70,
          parse: function (e, t, n, i) {
            switch (t) {
              case "H":
                return b(Q, e);
              case "Ho":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 23;
          },
          set: function (e, t, n, i) {
            return e.setUTCHours(n, 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"],
        },
        K: {
          priority: 70,
          parse: function (e, t, n, i) {
            switch (t) {
              case "K":
                return b(J, e);
              case "Ko":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 11;
          },
          set: function (e, t, n, i) {
            return (
              12 <= e.getUTCHours() && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : e.setUTCHours(n, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["h", "H", "k", "t", "T"],
        },
        k: {
          priority: 70,
          parse: function (e, t, n, i) {
            switch (t) {
              case "k":
                return b(X, e);
              case "ko":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 1 <= t && t <= 24;
          },
          set: function (e, t, n, i) {
            return e.setUTCHours(n <= 24 ? n % 24 : n, 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"],
        },
        m: {
          priority: 60,
          parse: function (e, t, n, i) {
            switch (t) {
              case "m":
                return b(ee, e);
              case "mo":
                return n.ordinalNumber(e, { unit: "minute" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 59;
          },
          set: function (e, t, n, i) {
            return e.setUTCMinutes(n, 0, 0), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        s: {
          priority: 50,
          parse: function (e, t, n, i) {
            switch (t) {
              case "s":
                return b(te, e);
              case "so":
                return n.ordinalNumber(e, { unit: "second" });
              default:
                return _(t.length, e);
            }
          },
          validate: function (e, t, n) {
            return 0 <= t && t <= 59;
          },
          set: function (e, t, n, i) {
            return e.setUTCSeconds(n, 0), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        S: {
          priority: 30,
          parse: function (e, t, n, i) {
            return _(t.length, e, function (e) {
              return Math.floor(e * Math.pow(10, 3 - t.length));
            });
          },
          set: function (e, t, n, i) {
            return e.setUTCMilliseconds(n), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        X: {
          priority: 10,
          parse: function (e, t, n, i) {
            switch (t) {
              case "X":
                return y(f, e);
              case "XX":
                return y(p, e);
              case "XXXX":
                return y(m, e);
              case "XXXXX":
                return y(v, e);
              default:
                return y(g, e);
            }
          },
          set: function (e, t, n, i) {
            return t.timestampIsSet ? e : new Date(e.getTime() - n);
          },
          incompatibleTokens: ["t", "T", "x"],
        },
        x: {
          priority: 10,
          parse: function (e, t, n, i) {
            switch (t) {
              case "x":
                return y(f, e);
              case "xx":
                return y(p, e);
              case "xxxx":
                return y(m, e);
              case "xxxxx":
                return y(v, e);
              default:
                return y(g, e);
            }
          },
          set: function (e, t, n, i) {
            return t.timestampIsSet ? e : new Date(e.getTime() - n);
          },
          incompatibleTokens: ["t", "T", "X"],
        },
        t: {
          priority: 40,
          parse: function (e, t, n, i) {
            return w(e);
          },
          set: function (e, t, n, i) {
            return [new Date(1e3 * n), { timestampIsSet: !0 }];
          },
          incompatibleTokens: "*",
        },
        T: {
          priority: 20,
          parse: function (e, t, n, i) {
            return w(e);
          },
          set: function (e, t, n, i) {
            return [new Date(n), { timestampIsSet: !0 }];
          },
          incompatibleTokens: "*",
        },
      },
      pe = 10,
      me = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      ge = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      ve = /^'([^]*?)'?$/,
      be = /''/g,
      ye = /\S/,
      we = /[a-zA-Z]/;
    function E(e, t, n, i) {
      D(3, arguments);
      var r = String(e),
        o = String(t),
        a = i || {},
        s = a.locale || H;
      if (!s.match) throw new RangeError("locale must contain match property");
      (t = s.options && s.options.firstWeekContainsDate),
        (i = null == t ? 1 : L(t)),
        (t = null == a.firstWeekContainsDate ? i : L(a.firstWeekContainsDate));
      if (!(1 <= t && t <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      (i = s.options && s.options.weekStartsOn),
        (i = null == i ? 0 : L(i)),
        (i = null == a.weekStartsOn ? i : L(a.weekStartsOn));
      if (!(0 <= i && i <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if ("" === o) return "" === r ? A(n) : new Date(NaN);
      for (
        var l,
          c = { firstWeekContainsDate: t, weekStartsOn: i, locale: s },
          u = [{ priority: pe, subPriority: -1, set: _e, index: 0 }],
          d = o
            .match(ge)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t ? (0, j[t])(e, s.formatLong, c) : e;
            })
            .join("")
            .match(me),
          h = [],
          f = 0;
        f < d.length;
        f++
      ) {
        var p = d[f],
          m =
            (a.useAdditionalWeekYearTokens ||
              ((l = p), -1 === q.indexOf(l)) ||
              $(p, o, e),
            a.useAdditionalDayOfYearTokens ||
              ((l = p), -1 === R.indexOf(l)) ||
              $(p, o, e),
            p[0]),
          g = fe[m];
        if (g) {
          var v = g.incompatibleTokens;
          if (Array.isArray(v)) {
            for (var b = void 0, y = 0; y < h.length; y++) {
              var w = h[y].token;
              if (-1 !== v.indexOf(w) || w === m) {
                b = h[y];
                break;
              }
            }
            if (b)
              throw new RangeError(
                "The format string mustn't contain `"
                  .concat(b.fullToken, "` and `")
                  .concat(p, "` at the same time")
              );
          } else if ("*" === g.incompatibleTokens && h.length)
            throw new RangeError(
              "The format string mustn't contain `".concat(
                p,
                "` and any other token at the same time"
              )
            );
          h.push({ token: m, fullToken: p });
          var _ = g.parse(r, p, s.match, c);
          if (!_) return new Date(NaN);
          u.push({
            priority: g.priority,
            subPriority: g.subPriority || 0,
            set: g.set,
            validate: g.validate,
            value: _.value,
            index: u.length,
          }),
            (r = _.rest);
        } else {
          if (m.match(we))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                m +
                "`"
            );
          if (
            ("''" === p
              ? (p = "'")
              : "'" === m && (p = p.match(ve)[1].replace(be, "'")),
            0 !== r.indexOf(p))
          )
            return new Date(NaN);
          r = r.slice(p.length);
        }
      }
      if (0 < r.length && ye.test(r)) return new Date(NaN);
      var x = u
          .map(function (e) {
            return e.priority;
          })
          .sort(function (e, t) {
            return t - e;
          })
          .filter(function (e, t, n) {
            return n.indexOf(e) === t;
          })
          .map(function (t) {
            return u
              .filter(function (e) {
                return e.priority === t;
              })
              .sort(function (e, t) {
                return t.subPriority - e.subPriority;
              });
          })
          .map(function (e) {
            return e[0];
          }),
        t = A(n);
      if (isNaN(t)) return new Date(NaN);
      var C = B(
          t,
          ((i = t),
          (n = new Date(
            Date.UTC(
              i.getFullYear(),
              i.getMonth(),
              i.getDate(),
              i.getHours(),
              i.getMinutes(),
              i.getSeconds(),
              i.getMilliseconds()
            )
          )).setUTCFullYear(i.getFullYear()),
          i.getTime() - n.getTime())
        ),
        k = {};
      for (f = 0; f < x.length; f++) {
        var T = x[f];
        if (T.validate && !T.validate(C, T.value, c)) return new Date(NaN);
        T = T.set(C, k, T.value, c);
        if (T[0]) {
          C = T[0];
          {
            E = void 0;
            S = void 0;
            I = void 0;
            var E = k;
            var S = T[1];
            if (null == E)
              throw new TypeError(
                "assign requires that input parameter not be null or undefined"
              );
            for (var I in (S = S || {}))
              Object.prototype.hasOwnProperty.call(S, I) && (E[I] = S[I]);
          }
        } else C = T;
      }
      return C;
    }
    function _e(e, t) {
      if (t.timestampIsSet) return e;
      t = new Date(0);
      return (
        t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
        t.setHours(
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds()
        ),
        t
      );
    }
    function S(e) {
      return (
        D(1, arguments),
        e instanceof Date ||
          ("object" == typeof e &&
            "[object Date]" === Object.prototype.toString.call(e))
      );
    }
    function I(e) {
      if ((D(1, arguments), !S(e) && "number" != typeof e)) return !1;
      e = A(e);
      return !isNaN(Number(e));
    }
    function O(e, t) {
      D(2, arguments);
      (e = A(e)), (t = A(t));
      return e.getTime() > t.getTime();
    }
    function P(e, t, n) {
      var i;
      return (
        S(t) ? (i = t) : "string" == typeof t && (i = M(t, n)),
        I(i) && I(e) ? i : null
      );
    }
    var M = function (e, t) {
      return t ? E(e, t, new Date()) : new Date(e);
    };
    return function (i) {
      return function (e, t) {
        var t = i(t),
          n = { format: !0, isAfter: !0, isBefore: !0, required: !0 };
        if ("string" != typeof e)
          return (
            console.error(
              "Value should be a string! The result will be always invalid"
            ),
            !1
          );
        if (!t.required && "" === e) return !0;
        void 0 !== t.format &&
          ("string" != typeof t.format
            ? (console.error(
                "Format field should be a string! The result will be always invalid"
              ),
              (n.format = !1))
            : (n.format = (function (e, t, n) {
                return D(2, arguments), I(E(e, t, new Date(), n));
              })(e, t.format)));
        e = M(e, t.format);
        return (
          void 0 !== t.isBefore &&
            (n.isBefore = (function (e, t, n) {
              e = P(t, e, n);
              return null !== e && O(e, t);
            })(t.isBefore, e, t.format)),
          void 0 !== t.isAfter &&
            (n.isAfter = (function (e, t, n) {
              e = P(t, e, n);
              return null !== e && O(t, e);
            })(t.isAfter, e, t.format)),
          Object.values(n).every(function (e) {
            return e;
          })
        );
      };
    };
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.accessibleAutocomplete = t())
      : (e.accessibleAutocomplete = t());
  })(window, function () {
    return (
      (n = [
        function (e, t, n) {
          function f(e, t, n) {
            var i,
              r,
              o,
              a = e & f.F,
              s = e & f.G,
              l = e & f.P,
              c = e & f.B,
              u = s ? p : e & f.S ? p[t] || (p[t] = {}) : (p[t] || {})[y],
              d = s ? m : m[t] || (m[t] = {}),
              h = d[y] || (d[y] = {});
            for (i in (n = s ? t : n))
              (r = ((o = !a && u && void 0 !== u[i]) ? u : n)[i]),
                (o =
                  c && o
                    ? b(r, p)
                    : l && "function" == typeof r
                    ? b(Function.call, r)
                    : r),
                u && v(u, i, r, e & f.U),
                d[i] != r && g(d, i, o),
                l && h[i] != r && (h[i] = r);
          }
          var p = n(1),
            m = n(6),
            g = n(7),
            v = n(16),
            b = n(18),
            y = "prototype";
          (p.core = m),
            (f.F = 1),
            (f.G = 2),
            (f.S = 4),
            (f.P = 8),
            (f.B = 16),
            (f.W = 32),
            (f.U = 64),
            (f.R = 128),
            (e.exports = f);
        },
        function (e, t) {
          e = e.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")();
          "number" == typeof __g && (__g = e);
        },
        function (e, t) {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
          };
        },
        function (e, t, n) {
          e.exports = !n(4)(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        function (e, t) {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        function (b, e, t) {
          "use strict";
          t.r(e),
            t.d(e, "h", function () {
              return n;
            }),
            t.d(e, "createElement", function () {
              return n;
            }),
            t.d(e, "cloneElement", function () {
              return r;
            }),
            t.d(e, "Component", function () {
              return g;
            }),
            t.d(e, "render", function () {
              return v;
            }),
            t.d(e, "rerender", function () {
              return d;
            }),
            t.d(e, "options", function () {
              return _;
            });
          var l = function () {},
            _ = {},
            c = [],
            u = [];
          function n(e, t) {
            for (var n, i, r, o = u, a = arguments.length; 2 < a--; )
              c.push(arguments[a]);
            for (
              t &&
              null != t.children &&
              (c.length || c.push(t.children), delete t.children);
              c.length;

            )
              if ((i = c.pop()) && void 0 !== i.pop)
                for (a = i.length; a--; ) c.push(i[a]);
              else
                "boolean" == typeof i && (i = null),
                  (r = "function" != typeof e) &&
                    (null == i
                      ? (i = "")
                      : "number" == typeof i
                      ? (i = String(i))
                      : "string" != typeof i && (r = !1)),
                  r && n
                    ? (o[o.length - 1] += i)
                    : o === u
                    ? (o = [i])
                    : o.push(i),
                  (n = r);
            var s = new l();
            return (
              (s.nodeName = e),
              (s.children = o),
              (s.attributes = null == t ? void 0 : t),
              (s.key = null == t ? void 0 : t.key),
              void 0 !== _.vnode && _.vnode(s),
              s
            );
          }
          function x(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          }
          var i =
            "function" == typeof Promise
              ? Promise.resolve().then.bind(Promise.resolve())
              : setTimeout;
          function r(e, t) {
            return n(
              e.nodeName,
              x(x({}, e.attributes), t),
              2 < arguments.length ? [].slice.call(arguments, 2) : e.children
            );
          }
          var s = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            o = [];
          function a(e) {
            !e._dirty &&
              (e._dirty = !0) &&
              1 == o.push(e) &&
              (_.debounceRendering || i)(d);
          }
          function d() {
            var e,
              t = o;
            for (o = []; (e = t.pop()); ) e._dirty && E(e);
          }
          function K(e, t) {
            return (
              e.normalizedNodeName === t ||
              e.nodeName.toLowerCase() === t.toLowerCase()
            );
          }
          function Q(e) {
            var t = x({}, e.attributes),
              n = ((t.children = e.children), e.nodeName.defaultProps);
            if (void 0 !== n) for (var i in n) void 0 === t[i] && (t[i] = n[i]);
            return t;
          }
          function X(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          }
          function J(e, t, n, i, r) {
            if ("key" !== (t = "className" === t ? "class" : t))
              if ("ref" === t) n && n(null), i && i(e);
              else if ("class" !== t || r)
                if ("style" === t) {
                  if (
                    ((i && "string" != typeof i && "string" != typeof n) ||
                      (e.style.cssText = i || ""),
                    i && "object" == typeof i)
                  ) {
                    if ("string" != typeof n)
                      for (var o in n) o in i || (e.style[o] = "");
                    for (var o in i)
                      e.style[o] =
                        "number" == typeof i[o] && !1 === s.test(o)
                          ? i[o] + "px"
                          : i[o];
                  }
                } else if ("dangerouslySetInnerHTML" === t)
                  i && (e.innerHTML = i.__html || "");
                else if ("o" == t[0] && "n" == t[1]) {
                  var a = t !== (t = t.replace(/Capture$/, ""));
                  (t = t.toLowerCase().substring(2)),
                    i
                      ? n || e.addEventListener(t, h, a)
                      : e.removeEventListener(t, h, a),
                    ((e._listeners || (e._listeners = {}))[t] = i);
                } else if ("list" !== t && "type" !== t && !r && t in e) {
                  try {
                    e[t] = null == i ? "" : i;
                  } catch (e) {}
                  (null != i && !1 !== i) ||
                    "spellcheck" == t ||
                    e.removeAttribute(t);
                } else {
                  n = r && t !== (t = t.replace(/^xlink:?/, ""));
                  null == i || !1 === i
                    ? n
                      ? e.removeAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          t.toLowerCase()
                        )
                      : e.removeAttribute(t)
                    : "function" != typeof i &&
                      (n
                        ? e.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            t.toLowerCase(),
                            i
                          )
                        : e.setAttribute(t, i));
                }
              else e.className = i || "";
          }
          function h(e) {
            return this._listeners[e.type]((_.event && _.event(e)) || e);
          }
          var C = [],
            k = 0,
            Z = !1,
            ee = !1;
          function T() {
            for (var e; (e = C.pop()); )
              _.afterMount && _.afterMount(e),
                e.componentDidMount && e.componentDidMount();
          }
          function te(e, t, N, F, n) {
            var i = e,
              H = Z;
            if (
              "string" ==
                typeof (t = null != t && "boolean" != typeof t ? t : "") ||
              "number" == typeof t
            )
              return (
                e &&
                void 0 !== e.splitText &&
                e.parentNode &&
                (!e._component || n)
                  ? e.nodeValue != t && (e.nodeValue = t)
                  : ((i = document.createTextNode(t)),
                    e &&
                      (e.parentNode && e.parentNode.replaceChild(i, e),
                      ne(e, !0))),
                (i.__preactattr_ = !0),
                i
              );
            n = t.nodeName;
            if ("function" == typeof n) {
              for (
                var r = e,
                  o = t,
                  a = N,
                  s = F,
                  l = r && r._component,
                  c = l,
                  u = r,
                  d = l && r._componentConstructor === o.nodeName,
                  h = d,
                  f = Q(o);
                l && !h && (l = l._parentComponent);

              )
                h = l.constructor === o.nodeName;
              return (
                l && h && (!s || l._component)
                  ? (re(l, f, 3, a, s), (r = l.base))
                  : (c && !d && (oe(c), (r = u = null)),
                    (l = ie(o.nodeName, f, a)),
                    r && !l.nextBase && ((l.nextBase = r), (u = null)),
                    re(l, f, 1, a, s),
                    (r = l.base),
                    u && r !== u && ((u._component = null), ne(u, !1))),
                r
              );
            }
            if (
              ((Z = "svg" === n || ("foreignObject" !== n && Z)),
              (n = String(n)),
              (!e || !K(e, n)) &&
                ((i = (function (e, t) {
                  t = t
                    ? document.createElementNS("http://www.w3.org/2000/svg", e)
                    : document.createElement(e);
                  return (t.normalizedNodeName = e), t;
                })(n, Z)),
                e))
            ) {
              for (; e.firstChild; ) i.appendChild(e.firstChild);
              e.parentNode && e.parentNode.replaceChild(i, e), ne(e, !0);
            }
            var d = i.firstChild,
              p = i.__preactattr_,
              c = t.children;
            if (null == p)
              for (
                var p = (i.__preactattr_ = {}), m = i.attributes, g = m.length;
                g--;

              )
                p[m[g].name] = m[g].value;
            if (
              !ee &&
              c &&
              1 === c.length &&
              "string" == typeof c[0] &&
              null != d &&
              void 0 !== d.splitText &&
              null == d.nextSibling
            )
              d.nodeValue != c[0] && (d.nodeValue = c[0]);
            else if ((c && c.length) || null != d) {
              var v,
                B,
                b,
                y,
                w,
                j,
                _ = i,
                x = c,
                R = N,
                q = F,
                C = ee || null != p.dangerouslySetInnerHTML,
                U = _.childNodes,
                k = [],
                T = {},
                E = 0,
                S = 0,
                W = U.length,
                I = 0,
                z = x ? x.length : 0;
              if (0 !== W)
                for (var L = 0; L < W; L++) {
                  var D = U[L],
                    Y = D.__preactattr_;
                  null !=
                  (A =
                    z && Y ? (D._component ? D._component.__key : Y.key) : null)
                    ? (E++, (T[A] = D))
                    : (Y ||
                        (void 0 !== D.splitText
                          ? !C || D.nodeValue.trim()
                          : C)) &&
                      (k[I++] = D);
                }
              if (0 !== z)
                for (L = 0; L < z; L++) {
                  var V,
                    A,
                    $ = null;
                  if (null != (A = (V = x[L]).key))
                    E && void 0 !== T[A] && (($ = T[A]), (T[A] = void 0), E--);
                  else if (S < I)
                    for (v = S; v < I; v++)
                      if (
                        void 0 !== k[v] &&
                        ((y = B = k[v]),
                        (j = C),
                        "string" == typeof (w = V) || "number" == typeof w
                          ? void 0 !== y.splitText
                          : "string" == typeof w.nodeName
                          ? !y._componentConstructor && K(y, w.nodeName)
                          : j || y._componentConstructor === w.nodeName)
                      ) {
                        ($ = B),
                          (k[v] = void 0),
                          v === I - 1 && I--,
                          v === S && S++;
                        break;
                      }
                  ($ = te($, V, R, q)),
                    (b = U[L]),
                    $ &&
                      $ !== _ &&
                      $ !== b &&
                      (null == b
                        ? _.appendChild($)
                        : $ === b.nextSibling
                        ? X(b)
                        : _.insertBefore($, b));
                }
              if (E) for (var L in T) void 0 !== T[L] && ne(T[L], !1);
              for (; S <= I; ) void 0 !== ($ = k[I--]) && ne($, !1);
            }
            var O,
              G = i,
              P = t.attributes,
              M = p;
            for (O in M)
              (P && null != P[O]) ||
                null == M[O] ||
                J(G, O, M[O], (M[O] = void 0), Z);
            for (O in P)
              "children" === O ||
                "innerHTML" === O ||
                (O in M &&
                  P[O] === ("value" === O || "checked" === O ? G : M)[O]) ||
                J(G, O, M[O], (M[O] = P[O]), Z);
            return (Z = H), i;
          }
          function ne(e, t) {
            var n = e._component;
            n
              ? oe(n)
              : (null != e.__preactattr_ &&
                  e.__preactattr_.ref &&
                  e.__preactattr_.ref(null),
                (!1 !== t && null != e.__preactattr_) || X(e),
                f(e));
          }
          function f(e) {
            for (e = e.lastChild; e; ) {
              var t = e.previousSibling;
              ne(e, !0), (e = t);
            }
          }
          var p = [];
          function ie(e, t, n) {
            var i,
              r = p.length;
            for (
              e.prototype && e.prototype.render
                ? ((i = new e(t, n)), g.call(i, t, n))
                : (((i = new g(t, n)).constructor = e), (i.render = m));
              r--;

            )
              if (p[r].constructor === e)
                return (i.nextBase = p[r].nextBase), p.splice(r, 1), i;
            return i;
          }
          function m(e, t, n) {
            return this.constructor(e, n);
          }
          function re(e, t, n, i, r) {
            e._disable ||
              ((e._disable = !0),
              (e.__ref = t.ref),
              (e.__key = t.key),
              delete t.ref,
              delete t.key,
              void 0 === e.constructor.getDerivedStateFromProps &&
                (!e.base || r
                  ? e.componentWillMount && e.componentWillMount()
                  : e.componentWillReceiveProps &&
                    e.componentWillReceiveProps(t, i)),
              i &&
                i !== e.context &&
                (e.prevContext || (e.prevContext = e.context), (e.context = i)),
              e.prevProps || (e.prevProps = e.props),
              (e.props = t),
              (e._disable = !1),
              0 !== n &&
                (1 !== n && !1 === _.syncComponentUpdates && e.base
                  ? a(e)
                  : E(e, 1, r)),
              e.__ref && e.__ref(e));
          }
          function E(e, t, n, i) {
            if (!e._disable) {
              var r,
                o = e.props,
                a = e.state,
                s = e.context,
                l = e.prevProps || o,
                c = e.prevState || a,
                u = e.prevContext || s,
                d = e.base,
                h = e.nextBase,
                f = d || h,
                p = e._component,
                m = !1,
                g = u;
              if (
                (e.constructor.getDerivedStateFromProps &&
                  ((a = x(
                    x({}, a),
                    e.constructor.getDerivedStateFromProps(o, a)
                  )),
                  (e.state = a)),
                d &&
                  ((e.props = l),
                  (e.state = c),
                  (e.context = u),
                  2 !== t &&
                  e.shouldComponentUpdate &&
                  !1 === e.shouldComponentUpdate(o, a, s)
                    ? (m = !0)
                    : e.componentWillUpdate && e.componentWillUpdate(o, a, s),
                  (e.props = o),
                  (e.state = a),
                  (e.context = s)),
                (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
                (e._dirty = !1),
                !m)
              ) {
                (u = e.render(o, a, s)),
                  e.getChildContext && (s = x(x({}, s), e.getChildContext())),
                  d &&
                    e.getSnapshotBeforeUpdate &&
                    (g = e.getSnapshotBeforeUpdate(l, c));
                var v,
                  b,
                  o = u && u.nodeName;
                if (
                  ("function" == typeof o
                    ? ((a = Q(u)),
                      (r = p) && r.constructor === o && a.key == r.__key
                        ? re(r, a, 1, s, !1)
                        : ((v = r),
                          (e._component = r = ie(o, a, s)),
                          (r.nextBase = r.nextBase || h),
                          (r._parentComponent = e),
                          re(r, a, 0, s, !1),
                          E(r, 1, n, !0)),
                      (b = r.base))
                    : ((o = f),
                      (v = p) && (o = e._component = null),
                      (!f && 1 !== t) ||
                        (o && (o._component = null),
                        (b = (function (e, t, n, i, r, o) {
                          k++ ||
                            ((Z = null != r && void 0 !== r.ownerSVGElement),
                            (ee = null != e && !("__preactattr_" in e)));
                          e = te(e, t, n, i, o);
                          return (
                            r && e.parentNode !== r && r.appendChild(e),
                            --k || ((ee = !1), o || T()),
                            e
                          );
                        })(o, u, s, n || !d, f && f.parentNode, !0)))),
                  !f ||
                    b === f ||
                    r === p ||
                    ((h = f.parentNode) &&
                      b !== h &&
                      (h.replaceChild(b, f),
                      v || ((f._component = null), ne(f, !1)))),
                  v && oe(v),
                  (e.base = b) && !i)
                ) {
                  for (var y = e, w = e; (w = w._parentComponent); )
                    (y = w).base = b;
                  (b._component = y), (b._componentConstructor = y.constructor);
                }
              }
              for (
                !d || n
                  ? C.unshift(e)
                  : m ||
                    (e.componentDidUpdate && e.componentDidUpdate(l, c, g),
                    _.afterUpdate && _.afterUpdate(e));
                e._renderCallbacks.length;

              )
                e._renderCallbacks.pop().call(e);
              k || i || T();
            }
          }
          function oe(e) {
            _.beforeUnmount && _.beforeUnmount(e);
            var t = e.base,
              n =
                ((e._disable = !0),
                e.componentWillUnmount && e.componentWillUnmount(),
                (e.base = null),
                e._component);
            n
              ? oe(n)
              : t &&
                (t.__preactattr_ &&
                  t.__preactattr_.ref &&
                  t.__preactattr_.ref(null),
                X((e.nextBase = t)),
                p.push(e),
                f(t)),
              e.__ref && e.__ref(null);
          }
          function g(e, t) {
            (this._dirty = !0),
              (this.context = t),
              (this.props = e),
              (this.state = this.state || {}),
              (this._renderCallbacks = []);
          }
          function v(e, t, n) {
            return (
              (n = n),
              (e = e),
              (t = t),
              (o = r = !(i = {})),
              k++ ||
                ((Z = null != t && void 0 !== t.ownerSVGElement),
                (ee = null != n && !("__preactattr_" in n))),
              (n = te(n, e, i, r, o)),
              t && n.parentNode !== t && t.appendChild(n),
              --k || ((ee = !1), o || T()),
              n
            );
            var i, r, o;
          }
          x(g.prototype, {
            setState: function (e, t) {
              this.prevState || (this.prevState = this.state),
                (this.state = x(
                  x({}, this.state),
                  "function" == typeof e ? e(this.state, this.props) : e
                )),
                t && this._renderCallbacks.push(t),
                a(this);
            },
            forceUpdate: function (e) {
              e && this._renderCallbacks.push(e), E(this, 2);
            },
            render: function () {},
          }),
            (e.default = {
              h: n,
              createElement: n,
              cloneElement: r,
              Component: g,
              render: v,
              rerender: d,
              options: _,
            });
        },
        function (e, t) {
          e = e.exports = { version: "2.5.7" };
          "number" == typeof __e && (__e = e);
        },
        function (e, t, n) {
          var i = n(8),
            r = n(40);
          e.exports = n(3)
            ? function (e, t, n) {
                return i.f(e, t, r(1, n));
              }
            : function (e, t, n) {
                return (e[t] = n), e;
              };
        },
        function (e, t, n) {
          var i = n(9),
            r = n(38),
            o = n(39),
            a = Object.defineProperty;
          t.f = n(3)
            ? Object.defineProperty
            : function (e, t, n) {
                if ((i(e), (t = o(t, !0)), i(n), r))
                  try {
                    return a(e, t, n);
                  } catch (e) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e;
              };
        },
        function (e, t, n) {
          var i = n(2);
          e.exports = function (e) {
            if (i(e)) return e;
            throw TypeError(e + " is not an object!");
          };
        },
        function (e, t) {
          var n = 0,
            i = Math.random();
          e.exports = function (e) {
            return "Symbol(".concat(
              void 0 === e ? "" : e,
              ")_",
              (++n + i).toString(36)
            );
          };
        },
        function (e, t, n) {
          var i = n(22);
          e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                return "String" == i(e) ? e.split("") : Object(e);
              };
        },
        function (e, t) {
          e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(4);
          e.exports = function (e, t) {
            return (
              !!e &&
              i(function () {
                t ? e.call(null, function () {}, 1) : e.call(null);
              })
            );
          };
        },
        function (e, t, n) {
          var i = n(0);
          i(i.S + i.F, "Object", { assign: n(41) });
        },
        function (e, t, n) {
          var i = n(2),
            r = n(1).document,
            o = i(r) && i(r.createElement);
          e.exports = function (e) {
            return o ? r.createElement(e) : {};
          };
        },
        function (e, t, n) {
          var o = n(1),
            a = n(7),
            s = n(17),
            l = n(10)("src"),
            i = "toString",
            r = Function[i],
            c = ("" + r).split(i);
          (n(6).inspectSource = function (e) {
            return r.call(e);
          }),
            (e.exports = function (e, t, n, i) {
              var r = "function" == typeof n;
              r && !s(n, "name") && a(n, "name", t),
                e[t] !== n &&
                  (r &&
                    !s(n, l) &&
                    a(n, l, e[t] ? "" + e[t] : c.join(String(t))),
                  e === o
                    ? (e[t] = n)
                    : i
                    ? e[t]
                      ? (e[t] = n)
                      : a(e, t, n)
                    : (delete e[t], a(e, t, n)));
            })(Function.prototype, i, function () {
              return ("function" == typeof this && this[l]) || r.call(this);
            });
        },
        function (e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function (e, t) {
            return n.call(e, t);
          };
        },
        function (e, t, n) {
          var o = n(19);
          e.exports = function (i, r, e) {
            if ((o(i), void 0 === r)) return i;
            switch (e) {
              case 1:
                return function (e) {
                  return i.call(r, e);
                };
              case 2:
                return function (e, t) {
                  return i.call(r, e, t);
                };
              case 3:
                return function (e, t, n) {
                  return i.call(r, e, t, n);
                };
            }
            return function () {
              return i.apply(r, arguments);
            };
          };
        },
        function (e, t) {
          e.exports = function (e) {
            if ("function" != typeof e)
              throw TypeError(e + " is not a function!");
            return e;
          };
        },
        function (e, t, n) {
          var i = n(42),
            r = n(28);
          e.exports =
            Object.keys ||
            function (e) {
              return i(e, r);
            };
        },
        function (e, t, n) {
          var i = n(11),
            r = n(12);
          e.exports = function (e) {
            return i(r(e));
          };
        },
        function (e, t) {
          var n = {}.toString;
          e.exports = function (e) {
            return n.call(e).slice(8, -1);
          };
        },
        function (e, t, n) {
          var l = n(21),
            c = n(24),
            u = n(43);
          e.exports = function (s) {
            return function (e, t, n) {
              var i,
                r = l(e),
                o = c(r.length),
                a = u(n, o);
              if (s && t != t) {
                for (; a < o; ) if ((i = r[a++]) != i) return !0;
              } else
                for (; a < o; a++)
                  if ((s || a in r) && r[a] === t) return s || a || 0;
              return !s && -1;
            };
          };
        },
        function (e, t, n) {
          var i = n(25),
            r = Math.min;
          e.exports = function (e) {
            return 0 < e ? r(i(e), 9007199254740991) : 0;
          };
        },
        function (e, t) {
          var n = Math.ceil,
            i = Math.floor;
          e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (0 < e ? i : n)(e);
          };
        },
        function (e, t, n) {
          var i = n(27)("keys"),
            r = n(10);
          e.exports = function (e) {
            return i[e] || (i[e] = r(e));
          };
        },
        function (e, t, n) {
          var i = n(6),
            r = n(1),
            o = "__core-js_shared__",
            a = r[o] || (r[o] = {});
          (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: i.version,
            mode: n(44) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
          });
        },
        function (e, t) {
          e.exports =
            "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
              ","
            );
        },
        function (e, t, n) {
          var i = n(12);
          e.exports = function (e) {
            return Object(i(e));
          };
        },
        function (e, t, n) {
          var i = n(8).f,
            r = Function.prototype,
            o = /^\s*function ([^ (]*)/;
          "name" in r ||
            (n(3) &&
              i(r, "name", {
                configurable: !0,
                get: function () {
                  try {
                    return ("" + this).match(o)[1];
                  } catch (e) {
                    return "";
                  }
                },
              }));
        },
        function (e, t, n) {
          "use strict";
          var i = n(0),
            r = n(32)(1);
          i(i.P + i.F * !n(13)([].map, !0), "Array", {
            map: function (e) {
              return r(this, e, arguments[1]);
            },
          });
        },
        function (e, t, n) {
          var y = n(18),
            w = n(11),
            _ = n(29),
            x = n(24),
            i = n(47);
          e.exports = function (d, e) {
            var h = 1 == d,
              f = 2 == d,
              p = 3 == d,
              m = 4 == d,
              g = 6 == d,
              v = 5 == d || g,
              b = e || i;
            return function (e, t, n) {
              for (
                var i,
                  r,
                  o = _(e),
                  a = w(o),
                  s = y(t, n, 3),
                  l = x(a.length),
                  c = 0,
                  u = h ? b(e, l) : f ? b(e, 0) : void 0;
                c < l;
                c++
              )
                if ((v || c in a) && ((r = s((i = a[c]), c, o)), d))
                  if (h) u[c] = r;
                  else if (r)
                    switch (d) {
                      case 3:
                        return !0;
                      case 5:
                        return i;
                      case 6:
                        return c;
                      case 2:
                        u.push(i);
                    }
                  else if (m) return !1;
              return g ? -1 : p || m ? m : u;
            };
          };
        },
        function (e, t, n) {
          var i = n(22);
          e.exports =
            Array.isArray ||
            function (e) {
              return "Array" == i(e);
            };
        },
        function (e, t, n) {
          var i = n(27)("wks"),
            r = n(10),
            o = n(1).Symbol,
            a = "function" == typeof o;
          (e.exports = function (e) {
            return i[e] || (i[e] = (a && o[e]) || (a ? o : r)("Symbol." + e));
          }).store = i;
        },
        function (e, t, n) {
          "use strict";
          var i = n(0),
            r = n(23)(!1),
            o = [].indexOf,
            a = !!o && 1 / [1].indexOf(1, -0) < 0;
          i(i.P + i.F * (a || !n(13)(o)), "Array", {
            indexOf: function (e) {
              return a
                ? o.apply(this, arguments) || 0
                : r(this, e, arguments[1]);
            },
          });
        },
        function (e, t, n) {
          var i = n(0);
          i(i.S, "Object", { create: n(52) });
        },
        function (e, t, n) {
          "use strict";
          (t.__esModule = !0),
            (t.default = void 0),
            n(14),
            n(30),
            n(31),
            n(35),
            n(49),
            n(50);
          var i = n(5),
            r = (n = n(51)) && n.__esModule ? n : { default: n };
          function o(e) {
            if (!e.element) throw new Error("element is not defined");
            if (!e.id) throw new Error("id is not defined");
            if (!e.source) throw new Error("source is not defined");
            Array.isArray(e.source) && (e.source = a(e.source)),
              (0, i.render)((0, i.createElement)(r.default, e), e.element);
          }
          function a(n) {
            return function (t, e) {
              e(
                n.filter(function (e) {
                  return -1 !== e.toLowerCase().indexOf(t.toLowerCase());
                })
              );
            };
          }
          (o.enhanceSelectElement = function (n) {
            if (!n.selectElement)
              throw new Error("selectElement is not defined");
            n.source ||
              ((e = [].filter.call(n.selectElement.options, function (e) {
                return e.value || n.preserveNullOptions;
              })),
              (n.source = e.map(function (e) {
                return e.textContent || e.innerText;
              }))),
              (n.onConfirm =
                n.onConfirm ||
                function (t) {
                  var e = [].filter.call(n.selectElement.options, function (e) {
                    return (e.textContent || e.innerText) === t;
                  })[0];
                  e && (e.selected = !0);
                }),
              (!n.selectElement.value && void 0 !== n.defaultValue) ||
                ((e =
                  n.selectElement.options[
                    n.selectElement.options.selectedIndex
                  ]),
                (n.defaultValue = e.textContent || e.innerText)),
              void 0 === n.name && (n.name = ""),
              void 0 === n.id &&
                (void 0 === n.selectElement.id
                  ? (n.id = "")
                  : (n.id = n.selectElement.id)),
              void 0 === n.autoselect && (n.autoselect = !0);
            var e = document.createElement("div");
            n.selectElement.parentNode.insertBefore(e, n.selectElement),
              o(Object.assign({}, n, { element: e })),
              (n.selectElement.style.display = "none"),
              (n.selectElement.id = n.selectElement.id + "-select");
          }),
            (t.default = o);
        },
        function (e, t, n) {
          e.exports =
            !n(3) &&
            !n(4)(function () {
              return (
                7 !=
                Object.defineProperty(n(15)("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (e, t, n) {
          var r = n(2);
          e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, i;
            if (
              t &&
              "function" == typeof (n = e.toString) &&
              !r((i = n.call(e)))
            )
              return i;
            if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e))))
              return i;
            if (
              t ||
              "function" != typeof (n = e.toString) ||
              r((i = n.call(e)))
            )
              throw TypeError("Can't convert object to primitive value");
            return i;
          };
        },
        function (e, t) {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
          };
        },
        function (e, t, n) {
          "use strict";
          var h = n(20),
            f = n(45),
            p = n(46),
            m = n(29),
            g = n(11),
            r = Object.assign;
          e.exports =
            !r ||
            n(4)(function () {
              var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
              return (
                (e[n] = 7),
                i.split("").forEach(function (e) {
                  t[e] = e;
                }),
                7 != r({}, e)[n] || Object.keys(r({}, t)).join("") != i
              );
            })
              ? function (e, t) {
                  for (
                    var n = m(e), i = arguments.length, r = 1, o = f.f, a = p.f;
                    r < i;

                  )
                    for (
                      var s,
                        l = g(arguments[r++]),
                        c = o ? h(l).concat(o(l)) : h(l),
                        u = c.length,
                        d = 0;
                      d < u;

                    )
                      a.call(l, (s = c[d++])) && (n[s] = l[s]);
                  return n;
                }
              : r;
        },
        function (e, t, n) {
          var a = n(17),
            s = n(21),
            l = n(23)(!1),
            c = n(26)("IE_PROTO");
          e.exports = function (e, t) {
            var n,
              i = s(e),
              r = 0,
              o = [];
            for (n in i) n != c && a(i, n) && o.push(n);
            for (; t.length > r; ) !a(i, (n = t[r++])) || ~l(o, n) || o.push(n);
            return o;
          };
        },
        function (e, t, n) {
          var i = n(25),
            r = Math.max,
            o = Math.min;
          e.exports = function (e, t) {
            return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t);
          };
        },
        function (e, t) {
          e.exports = !1;
        },
        function (e, t) {
          t.f = Object.getOwnPropertySymbols;
        },
        function (e, t) {
          t.f = {}.propertyIsEnumerable;
        },
        function (e, t, n) {
          var i = n(48);
          e.exports = function (e, t) {
            return new (i(e))(t);
          };
        },
        function (e, t, n) {
          var i = n(2),
            r = n(33),
            o = n(34)("species");
          e.exports = function (e) {
            var t;
            return (
              r(e) &&
                ("function" != typeof (t = e.constructor) ||
                  (t !== Array && !r(t.prototype)) ||
                  (t = void 0),
                i(t) && null === (t = t[o]) && (t = void 0)),
              void 0 === t ? Array : t
            );
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(0),
            r = n(32)(2);
          i(i.P + i.F * !n(13)([].filter, !0), "Array", {
            filter: function (e) {
              return r(this, e, arguments[1]);
            },
          });
        },
        function (e, t, n) {
          var i = n(0);
          i(i.S, "Array", { isArray: n(33) });
        },
        function (e, t, n) {
          "use strict";
          (t.__esModule = !0),
            (t.default = void 0),
            n(14),
            n(36),
            n(30),
            n(31),
            n(35),
            n(55),
            n(58);
          var H = n(5),
            B = i(n(60)),
            n = i(n(61));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function j() {
            return (j =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n,
                    i = arguments[t];
                  for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function r(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          var o = {
            13: "enter",
            27: "escape",
            32: "space",
            38: "up",
            40: "down",
          };
          function R() {
            return (
              "undefined" != typeof navigator &&
              !(
                !navigator.userAgent.match(/(iPod|iPhone|iPad)/g) ||
                !navigator.userAgent.match(/AppleWebKit/g)
              )
            );
          }
          (a = H.Component),
            (l = a),
            ((s = c).prototype = Object.create(l.prototype)),
            ((s.prototype.constructor = s).__proto__ = l),
            ((s = c.prototype).isQueryAnOption = function (e, t) {
              var n = this;
              return (
                -1 !==
                t
                  .map(function (e) {
                    return n.templateInputValue(e).toLowerCase();
                  })
                  .indexOf(e.toLowerCase())
              );
            }),
            (s.componentDidMount = function () {
              this.pollInputElement();
            }),
            (s.componentWillUnmount = function () {
              clearTimeout(this.$pollInput);
            }),
            (s.pollInputElement = function () {
              var e = this;
              this.getDirectInputChanges(),
                (this.$pollInput = setTimeout(function () {
                  e.pollInputElement();
                }, 100));
            }),
            (s.getDirectInputChanges = function () {
              var e = this.elementReferences[-1];
              e &&
                e.value !== this.state.query &&
                this.handleInputChange({ target: { value: e.value } });
            }),
            (s.componentDidUpdate = function (e, t) {
              var n = this.state.focused,
                i = t.focused !== n;
              !i || null === n || this.elementReferences[n].focus();
              i = i && null === t.focused;
              -1 === n &&
                i &&
                (t = this.elementReferences[n]).setSelectionRange(
                  0,
                  t.value.length
                );
            }),
            (s.hasAutoselect = function () {
              return !R() && this.props.autoselect;
            }),
            (s.templateInputValue = function (e) {
              var t = this.props.templates && this.props.templates.inputValue;
              return t ? t(e) : e;
            }),
            (s.templateSuggestion = function (e) {
              var t = this.props.templates && this.props.templates.suggestion;
              return t ? t(e) : e;
            }),
            (s.handleComponentBlur = function (e) {
              var t,
                n = this.state,
                i = n.options,
                r = n.query,
                n = n.selected;
              this.props.confirmOnBlur
                ? ((t = e.query || r), this.props.onConfirm(i[n]))
                : (t = r),
                this.setState({
                  focused: null,
                  menuOpen: e.menuOpen || !1,
                  query: t,
                  selected: null,
                  validChoiceMade: this.isQueryAnOption(t, i),
                });
            }),
            (s.handleListMouseLeave = function (e) {
              this.setState({ hovered: null });
            }),
            (s.handleOptionBlur = function (e, t) {
              var n = this.state,
                i = n.focused,
                r = n.menuOpen,
                o = n.options,
                n = n.selected,
                a = null === e.relatedTarget,
                e = e.relatedTarget === this.elementReferences[-1],
                t = i !== t && -1 !== i;
              ((!t && a) || (!t && !e)) &&
                ((i = r && R()),
                this.handleComponentBlur({
                  menuOpen: i,
                  query: this.templateInputValue(o[n]),
                }));
            }),
            (s.handleInputBlur = function (e) {
              var t = this.state,
                n = t.focused,
                i = t.menuOpen,
                r = t.options,
                o = t.query,
                t = t.selected;
              -1 === n &&
                ((n = i && R()),
                (i = R() ? o : this.templateInputValue(r[t])),
                this.handleComponentBlur({ menuOpen: n, query: i }));
            }),
            (s.handleInputChange = function (e) {
              var n = this,
                t = this.props,
                i = t.minLength,
                r = t.source,
                t = t.showAllValues,
                o = this.hasAutoselect(),
                e = e.target.value,
                a = 0 === e.length,
                s = this.state.query.length !== e.length,
                i = e.length >= i;
              this.setState({ query: e, ariaHint: a }),
                t || (!a && s && i)
                  ? r(e, function (e) {
                      var t = 0 < e.length;
                      n.setState({
                        menuOpen: t,
                        options: e,
                        selected: o && t ? 0 : -1,
                        validChoiceMade: !1,
                      });
                    })
                  : (!a && i) || this.setState({ menuOpen: !1, options: [] });
            }),
            (s.handleInputClick = function (e) {
              this.handleInputChange(e);
            }),
            (s.handleInputFocus = function (e) {
              var t = this.state,
                n = t.query,
                i = t.validChoiceMade,
                t = t.options,
                r = this.props.minLength,
                o = !i && n.length >= r && 0 < t.length;
              o
                ? this.setState(function (e) {
                    e = e.menuOpen;
                    return { focused: -1, menuOpen: o || e, selected: -1 };
                  })
                : this.setState({ focused: -1 });
            }),
            (s.handleOptionFocus = function (e) {
              this.setState({ focused: e, hovered: null, selected: e });
            }),
            (s.handleOptionMouseEnter = function (e, t) {
              R() || this.setState({ hovered: t });
            }),
            (s.handleOptionClick = function (e, t) {
              var t = this.state.options[t],
                n = this.templateInputValue(t);
              this.props.onConfirm(t),
                this.setState({
                  focused: -1,
                  hovered: null,
                  menuOpen: !1,
                  query: n,
                  selected: -1,
                  validChoiceMade: !0,
                }),
                this.forceUpdate();
            }),
            (s.handleOptionMouseDown = function (e) {
              e.preventDefault();
            }),
            (s.handleUpArrow = function (e) {
              e.preventDefault();
              var e = this.state,
                t = e.menuOpen,
                e = e.selected;
              -1 !== e && t && this.handleOptionFocus(e - 1);
            }),
            (s.handleDownArrow = function (e) {
              var t,
                n,
                i = this;
              e.preventDefault(),
                this.props.showAllValues && !1 === this.state.menuOpen
                  ? (e.preventDefault(),
                    this.props.source("", function (e) {
                      i.setState({
                        menuOpen: !0,
                        options: e,
                        selected: 0,
                        focused: 0,
                        hovered: null,
                      });
                    }))
                  : !0 === this.state.menuOpen &&
                    ((t = (e = this.state).menuOpen),
                    (n = e.options),
                    (e = e.selected) !== n.length - 1 &&
                      t &&
                      this.handleOptionFocus(e + 1));
            }),
            (s.handleSpace = function (e) {
              var t = this;
              this.props.showAllValues &&
                !1 === this.state.menuOpen &&
                "" === this.state.query &&
                (e.preventDefault(),
                this.props.source("", function (e) {
                  t.setState({ menuOpen: !0, options: e });
                })),
                -1 !== this.state.focused &&
                  (e.preventDefault(),
                  this.handleOptionClick(e, this.state.focused));
            }),
            (s.handleEnter = function (e) {
              this.state.menuOpen &&
                (e.preventDefault(),
                0 <= this.state.selected &&
                  this.handleOptionClick(e, this.state.selected));
            }),
            (s.handlePrintableKey = function (e) {
              var t = this.elementReferences[-1];
              e.target !== t && t.focus();
            }),
            (s.handleKeyDown = function (e) {
              switch (o[e.keyCode]) {
                case "up":
                  this.handleUpArrow(e);
                  break;
                case "down":
                  this.handleDownArrow(e);
                  break;
                case "space":
                  this.handleSpace(e);
                  break;
                case "enter":
                  this.handleEnter(e);
                  break;
                case "escape":
                  this.handleComponentBlur({ query: this.state.query });
                  break;
                default:
                  ((47 < (t = e.keyCode) && t < 58) ||
                    32 === t ||
                    8 === t ||
                    (64 < t && t < 91) ||
                    (95 < t && t < 112) ||
                    (185 < t && t < 193) ||
                    (218 < t && t < 223)) &&
                    this.handlePrintableKey(e);
              }
              var t;
            }),
            (s.render = function () {
              var e,
                o = this,
                t = this.props,
                n = t.cssNamespace,
                i = t.displayMenu,
                a = t.id,
                r = t.minLength,
                s = t.name,
                l = t.placeholder,
                c = t.required,
                u = t.showAllValues,
                d = t.tNoResults,
                h = t.tStatusQueryTooShort,
                f = t.tStatusNoResults,
                p = t.tStatusSelectedOption,
                m = t.tStatusResults,
                g = t.tAssistiveHint,
                t = t.dropdownArrow,
                v = this.state,
                b = v.focused,
                y = v.hovered,
                w = v.menuOpen,
                _ = v.options,
                x = v.query,
                C = v.selected,
                k = v.ariaHint,
                v = v.validChoiceMade,
                T = this.hasAutoselect(),
                E = 0 === _.length,
                S = 0 !== x.length,
                I = x.length >= r,
                E = this.props.showNoOptionsFound && -1 === b && E && S && I,
                S = n + "__wrapper",
                I = n + "__input",
                L = null !== b ? " " + I + "--focused" : "",
                D = this.props.showAllValues
                  ? " " + I + "--show-all-values"
                  : " " + I + "--default",
                A = n + "__dropdown-arrow-down",
                $ = -1 !== b && null !== b,
                O = n + "__menu",
                i = O + "--" + i,
                N = O + "--" + (w || E ? "visible" : "hidden"),
                P = n + "__option",
                F = n + "__hint",
                M = this.templateInputValue(_[C]),
                T =
                  M && 0 === M.toLowerCase().indexOf(x.toLowerCase()) && T
                    ? x + M.substr(x.length)
                    : "",
                M = a + "__assistiveHint",
                k = k ? { "aria-describedby": M } : null;
              return (
                u &&
                  "string" == typeof (e = t({ className: A })) &&
                  (e = (0, H.createElement)("div", {
                    className: n + "__dropdown-arrow-down-wrapper",
                    dangerouslySetInnerHTML: { __html: e },
                  })),
                (0, H.createElement)(
                  "div",
                  { className: S, onKeyDown: this.handleKeyDown },
                  (0, H.createElement)(B.default, {
                    id: a,
                    length: _.length,
                    queryLength: x.length,
                    minQueryLength: r,
                    selectedOption: this.templateInputValue(_[C]),
                    selectedOptionIndex: C,
                    validChoiceMade: v,
                    isInFocus: null !== this.state.focused,
                    tQueryTooShort: h,
                    tNoResults: f,
                    tSelectedOption: p,
                    tResults: m,
                  }),
                  T &&
                    (0, H.createElement)(
                      "span",
                      null,
                      (0, H.createElement)("input", {
                        className: F,
                        readonly: !0,
                        tabIndex: "-1",
                        value: T,
                      })
                    ),
                  (0, H.createElement)(
                    "input",
                    j(
                      {
                        "aria-expanded": w ? "true" : "false",
                        "aria-activedescendant": !!$ && a + "__option--" + b,
                        "aria-owns": a + "__listbox",
                        "aria-autocomplete": this.hasAutoselect()
                          ? "both"
                          : "list",
                      },
                      k,
                      {
                        autoComplete: "off",
                        className: I + L + D,
                        id: a,
                        onClick: function (e) {
                          return o.handleInputClick(e);
                        },
                        onBlur: this.handleInputBlur,
                      },
                      { onInput: this.handleInputChange },
                      {
                        onFocus: this.handleInputFocus,
                        name: s,
                        placeholder: l,
                        ref: function (e) {
                          o.elementReferences[-1] = e;
                        },
                        type: "text",
                        role: "combobox",
                        required: c,
                        value: x,
                      }
                    )
                  ),
                  e,
                  (0, H.createElement)(
                    "ul",
                    {
                      className: O + " " + i + " " + N,
                      onMouseLeave: function (e) {
                        return o.handleListMouseLeave(e);
                      },
                      id: a + "__listbox",
                      role: "listbox",
                    },
                    _.map(function (e, t) {
                      var n =
                          (-1 === b ? C === t : b === t) && null === y
                            ? " " + P + "--focused"
                            : "",
                        i = t % 2 ? " " + P + "--odd" : "",
                        r = R()
                          ? "<span id=" +
                            a +
                            "__option-suffix--" +
                            t +
                            ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' +
                            (t + 1) +
                            " of " +
                            _.length +
                            "</span>"
                          : "";
                      return (0, H.createElement)("li", {
                        "aria-selected": b === t ? "true" : "false",
                        className: P + n + i,
                        dangerouslySetInnerHTML: {
                          __html: o.templateSuggestion(e) + r,
                        },
                        id: a + "__option--" + t,
                        key: t,
                        onBlur: function (e) {
                          return o.handleOptionBlur(e, t);
                        },
                        onClick: function (e) {
                          return o.handleOptionClick(e, t);
                        },
                        onMouseDown: o.handleOptionMouseDown,
                        onMouseEnter: function (e) {
                          return o.handleOptionMouseEnter(e, t);
                        },
                        ref: function (e) {
                          o.elementReferences[t] = e;
                        },
                        role: "option",
                        tabIndex: "-1",
                        "aria-posinset": t + 1,
                        "aria-setsize": _.length,
                      });
                    }),
                    E &&
                      (0, H.createElement)(
                        "li",
                        { className: P + " " + P + "--no-results" },
                        d()
                      )
                  ),
                  (0, H.createElement)(
                    "span",
                    { id: M, style: { display: "none" } },
                    g()
                  )
                )
              );
            });
          var a,
            s,
            l = c;
          function c(e) {
            var t;
            return (
              ((t = a.call(this, e) || this).elementReferences = {}),
              (t.state = {
                focused: null,
                hovered: null,
                menuOpen: !1,
                options: e.defaultValue ? [e.defaultValue] : [],
                query: e.defaultValue,
                validChoiceMade: !1,
                selected: null,
                ariaHint: !0,
              }),
              (t.handleComponentBlur = t.handleComponentBlur.bind(r(r(t)))),
              (t.handleKeyDown = t.handleKeyDown.bind(r(r(t)))),
              (t.handleUpArrow = t.handleUpArrow.bind(r(r(t)))),
              (t.handleDownArrow = t.handleDownArrow.bind(r(r(t)))),
              (t.handleEnter = t.handleEnter.bind(r(r(t)))),
              (t.handlePrintableKey = t.handlePrintableKey.bind(r(r(t)))),
              (t.handleListMouseLeave = t.handleListMouseLeave.bind(r(r(t)))),
              (t.handleOptionBlur = t.handleOptionBlur.bind(r(r(t)))),
              (t.handleOptionClick = t.handleOptionClick.bind(r(r(t)))),
              (t.handleOptionFocus = t.handleOptionFocus.bind(r(r(t)))),
              (t.handleOptionMouseDown = t.handleOptionMouseDown.bind(r(r(t)))),
              (t.handleOptionMouseEnter = t.handleOptionMouseEnter.bind(
                r(r(t))
              )),
              (t.handleInputBlur = t.handleInputBlur.bind(r(r(t)))),
              (t.handleInputChange = t.handleInputChange.bind(r(r(t)))),
              (t.handleInputFocus = t.handleInputFocus.bind(r(r(t)))),
              (t.pollInputElement = t.pollInputElement.bind(r(r(t)))),
              (t.getDirectInputChanges = t.getDirectInputChanges.bind(r(r(t)))),
              t
            );
          }
          (t.default = l).defaultProps = {
            autoselect: !1,
            cssNamespace: "autocomplete",
            defaultValue: "",
            displayMenu: "inline",
            minLength: 0,
            name: "input-autocomplete",
            placeholder: "",
            onConfirm: function () {},
            confirmOnBlur: !0,
            showNoOptionsFound: !0,
            showAllValues: !1,
            required: !1,
            tNoResults: function () {
              return "No results found";
            },
            tAssistiveHint: function () {
              return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.";
            },
            dropdownArrow: n.default,
          };
        },
        function (e, t, n) {
          function i() {}
          var r = n(9),
            o = n(53),
            a = n(28),
            s = n(26)("IE_PROTO"),
            l = "prototype",
            c = function () {
              var e = n(15)("iframe"),
                t = a.length;
              for (
                e.style.display = "none",
                  n(54).appendChild(e),
                  e.src = "javascript:",
                  (e = e.contentWindow.document).open(),
                  e.write("<script>document.F=Object</script>"),
                  e.close(),
                  c = e.F;
                t--;

              )
                delete c[l][a[t]];
              return c();
            };
          e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((i[l] = r(e)), (n = new i()), (i[l] = null), (n[s] = e))
                  : (n = c()),
                void 0 === t ? n : o(n, t)
              );
            };
        },
        function (e, t, n) {
          var a = n(8),
            s = n(9),
            l = n(20);
          e.exports = n(3)
            ? Object.defineProperties
            : function (e, t) {
                s(e);
                for (var n, i = l(t), r = i.length, o = 0; o < r; )
                  a.f(e, (n = i[o++]), t[n]);
                return e;
              };
        },
        function (e, t, n) {
          n = n(1).document;
          e.exports = n && n.documentElement;
        },
        function (e, t, n) {
          var i = n(0);
          i(i.P, "Function", { bind: n(56) });
        },
        function (e, t, n) {
          "use strict";
          var i = n(19),
            r = n(2),
            u = n(57),
            d = [].slice,
            h = {};
          e.exports =
            Function.bind ||
            function (a) {
              function s() {
                var e = c.concat(d.call(arguments));
                if (this instanceof s) {
                  var t = l,
                    n = e.length,
                    i = e;
                  if (!(n in h)) {
                    for (var r = [], o = 0; o < n; o++) r[o] = "a[" + o + "]";
                    h[n] = Function("F,a", "return new F(" + r.join(",") + ")");
                  }
                  return h[n](t, i);
                }
                return u(l, e, a);
              }
              var l = i(this),
                c = d.call(arguments, 1);
              return r(l.prototype) && (s.prototype = l.prototype), s;
            };
        },
        function (e, t) {
          e.exports = function (e, t, n) {
            var i = void 0 === n;
            switch (t.length) {
              case 0:
                return i ? e() : e.call(n);
              case 1:
                return i ? e(t[0]) : e.call(n, t[0]);
              case 2:
                return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
              case 3:
                return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
              case 4:
                return i
                  ? e(t[0], t[1], t[2], t[3])
                  : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
          };
        },
        function (e, t, n) {
          n(59)("match", 1, function (i, r, e) {
            return [
              function (e) {
                "use strict";
                var t = i(this),
                  n = null == e ? void 0 : e[r];
                return void 0 !== n
                  ? n.call(e, t)
                  : new RegExp(e)[r](String(t));
              },
              e,
            ];
          });
        },
        function (e, t, n) {
          "use strict";
          var a = n(7),
            s = n(16),
            l = n(4),
            c = n(12),
            u = n(34);
          e.exports = function (t, e, n) {
            var i = u(t),
              n = n(c, i, ""[t]),
              r = n[0],
              o = n[1];
            l(function () {
              var e = {};
              return (
                (e[i] = function () {
                  return 7;
                }),
                7 != ""[t](e)
              );
            }) &&
              (s(String.prototype, t, r),
              a(
                RegExp.prototype,
                i,
                2 == e
                  ? function (e, t) {
                      return o.call(e, this, t);
                    }
                  : function (e) {
                      return o.call(e, this);
                    }
              ));
          };
        },
        function (e, t, n) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0), n(36);
          var r,
            i,
            p = n(5),
            n =
              ((r = p.Component),
              (n = r),
              ((i = o).prototype = Object.create(n.prototype)),
              ((i.prototype.constructor = i).__proto__ = n),
              ((i = o.prototype).componentWillMount = function () {
                var i,
                  r,
                  o,
                  a,
                  e = this;
                this.debounceStatusUpdate =
                  ((i = function () {
                    var t;
                    e.state.debounced ||
                      ((t = !e.props.isInFocus || e.props.validChoiceMade),
                      e.setState(function (e) {
                        return { bump: !e.bump, debounced: !0, silenced: t };
                      }));
                  }),
                  (r = 1400),
                  function () {
                    var e = this,
                      t = arguments,
                      n = o && !a;
                    clearTimeout(a),
                      (a = setTimeout(function () {
                        (a = null), o || i.apply(e, t);
                      }, r)),
                      n && i.apply(e, t);
                  });
              }),
              (i.componentWillReceiveProps = function (e) {
                e.queryLength, this.setState({ debounced: !1 });
              }),
              (i.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.length,
                  i = e.queryLength,
                  r = e.minQueryLength,
                  o = e.selectedOption,
                  a = e.selectedOptionIndex,
                  s = e.tQueryTooShort,
                  l = e.tNoResults,
                  c = e.tSelectedOption,
                  e = e.tResults,
                  u = this.state,
                  d = u.bump,
                  h = u.debounced,
                  u = u.silenced,
                  i = i < r,
                  f = 0 === n,
                  c = o ? c(o, n, a) : "",
                  o = i ? s(r) : f ? l() : e(n, c);
                return (
                  this.debounceStatusUpdate(),
                  (0, p.createElement)(
                    "div",
                    {
                      style: {
                        border: "0",
                        clip: "rect(0 0 0 0)",
                        height: "1px",
                        marginBottom: "-1px",
                        marginRight: "-1px",
                        overflow: "hidden",
                        padding: "0",
                        position: "absolute",
                        whiteSpace: "nowrap",
                        width: "1px",
                      },
                    },
                    (0, p.createElement)(
                      "div",
                      {
                        id: t + "__status--A",
                        role: "status",
                        "aria-atomic": "true",
                        "aria-live": "polite",
                      },
                      !u && h && d ? o : ""
                    ),
                    (0, p.createElement)(
                      "div",
                      {
                        id: t + "__status--B",
                        role: "status",
                        "aria-atomic": "true",
                        "aria-live": "polite",
                      },
                      u || !h || d ? "" : o
                    )
                  )
                );
              }),
              o);
          function o() {
            for (
              var e, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (
              ((e = r.call.apply(r, [this].concat(n)) || this).state = {
                bump: !1,
                debounced: !1,
              }),
              e
            );
          }
          (t.default = n).defaultProps = {
            tQueryTooShort: function (e) {
              return "Type in " + e + " or more characters for results";
            },
            tNoResults: function () {
              return "No search results";
            },
            tSelectedOption: function (e, t, n) {
              return e + " " + (n + 1) + " of " + t + " is highlighted";
            },
            tResults: function (e, t) {
              return (
                e +
                " " +
                (1 === e ? "result" : "results") +
                " " +
                (1 === e ? "is" : "are") +
                " available. " +
                t
              );
            },
          };
        },
        function (e, t, n) {
          "use strict";
          (t.__esModule = !0), (t.default = void 0);
          var i = n(5);
          t.default = function (e) {
            e = e.className;
            return (0, i.createElement)(
              "svg",
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                focusable: "false",
              },
              (0, i.createElement)(
                "g",
                { stroke: "none", fill: "none", "fill-rule": "evenodd" },
                (0, i.createElement)("polygon", {
                  fill: "#000000",
                  points: "0 0 22 0 11 17",
                })
              )
            );
          };
        },
      ]),
      (i = {}),
      (r.m = n),
      (r.c = i),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            r.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = "/"),
      r((r.s = 37)).default
    );
    function r(e) {
      if (i[e]) return i[e].exports;
      var t = (i[e] = { i: e, l: !1, exports: {} });
      return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
    }
    var n, i;
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).bootstrap = {}),
          e.jQuery,
          e.Popper
        );
  })(this, function (e, t, n) {
    "use strict";
    function N(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var u = N(t),
      F = N(n);
    function H(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function a(e, t, n) {
      t && H(e.prototype, t), n && H(e, n);
    }
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function B(e, t) {
      return (B =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var j = "transitionend";
    function R(e) {
      var t = this,
        n = !1;
      return (
        u.default(this).one(d.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || d.triggerTransitionEnd(t);
        }, e),
        this
      );
    }
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          (t && "#" !== t) ||
            (t = (e = e.getAttribute("href")) && "#" !== e ? e.trim() : "");
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var t = u.default(e).css("transition-duration"),
            e = u.default(e).css("transition-delay"),
            n = parseFloat(t),
            i = parseFloat(e);
          return n || i
            ? ((t = t.split(",")[0]),
              (e = e.split(",")[0]),
              1e3 * (parseFloat(t) + parseFloat(e)))
            : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
          u.default(e).trigger(j);
        },
        supportsTransitionEnd: function () {
          return Boolean(j);
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                o = t[i],
                o =
                  o && d.isElement(o)
                    ? "element"
                    : null == (o = o)
                    ? "" + o
                    : {}.toString
                        .call(o)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(r).test(o))
                throw new Error(
                  e.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    o +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
        },
        findShadowRoot: function (e) {
          return document.documentElement.attachShadow
            ? "function" == typeof e.getRootNode
              ? (t = e.getRootNode()) instanceof ShadowRoot
                ? t
                : null
              : e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? d.findShadowRoot(e.parentNode)
              : null
            : null;
          var t;
        },
        jQueryDetection: function () {
          if (void 0 === u.default)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          var e = u.default.fn.jquery.split(" ")[0].split(".");
          if (
            (e[0] < 2 && e[1] < 9) ||
            (1 === e[0] && 9 === e[1] && e[2] < 1) ||
            4 <= e[0]
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        },
      },
      i =
        (d.jQueryDetection(),
        (u.default.fn.emulateTransitionEnd = R),
        (u.default.event.special[d.TRANSITION_END] = {
          bindType: j,
          delegateType: j,
          handle: function (e) {
            if (u.default(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          },
        }),
        "alert"),
      q = "bs.alert",
      U = u.default.fn[i],
      r = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, q), (this._element = null);
          }),
          (e._getRootElement = function (e) {
            var t = d.getSelectorFromElement(e),
              n = !1;
            return (n =
              (n = t ? document.querySelector(t) : n) ||
              u.default(e).closest(".alert")[0]);
          }),
          (e._triggerCloseEvent = function (e) {
            var t = u.default.Event("close.bs.alert");
            return u.default(e).trigger(t), t;
          }),
          (e._removeElement = function (t) {
            var e,
              n = this;
            u.default(t).removeClass("show"),
              u.default(t).hasClass("fade")
                ? ((e = d.getTransitionDurationFromElement(t)),
                  u
                    .default(t)
                    .one(d.TRANSITION_END, function (e) {
                      return n._destroyElement(t, e);
                    })
                    .emulateTransitionEnd(e))
                : this._destroyElement(t);
          }),
          (e._destroyElement = function (e) {
            u.default(e).detach().trigger("closed.bs.alert").remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(q);
              t || ((t = new i(this)), e.data(q, t)),
                "close" === n && t[n](this);
            });
          }),
          (i._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          a(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
          ]),
          i
        );
      })(),
      o =
        (u
          .default(document)
          .on(
            "click.bs.alert.data-api",
            '[data-dismiss="alert"]',
            r._handleDismiss(new r())
          ),
        (u.default.fn[i] = r._jQueryInterface),
        (u.default.fn[i].Constructor = r),
        (u.default.fn[i].noConflict = function () {
          return (u.default.fn[i] = U), r._jQueryInterface;
        }),
        "button"),
      W = "bs.button",
      z = u.default.fn[o],
      l = "active",
      t = '[data-toggle^="button"]',
      Y = 'input:not([type="hidden"])',
      c = (function () {
        function r(e) {
          (this._element = e), (this.shouldAvoidTriggerChange = !1);
        }
        var e = r.prototype;
        return (
          (e.toggle = function () {
            var e,
              t = !0,
              n = !0,
              i = u
                .default(this._element)
                .closest('[data-toggle="buttons"]')[0];
            i &&
              (e = this._element.querySelector(Y)) &&
              ("radio" === e.type &&
                (e.checked && this._element.classList.contains(l)
                  ? (t = !1)
                  : (i = i.querySelector(".active")) &&
                    u.default(i).removeClass(l)),
              t &&
                (("checkbox" !== e.type && "radio" !== e.type) ||
                  (e.checked = !this._element.classList.contains(l)),
                this.shouldAvoidTriggerChange ||
                  u.default(e).trigger("change")),
              e.focus(),
              (n = !1)),
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(l)
                  ),
                t && u.default(this._element).toggleClass(l));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, W), (this._element = null);
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(W);
              t || ((t = new r(this)), e.data(W, t)),
                (t.shouldAvoidTriggerChange = i),
                "toggle" === n && t[n]();
            });
          }),
          a(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
          ]),
          r
        );
      })(),
      h =
        (u
          .default(document)
          .on("click.bs.button.data-api", t, function (e) {
            var t,
              n = e.target,
              i = n;
            !(n = u.default(n).hasClass("btn")
              ? n
              : u.default(n).closest(".btn")[0]) ||
            n.hasAttribute("disabled") ||
            n.classList.contains("disabled") ||
            ((t = n.querySelector(Y)) &&
              (t.hasAttribute("disabled") || t.classList.contains("disabled")))
              ? e.preventDefault()
              : ("INPUT" !== i.tagName && "LABEL" === n.tagName) ||
                c._jQueryInterface.call(
                  u.default(n),
                  "toggle",
                  "INPUT" === i.tagName
                );
          })
          .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            t,
            function (e) {
              var t = u.default(e.target).closest(".btn")[0];
              u.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
            }
          ),
        u.default(window).on("load.bs.button.data-api", function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-toggle="buttons"] .btn')
              ),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var i = e[t],
              r = i.querySelector(Y);
            r.checked || r.hasAttribute("checked")
              ? i.classList.add(l)
              : i.classList.remove(l);
          }
          for (
            var o = 0,
              a = (e = [].slice.call(
                document.querySelectorAll('[data-toggle="button"]')
              )).length;
            o < a;
            o++
          ) {
            var s = e[o];
            "true" === s.getAttribute("aria-pressed")
              ? s.classList.add(l)
              : s.classList.remove(l);
          }
        }),
        (u.default.fn[o] = c._jQueryInterface),
        (u.default.fn[o].Constructor = c),
        (u.default.fn[o].noConflict = function () {
          return (u.default.fn[o] = z), c._jQueryInterface;
        }),
        "carousel"),
      f = "bs.carousel",
      V = "." + f,
      G = u.default.fn[h],
      p = "active",
      K = "next",
      Q = "prev",
      X = "slid" + V,
      J = ".active.carousel-item",
      Z = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      ee = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      te = { TOUCH: "touch", PEN: "pen" },
      m = (function () {
        function r(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(
              ".carousel-indicators"
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var e = r.prototype;
        return (
          (e.next = function () {
            this._isSliding || this._slide(K);
          }),
          (e.nextWhenVisible = function () {
            var e = u.default(this._element);
            !document.hidden &&
              e.is(":visible") &&
              "hidden" !== e.css("visibility") &&
              this.next();
          }),
          (e.prev = function () {
            this._isSliding || this._slide(Q);
          }),
          (e.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (e.to = function (e) {
            var t = this,
              n =
                ((this._activeElement = this._element.querySelector(J)),
                this._getItemIndex(this._activeElement));
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                u.default(this._element).one(X, function () {
                  return t.to(e);
                });
              else {
                if (n === e) return this.pause(), void this.cycle();
                this._slide(n < e ? K : Q, this._items[e]);
              }
          }),
          (e.dispose = function () {
            u.default(this._element).off(V),
              u.default.removeData(this._element, f),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function (e) {
            return (e = s({}, Z, e)), d.typeCheckConfig(h, e, ee), e;
          }),
          (e._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            e <= 40 ||
              ((e = e / this.touchDeltaX),
              (this.touchDeltaX = 0) < e && this.prev(),
              e < 0 && this.next());
          }),
          (e._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              u.default(this._element).on("keydown.bs.carousel", function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                u
                  .default(this._element)
                  .on("mouseenter.bs.carousel", function (e) {
                    return t.pause(e);
                  })
                  .on("mouseleave.bs.carousel", function (e) {
                    return t.cycle(e);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (e._addTouchEventListeners = function () {
            var e,
              t,
              n = this;
            this._touchSupported &&
              ((e = function (e) {
                n._pointerEvent && te[e.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = e.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = e.originalEvent.touches[0].clientX);
              }),
              (t = function (e) {
                n._pointerEvent &&
                  te[e.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (e) {
                      return n.cycle(e);
                    }, 500 + n._config.interval)));
              }),
              u
                .default(this._element.querySelectorAll(".carousel-item img"))
                .on("dragstart.bs.carousel", function (e) {
                  return e.preventDefault();
                }),
              this._pointerEvent
                ? (u.default(this._element).on("pointerdown.bs.carousel", e),
                  u.default(this._element).on("pointerup.bs.carousel", t),
                  this._element.classList.add("pointer-event"))
                : (u.default(this._element).on("touchstart.bs.carousel", e),
                  u
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      (e = e),
                        (n.touchDeltaX =
                          e.originalEvent.touches &&
                          1 < e.originalEvent.touches.length
                            ? 0
                            : e.originalEvent.touches[0].clientX -
                              n.touchStartX);
                    }),
                  u.default(this._element).on("touchend.bs.carousel", t)));
          }),
          (e._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (e._getItemByDirection = function (e, t) {
            var n = e === K,
              i = e === Q,
              r = this._getItemIndex(t),
              o = this._items.length - 1;
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
              return t;
            i = (r + (e === Q ? -1 : 1)) % this._items.length;
            return -1 == i
              ? this._items[this._items.length - 1]
              : this._items[i];
          }),
          (e._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e),
              i = this._getItemIndex(this._element.querySelector(J)),
              e = u.default.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n,
              });
            return u.default(this._element).trigger(e), e;
          }),
          (e._setActiveIndicatorElement = function (e) {
            var t;
            this._indicatorsElement &&
              ((t = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              )),
              u.default(t).removeClass(p),
              (t = this._indicatorsElement.children[this._getItemIndex(e)]) &&
                u.default(t).addClass(p));
          }),
          (e._updateInterval = function () {
            var e = this._activeElement || this._element.querySelector(J);
            e &&
              ((e = parseInt(e.getAttribute("data-interval"), 10))
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval));
          }),
          (e._slide = function (e, t) {
            var n,
              i,
              r,
              o = this,
              a = this._element.querySelector(J),
              s = this._getItemIndex(a),
              l = t || (a && this._getItemByDirection(e, a)),
              t = this._getItemIndex(l),
              c = Boolean(this._interval),
              e =
                e === K
                  ? ((n = "carousel-item-left"),
                    (i = "carousel-item-next"),
                    "left")
                  : ((n = "carousel-item-right"),
                    (i = "carousel-item-prev"),
                    "right");
            l && u.default(l).hasClass(p)
              ? (this._isSliding = !1)
              : this._triggerSlideEvent(l, e).isDefaultPrevented() ||
                (a &&
                  l &&
                  ((this._isSliding = !0),
                  c && this.pause(),
                  this._setActiveIndicatorElement(l),
                  (this._activeElement = l),
                  (r = u.default.Event(X, {
                    relatedTarget: l,
                    direction: e,
                    from: s,
                    to: t,
                  })),
                  u.default(this._element).hasClass("slide")
                    ? (u.default(l).addClass(i),
                      d.reflow(l),
                      u.default(a).addClass(n),
                      u.default(l).addClass(n),
                      (e = d.getTransitionDurationFromElement(a)),
                      u
                        .default(a)
                        .one(d.TRANSITION_END, function () {
                          u
                            .default(l)
                            .removeClass(n + " " + i)
                            .addClass(p),
                            u.default(a).removeClass(p + " " + i + " " + n),
                            (o._isSliding = !1),
                            setTimeout(function () {
                              return u.default(o._element).trigger(r);
                            }, 0);
                        })
                        .emulateTransitionEnd(e))
                    : (u.default(a).removeClass(p),
                      u.default(l).addClass(p),
                      (this._isSliding = !1),
                      u.default(this._element).trigger(r)),
                  c && this.cycle()));
          }),
          (r._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this).data(f),
                t = s({}, Z, u.default(this).data()),
                n =
                  ("object" == typeof i && (t = s({}, t, i)),
                  "string" == typeof i ? i : t.slide);
              if (
                (e || ((e = new r(this, t)), u.default(this).data(f, e)),
                "number" == typeof i)
              )
                e.to(i);
              else if ("string" == typeof n) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              } else t.interval && t.ride && (e.pause(), e.cycle());
            });
          }),
          (r._dataApiClickHandler = function (e) {
            var t,
              n,
              i = d.getSelectorFromElement(this);
            !i ||
              ((i = u.default(i)[0]) &&
                u.default(i).hasClass("carousel") &&
                ((t = s({}, u.default(i).data(), u.default(this).data())),
                (n = this.getAttribute("data-slide-to")) && (t.interval = !1),
                r._jQueryInterface.call(u.default(i), t),
                n && u.default(i).data(f).to(n),
                e.preventDefault()));
          }),
          a(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Z;
              },
            },
          ]),
          r
        );
      })(),
      g =
        (u
          .default(document)
          .on(
            "click.bs.carousel.data-api",
            "[data-slide], [data-slide-to]",
            m._dataApiClickHandler
          ),
        u.default(window).on("load.bs.carousel.data-api", function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-ride="carousel"]')
              ),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var i = u.default(e[t]);
            m._jQueryInterface.call(i, i.data());
          }
        }),
        (u.default.fn[h] = m._jQueryInterface),
        (u.default.fn[h].Constructor = m),
        (u.default.fn[h].noConflict = function () {
          return (u.default.fn[h] = G), m._jQueryInterface;
        }),
        "collapse"),
      v = "bs.collapse",
      ne = u.default.fn[g],
      b = "show",
      y = "collapse",
      ie = "collapsing",
      re = "collapsed",
      oe = '[data-toggle="collapse"]',
      ae = { toggle: !0, parent: "" },
      se = { toggle: "boolean", parent: "(string|element)" },
      w = (function () {
        function o(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(oe)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              a = d.getSelectorFromElement(o),
              s = [].slice
                .call(document.querySelectorAll(a))
                .filter(function (e) {
                  return e === t;
                });
            null !== a &&
              0 < s.length &&
              ((this._selector = a), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = o.prototype;
        return (
          (e.toggle = function () {
            u.default(this._element).hasClass(b) ? this.hide() : this.show();
          }),
          (e.show = function () {
            var e,
              t,
              n,
              i,
              r = this;
            this._isTransitioning ||
              u.default(this._element).hasClass(b) ||
              ((e =
                this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                    .filter(function (e) {
                      return "string" == typeof r._config.parent
                        ? e.getAttribute("data-parent") === r._config.parent
                        : e.classList.contains(y);
                    })).length
                  ? null
                  : e) &&
                (i = u.default(e).not(this._selector).data(v)) &&
                i._isTransitioning) ||
              ((n = u.default.Event("show.bs.collapse")),
              u.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                (e &&
                  (o._jQueryInterface.call(
                    u.default(e).not(this._selector),
                    "hide"
                  ),
                  i || u.default(e).data(v, null)),
                (t = this._getDimension()),
                u.default(this._element).removeClass(y).addClass(ie),
                (this._element.style[t] = 0),
                this._triggerArray.length &&
                  u
                    .default(this._triggerArray)
                    .removeClass(re)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0),
                (n = "scroll" + (t[0].toUpperCase() + t.slice(1))),
                (i = d.getTransitionDurationFromElement(this._element)),
                u
                  .default(this._element)
                  .one(d.TRANSITION_END, function () {
                    u
                      .default(r._element)
                      .removeClass(ie)
                      .addClass(y + " " + b),
                      (r._element.style[t] = ""),
                      r.setTransitioning(!1),
                      u.default(r._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(i),
                (this._element.style[t] = this._element[n] + "px")));
          }),
          (e.hide = function () {
            var e = this;
            if (
              !this._isTransitioning &&
              u.default(this._element).hasClass(b)
            ) {
              var t = u.default.Event("hide.bs.collapse");
              if (
                (u.default(this._element).trigger(t), !t.isDefaultPrevented())
              ) {
                var t = this._getDimension(),
                  n =
                    ((this._element.style[t] =
                      this._element.getBoundingClientRect()[t] + "px"),
                    d.reflow(this._element),
                    u
                      .default(this._element)
                      .addClass(ie)
                      .removeClass(y + " " + b),
                    this._triggerArray.length);
                if (0 < n)
                  for (var i = 0; i < n; i++) {
                    var r = this._triggerArray[i],
                      o = d.getSelectorFromElement(r);
                    null === o ||
                      u
                        .default([].slice.call(document.querySelectorAll(o)))
                        .hasClass(b) ||
                      u.default(r).addClass(re).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[t] = "";
                t = d.getTransitionDurationFromElement(this._element);
                u.default(this._element)
                  .one(d.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      u
                        .default(e._element)
                        .removeClass(ie)
                        .addClass(y)
                        .trigger("hidden.bs.collapse");
                  })
                  .emulateTransitionEnd(t);
              }
            }
          }),
          (e.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, v),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function (e) {
            return (
              ((e = s({}, ae, e)).toggle = Boolean(e.toggle)),
              d.typeCheckConfig(g, e, se),
              e
            );
          }),
          (e._getDimension = function () {
            return u.default(this._element).hasClass("width")
              ? "width"
              : "height";
          }),
          (e._getParent = function () {
            var e,
              n = this,
              t =
                (d.isElement(this._config.parent)
                  ? ((e = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (e = this._config.parent[0]))
                  : (e = document.querySelector(this._config.parent)),
                '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]'),
              t = [].slice.call(e.querySelectorAll(t));
            return (
              u.default(t).each(function (e, t) {
                n._addAriaAndCollapsedClass(o._getTargetFromElement(t), [t]);
              }),
              e
            );
          }),
          (e._addAriaAndCollapsedClass = function (e, t) {
            e = u.default(e).hasClass(b);
            t.length &&
              u.default(t).toggleClass(re, !e).attr("aria-expanded", e);
          }),
          (o._getTargetFromElement = function (e) {
            e = d.getSelectorFromElement(e);
            return e ? document.querySelector(e) : null;
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(v),
                n = s({}, ae, e.data(), "object" == typeof i && i ? i : {});
              if (
                (!t &&
                  n.toggle &&
                  "string" == typeof i &&
                  /show|hide/.test(i) &&
                  (n.toggle = !1),
                t || ((t = new o(this, n)), e.data(v, t)),
                "string" == typeof i)
              ) {
                if (void 0 === t[i])
                  throw new TypeError('No method named "' + i + '"');
                t[i]();
              }
            });
          }),
          a(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ae;
              },
            },
          ]),
          o
        );
      })(),
      _ =
        (u.default(document).on("click.bs.collapse.data-api", oe, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var n = u.default(this),
            e = d.getSelectorFromElement(this),
            e = [].slice.call(document.querySelectorAll(e));
          u.default(e).each(function () {
            var e = u.default(this),
              t = e.data(v) ? "toggle" : n.data();
            w._jQueryInterface.call(e, t);
          });
        }),
        (u.default.fn[g] = w._jQueryInterface),
        (u.default.fn[g].Constructor = w),
        (u.default.fn[g].noConflict = function () {
          return (u.default.fn[g] = ne), w._jQueryInterface;
        }),
        "dropdown"),
      x = "bs.dropdown",
      le = "." + x,
      n = ".data-api",
      ce = u.default.fn[_],
      ue = new RegExp("38|40|27"),
      de = "disabled",
      C = "show",
      he = "dropdown-menu-right",
      fe = "hide" + le,
      pe = "hidden" + le,
      t = "click" + le + n,
      n = "keydown" + le + n,
      me = '[data-toggle="dropdown"]',
      ge = ".dropdown-menu",
      ve = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      be = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      k = (function () {
        function c(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = c.prototype;
        return (
          (e.toggle = function () {
            var e;
            this._element.disabled ||
              u.default(this._element).hasClass(de) ||
              ((e = u.default(this._menu).hasClass(C)),
              c._clearMenus(),
              e || this.show(!0));
          }),
          (e.show = function (e) {
            if (
              (void 0 === e && (e = !1),
              !(
                this._element.disabled ||
                u.default(this._element).hasClass(de) ||
                u.default(this._menu).hasClass(C)
              ))
            ) {
              var t = { relatedTarget: this._element },
                n = u.default.Event("show.bs.dropdown", t),
                i = c._getParentFromElement(this._element);
              if ((u.default(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && e) {
                  if (void 0 === F.default)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  n = this._element;
                  "parent" === this._config.reference
                    ? (n = i)
                    : d.isElement(this._config.reference) &&
                      ((n = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (n = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      u.default(i).addClass("position-static"),
                    (this._popper = new F.default(
                      n,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === u.default(i).closest(".navbar-nav").length &&
                  u
                    .default(document.body)
                    .children()
                    .on("mouseover", null, u.default.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  u.default(this._menu).toggleClass(C),
                  u
                    .default(i)
                    .toggleClass(C)
                    .trigger(u.default.Event("shown.bs.dropdown", t));
              }
            }
          }),
          (e.hide = function () {
            var e, t, n;
            this._element.disabled ||
              u.default(this._element).hasClass(de) ||
              !u.default(this._menu).hasClass(C) ||
              ((e = { relatedTarget: this._element }),
              (t = u.default.Event(fe, e)),
              (n = c._getParentFromElement(this._element)),
              u.default(n).trigger(t),
              t.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                u.default(this._menu).toggleClass(C),
                u.default(n).toggleClass(C).trigger(u.default.Event(pe, e))));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, x),
              u.default(this._element).off(le),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            u.default(this._element).on("click.bs.dropdown", function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (e) {
            return (
              (e = s(
                {},
                this.constructor.Default,
                u.default(this._element).data(),
                e
              )),
              d.typeCheckConfig(_, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._getMenuElement = function () {
            var e;
            return (
              this._menu ||
                ((e = c._getParentFromElement(this._element)) &&
                  (this._menu = e.querySelector(ge))),
              this._menu
            );
          }),
          (e._getPlacement = function () {
            var e = u.default(this._element.parentNode),
              t = "bottom-start";
            return (
              e.hasClass("dropup")
                ? (t = u.default(this._menu).hasClass(he)
                    ? "top-end"
                    : "top-start")
                : e.hasClass("dropright")
                ? (t = "right-start")
                : e.hasClass("dropleft")
                ? (t = "left-start")
                : u.default(this._menu).hasClass(he) && (t = "bottom-end"),
              t
            );
          }),
          (e._detectNavbar = function () {
            return 0 < u.default(this._element).closest(".navbar").length;
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = s(
                        {},
                        e.offsets,
                        t._config.offset(e.offsets, t._element)
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (e._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              s({}, e, this._config.popperConfig)
            );
          }),
          (c._jQueryInterface = function (t) {
            return this.each(function () {
              var e = u.default(this).data(x);
              if (
                (e ||
                  ((e = new c(this, "object" == typeof t ? t : null)),
                  u.default(this).data(x, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          (c._clearMenus = function (e) {
            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
              for (
                var t = [].slice.call(document.querySelectorAll(me)),
                  n = 0,
                  i = t.length;
                n < i;
                n++
              ) {
                var r,
                  o,
                  a = c._getParentFromElement(t[n]),
                  s = u.default(t[n]).data(x),
                  l = { relatedTarget: t[n] };
                e && "click" === e.type && (l.clickEvent = e),
                  s &&
                    ((r = s._menu),
                    !u.default(a).hasClass(C) ||
                      (e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        u.default.contains(a, e.target)) ||
                      ((o = u.default.Event(fe, l)),
                      u.default(a).trigger(o),
                      o.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          u
                            .default(document.body)
                            .children()
                            .off("mouseover", null, u.default.noop),
                        t[n].setAttribute("aria-expanded", "false"),
                        s._popper && s._popper.destroy(),
                        u.default(r).removeClass(C),
                        u
                          .default(a)
                          .removeClass(C)
                          .trigger(u.default.Event(pe, l)))));
              }
          }),
          (c._getParentFromElement = function (e) {
            var t,
              n = d.getSelectorFromElement(e);
            return (t = n ? document.querySelector(n) : t) || e.parentNode;
          }),
          (c._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        u.default(e.target).closest(ge).length))
                  )
                : ue.test(e.which)) &&
              !this.disabled &&
              !u.default(this).hasClass(de)
            ) {
              var t = c._getParentFromElement(this),
                n = u.default(t).hasClass(C);
              if (n || 27 !== e.which) {
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !n || 27 === e.which || 32 === e.which)
                )
                  return (
                    27 === e.which &&
                      u.default(t.querySelector(me)).trigger("focus"),
                    void u.default(this).trigger("click")
                  );
                n = [].slice
                  .call(
                    t.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (e) {
                    return u.default(e).is(":visible");
                  });
                0 !== n.length &&
                  ((t = n.indexOf(e.target)),
                  38 === e.which && 0 < t && t--,
                  40 === e.which && t < n.length - 1 && t++,
                  n[(t = t < 0 ? 0 : t)].focus());
              }
            }
          }),
          a(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ve;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return be;
              },
            },
          ]),
          c
        );
      })(),
      T =
        (u
          .default(document)
          .on(n, me, k._dataApiKeydownHandler)
          .on(n, ge, k._dataApiKeydownHandler)
          .on(t + " keyup.bs.dropdown.data-api", k._clearMenus)
          .on(t, me, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              k._jQueryInterface.call(u.default(this), "toggle");
          })
          .on(t, ".dropdown form", function (e) {
            e.stopPropagation();
          }),
        (u.default.fn[_] = k._jQueryInterface),
        (u.default.fn[_].Constructor = k),
        (u.default.fn[_].noConflict = function () {
          return (u.default.fn[_] = ce), k._jQueryInterface;
        }),
        "modal"),
      ye = "bs.modal",
      E = "." + ye,
      we = u.default.fn[T],
      _e = "modal-open",
      S = "fade",
      xe = "show",
      Ce = "modal-static",
      ke = "hidden" + E,
      Te = "show" + E,
      Ee = "focusin" + E,
      Se = "resize" + E,
      Ie = "click.dismiss" + E,
      Le = "keydown.dismiss" + E,
      De = "mousedown.dismiss" + E,
      Ae = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      $e = ".sticky-top",
      Oe = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      Pe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      Me = (function () {
        function r(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var e = r.prototype;
        return (
          (e.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (e.show = function (e) {
            var t,
              n = this;
            this._isShown ||
              this._isTransitioning ||
              ((t = u.default.Event(Te, { relatedTarget: e })),
              u.default(this._element).trigger(t),
              t.isDefaultPrevented() ||
                ((this._isShown = !0),
                u.default(this._element).hasClass(S) &&
                  (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                u
                  .default(this._element)
                  .on(Ie, '[data-dismiss="modal"]', function (e) {
                    return n.hide(e);
                  }),
                u.default(this._dialog).on(De, function () {
                  u.default(n._element).one(
                    "mouseup.dismiss.bs.modal",
                    function (e) {
                      u.default(e.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return n._showElement(e);
                })));
          }),
          (e.hide = function (e) {
            var t = this;
            e && e.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                ((e = u.default.Event("hide.bs.modal")),
                u.default(this._element).trigger(e),
                this._isShown &&
                  !e.isDefaultPrevented() &&
                  ((this._isShown = !1),
                  (e = u.default(this._element).hasClass(S)) &&
                    (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  u.default(document).off(Ee),
                  u.default(this._element).removeClass(xe),
                  u.default(this._element).off(Ie),
                  u.default(this._dialog).off(De),
                  e
                    ? ((e = d.getTransitionDurationFromElement(this._element)),
                      u
                        .default(this._element)
                        .one(d.TRANSITION_END, function (e) {
                          return t._hideModal(e);
                        })
                        .emulateTransitionEnd(e))
                    : this._hideModal()));
          }),
          (e.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return u.default(e).off(E);
            }),
              u.default(document).off(Ee),
              u.default.removeData(this._element, ye),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (e) {
            return (e = s({}, Oe, e)), d.typeCheckConfig(T, e, Pe), e;
          }),
          (e._triggerBackdropTransition = function () {
            var e,
              t,
              n = this,
              i = u.default.Event("hidePrevented.bs.modal");
            u.default(this._element).trigger(i),
              i.isDefaultPrevented() ||
                ((e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight) ||
                  (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Ce),
                (t = d.getTransitionDurationFromElement(this._dialog)),
                u.default(this._element).off(d.TRANSITION_END),
                u
                  .default(this._element)
                  .one(d.TRANSITION_END, function () {
                    n._element.classList.remove(Ce),
                      e ||
                        u
                          .default(n._element)
                          .one(d.TRANSITION_END, function () {
                            n._element.style.overflowY = "";
                          })
                          .emulateTransitionEnd(n._element, t);
                  })
                  .emulateTransitionEnd(t),
                this._element.focus());
          }),
          (e._showElement = function (e) {
            function t() {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                u.default(n._element).trigger(o);
            }
            var n = this,
              i = u.default(this._element).hasClass(S),
              r = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null,
              o =
                ((this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                u.default(this._dialog).hasClass("modal-dialog-scrollable") && r
                  ? (r.scrollTop = 0)
                  : (this._element.scrollTop = 0),
                i && d.reflow(this._element),
                u.default(this._element).addClass(xe),
                this._config.focus && this._enforceFocus(),
                u.default.Event("shown.bs.modal", { relatedTarget: e }));
            i
              ? ((r = d.getTransitionDurationFromElement(this._dialog)),
                u
                  .default(this._dialog)
                  .one(d.TRANSITION_END, t)
                  .emulateTransitionEnd(r))
              : t();
          }),
          (e._enforceFocus = function () {
            var t = this;
            u.default(document)
              .off(Ee)
              .on(Ee, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === u.default(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown
              ? u.default(this._element).on(Le, function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
              : this._isShown || u.default(this._element).off(Le);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? u.default(window).on(Se, function (e) {
                  return t.handleUpdate(e);
                })
              : u.default(window).off(Se);
          }),
          (e._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                u.default(document.body).removeClass(_e),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  u.default(e._element).trigger(ke);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (u.default(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (e) {
            var t,
              n = this,
              i = u.default(this._element).hasClass(S) ? S : "";
            this._isShown && this._config.backdrop
              ? ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && this._backdrop.classList.add(i),
                u.default(this._backdrop).appendTo(document.body),
                u.default(this._element).on(Ie, function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      ("static" === n._config.backdrop
                        ? n._triggerBackdropTransition()
                        : n.hide());
                }),
                i && d.reflow(this._backdrop),
                u.default(this._backdrop).addClass(xe),
                e &&
                  (i
                    ? ((i = d.getTransitionDurationFromElement(this._backdrop)),
                      u
                        .default(this._backdrop)
                        .one(d.TRANSITION_END, e)
                        .emulateTransitionEnd(i))
                    : e()))
              : !this._isShown && this._backdrop
              ? (u.default(this._backdrop).removeClass(xe),
                (i = function () {
                  n._removeBackdrop(), e && e();
                }),
                u.default(this._element).hasClass(S)
                  ? ((t = d.getTransitionDurationFromElement(this._backdrop)),
                    u
                      .default(this._backdrop)
                      .one(d.TRANSITION_END, i)
                      .emulateTransitionEnd(t))
                  : i())
              : e && e();
          }),
          (e._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(e.left + e.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var e,
              t,
              r = this;
            this._isBodyOverflowing &&
              ((e = [].slice.call(document.querySelectorAll(Ae))),
              (t = [].slice.call(document.querySelectorAll($e))),
              u.default(e).each(function (e, t) {
                var n = t.style.paddingRight,
                  i = u.default(t).css("padding-right");
                u.default(t)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
              u.default(t).each(function (e, t) {
                var n = t.style.marginRight,
                  i = u.default(t).css("margin-right");
                u.default(t)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - r._scrollbarWidth + "px"
                  );
              }),
              (e = document.body.style.paddingRight),
              (t = u.default(document.body).css("padding-right")),
              u
                .default(document.body)
                .data("padding-right", e)
                .css(
                  "padding-right",
                  parseFloat(t) + this._scrollbarWidth + "px"
                )),
              u.default(document.body).addClass(_e);
          }),
          (e._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(Ae)),
              e =
                (u.default(e).each(function (e, t) {
                  var n = u.default(t).data("padding-right");
                  u.default(t).removeData("padding-right"),
                    (t.style.paddingRight = n || "");
                }),
                [].slice.call(document.querySelectorAll($e))),
              e =
                (u.default(e).each(function (e, t) {
                  var n = u.default(t).data("margin-right");
                  void 0 !== n &&
                    u
                      .default(t)
                      .css("margin-right", n)
                      .removeData("margin-right");
                }),
                u.default(document.body).data("padding-right"));
            u.default(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = e || "");
          }),
          (e._getScrollbarWidth = function () {
            var e = document.createElement("div"),
              t =
                ((e.className = "modal-scrollbar-measure"),
                document.body.appendChild(e),
                e.getBoundingClientRect().width - e.clientWidth);
            return document.body.removeChild(e), t;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = u.default(this).data(ye),
                t = s(
                  {},
                  Oe,
                  u.default(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (e || ((e = new r(this, t)), u.default(this).data(ye, e)),
                "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](i);
              } else t.show && e.show(i);
            });
          }),
          a(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Oe;
              },
            },
          ]),
          r
        );
      })(),
      Ne =
        (u
          .default(document)
          .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var t,
              n = this,
              i = d.getSelectorFromElement(this),
              i =
                (i && (t = document.querySelector(i)),
                u.default(t).data(ye)
                  ? "toggle"
                  : s({}, u.default(t).data(), u.default(this).data())),
              r =
                (("A" !== this.tagName && "AREA" !== this.tagName) ||
                  e.preventDefault(),
                u.default(t).one(Te, function (e) {
                  e.isDefaultPrevented() ||
                    r.one(ke, function () {
                      u.default(n).is(":visible") && n.focus();
                    });
                }));
            Me._jQueryInterface.call(u.default(t), i, this);
          }),
        (u.default.fn[T] = Me._jQueryInterface),
        (u.default.fn[T].Constructor = Me),
        (u.default.fn[T].noConflict = function () {
          return (u.default.fn[T] = we), Me._jQueryInterface;
        }),
        [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
      n = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      He =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Be(e, o, t) {
      if (0 === e.length) return e;
      if (t && "function" == typeof t) return t(e);
      for (
        var t = new window.DOMParser().parseFromString(e, "text/html"),
          a = Object.keys(o),
          s = [].slice.call(t.body.querySelectorAll("*")),
          n = function (e, t) {
            var n = s[e],
              e = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n), "continue";
            var i = [].slice.call(n.attributes),
              r = [].concat(o["*"] || [], o[e] || []);
            i.forEach(function (e) {
              !(function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return (
                    -1 === Ne.indexOf(n) ||
                    Boolean(Fe.test(e.nodeValue) || He.test(e.nodeValue))
                  );
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (i[r].test(n)) return 1;
              })(e, r) && n.removeAttribute(e.nodeName);
            });
          },
          i = 0,
          r = s.length;
        i < r;
        i++
      )
        n(i);
      return t.body.innerHTML;
    }
    var I = "tooltip",
      je = "bs.tooltip",
      L = "." + je,
      Re = u.default.fn[I],
      qe = "bs-tooltip",
      Ue = new RegExp("(^|\\s)" + qe + "\\S+", "g"),
      We = ["sanitize", "whiteList", "sanitizeFn"],
      ze = "fade",
      Ye = "show",
      Ve = "show",
      Ge = "hover",
      Ke = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      Qe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: n,
        popperConfig: null,
      },
      Xe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      Je = {
        HIDE: "hide" + L,
        HIDDEN: "hidden" + L,
        SHOW: "show" + L,
        SHOWN: "shown" + L,
        INSERTED: "inserted" + L,
        CLICK: "click" + L,
        FOCUSIN: "focusin" + L,
        FOCUSOUT: "focusout" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
      },
      D = (function () {
        function r(e, t) {
          if (void 0 === F.default)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var e = r.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (e) {
            var t, n;
            this._isEnabled &&
              (e
                ? ((t = this.constructor.DATA_KEY),
                  (n = u.default(e.currentTarget).data(t)) ||
                    ((n = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    u.default(e.currentTarget).data(t, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n))
                : u.default(this.getTipElement()).hasClass(Ye)
                ? this._leave(null, this)
                : this._enter(null, this));
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              u.default.removeData(this.element, this.constructor.DATA_KEY),
              u.default(this.element).off(this.constructor.EVENT_KEY),
              u
                .default(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && u.default(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ("none" === u.default(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var e,
              n,
              i = u.default.Event(this.constructor.Event.SHOW);
            this.isWithContent() &&
              this._isEnabled &&
              (u.default(this.element).trigger(i),
              (n = d.findShadowRoot(this.element)),
              (n = u.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              )),
              !i.isDefaultPrevented() &&
                n &&
                ((i = this.getTipElement()),
                (n = d.getUID(this.constructor.NAME)),
                i.setAttribute("id", n),
                this.element.setAttribute("aria-describedby", n),
                this.setContent(),
                this.config.animation && u.default(i).addClass(ze),
                (n =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement),
                (n = this._getAttachment(n)),
                this.addAttachmentClass(n),
                (e = this._getContainer()),
                u.default(i).data(this.constructor.DATA_KEY, this),
                u.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || u.default(i).appendTo(e),
                u
                  .default(this.element)
                  .trigger(this.constructor.Event.INSERTED),
                (this._popper = new F.default(
                  this.element,
                  i,
                  this._getPopperConfig(n)
                )),
                u.default(i).addClass(Ye),
                u.default(i).addClass(this.config.customClass),
                "ontouchstart" in document.documentElement &&
                  u
                    .default(document.body)
                    .children()
                    .on("mouseover", null, u.default.noop),
                (e = function () {
                  t.config.animation && t._fixTransition();
                  var e = t._hoverState;
                  (t._hoverState = null),
                    u.default(t.element).trigger(t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t);
                }),
                u.default(this.tip).hasClass(ze)
                  ? ((n = d.getTransitionDurationFromElement(this.tip)),
                    u
                      .default(this.tip)
                      .one(d.TRANSITION_END, e)
                      .emulateTransitionEnd(n))
                  : e()));
          }),
          (e.hide = function (e) {
            function t() {
              n._hoverState !== Ve &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                u.default(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e();
            }
            var n = this,
              i = this.getTipElement(),
              r = u.default.Event(this.constructor.Event.HIDE);
            u.default(this.element).trigger(r),
              r.isDefaultPrevented() ||
                (u.default(i).removeClass(Ye),
                "ontouchstart" in document.documentElement &&
                  u
                    .default(document.body)
                    .children()
                    .off("mouseover", null, u.default.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger[Ge] = !1),
                u.default(this.tip).hasClass(ze)
                  ? ((r = d.getTransitionDurationFromElement(i)),
                    u
                      .default(i)
                      .one(d.TRANSITION_END, t)
                      .emulateTransitionEnd(r))
                  : t(),
                (this._hoverState = ""));
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (e) {
            u.default(this.getTipElement()).addClass(qe + "-" + e);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || u.default(this.config.template)[0]),
              this.tip
            );
          }),
          (e.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(
              u.default(e.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              u.default(e).removeClass("fade show");
          }),
          (e.setElementContent = function (e, t) {
            "object" == typeof t && (t.nodeType || t.jquery)
              ? this.config.html
                ? u.default(t).parent().is(e) || e.empty().append(t)
                : e.text(u.default(t).text())
              : this.config.html
              ? (this.config.sanitize &&
                  (t = Be(t, this.config.whiteList, this.config.sanitizeFn)),
                e.html(t))
              : e.text(t);
          }),
          (e.getTitle = function () {
            return (
              this.element.getAttribute("data-original-title") ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title)
            );
          }),
          (e._getPopperConfig = function (e) {
            var t = this;
            return s(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              },
              this.config.popperConfig
            );
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = s(
                        {},
                        e.offsets,
                        t.config.offset(e.offsets, t.element)
                      )),
                      e
                    );
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (e._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : d.isElement(this.config.container)
              ? u.default(this.config.container)
              : u.default(document).find(this.config.container);
          }),
          (e._getAttachment = function (e) {
            return Ke[e.toUpperCase()];
          }),
          (e._setListeners = function () {
            var n = this;
            this.config.trigger.split(" ").forEach(function (e) {
              var t;
              "click" === e
                ? u
                    .default(n.element)
                    .on(
                      n.constructor.Event.CLICK,
                      n.config.selector,
                      function (e) {
                        return n.toggle(e);
                      }
                    )
                : "manual" !== e &&
                  ((t =
                    e === Ge
                      ? n.constructor.Event.MOUSEENTER
                      : n.constructor.Event.FOCUSIN),
                  (e =
                    e === Ge
                      ? n.constructor.Event.MOUSELEAVE
                      : n.constructor.Event.FOCUSOUT),
                  u
                    .default(n.element)
                    .on(t, n.config.selector, function (e) {
                      return n._enter(e);
                    })
                    .on(e, n.config.selector, function (e) {
                      return n._leave(e);
                    }));
            }),
              (this._hideModalHandler = function () {
                n.element && n.hide();
              }),
              u
                .default(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == e) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              u.default(e.currentTarget).data(n, t)),
              e && (t._activeTrigger["focusin" === e.type ? "focus" : Ge] = !0),
              u.default(t.getTipElement()).hasClass(Ye) || t._hoverState === Ve
                ? (t._hoverState = Ve)
                : (clearTimeout(t._timeout),
                  (t._hoverState = Ve),
                  t.config.delay && t.config.delay.show
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === Ve && t.show();
                      }, t.config.delay.show))
                    : t.show());
          }),
          (e._leave = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              u.default(e.currentTarget).data(n, t)),
              e &&
                (t._activeTrigger["focusout" === e.type ? "focus" : Ge] = !1),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = "out"),
                t.config.delay && t.config.delay.hide
                  ? (t._timeout = setTimeout(function () {
                      "out" === t._hoverState && t.hide();
                    }, t.config.delay.hide))
                  : t.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (e._getConfig = function (e) {
            var t = u.default(this.element).data();
            return (
              Object.keys(t).forEach(function (e) {
                -1 !== We.indexOf(e) && delete t[e];
              }),
              "number" ==
                typeof (e = s(
                  {},
                  this.constructor.Default,
                  t,
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              d.typeCheckConfig(I, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = Be(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (e._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (e._cleanTipClass = function () {
            var e = u.default(this.getTipElement()),
              t = e.attr("class").match(Ue);
            null !== t && t.length && e.removeClass(t.join(""));
          }),
          (e._handlePopperPlacementChange = function (e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (e._fixTransition = function () {
            var e = this.getTipElement(),
              t = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (u.default(e).removeClass(ze),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = t));
          }),
          (r._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(je),
                n = "object" == typeof i && i;
              if (
                (t || !/dispose|hide/.test(i)) &&
                (t || ((t = new r(this, n)), e.data(je, t)),
                "string" == typeof i)
              ) {
                if (void 0 === t[i])
                  throw new TypeError('No method named "' + i + '"');
                t[i]();
              }
            });
          }),
          a(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Qe;
              },
            },
            {
              key: "NAME",
              get: function () {
                return I;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return je;
              },
            },
            {
              key: "Event",
              get: function () {
                return Je;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return L;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Xe;
              },
            },
          ]),
          r
        );
      })(),
      A =
        ((u.default.fn[I] = D._jQueryInterface),
        (u.default.fn[I].Constructor = D),
        (u.default.fn[I].noConflict = function () {
          return (u.default.fn[I] = Re), D._jQueryInterface;
        }),
        "popover"),
      Ze = "bs.popover",
      $ = "." + Ze,
      et = u.default.fn[A],
      tt = "bs-popover",
      nt = new RegExp("(^|\\s)" + tt + "\\S+", "g"),
      it = s({}, D.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      rt = s({}, D.DefaultType, { content: "(string|element|function)" }),
      ot = {
        HIDE: "hide" + $,
        HIDDEN: "hidden" + $,
        SHOW: "show" + $,
        SHOWN: "shown" + $,
        INSERTED: "inserted" + $,
        CLICK: "click" + $,
        FOCUSIN: "focusin" + $,
        FOCUSOUT: "focusout" + $,
        MOUSEENTER: "mouseenter" + $,
        MOUSELEAVE: "mouseleave" + $,
      },
      at = (function (e) {
        var t;
        function i() {
          return e.apply(this, arguments) || this;
        }
        (t = e),
          ((n = i).prototype = Object.create(t.prototype)),
          B((n.prototype.constructor = n), t);
        var n = i.prototype;
        return (
          (n.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (n.addAttachmentClass = function (e) {
            u.default(this.getTipElement()).addClass(tt + "-" + e);
          }),
          (n.getTipElement = function () {
            return (
              (this.tip = this.tip || u.default(this.config.template)[0]),
              this.tip
            );
          }),
          (n.setContent = function () {
            var e = u.default(this.getTipElement()),
              t =
                (this.setElementContent(
                  e.find(".popover-header"),
                  this.getTitle()
                ),
                this._getContent());
            "function" == typeof t && (t = t.call(this.element)),
              this.setElementContent(e.find(".popover-body"), t),
              e.removeClass("fade show");
          }),
          (n._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (n._cleanTipClass = function () {
            var e = u.default(this.getTipElement()),
              t = e.attr("class").match(nt);
            null !== t && 0 < t.length && e.removeClass(t.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this).data(Ze),
                t = "object" == typeof n ? n : null;
              if (
                (e || !/dispose|hide/.test(n)) &&
                (e || ((e = new i(this, t)), u.default(this).data(Ze, e)),
                "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          a(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return it;
              },
            },
            {
              key: "NAME",
              get: function () {
                return A;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ze;
              },
            },
            {
              key: "Event",
              get: function () {
                return ot;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return $;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return rt;
              },
            },
          ]),
          i
        );
      })(D),
      O =
        ((u.default.fn[A] = at._jQueryInterface),
        (u.default.fn[A].Constructor = at),
        (u.default.fn[A].noConflict = function () {
          return (u.default.fn[A] = et), at._jQueryInterface;
        }),
        "scrollspy"),
      st = "bs.scrollspy",
      lt = "." + st,
      ct = u.default.fn[O],
      P = "active",
      ut = ".nav, .list-group",
      dt = ".nav-link",
      ht = ".list-group-item",
      ft = { offset: 10, method: "auto", target: "" },
      pt = { offset: "number", method: "string", target: "(string|element)" },
      mt = (function () {
        function n(e, t) {
          var n = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(t)),
            (this._selector =
              this._config.target +
              " " +
              dt +
              "," +
              this._config.target +
              " " +
              ht +
              "," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            u
              .default(this._scrollElement)
              .on("scroll.bs.scrollspy", function (e) {
                return n._process(e);
              }),
            this.refresh(),
            this._process();
        }
        var e = n.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : "position",
              i = "auto" === this._config.method ? e : this._config.method,
              r = "position" === i ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var t,
                    e = d.getSelectorFromElement(e);
                  if ((t = e ? document.querySelector(e) : t)) {
                    var n = t.getBoundingClientRect();
                    if (n.width || n.height)
                      return [u.default(t)[i]().top + r, e];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, st),
              u.default(this._scrollElement).off(lt),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (e) {
            var t;
            return (
              "string" !=
                typeof (e = s({}, ft, "object" == typeof e && e ? e : {}))
                  .target &&
                d.isElement(e.target) &&
                ((t = u.default(e.target).attr("id")) ||
                  ((t = d.getUID(O)), u.default(e.target).attr("id", t)),
                (e.target = "#" + t)),
              d.typeCheckConfig(O, e, pt),
              e
            );
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e))
              return (
                (t = this._targets[this._targets.length - 1]),
                void (this._activeTarget !== t && this._activate(t))
              );
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var i = this._offsets.length; i--; )
              this._activeTarget !== this._targets[i] &&
                e >= this._offsets[i] &&
                (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) &&
                this._activate(this._targets[i]);
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",").map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              e = u.default(
                [].slice.call(document.querySelectorAll(e.join(",")))
              );
            e.hasClass("dropdown-item")
              ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(P),
                e.addClass(P))
              : (e.addClass(P),
                e
                  .parents(ut)
                  .prev(dt + ", " + ht)
                  .addClass(P),
                e.parents(ut).prev(".nav-item").children(dt).addClass(P)),
              u
                .default(this._scrollElement)
                .trigger("activate.bs.scrollspy", { relatedTarget: t });
          }),
          (e._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(P);
              })
              .forEach(function (e) {
                return e.classList.remove(P);
              });
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = u.default(this).data(st);
              if (
                (e ||
                  ((e = new n(this, "object" == typeof t && t)),
                  u.default(this).data(st, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          a(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ft;
              },
            },
          ]),
          n
        );
      })(),
      gt =
        (u.default(window).on("load.bs.scrollspy.data-api", function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-spy="scroll"]')
              ),
              t = e.length;
            t--;

          ) {
            var n = u.default(e[t]);
            mt._jQueryInterface.call(n, n.data());
          }
        }),
        (u.default.fn[O] = mt._jQueryInterface),
        (u.default.fn[O].Constructor = mt),
        (u.default.fn[O].noConflict = function () {
          return (u.default.fn[O] = ct), mt._jQueryInterface;
        }),
        "bs.tab"),
      vt = u.default.fn.tab,
      bt = "active",
      yt = "> li > .active",
      wt = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              a = this;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              u.default(this._element).hasClass(bt)) ||
              u.default(this._element).hasClass("disabled") ||
              ((t = u.default(this._element).closest(".nav, .list-group")[0]),
              (n = d.getSelectorFromElement(this._element)),
              t &&
                ((r =
                  "UL" === t.nodeName || "OL" === t.nodeName ? yt : ".active"),
                (i = (i = u.default.makeArray(u.default(t).find(r)))[
                  i.length - 1
                ])),
              (r = u.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              })),
              (o = u.default.Event("show.bs.tab", { relatedTarget: i })),
              i && u.default(i).trigger(r),
              u.default(this._element).trigger(o),
              o.isDefaultPrevented() ||
                r.isDefaultPrevented() ||
                (n && (e = document.querySelector(n)),
                this._activate(this._element, t),
                (o = function () {
                  var e = u.default.Event("hidden.bs.tab", {
                      relatedTarget: a._element,
                    }),
                    t = u.default.Event("shown.bs.tab", { relatedTarget: i });
                  u.default(i).trigger(e), u.default(a._element).trigger(t);
                }),
                e ? this._activate(e, e.parentNode, o) : o()));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, gt), (this._element = null);
          }),
          (e._activate = function (e, t, n) {
            function i() {
              return r._transitionComplete(e, o, n);
            }
            var r = this,
              o = (
                !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                  ? u.default(t).children(".active")
                  : u.default(t).find(yt)
              )[0],
              t = n && o && u.default(o).hasClass("fade");
            o && t
              ? ((t = d.getTransitionDurationFromElement(o)),
                u
                  .default(o)
                  .removeClass("show")
                  .one(d.TRANSITION_END, i)
                  .emulateTransitionEnd(t))
              : i();
          }),
          (e._transitionComplete = function (e, t, n) {
            t &&
              (u.default(t).removeClass(bt),
              (i = u
                .default(t.parentNode)
                .find("> .dropdown-menu .active")[0]) &&
                u.default(i).removeClass(bt),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1)),
              u.default(e).addClass(bt),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
              d.reflow(e),
              e.classList.contains("fade") && e.classList.add("show");
            var i = e.parentNode;
            (i = i && "LI" === i.nodeName ? i.parentNode : i) &&
              u.default(i).hasClass("dropdown-menu") &&
              ((t = u.default(e).closest(".dropdown")[0]) &&
                ((i = [].slice.call(t.querySelectorAll(".dropdown-toggle"))),
                u.default(i).addClass(bt)),
              e.setAttribute("aria-expanded", !0)),
              n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(gt);
              if (
                (t || ((t = new i(this)), e.data(gt, t)), "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          a(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
          ]),
          i
        );
      })(),
      M =
        (u
          .default(document)
          .on(
            "click.bs.tab.data-api",
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (e) {
              e.preventDefault(),
                wt._jQueryInterface.call(u.default(this), "show");
            }
          ),
        (u.default.fn.tab = wt._jQueryInterface),
        (u.default.fn.tab.Constructor = wt),
        (u.default.fn.tab.noConflict = function () {
          return (u.default.fn.tab = vt), wt._jQueryInterface;
        }),
        "toast"),
      _t = "bs.toast",
      t = "." + _t,
      xt = u.default.fn[M],
      Ct = "show",
      kt = "click.dismiss" + t,
      Tt = { animation: !0, autohide: !0, delay: 500 },
      Et = { animation: "boolean", autohide: "boolean", delay: "number" },
      St = (function () {
        function i(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var e,
              t = this,
              n = u.default.Event("show.bs.toast");
            u.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                (n = function () {
                  t._element.classList.remove("showing"),
                    t._element.classList.add(Ct),
                    u.default(t._element).trigger("shown.bs.toast"),
                    t._config.autohide &&
                      (t._timeout = setTimeout(function () {
                        t.hide();
                      }, t._config.delay));
                }),
                this._element.classList.remove("hide"),
                d.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation
                  ? ((e = d.getTransitionDurationFromElement(this._element)),
                    u
                      .default(this._element)
                      .one(d.TRANSITION_END, n)
                      .emulateTransitionEnd(e))
                  : n());
          }),
          (e.hide = function () {
            var e;
            this._element.classList.contains(Ct) &&
              ((e = u.default.Event("hide.bs.toast")),
              u.default(this._element).trigger(e),
              e.isDefaultPrevented() || this._close());
          }),
          (e.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains(Ct) &&
                this._element.classList.remove(Ct),
              u.default(this._element).off(kt),
              u.default.removeData(this._element, _t),
              (this._element = null),
              (this._config = null);
          }),
          (e._getConfig = function (e) {
            return (
              (e = s(
                {},
                Tt,
                u.default(this._element).data(),
                "object" == typeof e && e ? e : {}
              )),
              d.typeCheckConfig(M, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._setListeners = function () {
            var e = this;
            u.default(this._element).on(
              kt,
              '[data-dismiss="toast"]',
              function () {
                return e.hide();
              }
            );
          }),
          (e._close = function () {
            function e() {
              n._element.classList.add("hide"),
                u.default(n._element).trigger("hidden.bs.toast");
            }
            var t,
              n = this;
            this._element.classList.remove(Ct),
              this._config.animation
                ? ((t = d.getTransitionDurationFromElement(this._element)),
                  u
                    .default(this._element)
                    .one(d.TRANSITION_END, e)
                    .emulateTransitionEnd(t))
                : e();
          }),
          (e._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(_t);
              if (
                (t ||
                  ((t = new i(this, "object" == typeof n && n)), e.data(_t, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](this);
              }
            });
          }),
          a(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Et;
              },
            },
            {
              key: "Default",
              get: function () {
                return Tt;
              },
            },
          ]),
          i
        );
      })();
    (u.default.fn[M] = St._jQueryInterface),
      (u.default.fn[M].Constructor = St),
      (u.default.fn[M].noConflict = function () {
        return (u.default.fn[M] = xt), St._jQueryInterface;
      }),
      (e.Alert = r),
      (e.Button = c),
      (e.Carousel = m),
      (e.Collapse = w),
      (e.Dropdown = k),
      (e.Modal = Me),
      (e.Popover = at),
      (e.Scrollspy = mt),
      (e.Tab = wt),
      (e.Toast = St),
      (e.Tooltip = D),
      (e.Util = d),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  (function (w) {
    "use strict";
    var N = ["sanitize", "whiteList", "sanitizeFn"],
      F = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      H = {
        "*": [
          "class",
          "dir",
          "id",
          "lang",
          "role",
          "tabindex",
          "style",
          /^aria-[\w-]*$/i,
        ],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      B = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      j =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function S(e, t, n) {
      if (n && "function" == typeof n) return n(e);
      for (var i = Object.keys(t), r = 0, o = e.length; r < o; r++)
        for (
          var a = e[r].querySelectorAll("*"), s = 0, l = a.length;
          s < l;
          s++
        ) {
          var c = a[s],
            u = c.nodeName.toLowerCase();
          if (-1 === i.indexOf(u)) c.parentNode.removeChild(c);
          else
            for (
              var d = [].slice.call(c.attributes),
                h = [].concat(t["*"] || [], t[u] || []),
                f = 0,
                p = d.length;
              f < p;
              f++
            ) {
              var m = d[f];
              !(function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== w.inArray(n, t))
                  return (
                    -1 === w.inArray(n, F) ||
                    Boolean(e.nodeValue.match(B) || e.nodeValue.match(j))
                  );
                for (
                  var i = w(t).filter(function (e, t) {
                      return t instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return 1;
              })(m, h) && c.removeAttribute(m.nodeName);
            }
        }
    }
    if (
      !("classList" in document.createElement("_")) &&
      "Element" in (n = window)
    ) {
      var t = "classList",
        n = n.Element.prototype,
        i = Object,
        e = function () {
          var n = w(this);
          return {
            add: function (e) {
              return (
                (e = Array.prototype.slice.call(arguments).join(" ")),
                n.addClass(e)
              );
            },
            remove: function (e) {
              return (
                (e = Array.prototype.slice.call(arguments).join(" ")),
                n.removeClass(e)
              );
            },
            toggle: function (e, t) {
              return n.toggleClass(e, t);
            },
            contains: function (e) {
              return n.hasClass(e);
            },
          };
        };
      if (i.defineProperty) {
        var r = { get: e, enumerable: !0, configurable: !0 };
        try {
          i.defineProperty(n, t, r);
        } catch (e) {
          (void 0 !== e.number && -2146823252 !== e.number) ||
            ((r.enumerable = !1), i.defineProperty(n, t, r));
        }
      } else i.prototype.__defineGetter__ && n.__defineGetter__(t, e);
    }
    var o,
      a,
      s,
      l,
      r = document.createElement("_");
    function c(e) {
      if (null == this) throw new TypeError();
      var t = String(this);
      if (e && "[object RegExp]" == l.call(e)) throw new TypeError();
      var n = t.length,
        i = String(e),
        r = i.length,
        e = 1 < arguments.length ? arguments[1] : void 0,
        e = e ? Number(e) : 0,
        o = (e != e && (e = 0), Math.min(Math.max(e, 0), n));
      if (n < r + o) return !1;
      for (var a = -1; ++a < r; )
        if (t.charCodeAt(o + a) != i.charCodeAt(a)) return !1;
      return !0;
    }
    function _(e, t) {
      var n,
        i = e.selectedOptions,
        r = [];
      if (t) {
        for (var o = 0, a = i.length; o < a; o++)
          (n = i[o]).disabled ||
            ("OPTGROUP" === n.parentNode.tagName && n.parentNode.disabled) ||
            r.push(n);
        return r;
      }
      return i;
    }
    function x(e, t) {
      for (
        var n, i = [], r = t || e.selectedOptions, o = 0, a = r.length;
        o < a;
        o++
      )
        (n = r[o]).disabled ||
          ("OPTGROUP" === n.parentNode.tagName && n.parentNode.disabled) ||
          i.push(n.value);
      return e.multiple ? i : i.length ? i[0] : null;
    }
    r.classList.add("c1", "c2"),
      r.classList.contains("c2") ||
        ((o = DOMTokenList.prototype.add),
        (a = DOMTokenList.prototype.remove),
        (DOMTokenList.prototype.add = function () {
          Array.prototype.forEach.call(arguments, o.bind(this));
        }),
        (DOMTokenList.prototype.remove = function () {
          Array.prototype.forEach.call(arguments, a.bind(this));
        })),
      r.classList.toggle("c3", !1),
      r.classList.contains("c3") &&
        ((s = DOMTokenList.prototype.toggle),
        (DOMTokenList.prototype.toggle = function (e, t) {
          return 1 in arguments && !this.contains(e) == !t
            ? t
            : s.call(this, e);
        })),
      (r = null),
      String.prototype.startsWith ||
        ((i = (function () {
          try {
            var e = {},
              t = Object.defineProperty,
              n = t(e, e, e) && t;
          } catch (e) {}
          return n;
        })()),
        (l = {}.toString),
        i
          ? i(String.prototype, "startsWith", {
              value: c,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.startsWith = c)),
      Object.keys ||
        (Object.keys = function (e, t, n) {
          for (t in ((n = []), e)) n.hasOwnProperty.call(e, t) && n.push(t);
          return n;
        }),
      HTMLSelectElement &&
        !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") &&
        Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
          get: function () {
            return this.querySelectorAll(":checked");
          },
        });
    var u = { useDefault: !1, _set: w.valHooks.select.set },
      C =
        ((w.valHooks.select.set = function (e, t) {
          return (
            t && !u.useDefault && w(e).data("selected", !0),
            u._set.apply(this, arguments)
          );
        }),
        null),
      R = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();
    function b(e, t, n, i) {
      for (
        var r = ["display", "subtext", "tokens"], o = !1, a = 0;
        a < r.length;
        a++
      ) {
        var s = r[a],
          l = e[s];
        if (
          l &&
          ((l = l.toString()),
          "display" === s && (l = l.replace(/<[^>]+>/g, "")),
          (l = (l = i ? f(l) : l).toUpperCase()),
          (o = "contains" === n ? 0 <= l.indexOf(t) : l.startsWith(t)))
        )
          break;
      }
      return o;
    }
    function v(e) {
      return parseInt(e, 10) || 0;
    }
    w.fn.triggerNative = function (e) {
      var t,
        n = this[0];
      n.dispatchEvent
        ? (R
            ? (t = new Event(e, { bubbles: !0 }))
            : (t = document.createEvent("Event")).initEvent(e, !0, !1),
          n.dispatchEvent(t))
        : n.fireEvent
        ? (((t = document.createEventObject()).eventType = e),
          n.fireEvent("on" + e, t))
        : this.trigger(e);
    };
    var q = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      U = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      W = RegExp(
        "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",
        "g"
      );
    function z(e) {
      return q[e];
    }
    function f(e) {
      return (e = e.toString()) && e.replace(U, z).replace(W, "");
    }
    (d = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    }),
      (n = "(?:" + Object.keys(d).join("|") + ")"),
      (h = RegExp(n)),
      (p = RegExp(n, "g"));
    var d,
      h,
      p,
      k = function (e) {
        return h.test((e = null == e ? "" : "" + e)) ? e.replace(p, Y) : e;
      };
    function Y(e) {
      return d[e];
    }
    var V = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      y = 27,
      G = 13,
      T = 32,
      E = 9,
      I = 38,
      L = 40,
      D = { success: !1, major: "3" };
    try {
      (D.full = (w.fn.dropdown.Constructor.VERSION || "")
        .split(" ")[0]
        .split(".")),
        (D.major = D.full[0]),
        (D.success = !0);
    } catch (e) {}
    var m = 0,
      A = ".bs.select",
      $ = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
        ICONBASE: "glyphicon",
        TICKICON: "glyphicon-ok",
      },
      O = { MENU: "." + $.MENU },
      P = {
        div: document.createElement("div"),
        span: document.createElement("span"),
        i: document.createElement("i"),
        subtext: document.createElement("small"),
        a: document.createElement("a"),
        li: document.createElement("li"),
        whitespace: document.createTextNode(" "),
        fragment: document.createDocumentFragment(),
      },
      K =
        ((P.noResults = P.li.cloneNode(!1)),
        (P.noResults.className = "no-results"),
        P.a.setAttribute("role", "option"),
        (P.a.className = "dropdown-item"),
        (P.subtext.className = "text-muted"),
        (P.text = P.span.cloneNode(!1)),
        (P.text.className = "text"),
        (P.checkMark = P.span.cloneNode(!1)),
        new RegExp(I + "|" + L)),
      Q = new RegExp("^" + E + "$|" + y),
      g = {
        li: function (e, t, n) {
          var i = P.li.cloneNode(!1);
          return (
            e &&
              (1 === e.nodeType || 11 === e.nodeType
                ? i.appendChild(e)
                : (i.innerHTML = e)),
            void 0 !== t && "" !== t && (i.className = t),
            null != n && i.classList.add("optgroup-" + n),
            i
          );
        },
        a: function (e, t, n) {
          var i = P.a.cloneNode(!0);
          return (
            e &&
              (11 === e.nodeType
                ? i.appendChild(e)
                : i.insertAdjacentHTML("beforeend", e)),
            void 0 !== t &&
              "" !== t &&
              i.classList.add.apply(i.classList, t.split(/\s+/)),
            n && i.setAttribute("style", n),
            i
          );
        },
        text: function (e, t) {
          var n,
            i,
            r = P.text.cloneNode(!1);
          if (
            (e.content
              ? (r.innerHTML = e.content)
              : ((r.textContent = e.text),
                e.icon &&
                  ((n = P.whitespace.cloneNode(!1)),
                  ((i = (!0 === t ? P.i : P.span).cloneNode(!1)).className =
                    this.options.iconBase + " " + e.icon),
                  P.fragment.appendChild(i),
                  P.fragment.appendChild(n)),
                e.subtext &&
                  (((i = P.subtext.cloneNode(!1)).textContent = e.subtext),
                  r.appendChild(i))),
            !0 === t)
          )
            for (; 0 < r.childNodes.length; )
              P.fragment.appendChild(r.childNodes[0]);
          else P.fragment.appendChild(r);
          return P.fragment;
        },
        label: function (e) {
          var t,
            n,
            i = P.text.cloneNode(!1);
          return (
            (i.innerHTML = e.display),
            e.icon &&
              ((t = P.whitespace.cloneNode(!1)),
              ((n = P.span.cloneNode(!1)).className =
                this.options.iconBase + " " + e.icon),
              P.fragment.appendChild(n),
              P.fragment.appendChild(t)),
            e.subtext &&
              (((n = P.subtext.cloneNode(!1)).textContent = e.subtext),
              i.appendChild(n)),
            P.fragment.appendChild(i),
            P.fragment
          );
        },
      };
    function M(e, t) {
      var n = this;
      u.useDefault || ((w.valHooks.select.set = u._set), (u.useDefault = !0)),
        (this.$element = w(e)),
        (this.$newElement = null),
        (this.$button = null),
        (this.$menu = null),
        (this.options = t),
        (this.selectpicker = {
          main: {},
          search: {},
          current: {},
          view: {},
          isSearching: !1,
          keydown: {
            keyHistory: "",
            resetKeyHistory: {
              start: function () {
                return setTimeout(function () {
                  n.selectpicker.keydown.keyHistory = "";
                }, 800);
              },
            },
          },
        }),
        (this.sizeInfo = {}),
        null === this.options.title &&
          (this.options.title = this.$element.attr("title")),
        "number" == typeof (e = this.options.windowPadding) &&
          (this.options.windowPadding = [e, e, e, e]),
        (this.val = M.prototype.val),
        (this.render = M.prototype.render),
        (this.refresh = M.prototype.refresh),
        (this.setStyle = M.prototype.setStyle),
        (this.selectAll = M.prototype.selectAll),
        (this.deselectAll = M.prototype.deselectAll),
        (this.destroy = M.prototype.destroy),
        (this.remove = M.prototype.remove),
        (this.show = M.prototype.show),
        (this.hide = M.prototype.hide),
        this.init();
    }
    function X(e) {
      var s,
        l = arguments,
        c = e;
      if (([].shift.apply(l), !D.success)) {
        try {
          D.full = (w.fn.dropdown.Constructor.VERSION || "")
            .split(" ")[0]
            .split(".");
        } catch (e) {
          M.BootstrapVersion
            ? (D.full = M.BootstrapVersion.split(" ")[0].split("."))
            : ((D.full = [D.major, "0", "0"]),
              console.warn(
                "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                e
              ));
        }
        (D.major = D.full[0]), (D.success = !0);
      }
      if ("4" === D.major) {
        var t = [];
        M.DEFAULTS.style === $.BUTTONCLASS &&
          t.push({ name: "style", className: "BUTTONCLASS" }),
          M.DEFAULTS.iconBase === $.ICONBASE &&
            t.push({ name: "iconBase", className: "ICONBASE" }),
          M.DEFAULTS.tickIcon === $.TICKICON &&
            t.push({ name: "tickIcon", className: "TICKICON" }),
          ($.DIVIDER = "dropdown-divider"),
          ($.SHOW = "show"),
          ($.BUTTONCLASS = "btn-light"),
          ($.POPOVERHEADER = "popover-header"),
          ($.ICONBASE = ""),
          ($.TICKICON = "bs-ok-default");
        for (var n = 0; n < t.length; n++) {
          e = t[n];
          M.DEFAULTS[e.name] = $[e.className];
        }
      }
      var i = this.each(function () {
        var e = w(this);
        if (e.is("select")) {
          var t = e.data("selectpicker"),
            n = "object" == typeof c && c;
          if (t) {
            if (n)
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) &&
                  (t.options[i] = n[i]);
          } else {
            var r,
              o = e.data();
            for (r in o)
              Object.prototype.hasOwnProperty.call(o, r) &&
                -1 !== w.inArray(r, N) &&
                delete o[r];
            var a = w.extend(
              {},
              M.DEFAULTS,
              w.fn.selectpicker.defaults || {},
              o,
              n
            );
            (a.template = w.extend(
              {},
              M.DEFAULTS.template,
              w.fn.selectpicker.defaults
                ? w.fn.selectpicker.defaults.template
                : {},
              o.template,
              n.template
            )),
              e.data("selectpicker", (t = new M(this, a)));
          }
          "string" == typeof c &&
            (s = t[c] instanceof Function ? t[c].apply(t, l) : t.options[c]);
        }
      });
      return void 0 !== s ? s : i;
    }
    (M.VERSION = "1.13.18"),
      (M.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e, t) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: $.BUTTONCLASS,
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: $.ICONBASE,
        tickIcon: $.TICKICON,
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
        display: !1,
        sanitize: !0,
        sanitizeFn: null,
        whiteList: H,
      }),
      (M.prototype = {
        constructor: M,
        init: function () {
          var n = this,
            e = this.$element.attr("id"),
            t = this.$element[0],
            i = t.form;
          m++,
            (this.selectId = "bs-select-" + m),
            t.classList.add("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            t.classList.contains("show-tick") && (this.options.showTick = !0),
            (this.$newElement = this.createDropdown()),
            this.buildData(),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            i &&
              null === t.form &&
              (i.id || (i.id = "form-" + this.selectId),
              t.setAttribute("form", i.id)),
            (this.$button = this.$newElement.children("button")),
            (this.$menu = this.$newElement.children(O.MENU)),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            t.classList.remove("bs-select-hidden"),
            !0 === this.options.dropdownAlignRight &&
              this.$menu[0].classList.add($.MENURIGHT),
            void 0 !== e && this.$button.attr("data-id", e),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch
              ? (this.liveSearchListener(),
                (this.focusedParent = this.$searchbox[0]))
              : (this.focusedParent = this.$menuInner[0]),
            this.setStyle(),
            this.render(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide" + A, function () {
                  var e, t;
                  n.isVirtual() &&
                    ((t = (e = n.$menuInner[0]).firstChild.cloneNode(!1)),
                    e.replaceChild(t, e.firstChild),
                    (e.scrollTop = 0));
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                n.$element.trigger("hide" + A, e);
              },
              "hidden.bs.dropdown": function (e) {
                n.$element.trigger("hidden" + A, e);
              },
              "show.bs.dropdown": function (e) {
                n.$element.trigger("show" + A, e);
              },
              "shown.bs.dropdown": function (e) {
                n.$element.trigger("shown" + A, e);
              },
            }),
            t.hasAttribute("required") &&
              this.$element.on("invalid" + A, function () {
                n.$button[0].classList.add("bs-invalid"),
                  n.$element
                    .on("shown" + A + ".invalid", function () {
                      n.$element
                        .val(n.$element.val())
                        .off("shown" + A + ".invalid");
                    })
                    .on("rendered" + A, function () {
                      this.validity.valid &&
                        n.$button[0].classList.remove("bs-invalid"),
                        n.$element.off("rendered" + A);
                    }),
                  n.$button.on("blur" + A, function () {
                    n.$element.trigger("focus").trigger("blur"),
                      n.$button.off("blur" + A);
                  });
              }),
            setTimeout(function () {
              n.buildList(), n.$element.trigger("loaded" + A);
            });
        },
        createDropdown: function () {
          var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.multiple ? ' aria-multiselectable="true"' : "",
            n = "",
            i = this.autofocus ? " autofocus" : "";
          D.major < 4 &&
            this.$element.parent().hasClass("input-group") &&
            (n = " input-group-btn");
          var r = "",
            o = "",
            a = "",
            s = "";
          return (
            this.options.header &&
              (r =
                '<div class="' +
                $.POPOVERHEADER +
                '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"),
            this.options.liveSearch &&
              (o =
                '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    k(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="combobox" aria-label="Search" aria-controls="' +
                this.selectId +
                '" aria-autocomplete="list"></div>'),
            this.multiple &&
              this.options.actionsBox &&
              (a =
                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                $.BUTTONCLASS +
                '">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                $.BUTTONCLASS +
                '">' +
                this.options.deselectAllText +
                "</button></div></div>"),
            this.multiple &&
              this.options.doneButton &&
              (s =
                '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                $.BUTTONCLASS +
                '">' +
                this.options.doneButtonText +
                "</button></div></div>"),
            (e =
              '<div class="dropdown bootstrap-select' +
              e +
              n +
              '"><button type="button" tabindex="-1" class="' +
              this.options.styleBase +
              ' dropdown-toggle" ' +
              ("static" === this.options.display
                ? 'data-display="static"'
                : "") +
              'data-toggle="dropdown"' +
              i +
              ' role="combobox" aria-owns="' +
              this.selectId +
              '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
              ("4" === D.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="' +
              $.MENU +
              " " +
              ("4" === D.major ? "" : $.SHOW) +
              '">' +
              r +
              o +
              a +
              '<div class="inner ' +
              $.SHOW +
              '" role="listbox" id="' +
              this.selectId +
              '" tabindex="-1" ' +
              t +
              '><ul class="' +
              $.MENU +
              " inner " +
              ("4" === D.major ? $.SHOW : "") +
              '" role="presentation"></ul></div>' +
              s +
              "</div></div>"),
            w(e)
          );
        },
        setPositionData: function () {
          (this.selectpicker.view.canHighlight = []),
            (this.selectpicker.view.size = 0),
            (this.selectpicker.view.firstHighlightIndex = !1);
          for (var e = 0; e < this.selectpicker.current.data.length; e++) {
            var t = this.selectpicker.current.data[e],
              n = !0;
            "divider" === t.type
              ? ((n = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((n = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (n = !1),
              this.selectpicker.view.canHighlight.push(n),
              n &&
                (this.selectpicker.view.size++,
                (t.posinset = this.selectpicker.view.size),
                !1 === this.selectpicker.view.firstHighlightIndex &&
                  (this.selectpicker.view.firstHighlightIndex = e)),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.elements.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (x, e, t) {
          var C,
            k,
            T = this,
            n = 0,
            E = [];
          function i(e, t) {
            var n,
              i = T.selectpicker.current.elements.length,
              r = [],
              o = !0,
              a = T.isVirtual();
            T.selectpicker.view.scrollTop = e;
            for (
              var s,
                l = Math.ceil(
                  (T.sizeInfo.menuInnerHeight / T.sizeInfo.liHeight) * 1.5
                ),
                c = Math.round(i / l) || 1,
                u = 0;
              u < c;
              u++
            ) {
              var d = u === c - 1 ? i : (u + 1) * l;
              if (((r[u] = [u * l + (u ? 1 : 0), d]), !i)) break;
              void 0 === n &&
                e - 1 <=
                  T.selectpicker.current.data[d - 1].position -
                    T.sizeInfo.menuInnerHeight &&
                (n = u);
            }
            if (
              (void 0 === n && (n = 0),
              (v = [
                T.selectpicker.view.position0,
                T.selectpicker.view.position1,
              ]),
              (h = Math.max(0, n - 1)),
              (p = Math.min(c - 1, n + 1)),
              (T.selectpicker.view.position0 =
                (!1 !== a && Math.max(0, r[h][0])) || 0),
              (T.selectpicker.view.position1 =
                !1 === a ? i : Math.min(i, r[p][1]) || 0),
              (h =
                v[0] !== T.selectpicker.view.position0 ||
                v[1] !== T.selectpicker.view.position1),
              void 0 !== T.activeIndex &&
                ((k = T.selectpicker.main.elements[T.prevActiveIndex]),
                (E = T.selectpicker.main.elements[T.activeIndex]),
                (C = T.selectpicker.main.elements[T.selectedIndex]),
                t &&
                  (T.activeIndex !== T.selectedIndex && T.defocusItem(E),
                  (T.activeIndex = void 0)),
                T.activeIndex &&
                  T.activeIndex !== T.selectedIndex &&
                  T.defocusItem(C)),
              void 0 !== T.prevActiveIndex &&
                T.prevActiveIndex !== T.activeIndex &&
                T.prevActiveIndex !== T.selectedIndex &&
                T.defocusItem(k),
              (t || h) &&
                ((p = T.selectpicker.view.visibleElements
                  ? T.selectpicker.view.visibleElements.slice()
                  : []),
                (T.selectpicker.view.visibleElements =
                  !1 === a
                    ? T.selectpicker.current.elements
                    : T.selectpicker.current.elements.slice(
                        T.selectpicker.view.position0,
                        T.selectpicker.view.position1
                      )),
                T.setOptionStatus(),
                (x || (!1 === a && t)) &&
                  ((v = p),
                  (s = T.selectpicker.view.visibleElements),
                  (o = !(
                    v.length === s.length &&
                    v.every(function (e, t) {
                      return e === s[t];
                    })
                  ))),
                (t || !0 === a) && o))
            ) {
              var h = T.$menuInner[0],
                f = document.createDocumentFragment(),
                p = h.firstChild.cloneNode(!1),
                m = T.selectpicker.view.visibleElements,
                g = [];
              h.replaceChild(p, h.firstChild);
              for (var v, u = 0, b = m.length; u < b; u++) {
                var y,
                  w,
                  _ = m[u];
                T.options.sanitize &&
                  (y = _.lastChild) &&
                  (w =
                    T.selectpicker.current.data[
                      u + T.selectpicker.view.position0
                    ]) &&
                  w.content &&
                  !w.sanitized &&
                  (g.push(y), (w.sanitized = !0)),
                  f.appendChild(_);
              }
              T.options.sanitize &&
                g.length &&
                S(g, T.options.whiteList, T.options.sanitizeFn),
                !0 === a
                  ? ((v =
                      0 === T.selectpicker.view.position0
                        ? 0
                        : T.selectpicker.current.data[
                            T.selectpicker.view.position0 - 1
                          ].position),
                    (o =
                      T.selectpicker.view.position1 > i - 1
                        ? 0
                        : T.selectpicker.current.data[i - 1].position -
                          T.selectpicker.current.data[
                            T.selectpicker.view.position1 - 1
                          ].position),
                    (h.firstChild.style.marginTop = v + "px"),
                    (h.firstChild.style.marginBottom = o + "px"))
                  : ((h.firstChild.style.marginTop = 0),
                    (h.firstChild.style.marginBottom = 0)),
                h.firstChild.appendChild(f),
                !0 === a &&
                  T.sizeInfo.hasScrollBar &&
                  ((p = h.firstChild.offsetWidth),
                  t &&
                  p < T.sizeInfo.menuInnerInnerWidth &&
                  T.sizeInfo.totalMenuWidth > T.sizeInfo.selectWidth
                    ? (h.firstChild.style.minWidth =
                        T.sizeInfo.menuInnerInnerWidth + "px")
                    : p > T.sizeInfo.menuInnerInnerWidth &&
                      ((T.$menu[0].style.minWidth = 0),
                      (v = h.firstChild.offsetWidth) >
                        T.sizeInfo.menuInnerInnerWidth &&
                        ((T.sizeInfo.menuInnerInnerWidth = v),
                        (h.firstChild.style.minWidth =
                          T.sizeInfo.menuInnerInnerWidth + "px")),
                      (T.$menu[0].style.minWidth = "")));
            }
            (T.prevActiveIndex = T.activeIndex),
              T.options.liveSearch
                ? x &&
                  t &&
                  (T.selectpicker.view.canHighlight[(o = 0)] ||
                    (o =
                      1 +
                      T.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (a = T.selectpicker.view.visibleElements[o]),
                  T.defocusItem(T.selectpicker.view.currentActive),
                  (T.activeIndex = (
                    T.selectpicker.current.data[o] || {}
                  ).index),
                  T.focusItem(a))
                : T.$menuInner.trigger("focus");
          }
          (this.selectpicker.isSearching = x),
            (this.selectpicker.current = x
              ? this.selectpicker.search
              : this.selectpicker.main),
            this.setPositionData(),
            e &&
              (t
                ? (n = this.$menuInner[0].scrollTop)
                : T.multiple ||
                  ("number" ==
                    typeof (t = (
                      (e = T.$element[0]).options[e.selectedIndex] || {}
                    ).liIndex) &&
                    !1 !== T.options.size &&
                    (t = (e = T.selectpicker.main.data[t]) && e.position) &&
                    (n =
                      t -
                      (T.sizeInfo.menuInnerHeight + T.sizeInfo.liHeight) / 2))),
            i(n, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                T.noScroll || i(this.scrollTop, t), (T.noScroll = !1);
              }),
            w(window)
              .off("resize" + A + "." + this.selectId + ".createView")
              .on(
                "resize" + A + "." + this.selectId + ".createView",
                function () {
                  T.$newElement.hasClass($.SHOW) &&
                    i(T.$menuInner[0].scrollTop);
                }
              );
        },
        focusItem: function (e, t, n) {
          var i;
          e &&
            ((t = t || this.selectpicker.main.data[this.activeIndex]),
            (i = e.firstChild) &&
              (i.setAttribute("aria-setsize", this.selectpicker.view.size),
              i.setAttribute("aria-posinset", t.posinset),
              !0 !== n &&
                (this.focusedParent.setAttribute("aria-activedescendant", i.id),
                e.classList.add("active"),
                i.classList.add("active"))));
        },
        defocusItem: function (e) {
          e &&
            (e.classList.remove("active"),
            e.firstChild && e.firstChild.classList.remove("active"));
        },
        setPlaceholder: function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            a = this,
            s = !1;
          return (
            this.options.title &&
              !this.multiple &&
              (this.selectpicker.view.titleOption ||
                (this.selectpicker.view.titleOption =
                  document.createElement("option")),
              (e = this.$element[0]),
              (t = !(s = !0)),
              (n = !this.selectpicker.view.titleOption.parentNode),
              (i = e.selectedIndex),
              (r = e.options[i]),
              (o =
                (o =
                  window.performance &&
                  window.performance.getEntriesByType("navigation")) && o.length
                  ? "back_forward" !== o[0].type
                  : 2 !== window.performance.navigation.type),
              n &&
                ((this.selectpicker.view.titleOption.className =
                  "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (t =
                  !r ||
                  (0 === i &&
                    !1 === r.defaultSelected &&
                    void 0 === this.$element.data("selected")))),
              (!n && 0 === this.selectpicker.view.titleOption.index) ||
                e.insertBefore(
                  this.selectpicker.view.titleOption,
                  e.firstChild
                ),
              t && o
                ? (e.selectedIndex = 0)
                : "complete" !== document.readyState &&
                  window.addEventListener("pageshow", function () {
                    a.selectpicker.view.displayedValue !== e.value &&
                      a.render();
                  })),
            s
          );
        },
        buildData: function () {
          var e = ':not([hidden]):not([data-hidden="true"])',
            o = [],
            t = 0,
            n = this.setPlaceholder() ? 1 : 0,
            i =
              (this.options.hideDisabled && (e += ":not(:disabled)"),
              this.$element[0].querySelectorAll("select > *" + e));
          function a(e) {
            var t = o[o.length - 1];
            (t && "divider" === t.type && (t.optID || e.optID)) ||
              (((e = e || {}).type = "divider"), o.push(e));
          }
          function r(e, t) {
            var n, i, r;
            ((t = t || {}).divider = "true" === e.getAttribute("data-divider")),
              t.divider
                ? a({ optID: t.optID })
                : ((n = o.length),
                  (i = (i = e.style.cssText) ? k(i) : ""),
                  (r = (e.className || "") + (t.optgroupClass || "")),
                  t.optID && (r = "opt " + r),
                  (t.optionClass = r.trim()),
                  (t.inlineStyle = i),
                  (t.text = e.textContent),
                  (t.content = e.getAttribute("data-content")),
                  (t.tokens = e.getAttribute("data-tokens")),
                  (t.subtext = e.getAttribute("data-subtext")),
                  (t.icon = e.getAttribute("data-icon")),
                  (e.liIndex = n),
                  (t.display = t.content || t.text),
                  (t.type = "option"),
                  (t.index = n),
                  (t.option = e),
                  (t.selected = !!e.selected),
                  (t.disabled = t.disabled || !!e.disabled),
                  o.push(t));
          }
          for (var s = i.length, l = n; l < s; l++) {
            var c = i[l];
            if ("OPTGROUP" !== c.tagName) r(c, {});
            else {
              y = b = v = m = p = g = f = h = d = u = h = c = void 0;
              var c = l,
                u = (h = i)[c],
                d = !(c - 1 < n) && h[c - 1],
                h = h[c + 1],
                f = u.querySelectorAll("option" + e);
              if (f.length) {
                var p,
                  m,
                  g = {
                    display: k(u.label),
                    subtext: u.getAttribute("data-subtext"),
                    icon: u.getAttribute("data-icon"),
                    type: "optgroup-label",
                    optgroupClass: " " + (u.className || ""),
                  };
                t++, d && a({ optID: t }), (g.optID = t), o.push(g);
                for (var v = 0, b = f.length; v < b; v++) {
                  var y = f[v];
                  0 === v && (m = (p = o.length - 1) + b),
                    r(y, {
                      headerIndex: p,
                      lastIndex: m,
                      optID: g.optID,
                      optgroupClass: g.optgroupClass,
                      disabled: u.disabled,
                    });
                }
                h && a({ optID: t });
              }
            }
          }
          this.selectpicker.main.data = this.selectpicker.current.data = o;
        },
        buildList: function () {
          var e = this,
            t = this.selectpicker.main.data,
            n = [],
            i = 0;
          (!e.options.showTick && !e.multiple) ||
            P.checkMark.parentNode ||
            ((P.checkMark.className =
              this.options.iconBase + " " + e.options.tickIcon + " check-mark"),
            P.a.appendChild(P.checkMark));
          for (var r = t.length, o = 0; o < r; o++) {
            var a,
              s = t[o],
              l = ((c = a = l = void 0), s),
              c = 0;
            switch (l.type) {
              case "divider":
                a = g.li(!1, $.DIVIDER, l.optID ? l.optID + "div" : void 0);
                break;
              case "option":
                (a = g.li(
                  g.a(g.text.call(e, l), l.optionClass, l.inlineStyle),
                  "",
                  l.optID
                )).firstChild && (a.firstChild.id = e.selectId + "-" + l.index);
                break;
              case "optgroup-label":
                a = g.li(
                  g.label.call(e, l),
                  "dropdown-header" + l.optgroupClass,
                  l.optID
                );
            }
            (l.element = a),
              n.push(a),
              l.display && (c += l.display.length),
              l.subtext && (c += l.subtext.length),
              l.icon && (c += 1),
              i < c &&
                ((i = c), (e.selectpicker.view.widestOption = n[n.length - 1]));
          }
          this.selectpicker.main.elements = this.selectpicker.current.elements =
            n;
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function () {
          var e = this.$element[0],
            t = this.setPlaceholder() && 0 === e.selectedIndex,
            n = _(e, this.options.hideDisabled),
            i = n.length,
            r = this.$button[0],
            o = r.querySelector(".filter-option-inner-inner"),
            a = document.createTextNode(this.options.multipleSeparator),
            s = P.fragment.cloneNode(!1),
            l = !1;
          if (
            (r.classList.toggle(
              "bs-placeholder",
              this.multiple ? !i : !x(e, n)
            ),
            this.multiple ||
              1 !== n.length ||
              (this.selectpicker.view.displayedValue = x(e, n)),
            "static" === this.options.selectedTextFormat)
          )
            s = g.text.call(this, { text: this.options.title }, !0);
          else if (
            !1 ===
            (this.multiple &&
              -1 !== this.options.selectedTextFormat.indexOf("count") &&
              1 < i &&
              ((1 < (e = this.options.selectedTextFormat.split(">")).length &&
                i > e[1]) ||
                (1 === e.length && 2 <= i)))
          ) {
            if (!t) {
              for (var c = 0; c < i && c < 50; c++) {
                var u = n[c],
                  d = this.selectpicker.main.data[u.liIndex],
                  h = {};
                this.multiple && 0 < c && s.appendChild(a.cloneNode(!1)),
                  u.title
                    ? (h.text = u.title)
                    : d &&
                      (d.content && this.options.showContent
                        ? ((h.content = d.content.toString()), (l = !0))
                        : (this.options.showIcon && (h.icon = d.icon),
                          this.options.showSubtext &&
                            !this.multiple &&
                            d.subtext &&
                            (h.subtext = " " + d.subtext),
                          (h.text = u.textContent.trim()))),
                  s.appendChild(g.text.call(this, h, !0));
              }
              49 < i && s.appendChild(document.createTextNode("..."));
            }
          } else
            var e =
                ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])',
              t =
                (this.options.hideDisabled && (e += ":not(:disabled)"),
                this.$element[0].querySelectorAll(
                  "select > option" + e + ", optgroup" + e + " option" + e
                ).length),
              e =
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(i, t)
                  : this.options.countSelectedText,
              s = g.text.call(
                this,
                {
                  text: e
                    .replace("{0}", i.toString())
                    .replace("{1}", t.toString()),
                },
                !0
              );
          null == this.options.title &&
            (this.options.title = this.$element.attr("title")),
            s.childNodes.length ||
              (s = g.text.call(
                this,
                {
                  text:
                    void 0 !== this.options.title
                      ? this.options.title
                      : this.options.noneSelectedText,
                },
                !0
              )),
            (r.title = s.textContent.replace(/<[^>]*>?/g, "").trim()),
            this.options.sanitize &&
              l &&
              S([s], this.options.whiteList, this.options.sanitizeFn),
            (o.innerHTML = ""),
            o.appendChild(s),
            D.major < 4 &&
              this.$newElement[0].classList.contains("bs3-has-addon") &&
              ((e = r.querySelector(".filter-expand")),
              ((t = o.cloneNode(!0)).className = "filter-expand"),
              e ? r.replaceChild(t, e) : r.appendChild(t)),
            this.$element.trigger("rendered" + A);
        },
        setStyle: function (e, t) {
          var n = this.$button[0],
            i = this.$newElement[0],
            r = this.options.style.trim();
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            ),
            D.major < 4 &&
              (i.classList.add("bs3"),
              i.parentNode.classList &&
                i.parentNode.classList.contains("input-group") &&
                (i.previousElementSibling || i.nextElementSibling) &&
                (
                  i.previousElementSibling || i.nextElementSibling
                ).classList.contains("input-group-addon") &&
                i.classList.add("bs3-has-addon")),
            (i = e ? e.trim() : r),
            "add" == t
              ? i && n.classList.add.apply(n.classList, i.split(" "))
              : "remove" == t
              ? i && n.classList.remove.apply(n.classList, i.split(" "))
              : (r && n.classList.remove.apply(n.classList, r.split(" ")),
                i && n.classList.add.apply(n.classList, i.split(" ")));
        },
        liHeight: function (e) {
          if (
            e ||
            (!1 !== this.options.size && !Object.keys(this.sizeInfo).length)
          ) {
            var t,
              e = P.div.cloneNode(!1),
              n = P.div.cloneNode(!1),
              i = P.div.cloneNode(!1),
              r = document.createElement("ul"),
              o = P.li.cloneNode(!1),
              a = P.li.cloneNode(!1),
              s = P.a.cloneNode(!1),
              l = P.span.cloneNode(!1),
              c =
                this.options.header &&
                0 < this.$menu.find("." + $.POPOVERHEADER).length
                  ? this.$menu.find("." + $.POPOVERHEADER)[0].cloneNode(!0)
                  : null,
              u = this.options.liveSearch ? P.div.cloneNode(!1) : null,
              d =
                this.options.actionsBox &&
                this.multiple &&
                0 < this.$menu.find(".bs-actionsbox").length
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              h =
                this.options.doneButton &&
                this.multiple &&
                0 < this.$menu.find(".bs-donebutton").length
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null,
              f = this.$element.find("option")[0];
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (l.className = "text"),
              (s.className = "dropdown-item " + (f ? f.className : "")),
              (e.className = this.$menu[0].parentNode.className + " " + $.SHOW),
              (e.style.width = 0),
              "auto" === this.options.width && (n.style.minWidth = 0),
              (n.className = $.MENU + " " + $.SHOW),
              (i.className = "inner " + $.SHOW),
              (r.className =
                $.MENU + " inner " + ("4" === D.major ? $.SHOW : "")),
              (o.className = $.DIVIDER),
              (a.className = "dropdown-header"),
              l.appendChild(document.createTextNode("​")),
              this.selectpicker.current.data.length)
            )
              for (var p = 0; p < this.selectpicker.current.data.length; p++) {
                var m = this.selectpicker.current.data[p];
                if ("option" === m.type) {
                  t = m.element;
                  break;
                }
              }
            else (t = P.li.cloneNode(!1)), s.appendChild(l), t.appendChild(s);
            a.appendChild(l.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                r.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              r.appendChild(t),
              r.appendChild(o),
              r.appendChild(a),
              c && n.appendChild(c),
              u &&
                ((f = document.createElement("input")),
                (u.className = "bs-searchbox"),
                (f.className = "form-control"),
                u.appendChild(f),
                n.appendChild(u)),
              d && n.appendChild(d),
              i.appendChild(r),
              n.appendChild(i),
              h && n.appendChild(h),
              e.appendChild(n),
              document.body.appendChild(e);
            var s = t.offsetHeight,
              l = a ? a.offsetHeight : 0,
              f = c ? c.offsetHeight : 0,
              r = u ? u.offsetHeight : 0,
              a = d ? d.offsetHeight : 0,
              c = h ? h.offsetHeight : 0,
              u = w(o).outerHeight(!0),
              d = !!window.getComputedStyle && window.getComputedStyle(n),
              h = n.offsetWidth,
              o = d ? null : w(n),
              g = {
                vert:
                  v(d ? d.paddingTop : o.css("paddingTop")) +
                  v(d ? d.paddingBottom : o.css("paddingBottom")) +
                  v(d ? d.borderTopWidth : o.css("borderTopWidth")) +
                  v(d ? d.borderBottomWidth : o.css("borderBottomWidth")),
                horiz:
                  v(d ? d.paddingLeft : o.css("paddingLeft")) +
                  v(d ? d.paddingRight : o.css("paddingRight")) +
                  v(d ? d.borderLeftWidth : o.css("borderLeftWidth")) +
                  v(d ? d.borderRightWidth : o.css("borderRightWidth")),
              },
              d = {
                vert:
                  g.vert +
                  v(d ? d.marginTop : o.css("marginTop")) +
                  v(d ? d.marginBottom : o.css("marginBottom")) +
                  2,
                horiz:
                  g.horiz +
                  v(d ? d.marginLeft : o.css("marginLeft")) +
                  v(d ? d.marginRight : o.css("marginRight")) +
                  2,
              };
            (i.style.overflowY = "scroll"),
              (o = n.offsetWidth - h),
              document.body.removeChild(e),
              (this.sizeInfo.liHeight = s),
              (this.sizeInfo.dropdownHeaderHeight = l),
              (this.sizeInfo.headerHeight = f),
              (this.sizeInfo.searchHeight = r),
              (this.sizeInfo.actionsHeight = a),
              (this.sizeInfo.doneButtonHeight = c),
              (this.sizeInfo.dividerHeight = u),
              (this.sizeInfo.menuPadding = g),
              (this.sizeInfo.menuExtras = d),
              (this.sizeInfo.menuWidth = h),
              (this.sizeInfo.menuInnerInnerWidth = h - g.horiz),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = o),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var e,
            t = w(window),
            n = this.$newElement.offset(),
            i = w(this.options.container),
            i =
              (this.options.container && i.length && !i.is("body")
                ? (((e = i.offset()).top += parseInt(i.css("borderTopWidth"))),
                  (e.left += parseInt(i.css("borderLeftWidth"))))
                : (e = { top: 0, left: 0 }),
              this.options.windowPadding);
          (this.sizeInfo.selectOffsetTop = n.top - e.top - t.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              t.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              e.top -
              i[2]),
            (this.sizeInfo.selectOffsetLeft = n.left - e.left - t.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              t.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              e.left -
              i[1]),
            (this.sizeInfo.selectOffsetTop -= i[0]),
            (this.sizeInfo.selectOffsetLeft -= i[3]);
        },
        setMenuSize: function (e) {
          this.getSelectPosition();
          var t,
            n,
            i,
            r,
            o,
            a,
            s = this.sizeInfo.selectWidth,
            l = this.sizeInfo.liHeight,
            c = this.sizeInfo.headerHeight,
            u = this.sizeInfo.searchHeight,
            d = this.sizeInfo.actionsHeight,
            h = this.sizeInfo.doneButtonHeight,
            f = this.sizeInfo.dividerHeight,
            p = this.sizeInfo.menuPadding,
            m = 0;
          if (
            (this.options.dropupAuto &&
              ((a = l * this.selectpicker.current.elements.length + p.vert),
              (a =
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                a + this.sizeInfo.menuExtras.vert + 50 >
                  this.sizeInfo.selectOffsetBot),
              !0 === this.selectpicker.isSearching &&
                (a = this.selectpicker.dropup),
              this.$newElement.toggleClass($.DROPUP, a),
              (this.selectpicker.dropup = a)),
            "auto" === this.options.size)
          )
            (a =
              3 < this.selectpicker.current.elements.length
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (n =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (i = a + c + u + d + h),
              (o = Math.max(a - p.vert, 0)),
              (t =
                (r = n =
                  this.$newElement.hasClass($.DROPUP)
                    ? this.sizeInfo.selectOffsetTop -
                      this.sizeInfo.menuExtras.vert
                    : n) -
                c -
                u -
                d -
                h -
                p.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var g = 0; g < this.options.size; g++)
              "divider" === this.selectpicker.current.data[g].type && m++;
            (t = (n = l * this.options.size + m * f + p.vert) - p.vert),
              (r = n + c + u + d + h),
              (i = o = "");
          }
          this.$menu.css({
            "max-height": r + "px",
            overflow: "hidden",
            "min-height": i + "px",
          }),
            this.$menuInner.css({
              "max-height": t + "px",
              "overflow-y": "auto",
              "min-height": o + "px",
            }),
            (this.sizeInfo.menuInnerHeight = Math.max(t, 1)),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth)),
            "auto" === this.options.dropdownAlignRight &&
              this.$menu.toggleClass(
                $.MENURIGHT,
                this.sizeInfo.selectOffsetLeft >
                  this.sizeInfo.selectOffsetRight &&
                  this.sizeInfo.selectOffsetRight <
                    this.sizeInfo.totalMenuWidth - s
              ),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (e) {
          var t, n;
          this.liHeight(e),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size &&
              ((t = this),
              (n = w(window)),
              this.setMenuSize(),
              this.options.liveSearch &&
                this.$searchbox
                  .off("input.setMenuSize propertychange.setMenuSize")
                  .on(
                    "input.setMenuSize propertychange.setMenuSize",
                    function () {
                      return t.setMenuSize();
                    }
                  ),
              "auto" === this.options.size
                ? n
                    .off(
                      "resize" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    )
                    .on(
                      "resize" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize",
                      function () {
                        return t.setMenuSize();
                      }
                    )
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  n.off(
                    "resize" +
                      A +
                      "." +
                      this.selectId +
                      ".setMenuSize scroll" +
                      A +
                      "." +
                      this.selectId +
                      ".setMenuSize"
                  )),
            this.createView(!1, !0, e);
        },
        setWidth: function () {
          var n = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                n.$menu.css("min-width", "0"),
                  n.$element.on("loaded" + A, function () {
                    n.liHeight(), n.setMenuSize();
                    var e = n.$newElement.clone().appendTo("body"),
                      t = e
                        .css("width", "auto")
                        .children("button")
                        .outerWidth();
                    e.remove(),
                      (n.sizeInfo.selectWidth = Math.max(
                        n.sizeInfo.totalMenuWidth,
                        t
                      )),
                      n.$newElement.css("width", n.sizeInfo.selectWidth + "px");
                  });
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement[0].classList.remove("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = w('<div class="bs-container" />');
          function e(e) {
            var t = {},
              n =
                a.options.display ||
                (!!w.fn.dropdown.Constructor.Default &&
                  w.fn.dropdown.Constructor.Default.display);
            a.$bsContainer
              .addClass(e.attr("class").replace(/form-control|fit-width/gi, ""))
              .toggleClass($.DROPUP, e.hasClass($.DROPUP)),
              (i = e.offset()),
              s.is("body")
                ? (r = { top: 0, left: 0 })
                : (((r = s.offset()).top +=
                    parseInt(s.css("borderTopWidth")) - s.scrollTop()),
                  (r.left +=
                    parseInt(s.css("borderLeftWidth")) - s.scrollLeft())),
              (o = e.hasClass($.DROPUP) ? 0 : e[0].offsetHeight),
              (D.major < 4 || "static" === n) &&
                ((t.top = i.top - r.top + o), (t.left = i.left - r.left)),
              (t.width = e[0].offsetWidth),
              a.$bsContainer.css(t);
          }
          var i,
            r,
            o,
            a = this,
            s = w(this.options.container);
          this.$button.on("click.bs.dropdown.data-api", function () {
            a.isDisabled() ||
              (e(a.$newElement),
              a.$bsContainer
                .appendTo(a.options.container)
                .toggleClass($.SHOW, !a.$button.hasClass($.SHOW))
                .append(a.$menu));
          }),
            w(window)
              .off(
                "resize" +
                  A +
                  "." +
                  this.selectId +
                  " scroll" +
                  A +
                  "." +
                  this.selectId
              )
              .on(
                "resize" +
                  A +
                  "." +
                  this.selectId +
                  " scroll" +
                  A +
                  "." +
                  this.selectId,
                function () {
                  a.$newElement.hasClass($.SHOW) && e(a.$newElement);
                }
              ),
            this.$element.on("hide" + A, function () {
              a.$menu.data("height", a.$menu.height()), a.$bsContainer.detach();
            });
        },
        setOptionStatus: function (e) {
          if (
            ((this.noScroll = !1),
            this.selectpicker.view.visibleElements &&
              this.selectpicker.view.visibleElements.length)
          )
            for (
              var t = 0;
              t < this.selectpicker.view.visibleElements.length;
              t++
            ) {
              var n =
                  this.selectpicker.current.data[
                    t + this.selectpicker.view.position0
                  ],
                i = n.option;
              i &&
                (!0 !== e && this.setDisabled(n.index, n.disabled),
                this.setSelected(n.index, i.selected));
            }
        },
        setSelected: function (e, t) {
          var n,
            i = this.selectpicker.main.elements[e],
            r = this.selectpicker.main.data[e],
            o = void 0 !== this.activeIndex,
            a = this.activeIndex === e || (t && !this.multiple && !o);
          (r.selected = t),
            (n = i.firstChild),
            t && (this.selectedIndex = e),
            i.classList.toggle("selected", t),
            a
              ? (this.focusItem(i, r),
                (this.selectpicker.view.currentActive = i),
                (this.activeIndex = e))
              : this.defocusItem(i),
            n &&
              (n.classList.toggle("selected", t),
              t
                ? n.setAttribute("aria-selected", !0)
                : this.multiple
                ? n.setAttribute("aria-selected", !1)
                : n.removeAttribute("aria-selected")),
            a ||
              o ||
              !t ||
              void 0 === this.prevActiveIndex ||
              ((r = this.selectpicker.main.elements[this.prevActiveIndex]),
              this.defocusItem(r));
        },
        setDisabled: function (e, t) {
          var n = this.selectpicker.main.elements[e];
          (this.selectpicker.main.data[e].disabled = t),
            (e = n.firstChild),
            n.classList.toggle($.DISABLED, t),
            e &&
              ("4" === D.major && e.classList.toggle($.DISABLED, t),
              t
                ? (e.setAttribute("aria-disabled", t),
                  e.setAttribute("tabindex", -1))
                : (e.removeAttribute("aria-disabled"),
                  e.setAttribute("tabindex", 0)));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          this.isDisabled()
            ? (this.$newElement[0].classList.add($.DISABLED),
              this.$button.addClass($.DISABLED).attr("aria-disabled", !0))
            : this.$button[0].classList.contains($.DISABLED) &&
              (this.$newElement[0].classList.remove($.DISABLED),
              this.$button.removeClass($.DISABLED).attr("aria-disabled", !1));
        },
        clickListener: function () {
          var y = this,
            t = w(document);
          function e() {
            (y.options.liveSearch ? y.$searchbox : y.$menuInner).trigger(
              "focus"
            );
          }
          function n() {
            y.dropdown &&
            y.dropdown._popper &&
            y.dropdown._popper.state.isCreated
              ? e()
              : requestAnimationFrame(n);
          }
          t.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                t.data("spaceSelect") &&
                (e.preventDefault(), t.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              3 < D.major &&
                !y.dropdown &&
                ((y.dropdown = y.$button.data("bs.dropdown")),
                (y.dropdown._menu = y.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function () {
              y.$newElement.hasClass($.SHOW) || y.setSize();
            }),
            this.$element.on("shown" + A, function () {
              y.$menuInner[0].scrollTop !== y.selectpicker.view.scrollTop &&
                (y.$menuInner[0].scrollTop = y.selectpicker.view.scrollTop),
                3 < D.major ? requestAnimationFrame(n) : e();
            }),
            this.$menuInner.on("mouseenter", "li a", function (e) {
              var t = this.parentElement,
                n = y.isVirtual() ? y.selectpicker.view.position0 : 0,
                i = Array.prototype.indexOf.call(t.parentElement.children, t),
                i = y.selectpicker.current.data[i + n];
              y.focusItem(t, i, !0);
            }),
            this.$menuInner.on("click", "li a", function (e, t) {
              var n = w(this),
                i = y.$element[0],
                r = y.isVirtual() ? y.selectpicker.view.position0 : 0,
                r = y.selectpicker.current.data[n.parent().index() + r],
                o = r.index,
                a = x(i),
                s = i.selectedIndex,
                l = i.options[s],
                c = !0;
              if (
                (y.multiple &&
                  1 !== y.options.maxOptions &&
                  e.stopPropagation(),
                e.preventDefault(),
                !y.isDisabled() && !n.parent().hasClass($.DISABLED))
              ) {
                var e = r.option,
                  n = w(e),
                  r = e.selected,
                  u = n.parent("optgroup"),
                  d = u.find("option"),
                  h = y.options.maxOptions,
                  f = u.data("maxOptions") || !1;
                if (
                  ((t = o === y.activeIndex ? !0 : t) ||
                    ((y.prevActiveIndex = y.activeIndex),
                    (y.activeIndex = void 0)),
                  y.multiple)
                ) {
                  if (
                    ((e.selected = !r),
                    y.setSelected(o, !r),
                    y.focusedParent.focus(),
                    !1 !== h || !1 !== f)
                  ) {
                    (t = h < _(i).length),
                      (r = f < u.find("option:selected").length);
                    if ((h && t) || (f && r))
                      if (h && 1 == h)
                        (i.selectedIndex = -1),
                          (e.selected = !0),
                          y.setOptionStatus(!0);
                      else if (f && 1 == f) {
                        for (var p = 0; p < d.length; p++) {
                          var m = d[p];
                          (m.selected = !1), y.setSelected(m.liIndex, !1);
                        }
                        (e.selected = !0), y.setSelected(o, !0);
                      } else {
                        var u =
                            "string" == typeof y.options.maxOptionsText
                              ? [
                                  y.options.maxOptionsText,
                                  y.options.maxOptionsText,
                                ]
                              : y.options.maxOptionsText,
                          u = "function" == typeof u ? u(h, f) : u,
                          g = u[0].replace("{n}", h),
                          v = u[1].replace("{n}", f),
                          b = w('<div class="notify"></div>');
                        u[2] &&
                          ((g = g.replace("{var}", u[2][1 < h ? 0 : 1])),
                          (v = v.replace("{var}", u[2][1 < f ? 0 : 1]))),
                          (e.selected = !1),
                          y.$menu.append(b),
                          h &&
                            t &&
                            (b.append(w("<div>" + g + "</div>")),
                            (c = !1),
                            y.$element.trigger("maxReached" + A)),
                          f &&
                            r &&
                            (b.append(w("<div>" + v + "</div>")),
                            (c = !1),
                            y.$element.trigger("maxReachedGrp" + A)),
                          setTimeout(function () {
                            y.setSelected(o, !1);
                          }, 10),
                          b[0].classList.add("fadeOut"),
                          setTimeout(function () {
                            b.remove();
                          }, 1050);
                      }
                  }
                } else
                  l && (l.selected = !1),
                    (e.selected = !0),
                    y.setSelected(o, !0);
                !y.multiple || (y.multiple && 1 === y.options.maxOptions)
                  ? y.$button.trigger("focus")
                  : y.options.liveSearch && y.$searchbox.trigger("focus"),
                  !c ||
                    (!y.multiple && s === i.selectedIndex) ||
                    ((C = [e.index, n.prop("selected"), a]),
                    y.$element.triggerNative("change"));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                $.DISABLED +
                " a, ." +
                $.POPOVERHEADER +
                ", ." +
                $.POPOVERHEADER +
                " :not(.close)",
              function (e) {
                e.currentTarget == this &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (y.options.liveSearch && !w(e.target).hasClass("close")
                    ? y.$searchbox
                    : y.$button
                  ).trigger("focus"));
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  (y.options.liveSearch ? y.$searchbox : y.$button).trigger(
                    "focus"
                  );
              }
            ),
            this.$menu.on(
              "click",
              "." + $.POPOVERHEADER + " .close",
              function () {
                y.$button.trigger("click");
              }
            ),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (e) {
              (y.options.liveSearch ? y.$searchbox : y.$button).trigger(
                "focus"
              ),
                e.preventDefault(),
                e.stopPropagation(),
                w(this).hasClass("bs-select-all")
                  ? y.selectAll()
                  : y.deselectAll();
            }),
            this.$button
              .on("focus" + A, function (e) {
                var t = y.$element[0].getAttribute("tabindex");
                void 0 !== t &&
                  e.originalEvent &&
                  e.originalEvent.isTrusted &&
                  (this.setAttribute("tabindex", t),
                  y.$element[0].setAttribute("tabindex", -1),
                  (y.selectpicker.view.tabindex = t));
              })
              .on("blur" + A, function (e) {
                void 0 !== y.selectpicker.view.tabindex &&
                  e.originalEvent &&
                  e.originalEvent.isTrusted &&
                  (y.$element[0].setAttribute(
                    "tabindex",
                    y.selectpicker.view.tabindex
                  ),
                  this.setAttribute("tabindex", -1),
                  (y.selectpicker.view.tabindex = void 0));
              }),
            this.$element
              .on("change" + A, function () {
                y.render(), y.$element.trigger("changed" + A, C), (C = null);
              })
              .on("focus" + A, function () {
                y.options.mobile || y.$button[0].focus();
              });
        },
        liveSearchListener: function () {
          var h = this;
          this.$button.on("click.bs.dropdown.data-api", function () {
            h.$searchbox.val() &&
              (h.$searchbox.val(""),
              (h.selectpicker.search.previousValue = void 0));
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var e = h.$searchbox[0].value;
              if (
                ((h.selectpicker.search.elements = []),
                (h.selectpicker.search.data = []),
                e)
              ) {
                var t = [],
                  n = e.toUpperCase(),
                  i = {},
                  r = [],
                  o = h._searchStyle(),
                  a = h.options.liveSearchNormalize;
                a && (n = f(n));
                for (var s = 0; s < h.selectpicker.main.data.length; s++) {
                  var l = h.selectpicker.main.data[s];
                  i[s] || (i[s] = b(l, n, o, a)),
                    i[s] &&
                      void 0 !== l.headerIndex &&
                      -1 === r.indexOf(l.headerIndex) &&
                      (0 < l.headerIndex &&
                        ((i[l.headerIndex - 1] = !0),
                        r.push(l.headerIndex - 1)),
                      (i[l.headerIndex] = !0),
                      r.push(l.headerIndex),
                      (i[l.lastIndex + 1] = !0)),
                    i[s] && "optgroup-label" !== l.type && r.push(s);
                }
                for (var s = 0, c = r.length; s < c; s++) {
                  var u = r[s],
                    d = r[s - 1],
                    l = h.selectpicker.main.data[u],
                    d = h.selectpicker.main.data[d];
                  ("divider" !== l.type ||
                    ("divider" === l.type &&
                      d &&
                      "divider" !== d.type &&
                      c - 1 !== s)) &&
                    (h.selectpicker.search.data.push(l),
                    t.push(h.selectpicker.main.elements[u]));
                }
                (h.activeIndex = void 0),
                  (h.noScroll = !0),
                  h.$menuInner.scrollTop(0),
                  (h.selectpicker.search.elements = t),
                  h.createView(!0),
                  !function (e, t) {
                    e.length ||
                      ((P.noResults.innerHTML =
                        this.options.noneResultsText.replace(
                          "{0}",
                          '"' + k(t) + '"'
                        )),
                      this.$menuInner[0].firstChild.appendChild(P.noResults));
                  }.call(h, t, e);
              } else h.selectpicker.search.previousValue && (h.$menuInner.scrollTop(0), h.createView(!1));
              h.selectpicker.search.previousValue = e;
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (e) {
          var t,
            n = this.$element[0];
          return void 0 !== e
            ? ((t = x(n)),
              (C = [null, null, t]),
              this.$element.val(e).trigger("changed" + A, C),
              this.$newElement.hasClass($.SHOW) &&
                (this.multiple
                  ? this.setOptionStatus(!0)
                  : "number" ==
                      typeof (t = (n.options[n.selectedIndex] || {}).liIndex) &&
                    (this.setSelected(this.selectedIndex, !1),
                    this.setSelected(t, !0))),
              this.render(),
              (C = null),
              this.$element)
            : this.$element.val();
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            var t = this.$element[0],
              n = 0,
              i = 0,
              r = x(t);
            t.classList.add("bs-select-hidden");
            for (
              var o = 0, a = this.selectpicker.current.data, s = a.length;
              o < s;
              o++
            ) {
              var l = a[o],
                c = l.option;
              c &&
                !l.disabled &&
                "divider" !== l.type &&
                (l.selected && n++, !0 === (c.selected = e) && i++);
            }
            t.classList.remove("bs-select-hidden"),
              n !== i &&
                (this.setOptionStatus(),
                (C = [null, null, r]),
                this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e) {
          (e = e || window.event) && e.stopPropagation(),
            this.$button.trigger("click.bs.dropdown.data-api");
        },
        keydown: function (e) {
          var t,
            n,
            i,
            r,
            o = w(this),
            a = o.hasClass("dropdown-toggle"),
            s = (a ? o.closest(".dropdown") : o.closest(O.MENU)).data("this"),
            l = s.findLis(),
            c = !1,
            a = e.which === E && !a && !s.options.selectOnTab,
            u = K.test(e.which) || a,
            d = s.$menuInner[0].scrollTop,
            h = !0 === s.isVirtual() ? s.selectpicker.view.position0 : 0;
          if (!(112 <= e.which && e.which <= 123))
            if (
              !(t = s.$newElement.hasClass($.SHOW)) &&
              (u ||
                (48 <= e.which && e.which <= 57) ||
                (96 <= e.which && e.which <= 105) ||
                (65 <= e.which && e.which <= 90)) &&
              (s.$button.trigger("click.bs.dropdown.data-api"),
              s.options.liveSearch)
            )
              s.$searchbox.trigger("focus");
            else {
              if (
                (e.which === y &&
                  t &&
                  (e.preventDefault(),
                  s.$button
                    .trigger("click.bs.dropdown.data-api")
                    .trigger("focus")),
                u)
              ) {
                if (!l.length) return;
                -1 !==
                  (u = (n = s.selectpicker.main.elements[s.activeIndex])
                    ? Array.prototype.indexOf.call(n.parentElement.children, n)
                    : -1) && s.defocusItem(n),
                  e.which === I
                    ? (-1 !== u && u--,
                      u + h < 0 && (u += l.length),
                      s.selectpicker.view.canHighlight[u + h] ||
                        (-1 ===
                          (u =
                            s.selectpicker.view.canHighlight
                              .slice(0, u + h)
                              .lastIndexOf(!0) - h) &&
                          (u = l.length - 1)))
                    : (e.which !== L && !a) ||
                      (++u + h >= s.selectpicker.view.canHighlight.length &&
                        (u = s.selectpicker.view.firstHighlightIndex),
                      s.selectpicker.view.canHighlight[u + h] ||
                        (u =
                          u +
                          1 +
                          s.selectpicker.view.canHighlight
                            .slice(u + h + 1)
                            .indexOf(!0))),
                  e.preventDefault();
                var f = h + u;
                e.which === I
                  ? 0 === h && u === l.length - 1
                    ? ((s.$menuInner[0].scrollTop =
                        s.$menuInner[0].scrollHeight),
                      (f = s.selectpicker.current.elements.length - 1))
                    : (c =
                        (r =
                          (i = s.selectpicker.current.data[f]).position -
                          i.height) < d)
                  : (e.which !== L && !a) ||
                    (u === s.selectpicker.view.firstHighlightIndex
                      ? ((s.$menuInner[0].scrollTop = 0),
                        (f = s.selectpicker.view.firstHighlightIndex))
                      : (c =
                          d <
                          (r =
                            (i = s.selectpicker.current.data[f]).position -
                            s.sizeInfo.menuInnerHeight))),
                  (n = s.selectpicker.current.elements[f]),
                  (s.activeIndex = s.selectpicker.current.data[f].index),
                  s.focusItem(n),
                  (s.selectpicker.view.currentActive = n),
                  c && (s.$menuInner[0].scrollTop = r),
                  (s.options.liveSearch ? s.$searchbox : o).trigger("focus");
              } else if (
                (!o.is("input") && !Q.test(e.which)) ||
                (e.which === T && s.selectpicker.keydown.keyHistory)
              ) {
                var p,
                  m = [];
                e.preventDefault(),
                  (s.selectpicker.keydown.keyHistory += V[e.which]),
                  s.selectpicker.keydown.resetKeyHistory.cancel &&
                    clearTimeout(s.selectpicker.keydown.resetKeyHistory.cancel),
                  (s.selectpicker.keydown.resetKeyHistory.cancel =
                    s.selectpicker.keydown.resetKeyHistory.start()),
                  (p = s.selectpicker.keydown.keyHistory),
                  /^(.)\1+$/.test(p) && (p = p.charAt(0));
                for (var g = 0; g < s.selectpicker.current.data.length; g++) {
                  var v = s.selectpicker.current.data[g];
                  b(v, p, "startsWith", !0) &&
                    s.selectpicker.view.canHighlight[g] &&
                    m.push(v.index);
                }
                m.length &&
                  ((h = 0),
                  l.removeClass("active").find("a").removeClass("active"),
                  1 === p.length &&
                    (-1 === (h = m.indexOf(s.activeIndex)) || h === m.length - 1
                      ? (h = 0)
                      : h++),
                  (a = m[h]),
                  (c =
                    0 < d - (i = s.selectpicker.main.data[a]).position
                      ? ((r = i.position - i.height), !0)
                      : ((r = i.position - s.sizeInfo.menuInnerHeight),
                        i.position > d + s.sizeInfo.menuInnerHeight)),
                  (n = s.selectpicker.main.elements[a]),
                  (s.activeIndex = m[h]),
                  s.focusItem(n),
                  n && n.firstChild.focus(),
                  c && (s.$menuInner[0].scrollTop = r),
                  o.trigger("focus"));
              }
              t &&
                ((e.which === T && !s.selectpicker.keydown.keyHistory) ||
                  e.which === G ||
                  (e.which === E && s.options.selectOnTab)) &&
                (e.which !== T && e.preventDefault(),
                (s.options.liveSearch && e.which === T) ||
                  (s.$menuInner.find(".active a").trigger("click", !0),
                  o.trigger("focus"),
                  s.options.liveSearch ||
                    (e.preventDefault(), w(document).data("spaceSelect", !0))));
            }
        },
        mobile: function () {
          (this.options.mobile = !0),
            this.$element[0].classList.add("mobile-device");
        },
        refresh: function () {
          var e = w.extend({}, this.options, this.$element.data());
          (this.options = e),
            this.checkDisabled(),
            this.buildData(),
            this.setStyle(),
            this.render(),
            this.buildList(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed" + A);
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            (this.$bsContainer || this.$menu).remove(),
            this.selectpicker.view.titleOption &&
              this.selectpicker.view.titleOption.parentNode &&
              this.selectpicker.view.titleOption.parentNode.removeChild(
                this.selectpicker.view.titleOption
              ),
            this.$element
              .off(A)
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker"),
            w(window).off(A + "." + this.selectId);
        },
      });
    var J = w.fn.selectpicker;
    function Z() {
      if (w.fn.dropdown)
        return (
          w.fn.dropdown.Constructor._dataApiKeydownHandler ||
          w.fn.dropdown.Constructor.prototype.keydown
        ).apply(this, arguments);
    }
    (w.fn.selectpicker = X),
      (w.fn.selectpicker.Constructor = M),
      (w.fn.selectpicker.noConflict = function () {
        return (w.fn.selectpicker = J), this;
      }),
      w(document)
        .off("keydown.bs.dropdown.data-api")
        .on(
          "keydown.bs.dropdown.data-api",
          ':not(.bootstrap-select) > [data-toggle="dropdown"]',
          Z
        )
        .on(
          "keydown.bs.dropdown.data-api",
          ":not(.bootstrap-select) > .dropdown-menu",
          Z
        )
        .on(
          "keydown" + A,
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          M.prototype.keydown
        )
        .on(
          "focusin.modal",
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          function (e) {
            e.stopPropagation();
          }
        ),
      w(window).on("load" + A + ".data-api", function () {
        w(".selectpicker").each(function () {
          var e = w(this);
          X.call(e, e.data());
        });
      });
  })(jQuery),
  (jQuery.fn.selectpicker.defaults = {
    noneSelectedText: "Nessuna selezione",
    noneResultsText: "Nessun risultato per {0}",
    countSelectedText: function (e, t) {
      return 1 == e ? "Selezionato {0} di {1}" : "Selezionati {0} di {1}";
    },
    maxOptionsText: [
      "Limite raggiunto ({n} {var} max)",
      "Limite del gruppo raggiunto ({n} {var} max)",
      ["elementi", "elemento"],
    ],
    multipleSeparator: ", ",
    selectAllText: "Seleziona Tutto",
    deselectAllText: "Deseleziona Tutto",
  }),
  (function () {
    "use strict";
    var m, e, g, v, b, t, n;
    "undefined" != typeof window &&
      window.addEventListener &&
      ((m = Object.create(null)),
      (g = function () {
        clearTimeout(e), (e = setTimeout(t, 100));
      }),
      (v = function () {}),
      (b = "http://www.w3.org/1999/xlink"),
      (t = function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          c,
          u,
          d = 0;
        function h() {
          var e;
          0 === --d &&
            (v(),
            window.addEventListener("resize", g, !1),
            window.addEventListener("orientationchange", g, !1),
            (v = window.MutationObserver
              ? ((e = new MutationObserver(g)).observe(
                  document.documentElement,
                  { childList: !0, subtree: !0, attributes: !0 }
                ),
                function () {
                  try {
                    e.disconnect(),
                      window.removeEventListener("resize", g, !1),
                      window.removeEventListener("orientationchange", g, !1);
                  } catch (e) {}
                })
              : (document.documentElement.addEventListener(
                  "DOMSubtreeModified",
                  g,
                  !1
                ),
                function () {
                  document.documentElement.removeEventListener(
                    "DOMSubtreeModified",
                    g,
                    !1
                  ),
                    window.removeEventListener("resize", g, !1),
                    window.removeEventListener("orientationchange", g, !1);
                })));
        }
        function f(e) {
          return function () {
            !0 !== m[e.base] &&
              (e.useEl.setAttributeNS(b, "xlink:href", "#" + e.hash),
              e.useEl.hasAttribute("href") &&
                e.useEl.setAttribute("href", "#" + e.hash));
          };
        }
        function p(e) {
          return function () {
            (e.onerror = null), (e.ontimeout = null), h();
          };
        }
        for (
          v(), o = document.getElementsByTagName("use"), n = 0;
          n < o.length;
          n += 1
        ) {
          try {
            t = o[n].getBoundingClientRect();
          } catch (e) {
            t = !1;
          }
          (e = (r =
            (a =
              o[n].getAttribute("href") ||
              o[n].getAttributeNS(b, "href") ||
              o[n].getAttribute("xlink:href")) && a.split
              ? a.split("#")
              : ["", ""])[0]),
            (r = r[1]),
            (i =
              t &&
              0 === t.left &&
              0 === t.right &&
              0 === t.top &&
              0 === t.bottom),
            t && 0 === t.width && 0 === t.height && !i
              ? (o[n].hasAttribute("href") &&
                  o[n].setAttributeNS(b, "xlink:href", a),
                e.length &&
                  (!0 !== (a = m[e]) &&
                    setTimeout(f({ useEl: o[n], base: e, hash: r }), 0),
                  void 0 === a &&
                    ((s = e),
                    (u = c = void 0),
                    (l = function (e) {
                      var t;
                      return (
                        void 0 !== e.protocol
                          ? (t = e)
                          : ((t = document.createElement("a")).href = e),
                        t.protocol.replace(/:/g, "") + t.host
                      );
                    }),
                    window.XMLHttpRequest &&
                      ((c = new XMLHttpRequest()),
                      (u = l(location)),
                      (s = l(s)),
                      (c =
                        void 0 === c.withCredentials && "" !== s && s !== u
                          ? XDomainRequest || void 0
                          : XMLHttpRequest)),
                    void 0 !== c &&
                      ((a = new c()),
                      ((m[e] = a).onload = (function (n) {
                        return function () {
                          var e = document.body,
                            t = document.createElement("x");
                          (n.onload = null),
                            (t.innerHTML = n.responseText),
                            (t = t.getElementsByTagName("svg")[0]) &&
                              (t.setAttribute("aria-hidden", "true"),
                              (t.style.position = "absolute"),
                              (t.style.width = 0),
                              (t.style.height = 0),
                              (t.style.overflow = "hidden"),
                              e.insertBefore(t, e.firstChild)),
                            h();
                        };
                      })(a)),
                      (a.onerror = p(a)),
                      (a.ontimeout = p(a)),
                      a.open("GET", e),
                      a.send(),
                      (d += 1)))))
              : i
              ? e.length &&
                m[e] &&
                setTimeout(f({ useEl: o[n], base: e, hash: r }), 0)
              : void 0 === m[e]
              ? (m[e] = !0)
              : m[e].onload && (m[e].abort(), delete m[e].onload, (m[e] = !0));
        }
        (o = ""), (d += 1), h();
      }),
      (n = function () {
        window.removeEventListener("load", n, !1), (e = setTimeout(t, 0));
      }),
      "complete" !== document.readyState
        ? window.addEventListener("load", n, !1)
        : n());
  })(),
  Array.from ||
    (Array.from = (function () {
      function l(e) {
        return "function" == typeof e || "[object Function]" === t.call(e);
      }
      function c(e) {
        return (
          (e = (function (e) {
            e = Number(e);
            return isNaN(e)
              ? 0
              : 0 !== e && isFinite(e)
              ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e))
              : e;
          })(e)),
          Math.min(Math.max(e, 0), n)
        );
      }
      var t = Object.prototype.toString,
        n = Math.pow(2, 53) - 1;
      return function (e) {
        var t = Object(e);
        if (null == e)
          throw new TypeError(
            "Array.from requires an array-like object - not null or undefined"
          );
        var n,
          i = 1 < arguments.length ? arguments[1] : void 0;
        if (void 0 !== i) {
          if (!l(i))
            throw new TypeError(
              "Array.from: when provided, the second argument must be a function"
            );
          2 < arguments.length && (n = arguments[2]);
        }
        for (
          var r,
            o = c(t.length),
            a = l(this) ? Object(new this(o)) : new Array(o),
            s = 0;
          s < o;

        )
          (r = t[s]),
            (a[s] = i ? (void 0 === n ? i(r, s) : i.call(n, r, s)) : r),
            (s += 1);
        return (a.length = o), a;
      };
    })()),
  (function (u) {
    function s(e) {
      return (e * Math.PI) / 180;
    }
    function d(e, t, n) {
      var i = u("#" + n + "canvas")[0],
        r = u("#" + n + "canvas"),
        o = i.getContext("2d"),
        a = i.width / 2,
        i = i.height / 2;
      o.beginPath(),
        o.arc(a, i, u(r).attr("data-radius"), 0, 2 * Math.PI, !1),
        (o.fillStyle = "transparent"),
        o.fill(),
        (o.lineWidth = u(r).attr("data-width")),
        (o.strokeStyle = u(r).attr("data-progressBarBackground")),
        o.stroke(),
        o.closePath(),
        o.beginPath(),
        o.arc(
          a,
          i,
          u(r).attr("data-radius"),
          -s(90),
          -s(90) + s((e / 100) * 360),
          !1
        ),
        (o.fillStyle = "transparent"),
        o.fill(),
        (o.lineWidth = u(r).attr("data-width")),
        (o.strokeStyle = u(r).attr("data-stroke")),
        o.stroke(),
        o.closePath(),
        "true" == u(r).attr("data-text").toLocaleLowerCase() &&
          u("#" + n + " .clProg").val(
            t +
              ("true" == u(r).attr("data-percent").toLocaleLowerCase()
                ? "%"
                : "")
          );
    }
    u.fn.circularloader = function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = this[0],
        c = l.id;
      return (
        0 == u("#" + c + "canvas").length
          ? ((t = u.extend(
              {
                backgroundColor: "#ffffff",
                fontColor: "#000000",
                fontSize: "40px",
                radius: 70,
                progressBarBackground: "#cdcdcd",
                progressBarColor: "#aaaaaa",
                progressBarWidth: 25,
                progressPercent: 0,
                progressValue: 0,
                showText: !0,
                title: "",
              },
              e
            )),
            (n = parseInt(t.radius)),
            (i = parseInt(t.progressBarWidth)),
            (r = parseInt(
              0 < parseInt(t.progressValue)
                ? t.progressValue
                : t.progressPercent
            )),
            (o = parseInt(t.progressPercent)),
            (s =
              "color:" +
              t.fontColor +
              ";font-size:" +
              parseInt(t.fontSize) +
              "px;width:" +
              2 * (n + i) +
              "px;vertical-align:middle;position:relative;background-color:transparent;border:0 none;transform:translateY(-48%);-webkit-transform: translateY(-48%);-ms-transform: translateY(-48%);height:" +
              2 * (n + i) +
              "px;margin-left:-" +
              2 * (n + i) +
              "px;text-align:center;padding:0;" +
              (t.showText ? "" : "display:none;")),
            u(
              '<canvas data-width="' +
                i +
                '" data-radius="' +
                n +
                '" data-stroke="' +
                t.progressBarColor +
                '" data-progressBarBackground="' +
                t.progressBarBackground +
                '" data-backgroundColor="' +
                t.backgroundColor +
                '" data-text=' +
                t.showText +
                " data-percent=" +
                (null == e.progressValue) +
                ' id="' +
                c +
                'canvas" width=' +
                2 * (n + i) +
                " height=" +
                2 * (n + i) +
                "></canvas>"
            ).appendTo(l),
            u(
              '<input class="clProg" style="' +
                s +
                '" value="' +
                r +
                (null == e.progressValue ? "%" : "") +
                '" aria-hidden="true"></input>'
            ).appendTo(l),
            "" == t.title
              ? u("#" + c).css("height", 2 * (n + i))
              : (u("#" + c).css("height", 2 * (n + i) + 20),
                u("#" + c + "canvas").before(
                  "<div class='titleCircularLoader' style='height:19px;text-align:center;'>" +
                    t.title +
                    "</div>"
                ),
                u(".titleCircularLoader").css("width", 2 * (n + i))),
            (s = u("#" + c + "canvas")[0]),
            (l = s.getContext("2d")),
            (a = s.width / 2),
            (s = s.height / 2),
            u("#" + c + "canvas").offset().left,
            u("#" + c + "canvas").offset().top,
            l.beginPath(),
            l.arc(a, s, n, 0, 2 * Math.PI, !1),
            (l.fillStyle = t.backgroundColor),
            l.fill(),
            (l.lineWidth = i),
            (l.strokeStyle = t.progressBarBackground),
            l.stroke(),
            l.closePath(),
            0 < o && d(o, r, c))
          : (null == e.progressPercent && null == e.progressValue) ||
            ((r = o = 0),
            (o =
              null == e.progressPercent
                ? 100 < parseInt(e.progressValue)
                  ? 100
                  : parseInt(e.progressValue)
                : 100 < parseInt(e.progressPercent)
                ? 100
                : parseInt(e.progressPercent)),
            (r =
              null == e.progressValue
                ? 100 < parseInt(e.progressPercent)
                  ? 100
                  : parseInt(e.progressPercent)
                : parseInt(e.progressValue)),
            d(o, r, c)),
        this
      );
    };
  })(jQuery),
  (function (l) {
    "use strict";
    function e(r, o) {
      function a(e) {
        return -1 === e
          ? "danger"
          : -2 === e
          ? "muted"
          : (e = e < 0 ? 0 : e) < 26
          ? "danger"
          : e < 51
          ? "warning"
          : "success";
      }
      function s(e, t) {
        for (var n = "", i = !1, r = 0; r < t.length; r++) {
          for (var i = !0, o = 0; o < e && o + r + e < t.length; o++)
            i = i && t.charAt(o + r) === t.charAt(o + r + e);
          (i = o < e ? !1 : i) ? ((r += e - 1), (i = !1)) : (n += t.charAt(r));
        }
        return n;
      }
      return (
        (o = l.extend(
          {},
          {
            shortPass: "Password molto debole",
            badPass: "Password debole",
            goodPass: "Password sicura",
            strongPass: "Password molto sicura",
            enterPass: "Inserisci almeno 8 caratteri e una lettera maiuscola",
            showText: !0,
            minimumLength: 4,
          },
          o
        )),
        function () {
          var n = o.showText,
            i =
              ((e = l("<div>").addClass(
                "password-meter progress rounded-0 position-absolute"
              )).append(
                '<div class="row position-absolute w-100 m-0">\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n      </div>'
              ),
              l("<div>").attr({
                class: "progress-bar",
                role: "progressbar",
                "aria-valuenow": "0",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              })),
            e = l("<div>")
              .attr({ class: "password-strength-meter" })
              .append(e.append(i));
          return (
            o.showText &&
              ((n = l("<small>")
                .addClass("form-text text-muted")
                .html(o.enterPass)),
              e.prepend(n)),
            r.after(e),
            r.keyup(function () {
              var e = (function (e) {
                  var t = 0;
                  if (0 === e.trim().length) return -2;
                  if (e.length < o.minimumLength) return -1;
                  (t =
                    (t =
                      (t =
                        (t =
                          (t += 4 * e.length) + (s(1, e).length - e.length)) +
                        (s(2, e).length - e.length)) +
                      (s(3, e).length - e.length)) +
                    (s(4, e).length - e.length)),
                    e.match(/(.*[0-9].*[0-9].*[0-9])/) && (t += 5);
                  var n = ".*[!,@,#,$,%,^,&,*,?,_,~]",
                    n = new RegExp("(" + n + n + ")");
                  return (
                    e.match(n) && (t += 5),
                    e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t += 10),
                    e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (t += 15),
                    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
                      e.match(/([0-9])/) &&
                      (t += 15),
                    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
                      e.match(/([a-zA-Z])/) &&
                      (t += 15),
                    (e.match(/^\w+$/) || e.match(/^\d+$/)) && (t -= 10),
                    (t = (t = 100 < t ? 100 : t) < 0 ? 0 : t)
                  );
                })(r.val()),
                t = (r.trigger("password.score", [e]), e < 0 ? 0 : e);
              i.removeClass(function (e, t) {
                return (t.match(/(^|\s)bg-\S+/g) || []).join(" ");
              }),
                i.addClass("bg-" + a(e)),
                i.css({ width: t + "%" }),
                i.attr("aria-valuenow", t),
                o.showText &&
                  ((t =
                    -1 === (t = e) || (t = t < 0 ? 0 : t) < 26
                      ? o.shortPass
                      : t < 51
                      ? o.badPass
                      : t < 76
                      ? o.goodPass
                      : o.strongPass),
                  !r.val().length && e <= 0 && (t = o.enterPass),
                  n.html() !== l("<div>").html(t).html() &&
                    (n.html(t),
                    n.removeClass(function (e, t) {
                      return (t.match(/(^|\s)text-\S+/g) || []).join(" ");
                    }),
                    n.addClass("text-" + a(e)),
                    r.trigger("password.text", [t, e])));
            }),
            this
          );
        }.call(this)
      );
    }
    l.fn.password = function () {
      return this.each(function () {
        new e(l(this), l(this).data());
      });
    };
  })(jQuery),
  $(function () {
    var t = !1,
      n = null;
    $(".input-password")
      .on("keydown", function (e) {
        16 == (e.keyCode || e.which) && (t = !0);
      })
      .on("keyup", function (e) {
        e = e.keyCode || e.which;
        16 == e && (t = !1),
          20 == e &&
            (n
              ? ((n = !1), $(".password-caps").remove())
              : ((n = !0),
                $("input:focus").each(function () {
                  showCapsLockMsg($(this));
                })));
      })
      .on("keypress", function (e) {
        e = e.keyCode || e.which;
        65 <= e && e <= 90 && !t && ((n = !0), showCapsLockMsg($(this)));
      }),
      $(".input-password-strength-meter").password(),
      $(".password-icon").on("click", function () {
        $(this).find('[class^="password-icon"]').toggleClass("d-none");
        var e = $(this).siblings(".input-password"),
          t = "password" === e.attr("type") ? "text" : "password";
        e.attr("type", t);
      });
  }),
  (function () {
    "use strict";
    void 0 === Date.dp_locales &&
      (Date.dp_locales = {
        texts: {
          buttonTitle: "Scegli la data ...",
          buttonLabel:
            "Fare clic o premere il tasto Invio o la barra spaziatrice per aprire il calendario",
          prevButtonLabel: "Vai al mese precedente",
          nextButtonLabel: "Vai al mese successivo",
          closeButtonTitle: "Chiudere",
          closeButtonLabel: "Chiudere il calendario",
          prevMonthButtonLabel: "Vai all'anno precedente",
          prevYearButtonLabel: "Vai a vent'anni precedenti",
          nextMonthButtonLabel: "Vai al prossimo anno",
          nextYearButtonLabel: "Vai ai prossimi 20 anni",
          changeMonthButtonLabel:
            "Fare clic o premere il tasto Invio o la barra spaziatrice per cambiare il mese",
          changeYearButtonLabel:
            "Fare clic o premere il tasto Invio o la barra spaziatrice per cambiare l'anno",
          changeRangeButtonLabel:
            "Fare clic o premere il tasto Invio o la barra spaziatrice per andare ai prossimi 20 anni",
          calendarHelp:
            "- Freccia e Freccia giù - va allo stesso giorno della settimana in settimana precedente o successiva, rispettivamente. Se viene raggiunta la fine del mese, continua nel mese precedente o successivo a seconda dei casi.\r\n- Freccia Sinistra e Freccia destra - avanza un giorno all'altro, anche in un continuum. Visivamente fuoco viene spostato da un giorno all'altro e avvolge da riga a riga nella griglia di giorni.\r\n- Control + Pagina Su - Passa alla stessa data dell'anno precedente.\r\n- Control + Pagina giù - Passa alla stessa data nel prossimo anno.\r\n- Home - Passa al primo giorno del mese in corso.\r\n- End - Passa l'ultimo giorno del mese corrente.\r\n- Pagina Su - Passa alla stessa data del mese precedente.\r\n- Pagina giù - Passa alla stessa data del mese successivo.\r\n- Invio o Espace - chiude il calendario e la data selezionata viene visualizzata nella casella di testo associato.\r\n- Escape - chiude il calendario senza alcuna azione.",
        },
        directionality: "LTR",
        month_names: [
          "gennaio",
          "febbraio",
          "marzo",
          "aprile",
          "maggio",
          "giugno",
          "luglio",
          "agosto",
          "settembre",
          "ottobre",
          "novembre",
          "dicembre",
        ],
        month_names_abbreviated: [
          "gen",
          "feb",
          "mar",
          "apr",
          "mag",
          "giu",
          "lug",
          "ago",
          "set",
          "ott",
          "nov",
          "dic",
        ],
        month_names_narrow: [
          "G",
          "F",
          "M",
          "A",
          "M",
          "G",
          "L",
          "A",
          "S",
          "O",
          "N",
          "D",
        ],
        day_names: [
          "domenica",
          "lunedì",
          "martedì",
          "mercoledì",
          "giovedì",
          "venerdì",
          "sabato",
        ],
        day_names_abbreviated: [
          "dom",
          "lun",
          "mar",
          "mer",
          "gio",
          "ven",
          "sab",
        ],
        day_names_short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
        day_names_narrow: ["D", "L", "M", "M", "G", "V", "S"],
        day_periods: { am: "AM", noon: "mezzogiorno", pm: "PM" },
        day_periods_abbreviated: { am: "AM", noon: "mezzogiorno", pm: "PM" },
        day_periods_narrow: { am: "m.", noon: "n", pm: "p." },
        quarter_names: [
          "1º trimestre",
          "2º trimestre",
          "3º trimestre",
          "4º trimestre",
        ],
        quarter_names_abbreviated: ["T1", "T2", "T3", "T4"],
        quarter_names_narrow: ["1", "2", "3", "4"],
        era_names: ["a.C.", "d.C."],
        era_names_abbreviated: ["aC", "dC"],
        era_names_narrow: ["aC", "dC"],
        full_format: "EEEE d MMMM y",
        long_format: "d MMMM y",
        medium_format: "dd MMM y",
        short_format: "dd/MM/yy",
        firstday_of_week: 1,
      });
  })(),
  (function () {
    "use strict";
    void 0 === Date.dp_locales &&
      (Date.dp_locales = {
        texts: {
          buttonTitle: "Select date ...",
          buttonLabel:
            "Click or press the Enter key or the spacebar to open the calendar",
          prevButtonLabel: "Go to previous month",
          prevMonthButtonLabel: "Go to the previous year",
          prevYearButtonLabel: "Go to the previous twenty years",
          nextButtonLabel: "Go to next month",
          nextMonthButtonLabel: "Go to the next year",
          nextYearButtonLabel: "Go to the next twenty years",
          changeMonthButtonLabel:
            "Click or press the Enter key or the spacebar to change the month",
          changeYearButtonLabel:
            "Click or press the Enter key or the spacebar to change the year",
          changeRangeButtonLabel:
            "Click or press the Enter key or the spacebar to go to the next twenty years",
          closeButtonTitle: "Close",
          closeButtonLabel: "Close the calendar",
          calendarHelp:
            "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action.",
        },
        directionality: "LTR",
        month_names: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        month_names_abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        month_names_narrow: [
          "J",
          "F",
          "M",
          "A",
          "M",
          "J",
          "J",
          "A",
          "S",
          "O",
          "N",
          "D",
        ],
        day_names: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        day_names_abbreviated: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ],
        day_names_short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        day_names_narrow: ["S", "M", "T", "W", "T", "F", "S"],
        day_periods: { am: "AM", noon: "noon", pm: "PM" },
        day_periods_abbreviated: { am: "AM", noon: "noon", pm: "PM" },
        day_periods_narrow: { am: "a", noon: "n", pm: "p" },
        quarter_names: [
          "1st quarter",
          "2nd quarter",
          "3rd quarter",
          "4th quarter",
        ],
        quarter_names_abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        quarter_names_narrow: ["1", "2", "3", "4"],
        era_names: ["Before Christ", "Anno Domini"],
        era_names_abbreviated: ["BC", "AD"],
        era_names_narrow: ["B", "A"],
        full_format: "EEEE, MMMM d, y",
        long_format: "MMMM d, y",
        medium_format: "MMM d, y",
        short_format: "M/d/yy",
        firstday_of_week: 0,
      });
  })(),
  (function (e) {
    if ("function" == typeof define && define.amd) define(["jquery"], e);
    else if ("object" == typeof exports) e(require("jquery"));
    else {
      if ("undefined" == typeof jQuery)
        throw new Error("Datepicker's JavaScript requires jQuery");
      e(jQuery);
    }
  })(function (b, u) {
    "use strict";
    function o(e, t) {
      var i = this;
      (this.$target = b(e)),
        (this.options = b.extend({}, o.DEFAULTS, t)),
        (this.locales = Date.dp_locales),
        this.startview(this.options.startView),
        "string" == typeof this.options.inputFormat &&
          (this.options.inputFormat = [this.options.inputFormat]),
        b.isArray(this.options.datesDisabled) ||
          (this.options.datesDisabled = [this.options.datesDisabled]),
        b.each(this.options.datesDisabled, function (e, t) {
          var n;
          "string" == typeof t
            ? ((n = i.parseDate(t)),
              (i.options.datesDisabled[e] = null === n ? null : i.format(n)))
            : t instanceof Date && !isNaN(t.valueOf())
            ? (i.options.datesDisabled[e] = i.format(t))
            : (i.options.datesDisabled[e] = null);
        }),
        null != this.options.min
          ? (this.options.min = this.parseDate(this.options.min))
          : this.$target.attr("min") &&
            (this.options.min = this.parseDate(this.$target.attr("min"))),
        null != this.options.max
          ? (this.options.max = this.parseDate(this.options.max))
          : this.$target.attr("max") &&
            (this.options.max = this.parseDate(this.$target.attr("max"))),
        "string" == typeof this.options.previous
          ? (this.options.previous = b(this.options.previous))
          : this.options.previous instanceof jQuery ||
            (this.options.previous = null),
        "string" == typeof this.options.next
          ? (this.options.next = b(this.options.next))
          : this.options.next instanceof jQuery || (this.options.next = null),
        (this.id =
          this.$target.attr("id") ||
          "datepicker-" + Math.floor(1e5 * Math.random())),
        (e = (e = r.join("")).replace(/CALENDARID/g, this.id + "")),
        0 == this.$target.parent(".input-group").length &&
          this.$target.wrap('<div class="input-group"></div>'),
        (this.$label = this.$target
          .parents()
          .find("label[for=" + this.id + "]")),
        (this.$group = this.$target.parent(".input-group")),
        this.$target.attr("aria-autocomplete", "none"),
        this.$target.css("min-width", "7em"),
        this.$target.addClass("form-control"),
        this.$target.attr("placeholder") ||
          this.$target.attr("placeholder", this.options.inputFormat[0]),
        (t = (t = n.join("")).replace(/CALENDARID/g, this.id + "")),
        (this.$button = b(t)),
        this.$button.addClass(this.options.theme),
        (this.$calendar = b(e)),
        this.$calendar.addClass(this.options.theme),
        this.$target.after(this.$button),
        "static" === this.$calendar.parent().css("position") &&
          this.$calendar.parent().css("position", "relative"),
        this.$calendar
          .find(".datepicker-bn-open-label")
          .html(this.options.buttonLabel),
        this.$target.attr("id") &&
          this.$calendar.attr("aria-controls", this.$target.attr("id")),
        this.$button.find("span").attr("title", this.options.buttonTitle),
        this.$calendar.css(
          "left",
          this.$target.parent().position().left + "px"
        ),
        (this.$monthObj = this.$calendar.find(".datepicker-month")),
        (this.$prev = this.$calendar.find(".datepicker-month-prev")),
        (this.$next = this.$calendar.find(".datepicker-month-next")),
        (this.$fastprev = this.$calendar.find(".datepicker-month-fast-prev")),
        (this.$fastnext = this.$calendar.find(".datepicker-month-fast-next")),
        (this.$grid = this.$calendar.find(".datepicker-grid")),
        "RTL" === this.locales.directionality && this.$grid.addClass("rtl"),
        this.drawCalendarHeader(),
        0 == this.options.inline && 1 == this.options.modal
          ? ((this.$close = this.$calendar.find(".datepicker-close")),
            this.$close
              .html(this.options.closeButtonTitle)
              .attr("title", this.options.closeButtonLabel),
            this.$calendar
              .find(".datepicker-bn-close-label")
              .html(this.options.closeButtonLabel))
          : (this.hideObject(this.$calendar.find(".datepicker-close-wrap")),
            this.hideObject(this.$calendar.find(".datepicker-bn-close-label"))),
        0 != this.options.inline
          ? (this.hideObject(this.$button),
            ("string" == typeof this.options.inline
              ? b("#" + this.options.inline)
              : this.options.inline
            ).append(this.$calendar),
            this.$calendar.css({ position: "relative", left: "0px" }),
            this.initializeDate())
          : (this.$calendar.css({ display: "none" }),
            this.$target.parent().after(this.$calendar),
            this.hide(!this.options.gainFocusOnConstruction)),
        (this.keys = {
          tab: 9,
          enter: 13,
          esc: 27,
          space: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
        }),
        this.bindHandlers(),
        this.$button.click(function (e) {
          return (
            b(this).hasClass("disabled") ||
              ("true" === i.$calendar.attr("aria-hidden")
                ? (i.initializeDate(), i.show())
                : i.hide(),
              i.selectGridCell(i.$grid.attr("aria-activedescendant"))),
            e.stopPropagation(),
            !1
          );
        }),
        this.$button.keydown(function (e) {
          e = e || event;
          if (e.keyCode == i.keys.enter || e.keyCode == i.keys.space)
            return b(this).trigger("click"), !1;
        }),
        this.$calendar.on("blur", function () {
          "false" === i.$calendar.attr("aria-hidden") && i.hide();
        });
    }
    var n = [
        '<a class="datepicker-button input-group-addon btn" role="button" aria-haspopup="true" tabindex="0" aria-labelledby="datepicker-bn-open-label-CALENDARID">',
        '\t<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>it-calendar</title><g><path d="M21,9V8a3,3,0,0,0-3-3h-.55V4a1,1,0,0,0-2,0V5h-7V4a1,1,0,1,0-2,0V5H6A3,3,0,0,0,3,8V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V9ZM15.46,5h2V6a1,1,0,1,1-2,0Zm-9,0h2V6a1,1,0,1,1-2,0ZM20,18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V10H20Z"/></g></svg>',
        "</a>",
      ],
      r = [
        '<div class="datepicker-calendar" id="datepicker-calendar-CALENDARID" aria-hidden="false">',
        '\t<div class="datepicker-month-wrap">',
        '\t\t<div class="datepicker-month-fast-next pull-right" role="button" aria-labelledby="datepicker-bn-fast-next-label-CALENDARID" tabindex="0"><span class="icon-right"></span><span class="icon-right"></span></div>',
        '\t\t<div class="datepicker-month-next pull-right" role="button" aria-labelledby="datepicker-bn-next-label-CALENDARID" tabindex="0"><span class="icon-right"></span></div>',
        '\t\t<div class="datepicker-month-fast-prev pull-left" role="button" aria-labelledby="datepicker-bn-fast-prev-label-CALENDARID" tabindex="0"><span class="icon-left"></span><span class="icon-left"></span></div>',
        '\t\t<div class="datepicker-month-prev pull-left" role="button" aria-labelledby="datepicker-bn-prev-label-CALENDARID" tabindex="0"><span class="icon-left"></span></div>',
        '\t\t<div id="datepicker-month-CALENDARID" class="datepicker-month" tabindex="0" role="heading" aria-live="assertive" aria-atomic="true" title="Click or press the Enter key or the spacebar to change the month">July 2015</div>',
        "\t</div>",
        '\t<table class="datepicker-grid" role="grid" aria-readonly="true" aria-activedescendant="datepicker-err-msg-CALENDARID" aria-labelledby="datepicker-month-CALENDARID" tabindex="0">',
        "\t\t<thead>",
        '\t\t\t<tr class="datepicker-weekdays" role="row">',
        '\t\t\t\t<th scope="col" id="day0-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Sunday"><abbr title="Sunday">Su</abbr></th>',
        '\t\t\t\t<th scope="col" id="day1-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Monday"><abbr title="Monday">Mo</abbr></th>',
        '\t\t\t\t<th scope="col" id="day2-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Tuesday"><abbr title="Tuesday">Tu</abbr></th>',
        '\t\t\t\t<th scope="col" id="day3-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Wednesday"><abbr title="Wednesday">We</abbr></th>',
        '\t\t\t\t<th scope="col" id="day4-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Thursday"><abbr title="Thursday">Th</abbr></th>',
        '\t\t\t\t<th scope="col" id="day5-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Friday"><abbr title="Friday">Fr</abbr></th>',
        '\t\t\t\t<th scope="col" id="day6-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Saturday"><abbr title="Saturday">Sa</abbr></th>',
        "\t\t\t</tr>",
        "\t\t</thead>",
        "\t\t<tbody>",
        "\t\t\t<tr>",
        '\t\t\t\t<td id="datepicker-err-msg-CALENDARID" colspan="7"><span>Javascript must be enabled</span></td>',
        "\t\t\t</tr>",
        "\t\t</tbody>",
        "\t</table>",
        '\t<div class="datepicker-close-wrap">',
        '\t\t<button class="datepicker-close" id="datepicker-close-CALENDARID" aria-labelledby="datepicker-bn-close-label-CALENDARID">Close</button>',
        "\t</div>",
        '\t<div id="datepicker-bn-open-label-CALENDARID" class="datepicker-bn-open-label offscreen">Click or press the Enter key or the spacebar to open the calendar</div>',
        '\t<div id="datepicker-bn-prev-label-CALENDARID" class="datepicker-bn-prev-label offscreen">Go to previous month</div>',
        '\t<div id="datepicker-bn-next-label-CALENDARID" class="datepicker-bn-next-label offscreen">Go to next month</div>',
        '\t<div id="datepicker-bn-fast-prev-label-CALENDARID" class="datepicker-bn-fast-prev-label offscreen">Go to previous year</div>',
        '\t<div id="datepicker-bn-fast-next-label-CALENDARID" class="datepicker-bn-fast-next-label offscreen">Go to next year</div>',
        '\t<div id="datepicker-bn-close-label-CALENDARID" class="datepicker-bn-close-label offscreen">Close the date picker</div>',
        "</div>",
      ],
      e =
        ((o.VERSION = "2.1.10"),
        (o.DEFAULTS = {
          firstDayOfWeek: Date.dp_locales.firstday_of_week,
          weekDayFormat: "short",
          startView: 0,
          daysOfWeekDisabled: [],
          datesDisabled: [],
          isDateDisabled: null,
          isMonthDisabled: null,
          isYearDisabled: null,
          inputFormat: [Date.dp_locales.short_format],
          outputFormat: Date.dp_locales.short_format,
          titleFormat: Date.dp_locales.full_format,
          buttonTitle: Date.dp_locales.texts.buttonTitle,
          buttonLabel: Date.dp_locales.texts.buttonLabel,
          prevButtonLabel: Date.dp_locales.texts.prevButtonLabel,
          prevMonthButtonLabel: Date.dp_locales.texts.prevMonthButtonLabel,
          prevYearButtonLabel: Date.dp_locales.texts.prevYearButtonLabel,
          nextButtonLabel: Date.dp_locales.texts.nextButtonLabel,
          nextMonthButtonLabel: Date.dp_locales.texts.nextMonthButtonLabel,
          nextYearButtonLabel: Date.dp_locales.texts.nextYearButtonLabel,
          changeMonthButtonLabel: Date.dp_locales.texts.changeMonthButtonLabel,
          changeYearButtonLabel: Date.dp_locales.texts.changeYearButtonLabel,
          changeRangeButtonLabel: Date.dp_locales.texts.changeRangeButtonLabel,
          closeButtonTitle: Date.dp_locales.texts.closeButtonTitle,
          closeButtonLabel: Date.dp_locales.texts.closeButtonLabel,
          onUpdate: function () {},
          previous: null,
          next: null,
          theme: "default",
          modal: !1,
          inline: !1,
          gainFocusOnConstruction: !1,
          min: null,
          max: null,
        }),
        (o.prototype.initializeDate = function () {
          var e = this.$target.val(),
            e = "" === e ? new Date() : this.parseDate(e);
          this.setDate(e, !0);
        }),
        (o.prototype.getDate = function () {
          var e = this.$target.val();
          return "" === e ? new Date() : this.parseDate(e);
        }),
        (o.prototype.setDate = function (e, t) {
          switch (
            ((this.dateObj = e),
            (t = void 0 !== t && t),
            null == this.dateObj &&
              (this.$target.attr("aria-invalid", !0),
              this.$target.parents(".form-group").addClass("has-error"),
              (this.dateObj = new Date()),
              this.dateObj.setHours(0, 0, 0, 0)),
            null != this.options.min && this.dateObj < this.options.min
              ? (this.$target.attr("aria-invalid", !0),
                this.$target.parents(".form-group").addClass("has-error"),
                (this.dateObj = this.options.min))
              : null != this.options.max &&
                this.dateObj > this.options.max &&
                (this.$target.attr("aria-invalid", !0),
                this.$target.parents(".form-group").addClass("has-error"),
                (this.dateObj = this.options.max)),
            (t && "" == this.$target.val()) ||
              this.$target.val(this.format(this.dateObj)),
            (this.curYear = this.dateObj.getFullYear()),
            (this.year = this.curYear),
            (this.curMonth = this.dateObj.getMonth()),
            (this.month = this.curMonth),
            (this.date = this.dateObj.getDate()),
            this.options.startView)
          ) {
            case 1:
              this.populateMonthsCalendar(),
                this.$grid.attr(
                  "aria-activedescendant",
                  this.$grid.find(".curMonth").attr("id")
                );
              break;
            case 2:
              this.populateYearsCalendar(),
                this.$grid.attr(
                  "aria-activedescendant",
                  this.$grid.find(".curYear").attr("id")
                );
              break;
            default:
              this.populateDaysCalendar(),
                this.$grid.attr(
                  "aria-activedescendant",
                  this.$grid.find(".curDay").attr("id")
                );
          }
        }),
        (o.prototype.drawCalendarHeader = function () {
          for (
            var e = this.$grid.find("th.datepicker-day"),
              t = this.options.firstDayOfWeek,
              n = 0;
            n < 7;
            n++
          )
            e.eq(n).attr("aria-label", this.locales.day_names[t]),
              e
                .children("abbr")
                .eq(n)
                .attr("title", this.locales.day_names[t])
                .text(
                  ("short" === this.options.weekDayFormat
                    ? this.locales.day_names_short
                    : this.locales.day_names_narrow)[t]
                ),
              (t = (t + 1) % 7);
        }),
        (o.prototype.populateDaysCalendar = function () {
          this.$calendar
            .find(".datepicker-bn-prev-label")
            .html(this.options.prevButtonLabel),
            this.$calendar
              .find(".datepicker-bn-next-label")
              .html(this.options.nextButtonLabel),
            this.$calendar
              .find(".datepicker-bn-fast-prev-label")
              .html(this.options.prevMonthButtonLabel),
            this.$calendar
              .find(".datepicker-bn-fast-next-label")
              .html(this.options.nextMonthButtonLabel),
            null != this.options.min &&
            (this.year - 1 < this.options.min.getFullYear() ||
              (this.year - 1 == this.options.min.getFullYear() &&
                this.month < this.options.min.getMonth()))
              ? (this.$fastprev.attr("title", ""),
                this.$fastprev.addClass("disabled"),
                this.$fastprev.removeClass("enabled"))
              : (this.$fastprev.attr(
                  "title",
                  this.options.prevMonthButtonLabel
                ),
                this.$fastprev.addClass("enabled"),
                this.$fastprev.removeClass("disabled"));
          for (
            var e = this.previousMonth(this.year, this.month),
              t =
                (null != this.options.min &&
                (e.year < this.options.min.getFullYear() ||
                  (e.year == this.options.min.getFullYear() &&
                    e.month < this.options.min.getMonth()))
                  ? (this.$prev.attr("title", ""),
                    this.$prev.addClass("disabled"),
                    this.$prev.removeClass("enabled"))
                  : (this.$prev.attr("title", this.options.prevButtonLabel),
                    this.$prev.addClass("enabled"),
                    this.$prev.removeClass("disabled")),
                this.$monthObj.attr(
                  "title",
                  this.options.changeMonthButtonLabel
                ),
                this.nextMonth(this.year, this.month)),
              n =
                (null != this.options.max &&
                (t.year > this.options.max.getFullYear() ||
                  (t.year == this.options.max.getFullYear() &&
                    t.month > this.options.max.getMonth()))
                  ? (this.$next.attr("title", ""),
                    this.$next.addClass("disabled"),
                    this.$next.removeClass("enabled"))
                  : (this.$next.attr("title", this.options.nextButtonLabel),
                    this.$next.addClass("enabled"),
                    this.$next.removeClass("disabled")),
                null != this.options.max &&
                (this.year + 1 > this.options.max.getFullYear() ||
                  (this.year + 1 == this.options.max.getFullYear() &&
                    this.month > this.options.max.getMonth()))
                  ? (this.$fastnext.attr("title", ""),
                    this.$fastnext.addClass("disabled"),
                    this.$fastnext.removeClass("enabled"))
                  : (this.$fastnext.attr(
                      "title",
                      this.options.nextMonthButtonLabel
                    ),
                    this.$fastnext.addClass("enabled"),
                    this.$fastnext.removeClass("disabled")),
                this.showObject(this.$fastprev),
                this.showObject(this.$fastnext),
                this.getDaysInMonth(this.year, this.month)),
              i = this.getDaysInMonth(e.year, e.month),
              r = new Date(this.year, this.month, 1).getDay(),
              o = (this.options.firstDayOfWeek + 6) % 7,
              a = 1,
              s = 1,
              l =
                (this.$monthObj.html(
                  this.locales.month_names[this.month] + " " + this.year
                ),
                this.showObject(this.$grid.find("thead")),
                '\t<tr id="row0-' + this.id + '" role="row">\n'),
              c = 0,
              u = this.options.firstDayOfWeek;
            u != r;

          )
            c++, (u = (u + 1) % 7);
          for (; 0 < c; c--)
            l += '\t\t<td class="empty">' + (i - c + 1) + "</td>\n";
          for (
            var d =
                this.options.isYearDisabled &&
                this.options.isYearDisabled(this.year),
              h =
                this.options.isMonthDisabled &&
                this.options.isMonthDisabled(this.year, this.month + 1),
              a = 1;
            a <= n;
            a++
          ) {
            var f = new Date(this.year, this.month, a, 0, 0, 0, 0),
              p = this.formatDate(f, this.options.titleFormat),
              m =
                a == this.date &&
                this.month == this.curMonth &&
                this.year == this.curYear
                  ? " curDay"
                  : "";
            d ||
            h ||
            -1 < b.inArray(u, this.options.daysOfWeekDisabled) ||
            (null != this.options.min && f < this.options.min) ||
            (null != this.options.max && f > this.options.max) ||
            -1 < b.inArray(this.format(f), this.options.datesDisabled) ||
            (this.options.isDateDisabled && this.options.isDateDisabled(f))
              ? (l +=
                  '\t\t<td id="cell' +
                  a +
                  "-" +
                  this.id +
                  '" class="day unselectable' +
                  m +
                  '"')
              : (l +=
                  '\t\t<td id="cell' +
                  a +
                  "-" +
                  this.id +
                  '" class="day selectable' +
                  m +
                  '"'),
              (l =
                (l =
                  (l += ' data-value="' + a + '"') +
                  (' title="' + p + '"') +
                  (' aria-label="' + p + '"')) +
                (' headers="day' +
                  u +
                  "-header-" +
                  this.id +
                  '" role="gridcell" tabindex="-1" aria-selected="false"><span>' +
                  a +
                  "</span>") +
                "</td>"),
              u == o &&
                a < n &&
                ((l +=
                  '\t</tr>\n\t<tr id="row' +
                  s +
                  "-" +
                  this.id +
                  '" role="row">\n'),
                s++),
              a < n && (u = (u + 1) % 7);
          }
          for (; u != o; )
            (l += '\t\t<td class="empty">' + ++c + "</td>\n"),
              (u = (u + 1) % 7);
          l += "\t</tr>";
          t = this.$grid.find("tbody");
          t.empty(), t.append(l), (this.gridType = 0);
        }),
        (o.prototype.populateMonthsCalendar = function () {
          this.$calendar
            .find(".datepicker-bn-prev-label")
            .html(this.options.prevMonthButtonLabel),
            this.$calendar
              .find(".datepicker-bn-next-label")
              .html(this.options.nextMonthButtonLabel),
            this.hideObject(this.$fastprev),
            this.hideObject(this.$fastnext),
            null != this.options.min &&
            this.year - 1 < this.options.min.getFullYear()
              ? (this.$prev.attr("title", ""),
                this.$prev.addClass("disabled"),
                this.$prev.removeClass("enabled"))
              : (this.$prev.attr("title", this.options.prevMonthButtonLabel),
                this.$prev.addClass("enabled"),
                this.$prev.removeClass("disabled")),
            this.$monthObj.attr("title", this.options.changeYearButtonLabel),
            null != this.options.max &&
            this.year + 1 > this.options.max.getFullYear()
              ? (this.$next.attr("title", ""),
                this.$next.addClass("disabled"),
                this.$next.removeClass("enabled"))
              : (this.$next.attr("title", this.options.nextMonthButtonLabel),
                this.$next.addClass("enabled"),
                this.$next.removeClass("disabled"));
          for (
            var e = 0,
              t = 1,
              n = this.$grid.find("tbody"),
              i =
                (this.$monthObj.html(this.year),
                this.hideObject(this.$grid.find("thead")),
                n.empty(),
                b("#datepicker-err-msg-" + this.id).empty(),
                '\t<tr id="row0-' + this.id + '" role="row">\n'),
              r =
                this.options.isYearDisabled &&
                this.options.isYearDisabled(this.year),
              e = 0;
            e < 12;
            e++
          )
            r
              ? (i +=
                  '\t\t<td id="cell' +
                  (e + 1) +
                  "-" +
                  this.id +
                  '" class="month unselectable"')
              : e == this.month && this.year == this.curYear
              ? (i +=
                  '\t\t<td id="cell' +
                  (e + 1) +
                  "-" +
                  this.id +
                  '" class="month curMonth selectable"')
              : (null != this.options.min &&
                  (this.year < this.options.min.getFullYear() ||
                    (this.year == this.options.min.getFullYear() &&
                      e < this.options.min.getMonth()))) ||
                (null != this.options.max &&
                  (this.year > this.options.max.getFullYear() ||
                    (this.year == this.options.max.getFullYear() &&
                      e > this.options.max.getMonth()))) ||
                (this.options.isMonthDisabled &&
                  this.options.isMonthDisabled(this.year, e + 1))
              ? (i +=
                  '\t\t<td id="cell' +
                  (e + 1) +
                  "-" +
                  this.id +
                  '" class="month unselectable"')
              : (i +=
                  '\t\t<td id="cell' +
                  (e + 1) +
                  "-" +
                  this.id +
                  '" class="month selectable"'),
              (i =
                (i =
                  (i =
                    (i += ' data-value="' + e + '"') +
                    ' title="' +
                    this.locales.month_names[e] +
                    " " +
                    this.year +
                    '"') +
                  ' aria-label="' +
                  this.locales.month_names[e] +
                  " " +
                  this.year +
                  '"') +
                ' role="gridcell" tabindex="-1" aria-selected="false">' +
                this.locales.month_names_abbreviated[e] +
                "</td>"),
              (3 != e && 7 != e) ||
                ((i +=
                  '\t</tr>\n\t<tr id="row' +
                  t +
                  "-" +
                  this.id +
                  '" role="row">\n'),
                t++);
          n.append((i += "\t</tr>")), (this.gridType = 1);
        }),
        (o.prototype.populateYearsCalendar = function () {
          this.$calendar
            .find(".datepicker-bn-prev-label")
            .html(this.options.prevYearButtonLabel),
            this.$calendar
              .find(".datepicker-bn-next-label")
              .html(this.options.nextYearButtonLabel),
            this.hideObject(this.$fastprev),
            this.hideObject(this.$fastnext),
            null != this.options.min &&
            this.year - 20 < this.options.min.getFullYear()
              ? (this.$prev.attr("title", ""),
                this.$prev.addClass("disabled"),
                this.$prev.removeClass("enabled"))
              : (this.$prev.attr("title", this.options.prevYearButtonLabel),
                this.$prev.addClass("enabled"),
                this.$prev.removeClass("disabled")),
            this.$monthObj.attr("title", this.options.changeRangeButtonLabel),
            null != this.options.max &&
            this.year + 20 > this.options.max.getFullYear()
              ? (this.$next.attr("title", ""),
                this.$next.addClass("disabled"),
                this.$next.removeClass("enabled"))
              : (this.$next.attr("title", this.options.nextYearButtonLabel),
                this.$next.addClass("enabled"),
                this.$next.removeClass("disabled"));
          for (
            var e = 10 * Math.floor(this.year / 10),
              t = 19 + e,
              n = 1,
              i = this.$grid.find("tbody"),
              r =
                (this.$monthObj.html(e + "-" + t),
                this.hideObject(this.$grid.find("thead")),
                i.empty(),
                b("#datepicker-err-msg-" + this.id).empty(),
                '\t<tr id="row0-' + this.id + '" role="row">\n'),
              o = e;
            o <= t;
            o++
          ) {
            o == this.year
              ? (r +=
                  '\t\t<td id="cell' +
                  (o - e + 1) +
                  "-" +
                  this.id +
                  '" class="year curYear selectable"')
              : (null != this.options.min &&
                  o < this.options.min.getFullYear()) ||
                (null != this.options.max &&
                  o > this.options.max.getFullYear()) ||
                (this.options.isYearDisabled && this.options.isYearDisabled(o))
              ? (r +=
                  '\t\t<td id="cell' +
                  (o - e + 1) +
                  "-" +
                  this.id +
                  '" class="year unselectable"')
              : (r +=
                  '\t\t<td id="cell' +
                  (o - e + 1) +
                  "-" +
                  this.id +
                  '" class="year selectable"');
            var r =
                (r = r + (' data-value="' + o + '"') + (' title="' + o + '"')) +
                (' role="gridcell" tabindex="-1" aria-selected="false">' + o) +
                "</td>",
              a = o - e;
            (4 != a && 9 != a && 14 != a) ||
              ((r +=
                '\t</tr>\n\t<tr id="row' +
                n +
                "-" +
                this.id +
                '" role="row">\n'),
              n++);
          }
          i.append((r += "\t</tr>")), (this.gridType = 2);
        }),
        (o.prototype.showDaysOfPrevMonth = function (e) {
          var t = this.previousMonth(this.year, this.month);
          return (
            (null == this.options.min ||
              !(
                t.year < this.options.min.getFullYear() ||
                (t.year == this.options.min.getFullYear() &&
                  t.month < this.options.min.getMonth())
              )) &&
            ((this.month = t.month),
            (this.year = t.year),
            this.populateDaysCalendar(),
            null != e &&
              ((t =
                "cell" +
                (this.getDaysInMonth(this.year, this.month) - e) +
                "-" +
                this.id),
              this.$grid.attr("aria-activedescendant", t),
              this.selectGridCell(t)),
            !0)
          );
        }),
        (o.prototype.showDaysOfMonth = function (e) {
          if (
            null != this.options.min &&
            (this.year < this.options.min.getFullYear() ||
              (this.year == this.options.min.getFullYear() &&
                e < this.options.min.getMonth()))
          )
            return !1;
          if (
            null != this.options.max &&
            (this.year > this.options.max.getFullYear() ||
              (this.year == this.options.max.getFullYear() &&
                e > this.options.max.getMonth()))
          )
            return !1;
          (this.month = e),
            (this.date = Math.min(
              this.date,
              this.getDaysInMonth(this.year, this.month)
            )),
            this.populateDaysCalendar();
          e = this.$grid.find("tbody td[data-value='" + this.date + "']");
          return this.selectGridCell(e.attr("id")), !0;
        }),
        (o.prototype.showMonthsOfPrevYear = function (e) {
          return (
            !(
              null != this.options.min &&
              this.year - 1 < this.options.min.getFullYear()
            ) &&
            (this.year--,
            this.populateMonthsCalendar(),
            null != e &&
              ((e = "cell" + (12 - e) + "-" + this.id),
              this.$grid.attr("aria-activedescendant", e),
              this.selectGridCell(e)),
            !0)
          );
        }),
        (o.prototype.showMonthsOfYear = function (e) {
          if (null != this.options.min && e < this.options.min.getFullYear())
            return !1;
          if (null != this.options.max && e > this.options.max.getFullYear())
            return !1;
          (this.year = e), this.populateMonthsCalendar();
          e = this.$grid.find("tbody td[data-value='" + this.month + "']");
          return (
            this.$grid.attr("aria-activedescendant", e.attr("id")),
            this.selectGridCell(e.attr("id")),
            !0
          );
        }),
        (o.prototype.showYearsOfPrevRange = function (e) {
          return (
            !(
              null != this.options.min &&
              this.year - 20 < this.options.min.getFullYear()
            ) &&
            ((this.year -= 20),
            this.populateYearsCalendar(),
            null != e &&
              ((e = "cell" + (20 - e) + "-" + this.id),
              this.$grid.attr("aria-activedescendant", e),
              this.selectGridCell(e)),
            !0)
          );
        }),
        (o.prototype.showDaysOfNextMonth = function (e) {
          var t = this.nextMonth(this.year, this.month);
          return (
            (null == this.options.max ||
              !(
                t.year > this.options.max.getFullYear() ||
                (t.year == this.options.max.getFullYear() &&
                  t.month > this.options.max.getMonth())
              )) &&
            ((this.month = t.month),
            (this.year = t.year),
            this.populateDaysCalendar(),
            null != e &&
              ((t = "cell" + e + "-" + this.id),
              this.$grid.attr("aria-activedescendant", t),
              this.selectGridCell(t)),
            !0)
          );
        }),
        (o.prototype.showMonthsOfNextYear = function (e) {
          return (
            !(
              null != this.options.max &&
              this.year + 1 > this.options.max.getFullYear()
            ) &&
            (this.year++,
            this.populateMonthsCalendar(),
            null != e &&
              ((e = "cell" + e + "-" + this.id),
              this.$grid.attr("aria-activedescendant", e),
              this.selectGridCell(e)),
            !0)
          );
        }),
        (o.prototype.showYearsOfNextRange = function (e) {
          return (
            !(
              null != this.options.max &&
              this.year + 20 > this.options.max.getFullYear()
            ) &&
            ((this.year += 20),
            this.populateYearsCalendar(),
            null != e &&
              ((e = "cell" + e + "-" + this.id),
              this.$grid.attr("aria-activedescendant", e),
              this.selectGridCell(e)),
            !0)
          );
        }),
        (o.prototype.showDaysOfPrevYear = function () {
          return (
            (null == this.options.min ||
              !(
                this.year - 1 < this.options.min.getFullYear() ||
                (this.year - 1 == this.options.min.getFullYear() &&
                  this.month < this.options.min.getMonth())
              )) &&
            (this.year--, this.populateDaysCalendar(), !0)
          );
        }),
        (o.prototype.showDaysOfNextYear = function () {
          return (
            (null == this.options.max ||
              !(
                this.year + 1 > this.options.max.getFullYear() ||
                (this.year + 1 == this.options.max.getFullYear() &&
                  this.month > this.options.max.getMonth())
              )) &&
            (this.year++, this.populateDaysCalendar(), !0)
          );
        }),
        (o.prototype.bindHandlers = function () {
          var t = this;
          this.$fastprev.click(function (e) {
            return t.handleFastPrevClick(e);
          }),
            this.$prev.click(function (e) {
              return t.handlePrevClick(e);
            }),
            this.$next.click(function (e) {
              return t.handleNextClick(e);
            }),
            this.$fastnext.click(function (e) {
              return t.handleFastNextClick(e);
            }),
            this.$monthObj.click(function (e) {
              return t.handleMonthClick(e);
            }),
            this.$monthObj.keydown(function (e) {
              return t.handleMonthKeyDown(e);
            }),
            this.$fastprev.keydown(function (e) {
              return t.handleFastPrevKeyDown(e);
            }),
            this.$prev.keydown(function (e) {
              return t.handlePrevKeyDown(e);
            }),
            this.$next.keydown(function (e) {
              return t.handleNextKeyDown(e);
            }),
            this.$fastnext.keydown(function (e) {
              return t.handleFastNextKeyDown(e);
            }),
            1 == this.options.modal &&
              (this.$close.click(function (e) {
                return t.handleCloseClick(e);
              }),
              this.$close.keydown(function (e) {
                return t.handleCloseKeyDown(e);
              })),
            this.$grid.keydown(function (e) {
              return t.handleGridKeyDown(e);
            }),
            this.$grid.keypress(function (e) {
              return t.handleGridKeyPress(e);
            }),
            this.$grid.focus(function (e) {
              return t.handleGridFocus(e);
            }),
            this.$grid.blur(function (e) {
              return t.handleGridBlur(e);
            }),
            this.$grid.delegate("td", "click", function (e) {
              return t.handleGridClick(this, e);
            }),
            this.$target.change(function () {
              var e = t.parseDate(b(this).val());
              t.updateLinked(e);
            });
        }),
        (o.prototype.handleFastPrevClick = function (e) {
          var t;
          return (
            this.showDaysOfPrevYear() &&
              ((t = this.$grid.attr("aria-activedescendant")),
              this.month != this.curMonth || this.year != this.curYear
                ? (this.$grid.attr("aria-activedescendant", "cell1-" + this.id),
                  this.selectGridCell("cell1-" + this.id))
                : (this.$grid.attr("aria-activedescendant", t),
                  this.selectGridCell(t))),
            e.stopPropagation(),
            !1
          );
        }),
        (o.prototype.handlePrevClick = function (e) {
          var t = this.$grid.attr("aria-activedescendant");
          switch (this.gridType) {
            case 0:
              var n = e.ctrlKey
                ? this.showDaysOfPrevYear()
                : this.showDaysOfPrevMonth();
              n &&
                (this.month != this.curMonth || this.year != this.curYear
                  ? (this.$grid.attr(
                      "aria-activedescendant",
                      "cell1-" + this.id
                    ),
                    this.selectGridCell("cell1-" + this.id))
                  : (this.$grid.attr("aria-activedescendant", t),
                    this.selectGridCell(t)));
              break;
            case 1:
              this.showMonthsOfPrevYear() &&
                (this.year != this.curYear
                  ? (this.$grid.attr(
                      "aria-activedescendant",
                      "cell1-" + this.id
                    ),
                    this.selectGridCell("cell1-" + this.id))
                  : (this.$grid.attr("aria-activedescendant", t),
                    this.selectGridCell(t)));
              break;
            case 2:
              this.showYearsOfPrevRange() &&
                (this.$grid.attr("aria-activedescendant", "cell1-" + this.id),
                this.selectGridCell("cell1-" + this.id));
          }
          return e.stopPropagation(), !1;
        }),
        (o.prototype.handleMonthClick = function (e) {
          return this.changeGrid(e), e.stopPropagation(), !1;
        }),
        (o.prototype.handleNextClick = function (e) {
          var t = this.$grid.attr("aria-activedescendant");
          switch (this.gridType) {
            case 0:
              var n = e.ctrlKey
                ? this.showDaysOfNextYear()
                : this.showDaysOfNextMonth();
              n &&
                (this.month != this.curMonth || this.year != this.curYear
                  ? (this.$grid.attr(
                      "aria-activedescendant",
                      "cell1-" + this.id
                    ),
                    this.selectGridCell("cell1-" + this.id))
                  : (this.$grid.attr("aria-activedescendant", t),
                    this.selectGridCell(t)));
              break;
            case 1:
              this.showMonthsOfNextYear() &&
                (this.year != this.curYear
                  ? (this.$grid.attr(
                      "aria-activedescendant",
                      "cell1-" + this.id
                    ),
                    this.selectGridCell("cell1-" + this.id))
                  : (this.$grid.attr("aria-activedescendant", t),
                    this.selectGridCell(t)));
              break;
            case 2:
              this.showYearsOfNextRange() &&
                (this.$grid.attr("aria-activedescendant", "cell1-" + this.id),
                this.selectGridCell("cell1-" + this.id));
          }
          return e.stopPropagation(), !1;
        }),
        (o.prototype.handleFastNextClick = function (e) {
          var t;
          return (
            this.showDaysOfNextYear() &&
              ((t = this.$grid.attr("aria-activedescendant")),
              this.month != this.curMonth || this.year != this.curYear
                ? (this.$grid.attr("aria-activedescendant", "cell1-" + this.id),
                  this.selectGridCell("cell1-" + this.id))
                : (this.$grid.attr("aria-activedescendant", t),
                  this.selectGridCell(t))),
            e.stopPropagation(),
            !1
          );
        }),
        (o.prototype.handleCloseClick = function (e) {
          return this.hide(), e.stopPropagation(), !1;
        }),
        (o.prototype.handleFastPrevKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !(0 != this.options.modal && !e.ctrlKey) ||
                ((e.shiftKey ? this.$close : this.$prev).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.space:
              return (
                !(!e.shiftKey && !e.ctrlKey) ||
                (this.showDaysOfPrevYear(), e.stopPropagation(), !1)
              );
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handlePrevKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !(0 != this.options.modal && !e.ctrlKey) ||
                ((e.shiftKey
                  ? 0 == this.gridType
                    ? this.$fastprev
                    : this.$close
                  : this.$monthObj
                ).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.space:
              if (e.shiftKey) return !0;
              switch (this.gridType) {
                case 0:
                  e.ctrlKey
                    ? this.showDaysOfPrevYear()
                    : this.showDaysOfPrevMonth();
                  break;
                case 1:
                  this.showMonthsOfPrevYear();
                  break;
                case 2:
                  this.showYearsOfPrevRange();
              }
              return e.stopPropagation(), !1;
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handleMonthKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !(0 != this.options.modal && !e.ctrlKey) ||
                ((e.shiftKey ? this.$prev : this.$next).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.space:
              return this.changeGrid(e), e.stopPropagation(), !1;
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handleNextKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !(0 != this.options.modal && !e.ctrlKey) ||
                ((e.shiftKey
                  ? this.$monthObj
                  : 0 == this.gridType
                  ? this.$fastnext
                  : this.$grid
                ).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.space:
              switch (this.gridType) {
                case 0:
                  e.ctrlKey
                    ? this.showDaysOfNextYear()
                    : this.showDaysOfNextMonth();
                  break;
                case 1:
                  this.showMonthsOfNextYear();
                  break;
                case 2:
                  this.showYearsOfNextRange();
              }
              return e.stopPropagation(), !1;
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handleFastNextKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !(0 != this.options.modal && !e.ctrlKey) ||
                ((e.shiftKey ? this.$next : this.$grid).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.space:
              return this.showDaysOfNextYear(), e.stopPropagation(), !1;
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handleCloseKeyDown = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                !!e.ctrlKey ||
                ((e.shiftKey
                  ? this.$grid
                  : 0 == this.gridType
                  ? this.$fastprev
                  : this.$prev
                ).focus(),
                e.stopPropagation(),
                !1)
              );
            case this.keys.enter:
            case this.keys.esc:
            case this.keys.space:
              return (
                !(!e.shiftKey && !e.ctrlKey) ||
                (this.hide(), e.stopPropagation(), !1)
              );
          }
          return !0;
        }),
        (o.prototype.handleGridKeyDown = function (e) {
          var t = b("#" + this.$grid.attr("aria-activedescendant")),
            n = this.$grid.find("td.selectable"),
            i = this.$grid.find("tbody tr").eq(0).find("td").length;
          if (
            e.altKey &&
            e.keyCode != this.keys.pageup &&
            e.keyCode != this.keys.pagedown
          )
            return !0;
          switch (e.keyCode) {
            case this.keys.tab:
              return (
                1 == this.options.modal
                  ? (e.shiftKey
                      ? 0 == this.gridType
                        ? this.$fastnext
                        : this.$next
                      : this.$close
                    ).focus()
                  : (this.hide(), this.handleTabOut(e)),
                e.stopPropagation(),
                !1
              );
            case this.keys.enter:
            case this.keys.space:
              if (e.ctrlKey) return !0;
              switch (this.gridType) {
                case 0:
                  this.update(), this.hide();
                  break;
                case 1:
                  this.showDaysOfMonth(parseInt(t.attr("data-value"), 10));
                  break;
                case 2:
                  this.showMonthsOfYear(parseInt(t.attr("data-value"), 10));
              }
              return e.stopPropagation(), !1;
            case this.keys.esc:
              return this.hide(), e.stopPropagation(), !1;
            case this.keys.left:
            case this.keys.right:
              if (
                (e.keyCode == this.keys.left &&
                  "LTR" === this.locales.directionality) ||
                (e.keyCode == this.keys.right &&
                  "RTL" === this.locales.directionality)
              ) {
                if (e.ctrlKey || e.shiftKey) return !0;
                var r = n.index(t) - 1,
                  o = null;
                if (0 <= r)
                  (o = n.eq(r)),
                    this.unSelectGridCell(t.attr("id")),
                    this.$grid.attr("aria-activedescendant", o.attr("id")),
                    this.selectGridCell(o.attr("id"));
                else
                  switch (this.gridType) {
                    case 0:
                      this.showDaysOfPrevMonth(0);
                      break;
                    case 1:
                      this.showMonthsOfPrevYear(0);
                      break;
                    case 2:
                      this.showYearsOfPrevRange(0);
                  }
                return e.stopPropagation(), !1;
              }
              if (e.ctrlKey || e.shiftKey) return !0;
              var a = null;
              if ((r = n.index(t) + 1) < n.length)
                (a = n.eq(r)),
                  this.unSelectGridCell(t.attr("id")),
                  this.$grid.attr("aria-activedescendant", a.attr("id")),
                  this.selectGridCell(a.attr("id"));
              else
                switch (this.gridType) {
                  case 0:
                    this.showDaysOfNextMonth(1);
                    break;
                  case 1:
                    this.showMonthsOfNextYear(1);
                    break;
                  case 2:
                    this.showYearsOfNextRange(1);
                }
              return e.stopPropagation(), !1;
            case this.keys.up:
              if (e.ctrlKey || e.shiftKey) return !0;
              if (((o = null), 0 <= (r = n.index(t) - i)))
                (o = n.eq(r)),
                  this.unSelectGridCell(t.attr("id")),
                  this.$grid.attr("aria-activedescendant", o.attr("id")),
                  this.selectGridCell(o.attr("id"));
              else
                switch (((r = i - 1 - n.index(t)), this.gridType)) {
                  case 0:
                    this.showDaysOfPrevMonth(r);
                    break;
                  case 1:
                    this.showMonthsOfPrevYear(r);
                    break;
                  case 2:
                    this.showYearsOfPrevRange(r);
                }
              return e.stopPropagation(), !1;
            case this.keys.down:
              if (e.ctrlKey || e.shiftKey) return !0;
              if (((a = null), (r = n.index(t) + i) < n.length))
                (a = n.eq(r)),
                  this.unSelectGridCell(t.attr("id")),
                  this.$grid.attr("aria-activedescendant", a.attr("id")),
                  this.selectGridCell(a.attr("id"));
              else
                switch (
                  ((r = i + 1 - (n.length - n.index(t))), this.gridType)
                ) {
                  case 0:
                    this.showDaysOfNextMonth(r);
                    break;
                  case 1:
                    this.showMonthsOfNextYear(r);
                    break;
                  case 2:
                    this.showYearsOfNextRange(r);
                }
              return e.stopPropagation(), !1;
            case this.keys.pageup:
              var s = this.$grid.attr("aria-activedescendant");
              if (e.shiftKey || e.ctrlKey) return !0;
              e.preventDefault();
              var l,
                c = !1;
              switch (this.gridType) {
                case 0:
                  c = e.altKey
                    ? (e.stopImmediatePropagation(), this.showDaysOfPrevYear())
                    : this.showDaysOfPrevMonth();
                  break;
                case 1:
                  c = this.showMonthsOfPrevYear();
                  break;
                case 2:
                  c = this.showYearsOfPrevRange();
              }
              return (
                c &&
                  (b("#" + s).attr("id") == u
                    ? ((l = (n = this.$grid.find("td.selectable")).eq(
                        n.length - 1
                      )),
                      this.$grid.attr("aria-activedescendant", l.attr("id")),
                      this.selectGridCell(l.attr("id")))
                    : this.selectGridCell(s)),
                e.stopPropagation(),
                !1
              );
            case this.keys.pagedown:
              if (
                ((s = this.$grid.attr("aria-activedescendant")),
                e.shiftKey || e.ctrlKey)
              )
                return !0;
              switch ((e.preventDefault(), (c = !1), this.gridType)) {
                case 0:
                  c = e.altKey
                    ? (e.stopImmediatePropagation(), this.showDaysOfNextYear())
                    : this.showDaysOfNextMonth();
                  break;
                case 1:
                  c = this.showMonthsOfNextYear();
                  break;
                case 2:
                  c = this.showYearsOfNextRange();
              }
              return (
                c &&
                  (b("#" + s).attr("id") == u
                    ? ((l = (n = this.$grid.find("td.selectable")).eq(
                        n.length - 1
                      )),
                      this.$grid.attr("aria-activedescendant", l.attr("id")),
                      this.selectGridCell(l.attr("id")))
                    : this.selectGridCell(s)),
                e.stopPropagation(),
                !1
              );
            case this.keys.home:
              if (e.ctrlKey || e.shiftKey) return !0;
              o = n.eq(0);
              return (
                this.unSelectGridCell(t.attr("id")),
                this.$grid.attr("aria-activedescendant", o.attr("id")),
                this.selectGridCell(o.attr("id")),
                e.stopPropagation(),
                !1
              );
            case this.keys.end:
              return (
                !(!e.ctrlKey && !e.shiftKey) ||
                ((l = n.eq(n.length - 1)),
                this.unSelectGridCell(t.attr("id")),
                this.$grid.attr("aria-activedescendant", l.attr("id")),
                this.selectGridCell(l.attr("id")),
                e.stopPropagation(),
                !1)
              );
          }
          return !0;
        }),
        (o.prototype.handleGridKeyPress = function (e) {
          if (e.altKey) return !0;
          switch (e.keyCode) {
            case this.keys.tab:
            case this.keys.enter:
            case this.keys.space:
            case this.keys.esc:
            case this.keys.left:
            case this.keys.right:
            case this.keys.up:
            case this.keys.down:
            case this.keys.pageup:
            case this.keys.pagedown:
            case this.keys.home:
            case this.keys.end:
              return e.stopPropagation(), !1;
          }
          return !0;
        }),
        (o.prototype.handleGridClick = function (e, t) {
          var n = b(e);
          if (n.is(".empty") || n.is(".unselectable")) return !0;
          switch (
            (this.$grid
              .find(".focus")
              .removeClass("focus")
              .attr("aria-selected", "false")
              .attr("tabindex", -1),
            this.gridType)
          ) {
            case 0:
              this.$grid.attr("aria-activedescendant", n.attr("id")),
                this.selectGridCell(n.attr("id")),
                this.update(),
                this.hide();
              break;
            case 1:
              this.showDaysOfMonth(parseInt(n.attr("data-value"), 10));
              break;
            case 2:
              this.showMonthsOfYear(parseInt(n.attr("data-value"), 10));
          }
          return t.stopPropagation(), !1;
        }),
        (o.prototype.handleGridFocus = function () {
          var e,
            t = this.$grid.attr("aria-activedescendant");
          return (
            b("#" + t).attr("id") == u
              ? ((e = (e = this.$grid.find("td.selectable")).eq(e.length - 1)),
                this.$grid.attr("aria-activedescendant", e.attr("id")),
                this.selectGridCell(e.attr("id")))
              : this.selectGridCell(t),
            !0
          );
        }),
        (o.prototype.handleGridBlur = function () {
          return (
            this.unSelectGridCell(this.$grid.attr("aria-activedescendant")), !0
          );
        }),
        (o.prototype.handleTabOut = function (e) {
          var t = b("body").find(
              "input:visible,textarea:visible,select:visible"
            ),
            n = t.index(this.$target);
          return (
            -1 < n &&
              n < t.length &&
              (e.shiftKey ? 0 < n && n-- : n + 1 < t.length && n++,
              t.eq(n).focus()),
            !0
          );
        }),
        (o.prototype.changeGrid = function (e) {
          switch (this.gridType) {
            case 0:
              var t;
              this.populateMonthsCalendar(),
                this.year != this.curYear
                  ? ((t = this.$grid.find("td.selectable")),
                    this.$grid.attr(
                      "aria-activedescendant",
                      t.eq(0).attr("id")
                    ))
                  : this.$grid.attr(
                      "aria-activedescendant",
                      this.$grid.find(".curMonth").attr("id")
                    ),
                this.selectGridCell(this.$grid.attr("aria-activedescendant"));
              break;
            case 2:
              e.shiftKey ? (this.year -= 20) : (this.year += 20);
              break;
            case 1:
              this.populateYearsCalendar(),
                this.year != this.curYear
                  ? ((t = this.$grid.find("td.selectable")),
                    this.$grid.attr(
                      "aria-activedescendant",
                      t.eq(0).attr("id")
                    ))
                  : this.$grid.attr(
                      "aria-activedescendant",
                      this.$grid.find(".curYear").attr("id")
                    ),
                this.selectGridCell(this.$grid.attr("aria-activedescendant"));
          }
          return !0;
        }),
        (o.prototype.selectGridCell = function (e) {
          b("#" + e)
            .addClass("focus")
            .attr("aria-selected", "true")
            .attr("tabindex", 0)
            .focus();
        }),
        (o.prototype.unSelectGridCell = function (e) {
          b("#" + e)
            .removeClass("focus")
            .attr("aria-selected", "false")
            .attr("tabindex", -1);
        }),
        (o.prototype.update = function () {
          var e = b("#" + this.$grid.attr("aria-activedescendant")),
            e = new Date(
              this.year,
              this.month,
              parseInt(e.attr("data-value"), 10)
            ),
            e = this.formatDate(e, this.options.outputFormat);
          this.$target.val(e),
            this.$target.removeAttr("aria-invalid"),
            this.$target.parents(".form-group").removeClass("has-error"),
            this.$target.trigger("change"),
            this.options.onUpdate && this.options.onUpdate(e);
        }),
        (o.prototype.updateLinked = function (e) {
          var t;
          null !== this.options.previous &&
            "" !== this.options.previous.val() &&
            e < this.options.previous.datepicker("getDate") &&
            ((t = this.formatDate(
              e,
              this.options.previous.datepicker("outputFormat")
            )),
            this.options.previous.val(t)),
            null !== this.options.next &&
              "" !== this.options.next.val() &&
              this.options.next.datepicker("getDate") < e &&
              ((t = this.formatDate(
                e,
                this.options.next.datepicker("outputFormat")
              )),
              this.options.next.val(t));
        }),
        (o.prototype.hideObject = function (e) {
          e.attr("aria-hidden", !0), e.fadeOut(100);
        }),
        (o.prototype.showObject = function (e) {
          e.attr("aria-hidden", !1), e.fadeIn(100);
        }),
        (o.prototype.show = function () {
          var n = this,
            e =
              (b(".datepicker-calendar").trigger("ab.datepicker.opening", [
                n.id,
              ]),
              1 == this.options.modal
                ? (this.modalEventHandler ||
                    (this.modalEventHandler = function (e) {
                      return n.$grid.focus(), e.stopPropagation, !1;
                    }),
                  b(document).on(
                    "click mousedown mouseup",
                    this.modalEventHandler
                  ),
                  this.greyOut(!0),
                  (e =
                    parseInt(b("#datepicker-overlay").css("z-index"), 10) ||
                    40),
                  this.$calendar.css("z-index", e + 1))
                : (b(document).on(
                    "click",
                    b.proxy(this.handleDocumentClick, this)
                  ),
                  this.$calendar.on("ab.datepicker.opening", function (e, t) {
                    t != n.id ? n.hide() : n.$grid.focus();
                  })),
              this.$calendar.on("ab.datepicker.opened", function (e, t) {
                t == n.id && n.$grid.focus();
              }),
              Math.max(
                0,
                Math.floor(this.$group.offset().top - this.$label.offset().top)
              )),
            t = Math.max(
              0,
              Math.floor(this.$group.offset().left - this.$label.offset().left)
            ),
            i = parseInt(this.$calendar.parent().css("padding-left"), 10),
            r = this.$calendar.outerHeight(),
            o = this.$group.offset().top,
            a = this.$group.outerHeight(!0),
            s = Math.floor(o - b(window).scrollTop()),
            o = Math.floor(
              b(window).height() - (o + a - b(window).scrollTop())
            );
          o < r && o < s
            ? (this.$calendar.addClass("above"),
              this.$calendar.css({ top: e - r + "px", left: t + i + "px" }))
            : (this.$calendar.addClass("below"),
              this.$calendar.css({ top: a + e + "px", left: t + i + "px" })),
            this.$calendar.attr("aria-hidden", "false"),
            this.$calendar.fadeIn(100),
            b(".datepicker-calendar").trigger("ab.datepicker.opened", [n.id]);
        }),
        (o.prototype.refresh = function () {
          switch ((this.drawCalendarHeader(), this.gridType)) {
            case 0:
              this.populateDaysCalendar();
              break;
            case 1:
              this.populateMonthsCalendar();
              break;
            case 2:
              this.populateYearsCalendar();
          }
        }),
        (o.prototype.handleDocumentClick = function (e) {
          return 0 ==
            b(e.target).parents("#datepicker-calendar-" + this.id).length
            ? (this.hide(), !0)
            : (this.$grid.focus(), e.stopPropagation, !1);
        }),
        (o.prototype.hide = function (e) {
          0 == this.options.inline &&
            (1 == this.options.modal
              ? (this.modalEventHandler &&
                  b(document).off(
                    "click mousedown mouseup",
                    this.modalEventHandler
                  ),
                this.greyOut(!1))
              : (b(document).off("click", this.handleDocumentClick),
                this.$calendar.off("ab.datepicker.opening")),
            this.$calendar.removeClass("above below"),
            this.$calendar.attr("aria-hidden", "true"),
            this.$calendar.fadeOut(100),
            b(".datepicker-calendar").trigger("ab.datepicker.closed", [
              this.id,
            ]),
            e || this.$target.focus());
        }),
        (o.prototype.greyOut = function (e) {
          var t = b("#datepicker-overlay");
          0 == t.length &&
            e &&
            (b("body").append(
              '<div id="datepicker-overlay" class="datepicker-overlay"></div>'
            ),
            (t = b("#datepicker-overlay"))),
            e ? t.fadeIn(100) : t.fadeOut(100);
        }),
        (o.prototype.absolutePosition = function (e) {
          var t = 0,
            n = 0;
          if (e.getBoundingClientRect)
            var i = e.getBoundingClientRect(),
              r = document.body,
              o = document.documentElement,
              a = window.pageYOffset || o.scrollTop || r.scrollTop,
              s = window.pageXOffset || o.scrollLeft || r.scrollLeft,
              l = o.clientTop || r.clientTop || 0,
              o = o.clientLeft || r.clientLeft || 0,
              t = Math.round(i.top + a - l),
              n = Math.round(i.left + s - o);
          else
            for (; e; )
              (t += parseInt(e.offsetTop, 10)),
                (n += parseInt(e.offsetLeft, 10)),
                (e = e.offsetParent);
          return { top: t, left: n };
        }),
        (o.prototype.getDaysInMonth = function (e, t) {
          return 32 - new Date(e, t, 32).getDate();
        }),
        (o.prototype.previousMonth = function (e, t) {
          return 0 == t ? ((t = 11), e--) : t--, { year: e, month: t };
        }),
        (o.prototype.nextMonth = function (e, t) {
          return 11 == t ? ((t = 0), e++) : t++, { year: e, month: t };
        }),
        (o.prototype.formatDate = function (e, t) {
          function n(e) {
            return (e < 0 || 9 < e ? "" : "0") + e;
          }
          function i(e) {
            var t = new Date(e.getTime());
            return t.setHours(0), e - t;
          }
          var r = e.getFullYear() + "",
            o = e.getMonth() + 1,
            a = e.getDate(),
            s =
              ((s = e),
              (l = new Date(s.getFullYear(), 0, 0)),
              Math.floor((s - l) / 864e5)),
            l = e.getDay(),
            c = e.getHours(),
            u = e.getMinutes(),
            d = e.getSeconds(),
            h =
              ((h = e),
              (f = new Date(h.getFullYear(), 0, 1)),
              Math.ceil(((h - f) / 864e5 + f.getDay() + 1) / 7)),
            f = ((f = e), Math.ceil((f.getDate() - 1 - f.getDay()) / 7)),
            p = Math.floor(e.getDate() / 7) + 1,
            m = Math.ceil((e.getMonth() + 1) / 3),
            g = e.getFullYear() < 1 ? 0 : 1,
            v = {
              y: "" + r,
              yyyy: r,
              yy: r.substring(2, 4),
              L: o,
              LL: n(o),
              LLL: this.locales.month_names_abbreviated[o - 1],
              LLLL: this.locales.month_names[o - 1],
              LLLLL: this.locales.month_names_narrow[o - 1],
              M: o,
              MM: n(o),
              MMM: this.locales.month_names_abbreviated[o - 1],
              MMMM: this.locales.month_names[o - 1],
              MMMMM: this.locales.month_names_narrow[o - 1],
              d: a,
              dd: n(a),
              D: s,
              DD: s,
              DDD: s,
              A: Math.round(i(e) * Math.pow(10, -2)),
              AA: Math.round(i(e) * Math.pow(10, -1)),
              AAA: Math.round(i(e) * Math.pow(10, 0)),
              AAAA: Math.round(i(e) * Math.pow(10, 1)),
              AAAAA: Math.round(i(e) * Math.pow(10, 2)),
              AAAAAA: Math.round(i(e) * Math.pow(10, 3)),
              E: this.locales.day_names_abbreviated[l],
              EE: this.locales.day_names_abbreviated[l],
              EEE: this.locales.day_names_abbreviated[l],
              EEEE: this.locales.day_names[l],
              EEEEE: this.locales.day_names_narrow[l],
              EEEEEE: this.locales.day_names_short[l],
              e: l,
              ee: l,
              eee: this.locales.day_names_abbreviated[l],
              eeee: this.locales.day_names[l],
              eeeee: this.locales.day_names_narrow[l],
              eeeeee: this.locales.day_names_short[l],
              c: l,
              cc: l,
              ccc: this.locales.day_names_abbreviated[l],
              cccc: this.locales.day_names[l],
              ccccc: this.locales.day_names_narrow[l],
              cccccc: this.locales.day_names_short[l],
              F: p,
              G: this.locales.era_names_abbreviated[g],
              GG: this.locales.era_names_abbreviated[g],
              GGG: this.locales.era_names_abbreviated[g],
              GGGG: this.locales.era_names[g],
              GGGGG: this.locales.era_names_narrow[g],
              Q: m,
              QQ: n(m),
              QQQ: this.locales.quarter_names_abbreviated[m - 1],
              QQQQ: this.locales.quarter_names[m - 1],
              QQQQQ: this.locales.quarter_names_narrow[m - 1],
              q: m,
              qq: n(m),
              qqq: this.locales.quarter_names_abbreviated[m - 1],
              qqqq: this.locales.quarter_names[m - 1],
              qqqqq: this.locales.quarter_names_narrow[m - 1],
              H: c,
              HH: n(c),
              h: 0 == c ? 12 : 12 < c ? c - 12 : c,
              hh: n(0 == c ? 12 : 12 < c ? c - 12 : c),
              K: 11 < c ? c - 12 : c,
              k: c + 1,
              KK: n(11 < c ? c - 12 : c),
              kk: n(c + 1),
              a:
                11 < c
                  ? this.locales.day_periods.pm
                  : this.locales.day_periods.am,
              m: u,
              mm: n(u),
              s: d,
              ss: n(d),
              w: h,
              ww: n(h),
              W: f,
            };
          return t.replace(
            /('[^']+'|y{1,4}|L{1,5}|M{1,5}|c{1,6}|d{1,2}|D{1,3}|E{1,6}|e{1,6}|F{1,1}|G{1,5}|Q{1,5}|q{1,5}|H{1,2}|h{1,2}|K{1,2}|k{1,2}|m{1,2}|s{1,2}|w{1,2}|W{1,1}|A{1,6})/g,
            function (e) {
              return "'" === e.charAt(0)
                ? e.substr(1, e.length - 2)
                : v[e] || e;
            }
          );
        }),
        (o.prototype.createDateFromFormat = function (e, a) {
          function s(e, t, n, i) {
            for (var r = i; n <= r; r--) {
              var o = e.substring(t, t + r);
              if (o.length < n) return null;
              if (/^\d+$/.test(o)) return o;
            }
            return null;
          }
          function l(e, t) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              if (a.substring(t, t + i.length).toLowerCase() == i.toLowerCase())
                return i.length;
            }
            return 0;
          }
          var c = 0,
            t = new Date(),
            u = t.getYear(),
            d = t.getMonth() + 1,
            h = 1,
            f = 0,
            p = 0,
            m = 0,
            g = "",
            v = this;
          if (
            (b.each(e.match(/(.).*?\1*/g), function (e, t) {
              switch (t) {
                case "yyyy":
                  null != (u = s(a, c, 4, 4)) && (c += u.length);
                  break;
                case "yy":
                  null != (u = s(a, c, 2, 2)) && (c += u.length);
                  break;
                case "y":
                  null != (u = s(a, c, 2, 4)) && (c += u.length);
                  break;
                case "MMM":
                case "LLL":
                  for (
                    var n = (d = 0);
                    n < v.locales.month_names_abbreviated.length;
                    n++
                  ) {
                    var i = v.locales.month_names_abbreviated[n];
                    if (
                      a.substring(c, c + i.length).toLowerCase() ==
                      i.toLowerCase()
                    ) {
                      (d = n + 1), (c += i.length);
                      break;
                    }
                  }
                  break;
                case "MMMM":
                case "LLLL":
                  for (n = d = 0; n < v.locales.month_names.length; n++)
                    if (
                      ((i = v.locales.month_names[n]),
                      a.substring(c, c + i.length).toLowerCase() ==
                        i.toLowerCase())
                    ) {
                      (d = n + 1), (c += i.length);
                      break;
                    }
                  break;
                case "EEE":
                case "EE":
                case "E":
                case "eee":
                  c += l(v.locales.day_names_abbreviated, c);
                  break;
                case "EEEE":
                case "eeee":
                case "cccc":
                  c += l(v.locales.day_names, c);
                  break;
                case "EEEEEE":
                case "eeeeee":
                case "cccccc":
                  c += l(v.locales.day_names_short, c);
                  break;
                case "MM":
                case "M":
                case "LL":
                case "L":
                  if (null == (d = s(a, c, t.length, 2)) || d < 1 || 12 < d)
                    return null;
                  c += d.length;
                  break;
                case "dd":
                case "d":
                  if (null == (h = s(a, c, t.length, 2)) || h < 1 || 31 < h)
                    return null;
                  c += h.length;
                  break;
                case "hh":
                case "h":
                  if (null == (f = s(a, c, t.length, 2)) || f < 1 || 12 < f)
                    return null;
                  c += f.length;
                  break;
                case "HH":
                case "H":
                  if (null == (f = s(a, c, t.length, 2)) || f < 0 || 23 < f)
                    return null;
                  c += f.length;
                  break;
                case "KK":
                case "K":
                  if (null == (f = s(a, c, t.length, 2)) || f < 0 || 11 < f)
                    return null;
                  c += f.length;
                  break;
                case "kk":
                case "k":
                  if (null == (f = s(a, c, t.length, 2)) || f < 1 || 24 < f)
                    return null;
                  (c += f.length), f--;
                  break;
                case "mm":
                case "m":
                  if (null == (p = s(a, c, t.length, 2)) || p < 0 || 59 < p)
                    return null;
                  c += p.length;
                  break;
                case "ss":
                case "s":
                  if (null == (m = s(a, c, t.length, 2)) || m < 0 || 59 < m)
                    return null;
                  c += m.length;
                  break;
                case "a":
                  var r = v.locales.day_periods.am.length,
                    o = v.locales.day_periods.pm.length;
                  if (a.substring(c, c + r) == v.locales.day_periods.am)
                    (g = "AM"), (c += r);
                  else {
                    if (a.substring(c, c + o) != v.locales.day_periods.pm)
                      return null;
                    (g = "PM"), (c += o);
                  }
                  break;
                default:
                  if (a.substring(c, c + t.length) != t) return null;
                  c += t.length;
              }
            }),
            c != a.length)
          )
            return null;
          if (null == u) return null;
          if (
            (2 == u.length && (u = 50 < u ? +u + 1900 : +u + 2e3),
            d < 1 || 12 < d)
          )
            return null;
          if (2 == d)
            if ((u % 4 == 0 && u % 100 != 0) || u % 400 == 0) {
              if (29 < h) return null;
            } else if (28 < h) return null;
          return (4 == d || 6 == d || 9 == d || 11 == d) && 30 < h
            ? null
            : (f < 12 && "PM" == g
                ? (f = +f + 12)
                : 11 < f && "AM" == g && (f -= 12),
              new Date(u, d - 1, h, f, p, m));
        }),
        (o.prototype.parseDate = function (n) {
          var i = null,
            r = this;
          return (
            b.each(this.options.inputFormat, function (e, t) {
              if (null != (i = r.createDateFromFormat(t, n))) return !1;
            }),
            (i =
              null == i
                ? r.createDateFromFormat(this.options.outputFormat, n)
                : i)
          );
        }),
        (o.prototype.min = function (e) {
          return (
            null != e &&
              ((this.options.min = e instanceof Date ? e : this.parseDate(e)),
              null != this.options.min &&
                this.dateObj < this.options.min &&
                (this.$target.attr("aria-invalid", !0),
                this.$target.parents(".form-group").addClass("has-error"),
                (this.dateObj = this.options.min)),
              0 != this.options.inline && this.refresh()),
            this.options.min
          );
        }),
        (o.prototype.max = function (e) {
          return (
            null != e &&
              ((this.options.max = e instanceof Date ? e : this.parseDate(e)),
              null != this.options.max &&
                this.dateObj > this.options.max &&
                (this.$target.attr("aria-invalid", !0),
                this.$target.parents(".form-group").addClass("has-error"),
                (this.dateObj = this.options.max)),
              0 != this.options.inline && this.refresh()),
            this.options.max
          );
        }),
        (o.prototype.theme = function (e) {
          return (
            null != e &&
              (this.$button.removeClass(this.options.theme),
              this.$calendar.removeClass(this.options.theme),
              (this.options.theme = e),
              this.$button.addClass(this.options.theme),
              this.$calendar.addClass(this.options.theme)),
            this.options.theme
          );
        }),
        (o.prototype.firstDayOfWeek = function (e) {
          return (
            null != e &&
              ((this.options.firstDayOfWeek = parseInt(e, 10)),
              0 == this.options.inline
                ? this.drawCalendarHeader()
                : this.refresh()),
            this.options.firstDayOfWeek
          );
        }),
        (o.prototype.daysOfWeekDisabled = function (e) {
          var n;
          return (
            null != e &&
              ((this.options.daysOfWeekDisabled = []),
              b.isArray(e) || (e = [e]),
              (n = this),
              b.each(e, function (e, t) {
                "number" == typeof t
                  ? n.options.daysOfWeekDisabled.push(t)
                  : "string" == typeof t &&
                    n.options.daysOfWeekDisabled.push(parseInt(t, 10));
              })),
            this.options.daysOfWeekDisabled
          );
        }),
        (o.prototype.weekDayFormat = function (e) {
          return (
            null != e &&
              ((this.options.weekDayFormat = e), this.drawCalendarHeader()),
            this.options.weekDayFormat
          );
        }),
        (o.prototype.inputFormat = function (e) {
          return (
            null != e &&
              (b.isArray(e) || (e = [e]),
              this.$target.attr("placeholder") == this.options.inputFormat[0] &&
                this.$target.attr("placeholder", e[0]),
              (this.options.inputFormat = e)),
            this.options.inputFormat
          );
        }),
        (o.prototype.outputFormat = function (e) {
          return (
            null != e && (this.options.outputFormat = e),
            this.options.outputFormat
          );
        }),
        (o.prototype.modal = function (e) {
          var t;
          return (
            null != e &&
              ((this.options.modal = e),
              1 == this.options.modal
                ? (0 == this.options.inline &&
                    (this.showObject(
                      this.$calendar.find(".datepicker-close-wrap")
                    ),
                    this.showObject(
                      this.$calendar.find(".datepicker-bn-close-label")
                    )),
                  (this.$close = this.$calendar.find(".datepicker-close")),
                  this.$close
                    .html(this.options.closeButtonTitle)
                    .attr("title", this.options.closeButtonLabel),
                  this.$calendar
                    .find(".datepicker-bn-close-label")
                    .html(this.options.closeButtonLabel),
                  (t = this).$close.click(function (e) {
                    return t.handleCloseClick(e);
                  }),
                  this.$close.keydown(function (e) {
                    return t.handleCloseKeyDown(e);
                  }))
                : (this.hideObject(
                    this.$calendar.find(".datepicker-close-wrap")
                  ),
                  this.hideObject(
                    this.$calendar.find(".datepicker-bn-close-label")
                  ))),
            this.options.modal
          );
        }),
        (o.prototype.inline = function (e) {
          return (
            null != e &&
              (0 != e
                ? (this.hideObject(this.$button),
                  this.hideObject(
                    this.$calendar.find(".datepicker-close-wrap")
                  ),
                  this.hideObject(
                    this.$calendar.find(".datepicker-bn-close-label")
                  ),
                  ("string" == typeof e ? b("#" + e) : e).append(
                    this.$calendar
                  ),
                  this.$calendar.css({
                    position: "relative",
                    left: "0px",
                    top: "0px",
                  }),
                  (this.options.inline = e),
                  this.initializeDate(),
                  this.showObject(this.$calendar))
                : (this.$target.parent().after(this.$calendar),
                  this.showObject(this.$button),
                  1 == this.options.modal &&
                    (this.showObject(
                      this.$calendar.find(".datepicker-close-wrap")
                    ),
                    this.showObject(
                      this.$calendar.find(".datepicker-bn-close-label")
                    )),
                  "static" === this.$calendar.parent().css("position") &&
                    this.$calendar.parent().css("position", "relative"),
                  this.$calendar.css({ position: "absolute" }),
                  (this.options.inline = e),
                  this.hide())),
            this.options.inline
          );
        }),
        (o.prototype.format = function (e) {
          return this.formatDate(e, this.options.outputFormat);
        }),
        (o.prototype.enable = function () {
          this.$button.removeClass("disabled"),
            this.$button.attr("aria-disabled", !1),
            this.$button.attr("tabindex", 0);
        }),
        (o.prototype.disable = function () {
          this.hide(),
            this.$button.addClass("disabled"),
            this.$button.attr("aria-disabled", !0),
            this.$button.attr("tabindex", -1);
        }),
        (o.prototype.datesDisabled = function (e) {
          (this.options.datesDisabled = []), b.isArray(e) || (e = [e]);
          var i = this;
          b.each(e, function (e, t) {
            var n;
            "string" == typeof t
              ? null !== (n = i.parseDate(t)) &&
                i.options.datesDisabled.push(i.format(n))
              : t instanceof Date &&
                !isNaN(t.valueOf()) &&
                i.options.datesDisabled.push(i.format(t));
          });
        }),
        (o.prototype.startview = function (e) {
          switch (e) {
            case 1:
            case "months":
              this.options.startView = 1;
              break;
            case 2:
            case "years":
              this.options.startView = 2;
              break;
            default:
              this.options.startView = 0;
          }
        }),
        (o.prototype.setLocales = function (e) {
          (this.locales = e),
            (this.options.inputFormat = [this.locales.short_format]),
            (this.options.outputFormat = this.locales.short_format),
            (this.options.titleFormat = this.locales.full_format),
            (this.options.firstDayOfWeek = this.locales.firstday_of_week),
            (this.options.buttonTitle = this.locales.texts.buttonTitle),
            this.$button.find("span").attr("title", this.options.buttonTitle),
            (this.options.buttonLabel = this.locales.texts.buttonLabel),
            (this.options.prevButtonLabel = this.locales.texts.prevButtonLabel),
            (this.options.prevMonthButtonLabel =
              this.locales.texts.prevMonthButtonLabel),
            (this.options.prevYearButtonLabel =
              this.locales.texts.prevYearButtonLabel),
            (this.options.nextButtonLabel = this.locales.texts.nextButtonLabel),
            (this.options.nextMonthButtonLabel =
              this.locales.texts.nextMonthButtonLabel),
            (this.options.nextYearButtonLabel =
              this.locales.texts.nextYearButtonLabel),
            (this.options.changeMonthButtonLabel =
              this.locales.texts.changeMonthButtonLabel),
            (this.options.changeYearButtonLabel =
              this.locales.texts.changeYearButtonLabel),
            (this.options.changeRangeButtonLabel =
              this.locales.texts.changeRangeButtonLabel),
            (this.options.closeButtonTitle =
              this.locales.texts.closeButtonTitle),
            (this.options.closeButtonLabel =
              this.locales.texts.closeButtonLabel),
            (this.options.calendarHelp = this.locales.texts.calendarHelp),
            this.drawCalendarHeader(),
            "RTL" === this.locales.directionality
              ? this.$grid.addClass("rtl")
              : this.$grid.removeClass("rtl");
        }),
        b.fn.datepicker);
    (b.fn.datepicker = function (i, r) {
      if ("string" != typeof i || 1 != b(this).length)
        return this.each(function () {
          var e = b(this),
            t = e.data("ab.datepicker"),
            n = b.extend({}, o.DEFAULTS, e.data(), "object" == typeof i && i);
          t || e.data("ab.datepicker", (t = new o(this, n))),
            "string" == typeof i && t[i](r);
        });
      var e = b(this).eq(0).data("ab.datepicker");
      return e ? e[i](r) : void 0;
    }),
      (b.fn.datepicker.Constructor = o),
      (b.fn.datepicker.noConflict = function () {
        return (b.fn.datepicker = e), this;
      });
  }),
  (function (a) {
    var e,
      t = ["", "-webkit-", "-ms-", "-moz-", "-o-"],
      n = document.createElement("div"),
      i = !1,
      r = !1,
      g = !1,
      v = 0,
      o = ["56"],
      s =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame,
      l = 0,
      b = [],
      c = {
        unstick: function () {
          for (
            var e, t, n = a(this).data("sticky-id"), i = b.length - 1;
            0 <= i;
            i--
          )
            if (b[i].id == n) {
              e = i;
              break;
            }
          return (
            void 0 !== (t = void 0 !== e ? b.splice(e, 1) : t) &&
              a(this)
                .removeAttr("style")
                .next("." + t[0].options.holderClass)
                .remove(),
            this
          );
        },
      };
    if (
      !(function () {
        if (!window.chrome) return;
        var e = /Chrom(e|ium)\/(\d+)/.exec(navigator.appVersion);
        return e && ~o.indexOf(e[2]);
      })()
    )
      for (var u = 0, d = t.length; u < d; u++)
        if (
          (n.setAttribute("style", "position:" + t[u] + "sticky"),
          "" !== n.style.position)
        ) {
          i = !0;
          break;
        }
    function y(e) {
      var t,
        n,
        i,
        r = { top: 0, left: 0 },
        o = e && e.ownerDocument;
      if (o)
        return (n = o.body) === e
          ? { top: n.offsetTop, left: n.offsetLeft }
          : ((o = o.documentElement),
            void 0 !== e.getBoundingClientRect &&
              (r = e.getBoundingClientRect()),
            (e = window),
            (t = o.clientTop || n.clientTop || 0),
            (n = o.clientLeft || n.clientLeft || 0),
            (i = e.pageYOffset || o.scrollTop),
            (e = e.pageXOffset || o.scrollLeft),
            { top: r.top + i - t, left: r.left + e - n });
      options.debug &&
        console.error("i-sticky: no element.ownerDocument defined");
    }
    function h() {
      var e = v,
        t = window.pageXOffset || document.documentElement.scrollLeft,
        n = e + (window.innerHeight || document.documentElement.clientHeight);
      g = !1;
      for (var i = 0, r = b.length; i < r; i++) {
        var o = b[i],
          a = o.el.offsetHeight,
          s = y(o.parent),
          l = o.style.isStuck ? y(o.holder) : y(o.el),
          c = o.style.top ? o.style.top.px : 0,
          u = o.style.bottom ? o.style.bottom.px : 0,
          d = o.style.home,
          h = !0,
          f = o.el.className.split(" "),
          p = 0,
          m = (s.top, l.top - c),
          c = s.top + o.parent.offsetHeight - a - c,
          s = s.top + a + u,
          l = l.top + a + u;
        for (p in f) f[p] === o.options.stuckClass && f.splice(p, 1);
        (o.el.className = f.join(" ")),
          o.style.bottom && n <= s
            ? (d = o.style.bottom.opposite)
            : o.style.bottom && s < n && n < l
            ? (d = o.style.bottom.fixed)
            : o.style.top && m < e && e < c
            ? (d = o.style.top.fixed)
            : o.style.top && c <= e
            ? (d = o.style.top.opposite)
            : (h = !1),
          o.style.isStuck !== h &&
            (o.holder.style.display = h ? "block" : "none"),
          h &&
            o.options.stuckClass &&
            (o.el.className += " " + o.options.stuckClass),
          h && (d += "margin-left:-" + (t - o.style.margin.left) + "px;"),
          o.options.fixWidth
            ? (d += "width:" + (h ? o.holder.offsetWidth + "px;" : "auto;"))
            : (d +=
                "min-width:" + (h ? o.holder.offsetWidth + "px;" : "auto;")),
          d !== o.style.current &&
            (o.el.setAttribute("style", d),
            (o.style.isStuck = h),
            (o.style.current = d)),
          o.options.holderAutoHeight &&
            h &&
            a != o.style.height &&
            ((o.holder.style.height = a + "px"), (o.style.height = a));
      }
    }
    function f() {
      b.length &&
        ((v = document.documentElement.scrollTop || document.body.scrollTop),
        g ||
          ((g = !0),
          s ? s(h) : (e && clearTimeout(e), (e = setTimeout(h, 15)))));
    }
    function p() {
      r || (a(window).on("scroll", f).on("resize", f), f(), (r = !0));
    }
    (a.fn.iSticky = function (e) {
      if (i) {
        if ("object" != typeof e || !e.force) return this;
        p();
      }
      if ("string" == typeof e && c[e])
        return c[e].apply(this, Array.prototype.slice.call(arguments, 1));
      var r = a.extend(
          {
            holderClass: "i-sticky__holder",
            holderAutoHeight: !0,
            debug: !1,
            fixWidth: !0,
            stuckClass: "",
          },
          e
        ),
        o = this.selector;
      return this.each(function () {
        var e,
          t,
          n = a(this),
          i = "sticky-" + ++l;
        n.hide(),
          (e = n.css("top")),
          (t = n.css("bottom")),
          n.show(),
          e || t
            ? (n
                .data("sticky-id", i)
                .after(
                  '<span class="' +
                    r.holderClass +
                    '" style="display:none;"></span>'
                ),
              (i = {
                id: i,
                el: this,
                parent: this.parentElement,
                holder: this.nextSibling,
                style: {
                  home: "position:static;",
                  top: void 0,
                  bottom: void 0,
                  current: "",
                  height: 0,
                  isStuck: !1,
                  margin: { left: parseInt(n.css("margin-left"), 10) },
                },
                options: {
                  holderClass: r.holderClass,
                  holderAutoHeight: r.holderAutoHeight,
                  fixWidth: r.fixWidth,
                  stuckClass: r.stuckClass || "",
                },
              }),
              "auto" !== e &&
                (i.style.top = {
                  fixed: "position:fixed;top:" + e + ";bottom:auto;",
                  opposite: "position:absolute;bottom:0;top:auto;",
                  px: parseInt(e, 10),
                }),
              "auto" !== t &&
                (i.style.bottom = {
                  fixed: "position:fixed;bottom:" + t + ";top:auto;",
                  opposite: "position:absolute;top:0;bottom:auto;",
                  px: parseInt(t, 10),
                }),
              b.push(i),
              f())
            : r.debug &&
              console.warn(
                "i-sticky: element `top` or `bottom` properties must be set in pixels",
                o,
                this
              );
      });
    }),
      i || p();
  })(jQuery),
  (function () {
    var t,
      s,
      e,
      n,
      i,
      l,
      c,
      r,
      o,
      a,
      u,
      d = document.querySelector(".it-header-sticky");
    function h(e, t, n) {
      var i, r, o, a;
      void 0 === t && (t = !0),
        e &&
          ((i = document.querySelector(".menu-wrapper")),
          t
            ? ((a = document.querySelector(".it-brand-wrapper")),
              (r = document.querySelector(".it-search-wrapper")),
              (o = document.querySelector(".it-user-wrapper")),
              (a = a ? a.cloneNode(!0) : null),
              (r = r ? r.cloneNode(!0) : null),
              (o = o ? o.cloneNode(!0) : null),
              a &&
                i
                  .insertBefore(a, i.childNodes[0])
                  .classList.add("cloned-header"),
              r && i.appendChild(r).classList.add("cloned-header"),
              o &&
                (i.appendChild(o).classList.add("cloned-header"),
                i.appendChild(o).classList.remove("show")))
            : ((a = document.getElementsByClassName("cloned-header")) &&
                Array.from(a).forEach(function (e) {
                  e.parentElement.removeChild(e);
                }),
              "function" == typeof n && n())),
        (d.nextElementSibling.style.paddingTop = t
          ? l + (e ? c - s : l - s) + "px"
          : "0px");
    }
    d &&
      ((a = document.querySelector(".custom-navbar-toggler")),
      (u = !1),
      (u = (a = a)
        ? "none" === (a = window.getComputedStyle(a)).display ||
          "hidden" === a.visibility
        : u),
      (t = !1),
      (a = void (s = 0)),
      (e = u),
      (u = document.querySelector(".it-header-slim-wrapper")),
      (n = document.querySelector(".it-header-center-wrapper")),
      (i = document.querySelector(".it-header-navbar-wrapper")),
      (l = (i && i.offsetHeight) || 0),
      (i = (u && u.offsetHeight) || 0),
      (c = i),
      e && l && (c = i + n ? n.offsetHeight : 0),
      (r = function () {
        (t = !0), d.classList.add("is-sticky"), h(e, !0);
      }),
      (o = function () {
        (t = !1), d.classList.remove("is-sticky"), h(e, !1);
      }),
      (a = function () {
        var e = l;
        window.scrollY + s >= c && !t
          ? (r(), e !== l && (s = l - e))
          : window.scrollY + s < c && t && o();
      }),
      window.addEventListener("scroll", a),
      a());
  })(),
  (function () {
    var h,
      t,
      n = document.getElementsByClassName("sticky-wrapper"),
      i = document.querySelector(".custom-navbar-toggler"),
      e = o(i),
      r = void 0;
    function o(e) {
      var t = !1;
      return (t = e
        ? "none" === (e = window.getComputedStyle(e)).display ||
          "hidden" === e.visibility
        : t);
    }
    n &&
      n.length &&
      ((h = !1),
      (t = function (c) {
        var u = function (e, t) {
            return c
              ? parseInt(
                  (window.getComputedStyle
                    ? getComputedStyle(e, null)
                    : e.currentStyle)[t]
                )
              : 0;
          },
          d = function (e, t, n) {
            return !c && e && "bottom" === n
              ? "0px"
              : !c && e && "top" === n
              ? "auto"
              : "bottom" === n
              ? ""
              : t + "px";
          },
          e = c
            ? document.querySelector(".it-header-navbar-wrapper")
            : document.querySelector(".it-header-center-wrapper");
        (r = function () {
          var l = e ? e.offsetHeight : 0;
          Array.from(n).forEach(function (e) {
            var t, n, i, r, o, a, s;
            (t = (e = e).offsetHeight),
              ((n = e.parentNode).style.position = "relative"),
              (i = n.offsetWidth || 0),
              (r = n.offsetHeight),
              (o = u(n, "paddingTop")),
              (a = u(n, "paddingRight")),
              (n = n.getBoundingClientRect().top || 0),
              (s = l + o),
              n <= l
                ? ((h = !0),
                  e.classList.add("is-sticky"),
                  (e.style.top = d(!0, s, "top")),
                  (e.style.bottom = d(!0, s, "bottom")),
                  (e.style.width = c ? i - a + "px" : ""))
                : h &&
                  l < n &&
                  ((h = !1),
                  e.classList.remove("is-sticky"),
                  (e.style.top = ""),
                  (e.style.bottom = ""),
                  (e.style.width = "")),
              h &&
                c &&
                (n < 0 && Math.abs(n) + t + o + l > r
                  ? e.classList.add("at-bottom")
                  : e.classList.remove("at-bottom"));
          });
        }),
          window.addEventListener("scroll", r),
          r();
      }),
      window.addEventListener("resize", function () {
        var e;
        r && (window.removeEventListener("scroll", r), (e = o(i)), t(e));
      }),
      t(e));
  })(),
  (window.isIe = isIe);
var styleNode = document.createElement("style"),
  __PUBLIC_PATH__ = window.__PUBLIC_PATH__ || "/bootstrap-italia/dist/fonts",
  ComponenteBase =
    ((styleNode.innerHTML =
      "\n/* Titillium+Web:300,400,600,700 */\n\n/* titillium-web-300 - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: normal;\n  font-weight: 300;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-300italic - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: italic;\n  font-weight: 300;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-regular - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: normal;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-italic - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: italic;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-600 - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: normal;\n  font-weight: 600;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-600italic - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: italic;\n  font-weight: 600;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-700 - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: normal;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* titillium-web-700italic - latin-ext_latin */\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: italic;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */\n}\n\n/* Lora:400,700 */\n\n/* lora-regular - latin-ext_latin */\n@font-face {\n  font-family: 'Lora';\n  font-style: normal;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-regular.svg#Lora') format('svg'); /* Legacy iOS */\n}\n\n/* lora-700 - latin-ext_latin */\n@font-face {\n  font-family: 'Lora';\n  font-style: normal;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700.svg#Lora') format('svg'); /* Legacy iOS */\n}\n\n/* lora-italic - latin-ext_latin */\n@font-face {\n  font-family: 'Lora';\n  font-style: italic;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-italic.svg#Lora') format('svg'); /* Legacy iOS */\n}\n\n/* lora-700italic - latin-ext_latin */\n@font-face {\n  font-family: 'Lora';\n  font-style: italic;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Lora/lora-v20-latin-ext_latin-700italic.svg#Lora') format('svg'); /* Legacy iOS */\n}\n\n/* Roboto+Mono:400,700 */\n\n/* roboto-mono-regular - latin-ext_latin */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.svg#RobotoMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-mono-700 - latin-ext_latin */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.svg#RobotoMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-mono-italic - latin-ext_latin */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: italic;\n  font-weight: 400;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.svg#RobotoMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-mono-700italic - latin-ext_latin */\n@font-face {\n  font-family: 'Roboto Mono';\n  font-style: italic;\n  font-weight: 700;\n  src: url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('" +
      __PUBLIC_PATH__ +
      "/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.svg#RobotoMono') format('svg'); /* Legacy iOS */\n}\n"),
    document.getElementsByTagName("head")[0].appendChild(styleNode),
    $(function () {
      ($.fn.autocomplete = function (e) {
        return (
          (e = $.extend({ data: {} }, e)),
          this.each(function () {
            var o = $(this),
              a = null,
              s = o.data("autocomplete");
            s &&
              Object.keys(s).length &&
              ((a = $('<ul class="autocomplete-list"></ul>')).insertAfter(
                $(this).next()
              ),
              o.on("keyup", function () {
                var e = o.val();
                if ((a.empty(), e.length))
                  for (var t in s) {
                    var n = new RegExp("(" + e + ")", "gi"),
                      n = s[t].text.replace(n, "<mark>$1</mark>"),
                      i = s[t].label ? "<em>" + s[t].label + "</em>" : "",
                      r = s[t].icon || "",
                      t = s[t].link || "#";
                    -1 !== n.toLowerCase().indexOf(e.toLowerCase()) &&
                      ($(this)
                        .closest(".form-group")
                        .find(".autocomplete-list")
                        .addClass("autocomplete-list-show"),
                      (t = $(
                        '<li>\n              <a href="' +
                          t +
                          '">\n                ' +
                          r +
                          '\n                <span class="autocomplete-list-text">\n                  <span>' +
                          n +
                          "</span>\n                  " +
                          i +
                          "\n                </span>\n              </a>\n             </li>"
                      )),
                      a.append(t));
                  }
                else
                  $(this)
                    .closest(".form-group")
                    .find(".autocomplete-list")
                    .removeClass("autocomplete-list-show");
              }));
          })
        );
      }),
        $(".autocomplete").autocomplete();
    }),
    $(function () {
      var e = $('a[data-attribute*="back-to-top"]');
      $(window).on("scroll", function () {
        e.toggleClass(
          "back-to-top-show",
          e.length && 100 <= $(this).scrollTop()
        );
      }),
        e.on("click", function () {
          $("body,html").animate({ scrollTop: 0 }, 800);
        });
    }),
    (function (r) {
      var e = "componenteBase",
        o = "bs.componente-base",
        t = r.fn[e],
        n = { CLICK_DATA_API: "click.bs.componente-base.data-api" },
        i = (function () {
          function i(e) {
            this._element = e;
          }
          return (
            (i.prototype.publicFunction = function (e) {
              console.log(r(e).data("value"), i.VERSION);
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = r(this),
                  t = e.data(o);
                if (
                  (t || ((t = new i(this)), e.data(o, t)), "string" == typeof n)
                ) {
                  if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                  t[n](this);
                }
              });
            }),
            (i._handleConsole = function (t) {
              return function (e) {
                e && e.preventDefault(), t.publicFunction(this);
              };
            }),
            _createClass2(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "1.0.0";
                },
              },
            ]),
            i
          );
        })();
      return (
        r(document).on(
          n.CLICK_DATA_API,
          ".componente-base",
          i._handleConsole(new i())
        ),
        (r.fn[e] = i._jQueryInterface),
        (r.fn[e].Constructor = i),
        (r.fn[e].noConflict = function () {
          return (r.fn[e] = t), i._jQueryInterface;
        }),
        i
      );
    })($)),
  Cookiebar = (function (r) {
    var e = "cookiebar",
      o = "bs.cookiebar",
      t = "." + o,
      n = r.fn[e],
      a = "cookies_consent",
      i = ".cookiebar",
      s = '[data-accept="cookiebar"]',
      l = {
        CLOSE: "close" + t,
        CLOSED: "closed" + t,
        LOAD_DATA_API: "load" + t + ".data-api",
        CLICK_DATA_API: "click" + t + ".data-api",
      },
      c = "cookiebar",
      u = "show",
      d = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.show = function (e) {
            r(e)
              .addClass(u)
              .attr("aria-hidden", "false")
              .attr("aria-live", "polite");
          }),
          (e.close = function (e) {
            e = e || this._element;
            e = this._getRootElement(e);
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              (this._setCookieEU(), this._removeElement(e));
          }),
          (e.dispose = function () {
            r.removeData(this._element, o), (this._element = null);
          }),
          (e._setCookieEU = function () {
            var e = new Date(),
              e =
                (e.setDate(e.getDate() + 30),
                escape("true") + ("; expires=" + e.toUTCString()));
            document.cookie = a + "=" + e + "; path=/";
          }),
          (e._getSelectorFromElement = function (e) {
            var t = e.getAttribute("data-target");
            (t && "#" !== t) ||
              (t = (e = e.getAttribute("href")) && "#" !== e ? e.trim() : "");
            try {
              return document.querySelector(t) ? t : null;
            } catch (e) {
              return null;
            }
          }),
          (e._getRootElement = function (e) {
            var t = this._getSelectorFromElement(e),
              n = !1;
            return (n = (n = t ? r(t)[0] : n) || r(e).closest("." + c)[0]);
          }),
          (e._triggerCloseEvent = function (e) {
            var t = r.Event(l.CLOSE);
            return r(e).trigger(t), t;
          }),
          (e._removeElement = function (e) {
            r(e)
              .removeClass(u)
              .attr("aria-hidden", "true")
              .attr("aria-live", "off"),
              this._destroyElement(e);
          }),
          (e._destroyElement = function (e) {
            r(e).detach().trigger(l.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = r(this),
                t = e.data(o);
              if (
                (t || ((t = new i(this)), e.data(o, t)), "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](this);
              }
            });
          }),
          (i._handleAccept = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          (i._handleConsent = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          (i._getCookieEU = function () {
            for (
              var e, t, n = document.cookie.split(";"), i = 0;
              i < n.length;
              i++
            )
              if (
                ((e = n[i].substr(0, n[i].indexOf("="))),
                (t = n[i].substr(n[i].indexOf("=") + 1)),
                (e = e.replace(/^\s+|\s+$/g, "")) == a)
              )
                return unescape(t);
          }),
          _createClass2(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.0.0";
              },
            },
          ]),
          i
        );
      })();
    return (
      r(document).on(l.CLICK_DATA_API, s, d._handleAccept(new d())),
      r(window).on(l.LOAD_DATA_API, function () {
        var e = r.makeArray(r(i));
        if (!d._getCookieEU())
          for (var t = e.length; t--; ) {
            var n = r(e[t]);
            d._jQueryInterface.call(n, "show");
          }
      }),
      (r.fn[e] = d._jQueryInterface),
      (r.fn[e].Constructor = d),
      (r.fn[e].noConflict = function () {
        return (r.fn[e] = n), d._jQueryInterface;
      }),
      d
    );
  })($);
function notificationShow(e, t) {
  $("#" + e).fadeIn(300),
    $("#" + e).hasClass("dismissable") ||
      ($("#" + e).fadeIn(300),
      (t = "number" == typeof t ? t : 7e3),
      setTimeout(function () {
        $("#" + e).fadeOut(100);
      }, t));
}
$(function () {
  $(".navbar .dropdown").on("show.bs.dropdown", function () {
    window.matchMedia("(max-width: 992px)").matches &&
      $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(180);
  }),
    $(".navbar .dropdown").on("hide.bs.dropdown", function () {
      window.matchMedia("(max-width: 992px)").matches &&
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(180);
    }),
    $(window).resize(function () {
      window.matchMedia("(min-width: 993px)").matches &&
        $(".navbar .dropdown-menu.show").removeAttr("style");
    });
  function n(e) {
    return "dropdown" === e.getAttribute("data-toggle");
  }
  function i(e, t) {
    var n = Array.prototype.slice.call(
        e.closest(o.dropDownMenu).querySelectorAll(o.listItem)
      ),
      e = n.indexOf(e),
      i = null;
    if (t.isLimit && t.isDirectionTop && 0 < e) i = n[0];
    else if (t.isLimit && e < n.length - 1) i = n[n.length - 1];
    else if (t.isDirectionTop) {
      if (!t.loop && 0 === e) return;
      i = n[0 === e ? n.length - 1 : e - 1];
    } else {
      if (!t.loop && e === n.length - 1) return;
      i = n[e === n.length - 1 ? 0 : e + 1];
    }
    i && i.focus();
  }
  function t(e) {
    var t = e.key;
    "function" == typeof a[t] && (e.preventDefault(), a[t](e.currentTarget));
  }
  var r = "show",
    o = {
      dropDown: ".dropdown",
      dropDownMenu: ".dropdown-menu",
      toggle: '[data-toggle="dropdown"]',
      listItem: "a.list-item",
    },
    a = {
      ArrowDown: function (e) {
        var t;
        n(e)
          ? (t = e.parentNode.querySelector(o.dropDownMenu)) &&
            t.classList.contains(r) &&
            (t = t.querySelector(o.listItem)) &&
            t.focus()
          : i(e, { loop: !1 });
      },
      ArrowUp: function (e) {
        n(e) || i(e, { isDirectionTop: !0, loop: !1 });
      },
    };
  $(o.toggle).on("keydown", function (e) {
    t(e);
  }),
    $(o.dropDownMenu + " " + o.listItem).on("keydown", function (e) {
      t(e);
    });
}),
  $(function () {
    function e() {
      $("body")
        .find(t)
        .removeClass("valid invalid")
        .each(function (e, t) {
          var t = $(t),
            n = !!t.val(),
            i = !!t.attr("placeholder");
          (n || i) &&
            $("label[for='" + t.attr("id") + "']")
              .css("transition", "none")
              .addClass("active"),
            n ||
              i ||
              $("label[for='" + t.attr("id") + "']").removeClass("active");
        });
    }
    var t =
        'input[type="text"],input[type="password"],input[type="email"],input[type="email"],input[type="url"],input[type="tel"],input[type="number"],input[type="search"],textarea',
      n = 'input[type="file"]',
      i =
        ($(document)
          .on("focus", t, function (e) {
            e = "label[for='" + $(e.target).attr("id") + "']";
            $(e).addClass("active");
          })
          .on("blur", t, function (e) {
            var e = $(e.target),
              t = !e.val(),
              n = !e.attr("placeholder");
            t &&
              n &&
              $("label[for='" + e.attr("id") + "']").removeClass("active");
          })
          .on("change", t, function (e) {
            e = $(e.target);
            i(e), r(e);
          })
          .on("blur", n, function (e) {
            e = $(e.target);
            $("label[for='" + e.attr("id") + "']").addClass("active");
          })
          .on("change", n, function (e) {
            for (
              var t = $(e.target),
                n = e.currentTarget.files.length,
                i = "",
                r = "",
                o = 0;
              o < n;
              o++
            )
              var a = parseInt(e.currentTarget.files[o].size, 10) / 1024,
                a = Math.round(a),
                i = i + e.currentTarget.files[o].name + " (" + a + "kb); ";
            1 < n && (r = n + " file da caricare: "),
              $(
                "label[for='" + t.attr("id") + "']label[class='form-file-name']"
              ).text(r + i);
          }),
        function (e) {
          var t = $("label[for='" + e.attr("id") + "']"),
            n = e.val().length,
            e = !!e.attr("placeholder");
          n || e ? t.addClass("active") : t.removeClass("active");
        }),
      r = function (e) {
        var t, n, i;
        e.hasClass("validate") &&
          ((n = !(t = e.val()).length),
          (i = !e[0].validity.badInput),
          n && i
            ? e.removeClass("valid").removeClass("invalid")
            : ((n = e.is(":valid")),
              (i = Number(e.attr("length")) || 0),
              n && (!i || i > t.length)
                ? e.removeClass("invalid").addClass("valid")
                : e.removeClass("valid").addClass("invalid")));
      };
    e(), $(document).on("changed.bs.form-control", e);
  }),
  $(function () {
    var t;
    $(document)
      .on("keydown mousedown", function (e) {
        t = "mousedown" === e.type;
      })
      .on("focusin", function (e) {
        t &&
          e.target &&
          ($(e.target).addClass("focus--mouse"),
          $(e.target).attr("data-focus-mouse", !0));
      })
      .on("focusout", function (e) {
        e.target &&
          ($(e.target).removeClass("focus--mouse"),
          $(e.target).attr("data-focus-mouse", !1));
      });
  }),
  $(function () {
    $('a[data-attribute*="forward"]').on("click", function (e) {
      var t = $(this.hash);
      t.length &&
        (e.preventDefault(),
        $("html, body").animate({ scrollTop: t.offset().top }, 500));
    });
  }),
  $(function () {
    var e = $(".custom-navbar-toggler"),
      t = $(".close-div"),
      n = $(".overlay"),
      i = $(".it-back-button");
    $(e).on("click", function () {
      var e = $(this).attr("data-target"),
        t = $(e).find(".overlay");
      $(this).attr("aria-expanded", "true"),
        $(i).fadeIn(),
        $(e).show(),
        $(t).fadeIn(),
        $(e).addClass("expanded");
    }),
      $(n).on("click", function () {
        var e = $(this).closest(".navbar-collapsable"),
          t = $(this).closest(".navbar").find(".custom-navbar-toggler"),
          n = $(e).find(".overlay");
        $(t).attr("aria-expanded", "false"),
          $(e).removeClass("expanded"),
          $(n).fadeOut(),
          setTimeout(function () {
            $(e).hide();
          }, 300);
      }),
      $(t).on("click", function () {
        var e = $(this).closest(".navbar-collapsable"),
          t = $(this).closest(".navbar").find(".custom-navbar-toggler"),
          n = $(e).find(".overlay");
        $(t).attr("aria-expanded", "false"),
          $(e).removeClass("expanded"),
          $(n).fadeOut(),
          setTimeout(function () {
            $(e).hide();
          }, 300);
      });
  }),
  $(function () {
    var n = $(".overlay"),
      e = $(".it-back-button");
    $('.it-bottom-navscroll ul li a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      var t = this.hash;
      $("html, body").animate(
        { scrollTop: $(t).offset().top },
        600,
        function () {
          history.pushState
            ? history.pushState(null, null, t)
            : (location.hash = t);
        }
      ),
        $(n).trigger("click");
    }),
      $(e).click(function (e) {
        $(n).trigger("click"), $(this).fadeOut(), e.preventDefault();
      }),
      $(window)
        .on("scroll", function () {
          var e = $(".it-page-sections-container").length
              ? $(".it-page-sections-container").offset().top
              : 0,
            i = $(window).scrollTop() - e;
          $(".it-page-section").each(function (e) {
            var t, n;
            $(this).position().top <= 10 + i &&
              ($(".it-navscroll-wrapper .menu-wrapper a.active").removeClass(
                "active"
              ),
              $(".it-navscroll-wrapper .menu-wrapper a")
                .eq(e)
                .addClass("active"),
              (t = $(".it-navscroll-wrapper .menu-wrapper a")
                .eq(e)
                .closest("ul")
                .prev("a")),
              (n = $(t).closest("ul").prev("a")),
              $(t).addClass("active"),
              $(n).addClass("active"),
              (t = $(".it-navscroll-wrapper .menu-wrapper a")
                .eq(e)
                .find("span")
                .text()),
              (e = (n = $(".it-navscroll-wrapper .custom-navbar-toggler")).find(
                "span.it-list"
              )),
              n.text(t),
              n.prepend(e));
          });
        })
        .scroll();
  }),
  $(function () {
    $(".go-back").on("click", function () {
      return window.history.back(), !1;
    });
  }),
  $(document).on("click", ".notification-close", function () {
    $(this).closest(".notification").fadeOut(100);
  }),
  $(function () {
    $(".upload-dragdrop:not(.success)")
      .on(
        "drag dragstart dragend dragover dragenter dragleave drop",
        function (e) {
          e.preventDefault(), e.stopPropagation();
        }
      )
      .on("dragover dragenter", function () {
        $(this).addClass("dragover");
      })
      .on("dragleave dragend drop", function () {
        $(this).removeClass("dragover");
      })
      .on("drop", function () {
        $(this).addClass("loading"),
          $(this).find(".upload-progress").circularloader({
            backgroundColor: "#ffffff",
            fontColor: "#000000",
            fontSize: "40px",
            radius: 130,
            progressBarBackground: "transparent",
            progressBarColor: "#0073e6",
            progressBarWidth: 96,
            progressPercent: 0,
          });
      });
  });
var progressDonut = (function (n) {
    return {
      generate: function (e, t) {
        n(e).circularloader({
          backgroundColor: "#fff",
          fontColor: "#000",
          fontSize: 40,
          radius: 130,
          progressBarBackground: "transparent",
          progressBarColor: "#0073e6",
          progressBarWidth: 96,
          progressPercent: t,
        }),
          n(e)
            .next()
            .html("Progresso " + t + "%");
      },
      update: function (e, t) {
        n(e).circularloader({ progressPercent: t });
      },
    };
  })($),
  numbers =
    ($(function () {
      $(".it-has-checkbox").on("click", function (e) {
        var t = $(this).find("input");
        $(t).prop("checked")
          ? ($(t).prop("checked", !1), $(this).removeClass("active"))
          : ($(t).prop("checked", !0), $(this).addClass("active")),
          e.preventDefault();
      });
    }),
    $(function () {
      var e = window.navigator.userAgent;
      /msie|Trident.*rv[ :]*11\./gi.test(e) &&
        $(".img-wrapper").each(function () {
          var e = $(this),
            t = e.find("img").prop("src");
          t &&
            e
              .css("backgroundImage", "url(" + t + ")")
              .addClass("custom-object-fit");
        });
    }),
    [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
  timeRegEx = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/i;
function hideInvisibleCards(e) {
  $(e).find(".owl-item:not(.active)").attr("aria-hidden", "true"),
    $(e)
      .find(".owl-item:not(.active)")
      .find("a", "button")
      .attr("tabindex", -1);
}
function showVisibleCards(e) {
  $(e).find(".owl-item").removeAttr("aria-hidden"),
    $(e).find(".owl-item").find("a", "button").removeAttr("tabindex");
}
$(document).ready(function () {
  function x(e) {
    return [8, 9, 13].includes(e);
  }
  function C(e, t, n, i, r) {
    e.hasClass("is-open") &&
      (e.fadeOut(100).toggleClass("is-open").attr("aria-hidden", "true"),
      n && i && ((e = n.attr("value") + ":" + i.attr("value")), t.val(e)),
      T(t, r));
  }
  var k = {};
  function T(e, t) {
    var n = e.val();
    n &&
      ((e = e.siblings("label")),
      ("" != n ? n.match(timeRegEx) : "")
        ? e.removeClass("error-label").html(k[t])
        : e.addClass("error-label").html("Formato ora non valido (hh:mm)"));
  }
  $(".it-timepicker-wrapper").each(function (i) {
    function t(e, t) {
      var n = y(e.val());
      e.attr("aria-valuenow", n), _(null, t);
    }
    var n,
      r,
      o,
      a,
      s,
      l = "00",
      c = "00",
      e = $(this),
      u = e.find(".txtTime"),
      d = e.find(".btn-time"),
      h = e.find(".spinner-control"),
      f = e.find(".spinnerHour"),
      p = e.find(".spinnerMin"),
      m = e.find(".btnHourUp"),
      g = e.find(".btnHourDown"),
      v = e.find(".btnMinUp"),
      b = e.find(".btnMinDown"),
      y = function (e) {
        return (e = e < 0 ? 0 : e) < 10 ? "0" + e : e;
      },
      w = function (e) {
        (s = e.closest(".spinner").find("input")),
          (n = parseInt(s.attr("aria-valuemin"))),
          (r = parseInt(s.attr("aria-valuemax"))),
          (o = parseInt(s.attr("aria-valuenow"))),
          (a = parseInt(s.attr("bb-skip")));
      },
      _ = function (e, t) {
        switch ((w(t), e)) {
          case "up":
            (!r || o < r) && o++;
            break;
          case "down":
            (!n || n < o) && o--;
        }
        if (e && -1 < a)
          switch (!0) {
            case "up" === e && a === o:
              o++;
              break;
            case "down" === e && a === o:
              o--;
          }
        switch (!0) {
          case t.hasClass("btnHourUp") || t.hasClass("btnHourDown"):
            l = y(o);
            break;
          case t.hasClass("btnMinUp") || t.hasClass("btnMinDown"):
            c = y(o);
        }
        s.val(y(o)),
          s.attr("value", y(o)),
          s.attr("aria-valuenow", y(o)),
          u.val(l + ":" + c).change();
      };
    (k[i] = u.siblings("label").text()),
      e
        .find(".spinner-control button")
        .attr("aria-hidden", "true")
        .attr("tabindex", "-1"),
      d.on("click", function (e) {
        e.stopPropagation(),
          e.preventDefault(),
          h.hasClass("is-open")
            ? C(h, u, f, p, i)
            : h.toggleClass("is-open").attr("aria-hidden", "false").fadeIn(100);
      }),
      u
        .on("keyup", function (e) {
          var t,
            e = e.which || e.keyCode,
            n = u.val();
          if (
            (n.includes(":")
              ? ((t = n.split(":")),
                f.attr("aria-valuenow", t[0].substring(0, 2)),
                f.attr("value", t[0].substring(0, 2)),
                f.val(t[0].substring(0, 2)),
                (l = t[0].substring(0, 2)),
                p.attr("aria-valuenow", t[1].substring(0, 2)),
                p.attr("value", t[1].substring(0, 2)),
                p.val(t[1].substring(0, 2)),
                (c = t[1].substring(0, 2)))
              : (f.attr("aria-valuenow", n.substring(0, 2)),
                f.attr("value", n.substring(0, 2)),
                f.val(n.substring(0, 2)),
                (l = n.substring(0, 2))),
            13 === e)
          )
            return T(u, i);
        })
        .on("focus", function (e) {
          e.stopPropagation(), u.val() && T(u, i);
        })
        .on("blur", function () {
          u.val() && T(u, i);
        }),
      m.on("click", function (e) {
        _("up", m, "click hour up"), e.preventDefault();
      }),
      g.on("click", function (e) {
        _("down", g, "click hour down"), e.preventDefault();
      }),
      v.on("click", function (e) {
        _("up", v, "click min up"), e.preventDefault();
      }),
      b.on("click", function (e) {
        _("down", b, "click min down"), e.preventDefault();
      }),
      f
        .on("keydown", function (e) {
          var e = e.which || e.keyCode,
            t = numbers.includes(e);
          switch (!0) {
            case 38 === e:
              m.trigger("click");
              break;
            case 40 === e:
              g.trigger("click");
              break;
            case x(e) || t:
              return !0;
          }
          return !1;
        })
        .on("keyup", function (e) {
          e = e.which || e.keyCode;
          numbers.includes(e) && t(f, m);
        }),
      p
        .on("keydown", function (e) {
          var e = e.which || e.keyCode,
            t = numbers.includes(e);
          switch (!0) {
            case 38 === e:
              v.trigger("click");
              break;
            case 40 === e:
              b.trigger("click");
              break;
            case x(e) || t:
              return !0;
          }
          return !1;
        })
        .on("keyup", function (e) {
          e = e.which || e.keyCode;
          numbers.includes(e) && t(p, v);
        }),
      $(document).on("click", function () {
        C(h, u, f, p, i);
      }),
      h.on("click", function (e) {
        e.stopPropagation();
      });
  });
}),
  $(function () {
    function a(e) {
      var t = e.closest(".input-number");
      t.hasClass("input-number-adaptive") &&
        (t.hasClass("input-number-percentage") ||
          (e.css("width", "calc(44px + " + e.val().length + "ch)"),
          isIe() &&
            e.css("width", "calc(44px + (1.5 * " + e.val().length + "ch))")),
        t.hasClass("input-number-currency") &&
          (e.css("width", "calc(40px + 44px + " + e.val().length + "ch)"),
          isIe() &&
            e.css(
              "width",
              "calc(40px + 44px + (1.5 * " + e.val().length + "ch))"
            )));
    }
    $(".input-number input[type=number]").each(function () {
      a($(this));
    }),
      $(".input-number button").click(function (e) {
        e.preventDefault();
        var t,
          n,
          i,
          r,
          e = $(this).closest(".input-number").find("input[type=number]"),
          o = parseFloat(e.val());
        isNaN(o) ||
          ((t = 0),
          (n = parseFloat(e.attr("max"))),
          (i = parseFloat(e.attr("min"))),
          (r = parseFloat(e.attr("step")) || 1),
          $(this).hasClass("input-number-add") &&
            (t = !isNaN(n) && n <= o + r ? n : o + r),
          $(this).hasClass("input-number-sub") &&
            (t = !isNaN(i) && o - r <= i ? i : o - r),
          e.val(t).trigger("change")),
          a(e);
      }),
      $(".input-number input[type=number]").change(function () {
        var e,
          t,
          n = $(this),
          i = parseFloat(n.val()),
          r = parseInt(n.data("digits"));
        isNaN(i) ||
          ((e = parseFloat(n.attr("max"))),
          (t = parseFloat(n.attr("min"))) && i < t && (i = t),
          e && e < i && (i = e),
          r && (i = i.toFixed(r)),
          n.val(i)),
          a(n);
      }),
      isIe() &&
        $("input[type=number]").on("keyup", function (e) {
          e = e && e.target.value;
          this.value = e.replace(/[^0-9,.]/g, "");
        });
  }),
  $(function () {
    var e,
      t,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      f,
      p,
      m,
      g,
      v,
      b,
      y,
      w,
      _,
      x,
      C,
      k,
      T,
      E,
      S,
      I,
      L,
      D,
      A,
      O,
      P,
      M = $(".owl-carousel.it-carousel-all");
    $(M).each(function () {
      $(this)
        .closest(".it-carousel-wrapper")
        .hasClass("it-carousel-landscape-abstract-three-cols") &&
        ((r = []),
        (o = 300),
        (a = 500),
        (s = 200),
        (d = !(u = c = l = !(t = !(e = !0)))),
        (m = !(p = !(h = "page"))),
        (g = 1),
        (w = !(y = !(b = n = 24))),
        (_ = 2),
        (x = v = 40),
        (T = !(k = !(C = 24))),
        (D = !(L = !(E = i = 3))),
        (A = 3),
        (P = O = I = S = f = 0),
        $(this).hasClass("it-card-bg") &&
          ((x = v = 40), (O = S = 12), (P = I = C = b = 24)),
        $(this).hasClass("it-img-card") &&
          ((x = v = 40), (O = S = 0), (P = I = C = b = 24)),
        $(this).hasClass("it-img-card") &&
          $(this).hasClass("it-big-img") &&
          ((t = !0),
          (b = v = 0),
          (x = 160),
          (C = 24),
          (O = S = 320),
          (P = I = 48),
          (A = E = _ = 1))),
        $(this)
          .closest(".it-carousel-wrapper")
          .hasClass("it-carousel-landscape-abstract-3") &&
          $(this).hasClass("it-img-card") &&
          $(this).hasClass("it-standard-image") &&
          ((t = !0),
          (v = 40),
          (g = 1),
          (_ = 2),
          (S = 68),
          (O = x = 48),
          (P = I = C = b = 24),
          (A = E = 3)),
        $(this)
          .closest(".it-carousel-wrapper")
          .hasClass("it-calendar-wrapper") &&
          ((t = !(e = !0)),
          (r = []),
          (o = 300),
          (a = 500),
          (s = 200),
          (d = !(u = c = l = !(n = 0))),
          (m = !(p = !(h = "page"))),
          (g = 1),
          (w = !(y = !(v = 40))),
          (_ = 2),
          (T = !(k = !(x = 40))),
          (D = !(L = !(E = i = 4))),
          (A = 4),
          (P = O = I = S = C = b = f = 0),
          $(this).hasClass("it-card-bg") &&
            ((x = v = 40), (P = O = I = S = C = b = 0)),
          $(this).hasClass("it-img-card") &&
            ((x = v = 40), (P = O = I = S = C = b = 0)),
          $(this).hasClass("it-img-card") &&
            $(this).hasClass("it-big-img") &&
            ((t = !0),
            (x = 160),
            (O = S = 320),
            (P = I = C = b = v = 0),
            (A = E = _ = 1)),
          $(this).hasClass("it-img-card") &&
            $(this).hasClass("it-standard-image") &&
            ((t = !0),
            (v = 40),
            (g = 1),
            (C = _ = 2),
            (S = 68),
            (O = x = 48),
            (P = I = b = 0),
            (A = E = 4))),
        $(this)
          .closest(".it-carousel-wrapper")
          .hasClass("it-carousel-landscape-abstract") &&
          ((r = []),
          (o = 300),
          (a = 500),
          (s = 200),
          (d = !(u = c = l = !(t = !(e = !0)))),
          (m = !(p = !(h = "page"))),
          (w = !(y = !(b = n = 24))),
          (T = !(k = !(C = x = 24))),
          (D = !(L = !(E = _ = g = i = 1))),
          (A = 1),
          (P = O = I = S = v = f = 0)),
        $(this).owlCarousel &&
          $(this).owlCarousel({
            nav: e,
            loop: t,
            margin: n,
            items: i,
            navText: r,
            navSpeed: o,
            smartSpeed: a,
            dotsSpeed: s,
            navElement: "button",
            dotElement: "button",
            controlsAriaHidden: l,
            mouseDrag: c,
            touchDrag: u,
            dots: d,
            slideBy: h,
            stagePadding: f,
            responsive: {
              0: { nav: p, dots: m, items: g, stagePadding: v, margin: b },
              768: { nav: y, dots: w, stagePadding: x, items: _, margin: C },
              992: { nav: k, dots: T, items: E, stagePadding: S, margin: I },
              1200: { nav: L, dots: D, stagePadding: O, items: A, margin: P },
            },
            onInitialized: function (e) {
              hideInvisibleCards(e.target);
              var t = "Elemento {{i}} di {{n}}",
                n = "Slide {{i}} di {{n}} del carousel",
                i =
                  ($(e.target).attr("data-slide-desc") &&
                    (t = $(e.target).attr("data-slide-desc")),
                  $(e.target).attr("data-dot-desc") &&
                    (n = $(e.target).attr("data-dot-desc")),
                  $(e.target).find(".owl-item")),
                r =
                  ($(i).each(function (e) {
                    e = (e = t.replace("{{i}}", e + 1)).replace(
                      "{{n}}",
                      i.length
                    );
                    $(this).attr("aria-label", e);
                  }),
                  $(e.target).find(".owl-dot"));
              $(r).each(function (e) {
                e = (e = n.replace("{{i}}", e + 1)).replace("{{n}}", r.length);
                $(this).attr("aria-label", e);
              });
            },
            onTranslate: function (e) {
              showVisibleCards(e.target);
            },
            onTranslated: function (e) {
              hideInvisibleCards(e.target);
            },
          });
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e, t, n, i, r, o, a, s, l, c, u, d, h, f;
    void 0 !== window.Splide &&
      ((e = document.getElementsByClassName("splide")),
      Array.prototype.forEach.call(e, function (e) {
        e.classList.contains("it-carousel-landscape-abstract-three-cols")
          ? ((f = "slide"),
            (t = 1),
            (n = 2),
            (i = 3),
            (a = o = r = 24),
            (s = { left: 40, right: 40 }),
            (l = { left: 40, right: 40 }),
            (h = d = u = !(c = { left: 0, right: 0 })),
            e.classList.contains("it-big-img")
              ? ((f = "loop"),
                (i = n = t = 1),
                (o = 24),
                (a = 48),
                (s = { left: (r = 0), right: 0 }),
                (l = { left: 160, right: 160 }),
                (c = { left: 320, right: 320 }))
              : e.classList.contains("it-standard-image") &&
                ((f = "loop"),
                (t = 1),
                (n = 2),
                (i = 3),
                (a = o = r = 24),
                (s = { left: 40, right: 40 }),
                (l = { left: 48, right: 48 }),
                (c = { left: 48, right: 48 })))
          : e.classList.contains("it-carousel-landscape-abstract") &&
            ((f = "slide"),
            (i = n = t = 1),
            (s = { left: 0, right: 0 }),
            (l = { left: (a = o = r = 24), right: 24 }),
            (h = d = u = !(c = { left: 0, right: 0 }))),
          new Splide(e, {
            type: f,
            perPage: i,
            gap: a,
            padding: c,
            arrows: h,
            slideFocus: !0,
            i18n: {
              prev: "Slide precedente",
              next: "Slide successiva",
              first: "Vai alla prima slide",
              last: "Vai all’ultima slide",
              slideX: "Vai alla slide %s",
              pageX: "Vai a pagina %s",
              play: "Attiva autoplay",
              pause: "Pausa autoplay",
            },
            breakpoints: {
              768: { perPage: t, gap: r, padding: s, arrows: u },
              992: { perPage: n, gap: o, padding: l, arrows: d },
            },
          }).mount();
      }));
  }),
  $(function () {
    var e = $(".transfer-header input"),
      t = $(".transfer-group input"),
      r = $(".it-transfer-block").find("a.transfer"),
      o = $(".it-transfer-block").find("a.backtransfer"),
      i = $(".it-transfer-block").find("a.reset"),
      s = $(".source .transfer-group .form-check"),
      l = $(".target .transfer-group .form-check"),
      c = s.length,
      u = l.length;
    function d(e) {
      e.removeClass("active")
        .attr("disabled", "disabled")
        .attr("aria-disabled", "true");
    }
    function a(e) {
      e.addClass("active").removeAttr("disabled").removeAttr("aria-disabled");
    }
    function h(e, t) {
      var n = e.find(".transfer-group input:checked"),
        i = n.closest(".form-check"),
        r = e.find(".transfer-header input"),
        o = e.find(".transfer-header span.num"),
        n = n.length,
        e = e.find(".transfer-group input").length,
        a = t.find(".transfer-group"),
        s = t.find(".transfer-group input").length + n,
        l = t.find(".transfer-header span.num"),
        t = t.find(".transfer-header input"),
        i =
          (i.each(function () {
            $(this).detach().appendTo(a).find("input").prop("checked", !1);
          }),
          e - n),
        e = s;
      o.text(i),
        l.text(e),
        0 == i && r.prop("disabled", !0),
        0 < e && t.prop("disabled", !1),
        r.removeClass("semi-checked").prop("checked", !1);
    }
    $(s).each(function () {
      0;
    }),
      $(l).each(function () {
        0;
      }),
      $(e).on("click", function () {
        var e,
          t,
          n,
          i = $(this).closest(".it-transfer-wrapper");
        (e = $((i = i)).find(".transfer-group input")),
          (t = $(i).find(".transfer-group input:checked")),
          (n = $(i).find(".transfer-header input")),
          (r = i.closest(".it-transfer-block").find("a.transfer")),
          (o = i.closest(".it-transfer-block").find("a.backtransfer")),
          0 < t.length
            ? ($(e).prop("checked", !1),
              $(n).removeClass("semi-checked").prop("checked", !1),
              i.hasClass("source") ? d(r) : d(o))
            : ($(e).prop("checked", !0), i.hasClass("source") ? a(r) : a(o));
      }),
      $(t).on("click", function () {
        var e,
          t,
          n,
          i = $(this).closest(".it-transfer-wrapper");
        (e = $((i = i)).find(".transfer-group input")),
          (t = $(i).find(".transfer-group input:checked")),
          (n = $(i).find(".transfer-header input")),
          (r = i.closest(".it-transfer-block").find("a.transfer")),
          (o = i.closest(".it-transfer-block").find("a.backtransfer")),
          0 == t.length
            ? (n.removeClass("semi-checked").prop("checked", !1),
              i.hasClass("source") ? d(r) : d(o))
            : (t.length == e.length
                ? n.removeClass("semi-checked").prop("checked", !0)
                : n.addClass("semi-checked").prop("checked", !1),
              i.hasClass("source") ? a(r) : a(o));
      }),
      $(r).on("click", function (e) {
        var t = $(this).closest(".it-transfer-block").find(".source"),
          n = $(this).closest(".it-transfer-block").find(".target");
        a((i = $(this).closest(".it-transfer-block").find("a.reset"))),
          d($(this)),
          h(t, n),
          e.preventDefault();
      }),
      $(o).on("click", function (e) {
        var t = $(this).closest(".it-transfer-block").find(".source"),
          n = $(this).closest(".it-transfer-block").find(".target");
        a((i = $(this).closest(".it-transfer-block").find("a.reset"))),
          d($(this)),
          h(n, t),
          e.preventDefault();
      }),
      $(i).on("click", function (e) {
        var t,
          n,
          i,
          r = $(this).closest(".it-transfer-block"),
          o = r.find("a.transfer"),
          a = r.find("a.backtransfer");
        d(o),
          d(a),
          d($(this)),
          (a = (o = r).find(".source .transfer-group")),
          (r = o.find(".target .transfer-group")),
          (t = o.find(".source .transfer-header span.num")),
          (n = o.find(".target .transfer-header span.num")),
          (i = o.find(".transfer-header input")),
          (o = o.find(".transfer-group input")),
          $(a).find(".form-check").detach(),
          $(r).find(".form-check").detach(),
          $(a).append(s),
          $(r).append(l),
          $(t).text(c),
          $(n).text(u),
          $(i).prop("disabled", !1).removeClass("semi-checked"),
          $(i).prop("checked", !1),
          $(o).prop("checked", !1),
          e.preventDefault();
      });
  }),
  $(function () {
    function n() {
      $(".dropdown-menu li.selected")
        .find('input[type="checkbox"]')
        .prop("checked", !0),
        $(".dropdown-menu li:not(.selected)")
          .find('input[type="checkbox"]')
          .prop("checked", !1);
    }
    (jQuery.fn.setOptionsToSelect = function (e) {
      var t = $(this).find("select");
      return (
        $(t).off("changed.bs.select").selectpicker("destroy").empty(),
        e.forEach(function (e) {
          $(t).append($("<option>", { value: e.value, text: e.text }));
        }),
        $(t).selectpicker("refresh").on("changed.bs.select", n),
        this
      );
    }),
      $(".bootstrap-select-wrapper select")
        .selectpicker()
        .on("changed.bs.select", n);
    var e = $(".bootstrap-select-wrapper");
    e.find("select option.bs-title-option").text("Nessuna opzione"),
      e.find("select option[data-content]").text("Annulla"),
      e.find("button.dropdown-toggle").removeAttr("role"),
      e.find("div.filter-option").replaceWith(function () {
        return $("<span />")
          .addClass("filter-option")
          .append($(this).contents());
      }),
      e.find("div.filter-option-inner").replaceWith(function () {
        return $("<span />")
          .addClass("filter-option-inner")
          .append($(this).contents());
      }),
      e.find("div.filter-option-inner-inner").replaceWith(function () {
        return $("<span />")
          .addClass("filter-option-inner-inner")
          .append($(this).contents());
      }),
      e
        .find(".bs-searchbox input")
        .attr("title", "Cerca")
        .attr("aria-expanded", "false");
  }),
  $(function () {
    $(".rating.rating-label input[type=radio]").on("click", function () {
      var e = $(this).val(),
        t = 1 == e ? "stella" : "stelle";
      $(this)
        .closest(".rating-label")
        .find("legend span:not(.sr-only)")
        .text(e + " " + t);
    });
  }),
  $(function () {
    ($.fn.dimmerShow = function () {
      return this.each(function () {
        "flex" != $(this).css("display") &&
          $(this).css("display", "flex").hide().fadeIn(200);
      });
    }),
      ($.fn.dimmerHide = function () {
        return this.each(function () {
          $(this).fadeOut(200);
        });
      });
  }),
  $(document).ready(function () {
    var e = $(".it-datepicker-wrapper");
    0 < e.length &&
      e.each(function () {
        var e = $(this).find(".input-group").find(".it-date-datepicker"),
          t = $(this).find(".invalid-feedback"),
          n = $(this).find(".valid-feedback");
        e.after(t), e.after(n);
      });
  });
var BOOTSTRAP_ITALIA_VERSION = "1.6.2",
  CONFIG_DEFAULT = {
    errorFieldCssClass: "is-invalid",
    errorLabelCssClass: "just-validate-error-label",
  },
  JustValidateIt = (function () {
    function e(e, t) {
      return (
        (this.formSelector = e),
        (this.target = document.querySelector(e)),
        (this.validate = new JustValidate(e, t)),
        (this.config = Object.assign(
          {},
          CONFIG_DEFAULT,
          this.validate.globalConfig
        )),
        (this.formItems = []),
        this.init(),
        this.validate
      );
    }
    var t = e.prototype;
    return (
      (t.init = function () {
        var n = this;
        this.target.querySelectorAll("input, select").forEach(function (e) {
          var t = new ClassWatcher(
            e,
            n.config.errorFieldCssClass,
            function () {
              return n.onInputError(e);
            },
            function () {
              return n.onInputErrorRemove(e);
            },
            !0
          );
          e.id || e.setAttribute("id", "justvalidate-input-" + Math.random()),
            n.formItems.push({ item: e, watcher: t });
        }),
          this.target.querySelectorAll("fieldset").forEach(function (e) {
            var t;
            0 <
              e.querySelectorAll("input[type=radio],input[type=checkbox]")
                .length &&
              ((t = new ContentWatcher(
                e,
                "." + n.config.errorLabelCssClass,
                function () {
                  return n.onFieldsetError(e);
                },
                function () {
                  return n.onFieldsetErrorRemove(e);
                }
              )),
              e.id ||
                e.setAttribute("id", "justvalidate-fieldset-" + Math.random()),
              n.formItems.push({ item: e, watcher: t }));
          });
      }),
      (t.onInputError = function (n) {
        var e = this.getErrorMessages(n),
          i = [];
        e.forEach(function (e, t) {
          t = n.id + "-error-" + t;
          e.setAttribute("id", t), i.push(t);
        }),
          0 < i.length &&
            (n.setAttribute("aria-describedby", i.join(" ")),
            n.setAttribute("aria-invalid", "true"));
      }),
      (t.onInputErrorRemove = function (e) {
        e.removeAttribute("aria-describedby"),
          e.setAttribute("aria-invalid", "false");
      }),
      (t.onFieldsetError = function (n) {
        var e = this.getErrorMessages(n),
          i = [],
          r = [];
        e.forEach(function (e, t) {
          t = n.id + "-error-" + t;
          e.setAttribute("id", t), i.push(t), r.push(e.textContent);
        }),
          0 < i.length &&
            (e = n.querySelector("legend")) &&
            (e.setAttribute("aria-describedby", i.join(" ")),
            e.setAttribute("aria-invalid", "true"));
      }),
      (t.onFieldsetErrorRemove = function (e) {
        var e = e.querySelector("legend");
        e &&
          (e.removeAttribute("aria-describedby"),
          e.setAttribute("aria-invalid", "false"),
          (e = e.querySelector("span.sr-only-justvalidateit")) && e.remove());
      }),
      (t.getErrorMessages = function (e) {
        for (
          var t = e,
            n = t.querySelectorAll("." + this.config.errorLabelCssClass);
          null != t && 0 === n.length;

        )
          n = (t = t.parentNode).querySelectorAll(
            "." + this.config.errorLabelCssClass
          );
        return n;
      }),
      e
    );
  })(),
  JustValidateItValidatorSelectAutocomplete = function (i, r) {
    return (
      void 0 === r && (r = {}),
      function (t, e) {
        var n = !1,
          e = e[i];
        if (e)
          return (
            r.required || t
              ? document
                  .querySelector("#" + e.elem.id + "-select")
                  .querySelectorAll("option")
                  .forEach(function (e) {
                    e.text === t && (n = !0);
                  })
              : (n = !0),
            n
          );
        throw new Error(
          "JustValidateItValidatorSelectAutocomplete: " +
            i +
            " not found as form field"
        );
      }
    );
  },
  ContentWatcher =
    ((window.JustValidateIt = JustValidateIt),
    (window.JustValidateItValidatorSelectAutocomplete =
      JustValidateItValidatorSelectAutocomplete),
    (function () {
      function e(e, t, n, i) {
        (this.targetNode = e),
          (this.contentSelector = t),
          (this.contentAddedCallback = n),
          (this.contentRemovedCallback = i),
          (this.observer = null),
          this.init();
      }
      var t = e.prototype;
      return (
        (t.init = function () {
          var t = this;
          (this.observer = new MutationObserver(function (e) {
            return t.mutationCallback(e);
          })),
            this.observe();
        }),
        (t.observe = function () {
          this.observer.observe(this.targetNode, { childList: !0 });
        }),
        (t.disconnect = function () {
          this.observer.disconnect();
        }),
        (t.mutationCallback = function (e) {
          for (
            var t = this, n = _createForOfIteratorHelperLoose(e);
            !(i = n()).done;

          ) {
            var i = i.value;
            "childList" === i.type &&
              (i.addedNodes.forEach(function (e) {
                e.matches(t.contentSelector) && t.contentAddedCallback();
              }),
              i.removedNodes.forEach(function (e) {
                e.matches(t.contentSelector) && t.contentRemovedCallback();
              }));
          }
        }),
        e
      );
    })()),
  ClassWatcher = (function () {
    function e(e, t, n, i, r) {
      (this.targetNode = e),
        (this.classToWatch = t),
        (this.classAddedCallback = n),
        (this.classRemovedCallback = i),
        (this.observer = null),
        (this.lastClassState = e.classList.contains(this.classToWatch)),
        (this.ignoreToggle = !!r),
        this.init();
    }
    var t = e.prototype;
    return (
      (t.init = function () {
        var t = this;
        (this.observer = new MutationObserver(function (e) {
          return t.mutationCallback(e);
        })),
          this.observe();
      }),
      (t.observe = function () {
        this.observer.observe(this.targetNode, { attributes: !0 });
      }),
      (t.disconnect = function () {
        this.observer.disconnect();
      }),
      (t.mutationCallback = function (e) {
        for (var t = _createForOfIteratorHelperLoose(e); !(n = t()).done; ) {
          var n = n.value;
          "attributes" === n.type &&
            "class" === n.attributeName &&
            ((n = n.target.classList.contains(this.classToWatch)),
            (!this.ignoreToggle && this.lastClassState === n) ||
              ((this.lastClassState = n)
                ? this.classAddedCallback()
                : this.classRemovedCallback()));
        }
      }),
      e
    );
  })(),
  STYLE = { opened: "expanded" },
  SELECTOR = {
    sideMenu: ".navbar-collapsable",
    navlink: ".nav-link",
    megamenuNavLink: ".nav-item .list-item",
    closeBtn: ".close-menu",
    navbar: ".navbar",
    homeBtn: ".custom-navbar-toggler",
  },
  SideMenu = (function () {
    function e(e) {
      (this.target = e),
        this.watcher,
        (this.items = e.querySelectorAll(
          [SELECTOR.navlink, SELECTOR.megamenuNavLink, SELECTOR.closeBtn].join(
            ","
          )
        )),
        (this.currItemIdx = 0),
        (this.isKeyShift = !1);
    }
    var t = e.prototype;
    return (
      (t.init = function () {
        var e = this;
        (this.watcher = new ClassWatcher(
          this.target,
          STYLE.opened,
          function () {
            return e.isServiceEnabled() && e.onOpen();
          },
          function () {
            return e.isServiceEnabled() && e.onClose();
          }
        )),
          this.bindEvents();
      }),
      (t.bindEvents = function () {
        var t = this;
        this.items.forEach(function (e) {
          e.addEventListener("keydown", function (e) {
            return t.isServiceEnabled() && t.onItemKeyDown(e);
          }),
            e.addEventListener("keyup", function (e) {
              return t.isServiceEnabled() && t.onItemKeyUp(e);
            }),
            e.addEventListener("click", function (e) {
              return t.isServiceEnabled() && t.onItemClick(e);
            });
        });
      }),
      (t.isServiceEnabled = function () {
        return window.matchMedia("(max-width: 991px)").matches;
      }),
      (t.onOpen = function () {
        var e = this.getNextVisibleItem(1);
        e.item && (e.item.focus(), (this.currItemIdx = e.index));
      }),
      (t.onClose = function () {
        var e = this.target
          .closest(SELECTOR.navbar)
          .querySelector(SELECTOR.homeBtn);
        e && e.focus();
      }),
      (t.onItemKeyUp = function (e) {
        "Shift" === e.key && (this.isKeyShift = !1);
      }),
      (t.onItemKeyDown = function (e) {
        "Shift" === e.key && (this.isKeyShift = !0),
          "Tab" === e.key && (e.preventDefault(), this.focusNext());
      }),
      (t.onItemClick = function (e) {
        this.currItemIdx = this.getItemIndex(e.currentTarget);
      }),
      (t.isHidden = function (e) {
        return null === e.offsetParent;
      }),
      (t.getItemIndex = function (n) {
        var i = null;
        return (
          this.items.forEach(function (e, t) {
            e === n && (i = t);
          }),
          i
        );
      }),
      (t.getNextVisibleItem = function (e, t) {
        for (
          var n = null, i = null, r = e, o = t ? -1 : 1, a = !1;
          !(n || (r == e && a));

        )
          r == e && (a = !0),
            this.isHidden(this.items[r]) || ((n = this.items[r]), (i = r)),
            (r += o) < 0
              ? (r = this.items.length - 1)
              : r >= this.items.length && (r = 0);
        return { item: n, index: i };
      }),
      (t.focusNext = function () {
        var e = this.currItemIdx + (this.isKeyShift ? -1 : 1),
          e =
            (e < 0
              ? (e = this.items.length - 1)
              : e >= this.items.length && (e = 0),
            this.getNextVisibleItem(e, this.isKeyShift));
        e.item && (e.item.focus(), (this.currItemIdx = e.index));
      }),
      e
    );
  })(),
  menus = document.querySelectorAll(SELECTOR.sideMenu),
  $ =
    (menus.forEach(function (e) {
      new SideMenu(e).init();
    }),
    $(function () {
      function t(e, t, n) {
        var i = $(e)
            .closest(o.HEADBTN_WRAPPER)
            .find("> " + o.HEADBTN),
          e = i.index($(e)),
          r = null;
        (r =
          n && t && 0 < e
            ? i[0]
            : n && e < i.length - 1
            ? i[i.length - 1]
            : t
            ? i[0 === e ? i.length - 1 : e - 1]
            : i[e < i.length - 1 ? e + 1 : 0]) && $(r).trigger("focus");
      }
      var o = {
          HEADBTN_WRAPPER: ".collapse-div",
          HEADBTN: '.collapse-header [data-toggle="collapse"]',
        },
        n = {
          ArrowDown: function (e) {
            t(e);
          },
          ArrowUp: function (e) {
            t(e, !0);
          },
          Home: function (e) {
            t(e, !0, !0);
          },
          End: function (e) {
            t(e, !1, !0);
          },
        };
      $(o.HEADBTN).on("keydown", function (e) {
        var t = e.key;
        "function" == typeof n[t] &&
          (e.preventDefault(), n[t](e.currentTarget));
      });
    }),
    jQuery.noConflict());
