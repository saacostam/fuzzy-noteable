(self.webpackChunk = self.webpackChunk || []).push([
  [792],
  {
    150: (e, t, r) => {
      'use strict';
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      r.d(t, { A: () => i });
    },
    311: (e, t, r) => {
      'use strict';
      function i(e, t) {
        return (
          (i = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          i(e, t)
        );
      }
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          i(e, t);
      }
      r.d(t, { A: () => n });
    },
    454: (e, t, r) => {
      'use strict';
      var i,
        n = r(873),
        d = r(41),
        s = r.t(d, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(i || (i = {}));
      const u = 'popstate';
      function c(e, t) {
        if (!1 === e || null == e) throw new Error(t);
      }
      function a(e, t) {
        if (!e) {
          'undefined' != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (r) {}
        }
      }
      function o(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, r, i) {
        return (
          void 0 === r && (r = null),
          l(
            {
              pathname: 'string' == typeof e ? e : e.pathname,
              search: '',
              hash: '',
            },
            'string' == typeof t ? p(t) : t,
            {
              state: r,
              key: (t && t.key) || i || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function h(e) {
        let { pathname: t = '/', search: r = '', hash: i = '' } = e;
        return (
          r && '?' !== r && (t += '?' === r.charAt(0) ? r : '?' + r),
          i && '#' !== i && (t += '#' === i.charAt(0) ? i : '#' + i),
          t
        );
      }
      function p(e) {
        let t = {};
        if (e) {
          let r = e.indexOf('#');
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let i = e.indexOf('?');
          i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
            e && (t.pathname = e);
        }
        return t;
      }
      function y(e, t, r, n) {
        void 0 === n && (n = {});
        let { window: d = document.defaultView, v5Compat: s = !1 } = n,
          a = d.history,
          p = i.Pop,
          y = null,
          m = g();
        function g() {
          return (a.state || { idx: null }).idx;
        }
        function b() {
          p = i.Pop;
          let e = g(),
            t = null == e ? null : e - m;
          (m = e), y && y({ action: p, location: C.location, delta: t });
        }
        function v(e) {
          let t =
              'null' !== d.location.origin
                ? d.location.origin
                : d.location.href,
            r = 'string' == typeof e ? e : h(e);
          return (
            c(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                r
            ),
            new URL(r, t)
          );
        }
        null == m && ((m = 0), a.replaceState(l({}, a.state, { idx: m }), ''));
        let C = {
          get action() {
            return p;
          },
          get location() {
            return e(d, a);
          },
          listen(e) {
            if (y)
              throw new Error('A history only accepts one active listener');
            return (
              d.addEventListener(u, b),
              (y = e),
              () => {
                d.removeEventListener(u, b), (y = null);
              }
            );
          },
          createHref: (e) => t(d, e),
          createURL: v,
          encodeLocation(e) {
            let t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            p = i.Push;
            let n = f(C.location, e, t);
            r && r(n, e), (m = g() + 1);
            let l = o(n, m),
              u = C.createHref(n);
            try {
              a.pushState(l, '', u);
            } catch (c) {
              d.location.assign(u);
            }
            s && y && y({ action: p, location: C.location, delta: 1 });
          },
          replace: function (e, t) {
            p = i.Replace;
            let n = f(C.location, e, t);
            r && r(n, e), (m = g());
            let d = o(n, m),
              l = C.createHref(n);
            a.replaceState(d, '', l),
              s && y && y({ action: p, location: C.location, delta: 0 });
          },
          go: (e) => a.go(e),
        };
        return C;
      }
      var m;
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(m || (m = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function g(e, t, r) {
        void 0 === r && (r = '/');
        let i = T(('string' == typeof t ? p(t) : t).pathname || '/', r);
        if (null == i) return null;
        let n = b(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let r =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, r) => e === t[r]);
                  return r ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(n);
        let d = null;
        for (let s = 0; null == d && s < n.length; ++s) d = k(n[s], P(i));
        return d;
      }
      function b(e, t, r, i) {
        void 0 === t && (t = []),
          void 0 === r && (r = []),
          void 0 === i && (i = '');
        let n = (e, n, d) => {
          let s = {
            relativePath: void 0 === d ? e.path || '' : d,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e,
          };
          s.relativePath.startsWith('/') &&
            (c(
              s.relativePath.startsWith(i),
              'Absolute route path "' +
                s.relativePath +
                '" nested under path "' +
                i +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (s.relativePath = s.relativePath.slice(i.length)));
          let l = O([i, s.relativePath]),
            u = r.concat(s);
          e.children &&
            e.children.length > 0 &&
            (c(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            b(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: x(l, e.index), routesMeta: u });
        };
        return (
          e.forEach((e, t) => {
            var r;
            if ('' !== e.path && null != (r = e.path) && r.includes('?'))
              for (let i of v(e.path)) n(e, t, i);
            else n(e, t);
          }),
          t
        );
      }
      function v(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [r, ...i] = t,
          n = r.endsWith('?'),
          d = r.replace(/\?$/, '');
        if (0 === i.length) return n ? [d, ''] : [d];
        let s = v(i.join('/')),
          l = [];
        return (
          l.push(...s.map((e) => ('' === e ? d : [d, e].join('/')))),
          n && l.push(...s),
          l.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const C = /^:\w+$/,
        E = 3,
        A = 2,
        w = 1,
        D = 10,
        G = -2,
        S = (e) => '*' === e;
      function x(e, t) {
        let r = e.split('/'),
          i = r.length;
        return (
          r.some(S) && (i += G),
          t && (i += A),
          r
            .filter((e) => !S(e))
            .reduce((e, t) => e + (C.test(t) ? E : '' === t ? w : D), i)
        );
      }
      function k(e, t) {
        let { routesMeta: r } = e,
          i = {},
          n = '/',
          d = [];
        for (let s = 0; s < r.length; ++s) {
          let e = r[s],
            l = s === r.length - 1,
            u = '/' === n ? t : t.slice(n.length) || '/',
            c = F(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              u
            );
          if (!c) return null;
          Object.assign(i, c.params);
          let a = e.route;
          d.push({
            params: i,
            pathname: O([n, c.pathname]),
            pathnameBase: L(O([n, c.pathnameBase])),
            route: a,
          }),
            '/' !== c.pathnameBase && (n = O([n, c.pathnameBase]));
        }
        return d;
      }
      function F(e, t) {
        'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [r, i] = (function (e, t, r) {
            void 0 === t && (t = !1);
            void 0 === r && (r = !0);
            a(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".'
            );
            let i = [],
              n =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/\/:(\w+)/g, (e, t) => (i.push(t), '/([^\\/]+)'));
            e.endsWith('*')
              ? (i.push('*'),
                (n += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : r
              ? (n += '\\/*$')
              : '' !== e && '/' !== e && (n += '(?:(?=\\/|$))');
            let d = new RegExp(n, t ? void 0 : 'i');
            return [d, i];
          })(e.path, e.caseSensitive, e.end),
          n = t.match(r);
        if (!n) return null;
        let d = n[0],
          s = d.replace(/(.)\/+$/, '$1'),
          l = n.slice(1);
        return {
          params: i.reduce((e, t, r) => {
            if ('*' === t) {
              let e = l[r] || '';
              s = d.slice(0, d.length - e.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (r) {
                  return (
                    a(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        r +
                        ').'
                    ),
                    e
                  );
                }
              })(l[r] || '', t)),
              e
            );
          }, {}),
          pathname: d,
          pathnameBase: s,
          pattern: e,
        };
      }
      function P(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            a(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').'
            ),
            e
          );
        }
      }
      function T(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith('/') ? t.length - 1 : t.length,
          i = e.charAt(r);
        return i && '/' !== i ? null : e.slice(r) || '/';
      }
      function R(e, t, r, i) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(i) +
          '].  Please separate it out to the `to.' +
          r +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function _(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function N(e, t, r, i) {
        let n;
        void 0 === i && (i = !1),
          'string' == typeof e
            ? (n = p(e))
            : ((n = l({}, e)),
              c(
                !n.pathname || !n.pathname.includes('?'),
                R('?', 'pathname', 'search', n)
              ),
              c(
                !n.pathname || !n.pathname.includes('#'),
                R('#', 'pathname', 'hash', n)
              ),
              c(
                !n.search || !n.search.includes('#'),
                R('#', 'search', 'hash', n)
              ));
        let d,
          s = '' === e || '' === n.pathname,
          u = s ? '/' : n.pathname;
        if (i || null == u) d = r;
        else {
          let e = t.length - 1;
          if (u.startsWith('..')) {
            let t = u.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            n.pathname = t.join('/');
          }
          d = e >= 0 ? t[e] : '/';
        }
        let a = (function (e, t) {
            void 0 === t && (t = '/');
            let {
                pathname: r,
                search: i = '',
                hash: n = '',
              } = 'string' == typeof e ? p(e) : e,
              d = r
                ? r.startsWith('/')
                  ? r
                  : (function (e, t) {
                      let r = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e
                            ? r.length > 1 && r.pop()
                            : '.' !== e && r.push(e);
                        }),
                        r.length > 1 ? r.join('/') : '/'
                      );
                    })(r, t)
                : t;
            return { pathname: d, search: j(i), hash: I(n) };
          })(n, d),
          o = u && '/' !== u && u.endsWith('/'),
          f = (s || '.' === u) && r.endsWith('/');
        return a.pathname.endsWith('/') || (!o && !f) || (a.pathname += '/'), a;
      }
      const O = (e) => e.join('/').replace(/\/\/+/g, '/'),
        L = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        j = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        I = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function M(e) {
        return (
          null != e &&
          'number' == typeof e.status &&
          'string' == typeof e.statusText &&
          'boolean' == typeof e.internal &&
          'data' in e
        );
      }
      const B = ['post', 'put', 'patch', 'delete'],
        U = (new Set(B), ['get', ...B]);
      new Set(U),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        'undefined' != typeof window &&
          void 0 !== window.document &&
          window.document.createElement;
      Symbol('deferred');
      function z() {
        return (
          (z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          z.apply(this, arguments)
        );
      }
      const H = d.createContext(null);
      const Q = d.createContext(null);
      const $ = d.createContext(null);
      const W = d.createContext(null);
      const V = d.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const q = d.createContext(null);
      function K() {
        return null != d.useContext(W);
      }
      function Y() {
        return K() || c(!1), d.useContext(W).location;
      }
      function Z(e) {
        d.useContext($).static || d.useLayoutEffect(e);
      }
      function X() {
        let { isDataRoute: e } = d.useContext(V);
        return e
          ? (function () {
              let { router: e } = le(de.UseNavigateStable),
                t = ce(se.UseNavigateStable),
                r = d.useRef(!1);
              return (
                Z(() => {
                  r.current = !0;
                }),
                d.useCallback(
                  function (i, n) {
                    void 0 === n && (n = {}),
                      r.current &&
                        ('number' == typeof i
                          ? e.navigate(i)
                          : e.navigate(i, z({ fromRouteId: t }, n)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              K() || c(!1);
              let e = d.useContext(H),
                { basename: t, navigator: r } = d.useContext($),
                { matches: i } = d.useContext(V),
                { pathname: n } = Y(),
                s = JSON.stringify(_(i).map((e) => e.pathnameBase)),
                l = d.useRef(!1);
              return (
                Z(() => {
                  l.current = !0;
                }),
                d.useCallback(
                  function (i, d) {
                    if ((void 0 === d && (d = {}), !l.current)) return;
                    if ('number' == typeof i) return void r.go(i);
                    let u = N(i, JSON.parse(s), n, 'path' === d.relative);
                    null == e &&
                      '/' !== t &&
                      (u.pathname =
                        '/' === u.pathname ? t : O([t, u.pathname])),
                      (d.replace ? r.replace : r.push)(u, d.state, d);
                  },
                  [t, r, s, n, e]
                )
              );
            })();
      }
      function J(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { matches: i } = d.useContext(V),
          { pathname: n } = Y(),
          s = JSON.stringify(_(i).map((e) => e.pathnameBase));
        return d.useMemo(
          () => N(e, JSON.parse(s), n, 'path' === r),
          [e, s, n, r]
        );
      }
      function ee(e, t, r) {
        K() || c(!1);
        let { navigator: n } = d.useContext($),
          { matches: s } = d.useContext(V),
          l = s[s.length - 1],
          u = l ? l.params : {},
          a = (l && l.pathname, l ? l.pathnameBase : '/');
        l && l.route;
        let o,
          f = Y();
        if (t) {
          var h;
          let e = 'string' == typeof t ? p(t) : t;
          '/' === a ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(a)) ||
            c(!1),
            (o = e);
        } else o = f;
        let y = o.pathname || '/',
          m = g(e, { pathname: '/' === a ? y : y.slice(a.length) || '/' });
        let b = ne(
          m &&
            m.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: O([
                  a,
                  n.encodeLocation
                    ? n.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? a
                    : O([
                        a,
                        n.encodeLocation
                          ? n.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          s,
          r
        );
        return t && b
          ? d.createElement(
              W.Provider,
              {
                value: {
                  location: z(
                    {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                    },
                    o
                  ),
                  navigationType: i.Pop,
                },
              },
              b
            )
          : b;
      }
      function te() {
        let e = (function () {
            var e;
            let t = d.useContext(q),
              r = ue(se.UseRouteError),
              i = ce(se.UseRouteError);
            if (t) return t;
            return null == (e = r.errors) ? void 0 : e[i];
          })(),
          t = M(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          i = 'rgba(200,200,200, 0.5)',
          n = { padding: '0.5rem', backgroundColor: i };
        return d.createElement(
          d.Fragment,
          null,
          d.createElement('h2', null, 'Unexpected Application Error!'),
          d.createElement('h3', { style: { fontStyle: 'italic' } }, t),
          r ? d.createElement('pre', { style: n }, r) : null,
          null
        );
      }
      const re = d.createElement(te, null);
      class RenderErrorBoundary extends d.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            'React Router caught the following error during render',
            e,
            t
          );
        }
        render() {
          return this.state.error
            ? d.createElement(
                V.Provider,
                { value: this.props.routeContext },
                d.createElement(q.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: t, match: r, children: i } = e,
          n = d.useContext(H);
        return (
          n &&
            n.static &&
            n.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (n.staticContext._deepestRenderedBoundaryId = r.route.id),
          d.createElement(V.Provider, { value: t }, i)
        );
      }
      function ne(e, t, r) {
        var i;
        if ((void 0 === t && (t = []), void 0 === r && (r = null), null == e)) {
          var n;
          if (null == (n = r) || !n.errors) return null;
          e = r.matches;
        }
        let s = e,
          l = null == (i = r) ? void 0 : i.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || c(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        return s.reduceRight((e, i, n) => {
          let u = i.route.id ? (null == l ? void 0 : l[i.route.id]) : null,
            c = null;
          r && (c = i.route.errorElement || re);
          let a = t.concat(s.slice(0, n + 1)),
            o = () => {
              let t;
              return (
                (t = u
                  ? c
                  : i.route.Component
                  ? d.createElement(i.route.Component, null)
                  : i.route.element
                  ? i.route.element
                  : e),
                d.createElement(ie, {
                  match: i,
                  routeContext: {
                    outlet: e,
                    matches: a,
                    isDataRoute: null != r,
                  },
                  children: t,
                })
              );
            };
          return r && (i.route.ErrorBoundary || i.route.errorElement || 0 === n)
            ? d.createElement(RenderErrorBoundary, {
                location: r.location,
                revalidation: r.revalidation,
                component: c,
                error: u,
                children: o(),
                routeContext: { outlet: null, matches: a, isDataRoute: !0 },
              })
            : o();
        }, null);
      }
      var de, se;
      function le(e) {
        let t = d.useContext(H);
        return t || c(!1), t;
      }
      function ue(e) {
        let t = d.useContext(Q);
        return t || c(!1), t;
      }
      function ce(e) {
        let t = (function (e) {
            let t = d.useContext(V);
            return t || c(!1), t;
          })(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || c(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = 'useBlocker'),
          (e.UseRevalidator = 'useRevalidator'),
          (e.UseNavigateStable = 'useNavigate');
      })(de || (de = {})),
        (function (e) {
          (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId');
        })(se || (se = {}));
      function ae(e) {
        c(!1);
      }
      function oe(e) {
        let {
          basename: t = '/',
          children: r = null,
          location: n,
          navigationType: s = i.Pop,
          navigator: l,
          static: u = !1,
        } = e;
        K() && c(!1);
        let a = t.replace(/^\/*/, '/'),
          o = d.useMemo(
            () => ({ basename: a, navigator: l, static: u }),
            [a, l, u]
          );
        'string' == typeof n && (n = p(n));
        let {
            pathname: f = '/',
            search: h = '',
            hash: y = '',
            state: m = null,
            key: g = 'default',
          } = n,
          b = d.useMemo(() => {
            let e = T(f, a);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: y,
                    state: m,
                    key: g,
                  },
                  navigationType: s,
                };
          }, [a, f, h, y, m, g, s]);
        return null == b
          ? null
          : d.createElement(
              $.Provider,
              { value: o },
              d.createElement(W.Provider, { children: r, value: b })
            );
      }
      function fe(e) {
        let { children: t, location: r } = e;
        return ee(pe(t), r);
      }
      var he;
      !(function (e) {
        (e[(e.pending = 0)] = 'pending'),
          (e[(e.success = 1)] = 'success'),
          (e[(e.error = 2)] = 'error');
      })(he || (he = {}));
      new Promise(() => {});
      d.Component;
      function pe(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return (
          d.Children.forEach(e, (e, i) => {
            if (!d.isValidElement(e)) return;
            let n = [...t, i];
            if (e.type === d.Fragment)
              return void r.push.apply(r, pe(e.props.children, n));
            e.type !== ae && c(!1), e.props.index && e.props.children && c(!1);
            let s = {
              id: e.props.id || n.join('-'),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (s.children = pe(e.props.children, n)),
              r.push(s);
          }),
          r
        );
      }
      function ye() {
        return (
          (ye = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          ye.apply(this, arguments)
        );
      }
      function me(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          d = Object.keys(e);
        for (i = 0; i < d.length; i++)
          (r = d[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      const ge = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
      ];
      function be(e) {
        let { basename: t, children: r, window: i } = e,
          n = d.useRef();
        var s;
        null == n.current &&
          (n.current =
            (void 0 === (s = { window: i, v5Compat: !0 }) && (s = {}),
            y(
              function (e, t) {
                let {
                  pathname: r = '/',
                  search: i = '',
                  hash: n = '',
                } = p(e.location.hash.substr(1));
                return f(
                  '',
                  { pathname: r, search: i, hash: n },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default'
                );
              },
              function (e, t) {
                let r = e.document.querySelector('base'),
                  i = '';
                if (r && r.getAttribute('href')) {
                  let t = e.location.href,
                    r = t.indexOf('#');
                  i = -1 === r ? t : t.slice(0, r);
                }
                return i + '#' + ('string' == typeof t ? t : h(t));
              },
              function (e, t) {
                a(
                  '/' === e.pathname.charAt(0),
                  'relative pathnames are not supported in hash history.push(' +
                    JSON.stringify(t) +
                    ')'
                );
              },
              s
            )));
        let l = n.current,
          [u, c] = d.useState({ action: l.action, location: l.location });
        return (
          d.useLayoutEffect(() => l.listen(c), [l]),
          d.createElement(oe, {
            basename: t,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      const ve =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        Ce = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ee = d.forwardRef(function (e, t) {
          let r,
            {
              onClick: i,
              relative: n,
              reloadDocument: s,
              replace: l,
              state: u,
              target: a,
              to: o,
              preventScrollReset: f,
            } = e,
            p = me(e, ge),
            { basename: y } = d.useContext($),
            m = !1;
          if ('string' == typeof o && Ce.test(o) && ((r = o), ve))
            try {
              let e = new URL(window.location.href),
                t = o.startsWith('//') ? new URL(e.protocol + o) : new URL(o),
                r = T(t.pathname, y);
              t.origin === e.origin && null != r
                ? (o = r + t.search + t.hash)
                : (m = !0);
            } catch (v) {}
          let g = (function (e, t) {
              let { relative: r } = void 0 === t ? {} : t;
              K() || c(!1);
              let { basename: i, navigator: n } = d.useContext($),
                { hash: s, pathname: l, search: u } = J(e, { relative: r }),
                a = l;
              return (
                '/' !== i && (a = '/' === l ? i : O([i, l])),
                n.createHref({ pathname: a, search: u, hash: s })
              );
            })(o, { relative: n }),
            b = (function (e, t) {
              let {
                  target: r,
                  replace: i,
                  state: n,
                  preventScrollReset: s,
                  relative: l,
                } = void 0 === t ? {} : t,
                u = X(),
                c = Y(),
                a = J(e, { relative: l });
              return d.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return !(
                        0 !== e.button ||
                        (t && '_self' !== t) ||
                        (function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, r)
                  ) {
                    t.preventDefault();
                    let r = void 0 !== i ? i : h(c) === h(a);
                    u(e, {
                      replace: r,
                      state: n,
                      preventScrollReset: s,
                      relative: l,
                    });
                  }
                },
                [c, u, a, i, n, r, e, s, l]
              );
            })(o, {
              replace: l,
              state: u,
              target: a,
              preventScrollReset: f,
              relative: n,
            });
          return d.createElement(
            'a',
            ye({}, p, {
              href: r || g,
              onClick:
                m || s
                  ? i
                  : function (e) {
                      i && i(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: a,
            })
          );
        });
      var Ae, we;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmitImpl = 'useSubmitImpl'),
          (e.UseFetcher = 'useFetcher');
      })(Ae || (Ae = {})),
        (function (e) {
          (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(we || (we = {}));
      var De = r(85);
      const Ge = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            className: 'w-5 h-5',
            children: (0, De.jsx)('path', {
              fillRule: 'evenodd',
              d: 'M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z',
              clipRule: 'evenodd',
            }),
          }),
        Se = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: '0 0 24 24',
            strokeWidth: 1.5,
            stroke: 'currentColor',
            className: 'size-6',
            children: (0, De.jsx)('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59',
            }),
          }),
        xe = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            className: 'w-4 h-4',
            children: (0, De.jsx)('path', {
              d: 'M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z',
            }),
          }),
        ke = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            className: 'w-16 h-16',
            children: (0, De.jsx)('path', {
              fillRule: 'evenodd',
              d: 'M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z',
              clipRule: 'evenodd',
            }),
          }),
        Fe = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            className: 'w-6 h-6',
            children: (0, De.jsx)('path', {
              fillRule: 'evenodd',
              d: 'M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z',
              clipRule: 'evenodd',
            }),
          }),
        Pe = () =>
          (0, De.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            className: 'w-5 h-5',
            children: (0, De.jsx)('path', {
              fillRule: 'evenodd',
              d: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z',
              clipRule: 'evenodd',
            }),
          }),
        Te = () =>
          (0, De.jsx)('div', {
            className: 'navbar shadow bg-base-100',
            children: (0, De.jsx)('div', {
              className: 'flex-1 flex justify-center',
              children: (0, De.jsxs)(Ee, {
                className: 'btn btn-ghost text-xl hover:text-secondary',
                to: '/',
                children: [(0, De.jsx)(Fe, {}), 'Chord Viewer'],
              }),
            }),
          }),
        Re = () =>
          (0, De.jsx)('div', {
            className: 'hero my-32',
            children: (0, De.jsx)('div', {
              className: 'hero-content text-center',
              children: (0, De.jsxs)('div', {
                className: 'max-w-md flex flex-col items-center',
                children: [
                  (0, De.jsx)('h1', {
                    className: 'text-5xl font-bold mb-6',
                    children: 'Oops...',
                  }),
                  (0, De.jsx)(ke, {}),
                  (0, De.jsx)('p', {
                    className: 'py-6',
                    children:
                      "Sorry. We can't find the page you're looking for.",
                  }),
                  (0, De.jsx)(Ee, {
                    className: 'btn btn-secondary text-secondary-content',
                    to: '/',
                    children: 'Go Back',
                  }),
                ],
              }),
            }),
          }),
        _e = 'SILENCE',
        Ne = [
          'C',
          'C#',
          'D',
          'D#',
          'E',
          'F',
          'F#',
          'G',
          'G#',
          'A',
          'A#',
          'B',
          _e,
        ],
        Oe = [
          '1940',
          '1950',
          '1960',
          '1970',
          '1980',
          '1990',
          '2000',
          '2010',
          '2020',
        ],
        Le = [
          'Pop',
          'Rock',
          'Grunge',
          'Folk Rock',
          'R&B',
          'Folk Pop',
          'Country',
        ],
        je = ['beginner', 'intermediate', 'advanced'];
      class NoteAbleError extends Error {
        constructor(e) {
          super(`\u274c NoteAble Error: ${e}`);
        }
      }
      class DomSetupError extends NoteAbleError {}
      class SourceSetupError extends NoteAbleError {}
      class DataError extends NoteAbleError {}
      class RuntimeError extends NoteAbleError {}
      const Ie = (e) => e.filter((t, r) => e.indexOf(t) === r);
      var Me = r(17);
      const Be = {
        tablatures: [
          {
            id: '6506945126f8409df582c6d8',
            source: 'wVyggTKDcOE',
            difficulty: 'beginner',
            tuning: 'E A D G B E',
            transposition: 4,
            type: 'guitar',
            musicUnits: [
              {
                type: 'ch',
                dur: 4,
                self: 'C',
                syncPnt: '1970-01-01T00:00:00.600Z',
                bpm: 95,
                timeSig: { top: 4, bottom: 4 },
              },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 6, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'Em' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
            ],
            song: {
              id: '6506910d800c117473ed7f01',
              name: 'Goodbye My Lover',
              key: 'E major',
              bpm: [90],
              genre: 'Pop',
              artists: [
                { name: 'James Blunt', id: '650690ddd6eecbe2075f8bcc' },
              ],
            },
          },
          {
            id: '650696cafcd5f4e223131440',
            source: '8xg3vE8Ie_E',
            difficulty: 'beginner',
            tuning: 'E A D G B E',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                type: 'ch',
                dur: 8,
                self: 'C',
                syncPnt: '1970-01-01T00:00:00.700Z',
                bpm: 119,
                timeSig: { top: 4, bottom: 4 },
              },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 8, self: 'F' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'F' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 8, self: 'F' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'F' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'F' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 2, self: 'F' },
              { type: 'ch', dur: 2, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'C' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 8, self: 'C' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'Am' },
              { type: 'ch', dur: 4, self: 'F' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 8, self: 'D' },
              { type: 'ch', dur: 8, self: 'A' },
              { type: 'ch', dur: 8, self: 'Bm' },
              { type: 'ch', dur: 4, self: 'G' },
              { type: 'ch', dur: 4, self: 'A' },
              { type: 'ch', dur: 8, self: 'D' },
              { type: 'ch', dur: 8, self: 'A' },
              { type: 'ch', dur: 8, self: 'Bm' },
              { type: 'ch', dur: 8, self: 'G' },
              { type: 'ch', dur: 8, self: 'D' },
            ],
            song: {
              id: '65069651abd35d773ec15ace',
              name: 'Love Story',
              key: 'D major',
              bpm: [119],
              genre: 'Pop',
              artists: [
                { name: 'Taylor Swift', id: '650690f53680a73069aa60c3' },
              ],
            },
          },
          {
            id: '656d681f76d0d2e28900f6c2',
            source: 'oofSnsGkops',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 3,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 82,
                syncPnt: '1970-01-01T00:00:02.200Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'Am' },
              { id: 4, dur: 4, type: 'ch', self: 'F' },
              { id: 5, dur: 4, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 4, type: 'ch', self: 'F' },
              { id: 9, dur: 4, type: 'ch', self: 'C' },
              { id: 10, dur: 4, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'Am' },
              { id: 12, dur: 4, type: 'ch', self: 'F' },
              { id: 13, dur: 4, type: 'ch', self: 'C' },
              { id: 14, dur: 4, type: 'ch', self: 'G' },
              { id: 15, dur: 4, type: 'ch', self: 'Am' },
              { id: 16, dur: 4, type: 'ch', self: 'F' },
              { id: 17, dur: 2, type: 'ch', self: 'F' },
              { id: 18, dur: 2, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'C' },
              { id: 20, dur: 2, type: 'ch', self: 'F' },
              { id: 21, dur: 2, type: 'ch', self: 'G' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 23, dur: 2, type: 'ch', self: 'F' },
              { id: 24, dur: 2, type: 'ch', self: 'G' },
              { id: 25, dur: 2, type: 'ch', self: 'C' },
              { id: 26, dur: 4, type: 'ch', self: 'Am' },
              { id: 27, dur: 2, type: 'ch', self: 'F' },
              { id: 28, dur: 2, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'Am' },
              { id: 30, dur: 2, type: 'ch', self: 'F' },
              { id: 31, dur: 2, type: 'ch', self: 'G' },
              { id: 32, dur: 4, type: 'ch', self: 'C' },
              { id: 33, dur: 4, type: 'ch', self: 'G' },
              { id: 34, dur: 4, type: 'ch', self: 'Am' },
              { id: 35, dur: 4, type: 'ch', self: 'F' },
              { id: 36, dur: 4, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'G' },
              { id: 38, dur: 4, type: 'ch', self: 'Am' },
              { id: 39, dur: 4, type: 'ch', self: 'F' },
              { id: 40, dur: 4, type: 'ch', self: 'C' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 4, type: 'ch', self: 'Am' },
              { id: 43, dur: 4, type: 'ch', self: 'F' },
              { id: 44, dur: 2, type: 'ch', self: 'F' },
              { id: 45, dur: 2, type: 'ch', self: 'G' },
              { id: 46, dur: 4, type: 'ch', self: 'C' },
              { id: 47, dur: 2, type: 'ch', self: 'F' },
              { id: 48, dur: 2, type: 'ch', self: 'G' },
              { id: 49, dur: 4, type: 'ch', self: 'C' },
              { id: 50, dur: 2, type: 'ch', self: 'F' },
              { id: 51, dur: 2, type: 'ch', self: 'G' },
              { id: 52, dur: 2, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'Am' },
              { id: 54, dur: 2, type: 'ch', self: 'F' },
              { id: 55, dur: 2, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'Am' },
              { id: 57, dur: 2, type: 'ch', self: 'F' },
              { id: 58, dur: 2, type: 'ch', self: 'G' },
              { id: 59, dur: 4, type: 'ch', self: 'C' },
              { id: 60, dur: 2, type: 'ch', self: 'F' },
              { id: 61, dur: 2, type: 'ch', self: 'Am' },
              { id: 62, dur: 2, type: 'ch', self: 'F' },
              { id: 63, dur: 2, type: 'ch', self: 'Am' },
              { id: 64, dur: 2, type: 'ch', self: 'F' },
              { id: 65, dur: 2, type: 'ch', self: 'Am' },
              { id: 66, dur: 4, type: 'ch', self: 'G' },
              { id: 67, dur: 2, type: 'ch', self: 'F' },
              { id: 68, dur: 2, type: 'ch', self: 'G' },
              { id: 69, dur: 4, type: 'ch', self: 'C' },
              { id: 70, dur: 2, type: 'ch', self: 'F' },
              { id: 71, dur: 2, type: 'ch', self: 'G' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 2, type: 'ch', self: 'F' },
              { id: 74, dur: 2, type: 'ch', self: 'G' },
              { id: 75, dur: 2, type: 'ch', self: 'C' },
              { id: 76, dur: 4, type: 'ch', self: 'Am' },
              { id: 77, dur: 2, type: 'ch', self: 'F' },
              { id: 78, dur: 2, type: 'ch', self: 'G' },
              { id: 79, dur: 1, type: 'ch', self: 'C' },
              { id: 80, dur: 1, type: 'ch', self: 'G' },
              { id: 81, dur: 8, type: 'ch', self: 'Am' },
              { id: 82, dur: 2, type: 'ch', self: 'F' },
              { id: 83, dur: 2, type: 'ch', self: 'G' },
              { id: 84, dur: 4, type: 'ch', self: 'Am' },
              { id: 85, dur: 2, type: 'ch', self: 'F' },
              { id: 86, dur: 2, type: 'ch', self: 'G' },
              { id: 87, dur: 4, type: 'ch', self: 'C' },
            ],
            song: {
              id: '6544a6cf6d2b448ea1cdd4c7',
              name: "You're Beautiful",
              key: 'C minor',
              bpm: [82],
              genre: 'Pop',
              artists: [
                { name: 'James Blunt', id: '650690ddd6eecbe2075f8bcc' },
              ],
            },
          },
          {
            id: '656d712c76d0d2e28900f6c4',
            source: 'AgFeZr5ptV8',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2,
                type: 'ch',
                self: 'G',
                bpm: 104,
                syncPnt: '1970-01-01T00:00:00.000Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 2, type: 'ch', self: 'D' },
              { id: 3, dur: 2, type: 'ch', self: 'C' },
              { id: 4, dur: 2, type: 'ch', self: 'D' },
              { id: 5, dur: 2, type: 'ch', self: 'G' },
              { id: 6, dur: 2, type: 'ch', self: 'D' },
              { id: 7, dur: 2, type: 'ch', self: 'C' },
              { id: 8, dur: 2, type: 'ch', self: 'D' },
              { id: 9, dur: 2, type: 'ch', self: 'G' },
              { id: 10, dur: 2, type: 'ch', self: 'D' },
              { id: 11, dur: 2, type: 'ch', self: 'C' },
              { id: 12, dur: 2, type: 'ch', self: 'D' },
              { id: 13, dur: 2, type: 'ch', self: 'G' },
              { id: 14, dur: 2, type: 'ch', self: 'D' },
              { id: 15, dur: 2, type: 'ch', self: 'C' },
              { id: 16, dur: 2, type: 'ch', self: 'D' },
              { id: 17, dur: 2, type: 'ch', self: 'G' },
              { id: 18, dur: 2, type: 'ch', self: 'D' },
              { id: 19, dur: 2, type: 'ch', self: 'C' },
              { id: 20, dur: 2, type: 'ch', self: 'D' },
              { id: 21, dur: 2, type: 'ch', self: 'G' },
              { id: 22, dur: 2, type: 'ch', self: 'D' },
              { id: 23, dur: 2, type: 'ch', self: 'C' },
              { id: 24, dur: 2, type: 'ch', self: 'D' },
              { id: 25, dur: 2, type: 'ch', self: 'G' },
              { id: 26, dur: 2, type: 'ch', self: 'D' },
              { id: 27, dur: 2, type: 'ch', self: 'C' },
              { id: 28, dur: 2, type: 'ch', self: 'D' },
              { id: 29, dur: 2, type: 'ch', self: 'G' },
              { id: 30, dur: 2, type: 'ch', self: 'D' },
              { id: 31, dur: 2, type: 'ch', self: 'C' },
              { id: 32, dur: 2, type: 'ch', self: 'D' },
              { id: 33, dur: 2, type: 'ch', self: 'G' },
              { id: 34, dur: 2, type: 'ch', self: 'D' },
              { id: 35, dur: 2, type: 'ch', self: 'C' },
              { id: 36, dur: 2, type: 'ch', self: 'D' },
              { id: 37, dur: 2, type: 'ch', self: 'G' },
              { id: 38, dur: 2, type: 'ch', self: 'D' },
              { id: 39, dur: 2, type: 'ch', self: 'C' },
              { id: 40, dur: 2, type: 'ch', self: 'D' },
              { id: 41, dur: 2, type: 'ch', self: 'G' },
              { id: 42, dur: 2, type: 'ch', self: 'D' },
              { id: 43, dur: 2, type: 'ch', self: 'C' },
              { id: 44, dur: 2, type: 'ch', self: 'D' },
              { id: 45, dur: 2, type: 'ch', self: 'G' },
              { id: 46, dur: 2, type: 'ch', self: 'D' },
              { id: 47, dur: 2, type: 'ch', self: 'C' },
              { id: 48, dur: 2, type: 'ch', self: 'D' },
              { id: 49, dur: 2, type: 'ch', self: 'G' },
              { id: 50, dur: 2, type: 'ch', self: 'D' },
              { id: 51, dur: 2, type: 'ch', self: 'C' },
              { id: 52, dur: 2, type: 'ch', self: 'D' },
              { id: 53, dur: 2, type: 'ch', self: 'G' },
              { id: 54, dur: 2, type: 'ch', self: 'D' },
              { id: 55, dur: 2, type: 'ch', self: 'C' },
              { id: 56, dur: 2, type: 'ch', self: 'D' },
              { id: 57, dur: 2, type: 'ch', self: 'G' },
              { id: 58, dur: 2, type: 'ch', self: 'D' },
              { id: 59, dur: 2, type: 'ch', self: 'C' },
              { id: 60, dur: 2, type: 'ch', self: 'D' },
              { id: 61, dur: 2, type: 'ch', self: 'G' },
              { id: 62, dur: 2, type: 'ch', self: 'D' },
              { id: 63, dur: 2, type: 'ch', self: 'C' },
              { id: 64, dur: 2, type: 'ch', self: 'D' },
              { id: 65, dur: 2, type: 'ch', self: 'G' },
              { id: 66, dur: 2, type: 'ch', self: 'D' },
              { id: 67, dur: 2, type: 'ch', self: 'C' },
              { id: 68, dur: 2, type: 'ch', self: 'D' },
              { id: 69, dur: 2, type: 'ch', self: 'G' },
              { id: 70, dur: 2, type: 'ch', self: 'D' },
              { id: 71, dur: 2, type: 'ch', self: 'C' },
              { id: 72, dur: 2, type: 'ch', self: 'D' },
              { id: 73, dur: 2, type: 'ch', self: 'G' },
              { id: 74, dur: 2, type: 'ch', self: 'D' },
              { id: 75, dur: 2, type: 'ch', self: 'C' },
              { id: 76, dur: 2, type: 'ch', self: 'D' },
              { id: 77, dur: 2, type: 'ch', self: 'G' },
              { id: 78, dur: 2, type: 'ch', self: 'D' },
              { id: 79, dur: 2, type: 'ch', self: 'C' },
              { id: 80, dur: 2, type: 'ch', self: 'D' },
              { id: 81, dur: 2, type: 'ch', self: 'G' },
              { id: 82, dur: 2, type: 'ch', self: 'D' },
              { id: 83, dur: 2, type: 'ch', self: 'C' },
              { id: 84, dur: 2, type: 'ch', self: 'D' },
              { id: 85, dur: 2, type: 'ch', self: 'G' },
              { id: 86, dur: 2, type: 'ch', self: 'D' },
              { id: 87, dur: 2, type: 'ch', self: 'C' },
              { id: 88, dur: 2, type: 'ch', self: 'D' },
              { id: 89, dur: 2, type: 'ch', self: 'G' },
              { id: 90, dur: 2, type: 'ch', self: 'D' },
              { id: 91, dur: 2, type: 'ch', self: 'C' },
              { id: 92, dur: 2, type: 'ch', self: 'D' },
              { id: 93, dur: 2, type: 'ch', self: 'G' },
              { id: 94, dur: 2, type: 'ch', self: 'D' },
              { id: 95, dur: 2, type: 'ch', self: 'C' },
              { id: 96, dur: 2, type: 'ch', self: 'D' },
              { id: 97, dur: 2, type: 'ch', self: 'G' },
              { id: 98, dur: 2, type: 'ch', self: 'D' },
              { id: 99, dur: 2, type: 'ch', self: 'C' },
              { id: 100, dur: 2, type: 'ch', self: 'D' },
              { id: 101, dur: 2, type: 'ch', self: 'G' },
              { id: 102, dur: 2, type: 'ch', self: 'D' },
              { id: 103, dur: 2, type: 'ch', self: 'C' },
              { id: 104, dur: 2, type: 'ch', self: 'D' },
              { id: 105, dur: 2, type: 'ch', self: 'G' },
              { id: 106, dur: 2, type: 'ch', self: 'D' },
              { id: 107, dur: 2, type: 'ch', self: 'C' },
              { id: 108, dur: 2, type: 'ch', self: 'D' },
              { id: 109, dur: 2, type: 'ch', self: 'G' },
              { id: 110, dur: 2, type: 'ch', self: 'D' },
              { id: 111, dur: 2, type: 'ch', self: 'C' },
              { id: 112, dur: 2, type: 'ch', self: 'D' },
              { id: 113, dur: 2, type: 'ch', self: 'G' },
              { id: 114, dur: 2, type: 'ch', self: 'D' },
              { id: 115, dur: 2, type: 'ch', self: 'C' },
              { id: 116, dur: 2, type: 'ch', self: 'D' },
              { id: 117, dur: 2, type: 'ch', self: 'G' },
              { id: 118, dur: 2, type: 'ch', self: 'D' },
              { id: 119, dur: 2, type: 'ch', self: 'C' },
              { id: 120, dur: 2, type: 'ch', self: 'D' },
              { id: 121, dur: 2, type: 'ch', self: 'G' },
              { id: 122, dur: 2, type: 'ch', self: 'D' },
              { id: 123, dur: 2, type: 'ch', self: 'C' },
              { id: 124, dur: 2, type: 'ch', self: 'D' },
              { id: 125, dur: 2, type: 'ch', self: 'G' },
              { id: 126, dur: 2, type: 'ch', self: 'D' },
              { id: 127, dur: 2, type: 'ch', self: 'C' },
              { id: 128, dur: 2, type: 'ch', self: 'D' },
              { id: 129, dur: 2, type: 'ch', self: 'G' },
              { id: 130, dur: 2, type: 'ch', self: 'D' },
              { id: 131, dur: 2, type: 'ch', self: 'C' },
              { id: 132, dur: 2, type: 'ch', self: 'D' },
              { id: 133, dur: 2, type: 'ch', self: 'G' },
              { id: 134, dur: 2, type: 'ch', self: 'D' },
              { id: 135, dur: 2, type: 'ch', self: 'C' },
              { id: 136, dur: 2, type: 'ch', self: 'D' },
              { id: 137, dur: 2, type: 'ch', self: 'G' },
              { id: 138, dur: 2, type: 'ch', self: 'D' },
              { id: 139, dur: 2, type: 'ch', self: 'C' },
              { id: 140, dur: 2, type: 'ch', self: 'D' },
              { id: 141, dur: 2, type: 'ch', self: 'G' },
              { id: 142, dur: 2, type: 'ch', self: 'D' },
              { id: 143, dur: 2, type: 'ch', self: 'C' },
              { id: 144, dur: 2, type: 'ch', self: 'D' },
              { id: 145, dur: 2, type: 'ch', self: 'G' },
              { id: 146, dur: 2, type: 'ch', self: 'D' },
              { id: 147, dur: 2, type: 'ch', self: 'C' },
              { id: 148, dur: 2, type: 'ch', self: 'D' },
              { id: 149, dur: 2, type: 'ch', self: 'G' },
              { id: 150, dur: 2, type: 'ch', self: 'D' },
              { id: 151, dur: 2, type: 'ch', self: 'C' },
              { id: 152, dur: 2, type: 'ch', self: 'D' },
              { id: 153, dur: 2, type: 'ch', self: 'G' },
              { id: 154, dur: 2, type: 'ch', self: 'D' },
              { id: 155, dur: 2, type: 'ch', self: 'C' },
              { id: 156, dur: 2, type: 'ch', self: 'D' },
              { id: 157, dur: 2, type: 'ch', self: 'G' },
              { id: 158, dur: 2, type: 'ch', self: 'D' },
              { id: 159, dur: 2, type: 'ch', self: 'C' },
              { id: 160, dur: 2, type: 'ch', self: 'D' },
              { id: 161, dur: 2, type: 'ch', self: 'G' },
              { id: 162, dur: 2, type: 'ch', self: 'D' },
              { id: 163, dur: 2, type: 'ch', self: 'C' },
              { id: 164, dur: 2, type: 'ch', self: 'D' },
              { id: 165, dur: 2, type: 'ch', self: 'G' },
              { id: 166, dur: 2, type: 'ch', self: 'D' },
              { id: 167, dur: 2, type: 'ch', self: 'C' },
              { id: 168, dur: 2, type: 'ch', self: 'D' },
              { id: 169, dur: 2, type: 'ch', self: 'G' },
              { id: 170, dur: 2, type: 'ch', self: 'D' },
              { id: 171, dur: 2, type: 'ch', self: 'C' },
              { id: 172, dur: 2, type: 'ch', self: 'D' },
              { id: 173, dur: 2, type: 'ch', self: 'G' },
              { id: 174, dur: 2, type: 'ch', self: 'D' },
              { id: 175, dur: 2, type: 'ch', self: 'C' },
              { id: 176, dur: 2, type: 'ch', self: 'D' },
              { id: 177, dur: 2, type: 'ch', self: 'G' },
              { id: 178, dur: 2, type: 'ch', self: 'D' },
              { id: 179, dur: 2, type: 'ch', self: 'C' },
              { id: 180, dur: 2, type: 'ch', self: 'D' },
              { id: 181, dur: 2, type: 'ch', self: 'G' },
              { id: 182, dur: 2, type: 'ch', self: 'D' },
              { id: 183, dur: 2, type: 'ch', self: 'C' },
              { id: 184, dur: 2, type: 'ch', self: 'D' },
              { id: 185, dur: 2, type: 'ch', self: 'G' },
              { id: 186, dur: 2, type: 'ch', self: 'D' },
              { id: 187, dur: 2, type: 'ch', self: 'C' },
              { id: 188, dur: 2, type: 'ch', self: 'D' },
              { id: 189, dur: 2, type: 'ch', self: 'G' },
              { id: 190, dur: 2, type: 'ch', self: 'D' },
              { id: 191, dur: 2, type: 'ch', self: 'C' },
              { id: 192, dur: 2, type: 'ch', self: 'D' },
              { id: 193, dur: 2, type: 'ch', self: 'G' },
              { id: 194, dur: 2, type: 'ch', self: 'D' },
              { id: 195, dur: 2, type: 'ch', self: 'C' },
              { id: 196, dur: 2, type: 'ch', self: 'D' },
              { id: 197, dur: 2, type: 'ch', self: 'G' },
            ],
            song: {
              id: '6544a5ba6d2b448ea1cdd4c6',
              name: '22',
              key: 'G major',
              bpm: [104],
              genre: 'Pop',
              artists: [
                { name: 'Taylor Swift', id: '650690f53680a73069aa60c3' },
              ],
            },
          },
          {
            id: '657133f734e69c78f8553bb1',
            source: 'sQtnhwU2R9Y',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 1,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'Em',
                bpm: 126,
                syncPnt: '1970-01-01T00:00:00.250Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'C' },
              { id: 3, dur: 4, type: 'ch', self: 'G' },
              { id: 4, dur: 4, type: 'ch', self: 'D' },
              { id: 5, dur: 4, type: 'ch', self: 'Em' },
              { id: 6, dur: 4, type: 'ch', self: 'C' },
              { id: 7, dur: 4, type: 'ch', self: 'G' },
              { id: 8, dur: 4, type: 'ch', self: 'D' },
              { id: 9, dur: 4, type: 'ch', self: 'Em' },
              { id: 10, dur: 4, type: 'ch', self: 'C' },
              { id: 11, dur: 4, type: 'ch', self: 'G' },
              { id: 12, dur: 4, type: 'ch', self: 'D' },
              { id: 13, dur: 4, type: 'ch', self: 'Em' },
              { id: 14, dur: 4, type: 'ch', self: 'C' },
              { id: 15, dur: 4, type: 'ch', self: 'G' },
              { id: 16, dur: 4, type: 'ch', self: 'D' },
              { id: 17, dur: 4, type: 'ch', self: 'Em' },
              { id: 18, dur: 4, type: 'ch', self: 'C' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'D' },
              { id: 21, dur: 8, type: 'ch', self: 'Am' },
              { id: 22, dur: 4, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'D' },
              { id: 24, dur: 8, type: 'ch', self: 'Am' },
              { id: 25, dur: 4, type: 'ch', self: 'G' },
              { id: 26, dur: 4, type: 'ch', self: 'D' },
              { id: 27, dur: 8, type: 'ch', self: 'G' },
              { id: 28, dur: 8, type: 'ch', self: 'Em' },
              { id: 29, dur: 8, type: 'ch', self: 'Am' },
              { id: 30, dur: 4, type: 'ch', self: 'C' },
              { id: 31, dur: 4, type: 'ch', self: 'D' },
              { id: 32, dur: 8, type: 'ch', self: 'G' },
              { id: 33, dur: 8, type: 'ch', self: 'Em' },
              { id: 34, dur: 8, type: 'ch', self: 'Am' },
              { id: 35, dur: 4, type: 'ch', self: 'C' },
              { id: 36, dur: 4, type: 'ch', self: 'D' },
              { id: 37, dur: 4, type: 'ch', self: 'Em' },
              { id: 38, dur: 4, type: 'ch', self: 'C' },
              { id: 39, dur: 4, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'D' },
              { id: 41, dur: 4, type: 'ch', self: 'Em' },
              { id: 42, dur: 4, type: 'ch', self: 'C' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'D' },
              { id: 45, dur: 4, type: 'ch', self: 'Em' },
              { id: 46, dur: 4, type: 'ch', self: 'C' },
              { id: 47, dur: 4, type: 'ch', self: 'G' },
              { id: 48, dur: 4, type: 'ch', self: 'D' },
              { id: 49, dur: 4, type: 'ch', self: 'Em' },
              { id: 50, dur: 4, type: 'ch', self: 'C' },
              { id: 51, dur: 4, type: 'ch', self: 'G' },
              { id: 52, dur: 4, type: 'ch', self: 'D' },
              { id: 53, dur: 4, type: 'ch', self: 'Em' },
              { id: 54, dur: 4, type: 'ch', self: 'C' },
              { id: 55, dur: 4, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'D' },
              { id: 57, dur: 4, type: 'ch', self: 'Em' },
              { id: 58, dur: 4, type: 'ch', self: 'C' },
              { id: 59, dur: 4, type: 'ch', self: 'G' },
              { id: 60, dur: 4, type: 'ch', self: 'D' },
              { id: 61, dur: 8, type: 'ch', self: 'Am' },
              { id: 62, dur: 4, type: 'ch', self: 'G' },
              { id: 63, dur: 4, type: 'ch', self: 'D' },
              { id: 64, dur: 8, type: 'ch', self: 'Am' },
              { id: 65, dur: 4, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'D' },
              { id: 67, dur: 8, type: 'ch', self: 'G' },
              { id: 68, dur: 8, type: 'ch', self: 'Em' },
              { id: 69, dur: 8, type: 'ch', self: 'Am' },
              { id: 70, dur: 4, type: 'ch', self: 'C' },
              { id: 71, dur: 4, type: 'ch', self: 'D' },
              { id: 72, dur: 8, type: 'ch', self: 'G' },
              { id: 73, dur: 8, type: 'ch', self: 'Em' },
              { id: 74, dur: 8, type: 'ch', self: 'Am' },
              { id: 75, dur: 4, type: 'ch', self: 'C' },
              { id: 76, dur: 4, type: 'ch', self: 'D' },
              { id: 77, dur: 4, type: 'ch', self: 'Em' },
              { id: 78, dur: 4, type: 'ch', self: 'C' },
              { id: 79, dur: 4, type: 'ch', self: 'G' },
              { id: 80, dur: 4, type: 'ch', self: 'D' },
              { id: 81, dur: 4, type: 'ch', self: 'Em' },
              { id: 82, dur: 4, type: 'ch', self: 'C' },
              { id: 83, dur: 4, type: 'ch', self: 'G' },
              { id: 84, dur: 4, type: 'ch', self: 'D' },
              { id: 85, dur: 8, type: 'ch', self: 'Am' },
              { id: 86, dur: 4, type: 'ch', self: 'G' },
              { id: 87, dur: 4, type: 'ch', self: 'D' },
              { id: 88, dur: 8, type: 'ch', self: 'Am' },
              { id: 89, dur: 4, type: 'ch', self: 'G' },
              { id: 90, dur: 4, type: 'ch', self: 'D' },
              { id: 91, dur: 8, type: 'ch', self: 'G' },
              { id: 92, dur: 8, type: 'ch', self: 'Em' },
              { id: 93, dur: 8, type: 'ch', self: 'Am' },
              { id: 94, dur: 4, type: 'ch', self: 'C' },
              { id: 95, dur: 4, type: 'ch', self: 'D' },
              { id: 96, dur: 8, type: 'ch', self: 'G' },
              { id: 97, dur: 8, type: 'ch', self: 'Em' },
              { id: 98, dur: 8, type: 'ch', self: 'Am' },
              { id: 99, dur: 4, type: 'ch', self: 'C' },
              { id: 100, dur: 4, type: 'ch', self: 'D' },
              { id: 101, dur: 4, type: 'ch', self: 'Em' },
              { id: 102, dur: 4, type: 'ch', self: 'C' },
              { id: 103, dur: 4, type: 'ch', self: 'G' },
              { id: 104, dur: 4, type: 'ch', self: 'D' },
              { id: 105, dur: 4, type: 'ch', self: 'Em' },
              { id: 106, dur: 4, type: 'ch', self: 'C' },
              { id: 107, dur: 4, type: 'ch', self: 'G' },
              { id: 108, dur: 4, type: 'ch', self: 'D' },
              { id: 109, dur: 4, type: 'ch', self: 'Em' },
              { id: 110, dur: 4, type: 'ch', self: 'C' },
              { id: 111, dur: 4, type: 'ch', self: 'G' },
              { id: 112, dur: 4, type: 'ch', self: 'D' },
              { id: 113, dur: 4, type: 'ch', self: 'Em' },
              { id: 114, dur: 4, type: 'ch', self: 'C' },
              { id: 115, dur: 4, type: 'ch', self: 'G' },
              { id: 116, dur: 4, type: 'ch', self: 'D' },
            ],
            song: {
              id: '6571206734e69c78f8553bb0',
              name: 'All Of Me',
              key: 'G# major',
              bpm: [126],
              genre: 'R&B',
              artists: [
                { name: ' John Legend', id: '65711f789365754d3ed353b8' },
              ],
            },
          },
          {
            id: '6571503a34e69c78f8553bb4',
            source: 'EkHTsc9PU2A',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 4,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'G',
                bpm: 151,
                syncPnt: '1970-01-01T00:00:07.000Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'D' },
              { id: 3, dur: 8, type: 'ch', self: 'Em' },
              { id: 4, dur: 8, type: 'ch', self: 'C' },
              { id: 5, dur: 8, type: 'ch', self: 'G' },
              { id: 6, dur: 8, type: 'ch', self: 'D' },
              { id: 7, dur: 8, type: 'ch', self: 'Em' },
              { id: 8, dur: 8, type: 'ch', self: 'C' },
              { id: 9, dur: 8, type: 'ch', self: 'G' },
              { id: 10, dur: 8, type: 'ch', self: 'D' },
              { id: 11, dur: 8, type: 'ch', self: 'Em' },
              { id: 12, dur: 8, type: 'ch', self: 'C' },
              { id: 13, dur: 8, type: 'ch', self: 'G' },
              { id: 14, dur: 8, type: 'ch', self: 'D' },
              { id: 15, dur: 8, type: 'ch', self: 'Em' },
              { id: 16, dur: 8, type: 'ch', self: 'C' },
              { id: 17, dur: 8, type: 'ch', self: 'G' },
              { id: 18, dur: 8, type: 'ch', self: 'D' },
              { id: 19, dur: 8, type: 'ch', self: 'Em' },
              { id: 20, dur: 8, type: 'ch', self: 'C' },
              { id: 21, dur: 8, type: 'ch', self: 'G' },
              { id: 22, dur: 8, type: 'ch', self: 'D' },
              { id: 23, dur: 8, type: 'ch', self: 'Em' },
              { id: 24, dur: 8, type: 'ch', self: 'C' },
              { id: 25, dur: 8, type: 'ch', self: 'G' },
              { id: 26, dur: 8, type: 'ch', self: 'D' },
              { id: 27, dur: 8, type: 'ch', self: 'Em' },
              { id: 28, dur: 8, type: 'ch', self: 'C' },
              { id: 29, dur: 8, type: 'ch', self: 'A' },
              { id: 30, dur: 8, type: 'ch', self: 'G' },
              { id: 31, dur: 8, type: 'ch', self: 'D' },
              { id: 32, dur: 8, type: 'ch', self: 'Em' },
              { id: 33, dur: 8, type: 'ch', self: 'C' },
              { id: 34, dur: 8, type: 'ch', self: 'G' },
              { id: 35, dur: 8, type: 'ch', self: 'D' },
              { id: 36, dur: 8, type: 'ch', self: 'Em' },
              { id: 37, dur: 8, type: 'ch', self: 'C' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'D' },
              { id: 40, dur: 4, type: 'ch', self: 'Em' },
              { id: 41, dur: 4, type: 'ch', self: 'D' },
              { id: 42, dur: 8, type: 'ch', self: 'C' },
              { id: 43, dur: 8, type: 'ch', self: 'A' },
              { id: 44, dur: 4, type: 'ch', self: 'G' },
              { id: 45, dur: 4, type: 'ch', self: 'Bm' },
              { id: 46, dur: 4, type: 'ch', self: 'Em' },
              { id: 47, dur: 4, type: 'ch', self: 'D' },
              { id: 48, dur: 8, type: 'ch', self: 'C' },
              { id: 49, dur: 8, type: 'ch', self: 'A' },
              { id: 50, dur: 8, type: 'ch', self: 'G' },
              { id: 51, dur: 8, type: 'ch', self: 'D' },
              { id: 52, dur: 8, type: 'ch', self: 'Em' },
              { id: 53, dur: 8, type: 'ch', self: 'C' },
              { id: 54, dur: 8, type: 'ch', self: 'G' },
              { id: 55, dur: 8, type: 'ch', self: 'D' },
              { id: 56, dur: 8, type: 'ch', self: 'Em' },
              { id: 57, dur: 8, type: 'ch', self: 'C' },
              { id: 58, dur: 8, type: 'ch', self: 'G' },
              { id: 59, dur: 8, type: 'ch', self: 'D' },
              { id: 60, dur: 8, type: 'ch', self: 'Em' },
              { id: 61, dur: 8, type: 'ch', self: 'C' },
              { id: 62, dur: 8, type: 'ch', self: 'G' },
              { id: 63, dur: 8, type: 'ch', self: 'D' },
              { id: 64, dur: 8, type: 'ch', self: 'Em' },
              { id: 65, dur: 8, type: 'ch', self: 'C' },
              { id: 66, dur: 8, type: 'ch', self: 'G' },
              { id: 67, dur: 8, type: 'ch', self: 'D' },
              { id: 68, dur: 8, type: 'ch', self: 'Em' },
              { id: 69, dur: 8, type: 'ch', self: 'C' },
              { id: 70, dur: 8, type: 'ch', self: 'A' },
            ],
            song: {
              id: '65714b5f34e69c78f8553bb3',
              name: 'Im Yours',
              key: 'B major',
              bpm: [151],
              genre: 'Pop',
              artists: [{ name: 'Jason Mraz', id: '65714ab034e69c78f8553bb2' }],
            },
          },
          {
            id: '65715ce434e69c78f8553bb7',
            source: 'fdz_cabS9BU',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 79,
                syncPnt: '1970-01-01T00:00:00.100Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 1.5, type: 'ch', self: 'F' },
              { id: 3, dur: 2.5, type: 'ch', self: 'G' },
              { id: 4, dur: 4, type: 'ch', self: 'C' },
              { id: 5, dur: 1.5, type: 'ch', self: 'F' },
              { id: 6, dur: 2.5, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'C' },
              { id: 8, dur: 1.5, type: 'ch', self: 'F' },
              { id: 9, dur: 2.5, type: 'ch', self: 'G' },
              { id: 10, dur: 4, type: 'ch', self: 'C' },
              { id: 11, dur: 1.5, type: 'ch', self: 'F' },
              { id: 12, dur: 2.5, type: 'ch', self: 'G' },
              { id: 13, dur: 4, type: 'ch', self: 'C' },
              { id: 14, dur: 1.5, type: 'ch', self: 'F' },
              { id: 15, dur: 2.5, type: 'ch', self: 'G' },
              { id: 16, dur: 4, type: 'ch', self: 'C' },
              { id: 17, dur: 1.5, type: 'ch', self: 'F' },
              { id: 18, dur: 2.5, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'C' },
              { id: 20, dur: 1.5, type: 'ch', self: 'F' },
              { id: 21, dur: 2.5, type: 'ch', self: 'G' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 23, dur: 1.5, type: 'ch', self: 'F' },
              { id: 24, dur: 2.5, type: 'ch', self: 'G' },
              { id: 25, dur: 4, type: 'ch', self: 'Dm' },
              { id: 26, dur: 1.5, type: 'ch', self: 'G' },
              { id: 27, dur: 2.5, type: 'ch', self: 'C' },
              { id: 28, dur: 4, type: 'ch', self: 'Dm' },
              { id: 29, dur: 4, type: 'ch', self: 'G' },
              { id: 30, dur: 4, type: 'ch', self: 'Dm' },
              { id: 31, dur: 1.5, type: 'ch', self: 'G' },
              { id: 32, dur: 2.5, type: 'ch', self: 'Am' },
              { id: 33, dur: 4, type: 'ch', self: 'Dm' },
              { id: 34, dur: 4, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'C' },
              { id: 36, dur: 1.5, type: 'ch', self: 'F' },
              { id: 37, dur: 2.5, type: 'ch', self: 'G' },
              { id: 38, dur: 4, type: 'ch', self: 'C' },
              { id: 39, dur: 1.5, type: 'ch', self: 'F' },
              { id: 40, dur: 2.5, type: 'ch', self: 'G' },
              { id: 41, dur: 4, type: 'ch', self: 'C' },
              { id: 42, dur: 1.5, type: 'ch', self: 'F' },
              { id: 43, dur: 2.5, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'C' },
              { id: 45, dur: 1.5, type: 'ch', self: 'F' },
              { id: 46, dur: 2.5, type: 'ch', self: 'G' },
              { id: 47, dur: 1, type: 'ch', self: 'Am' },
              { id: 48, dur: 1, type: 'ch', self: 'G' },
              { id: 49, dur: 1, type: 'ch', self: 'F' },
              { id: 50, dur: 1, type: 'ch', self: 'C' },
              { id: 51, dur: 1, type: 'ch', self: 'Dm' },
              { id: 52, dur: 0.5, type: 'ch', self: 'G' },
              { id: 53, dur: 2.5, type: 'ch', self: 'C' },
              { id: 54, dur: 4, type: 'ch', self: 'C' },
              { id: 55, dur: 1.5, type: 'ch', self: 'F' },
              { id: 56, dur: 2.5, type: 'ch', self: 'G' },
              { id: 57, dur: 4, type: 'ch', self: 'C' },
              { id: 58, dur: 1.5, type: 'ch', self: 'F' },
              { id: 59, dur: 2.5, type: 'ch', self: 'G' },
              { id: 60, dur: 4, type: 'ch', self: 'C' },
              { id: 61, dur: 1.5, type: 'ch', self: 'F' },
              { id: 62, dur: 2.5, type: 'ch', self: 'G' },
              { id: 63, dur: 4, type: 'ch', self: 'C' },
              { id: 64, dur: 1.5, type: 'ch', self: 'F' },
              { id: 65, dur: 2.5, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'C' },
              { id: 67, dur: 1.5, type: 'ch', self: 'F' },
              { id: 68, dur: 2.5, type: 'ch', self: 'G' },
              { id: 69, dur: 4, type: 'ch', self: 'C' },
              { id: 70, dur: 1.5, type: 'ch', self: 'F' },
              { id: 71, dur: 2.5, type: 'ch', self: 'G' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 1.5, type: 'ch', self: 'F' },
              { id: 74, dur: 2.5, type: 'ch', self: 'G' },
              { id: 75, dur: 4, type: 'ch', self: 'C' },
              { id: 76, dur: 1.5, type: 'ch', self: 'F' },
              { id: 77, dur: 2.5, type: 'ch', self: 'G' },
              { id: 78, dur: 4, type: 'ch', self: 'Dm' },
              { id: 79, dur: 1.5, type: 'ch', self: 'G' },
              { id: 80, dur: 2.5, type: 'ch', self: 'C' },
              { id: 81, dur: 4, type: 'ch', self: 'Dm' },
              { id: 82, dur: 4, type: 'ch', self: 'G' },
              { id: 83, dur: 4, type: 'ch', self: 'Dm' },
              { id: 84, dur: 1.5, type: 'ch', self: 'G' },
              { id: 85, dur: 2.5, type: 'ch', self: 'Am' },
              { id: 86, dur: 4, type: 'ch', self: 'Dm' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 4, type: 'ch', self: 'C' },
              { id: 89, dur: 1.5, type: 'ch', self: 'F' },
              { id: 90, dur: 2.5, type: 'ch', self: 'G' },
              { id: 91, dur: 4, type: 'ch', self: 'C' },
              { id: 92, dur: 1.5, type: 'ch', self: 'F' },
              { id: 93, dur: 2.5, type: 'ch', self: 'G' },
              { id: 94, dur: 4, type: 'ch', self: 'C' },
              { id: 95, dur: 1.5, type: 'ch', self: 'F' },
              { id: 96, dur: 2.5, type: 'ch', self: 'G' },
              { id: 97, dur: 4, type: 'ch', self: 'C' },
              { id: 98, dur: 1.5, type: 'ch', self: 'F' },
              { id: 99, dur: 2.5, type: 'ch', self: 'G' },
              { id: 100, dur: 1, type: 'ch', self: 'Am' },
              { id: 101, dur: 1, type: 'ch', self: 'G' },
              { id: 102, dur: 1, type: 'ch', self: 'F' },
              { id: 103, dur: 1, type: 'ch', self: 'C' },
              { id: 104, dur: 1, type: 'ch', self: 'Dm' },
              { id: 105, dur: 0.5, type: 'ch', self: 'G' },
              { id: 106, dur: 2.5, type: 'ch', self: 'C' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
              { id: 108, dur: 1.5, type: 'ch', self: 'F' },
              { id: 109, dur: 2.5, type: 'ch', self: 'G' },
              { id: 110, dur: 4, type: 'ch', self: 'C' },
              { id: 111, dur: 1.5, type: 'ch', self: 'F' },
              { id: 112, dur: 2.5, type: 'ch', self: 'G' },
              { id: 113, dur: 4, type: 'ch', self: 'C' },
              { id: 114, dur: 1.5, type: 'ch', self: 'F' },
              { id: 115, dur: 2.5, type: 'ch', self: 'G' },
              { id: 116, dur: 4, type: 'ch', self: 'C' },
              { id: 117, dur: 1.5, type: 'ch', self: 'F' },
              { id: 118, dur: 2.5, type: 'ch', self: 'G' },
              { id: 119, dur: 4, type: 'ch', self: 'C' },
              { id: 120, dur: 1.5, type: 'ch', self: 'F' },
              { id: 121, dur: 2.5, type: 'ch', self: 'G' },
              { id: 122, dur: 4, type: 'ch', self: 'C' },
              { id: 123, dur: 1.5, type: 'ch', self: 'F' },
              { id: 124, dur: 2.5, type: 'ch', self: 'G' },
              { id: 125, dur: 4, type: 'ch', self: 'C' },
              { id: 126, dur: 1.5, type: 'ch', self: 'F' },
              { id: 127, dur: 2.5, type: 'ch', self: 'G' },
              { id: 128, dur: 4, type: 'ch', self: 'C' },
              { id: 129, dur: 1.5, type: 'ch', self: 'F' },
              { id: 130, dur: 2.5, type: 'ch', self: 'G' },
              { id: 131, dur: 1, type: 'ch', self: 'Am' },
              { id: 132, dur: 1, type: 'ch', self: 'G' },
              { id: 133, dur: 1, type: 'ch', self: 'F' },
              { id: 134, dur: 1, type: 'ch', self: 'C' },
              { id: 135, dur: 1, type: 'ch', self: 'Dm' },
              { id: 136, dur: 0.5, type: 'ch', self: 'G' },
              { id: 137, dur: 2.5, type: 'ch', self: 'C' },
              { id: 138, dur: 1, type: 'ch', self: 'Am' },
              { id: 139, dur: 1, type: 'ch', self: 'G' },
              { id: 140, dur: 1, type: 'ch', self: 'F' },
              { id: 141, dur: 1, type: 'ch', self: 'C' },
              { id: 142, dur: 1, type: 'ch', self: 'Dm' },
              { id: 143, dur: 0.5, type: 'ch', self: 'G' },
              { id: 144, dur: 2.5, type: 'ch', self: 'C' },
              { id: 145, dur: 1, type: 'ch', self: 'Am' },
              { id: 146, dur: 1, type: 'ch', self: 'G' },
              { id: 147, dur: 1, type: 'ch', self: 'F' },
              { id: 148, dur: 1, type: 'ch', self: 'C' },
              { id: 149, dur: 1, type: 'ch', self: 'Dm' },
              { id: 150, dur: 1, type: 'ch', self: 'G' },
              { id: 151, dur: 2, type: 'ch', self: 'C' },
            ],
            song: {
              id: '657151d934e69c78f8553bb6',
              name: 'Thinking Out Loud',
              key: 'D major',
              bpm: [79],
              genre: 'Pop',
              artists: [{ name: 'Ed Sheeran', id: '657151a534e69c78f8553bb5' }],
            },
          },
          {
            id: '6573e59a35ebe23127603814',
            source: 'iKzRIweSBLA',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 1,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'G',
                bpm: 64,
                syncPnt: '1970-01-01T00:00:04.000Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'Em' },
              { id: 3, dur: 4, type: 'ch', self: 'C' },
              { id: 4, dur: 4, type: 'ch', self: 'D' },
              { id: 5, dur: 4, type: 'ch', self: 'G' },
              { id: 6, dur: 4, type: 'ch', self: 'Em' },
              { id: 7, dur: 4, type: 'ch', self: 'C' },
              { id: 8, dur: 4.3, type: 'ch', self: 'D' },
              { id: 9, dur: 4, type: 'ch', self: 'G' },
              { id: 10, dur: 4, type: 'ch', self: 'Em' },
              { id: 11, dur: 4, type: 'ch', self: 'C' },
              { id: 12, dur: 2, type: 'ch', self: 'G' },
              { id: 13, dur: 2, type: 'ch', self: 'D' },
              { id: 14, dur: 4, type: 'ch', self: 'G' },
              { id: 15, dur: 4.2, type: 'ch', self: 'Em' },
              { id: 16, dur: 4, type: 'ch', self: 'C' },
              { id: 17, dur: 4.3, type: 'ch', self: 'D' },
              { id: 18, dur: 2, type: 'ch', self: 'Em' },
              { id: 19, dur: 2, type: 'ch', self: 'C' },
              { id: 20, dur: 2, type: 'ch', self: 'G' },
              { id: 21, dur: 2, type: 'ch', self: 'D' },
              { id: 22, dur: 2, type: 'ch', self: 'Em' },
              { id: 23, dur: 2, type: 'ch', self: 'C' },
              { id: 24, dur: 2, type: 'ch', self: 'G' },
              { id: 25, dur: 2, type: 'ch', self: 'D' },
              { id: 26, dur: 2, type: 'ch', self: 'Em' },
              { id: 27, dur: 2, type: 'ch', self: 'C' },
              { id: 28, dur: 2, type: 'ch', self: 'G' },
              { id: 29, dur: 2, type: 'ch', self: 'D' },
              { id: 30, dur: 2, type: 'ch', self: 'Em' },
              { id: 31, dur: 2, type: 'ch', self: 'C' },
              { id: 32, dur: 2, type: 'ch', self: 'G' },
              { id: 33, dur: 2, type: 'ch', self: 'D' },
              { id: 34, dur: 1, type: 'ch', self: 'G' },
              { id: 36, dur: 1, type: 'ch', self: 'D' },
              { id: 37, dur: 1, type: 'ch', self: 'Em' },
              { id: 38, dur: 1, type: 'ch', self: 'D' },
              { id: 39, dur: 2.3, type: 'ch', self: 'C' },
              { id: 40, dur: 2, type: 'ch', self: 'D' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 4, type: 'ch', self: 'Em' },
              { id: 43, dur: 4, type: 'ch', self: 'C' },
              { id: 44, dur: 4, type: 'ch', self: 'D' },
              { id: 45, dur: 4, type: 'ch', self: 'G' },
              { id: 46, dur: 4, type: 'ch', self: 'Em' },
              { id: 47, dur: 4.2, type: 'ch', self: 'C' },
              { id: 48, dur: 4, type: 'ch', self: 'D' },
              { id: 49, dur: 4, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'Em' },
              { id: 51, dur: 4, type: 'ch', self: 'C' },
              { id: 52, dur: 2, type: 'ch', self: 'G' },
              { id: 53, dur: 2.2, type: 'ch', self: 'D' },
              { id: 54, dur: 4, type: 'ch', self: 'G' },
              { id: 55, dur: 4, type: 'ch', self: 'Em' },
              { id: 56, dur: 4, type: 'ch', self: 'C' },
              { id: 57, dur: 4.2, type: 'ch', self: 'D' },
              { id: 58, dur: 2, type: 'ch', self: 'Em' },
              { id: 59, dur: 2, type: 'ch', self: 'C' },
              { id: 60, dur: 2, type: 'ch', self: 'G' },
              { id: 61, dur: 2, type: 'ch', self: 'D' },
              { id: 62, dur: 2, type: 'ch', self: 'Em' },
              { id: 63, dur: 2, type: 'ch', self: 'C' },
              { id: 64, dur: 2, type: 'ch', self: 'G' },
              { id: 65, dur: 2, type: 'ch', self: 'D' },
              { id: 66, dur: 2, type: 'ch', self: 'Em' },
              { id: 67, dur: 2, type: 'ch', self: 'C' },
              { id: 68, dur: 2, type: 'ch', self: 'G' },
              { id: 69, dur: 2, type: 'ch', self: 'D' },
              { id: 70, dur: 2, type: 'ch', self: 'Em' },
              { id: 71, dur: 2, type: 'ch', self: 'C' },
              { id: 72, dur: 2.2, type: 'ch', self: 'G' },
              { id: 73, dur: 2, type: 'ch', self: 'D' },
              { id: 74, dur: 4.1, type: 'ch', self: 'G' },
              { id: 75, dur: 4, type: 'ch', self: 'Em' },
              { id: 76, dur: 4.1, type: 'ch', self: 'C' },
              { id: 77, dur: 4.1, type: 'ch', self: 'D' },
              { id: 78, dur: 2, type: 'ch', self: 'Em' },
              { id: 79, dur: 2, type: 'ch', self: 'C' },
              { id: 80, dur: 2, type: 'ch', self: 'G' },
              { id: 81, dur: 2, type: 'ch', self: 'D' },
              { id: 82, dur: 2, type: 'ch', self: 'Em' },
              { id: 83, dur: 2, type: 'ch', self: 'C' },
              { id: 84, dur: 2, type: 'ch', self: 'G' },
              { id: 85, dur: 2, type: 'ch', self: 'D' },
              { id: 86, dur: 2, type: 'ch', self: 'Em' },
              { id: 87, dur: 2, type: 'ch', self: 'C' },
              { id: 88, dur: 2, type: 'ch', self: 'G' },
              { id: 89, dur: 2, type: 'ch', self: 'D' },
              { id: 90, dur: 2.1, type: 'ch', self: 'Em' },
              { id: 91, dur: 2, type: 'ch', self: 'C' },
              { id: 92, dur: 2, type: 'ch', self: 'G' },
              { id: 93, dur: 2.1, type: 'ch', self: 'D' },
              { id: 96, dur: 4, type: 'ch', self: 'G' },
              { id: 97, dur: 4, type: 'ch', self: 'D' },
              { id: 98, dur: 1, type: 'ch', self: 'G' },
              { id: 99, dur: 1, type: 'ch', self: 'D' },
              { id: 100, dur: 1, type: 'ch', self: 'Em' },
              { id: 101, dur: 1, type: 'ch', self: 'D' },
              { id: 102, dur: 2.3, type: 'ch', self: 'C' },
              { id: 104, dur: 2.1, type: 'ch', self: 'D' },
              { id: 105, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '6573cd4e35ebe23127603813',
              name: 'Perfect',
              key: 'G# major',
              bpm: [64],
              genre: 'Pop',
              artists: [{ name: 'Ed Sheeran', id: '657151a534e69c78f8553bb5' }],
            },
          },
          {
            id: '6573f54d35ebe23127603818',
            source: 'XFkzRNyygfk',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 7.7,
                type: 'ch',
                self: 'G',
                bpm: 92,
                syncPnt: '1970-01-01T00:00:00.300Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 7.7, type: 'ch', self: 'B' },
              { id: 3, dur: 7.8, type: 'ch', self: 'C' },
              { id: 4, dur: 7.8, type: 'ch', self: 'Cm' },
              { id: 5, dur: 7.7, type: 'ch', self: 'G' },
              { id: 6, dur: 7.7, type: 'ch', self: 'B' },
              { id: 7, dur: 7.8, type: 'ch', self: 'C' },
              { id: 8, dur: 7.8, type: 'ch', self: 'Cm' },
              { id: 9, dur: 7.9, type: 'ch', self: 'G' },
              { id: 10, dur: 8.1, type: 'ch', self: 'B' },
              { id: 11, dur: 7.9, type: 'ch', self: 'C' },
              { id: 14, dur: 8.3, type: 'ch', self: 'Cm' },
              { id: 15, dur: 8, type: 'ch', self: 'G' },
              { id: 16, dur: 8, type: 'ch', self: 'B' },
              { id: 17, dur: 8, type: 'ch', self: 'C' },
              { id: 18, dur: 8, type: 'ch', self: 'Cm' },
              { id: 19, dur: 8, type: 'ch', self: 'G' },
              { id: 20, dur: 8, type: 'ch', self: 'B' },
              { id: 21, dur: 8, type: 'ch', self: 'C' },
              { id: 22, dur: 8.1, type: 'ch', self: 'Cm' },
              { id: 23, dur: 8.1, type: 'ch', self: 'G' },
              { id: 24, dur: 8.1, type: 'ch', self: 'B' },
              { id: 25, dur: 8.1, type: 'ch', self: 'C' },
              { id: 26, dur: 8.1, type: 'ch', self: 'Cm' },
              { id: 27, dur: 8, type: 'ch', self: 'G' },
              { id: 28, dur: 8, type: 'ch', self: 'B' },
              { id: 29, dur: 8, type: 'ch', self: 'C' },
              { id: 30, dur: 8, type: 'ch', self: 'Cm' },
              { id: 31, dur: 8, type: 'ch', self: 'G' },
              { id: 32, dur: 8, type: 'ch', self: 'B' },
              { id: 33, dur: 8, type: 'ch', self: 'C' },
              { id: 34, dur: 8, type: 'ch', self: 'Cm' },
              { id: 35, dur: 8, type: 'ch', self: 'G' },
              { id: 36, dur: 8, type: 'ch', self: 'B' },
              { id: 37, dur: 7.8, type: 'ch', self: 'C' },
              { id: 38, dur: 7.7, type: 'ch', self: 'Cm' },
              { id: 39, dur: 7.8, type: 'ch', self: 'G' },
              { id: 40, dur: 7.8, type: 'ch', self: 'B' },
              { id: 41, dur: 8, type: 'ch', self: 'C' },
              { id: 42, dur: 8, type: 'ch', self: 'Cm' },
              { id: 43, dur: 7.7, type: 'ch', self: 'G' },
              { id: 44, dur: 7.9, type: 'ch', self: 'B' },
              { id: 45, dur: 8.1, type: 'ch', self: 'C' },
              { id: 46, dur: 8.1, type: 'ch', self: 'Cm' },
              { id: 47, dur: 8, type: 'ch', self: 'G' },
            ],
            song: {
              id: '6573ec7b35ebe23127603817',
              name: 'Creep',
              key: 'G major',
              bpm: [92],
              genre: 'Grunge',
              artists: [{ name: 'Radiohead', id: '6573ec2135ebe23127603815' }],
            },
          },
          {
            id: '65740bf235ebe2312760381d',
            source: 'nSDgHBxUbVQ',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'D',
                bpm: 108,
                syncPnt: '1970-01-01T00:00:01.500Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'Bm' },
              { id: 3, dur: 8, type: 'ch', self: 'A' },
              { id: 4, dur: 8, type: 'ch', self: 'G' },
              { id: 5, dur: 8, type: 'ch', self: 'D' },
              { id: 6, dur: 8, type: 'ch', self: 'Bm' },
              { id: 7, dur: 8, type: 'ch', self: 'A' },
              { id: 8, dur: 8, type: 'ch', self: 'G' },
              { id: 9, dur: 8, type: 'ch', self: 'D' },
              { id: 10, dur: 8, type: 'ch', self: 'Bm' },
              { id: 11, dur: 8, type: 'ch', self: 'A' },
              { id: 12, dur: 8, type: 'ch', self: 'G' },
              { id: 13, dur: 3.9, type: 'ch', self: 'Bm' },
              { id: 14, dur: 3.9, type: 'ch', self: 'G' },
              { id: 15, dur: 3.9, type: 'ch', self: 'D' },
              { id: 16, dur: 3.9, type: 'ch', self: 'A' },
              { id: 17, dur: 4, type: 'ch', self: 'Bm' },
              { id: 18, dur: 4, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'D' },
              { id: 20, dur: 4, type: 'ch', self: 'A' },
              { id: 21, dur: 8, type: 'ch', self: 'D' },
              { id: 22, dur: 8, type: 'ch', self: 'A' },
              { id: 23, dur: 8, type: 'ch', self: 'Bm' },
              { id: 24, dur: 8, type: 'ch', self: 'G' },
              { id: 25, dur: 8.2, type: 'ch', self: 'D' },
              { id: 26, dur: 8, type: 'ch', self: 'D' },
              { id: 27, dur: 8, type: 'ch', self: 'Bm' },
              { id: 28, dur: 8, type: 'ch', self: 'A' },
              { id: 29, dur: 8, type: 'ch', self: 'G' },
              { id: 30, dur: 8, type: 'ch', self: 'D' },
              { id: 31, dur: 8, type: 'ch', self: 'Bm' },
              { id: 32, dur: 8, type: 'ch', self: 'A' },
              { id: 33, dur: 8, type: 'ch', self: 'G' },
              { id: 34, dur: 4, type: 'ch', self: 'Bm' },
              { id: 35, dur: 4, type: 'ch', self: 'G' },
              { id: 36, dur: 4, type: 'ch', self: 'D' },
              { id: 37, dur: 4, type: 'ch', self: 'A' },
              { id: 38, dur: 4, type: 'ch', self: 'Bm' },
              { id: 39, dur: 4, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'D' },
              { id: 41, dur: 4, type: 'ch', self: 'A' },
              { id: 42, dur: 8, type: 'ch', self: 'D' },
              { id: 43, dur: 8, type: 'ch', self: 'A' },
              { id: 44, dur: 8, type: 'ch', self: 'Bm' },
              { id: 45, dur: 8, type: 'ch', self: 'G' },
              { id: 46, dur: 8, type: 'ch', self: 'D' },
              { id: 47, dur: 8, type: 'ch', self: 'A' },
              { id: 48, dur: 8, type: 'ch', self: 'Bm' },
              { id: 49, dur: 8, type: 'ch', self: 'G' },
              { id: 50, dur: 8, type: 'ch', self: 'Bm' },
              { id: 51, dur: 8, type: 'ch', self: 'G' },
              { id: 52, dur: 8, type: 'ch', self: 'D' },
              { id: 53, dur: 8, type: 'ch', self: 'A' },
              { id: 54, dur: 8, type: 'ch', self: 'D' },
              { id: 55, dur: 8, type: 'ch', self: 'A' },
              { id: 56, dur: 8, type: 'ch', self: 'Bm' },
              { id: 57, dur: 8, type: 'ch', self: 'G' },
              { id: 58, dur: 8, type: 'ch', self: 'D' },
              { id: 59, dur: 8, type: 'ch', self: 'A' },
              { id: 60, dur: 8, type: 'ch', self: 'Bm' },
              { id: 61, dur: 8, type: 'ch', self: 'G' },
              { id: 62, dur: 8, type: 'ch', self: 'D' },
              { id: 63, dur: 8, type: 'ch', self: 'A' },
              { id: 64, dur: 8, type: 'ch', self: 'Bm' },
              { id: 65, dur: 8, type: 'ch', self: 'G' },
            ],
            song: {
              id: '657407d135ebe2312760381c',
              name: 'Photograph',
              key: 'E major',
              bpm: [108],
              genre: 'Pop',
              artists: [{ name: 'Ed Sheeran', id: '657151a534e69c78f8553bb5' }],
            },
          },
          {
            id: '6574177a35ebe23127603820',
            source: 'RBumgq5yVrA',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 7,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 1,
                type: 'ch',
                self: 'G',
                bpm: 75,
                syncPnt: '1970-01-01T00:00:00.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 3, type: 'ch', self: 'F' },
              { id: 3, dur: 1, type: 'ch', self: 'G' },
              { id: 4, dur: 3.5, type: 'ch', self: 'Am' },
              { id: 5, dur: 1, type: 'ch', self: 'G' },
              { id: 6, dur: 3, type: 'ch', self: 'F' },
              { id: 7, dur: 1, type: 'ch', self: 'G' },
              { id: 8, dur: 3.2, type: 'ch', self: 'Am' },
              { id: 9, dur: 1, type: 'ch', self: 'G' },
              { id: 10, dur: 3, type: 'ch', self: 'F' },
              { id: 11, dur: 1, type: 'ch', self: 'G' },
              { id: 12, dur: 3.2, type: 'ch', self: 'Am' },
              { id: 13, dur: 1, type: 'ch', self: 'G' },
              { id: 14, dur: 3, type: 'ch', self: 'F' },
              { id: 15, dur: 1, type: 'ch', self: 'G' },
              { id: 16, dur: 3.2, type: 'ch', self: 'Am' },
              { id: 17, dur: 1, type: 'ch', self: 'G' },
              { id: 18, dur: 2, type: 'ch', self: 'F' },
              { id: 19, dur: 2, type: 'ch', self: 'C' },
              { id: 20, dur: 2, type: 'ch', self: 'G' },
              { id: 21, dur: 2, type: 'ch', self: 'Am' },
              { id: 22, dur: 2, type: 'ch', self: 'F' },
              { id: 23, dur: 2, type: 'ch', self: 'C' },
              { id: 24, dur: 4.2, type: 'ch', self: 'G' },
              { id: 25, dur: 2, type: 'ch', self: 'F' },
              { id: 26, dur: 2, type: 'ch', self: 'C' },
              { id: 27, dur: 2, type: 'ch', self: 'G' },
              { id: 28, dur: 2, type: 'ch', self: 'Am' },
              { id: 29, dur: 2, type: 'ch', self: 'F' },
              { id: 30, dur: 2, type: 'ch', self: 'C' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 2, type: 'ch', self: 'Am' },
              { id: 33, dur: 2, type: 'ch', self: 'F' },
              { id: 34, dur: 2, type: 'ch', self: 'G' },
              { id: 35, dur: 2, type: 'ch', self: 'Em' },
              { id: 36, dur: 2, type: 'ch', self: 'Am' },
              { id: 37, dur: 2, type: 'ch', self: 'F' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 1.8, type: 'ch', self: 'Am' },
              { id: 40, dur: 2, type: 'ch', self: 'F' },
              { id: 41, dur: 2, type: 'ch', self: 'G' },
              { id: 42, dur: 2, type: 'ch', self: 'Em' },
              { id: 43, dur: 2, type: 'ch', self: 'Am' },
              { id: 44, dur: 2, type: 'ch', self: 'F' },
              { id: 45, dur: 3.8, type: 'ch', self: 'G' },
              { id: 46, dur: 2, type: 'ch', self: 'Am' },
              { id: 47, dur: 2, type: 'ch', self: 'F' },
              { id: 48, dur: 2, type: 'ch', self: 'G' },
              { id: 49, dur: 1.9, type: 'ch', self: 'Em' },
              { id: 50, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 51, dur: 2, type: 'ch', self: 'F' },
              { id: 52, dur: 4, type: 'ch', self: 'G' },
              { id: 53, dur: 2, type: 'ch', self: 'F' },
              { id: 54, dur: 2, type: 'ch', self: 'C' },
              { id: 55, dur: 2, type: 'ch', self: 'G' },
              { id: 56, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 57, dur: 2, type: 'ch', self: 'F' },
              { id: 58, dur: 2, type: 'ch', self: 'C' },
              { id: 59, dur: 4, type: 'ch', self: 'G' },
              { id: 60, dur: 2, type: 'ch', self: 'F' },
              { id: 61, dur: 2, type: 'ch', self: 'C' },
              { id: 62, dur: 2, type: 'ch', self: 'G' },
              { id: 63, dur: 2, type: 'ch', self: 'Am' },
              { id: 64, dur: 2, type: 'ch', self: 'F' },
              { id: 65, dur: 2, type: 'ch', self: 'C' },
              { id: 66, dur: 4.1, type: 'ch', self: 'G' },
              { id: 67, dur: 2, type: 'ch', self: 'Am' },
              { id: 68, dur: 2, type: 'ch', self: 'F' },
              { id: 69, dur: 2, type: 'ch', self: 'G' },
              { id: 70, dur: 2, type: 'ch', self: 'Em' },
              { id: 71, dur: 2, type: 'ch', self: 'Am' },
              { id: 72, dur: 2, type: 'ch', self: 'F' },
              { id: 73, dur: 4, type: 'ch', self: 'G' },
              { id: 74, dur: 2, type: 'ch', self: 'Am' },
              { id: 75, dur: 2, type: 'ch', self: 'F' },
              { id: 76, dur: 2, type: 'ch', self: 'G' },
              { id: 77, dur: 2, type: 'ch', self: 'Em' },
              { id: 78, dur: 2, type: 'ch', self: 'Am' },
              { id: 79, dur: 2, type: 'ch', self: 'F' },
              { id: 80, dur: 3.9, type: 'ch', self: 'G' },
              { id: 81, dur: 2, type: 'ch', self: 'F' },
              { id: 82, dur: 2, type: 'ch', self: 'C' },
              { id: 83, dur: 2, type: 'ch', self: 'G' },
              { id: 84, dur: 2, type: 'ch', self: 'Am' },
              { id: 85, dur: 2, type: 'ch', self: 'F' },
              { id: 86, dur: 2, type: 'ch', self: 'C' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 2, type: 'ch', self: 'F' },
              { id: 89, dur: 2, type: 'ch', self: 'C' },
              { id: 90, dur: 2, type: 'ch', self: 'G' },
              { id: 91, dur: 2, type: 'ch', self: 'Am' },
              { id: 92, dur: 2, type: 'ch', self: 'F' },
              { id: 93, dur: 2, type: 'ch', self: 'C' },
              { id: 94, dur: 4, type: 'ch', self: 'G' },
              { id: 95, dur: 2, type: 'ch', self: 'Am' },
              { id: 96, dur: 2, type: 'ch', self: 'F' },
              { id: 97, dur: 4, type: 'ch', self: 'G' },
              { id: 98, dur: 2, type: 'ch', self: 'Am' },
              { id: 99, dur: 2, type: 'ch', self: 'F' },
              { id: 100, dur: 4, type: 'ch', self: 'G' },
              { id: 101, dur: 2, type: 'ch', self: 'Am' },
              { id: 102, dur: 2, type: 'ch', self: 'F' },
              { id: 103, dur: 2, type: 'ch', self: 'G' },
              { id: 104, dur: 2, type: 'ch', self: 'Em' },
              { id: 105, dur: 2, type: 'ch', self: 'Am' },
              { id: 106, dur: 2, type: 'ch', self: 'F' },
              { id: 107, dur: 4, type: 'ch', self: 'G' },
              { id: 108, dur: 2, type: 'ch', self: 'F' },
              { id: 109, dur: 2, type: 'ch', self: 'C' },
              { id: 110, dur: 2, type: 'ch', self: 'G' },
              { id: 111, dur: 2, type: 'ch', self: 'Am' },
              { id: 112, dur: 2, type: 'ch', self: 'F' },
              { id: 113, dur: 2, type: 'ch', self: 'C' },
              { id: 114, dur: 4, type: 'ch', self: 'G' },
              { id: 115, dur: 2, type: 'ch', self: 'F' },
              { id: 116, dur: 2, type: 'ch', self: 'C' },
              { id: 117, dur: 2, type: 'ch', self: 'G' },
              { id: 118, dur: 2, type: 'ch', self: 'Am' },
              { id: 119, dur: 2, type: 'ch', self: 'F' },
              { id: 120, dur: 2, type: 'ch', self: 'C' },
              { id: 121, dur: 4.2, type: 'ch', self: 'G' },
              { id: 122, dur: 2, type: 'ch', self: 'F' },
              { id: 123, dur: 2, type: 'ch', self: 'C' },
              { id: 124, dur: 2, type: 'ch', self: 'G' },
              { id: 125, dur: 2.2, type: 'ch', self: 'Am' },
              { id: 126, dur: 2.1, type: 'ch', self: 'F' },
              { id: 127, dur: 2.1, type: 'ch', self: 'C' },
              { id: 128, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65740db135ebe2312760381f',
              name: 'Let Her Go',
              key: 'G major',
              bpm: [75],
              genre: 'Folk Rock',
              artists: [{ name: 'Passenger', id: '65740d8335ebe2312760381e' }],
            },
          },
          {
            id: '658141555d66c095a53483b5',
            source: 'vGJTaP6anOU',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 5,
                dur: 3,
                type: 'ch',
                self: 'C',
                bpm: 100,
                syncPnt: '1970-01-01T00:00:00.950Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 6, dur: 3, type: 'ch', self: 'G' },
              { id: 7, dur: 6, type: 'ch', self: 'C' },
              { id: 8, dur: 3, type: 'ch', self: 'C' },
              { id: 9, dur: 3, type: 'ch', self: 'Em' },
              { id: 10, dur: 6, type: 'ch', self: 'Am' },
              { id: 11, dur: 3, type: 'ch', self: 'F' },
              { id: 12, dur: 3, type: 'ch', self: 'C' },
              { id: 13, dur: 6, type: 'ch', self: 'G' },
              { id: 14, dur: 3, type: 'ch', self: 'F' },
              { id: 15, dur: 3, type: 'ch', self: 'G' },
              { id: 16, dur: 3, type: 'ch', self: 'Am' },
              { id: 17, dur: 3, type: 'ch', self: 'F' },
              { id: 18, dur: 3, type: 'ch', self: 'C' },
              { id: 19, dur: 3, type: 'ch', self: 'G' },
              { id: 20, dur: 6, type: 'ch', self: 'C' },
              { id: 21, dur: 3, type: 'ch', self: 'C' },
              { id: 22, dur: 3, type: 'ch', self: 'Em' },
              { id: 23, dur: 6, type: 'ch', self: 'Am' },
              { id: 24, dur: 3, type: 'ch', self: 'F' },
              { id: 25, dur: 3, type: 'ch', self: 'C' },
              { id: 26, dur: 6, type: 'ch', self: 'G' },
              { id: 27, dur: 3, type: 'ch', self: 'F' },
              { id: 28, dur: 3, type: 'ch', self: 'G' },
              { id: 29, dur: 3, type: 'ch', self: 'Am' },
              { id: 30, dur: 3, type: 'ch', self: 'F' },
              { id: 31, dur: 3, type: 'ch', self: 'C' },
              { id: 32, dur: 3, type: 'ch', self: 'G' },
              { id: 33, dur: 5.8, type: 'ch', self: 'C' },
              { id: 34, dur: 3, type: 'ch', self: 'Em' },
              { id: 35, dur: 2.9, type: 'ch', self: 'B' },
              { id: 36, dur: 3, type: 'ch', self: 'Em' },
              { id: 37, dur: 2.9, type: 'ch', self: 'B' },
              { id: 38, dur: 3, type: 'ch', self: 'Em' },
              { id: 39, dur: 2.9, type: 'ch', self: 'B' },
              { id: 40, dur: 3, type: 'ch', self: 'Em' },
              { id: 41, dur: 3, type: 'ch', self: 'A' },
              { id: 42, dur: 3, type: 'ch', self: 'Dm' },
              { id: 43, dur: 3, type: 'ch', self: 'G' },
              { id: 44, dur: 3, type: 'ch', self: 'C' },
              { id: 45, dur: 3, type: 'ch', self: 'Em' },
              { id: 46, dur: 5.8, type: 'ch', self: 'Am' },
              { id: 47, dur: 3, type: 'ch', self: 'F' },
              { id: 48, dur: 3, type: 'ch', self: 'C' },
              { id: 49, dur: 5.8, type: 'ch', self: 'G' },
              { id: 50, dur: 3, type: 'ch', self: 'F' },
              { id: 51, dur: 3, type: 'ch', self: 'G' },
              { id: 52, dur: 3, type: 'ch', self: 'Am' },
              { id: 53, dur: 3, type: 'ch', self: 'F' },
              { id: 54, dur: 3, type: 'ch', self: 'C' },
              { id: 55, dur: 3, type: 'ch', self: 'G' },
              { id: 56, dur: 5.8, type: 'ch', self: 'C' },
              { id: 57, dur: 3, type: 'ch', self: 'Em' },
              { id: 58, dur: 2.9, type: 'ch', self: 'B' },
              { id: 59, dur: 3, type: 'ch', self: 'Em' },
              { id: 60, dur: 2.9, type: 'ch', self: 'B' },
              { id: 61, dur: 3, type: 'ch', self: 'Em' },
              { id: 62, dur: 2.9, type: 'ch', self: 'B' },
              { id: 63, dur: 4, type: 'ch', self: 'Em' },
              { id: 64, dur: 2, type: 'ch', self: 'A' },
              { id: 65, dur: 2.8, type: 'ch', self: 'Dm' },
              { id: 66, dur: 3, type: 'ch', self: 'G' },
              { id: 67, dur: 3, type: 'ch', self: 'C' },
              { id: 68, dur: 3, type: 'ch', self: 'Em' },
              { id: 69, dur: 5.5, type: 'ch', self: 'Am' },
              { id: 70, dur: 3, type: 'ch', self: 'F' },
              { id: 71, dur: 3, type: 'ch', self: 'C' },
              { id: 72, dur: 6, type: 'ch', self: 'G' },
              { id: 73, dur: 3, type: 'ch', self: 'F' },
              { id: 74, dur: 3, type: 'ch', self: 'G' },
              { id: 75, dur: 3, type: 'ch', self: 'Am' },
              { id: 76, dur: 3, type: 'ch', self: 'F' },
              { id: 77, dur: 3, type: 'ch', self: 'C' },
              { id: 78, dur: 3, type: 'ch', self: 'G' },
              { id: 79, dur: 5.8, type: 'ch', self: 'C' },
              { id: 80, dur: 3, type: 'ch', self: 'F' },
              { id: 81, dur: 3, type: 'ch', self: 'G' },
              { id: 82, dur: 3, type: 'ch', self: 'Am' },
              { id: 83, dur: 3, type: 'ch', self: 'F' },
              { id: 84, dur: 4, type: 'ch', self: 'C' },
              { id: 85, dur: 6.3, type: 'ch', self: 'G' },
              { id: 86, dur: 6, type: 'ch', self: 'C' },
            ],
            song: {
              id: '6581390f5d66c095a53483b4',
              name: 'Cant Help Falling In Love',
              key: 'D major',
              bpm: [100],
              genre: 'Pop',
              artists: [
                { name: 'Elvis Presley', id: '658138df5d66c095a53483b3' },
              ],
            },
          },
          {
            id: '65814da95d66c095a53483b8',
            source: 'uJ_1HMAGb4k',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 1,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2,
                type: 'ch',
                self: 'Am',
                bpm: 101,
                syncPnt: '1970-01-01T00:00:00.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 2.5, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'C' },
              { id: 4, dur: 2, type: 'ch', self: 'Am' },
              { id: 5, dur: 2.3, type: 'ch', self: 'G' },
              { id: 6, dur: 4, type: 'ch', self: 'C' },
              { id: 7, dur: 2.1, type: 'ch', self: 'Am' },
              { id: 8, dur: 2, type: 'ch', self: 'G' },
              { id: 9, dur: 4.1, type: 'ch', self: 'C' },
              { id: 10, dur: 2, type: 'ch', self: 'Am' },
              { id: 11, dur: 2, type: 'ch', self: 'G' },
              { id: 12, dur: 4.1, type: 'ch', self: 'C' },
              { id: 13, dur: 2, type: 'ch', self: 'Am' },
              { id: 14, dur: 2, type: 'ch', self: 'G' },
              { id: 15, dur: 4, type: 'ch', self: 'C' },
              { id: 16, dur: 2, type: 'ch', self: 'Am' },
              { id: 17, dur: 2, type: 'ch', self: 'G' },
              { id: 18, dur: 4.2, type: 'ch', self: 'C' },
              { id: 19, dur: 2, type: 'ch', self: 'Am' },
              { id: 20, dur: 2, type: 'ch', self: 'G' },
              { id: 21, dur: 4.2, type: 'ch', self: 'C' },
              { id: 22, dur: 2, type: 'ch', self: 'Am' },
              { id: 23, dur: 2, type: 'ch', self: 'G' },
              { id: 24, dur: 4.3, type: 'ch', self: 'C' },
              { id: 25, dur: 2, type: 'ch', self: 'Am' },
              { id: 26, dur: 2, type: 'ch', self: 'G' },
              { id: 27, dur: 4, type: 'ch', self: 'C' },
              { id: 28, dur: 2, type: 'ch', self: 'Am' },
              { id: 29, dur: 2, type: 'ch', self: 'G' },
              { id: 30, dur: 3.8, type: 'ch', self: 'C' },
              { id: 31, dur: 2, type: 'ch', self: 'Am' },
              { id: 32, dur: 2, type: 'ch', self: 'G' },
              { id: 33, dur: 3.8, type: 'ch', self: 'C' },
              { id: 34, dur: 2, type: 'ch', self: 'Am' },
              { id: 35, dur: 2, type: 'ch', self: 'G' },
              { id: 36, dur: 3.8, type: 'ch', self: 'C' },
              { id: 37, dur: 2, type: 'ch', self: 'Am' },
              { id: 38, dur: 2, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'C' },
              { id: 40, dur: 2, type: 'ch', self: 'Am' },
              { id: 41, dur: 2, type: 'ch', self: 'G' },
              { id: 42, dur: 4, type: 'ch', self: 'C' },
              { id: 43, dur: 2, type: 'ch', self: 'Am' },
              { id: 44, dur: 2, type: 'ch', self: 'G' },
              { id: 45, dur: 4, type: 'ch', self: 'C' },
              { id: 46, dur: 2, type: 'ch', self: 'Am' },
              { id: 47, dur: 2, type: 'ch', self: 'G' },
              { id: 48, dur: 4, type: 'ch', self: 'C' },
              { id: 49, dur: 2, type: 'ch', self: 'Am' },
              { id: 50, dur: 2, type: 'ch', self: 'G' },
              { id: 51, dur: 4, type: 'ch', self: 'C' },
              { id: 52, dur: 2, type: 'ch', self: 'Am' },
              { id: 53, dur: 2, type: 'ch', self: 'G' },
              { id: 54, dur: 4.3, type: 'ch', self: 'C' },
              { id: 55, dur: 2, type: 'ch', self: 'Am' },
              { id: 56, dur: 2, type: 'ch', self: 'G' },
              { id: 57, dur: 3.9, type: 'ch', self: 'C' },
              { id: 58, dur: 2, type: 'ch', self: 'Am' },
              { id: 59, dur: 2, type: 'ch', self: 'G' },
              { id: 60, dur: 3.8, type: 'ch', self: 'C' },
              { id: 61, dur: 2, type: 'ch', self: 'Am' },
              { id: 62, dur: 2, type: 'ch', self: 'G' },
              { id: 63, dur: 4, type: 'ch', self: 'C' },
              { id: 64, dur: 2, type: 'ch', self: 'Am' },
              { id: 65, dur: 2, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'C' },
              { id: 67, dur: 7.8, type: 'ch', self: 'C' },
              { id: 68, dur: 3.8, type: 'ch', self: 'Am' },
              { id: 69, dur: 3.8, type: 'ch', self: 'G' },
              { id: 70, dur: 3.8, type: 'ch', self: 'C' },
              { id: 71, dur: 3.8, type: 'ch', self: 'F' },
              { id: 72, dur: 3.8, type: 'ch', self: 'Am' },
              { id: 73, dur: 3.8, type: 'ch', self: 'G' },
              { id: 74, dur: 3.8, type: 'ch', self: 'C' },
              { id: 75, dur: 3.7, type: 'ch', self: 'F' },
              { id: 76, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 77, dur: 1.9, type: 'ch', self: 'G' },
              { id: 78, dur: 4, type: 'ch', self: 'C' },
              { id: 79, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 80, dur: 2, type: 'ch', self: 'G' },
              { id: 81, dur: 4.3, type: 'ch', self: 'C' },
              { id: 82, dur: 2, type: 'ch', self: 'Am' },
              { id: 83, dur: 2, type: 'ch', self: 'G' },
              { id: 84, dur: 3.9, type: 'ch', self: 'C' },
              { id: 85, dur: 2, type: 'ch', self: 'Am' },
              { id: 86, dur: 2, type: 'ch', self: 'G' },
              { id: 87, dur: 3.9, type: 'ch', self: 'C' },
              { id: 88, dur: 2, type: 'ch', self: 'Am' },
              { id: 89, dur: 2, type: 'ch', self: 'G' },
              { id: 90, dur: 3.9, type: 'ch', self: 'C' },
              { id: 91, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 92, dur: 1.9, type: 'ch', self: 'G' },
              { id: 93, dur: 3.9, type: 'ch', self: 'C' },
              { id: 94, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 95, dur: 1.9, type: 'ch', self: 'G' },
              { id: 96, dur: 3.9, type: 'ch', self: 'C' },
              { id: 97, dur: 1.9, type: 'ch', self: 'Am' },
              { id: 98, dur: 1.9, type: 'ch', self: 'G' },
              { id: 99, dur: 4, type: 'ch', self: 'C' },
              { id: 100, dur: 2, type: 'ch', self: 'Am' },
              { id: 101, dur: 1.9, type: 'ch', self: 'G' },
              { id: 102, dur: 3.9, type: 'ch', self: 'C' },
              { id: 103, dur: 2, type: 'ch', self: 'Am' },
              { id: 104, dur: 2, type: 'ch', self: 'G' },
              { id: 105, dur: 3.9, type: 'ch', self: 'C' },
              { id: 106, dur: 2, type: 'ch', self: 'Am' },
              { id: 107, dur: 2, type: 'ch', self: 'G' },
              { id: 108, dur: 4, type: 'ch', self: 'C' },
              { id: 109, dur: 2, type: 'ch', self: 'Am' },
              { id: 110, dur: 2, type: 'ch', self: 'G' },
              { id: 111, dur: 4, type: 'ch', self: 'C' },
              { id: 112, dur: 2, type: 'ch', self: 'Am' },
              { id: 113, dur: 2, type: 'ch', self: 'G' },
              { id: 114, dur: 4, type: 'ch', self: 'C' },
              { id: 115, dur: 2, type: 'ch', self: 'Am' },
              { id: 116, dur: 2, type: 'ch', self: 'G' },
              { id: 117, dur: 4.2, type: 'ch', self: 'C' },
              { id: 118, dur: 2, type: 'ch', self: 'Am' },
              { id: 119, dur: 2, type: 'ch', self: 'G' },
              { id: 120, dur: 4, type: 'ch', self: 'C' },
            ],
            song: {
              id: '658142db5d66c095a53483b7',
              name: 'Riptide',
              key: 'C# major',
              bpm: [102],
              genre: 'Folk Rock',
              artists: [{ name: 'Vance Joy', id: '6581429d5d66c095a53483b6' }],
            },
          },
          {
            id: '658260495d66c095a53483bb',
            source: 'dvgZkm1xWPE',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 1,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 138,
                syncPnt: '1970-01-01T00:00:00.950Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'D' },
              { id: 3, dur: 4, type: 'ch', self: 'G' },
              { id: 4, dur: 4, type: 'ch', self: 'Em' },
              { id: 5, dur: 4, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'D' },
              { id: 7, dur: 4, type: 'ch', self: 'G' },
              { id: 8, dur: 4, type: 'ch', self: 'Em' },
              { id: 9, dur: 4, type: 'ch', self: 'C' },
              { id: 10, dur: 4, type: 'ch', self: 'D' },
              { id: 11, dur: 4, type: 'ch', self: 'G' },
              { id: 12, dur: 4, type: 'ch', self: 'Em' },
              { id: 13, dur: 4, type: 'ch', self: 'C' },
              { id: 14, dur: 4, type: 'ch', self: 'D' },
              { id: 15, dur: 4, type: 'ch', self: 'G' },
              { id: 16, dur: 4, type: 'ch', self: 'Em' },
              { id: 17, dur: 4, type: 'ch', self: 'C' },
              { id: 18, dur: 4, type: 'ch', self: 'D' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'Em' },
              { id: 21, dur: 4, type: 'ch', self: 'C' },
              { id: 22, dur: 4, type: 'ch', self: 'D' },
              { id: 23, dur: 4, type: 'ch', self: 'G' },
              { id: 24, dur: 4, type: 'ch', self: 'Em' },
              { id: 25, dur: 4, type: 'ch', self: 'C' },
              { id: 26, dur: 4, type: 'ch', self: 'D' },
              { id: 27, dur: 4, type: 'ch', self: 'G' },
              { id: 28, dur: 4, type: 'ch', self: 'Em' },
              { id: 29, dur: 4, type: 'ch', self: 'C' },
              { id: 30, dur: 4, type: 'ch', self: 'D' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 4, type: 'ch', self: 'Em' },
              { id: 33, dur: 4, type: 'ch', self: 'C' },
              { id: 34, dur: 4, type: 'ch', self: 'D' },
              { id: 35, dur: 4, type: 'ch', self: 'G' },
              { id: 36, dur: 4, type: 'ch', self: 'Em' },
              { id: 37, dur: 4, type: 'ch', self: 'C' },
              { id: 38, dur: 4, type: 'ch', self: 'D' },
              { id: 39, dur: 4, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'Em' },
              { id: 41, dur: 4, type: 'ch', self: 'C' },
              { id: 42, dur: 4, type: 'ch', self: 'D' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'Em' },
              { id: 45, dur: 4, type: 'ch', self: 'C' },
              { id: 46, dur: 4, type: 'ch', self: 'D' },
              { id: 47, dur: 4, type: 'ch', self: 'G' },
              { id: 48, dur: 4, type: 'ch', self: 'Em' },
              { id: 49, dur: 4, type: 'ch', self: 'C' },
              { id: 50, dur: 4, type: 'ch', self: 'D' },
              { id: 51, dur: 4, type: 'ch', self: 'G' },
              { id: 52, dur: 4, type: 'ch', self: 'Em' },
              { id: 53, dur: 4, type: 'ch', self: 'C' },
              { id: 54, dur: 4, type: 'ch', self: 'D' },
              { id: 55, dur: 4, type: 'ch', self: 'Bm' },
              { id: 56, dur: 4, type: 'ch', self: 'Em' },
              { id: 57, dur: 4, type: 'ch', self: 'C' },
              { id: 58, dur: 4, type: 'ch', self: 'D' },
              { id: 59, dur: 4, type: 'ch', self: 'G' },
              { id: 60, dur: 4, type: 'ch', self: 'Em' },
              { id: 61, dur: 4, type: 'ch', self: 'C' },
              { id: 62, dur: 4, type: 'ch', self: 'D' },
              { id: 63, dur: 4, type: 'ch', self: 'G' },
              { id: 64, dur: 4, type: 'ch', self: 'Em' },
              { id: 65, dur: 4, type: 'ch', self: 'C' },
              { id: 66, dur: 4, type: 'ch', self: 'D' },
              { id: 67, dur: 4, type: 'ch', self: 'G' },
              { id: 68, dur: 4, type: 'ch', self: 'Em' },
              { id: 69, dur: 4, type: 'ch', self: 'C' },
              { id: 70, dur: 4, type: 'ch', self: 'D' },
              { id: 71, dur: 4, type: 'ch', self: 'G' },
              { id: 72, dur: 4, type: 'ch', self: 'Em' },
              { id: 73, dur: 4, type: 'ch', self: 'C' },
              { id: 74, dur: 4, type: 'ch', self: 'D' },
              { id: 75, dur: 4, type: 'ch', self: 'G' },
              { id: 76, dur: 4, type: 'ch', self: 'Em' },
              { id: 77, dur: 4, type: 'ch', self: 'C' },
              { id: 78, dur: 4, type: 'ch', self: 'D' },
              { id: 79, dur: 4, type: 'ch', self: 'G' },
              { id: 80, dur: 4, type: 'ch', self: 'Em' },
              { id: 81, dur: 4, type: 'ch', self: 'C' },
              { id: 82, dur: 4, type: 'ch', self: 'D' },
              { id: 83, dur: 4, type: 'ch', self: 'G' },
              { id: 84, dur: 4, type: 'ch', self: 'Em' },
              { id: 85, dur: 4, type: 'ch', self: 'C' },
              { id: 86, dur: 4, type: 'ch', self: 'D' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 4, type: 'ch', self: 'Em' },
              { id: 89, dur: 4, type: 'ch', self: 'C' },
              { id: 90, dur: 4, type: 'ch', self: 'D' },
              { id: 91, dur: 4, type: 'ch', self: 'G' },
              { id: 92, dur: 4, type: 'ch', self: 'Em' },
              { id: 93, dur: 4, type: 'ch', self: 'C' },
              { id: 94, dur: 4, type: 'ch', self: 'D' },
              { id: 95, dur: 4, type: 'ch', self: 'Bm' },
              { id: 96, dur: 4, type: 'ch', self: 'Em' },
              { id: 97, dur: 4, type: 'ch', self: 'C' },
              { id: 98, dur: 4, type: 'ch', self: 'Em' },
              { id: 99, dur: 4, type: 'ch', self: 'C' },
              { id: 100, dur: 4, type: 'ch', self: 'Em' },
              { id: 101, dur: 4, type: 'ch', self: 'C' },
              { id: 102, dur: 4, type: 'ch', self: 'Em' },
              { id: 103, dur: 4, type: 'ch', self: 'D' },
              { id: 104, dur: 4, type: 'ch', self: 'D' },
              { id: 105, dur: 4, type: 'ch', self: 'C' },
              { id: 106, dur: 4, type: 'ch', self: 'D' },
              { id: 107, dur: 4, type: 'ch', self: 'G' },
              { id: 108, dur: 4, type: 'ch', self: 'Em' },
              { id: 109, dur: 4, type: 'ch', self: 'C' },
              { id: 110, dur: 4, type: 'ch', self: 'D' },
              { id: 111, dur: 4, type: 'ch', self: 'G' },
              { id: 112, dur: 4, type: 'ch', self: 'Em' },
              { id: 113, dur: 4, type: 'ch', self: 'C' },
              { id: 114, dur: 4, type: 'ch', self: 'D' },
              { id: 115, dur: 4, type: 'ch', self: 'G' },
              { id: 116, dur: 4, type: 'ch', self: 'Em' },
              { id: 117, dur: 4, type: 'ch', self: 'C' },
              { id: 118, dur: 4, type: 'ch', self: 'D' },
              { id: 119, dur: 4, type: 'ch', self: 'G' },
              { id: 120, dur: 4, type: 'ch', self: 'Em' },
              { id: 121, dur: 4, type: 'ch', self: 'C' },
              { id: 122, dur: 4, type: 'ch', self: 'D' },
              { id: 123, dur: 4, type: 'ch', self: 'G' },
              { id: 124, dur: 4, type: 'ch', self: 'Em' },
              { id: 125, dur: 4, type: 'ch', self: 'C' },
              { id: 126, dur: 4, type: 'ch', self: 'D' },
              { id: 127, dur: 4, type: 'ch', self: 'Bm' },
              { id: 128, dur: 4, type: 'ch', self: 'Em' },
              { id: 129, dur: 4, type: 'ch', self: 'C' },
              { id: 130, dur: 4, type: 'ch', self: 'D' },
              { id: 131, dur: 4, type: 'ch', self: 'Bm' },
              { id: 132, dur: 4, type: 'ch', self: 'Em' },
              { id: 133, dur: 4, type: 'ch', self: 'C' },
              { id: 134, dur: 4, type: 'ch', self: 'D' },
              { id: 135, dur: 4, type: 'ch', self: 'Bm' },
              { id: 136, dur: 4, type: 'ch', self: 'Em' },
            ],
            song: {
              id: '658259c95d66c095a53483ba',
              name: 'Viva La Vida',
              key: 'F minor',
              bpm: [128],
              genre: 'Pop',
              artists: [{ name: 'Coldplay', id: '658259905d66c095a53483b9' }],
            },
          },
          {
            id: '658268c55d66c095a53483be',
            source: 'kVpv8-5XWOI',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 4,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 97,
                syncPnt: '1970-01-01T00:00:02.500Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'Am' },
              { id: 4, dur: 4, type: 'ch', self: 'F' },
              { id: 5, dur: 4, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 4, type: 'ch', self: 'F' },
              { id: 9, dur: 4, type: 'ch', self: 'C' },
              { id: 10, dur: 4, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'Am' },
              { id: 12, dur: 2, type: 'ch', self: 'F' },
              { id: 13, dur: 2, type: 'ch', self: 'G' },
              { id: 14, dur: 4, type: 'ch', self: 'C' },
              { id: 15, dur: 4, type: 'ch', self: 'G' },
              { id: 16, dur: 4, type: 'ch', self: 'Am' },
              { id: 17, dur: 4, type: 'ch', self: 'F' },
              { id: 18, dur: 4, type: 'ch', self: 'C' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'Am' },
              { id: 21, dur: 2, type: 'ch', self: 'F' },
              { id: 22, dur: 2, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'F' },
              { id: 24, dur: 2, type: 'ch', self: 'G' },
              { id: 25, dur: 1, type: 'ch', self: 'C' },
              { id: 26, dur: 1, type: 'ch', self: 'G' },
              { id: 27, dur: 4, type: 'ch', self: 'F' },
              { id: 28, dur: 2, type: 'ch', self: 'G' },
              { id: 29, dur: 1, type: 'ch', self: 'C' },
              { id: 30, dur: 1, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'F' },
              { id: 32, dur: 2, type: 'ch', self: 'G' },
              { id: 33, dur: 1, type: 'ch', self: 'C' },
              { id: 34, dur: 1, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'F' },
              { id: 36, dur: 4, type: 'ch', self: 'G' },
              { id: 37, dur: 4, type: 'ch', self: 'C' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'Am' },
              { id: 40, dur: 4, type: 'ch', self: 'F' },
              { id: 41, dur: 4, type: 'ch', self: 'C' },
              { id: 42, dur: 4, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'Am' },
              { id: 44, dur: 4, type: 'ch', self: 'F' },
              { id: 45, dur: 4, type: 'ch', self: 'C' },
              { id: 46, dur: 4, type: 'ch', self: 'G' },
              { id: 47, dur: 4, type: 'ch', self: 'Am' },
              { id: 48, dur: 2, type: 'ch', self: 'F' },
              { id: 49, dur: 2, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'C' },
              { id: 51, dur: 4, type: 'ch', self: 'G' },
              { id: 52, dur: 4, type: 'ch', self: 'Am' },
              { id: 53, dur: 4, type: 'ch', self: 'F' },
              { id: 54, dur: 4, type: 'ch', self: 'C' },
              { id: 55, dur: 4, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'Am' },
              { id: 57, dur: 2, type: 'ch', self: 'F' },
              { id: 58, dur: 2, type: 'ch', self: 'G' },
              { id: 59, dur: 4, type: 'ch', self: 'F' },
              { id: 60, dur: 2, type: 'ch', self: 'G' },
              { id: 61, dur: 1, type: 'ch', self: 'C' },
              { id: 62, dur: 1, type: 'ch', self: 'G' },
              { id: 63, dur: 4, type: 'ch', self: 'F' },
              { id: 64, dur: 2, type: 'ch', self: 'G' },
              { id: 65, dur: 1, type: 'ch', self: 'C' },
              { id: 66, dur: 1, type: 'ch', self: 'G' },
              { id: 67, dur: 4, type: 'ch', self: 'F' },
              { id: 68, dur: 2, type: 'ch', self: 'G' },
              { id: 69, dur: 1, type: 'ch', self: 'C' },
              { id: 70, dur: 1, type: 'ch', self: 'G' },
              { id: 71, dur: 4, type: 'ch', self: 'F' },
              { id: 72, dur: 4, type: 'ch', self: 'G' },
              { id: 73, dur: 4, type: 'ch', self: 'C' },
              { id: 74, dur: 4, type: 'ch', self: 'G' },
              { id: 75, dur: 4, type: 'ch', self: 'Am' },
              { id: 76, dur: 4, type: 'ch', self: 'F' },
              { id: 77, dur: 4, type: 'ch', self: 'C' },
              { id: 78, dur: 4, type: 'ch', self: 'G' },
              { id: 79, dur: 4, type: 'ch', self: 'Am' },
              { id: 80, dur: 2, type: 'ch', self: 'F' },
              { id: 81, dur: 2, type: 'ch', self: 'G' },
              { id: 82, dur: 4, type: 'ch', self: 'F' },
              { id: 83, dur: 2, type: 'ch', self: 'G' },
              { id: 84, dur: 1, type: 'ch', self: 'C' },
              { id: 85, dur: 1, type: 'ch', self: 'G' },
              { id: 86, dur: 4, type: 'ch', self: 'F' },
              { id: 87, dur: 2, type: 'ch', self: 'G' },
              { id: 88, dur: 1, type: 'ch', self: 'C' },
              { id: 89, dur: 1, type: 'ch', self: 'G' },
              { id: 90, dur: 4, type: 'ch', self: 'F' },
              { id: 91, dur: 2, type: 'ch', self: 'G' },
              { id: 92, dur: 1, type: 'ch', self: 'C' },
              { id: 93, dur: 1, type: 'ch', self: 'G' },
              { id: 94, dur: 4, type: 'ch', self: 'F' },
              { id: 95, dur: 4, type: 'ch', self: 'G' },
              { id: 96, dur: 4, type: 'ch', self: 'F' },
              { id: 97, dur: 2, type: 'ch', self: 'G' },
              { id: 98, dur: 1, type: 'ch', self: 'C' },
              { id: 99, dur: 1, type: 'ch', self: 'G' },
              { id: 100, dur: 4, type: 'ch', self: 'F' },
              { id: 101, dur: 4, type: 'ch', self: 'G' },
              { id: 102, dur: 4, type: 'ch', self: 'C' },
              { id: 103, dur: 4, type: 'ch', self: 'G' },
              { id: 104, dur: 4, type: 'ch', self: 'Am' },
              { id: 105, dur: 2, type: 'ch', self: 'F' },
              { id: 106, dur: 2, type: 'ch', self: 'G' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
              { id: 108, dur: 4, type: 'ch', self: 'G' },
              { id: 109, dur: 4, type: 'ch', self: 'Am' },
              { id: 110, dur: 2, type: 'ch', self: 'F' },
              { id: 111, dur: 2, type: 'ch', self: 'G' },
              { id: 112, dur: 4, type: 'ch', self: 'C' },
            ],
            song: {
              id: '658263ad5d66c095a53483bd',
              name: 'Hey Soul Sister',
              key: 'C# minor',
              bpm: [97],
              genre: 'Pop',
              artists: [{ name: 'Train', id: '658263765d66c095a53483bc' }],
            },
          },
          {
            id: '658299f95d66c095a53483c1',
            source: 'BciS5krYL80',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'Am',
                bpm: 147,
                syncPnt: '1970-01-01T00:00:00.500Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'E' },
              { id: 3, dur: 8, type: 'ch', self: 'G' },
              { id: 4, dur: 8, type: 'ch', self: 'D' },
              { id: 5, dur: 8, type: 'ch', self: 'F' },
              { id: 6, dur: 8, type: 'ch', self: 'C' },
              { id: 7, dur: 8, type: 'ch', self: 'Dm' },
              { id: 8, dur: 8, type: 'ch', self: 'E' },
              { id: 9, dur: 8, type: 'ch', self: 'Am' },
              { id: 10, dur: 8, type: 'ch', self: 'E' },
              { id: 11, dur: 8, type: 'ch', self: 'G' },
              { id: 12, dur: 8, type: 'ch', self: 'D' },
              { id: 13, dur: 8, type: 'ch', self: 'F' },
              { id: 14, dur: 8, type: 'ch', self: 'C' },
              { id: 15, dur: 7.9, type: 'ch', self: 'Dm' },
              { id: 16, dur: 7.9, type: 'ch', self: 'E' },
              { id: 17, dur: 7.9, type: 'ch', self: 'Am' },
              { id: 18, dur: 7.9, type: 'ch', self: 'E' },
              { id: 19, dur: 7.9, type: 'ch', self: 'G' },
              { id: 20, dur: 8, type: 'ch', self: 'D' },
              { id: 21, dur: 8, type: 'ch', self: 'F' },
              { id: 22, dur: 8, type: 'ch', self: 'C' },
              { id: 23, dur: 8, type: 'ch', self: 'Dm' },
              { id: 24, dur: 8, type: 'ch', self: 'E' },
              { id: 25, dur: 8, type: 'ch', self: 'Am' },
              { id: 26, dur: 8, type: 'ch', self: 'E' },
              { id: 27, dur: 8, type: 'ch', self: 'G' },
              { id: 28, dur: 8, type: 'ch', self: 'D' },
              { id: 29, dur: 8, type: 'ch', self: 'F' },
              { id: 30, dur: 8, type: 'ch', self: 'C' },
              { id: 31, dur: 8, type: 'ch', self: 'Dm' },
              { id: 32, dur: 8, type: 'ch', self: 'E' },
              { id: 33, dur: 8, type: 'ch', self: 'F' },
              { id: 34, dur: 8, type: 'ch', self: 'C' },
              { id: 35, dur: 8, type: 'ch', self: 'E' },
              { id: 36, dur: 8, type: 'ch', self: 'Am' },
              { id: 37, dur: 8, type: 'ch', self: 'F' },
              { id: 38, dur: 8, type: 'ch', self: 'C' },
              { id: 39, dur: 8, type: 'ch', self: 'Dm' },
              { id: 40, dur: 8, type: 'ch', self: 'E' },
              { id: 41, dur: 8, type: 'ch', self: 'Am' },
              { id: 42, dur: 8, type: 'ch', self: 'E' },
              { id: 43, dur: 8, type: 'ch', self: 'G' },
              { id: 44, dur: 8, type: 'ch', self: 'D' },
              { id: 45, dur: 8, type: 'ch', self: 'F' },
              { id: 46, dur: 8, type: 'ch', self: 'C' },
              { id: 47, dur: 8, type: 'ch', self: 'Dm' },
              { id: 48, dur: 8, type: 'ch', self: 'E' },
              { id: 49, dur: 8, type: 'ch', self: 'Am' },
              { id: 50, dur: 8, type: 'ch', self: 'E' },
              { id: 51, dur: 8, type: 'ch', self: 'G' },
              { id: 52, dur: 7.9, type: 'ch', self: 'D' },
              { id: 53, dur: 8, type: 'ch', self: 'F' },
              { id: 54, dur: 8, type: 'ch', self: 'C' },
              { id: 55, dur: 8, type: 'ch', self: 'Dm' },
              { id: 56, dur: 8, type: 'ch', self: 'E' },
              { id: 57, dur: 8, type: 'ch', self: 'F' },
              { id: 58, dur: 8, type: 'ch', self: 'C' },
              { id: 59, dur: 8, type: 'ch', self: 'E' },
              { id: 60, dur: 8, type: 'ch', self: 'Am' },
              { id: 61, dur: 8, type: 'ch', self: 'F' },
              { id: 62, dur: 8, type: 'ch', self: 'C' },
              { id: 63, dur: 8, type: 'ch', self: 'Dm' },
              { id: 64, dur: 7.9, type: 'ch', self: 'E' },
              { id: 65, dur: 8, type: 'ch', self: 'Am' },
              { id: 66, dur: 8, type: 'ch', self: 'E' },
              { id: 67, dur: 8, type: 'ch', self: 'G' },
              { id: 68, dur: 8, type: 'ch', self: 'D' },
              { id: 69, dur: 8, type: 'ch', self: 'F' },
              { id: 70, dur: 8, type: 'ch', self: 'C' },
              { id: 71, dur: 7.9, type: 'ch', self: 'Dm' },
              { id: 72, dur: 7.9, type: 'ch', self: 'E' },
              { id: 73, dur: 8, type: 'ch', self: 'Am' },
              { id: 74, dur: 8, type: 'ch', self: 'E' },
              { id: 75, dur: 8, type: 'ch', self: 'G' },
              { id: 76, dur: 8, type: 'ch', self: 'D' },
              { id: 77, dur: 8, type: 'ch', self: 'F' },
              { id: 78, dur: 8, type: 'ch', self: 'C' },
              { id: 79, dur: 7.9, type: 'ch', self: 'Dm' },
              { id: 80, dur: 7.9, type: 'ch', self: 'E' },
              { id: 81, dur: 8, type: 'ch', self: 'Am' },
              { id: 82, dur: 8, type: 'ch', self: 'E' },
              { id: 83, dur: 8, type: 'ch', self: 'G' },
              { id: 84, dur: 8, type: 'ch', self: 'D' },
              { id: 85, dur: 7.9, type: 'ch', self: 'F' },
              { id: 86, dur: 7.9, type: 'ch', self: 'C' },
              { id: 87, dur: 8, type: 'ch', self: 'Dm' },
              { id: 88, dur: 8, type: 'ch', self: 'E' },
              { id: 89, dur: 8, type: 'ch', self: 'Am' },
              { id: 90, dur: 8, type: 'ch', self: 'E' },
              { id: 91, dur: 8, type: 'ch', self: 'G' },
              { id: 92, dur: 8, type: 'ch', self: 'D' },
              { id: 93, dur: 8, type: 'ch', self: 'F' },
              { id: 94, dur: 8, type: 'ch', self: 'C' },
              { id: 95, dur: 8, type: 'ch', self: 'Dm' },
              { id: 96, dur: 8, type: 'ch', self: 'E' },
              { id: 97, dur: 8, type: 'ch', self: 'Am' },
              { id: 98, dur: 8, type: 'ch', self: 'E' },
              { id: 99, dur: 8, type: 'ch', self: 'G' },
              { id: 100, dur: 8, type: 'ch', self: 'D' },
              { id: 101, dur: 8, type: 'ch', self: 'F' },
              { id: 102, dur: 8, type: 'ch', self: 'C' },
              { id: 103, dur: 7.9, type: 'ch', self: 'Dm' },
              { id: 104, dur: 7.9, type: 'ch', self: 'E' },
              { id: 105, dur: 8, type: 'ch', self: 'Am' },
              { id: 106, dur: 8, type: 'ch', self: 'E' },
              { id: 107, dur: 8, type: 'ch', self: 'G' },
              { id: 108, dur: 7.9, type: 'ch', self: 'D' },
              { id: 109, dur: 8, type: 'ch', self: 'F' },
              { id: 110, dur: 7.9, type: 'ch', self: 'C' },
              { id: 111, dur: 8, type: 'ch', self: 'Dm' },
              { id: 112, dur: 7.9, type: 'ch', self: 'E' },
              { id: 113, dur: 8, type: 'ch', self: 'Am' },
              { id: 114, dur: 8, type: 'ch', self: 'E' },
              { id: 115, dur: 8, type: 'ch', self: 'G' },
              { id: 116, dur: 8, type: 'ch', self: 'D' },
              { id: 117, dur: 8, type: 'ch', self: 'F' },
              { id: 118, dur: 8, type: 'ch', self: 'C' },
              { id: 119, dur: 8, type: 'ch', self: 'Dm' },
              { id: 120, dur: 8, type: 'ch', self: 'E' },
            ],
            song: {
              id: '658290b15d66c095a53483c0',
              name: 'Hotel California',
              key: 'D major',
              bpm: [147],
              genre: 'Rock',
              artists: [{ name: 'Eagles', id: '6582905e5d66c095a53483bf' }],
            },
          },
          {
            id: '658e7a055d66c095a53483c4',
            source: 'h_m-BjrxmgI',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 104,
                syncPnt: '1970-01-01T00:00:00.800Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'Em' },
              { id: 3, dur: 4, type: 'ch', self: 'C' },
              { id: 4, dur: 4, type: 'ch', self: 'Em' },
              { id: 5, dur: 4, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'Em' },
              { id: 7, dur: 4, type: 'ch', self: 'C' },
              { id: 8, dur: 4, type: 'ch', self: 'Em' },
              { id: 9, dur: 4, type: 'ch', self: 'Am' },
              { id: 10, dur: 2, type: 'ch', self: 'F' },
              { id: 11, dur: 2, type: 'ch', self: 'G' },
              { id: 12, dur: 4, type: 'ch', self: 'Am' },
              { id: 13, dur: 4, type: 'ch', self: 'G' },
              { id: 14, dur: 4, type: 'ch', self: 'C' },
              { id: 15, dur: 4, type: 'ch', self: 'Em' },
              { id: 16, dur: 4, type: 'ch', self: 'C' },
              { id: 17, dur: 4, type: 'ch', self: 'Em' },
              { id: 18, dur: 4, type: 'ch', self: 'Am' },
              { id: 19, dur: 2, type: 'ch', self: 'F' },
              { id: 20, dur: 2, type: 'ch', self: 'G' },
              { id: 21, dur: 4, type: 'ch', self: 'Am' },
              { id: 22, dur: 4, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'C' },
              { id: 25, dur: 4, type: 'ch', self: 'Am' },
              { id: 26, dur: 4, type: 'ch', self: 'C' },
              { id: 27, dur: 3, type: 'ch', self: 'Am' },
              { id: 28, dur: 1, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'C' },
              { id: 30, dur: 4, type: 'ch', self: 'Am' },
              { id: 31, dur: 4, type: 'ch', self: 'C' },
              { id: 32, dur: 4, type: 'ch', self: 'Am' },
              { id: 33, dur: 4, type: 'ch', self: 'C' },
              { id: 34, dur: 4, type: 'ch', self: 'C' },
              { id: 35, dur: 4, type: 'ch', self: 'Em' },
              { id: 36, dur: 4, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'Em' },
              { id: 38, dur: 4, type: 'ch', self: 'Am' },
              { id: 39, dur: 2, type: 'ch', self: 'F' },
              { id: 40, dur: 2, type: 'ch', self: 'G' },
              { id: 41, dur: 4, type: 'ch', self: 'Am' },
              { id: 42, dur: 4, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'C' },
              { id: 44, dur: 4, type: 'ch', self: 'Em' },
              { id: 45, dur: 4, type: 'ch', self: 'C' },
              { id: 46, dur: 4, type: 'ch', self: 'Em' },
              { id: 47, dur: 4, type: 'ch', self: 'Am' },
              { id: 48, dur: 2, type: 'ch', self: 'F' },
              { id: 49, dur: 2, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'Am' },
              { id: 51, dur: 4, type: 'ch', self: 'G' },
              { id: 52, dur: 4, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'Am' },
              { id: 54, dur: 4, type: 'ch', self: 'C' },
              { id: 55, dur: 3, type: 'ch', self: 'Am' },
              { id: 56, dur: 1, type: 'ch', self: 'G' },
              { id: 57, dur: 4, type: 'ch', self: 'C' },
              { id: 58, dur: 4, type: 'ch', self: 'Am' },
              { id: 59, dur: 4, type: 'ch', self: 'C' },
              { id: 60, dur: 3, type: 'ch', self: 'Am' },
              { id: 61, dur: 1, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'F' },
              { id: 63, dur: 4, type: 'ch', self: 'G' },
              { id: 64, dur: 4, type: 'ch', self: 'C' },
              { id: 65, dur: 4, type: 'ch', self: 'Am' },
              { id: 66, dur: 4, type: 'ch', self: 'F' },
              { id: 67, dur: 4, type: 'ch', self: 'G' },
              { id: 68, dur: 4, type: 'ch', self: 'C' },
              { id: 69, dur: 4, type: 'ch', self: 'Am' },
              { id: 70, dur: 4, type: 'ch', self: 'F' },
              { id: 71, dur: 4, type: 'ch', self: 'G' },
              { id: 72, dur: 8, type: 'ch', self: 'Am' },
              { id: 73, dur: 8, type: 'ch', self: 'G' },
              { id: 74, dur: 4, type: 'ch', self: 'C' },
              { id: 75, dur: 4, type: 'ch', self: 'Em' },
              { id: 76, dur: 4, type: 'ch', self: 'C' },
              { id: 77, dur: 4, type: 'ch', self: 'Em' },
              { id: 78, dur: 4, type: 'ch', self: 'Am' },
              { id: 79, dur: 2, type: 'ch', self: 'F' },
              { id: 80, dur: 2, type: 'ch', self: 'G' },
              { id: 81, dur: 4, type: 'ch', self: 'Am' },
              { id: 82, dur: 2, type: 'ch', self: 'F' },
              { id: 83, dur: 2, type: 'ch', self: 'G' },
              { id: 84, dur: 4, type: 'ch', self: 'Am' },
              { id: 85, dur: 2, type: 'ch', self: 'F' },
              { id: 86, dur: 2, type: 'ch', self: 'G' },
              { id: 87, dur: 4, type: 'ch', self: 'Am' },
              { id: 88, dur: 8, type: 'ch', self: 'G' },
              { id: 89, dur: 4, type: 'ch', self: 'C' },
              { id: 90, dur: 4, type: 'ch', self: 'Am' },
              { id: 91, dur: 4, type: 'ch', self: 'C' },
              { id: 92, dur: 3, type: 'ch', self: 'Am' },
              { id: 93, dur: 1, type: 'ch', self: 'G' },
              { id: 94, dur: 4, type: 'ch', self: 'C' },
              { id: 95, dur: 4, type: 'ch', self: 'Am' },
              { id: 96, dur: 4, type: 'ch', self: 'C' },
              { id: 97, dur: 4, type: 'ch', self: 'Am' },
              { id: 98, dur: 4, type: 'ch', self: 'C' },
              { id: 99, dur: 4, type: 'ch', self: 'Am' },
              { id: 100, dur: 4, type: 'ch', self: 'C' },
              { id: 101, dur: 4, type: 'ch', self: 'Am' },
              { id: 102, dur: 4, type: 'ch', self: 'C' },
              { id: 103, dur: 4, type: 'ch', self: 'Am' },
              { id: 104, dur: 4, type: 'ch', self: 'C' },
              { id: 105, dur: 4, type: 'ch', self: 'Am' },
              { id: 106, dur: 4, type: 'ch', self: 'C' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
            ],
            song: {
              id: '658e73d15d66c095a53483c3',
              name: 'Hey There Delilah',
              key: 'D major',
              bpm: [104],
              genre: 'Rock',
              artists: [
                { name: "Plain White T's", id: '658e73645d66c095a53483c2' },
              ],
            },
          },
          {
            id: '659ba594cc12ac679845724b',
            source: 'N4bFqW_eu2I',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2.8,
                type: 'ch',
                self: 'Am',
                bpm: 117,
                syncPnt: '1970-01-01T00:00:00.899Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 2.8, type: 'ch', self: 'C' },
              { id: 3, dur: 2.8, type: 'ch', self: 'D' },
              { id: 4, dur: 2.8, type: 'ch', self: 'F' },
              { id: 5, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 6, dur: 2.8, type: 'ch', self: 'E' },
              { id: 7, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 8, dur: 2.8, type: 'ch', self: 'E' },
              { id: 9, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 10, dur: 2.8, type: 'ch', self: 'C' },
              { id: 11, dur: 2.8, type: 'ch', self: 'D' },
              { id: 12, dur: 2.8, type: 'ch', self: 'F' },
              { id: 13, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 14, dur: 2.8, type: 'ch', self: 'C' },
              { id: 15, dur: 2.9, type: 'ch', self: 'E' },
              { id: 16, dur: 2.9, type: 'ch', self: 'E' },
              { id: 17, dur: 3, type: 'ch', self: 'Am' },
              { id: 18, dur: 3, type: 'ch', self: 'C' },
              { id: 19, dur: 3, type: 'ch', self: 'D' },
              { id: 20, dur: 3, type: 'ch', self: 'F' },
              { id: 21, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 22, dur: 2.8, type: 'ch', self: 'E' },
              { id: 23, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 24, dur: 2.8, type: 'ch', self: 'C' },
              { id: 25, dur: 2.9, type: 'ch', self: 'D' },
              { id: 26, dur: 2.8, type: 'ch', self: 'F' },
              { id: 27, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 28, dur: 2.9, type: 'ch', self: 'E' },
              { id: 29, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 30, dur: 2.9, type: 'ch', self: 'E' },
              { id: 31, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 32, dur: 2.8, type: 'ch', self: 'C' },
              { id: 33, dur: 2.8, type: 'ch', self: 'D' },
              { id: 34, dur: 2.8, type: 'ch', self: 'F' },
              { id: 35, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 36, dur: 2.8, type: 'ch', self: 'C' },
              { id: 37, dur: 2.9, type: 'ch', self: 'E' },
              { id: 38, dur: 2.9, type: 'ch', self: 'E' },
              { id: 39, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 40, dur: 2.8, type: 'ch', self: 'C' },
              { id: 41, dur: 2.9, type: 'ch', self: 'D' },
              { id: 42, dur: 2.8, type: 'ch', self: 'F' },
              { id: 43, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 44, dur: 2.8, type: 'ch', self: 'E' },
              { id: 45, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 46, dur: 2.9, type: 'ch', self: 'C' },
              { id: 47, dur: 2.8, type: 'ch', self: 'D' },
              { id: 48, dur: 2.9, type: 'ch', self: 'F' },
              { id: 49, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 50, dur: 2.9, type: 'ch', self: 'E' },
              { id: 51, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 52, dur: 2.9, type: 'ch', self: 'E' },
              { id: 53, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 54, dur: 2.8, type: 'ch', self: 'C' },
              { id: 55, dur: 2.9, type: 'ch', self: 'D' },
              { id: 56, dur: 2.8, type: 'ch', self: 'F' },
              { id: 57, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 58, dur: 2.8, type: 'ch', self: 'C' },
              { id: 59, dur: 2.9, type: 'ch', self: 'E' },
              { id: 60, dur: 2.8, type: 'ch', self: 'E' },
              { id: 61, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 62, dur: 2.9, type: 'ch', self: 'C' },
              { id: 63, dur: 2.8, type: 'ch', self: 'D' },
              { id: 64, dur: 2.9, type: 'ch', self: 'F' },
              { id: 65, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 66, dur: 2.9, type: 'ch', self: 'E' },
              { id: 67, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 68, dur: 2.9, type: 'ch', self: 'C' },
              { id: 69, dur: 2.8, type: 'ch', self: 'D' },
              { id: 70, dur: 2.9, type: 'ch', self: 'F' },
              { id: 71, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 72, dur: 2.9, type: 'ch', self: 'E' },
              { id: 73, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 74, dur: 2.9, type: 'ch', self: 'E' },
              { id: 75, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 76, dur: 2.9, type: 'ch', self: 'C' },
              { id: 77, dur: 2.8, type: 'ch', self: 'D' },
              { id: 78, dur: 2.8, type: 'ch', self: 'F' },
              { id: 79, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 80, dur: 2.8, type: 'ch', self: 'C' },
              { id: 81, dur: 5.4, type: 'ch', self: 'E' },
              { id: 82, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 83, dur: 2.8, type: 'ch', self: 'C' },
              { id: 84, dur: 2.8, type: 'ch', self: 'D' },
              { id: 85, dur: 2.7, type: 'ch', self: 'F' },
              { id: 86, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 87, dur: 2.8, type: 'ch', self: 'E' },
              { id: 88, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 89, dur: 2.8, type: 'ch', self: 'C' },
              { id: 90, dur: 2.8, type: 'ch', self: 'D' },
              { id: 91, dur: 2.7, type: 'ch', self: 'F' },
              { id: 92, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 93, dur: 2.8, type: 'ch', self: 'E' },
              { id: 94, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 95, dur: 2.8, type: 'ch', self: 'E' },
              { id: 96, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 97, dur: 2.8, type: 'ch', self: 'C' },
              { id: 98, dur: 2.9, type: 'ch', self: 'D' },
              { id: 99, dur: 2.9, type: 'ch', self: 'F' },
              { id: 100, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 101, dur: 2.8, type: 'ch', self: 'C' },
              { id: 102, dur: 2.9, type: 'ch', self: 'E' },
              { id: 103, dur: 2.8, type: 'ch', self: 'E' },
              { id: 104, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 105, dur: 2.8, type: 'ch', self: 'C' },
              { id: 106, dur: 2.8, type: 'ch', self: 'D' },
              { id: 107, dur: 2.8, type: 'ch', self: 'F' },
              { id: 108, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 109, dur: 2.8, type: 'ch', self: 'E' },
              { id: 110, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 111, dur: 2.8, type: 'ch', self: 'C' },
              { id: 112, dur: 2.9, type: 'ch', self: 'D' },
              { id: 113, dur: 2.8, type: 'ch', self: 'F' },
              { id: 114, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 115, dur: 2.9, type: 'ch', self: 'E' },
              { id: 116, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 117, dur: 2.8, type: 'ch', self: 'E' },
              { id: 118, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 119, dur: 2.9, type: 'ch', self: 'C' },
              { id: 120, dur: 2.8, type: 'ch', self: 'D' },
              { id: 121, dur: 2.8, type: 'ch', self: 'F' },
              { id: 122, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 123, dur: 2.8, type: 'ch', self: 'C' },
              { id: 124, dur: 2.8, type: 'ch', self: 'E' },
              { id: 125, dur: 2.8, type: 'ch', self: 'E' },
              { id: 126, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 127, dur: 2.7, type: 'ch', self: 'C' },
              { id: 128, dur: 2.8, type: 'ch', self: 'D' },
              { id: 129, dur: 2.8, type: 'ch', self: 'F' },
              { id: 130, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 131, dur: 2.8, type: 'ch', self: 'E' },
              { id: 132, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 133, dur: 2.8, type: 'ch', self: 'C' },
              { id: 134, dur: 2.8, type: 'ch', self: 'D' },
              { id: 135, dur: 2.7, type: 'ch', self: 'F' },
              { id: 136, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 137, dur: 2.8, type: 'ch', self: 'E' },
              { id: 138, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 139, dur: 2.8, type: 'ch', self: 'E' },
              { id: 140, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 141, dur: 2.7, type: 'ch', self: 'C' },
              { id: 142, dur: 2.8, type: 'ch', self: 'D' },
              { id: 143, dur: 2.8, type: 'ch', self: 'F' },
              { id: 144, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 145, dur: 2.7, type: 'ch', self: 'C' },
              { id: 146, dur: 2.8, type: 'ch', self: 'E' },
              { id: 147, dur: 2.7, type: 'ch', self: 'E' },
              { id: 148, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 149, dur: 2.8, type: 'ch', self: 'C' },
              { id: 150, dur: 2.8, type: 'ch', self: 'D' },
              { id: 151, dur: 2.8, type: 'ch', self: 'F' },
              { id: 152, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 153, dur: 2.8, type: 'ch', self: 'E' },
              { id: 154, dur: 2.8, type: 'ch', self: 'Am' },
              { id: 155, dur: 2.7, type: 'ch', self: 'C' },
              { id: 156, dur: 2.8, type: 'ch', self: 'D' },
              { id: 157, dur: 2.8, type: 'ch', self: 'F' },
              { id: 158, dur: 2.7, type: 'ch', self: 'Am' },
              { id: 159, dur: 2.8, type: 'ch', self: 'E' },
              { id: 160, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 161, dur: 2.9, type: 'ch', self: 'Dm' },
              { id: 162, dur: 3, type: 'ch', self: 'Am' },
              { id: 163, dur: 2.9, type: 'ch', self: 'Dm' },
              { id: 164, dur: 2.9, type: 'ch', self: 'Am' },
              { id: 165, dur: 3, type: 'ch', self: 'Dm' },
              { id: 166, dur: 3, type: 'ch', self: 'Am' },
              { id: 167, dur: 3, type: 'ch', self: 'Dm' },
              { id: 168, dur: 3, type: 'ch', self: 'Am' },
              { id: 169, dur: 3.3, type: 'ch', self: 'Dm' },
              { id: 170, dur: 3, type: 'ch', self: 'Am' },
            ],
            song: {
              id: '659b9546cc12ac679845724a',
              name: 'House Of The Rising Sun',
              key: 'A minor',
              bpm: [117],
              genre: 'Folk',
              artists: [
                { name: 'The Animals', id: '659b94cdcc12ac6798457249' },
              ],
            },
          },
          {
            id: '659c32789e36a930ac253a24',
            source: 'bo_efYhYU2A',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2,
                type: 'ch',
                self: 'Em',
                bpm: 96,
                syncPnt: '1970-01-01T00:00:00.900Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 1.5, type: 'ch', self: 'D' },
              { id: 3, dur: 4.5, type: 'ch', self: 'G' },
              { id: 4, dur: 4, type: 'ch', self: 'C' },
              { id: 5, dur: 1.5, type: 'ch', self: 'G' },
              { id: 6, dur: 2.5, type: 'ch', self: 'D' },
              { id: 7, dur: 2, type: 'ch', self: 'Em' },
              { id: 8, dur: 1.5, type: 'ch', self: 'D' },
              { id: 9, dur: 4.5, type: 'ch', self: 'G' },
              { id: 10, dur: 2, type: 'ch', self: 'Em' },
              { id: 11, dur: 1.5, type: 'ch', self: 'D' },
              { id: 12, dur: 4.5, type: 'ch', self: 'G' },
              { id: 13, dur: 4, type: 'ch', self: 'C' },
              { id: 14, dur: 1.5, type: 'ch', self: 'G' },
              { id: 15, dur: 2.5, type: 'ch', self: 'D' },
              { id: 16, dur: 2, type: 'ch', self: 'Em' },
              { id: 17, dur: 1.5, type: 'ch', self: 'D' },
              { id: 18, dur: 4.5, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'C' },
              { id: 20, dur: 1.5, type: 'ch', self: 'G' },
              { id: 21, dur: 2.5, type: 'ch', self: 'D' },
              { id: 22, dur: 2, type: 'ch', self: 'Em' },
              { id: 23, dur: 1.5, type: 'ch', self: 'D' },
              { id: 24, dur: 4.5, type: 'ch', self: 'G' },
              { id: 25, dur: 4, type: 'ch', self: 'C' },
              { id: 26, dur: 1.5, type: 'ch', self: 'G' },
              { id: 27, dur: 2.5, type: 'ch', self: 'D' },
              { id: 28, dur: 2, type: 'ch', self: 'Em' },
              { id: 29, dur: 1.5, type: 'ch', self: 'D' },
              { id: 30, dur: 4.5, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'C' },
              { id: 32, dur: 1.5, type: 'ch', self: 'G' },
              { id: 33, dur: 2.5, type: 'ch', self: 'D' },
              { id: 34, dur: 2, type: 'ch', self: 'Em' },
              { id: 35, dur: 1.5, type: 'ch', self: 'D' },
              { id: 36, dur: 4.5, type: 'ch', self: 'G' },
              { id: 37, dur: 2, type: 'ch', self: 'Em' },
              { id: 38, dur: 1.5, type: 'ch', self: 'D' },
              { id: 39, dur: 4.5, type: 'ch', self: 'G' },
              { id: 40, dur: 2, type: 'ch', self: 'Em' },
              { id: 41, dur: 1.5, type: 'ch', self: 'D' },
              { id: 42, dur: 4.5, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'C' },
              { id: 44, dur: 1.5, type: 'ch', self: 'G' },
              { id: 45, dur: 2.5, type: 'ch', self: 'D' },
              { id: 46, dur: 2, type: 'ch', self: 'Em' },
              { id: 47, dur: 1.5, type: 'ch', self: 'D' },
              { id: 48, dur: 4.5, type: 'ch', self: 'G' },
              { id: 49, dur: 4, type: 'ch', self: 'C' },
              { id: 50, dur: 1.5, type: 'ch', self: 'G' },
              { id: 51, dur: 2.5, type: 'ch', self: 'D' },
              { id: 52, dur: 2, type: 'ch', self: 'Em' },
              { id: 53, dur: 1.5, type: 'ch', self: 'D' },
              { id: 54, dur: 4.5, type: 'ch', self: 'G' },
              { id: 55, dur: 4, type: 'ch', self: 'C' },
              { id: 56, dur: 1.5, type: 'ch', self: 'G' },
              { id: 57, dur: 2.5, type: 'ch', self: 'D' },
              { id: 58, dur: 2, type: 'ch', self: 'Em' },
              { id: 59, dur: 1.5, type: 'ch', self: 'D' },
              { id: 60, dur: 4.5, type: 'ch', self: 'G' },
              { id: 61, dur: 4, type: 'ch', self: 'C' },
              { id: 62, dur: 1.5, type: 'ch', self: 'G' },
              { id: 63, dur: 2.5, type: 'ch', self: 'D' },
              { id: 64, dur: 4, type: 'ch', self: 'Am' },
              { id: 65, dur: 4, type: 'ch', self: 'D' },
              { id: 66, dur: 2, type: 'ch', self: 'G' },
              { id: 67, dur: 2, type: 'ch', self: 'D' },
              { id: 68, dur: 4, type: 'ch', self: 'Em' },
              { id: 69, dur: 4, type: 'ch', self: 'Am' },
              { id: 70, dur: 4, type: 'ch', self: 'D' },
              { id: 71, dur: 2, type: 'ch', self: 'G' },
              { id: 72, dur: 2, type: 'ch', self: 'D' },
              { id: 73, dur: 4, type: 'ch', self: 'Em' },
              { id: 74, dur: 4, type: 'ch', self: 'Am' },
              { id: 75, dur: 4, type: 'ch', self: 'D' },
              { id: 76, dur: 2, type: 'ch', self: 'G' },
              { id: 77, dur: 2, type: 'ch', self: 'D' },
              { id: 78, dur: 4, type: 'ch', self: 'Em' },
              { id: 79, dur: 4, type: 'ch', self: 'Am' },
              { id: 80, dur: 4, type: 'ch', self: 'D' },
              { id: 81, dur: 2, type: 'ch', self: 'G' },
              { id: 82, dur: 2, type: 'ch', self: 'D' },
              { id: 83, dur: 4, type: 'ch', self: 'Em' },
              { id: 84, dur: 4, type: 'ch', self: 'Em' },
              { id: 85, dur: 4, type: 'ch', self: 'Bm' },
              { id: 86, dur: 4, type: 'ch', self: 'D' },
              { id: 87, dur: 4, type: 'ch', self: 'A' },
              { id: 88, dur: 4, type: 'ch', self: 'Em' },
              { id: 89, dur: 4, type: 'ch', self: 'Bm' },
              { id: 90, dur: 4, type: 'ch', self: 'D' },
              { id: 91, dur: 4, type: 'ch', self: 'A' },
              { id: 92, dur: 4, type: 'ch', self: 'Am' },
              { id: 93, dur: 4, type: 'ch', self: 'D' },
              { id: 94, dur: 2, type: 'ch', self: 'G' },
              { id: 95, dur: 2, type: 'ch', self: 'D' },
              { id: 96, dur: 4, type: 'ch', self: 'Em' },
              { id: 97, dur: 4, type: 'ch', self: 'Am' },
              { id: 98, dur: 4, type: 'ch', self: 'D' },
              { id: 99, dur: 2, type: 'ch', self: 'G' },
              { id: 100, dur: 2, type: 'ch', self: 'D' },
              { id: 101, dur: 4, type: 'ch', self: 'Em' },
              { id: 102, dur: 4, type: 'ch', self: 'Am' },
              { id: 103, dur: 4, type: 'ch', self: 'D' },
              { id: 104, dur: 2, type: 'ch', self: 'G' },
              { id: 105, dur: 2, type: 'ch', self: 'D' },
              { id: 106, dur: 4, type: 'ch', self: 'Em' },
              { id: 107, dur: 4, type: 'ch', self: 'Am' },
              { id: 108, dur: 4, type: 'ch', self: 'D' },
              { id: 109, dur: 2, type: 'ch', self: 'G' },
              { id: 110, dur: 2, type: 'ch', self: 'D' },
              { id: 111, dur: 4, type: 'ch', self: 'Em' },
              { id: 112, dur: 4, type: 'ch', self: 'Em' },
            ],
            song: {
              id: '659c27369e36a930ac253a23',
              name: 'Shallow',
              key: 'G major',
              bpm: [96],
              genre: 'Pop Ballad',
              artists: [{ name: 'Lady Gaga', id: '659c26859e36a930ac253a22' }],
            },
          },
          {
            id: '659c43ec101a001ce20deb88',
            source: '8AHCfZTRGiI',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'Am',
                bpm: 90,
                syncPnt: '1970-01-01T00:00:00.100Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 2, type: 'ch', self: 'C' },
              { id: 3, dur: 2, type: 'ch', self: 'D' },
              { id: 4, dur: 4, type: 'ch', self: 'Am' },
              { id: 5, dur: 2, type: 'ch', self: 'C' },
              { id: 6, dur: 2, type: 'ch', self: 'D' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 2, type: 'ch', self: 'C' },
              { id: 9, dur: 2, type: 'ch', self: 'D' },
              { id: 10, dur: 4, type: 'ch', self: 'Am' },
              { id: 11, dur: 2, type: 'ch', self: 'C' },
              { id: 12, dur: 2, type: 'ch', self: 'D' },
              { id: 13, dur: 4, type: 'ch', self: 'Am' },
              { id: 14, dur: 2, type: 'ch', self: 'C' },
              { id: 15, dur: 2, type: 'ch', self: 'D' },
              { id: 16, dur: 4, type: 'ch', self: 'Am' },
              { id: 17, dur: 2, type: 'ch', self: 'C' },
              { id: 18, dur: 2, type: 'ch', self: 'D' },
              { id: 19, dur: 4, type: 'ch', self: 'Am' },
              { id: 20, dur: 2, type: 'ch', self: 'C' },
              { id: 21, dur: 2, type: 'ch', self: 'D' },
              { id: 22, dur: 4, type: 'ch', self: 'Am' },
              { id: 23, dur: 2, type: 'ch', self: 'C' },
              { id: 24, dur: 2, type: 'ch', self: 'D' },
              { id: 25, dur: 4, type: 'ch', self: 'Am' },
              { id: 26, dur: 2, type: 'ch', self: 'C' },
              { id: 27, dur: 2, type: 'ch', self: 'D' },
              { id: 28, dur: 4, type: 'ch', self: 'Am' },
              { id: 29, dur: 2, type: 'ch', self: 'C' },
              { id: 30, dur: 2, type: 'ch', self: 'D' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 33, dur: 3.9, type: 'ch', self: 'F' },
              { id: 34, dur: 4, type: 'ch', self: 'C' },
              { id: 35, dur: 4, type: 'ch', self: 'G' },
              { id: 36, dur: 4, type: 'ch', self: 'Am' },
              { id: 37, dur: 4, type: 'ch', self: 'F' },
              { id: 38, dur: 3.9, type: 'ch', self: 'C' },
              { id: 39, dur: 3.9, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'Am' },
              { id: 41, dur: 3.9, type: 'ch', self: 'F' },
              { id: 42, dur: 3.9, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 45, dur: 3.9, type: 'ch', self: 'F' },
              { id: 46, dur: 3.9, type: 'ch', self: 'G' },
              { id: 47, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 48, dur: 2, type: 'ch', self: 'C' },
              { id: 49, dur: 2, type: 'ch', self: 'D' },
              { id: 50, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 51, dur: 2, type: 'ch', self: 'C' },
              { id: 52, dur: 2, type: 'ch', self: 'D' },
              { id: 53, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 54, dur: 2, type: 'ch', self: 'C' },
              { id: 55, dur: 2, type: 'ch', self: 'D' },
              { id: 56, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 57, dur: 2, type: 'ch', self: 'C' },
              { id: 58, dur: 2, type: 'ch', self: 'D' },
              { id: 59, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 60, dur: 2, type: 'ch', self: 'C' },
              { id: 61, dur: 2, type: 'ch', self: 'D' },
              { id: 62, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 63, dur: 2, type: 'ch', self: 'C' },
              { id: 64, dur: 2, type: 'ch', self: 'D' },
              { id: 65, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 66, dur: 2, type: 'ch', self: 'C' },
              { id: 67, dur: 2, type: 'ch', self: 'D' },
              { id: 68, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 69, dur: 2, type: 'ch', self: 'C' },
              { id: 70, dur: 2, type: 'ch', self: 'D' },
              { id: 71, dur: 4, type: 'ch', self: 'Am' },
              { id: 72, dur: 2, type: 'ch', self: 'C' },
              { id: 73, dur: 2, type: 'ch', self: 'D' },
              { id: 74, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 75, dur: 2, type: 'ch', self: 'C' },
              { id: 76, dur: 2, type: 'ch', self: 'D' },
              { id: 77, dur: 3.9, type: 'ch', self: 'G' },
              { id: 78, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 79, dur: 4, type: 'ch', self: 'F' },
              { id: 80, dur: 3.9, type: 'ch', self: 'C' },
              { id: 81, dur: 3.9, type: 'ch', self: 'G' },
              { id: 82, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 83, dur: 4, type: 'ch', self: 'F' },
              { id: 84, dur: 4, type: 'ch', self: 'C' },
              { id: 85, dur: 4, type: 'ch', self: 'G' },
              { id: 86, dur: 4, type: 'ch', self: 'Am' },
              { id: 87, dur: 4, type: 'ch', self: 'F' },
              { id: 88, dur: 3.9, type: 'ch', self: 'G' },
              { id: 89, dur: 3.9, type: 'ch', self: 'G' },
              { id: 90, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 91, dur: 3.9, type: 'ch', self: 'F' },
              { id: 92, dur: 3.9, type: 'ch', self: 'G' },
              { id: 93, dur: 3.9, type: 'ch', self: 'G' },
              { id: 94, dur: 4, type: 'ch', self: 'Am' },
              { id: 95, dur: 3.9, type: 'ch', self: 'F' },
              { id: 96, dur: 3.9, type: 'ch', self: 'G' },
              { id: 97, dur: 3.9, type: 'ch', self: 'G' },
              { id: 98, dur: 3.9, type: 'ch', self: 'Am' },
              { id: 99, dur: 3.9, type: 'ch', self: 'F' },
              { id: 100, dur: 3.9, type: 'ch', self: 'G' },
            ],
            song: {
              id: '659c3be8101a001ce20deb87',
              name: 'Hurt',
              key: 'A minor',
              bpm: [90],
              genre: 'Rock',
              artists: [
                { name: 'Johnny Cash', id: '659c3ba9101a001ce20deb86' },
              ],
            },
          },
          {
            id: '65b7259c087a8ef52a9ca8d3',
            source: 'hT_nvWreIhg',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 4,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4.4,
                type: 'ch',
                self: 'Am',
                bpm: 122,
                syncPnt: '1970-01-01T00:00:00.450Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4.4, type: 'ch', self: 'C' },
              { id: 3, dur: 4.4, type: 'ch', self: 'G' },
              { id: 4, dur: 4.5, type: 'ch', self: 'F' },
              { id: 5, dur: 4.4, type: 'ch', self: 'Am' },
              { id: 6, dur: 4.5, type: 'ch', self: 'C' },
              { id: 7, dur: 4.5, type: 'ch', self: 'G' },
              { id: 9, dur: 13.5, type: 'ch', self: 'F' },
              { id: 10, dur: 4, type: 'ch', self: 'Am' },
              { id: 11, dur: 4, type: 'ch', self: 'C' },
              { id: 12, dur: 4, type: 'ch', self: 'G' },
              { id: 13, dur: 4, type: 'ch', self: 'F' },
              { id: 14, dur: 4, type: 'ch', self: 'Am' },
              { id: 15, dur: 4, type: 'ch', self: 'C' },
              { id: 16, dur: 4, type: 'ch', self: 'G' },
              { id: 17, dur: 4, type: 'ch', self: 'F' },
              { id: 18, dur: 4, type: 'ch', self: 'Am' },
              { id: 19, dur: 4, type: 'ch', self: 'C' },
              { id: 20, dur: 4, type: 'ch', self: 'G' },
              { id: 21, dur: 4, type: 'ch', self: 'F' },
              { id: 22, dur: 4, type: 'ch', self: 'Am' },
              { id: 23, dur: 4, type: 'ch', self: 'C' },
              { id: 24, dur: 4, type: 'ch', self: 'G' },
              { id: 25, dur: 4, type: 'ch', self: 'F' },
              { id: 26, dur: 4, type: 'ch', self: 'Am' },
              { id: 27, dur: 4, type: 'ch', self: 'C' },
              { id: 28, dur: 4, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'F' },
              { id: 30, dur: 4, type: 'ch', self: 'Am' },
              { id: 31, dur: 4, type: 'ch', self: 'C' },
              { id: 32, dur: 4, type: 'ch', self: 'G' },
              { id: 33, dur: 12, type: 'ch', self: 'F' },
              { id: 34, dur: 8, type: 'ch', self: 'F' },
              { id: 35, dur: 4, type: 'ch', self: 'Am' },
              { id: 36, dur: 4, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'G' },
              { id: 38, dur: 4, type: 'ch', self: 'F' },
              { id: 39, dur: 4, type: 'ch', self: 'Am' },
              { id: 40, dur: 4, type: 'ch', self: 'C' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 4, type: 'ch', self: 'F' },
              { id: 43, dur: 4, type: 'ch', self: 'Am' },
              { id: 44, dur: 4, type: 'ch', self: 'C' },
              { id: 45, dur: 4, type: 'ch', self: 'G' },
              { id: 46, dur: 4, type: 'ch', self: 'F' },
              { id: 47, dur: 4, type: 'ch', self: 'Am' },
              { id: 48, dur: 4, type: 'ch', self: 'C' },
              { id: 49, dur: 4, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'F' },
              { id: 51, dur: 4, type: 'ch', self: 'Am' },
              { id: 52, dur: 4, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'G' },
              { id: 54, dur: 4, type: 'ch', self: 'F' },
              { id: 55, dur: 4, type: 'ch', self: 'Am' },
              { id: 56, dur: 4, type: 'ch', self: 'C' },
              { id: 57, dur: 4, type: 'ch', self: 'G' },
              { id: 58, dur: 4, type: 'ch', self: 'F' },
              { id: 59, dur: 4, type: 'ch', self: 'Am' },
              { id: 60, dur: 4, type: 'ch', self: 'C' },
              { id: 61, dur: 4, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'F' },
              { id: 63, dur: 4, type: 'ch', self: 'Am' },
              { id: 64, dur: 4, type: 'ch', self: 'C' },
              { id: 65, dur: 4, type: 'ch', self: 'G' },
              { id: 66, dur: 12.2, type: 'ch', self: 'F' },
              { id: 67, dur: 8, type: 'ch', self: 'F' },
              { id: 68, dur: 4, type: 'ch', self: 'Am' },
              { id: 69, dur: 4, type: 'ch', self: 'C' },
              { id: 70, dur: 4, type: 'ch', self: 'G' },
              { id: 71, dur: 4, type: 'ch', self: 'F' },
              { id: 72, dur: 4, type: 'ch', self: 'Am' },
              { id: 73, dur: 4, type: 'ch', self: 'C' },
              { id: 74, dur: 4, type: 'ch', self: 'G' },
              { id: 75, dur: 4, type: 'ch', self: 'F' },
              { id: 76, dur: 4, type: 'ch', self: 'Am' },
              { id: 77, dur: 4, type: 'ch', self: 'C' },
              { id: 78, dur: 4, type: 'ch', self: 'G' },
              { id: 79, dur: 4, type: 'ch', self: 'F' },
              { id: 80, dur: 4, type: 'ch', self: 'Am' },
              { id: 81, dur: 4, type: 'ch', self: 'C' },
              { id: 82, dur: 4, type: 'ch', self: 'G' },
              { id: 83, dur: 4, type: 'ch', self: 'F' },
              { id: 84, dur: 8, type: 'ch', self: 'SILENCE' },
              { id: 85, dur: 16, type: 'ch', self: 'SILENCE' },
              { id: 86, dur: 8, type: 'ch', self: 'SILENCE' },
              { id: 87, dur: 8, type: 'ch', self: 'Am' },
              { id: 88, dur: 4, type: 'ch', self: 'F' },
              { id: 89, dur: 10, type: 'ch', self: 'Dm' },
              { id: 90, dur: 4, type: 'ch', self: 'Am' },
              { id: 91, dur: 4, type: 'ch', self: 'C' },
              { id: 92, dur: 4, type: 'ch', self: 'G' },
              { id: 93, dur: 4, type: 'ch', self: 'F' },
              { id: 94, dur: 4, type: 'ch', self: 'Am' },
              { id: 95, dur: 4, type: 'ch', self: 'C' },
              { id: 96, dur: 4, type: 'ch', self: 'G' },
              { id: 97, dur: 4, type: 'ch', self: 'F' },
              { id: 98, dur: 4, type: 'ch', self: 'Am' },
              { id: 99, dur: 4, type: 'ch', self: 'C' },
              { id: 100, dur: 4, type: 'ch', self: 'G' },
              { id: 101, dur: 4, type: 'ch', self: 'F' },
              { id: 102, dur: 4, type: 'ch', self: 'Am' },
              { id: 103, dur: 4, type: 'ch', self: 'C' },
              { id: 104, dur: 4, type: 'ch', self: 'G' },
              { id: 105, dur: 4, type: 'ch', self: 'F' },
              { id: 106, dur: 4, type: 'ch', self: 'Am' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
              { id: 108, dur: 4, type: 'ch', self: 'G' },
              { id: 109, dur: 4, type: 'ch', self: 'F' },
              { id: 110, dur: 4, type: 'ch', self: 'Am' },
              { id: 111, dur: 4, type: 'ch', self: 'C' },
              { id: 112, dur: 4, type: 'ch', self: 'G' },
              { id: 113, dur: 4, type: 'ch', self: 'F' },
            ],
            song: {
              id: '65ad5d71223d5b75d7446c9e',
              name: 'Counting Stars',
              key: 'C# minor',
              bpm: [122],
              genre: 'Pop',
              artists: [
                { name: 'One Republic', id: '659c46b9101a001ce20deb89' },
              ],
            },
          },
          {
            id: '65b73600a5ca6ac331ec5b92',
            source: 'ukVkkP4r1XA',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 6,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 22,
                type: 'ch',
                self: 'SILENCE',
                bpm: 152,
                syncPnt: '1970-01-01T00:00:00.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 20, type: 'ch', self: 'SILENCE' },
              { id: 3, dur: 20, type: 'ch', self: 'SILENCEm' },
              { id: 4, dur: 12, type: 'ch', self: 'SILENCE' },
              { id: 7, dur: 8, type: 'ch', self: 'Em' },
              { id: 8, dur: 3, type: 'ch', self: 'Em' },
              { id: 9, dur: 5, type: 'ch', self: 'C' },
              { id: 10, dur: 3, type: 'ch', self: 'D' },
              { id: 11, dur: 5, type: 'ch', self: 'Em' },
              { id: 12, dur: 3, type: 'ch', self: 'Em' },
              { id: 13, dur: 5, type: 'ch', self: 'C' },
              { id: 14, dur: 3, type: 'ch', self: 'D' },
              { id: 15, dur: 5, type: 'ch', self: 'Em' },
              { id: 16, dur: 3, type: 'ch', self: 'Em' },
              { id: 17, dur: 5, type: 'ch', self: 'G' },
              { id: 18, dur: 3, type: 'ch', self: 'D' },
              { id: 19, dur: 5, type: 'ch', self: 'C' },
              { id: 20, dur: 3, type: 'ch', self: 'Em' },
              { id: 21, dur: 5, type: 'ch', self: 'G' },
              { id: 22, dur: 3, type: 'ch', self: 'D' },
              { id: 23, dur: 5, type: 'ch', self: 'Am7' },
              { id: 24, dur: 3, type: 'ch', self: 'Em' },
              { id: 25, dur: 5, type: 'ch', self: 'G' },
              { id: 26, dur: 3, type: 'ch', self: 'D' },
              { id: 27, dur: 5, type: 'ch', self: 'C' },
              { id: 28, dur: 3, type: 'ch', self: 'Am7' },
              { id: 29, dur: 5, type: 'ch', self: 'G' },
              { id: 30, dur: 8, type: 'ch', self: 'C' },
              { id: 31, dur: 3, type: 'ch', self: 'Em' },
              { id: 32, dur: 5, type: 'ch', self: 'C' },
              { id: 33, dur: 3, type: 'ch', self: 'D' },
              { id: 34, dur: 5, type: 'ch', self: 'Em' },
              { id: 35, dur: 3, type: 'ch', self: 'Em' },
              { id: 36, dur: 5, type: 'ch', self: 'G' },
              { id: 37, dur: 3, type: 'ch', self: 'D' },
              { id: 38, dur: 5, type: 'ch', self: 'C' },
              { id: 39, dur: 3, type: 'ch', self: 'Em' },
              { id: 40, dur: 5, type: 'ch', self: 'G' },
              { id: 41, dur: 3, type: 'ch', self: 'D' },
              { id: 42, dur: 5, type: 'ch', self: 'Am7' },
              { id: 43, dur: 3, type: 'ch', self: 'Em' },
              { id: 44, dur: 5, type: 'ch', self: 'G' },
              { id: 45, dur: 3, type: 'ch', self: 'D' },
              { id: 46, dur: 5, type: 'ch', self: 'C' },
              { id: 47, dur: 3, type: 'ch', self: 'Am7' },
              { id: 48, dur: 5, type: 'ch', self: 'G' },
              { id: 49, dur: 8, type: 'ch', self: 'C' },
              { id: 50, dur: 3, type: 'ch', self: 'Am7' },
              { id: 51, dur: 5, type: 'ch', self: 'G' },
              { id: 52, dur: 8, type: 'ch', self: 'C' },
              { id: 53, dur: 3, type: 'ch', self: 'Em' },
              { id: 54, dur: 5, type: 'ch', self: 'C' },
              { id: 55, dur: 3, type: 'ch', self: 'D' },
              { id: 56, dur: 5, type: 'ch', self: 'Em' },
              { id: 57, dur: 3, type: 'ch', self: 'Em' },
              { id: 58, dur: 5, type: 'ch', self: 'C' },
              { id: 59, dur: 3, type: 'ch', self: 'D' },
              { id: 60, dur: 5, type: 'ch', self: 'Em' },
              { id: 61, dur: 3, type: 'ch', self: 'Em' },
              { id: 62, dur: 5, type: 'ch', self: 'C' },
              { id: 63, dur: 3, type: 'ch', self: 'D' },
              { id: 64, dur: 5, type: 'ch', self: 'Em' },
              { id: 65, dur: 3, type: 'ch', self: 'Em' },
              { id: 66, dur: 5, type: 'ch', self: 'C' },
              { id: 67, dur: 3, type: 'ch', self: 'D' },
              { id: 68, dur: 5, type: 'ch', self: 'Am7' },
              { id: 69, dur: 8, type: 'ch', self: 'SILENCEm' },
              { id: 70, dur: 3, type: 'ch', self: 'Em' },
              { id: 71, dur: 5, type: 'ch', self: 'C' },
              { id: 72, dur: 3, type: 'ch', self: 'D' },
              { id: 73, dur: 5, type: 'ch', self: 'Em' },
              { id: 74, dur: 3, type: 'ch', self: 'Em' },
              { id: 75, dur: 5, type: 'ch', self: 'C' },
              { id: 76, dur: 3, type: 'ch', self: 'D' },
              { id: 77, dur: 5, type: 'ch', self: 'Em' },
              { id: 78, dur: 3, type: 'ch', self: 'Em' },
              { id: 79, dur: 5, type: 'ch', self: 'G' },
              { id: 80, dur: 3, type: 'ch', self: 'D' },
              { id: 81, dur: 5, type: 'ch', self: 'C' },
              { id: 82, dur: 3, type: 'ch', self: 'Em' },
              { id: 83, dur: 5, type: 'ch', self: 'G' },
              { id: 84, dur: 3, type: 'ch', self: 'D' },
              { id: 85, dur: 5, type: 'ch', self: 'Am7' },
              { id: 86, dur: 3, type: 'ch', self: 'Em' },
              { id: 87, dur: 5, type: 'ch', self: 'G' },
              { id: 88, dur: 3, type: 'ch', self: 'D' },
              { id: 89, dur: 5, type: 'ch', self: 'C' },
              { id: 90, dur: 3, type: 'ch', self: 'Am7' },
              { id: 91, dur: 5, type: 'ch', self: 'G' },
              { id: 92, dur: 8, type: 'ch', self: 'C' },
              { id: 93, dur: 3, type: 'ch', self: 'Am7' },
              { id: 94, dur: 5, type: 'ch', self: 'G' },
              { id: 95, dur: 8, type: 'ch', self: 'C' },
              { id: 96, dur: 3, type: 'ch', self: 'Em' },
              { id: 97, dur: 5, type: 'ch', self: 'C' },
              { id: 98, dur: 3, type: 'ch', self: 'D' },
              { id: 99, dur: 5, type: 'ch', self: 'Em' },
              { id: 100, dur: 3, type: 'ch', self: 'Em' },
              { id: 101, dur: 5, type: 'ch', self: 'C' },
              { id: 102, dur: 3, type: 'ch', self: 'D' },
              { id: 103, dur: 5, type: 'ch', self: 'Em' },
              { id: 104, dur: 3, type: 'ch', self: 'Em' },
              { id: 105, dur: 5, type: 'ch', self: 'C' },
              { id: 106, dur: 3, type: 'ch', self: 'D' },
              { id: 107, dur: 5, type: 'ch', self: 'Em' },
              { id: 108, dur: 3, type: 'ch', self: 'Em' },
              { id: 109, dur: 5, type: 'ch', self: 'C' },
              { id: 110, dur: 3, type: 'ch', self: 'D' },
              { id: 111, dur: 5, type: 'ch', self: 'Am7' },
              { id: 112, dur: 8, type: 'ch', self: 'SILENCEm7' },
              { id: 113, dur: 8, type: 'ch', self: 'Am7' },
              { id: 114, dur: 3, type: 'ch', self: 'Am7' },
              { id: 115, dur: 5, type: 'ch', self: 'Em' },
              { id: 116, dur: 3, type: 'ch', self: 'G' },
              { id: 117, dur: 5, type: 'ch', self: 'D' },
              { id: 118, dur: 3, type: 'ch', self: 'Am7' },
              { id: 119, dur: 5, type: 'ch', self: 'Em' },
              { id: 120, dur: 3, type: 'ch', self: 'G' },
              { id: 121, dur: 5, type: 'ch', self: 'D' },
              { id: 122, dur: 3, type: 'ch', self: 'Am7' },
              { id: 123, dur: 5, type: 'ch', self: 'Em' },
              { id: 124, dur: 3, type: 'ch', self: 'G' },
              { id: 125, dur: 5, type: 'ch', self: 'D' },
              { id: 126, dur: 6, type: 'ch', self: 'Am7' },
              { id: 127, dur: 2, type: 'ch', self: 'G' },
              { id: 128, dur: 4, type: 'ch', self: 'C' },
              { id: 129, dur: 4, type: 'ch', self: 'D' },
              { id: 130, dur: 3, type: 'ch', self: 'Em' },
              { id: 131, dur: 5, type: 'ch', self: 'C' },
              { id: 132, dur: 3, type: 'ch', self: 'D' },
              { id: 133, dur: 5, type: 'ch', self: 'Em' },
              { id: 134, dur: 3, type: 'ch', self: 'Em' },
              { id: 135, dur: 5, type: 'ch', self: 'C' },
              { id: 136, dur: 3, type: 'ch', self: 'D' },
              { id: 137, dur: 5, type: 'ch', self: 'Em' },
              { id: 138, dur: 3, type: 'ch', self: 'Em' },
              { id: 139, dur: 5, type: 'ch', self: 'C' },
              { id: 140, dur: 3, type: 'ch', self: 'D' },
              { id: 141, dur: 5, type: 'ch', self: 'Em' },
              { id: 142, dur: 3, type: 'ch', self: 'Em' },
              { id: 143, dur: 5, type: 'ch', self: 'C' },
              { id: 144, dur: 3, type: 'ch', self: 'D' },
              { id: 145, dur: 5, type: 'ch', self: 'Em' },
              { id: 146, dur: 3, type: 'ch', self: 'Em' },
              { id: 147, dur: 5, type: 'ch', self: 'C' },
              { id: 148, dur: 3, type: 'ch', self: 'D' },
              { id: 149, dur: 5, type: 'ch', self: 'Em' },
              { id: 150, dur: 3, type: 'ch', self: 'Em' },
              { id: 151, dur: 5, type: 'ch', self: 'C' },
              { id: 152, dur: 3, type: 'ch', self: 'D' },
              { id: 153, dur: 5, type: 'ch', self: 'Em' },
              { id: 154, dur: 3, type: 'ch', self: 'Em' },
              { id: 155, dur: 5, type: 'ch', self: 'C' },
              { id: 156, dur: 3, type: 'ch', self: 'D' },
              { id: 157, dur: 5, type: 'ch', self: 'Em' },
              { id: 158, dur: 3, type: 'ch', self: 'Em' },
              { id: 159, dur: 5, type: 'ch', self: 'C' },
              { id: 160, dur: 3, type: 'ch', self: 'D' },
              { id: 161, dur: 5, type: 'ch', self: 'Em' },
            ],
            song: {
              id: '65b7297d1ba5c70e2bc25583',
              name: 'I See Fire',
              key: 'A# minor',
              bpm: [152],
              genre: 'Folk Pop',
              artists: [{ name: 'Ed Sheeran', id: '657151a534e69c78f8553bb5' }],
            },
          },
          {
            id: '65b74720a5ca6ac331ec5b95',
            source: 'KngoH3VGT-c',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 12,
                type: 'ch',
                self: 'C',
                bpm: 187,
                syncPnt: '1970-01-01T00:00:02.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 5, dur: 6, type: 'ch', self: 'C' },
              { id: 6, dur: 3, type: 'ch', self: 'F' },
              { id: 7, dur: 12, type: 'ch', self: 'C' },
              { id: 8, dur: 6, type: 'ch', self: 'C' },
              { id: 9, dur: 3, type: 'ch', self: 'G' },
              { id: 10, dur: 12, type: 'ch', self: 'Am' },
              { id: 11, dur: 9, type: 'ch', self: 'F' },
              { id: 12, dur: 12, type: 'ch', self: 'C' },
              { id: 13, dur: 9, type: 'ch', self: 'F' },
              { id: 14, dur: 6, type: 'ch', self: 'C' },
              { id: 15, dur: 6, type: 'ch', self: 'G' },
              { id: 16, dur: 12, type: 'ch', self: 'Am' },
              { id: 17, dur: 12, type: 'ch', self: 'F' },
              { id: 18, dur: 12, type: 'ch', self: 'C' },
              { id: 19, dur: 12, type: 'ch', self: 'G' },
              { id: 20, dur: 12, type: 'ch', self: 'Am' },
              { id: 21, dur: 12, type: 'ch', self: 'F' },
              { id: 22, dur: 12, type: 'ch', self: 'C' },
              { id: 23, dur: 12, type: 'ch', self: 'G' },
              { id: 24, dur: 6, type: 'ch', self: 'C' },
              { id: 25, dur: 3, type: 'ch', self: 'F' },
              { id: 26, dur: 12, type: 'ch', self: 'C' },
              { id: 27, dur: 6, type: 'ch', self: 'C' },
              { id: 28, dur: 3, type: 'ch', self: 'G' },
              { id: 29, dur: 12, type: 'ch', self: 'Am' },
              { id: 30, dur: 9, type: 'ch', self: 'F' },
              { id: 31, dur: 12, type: 'ch', self: 'C' },
              { id: 32, dur: 9, type: 'ch', self: 'F' },
              { id: 33, dur: 12, type: 'ch', self: 'C' },
              { id: 35, dur: 11.9, type: 'ch', self: 'Am' },
              { id: 36, dur: 11.9, type: 'ch', self: 'F' },
              { id: 37, dur: 12, type: 'ch', self: 'C' },
              { id: 38, dur: 12, type: 'ch', self: 'G' },
              { id: 39, dur: 12, type: 'ch', self: 'Am' },
              { id: 40, dur: 12, type: 'ch', self: 'F' },
              { id: 41, dur: 12, type: 'ch', self: 'C' },
              { id: 42, dur: 12, type: 'ch', self: 'G' },
              { id: 43, dur: 12, type: 'ch', self: 'Dm' },
              { id: 44, dur: 12, type: 'ch', self: 'G' },
              { id: 45, dur: 12, type: 'ch', self: 'Dm' },
              { id: 46, dur: 11.9, type: 'ch', self: 'G' },
              { id: 47, dur: 11.9, type: 'ch', self: 'G' },
              { id: 48, dur: 12, type: 'ch', self: 'Am' },
              { id: 49, dur: 12, type: 'ch', self: 'F' },
              { id: 50, dur: 12, type: 'ch', self: 'C' },
              { id: 51, dur: 12, type: 'ch', self: 'G' },
              { id: 52, dur: 11.9, type: 'ch', self: 'Am' },
              { id: 53, dur: 11.9, type: 'ch', self: 'F' },
              { id: 54, dur: 12, type: 'ch', self: 'C' },
              { id: 55, dur: 12, type: 'ch', self: 'G' },
              { id: 56, dur: 12, type: 'ch', self: 'Am' },
              { id: 57, dur: 12, type: 'ch', self: 'F' },
              { id: 58, dur: 11.9, type: 'ch', self: 'C' },
              { id: 59, dur: 11.9, type: 'ch', self: 'G' },
              { id: 60, dur: 12, type: 'ch', self: 'Am' },
              { id: 61, dur: 12, type: 'ch', self: 'F' },
              { id: 62, dur: 12, type: 'ch', self: 'C' },
              { id: 63, dur: 11.9, type: 'ch', self: 'G' },
              { id: 64, dur: 11.9, type: 'ch', self: 'Am' },
              { id: 65, dur: 11.9, type: 'ch', self: 'F' },
              { id: 66, dur: 11.9, type: 'ch', self: 'C' },
              { id: 67, dur: 12, type: 'ch', self: 'G' },
              { id: 68, dur: 9.5, type: 'ch', self: 'C' },
              { id: 69, dur: 9.5, type: 'ch', self: 'F' },
              { id: 70, dur: 12, type: 'ch', self: 'C' },
            ],
            song: {
              id: '65b73735a5ca6ac331ec5b94',
              name: 'All I Want',
              key: 'C major',
              bpm: [187],
              genre: 'Folk Rock',
              artists: [{ name: 'Kodaline', id: '65b736dea5ca6ac331ec5b93' }],
            },
          },
          {
            id: '65b75470877b1d6bc1258f3d',
            source: '1vrEljMfXYo',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'G',
                bpm: 82,
                syncPnt: '1970-01-01T00:00:00.900Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'G' },
              { id: 4, dur: 4, type: 'ch', self: 'Em' },
              { id: 5, dur: 4, type: 'ch', self: 'D' },
              { id: 6, dur: 2, type: 'ch', self: 'C' },
              { id: 7, dur: 4, type: 'ch', self: 'G' },
              { id: 8, dur: 4, type: 'ch', self: 'G' },
              { id: 9, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 10, dur: 3.9, type: 'ch', self: 'D' },
              { id: 11, dur: 2, type: 'ch', self: 'C' },
              { id: 12, dur: 2, type: 'ch', self: 'G' },
              { id: 13, dur: 4, type: 'ch', self: 'G' },
              { id: 14, dur: 4, type: 'ch', self: 'D' },
              { id: 15, dur: 4, type: 'ch', self: 'Em' },
              { id: 16, dur: 4, type: 'ch', self: 'C' },
              { id: 17, dur: 4, type: 'ch', self: 'G' },
              { id: 18, dur: 4, type: 'ch', self: 'D' },
              { id: 19, dur: 4, type: 'ch', self: 'C' },
              { id: 20, dur: 3.9, type: 'ch', self: 'G' },
              { id: 21, dur: 3.9, type: 'ch', self: 'G' },
              { id: 22, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 23, dur: 3.9, type: 'ch', self: 'D' },
              { id: 24, dur: 2, type: 'ch', self: 'C' },
              { id: 25, dur: 4, type: 'ch', self: 'G' },
              { id: 26, dur: 3.9, type: 'ch', self: 'G' },
              { id: 27, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 28, dur: 4, type: 'ch', self: 'D' },
              { id: 29, dur: 2, type: 'ch', self: 'C' },
              { id: 30, dur: 2, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 4, type: 'ch', self: 'D' },
              { id: 33, dur: 4, type: 'ch', self: 'Em' },
              { id: 34, dur: 4, type: 'ch', self: 'C' },
              { id: 35, dur: 4, type: 'ch', self: 'G' },
              { id: 36, dur: 4, type: 'ch', self: 'D' },
              { id: 37, dur: 4, type: 'ch', self: 'C' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 2, type: 'ch', self: 'Em' },
              { id: 40, dur: 2, type: 'ch', self: 'D' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 2, type: 'ch', self: 'C' },
              { id: 43, dur: 2, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'D' },
              { id: 45, dur: 2, type: 'ch', self: 'Em' },
              { id: 46, dur: 2, type: 'ch', self: 'F' },
              { id: 47, dur: 2, type: 'ch', self: 'C' },
              { id: 48, dur: 2, type: 'ch', self: 'G' },
              { id: 49, dur: 4, type: 'ch', self: 'D' },
              { id: 50, dur: 4, type: 'ch', self: 'D7' },
              { id: 51, dur: 4, type: 'ch', self: 'G' },
              { id: 52, dur: 4, type: 'ch', self: 'D' },
              { id: 53, dur: 4, type: 'ch', self: 'Em' },
              { id: 54, dur: 4, type: 'ch', self: 'C' },
              { id: 55, dur: 4, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'D' },
              { id: 57, dur: 4, type: 'ch', self: 'C' },
              { id: 58, dur: 4, type: 'ch', self: 'G' },
              { id: 59, dur: 4, type: 'ch', self: 'G' },
              { id: 60, dur: 4, type: 'ch', self: 'D' },
              { id: 61, dur: 4, type: 'ch', self: 'Em' },
              { id: 62, dur: 4, type: 'ch', self: 'C' },
              { id: 63, dur: 4, type: 'ch', self: 'G' },
              { id: 64, dur: 4, type: 'ch', self: 'D' },
              { id: 65, dur: 4, type: 'ch', self: 'C' },
              { id: 66, dur: 4, type: 'ch', self: 'G' },
              { id: 67, dur: 4, type: 'ch', self: 'D' },
              { id: 68, dur: 4, type: 'ch', self: 'G' },
              { id: 69, dur: 4, type: 'ch', self: 'D' },
              { id: 70, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65b74908877b1d6bc1258f3c',
              name: 'Take Me Home Country Roads',
              key: 'A major',
              bpm: [82],
              genre: 'Country',
              artists: [
                { name: 'John Denver', id: '65b74864a5ca6ac331ec5b97' },
              ],
            },
          },
          {
            id: '65bf39e06de300e257cee2ac',
            source: 'ekzHIouo8Q4',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2,
                type: 'ch',
                self: 'D7',
                bpm: 73,
                syncPnt: '1970-01-01T00:00:11.550Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 2, type: 'ch', self: 'Dm7' },
              { id: 3, dur: 4, type: 'ch', self: 'C' },
              { id: 4, dur: 2, type: 'ch', self: 'D7' },
              { id: 5, dur: 2, type: 'ch', self: 'Dm7' },
              { id: 6, dur: 3, type: 'ch', self: 'C' },
              { id: 7, dur: 1, type: 'ch', self: 'G' },
              { id: 8, dur: 2, type: 'ch', self: 'Am' },
              { id: 9, dur: 2, type: 'ch', self: 'C' },
              { id: 10, dur: 4, type: 'ch', self: 'Dm' },
              { id: 11, dur: 2, type: 'ch', self: 'G' },
              { id: 12, dur: 2, type: 'ch', self: 'G7' },
              { id: 13, dur: 2, type: 'ch', self: 'C' },
              { id: 14, dur: 2, type: 'ch', self: 'Em' },
              { id: 15, dur: 2, type: 'ch', self: 'Am' },
              { id: 16, dur: 2, type: 'ch', self: 'C' },
              { id: 17, dur: 4, type: 'ch', self: 'Dm' },
              { id: 18, dur: 4, type: 'ch', self: 'G' },
              { id: 19, dur: 2, type: 'ch', self: 'C' },
              { id: 20, dur: 2, type: 'ch', self: 'Em' },
              { id: 21, dur: 4, type: 'ch', self: 'Am' },
              { id: 22, dur: 4, type: 'ch', self: 'Em' },
              { id: 23, dur: 4, type: 'ch', self: 'A#' },
              { id: 24, dur: 2, type: 'ch', self: 'C' },
              { id: 25, dur: 2, type: 'ch', self: 'G' },
              { id: 26, dur: 2, type: 'ch', self: 'F' },
              { id: 27, dur: 2, type: 'ch', self: 'G' },
              { id: 28, dur: 4, type: 'ch', self: 'C' },
              { id: 29, dur: 2, type: 'ch', self: 'F' },
              { id: 30, dur: 2, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'C' },
              { id: 32, dur: 2, type: 'ch', self: 'F' },
              { id: 33, dur: 2, type: 'ch', self: 'G' },
              { id: 34, dur: 2, type: 'ch', self: 'Am' },
              { id: 35, dur: 2, type: 'ch', self: 'D7' },
              { id: 36, dur: 2, type: 'ch', self: 'F' },
              { id: 37, dur: 2, type: 'ch', self: 'Fm' },
              { id: 38, dur: 3, type: 'ch', self: 'C' },
              { id: 39, dur: 1, type: 'ch', self: 'F' },
              { id: 40, dur: 3, type: 'ch', self: 'C' },
              { id: 41, dur: 1, type: 'ch', self: 'Em' },
              { id: 42, dur: 2, type: 'ch', self: 'Am' },
              { id: 43, dur: 2, type: 'ch', self: 'C' },
              { id: 44, dur: 4, type: 'ch', self: 'Dm' },
              { id: 45, dur: 2, type: 'ch', self: 'G' },
              { id: 46, dur: 2, type: 'ch', self: 'G7' },
              { id: 47, dur: 2, type: 'ch', self: 'C' },
              { id: 48, dur: 2, type: 'ch', self: 'Em' },
              { id: 49, dur: 2, type: 'ch', self: 'Am' },
              { id: 50, dur: 2, type: 'ch', self: 'C' },
              { id: 51, dur: 4, type: 'ch', self: 'Dm' },
              { id: 52, dur: 4, type: 'ch', self: 'G' },
              { id: 53, dur: 2, type: 'ch', self: 'C' },
              { id: 54, dur: 2, type: 'ch', self: 'Em' },
              { id: 55, dur: 4, type: 'ch', self: 'Am' },
              { id: 56, dur: 4, type: 'ch', self: 'Em' },
              { id: 57, dur: 4, type: 'ch', self: 'A#' },
              { id: 58, dur: 2, type: 'ch', self: 'C' },
              { id: 59, dur: 2, type: 'ch', self: 'G' },
              { id: 60, dur: 2, type: 'ch', self: 'F' },
              { id: 61, dur: 2, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'C' },
              { id: 63, dur: 2, type: 'ch', self: 'F' },
              { id: 64, dur: 2, type: 'ch', self: 'G' },
              { id: 65, dur: 4, type: 'ch', self: 'C' },
              { id: 66, dur: 2, type: 'ch', self: 'F' },
              { id: 67, dur: 2, type: 'ch', self: 'G' },
              { id: 68, dur: 2, type: 'ch', self: 'Am' },
              { id: 69, dur: 2, type: 'ch', self: 'D7' },
              { id: 70, dur: 2, type: 'ch', self: 'F' },
              { id: 71, dur: 2, type: 'ch', self: 'Fm' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 4, type: 'ch', self: 'F' },
              { id: 74, dur: 4, type: 'ch', self: 'G' },
              { id: 75, dur: 2, type: 'ch', self: 'C' },
              { id: 76, dur: 2, type: 'ch', self: 'G' },
              { id: 77, dur: 2, type: 'ch', self: 'Am' },
              { id: 78, dur: 2, type: 'ch', self: 'Em' },
              { id: 79, dur: 4, type: 'ch', self: 'D7' },
              { id: 80, dur: 4, type: 'ch', self: 'Dm7' },
              { id: 81, dur: 4, type: 'ch', self: 'G' },
              { id: 82, dur: 1, type: 'ch', self: 'G' },
              { id: 83, dur: 3, type: 'ch', self: 'SILENCE' },
              { id: 84, dur: 2.2, type: 'ch', self: 'F' },
              { id: 85, dur: 2.2, type: 'ch', self: 'G' },
              { id: 86, dur: 4, type: 'ch', self: 'C' },
              { id: 87, dur: 2, type: 'ch', self: 'F' },
              { id: 88, dur: 2, type: 'ch', self: 'G' },
              { id: 89, dur: 4, type: 'ch', self: 'C' },
              { id: 90, dur: 2, type: 'ch', self: 'F' },
              { id: 91, dur: 2.1, type: 'ch', self: 'G' },
              { id: 92, dur: 2.1, type: 'ch', self: 'Am' },
              { id: 93, dur: 2, type: 'ch', self: 'D7' },
              { id: 94, dur: 2, type: 'ch', self: 'F' },
              { id: 95, dur: 2.1, type: 'ch', self: 'Fm' },
              { id: 96, dur: 2.1, type: 'ch', self: 'C' },
              { id: 97, dur: 2.1, type: 'ch', self: 'D7' },
              { id: 98, dur: 2.5, type: 'ch', self: 'F' },
              { id: 99, dur: 2.8, type: 'ch', self: 'Fm' },
              { id: 100, dur: 2.5, type: 'ch', self: 'C' },
            ],
            song: {
              id: '65bf30096de300e257cee2ab',
              name: 'When I Was Your Man',
              key: 'C major',
              bpm: [73],
              genre: 'Pop',
              artists: [{ name: 'Bruno Mars', id: '65bf2f776de300e257cee2aa' }],
            },
          },
          {
            id: '65bf458e6de300e257cee2af',
            source: 'hLQl3WQQoQ0',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'G',
                bpm: 135,
                syncPnt: '1970-01-01T00:00:00.850Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'Bm' },
              { id: 3, dur: 8, type: 'ch', self: 'Em' },
              { id: 4, dur: 8, type: 'ch', self: 'C' },
              { id: 5, dur: 8, type: 'ch', self: 'G' },
              { id: 6, dur: 8, type: 'ch', self: 'Bm' },
              { id: 7, dur: 8, type: 'ch', self: 'Em' },
              { id: 8, dur: 8, type: 'ch', self: 'C' },
              { id: 9, dur: 8, type: 'ch', self: 'G' },
              { id: 10, dur: 8, type: 'ch', self: 'Bm' },
              { id: 11, dur: 8, type: 'ch', self: 'Em' },
              { id: 12, dur: 8, type: 'ch', self: 'C' },
              { id: 13, dur: 8, type: 'ch', self: 'G' },
              { id: 14, dur: 8, type: 'ch', self: 'Bm' },
              { id: 15, dur: 8, type: 'ch', self: 'Em' },
              { id: 16, dur: 8, type: 'ch', self: 'C' },
              { id: 17, dur: 4, type: 'ch', self: 'D9' },
              { id: 18, dur: 4, type: 'ch', self: 'Em' },
              { id: 19, dur: 8, type: 'ch', self: 'C' },
              { id: 20, dur: 4, type: 'ch', self: 'D9' },
              { id: 21, dur: 4, type: 'ch', self: 'Em' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 400, dur: 4, type: 'ch', self: 'D9' },
              { id: 23, dur: 4, type: 'ch', self: 'C' },
              { id: 24, dur: 4, type: 'ch', self: 'G' },
              { id: 25, dur: 4, type: 'ch', self: 'D' },
              { id: 26, dur: 4, type: 'ch', self: 'Em' },
              { id: 27, dur: 4, type: 'ch', self: 'C' },
              { id: 28, dur: 4, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'D' },
              { id: 30, dur: 4, type: 'ch', self: 'Em' },
              { id: 31, dur: 4, type: 'ch', self: 'C' },
              { id: 32, dur: 4, type: 'ch', self: 'G' },
              { id: 33, dur: 4, type: 'ch', self: 'D' },
              { id: 34, dur: 4, type: 'ch', self: 'Em' },
              { id: 35, dur: 4, type: 'ch', self: 'C' },
              { id: 36, dur: 4, type: 'ch', self: 'G' },
              { id: 37, dur: 4, type: 'ch', self: 'D' },
              { id: 38, dur: 4, type: 'ch', self: 'Em' },
              { id: 39, dur: 4, type: 'ch', self: 'C' },
              { id: 40, dur: 4, type: 'ch', self: 'G' },
              { id: 41, dur: 4, type: 'ch', self: 'D' },
              { id: 42, dur: 4, type: 'ch', self: 'Em' },
              { id: 43, dur: 8, type: 'ch', self: 'C' },
              { id: 44, dur: 8, type: 'ch', self: 'G' },
              { id: 45, dur: 8, type: 'ch', self: 'Bm' },
              { id: 46, dur: 8, type: 'ch', self: 'Em' },
              { id: 47, dur: 8, type: 'ch', self: 'C' },
              { id: 48, dur: 8, type: 'ch', self: 'G' },
              { id: 49, dur: 8, type: 'ch', self: 'Bm' },
              { id: 50, dur: 8, type: 'ch', self: 'Em' },
              { id: 51, dur: 8, type: 'ch', self: 'C' },
              { id: 52, dur: 4, type: 'ch', self: 'D9' },
              { id: 53, dur: 4, type: 'ch', self: 'Em' },
              { id: 54, dur: 8, type: 'ch', self: 'C' },
              { id: 55, dur: 4, type: 'ch', self: 'D9' },
              { id: 56, dur: 4, type: 'ch', self: 'Em' },
              { id: 57, dur: 4, type: 'ch', self: 'C' },
              { id: 58, dur: 4, type: 'ch', self: 'D' },
              { id: 59, dur: 4, type: 'ch', self: 'Em' },
              { id: 60, dur: 4, type: 'ch', self: 'D' },
              { id: 61, dur: 4, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'D' },
              { id: 63, dur: 4, type: 'ch', self: 'Em' },
              { id: 64, dur: 4, type: 'ch', self: 'C' },
              { id: 65, dur: 4, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'D' },
              { id: 67, dur: 4, type: 'ch', self: 'Em' },
              { id: 68, dur: 4, type: 'ch', self: 'C' },
              { id: 69, dur: 4, type: 'ch', self: 'G' },
              { id: 70, dur: 4, type: 'ch', self: 'D' },
              { id: 71, dur: 4, type: 'ch', self: 'Em' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 4, type: 'ch', self: 'G' },
              { id: 74, dur: 4, type: 'ch', self: 'D' },
              { id: 75, dur: 4, type: 'ch', self: 'Em' },
              { id: 76, dur: 4, type: 'ch', self: 'C' },
              { id: 77, dur: 8, type: 'ch', self: 'D' },
              { id: 78, dur: 8, type: 'ch', self: 'Em' },
              { id: 79, dur: 8, type: 'ch', self: 'C' },
              { id: 80, dur: 4, type: 'ch', self: 'Am' },
              { id: 81, dur: 4, type: 'ch', self: 'G' },
              { id: 82, dur: 4.6, type: 'ch', self: 'C' },
              { id: 83, dur: 4.6, type: 'ch', self: 'D' },
              { id: 84, dur: 4.2, type: 'ch', self: 'G' },
              { id: 85, dur: 4.2, type: 'ch', self: 'D' },
              { id: 86, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 87, dur: 4.1, type: 'ch', self: 'C' },
              { id: 88, dur: 4, type: 'ch', self: 'G' },
              { id: 89, dur: 4, type: 'ch', self: 'D' },
              { id: 90, dur: 4, type: 'ch', self: 'Em' },
              { id: 91, dur: 3.9, type: 'ch', self: 'C' },
              { id: 92, dur: 4, type: 'ch', self: 'G' },
              { id: 93, dur: 4, type: 'ch', self: 'D' },
              { id: 94, dur: 4, type: 'ch', self: 'Em' },
              { id: 95, dur: 4, type: 'ch', self: 'C' },
              { id: 96, dur: 4, type: 'ch', self: 'G' },
              { id: 97, dur: 4, type: 'ch', self: 'D' },
              { id: 98, dur: 4, type: 'ch', self: 'Em' },
              { id: 99, dur: 4, type: 'ch', self: 'C' },
              { id: 100, dur: 4, type: 'ch', self: 'G' },
              { id: 101, dur: 4, type: 'ch', self: 'D' },
              { id: 102, dur: 4, type: 'ch', self: 'Em' },
              { id: 103, dur: 4, type: 'ch', self: 'C' },
              { id: 104, dur: 4, type: 'ch', self: 'G' },
              { id: 105, dur: 4, type: 'ch', self: 'D' },
              { id: 106, dur: 4, type: 'ch', self: 'Em' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
              { id: 108, dur: 4, type: 'ch', self: 'G' },
              { id: 109, dur: 4, type: 'ch', self: 'D' },
              { id: 110, dur: 4, type: 'ch', self: 'Em' },
              { id: 111, dur: 4, type: 'ch', self: 'C' },
              { id: 112, dur: 4, type: 'ch', self: 'G' },
              { id: 113, dur: 4, type: 'ch', self: 'D' },
              { id: 114, dur: 4, type: 'ch', self: 'Em' },
              { id: 115, dur: 4, type: 'ch', self: 'C' },
              { id: 116, dur: 4, type: 'ch', self: 'G' },
              { id: 117, dur: 4, type: 'ch', self: 'D' },
              { id: 118, dur: 4, type: 'ch', self: 'Em' },
              { id: 119, dur: 8, type: 'ch', self: 'C' },
              { id: 120, dur: 16, type: 'ch', self: 'D' },
              { id: 121, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65bf3b936de300e257cee2ae',
              name: 'Someone Like You',
              key: 'A major',
              bpm: [135],
              genre: 'Pop',
              artists: [{ name: 'Adele', id: '65bf3b4b6de300e257cee2ad' }],
            },
          },
          {
            id: '65c086b9e28b16b699afad67',
            source: '6hzrDeceEKc',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'Em',
                bpm: 175,
                syncPnt: '1970-01-01T00:00:16.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'D' },
              { id: 4, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 5, dur: 4, type: 'ch', self: 'Em' },
              { id: 6, dur: 4, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'D' },
              { id: 8, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 9, dur: 4, type: 'ch', self: 'Em' },
              { id: 10, dur: 4, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'D' },
              { id: 12, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 13, dur: 4, type: 'ch', self: 'Em' },
              { id: 14, dur: 4, type: 'ch', self: 'G' },
              { id: 15, dur: 4, type: 'ch', self: 'D' },
              { id: 16, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 17, dur: 4, type: 'ch', self: 'Em' },
              { id: 18, dur: 4, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'D' },
              { id: 20, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 21, dur: 4, type: 'ch', self: 'Em' },
              { id: 22, dur: 4, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'D' },
              { id: 24, dur: 4.1, type: 'ch', self: 'A7sus4' },
              { id: 25, dur: 4, type: 'ch', self: 'Em' },
              { id: 26, dur: 4, type: 'ch', self: 'G' },
              { id: 27, dur: 4, type: 'ch', self: 'D' },
              { id: 28, dur: 4.1, type: 'ch', self: 'A7sus4' },
              { id: 29, dur: 4, type: 'ch', self: 'C' },
              { id: 30, dur: 4, type: 'ch', self: 'D' },
              { id: 31, dur: 8, type: 'ch', self: 'A7sus4' },
              { id: 33, dur: 4, type: 'ch', self: 'Em' },
              { id: 34, dur: 4, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'D' },
              { id: 36, dur: 4.1, type: 'ch', self: 'A7sus4' },
              { id: 37, dur: 4, type: 'ch', self: 'Em' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'D' },
              { id: 40, dur: 5, type: 'ch', self: 'A7sus4' },
              { id: 41, dur: 4, type: 'ch', self: 'Em' },
              { id: 42, dur: 4, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'D' },
              { id: 44, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 45, dur: 4, type: 'ch', self: 'Em' },
              { id: 46, dur: 4, type: 'ch', self: 'G' },
              { id: 47, dur: 4, type: 'ch', self: 'D' },
              { id: 48, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 49, dur: 4, type: 'ch', self: 'C' },
              { id: 50, dur: 4, type: 'ch', self: 'D' },
              { id: 51, dur: 8, type: 'ch', self: 'Em' },
              { id: 52, dur: 4, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'D' },
              { id: 54, dur: 8, type: 'ch', self: 'Em' },
              { id: 55, dur: 4, type: 'ch', self: 'C' },
              { id: 56, dur: 4, type: 'ch', self: 'D' },
              { id: 57, dur: 2, type: 'ch', self: 'G' },
              { id: 58, dur: 2, type: 'ch', self: 'D' },
              { id: 59, dur: 2, type: 'ch', self: 'Em' },
              { id: 60, dur: 2, type: 'ch', self: 'D' },
              { id: 61, dur: 16, type: 'ch', self: 'A7sus4' },
              { id: 62, dur: 4, type: 'ch', self: 'C' },
              { id: 63, dur: 4, type: 'ch', self: 'Em' },
              { id: 64, dur: 4, type: 'ch', self: 'G' },
              { id: 65, dur: 4, type: 'ch', self: 'Em' },
              { id: 66, dur: 4, type: 'ch', self: 'C' },
              { id: 67, dur: 4, type: 'ch', self: 'Em' },
              { id: 68, dur: 4, type: 'ch', self: 'G' },
              { id: 69, dur: 4, type: 'ch', self: 'Em' },
              { id: 70, dur: 4, type: 'ch', self: 'C' },
              { id: 71, dur: 4, type: 'ch', self: 'Em' },
              { id: 72, dur: 4, type: 'ch', self: 'G' },
              { id: 73, dur: 4, type: 'ch', self: 'Em' },
              { id: 74, dur: 4, type: 'ch', self: 'C' },
              { id: 75, dur: 4, type: 'ch', self: 'Em' },
              { id: 76, dur: 4, type: 'ch', self: 'G' },
              { id: 77, dur: 16.8, type: 'ch', self: 'Em' },
              { id: 78, dur: 4, type: 'ch', self: 'Em' },
              { id: 79, dur: 4, type: 'ch', self: 'G' },
              { id: 80, dur: 4, type: 'ch', self: 'D' },
              { id: 81, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 82, dur: 4, type: 'ch', self: 'Em' },
              { id: 83, dur: 4, type: 'ch', self: 'G' },
              { id: 84, dur: 4, type: 'ch', self: 'D' },
              { id: 85, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 86, dur: 4, type: 'ch', self: 'Em' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 4, type: 'ch', self: 'D' },
              { id: 89, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 90, dur: 4, type: 'ch', self: 'Em' },
              { id: 91, dur: 4, type: 'ch', self: 'G' },
              { id: 92, dur: 4, type: 'ch', self: 'D' },
              { id: 93, dur: 4, type: 'ch', self: 'A7sus4' },
              { id: 94, dur: 4, type: 'ch', self: 'C' },
              { id: 95, dur: 4, type: 'ch', self: 'D' },
              { id: 96, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 97, dur: 4.1, type: 'ch', self: 'C' },
              { id: 98, dur: 4.1, type: 'ch', self: 'D' },
              { id: 99, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 100, dur: 4.1, type: 'ch', self: 'C' },
              { id: 101, dur: 4.1, type: 'ch', self: 'D' },
              { id: 102, dur: 2.1, type: 'ch', self: 'G' },
              { id: 103, dur: 2.1, type: 'ch', self: 'D' },
              { id: 104, dur: 2, type: 'ch', self: 'Em' },
              { id: 105, dur: 2, type: 'ch', self: 'D' },
              { id: 106, dur: 16, type: 'ch', self: 'A7sus4' },
              { id: 107, dur: 4, type: 'ch', self: 'C' },
              { id: 108, dur: 4, type: 'ch', self: 'Em' },
              { id: 109, dur: 4, type: 'ch', self: 'G' },
              { id: 110, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 111, dur: 4, type: 'ch', self: 'C' },
              { id: 112, dur: 4, type: 'ch', self: 'Em' },
              { id: 113, dur: 4, type: 'ch', self: 'G' },
              { id: 114, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 115, dur: 4, type: 'ch', self: 'C' },
              { id: 116, dur: 4, type: 'ch', self: 'Em' },
              { id: 117, dur: 4.1, type: 'ch', self: 'G' },
              { id: 118, dur: 4, type: 'ch', self: 'Em' },
              { id: 119, dur: 4, type: 'ch', self: 'C' },
              { id: 120, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 121, dur: 4, type: 'ch', self: 'G' },
              { id: 122, dur: 4, type: 'ch', self: 'Em' },
              { id: 123, dur: 4, type: 'ch', self: 'C' },
              { id: 124, dur: 4, type: 'ch', self: 'Em' },
              { id: 125, dur: 4, type: 'ch', self: 'G' },
              { id: 126, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 127, dur: 4, type: 'ch', self: 'C' },
              { id: 128, dur: 4, type: 'ch', self: 'Em' },
              { id: 129, dur: 4, type: 'ch', self: 'G' },
              { id: 130, dur: 4, type: 'ch', self: 'Em' },
              { id: 131, dur: 4.1, type: 'ch', self: 'C' },
              { id: 132, dur: 4, type: 'ch', self: 'Em' },
              { id: 133, dur: 4, type: 'ch', self: 'G' },
              { id: 134, dur: 4, type: 'ch', self: 'Em' },
              { id: 135, dur: 4, type: 'ch', self: 'C' },
              { id: 136, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 137, dur: 4, type: 'ch', self: 'G' },
              { id: 138, dur: 4, type: 'ch', self: 'Em' },
              { id: 139, dur: 4, type: 'ch', self: 'C' },
              { id: 140, dur: 4, type: 'ch', self: 'Em' },
              { id: 141, dur: 4.1, type: 'ch', self: 'G' },
              { id: 142, dur: 4, type: 'ch', self: 'Em' },
              { id: 143, dur: 4, type: 'ch', self: 'C' },
              { id: 144, dur: 4, type: 'ch', self: 'Em' },
              { id: 145, dur: 4, type: 'ch', self: 'G' },
              { id: 146, dur: 4, type: 'ch', self: 'Em' },
              { id: 147, dur: 4, type: 'ch', self: 'C' },
              { id: 148, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 149, dur: 4, type: 'ch', self: 'G' },
              { id: 150, dur: 4, type: 'ch', self: 'Em' },
              { id: 151, dur: 4, type: 'ch', self: 'C' },
              { id: 152, dur: 4, type: 'ch', self: 'Em' },
              { id: 153, dur: 4, type: 'ch', self: 'G' },
              { id: 154, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 155, dur: 4, type: 'ch', self: 'C' },
              { id: 156, dur: 4, type: 'ch', self: 'Em' },
              { id: 157, dur: 4, type: 'ch', self: 'G' },
              { id: 158, dur: 4, type: 'ch', self: 'Em' },
              { id: 159, dur: 4, type: 'ch', self: 'C' },
              { id: 160, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 161, dur: 4, type: 'ch', self: 'G' },
              { id: 162, dur: 4, type: 'ch', self: 'Em' },
              { id: 163, dur: 4, type: 'ch', self: 'C' },
              { id: 164, dur: 4.1, type: 'ch', self: 'Em' },
              { id: 165, dur: 4, type: 'ch', self: 'G' },
              { id: 166, dur: 4, type: 'ch', self: 'Em' },
              { id: 167, dur: 4, type: 'ch', self: 'C' },
              { id: 168, dur: 4, type: 'ch', self: 'Em' },
              { id: 169, dur: 4.1, type: 'ch', self: 'G' },
              { id: 170, dur: 4, type: 'ch', self: 'Em' },
            ],
            song: {
              id: '65c0796fe28b16b699afad66',
              name: 'Wonderwall',
              key: 'F# minor',
              bpm: [175],
              genre: 'Rock',
              artists: [{ name: 'Oasis', id: '65c06e66e28b16b699afad65' }],
            },
          },
          {
            id: '65c1bfcde28b16b699afad6a',
            source: 'zABLecsR5UE',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 1,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'C',
                bpm: 110,
                syncPnt: '1970-01-01T00:00:00.620Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'G' },
              { id: 3, dur: 4, type: 'ch', self: 'Am' },
              { id: 4, dur: 4, type: 'ch', self: 'F' },
              { id: 5, dur: 4, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 4, type: 'ch', self: 'F' },
              { id: 9, dur: 4, type: 'ch', self: 'C' },
              { id: 10, dur: 4, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'Am' },
              { id: 12, dur: 4, type: 'ch', self: 'F' },
              { id: 13, dur: 4, type: 'ch', self: 'C' },
              { id: 14, dur: 4, type: 'ch', self: 'G' },
              { id: 15, dur: 4, type: 'ch', self: 'Am' },
              { id: 16, dur: 4, type: 'ch', self: 'F' },
              { id: 17, dur: 4, type: 'ch', self: 'C' },
              { id: 18, dur: 4, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'Am' },
              { id: 20, dur: 4, type: 'ch', self: 'F' },
              { id: 21, dur: 4, type: 'ch', self: 'C' },
              { id: 22, dur: 4, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'Am' },
              { id: 24, dur: 4, type: 'ch', self: 'F' },
              { id: 25, dur: 4, type: 'ch', self: 'C' },
              { id: 26, dur: 4, type: 'ch', self: 'G' },
              { id: 27, dur: 4, type: 'ch', self: 'Am' },
              { id: 28, dur: 4, type: 'ch', self: 'F' },
              { id: 29, dur: 4, type: 'ch', self: 'C' },
              { id: 30, dur: 4, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'Am' },
              { id: 32, dur: 4, type: 'ch', self: 'F' },
              { id: 33, dur: 4, type: 'ch', self: 'C' },
              { id: 34, dur: 4, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'Am' },
              { id: 36, dur: 4, type: 'ch', self: 'F' },
              { id: 37, dur: 4, type: 'ch', self: 'C' },
              { id: 38, dur: 4, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'Am' },
              { id: 40, dur: 4, type: 'ch', self: 'F' },
              { id: 41, dur: 4, type: 'ch', self: 'C' },
              { id: 42, dur: 4, type: 'ch', self: 'G' },
              { id: 43, dur: 4, type: 'ch', self: 'Am' },
              { id: 44, dur: 4, type: 'ch', self: 'F' },
              { id: 45, dur: 4, type: 'ch', self: 'C' },
              { id: 46, dur: 4, type: 'ch', self: 'G' },
              { id: 47, dur: 4, type: 'ch', self: 'Am' },
              { id: 48, dur: 4, type: 'ch', self: 'F' },
              { id: 49, dur: 4, type: 'ch', self: 'C' },
              { id: 50, dur: 4, type: 'ch', self: 'G' },
              { id: 51, dur: 4, type: 'ch', self: 'Am' },
              { id: 52, dur: 4, type: 'ch', self: 'F' },
              { id: 53, dur: 4, type: 'ch', self: 'Dm' },
              { id: 54, dur: 4, type: 'ch', self: 'Am' },
              { id: 55, dur: 8, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'Dm7' },
              { id: 57, dur: 4, type: 'ch', self: 'Am7' },
              { id: 58, dur: 4, type: 'ch', self: 'G' },
              { id: 59, dur: 4, type: 'ch', self: 'SILENCE' },
              { id: 60, dur: 4, type: 'ch', self: 'C' },
              { id: 61, dur: 4, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'Am' },
              { id: 63, dur: 4, type: 'ch', self: 'F' },
              { id: 64, dur: 4, type: 'ch', self: 'C' },
              { id: 65, dur: 4, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'Am' },
              { id: 67, dur: 4, type: 'ch', self: 'F' },
              { id: 68, dur: 4, type: 'ch', self: 'C' },
              { id: 69, dur: 4, type: 'ch', self: 'G' },
              { id: 70, dur: 4, type: 'ch', self: 'Am' },
              { id: 71, dur: 4, type: 'ch', self: 'F' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 4, type: 'ch', self: 'G' },
              { id: 74, dur: 4, type: 'ch', self: 'Am' },
              { id: 75, dur: 4, type: 'ch', self: 'F' },
              { id: 76, dur: 4, type: 'ch', self: 'C' },
              { id: 77, dur: 4.2, type: 'ch', self: 'G' },
              { id: 78, dur: 4.4, type: 'ch', self: 'Am' },
              { id: 79, dur: 4.4, type: 'ch', self: 'F' },
              { id: 80, dur: 4, type: 'ch', self: 'C' },
            ],
            song: {
              id: '65c1ba4de28b16b699afad69',
              name: 'Someone You Loved',
              key: 'C# major',
              bpm: [110],
              genre: 'Pop',
              artists: [
                { name: 'Lewis Capaldi', id: '65c1b9e7e28b16b699afad68' },
              ],
            },
          },
          {
            id: '65c1c85ee28b16b699afad6c',
            source: 'LjhCEhWiKXk',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 3,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'D',
                bpm: 109,
                syncPnt: '1970-01-01T00:00:15.550Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 3, dur: 8, type: 'ch', self: 'G' },
              { id: 4, dur: 8, type: 'ch', self: 'D' },
              { id: 5, dur: 8, type: 'ch', self: 'D' },
              { id: 6, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 7, dur: 8, type: 'ch', self: 'G' },
              { id: 8, dur: 8, type: 'ch', self: 'D' },
              { id: 9, dur: 8, type: 'ch', self: 'D' },
              { id: 10, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 11, dur: 8, type: 'ch', self: 'G' },
              { id: 12, dur: 8, type: 'ch', self: 'D' },
              { id: 13, dur: 8, type: 'ch', self: 'D' },
              { id: 14, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 15, dur: 8, type: 'ch', self: 'G' },
              { id: 16, dur: 8, type: 'ch', self: 'D' },
              { id: 17, dur: 8, type: 'ch', self: 'D' },
              { id: 18, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 19, dur: 8, type: 'ch', self: 'G' },
              { id: 20, dur: 8, type: 'ch', self: 'D' },
              { id: 21, dur: 8, type: 'ch', self: 'D' },
              { id: 22, dur: 8.1, type: 'ch', self: 'Bm7' },
              { id: 23, dur: 8, type: 'ch', self: 'G' },
              { id: 24, dur: 8, type: 'ch', self: 'D' },
              { id: 25, dur: 8, type: 'ch', self: 'D' },
              { id: 26, dur: 8.1, type: 'ch', self: 'Bm7' },
              { id: 27, dur: 8, type: 'ch', self: 'G' },
              { id: 28, dur: 8, type: 'ch', self: 'D' },
              { id: 29, dur: 8, type: 'ch', self: 'D' },
              { id: 30, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 31, dur: 8, type: 'ch', self: 'G' },
              { id: 32, dur: 8, type: 'ch', self: 'D' },
              { id: 33, dur: 8, type: 'ch', self: 'D' },
              { id: 34, dur: 8.1, type: 'ch', self: 'Bm7' },
              { id: 35, dur: 8, type: 'ch', self: 'G' },
              { id: 36, dur: 8, type: 'ch', self: 'D' },
              { id: 37, dur: 8, type: 'ch', self: 'D' },
              { id: 38, dur: 8.1, type: 'ch', self: 'Bm7' },
              { id: 39, dur: 8, type: 'ch', self: 'G' },
              { id: 40, dur: 8, type: 'ch', self: 'D' },
              { id: 41, dur: 8, type: 'ch', self: 'D' },
              { id: 42, dur: 8.1, type: 'ch', self: 'Bm7' },
              { id: 43, dur: 8, type: 'ch', self: 'G' },
              { id: 44, dur: 8, type: 'ch', self: 'D' },
              { id: 45, dur: 8, type: 'ch', self: 'D' },
              { id: 46, dur: 8, type: 'ch', self: 'Bm7' },
              { id: 47, dur: 8, type: 'ch', self: 'G' },
              { id: 48, dur: 8, type: 'ch', self: 'D' },
            ],
            song: {
              id: '65c1c11ee28b16b699afad6b',
              name: 'Just The Way You Are',
              key: 'F major',
              bpm: [109],
              genre: 'Pop',
              artists: [{ name: 'Bruno Mars', id: '65bf2f776de300e257cee2aa' }],
            },
          },
          {
            id: '65c1d4dce28b16b699afad6f',
            source: '95HqlWRFrAk',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4.5,
                type: 'ch',
                self: 'Em',
                bpm: 82,
                syncPnt: '1970-01-01T00:00:00.650Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4.5, type: 'ch', self: 'C' },
              { id: 3, dur: 4.5, type: 'ch', self: 'G' },
              { id: 4, dur: 4.5, type: 'ch', self: 'D' },
              { id: 5, dur: 4, type: 'ch', self: 'Em' },
              { id: 6, dur: 4, type: 'ch', self: 'C' },
              { id: 7, dur: 4, type: 'ch', self: 'G' },
              { id: 8, dur: 4, type: 'ch', self: 'D' },
              { id: 9, dur: 4, type: 'ch', self: 'Em' },
              { id: 10, dur: 4, type: 'ch', self: 'C' },
              { id: 11, dur: 4, type: 'ch', self: 'G' },
              { id: 12, dur: 4, type: 'ch', self: 'D' },
              { id: 13, dur: 4, type: 'ch', self: 'Em' },
              { id: 14, dur: 4, type: 'ch', self: 'C' },
              { id: 15, dur: 4, type: 'ch', self: 'G' },
              { id: 16, dur: 4, type: 'ch', self: 'D' },
              { id: 17, dur: 4, type: 'ch', self: 'Em' },
              { id: 18, dur: 4, type: 'ch', self: 'C' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'D' },
              { id: 21, dur: 4, type: 'ch', self: 'Em' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 23, dur: 4, type: 'ch', self: 'G' },
              { id: 24, dur: 4, type: 'ch', self: 'D' },
              { id: 25, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 26, dur: 4, type: 'ch', self: 'C' },
              { id: 27, dur: 4, type: 'ch', self: 'G' },
              { id: 28, dur: 4, type: 'ch', self: 'D' },
              { id: 29, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 30, dur: 4, type: 'ch', self: 'C' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 4, type: 'ch', self: 'D' },
              { id: 33, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 34, dur: 4, type: 'ch', self: 'C' },
              { id: 35, dur: 4, type: 'ch', self: 'G' },
              { id: 36, dur: 3.9, type: 'ch', self: 'D' },
              { id: 37, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 38, dur: 3.9, type: 'ch', self: 'C' },
              { id: 39, dur: 4, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'D' },
              { id: 41, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 42, dur: 4, type: 'ch', self: 'C' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 3.9, type: 'ch', self: 'D' },
              { id: 46, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 47, dur: 3.9, type: 'ch', self: 'C' },
              { id: 48, dur: 4, type: 'ch', self: 'G' },
              { id: 49, dur: 4, type: 'ch', self: 'D' },
              { id: 50, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 51, dur: 4, type: 'ch', self: 'C' },
              { id: 52, dur: 4, type: 'ch', self: 'G' },
              { id: 53, dur: 3.9, type: 'ch', self: 'D' },
              { id: 54, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 55, dur: 3.9, type: 'ch', self: 'C' },
              { id: 56, dur: 4, type: 'ch', self: 'G' },
              { id: 57, dur: 4, type: 'ch', self: 'D' },
              { id: 58, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 59, dur: 4, type: 'ch', self: 'C' },
              { id: 60, dur: 3.9, type: 'ch', self: 'G' },
              { id: 61, dur: 3.9, type: 'ch', self: 'D' },
              { id: 62, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 63, dur: 3.9, type: 'ch', self: 'C' },
              { id: 64, dur: 3.9, type: 'ch', self: 'G' },
              { id: 65, dur: 3.9, type: 'ch', self: 'D' },
              { id: 66, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 67, dur: 3.9, type: 'ch', self: 'C' },
              { id: 68, dur: 4, type: 'ch', self: 'G' },
              { id: 69, dur: 3.9, type: 'ch', self: 'D' },
              { id: 70, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 71, dur: 3.9, type: 'ch', self: 'C' },
              { id: 72, dur: 3.9, type: 'ch', self: 'G' },
              { id: 73, dur: 3.9, type: 'ch', self: 'D' },
              { id: 74, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 75, dur: 3.9, type: 'ch', self: 'C' },
              { id: 76, dur: 3.9, type: 'ch', self: 'G' },
              { id: 77, dur: 3.9, type: 'ch', self: 'D' },
              { id: 78, dur: 3.9, type: 'ch', self: 'Em' },
              { id: 79, dur: 3.8, type: 'ch', self: 'C' },
              { id: 80, dur: 3.8, type: 'ch', self: 'G' },
              { id: 81, dur: 3.8, type: 'ch', self: 'D' },
              { id: 82, dur: 3.8, type: 'ch', self: 'Em' },
              { id: 83, dur: 3.8, type: 'ch', self: 'C' },
              { id: 84, dur: 3.8, type: 'ch', self: 'Em' },
              { id: 85, dur: 3.6, type: 'ch', self: 'C' },
              { id: 86, dur: 3.8, type: 'ch', self: 'Em' },
              { id: 87, dur: 3.7, type: 'ch', self: 'C' },
              { id: 88, dur: 3.7, type: 'ch', self: 'Em' },
            ],
            song: {
              id: '65c1cc02e28b16b699afad6e',
              name: 'Zombie',
              key: 'G major',
              bpm: [82],
              genre: 'Grunge',
              artists: [
                { name: 'The Cranberries', id: '65c1cbb2e28b16b699afad6d' },
              ],
            },
          },
          {
            id: '65c328fce28b16b699afad71',
            source: 'VuNIsY6JdUw',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 4,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'D',
                bpm: 130,
                syncPnt: '1970-01-01T00:00:00.900Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 8, type: 'ch', self: 'D' },
              { id: 3, dur: 8, type: 'ch', self: 'D' },
              { id: 4, dur: 8, type: 'ch', self: 'A' },
              { id: 5, dur: 8, type: 'ch', self: 'Em' },
              { id: 6, dur: 8, type: 'ch', self: 'G' },
              { id: 7, dur: 8, type: 'ch', self: 'D' },
              { id: 8, dur: 8, type: 'ch', self: 'A' },
              { id: 9, dur: 8, type: 'ch', self: 'Em' },
              { id: 10, dur: 8, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'Em' },
              { id: 12, dur: 4, type: 'ch', self: 'G' },
              { id: 13, dur: 4, type: 'ch', self: 'D' },
              { id: 14, dur: 4, type: 'ch', self: 'A' },
              { id: 15, dur: 4, type: 'ch', self: 'Em' },
              { id: 16, dur: 4, type: 'ch', self: 'G' },
              { id: 17, dur: 8, type: 'ch', self: 'A' },
              { id: 18, dur: 8, type: 'ch', self: 'D' },
              { id: 19, dur: 8, type: 'ch', self: 'A' },
              { id: 20, dur: 8, type: 'ch', self: 'Em' },
              { id: 21, dur: 8, type: 'ch', self: 'G' },
              { id: 22, dur: 8, type: 'ch', self: 'D' },
              { id: 23, dur: 8, type: 'ch', self: 'D' },
              { id: 24, dur: 8, type: 'ch', self: 'A' },
              { id: 25, dur: 8, type: 'ch', self: 'Em' },
              { id: 26, dur: 8, type: 'ch', self: 'G' },
              { id: 27, dur: 8, type: 'ch', self: 'D' },
              { id: 28, dur: 8, type: 'ch', self: 'A' },
              { id: 29, dur: 8, type: 'ch', self: 'Em' },
              { id: 30, dur: 8, type: 'ch', self: 'G' },
              { id: 31, dur: 4, type: 'ch', self: 'Em' },
              { id: 32, dur: 4, type: 'ch', self: 'G' },
              { id: 33, dur: 4, type: 'ch', self: 'D' },
              { id: 34, dur: 4, type: 'ch', self: 'A' },
              { id: 35, dur: 4, type: 'ch', self: 'Em' },
              { id: 36, dur: 4, type: 'ch', self: 'G' },
              { id: 37, dur: 8, type: 'ch', self: 'A' },
              { id: 38, dur: 8, type: 'ch', self: 'D' },
              { id: 39, dur: 8, type: 'ch', self: 'A' },
              { id: 40, dur: 8, type: 'ch', self: 'Em' },
              { id: 41, dur: 8, type: 'ch', self: 'G' },
              { id: 42, dur: 8, type: 'ch', self: 'D' },
              { id: 43, dur: 8, type: 'ch', self: 'A' },
              { id: 44, dur: 8, type: 'ch', self: 'Em' },
              { id: 45, dur: 8, type: 'ch', self: 'G' },
              { id: 47, dur: 8, type: 'ch', self: 'D' },
              { id: 48, dur: 8, type: 'ch', self: 'A' },
              { id: 49, dur: 8, type: 'ch', self: 'Em' },
              { id: 50, dur: 8, type: 'ch', self: 'G' },
              { id: 51, dur: 4, type: 'ch', self: 'Em' },
              { id: 52, dur: 4, type: 'ch', self: 'G' },
              { id: 53, dur: 4, type: 'ch', self: 'D' },
              { id: 54, dur: 4, type: 'ch', self: 'A' },
              { id: 55, dur: 4, type: 'ch', self: 'Em' },
              { id: 56, dur: 4, type: 'ch', self: 'G' },
              { id: 57, dur: 4, type: 'ch', self: 'D' },
              { id: 58, dur: 8, type: 'ch', self: 'A' },
              { id: 59, dur: 8, type: 'ch', self: 'D' },
              { id: 60, dur: 8, type: 'ch', self: 'A' },
              { id: 61, dur: 8, type: 'ch', self: 'Em' },
              { id: 62, dur: 8, type: 'ch', self: 'G' },
              { id: 63, dur: 8, type: 'ch', self: 'D' },
              { id: 64, dur: 8, type: 'ch', self: 'A' },
              { id: 65, dur: 8, type: 'ch', self: 'Em' },
              { id: 66, dur: 8, type: 'ch', self: 'G' },
              { id: 67, dur: 8, type: 'ch', self: 'D' },
              { id: 68, dur: 8, type: 'ch', self: 'A' },
              { id: 69, dur: 8, type: 'ch', self: 'Em' },
              { id: 70, dur: 8, type: 'ch', self: 'G' },
              { id: 71, dur: 8, type: 'ch', self: 'D' },
            ],
            song: {
              id: '65c3236be28b16b699afad70',
              name: 'You Belong With Me',
              key: 'F# major',
              bpm: [130],
              genre: 'Country',
              artists: [
                { name: 'Taylor Swift', id: '650690f53680a73069aa60c3' },
              ],
            },
          },
          {
            id: '65c32ed9e28b16b699afad74',
            source: '0yW7w8F2TVA',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 3,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'G',
                bpm: 95,
                syncPnt: '1970-01-01T00:00:00.950Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'D' },
              { id: 3, dur: 4, type: 'ch', self: 'Em' },
              { id: 4, dur: 4, type: 'ch', self: 'C' },
              { id: 5, dur: 4, type: 'ch', self: 'G' },
              { id: 6, dur: 4, type: 'ch', self: 'D' },
              { id: 7, dur: 4, type: 'ch', self: 'Em' },
              { id: 8, dur: 4, type: 'ch', self: 'C' },
              { id: 9, dur: 4, type: 'ch', self: 'G' },
              { id: 10, dur: 4, type: 'ch', self: 'D' },
              { id: 11, dur: 4, type: 'ch', self: 'Em' },
              { id: 12, dur: 4, type: 'ch', self: 'C' },
              { id: 13, dur: 4, type: 'ch', self: 'G' },
              { id: 14, dur: 4, type: 'ch', self: 'D' },
              { id: 15, dur: 4, type: 'ch', self: 'Em' },
              { id: 16, dur: 4, type: 'ch', self: 'C' },
              { id: 17, dur: 4, type: 'ch', self: 'G' },
              { id: 18, dur: 4, type: 'ch', self: 'D' },
              { id: 19, dur: 4, type: 'ch', self: 'Em' },
              { id: 20, dur: 4, type: 'ch', self: 'C' },
              { id: 21, dur: 4, type: 'ch', self: 'G' },
              { id: 22, dur: 4, type: 'ch', self: 'D' },
              { id: 23, dur: 4, type: 'ch', self: 'Em' },
              { id: 24, dur: 4, type: 'ch', self: 'C' },
              { id: 25, dur: 4, type: 'ch', self: 'G' },
              { id: 26, dur: 4, type: 'ch', self: 'D' },
              { id: 27, dur: 4, type: 'ch', self: 'Em' },
              { id: 28, dur: 4, type: 'ch', self: 'C' },
              { id: 29, dur: 4, type: 'ch', self: 'G' },
              { id: 30, dur: 4, type: 'ch', self: 'D' },
              { id: 31, dur: 4, type: 'ch', self: 'Em' },
              { id: 32, dur: 4, type: 'ch', self: 'C' },
              { id: 33, dur: 4, type: 'ch', self: 'G' },
              { id: 34, dur: 4, type: 'ch', self: 'D' },
              { id: 35, dur: 4, type: 'ch', self: 'Em' },
              { id: 36, dur: 4, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'G' },
              { id: 38, dur: 4, type: 'ch', self: 'D' },
              { id: 39, dur: 4, type: 'ch', self: 'Em' },
              { id: 40, dur: 4, type: 'ch', self: 'C' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 4, type: 'ch', self: 'D' },
              { id: 43, dur: 4, type: 'ch', self: 'Em' },
              { id: 44, dur: 4, type: 'ch', self: 'C' },
              { id: 45, dur: 4, type: 'ch', self: 'G' },
              { id: 46, dur: 4, type: 'ch', self: 'D' },
              { id: 47, dur: 4, type: 'ch', self: 'Em' },
              { id: 48, dur: 4, type: 'ch', self: 'C' },
              { id: 49, dur: 4, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'D' },
              { id: 51, dur: 4, type: 'ch', self: 'Em' },
              { id: 52, dur: 4, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'G' },
              { id: 54, dur: 4, type: 'ch', self: 'D' },
              { id: 55, dur: 4, type: 'ch', self: 'Em' },
              { id: 56, dur: 4, type: 'ch', self: 'C' },
              { id: 57, dur: 4, type: 'ch', self: 'G' },
              { id: 58, dur: 4, type: 'ch', self: 'D' },
              { id: 59, dur: 4, type: 'ch', self: 'Em' },
              { id: 60, dur: 4, type: 'ch', self: 'C' },
              { id: 61, dur: 4, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'D' },
              { id: 63, dur: 4, type: 'ch', self: 'Em' },
              { id: 64, dur: 4, type: 'ch', self: 'C' },
              { id: 65, dur: 4, type: 'ch', self: 'G' },
              { id: 66, dur: 4, type: 'ch', self: 'D' },
              { id: 67, dur: 4, type: 'ch', self: 'Em' },
              { id: 68, dur: 4, type: 'ch', self: 'C' },
              { id: 69, dur: 4, type: 'ch', self: 'G' },
              { id: 70, dur: 4, type: 'ch', self: 'D' },
              { id: 71, dur: 4, type: 'ch', self: 'Em' },
              { id: 72, dur: 4, type: 'ch', self: 'C' },
              { id: 73, dur: 4, type: 'ch', self: 'G' },
              { id: 74, dur: 4, type: 'ch', self: 'D' },
              { id: 75, dur: 4, type: 'ch', self: 'Em' },
              { id: 76, dur: 4, type: 'ch', self: 'C' },
              { id: 77, dur: 4, type: 'ch', self: 'G' },
              { id: 78, dur: 4, type: 'ch', self: 'D' },
              { id: 79, dur: 4, type: 'ch', self: 'Em' },
              { id: 80, dur: 4, type: 'ch', self: 'C' },
              { id: 81, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65c329fee28b16b699afad73',
              name: 'Say You Wont Let Go',
              key: 'A# major',
              bpm: [95],
              genre: 'Pop',
              artists: [
                { name: 'James Arthur', id: '65c329b9e28b16b699afad72' },
              ],
            },
          },
          {
            id: '65c339fee28b16b699afad76',
            source: 'rYEDA3JcQqw',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 3,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 8,
                type: 'ch',
                self: 'Am',
                bpm: 105,
                syncPnt: '1970-01-01T00:00:00.300Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'Am' },
              { id: 3, dur: 4, type: 'ch', self: 'Em' },
              { id: 4, dur: 4, type: 'ch', self: 'G' },
              { id: 5, dur: 2, type: 'ch', self: 'Em' },
              { id: 6, dur: 2, type: 'ch', self: 'G' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 4, type: 'ch', self: 'Em' },
              { id: 9, dur: 4, type: 'ch', self: 'G' },
              { id: 10, dur: 2, type: 'ch', self: 'Em' },
              { id: 11, dur: 2, type: 'ch', self: 'G' },
              { id: 12, dur: 4, type: 'ch', self: 'Am' },
              { id: 13, dur: 4, type: 'ch', self: 'Em' },
              { id: 14, dur: 4, type: 'ch', self: 'G' },
              { id: 15, dur: 2, type: 'ch', self: 'Em' },
              { id: 16, dur: 2, type: 'ch', self: 'G' },
              { id: 17, dur: 4, type: 'ch', self: 'Am' },
              { id: 18, dur: 4, type: 'ch', self: 'Em' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 2, type: 'ch', self: 'Em' },
              { id: 21, dur: 2, type: 'ch', self: 'G' },
              { id: 22, dur: 4, type: 'ch', self: 'F' },
              { id: 23, dur: 4, type: 'ch', self: 'G' },
              { id: 24, dur: 4, type: 'ch', self: 'Em' },
              { id: 25, dur: 2, type: 'ch', self: 'F' },
              { id: 26, dur: 2, type: 'ch', self: 'G' },
              { id: 27, dur: 4, type: 'ch', self: 'F' },
              { id: 28, dur: 4, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'Em' },
              { id: 30, dur: 4, type: 'ch', self: 'E7' },
              { id: 31, dur: 4, type: 'ch', self: 'Am' },
              { id: 32, dur: 4, type: 'ch', self: 'G' },
              { id: 33, dur: 6, type: 'ch', self: 'F' },
              { id: 34, dur: 2, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'Am' },
              { id: 36, dur: 4, type: 'ch', self: 'G' },
              { id: 37, dur: 6, type: 'ch', self: 'F' },
              { id: 38, dur: 2, type: 'ch', self: 'G' },
              { id: 39, dur: 4, type: 'ch', self: 'Am' },
              { id: 40, dur: 4, type: 'ch', self: 'Em' },
              { id: 41, dur: 4, type: 'ch', self: 'G' },
              { id: 42, dur: 2, type: 'ch', self: 'Em' },
              { id: 43, dur: 2, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'Am' },
              { id: 45, dur: 4, type: 'ch', self: 'Em' },
              { id: 46, dur: 4, type: 'ch', self: 'G' },
              { id: 47, dur: 2, type: 'ch', self: 'Em' },
              { id: 48, dur: 2, type: 'ch', self: 'G' },
              { id: 49, dur: 4, type: 'ch', self: 'F' },
              { id: 50, dur: 4, type: 'ch', self: 'G' },
              { id: 51, dur: 4, type: 'ch', self: 'Em' },
              { id: 52, dur: 4, type: 'ch', self: 'F' },
              { id: 53, dur: 4, type: 'ch', self: 'F' },
              { id: 54, dur: 4, type: 'ch', self: 'G' },
              { id: 55, dur: 4, type: 'ch', self: 'Em' },
              { id: 56, dur: 4, type: 'ch', self: 'E7' },
              { id: 57, dur: 4, type: 'ch', self: 'Am' },
              { id: 58, dur: 4, type: 'ch', self: 'G' },
              { id: 59, dur: 6, type: 'ch', self: 'F' },
              { id: 60, dur: 2, type: 'ch', self: 'G' },
              { id: 61, dur: 4, type: 'ch', self: 'Am' },
              { id: 62, dur: 4, type: 'ch', self: 'G' },
              { id: 63, dur: 6, type: 'ch', self: 'F' },
              { id: 64, dur: 2, type: 'ch', self: 'G' },
              { id: 65, dur: 4, type: 'ch', self: 'F' },
              { id: 66, dur: 4, type: 'ch', self: 'G' },
              { id: 67, dur: 4, type: 'ch', self: 'Am' },
              { id: 68, dur: 4, type: 'ch', self: 'G' },
              { id: 69, dur: 8, type: 'ch', self: 'F' },
              { id: 71, dur: 8, type: 'ch', self: 'G' },
              { id: 72, dur: 16, type: 'ch', self: 'SILENCE' },
              { id: 73, dur: 16, type: 'ch', self: 'Am' },
              { id: 74, dur: 4, type: 'ch', self: 'Am' },
              { id: 75, dur: 4, type: 'ch', self: 'G' },
              { id: 76, dur: 6, type: 'ch', self: 'F' },
              { id: 77, dur: 2, type: 'ch', self: 'G' },
              { id: 78, dur: 4, type: 'ch', self: 'Am' },
              { id: 79, dur: 4, type: 'ch', self: 'G' },
              { id: 80, dur: 6, type: 'ch', self: 'F' },
              { id: 81, dur: 2, type: 'ch', self: 'G' },
              { id: 82, dur: 4, type: 'ch', self: 'Am' },
              { id: 83, dur: 4, type: 'ch', self: 'G' },
              { id: 84, dur: 6, type: 'ch', self: 'F' },
              { id: 85, dur: 2, type: 'ch', self: 'G' },
              { id: 86, dur: 4, type: 'ch', self: 'Am' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 6, type: 'ch', self: 'F' },
              { id: 89, dur: 2, type: 'ch', self: 'G' },
              { id: 90, dur: 4, type: 'ch', self: 'Am' },
              { id: 91, dur: 4, type: 'ch', self: 'G' },
              { id: 92, dur: 6, type: 'ch', self: 'F' },
              { id: 93, dur: 2, type: 'ch', self: 'G' },
              { id: 94, dur: 4, type: 'ch', self: 'Am' },
              { id: 95, dur: 4, type: 'ch', self: 'G' },
              { id: 96, dur: 8, type: 'ch', self: 'F' },
              { id: 98, dur: 4, type: 'ch', self: 'Am' },
            ],
            song: {
              id: '65c33200e28b16b699afad75',
              name: 'Rolling In The Deep',
              key: 'G# major',
              bpm: [105],
              genre: 'Pop',
              artists: [{ name: 'Adele', id: '65bf3b4b6de300e257cee2ad' }],
            },
          },
          {
            id: '65d1a3a74b24a875ead882ae',
            source: 'UAWcs5H-qgQ',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 2,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 7,
                type: 'ch',
                self: 'G',
                bpm: 85,
                syncPnt: '1970-01-01T00:00:20.200Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 3, dur: 1, type: 'ch', self: 'D' },
              { id: 4, dur: 3, type: 'ch', self: 'Em' },
              { id: 5, dur: 1, type: 'ch', self: 'C' },
              { id: 6, dur: 4, type: 'ch', self: 'G' },
              { id: 7, dur: 7, type: 'ch', self: 'G' },
              { id: 8, dur: 1, type: 'ch', self: 'D' },
              { id: 9, dur: 3, type: 'ch', self: 'Em' },
              { id: 10, dur: 1, type: 'ch', self: 'C' },
              { id: 11, dur: 4, type: 'ch', self: 'G' },
              { id: 12, dur: 7, type: 'ch', self: 'G' },
              { id: 13, dur: 1, type: 'ch', self: 'D' },
              { id: 14, dur: 3, type: 'ch', self: 'Em' },
              { id: 15, dur: 1, type: 'ch', self: 'C' },
              { id: 16, dur: 4, type: 'ch', self: 'G' },
              { id: 17, dur: 4, type: 'ch', self: 'Am' },
              { id: 18, dur: 4, type: 'ch', self: 'C' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'D' },
              { id: 21, dur: 4, type: 'ch', self: 'Am' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 23, dur: 4, type: 'ch', self: 'G' },
              { id: 24, dur: 4, type: 'ch', self: 'D' },
              { id: 25, dur: 2, type: 'ch', self: 'Em' },
              { id: 26, dur: 2, type: 'ch', self: 'C' },
              { id: 27, dur: 4, type: 'ch', self: 'G' },
              { id: 28, dur: 2, type: 'ch', self: 'Em' },
              { id: 29, dur: 2, type: 'ch', self: 'C' },
              { id: 30, dur: 4, type: 'ch', self: 'G' },
              { id: 31, dur: 2, type: 'ch', self: 'Em' },
              { id: 32, dur: 2, type: 'ch', self: 'C' },
              { id: 33, dur: 4, type: 'ch', self: 'G' },
              { id: 34, dur: 2, type: 'ch', self: 'Em' },
              { id: 35, dur: 2, type: 'ch', self: 'C' },
              { id: 36, dur: 2, type: 'ch', self: 'G' },
              { id: 37, dur: 2, type: 'ch', self: 'D' },
              { id: 38, dur: 2, type: 'ch', self: 'Em' },
              { id: 39, dur: 2, type: 'ch', self: 'C' },
              { id: 40, dur: 4, type: 'ch', self: 'G' },
              { id: 41, dur: 2, type: 'ch', self: 'Em' },
              { id: 42, dur: 2, type: 'ch', self: 'C' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 7, type: 'ch', self: 'G' },
              { id: 45, dur: 1, type: 'ch', self: 'D' },
              { id: 46, dur: 3, type: 'ch', self: 'Em' },
              { id: 47, dur: 1, type: 'ch', self: 'C' },
              { id: 48, dur: 4, type: 'ch', self: 'G' },
              { id: 49, dur: 7, type: 'ch', self: 'G' },
              { id: 50, dur: 1, type: 'ch', self: 'D' },
              { id: 51, dur: 3, type: 'ch', self: 'Em' },
              { id: 52, dur: 1, type: 'ch', self: 'C' },
              { id: 53, dur: 4, type: 'ch', self: 'G' },
              { id: 54, dur: 4, type: 'ch', self: 'Am' },
              { id: 55, dur: 4, type: 'ch', self: 'C' },
              { id: 56, dur: 4, type: 'ch', self: 'G' },
              { id: 57, dur: 4, type: 'ch', self: 'D' },
              { id: 58, dur: 4, type: 'ch', self: 'Am' },
              { id: 59, dur: 4, type: 'ch', self: 'C' },
              { id: 60, dur: 4, type: 'ch', self: 'G' },
              { id: 61, dur: 4, type: 'ch', self: 'D' },
              { id: 62, dur: 2, type: 'ch', self: 'Em' },
              { id: 63, dur: 2, type: 'ch', self: 'C' },
              { id: 64, dur: 4, type: 'ch', self: 'G' },
              { id: 65, dur: 2, type: 'ch', self: 'Em' },
              { id: 66, dur: 2, type: 'ch', self: 'C' },
              { id: 67, dur: 4, type: 'ch', self: 'G' },
              { id: 68, dur: 2, type: 'ch', self: 'Em' },
              { id: 69, dur: 2, type: 'ch', self: 'C' },
              { id: 70, dur: 4, type: 'ch', self: 'G' },
              { id: 71, dur: 2, type: 'ch', self: 'Em' },
              { id: 72, dur: 2, type: 'ch', self: 'C' },
              { id: 73, dur: 2, type: 'ch', self: 'G' },
              { id: 74, dur: 2, type: 'ch', self: 'D' },
              { id: 76, dur: 4, type: 'ch', self: 'Am' },
              { id: 77, dur: 4, type: 'ch', self: 'C' },
              { id: 78, dur: 4, type: 'ch', self: 'Em' },
              { id: 79, dur: 4, type: 'ch', self: 'G' },
              { id: 80, dur: 4, type: 'ch', self: 'Am' },
              { id: 81, dur: 4, type: 'ch', self: 'C' },
              { id: 82, dur: 2, type: 'ch', self: 'Em' },
              { id: 83, dur: 2, type: 'ch', self: 'C' },
              { id: 84, dur: 4, type: 'ch', self: 'G' },
              { id: 85, dur: 2, type: 'ch', self: 'Em' },
              { id: 86, dur: 2, type: 'ch', self: 'C' },
              { id: 87, dur: 4, type: 'ch', self: 'G' },
              { id: 88, dur: 4, type: 'ch', self: 'Am' },
              { id: 89, dur: 4, type: 'ch', self: 'C' },
              { id: 90, dur: 4, type: 'ch', self: 'G' },
              { id: 91, dur: 4, type: 'ch', self: 'D' },
              { id: 92, dur: 4, type: 'ch', self: 'Am' },
              { id: 93, dur: 4, type: 'ch', self: 'C' },
              { id: 94, dur: 4, type: 'ch', self: 'G' },
              { id: 95, dur: 4, type: 'ch', self: 'D' },
              { id: 96, dur: 2, type: 'ch', self: 'Em' },
              { id: 97, dur: 2, type: 'ch', self: 'C' },
              { id: 98, dur: 4, type: 'ch', self: 'G' },
              { id: 99, dur: 2, type: 'ch', self: 'Em' },
              { id: 100, dur: 2, type: 'ch', self: 'C' },
              { id: 101, dur: 4, type: 'ch', self: 'G' },
              { id: 102, dur: 2, type: 'ch', self: 'Em' },
              { id: 103, dur: 2, type: 'ch', self: 'C' },
              { id: 104, dur: 4, type: 'ch', self: 'G' },
              { id: 105, dur: 2, type: 'ch', self: 'Em' },
              { id: 106, dur: 2, type: 'ch', self: 'C' },
              { id: 107, dur: 2, type: 'ch', self: 'G' },
              { id: 108, dur: 2, type: 'ch', self: 'D' },
              { id: 109, dur: 2, type: 'ch', self: 'Em' },
              { id: 110, dur: 2, type: 'ch', self: 'C' },
              { id: 111, dur: 4, type: 'ch', self: 'G' },
              { id: 112, dur: 2, type: 'ch', self: 'Em' },
              { id: 113, dur: 2, type: 'ch', self: 'C' },
              { id: 114, dur: 4, type: 'ch', self: 'G' },
              { id: 115, dur: 2, type: 'ch', self: 'Em' },
              { id: 116, dur: 2, type: 'ch', self: 'C' },
              { id: 117, dur: 4, type: 'ch', self: 'G' },
              { id: 118, dur: 2, type: 'ch', self: 'Em' },
              { id: 119, dur: 2, type: 'ch', self: 'C' },
              { id: 120, dur: 2, type: 'ch', self: 'G' },
              { id: 121, dur: 2, type: 'ch', self: 'D' },
              { id: 122, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65d198c44b24a875ead882ad',
              name: 'The A Team',
              key: 'A major',
              bpm: [85],
              genre: 'Folk Pop',
              artists: [{ name: 'Ed Sheeran', id: '657151a534e69c78f8553bb5' }],
            },
          },
          {
            id: '65d1b6424b24a875ead882b0',
            source: 'SR6iYWJxHqs',
            difficulty: 'intermediate',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'Dm',
                bpm: 110,
                syncPnt: '1970-01-01T00:00:04.850Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'Dm' },
              { id: 3, dur: 4, type: 'ch', self: 'Am' },
              { id: 4, dur: 4, type: 'ch', self: 'Am' },
              { id: 5, dur: 4, type: 'ch', self: 'Dm' },
              { id: 6, dur: 4, type: 'ch', self: 'Dm' },
              { id: 7, dur: 4, type: 'ch', self: 'Am' },
              { id: 8, dur: 4, type: 'ch', self: 'A7' },
              { id: 10, dur: 8, type: 'ch', self: 'Dm' },
              { id: 11, dur: 8, type: 'ch', self: 'Am' },
              { id: 12, dur: 8, type: 'ch', self: 'Dm' },
              { id: 13, dur: 4, type: 'ch', self: 'A#' },
              { id: 14, dur: 4, type: 'ch', self: 'A' },
              { id: 15, dur: 2, type: 'ch', self: 'Dm' },
              { id: 16, dur: 2, type: 'ch', self: 'A#' },
              { id: 17, dur: 1.5, type: 'ch', self: 'F' },
              { id: 18, dur: 2.5, type: 'ch', self: 'C' },
              { id: 19, dur: 2, type: 'ch', self: 'Dm' },
              { id: 20, dur: 2, type: 'ch', self: 'A#' },
              { id: 21, dur: 1.5, type: 'ch', self: 'F' },
              { id: 22, dur: 2, type: 'ch', self: 'C' },
              { id: 23, dur: 2, type: 'ch', self: 'Dm' },
              { id: 24, dur: 2, type: 'ch', self: 'A#' },
              { id: 25, dur: 1.5, type: 'ch', self: 'F' },
              { id: 26, dur: 2.5, type: 'ch', self: 'C' },
              { id: 27, dur: 2, type: 'ch', self: 'Dm' },
              { id: 28, dur: 2, type: 'ch', self: 'A#' },
              { id: 29, dur: 1.5, type: 'ch', self: 'F' },
              { id: 30, dur: 2.5, type: 'ch', self: 'C' },
              { id: 31, dur: 4, type: 'ch', self: 'A#' },
              { id: 32, dur: 4, type: 'ch', self: 'C' },
              { id: 33, dur: 2, type: 'ch', self: 'F' },
              { id: 34, dur: 2, type: 'ch', self: 'A' },
              { id: 35, dur: 2, type: 'ch', self: 'Dm' },
              { id: 36, dur: 2, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'A#' },
              { id: 38, dur: 4, type: 'ch', self: 'A' },
              { id: 39, dur: 4, type: 'ch', self: 'Dm' },
              { id: 40, dur: 4, type: 'ch', self: 'Dm' },
              { id: 41, dur: 4, type: 'ch', self: 'Am' },
              { id: 42, dur: 4, type: 'ch', self: 'Am' },
              { id: 43, dur: 4, type: 'ch', self: 'Dm' },
              { id: 44, dur: 3.9, type: 'ch', self: 'Dm' },
              { id: 45, dur: 4, type: 'ch', self: 'Am' },
              { id: 46, dur: 4, type: 'ch', self: 'Am' },
              { id: 47, dur: 4, type: 'ch', self: 'Dm' },
              { id: 48, dur: 4, type: 'ch', self: 'Dm' },
              { id: 49, dur: 4, type: 'ch', self: 'Am' },
              { id: 50, dur: 4, type: 'ch', self: 'A7' },
              { id: 51, dur: 4, type: 'ch', self: 'Dm' },
              { id: 52, dur: 4, type: 'ch', self: 'Dm' },
              { id: 53, dur: 4, type: 'ch', self: 'Am' },
              { id: 54, dur: 4, type: 'ch', self: 'Am' },
              { id: 55, dur: 4, type: 'ch', self: 'Dm' },
              { id: 56, dur: 3.9, type: 'ch', self: 'Dm' },
              { id: 57, dur: 4, type: 'ch', self: 'A#' },
              { id: 58, dur: 4, type: 'ch', self: 'A' },
              { id: 59, dur: 2, type: 'ch', self: 'Dm' },
              { id: 60, dur: 2, type: 'ch', self: 'A#' },
              { id: 61, dur: 1.5, type: 'ch', self: 'F' },
              { id: 62, dur: 2.5, type: 'ch', self: 'C' },
              { id: 63, dur: 2, type: 'ch', self: 'Dm' },
              { id: 64, dur: 2, type: 'ch', self: 'A#' },
              { id: 65, dur: 1.5, type: 'ch', self: 'F' },
              { id: 66, dur: 2.5, type: 'ch', self: 'C' },
              { id: 67, dur: 2, type: 'ch', self: 'Dm' },
              { id: 68, dur: 2, type: 'ch', self: 'A#' },
              { id: 69, dur: 1.5, type: 'ch', self: 'F' },
              { id: 70, dur: 2.5, type: 'ch', self: 'C' },
              { id: 71, dur: 2, type: 'ch', self: 'Dm' },
              { id: 72, dur: 2, type: 'ch', self: 'A#' },
              { id: 73, dur: 1.5, type: 'ch', self: 'F' },
              { id: 74, dur: 2.5, type: 'ch', self: 'C' },
              { id: 75, dur: 4, type: 'ch', self: 'A#' },
              { id: 76, dur: 4, type: 'ch', self: 'C' },
              { id: 77, dur: 2, type: 'ch', self: 'F' },
              { id: 78, dur: 2, type: 'ch', self: 'A' },
              { id: 79, dur: 2, type: 'ch', self: 'Dm' },
              { id: 80, dur: 2, type: 'ch', self: 'C' },
              { id: 81, dur: 4, type: 'ch', self: 'A#' },
              { id: 82, dur: 3.9, type: 'ch', self: 'A' },
              { id: 83, dur: 8, type: 'ch', self: 'Gm' },
              { id: 84, dur: 8, type: 'ch', self: 'Dm' },
              { id: 85, dur: 8, type: 'ch', self: 'Gm' },
              { id: 86, dur: 7.9, type: 'ch', self: 'A' },
              { id: 87, dur: 4, type: 'ch', self: 'Dm' },
              { id: 88, dur: 4, type: 'ch', self: 'Dm' },
              { id: 89, dur: 4, type: 'ch', self: 'A#' },
              { id: 90, dur: 3.9, type: 'ch', self: 'A' },
              { id: 91, dur: 2, type: 'ch', self: 'Dm' },
              { id: 92, dur: 2, type: 'ch', self: 'A#' },
              { id: 93, dur: 1.5, type: 'ch', self: 'F' },
              { id: 94, dur: 2.5, type: 'ch', self: 'C' },
              { id: 95, dur: 2, type: 'ch', self: 'Dm' },
              { id: 96, dur: 2, type: 'ch', self: 'A#' },
              { id: 97, dur: 1.5, type: 'ch', self: 'F' },
              { id: 98, dur: 2.5, type: 'ch', self: 'C' },
              { id: 99, dur: 2, type: 'ch', self: 'Dm' },
              { id: 100, dur: 1.9, type: 'ch', self: 'A#' },
              { id: 101, dur: 1.5, type: 'ch', self: 'F' },
              { id: 102, dur: 2.5, type: 'ch', self: 'C' },
              { id: 103, dur: 2, type: 'ch', self: 'Dm' },
              { id: 104, dur: 2, type: 'ch', self: 'A#' },
              { id: 105, dur: 1.5, type: 'ch', self: 'F' },
              { id: 106, dur: 2.5, type: 'ch', self: 'C' },
              { id: 107, dur: 4, type: 'ch', self: 'A#' },
              { id: 108, dur: 4, type: 'ch', self: 'C' },
              { id: 109, dur: 2, type: 'ch', self: 'F' },
              { id: 110, dur: 2, type: 'ch', self: 'A' },
              { id: 111, dur: 2, type: 'ch', self: 'Dm' },
              { id: 112, dur: 1.9, type: 'ch', self: 'C' },
              { id: 113, dur: 4, type: 'ch', self: 'A#' },
              { id: 114, dur: 4, type: 'ch', self: 'A' },
              { id: 115, dur: 4, type: 'ch', self: 'Dm' },
              { id: 116, dur: 4, type: 'ch', self: 'Dm' },
              { id: 117, dur: 4, type: 'ch', self: 'Am' },
              { id: 118, dur: 4, type: 'ch', self: 'Am' },
              { id: 119, dur: 4, type: 'ch', self: 'Dm' },
              { id: 120, dur: 4, type: 'ch', self: 'Dm' },
              { id: 121, dur: 4, type: 'ch', self: 'Am' },
              { id: 122, dur: 4, type: 'ch', self: 'Am' },
            ],
            song: {
              id: '65d1a6544b24a875ead882af',
              name: 'Grenade',
              key: 'D minor',
              bpm: [110],
              genre: 'Pop',
              artists: [{ name: 'Bruno Mars', id: '65bf2f776de300e257cee2aa' }],
            },
          },
          {
            id: '65d84b43326d8057696303e3',
            source: '0put0_a--Ng',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 3,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4,
                type: 'ch',
                self: 'G',
                bpm: 72,
                syncPnt: '1970-01-01T00:00:09.400Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4, type: 'ch', self: 'D' },
              { id: 3, dur: 4, type: 'ch', self: 'F' },
              { id: 4, dur: 4, type: 'ch', self: 'C' },
              { id: 5, dur: 3.8, type: 'ch', self: 'Cm' },
              { id: 6, dur: 3.8, type: 'ch', self: 'G' },
              { id: 7, dur: 2, type: 'ch', self: 'A7' },
              { id: 8, dur: 2, type: 'ch', self: 'D7' },
              { id: 9, dur: 4, type: 'ch', self: 'G' },
              { id: 10, dur: 4, type: 'ch', self: 'G' },
              { id: 11, dur: 4, type: 'ch', self: 'D' },
              { id: 12, dur: 4.1, type: 'ch', self: 'F' },
              { id: 13, dur: 4.1, type: 'ch', self: 'C' },
              { id: 14, dur: 4, type: 'ch', self: 'Cm' },
              { id: 15, dur: 4, type: 'ch', self: 'G' },
              { id: 16, dur: 2.1, type: 'ch', self: 'A7' },
              { id: 17, dur: 2, type: 'ch', self: 'D7' },
              { id: 18, dur: 4, type: 'ch', self: 'G' },
              { id: 19, dur: 4, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'D' },
              { id: 21, dur: 4, type: 'ch', self: 'F' },
              { id: 22, dur: 4, type: 'ch', self: 'C' },
              { id: 23, dur: 4, type: 'ch', self: 'Cm' },
              { id: 24, dur: 4, type: 'ch', self: 'G' },
              { id: 25, dur: 2, type: 'ch', self: 'A7' },
              { id: 26, dur: 2, type: 'ch', self: 'D7' },
              { id: 27, dur: 4, type: 'ch', self: 'G' },
              { id: 28, dur: 4, type: 'ch', self: 'C' },
              { id: 29, dur: 4, type: 'ch', self: 'G' },
              { id: 30, dur: 2, type: 'ch', self: 'B7' },
              { id: 31, dur: 2, type: 'ch', self: 'C' },
              { id: 32, dur: 4, type: 'ch', self: 'G' },
              { id: 35, dur: 3.9, type: 'ch', self: 'C' },
              { id: 36, dur: 3.9, type: 'ch', self: 'G' },
              { id: 37, dur: 4, type: 'ch', self: 'A7' },
              { id: 38, dur: 3.9, type: 'ch', self: 'D' },
              { id: 39, dur: 4, type: 'ch', self: 'G' },
              { id: 40, dur: 4, type: 'ch', self: 'D' },
              { id: 41, dur: 4, type: 'ch', self: 'F' },
              { id: 42, dur: 4, type: 'ch', self: 'C' },
              { id: 43, dur: 4, type: 'ch', self: 'Cm' },
              { id: 44, dur: 4, type: 'ch', self: 'G' },
              { id: 45, dur: 2, type: 'ch', self: 'A7' },
              { id: 46, dur: 2.1, type: 'ch', self: 'D7' },
              { id: 47, dur: 4, type: 'ch', self: 'G' },
              { id: 48, dur: 4.1, type: 'ch', self: 'G' },
              { id: 49, dur: 4.3, type: 'ch', self: 'D' },
              { id: 50, dur: 4.2, type: 'ch', self: 'F' },
              { id: 51, dur: 4.3, type: 'ch', self: 'C' },
              { id: 52, dur: 4.1, type: 'ch', self: 'Cm' },
              { id: 53, dur: 4.2, type: 'ch', self: 'G' },
              { id: 54, dur: 2, type: 'ch', self: 'A7' },
              { id: 55, dur: 2.1, type: 'ch', self: 'D7' },
              { id: 56, dur: 4, type: 'ch', self: 'G' },
              { id: 57, dur: 3.9, type: 'ch', self: 'C' },
              { id: 58, dur: 3.9, type: 'ch', self: 'G' },
              { id: 59, dur: 2, type: 'ch', self: 'B7' },
              { id: 60, dur: 2, type: 'ch', self: 'C' },
              { id: 61, dur: 3.9, type: 'ch', self: 'G' },
              { id: 62, dur: 3.9, type: 'ch', self: 'C' },
              { id: 63, dur: 3.9, type: 'ch', self: 'G' },
              { id: 64, dur: 4, type: 'ch', self: 'Am7' },
              { id: 65, dur: 4, type: 'ch', self: 'D7' },
              { id: 66, dur: 4, type: 'ch', self: 'G' },
              { id: 67, dur: 4, type: 'ch', self: 'D' },
              { id: 68, dur: 4, type: 'ch', self: 'F' },
              { id: 69, dur: 4, type: 'ch', self: 'C' },
              { id: 70, dur: 4, type: 'ch', self: 'Cm' },
              { id: 71, dur: 4, type: 'ch', self: 'G' },
              { id: 72, dur: 2, type: 'ch', self: 'A7' },
              { id: 73, dur: 2, type: 'ch', self: 'D7' },
              { id: 74, dur: 4, type: 'ch', self: 'G' },
              { id: 75, dur: 2.5, type: 'ch', self: 'A7' },
              { id: 76, dur: 6, type: 'ch', self: 'D7' },
              { id: 77, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65d84199326d8057696303e2',
              name: 'Make You Feel My Love',
              key: 'A# major',
              bpm: [72],
              genre: 'Folk Rock',
              artists: [{ name: 'Adele', id: '65bf3b4b6de300e257cee2ad' }],
            },
          },
          {
            id: '65d98d7a579b6af34416cb13',
            source: 'nCkpzqqog4k',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 2,
                type: 'ch',
                self: 'F',
                bpm: 82,
                syncPnt: '1970-01-01T00:00:42.100Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 1.5, type: 'ch', self: 'A' },
              { id: 3, dur: 2, type: 'ch', self: 'Dm' },
              { id: 4, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 5, dur: 2, type: 'ch', self: 'F' },
              { id: 6, dur: 1.5, type: 'ch', self: 'A' },
              { id: 7, dur: 2, type: 'ch', self: 'Dm' },
              { id: 8, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 9, dur: 2, type: 'ch', self: 'F' },
              { id: 10, dur: 1.5, type: 'ch', self: 'A' },
              { id: 11, dur: 2, type: 'ch', self: 'Dm' },
              { id: 12, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 13, dur: 2, type: 'ch', self: 'F' },
              { id: 14, dur: 1.5, type: 'ch', self: 'C' },
              { id: 15, dur: 4.5, type: 'ch', self: 'F' },
              { id: 16, dur: 2, type: 'ch', self: 'F' },
              { id: 17, dur: 1.5, type: 'ch', self: 'A' },
              { id: 18, dur: 2, type: 'ch', self: 'Dm' },
              { id: 19, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 20, dur: 2, type: 'ch', self: 'F' },
              { id: 21, dur: 1.5, type: 'ch', self: 'A' },
              { id: 22, dur: 2, type: 'ch', self: 'Dm' },
              { id: 23, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 24, dur: 2, type: 'ch', self: 'F' },
              { id: 25, dur: 1.5, type: 'ch', self: 'A' },
              { id: 26, dur: 2, type: 'ch', self: 'Dm' },
              { id: 27, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 28, dur: 2, type: 'ch', self: 'F' },
              { id: 29, dur: 1.5, type: 'ch', self: 'C' },
              { id: 30, dur: 4.5, type: 'ch', self: 'F' },
              { id: 31, dur: 2, type: 'ch', self: 'F' },
              { id: 32, dur: 1.5, type: 'ch', self: 'A' },
              { id: 33, dur: 2, type: 'ch', self: 'Dm' },
              { id: 34, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 35, dur: 2, type: 'ch', self: 'F' },
              { id: 36, dur: 1.5, type: 'ch', self: 'A' },
              { id: 37, dur: 2, type: 'ch', self: 'Dm' },
              { id: 38, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 39, dur: 2, type: 'ch', self: 'F' },
              { id: 40, dur: 1.5, type: 'ch', self: 'A' },
              { id: 41, dur: 2, type: 'ch', self: 'Dm' },
              { id: 42, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 43, dur: 2, type: 'ch', self: 'F' },
              { id: 44, dur: 1.5, type: 'ch', self: 'C' },
              { id: 45, dur: 4.5, type: 'ch', self: 'F' },
              { id: 46, dur: 2, type: 'ch', self: 'F' },
              { id: 47, dur: 1.5, type: 'ch', self: 'A' },
              { id: 48, dur: 2, type: 'ch', self: 'Dm' },
              { id: 49, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 50, dur: 2, type: 'ch', self: 'F' },
              { id: 51, dur: 1.5, type: 'ch', self: 'A' },
              { id: 52, dur: 2, type: 'ch', self: 'Dm' },
              { id: 53, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 54, dur: 2, type: 'ch', self: 'F' },
              { id: 55, dur: 1.5, type: 'ch', self: 'A' },
              { id: 56, dur: 2, type: 'ch', self: 'Dm' },
              { id: 57, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 58, dur: 2, type: 'ch', self: 'F' },
              { id: 59, dur: 1.5, type: 'ch', self: 'C' },
              { id: 60, dur: 2, type: 'ch', self: 'F' },
              { id: 61, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 62, dur: 2, type: 'ch', self: 'F' },
              { id: 63, dur: 1.5, type: 'ch', self: 'A' },
              { id: 64, dur: 2, type: 'ch', self: 'Dm' },
              { id: 65, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 66, dur: 2, type: 'ch', self: 'F' },
              { id: 67, dur: 1.5, type: 'ch', self: 'A' },
              { id: 68, dur: 2, type: 'ch', self: 'Dm' },
              { id: 69, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 70, dur: 2, type: 'ch', self: 'F' },
              { id: 71, dur: 1.5, type: 'ch', self: 'A' },
              { id: 72, dur: 2, type: 'ch', self: 'Dm' },
              { id: 73, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 74, dur: 2, type: 'ch', self: 'F' },
              { id: 75, dur: 1.5, type: 'ch', self: 'C' },
              { id: 76, dur: 4.5, type: 'ch', self: 'F' },
              { id: 77, dur: 2, type: 'ch', self: 'F' },
              { id: 78, dur: 1.5, type: 'ch', self: 'A' },
              { id: 79, dur: 2, type: 'ch', self: 'Dm' },
              { id: 80, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 81, dur: 2, type: 'ch', self: 'F' },
              { id: 82, dur: 1.5, type: 'ch', self: 'A' },
              { id: 83, dur: 2, type: 'ch', self: 'Dm' },
              { id: 84, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 85, dur: 2, type: 'ch', self: 'F' },
              { id: 86, dur: 1.5, type: 'ch', self: 'A' },
              { id: 87, dur: 2, type: 'ch', self: 'Dm' },
              { id: 88, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 89, dur: 2, type: 'ch', self: 'F' },
              { id: 90, dur: 1.5, type: 'ch', self: 'C' },
              { id: 91, dur: 2, type: 'ch', self: 'F' },
              { id: 92, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 93, dur: 4, type: 'ch', self: 'A#' },
              { id: 94, dur: 4, type: 'ch', self: 'F' },
              { id: 95, dur: 4, type: 'ch', self: 'A' },
              { id: 96, dur: 2, type: 'ch', self: 'Dm' },
              { id: 97, dur: 2, type: 'ch', self: 'C' },
              { id: 98, dur: 4, type: 'ch', self: 'A#' },
              { id: 99, dur: 4, type: 'ch', self: 'F' },
              { id: 100, dur: 8, type: 'ch', self: 'A#' },
              { id: 101, dur: 2, type: 'ch', self: 'F' },
              { id: 102, dur: 1.5, type: 'ch', self: 'A' },
              { id: 103, dur: 2, type: 'ch', self: 'Dm' },
              { id: 104, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 105, dur: 2, type: 'ch', self: 'F' },
              { id: 106, dur: 1.5, type: 'ch', self: 'A' },
              { id: 107, dur: 2, type: 'ch', self: 'Dm' },
              { id: 108, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 109, dur: 2, type: 'ch', self: 'F' },
              { id: 110, dur: 1.5, type: 'ch', self: 'A' },
              { id: 111, dur: 2, type: 'ch', self: 'Dm' },
              { id: 112, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 113, dur: 2, type: 'ch', self: 'F' },
              { id: 114, dur: 1.5, type: 'ch', self: 'C' },
              { id: 115, dur: 4.5, type: 'ch', self: 'F' },
              { id: 116, dur: 2, type: 'ch', self: 'F' },
              { id: 117, dur: 1.5, type: 'ch', self: 'A' },
              { id: 118, dur: 2, type: 'ch', self: 'Dm' },
              { id: 119, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 120, dur: 2, type: 'ch', self: 'F' },
              { id: 121, dur: 1.5, type: 'ch', self: 'A' },
              { id: 122, dur: 2, type: 'ch', self: 'Dm' },
              { id: 123, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 124, dur: 2, type: 'ch', self: 'F' },
              { id: 125, dur: 1.5, type: 'ch', self: 'A' },
              { id: 126, dur: 1, type: 'ch', self: 'Dm' },
              { id: 127, dur: 1, type: 'ch', self: 'C' },
              { id: 128, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 129, dur: 2, type: 'ch', self: 'F' },
              { id: 130, dur: 1.5, type: 'ch', self: 'A#' },
              { id: 131, dur: 4.5, type: 'ch', self: 'F' },
              { id: 132, dur: 2, type: 'ch', self: 'F' },
              { id: 133, dur: 1.5, type: 'ch', self: 'A' },
              { id: 134, dur: 2, type: 'ch', self: 'Dm' },
              { id: 135, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 136, dur: 2, type: 'ch', self: 'F' },
              { id: 137, dur: 1.5, type: 'ch', self: 'A' },
              { id: 138, dur: 2, type: 'ch', self: 'Dm' },
              { id: 139, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 140, dur: 2, type: 'ch', self: 'F' },
              { id: 141, dur: 1.5, type: 'ch', self: 'A' },
              { id: 142, dur: 1, type: 'ch', self: 'Dm' },
              { id: 143, dur: 1, type: 'ch', self: 'C' },
              { id: 144, dur: 2.5, type: 'ch', self: 'A#' },
              { id: 145, dur: 2, type: 'ch', self: 'F' },
              { id: 146, dur: 1.5, type: 'ch', self: 'C' },
              { id: 147, dur: 4.5, type: 'ch', self: 'F' },
            ],
            song: {
              id: '65d98254579b6af34416cb12',
              name: 'Im Not The Only One',
              key: 'F major',
              bpm: [82],
              genre: 'Pop',
              artists: [{ name: 'Sam Smith', id: '65d98203579b6af34416cb11' }],
            },
          },
          {
            id: '65d99c9dfeb5b2f1becc4632',
            source: 'rm9coqlk8fY',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 4.1,
                type: 'ch',
                self: 'G',
                bpm: 140,
                syncPnt: '1970-01-01T00:00:01.250Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 4.1, type: 'ch', self: 'D' },
              { id: 3, dur: 8.2, type: 'ch', self: 'Am' },
              { id: 4, dur: 4.1, type: 'ch', self: 'G' },
              { id: 5, dur: 4.1, type: 'ch', self: 'D' },
              { id: 6, dur: 8.2, type: 'ch', self: 'C' },
              { id: 7, dur: 4.1, type: 'ch', self: 'G' },
              { id: 8, dur: 4.1, type: 'ch', self: 'D' },
              { id: 9, dur: 8.2, type: 'ch', self: 'Am' },
              { id: 10, dur: 4.1, type: 'ch', self: 'G' },
              { id: 11, dur: 4.1, type: 'ch', self: 'D' },
              { id: 12, dur: 8.2, type: 'ch', self: 'C' },
              { id: 13, dur: 4.1, type: 'ch', self: 'G' },
              { id: 14, dur: 4.1, type: 'ch', self: 'D' },
              { id: 15, dur: 8, type: 'ch', self: 'Am' },
              { id: 16, dur: 4.1, type: 'ch', self: 'G' },
              { id: 17, dur: 4.1, type: 'ch', self: 'D' },
              { id: 18, dur: 8, type: 'ch', self: 'C' },
              { id: 19, dur: 4.1, type: 'ch', self: 'G' },
              { id: 20, dur: 4, type: 'ch', self: 'D' },
              { id: 21, dur: 8, type: 'ch', self: 'Am' },
              { id: 22, dur: 4, type: 'ch', self: 'G' },
              { id: 23, dur: 4, type: 'ch', self: 'D' },
              { id: 24, dur: 8, type: 'ch', self: 'C' },
              { id: 25, dur: 4, type: 'ch', self: 'G' },
              { id: 26, dur: 4, type: 'ch', self: 'D' },
              { id: 27, dur: 8, type: 'ch', self: 'Am' },
              { id: 28, dur: 4, type: 'ch', self: 'G' },
              { id: 29, dur: 4, type: 'ch', self: 'D' },
              { id: 30, dur: 8, type: 'ch', self: 'C' },
              { id: 31, dur: 4, type: 'ch', self: 'G' },
              { id: 32, dur: 4, type: 'ch', self: 'D' },
              { id: 33, dur: 8, type: 'ch', self: 'Am' },
              { id: 34, dur: 4, type: 'ch', self: 'G' },
              { id: 35, dur: 4, type: 'ch', self: 'D' },
              { id: 36, dur: 8.1, type: 'ch', self: 'C' },
              { id: 37, dur: 4, type: 'ch', self: 'G' },
              { id: 38, dur: 4, type: 'ch', self: 'D' },
              { id: 39, dur: 8, type: 'ch', self: 'Am' },
              { id: 40, dur: 4, type: 'ch', self: 'G' },
              { id: 41, dur: 4, type: 'ch', self: 'D' },
              { id: 42, dur: 8, type: 'ch', self: 'C' },
              { id: 43, dur: 4, type: 'ch', self: 'G' },
              { id: 44, dur: 4, type: 'ch', self: 'D' },
              { id: 45, dur: 8, type: 'ch', self: 'Am' },
              { id: 46, dur: 4, type: 'ch', self: 'G' },
              { id: 47, dur: 4, type: 'ch', self: 'D' },
              { id: 48, dur: 8, type: 'ch', self: 'C' },
              { id: 49, dur: 4, type: 'ch', self: 'G' },
              { id: 50, dur: 4, type: 'ch', self: 'D' },
              { id: 51, dur: 8, type: 'ch', self: 'Am' },
              { id: 52, dur: 4, type: 'ch', self: 'G' },
              { id: 53, dur: 4, type: 'ch', self: 'D' },
              { id: 54, dur: 8, type: 'ch', self: 'C' },
              { id: 55, dur: 4, type: 'ch', self: 'G' },
              { id: 56, dur: 4, type: 'ch', self: 'D' },
              { id: 57, dur: 8, type: 'ch', self: 'Am' },
              { id: 58, dur: 4, type: 'ch', self: 'G' },
              { id: 59, dur: 4, type: 'ch', self: 'D' },
              { id: 60, dur: 8, type: 'ch', self: 'C' },
              { id: 61, dur: 4, type: 'ch', self: 'G' },
              { id: 62, dur: 4, type: 'ch', self: 'D' },
              { id: 63, dur: 8, type: 'ch', self: 'Am' },
              { id: 64, dur: 4, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65d9977bfeb5b2f1becc4631',
              name: 'Knockin On Heavens Door',
              key: 'G major',
              bpm: [140],
              genre: 'Folk Rock',
              artists: [{ name: 'Bob Dylan', id: '65d99735feb5b2f1becc4630' }],
            },
          },
          {
            id: '65dd6d9200347fffb3feba80',
            source: 'IXdNnw99-Ic',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 2,
                dur: 8.2,
                type: 'ch',
                self: 'Em',
                bpm: 123,
                syncPnt: '1970-01-01T00:00:01.200Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 3, dur: 8.2, type: 'ch', self: 'G' },
              { id: 4, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 5, dur: 8.2, type: 'ch', self: 'G' },
              { id: 6, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 7, dur: 8.2, type: 'ch', self: 'A' },
              { id: 8, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 9, dur: 8.2, type: 'ch', self: 'A' },
              { id: 10, dur: 8.9, type: 'ch', self: 'G' },
              { id: 11, dur: 8.2, type: 'ch', self: 'G' },
              { id: 12, dur: 8.4, type: 'ch', self: 'Em' },
              { id: 13, dur: 8.2, type: 'ch', self: 'G' },
              { id: 14, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 15, dur: 8.2, type: 'ch', self: 'G' },
              { id: 16, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 17, dur: 8.2, type: 'ch', self: 'A' },
              { id: 18, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 19, dur: 8.2, type: 'ch', self: 'A' },
              { id: 20, dur: 8.5, type: 'ch', self: 'G' },
              { id: 21, dur: 8.5, type: 'ch', self: 'C' },
              { id: 22, dur: 8.6, type: 'ch', self: 'D' },
              { id: 23, dur: 8.7, type: 'ch', self: 'Am' },
              { id: 24, dur: 8.7, type: 'ch', self: 'G' },
              { id: 25, dur: 8.7, type: 'ch', self: 'D' },
              { id: 26, dur: 8.7, type: 'ch', self: 'C' },
              { id: 27, dur: 8.8, type: 'ch', self: 'Am' },
              { id: 28, dur: 8.6, type: 'ch', self: 'G' },
              { id: 29, dur: 8.3, type: 'ch', self: 'C' },
              { id: 30, dur: 8.3, type: 'ch', self: 'D' },
              { id: 31, dur: 8.3, type: 'ch', self: 'Am' },
              { id: 32, dur: 8.1, type: 'ch', self: 'G' },
              { id: 33, dur: 8.2, type: 'ch', self: 'D' },
              { id: 34, dur: 8.3, type: 'ch', self: 'C' },
              { id: 35, dur: 8.3, type: 'ch', self: 'Am' },
              { id: 37, dur: 8.3, type: 'ch', self: 'G' },
              { id: 38, dur: 8.2, type: 'ch', self: 'Em' },
              { id: 39, dur: 8.1, type: 'ch', self: 'G' },
              { id: 40, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 41, dur: 8.1, type: 'ch', self: 'G' },
              { id: 42, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 43, dur: 8.1, type: 'ch', self: 'A' },
              { id: 44, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 45, dur: 8.1, type: 'ch', self: 'A' },
              { id: 46, dur: 8.1, type: 'ch', self: 'G' },
              { id: 47, dur: 8.1, type: 'ch', self: 'C' },
              { id: 48, dur: 8.1, type: 'ch', self: 'D' },
              { id: 49, dur: 8.1, type: 'ch', self: 'Am' },
              { id: 50, dur: 8.1, type: 'ch', self: 'G' },
              { id: 51, dur: 8.1, type: 'ch', self: 'D' },
              { id: 52, dur: 8.1, type: 'ch', self: 'C' },
              { id: 53, dur: 8.1, type: 'ch', self: 'Am' },
              { id: 54, dur: 8.2, type: 'ch', self: 'G' },
              { id: 55, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 56, dur: 8, type: 'ch', self: 'G' },
              { id: 57, dur: 8.1, type: 'ch', self: 'Em' },
              { id: 58, dur: 8, type: 'ch', self: 'G' },
              { id: 59, dur: 7.9, type: 'ch', self: 'Em' },
              { id: 60, dur: 7.9, type: 'ch', self: 'A' },
              { id: 61, dur: 7.9, type: 'ch', self: 'Em' },
              { id: 62, dur: 7.9, type: 'ch', self: 'A' },
              { id: 63, dur: 7.9, type: 'ch', self: 'G' },
              { id: 64, dur: 7.9, type: 'ch', self: 'G' },
              { id: 65, dur: 7.8, type: 'ch', self: 'Em' },
              { id: 66, dur: 7.8, type: 'ch', self: 'G' },
              { id: 67, dur: 7.9, type: 'ch', self: 'Em' },
              { id: 68, dur: 7.9, type: 'ch', self: 'G' },
              { id: 69, dur: 7.8, type: 'ch', self: 'Em' },
              { id: 70, dur: 7.8, type: 'ch', self: 'A' },
              { id: 71, dur: 7.8, type: 'ch', self: 'Em' },
              { id: 72, dur: 7.9, type: 'ch', self: 'A' },
              { id: 73, dur: 7.9, type: 'ch', self: 'G' },
            ],
            song: {
              id: '65dd619d00347fffb3feba7f',
              name: 'Wish You Were Here',
              key: 'G major',
              bpm: [123],
              genre: 'Rock',
              artists: [{ name: 'Pink Floyd', id: '65dd615900347fffb3feba7e' }],
            },
          },
          {
            id: '65dd825c280bead4cc1fb91b',
            source: 'JF8BRvqGCNs',
            difficulty: 'beginner',
            tuning: 'EADGBE',
            transposition: 0,
            type: 'guitar',
            musicUnits: [
              {
                id: 1,
                dur: 3,
                type: 'ch',
                self: 'C',
                bpm: 112,
                syncPnt: '1970-01-01T00:00:00.000Z',
                timeSig: { top: 4, bottom: 4 },
              },
              { id: 2, dur: 1, type: 'ch', self: 'Dm' },
              { id: 3, dur: 3, type: 'ch', self: 'Am' },
              { id: 4, dur: 1, type: 'ch', self: 'Am7' },
              { id: 5, dur: 3, type: 'ch', self: 'Am' },
              { id: 6, dur: 1, type: 'ch', self: 'Am7' },
              { id: 7, dur: 3, type: 'ch', self: 'Am' },
              { id: 8, dur: 1, type: 'ch', self: 'Am7' },
              { id: 9, dur: 3, type: 'ch', self: 'C' },
              { id: 10, dur: 1, type: 'ch', self: 'Dm' },
              { id: 11, dur: 3, type: 'ch', self: 'Am' },
              { id: 12, dur: 1, type: 'ch', self: 'Am7' },
              { id: 13, dur: 3, type: 'ch', self: 'Am' },
              { id: 14, dur: 1, type: 'ch', self: 'Am7' },
              { id: 15, dur: 3, type: 'ch', self: 'Am' },
              { id: 16, dur: 1, type: 'ch', self: 'Am7' },
              { id: 17, dur: 3, type: 'ch', self: 'C' },
              { id: 18, dur: 1, type: 'ch', self: 'Dm' },
              { id: 19, dur: 3, type: 'ch', self: 'Am' },
              { id: 20, dur: 1, type: 'ch', self: 'Am7' },
              { id: 21, dur: 3, type: 'ch', self: 'Am' },
              { id: 22, dur: 1, type: 'ch', self: 'Am7' },
              { id: 23, dur: 3, type: 'ch', self: 'Am' },
              { id: 24, dur: 1, type: 'ch', self: 'Am7' },
              { id: 25, dur: 3, type: 'ch', self: 'C' },
              { id: 26, dur: 1, type: 'ch', self: 'Dm' },
              { id: 27, dur: 3, type: 'ch', self: 'Am' },
              { id: 28, dur: 1, type: 'ch', self: 'Am7' },
              { id: 29, dur: 3, type: 'ch', self: 'Am' },
              { id: 30, dur: 1, type: 'ch', self: 'Am7' },
              { id: 31, dur: 3, type: 'ch', self: 'Am' },
              { id: 32, dur: 1, type: 'ch', self: 'Am7' },
              { id: 33, dur: 3, type: 'ch', self: 'C' },
              { id: 34, dur: 1, type: 'ch', self: 'Dm' },
              { id: 35, dur: 3, type: 'ch', self: 'Am' },
              { id: 36, dur: 1, type: 'ch', self: 'Am7' },
              { id: 37, dur: 3, type: 'ch', self: 'Am' },
              { id: 38, dur: 1, type: 'ch', self: 'Am7' },
              { id: 39, dur: 3, type: 'ch', self: 'Am' },
              { id: 40, dur: 1, type: 'ch', self: 'Am7' },
              { id: 41, dur: 3, type: 'ch', self: 'C' },
              { id: 42, dur: 1, type: 'ch', self: 'Dm' },
              { id: 43, dur: 3, type: 'ch', self: 'Am' },
              { id: 44, dur: 1, type: 'ch', self: 'Am7' },
              { id: 45, dur: 3, type: 'ch', self: 'Am' },
              { id: 46, dur: 1, type: 'ch', self: 'Am7' },
              { id: 47, dur: 3, type: 'ch', self: 'Am' },
              { id: 48, dur: 1, type: 'ch', self: 'Am7' },
              { id: 49, dur: 4, type: 'ch', self: 'F' },
              { id: 50, dur: 4, type: 'ch', self: 'Dm' },
              { id: 51, dur: 8, type: 'ch', self: 'Am' },
              { id: 52, dur: 4, type: 'ch', self: 'F' },
              { id: 53, dur: 4, type: 'ch', self: 'Dm' },
              { id: 54, dur: 8, type: 'ch', self: 'G' },
              { id: 55, dur: 4, type: 'ch', self: 'C' },
              { id: 56, dur: 4, type: 'ch', self: 'Dm' },
              { id: 57, dur: 4, type: 'ch', self: 'Am' },
              { id: 58, dur: 4, type: 'ch', self: 'F' },
              { id: 59, dur: 4, type: 'ch', self: 'C' },
              { id: 60, dur: 4, type: 'ch', self: 'Dm' },
              { id: 61, dur: 4, type: 'ch', self: 'Am' },
              { id: 62, dur: 4.1, type: 'ch', self: 'F' },
              { id: 63, dur: 3, type: 'ch', self: 'C' },
              { id: 64, dur: 1, type: 'ch', self: 'Dm' },
              { id: 65, dur: 3, type: 'ch', self: 'Am' },
              { id: 66, dur: 1, type: 'ch', self: 'Am7' },
              { id: 67, dur: 3, type: 'ch', self: 'Am' },
              { id: 68, dur: 1, type: 'ch', self: 'Am7' },
              { id: 69, dur: 3, type: 'ch', self: 'Am' },
              { id: 70, dur: 1, type: 'ch', self: 'Am7' },
              { id: 71, dur: 3, type: 'ch', self: 'C' },
              { id: 72, dur: 1, type: 'ch', self: 'Dm' },
              { id: 73, dur: 3, type: 'ch', self: 'Am' },
              { id: 74, dur: 1, type: 'ch', self: 'Am7' },
              { id: 75, dur: 3, type: 'ch', self: 'Am' },
              { id: 76, dur: 1, type: 'ch', self: 'Am7' },
              { id: 77, dur: 3, type: 'ch', self: 'Am' },
              { id: 78, dur: 1, type: 'ch', self: 'Am7' },
              { id: 79, dur: 3, type: 'ch', self: 'C' },
              { id: 80, dur: 1, type: 'ch', self: 'Dm' },
              { id: 81, dur: 3, type: 'ch', self: 'Am' },
              { id: 82, dur: 1, type: 'ch', self: 'Am7' },
              { id: 83, dur: 3, type: 'ch', self: 'Am' },
              { id: 84, dur: 1, type: 'ch', self: 'Am7' },
              { id: 85, dur: 3, type: 'ch', self: 'Am' },
              { id: 86, dur: 1, type: 'ch', self: 'Am7' },
              { id: 87, dur: 4, type: 'ch', self: 'F' },
              { id: 88, dur: 4, type: 'ch', self: 'Dm' },
              { id: 89, dur: 8, type: 'ch', self: 'Am' },
              { id: 90, dur: 4, type: 'ch', self: 'F' },
              { id: 91, dur: 4, type: 'ch', self: 'Dm' },
              { id: 92, dur: 8, type: 'ch', self: 'G' },
              { id: 93, dur: 4, type: 'ch', self: 'C' },
              { id: 94, dur: 4, type: 'ch', self: 'Dm' },
              { id: 95, dur: 4, type: 'ch', self: 'Am' },
              { id: 96, dur: 4, type: 'ch', self: 'F' },
              { id: 97, dur: 4, type: 'ch', self: 'C' },
              { id: 98, dur: 4, type: 'ch', self: 'Dm' },
              { id: 99, dur: 4, type: 'ch', self: 'Am' },
              { id: 100, dur: 4.1, type: 'ch', self: 'F' },
              { id: 101, dur: 3, type: 'ch', self: 'C' },
              { id: 102, dur: 1, type: 'ch', self: 'Dm' },
              { id: 103, dur: 3, type: 'ch', self: 'Am' },
              { id: 104, dur: 1, type: 'ch', self: 'Am7' },
              { id: 105, dur: 3, type: 'ch', self: 'Am' },
              { id: 106, dur: 1, type: 'ch', self: 'Am7' },
              { id: 107, dur: 3, type: 'ch', self: 'Am' },
              { id: 108, dur: 1, type: 'ch', self: 'Am7' },
              { id: 109, dur: 4, type: 'ch', self: 'F' },
              { id: 110, dur: 4, type: 'ch', self: 'Am' },
              { id: 111, dur: 6, type: 'ch', self: 'Dm' },
              { id: 112, dur: 2, type: 'ch', self: 'Em' },
              { id: 113, dur: 4, type: 'ch', self: 'F' },
              { id: 114, dur: 4, type: 'ch', self: 'Am' },
              { id: 115, dur: 8, type: 'ch', self: 'Dm' },
              { id: 116, dur: 4, type: 'ch', self: 'Dm' },
              { id: 117, dur: 4, type: 'ch', self: 'F' },
              { id: 118, dur: 8, type: 'ch', self: 'Am' },
              { id: 119, dur: 4, type: 'ch', self: 'Dm' },
              { id: 120, dur: 4, type: 'ch', self: 'F' },
              { id: 121, dur: 8, type: 'ch', self: 'G' },
              { id: 122, dur: 4, type: 'ch', self: 'C' },
              { id: 123, dur: 4, type: 'ch', self: 'Dm' },
              { id: 124, dur: 4, type: 'ch', self: 'Am' },
              { id: 125, dur: 4, type: 'ch', self: 'F' },
              { id: 126, dur: 4, type: 'ch', self: 'C' },
              { id: 127, dur: 4, type: 'ch', self: 'Dm' },
              { id: 128, dur: 4, type: 'ch', self: 'Am' },
              { id: 129, dur: 4, type: 'ch', self: 'F' },
              { id: 130, dur: 4, type: 'ch', self: 'C' },
              { id: 131, dur: 4, type: 'ch', self: 'Dm' },
              { id: 132, dur: 4, type: 'ch', self: 'Am' },
              { id: 133, dur: 4, type: 'ch', self: 'F' },
              { id: 134, dur: 4, type: 'ch', self: 'C' },
              { id: 135, dur: 4, type: 'ch', self: 'Dm' },
              { id: 136, dur: 4, type: 'ch', self: 'Am' },
              { id: 137, dur: 4, type: 'ch', self: 'F' },
              { id: 138, dur: 4, type: 'ch', self: 'C' },
              { id: 139, dur: 4, type: 'ch', self: 'Dm' },
              { id: 140, dur: 4, type: 'ch', self: 'Am' },
              { id: 141, dur: 4, type: 'ch', self: 'F' },
            ],
            song: {
              id: '65dd7311a300e75a99d0554a',
              name: 'Stay',
              key: 'A minor',
              bpm: [112],
              genre: 'Pop',
              artists: [
                { name: 'Rihanna', id: '65dd72d3a300e75a99d05549' },
                { name: 'Mikky Ekko', id: '65dd7340a300e75a99d0554b' },
              ],
            },
          },
        ],
      };
      async function Ue() {
        return Be.tablatures;
      }
      const ze = ({ type: e, value: t, filterHandler: r }) => {
          const { currentFilterState: i, copyState: n, getLink: d } = r,
            s = n(i);
          switch (e) {
            case 'difficulty':
              s.difficulty = s.difficulty.filter((e) => e !== t);
              break;
            case 'artist':
              s.artists = s.artists.filter((e) => e !== t);
              break;
            case 'decade':
              s.decade = s.decade.filter((e) => e !== t);
              break;
            case 'genre':
              s.genre = s.genre.filter((e) => e !== t);
          }
          const l = d(s);
          return (0, De.jsxs)('div', {
            className:
              'badge badge-secondary badge-outline py-4 mr-4 border-2 mb-2',
            children: [
              (0, De.jsx)(Ee, {
                to: l,
                className: 'text-secondary mr-1',
                children: (0, De.jsx)(Pe, {}),
              }),
              'difficulty' === e
                ? 'Difficulty: '
                : 'artist' === e
                ? 'Artist: '
                : 'decade' === e
                ? 'Decade: '
                : 'Genre: ',
              t,
            ],
          });
        },
        He = '___',
        Qe = ({ filterHandler: e, allArtists: t }) => {
          const { currentFilterState: r, copyState: i, getLink: n } = e,
            d = X(),
            s = ((e) => {
              const t = [];
              return (
                e.artists.forEach((e) => t.push({ type: 'artist', value: e })),
                e.difficulty.forEach((e) =>
                  t.push({ type: 'difficulty', value: e })
                ),
                e.decade.forEach((e) => t.push({ type: 'decade', value: e })),
                e.genre.forEach((e) => t.push({ type: 'genre', value: e })),
                t
              );
            })(r).sort((e, t) => e.value.localeCompare(t.value)),
            l = (e) => (t) => {
              const s = t.target.value;
              if (s === He) return;
              const l = i(r);
              switch (e) {
                case 'artist':
                  l.artists.push(s);
                  break;
                case 'decade':
                  l.decade.push(s);
                  break;
                case 'difficulty':
                  l.difficulty.push(s);
                  break;
                case 'genre':
                  l.genre.push(s);
              }
              (t.target.value = He), d(n(l));
            };
          return (0, De.jsxs)(De.Fragment, {
            children: [
              (0, De.jsxs)('div', {
                className: 'flex flex-wrap m-4',
                children: [
                  (0, De.jsxs)('select', {
                    className: 'select mr-2 mb-2 bg-base-200',
                    onChange: l('artist'),
                    children: [
                      (0, De.jsx)('option', {
                        value: He,
                        defaultChecked: !0,
                        children: 'Artist',
                      }),
                      t.map((e) =>
                        (0, De.jsx)('option', { value: e, children: e })
                      ),
                    ],
                  }),
                  (0, De.jsxs)('select', {
                    className: 'select mr-2 mb-2 bg-base-200',
                    onChange: l('difficulty'),
                    children: [
                      (0, De.jsx)('option', {
                        value: He,
                        defaultChecked: !0,
                        children: 'Difficulty',
                      }),
                      je.map((e) =>
                        (0, De.jsx)('option', { value: e, children: e })
                      ),
                    ],
                  }),
                  (0, De.jsxs)('select', {
                    className: 'select mr-2 mb-2 bg-base-200',
                    onChange: l('genre'),
                    children: [
                      (0, De.jsx)('option', {
                        value: He,
                        defaultChecked: !0,
                        children: 'Genre',
                      }),
                      Le.map((e) =>
                        (0, De.jsx)('option', { value: e, children: e })
                      ),
                    ],
                  }),
                ],
              }),
              s.length > 0
                ? (0, De.jsxs)('section', {
                    className:
                      'border border-2 border-secondary flex m-4 p-4 pb-2 rounded-2xl',
                    children: [
                      (0, De.jsx)('div', {
                        className: 'flex-1 flex flex-wrap',
                        children: s.map((t) =>
                          (0, De.jsx)(
                            ze,
                            Object.assign({}, t, { filterHandler: e })
                          )
                        ),
                      }),
                      (0, De.jsx)('div', {
                        className: 'flex-0',
                        children: (0, De.jsx)(Ee, {
                          to: '/',
                          className: 'text-secondary',
                          children: (0, De.jsx)(Pe, {}),
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        $e = ({
          id: e,
          song: { name: t, genre: r, artists: i },
          filterHandler: n,
        }) => {
          const [s] = i,
            l = (0, d.useMemo)(() => {
              const { currentFilterState: e, getLink: t, copyState: r } = n,
                i = r(e);
              return i.artists.push(s.name), t(i);
            }, [n, s]),
            u = (0, d.useMemo)(() => {
              const { currentFilterState: e, getLink: t, copyState: i } = n,
                d = i(e);
              return d.genre.push(r), t(d);
            }, [n.getLink, n.currentFilterState, r]);
          return (0, De.jsx)('div', {
            className: 'card w-96 shadow mb-4 bg-base-200',
            children: (0, De.jsxs)('div', {
              className: 'card-body p-4',
              children: [
                (0, De.jsxs)(Ee, {
                  className:
                    'card-title hover:text-secondary hover:ease-in transition duration-100 mb-2 btn btn-secondary btn-outline bg-base-100',
                  to: '/tab/' + e,
                  children: [
                    (0, De.jsx)(Se, {}),
                    ' ',
                    t,
                    ' ',
                    (0, De.jsx)(Ge, {}),
                  ],
                }),
                (0, De.jsxs)('div', {
                  className: 'stats stats horizontal shadow',
                  children: [
                    (0, De.jsxs)('div', {
                      className: 'stat place-items-center',
                      children: [
                        (0, De.jsx)('div', {
                          className: 'stat-title',
                          children: 'Artist',
                        }),
                        (0, De.jsx)('div', {
                          className: 'stat-value text-lg mb-1',
                          children: s.name,
                        }),
                        (0, De.jsxs)(Ee, {
                          className:
                            'stat-desc flex btn btn-xs btn-outline btn-secondary',
                          to: l,
                          children: [
                            (0, De.jsx)(xe, {}),
                            ' ',
                            (0, De.jsx)('span', {
                              className: 'ml-1',
                              children: 'Add to Filter',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, De.jsxs)('div', {
                      className: 'stat place-items-center',
                      children: [
                        (0, De.jsx)('div', {
                          className: 'stat-title',
                          children: 'Genre',
                        }),
                        (0, De.jsx)('div', {
                          className: 'stat-value text-lg mb-1',
                          children: r,
                        }),
                        (0, De.jsxs)(Ee, {
                          className:
                            'stat-desc flex btn btn-xs btn-outline btn-secondary',
                          to: u,
                          children: [
                            (0, De.jsx)(xe, {}),
                            ' ',
                            (0, De.jsx)('span', {
                              className: 'ml-1',
                              children: 'Add to Filter',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function We() {
        const { tablatures: e } = (function () {
            const {
              data: e,
              isSuccess: t,
              isLoading: r,
              isError: i,
              error: n,
            } = (0, Me.useQuery)('get-all-tabs', Ue);
            return (0, d.useMemo)(
              () => ({
                tablatures: e || [],
                isSuccess: t,
                isLoading: r,
                isError: i,
                error: n,
              }),
              [e, r, i, t, n]
            );
          })(),
          {
            filteredTablatures: t,
            filterHandler: r,
            allArtists: i,
          } = (function ({ tablatures: e }) {
            const { search: t, pathname: r } = Y(),
              [i, n] = (0, d.useState)({
                difficulty: [],
                artists: [],
                decade: [],
                genre: [],
              }),
              [s, l] = (0, d.useState)([]),
              u = (0, d.useCallback)(
                (e) => {
                  const t = (e, t) => {
                    let r = Array.isArray(e) ? e : [];
                    return (r = r.filter((e) => t.includes(e))), Ie(r);
                  };
                  return {
                    difficulty: Ie(t(e.difficulty, je)),
                    artists: Ie(t(e.artists, s)),
                    decade: Ie(t(e.decade, Oe)),
                    genre: Ie(t(e.genre, Le)),
                  };
                },
                [s]
              ),
              c = (0, d.useCallback)(
                (e) => {
                  const t = u(e),
                    i = new URLSearchParams();
                  return (
                    t.difficulty.forEach((e) => i.append('difficulty', e)),
                    t.artists.forEach((e) => i.append('artists', e)),
                    t.decade.forEach((e) => i.append('decade', e)),
                    t.genre.forEach((e) => i.append('genre', e)),
                    r + '?' + i.toString()
                  );
                },
                [u]
              ),
              a = (0, d.useCallback)(
                (e) => ({
                  difficulty: [...e.difficulty],
                  artists: [...e.artists],
                  decade: [...e.decade],
                  genre: [...e.genre],
                }),
                []
              );
            (0, d.useEffect)(() => {
              const e = new URLSearchParams(t);
              n(
                u({
                  difficulty: e.getAll('difficulty'),
                  artists: e.getAll('artists'),
                  decade: e.getAll('decade'),
                  genre: e.getAll('genre'),
                })
              );
            }, [t, e, u]),
              (0, d.useEffect)(() => {
                const t = e
                    .reduce((e, t) => [...e, ...t.song.artists], [])
                    .map(({ name: e }) => e),
                  r = Ie(t);
                l(r);
              }, [e]);
            const o = { currentFilterState: i, getLink: c, copyState: a };
            let f = e.sort((e, t) => e.song.name.localeCompare(t.song.name));
            return (
              i.artists.length > 0 &&
                (f = f.filter((e) =>
                  e.song.artists.some((e) => i.artists.includes(e.name))
                )),
              i.difficulty.length > 0 &&
                (f = f.filter((e) => i.difficulty.includes(e.difficulty))),
              i.decade.length > 0 &&
                (f = f.filter((e) => i.decade.includes(e.song.decade))),
              i.genre.length > 0 &&
                (f = f.filter((e) => i.genre.includes(e.song.genre))),
              (0, d.useMemo)(
                () => ({
                  allArtists: s,
                  filterHandler: o,
                  filteredTablatures: f,
                }),
                [s, o, f]
              )
            );
          })({ tablatures: e });
        return (0, De.jsxs)(De.Fragment, {
          children: [
            (0, De.jsxs)('h1', {
              className: 'text-xl font-bold m-6',
              children: [
                'All Guitar Tabs',
                ' ',
                (0, De.jsxs)('span', {
                  className: 'text-secondary',
                  children: ['(', t.length, ')'],
                }),
              ],
            }),
            (0, De.jsx)(Qe, { filterHandler: r, allArtists: i }),
            (0, De.jsx)('div', {
              className: 'flex flex-wrap justify-around',
              children:
                t.length > 0
                  ? t.map((e) =>
                      (0, d.createElement)(
                        $e,
                        Object.assign({}, e, { filterHandler: r, key: e.id })
                      )
                    )
                  : (0, De.jsxs)('div', {
                      className: 'flex flex-col items-center my-16',
                      children: [
                        (0, De.jsx)('h2', {
                          className: 'text-2xl text-center mb-4 font-semibold',
                          children: 'No results found!',
                        }),
                        (0, De.jsx)(ke, {}),
                        (0, De.jsx)('span', {
                          className: 'text-center mt-4',
                          children:
                            "Try adjusting your filter to find what you're looking for",
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      const Ve = {
        randomUUID:
          'undefined' != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let qe;
      const Ke = new Uint8Array(16);
      function Ye() {
        if (
          !qe &&
          ((qe =
            'undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !qe)
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return qe(Ke);
      }
      const Ze = [];
      for (let Dn = 0; Dn < 256; ++Dn)
        Ze.push((Dn + 256).toString(16).slice(1));
      function Xe(e, t = 0) {
        return (
          Ze[e[t + 0]] +
          Ze[e[t + 1]] +
          Ze[e[t + 2]] +
          Ze[e[t + 3]] +
          '-' +
          Ze[e[t + 4]] +
          Ze[e[t + 5]] +
          '-' +
          Ze[e[t + 6]] +
          Ze[e[t + 7]] +
          '-' +
          Ze[e[t + 8]] +
          Ze[e[t + 9]] +
          '-' +
          Ze[e[t + 10]] +
          Ze[e[t + 11]] +
          Ze[e[t + 12]] +
          Ze[e[t + 13]] +
          Ze[e[t + 14]] +
          Ze[e[t + 15]]
        );
      }
      const Je = function (e, t, r) {
          if (Ve.randomUUID && !t && !e) return Ve.randomUUID();
          const i = (e = e || {}).random || (e.rng || Ye)();
          if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
            r = r || 0;
            for (let e = 0; e < 16; ++e) t[r + e] = i[e];
            return t;
          }
          return Xe(i);
        },
        et = {
          DEFAULT: {
            CANVAS_ID: `canvas-${Je()}`,
            PLAYER_ELEMENT_ID: `player-${Je()}`,
          },
        };
      var tt = r(924),
        rt = r.n(tt);
      class DomHandler {
        constructor({ canvasId: e, playerId: t }) {
          (this.canvas = void 0),
            (this.playerElement = void 0),
            (this.youTubePlayer = void 0),
            (this._ctx = void 0),
            (this.buildErrorMessageWhenFailingToFindElementBySelector = (e) =>
              `No ${e} element was found for the given ID. Please check if the provided ID is correct or exclude it to create a(n) ${e} element from scratch.`);
          let r = null,
            i = null;
          if (e) {
            const t = document.getElementById(e);
            if (!(t && t instanceof HTMLCanvasElement))
              throw new DomSetupError(
                this.buildErrorMessageWhenFailingToFindElementBySelector(
                  'canvas'
                )
              );
            r = t;
          }
          if (t) {
            const e = document.getElementById(t);
            if (!e)
              throw new DomSetupError(
                this.buildErrorMessageWhenFailingToFindElementBySelector(
                  'player'
                )
              );
            i = e;
          }
          (this.canvas = r || document.createElement('canvas')),
            r ||
              ((this.canvas.id = et.DEFAULT.CANVAS_ID),
              document.body.append(this.canvas)),
            (this.playerElement = i || document.createElement('div')),
            i ||
              ((this.playerElement.id = et.DEFAULT.PLAYER_ELEMENT_ID),
              document.body.append(this.playerElement)),
            (this.youTubePlayer = rt()(this.playerElement));
          const n = this.canvas.getContext('2d');
          if (!n)
            throw new DomSetupError(
              'A canvas 2d rendering context could not be created!'
            );
          this._ctx = n;
        }
        get player() {
          return {
            playerElement: this.playerElement,
            youTubePlayer: this.youTubePlayer,
          };
        }
        get ctx() {
          return this._ctx;
        }
      }
      const it = [
        ...[
          {
            name: 'SILENCE',
            definitions: [{ fingerPositions: [], usability: 0 }],
          },
          {
            name: 'C',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 1 },
                  { string: 4, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#',
            definitions: [
              {
                bar: 4,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'D',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 2, fret: 3 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'E',
            definitions: [
              {
                fingerPositions: [
                  { string: 3, fret: 1 },
                  { string: 4, fret: 2 },
                  { string: 5, fret: 2 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F',
            definitions: [
              {
                bar: 1,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#',
            definitions: [
              {
                bar: 2,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 5, fret: 2 },
                  { string: 6, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#',
            definitions: [
              {
                bar: 4,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'A',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 3, fret: 2 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'B',
            definitions: [
              {
                bar: 2,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Cm',
            definitions: [
              {
                bar: 3,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#m',
            definitions: [
              {
                bar: 4,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Dm',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 1 },
                  { string: 2, fret: 3 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#m',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'Em',
            definitions: [
              {
                fingerPositions: [
                  { string: 4, fret: 2 },
                  { string: 5, fret: 2 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'Fm',
            definitions: [
              {
                bar: 1,
                fingerPositions: [
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#m',
            definitions: [
              {
                bar: 2,
                fingerPositions: [
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'Gm',
            definitions: [
              {
                bar: 3,
                fingerPositions: [
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#m',
            definitions: [
              {
                bar: 4,
                fingerPositions: [
                  { string: 4, fret: 3 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'Am',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 1 },
                  { string: 3, fret: 2 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#m',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Bm',
            definitions: [
              {
                bar: 2,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C7',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 1 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 3, fret: 2 },
                  { string: 4, fret: 1 },
                  { string: 5, fret: 2 },
                ],
                initialFret: 3,
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'D7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 2, fret: 1 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 2, fret: 2 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'E7',
            definitions: [
              {
                fingerPositions: [
                  { string: 3, fret: 1 },
                  { string: 5, fret: 2 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F7',
            definitions: [
              {
                bar: 1,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#7',
            definitions: [
              {
                bar: 2,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 1 },
                  { string: 5, fret: 2 },
                  { string: 6, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#7',
            definitions: [
              {
                bar: 4,
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'A7',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#7',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'B7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 3, fret: 2 },
                  { string: 4, fret: 1 },
                  { string: 5, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Cm7',
            definitions: [
              {
                bar: 3,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#m7',
            definitions: [
              {
                fingerPositions: [
                  { string: 3, fret: 1 },
                  { string: 4, fret: 2 },
                  { string: 5, fret: 4 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Dm7',
            definitions: [
              {
                bar: 1,
                barHeight: 2,
                fingerPositions: [{ string: 3, fret: 2 }],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#m7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'Em7',
            definitions: [
              { fingerPositions: [{ string: 5, fret: 2 }], usability: 0 },
            ],
          },
          {
            name: 'Fm7',
            definitions: [
              {
                bar: 1,
                fingerPositions: [{ string: 5, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#m7',
            definitions: [
              {
                bar: 2,
                fingerPositions: [{ string: 5, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'Gm7',
            definitions: [
              {
                bar: 3,
                fingerPositions: [{ string: 5, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#m7',
            definitions: [
              {
                bar: 4,
                fingerPositions: [{ string: 5, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'Am7',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 1 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#m7',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 2 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Bm7',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 3, fret: 2 },
                  { string: 5, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
        ],
        ...[
          {
            name: 'C9',
            definitions: [
              {
                bar: 3,
                barHeight: 5,
                fingerPositions: [{ string: 4, fret: 3 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#9',
            definitions: [
              {
                bar: 4,
                barHeight: 5,
                fingerPositions: [{ string: 4, fret: 3 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'D9',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 1 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#9',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 1 },
                  { string: 2, fret: 2 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'E9',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 2 },
                  { string: 3, fret: 1 },
                  { string: 5, fret: 2 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F9',
            definitions: [
              {
                bar: 1,
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#9',
            definitions: [
              {
                bar: 2,
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G9',
            definitions: [
              {
                bar: 3,
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#9',
            definitions: [
              {
                bar: 4,
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 3, fret: 2 },
                  { string: 5, fret: 3 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'A9',
            definitions: [
              {
                fingerPositions: [{ string: 4, fret: 2 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#9',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [{ string: 4, fret: 3 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'B9',
            definitions: [
              {
                bar: 2,
                barHeight: 5,
                fingerPositions: [{ string: 4, fret: 3 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
        ],
        ...[
          {
            name: 'Csus2',
            definitions: [
              {
                bar: 3,
                barHeight: 5,
                fingerPositions: [
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#sus2',
            definitions: [
              {
                bar: 4,
                barHeight: 5,
                fingerPositions: [
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Dsus2',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#sus2',
            definitions: [
              {
                bar: 1,
                barHeight: 4,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'Esus2',
            definitions: [
              {
                fingerPositions: [
                  { string: 3, fret: 4 },
                  { string: 4, fret: 4 },
                  { string: 5, fret: 2 },
                ],
                usability: 0,
              },
            ],
          },
          {
            name: 'Fsus2',
            definitions: [
              {
                bar: 3,
                barHeight: 4,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#sus2',
            definitions: [
              {
                bar: 4,
                barHeight: 4,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'Gsus2',
            definitions: [
              {
                bar: 5,
                barHeight: 4,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#sus2',
            definitions: [
              {
                bar: 6,
                barHeight: 4,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 3, fret: 3 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'Asus2',
            definitions: [
              {
                fingerPositions: [
                  { string: 3, fret: 2 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#sus2',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'Bsus2',
            definitions: [
              {
                bar: 2,
                barHeight: 5,
                fingerPositions: [
                  { string: 3, fret: 3 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
        ],
        ...[
          {
            name: 'C7sus4',
            definitions: [
              {
                bar: 3,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'C#7sus4',
            definitions: [
              {
                bar: 4,
                barHeight: 5,
                fingerPositions: [
                  { string: 2, fret: 4 },
                  { string: 4, fret: 3 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'D7sus4',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 3 },
                  { string: 2, fret: 1 },
                  { string: 3, fret: 2 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'D#7sus4',
            definitions: [
              {
                fingerPositions: [
                  { string: 1, fret: 4 },
                  { string: 2, fret: 2 },
                  { string: 3, fret: 3 },
                  { string: 4, fret: 1 },
                ],
                mutedStrings: [6, 5],
                usability: 0,
              },
            ],
          },
          {
            name: 'E7sus4',
            definitions: [
              { fingerPositions: [{ string: 3, fret: 2 }], usability: 0 },
            ],
          },
          {
            name: 'F7sus4',
            definitions: [
              {
                bar: 1,
                fingerPositions: [{ string: 3, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'F#7sus4',
            definitions: [
              {
                bar: 2,
                fingerPositions: [{ string: 3, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'G7sus4',
            definitions: [
              {
                bar: 3,
                fingerPositions: [{ string: 3, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'G#7sus4',
            definitions: [
              {
                bar: 4,
                fingerPositions: [{ string: 3, fret: 3 }],
                usability: 0,
              },
            ],
          },
          {
            name: 'A7sus4',
            definitions: [
              {
                fingerPositions: [
                  { string: 2, fret: 3 },
                  { string: 4, fret: 2 },
                ],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'A#7sus4',
            definitions: [
              {
                bar: 1,
                barHeight: 5,
                fingerPositions: [{ string: 2, fret: 4 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
          {
            name: 'B7sus4',
            definitions: [
              {
                bar: 2,
                barHeight: 5,
                fingerPositions: [{ string: 2, fret: 4 }],
                mutedStrings: [6],
                usability: 0,
              },
            ],
          },
        ],
      ];
      class DataHandler {
        constructor({ tablature: e }) {
          (this.tablature = void 0),
            (this.schedule = void 0),
            (this.countUpdates = 0),
            this.updateTablature(e);
        }
        updateTablature(e) {
          (this.countUpdates = this.countUpdates + 1),
            (this.tablature = e),
            (this.schedule = this.buildSchedule(this.tablature));
        }
        undefinedChordError(e) {
          return new DataError(`Trying to access a undefined chord! ${e}`);
        }
        buildSchedule(e) {
          const t = [],
            { musicUnits: r } = e;
          if (!r[0].bpm || !r[0].syncPnt || !r[0].timeSig)
            throw new DataError(
              'The given tablature has incomplete initial data. Please check: bpm, time signtaure or initial sync point.'
            );
          let i = r[0].bpm,
            n = new Date(r[0].syncPnt);
          for (const d of r) {
            if (
              ((i = d.bpm ? d.bpm : i),
              (n = d.syncPnt ? new Date(d.syncPnt) : n),
              'ch' === d.type)
            ) {
              const e = d.self.includes(_e)
                ? it.find((e) => e.name.includes(_e))
                : it.find((e) => e.name === d.self);
              if (!e) throw this.undefinedChordError(d.self);
              const r = {
                type: d.type,
                dur: d.dur,
                syncPoint: n,
                bpm: i,
                id: Je(),
                self: e,
              };
              t.push(r);
            }
            n = new Date(n.getTime() + d.dur * (6e4 / i));
          }
          return t;
        }
        binarySearch(e) {
          if (isNaN(e)) return -1;
          let t = 0,
            r = this.schedule.length - 1;
          for (; t <= r; ) {
            const i = t + Math.floor((r - t) / 2),
              n = this.schedule[i].syncPoint.getTime();
            if (n === e) return i;
            e < n ? (r = i - 1) : (t = i + 1);
          }
          return r;
        }
        getCurrent(e) {
          const t = this.binarySearch(e);
          return this.schedule[t];
        }
        getCurrentAndNext(e) {
          const t = this.binarySearch(e);
          return {
            current: this.schedule[t],
            next: t + 1 < this.schedule.length ? this.schedule[t + 1] : void 0,
          };
        }
        getRangeWithSlack(e, t) {
          const r = this.binarySearch(e) - 1,
            i = this.binarySearch(e + t) + 1,
            n = [];
          for (let d = r; d <= i; d++)
            0 <= d && d < this.schedule.length && n.push(this.schedule[d]);
          return n;
        }
        get source() {
          return this.tablature.source;
        }
        get song() {
          return this.tablature.song;
        }
        transposeDown() {
          this.transpose(!1);
        }
        transposeUp() {
          this.transpose(!0);
        }
        transpose(e) {
          const t = Ne.slice(0, -1);
          (this.tablature.transposition =
            (this.tablature.transposition + (e ? 1 : -1) + t.length) %
            t.length),
            this.schedule.forEach((r) => {
              if ('ch' === r.type) {
                const { note: i, suffix: n } = (function (e) {
                  if (e.includes(_e)) return { note: 'SILENCE', suffix: '' };
                  let t = 'init',
                    r = 0;
                  for (let i = 0; i < 2; i++)
                    if ('init' === t)
                      switch (e[r]) {
                        case 'A':
                        case 'B':
                        case 'C':
                        case 'D':
                        case 'E':
                        case 'F':
                        case 'G':
                          (t = 'second'), (r += 1);
                          break;
                        default:
                          throw new DataError(
                            'Trying to parse a invalid chord!'
                          );
                      }
                    else 'second' === t && '#' === e[r] && (r += 1);
                  return { note: e.substring(0, r), suffix: e.substring(r) };
                })(r.self.name);
                if ('SILENCE' === i) return;
                const d =
                    (t.findIndex((e) => e === i) + (e ? -1 : 1) + t.length) %
                    t.length,
                  s = t[d],
                  l = it.find((e) => e.name === `${s}${n}`);
                if (!l) throw this.undefinedChordError(l);
                r.self = l;
              }
            });
        }
        get transposition() {
          return this.tablature.transposition;
        }
      }
      class SourceHandler {
        constructor({ source: e, playerElement: t, youTubePlayer: r }) {
          (this.source = void 0),
            (this.playerElement = void 0),
            (this.youTubePlayer = void 0),
            (this.source = e),
            (this.playerElement = t),
            (this.youTubePlayer = r);
          try {
            this.youTubePlayer.cueVideoById(this.source);
          } catch (i) {
            throw new SourceSetupError(
              'Can not initialize youtube web player! Data may be corrupted.'
            );
          }
          this.init();
        }
        async init() {
          await this.youTubePlayer.cueVideoByUrl(this.source);
        }
        async getCurrentTime() {
          return this.youTubePlayer.getCurrentTime();
        }
        async updateVideoId(e) {
          this.youTubePlayer.cueVideoById(e);
        }
      }
      class Actor {
        update(e, t) {}
        draw(e, t) {}
        kill() {
          this.isKilled = !0;
        }
        constructor(e) {
          (this.xRatio = void 0),
            (this.yRatio = void 0),
            (this.widthRatio = void 0),
            (this.heightRatio = void 0),
            (this.isKilled = !1),
            (this.handler = void 0),
            (this.xRatio = e.xRatio),
            (this.yRatio = e.yRatio),
            (this.widthRatio = e.widthRatio),
            (this.heightRatio = e.heightRatio);
        }
        noHandlerRuntimeError() {
          return new RuntimeError('Actor with no handler detected!');
        }
        get x() {
          if (!this.handler) throw this.noHandlerRuntimeError();
          return this.xRatio * this.handler.ctx.canvas.width;
        }
        get y() {
          if (!this.handler) throw this.noHandlerRuntimeError();
          return this.yRatio * this.handler.ctx.canvas.height;
        }
        get width() {
          if (!this.handler) throw this.noHandlerRuntimeError();
          return this.widthRatio * this.handler.ctx.canvas.width;
        }
        get height() {
          if (!this.handler) throw this.noHandlerRuntimeError();
          return this.heightRatio * this.handler.ctx.canvas.height;
        }
        drawLine(e, t, r, i, n) {
          e.beginPath(), e.moveTo(t, r), e.lineTo(i, n), e.stroke();
        }
        drawCircle(e, t, r, i) {
          e.beginPath(), e.arc(t, r, i, 0, 2 * Math.PI), e.fill();
        }
        drawStringXCross(e, t, r, i) {
          this.drawLine(e, t - i / 2, r - i / 2, t + i / 2, r + i / 2),
            this.drawLine(e, t - i / 2, r + i / 2, t + i / 2, r - i / 2);
        }
      }
      class ChordPreviewActor extends Actor {
        constructor(e) {
          super(e),
            (this.chord = void 0),
            (this.size = void 0),
            (this.checked = void 0),
            (this.duration = void 0),
            (this.deltaTime = void 0),
            (this.chord = e.chord),
            (this.size = e.size || 'small'),
            (this.checked = e.checked || !1),
            (this.duration = e.duration),
            (this.deltaTime = 0);
        }
        update(e, t) {
          this.deltaTime += t;
        }
        draw(e) {
          const t = e.canvas.width;
          (e.fillStyle = this.checked
            ? ChordPreviewActor.COLOR.CHECKED
            : ChordPreviewActor.COLOR.NOT_CHECKED),
            e.beginPath(),
            e.roundRect(this.x, this.y, this.width, this.height, 0.00625 * t),
            e.fill(),
            this.drawChord(e, this.chord),
            (e.font = `bold ${Math.floor(
              0.15 * this.width
            )}px Fira Sans, Verdana`),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.fillStyle = '#FDFFFC');
          const r = this.chord.name;
          e.fillText(r, this.x + this.width / 2, this.y + 0.15 * this.height),
            this.drawProgress(e);
        }
        drawChord(e, t) {
          const {
              fingerPositions: r,
              bar: i,
              barHeight: n,
              mutedStrings: d,
              initialFret: s,
            } = t.definitions[0],
            l = !!(((null == d ? void 0 : d.length) || 0) > 0),
            u = 0.45 * this.width,
            c = this.height * (l ? 0.52 : 0.56),
            a = this.x + (this.width - u) / 2,
            o = this.y + this.height * (l ? 0.33 : 0.29),
            f = c / 4,
            h = u / 5;
          (e.strokeStyle = '#FDFFFC'),
            (e.lineCap = 'round'),
            (e.lineWidth = 0.01666666667 * this.height),
            this.drawLine(e, a, o, a + u, o),
            (e.lineWidth = 0.004166666667 * this.height);
          for (let y = 1; y <= 4; y++)
            this.drawLine(e, a, o + f * y, a + u, o + f * y);
          e.lineWidth = 0.004166666667 * this.height;
          for (let y = 0; y < 6; y++)
            this.drawLine(e, a + h * y, o, a + h * y, o + c);
          const p = o + 0.0685 * this.height;
          if (i) {
            (e.lineWidth = 0.0685 * this.height), (e.lineCap = 'round');
            const t = 0.04 * this.width,
              r = a - t / 2;
            let d = u,
              s = 0;
            if (n) {
              const e = (d * (n - 1)) / 5;
              (s = d - e), (d = e);
            }
            const l = d + t;
            this.drawLine(e, s + r, p, s + r + l, p),
              1 !== i &&
                ((e.font = `${Math.floor(
                  0.06 * this.width
                )}px Fira Sans, Verdana`),
                (e.textAlign = 'center'),
                (e.textBaseline = 'middle'),
                (e.fillStyle = '#FDFFFC'),
                e.fillText(String(i) + 'fr', a + u + 0.125 * this.width, p));
          } else
            s &&
              ((e.textBaseline = 'middle'),
              (e.textAlign = 'center'),
              (e.font = `${Math.floor(
                0.06 * this.width
              )}px Fira Sans, Verdana`),
              (e.fillStyle = '#FDFFFC'),
              e.fillText(String(s) + 'fr', a + u + 0.125 * this.width, p));
          r.forEach((t) => {
            (e.lineCap = 'round'), (e.fillStyle = '#FDFFFC');
            const { string: r, fret: i } = t,
              n = a + u - (r - 1) * h,
              d = p + (i - 1) * f,
              s = 0.03333333333 * this.width;
            this.drawCircle(e, n, d, s);
          }),
            d &&
              d.forEach((t) => {
                (e.lineCap = 'round'),
                  (e.strokeStyle = '#FDFFFC'),
                  (e.lineWidth = 0.008 * this.width);
                const r = a + u - (t - 1) * h,
                  i = o - 0.06 * this.height,
                  n = 0.03 * this.width;
                this.drawStringXCross(e, r, i, n);
              });
        }
        drawProgress(e) {
          if (this.duration) {
            const t = Math.min(this.deltaTime / this.duration + 0.05, 1),
              r = this.x + 0.5 * this.width,
              i = this.y + 0.925 * this.height,
              n = 0.84 * this.width;
            (e.lineWidth = 0.034 * this.height),
              (e.strokeStyle = '#FDFFFC'),
              this.drawLine(e, r - n / 2, i, r + n / 2, i),
              (e.strokeStyle = ChordPreviewActor.COLOR.CHECKED),
              this.drawLine(e, r - n / 2, i, r - n / 2 + t * n, i);
          }
        }
      }
      ChordPreviewActor.COLOR = { NOT_CHECKED: '#2a323c', CHECKED: '#008b7e' };
      class SongNameActor extends Actor {
        constructor(e) {
          super(e),
            (this.name = void 0),
            (this.artistsToString = void 0),
            (this.name = e.name),
            (this.artistsToString = e.artistsToString);
        }
        update() {}
        draw(e) {
          const t = e.canvas.width;
          (e.fillStyle = 'rgba(42,50,60,0.5)'),
            e.beginPath(),
            e.roundRect(this.x, this.y, this.width, this.height, 0.00625 * t),
            e.fill(),
            (e.font = `${Math.floor(0.5 * this.height)}px Fira Sans, Verdana`),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.fillStyle = '#FDFFFC');
          const r = `${this.name} - ${this.artistsToString}`;
          e.fillText(r, this.x + this.width / 2, this.y + this.height / 2);
        }
      }
      class StringsFrameActor extends Actor {
        constructor(e) {
          super(e),
            (this.musicUnitQueue = void 0),
            (this.currentTime = void 0),
            (this.musicUnitQueue = []),
            (this.currentTime = 0);
        }
        async update(e) {
          (this.currentTime = await e.sourceHandler.getCurrentTime()),
            (this.musicUnitQueue = e.dataHandler.getRangeWithSlack(
              1e3 * this.currentTime,
              StringsFrameActor.SYNC_DELTA_TIME
            ));
        }
        draw(e) {
          const t = e.canvas.height,
            r = e.canvas.width,
            i = this.x + 0.025 * r,
            n = 0.03556 * t,
            d = 0.0445 * t;
          (e.lineWidth = 0.0112 * t),
            (e.strokeStyle = '#FDFFFC'),
            (e.lineCap = 'round');
          const s = 0.039 * t;
          for (let c = 0; c < 6; c++)
            this.drawLine(
              e,
              this.x,
              this.y + s * c,
              this.x + this.width,
              this.y + s * c
            );
          this.drawChords(e, i, n);
          const l = e.createLinearGradient(0, 0, 200, 0);
          l.addColorStop(0, '#1d2229'),
            l.addColorStop(1, 'transparent'),
            (e.fillStyle = l),
            e.fillRect(0, this.y - n, i, this.height + 2 * n);
          const u = e.createLinearGradient(0, 0, 200, 0);
          u.addColorStop(0, 'transparent'),
            u.addColorStop(1, '#1d2229'),
            (e.fillStyle = u),
            e.fillRect(
              this.x + this.width,
              this.y - n,
              r - (this.x + this.width),
              this.height + 2 * n
            ),
            (e.lineWidth = 0.0112 * t),
            (e.strokeStyle = '#ff59cb'),
            (e.lineCap = 'round'),
            this.drawLine(e, i, this.y - d, i, this.y + this.height + d);
        }
        drawChords(e, t, r) {
          const i = e.canvas.width;
          for (let n = 0; n < this.musicUnitQueue.length; n++) {
            const d = Math.max(0, this.musicUnitQueue[n].syncPoint.getTime()),
              s = Math.min(
                n + 1 < this.musicUnitQueue.length
                  ? this.musicUnitQueue[n + 1].syncPoint.getTime()
                  : d + StringsFrameActor.SYNC_DELTA_TIME,
                d + StringsFrameActor.SYNC_DELTA_TIME
              ),
              l =
                (d - 1e3 * this.currentTime) /
                StringsFrameActor.SYNC_DELTA_TIME,
              u = (s - d) / StringsFrameActor.SYNC_DELTA_TIME;
            (e.fillStyle = 'rgba(42,50,60,0.7)'),
              e.beginPath(),
              e.roundRect(
                t + l * this.width,
                this.y - r,
                u * this.width - r,
                this.height + 2 * r,
                0.00625 * i
              ),
              e.fill(),
              (e.font = `bold ${0.045 * i}px Fira Sans, Verdana`),
              (e.textAlign = 'center'),
              (e.textBaseline = 'middle'),
              (e.fillStyle = '#FDFFFC');
            const c = this.musicUnitQueue[n];
            if ('ch' === c.type) {
              const r = c.self.name;
              e.fillText(
                r,
                t + l * this.width + (u * this.width - 20) / 2,
                this.y + this.height / 2
              );
            }
          }
        }
      }
      StringsFrameActor.SYNC_DELTA_TIME = 8e3;
      class Clickable extends Actor {
        constructor(e) {
          super(e),
            (this.drawContent = void 0),
            (this.onClick = void 0),
            (this.backgroundColor = void 0),
            (this.color = void 0),
            (this.drawContent = e.drawContent),
            (this.onClick = e.onClick),
            (this.backgroundColor = e.backgroundColor || 'rgba(42,50,60,1)'),
            (this.color = e.color || '#ff71cf');
        }
        update(e, t) {
          super.update(e, t);
          const { clickPos: r, clicking: i } = e,
            { x: n, y: d } = r;
          this.x <= n &&
            n <= this.x + this.width &&
            this.y <= d &&
            d <= this.y + this.height &&
            i &&
            this.onClick(e, t);
        }
        draw(e) {
          const t = e.canvas.width;
          (e.fillStyle = this.backgroundColor),
            e.beginPath(),
            e.roundRect(this.x, this.y, this.width, this.height, 0.00625 * t),
            e.fill(),
            this.drawContent(e);
        }
      }
      function nt(e) {
        return new Clickable({
          drawContent(t) {
            t.fillStyle = (e.back, 'white');
            const r = this.width / 3,
              i = this.height / 3,
              n = this.x + this.width / 2 - r / 2,
              d = this.y + this.height / 2 - i / 2,
              s = (e, t, r, i) => {
                e.beginPath(),
                  e.moveTo(t.x, t.y),
                  e.lineTo(r.x, r.y),
                  e.lineTo(i.x, i.y),
                  e.closePath(),
                  e.fill();
              };
            e.back
              ? s(
                  t,
                  { x: n, y: d + i / 2 },
                  { x: n + r, y: d },
                  { x: n + r, y: d + i }
                )
              : s(
                  t,
                  { x: n + r, y: d + i / 2 },
                  { x: n, y: d },
                  { x: n, y: d + i }
                );
          },
          onClick: (t) => {
            e.back
              ? t.dataHandler.transposeDown()
              : t.dataHandler.transposeUp();
          },
          xRatio: e.xRatio,
          yRatio: e.yRatio,
          widthRatio: 0.015,
          heightRatio: 0.0445,
        });
      }
      class CapoActor extends Actor {
        constructor(e) {
          super(e), (this.capo = void 0), (this.capo = 0);
        }
        update(e) {
          this.capo = e.dataHandler.tablature.transposition;
        }
        draw(e) {
          const t = e.canvas.width;
          (e.fillStyle = 'rgba(42,50,60,1)'),
            e.beginPath(),
            e.roundRect(this.x, this.y, this.width, this.height, 0.00625 * t),
            e.fill(),
            (e.font = `bold ${Math.floor(
              0.3125 * this.width
            )}px Fira Sans, Verdana`),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.fillStyle = 'white'),
            e.fillText(
              'CAPO',
              this.x + this.width / 2,
              this.y + this.height / 3
            ),
            (e.font = `${Math.floor(
              0.3125 * this.width
            )}px Fira Sans, Verdana`),
            e.fillText(
              String(this.capo),
              this.x + this.width / 2,
              this.y + (13 * this.height) / 18
            );
        }
      }
      class CanvasHandler {
        constructor({ dataHandler: e, sourceHandler: t, ctx: r, mode: i }) {
          (this.dataHandler = void 0),
            (this.sourceHandler = void 0),
            (this.ctx = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.actors = void 0),
            (this.lastLoop = void 0),
            (this.clicking = void 0),
            (this.clickPos = void 0),
            (this.mode = void 0),
            (this.previewQueueHandlerCurrentId = void 0),
            (this.previewQueueHandlerCurrent = void 0),
            (this.previewQueueHandlerDone = void 0),
            (this.dataHandler = e),
            (this.sourceHandler = t),
            (this.ctx = r);
          const n = this.ctx.canvas;
          (this.width = n.width),
            (this.height = n.height),
            (this.actors = []),
            (this.lastLoop = 0),
            (this.clicking = !1),
            (this.clickPos = { x: 0, y: 0 }),
            (this.mode = i),
            (this.previewQueueHandlerCurrentId = Je()),
            this.setupEventListeners(),
            this.setup(),
            this.loop();
        }
        add(e) {
          (e.handler = this), this.actors.push(e);
        }
        setupEventListeners() {
          const { canvas: e } = this.ctx;
          e.addEventListener(
            'click',
            ((t) => {
              (this.clickPos.x = (t.offsetX * e.width) / e.offsetWidth),
                (this.clickPos.y = (t.offsetY * e.height) / e.offsetHeight),
                (this.clicking = !0);
            }).bind(this)
          );
        }
        setup() {
          this.add(
            new SongNameActor({
              xRatio: 0.13,
              yRatio: 0.0445,
              widthRatio: 0.7375,
              heightRatio: 0.07111111111,
              name: this.dataHandler.song.name,
              artistsToString: this.dataHandler.song.artists[0].name,
            })
          ),
            this.add(
              new StringsFrameActor({
                xRatio: 0.02,
                yRatio: 0.7289,
                widthRatio: 0.95375,
                heightRatio: 0.196,
              })
            ),
            'interactive' === this.mode
              ? (this.add(nt({ back: !0, xRatio: 0.0225, yRatio: 0.0575 })),
                this.add(
                  new CapoActor({
                    xRatio: 0.0425,
                    yRatio: 0.0445,
                    widthRatio: 0.04,
                    heightRatio: 0.07112,
                  })
                ),
                this.add(nt({ back: !1, xRatio: 0.0875, yRatio: 0.0575 })))
              : this.add(
                  new CapoActor({
                    xRatio: 0.0225,
                    yRatio: 0.0445,
                    widthRatio: 0.04,
                    heightRatio: 0.07112,
                  })
                );
        }
        async loop() {
          const e = 1e3 * (await this.sourceHandler.getCurrentTime()),
            t = Math.max(e - this.lastLoop, 0),
            { current: r, next: i } = this.dataHandler.getCurrentAndNext(e);
          this.handlePreview(r, i),
            (this.actors = this.actors.filter((e) => !e.isKilled)),
            this.actors.forEach((e) => e.update(this, t)),
            this.ctx.clearRect(0, 0, this.width, this.height),
            this.actors.forEach((e) => e.draw(this.ctx, t)),
            (this.lastLoop = e),
            (this.clicking = !1),
            window.requestAnimationFrame(this.loop.bind(this));
        }
        handlePreview(e, t) {
          if (
            (this.previewQueueHandlerCurrentId ||
              (e && (this.previewQueueHandlerCurrentId = e.id),
              (this.previewQueueHandlerCurrent = e || void 0),
              (this.previewQueueHandlerDone = void 0)),
            e && this.previewQueueHandlerCurrentId != e.id)
          ) {
            var r, i;
            let n;
            if (
              (this.actors.forEach((e) => {
                e instanceof ChordPreviewActor && e.kill();
              }),
              (this.previewQueueHandlerDone = this.previewQueueHandlerCurrent),
              (this.previewQueueHandlerCurrent = e),
              (this.previewQueueHandlerCurrentId = null == e ? void 0 : e.id),
              this.previewQueueHandlerCurrent &&
                t &&
                (n =
                  t.syncPoint.getTime() -
                  this.previewQueueHandlerCurrent.syncPoint.getTime()),
              'ch' ===
                (null == (r = this.previewQueueHandlerCurrent)
                  ? void 0
                  : r.type) &&
                this.add(
                  new ChordPreviewActor({
                    xRatio: 0.35,
                    yRatio: 0.1422,
                    widthRatio: 0.3,
                    heightRatio: 0.533,
                    chord: this.previewQueueHandlerCurrent.self,
                    duration: n,
                  })
                ),
              'ch' === (null == t ? void 0 : t.type) &&
                this.add(
                  new ChordPreviewActor({
                    xRatio: 0.6575,
                    yRatio: 0.24,
                    widthRatio: 0.21125,
                    heightRatio: 0.3733333333,
                    chord: t.self,
                  })
                ),
              this.previewQueueHandlerDone &&
                'ch' ===
                  (null == (i = this.previewQueueHandlerDone)
                    ? void 0
                    : i.type))
            ) {
              const e = new ChordPreviewActor({
                xRatio: 0.13,
                yRatio: 0.24,
                widthRatio: 0.21125,
                heightRatio: 0.3733333333,
                chord: this.previewQueueHandlerDone.self,
                checked: !0,
              });
              this.add(e);
            }
          }
        }
      }
      class NotaAbleViewer {
        constructor({ canvasId: e, playerId: t, tablature: r, mode: i }) {
          (this.domHandler = void 0),
            (this.dataHandler = void 0),
            (this.sourceHandler = void 0),
            (this.canvasHandler = void 0),
            (this.domHandler = new DomHandler({ canvasId: e, playerId: t })),
            (this.dataHandler = new DataHandler({ tablature: r }));
          const n = this.dataHandler.source,
            { youTubePlayer: d, playerElement: s } = this.domHandler.player,
            l = this.domHandler.ctx;
          (this.sourceHandler = new SourceHandler({
            source: n,
            youTubePlayer: d,
            playerElement: s,
          })),
            (this.canvasHandler = new CanvasHandler({
              dataHandler: this.dataHandler,
              sourceHandler: this.sourceHandler,
              ctx: l,
              mode: i,
            }));
        }
        updateTablature(e) {
          this.dataHandler.updateTablature(e);
          const t = this.dataHandler.source;
          this.sourceHandler.updateVideoId(t);
        }
      }
      const dt = ({ tablature: e, mode: t }) => {
        const [r, i] = (0, d.useState)(null),
          n = (0, d.useId)(),
          s = (0, d.useId)(),
          l = (0, d.useRef)(null);
        return (
          (0, d.useEffect)(() => {
            if (!r) {
              const r = new NotaAbleViewer({
                canvasId: n,
                playerId: s,
                tablature: e,
                mode: t,
              });
              i(r);
            }
          }, []),
          (0, d.useEffect)(() => {
            r && e && r.updateTablature(e);
          }, [e]),
          (0, De.jsx)('main', {
            children: (0, De.jsxs)('div', {
              className: 'w-100 mx-auto flex flex-col md:flex-row',
              children: [
                (0, De.jsx)('canvas', {
                  id: n,
                  width: 1600,
                  height: 900,
                  className: 'w-full md:w-2/3 bg-base-100',
                  style: {
                    backgroundColor: 'oklch(0.253267 0.015896 252.418)',
                  },
                }),
                (0, De.jsx)('div', {
                  className:
                    'flex items-center justify-center bg-black w-full md:w-1/3',
                  ref: l,
                  children: (0, De.jsx)('div', { id: s, className: 'w-100' }),
                }),
              ],
            }),
          })
        );
      };
      function st() {
        const { id: e } = (function () {
          let { matches: e } = d.useContext(V),
            t = e[e.length - 1];
          return t ? t.params : {};
        })();
        if (!e)
          throw new Error('No Id was found. Please check the current URL!');
        const {
          data: t,
          isLoading: r,
          isSuccess: i,
          error: n,
        } = (0, Me.useQuery)(['tab', e], () =>
          (async function (e) {
            return Be.tablatures.find((t) => t.id === e);
          })(e)
        );
        return (0, d.useMemo)(
          () => ({ tablature: t, isLoading: r, isSuccess: i, error: n }),
          [t, n, i, r]
        );
      }
      function lt() {
        const { tablature: e, isLoading: t, isSuccess: r, error: i } = st();
        return t
          ? (0, De.jsxs)(De.Fragment, {
              children: [
                (0, De.jsxs)('div', {
                  className: 'flex flex-row mb-4',
                  children: [
                    (0, De.jsx)('div', {
                      className: 'skeleton w-mr-3 w-[60px] h-[60px]',
                    }),
                    (0, De.jsxs)('div', {
                      className: 'flex flex-col flex-grow',
                      children: [
                        (0, De.jsx)('div', { className: 'skeleton w-full' }),
                        (0, De.jsx)('div', { className: 'skeleton w-full' }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)('div', {
                  className: 'flex flex-row',
                  children: [
                    (0, De.jsx)('div', {
                      className: 'skeleton w-2/3 h-[480px] mr-4',
                    }),
                    (0, De.jsx)('div', {
                      className: 'skeleton w-1/3 h-[480px]',
                    }),
                  ],
                }),
              ],
            })
          : r && e
          ? (0, De.jsxs)(De.Fragment, {
              children: [
                (0, De.jsxs)('div', {
                  className: 'mb-4 flex flex-row',
                  children: [
                    (0, De.jsx)('div', {
                      className:
                        'bg-secondary w-[60px] h-[60px] flex items-center justify-center rounded-lg mr-3 text-white',
                      children: (0, De.jsx)(Fe, {}),
                    }),
                    (0, De.jsxs)('div', {
                      className: 'flex flex-col',
                      children: [
                        (0, De.jsx)('h3', {
                          className: 'text-3xl',
                          children: e.song.name,
                        }),
                        (0, De.jsx)(Ee, {
                          to: `/?artists=${e.song.artists[0].name}`,
                          children: (0, De.jsx)('h6', {
                            className:
                              'text-md text-secondary font-semibold underline',
                            children: e.song.artists[0].name,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsx)(dt, { tablature: e, mode: 'interactive' }),
              ],
            })
          : (0, De.jsx)('span', {
              children: null == i ? void 0 : i.toString(),
            });
      }
      const ut = function () {
        return (0, De.jsxs)('main', {
          className: 'bg-base-200',
          children: [
            (0, De.jsx)(Te, {}),
            (0, De.jsx)('div', {
              className:
                'max-w-[80em] mx-auto shadow rounded-xl p-4 my-4 bg-base-100',
              children: (0, De.jsxs)(fe, {
                children: [
                  (0, De.jsx)(ae, { path: '/', element: (0, De.jsx)(We, {}) }),
                  (0, De.jsx)(ae, {
                    path: '/tab/:id',
                    element: (0, De.jsx)(lt, {}),
                  }),
                  (0, De.jsx)(ae, { path: '*', element: (0, De.jsx)(Re, {}) }),
                ],
              }),
            }),
          ],
        });
      };
      var ct = r(150);
      function at(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          d = Object.keys(e);
        for (i = 0; i < d.length; i++)
          (r = d[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      function ot(e) {
        let t = 'https://mui.com/production-error/?code=' + e;
        for (let r = 1; r < arguments.length; r += 1)
          t += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
          'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
        );
      }
      function ft(e) {
        if ('object' != typeof e || null === e) return !1;
        const t = Object.getPrototypeOf(e);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      }
      function ht(e) {
        if (!ft(e)) return e;
        const t = {};
        return (
          Object.keys(e).forEach((r) => {
            t[r] = ht(e[r]);
          }),
          t
        );
      }
      function pt(e, t, r = { clone: !0 }) {
        const i = r.clone ? (0, ct.A)({}, e) : e;
        return (
          ft(e) &&
            ft(t) &&
            Object.keys(t).forEach((n) => {
              '__proto__' !== n &&
                (ft(t[n]) && n in e && ft(e[n])
                  ? (i[n] = pt(e[n], t[n], r))
                  : r.clone
                  ? (i[n] = ft(t[n]) ? ht(t[n]) : t[n])
                  : (i[n] = t[n]));
            }),
          i
        );
      }
      const yt = ['values', 'unit', 'step'],
        mt = (e) => {
          const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
          return (
            t.sort((e, t) => e.val - t.val),
            t.reduce((e, t) => (0, ct.A)({}, e, { [t.key]: t.val }), {})
          );
        };
      const gt = { borderRadius: 4 },
        bt = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        vt = {
          keys: ['xs', 'sm', 'md', 'lg', 'xl'],
          up: (e) => `@media (min-width:${bt[e]}px)`,
        };
      function Ct(e, t, r) {
        const i = e.theme || {};
        if (Array.isArray(t)) {
          const e = i.breakpoints || vt;
          return t.reduce((i, n, d) => ((i[e.up(e.keys[d])] = r(t[d])), i), {});
        }
        if ('object' == typeof t) {
          const e = i.breakpoints || vt;
          return Object.keys(t).reduce((i, n) => {
            if (-1 !== Object.keys(e.values || bt).indexOf(n)) {
              i[e.up(n)] = r(t[n], n);
            } else {
              const e = n;
              i[e] = t[e];
            }
            return i;
          }, {});
        }
        return r(t);
      }
      function Et(e = {}) {
        var t;
        return (
          (null == (t = e.keys)
            ? void 0
            : t.reduce((t, r) => ((t[e.up(r)] = {}), t), {})) || {}
        );
      }
      function At(e, t) {
        return e.reduce((e, t) => {
          const r = e[t];
          return (!r || 0 === Object.keys(r).length) && delete e[t], e;
        }, t);
      }
      function wt(e) {
        if ('string' != typeof e) throw new Error(ot(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function Dt(e, t, r = !0) {
        if (!t || 'string' != typeof t) return null;
        if (e && e.vars && r) {
          const r = `vars.${t}`
            .split('.')
            .reduce((e, t) => (e && e[t] ? e[t] : null), e);
          if (null != r) return r;
        }
        return t
          .split('.')
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
      }
      function Gt(e, t, r, i = r) {
        let n;
        return (
          (n =
            'function' == typeof e
              ? e(r)
              : Array.isArray(e)
              ? e[r] || i
              : Dt(e, r) || i),
          t && (n = t(n, i, e)),
          n
        );
      }
      const St = function (e) {
        const {
            prop: t,
            cssProperty: r = e.prop,
            themeKey: i,
            transform: n,
          } = e,
          d = (e) => {
            if (null == e[t]) return null;
            const d = e[t],
              s = Dt(e.theme, i) || {};
            return Ct(e, d, (e) => {
              let i = Gt(s, n, e);
              return (
                e === i &&
                  'string' == typeof e &&
                  (i = Gt(s, n, `${t}${'default' === e ? '' : wt(e)}`, e)),
                !1 === r ? i : { [r]: i }
              );
            });
          };
        return (d.propTypes = {}), (d.filterProps = [t]), d;
      };
      const xt = function (e, t) {
        return t ? pt(e, t, { clone: !1 }) : e;
      };
      const kt = { m: 'margin', p: 'padding' },
        Ft = {
          t: 'Top',
          r: 'Right',
          b: 'Bottom',
          l: 'Left',
          x: ['Left', 'Right'],
          y: ['Top', 'Bottom'],
        },
        Pt = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
        Tt = (function (e) {
          const t = {};
          return (r) => (void 0 === t[r] && (t[r] = e(r)), t[r]);
        })((e) => {
          if (e.length > 2) {
            if (!Pt[e]) return [e];
            e = Pt[e];
          }
          const [t, r] = e.split(''),
            i = kt[t],
            n = Ft[r] || '';
          return Array.isArray(n) ? n.map((e) => i + e) : [i + n];
        }),
        Rt = [
          'm',
          'mt',
          'mr',
          'mb',
          'ml',
          'mx',
          'my',
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'marginInline',
          'marginInlineStart',
          'marginInlineEnd',
          'marginBlock',
          'marginBlockStart',
          'marginBlockEnd',
        ],
        _t = [
          'p',
          'pt',
          'pr',
          'pb',
          'pl',
          'px',
          'py',
          'padding',
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft',
          'paddingX',
          'paddingY',
          'paddingInline',
          'paddingInlineStart',
          'paddingInlineEnd',
          'paddingBlock',
          'paddingBlockStart',
          'paddingBlockEnd',
        ],
        Nt = [...Rt, ..._t];
      function Ot(e, t, r, i) {
        var n;
        const d = null != (n = Dt(e, t, !1)) ? n : r;
        return 'number' == typeof d
          ? (e) => ('string' == typeof e ? e : d * e)
          : Array.isArray(d)
          ? (e) => ('string' == typeof e ? e : d[e])
          : 'function' == typeof d
          ? d
          : () => {};
      }
      function Lt(e) {
        return Ot(e, 'spacing', 8);
      }
      function jt(e, t) {
        if ('string' == typeof t || null == t) return t;
        const r = e(Math.abs(t));
        return t >= 0 ? r : 'number' == typeof r ? -r : `-${r}`;
      }
      function It(e, t, r, i) {
        if (-1 === t.indexOf(r)) return null;
        const n = (function (e, t) {
          return (r) => e.reduce((e, i) => ((e[i] = jt(t, r)), e), {});
        })(Tt(r), i);
        return Ct(e, e[r], n);
      }
      function Mt(e, t) {
        const r = Lt(e.theme);
        return Object.keys(e)
          .map((i) => It(e, t, i, r))
          .reduce(xt, {});
      }
      function Bt(e) {
        return Mt(e, Rt);
      }
      function Ut(e) {
        return Mt(e, _t);
      }
      function zt(e) {
        return Mt(e, Nt);
      }
      (Bt.propTypes = {}),
        (Bt.filterProps = Rt),
        (Ut.propTypes = {}),
        (Ut.filterProps = _t),
        (zt.propTypes = {}),
        (zt.filterProps = Nt);
      const Ht = function (...e) {
        const t = e.reduce(
            (e, t) => (
              t.filterProps.forEach((r) => {
                e[r] = t;
              }),
              e
            ),
            {}
          ),
          r = (e) =>
            Object.keys(e).reduce((r, i) => (t[i] ? xt(r, t[i](e)) : r), {});
        return (
          (r.propTypes = {}),
          (r.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
          r
        );
      };
      function Qt(e) {
        return 'number' != typeof e ? e : `${e}px solid`;
      }
      function $t(e, t) {
        return St({ prop: e, themeKey: 'borders', transform: t });
      }
      const Wt = $t('border', Qt),
        Vt = $t('borderTop', Qt),
        qt = $t('borderRight', Qt),
        Kt = $t('borderBottom', Qt),
        Yt = $t('borderLeft', Qt),
        Zt = $t('borderColor'),
        Xt = $t('borderTopColor'),
        Jt = $t('borderRightColor'),
        er = $t('borderBottomColor'),
        tr = $t('borderLeftColor'),
        rr = $t('outline', Qt),
        ir = $t('outlineColor'),
        nr = (e) => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            const t = Ot(e.theme, 'shape.borderRadius', 4),
              r = (e) => ({ borderRadius: jt(t, e) });
            return Ct(e, e.borderRadius, r);
          }
          return null;
        };
      (nr.propTypes = {}), (nr.filterProps = ['borderRadius']);
      Ht(Wt, Vt, qt, Kt, Yt, Zt, Xt, Jt, er, tr, nr, rr, ir);
      const dr = (e) => {
        if (void 0 !== e.gap && null !== e.gap) {
          const t = Ot(e.theme, 'spacing', 8),
            r = (e) => ({ gap: jt(t, e) });
          return Ct(e, e.gap, r);
        }
        return null;
      };
      (dr.propTypes = {}), (dr.filterProps = ['gap']);
      const sr = (e) => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = Ot(e.theme, 'spacing', 8),
            r = (e) => ({ columnGap: jt(t, e) });
          return Ct(e, e.columnGap, r);
        }
        return null;
      };
      (sr.propTypes = {}), (sr.filterProps = ['columnGap']);
      const lr = (e) => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = Ot(e.theme, 'spacing', 8),
            r = (e) => ({ rowGap: jt(t, e) });
          return Ct(e, e.rowGap, r);
        }
        return null;
      };
      (lr.propTypes = {}), (lr.filterProps = ['rowGap']);
      Ht(
        dr,
        sr,
        lr,
        St({ prop: 'gridColumn' }),
        St({ prop: 'gridRow' }),
        St({ prop: 'gridAutoFlow' }),
        St({ prop: 'gridAutoColumns' }),
        St({ prop: 'gridAutoRows' }),
        St({ prop: 'gridTemplateColumns' }),
        St({ prop: 'gridTemplateRows' }),
        St({ prop: 'gridTemplateAreas' }),
        St({ prop: 'gridArea' })
      );
      function ur(e, t) {
        return 'grey' === t ? t : e;
      }
      Ht(
        St({ prop: 'color', themeKey: 'palette', transform: ur }),
        St({
          prop: 'bgcolor',
          cssProperty: 'backgroundColor',
          themeKey: 'palette',
          transform: ur,
        }),
        St({ prop: 'backgroundColor', themeKey: 'palette', transform: ur })
      );
      function cr(e) {
        return e <= 1 && 0 !== e ? 100 * e + '%' : e;
      }
      const ar = St({ prop: 'width', transform: cr }),
        or = (e) => {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            const t = (t) => {
              var r, i;
              const n =
                (null == (r = e.theme) ||
                null == (r = r.breakpoints) ||
                null == (r = r.values)
                  ? void 0
                  : r[t]) || bt[t];
              return n
                ? 'px' !==
                  (null == (i = e.theme) || null == (i = i.breakpoints)
                    ? void 0
                    : i.unit)
                  ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
                  : { maxWidth: n }
                : { maxWidth: cr(t) };
            };
            return Ct(e, e.maxWidth, t);
          }
          return null;
        };
      or.filterProps = ['maxWidth'];
      const fr = St({ prop: 'minWidth', transform: cr }),
        hr = St({ prop: 'height', transform: cr }),
        pr = St({ prop: 'maxHeight', transform: cr }),
        yr = St({ prop: 'minHeight', transform: cr }),
        mr =
          (St({ prop: 'size', cssProperty: 'width', transform: cr }),
          St({ prop: 'size', cssProperty: 'height', transform: cr }),
          Ht(ar, or, fr, hr, pr, yr, St({ prop: 'boxSizing' })),
          {
            border: { themeKey: 'borders', transform: Qt },
            borderTop: { themeKey: 'borders', transform: Qt },
            borderRight: { themeKey: 'borders', transform: Qt },
            borderBottom: { themeKey: 'borders', transform: Qt },
            borderLeft: { themeKey: 'borders', transform: Qt },
            borderColor: { themeKey: 'palette' },
            borderTopColor: { themeKey: 'palette' },
            borderRightColor: { themeKey: 'palette' },
            borderBottomColor: { themeKey: 'palette' },
            borderLeftColor: { themeKey: 'palette' },
            outline: { themeKey: 'borders', transform: Qt },
            outlineColor: { themeKey: 'palette' },
            borderRadius: { themeKey: 'shape.borderRadius', style: nr },
            color: { themeKey: 'palette', transform: ur },
            bgcolor: {
              themeKey: 'palette',
              cssProperty: 'backgroundColor',
              transform: ur,
            },
            backgroundColor: { themeKey: 'palette', transform: ur },
            p: { style: Ut },
            pt: { style: Ut },
            pr: { style: Ut },
            pb: { style: Ut },
            pl: { style: Ut },
            px: { style: Ut },
            py: { style: Ut },
            padding: { style: Ut },
            paddingTop: { style: Ut },
            paddingRight: { style: Ut },
            paddingBottom: { style: Ut },
            paddingLeft: { style: Ut },
            paddingX: { style: Ut },
            paddingY: { style: Ut },
            paddingInline: { style: Ut },
            paddingInlineStart: { style: Ut },
            paddingInlineEnd: { style: Ut },
            paddingBlock: { style: Ut },
            paddingBlockStart: { style: Ut },
            paddingBlockEnd: { style: Ut },
            m: { style: Bt },
            mt: { style: Bt },
            mr: { style: Bt },
            mb: { style: Bt },
            ml: { style: Bt },
            mx: { style: Bt },
            my: { style: Bt },
            margin: { style: Bt },
            marginTop: { style: Bt },
            marginRight: { style: Bt },
            marginBottom: { style: Bt },
            marginLeft: { style: Bt },
            marginX: { style: Bt },
            marginY: { style: Bt },
            marginInline: { style: Bt },
            marginInlineStart: { style: Bt },
            marginInlineEnd: { style: Bt },
            marginBlock: { style: Bt },
            marginBlockStart: { style: Bt },
            marginBlockEnd: { style: Bt },
            displayPrint: {
              cssProperty: !1,
              transform: (e) => ({ '@media print': { display: e } }),
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: { style: dr },
            rowGap: { style: lr },
            columnGap: { style: sr },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: { themeKey: 'zIndex' },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: { themeKey: 'shadows' },
            width: { transform: cr },
            maxWidth: { style: or },
            minWidth: { transform: cr },
            height: { transform: cr },
            maxHeight: { transform: cr },
            minHeight: { transform: cr },
            boxSizing: {},
            fontFamily: { themeKey: 'typography' },
            fontSize: { themeKey: 'typography' },
            fontStyle: { themeKey: 'typography' },
            fontWeight: { themeKey: 'typography' },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: { cssProperty: !1, themeKey: 'typography' },
          });
      const gr = (function () {
        function e(e, t, r, i) {
          const n = { [e]: t, theme: r },
            d = i[e];
          if (!d) return { [e]: t };
          const { cssProperty: s = e, themeKey: l, transform: u, style: c } = d;
          if (null == t) return null;
          if ('typography' === l && 'inherit' === t) return { [e]: t };
          const a = Dt(r, l) || {};
          if (c) return c(n);
          return Ct(n, t, (t) => {
            let r = Gt(a, u, t);
            return (
              t === r &&
                'string' == typeof t &&
                (r = Gt(a, u, `${e}${'default' === t ? '' : wt(t)}`, t)),
              !1 === s ? r : { [s]: r }
            );
          });
        }
        return function t(r) {
          var i;
          const { sx: n, theme: d = {} } = r || {};
          if (!n) return null;
          const s = null != (i = d.unstable_sxConfig) ? i : mr;
          function l(r) {
            let i = r;
            if ('function' == typeof r) i = r(d);
            else if ('object' != typeof r) return r;
            if (!i) return null;
            const n = Et(d.breakpoints),
              l = Object.keys(n);
            let u = n;
            return (
              Object.keys(i).forEach((r) => {
                const n =
                  ((l = i[r]), (c = d), 'function' == typeof l ? l(c) : l);
                var l, c;
                if (null != n)
                  if ('object' == typeof n)
                    if (s[r]) u = xt(u, e(r, n, d, s));
                    else {
                      const e = Ct({ theme: d }, n, (e) => ({ [r]: e }));
                      !(function (...e) {
                        const t = e.reduce(
                            (e, t) => e.concat(Object.keys(t)),
                            []
                          ),
                          r = new Set(t);
                        return e.every((e) => r.size === Object.keys(e).length);
                      })(e, n)
                        ? (u = xt(u, e))
                        : (u[r] = t({ sx: n, theme: d }));
                    }
                  else u = xt(u, e(r, n, d, s));
              }),
              At(l, u)
            );
          }
          return Array.isArray(n) ? n.map(l) : l(n);
        };
      })();
      gr.filterProps = ['sx'];
      const br = gr;
      function vr(e, t) {
        const r = this;
        if (r.vars && 'function' == typeof r.getColorSchemeSelector) {
          return {
            [r
              .getColorSchemeSelector(e)
              .replace(/(\[[^\]]+\])/, '*:where($1)')]: t,
          };
        }
        return r.palette.mode === e ? t : {};
      }
      const Cr = ['breakpoints', 'palette', 'spacing', 'shape'];
      const Er = function (e = {}, ...t) {
        const {
            breakpoints: r = {},
            palette: i = {},
            spacing: n,
            shape: d = {},
          } = e,
          s = at(e, Cr),
          l = (function (e) {
            const {
                values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
                unit: r = 'px',
                step: i = 5,
              } = e,
              n = at(e, yt),
              d = mt(t),
              s = Object.keys(d);
            function l(e) {
              return `@media (min-width:${
                'number' == typeof t[e] ? t[e] : e
              }${r})`;
            }
            function u(e) {
              return `@media (max-width:${
                ('number' == typeof t[e] ? t[e] : e) - i / 100
              }${r})`;
            }
            function c(e, n) {
              const d = s.indexOf(n);
              return `@media (min-width:${
                'number' == typeof t[e] ? t[e] : e
              }${r}) and (max-width:${
                (-1 !== d && 'number' == typeof t[s[d]] ? t[s[d]] : n) - i / 100
              }${r})`;
            }
            return (0, ct.A)(
              {
                keys: s,
                values: d,
                up: l,
                down: u,
                between: c,
                only: function (e) {
                  return s.indexOf(e) + 1 < s.length
                    ? c(e, s[s.indexOf(e) + 1])
                    : l(e);
                },
                not: function (e) {
                  const t = s.indexOf(e);
                  return 0 === t
                    ? l(s[1])
                    : t === s.length - 1
                    ? u(s[t])
                    : c(e, s[s.indexOf(e) + 1]).replace(
                        '@media',
                        '@media not all and'
                      );
                },
                unit: r,
              },
              n
            );
          })(r),
          u = (function (e = 8) {
            if (e.mui) return e;
            const t = Lt({ spacing: e }),
              r = (...e) =>
                (0 === e.length ? [1] : e)
                  .map((e) => {
                    const r = t(e);
                    return 'number' == typeof r ? `${r}px` : r;
                  })
                  .join(' ');
            return (r.mui = !0), r;
          })(n);
        let c = pt(
          {
            breakpoints: l,
            direction: 'ltr',
            components: {},
            palette: (0, ct.A)({ mode: 'light' }, i),
            spacing: u,
            shape: (0, ct.A)({}, gt, d),
          },
          s
        );
        return (
          (c.applyStyles = vr),
          (c = t.reduce((e, t) => pt(e, t), c)),
          (c.unstable_sxConfig = (0, ct.A)(
            {},
            mr,
            null == s ? void 0 : s.unstable_sxConfig
          )),
          (c.unstable_sx = function (e) {
            return br({ sx: e, theme: this });
          }),
          c
        );
      };
      function Ar(e, t) {
        return (0, ct.A)(
          {
            toolbar: {
              minHeight: 56,
              [e.up('xs')]: {
                '@media (orientation: landscape)': { minHeight: 48 },
              },
              [e.up('sm')]: { minHeight: 64 },
            },
          },
          t
        );
      }
      const wr = function (
        e,
        t = Number.MIN_SAFE_INTEGER,
        r = Number.MAX_SAFE_INTEGER
      ) {
        return Math.max(t, Math.min(e, r));
      };
      function Dr(e, t = 0, r = 1) {
        return wr(e, t, r);
      }
      function Gr(e) {
        if (e.type) return e;
        if ('#' === e.charAt(0))
          return Gr(
            (function (e) {
              e = e.slice(1);
              const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
              let r = e.match(t);
              return (
                r && 1 === r[0].length && (r = r.map((e) => e + e)),
                r
                  ? `rgb${4 === r.length ? 'a' : ''}(${r
                      .map((e, t) =>
                        t < 3
                          ? parseInt(e, 16)
                          : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                      )
                      .join(', ')})`
                  : ''
              );
            })(e)
          );
        const t = e.indexOf('('),
          r = e.substring(0, t);
        if (-1 === ['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(r))
          throw new Error(ot(9, e));
        let i,
          n = e.substring(t + 1, e.length - 1);
        if ('color' === r) {
          if (
            ((n = n.split(' ')),
            (i = n.shift()),
            4 === n.length && '/' === n[3].charAt(0) && (n[3] = n[3].slice(1)),
            -1 ===
              [
                'srgb',
                'display-p3',
                'a98-rgb',
                'prophoto-rgb',
                'rec-2020',
              ].indexOf(i))
          )
            throw new Error(ot(10, i));
        } else n = n.split(',');
        return (
          (n = n.map((e) => parseFloat(e))),
          { type: r, values: n, colorSpace: i }
        );
      }
      function Sr(e) {
        const { type: t, colorSpace: r } = e;
        let { values: i } = e;
        return (
          -1 !== t.indexOf('rgb')
            ? (i = i.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : -1 !== t.indexOf('hsl') &&
              ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
          (i =
            -1 !== t.indexOf('color')
              ? `${r} ${i.join(' ')}`
              : `${i.join(', ')}`),
          `${t}(${i})`
        );
      }
      function xr(e) {
        let t =
          'hsl' === (e = Gr(e)).type || 'hsla' === e.type
            ? Gr(
                (function (e) {
                  e = Gr(e);
                  const { values: t } = e,
                    r = t[0],
                    i = t[1] / 100,
                    n = t[2] / 100,
                    d = i * Math.min(n, 1 - n),
                    s = (e, t = (e + r / 30) % 12) =>
                      n - d * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                  let l = 'rgb';
                  const u = [
                    Math.round(255 * s(0)),
                    Math.round(255 * s(8)),
                    Math.round(255 * s(4)),
                  ];
                  return (
                    'hsla' === e.type && ((l += 'a'), u.push(t[3])),
                    Sr({ type: l, values: u })
                  );
                })(e)
              ).values
            : e.values;
        return (
          (t = t.map(
            (t) => (
              'color' !== e.type && (t /= 255),
              t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
            )
          )),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        );
      }
      function kr(e, t) {
        if (((e = Gr(e)), (t = Dr(t)), -1 !== e.type.indexOf('hsl')))
          e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf('rgb') || -1 !== e.type.indexOf('color'))
          for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
        return Sr(e);
      }
      function Fr(e, t) {
        if (((e = Gr(e)), (t = Dr(t)), -1 !== e.type.indexOf('hsl')))
          e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf('rgb'))
          for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
        else if (-1 !== e.type.indexOf('color'))
          for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
        return Sr(e);
      }
      const Pr = { black: '#000', white: '#fff' },
        Tr = {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          A100: '#f5f5f5',
          A200: '#eeeeee',
          A400: '#bdbdbd',
          A700: '#616161',
        },
        Rr = {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
          A100: '#ea80fc',
          A200: '#e040fb',
          A400: '#d500f9',
          A700: '#aa00ff',
        },
        _r = {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          A100: '#ff8a80',
          A200: '#ff5252',
          A400: '#ff1744',
          A700: '#d50000',
        },
        Nr = {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
          A100: '#ffd180',
          A200: '#ffab40',
          A400: '#ff9100',
          A700: '#ff6d00',
        },
        Or = {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
          A100: '#82b1ff',
          A200: '#448aff',
          A400: '#2979ff',
          A700: '#2962ff',
        },
        Lr = {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
          A100: '#80d8ff',
          A200: '#40c4ff',
          A400: '#00b0ff',
          A700: '#0091ea',
        },
        jr = {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          A100: '#b9f6ca',
          A200: '#69f0ae',
          A400: '#00e676',
          A700: '#00c853',
        },
        Ir = ['mode', 'contrastThreshold', 'tonalOffset'],
        Mr = {
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: { paper: Pr.white, default: Pr.white },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        Br = {
          text: {
            primary: Pr.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
          },
          divider: 'rgba(255, 255, 255, 0.12)',
          background: { paper: '#121212', default: '#121212' },
          action: {
            active: Pr.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      function Ur(e, t, r, i) {
        const n = i.light || i,
          d = i.dark || 1.5 * i;
        e[t] ||
          (e.hasOwnProperty(r)
            ? (e[t] = e[r])
            : 'light' === t
            ? (e.light = Fr(e.main, n))
            : 'dark' === t && (e.dark = kr(e.main, d)));
      }
      function zr(e) {
        const {
            mode: t = 'light',
            contrastThreshold: r = 3,
            tonalOffset: i = 0.2,
          } = e,
          n = at(e, Ir),
          d =
            e.primary ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: Or[200], light: Or[50], dark: Or[400] }
                : { main: Or[700], light: Or[400], dark: Or[800] };
            })(t),
          s =
            e.secondary ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: Rr[200], light: Rr[50], dark: Rr[400] }
                : { main: Rr[500], light: Rr[300], dark: Rr[700] };
            })(t),
          l =
            e.error ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: _r[500], light: _r[300], dark: _r[700] }
                : { main: _r[700], light: _r[400], dark: _r[800] };
            })(t),
          u =
            e.info ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: Lr[400], light: Lr[300], dark: Lr[700] }
                : { main: Lr[700], light: Lr[500], dark: Lr[900] };
            })(t),
          c =
            e.success ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: jr[400], light: jr[300], dark: jr[700] }
                : { main: jr[800], light: jr[500], dark: jr[900] };
            })(t),
          a =
            e.warning ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: Nr[400], light: Nr[300], dark: Nr[700] }
                : { main: '#ed6c02', light: Nr[500], dark: Nr[900] };
            })(t);
        function o(e) {
          const t =
            (function (e, t) {
              const r = xr(e),
                i = xr(t);
              return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
            })(e, Br.text.primary) >= r
              ? Br.text.primary
              : Mr.text.primary;
          return t;
        }
        const f = ({
            color: e,
            name: t,
            mainShade: r = 500,
            lightShade: n = 300,
            darkShade: d = 700,
          }) => {
            if (
              (!(e = (0, ct.A)({}, e)).main && e[r] && (e.main = e[r]),
              !e.hasOwnProperty('main'))
            )
              throw new Error(ot(11, t ? ` (${t})` : '', r));
            if ('string' != typeof e.main)
              throw new Error(
                ot(12, t ? ` (${t})` : '', JSON.stringify(e.main))
              );
            return (
              Ur(e, 'light', n, i),
              Ur(e, 'dark', d, i),
              e.contrastText || (e.contrastText = o(e.main)),
              e
            );
          },
          h = { dark: Br, light: Mr };
        return pt(
          (0, ct.A)(
            {
              common: (0, ct.A)({}, Pr),
              mode: t,
              primary: f({ color: d, name: 'primary' }),
              secondary: f({
                color: s,
                name: 'secondary',
                mainShade: 'A400',
                lightShade: 'A200',
                darkShade: 'A700',
              }),
              error: f({ color: l, name: 'error' }),
              warning: f({ color: a, name: 'warning' }),
              info: f({ color: u, name: 'info' }),
              success: f({ color: c, name: 'success' }),
              grey: Tr,
              contrastThreshold: r,
              getContrastText: o,
              augmentColor: f,
              tonalOffset: i,
            },
            h[t]
          ),
          n
        );
      }
      const Hr = [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ];
      const Qr = { textTransform: 'uppercase' },
        $r = '"Roboto", "Helvetica", "Arial", sans-serif';
      function Wr(e, t) {
        const r = 'function' == typeof t ? t(e) : t,
          {
            fontFamily: i = $r,
            fontSize: n = 14,
            fontWeightLight: d = 300,
            fontWeightRegular: s = 400,
            fontWeightMedium: l = 500,
            fontWeightBold: u = 700,
            htmlFontSize: c = 16,
            allVariants: a,
            pxToRem: o,
          } = r,
          f = at(r, Hr);
        const h = n / 14,
          p = o || ((e) => (e / c) * h + 'rem'),
          y = (e, t, r, n, d) => {
            return (0, ct.A)(
              { fontFamily: i, fontWeight: e, fontSize: p(t), lineHeight: r },
              i === $r
                ? {
                    letterSpacing:
                      ((s = n / t), Math.round(1e5 * s) / 1e5) + 'em',
                  }
                : {},
              d,
              a
            );
            var s;
          },
          m = {
            h1: y(d, 96, 1.167, -1.5),
            h2: y(d, 60, 1.2, -0.5),
            h3: y(s, 48, 1.167, 0),
            h4: y(s, 34, 1.235, 0.25),
            h5: y(s, 24, 1.334, 0),
            h6: y(l, 20, 1.6, 0.15),
            subtitle1: y(s, 16, 1.75, 0.15),
            subtitle2: y(l, 14, 1.57, 0.1),
            body1: y(s, 16, 1.5, 0.15),
            body2: y(s, 14, 1.43, 0.15),
            button: y(l, 14, 1.75, 0.4, Qr),
            caption: y(s, 12, 1.66, 0.4),
            overline: y(s, 12, 2.66, 1, Qr),
            inherit: {
              fontFamily: 'inherit',
              fontWeight: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit',
              letterSpacing: 'inherit',
            },
          };
        return pt(
          (0, ct.A)(
            {
              htmlFontSize: c,
              pxToRem: p,
              fontFamily: i,
              fontSize: n,
              fontWeightLight: d,
              fontWeightRegular: s,
              fontWeightMedium: l,
              fontWeightBold: u,
            },
            m
          ),
          f,
          { clone: !1 }
        );
      }
      function Vr(...e) {
        return [
          `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
          `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
          `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`,
        ].join(',');
      }
      const qr = [
          'none',
          Vr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          Vr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          Vr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          Vr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          Vr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          Vr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          Vr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          Vr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          Vr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          Vr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          Vr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          Vr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          Vr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          Vr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          Vr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          Vr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          Vr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          Vr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          Vr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          Vr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          Vr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          Vr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          Vr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          Vr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        Kr = ['duration', 'easing', 'delay'],
        Yr = {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        Zr = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function Xr(e) {
        return `${Math.round(e)}ms`;
      }
      function Jr(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
      }
      function ei(e) {
        const t = (0, ct.A)({}, Yr, e.easing),
          r = (0, ct.A)({}, Zr, e.duration);
        return (0, ct.A)(
          {
            getAutoHeightDuration: Jr,
            create: (e = ['all'], i = {}) => {
              const {
                duration: n = r.standard,
                easing: d = t.easeInOut,
                delay: s = 0,
              } = i;
              at(i, Kr);
              return (Array.isArray(e) ? e : [e])
                .map(
                  (e) =>
                    `${e} ${'string' == typeof n ? n : Xr(n)} ${d} ${
                      'string' == typeof s ? s : Xr(s)
                    }`
                )
                .join(',');
            },
          },
          e,
          { easing: t, duration: r }
        );
      }
      const ti = {
          mobileStepper: 1e3,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        ri = [
          'breakpoints',
          'mixins',
          'spacing',
          'palette',
          'transitions',
          'typography',
          'shape',
        ];
      function ii(e = {}, ...t) {
        const {
            mixins: r = {},
            palette: i = {},
            transitions: n = {},
            typography: d = {},
          } = e,
          s = at(e, ri);
        if (e.vars) throw new Error(ot(18));
        const l = zr(i),
          u = Er(e);
        let c = pt(u, {
          mixins: Ar(u.breakpoints, r),
          palette: l,
          shadows: qr.slice(),
          typography: Wr(l, d),
          transitions: ei(n),
          zIndex: (0, ct.A)({}, ti),
        });
        return (
          (c = pt(c, s)),
          (c = t.reduce((e, t) => pt(e, t), c)),
          (c.unstable_sxConfig = (0, ct.A)(
            {},
            mr,
            null == s ? void 0 : s.unstable_sxConfig
          )),
          (c.unstable_sx = function (e) {
            return br({ sx: e, theme: this });
          }),
          c
        );
      }
      const ni = ii;
      const di = d.createContext(null);
      function si() {
        return d.useContext(di);
      }
      const li =
        'function' == typeof Symbol && Symbol.for
          ? Symbol.for('mui.nested')
          : '__THEME_NESTED__';
      const ui = function (e) {
        const { children: t, theme: r } = e,
          i = si(),
          n = d.useMemo(() => {
            const e =
              null === i
                ? r
                : (function (e, t) {
                    if ('function' == typeof t) return t(e);
                    return (0, ct.A)({}, e, t);
                  })(i, r);
            return null != e && (e[li] = null !== i), e;
          }, [r, i]);
        return (0, De.jsx)(di.Provider, { value: n, children: t });
      };
      var ci = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var r;
              (r =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, r),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement('style');
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  r.insertRule(e, r.cssRules.length);
                } catch (i) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        ai = Math.abs,
        oi = String.fromCharCode,
        fi = Object.assign;
      function hi(e) {
        return e.trim();
      }
      function pi(e, t, r) {
        return e.replace(t, r);
      }
      function yi(e, t) {
        return e.indexOf(t);
      }
      function mi(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function gi(e, t, r) {
        return e.slice(t, r);
      }
      function bi(e) {
        return e.length;
      }
      function vi(e) {
        return e.length;
      }
      function Ci(e, t) {
        return t.push(e), e;
      }
      var Ei = 1,
        Ai = 1,
        wi = 0,
        Di = 0,
        Gi = 0,
        Si = '';
      function xi(e, t, r, i, n, d, s) {
        return {
          value: e,
          root: t,
          parent: r,
          type: i,
          props: n,
          children: d,
          line: Ei,
          column: Ai,
          length: s,
          return: '',
        };
      }
      function ki(e, t) {
        return fi(
          xi('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function Fi() {
        return (
          (Gi = Di > 0 ? mi(Si, --Di) : 0),
          Ai--,
          10 === Gi && ((Ai = 1), Ei--),
          Gi
        );
      }
      function Pi() {
        return (
          (Gi = Di < wi ? mi(Si, Di++) : 0),
          Ai++,
          10 === Gi && ((Ai = 1), Ei++),
          Gi
        );
      }
      function Ti() {
        return mi(Si, Di);
      }
      function Ri() {
        return Di;
      }
      function _i(e, t) {
        return gi(Si, e, t);
      }
      function Ni(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Oi(e) {
        return (Ei = Ai = 1), (wi = bi((Si = e))), (Di = 0), [];
      }
      function Li(e) {
        return (Si = ''), e;
      }
      function ji(e) {
        return hi(_i(Di - 1, Bi(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Ii(e) {
        for (; (Gi = Ti()) && Gi < 33; ) Pi();
        return Ni(e) > 2 || Ni(Gi) > 3 ? '' : ' ';
      }
      function Mi(e, t) {
        for (
          ;
          --t &&
          Pi() &&
          !(
            Gi < 48 ||
            Gi > 102 ||
            (Gi > 57 && Gi < 65) ||
            (Gi > 70 && Gi < 97)
          );

        );
        return _i(e, Ri() + (t < 6 && 32 == Ti() && 32 == Pi()));
      }
      function Bi(e) {
        for (; Pi(); )
          switch (Gi) {
            case e:
              return Di;
            case 34:
            case 39:
              34 !== e && 39 !== e && Bi(Gi);
              break;
            case 40:
              41 === e && Bi(e);
              break;
            case 92:
              Pi();
          }
        return Di;
      }
      function Ui(e, t) {
        for (; Pi() && e + Gi !== 57 && (e + Gi !== 84 || 47 !== Ti()); );
        return '/*' + _i(t, Di - 1) + '*' + oi(47 === e ? e : Pi());
      }
      function zi(e) {
        for (; !Ni(Ti()); ) Pi();
        return _i(e, Di);
      }
      var Hi = '-ms-',
        Qi = '-moz-',
        $i = '-webkit-',
        Wi = 'comm',
        Vi = 'rule',
        qi = 'decl',
        Ki = '@keyframes';
      function Yi(e, t) {
        for (var r = '', i = vi(e), n = 0; n < i; n++)
          r += t(e[n], n, e, t) || '';
        return r;
      }
      function Zi(e, t, r, i) {
        switch (e.type) {
          case '@layer':
            if (e.children.length) break;
          case '@import':
          case qi:
            return (e.return = e.return || e.value);
          case Wi:
            return '';
          case Ki:
            return (e.return = e.value + '{' + Yi(e.children, i) + '}');
          case Vi:
            e.value = e.props.join(',');
        }
        return bi((r = Yi(e.children, i)))
          ? (e.return = e.value + '{' + r + '}')
          : '';
      }
      function Xi(e) {
        return Li(Ji('', null, null, null, [''], (e = Oi(e)), 0, [0], e));
      }
      function Ji(e, t, r, i, n, d, s, l, u) {
        for (
          var c = 0,
            a = 0,
            o = s,
            f = 0,
            h = 0,
            p = 0,
            y = 1,
            m = 1,
            g = 1,
            b = 0,
            v = '',
            C = n,
            E = d,
            A = i,
            w = v;
          m;

        )
          switch (((p = b), (b = Pi()))) {
            case 40:
              if (108 != p && 58 == mi(w, o - 1)) {
                -1 != yi((w += pi(ji(b), '&', '&\f')), '&\f') && (g = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              w += ji(b);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              w += Ii(p);
              break;
            case 92:
              w += Mi(Ri() - 1, 7);
              continue;
            case 47:
              switch (Ti()) {
                case 42:
                case 47:
                  Ci(tn(Ui(Pi(), Ri()), t, r), u);
                  break;
                default:
                  w += '/';
              }
              break;
            case 123 * y:
              l[c++] = bi(w) * g;
            case 125 * y:
            case 59:
            case 0:
              switch (b) {
                case 0:
                case 125:
                  m = 0;
                case 59 + a:
                  -1 == g && (w = pi(w, /\f/g, '')),
                    h > 0 &&
                      bi(w) - o &&
                      Ci(
                        h > 32
                          ? rn(w + ';', i, r, o - 1)
                          : rn(pi(w, ' ', '') + ';', i, r, o - 2),
                        u
                      );
                  break;
                case 59:
                  w += ';';
                default:
                  if (
                    (Ci(
                      (A = en(w, t, r, c, a, n, l, v, (C = []), (E = []), o)),
                      d
                    ),
                    123 === b)
                  )
                    if (0 === a) Ji(w, t, A, A, C, d, o, l, E);
                    else
                      switch (99 === f && 110 === mi(w, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Ji(
                            e,
                            A,
                            A,
                            i &&
                              Ci(en(e, A, A, 0, 0, n, l, v, n, (C = []), o), E),
                            n,
                            E,
                            o,
                            l,
                            i ? C : E
                          );
                          break;
                        default:
                          Ji(w, A, A, A, [''], E, 0, l, E);
                      }
              }
              (c = a = h = 0), (y = g = 1), (v = w = ''), (o = s);
              break;
            case 58:
              (o = 1 + bi(w)), (h = p);
            default:
              if (y < 1)
                if (123 == b) --y;
                else if (125 == b && 0 == y++ && 125 == Fi()) continue;
              switch (((w += oi(b)), b * y)) {
                case 38:
                  g = a > 0 ? 1 : ((w += '\f'), -1);
                  break;
                case 44:
                  (l[c++] = (bi(w) - 1) * g), (g = 1);
                  break;
                case 64:
                  45 === Ti() && (w += ji(Pi())),
                    (f = Ti()),
                    (a = o = bi((v = w += zi(Ri())))),
                    b++;
                  break;
                case 45:
                  45 === p && 2 == bi(w) && (y = 0);
              }
          }
        return d;
      }
      function en(e, t, r, i, n, d, s, l, u, c, a) {
        for (
          var o = n - 1, f = 0 === n ? d : [''], h = vi(f), p = 0, y = 0, m = 0;
          p < i;
          ++p
        )
          for (
            var g = 0, b = gi(e, o + 1, (o = ai((y = s[p])))), v = e;
            g < h;
            ++g
          )
            (v = hi(y > 0 ? f[g] + ' ' + b : pi(b, /&\f/g, f[g]))) &&
              (u[m++] = v);
        return xi(e, t, r, 0 === n ? Vi : l, u, c, a);
      }
      function tn(e, t, r) {
        return xi(e, t, r, Wi, oi(Gi), gi(e, 2, -2), 0);
      }
      function rn(e, t, r, i) {
        return xi(e, t, r, qi, gi(e, 0, i), gi(e, i + 1, -1), i);
      }
      var nn = function (e, t, r) {
          for (
            var i = 0, n = 0;
            (i = n), (n = Ti()), 38 === i && 12 === n && (t[r] = 1), !Ni(n);

          )
            Pi();
          return _i(e, Di);
        },
        dn = function (e, t) {
          return Li(
            (function (e, t) {
              var r = -1,
                i = 44;
              do {
                switch (Ni(i)) {
                  case 0:
                    38 === i && 12 === Ti() && (t[r] = 1),
                      (e[r] += nn(Di - 1, t, r));
                    break;
                  case 2:
                    e[r] += ji(i);
                    break;
                  case 4:
                    if (44 === i) {
                      (e[++r] = 58 === Ti() ? '&\f' : ''), (t[r] = e[r].length);
                      break;
                    }
                  default:
                    e[r] += oi(i);
                }
              } while ((i = Pi()));
              return e;
            })(Oi(e), t)
          );
        },
        sn = new WeakMap(),
        ln = function (e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                r = e.parent,
                i = e.column === r.column && e.line === r.line;
              'rule' !== r.type;

            )
              if (!(r = r.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || sn.get(r)) &&
              !i
            ) {
              sn.set(e, !0);
              for (
                var n = [], d = dn(t, n), s = r.props, l = 0, u = 0;
                l < d.length;
                l++
              )
                for (var c = 0; c < s.length; c++, u++)
                  e.props[u] = n[l]
                    ? d[l].replace(/&\f/g, s[c])
                    : s[c] + ' ' + d[l];
            }
          }
        },
        un = function (e) {
          if ('decl' === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''));
          }
        };
      function cn(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ mi(e, 0)
              ? (((((((t << 2) ^ mi(e, 0)) << 2) ^ mi(e, 1)) << 2) ^
                  mi(e, 2)) <<
                  2) ^
                  mi(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return $i + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return $i + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return $i + e + Qi + e + Hi + e + e;
          case 6828:
          case 4268:
            return $i + e + Hi + e + e;
          case 6165:
            return $i + e + Hi + 'flex-' + e + e;
          case 5187:
            return (
              $i +
              e +
              pi(e, /(\w+).+(:[^]+)/, $i + 'box-$1$2' + Hi + 'flex-$1$2') +
              e
            );
          case 5443:
            return $i + e + Hi + 'flex-item-' + pi(e, /flex-|-self/, '') + e;
          case 4675:
            return (
              $i +
              e +
              Hi +
              'flex-line-pack' +
              pi(e, /align-content|flex-|-self/, '') +
              e
            );
          case 5548:
            return $i + e + Hi + pi(e, 'shrink', 'negative') + e;
          case 5292:
            return $i + e + Hi + pi(e, 'basis', 'preferred-size') + e;
          case 6060:
            return (
              $i +
              'box-' +
              pi(e, '-grow', '') +
              $i +
              e +
              Hi +
              pi(e, 'grow', 'positive') +
              e
            );
          case 4554:
            return $i + pi(e, /([^-])(transform)/g, '$1' + $i + '$2') + e;
          case 6187:
            return (
              pi(
                pi(pi(e, /(zoom-|grab)/, $i + '$1'), /(image-set)/, $i + '$1'),
                e,
                ''
              ) + e
            );
          case 5495:
          case 3959:
            return pi(e, /(image-set\([^]*)/, $i + '$1$`$1');
          case 4968:
            return (
              pi(
                pi(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  $i + 'box-pack:$3' + Hi + 'flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              $i +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return pi(e, /(.+)-inline(.+)/, $i + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (bi(e) - 1 - t > 6)
              switch (mi(e, t + 1)) {
                case 109:
                  if (45 !== mi(e, t + 4)) break;
                case 102:
                  return (
                    pi(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' +
                        $i +
                        '$2-$3$1' +
                        Qi +
                        (108 == mi(e, t + 3) ? '$3' : '$2-$3')
                    ) + e
                  );
                case 115:
                  return ~yi(e, 'stretch')
                    ? cn(pi(e, 'stretch', 'fill-available'), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== mi(e, t + 1)) break;
          case 6444:
            switch (mi(e, bi(e) - 3 - (~yi(e, '!important') && 10))) {
              case 107:
                return pi(e, ':', ':' + $i) + e;
              case 101:
                return (
                  pi(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      $i +
                      (45 === mi(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      $i +
                      '$2$3$1' +
                      Hi +
                      '$2box$3'
                  ) + e
                );
            }
            break;
          case 5936:
            switch (mi(e, t + 11)) {
              case 114:
                return $i + e + Hi + pi(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return $i + e + Hi + pi(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return $i + e + Hi + pi(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
            return $i + e + Hi + e + e;
        }
        return e;
      }
      var an = [
          function (e, t, r, i) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case qi:
                  e.return = cn(e.value, e.length);
                  break;
                case Ki:
                  return Yi([ki(e, { value: pi(e.value, '@', '@' + $i) })], i);
                case Vi:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join('');
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return Yi(
                            [
                              ki(e, {
                                props: [pi(t, /:(read-\w+)/, ':-moz-$1')],
                              }),
                            ],
                            i
                          );
                        case '::placeholder':
                          return Yi(
                            [
                              ki(e, {
                                props: [
                                  pi(t, /:(plac\w+)/, ':' + $i + 'input-$1'),
                                ],
                              }),
                              ki(e, {
                                props: [pi(t, /:(plac\w+)/, ':-moz-$1')],
                              }),
                              ki(e, {
                                props: [pi(t, /:(plac\w+)/, Hi + 'input-$1')],
                              }),
                            ],
                            i
                          );
                      }
                      return '';
                    });
              }
          },
        ],
        on = function (e) {
          var t = e.key;
          if ('css' === t) {
            var r = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            );
            Array.prototype.forEach.call(r, function (e) {
              -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(e), e.setAttribute('data-s', ''));
            });
          }
          var i = e.stylisPlugins || an;
          var n,
            d,
            s = {},
            l = [];
          (n = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute('data-emotion').split(' '), r = 1;
                  r < t.length;
                  r++
                )
                  s[t[r]] = !0;
                l.push(e);
              }
            );
          var u,
            c,
            a,
            o,
            f = [
              Zi,
              ((o = function (e) {
                u.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && o(e));
              }),
            ],
            h =
              ((c = [ln, un].concat(i, f)),
              (a = vi(c)),
              function (e, t, r, i) {
                for (var n = '', d = 0; d < a; d++) n += c[d](e, t, r, i) || '';
                return n;
              });
          d = function (e, t, r, i) {
            (u = r),
              Yi(Xi(e ? e + '{' + t.styles + '}' : t.styles), h),
              i && (p.inserted[t.name] = !0);
          };
          var p = {
            key: t,
            sheet: new ci({
              key: t,
              container: n,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: d,
          };
          return p.sheet.hydrate(l), p;
        };
      var fn = !!s.useInsertionEffect && s.useInsertionEffect,
        hn =
          (fn || d.useLayoutEffect,
          d.createContext(
            'undefined' != typeof HTMLElement ? on({ key: 'css' }) : null
          ));
      hn.Provider;
      var pn = d.createContext({});
      const yn = function (e = null) {
          const t = d.useContext(pn);
          return t && ((r = t), 0 !== Object.keys(r).length) ? t : e;
          var r;
        },
        mn = {};
      function gn(e, t, r, i = !1) {
        return d.useMemo(() => {
          const n = (e && t[e]) || t;
          if ('function' == typeof r) {
            const d = r(n),
              s = e ? (0, ct.A)({}, t, { [e]: d }) : d;
            return i ? () => s : s;
          }
          return e ? (0, ct.A)({}, t, { [e]: r }) : (0, ct.A)({}, t, r);
        }, [e, t, r, i]);
      }
      const bn = function (e) {
          const { children: t, theme: r, themeId: i } = e,
            n = yn(mn),
            d = si() || mn,
            s = gn(i, n, r),
            l = gn(i, d, r, !0);
          return (0, De.jsx)(ui, {
            theme: l,
            children: (0, De.jsx)(pn.Provider, { value: s, children: t }),
          });
        },
        vn = '$$material',
        Cn = ['theme'];
      function En(e) {
        let { theme: t } = e,
          r = at(e, Cn);
        const i = t[vn];
        return (0, De.jsx)(
          bn,
          (0, ct.A)({}, r, { themeId: i ? vn : void 0, theme: i || t })
        );
      }
      const An = new Me.QueryClient(),
        wn = ni({
          palette: {
            primary: { main: '#011627' },
            secondary: { main: '#fb853c' },
          },
          typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        });
      n.H(document.getElementById('root')).render(
        (0, De.jsx)(En, {
          theme: wn,
          children: (0, De.jsx)(Me.QueryClientProvider, {
            client: An,
            children: (0, De.jsx)(be, { children: (0, De.jsx)(ut, {}) }),
          }),
        })
      );
    },
    124: (e, t, r) => {
      (t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            t[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const r = 'color: ' + this.color;
        t.splice(1, 0, r, 'color: inherit');
        let i = 0,
          n = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e) => {
          '%%' !== e && (i++, '%c' === e && (n = i));
        }),
          t.splice(n, 0, r);
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
          } catch (r) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem('debug');
          } catch (r) {}
          !e &&
            'undefined' != typeof process &&
            'env' in process &&
            (e = {
              NX_REACT_APP_TAB_URL: 'http://localhost:3000/api',
              NX_NEXT_PUBLIC_APP_TAB_URL: 'http://localhost:3000/api',
              NX_CLI_SET: 'true',
              NX_LOAD_DOT_ENV_FILES: 'true',
              NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS:
                '["/home/saacostam/Development/SaaS/fuzzy-noteable/node_modules/nx-cloud/node_modules","/home/saacostam/Development/SaaS/fuzzy-noteable/node_modules"]',
              NX_INVOKED_BY_RUNNER: 'true',
              NX_WORKSPACE_ROOT:
                '/home/saacostam/Development/SaaS/fuzzy-noteable',
              NX_TERMINAL_OUTPUT_PATH:
                '/home/saacostam/Development/SaaS/fuzzy-noteable/.nx/cache/terminalOutputs/7a145c4dab4a402d08f9e4ad66fdd915d65eb47afc0b38e0ed969dc0f9bf2296',
              NX_STREAM_OUTPUT: 'true',
              NX_TASK_TARGET_PROJECT: 'noteable',
              NX_TASK_TARGET_TARGET: 'build',
              NX_TASK_TARGET_CONFIGURATION: 'production',
              NX_TASK_HASH:
                '7a145c4dab4a402d08f9e4ad66fdd915d65eb47afc0b38e0ed969dc0f9bf2296',
            }.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            'undefined' != typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy = (() => {
          let e = !1;
          return () => {
            e ||
              ((e = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
              ));
          };
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = r(891)(t));
      const { formatters: i } = e.exports;
      i.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '[UnexpectedJSONParseError]: ' + t.message;
        }
      };
    },
    891: (e, t, r) => {
      e.exports = function (e) {
        function t(e) {
          let r,
            n,
            d,
            s = null;
          function l(...e) {
            if (!l.enabled) return;
            const i = l,
              n = Number(new Date()),
              d = n - (r || n);
            (i.diff = d),
              (i.prev = r),
              (i.curr = n),
              (r = n),
              (e[0] = t.coerce(e[0])),
              'string' != typeof e[0] && e.unshift('%O');
            let s = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
              if ('%%' === r) return '%';
              s++;
              const d = t.formatters[n];
              if ('function' == typeof d) {
                const t = e[s];
                (r = d.call(i, t)), e.splice(s, 1), s--;
              }
              return r;
            })),
              t.formatArgs.call(i, e);
            (i.log || t.log).apply(i, e);
          }
          return (
            (l.namespace = e),
            (l.useColors = t.useColors()),
            (l.color = t.selectColor(e)),
            (l.extend = i),
            (l.destroy = t.destroy),
            Object.defineProperty(l, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== s
                  ? s
                  : (n !== t.namespaces &&
                      ((n = t.namespaces), (d = t.enabled(e))),
                    d),
              set: (e) => {
                s = e;
              },
            }),
            'function' == typeof t.init && t.init(l),
            l
          );
        }
        function i(e, r) {
          const i = t(this.namespace + (void 0 === r ? ':' : r) + e);
          return (i.log = this.log), i;
        }
        function n(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, '*');
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            if (e instanceof Error) return e.stack || e.message;
            return e;
          }),
          (t.disable = function () {
            const e = [
              ...t.names.map(n),
              ...t.skips.map(n).map((e) => '-' + e),
            ].join(',');
            return t.enable(''), e;
          }),
          (t.enable = function (e) {
            let r;
            t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
            const i = ('string' == typeof e ? e : '').split(/[\s,]+/),
              n = i.length;
            for (r = 0; r < n; r++)
              i[r] &&
                ('-' === (e = i[r].replace(/\*/g, '.*?'))[0]
                  ? t.skips.push(new RegExp('^' + e.slice(1) + '$'))
                  : t.names.push(new RegExp('^' + e + '$')));
          }),
          (t.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0;
            let r, i;
            for (r = 0, i = t.skips.length; r < i; r++)
              if (t.skips[r].test(e)) return !1;
            for (r = 0, i = t.names.length; r < i; r++)
              if (t.names[r].test(e)) return !0;
            return !1;
          }),
          (t.humanize = r(250)),
          (t.destroy = function () {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
            );
          }),
          Object.keys(e).forEach((r) => {
            t[r] = e[r];
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let r = 0;
            for (let t = 0; t < e.length; t++)
              (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
            return t.colors[Math.abs(r) % t.colors.length];
          }),
          t.enable(t.load()),
          t
        );
      };
    },
    938: (e) => {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error('Failed to load ' + this.src), e);
          });
      }
      function r(e, t) {
        e.onreadystatechange = function () {
          ('complete' != this.readyState && 'loaded' != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, i, n) {
        var d = document.head || document.getElementsByTagName('head')[0],
          s = document.createElement('script');
        'function' == typeof i && ((n = i), (i = {})),
          (i = i || {}),
          (n = n || function () {}),
          (s.type = i.type || 'text/javascript'),
          (s.charset = i.charset || 'utf8'),
          (s.async = !('async' in i) || !!i.async),
          (s.src = e),
          i.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(s, i.attrs),
          i.text && (s.text = '' + i.text),
          ('onload' in s ? t : r)(s, n),
          s.onload || t(s, n),
          d.appendChild(s);
      };
    },
    250: (e) => {
      var t = 1e3,
        r = 60 * t,
        i = 60 * r,
        n = 24 * i,
        d = 7 * n,
        s = 365.25 * n;
      function l(e, t, r, i) {
        var n = t >= 1.5 * r;
        return Math.round(e / r) + ' ' + i + (n ? 's' : '');
      }
      e.exports = function (e, u) {
        u = u || {};
        var c = typeof e;
        if ('string' === c && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var l =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!l) return;
            var u = parseFloat(l[1]);
            switch ((l[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return u * s;
              case 'weeks':
              case 'week':
              case 'w':
                return u * d;
              case 'days':
              case 'day':
              case 'd':
                return u * n;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return u * i;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return u * r;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return u * t;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return u;
              default:
                return;
            }
          })(e);
        if ('number' === c && isFinite(e))
          return u.long
            ? (function (e) {
                var d = Math.abs(e);
                if (d >= n) return l(e, d, n, 'day');
                if (d >= i) return l(e, d, i, 'hour');
                if (d >= r) return l(e, d, r, 'minute');
                if (d >= t) return l(e, d, t, 'second');
                return e + ' ms';
              })(e)
            : (function (e) {
                var d = Math.abs(e);
                if (d >= n) return Math.round(e / n) + 'd';
                if (d >= i) return Math.round(e / i) + 'h';
                if (d >= r) return Math.round(e / r) + 'm';
                if (d >= t) return Math.round(e / t) + 's';
                return e + 'ms';
              })(e);
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e)
        );
      };
    },
    400: (e, t, r) => {
      'use strict';
      var i = r(41),
        n = r(967);
      function d(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 1;
          r < arguments.length;
          r++
        )
          t += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var s = new Set(),
        l = {};
      function u(e, t) {
        c(e, t), c(e + 'Capture', t);
      }
      function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
      }
      var a = !(
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        o = Object.prototype.hasOwnProperty,
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = {},
        p = {};
      function y(e, t, r, i, n, d, s) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = i),
          (this.attributeNamespace = n),
          (this.mustUseProperty = r),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = d),
          (this.removeEmptyString = s);
      }
      var m = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          m[e] = new y(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
          var t = e[0];
          m[t] = new y(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          function (e) {
            m[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha',
        ].forEach(function (e) {
          m[e] = new y(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            m[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          m[e] = new y(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          m[e] = new y(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          m[e] = new y(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          m[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var g = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function v(e, t, r, i) {
        var n = m.hasOwnProperty(t) ? m[t] : null;
        (null !== n
          ? 0 !== n.type
          : i ||
            !(2 < t.length) ||
            ('o' !== t[0] && 'O' !== t[0]) ||
            ('n' !== t[1] && 'N' !== t[1])) &&
          ((function (e, t, r, i) {
            if (
              null == t ||
              (function (e, t, r, i) {
                if (null !== r && 0 === r.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !i &&
                      (null !== r
                        ? !r.acceptsBooleans
                        : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                          'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, r, i)
            )
              return !0;
            if (i) return !1;
            if (null !== r)
              switch (r.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, r, n, i) && (r = null),
          i || null === n
            ? (function (e) {
                return (
                  !!o.call(p, e) ||
                  (!o.call(h, e) &&
                    (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                );
              })(t) &&
              (null === r ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
            : n.mustUseProperty
            ? (e[n.propertyName] = null === r ? 3 !== n.type && '' : r)
            : ((t = n.attributeName),
              (i = n.attributeNamespace),
              null === r
                ? e.removeAttribute(t)
                : ((r =
                    3 === (n = n.type) || (4 === n && !0 === r) ? '' : '' + r),
                  i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(g, b);
          m[t] = new y(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, b);
            m[t] = new y(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(g, b);
          m[t] = new y(
            t,
            1,
            !1,
            e,
            'http://www.w3.org/XML/1998/namespace',
            !1,
            !1
          );
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          m[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (m.xlinkHref = new y(
          'xlinkHref',
          1,
          !1,
          'xlink:href',
          'http://www.w3.org/1999/xlink',
          !0,
          !1
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          m[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var C = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        E = Symbol.for('react.element'),
        A = Symbol.for('react.portal'),
        w = Symbol.for('react.fragment'),
        D = Symbol.for('react.strict_mode'),
        G = Symbol.for('react.profiler'),
        S = Symbol.for('react.provider'),
        x = Symbol.for('react.context'),
        k = Symbol.for('react.forward_ref'),
        F = Symbol.for('react.suspense'),
        P = Symbol.for('react.suspense_list'),
        T = Symbol.for('react.memo'),
        R = Symbol.for('react.lazy');
      Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
      var _ = Symbol.for('react.offscreen');
      Symbol.for('react.legacy_hidden'),
        Symbol.for('react.cache'),
        Symbol.for('react.tracing_marker');
      var N = Symbol.iterator;
      function O(e) {
        return null === e || 'object' != typeof e
          ? null
          : 'function' == typeof (e = (N && e[N]) || e['@@iterator'])
          ? e
          : null;
      }
      var L,
        j = Object.assign;
      function I(e) {
        if (void 0 === L)
          try {
            throw Error();
          } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            L = (t && t[1]) || '';
          }
        return '\n' + L + e;
      }
      var M = !1;
      function B(e, t) {
        if (!e || M) return '';
        M = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              'object' == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (c) {
                var i = c;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (c) {
                i = c;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (c) {
              i = c;
            }
            e();
          }
        } catch (c) {
          if (c && i && 'string' == typeof c.stack) {
            for (
              var n = c.stack.split('\n'),
                d = i.stack.split('\n'),
                s = n.length - 1,
                l = d.length - 1;
              1 <= s && 0 <= l && n[s] !== d[l];

            )
              l--;
            for (; 1 <= s && 0 <= l; s--, l--)
              if (n[s] !== d[l]) {
                if (1 !== s || 1 !== l)
                  do {
                    if ((s--, 0 > --l || n[s] !== d[l])) {
                      var u = '\n' + n[s].replace(' at new ', ' at ');
                      return (
                        e.displayName &&
                          u.includes('<anonymous>') &&
                          (u = u.replace('<anonymous>', e.displayName)),
                        u
                      );
                    }
                  } while (1 <= s && 0 <= l);
                break;
              }
          }
        } finally {
          (M = !1), (Error.prepareStackTrace = r);
        }
        return (e = e ? e.displayName || e.name : '') ? I(e) : '';
      }
      function U(e) {
        switch (e.tag) {
          case 5:
            return I(e.type);
          case 16:
            return I('Lazy');
          case 13:
            return I('Suspense');
          case 19:
            return I('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (e = B(e.type, !1));
          case 11:
            return (e = B(e.type.render, !1));
          case 1:
            return (e = B(e.type, !0));
          default:
            return '';
        }
      }
      function z(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
          case w:
            return 'Fragment';
          case A:
            return 'Portal';
          case G:
            return 'Profiler';
          case D:
            return 'StrictMode';
          case F:
            return 'Suspense';
          case P:
            return 'SuspenseList';
        }
        if ('object' == typeof e)
          switch (e.$$typeof) {
            case x:
              return (e.displayName || 'Context') + '.Consumer';
            case S:
              return (e._context.displayName || 'Context') + '.Provider';
            case k:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    '' !== (e = t.displayName || t.name || '')
                      ? 'ForwardRef(' + e + ')'
                      : 'ForwardRef'),
                e
              );
            case T:
              return null !== (t = e.displayName || null)
                ? t
                : z(e.type) || 'Memo';
            case R:
              (t = e._payload), (e = e._init);
              try {
                return z(e(t));
              } catch (r) {}
          }
        return null;
      }
      function H(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return 'Cache';
          case 9:
            return (t.displayName || 'Context') + '.Consumer';
          case 10:
            return (t._context.displayName || 'Context') + '.Provider';
          case 18:
            return 'DehydratedFragment';
          case 11:
            return (
              (e = (e = t.render).displayName || e.name || ''),
              t.displayName ||
                ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
          case 7:
            return 'Fragment';
          case 5:
            return t;
          case 4:
            return 'Portal';
          case 3:
            return 'Root';
          case 6:
            return 'Text';
          case 16:
            return z(t);
          case 8:
            return t === D ? 'StrictMode' : 'Mode';
          case 22:
            return 'Offscreen';
          case 12:
            return 'Profiler';
          case 21:
            return 'Scope';
          case 13:
            return 'Suspense';
          case 19:
            return 'SuspenseList';
          case 25:
            return 'TracingMarker';
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ('function' == typeof t) return t.displayName || t.name || null;
            if ('string' == typeof t) return t;
        }
        return null;
      }
      function Q(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'string':
          case 'undefined':
          case 'object':
            return e;
          default:
            return '';
        }
      }
      function $(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          'input' === e.toLowerCase() &&
          ('checkbox' === t || 'radio' === t)
        );
      }
      function W(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = $(e) ? 'checked' : 'value',
              r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              i = '' + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== r &&
              'function' == typeof r.get &&
              'function' == typeof r.set
            ) {
              var n = r.get,
                d = r.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return n.call(this);
                  },
                  set: function (e) {
                    (i = '' + e), d.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: r.enumerable }),
                {
                  getValue: function () {
                    return i;
                  },
                  setValue: function (e) {
                    i = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function V(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var r = t.getValue(),
          i = '';
        return (
          e && (i = $(e) ? (e.checked ? 'true' : 'false') : e.value),
          (e = i) !== r && (t.setValue(e), !0)
        );
      }
      function q(e) {
        if (
          void 0 ===
          (e = e || ('undefined' != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function K(e, t) {
        var r = t.checked;
        return j({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != r ? r : e._wrapperState.initialChecked,
        });
      }
      function Y(e, t) {
        var r = null == t.defaultValue ? '' : t.defaultValue,
          i = null != t.checked ? t.checked : t.defaultChecked;
        (r = Q(null != t.value ? t.value : r)),
          (e._wrapperState = {
            initialChecked: i,
            initialValue: r,
            controlled:
              'checkbox' === t.type || 'radio' === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function Z(e, t) {
        null != (t = t.checked) && v(e, 'checked', t, !1);
      }
      function X(e, t) {
        Z(e, t);
        var r = Q(t.value),
          i = t.type;
        if (null != r)
          'number' === i
            ? ((0 === r && '' === e.value) || e.value != r) &&
              (e.value = '' + r)
            : e.value !== '' + r && (e.value = '' + r);
        else if ('submit' === i || 'reset' === i)
          return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? ee(e, t.type, r)
          : t.hasOwnProperty('defaultValue') &&
            ee(e, t.type, Q(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function J(e, t, r) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var i = t.type;
          if (
            !(
              ('submit' !== i && 'reset' !== i) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = '' + e._wrapperState.initialValue),
            r || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        '' !== (r = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== r && (e.name = r);
      }
      function ee(e, t, r) {
        ('number' === t && q(e.ownerDocument) === e) ||
          (null == r
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
      }
      var te = Array.isArray;
      function re(e, t, r, i) {
        if (((e = e.options), t)) {
          t = {};
          for (var n = 0; n < r.length; n++) t['$' + r[n]] = !0;
          for (r = 0; r < e.length; r++)
            (n = t.hasOwnProperty('$' + e[r].value)),
              e[r].selected !== n && (e[r].selected = n),
              n && i && (e[r].defaultSelected = !0);
        } else {
          for (r = '' + Q(r), t = null, n = 0; n < e.length; n++) {
            if (e[n].value === r)
              return (
                (e[n].selected = !0), void (i && (e[n].defaultSelected = !0))
              );
            null !== t || e[n].disabled || (t = e[n]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function ie(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(d(91));
        return j({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: '' + e._wrapperState.initialValue,
        });
      }
      function ne(e, t) {
        var r = t.value;
        if (null == r) {
          if (((r = t.children), (t = t.defaultValue), null != r)) {
            if (null != t) throw Error(d(92));
            if (te(r)) {
              if (1 < r.length) throw Error(d(93));
              r = r[0];
            }
            t = r;
          }
          null == t && (t = ''), (r = t);
        }
        e._wrapperState = { initialValue: Q(r) };
      }
      function de(e, t) {
        var r = Q(t.value),
          i = Q(t.defaultValue);
        null != r &&
          ((r = '' + r) !== e.value && (e.value = r),
          null == t.defaultValue &&
            e.defaultValue !== r &&
            (e.defaultValue = r)),
          null != i && (e.defaultValue = '' + i);
      }
      function se(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          '' !== t &&
          null !== t &&
          (e.value = t);
      }
      function le(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function ue(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? le(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var ce,
        ae,
        oe =
          ((ae = function (e, t) {
            if (
              'http://www.w3.org/2000/svg' !== e.namespaceURI ||
              'innerHTML' in e
            )
              e.innerHTML = t;
            else {
              for (
                (ce = ce || document.createElement('div')).innerHTML =
                  '<svg>' + t.valueOf().toString() + '</svg>',
                  t = ce.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, r, i) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ae(e, t);
                });
              }
            : ae);
      function fe(e, t) {
        if (t) {
          var r = e.firstChild;
          if (r && r === e.lastChild && 3 === r.nodeType)
            return void (r.nodeValue = t);
        }
        e.textContent = t;
      }
      var he = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        pe = ['Webkit', 'ms', 'Moz', 'O'];
      function ye(e, t, r) {
        return null == t || 'boolean' == typeof t || '' === t
          ? ''
          : r ||
            'number' != typeof t ||
            0 === t ||
            (he.hasOwnProperty(e) && he[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function me(e, t) {
        for (var r in ((e = e.style), t))
          if (t.hasOwnProperty(r)) {
            var i = 0 === r.indexOf('--'),
              n = ye(r, t[r], i);
            'float' === r && (r = 'cssFloat'),
              i ? e.setProperty(r, n) : (e[r] = n);
          }
      }
      Object.keys(he).forEach(function (e) {
        pe.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (he[t] = he[e]);
        });
      });
      var ge = j(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
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
          wbr: !0,
        }
      );
      function be(e, t) {
        if (t) {
          if (
            ge[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(d(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(d(60));
            if (
              'object' != typeof t.dangerouslySetInnerHTML ||
              !('__html' in t.dangerouslySetInnerHTML)
            )
              throw Error(d(61));
          }
          if (null != t.style && 'object' != typeof t.style) throw Error(d(62));
        }
      }
      function ve(e, t) {
        if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      var Ce = null;
      function Ee(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ae = null,
        we = null,
        De = null;
      function Ge(e) {
        if ((e = vn(e))) {
          if ('function' != typeof Ae) throw Error(d(280));
          var t = e.stateNode;
          t && ((t = En(t)), Ae(e.stateNode, e.type, t));
        }
      }
      function Se(e) {
        we ? (De ? De.push(e) : (De = [e])) : (we = e);
      }
      function xe() {
        if (we) {
          var e = we,
            t = De;
          if (((De = we = null), Ge(e), t))
            for (e = 0; e < t.length; e++) Ge(t[e]);
        }
      }
      function ke(e, t) {
        return e(t);
      }
      function Fe() {}
      var Pe = !1;
      function Te(e, t, r) {
        if (Pe) return e(t, r);
        Pe = !0;
        try {
          return ke(e, t, r);
        } finally {
          (Pe = !1), (null !== we || null !== De) && (Fe(), xe());
        }
      }
      function Re(e, t) {
        var r = e.stateNode;
        if (null === r) return null;
        var i = En(r);
        if (null === i) return null;
        r = i[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (i = !i.disabled) ||
              (i = !(
                'button' === (e = e.type) ||
                'input' === e ||
                'select' === e ||
                'textarea' === e
              )),
              (e = !i);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (r && 'function' != typeof r) throw Error(d(231, t, typeof r));
        return r;
      }
      var _e = !1;
      if (a)
        try {
          var Ne = {};
          Object.defineProperty(Ne, 'passive', {
            get: function () {
              _e = !0;
            },
          }),
            window.addEventListener('test', Ne, Ne),
            window.removeEventListener('test', Ne, Ne);
        } catch (ae) {
          _e = !1;
        }
      function Oe(e, t, r, i, n, d, s, l, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(r, c);
        } catch (a) {
          this.onError(a);
        }
      }
      var Le = !1,
        je = null,
        Ie = !1,
        Me = null,
        Be = {
          onError: function (e) {
            (Le = !0), (je = e);
          },
        };
      function Ue(e, t, r, i, n, d, s, l, u) {
        (Le = !1), (je = null), Oe.apply(Be, arguments);
      }
      function ze(e) {
        var t = e,
          r = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (r = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? r : null;
      }
      function He(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Qe(e) {
        if (ze(e) !== e) throw Error(d(188));
      }
      function $e(e) {
        return null !==
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = ze(e))) throw Error(d(188));
              return t !== e ? null : e;
            }
            for (var r = e, i = t; ; ) {
              var n = r.return;
              if (null === n) break;
              var s = n.alternate;
              if (null === s) {
                if (null !== (i = n.return)) {
                  r = i;
                  continue;
                }
                break;
              }
              if (n.child === s.child) {
                for (s = n.child; s; ) {
                  if (s === r) return Qe(n), e;
                  if (s === i) return Qe(n), t;
                  s = s.sibling;
                }
                throw Error(d(188));
              }
              if (r.return !== i.return) (r = n), (i = s);
              else {
                for (var l = !1, u = n.child; u; ) {
                  if (u === r) {
                    (l = !0), (r = n), (i = s);
                    break;
                  }
                  if (u === i) {
                    (l = !0), (i = n), (r = s);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = s.child; u; ) {
                    if (u === r) {
                      (l = !0), (r = s), (i = n);
                      break;
                    }
                    if (u === i) {
                      (l = !0), (i = s), (r = n);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) throw Error(d(189));
                }
              }
              if (r.alternate !== i) throw Error(d(190));
            }
            if (3 !== r.tag) throw Error(d(188));
            return r.stateNode.current === r ? e : t;
          })(e))
          ? We(e)
          : null;
      }
      function We(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e; ) {
          var t = We(e);
          if (null !== t) return t;
          e = e.sibling;
        }
        return null;
      }
      var Ve = n.unstable_scheduleCallback,
        qe = n.unstable_cancelCallback,
        Ke = n.unstable_shouldYield,
        Ye = n.unstable_requestPaint,
        Ze = n.unstable_now,
        Xe = n.unstable_getCurrentPriorityLevel,
        Je = n.unstable_ImmediatePriority,
        et = n.unstable_UserBlockingPriority,
        tt = n.unstable_NormalPriority,
        rt = n.unstable_LowPriority,
        it = n.unstable_IdlePriority,
        nt = null,
        dt = null;
      var st = Math.clz32
          ? Math.clz32
          : function (e) {
              return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
            },
        lt = Math.log,
        ut = Math.LN2;
      var ct = 64,
        at = 4194304;
      function ot(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function ft(e, t) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var i = 0,
          n = e.suspendedLanes,
          d = e.pingedLanes,
          s = 268435455 & r;
        if (0 !== s) {
          var l = s & ~n;
          0 !== l ? (i = ot(l)) : 0 !== (d &= s) && (i = ot(d));
        } else 0 !== (s = r & ~n) ? (i = ot(s)) : 0 !== d && (i = ot(d));
        if (0 === i) return 0;
        if (
          0 !== t &&
          t !== i &&
          0 == (t & n) &&
          ((n = i & -i) >= (d = t & -t) || (16 === n && 0 != (4194240 & d)))
        )
          return t;
        if ((0 != (4 & i) && (i |= 16 & r), 0 !== (t = e.entangledLanes)))
          for (e = e.entanglements, t &= i; 0 < t; )
            (n = 1 << (r = 31 - st(t))), (i |= e[r]), (t &= ~n);
        return i;
      }
      function ht(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function pt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function yt() {
        var e = ct;
        return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e;
      }
      function mt(e) {
        for (var t = [], r = 0; 31 > r; r++) t.push(e);
        return t;
      }
      function gt(e, t, r) {
        (e.pendingLanes |= t),
          536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - st(t))] = r);
      }
      function bt(e, t) {
        var r = (e.entangledLanes |= t);
        for (e = e.entanglements; r; ) {
          var i = 31 - st(r),
            n = 1 << i;
          (n & t) | (e[i] & t) && (e[i] |= t), (r &= ~n);
        }
      }
      var vt = 0;
      function Ct(e) {
        return 1 < (e &= -e)
          ? 4 < e
            ? 0 != (268435455 & e)
              ? 16
              : 536870912
            : 4
          : 1;
      }
      var Et,
        At,
        wt,
        Dt,
        Gt,
        St = !1,
        xt = [],
        kt = null,
        Ft = null,
        Pt = null,
        Tt = new Map(),
        Rt = new Map(),
        _t = [],
        Nt =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
          );
      function Ot(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            kt = null;
            break;
          case 'dragenter':
          case 'dragleave':
            Ft = null;
            break;
          case 'mouseover':
          case 'mouseout':
            Pt = null;
            break;
          case 'pointerover':
          case 'pointerout':
            Tt.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            Rt.delete(t.pointerId);
        }
      }
      function Lt(e, t, r, i, n, d) {
        return null === e || e.nativeEvent !== d
          ? ((e = {
              blockedOn: t,
              domEventName: r,
              eventSystemFlags: i,
              nativeEvent: d,
              targetContainers: [n],
            }),
            null !== t && null !== (t = vn(t)) && At(t),
            e)
          : ((e.eventSystemFlags |= i),
            (t = e.targetContainers),
            null !== n && -1 === t.indexOf(n) && t.push(n),
            e);
      }
      function jt(e) {
        var t = bn(e.target);
        if (null !== t) {
          var r = ze(t);
          if (null !== r)
            if (13 === (t = r.tag)) {
              if (null !== (t = He(r)))
                return (
                  (e.blockedOn = t),
                  void Gt(e.priority, function () {
                    wt(r);
                  })
                );
            } else if (
              3 === t &&
              r.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                3 === r.tag ? r.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function It(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var r = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== r)
            return null !== (t = vn(r)) && At(t), (e.blockedOn = r), !1;
          var i = new (r = e.nativeEvent).constructor(r.type, r);
          (Ce = i), r.target.dispatchEvent(i), (Ce = null), t.shift();
        }
        return !0;
      }
      function Mt(e, t, r) {
        It(e) && r.delete(t);
      }
      function Bt() {
        (St = !1),
          null !== kt && It(kt) && (kt = null),
          null !== Ft && It(Ft) && (Ft = null),
          null !== Pt && It(Pt) && (Pt = null),
          Tt.forEach(Mt),
          Rt.forEach(Mt);
      }
      function Ut(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          St ||
            ((St = !0),
            n.unstable_scheduleCallback(n.unstable_NormalPriority, Bt)));
      }
      function zt(e) {
        function t(t) {
          return Ut(t, e);
        }
        if (0 < xt.length) {
          Ut(xt[0], e);
          for (var r = 1; r < xt.length; r++) {
            var i = xt[r];
            i.blockedOn === e && (i.blockedOn = null);
          }
        }
        for (
          null !== kt && Ut(kt, e),
            null !== Ft && Ut(Ft, e),
            null !== Pt && Ut(Pt, e),
            Tt.forEach(t),
            Rt.forEach(t),
            r = 0;
          r < _t.length;
          r++
        )
          (i = _t[r]).blockedOn === e && (i.blockedOn = null);
        for (; 0 < _t.length && null === (r = _t[0]).blockedOn; )
          jt(r), null === r.blockedOn && _t.shift();
      }
      var Ht = C.ReactCurrentBatchConfig,
        Qt = !0;
      function $t(e, t, r, i) {
        var n = vt,
          d = Ht.transition;
        Ht.transition = null;
        try {
          (vt = 1), Vt(e, t, r, i);
        } finally {
          (vt = n), (Ht.transition = d);
        }
      }
      function Wt(e, t, r, i) {
        var n = vt,
          d = Ht.transition;
        Ht.transition = null;
        try {
          (vt = 4), Vt(e, t, r, i);
        } finally {
          (vt = n), (Ht.transition = d);
        }
      }
      function Vt(e, t, r, i) {
        if (Qt) {
          var n = Kt(e, t, r, i);
          if (null === n) Hi(e, t, i, qt, r), Ot(e, i);
          else if (
            (function (e, t, r, i, n) {
              switch (t) {
                case 'focusin':
                  return (kt = Lt(kt, e, t, r, i, n)), !0;
                case 'dragenter':
                  return (Ft = Lt(Ft, e, t, r, i, n)), !0;
                case 'mouseover':
                  return (Pt = Lt(Pt, e, t, r, i, n)), !0;
                case 'pointerover':
                  var d = n.pointerId;
                  return Tt.set(d, Lt(Tt.get(d) || null, e, t, r, i, n)), !0;
                case 'gotpointercapture':
                  return (
                    (d = n.pointerId),
                    Rt.set(d, Lt(Rt.get(d) || null, e, t, r, i, n)),
                    !0
                  );
              }
              return !1;
            })(n, e, t, r, i)
          )
            i.stopPropagation();
          else if ((Ot(e, i), 4 & t && -1 < Nt.indexOf(e))) {
            for (; null !== n; ) {
              var d = vn(n);
              if (
                (null !== d && Et(d),
                null === (d = Kt(e, t, r, i)) && Hi(e, t, i, qt, r),
                d === n)
              )
                break;
              n = d;
            }
            null !== n && i.stopPropagation();
          } else Hi(e, t, i, null, r);
        }
      }
      var qt = null;
      function Kt(e, t, r, i) {
        if (((qt = null), null !== (e = bn((e = Ee(i))))))
          if (null === (t = ze(e))) e = null;
          else if (13 === (r = t.tag)) {
            if (null !== (e = He(t))) return e;
            e = null;
          } else if (3 === r) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        return (qt = e), null;
      }
      function Yt(e) {
        switch (e) {
          case 'cancel':
          case 'click':
          case 'close':
          case 'contextmenu':
          case 'copy':
          case 'cut':
          case 'auxclick':
          case 'dblclick':
          case 'dragend':
          case 'dragstart':
          case 'drop':
          case 'focusin':
          case 'focusout':
          case 'input':
          case 'invalid':
          case 'keydown':
          case 'keypress':
          case 'keyup':
          case 'mousedown':
          case 'mouseup':
          case 'paste':
          case 'pause':
          case 'play':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointerup':
          case 'ratechange':
          case 'reset':
          case 'resize':
          case 'seeked':
          case 'submit':
          case 'touchcancel':
          case 'touchend':
          case 'touchstart':
          case 'volumechange':
          case 'change':
          case 'selectionchange':
          case 'textInput':
          case 'compositionstart':
          case 'compositionend':
          case 'compositionupdate':
          case 'beforeblur':
          case 'afterblur':
          case 'beforeinput':
          case 'blur':
          case 'fullscreenchange':
          case 'focus':
          case 'hashchange':
          case 'popstate':
          case 'select':
          case 'selectstart':
            return 1;
          case 'drag':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'mousemove':
          case 'mouseout':
          case 'mouseover':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'scroll':
          case 'toggle':
          case 'touchmove':
          case 'wheel':
          case 'mouseenter':
          case 'mouseleave':
          case 'pointerenter':
          case 'pointerleave':
            return 4;
          case 'message':
            switch (Xe()) {
              case Je:
                return 1;
              case et:
                return 4;
              case tt:
              case rt:
                return 16;
              case it:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var Zt = null,
        Xt = null,
        Jt = null;
      function er() {
        if (Jt) return Jt;
        var e,
          t,
          r = Xt,
          i = r.length,
          n = 'value' in Zt ? Zt.value : Zt.textContent,
          d = n.length;
        for (e = 0; e < i && r[e] === n[e]; e++);
        var s = i - e;
        for (t = 1; t <= s && r[i - t] === n[d - t]; t++);
        return (Jt = n.slice(e, 1 < t ? 1 - t : void 0));
      }
      function tr(e) {
        var t = e.keyCode;
        return (
          'charCode' in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function rr() {
        return !0;
      }
      function ir() {
        return !1;
      }
      function nr(e) {
        function t(t, r, i, n, d) {
          for (var s in ((this._reactName = t),
          (this._targetInst = i),
          (this.type = r),
          (this.nativeEvent = n),
          (this.target = d),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(n) : n[s]));
          return (
            (this.isDefaultPrevented = (
              null != n.defaultPrevented
                ? n.defaultPrevented
                : !1 === n.returnValue
            )
              ? rr
              : ir),
            (this.isPropagationStopped = ir),
            this
          );
        }
        return (
          j(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = rr));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = rr));
            },
            persist: function () {},
            isPersistent: rr,
          }),
          t
        );
      }
      var dr,
        sr,
        lr,
        ur = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        cr = nr(ur),
        ar = j({}, ur, { view: 0, detail: 0 }),
        or = nr(ar),
        fr = j({}, ar, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Dr,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== lr &&
                  (lr && 'mousemove' === e.type
                    ? ((dr = e.screenX - lr.screenX),
                      (sr = e.screenY - lr.screenY))
                    : (sr = dr = 0),
                  (lr = e)),
                dr);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : sr;
          },
        }),
        hr = nr(fr),
        pr = nr(j({}, fr, { dataTransfer: 0 })),
        yr = nr(j({}, ar, { relatedTarget: 0 })),
        mr = nr(
          j({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        gr = j({}, ur, {
          clipboardData: function (e) {
            return 'clipboardData' in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        br = nr(gr),
        vr = nr(j({}, ur, { data: 0 })),
        Cr = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        Er = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        Ar = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey',
        };
      function wr(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Ar[e]) && !!t[e];
      }
      function Dr() {
        return wr;
      }
      var Gr = j({}, ar, {
          key: function (e) {
            if (e.key) {
              var t = Cr[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = tr(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? Er[e.keyCode] || 'Unidentified'
              : '';
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Dr,
          charCode: function (e) {
            return 'keypress' === e.type ? tr(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type
              ? tr(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0;
          },
        }),
        Sr = nr(Gr),
        xr = nr(
          j({}, fr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        kr = nr(
          j({}, ar, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Dr,
          })
        ),
        Fr = nr(
          j({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Pr = j({}, fr, {
          deltaX: function (e) {
            return 'deltaX' in e
              ? e.deltaX
              : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        Tr = nr(Pr),
        Rr = [9, 13, 27, 32],
        _r = a && 'CompositionEvent' in window,
        Nr = null;
      a && 'documentMode' in document && (Nr = document.documentMode);
      var Or = a && 'TextEvent' in window && !Nr,
        Lr = a && (!_r || (Nr && 8 < Nr && 11 >= Nr)),
        jr = String.fromCharCode(32),
        Ir = !1;
      function Mr(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== Rr.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Br(e) {
        return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var Ur = !1;
      var zr = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Hr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!zr[e.type] : 'textarea' === t;
      }
      function Qr(e, t, r, i) {
        Se(i),
          0 < (t = $i(t, 'onChange')).length &&
            ((r = new cr('onChange', 'change', null, r, i)),
            e.push({ event: r, listeners: t }));
      }
      var $r = null,
        Wr = null;
      function Vr(e) {
        ji(e, 0);
      }
      function qr(e) {
        if (V(Cn(e))) return e;
      }
      function Kr(e, t) {
        if ('change' === e) return t;
      }
      var Yr = !1;
      if (a) {
        var Zr;
        if (a) {
          var Xr = 'oninput' in document;
          if (!Xr) {
            var Jr = document.createElement('div');
            Jr.setAttribute('oninput', 'return;'),
              (Xr = 'function' == typeof Jr.oninput);
          }
          Zr = Xr;
        } else Zr = !1;
        Yr = Zr && (!document.documentMode || 9 < document.documentMode);
      }
      function ei() {
        $r && ($r.detachEvent('onpropertychange', ti), (Wr = $r = null));
      }
      function ti(e) {
        if ('value' === e.propertyName && qr(Wr)) {
          var t = [];
          Qr(t, Wr, e, Ee(e)), Te(Vr, t);
        }
      }
      function ri(e, t, r) {
        'focusin' === e
          ? (ei(), (Wr = r), ($r = t).attachEvent('onpropertychange', ti))
          : 'focusout' === e && ei();
      }
      function ii(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
          return qr(Wr);
      }
      function ni(e, t) {
        if ('click' === e) return qr(t);
      }
      function di(e, t) {
        if ('input' === e || 'change' === e) return qr(t);
      }
      var si =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            };
      function li(e, t) {
        if (si(e, t)) return !0;
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof t ||
          null === t
        )
          return !1;
        var r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (i = 0; i < r.length; i++) {
          var n = r[i];
          if (!o.call(t, n) || !si(e[n], t[n])) return !1;
        }
        return !0;
      }
      function ui(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function ci(e, t) {
        var r,
          i = ui(e);
        for (e = 0; i; ) {
          if (3 === i.nodeType) {
            if (((r = e + i.textContent.length), e <= t && r >= t))
              return { node: i, offset: t - e };
            e = r;
          }
          e: {
            for (; i; ) {
              if (i.nextSibling) {
                i = i.nextSibling;
                break e;
              }
              i = i.parentNode;
            }
            i = void 0;
          }
          i = ui(i);
        }
      }
      function ai(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? ai(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function oi() {
        for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var r = 'string' == typeof t.contentWindow.location.href;
          } catch (i) {
            r = !1;
          }
          if (!r) break;
          t = q((e = t.contentWindow).document);
        }
        return t;
      }
      function fi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      function hi(e) {
        var t = oi(),
          r = e.focusedElem,
          i = e.selectionRange;
        if (
          t !== r &&
          r &&
          r.ownerDocument &&
          ai(r.ownerDocument.documentElement, r)
        ) {
          if (null !== i && fi(r))
            if (
              ((t = i.start),
              void 0 === (e = i.end) && (e = t),
              'selectionStart' in r)
            )
              (r.selectionStart = t),
                (r.selectionEnd = Math.min(e, r.value.length));
            else if (
              (e =
                ((t = r.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection();
              var n = r.textContent.length,
                d = Math.min(i.start, n);
              (i = void 0 === i.end ? d : Math.min(i.end, n)),
                !e.extend && d > i && ((n = i), (i = d), (d = n)),
                (n = ci(r, d));
              var s = ci(r, i);
              n &&
                s &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== n.node ||
                  e.anchorOffset !== n.offset ||
                  e.focusNode !== s.node ||
                  e.focusOffset !== s.offset) &&
                ((t = t.createRange()).setStart(n.node, n.offset),
                e.removeAllRanges(),
                d > i
                  ? (e.addRange(t), e.extend(s.node, s.offset))
                  : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
          for (t = [], e = r; (e = e.parentNode); )
            1 === e.nodeType &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for (
            'function' == typeof r.focus && r.focus(), r = 0;
            r < t.length;
            r++
          )
            ((e = t[r]).element.scrollLeft = e.left),
              (e.element.scrollTop = e.top);
        }
      }
      var pi = a && 'documentMode' in document && 11 >= document.documentMode,
        yi = null,
        mi = null,
        gi = null,
        bi = !1;
      function vi(e, t, r) {
        var i =
          r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
        bi ||
          null == yi ||
          yi !== q(i) ||
          ('selectionStart' in (i = yi) && fi(i)
            ? (i = { start: i.selectionStart, end: i.selectionEnd })
            : (i = {
                anchorNode: (i = (
                  (i.ownerDocument && i.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: i.anchorOffset,
                focusNode: i.focusNode,
                focusOffset: i.focusOffset,
              }),
          (gi && li(gi, i)) ||
            ((gi = i),
            0 < (i = $i(mi, 'onSelect')).length &&
              ((t = new cr('onSelect', 'select', null, t, r)),
              e.push({ event: t, listeners: i }),
              (t.target = yi))));
      }
      function Ci(e, t) {
        var r = {};
        return (
          (r[e.toLowerCase()] = t.toLowerCase()),
          (r['Webkit' + e] = 'webkit' + t),
          (r['Moz' + e] = 'moz' + t),
          r
        );
      }
      var Ei = {
          animationend: Ci('Animation', 'AnimationEnd'),
          animationiteration: Ci('Animation', 'AnimationIteration'),
          animationstart: Ci('Animation', 'AnimationStart'),
          transitionend: Ci('Transition', 'TransitionEnd'),
        },
        Ai = {},
        wi = {};
      function Di(e) {
        if (Ai[e]) return Ai[e];
        if (!Ei[e]) return e;
        var t,
          r = Ei[e];
        for (t in r) if (r.hasOwnProperty(t) && t in wi) return (Ai[e] = r[t]);
        return e;
      }
      a &&
        ((wi = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Ei.animationend.animation,
          delete Ei.animationiteration.animation,
          delete Ei.animationstart.animation),
        'TransitionEvent' in window || delete Ei.transitionend.transition);
      var Gi = Di('animationend'),
        Si = Di('animationiteration'),
        xi = Di('animationstart'),
        ki = Di('transitionend'),
        Fi = new Map(),
        Pi =
          'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
          );
      function Ti(e, t) {
        Fi.set(e, t), u(t, [e]);
      }
      for (var Ri = 0; Ri < Pi.length; Ri++) {
        var _i = Pi[Ri];
        Ti(_i.toLowerCase(), 'on' + (_i[0].toUpperCase() + _i.slice(1)));
      }
      Ti(Gi, 'onAnimationEnd'),
        Ti(Si, 'onAnimationIteration'),
        Ti(xi, 'onAnimationStart'),
        Ti('dblclick', 'onDoubleClick'),
        Ti('focusin', 'onFocus'),
        Ti('focusout', 'onBlur'),
        Ti(ki, 'onTransitionEnd'),
        c('onMouseEnter', ['mouseout', 'mouseover']),
        c('onMouseLeave', ['mouseout', 'mouseover']),
        c('onPointerEnter', ['pointerout', 'pointerover']),
        c('onPointerLeave', ['pointerout', 'pointerover']),
        u(
          'onChange',
          'change click focusin focusout input keydown keyup selectionchange'.split(
            ' '
          )
        ),
        u(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          )
        ),
        u('onBeforeInput', [
          'compositionend',
          'keypress',
          'textInput',
          'paste',
        ]),
        u(
          'onCompositionEnd',
          'compositionend focusout keydown keypress keyup mousedown'.split(' ')
        ),
        u(
          'onCompositionStart',
          'compositionstart focusout keydown keypress keyup mousedown'.split(
            ' '
          )
        ),
        u(
          'onCompositionUpdate',
          'compositionupdate focusout keydown keypress keyup mousedown'.split(
            ' '
          )
        );
      var Ni =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
          ),
        Oi = new Set(
          'cancel close invalid load scroll toggle'.split(' ').concat(Ni)
        );
      function Li(e, t, r) {
        var i = e.type || 'unknown-event';
        (e.currentTarget = r),
          (function (e, t, r, i, n, s, l, u, c) {
            if ((Ue.apply(this, arguments), Le)) {
              if (!Le) throw Error(d(198));
              var a = je;
              (Le = !1), (je = null), Ie || ((Ie = !0), (Me = a));
            }
          })(i, t, void 0, e),
          (e.currentTarget = null);
      }
      function ji(e, t) {
        t = 0 != (4 & t);
        for (var r = 0; r < e.length; r++) {
          var i = e[r],
            n = i.event;
          i = i.listeners;
          e: {
            var d = void 0;
            if (t)
              for (var s = i.length - 1; 0 <= s; s--) {
                var l = i[s],
                  u = l.instance,
                  c = l.currentTarget;
                if (((l = l.listener), u !== d && n.isPropagationStopped()))
                  break e;
                Li(n, l, c), (d = u);
              }
            else
              for (s = 0; s < i.length; s++) {
                if (
                  ((u = (l = i[s]).instance),
                  (c = l.currentTarget),
                  (l = l.listener),
                  u !== d && n.isPropagationStopped())
                )
                  break e;
                Li(n, l, c), (d = u);
              }
          }
        }
        if (Ie) throw ((e = Me), (Ie = !1), (Me = null), e);
      }
      function Ii(e, t) {
        var r = t[yn];
        void 0 === r && (r = t[yn] = new Set());
        var i = e + '__bubble';
        r.has(i) || (zi(t, e, 2, !1), r.add(i));
      }
      function Mi(e, t, r) {
        var i = 0;
        t && (i |= 4), zi(r, e, i, t);
      }
      var Bi = '_reactListening' + Math.random().toString(36).slice(2);
      function Ui(e) {
        if (!e[Bi]) {
          (e[Bi] = !0),
            s.forEach(function (t) {
              'selectionchange' !== t &&
                (Oi.has(t) || Mi(t, !1, e), Mi(t, !0, e));
            });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Bi] || ((t[Bi] = !0), Mi('selectionchange', !1, t));
        }
      }
      function zi(e, t, r, i) {
        switch (Yt(t)) {
          case 1:
            var n = $t;
            break;
          case 4:
            n = Wt;
            break;
          default:
            n = Vt;
        }
        (r = n.bind(null, t, r, e)),
          (n = void 0),
          !_e ||
            ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
            (n = !0),
          i
            ? void 0 !== n
              ? e.addEventListener(t, r, { capture: !0, passive: n })
              : e.addEventListener(t, r, !0)
            : void 0 !== n
            ? e.addEventListener(t, r, { passive: n })
            : e.addEventListener(t, r, !1);
      }
      function Hi(e, t, r, i, n) {
        var d = i;
        if (0 == (1 & t) && 0 == (2 & t) && null !== i)
          e: for (;;) {
            if (null === i) return;
            var s = i.tag;
            if (3 === s || 4 === s) {
              var l = i.stateNode.containerInfo;
              if (l === n || (8 === l.nodeType && l.parentNode === n)) break;
              if (4 === s)
                for (s = i.return; null !== s; ) {
                  var u = s.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = s.stateNode.containerInfo) === n ||
                      (8 === u.nodeType && u.parentNode === n))
                  )
                    return;
                  s = s.return;
                }
              for (; null !== l; ) {
                if (null === (s = bn(l))) return;
                if (5 === (u = s.tag) || 6 === u) {
                  i = d = s;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            i = i.return;
          }
        Te(function () {
          var i = d,
            n = Ee(r),
            s = [];
          e: {
            var l = Fi.get(e);
            if (void 0 !== l) {
              var u = cr,
                c = e;
              switch (e) {
                case 'keypress':
                  if (0 === tr(r)) break e;
                case 'keydown':
                case 'keyup':
                  u = Sr;
                  break;
                case 'focusin':
                  (c = 'focus'), (u = yr);
                  break;
                case 'focusout':
                  (c = 'blur'), (u = yr);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  u = yr;
                  break;
                case 'click':
                  if (2 === r.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  u = hr;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  u = pr;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  u = kr;
                  break;
                case Gi:
                case Si:
                case xi:
                  u = mr;
                  break;
                case ki:
                  u = Fr;
                  break;
                case 'scroll':
                  u = or;
                  break;
                case 'wheel':
                  u = Tr;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  u = br;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  u = xr;
              }
              var a = 0 != (4 & t),
                o = !a && 'scroll' === e,
                f = a ? (null !== l ? l + 'Capture' : null) : l;
              a = [];
              for (var h, p = i; null !== p; ) {
                var y = (h = p).stateNode;
                if (
                  (5 === h.tag &&
                    null !== y &&
                    ((h = y),
                    null !== f &&
                      null != (y = Re(p, f)) &&
                      a.push(Qi(p, y, h))),
                  o)
                )
                  break;
                p = p.return;
              }
              0 < a.length &&
                ((l = new u(l, c, null, r, n)),
                s.push({ event: l, listeners: a }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((u = 'mouseout' === e || 'pointerout' === e),
              (!(l = 'mouseover' === e || 'pointerover' === e) ||
                r === Ce ||
                !(c = r.relatedTarget || r.fromElement) ||
                (!bn(c) && !c[pn])) &&
                (u || l) &&
                ((l =
                  n.window === n
                    ? n
                    : (l = n.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                u
                  ? ((u = i),
                    null !==
                      (c = (c = r.relatedTarget || r.toElement)
                        ? bn(c)
                        : null) &&
                      (c !== (o = ze(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                      (c = null))
                  : ((u = null), (c = i)),
                u !== c))
            ) {
              if (
                ((a = hr),
                (y = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (p = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((a = xr),
                  (y = 'onPointerLeave'),
                  (f = 'onPointerEnter'),
                  (p = 'pointer')),
                (o = null == u ? l : Cn(u)),
                (h = null == c ? l : Cn(c)),
                ((l = new a(y, p + 'leave', u, r, n)).target = o),
                (l.relatedTarget = h),
                (y = null),
                bn(n) === i &&
                  (((a = new a(f, p + 'enter', c, r, n)).target = h),
                  (a.relatedTarget = o),
                  (y = a)),
                (o = y),
                u && c)
              )
                e: {
                  for (f = c, p = 0, h = a = u; h; h = Wi(h)) p++;
                  for (h = 0, y = f; y; y = Wi(y)) h++;
                  for (; 0 < p - h; ) (a = Wi(a)), p--;
                  for (; 0 < h - p; ) (f = Wi(f)), h--;
                  for (; p--; ) {
                    if (a === f || (null !== f && a === f.alternate)) break e;
                    (a = Wi(a)), (f = Wi(f));
                  }
                  a = null;
                }
              else a = null;
              null !== u && Vi(s, l, u, a, !1),
                null !== c && null !== o && Vi(s, o, c, a, !0);
            }
            if (
              'select' ===
                (u =
                  (l = i ? Cn(i) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ('input' === u && 'file' === l.type)
            )
              var m = Kr;
            else if (Hr(l))
              if (Yr) m = di;
              else {
                m = ii;
                var g = ri;
              }
            else
              (u = l.nodeName) &&
                'input' === u.toLowerCase() &&
                ('checkbox' === l.type || 'radio' === l.type) &&
                (m = ni);
            switch (
              (m && (m = m(e, i))
                ? Qr(s, m, r, n)
                : (g && g(e, l, i),
                  'focusout' === e &&
                    (g = l._wrapperState) &&
                    g.controlled &&
                    'number' === l.type &&
                    ee(l, 'number', l.value)),
              (g = i ? Cn(i) : window),
              e)
            ) {
              case 'focusin':
                (Hr(g) || 'true' === g.contentEditable) &&
                  ((yi = g), (mi = i), (gi = null));
                break;
              case 'focusout':
                gi = mi = yi = null;
                break;
              case 'mousedown':
                bi = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (bi = !1), vi(s, r, n);
                break;
              case 'selectionchange':
                if (pi) break;
              case 'keydown':
              case 'keyup':
                vi(s, r, n);
            }
            var b;
            if (_r)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var v = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    v = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    v = 'onCompositionUpdate';
                    break e;
                }
                v = void 0;
              }
            else
              Ur
                ? Mr(e, r) && (v = 'onCompositionEnd')
                : 'keydown' === e &&
                  229 === r.keyCode &&
                  (v = 'onCompositionStart');
            v &&
              (Lr &&
                'ko' !== r.locale &&
                (Ur || 'onCompositionStart' !== v
                  ? 'onCompositionEnd' === v && Ur && (b = er())
                  : ((Xt = 'value' in (Zt = n) ? Zt.value : Zt.textContent),
                    (Ur = !0))),
              0 < (g = $i(i, v)).length &&
                ((v = new vr(v, e, null, r, n)),
                s.push({ event: v, listeners: g }),
                b ? (v.data = b) : null !== (b = Br(r)) && (v.data = b))),
              (b = Or
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Br(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((Ir = !0), jr);
                      case 'textInput':
                        return (e = t.data) === jr && Ir ? null : e;
                      default:
                        return null;
                    }
                  })(e, r)
                : (function (e, t) {
                    if (Ur)
                      return 'compositionend' === e || (!_r && Mr(e, t))
                        ? ((e = er()), (Jt = Xt = Zt = null), (Ur = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                      default:
                        return null;
                      case 'keypress':
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return Lr && 'ko' !== t.locale ? null : t.data;
                    }
                  })(e, r)) &&
                0 < (i = $i(i, 'onBeforeInput')).length &&
                ((n = new vr('onBeforeInput', 'beforeinput', null, r, n)),
                s.push({ event: n, listeners: i }),
                (n.data = b));
          }
          ji(s, t);
        });
      }
      function Qi(e, t, r) {
        return { instance: e, listener: t, currentTarget: r };
      }
      function $i(e, t) {
        for (var r = t + 'Capture', i = []; null !== e; ) {
          var n = e,
            d = n.stateNode;
          5 === n.tag &&
            null !== d &&
            ((n = d),
            null != (d = Re(e, r)) && i.unshift(Qi(e, d, n)),
            null != (d = Re(e, t)) && i.push(Qi(e, d, n))),
            (e = e.return);
        }
        return i;
      }
      function Wi(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Vi(e, t, r, i, n) {
        for (var d = t._reactName, s = []; null !== r && r !== i; ) {
          var l = r,
            u = l.alternate,
            c = l.stateNode;
          if (null !== u && u === i) break;
          5 === l.tag &&
            null !== c &&
            ((l = c),
            n
              ? null != (u = Re(r, d)) && s.unshift(Qi(r, u, l))
              : n || (null != (u = Re(r, d)) && s.push(Qi(r, u, l)))),
            (r = r.return);
        }
        0 !== s.length && e.push({ event: t, listeners: s });
      }
      var qi = /\r\n?/g,
        Ki = /\u0000|\uFFFD/g;
      function Yi(e) {
        return ('string' == typeof e ? e : '' + e)
          .replace(qi, '\n')
          .replace(Ki, '');
      }
      function Zi(e, t, r) {
        if (((t = Yi(t)), Yi(e) !== t && r)) throw Error(d(425));
      }
      function Xi() {}
      var Ji = null,
        en = null;
      function tn(e, t) {
        return (
          'textarea' === e ||
          'noscript' === e ||
          'string' == typeof t.children ||
          'number' == typeof t.children ||
          ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var rn = 'function' == typeof setTimeout ? setTimeout : void 0,
        nn = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        dn = 'function' == typeof Promise ? Promise : void 0,
        sn =
          'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== dn
            ? function (e) {
                return dn.resolve(null).then(e).catch(ln);
              }
            : rn;
      function ln(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function un(e, t) {
        var r = t,
          i = 0;
        do {
          var n = r.nextSibling;
          if ((e.removeChild(r), n && 8 === n.nodeType))
            if ('/$' === (r = n.data)) {
              if (0 === i) return e.removeChild(n), void zt(t);
              i--;
            } else ('$' !== r && '$?' !== r && '$!' !== r) || i++;
          r = n;
        } while (r);
        zt(t);
      }
      function cn(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
            if ('/$' === t) return null;
          }
        }
        return e;
      }
      function an(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var r = e.data;
            if ('$' === r || '$!' === r || '$?' === r) {
              if (0 === t) return e;
              t--;
            } else '/$' === r && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var on = Math.random().toString(36).slice(2),
        fn = '__reactFiber$' + on,
        hn = '__reactProps$' + on,
        pn = '__reactContainer$' + on,
        yn = '__reactEvents$' + on,
        mn = '__reactListeners$' + on,
        gn = '__reactHandles$' + on;
      function bn(e) {
        var t = e[fn];
        if (t) return t;
        for (var r = e.parentNode; r; ) {
          if ((t = r[pn] || r[fn])) {
            if (
              ((r = t.alternate),
              null !== t.child || (null !== r && null !== r.child))
            )
              for (e = an(e); null !== e; ) {
                if ((r = e[fn])) return r;
                e = an(e);
              }
            return t;
          }
          r = (e = r).parentNode;
        }
        return null;
      }
      function vn(e) {
        return !(e = e[fn] || e[pn]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function Cn(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(d(33));
      }
      function En(e) {
        return e[hn] || null;
      }
      var An = [],
        wn = -1;
      function Dn(e) {
        return { current: e };
      }
      function Gn(e) {
        0 > wn || ((e.current = An[wn]), (An[wn] = null), wn--);
      }
      function Sn(e, t) {
        wn++, (An[wn] = e.current), (e.current = t);
      }
      var xn = {},
        kn = Dn(xn),
        Fn = Dn(!1),
        Pn = xn;
      function Tn(e, t) {
        var r = e.type.contextTypes;
        if (!r) return xn;
        var i = e.stateNode;
        if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
          return i.__reactInternalMemoizedMaskedChildContext;
        var n,
          d = {};
        for (n in r) d[n] = t[n];
        return (
          i &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = d)),
          d
        );
      }
      function Rn(e) {
        return null != (e = e.childContextTypes);
      }
      function _n() {
        Gn(Fn), Gn(kn);
      }
      function Nn(e, t, r) {
        if (kn.current !== xn) throw Error(d(168));
        Sn(kn, t), Sn(Fn, r);
      }
      function On(e, t, r) {
        var i = e.stateNode;
        if (((t = t.childContextTypes), 'function' != typeof i.getChildContext))
          return r;
        for (var n in (i = i.getChildContext()))
          if (!(n in t)) throw Error(d(108, H(e) || 'Unknown', n));
        return j({}, r, i);
      }
      function Ln(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            xn),
          (Pn = kn.current),
          Sn(kn, e),
          Sn(Fn, Fn.current),
          !0
        );
      }
      function jn(e, t, r) {
        var i = e.stateNode;
        if (!i) throw Error(d(169));
        r
          ? ((e = On(e, t, Pn)),
            (i.__reactInternalMemoizedMergedChildContext = e),
            Gn(Fn),
            Gn(kn),
            Sn(kn, e))
          : Gn(Fn),
          Sn(Fn, r);
      }
      var In = null,
        Mn = !1,
        Bn = !1;
      function Un(e) {
        null === In ? (In = [e]) : In.push(e);
      }
      function zn() {
        if (!Bn && null !== In) {
          Bn = !0;
          var e = 0,
            t = vt;
          try {
            var r = In;
            for (vt = 1; e < r.length; e++) {
              var i = r[e];
              do {
                i = i(!0);
              } while (null !== i);
            }
            (In = null), (Mn = !1);
          } catch (n) {
            throw (null !== In && (In = In.slice(e + 1)), Ve(Je, zn), n);
          } finally {
            (vt = t), (Bn = !1);
          }
        }
        return null;
      }
      var Hn = [],
        Qn = 0,
        $n = null,
        Wn = 0,
        Vn = [],
        qn = 0,
        Kn = null,
        Yn = 1,
        Zn = '';
      function Xn(e, t) {
        (Hn[Qn++] = Wn), (Hn[Qn++] = $n), ($n = e), (Wn = t);
      }
      function Jn(e, t, r) {
        (Vn[qn++] = Yn), (Vn[qn++] = Zn), (Vn[qn++] = Kn), (Kn = e);
        var i = Yn;
        e = Zn;
        var n = 32 - st(i) - 1;
        (i &= ~(1 << n)), (r += 1);
        var d = 32 - st(t) + n;
        if (30 < d) {
          var s = n - (n % 5);
          (d = (i & ((1 << s) - 1)).toString(32)),
            (i >>= s),
            (n -= s),
            (Yn = (1 << (32 - st(t) + n)) | (r << n) | i),
            (Zn = d + e);
        } else (Yn = (1 << d) | (r << n) | i), (Zn = e);
      }
      function ed(e) {
        null !== e.return && (Xn(e, 1), Jn(e, 1, 0));
      }
      function td(e) {
        for (; e === $n; )
          ($n = Hn[--Qn]), (Hn[Qn] = null), (Wn = Hn[--Qn]), (Hn[Qn] = null);
        for (; e === Kn; )
          (Kn = Vn[--qn]),
            (Vn[qn] = null),
            (Zn = Vn[--qn]),
            (Vn[qn] = null),
            (Yn = Vn[--qn]),
            (Vn[qn] = null);
      }
      var rd = null,
        id = null,
        nd = !1,
        dd = null;
      function sd(e, t) {
        var r = Tc(5, null, null, 0);
        (r.elementType = 'DELETED'),
          (r.stateNode = t),
          (r.return = e),
          null === (t = e.deletions)
            ? ((e.deletions = [r]), (e.flags |= 16))
            : t.push(r);
      }
      function ld(e, t) {
        switch (e.tag) {
          case 5:
            var r = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  r.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) &&
              ((e.stateNode = t), (rd = e), (id = cn(t.firstChild)), !0)
            );
          case 6:
            return (
              null !==
                (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), (rd = e), (id = null), !0)
            );
          case 13:
            return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((r = null !== Kn ? { id: Yn, overflow: Zn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              ((r = Tc(18, null, null, 0)).stateNode = t),
              (r.return = e),
              (e.child = r),
              (rd = e),
              (id = null),
              !0)
            );
          default:
            return !1;
        }
      }
      function ud(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags);
      }
      function cd(e) {
        if (nd) {
          var t = id;
          if (t) {
            var r = t;
            if (!ld(e, t)) {
              if (ud(e)) throw Error(d(418));
              t = cn(r.nextSibling);
              var i = rd;
              t && ld(e, t)
                ? sd(i, r)
                : ((e.flags = (-4097 & e.flags) | 2), (nd = !1), (rd = e));
            }
          } else {
            if (ud(e)) throw Error(d(418));
            (e.flags = (-4097 & e.flags) | 2), (nd = !1), (rd = e);
          }
        }
      }
      function ad(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        rd = e;
      }
      function od(e) {
        if (e !== rd) return !1;
        if (!nd) return ad(e), (nd = !0), !1;
        var t;
        if (
          ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t =
              'head' !== (t = e.type) &&
              'body' !== t &&
              !tn(e.type, e.memoizedProps)),
          t && (t = id))
        ) {
          if (ud(e)) throw (fd(), Error(d(418)));
          for (; t; ) sd(e, t), (t = cn(t.nextSibling));
        }
        if ((ad(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(d(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var r = e.data;
                if ('/$' === r) {
                  if (0 === t) {
                    id = cn(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== r && '$!' !== r && '$?' !== r) || t++;
              }
              e = e.nextSibling;
            }
            id = null;
          }
        } else id = rd ? cn(e.stateNode.nextSibling) : null;
        return !0;
      }
      function fd() {
        for (var e = id; e; ) e = cn(e.nextSibling);
      }
      function hd() {
        (id = rd = null), (nd = !1);
      }
      function pd(e) {
        null === dd ? (dd = [e]) : dd.push(e);
      }
      var yd = C.ReactCurrentBatchConfig;
      function md(e, t) {
        if (e && e.defaultProps) {
          for (var r in ((t = j({}, t)), (e = e.defaultProps)))
            void 0 === t[r] && (t[r] = e[r]);
          return t;
        }
        return t;
      }
      var gd = Dn(null),
        bd = null,
        vd = null,
        Cd = null;
      function Ed() {
        Cd = vd = bd = null;
      }
      function Ad(e) {
        var t = gd.current;
        Gn(gd), (e._currentValue = t);
      }
      function wd(e, t, r) {
        for (; null !== e; ) {
          var i = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== i && (i.childLanes |= t))
              : null !== i && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === r)
          )
            break;
          e = e.return;
        }
      }
      function Dd(e, t) {
        (bd = e),
          (Cd = vd = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (vl = !0), (e.firstContext = null));
      }
      function Gd(e) {
        var t = e._currentValue;
        if (Cd !== e)
          if (
            ((e = { context: e, memoizedValue: t, next: null }), null === vd)
          ) {
            if (null === bd) throw Error(d(308));
            (vd = e), (bd.dependencies = { lanes: 0, firstContext: e });
          } else vd = vd.next = e;
        return t;
      }
      var Sd = null;
      function xd(e) {
        null === Sd ? (Sd = [e]) : Sd.push(e);
      }
      function kd(e, t, r, i) {
        var n = t.interleaved;
        return (
          null === n
            ? ((r.next = r), xd(t))
            : ((r.next = n.next), (n.next = r)),
          (t.interleaved = r),
          Fd(e, i)
        );
      }
      function Fd(e, t) {
        e.lanes |= t;
        var r = e.alternate;
        for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (r = e.alternate) && (r.childLanes |= t),
            (r = e),
            (e = e.return);
        return 3 === r.tag ? r.stateNode : null;
      }
      var Pd = !1;
      function Td(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function Rd(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function _d(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function Nd(e, t, r) {
        var i = e.updateQueue;
        if (null === i) return null;
        if (((i = i.shared), 0 != (2 & ku))) {
          var n = i.pending;
          return (
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (i.pending = t),
            Fd(e, r)
          );
        }
        return (
          null === (n = i.interleaved)
            ? ((t.next = t), xd(i))
            : ((t.next = n.next), (n.next = t)),
          (i.interleaved = t),
          Fd(e, r)
        );
      }
      function Od(e, t, r) {
        if (
          null !== (t = t.updateQueue) &&
          ((t = t.shared), 0 != (4194240 & r))
        ) {
          var i = t.lanes;
          (r |= i &= e.pendingLanes), (t.lanes = r), bt(e, r);
        }
      }
      function Ld(e, t) {
        var r = e.updateQueue,
          i = e.alternate;
        if (null !== i && r === (i = i.updateQueue)) {
          var n = null,
            d = null;
          if (null !== (r = r.firstBaseUpdate)) {
            do {
              var s = {
                eventTime: r.eventTime,
                lane: r.lane,
                tag: r.tag,
                payload: r.payload,
                callback: r.callback,
                next: null,
              };
              null === d ? (n = d = s) : (d = d.next = s), (r = r.next);
            } while (null !== r);
            null === d ? (n = d = t) : (d = d.next = t);
          } else n = d = t;
          return (
            (r = {
              baseState: i.baseState,
              firstBaseUpdate: n,
              lastBaseUpdate: d,
              shared: i.shared,
              effects: i.effects,
            }),
            void (e.updateQueue = r)
          );
        }
        null === (e = r.lastBaseUpdate)
          ? (r.firstBaseUpdate = t)
          : (e.next = t),
          (r.lastBaseUpdate = t);
      }
      function jd(e, t, r, i) {
        var n = e.updateQueue;
        Pd = !1;
        var d = n.firstBaseUpdate,
          s = n.lastBaseUpdate,
          l = n.shared.pending;
        if (null !== l) {
          n.shared.pending = null;
          var u = l,
            c = u.next;
          (u.next = null), null === s ? (d = c) : (s.next = c), (s = u);
          var a = e.alternate;
          null !== a &&
            (l = (a = a.updateQueue).lastBaseUpdate) !== s &&
            (null === l ? (a.firstBaseUpdate = c) : (l.next = c),
            (a.lastBaseUpdate = u));
        }
        if (null !== d) {
          var o = n.baseState;
          for (s = 0, a = c = u = null, l = d; ; ) {
            var f = l.lane,
              h = l.eventTime;
            if ((i & f) === f) {
              null !== a &&
                (a = a.next =
                  {
                    eventTime: h,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                  });
              e: {
                var p = e,
                  y = l;
                switch (((f = t), (h = r), y.tag)) {
                  case 1:
                    if ('function' == typeof (p = y.payload)) {
                      o = p.call(h, o, f);
                      break e;
                    }
                    o = p;
                    break e;
                  case 3:
                    p.flags = (-65537 & p.flags) | 128;
                  case 0:
                    if (
                      null ==
                      (f =
                        'function' == typeof (p = y.payload)
                          ? p.call(h, o, f)
                          : p)
                    )
                      break e;
                    o = j({}, o, f);
                    break e;
                  case 2:
                    Pd = !0;
                }
              }
              null !== l.callback &&
                0 !== l.lane &&
                ((e.flags |= 64),
                null === (f = n.effects) ? (n.effects = [l]) : f.push(l));
            } else
              (h = {
                eventTime: h,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              }),
                null === a ? ((c = a = h), (u = o)) : (a = a.next = h),
                (s |= f);
            if (null === (l = l.next)) {
              if (null === (l = n.shared.pending)) break;
              (l = (f = l).next),
                (f.next = null),
                (n.lastBaseUpdate = f),
                (n.shared.pending = null);
            }
          }
          if (
            (null === a && (u = o),
            (n.baseState = u),
            (n.firstBaseUpdate = c),
            (n.lastBaseUpdate = a),
            null !== (t = n.shared.interleaved))
          ) {
            n = t;
            do {
              (s |= n.lane), (n = n.next);
            } while (n !== t);
          } else null === d && (n.shared.lanes = 0);
          (Lu |= s), (e.lanes = s), (e.memoizedState = o);
        }
      }
      function Id(e, t, r) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var i = e[t],
              n = i.callback;
            if (null !== n) {
              if (((i.callback = null), (i = r), 'function' != typeof n))
                throw Error(d(191, n));
              n.call(i);
            }
          }
      }
      var Md = new i.Component().refs;
      function Bd(e, t, r, i) {
        (r = null == (r = r(i, (t = e.memoizedState))) ? t : j({}, t, r)),
          (e.memoizedState = r),
          0 === e.lanes && (e.updateQueue.baseState = r);
      }
      var Ud = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && ze(e) === e;
        },
        enqueueSetState: function (e, t, r) {
          e = e._reactInternals;
          var i = ec(),
            n = tc(e),
            d = _d(i, n);
          (d.payload = t),
            null != r && (d.callback = r),
            null !== (t = Nd(e, d, n)) && (rc(t, e, n, i), Od(t, e, n));
        },
        enqueueReplaceState: function (e, t, r) {
          e = e._reactInternals;
          var i = ec(),
            n = tc(e),
            d = _d(i, n);
          (d.tag = 1),
            (d.payload = t),
            null != r && (d.callback = r),
            null !== (t = Nd(e, d, n)) && (rc(t, e, n, i), Od(t, e, n));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var r = ec(),
            i = tc(e),
            n = _d(r, i);
          (n.tag = 2),
            null != t && (n.callback = t),
            null !== (t = Nd(e, n, i)) && (rc(t, e, i, r), Od(t, e, i));
        },
      };
      function zd(e, t, r, i, n, d, s) {
        return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(i, d, s)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !li(r, i) ||
              !li(n, d);
      }
      function Hd(e, t, r) {
        var i = !1,
          n = xn,
          d = t.contextType;
        return (
          'object' == typeof d && null !== d
            ? (d = Gd(d))
            : ((n = Rn(t) ? Pn : kn.current),
              (d = (i = null != (i = t.contextTypes)) ? Tn(e, n) : xn)),
          (t = new t(r, d)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Ud),
          (e.stateNode = t),
          (t._reactInternals = e),
          i &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              n),
            (e.__reactInternalMemoizedMaskedChildContext = d)),
          t
        );
      }
      function Qd(e, t, r, i) {
        (e = t.state),
          'function' == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(r, i),
          'function' == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(r, i),
          t.state !== e && Ud.enqueueReplaceState(t, t.state, null);
      }
      function $d(e, t, r, i) {
        var n = e.stateNode;
        (n.props = r), (n.state = e.memoizedState), (n.refs = Md), Td(e);
        var d = t.contextType;
        'object' == typeof d && null !== d
          ? (n.context = Gd(d))
          : ((d = Rn(t) ? Pn : kn.current), (n.context = Tn(e, d))),
          (n.state = e.memoizedState),
          'function' == typeof (d = t.getDerivedStateFromProps) &&
            (Bd(e, t, d, r), (n.state = e.memoizedState)),
          'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof n.getSnapshotBeforeUpdate ||
            ('function' != typeof n.UNSAFE_componentWillMount &&
              'function' != typeof n.componentWillMount) ||
            ((t = n.state),
            'function' == typeof n.componentWillMount && n.componentWillMount(),
            'function' == typeof n.UNSAFE_componentWillMount &&
              n.UNSAFE_componentWillMount(),
            t !== n.state && Ud.enqueueReplaceState(n, n.state, null),
            jd(e, r, n, i),
            (n.state = e.memoizedState)),
          'function' == typeof n.componentDidMount && (e.flags |= 4194308);
      }
      function Wd(e, t, r) {
        if (
          null !== (e = r.ref) &&
          'function' != typeof e &&
          'object' != typeof e
        ) {
          if (r._owner) {
            if ((r = r._owner)) {
              if (1 !== r.tag) throw Error(d(309));
              var i = r.stateNode;
            }
            if (!i) throw Error(d(147, e));
            var n = i,
              s = '' + e;
            return null !== t &&
              null !== t.ref &&
              'function' == typeof t.ref &&
              t.ref._stringRef === s
              ? t.ref
              : ((t = function (e) {
                  var t = n.refs;
                  t === Md && (t = n.refs = {}),
                    null === e ? delete t[s] : (t[s] = e);
                }),
                (t._stringRef = s),
                t);
          }
          if ('string' != typeof e) throw Error(d(284));
          if (!r._owner) throw Error(d(290, e));
        }
        return e;
      }
      function Vd(e, t) {
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(
            d(
              31,
              '[object Object]' === e
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : e
            )
          ))
        );
      }
      function qd(e) {
        return (0, e._init)(e._payload);
      }
      function Kd(e) {
        function t(t, r) {
          if (e) {
            var i = t.deletions;
            null === i ? ((t.deletions = [r]), (t.flags |= 16)) : i.push(r);
          }
        }
        function r(r, i) {
          if (!e) return null;
          for (; null !== i; ) t(r, i), (i = i.sibling);
          return null;
        }
        function i(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function n(e, t) {
          return ((e = _c(e, t)).index = 0), (e.sibling = null), e;
        }
        function s(t, r, i) {
          return (
            (t.index = i),
            e
              ? null !== (i = t.alternate)
                ? (i = i.index) < r
                  ? ((t.flags |= 2), r)
                  : i
                : ((t.flags |= 2), r)
              : ((t.flags |= 1048576), r)
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags |= 2), t;
        }
        function u(e, t, r, i) {
          return null === t || 6 !== t.tag
            ? (((t = jc(r, e.mode, i)).return = e), t)
            : (((t = n(t, r)).return = e), t);
        }
        function c(e, t, r, i) {
          var d = r.type;
          return d === w
            ? o(e, t, r.props.children, i, r.key)
            : null !== t &&
              (t.elementType === d ||
                ('object' == typeof d &&
                  null !== d &&
                  d.$$typeof === R &&
                  qd(d) === t.type))
            ? (((i = n(t, r.props)).ref = Wd(e, t, r)), (i.return = e), i)
            : (((i = Nc(r.type, r.key, r.props, null, e.mode, i)).ref = Wd(
                e,
                t,
                r
              )),
              (i.return = e),
              i);
        }
        function a(e, t, r, i) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== r.containerInfo ||
            t.stateNode.implementation !== r.implementation
            ? (((t = Ic(r, e.mode, i)).return = e), t)
            : (((t = n(t, r.children || [])).return = e), t);
        }
        function o(e, t, r, i, d) {
          return null === t || 7 !== t.tag
            ? (((t = Oc(r, e.mode, i, d)).return = e), t)
            : (((t = n(t, r)).return = e), t);
        }
        function f(e, t, r) {
          if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return ((t = jc('' + t, e.mode, r)).return = e), t;
          if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
              case E:
                return (
                  ((r = Nc(t.type, t.key, t.props, null, e.mode, r)).ref = Wd(
                    e,
                    null,
                    t
                  )),
                  (r.return = e),
                  r
                );
              case A:
                return ((t = Ic(t, e.mode, r)).return = e), t;
              case R:
                return f(e, (0, t._init)(t._payload), r);
            }
            if (te(t) || O(t))
              return ((t = Oc(t, e.mode, r, null)).return = e), t;
            Vd(e, t);
          }
          return null;
        }
        function h(e, t, r, i) {
          var n = null !== t ? t.key : null;
          if (('string' == typeof r && '' !== r) || 'number' == typeof r)
            return null !== n ? null : u(e, t, '' + r, i);
          if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
              case E:
                return r.key === n ? c(e, t, r, i) : null;
              case A:
                return r.key === n ? a(e, t, r, i) : null;
              case R:
                return h(e, t, (n = r._init)(r._payload), i);
            }
            if (te(r) || O(r)) return null !== n ? null : o(e, t, r, i, null);
            Vd(e, r);
          }
          return null;
        }
        function p(e, t, r, i, n) {
          if (('string' == typeof i && '' !== i) || 'number' == typeof i)
            return u(t, (e = e.get(r) || null), '' + i, n);
          if ('object' == typeof i && null !== i) {
            switch (i.$$typeof) {
              case E:
                return c(
                  t,
                  (e = e.get(null === i.key ? r : i.key) || null),
                  i,
                  n
                );
              case A:
                return a(
                  t,
                  (e = e.get(null === i.key ? r : i.key) || null),
                  i,
                  n
                );
              case R:
                return p(e, t, r, (0, i._init)(i._payload), n);
            }
            if (te(i) || O(i)) return o(t, (e = e.get(r) || null), i, n, null);
            Vd(t, i);
          }
          return null;
        }
        function y(n, d, l, u) {
          for (
            var c = null, a = null, o = d, y = (d = 0), m = null;
            null !== o && y < l.length;
            y++
          ) {
            o.index > y ? ((m = o), (o = null)) : (m = o.sibling);
            var g = h(n, o, l[y], u);
            if (null === g) {
              null === o && (o = m);
              break;
            }
            e && o && null === g.alternate && t(n, o),
              (d = s(g, d, y)),
              null === a ? (c = g) : (a.sibling = g),
              (a = g),
              (o = m);
          }
          if (y === l.length) return r(n, o), nd && Xn(n, y), c;
          if (null === o) {
            for (; y < l.length; y++)
              null !== (o = f(n, l[y], u)) &&
                ((d = s(o, d, y)),
                null === a ? (c = o) : (a.sibling = o),
                (a = o));
            return nd && Xn(n, y), c;
          }
          for (o = i(n, o); y < l.length; y++)
            null !== (m = p(o, n, y, l[y], u)) &&
              (e &&
                null !== m.alternate &&
                o.delete(null === m.key ? y : m.key),
              (d = s(m, d, y)),
              null === a ? (c = m) : (a.sibling = m),
              (a = m));
          return (
            e &&
              o.forEach(function (e) {
                return t(n, e);
              }),
            nd && Xn(n, y),
            c
          );
        }
        function m(n, l, u, c) {
          var a = O(u);
          if ('function' != typeof a) throw Error(d(150));
          if (null == (u = a.call(u))) throw Error(d(151));
          for (
            var o = (a = null), y = l, m = (l = 0), g = null, b = u.next();
            null !== y && !b.done;
            m++, b = u.next()
          ) {
            y.index > m ? ((g = y), (y = null)) : (g = y.sibling);
            var v = h(n, y, b.value, c);
            if (null === v) {
              null === y && (y = g);
              break;
            }
            e && y && null === v.alternate && t(n, y),
              (l = s(v, l, m)),
              null === o ? (a = v) : (o.sibling = v),
              (o = v),
              (y = g);
          }
          if (b.done) return r(n, y), nd && Xn(n, m), a;
          if (null === y) {
            for (; !b.done; m++, b = u.next())
              null !== (b = f(n, b.value, c)) &&
                ((l = s(b, l, m)),
                null === o ? (a = b) : (o.sibling = b),
                (o = b));
            return nd && Xn(n, m), a;
          }
          for (y = i(n, y); !b.done; m++, b = u.next())
            null !== (b = p(y, n, m, b.value, c)) &&
              (e &&
                null !== b.alternate &&
                y.delete(null === b.key ? m : b.key),
              (l = s(b, l, m)),
              null === o ? (a = b) : (o.sibling = b),
              (o = b));
          return (
            e &&
              y.forEach(function (e) {
                return t(n, e);
              }),
            nd && Xn(n, m),
            a
          );
        }
        return function e(i, d, s, u) {
          if (
            ('object' == typeof s &&
              null !== s &&
              s.type === w &&
              null === s.key &&
              (s = s.props.children),
            'object' == typeof s && null !== s)
          ) {
            switch (s.$$typeof) {
              case E:
                e: {
                  for (var c = s.key, a = d; null !== a; ) {
                    if (a.key === c) {
                      if ((c = s.type) === w) {
                        if (7 === a.tag) {
                          r(i, a.sibling),
                            ((d = n(a, s.props.children)).return = i),
                            (i = d);
                          break e;
                        }
                      } else if (
                        a.elementType === c ||
                        ('object' == typeof c &&
                          null !== c &&
                          c.$$typeof === R &&
                          qd(c) === a.type)
                      ) {
                        r(i, a.sibling),
                          ((d = n(a, s.props)).ref = Wd(i, a, s)),
                          (d.return = i),
                          (i = d);
                        break e;
                      }
                      r(i, a);
                      break;
                    }
                    t(i, a), (a = a.sibling);
                  }
                  s.type === w
                    ? (((d = Oc(s.props.children, i.mode, u, s.key)).return =
                        i),
                      (i = d))
                    : (((u = Nc(s.type, s.key, s.props, null, i.mode, u)).ref =
                        Wd(i, d, s)),
                      (u.return = i),
                      (i = u));
                }
                return l(i);
              case A:
                e: {
                  for (a = s.key; null !== d; ) {
                    if (d.key === a) {
                      if (
                        4 === d.tag &&
                        d.stateNode.containerInfo === s.containerInfo &&
                        d.stateNode.implementation === s.implementation
                      ) {
                        r(i, d.sibling),
                          ((d = n(d, s.children || [])).return = i),
                          (i = d);
                        break e;
                      }
                      r(i, d);
                      break;
                    }
                    t(i, d), (d = d.sibling);
                  }
                  ((d = Ic(s, i.mode, u)).return = i), (i = d);
                }
                return l(i);
              case R:
                return e(i, d, (a = s._init)(s._payload), u);
            }
            if (te(s)) return y(i, d, s, u);
            if (O(s)) return m(i, d, s, u);
            Vd(i, s);
          }
          return ('string' == typeof s && '' !== s) || 'number' == typeof s
            ? ((s = '' + s),
              null !== d && 6 === d.tag
                ? (r(i, d.sibling), ((d = n(d, s)).return = i), (i = d))
                : (r(i, d), ((d = jc(s, i.mode, u)).return = i), (i = d)),
              l(i))
            : r(i, d);
        };
      }
      var Yd = Kd(!0),
        Zd = Kd(!1),
        Xd = {},
        Jd = Dn(Xd),
        es = Dn(Xd),
        ts = Dn(Xd);
      function rs(e) {
        if (e === Xd) throw Error(d(174));
        return e;
      }
      function is(e, t) {
        switch ((Sn(ts, t), Sn(es, e), Sn(Jd, Xd), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
            break;
          default:
            t = ue(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        Gn(Jd), Sn(Jd, t);
      }
      function ns() {
        Gn(Jd), Gn(es), Gn(ts);
      }
      function ds(e) {
        rs(ts.current);
        var t = rs(Jd.current),
          r = ue(t, e.type);
        t !== r && (Sn(es, e), Sn(Jd, r));
      }
      function ss(e) {
        es.current === e && (Gn(Jd), Gn(es));
      }
      var ls = Dn(0);
      function us(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var r = t.memoizedState;
            if (
              null !== r &&
              (null === (r = r.dehydrated) ||
                '$?' === r.data ||
                '$!' === r.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var cs = [];
      function as() {
        for (var e = 0; e < cs.length; e++)
          cs[e]._workInProgressVersionPrimary = null;
        cs.length = 0;
      }
      var os = C.ReactCurrentDispatcher,
        fs = C.ReactCurrentBatchConfig,
        hs = 0,
        ps = null,
        ys = null,
        ms = null,
        gs = !1,
        bs = !1,
        vs = 0,
        Cs = 0;
      function Es() {
        throw Error(d(321));
      }
      function As(e, t) {
        if (null === t) return !1;
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!si(e[r], t[r])) return !1;
        return !0;
      }
      function ws(e, t, r, i, n, s) {
        if (
          ((hs = s),
          (ps = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (os.current = null === e || null === e.memoizedState ? sl : ll),
          (e = r(i, n)),
          bs)
        ) {
          s = 0;
          do {
            if (((bs = !1), (vs = 0), 25 <= s)) throw Error(d(301));
            (s += 1),
              (ms = ys = null),
              (t.updateQueue = null),
              (os.current = ul),
              (e = r(i, n));
          } while (bs);
        }
        if (
          ((os.current = dl),
          (t = null !== ys && null !== ys.next),
          (hs = 0),
          (ms = ys = ps = null),
          (gs = !1),
          t)
        )
          throw Error(d(300));
        return e;
      }
      function Ds() {
        var e = 0 !== vs;
        return (vs = 0), e;
      }
      function Gs() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === ms ? (ps.memoizedState = ms = e) : (ms = ms.next = e), ms
        );
      }
      function Ss() {
        if (null === ys) {
          var e = ps.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ys.next;
        var t = null === ms ? ps.memoizedState : ms.next;
        if (null !== t) (ms = t), (ys = e);
        else {
          if (null === e) throw Error(d(310));
          (e = {
            memoizedState: (ys = e).memoizedState,
            baseState: ys.baseState,
            baseQueue: ys.baseQueue,
            queue: ys.queue,
            next: null,
          }),
            null === ms ? (ps.memoizedState = ms = e) : (ms = ms.next = e);
        }
        return ms;
      }
      function xs(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      function ks(e) {
        var t = Ss(),
          r = t.queue;
        if (null === r) throw Error(d(311));
        r.lastRenderedReducer = e;
        var i = ys,
          n = i.baseQueue,
          s = r.pending;
        if (null !== s) {
          if (null !== n) {
            var l = n.next;
            (n.next = s.next), (s.next = l);
          }
          (i.baseQueue = n = s), (r.pending = null);
        }
        if (null !== n) {
          (s = n.next), (i = i.baseState);
          var u = (l = null),
            c = null,
            a = s;
          do {
            var o = a.lane;
            if ((hs & o) === o)
              null !== c &&
                (c = c.next =
                  {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                  }),
                (i = a.hasEagerState ? a.eagerState : e(i, a.action));
            else {
              var f = {
                lane: o,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null,
              };
              null === c ? ((u = c = f), (l = i)) : (c = c.next = f),
                (ps.lanes |= o),
                (Lu |= o);
            }
            a = a.next;
          } while (null !== a && a !== s);
          null === c ? (l = i) : (c.next = u),
            si(i, t.memoizedState) || (vl = !0),
            (t.memoizedState = i),
            (t.baseState = l),
            (t.baseQueue = c),
            (r.lastRenderedState = i);
        }
        if (null !== (e = r.interleaved)) {
          n = e;
          do {
            (s = n.lane), (ps.lanes |= s), (Lu |= s), (n = n.next);
          } while (n !== e);
        } else null === n && (r.lanes = 0);
        return [t.memoizedState, r.dispatch];
      }
      function Fs(e) {
        var t = Ss(),
          r = t.queue;
        if (null === r) throw Error(d(311));
        r.lastRenderedReducer = e;
        var i = r.dispatch,
          n = r.pending,
          s = t.memoizedState;
        if (null !== n) {
          r.pending = null;
          var l = (n = n.next);
          do {
            (s = e(s, l.action)), (l = l.next);
          } while (l !== n);
          si(s, t.memoizedState) || (vl = !0),
            (t.memoizedState = s),
            null === t.baseQueue && (t.baseState = s),
            (r.lastRenderedState = s);
        }
        return [s, i];
      }
      function Ps() {}
      function Ts(e, t) {
        var r = ps,
          i = Ss(),
          n = t(),
          s = !si(i.memoizedState, n);
        if (
          (s && ((i.memoizedState = n), (vl = !0)),
          (i = i.queue),
          Hs(Ns.bind(null, r, i, e), [e]),
          i.getSnapshot !== t || s || (null !== ms && 1 & ms.memoizedState.tag))
        ) {
          if (
            ((r.flags |= 2048),
            Is(9, _s.bind(null, r, i, n, t), void 0, null),
            null === Fu)
          )
            throw Error(d(349));
          0 != (30 & hs) || Rs(r, t, n);
        }
        return n;
      }
      function Rs(e, t, r) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: r }),
          null === (t = ps.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (ps.updateQueue = t),
              (t.stores = [e]))
            : null === (r = t.stores)
            ? (t.stores = [e])
            : r.push(e);
      }
      function _s(e, t, r, i) {
        (t.value = r), (t.getSnapshot = i), Os(t) && Ls(e);
      }
      function Ns(e, t, r) {
        return r(function () {
          Os(t) && Ls(e);
        });
      }
      function Os(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !si(e, r);
        } catch (i) {
          return !0;
        }
      }
      function Ls(e) {
        var t = Fd(e, 1);
        null !== t && rc(t, e, 1, -1);
      }
      function js(e) {
        var t = Gs();
        return (
          'function' == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xs,
            lastRenderedState: e,
          }),
          (t.queue = e),
          (e = e.dispatch = tl.bind(null, ps, e)),
          [t.memoizedState, e]
        );
      }
      function Is(e, t, r, i) {
        return (
          (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
          null === (t = ps.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (ps.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (r = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e)),
          e
        );
      }
      function Ms() {
        return Ss().memoizedState;
      }
      function Bs(e, t, r, i) {
        var n = Gs();
        (ps.flags |= e),
          (n.memoizedState = Is(1 | t, r, void 0, void 0 === i ? null : i));
      }
      function Us(e, t, r, i) {
        var n = Ss();
        i = void 0 === i ? null : i;
        var d = void 0;
        if (null !== ys) {
          var s = ys.memoizedState;
          if (((d = s.destroy), null !== i && As(i, s.deps)))
            return void (n.memoizedState = Is(t, r, d, i));
        }
        (ps.flags |= e), (n.memoizedState = Is(1 | t, r, d, i));
      }
      function zs(e, t) {
        return Bs(8390656, 8, e, t);
      }
      function Hs(e, t) {
        return Us(2048, 8, e, t);
      }
      function Qs(e, t) {
        return Us(4, 2, e, t);
      }
      function $s(e, t) {
        return Us(4, 4, e, t);
      }
      function Ws(e, t) {
        return 'function' == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Vs(e, t, r) {
        return (
          (r = null != r ? r.concat([e]) : null),
          Us(4, 4, Ws.bind(null, t, e), r)
        );
      }
      function qs() {}
      function Ks(e, t) {
        var r = Ss();
        t = void 0 === t ? null : t;
        var i = r.memoizedState;
        return null !== i && null !== t && As(t, i[1])
          ? i[0]
          : ((r.memoizedState = [e, t]), e);
      }
      function Ys(e, t) {
        var r = Ss();
        t = void 0 === t ? null : t;
        var i = r.memoizedState;
        return null !== i && null !== t && As(t, i[1])
          ? i[0]
          : ((e = e()), (r.memoizedState = [e, t]), e);
      }
      function Zs(e, t, r) {
        return 0 == (21 & hs)
          ? (e.baseState && ((e.baseState = !1), (vl = !0)),
            (e.memoizedState = r))
          : (si(r, t) ||
              ((r = yt()), (ps.lanes |= r), (Lu |= r), (e.baseState = !0)),
            t);
      }
      function Xs(e, t) {
        var r = vt;
        (vt = 0 !== r && 4 > r ? r : 4), e(!0);
        var i = fs.transition;
        fs.transition = {};
        try {
          e(!1), t();
        } finally {
          (vt = r), (fs.transition = i);
        }
      }
      function Js() {
        return Ss().memoizedState;
      }
      function el(e, t, r) {
        var i = tc(e);
        if (
          ((r = {
            lane: i,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          rl(e))
        )
          il(t, r);
        else if (null !== (r = kd(e, t, r, i))) {
          rc(r, e, i, ec()), nl(r, t, i);
        }
      }
      function tl(e, t, r) {
        var i = tc(e),
          n = {
            lane: i,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
        if (rl(e)) il(t, n);
        else {
          var d = e.alternate;
          if (
            0 === e.lanes &&
            (null === d || 0 === d.lanes) &&
            null !== (d = t.lastRenderedReducer)
          )
            try {
              var s = t.lastRenderedState,
                l = d(s, r);
              if (((n.hasEagerState = !0), (n.eagerState = l), si(l, s))) {
                var u = t.interleaved;
                return (
                  null === u
                    ? ((n.next = n), xd(t))
                    : ((n.next = u.next), (u.next = n)),
                  void (t.interleaved = n)
                );
              }
            } catch (c) {}
          null !== (r = kd(e, t, n, i)) &&
            (rc(r, e, i, (n = ec())), nl(r, t, i));
        }
      }
      function rl(e) {
        var t = e.alternate;
        return e === ps || (null !== t && t === ps);
      }
      function il(e, t) {
        bs = gs = !0;
        var r = e.pending;
        null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
          (e.pending = t);
      }
      function nl(e, t, r) {
        if (0 != (4194240 & r)) {
          var i = t.lanes;
          (r |= i &= e.pendingLanes), (t.lanes = r), bt(e, r);
        }
      }
      var dl = {
          readContext: Gd,
          useCallback: Es,
          useContext: Es,
          useEffect: Es,
          useImperativeHandle: Es,
          useInsertionEffect: Es,
          useLayoutEffect: Es,
          useMemo: Es,
          useReducer: Es,
          useRef: Es,
          useState: Es,
          useDebugValue: Es,
          useDeferredValue: Es,
          useTransition: Es,
          useMutableSource: Es,
          useSyncExternalStore: Es,
          useId: Es,
          unstable_isNewReconciler: !1,
        },
        sl = {
          readContext: Gd,
          useCallback: function (e, t) {
            return (Gs().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Gd,
          useEffect: zs,
          useImperativeHandle: function (e, t, r) {
            return (
              (r = null != r ? r.concat([e]) : null),
              Bs(4194308, 4, Ws.bind(null, t, e), r)
            );
          },
          useLayoutEffect: function (e, t) {
            return Bs(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            return Bs(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var r = Gs();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (r.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, r) {
            var i = Gs();
            return (
              (t = void 0 !== r ? r(t) : t),
              (i.memoizedState = i.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
              (i.queue = e),
              (e = e.dispatch = el.bind(null, ps, e)),
              [i.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Gs().memoizedState = e);
          },
          useState: js,
          useDebugValue: qs,
          useDeferredValue: function (e) {
            return (Gs().memoizedState = e);
          },
          useTransition: function () {
            var e = js(!1),
              t = e[0];
            return (e = Xs.bind(null, e[1])), (Gs().memoizedState = e), [t, e];
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, r) {
            var i = ps,
              n = Gs();
            if (nd) {
              if (void 0 === r) throw Error(d(407));
              r = r();
            } else {
              if (((r = t()), null === Fu)) throw Error(d(349));
              0 != (30 & hs) || Rs(i, t, r);
            }
            n.memoizedState = r;
            var s = { value: r, getSnapshot: t };
            return (
              (n.queue = s),
              zs(Ns.bind(null, i, s, e), [e]),
              (i.flags |= 2048),
              Is(9, _s.bind(null, i, s, r, t), void 0, null),
              r
            );
          },
          useId: function () {
            var e = Gs(),
              t = Fu.identifierPrefix;
            if (nd) {
              var r = Zn;
              (t =
                ':' +
                t +
                'R' +
                (r = (Yn & ~(1 << (32 - st(Yn) - 1))).toString(32) + r)),
                0 < (r = vs++) && (t += 'H' + r.toString(32)),
                (t += ':');
            } else t = ':' + t + 'r' + (r = Cs++).toString(32) + ':';
            return (e.memoizedState = t);
          },
          unstable_isNewReconciler: !1,
        },
        ll = {
          readContext: Gd,
          useCallback: Ks,
          useContext: Gd,
          useEffect: Hs,
          useImperativeHandle: Vs,
          useInsertionEffect: Qs,
          useLayoutEffect: $s,
          useMemo: Ys,
          useReducer: ks,
          useRef: Ms,
          useState: function () {
            return ks(xs);
          },
          useDebugValue: qs,
          useDeferredValue: function (e) {
            return Zs(Ss(), ys.memoizedState, e);
          },
          useTransition: function () {
            return [ks(xs)[0], Ss().memoizedState];
          },
          useMutableSource: Ps,
          useSyncExternalStore: Ts,
          useId: Js,
          unstable_isNewReconciler: !1,
        },
        ul = {
          readContext: Gd,
          useCallback: Ks,
          useContext: Gd,
          useEffect: Hs,
          useImperativeHandle: Vs,
          useInsertionEffect: Qs,
          useLayoutEffect: $s,
          useMemo: Ys,
          useReducer: Fs,
          useRef: Ms,
          useState: function () {
            return Fs(xs);
          },
          useDebugValue: qs,
          useDeferredValue: function (e) {
            var t = Ss();
            return null === ys
              ? (t.memoizedState = e)
              : Zs(t, ys.memoizedState, e);
          },
          useTransition: function () {
            return [Fs(xs)[0], Ss().memoizedState];
          },
          useMutableSource: Ps,
          useSyncExternalStore: Ts,
          useId: Js,
          unstable_isNewReconciler: !1,
        };
      function cl(e, t) {
        try {
          var r = '',
            i = t;
          do {
            (r += U(i)), (i = i.return);
          } while (i);
          var n = r;
        } catch (d) {
          n = '\nError generating stack: ' + d.message + '\n' + d.stack;
        }
        return { value: e, source: t, stack: n, digest: null };
      }
      function al(e, t, r) {
        return {
          value: e,
          source: null,
          stack: null != r ? r : null,
          digest: null != t ? t : null,
        };
      }
      function ol(e, t) {
        try {
          console.error(t.value);
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      var fl = 'function' == typeof WeakMap ? WeakMap : Map;
      function hl(e, t, r) {
        ((r = _d(-1, r)).tag = 3), (r.payload = { element: null });
        var i = t.value;
        return (
          (r.callback = function () {
            Qu || ((Qu = !0), ($u = i)), ol(0, t);
          }),
          r
        );
      }
      function pl(e, t, r) {
        (r = _d(-1, r)).tag = 3;
        var i = e.type.getDerivedStateFromError;
        if ('function' == typeof i) {
          var n = t.value;
          (r.payload = function () {
            return i(n);
          }),
            (r.callback = function () {
              ol(0, t);
            });
        }
        var d = e.stateNode;
        return (
          null !== d &&
            'function' == typeof d.componentDidCatch &&
            (r.callback = function () {
              ol(0, t),
                'function' != typeof i &&
                  (null === Wu ? (Wu = new Set([this])) : Wu.add(this));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : '',
              });
            }),
          r
        );
      }
      function yl(e, t, r) {
        var i = e.pingCache;
        if (null === i) {
          i = e.pingCache = new fl();
          var n = new Set();
          i.set(t, n);
        } else void 0 === (n = i.get(t)) && ((n = new Set()), i.set(t, n));
        n.has(r) || (n.add(r), (e = Gc.bind(null, e, t, r)), t.then(e, e));
      }
      function ml(e) {
        do {
          var t;
          if (
            ((t = 13 === e.tag) &&
              (t = null === (t = e.memoizedState) || null !== t.dehydrated),
            t)
          )
            return e;
          e = e.return;
        } while (null !== e);
        return null;
      }
      function gl(e, t, r, i, n) {
        return 0 == (1 & e.mode)
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (r.flags |= 131072),
                (r.flags &= -52805),
                1 === r.tag &&
                  (null === r.alternate
                    ? (r.tag = 17)
                    : (((t = _d(-1, 1)).tag = 2), Nd(r, t, 1))),
                (r.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = n), e);
      }
      var bl = C.ReactCurrentOwner,
        vl = !1;
      function Cl(e, t, r, i) {
        t.child = null === e ? Zd(t, null, r, i) : Yd(t, e.child, r, i);
      }
      function El(e, t, r, i, n) {
        r = r.render;
        var d = t.ref;
        return (
          Dd(t, n),
          (i = ws(e, t, r, i, d, n)),
          (r = Ds()),
          null === e || vl
            ? (nd && r && ed(t), (t.flags |= 1), Cl(e, t, i, n), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~n),
              Ql(e, t, n))
        );
      }
      function Al(e, t, r, i, n) {
        if (null === e) {
          var d = r.type;
          return 'function' != typeof d ||
            Rc(d) ||
            void 0 !== d.defaultProps ||
            null !== r.compare ||
            void 0 !== r.defaultProps
            ? (((e = Nc(r.type, null, i, t, t.mode, n)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = d), wl(e, t, d, i, n));
        }
        if (((d = e.child), 0 == (e.lanes & n))) {
          var s = d.memoizedProps;
          if ((r = null !== (r = r.compare) ? r : li)(s, i) && e.ref === t.ref)
            return Ql(e, t, n);
        }
        return (
          (t.flags |= 1),
          ((e = _c(d, i)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function wl(e, t, r, i, n) {
        if (null !== e) {
          var d = e.memoizedProps;
          if (li(d, i) && e.ref === t.ref) {
            if (((vl = !1), (t.pendingProps = i = d), 0 == (e.lanes & n)))
              return (t.lanes = e.lanes), Ql(e, t, n);
            0 != (131072 & e.flags) && (vl = !0);
          }
        }
        return Sl(e, t, r, i, n);
      }
      function Dl(e, t, r) {
        var i = t.pendingProps,
          n = i.children,
          d = null !== e ? e.memoizedState : null;
        if ('hidden' === i.mode)
          if (0 == (1 & t.mode))
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              Sn(_u, Ru),
              (Ru |= r);
          else {
            if (0 == (1073741824 & r))
              return (
                (e = null !== d ? d.baseLanes | r : r),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
                }),
                (t.updateQueue = null),
                Sn(_u, Ru),
                (Ru |= e),
                null
              );
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              (i = null !== d ? d.baseLanes : r),
              Sn(_u, Ru),
              (Ru |= i);
          }
        else
          null !== d
            ? ((i = d.baseLanes | r), (t.memoizedState = null))
            : (i = r),
            Sn(_u, Ru),
            (Ru |= i);
        return Cl(e, t, n, r), t.child;
      }
      function Gl(e, t) {
        var r = t.ref;
        ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
          ((t.flags |= 512), (t.flags |= 2097152));
      }
      function Sl(e, t, r, i, n) {
        var d = Rn(r) ? Pn : kn.current;
        return (
          (d = Tn(t, d)),
          Dd(t, n),
          (r = ws(e, t, r, i, d, n)),
          (i = Ds()),
          null === e || vl
            ? (nd && i && ed(t), (t.flags |= 1), Cl(e, t, r, n), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~n),
              Ql(e, t, n))
        );
      }
      function xl(e, t, r, i, n) {
        if (Rn(r)) {
          var d = !0;
          Ln(t);
        } else d = !1;
        if ((Dd(t, n), null === t.stateNode))
          Hl(e, t), Hd(t, r, i), $d(t, r, i, n), (i = !0);
        else if (null === e) {
          var s = t.stateNode,
            l = t.memoizedProps;
          s.props = l;
          var u = s.context,
            c = r.contextType;
          'object' == typeof c && null !== c
            ? (c = Gd(c))
            : (c = Tn(t, (c = Rn(r) ? Pn : kn.current)));
          var a = r.getDerivedStateFromProps,
            o =
              'function' == typeof a ||
              'function' == typeof s.getSnapshotBeforeUpdate;
          o ||
            ('function' != typeof s.UNSAFE_componentWillReceiveProps &&
              'function' != typeof s.componentWillReceiveProps) ||
            ((l !== i || u !== c) && Qd(t, s, i, c)),
            (Pd = !1);
          var f = t.memoizedState;
          (s.state = f),
            jd(t, i, s, n),
            (u = t.memoizedState),
            l !== i || f !== u || Fn.current || Pd
              ? ('function' == typeof a &&
                  (Bd(t, r, a, i), (u = t.memoizedState)),
                (l = Pd || zd(t, r, l, i, f, u, c))
                  ? (o ||
                      ('function' != typeof s.UNSAFE_componentWillMount &&
                        'function' != typeof s.componentWillMount) ||
                      ('function' == typeof s.componentWillMount &&
                        s.componentWillMount(),
                      'function' == typeof s.UNSAFE_componentWillMount &&
                        s.UNSAFE_componentWillMount()),
                    'function' == typeof s.componentDidMount &&
                      (t.flags |= 4194308))
                  : ('function' == typeof s.componentDidMount &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = i),
                    (t.memoizedState = u)),
                (s.props = i),
                (s.state = u),
                (s.context = c),
                (i = l))
              : ('function' == typeof s.componentDidMount &&
                  (t.flags |= 4194308),
                (i = !1));
        } else {
          (s = t.stateNode),
            Rd(e, t),
            (l = t.memoizedProps),
            (c = t.type === t.elementType ? l : md(t.type, l)),
            (s.props = c),
            (o = t.pendingProps),
            (f = s.context),
            'object' == typeof (u = r.contextType) && null !== u
              ? (u = Gd(u))
              : (u = Tn(t, (u = Rn(r) ? Pn : kn.current)));
          var h = r.getDerivedStateFromProps;
          (a =
            'function' == typeof h ||
            'function' == typeof s.getSnapshotBeforeUpdate) ||
            ('function' != typeof s.UNSAFE_componentWillReceiveProps &&
              'function' != typeof s.componentWillReceiveProps) ||
            ((l !== o || f !== u) && Qd(t, s, i, u)),
            (Pd = !1),
            (f = t.memoizedState),
            (s.state = f),
            jd(t, i, s, n);
          var p = t.memoizedState;
          l !== o || f !== p || Fn.current || Pd
            ? ('function' == typeof h &&
                (Bd(t, r, h, i), (p = t.memoizedState)),
              (c = Pd || zd(t, r, c, i, f, p, u) || !1)
                ? (a ||
                    ('function' != typeof s.UNSAFE_componentWillUpdate &&
                      'function' != typeof s.componentWillUpdate) ||
                    ('function' == typeof s.componentWillUpdate &&
                      s.componentWillUpdate(i, p, u),
                    'function' == typeof s.UNSAFE_componentWillUpdate &&
                      s.UNSAFE_componentWillUpdate(i, p, u)),
                  'function' == typeof s.componentDidUpdate && (t.flags |= 4),
                  'function' == typeof s.getSnapshotBeforeUpdate &&
                    (t.flags |= 1024))
                : ('function' != typeof s.componentDidUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' != typeof s.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = i),
                  (t.memoizedState = p)),
              (s.props = i),
              (s.state = p),
              (s.context = u),
              (i = c))
            : ('function' != typeof s.componentDidUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof s.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (i = !1));
        }
        return kl(e, t, r, i, d, n);
      }
      function kl(e, t, r, i, n, d) {
        Gl(e, t);
        var s = 0 != (128 & t.flags);
        if (!i && !s) return n && jn(t, r, !1), Ql(e, t, d);
        (i = t.stateNode), (bl.current = t);
        var l =
          s && 'function' != typeof r.getDerivedStateFromError
            ? null
            : i.render();
        return (
          (t.flags |= 1),
          null !== e && s
            ? ((t.child = Yd(t, e.child, null, d)),
              (t.child = Yd(t, null, l, d)))
            : Cl(e, t, l, d),
          (t.memoizedState = i.state),
          n && jn(t, r, !0),
          t.child
        );
      }
      function Fl(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Nn(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Nn(0, t.context, !1),
          is(e, t.containerInfo);
      }
      function Pl(e, t, r, i, n) {
        return hd(), pd(n), (t.flags |= 256), Cl(e, t, r, i), t.child;
      }
      var Tl,
        Rl,
        _l,
        Nl,
        Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
      function Ll(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function jl(e, t, r) {
        var i,
          n = t.pendingProps,
          s = ls.current,
          l = !1,
          u = 0 != (128 & t.flags);
        if (
          ((i = u) ||
            (i = (null === e || null !== e.memoizedState) && 0 != (2 & s)),
          i
            ? ((l = !0), (t.flags &= -129))
            : (null !== e && null === e.memoizedState) || (s |= 1),
          Sn(ls, 1 & s),
          null === e)
        )
          return (
            cd(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 == (1 & t.mode)
                  ? (t.lanes = 1)
                  : '$!' === e.data
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
                null)
              : ((u = n.children),
                (e = n.fallback),
                l
                  ? ((n = t.mode),
                    (l = t.child),
                    (u = { mode: 'hidden', children: u }),
                    0 == (1 & n) && null !== l
                      ? ((l.childLanes = 0), (l.pendingProps = u))
                      : (l = Lc(u, n, 0, null)),
                    (e = Oc(e, n, r, null)),
                    (l.return = t),
                    (e.return = t),
                    (l.sibling = e),
                    (t.child = l),
                    (t.child.memoizedState = Ll(r)),
                    (t.memoizedState = Ol),
                    e)
                  : Il(t, u))
          );
        if (null !== (s = e.memoizedState) && null !== (i = s.dehydrated))
          return (function (e, t, r, i, n, s, l) {
            if (r)
              return 256 & t.flags
                ? ((t.flags &= -257), Ml(e, t, l, (i = al(Error(d(422))))))
                : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((s = i.fallback),
                  (n = t.mode),
                  (i = Lc(
                    { mode: 'visible', children: i.children },
                    n,
                    0,
                    null
                  )),
                  ((s = Oc(s, n, l, null)).flags |= 2),
                  (i.return = t),
                  (s.return = t),
                  (i.sibling = s),
                  (t.child = i),
                  0 != (1 & t.mode) && Yd(t, e.child, null, l),
                  (t.child.memoizedState = Ll(l)),
                  (t.memoizedState = Ol),
                  s);
            if (0 == (1 & t.mode)) return Ml(e, t, l, null);
            if ('$!' === n.data) {
              if ((i = n.nextSibling && n.nextSibling.dataset)) var u = i.dgst;
              return (
                (i = u), Ml(e, t, l, (i = al((s = Error(d(419))), i, void 0)))
              );
            }
            if (((u = 0 != (l & e.childLanes)), vl || u)) {
              if (null !== (i = Fu)) {
                switch (l & -l) {
                  case 4:
                    n = 2;
                    break;
                  case 16:
                    n = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    n = 32;
                    break;
                  case 536870912:
                    n = 268435456;
                    break;
                  default:
                    n = 0;
                }
                0 !== (n = 0 != (n & (i.suspendedLanes | l)) ? 0 : n) &&
                  n !== s.retryLane &&
                  ((s.retryLane = n), Fd(e, n), rc(i, e, n, -1));
              }
              return yc(), Ml(e, t, l, (i = al(Error(d(421)))));
            }
            return '$?' === n.data
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = xc.bind(null, e)),
                (n._reactRetry = t),
                null)
              : ((e = s.treeContext),
                (id = cn(n.nextSibling)),
                (rd = t),
                (nd = !0),
                (dd = null),
                null !== e &&
                  ((Vn[qn++] = Yn),
                  (Vn[qn++] = Zn),
                  (Vn[qn++] = Kn),
                  (Yn = e.id),
                  (Zn = e.overflow),
                  (Kn = t)),
                (t = Il(t, i.children)),
                (t.flags |= 4096),
                t);
          })(e, t, u, n, i, s, r);
        if (l) {
          (l = n.fallback), (u = t.mode), (i = (s = e.child).sibling);
          var c = { mode: 'hidden', children: n.children };
          return (
            0 == (1 & u) && t.child !== s
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = c),
                (t.deletions = null))
              : ((n = _c(s, c)).subtreeFlags = 14680064 & s.subtreeFlags),
            null !== i ? (l = _c(i, l)) : ((l = Oc(l, u, r, null)).flags |= 2),
            (l.return = t),
            (n.return = t),
            (n.sibling = l),
            (t.child = n),
            (n = l),
            (l = t.child),
            (u =
              null === (u = e.child.memoizedState)
                ? Ll(r)
                : {
                    baseLanes: u.baseLanes | r,
                    cachePool: null,
                    transitions: u.transitions,
                  }),
            (l.memoizedState = u),
            (l.childLanes = e.childLanes & ~r),
            (t.memoizedState = Ol),
            n
          );
        }
        return (
          (e = (l = e.child).sibling),
          (n = _c(l, { mode: 'visible', children: n.children })),
          0 == (1 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            (null === (r = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n
        );
      }
      function Il(e, t) {
        return (
          ((t = Lc({ mode: 'visible', children: t }, e.mode, 0, null)).return =
            e),
          (e.child = t)
        );
      }
      function Ml(e, t, r, i) {
        return (
          null !== i && pd(i),
          Yd(t, e.child, null, r),
          ((e = Il(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function Bl(e, t, r) {
        e.lanes |= t;
        var i = e.alternate;
        null !== i && (i.lanes |= t), wd(e.return, t, r);
      }
      function Ul(e, t, r, i, n) {
        var d = e.memoizedState;
        null === d
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: i,
              tail: r,
              tailMode: n,
            })
          : ((d.isBackwards = t),
            (d.rendering = null),
            (d.renderingStartTime = 0),
            (d.last = i),
            (d.tail = r),
            (d.tailMode = n));
      }
      function zl(e, t, r) {
        var i = t.pendingProps,
          n = i.revealOrder,
          d = i.tail;
        if ((Cl(e, t, i.children, r), 0 != (2 & (i = ls.current))))
          (i = (1 & i) | 2), (t.flags |= 128);
        else {
          if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Bl(e, r, t);
              else if (19 === e.tag) Bl(e, r, t);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          i &= 1;
        }
        if ((Sn(ls, i), 0 == (1 & t.mode))) t.memoizedState = null;
        else
          switch (n) {
            case 'forwards':
              for (r = t.child, n = null; null !== r; )
                null !== (e = r.alternate) && null === us(e) && (n = r),
                  (r = r.sibling);
              null === (r = n)
                ? ((n = t.child), (t.child = null))
                : ((n = r.sibling), (r.sibling = null)),
                Ul(t, !1, n, r, d);
              break;
            case 'backwards':
              for (r = null, n = t.child, t.child = null; null !== n; ) {
                if (null !== (e = n.alternate) && null === us(e)) {
                  t.child = n;
                  break;
                }
                (e = n.sibling), (n.sibling = r), (r = n), (n = e);
              }
              Ul(t, !0, r, null, d);
              break;
            case 'together':
              Ul(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Hl(e, t) {
        0 == (1 & t.mode) &&
          null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
      }
      function Ql(e, t, r) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Lu |= t.lanes),
          0 == (r & t.childLanes))
        )
          return null;
        if (null !== e && t.child !== e.child) throw Error(d(153));
        if (null !== t.child) {
          for (
            r = _c((e = t.child), e.pendingProps), t.child = r, r.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((r = r.sibling = _c(e, e.pendingProps)).return = t);
          r.sibling = null;
        }
        return t.child;
      }
      function $l(e, t) {
        if (!nd)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var r = null; null !== t; )
                null !== t.alternate && (r = t), (t = t.sibling);
              null === r ? (e.tail = null) : (r.sibling = null);
              break;
            case 'collapsed':
              r = e.tail;
              for (var i = null; null !== r; )
                null !== r.alternate && (i = r), (r = r.sibling);
              null === i
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (i.sibling = null);
          }
      }
      function Wl(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          r = 0,
          i = 0;
        if (t)
          for (var n = e.child; null !== n; )
            (r |= n.lanes | n.childLanes),
              (i |= 14680064 & n.subtreeFlags),
              (i |= 14680064 & n.flags),
              (n.return = e),
              (n = n.sibling);
        else
          for (n = e.child; null !== n; )
            (r |= n.lanes | n.childLanes),
              (i |= n.subtreeFlags),
              (i |= n.flags),
              (n.return = e),
              (n = n.sibling);
        return (e.subtreeFlags |= i), (e.childLanes = r), t;
      }
      function Vl(e, t, r) {
        var i = t.pendingProps;
        switch ((td(t), t.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Wl(t), null;
          case 1:
          case 17:
            return Rn(t.type) && _n(), Wl(t), null;
          case 3:
            return (
              (i = t.stateNode),
              ns(),
              Gn(Fn),
              Gn(kn),
              as(),
              i.pendingContext &&
                ((i.context = i.pendingContext), (i.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (od(t)
                  ? (t.flags |= 4)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                    ((t.flags |= 1024), null !== dd && (sc(dd), (dd = null)))),
              Rl(e, t),
              Wl(t),
              null
            );
          case 5:
            ss(t);
            var n = rs(ts.current);
            if (((r = t.type), null !== e && null != t.stateNode))
              _l(e, t, r, i, n),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
              if (!i) {
                if (null === t.stateNode) throw Error(d(166));
                return Wl(t), null;
              }
              if (((e = rs(Jd.current)), od(t))) {
                (i = t.stateNode), (r = t.type);
                var s = t.memoizedProps;
                switch (
                  ((i[fn] = t), (i[hn] = s), (e = 0 != (1 & t.mode)), r)
                ) {
                  case 'dialog':
                    Ii('cancel', i), Ii('close', i);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Ii('load', i);
                    break;
                  case 'video':
                  case 'audio':
                    for (n = 0; n < Ni.length; n++) Ii(Ni[n], i);
                    break;
                  case 'source':
                    Ii('error', i);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Ii('error', i), Ii('load', i);
                    break;
                  case 'details':
                    Ii('toggle', i);
                    break;
                  case 'input':
                    Y(i, s), Ii('invalid', i);
                    break;
                  case 'select':
                    (i._wrapperState = { wasMultiple: !!s.multiple }),
                      Ii('invalid', i);
                    break;
                  case 'textarea':
                    ne(i, s), Ii('invalid', i);
                }
                for (var u in (be(r, s), (n = null), s))
                  if (s.hasOwnProperty(u)) {
                    var c = s[u];
                    'children' === u
                      ? 'string' == typeof c
                        ? i.textContent !== c &&
                          (!0 !== s.suppressHydrationWarning &&
                            Zi(i.textContent, c, e),
                          (n = ['children', c]))
                        : 'number' == typeof c &&
                          i.textContent !== '' + c &&
                          (!0 !== s.suppressHydrationWarning &&
                            Zi(i.textContent, c, e),
                          (n = ['children', '' + c]))
                      : l.hasOwnProperty(u) &&
                        null != c &&
                        'onScroll' === u &&
                        Ii('scroll', i);
                  }
                switch (r) {
                  case 'input':
                    W(i), J(i, s, !0);
                    break;
                  case 'textarea':
                    W(i), se(i);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' == typeof s.onClick && (i.onclick = Xi);
                }
                (i = n), (t.updateQueue = i), null !== i && (t.flags |= 4);
              } else {
                (u = 9 === n.nodeType ? n : n.ownerDocument),
                  'http://www.w3.org/1999/xhtml' === e && (e = le(r)),
                  'http://www.w3.org/1999/xhtml' === e
                    ? 'script' === r
                      ? (((e = u.createElement('div')).innerHTML =
                          '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' == typeof i.is
                      ? (e = u.createElement(r, { is: i.is }))
                      : ((e = u.createElement(r)),
                        'select' === r &&
                          ((u = e),
                          i.multiple
                            ? (u.multiple = !0)
                            : i.size && (u.size = i.size)))
                    : (e = u.createElementNS(e, r)),
                  (e[fn] = t),
                  (e[hn] = i),
                  Tl(e, t, !1, !1),
                  (t.stateNode = e);
                e: {
                  switch (((u = ve(r, i)), r)) {
                    case 'dialog':
                      Ii('cancel', e), Ii('close', e), (n = i);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ii('load', e), (n = i);
                      break;
                    case 'video':
                    case 'audio':
                      for (n = 0; n < Ni.length; n++) Ii(Ni[n], e);
                      n = i;
                      break;
                    case 'source':
                      Ii('error', e), (n = i);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Ii('error', e), Ii('load', e), (n = i);
                      break;
                    case 'details':
                      Ii('toggle', e), (n = i);
                      break;
                    case 'input':
                      Y(e, i), (n = K(e, i)), Ii('invalid', e);
                      break;
                    case 'option':
                    default:
                      n = i;
                      break;
                    case 'select':
                      (e._wrapperState = { wasMultiple: !!i.multiple }),
                        (n = j({}, i, { value: void 0 })),
                        Ii('invalid', e);
                      break;
                    case 'textarea':
                      ne(e, i), (n = ie(e, i)), Ii('invalid', e);
                  }
                  for (s in (be(r, n), (c = n)))
                    if (c.hasOwnProperty(s)) {
                      var a = c[s];
                      'style' === s
                        ? me(e, a)
                        : 'dangerouslySetInnerHTML' === s
                        ? null != (a = a ? a.__html : void 0) && oe(e, a)
                        : 'children' === s
                        ? 'string' == typeof a
                          ? ('textarea' !== r || '' !== a) && fe(e, a)
                          : 'number' == typeof a && fe(e, '' + a)
                        : 'suppressContentEditableWarning' !== s &&
                          'suppressHydrationWarning' !== s &&
                          'autoFocus' !== s &&
                          (l.hasOwnProperty(s)
                            ? null != a && 'onScroll' === s && Ii('scroll', e)
                            : null != a && v(e, s, a, u));
                    }
                  switch (r) {
                    case 'input':
                      W(e), J(e, i, !1);
                      break;
                    case 'textarea':
                      W(e), se(e);
                      break;
                    case 'option':
                      null != i.value &&
                        e.setAttribute('value', '' + Q(i.value));
                      break;
                    case 'select':
                      (e.multiple = !!i.multiple),
                        null != (s = i.value)
                          ? re(e, !!i.multiple, s, !1)
                          : null != i.defaultValue &&
                            re(e, !!i.multiple, i.defaultValue, !0);
                      break;
                    default:
                      'function' == typeof n.onClick && (e.onclick = Xi);
                  }
                  switch (r) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      i = !!i.autoFocus;
                      break e;
                    case 'img':
                      i = !0;
                      break e;
                    default:
                      i = !1;
                  }
                }
                i && (t.flags |= 4);
              }
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Wl(t), null;
          case 6:
            if (e && null != t.stateNode) Nl(e, t, e.memoizedProps, i);
            else {
              if ('string' != typeof i && null === t.stateNode)
                throw Error(d(166));
              if (((r = rs(ts.current)), rs(Jd.current), od(t))) {
                if (
                  ((i = t.stateNode),
                  (r = t.memoizedProps),
                  (i[fn] = t),
                  (s = i.nodeValue !== r) && null !== (e = rd))
                )
                  switch (e.tag) {
                    case 3:
                      Zi(i.nodeValue, r, 0 != (1 & e.mode));
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning &&
                        Zi(i.nodeValue, r, 0 != (1 & e.mode));
                  }
                s && (t.flags |= 4);
              } else
                ((i = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                  i
                ))[fn] = t),
                  (t.stateNode = i);
            }
            return Wl(t), null;
          case 13:
            if (
              (Gn(ls),
              (i = t.memoizedState),
              null === e ||
                (null !== e.memoizedState &&
                  null !== e.memoizedState.dehydrated))
            ) {
              if (
                nd &&
                null !== id &&
                0 != (1 & t.mode) &&
                0 == (128 & t.flags)
              )
                fd(), hd(), (t.flags |= 98560), (s = !1);
              else if (((s = od(t)), null !== i && null !== i.dehydrated)) {
                if (null === e) {
                  if (!s) throw Error(d(318));
                  if (
                    !(s = null !== (s = t.memoizedState) ? s.dehydrated : null)
                  )
                    throw Error(d(317));
                  s[fn] = t;
                } else
                  hd(),
                    0 == (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                Wl(t), (s = !1);
              } else null !== dd && (sc(dd), (dd = null)), (s = !0);
              if (!s) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
              ? ((t.lanes = r), t)
              : ((i = null !== i) !==
                  (null !== e && null !== e.memoizedState) &&
                  i &&
                  ((t.child.flags |= 8192),
                  0 != (1 & t.mode) &&
                    (null === e || 0 != (1 & ls.current)
                      ? 0 === Nu && (Nu = 3)
                      : yc())),
                null !== t.updateQueue && (t.flags |= 4),
                Wl(t),
                null);
          case 4:
            return (
              ns(),
              Rl(e, t),
              null === e && Ui(t.stateNode.containerInfo),
              Wl(t),
              null
            );
          case 10:
            return Ad(t.type._context), Wl(t), null;
          case 19:
            if ((Gn(ls), null === (s = t.memoizedState))) return Wl(t), null;
            if (((i = 0 != (128 & t.flags)), null === (u = s.rendering)))
              if (i) $l(s, !1);
              else {
                if (0 !== Nu || (null !== e && 0 != (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (u = us(e))) {
                      for (
                        t.flags |= 128,
                          $l(s, !1),
                          null !== (i = u.updateQueue) &&
                            ((t.updateQueue = i), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          i = r,
                          r = t.child;
                        null !== r;

                      )
                        (e = i),
                          ((s = r).flags &= 14680066),
                          null === (u = s.alternate)
                            ? ((s.childLanes = 0),
                              (s.lanes = e),
                              (s.child = null),
                              (s.subtreeFlags = 0),
                              (s.memoizedProps = null),
                              (s.memoizedState = null),
                              (s.updateQueue = null),
                              (s.dependencies = null),
                              (s.stateNode = null))
                            : ((s.childLanes = u.childLanes),
                              (s.lanes = u.lanes),
                              (s.child = u.child),
                              (s.subtreeFlags = 0),
                              (s.deletions = null),
                              (s.memoizedProps = u.memoizedProps),
                              (s.memoizedState = u.memoizedState),
                              (s.updateQueue = u.updateQueue),
                              (s.type = u.type),
                              (e = u.dependencies),
                              (s.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (r = r.sibling);
                      return Sn(ls, (1 & ls.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== s.tail &&
                  Ze() > zu &&
                  ((t.flags |= 128), (i = !0), $l(s, !1), (t.lanes = 4194304));
              }
            else {
              if (!i)
                if (null !== (e = us(u))) {
                  if (
                    ((t.flags |= 128),
                    (i = !0),
                    null !== (r = e.updateQueue) &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    $l(s, !0),
                    null === s.tail &&
                      'hidden' === s.tailMode &&
                      !u.alternate &&
                      !nd)
                  )
                    return Wl(t), null;
                } else
                  2 * Ze() - s.renderingStartTime > zu &&
                    1073741824 !== r &&
                    ((t.flags |= 128),
                    (i = !0),
                    $l(s, !1),
                    (t.lanes = 4194304));
              s.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (r = s.last) ? (r.sibling = u) : (t.child = u),
                  (s.last = u));
            }
            return null !== s.tail
              ? ((t = s.tail),
                (s.rendering = t),
                (s.tail = t.sibling),
                (s.renderingStartTime = Ze()),
                (t.sibling = null),
                (r = ls.current),
                Sn(ls, i ? (1 & r) | 2 : 1 & r),
                t)
              : (Wl(t), null);
          case 22:
          case 23:
            return (
              oc(),
              (i = null !== t.memoizedState),
              null !== e &&
                (null !== e.memoizedState) !== i &&
                (t.flags |= 8192),
              i && 0 != (1 & t.mode)
                ? 0 != (1073741824 & Ru) &&
                  (Wl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : Wl(t),
              null
            );
          case 24:
          case 25:
            return null;
        }
        throw Error(d(156, t.tag));
      }
      function ql(e, t) {
        switch ((td(t), t.tag)) {
          case 1:
            return (
              Rn(t.type) && _n(),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 3:
            return (
              ns(),
              Gn(Fn),
              Gn(kn),
              as(),
              0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 5:
            return ss(t), null;
          case 13:
            if (
              (Gn(ls), null !== (e = t.memoizedState) && null !== e.dehydrated)
            ) {
              if (null === t.alternate) throw Error(d(340));
              hd();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return Gn(ls), null;
          case 4:
            return ns(), null;
          case 10:
            return Ad(t.type._context), null;
          case 22:
          case 23:
            return oc(), null;
          default:
            return null;
        }
      }
      (Tl = function (e, t) {
        for (var r = t.child; null !== r; ) {
          if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
          else if (4 !== r.tag && null !== r.child) {
            (r.child.return = r), (r = r.child);
            continue;
          }
          if (r === t) break;
          for (; null === r.sibling; ) {
            if (null === r.return || r.return === t) return;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      }),
        (Rl = function () {}),
        (_l = function (e, t, r, i) {
          var n = e.memoizedProps;
          if (n !== i) {
            (e = t.stateNode), rs(Jd.current);
            var d,
              s = null;
            switch (r) {
              case 'input':
                (n = K(e, n)), (i = K(e, i)), (s = []);
                break;
              case 'select':
                (n = j({}, n, { value: void 0 })),
                  (i = j({}, i, { value: void 0 })),
                  (s = []);
                break;
              case 'textarea':
                (n = ie(e, n)), (i = ie(e, i)), (s = []);
                break;
              default:
                'function' != typeof n.onClick &&
                  'function' == typeof i.onClick &&
                  (e.onclick = Xi);
            }
            for (a in (be(r, i), (r = null), n))
              if (!i.hasOwnProperty(a) && n.hasOwnProperty(a) && null != n[a])
                if ('style' === a) {
                  var u = n[a];
                  for (d in u)
                    u.hasOwnProperty(d) && (r || (r = {}), (r[d] = ''));
                } else
                  'dangerouslySetInnerHTML' !== a &&
                    'children' !== a &&
                    'suppressContentEditableWarning' !== a &&
                    'suppressHydrationWarning' !== a &&
                    'autoFocus' !== a &&
                    (l.hasOwnProperty(a)
                      ? s || (s = [])
                      : (s = s || []).push(a, null));
            for (a in i) {
              var c = i[a];
              if (
                ((u = null != n ? n[a] : void 0),
                i.hasOwnProperty(a) && c !== u && (null != c || null != u))
              )
                if ('style' === a)
                  if (u) {
                    for (d in u)
                      !u.hasOwnProperty(d) ||
                        (c && c.hasOwnProperty(d)) ||
                        (r || (r = {}), (r[d] = ''));
                    for (d in c)
                      c.hasOwnProperty(d) &&
                        u[d] !== c[d] &&
                        (r || (r = {}), (r[d] = c[d]));
                  } else r || (s || (s = []), s.push(a, r)), (r = c);
                else
                  'dangerouslySetInnerHTML' === a
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (s = s || []).push(a, c))
                    : 'children' === a
                    ? ('string' != typeof c && 'number' != typeof c) ||
                      (s = s || []).push(a, '' + c)
                    : 'suppressContentEditableWarning' !== a &&
                      'suppressHydrationWarning' !== a &&
                      (l.hasOwnProperty(a)
                        ? (null != c && 'onScroll' === a && Ii('scroll', e),
                          s || u === c || (s = []))
                        : (s = s || []).push(a, c));
            }
            r && (s = s || []).push('style', r);
            var a = s;
            (t.updateQueue = a) && (t.flags |= 4);
          }
        }),
        (Nl = function (e, t, r, i) {
          r !== i && (t.flags |= 4);
        });
      var Kl = !1,
        Yl = !1,
        Zl = 'function' == typeof WeakSet ? WeakSet : Set,
        Xl = null;
      function Jl(e, t) {
        var r = e.ref;
        if (null !== r)
          if ('function' == typeof r)
            try {
              r(null);
            } catch (i) {
              Dc(e, t, i);
            }
          else r.current = null;
      }
      function eu(e, t, r) {
        try {
          r();
        } catch (i) {
          Dc(e, t, i);
        }
      }
      var tu = !1;
      function ru(e, t, r) {
        var i = t.updateQueue;
        if (null !== (i = null !== i ? i.lastEffect : null)) {
          var n = (i = i.next);
          do {
            if ((n.tag & e) === e) {
              var d = n.destroy;
              (n.destroy = void 0), void 0 !== d && eu(t, r, d);
            }
            n = n.next;
          } while (n !== i);
        }
      }
      function iu(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var r = (t = t.next);
          do {
            if ((r.tag & e) === e) {
              var i = r.create;
              r.destroy = i();
            }
            r = r.next;
          } while (r !== t);
        }
      }
      function nu(e) {
        var t = e.ref;
        if (null !== t) {
          var r = e.stateNode;
          e.tag, (e = r), 'function' == typeof t ? t(e) : (t.current = e);
        }
      }
      function du(e) {
        var t = e.alternate;
        null !== t && ((e.alternate = null), du(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[fn],
            delete t[hn],
            delete t[yn],
            delete t[mn],
            delete t[gn]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      function su(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function lu(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || su(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

          ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function uu(e, t, r) {
        var i = e.tag;
        if (5 === i || 6 === i)
          (e = e.stateNode),
            t
              ? 8 === r.nodeType
                ? r.parentNode.insertBefore(e, t)
                : r.insertBefore(e, t)
              : (8 === r.nodeType
                  ? (t = r.parentNode).insertBefore(e, r)
                  : (t = r).appendChild(e),
                null != (r = r._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Xi));
        else if (4 !== i && null !== (e = e.child))
          for (uu(e, t, r), e = e.sibling; null !== e; )
            uu(e, t, r), (e = e.sibling);
      }
      function cu(e, t, r) {
        var i = e.tag;
        if (5 === i || 6 === i)
          (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
        else if (4 !== i && null !== (e = e.child))
          for (cu(e, t, r), e = e.sibling; null !== e; )
            cu(e, t, r), (e = e.sibling);
      }
      var au = null,
        ou = !1;
      function fu(e, t, r) {
        for (r = r.child; null !== r; ) hu(e, t, r), (r = r.sibling);
      }
      function hu(e, t, r) {
        if (dt && 'function' == typeof dt.onCommitFiberUnmount)
          try {
            dt.onCommitFiberUnmount(nt, r);
          } catch (l) {}
        switch (r.tag) {
          case 5:
            Yl || Jl(r, t);
          case 6:
            var i = au,
              n = ou;
            (au = null),
              fu(e, t, r),
              (ou = n),
              null !== (au = i) &&
                (ou
                  ? ((e = au),
                    (r = r.stateNode),
                    8 === e.nodeType
                      ? e.parentNode.removeChild(r)
                      : e.removeChild(r))
                  : au.removeChild(r.stateNode));
            break;
          case 18:
            null !== au &&
              (ou
                ? ((e = au),
                  (r = r.stateNode),
                  8 === e.nodeType
                    ? un(e.parentNode, r)
                    : 1 === e.nodeType && un(e, r),
                  zt(e))
                : un(au, r.stateNode));
            break;
          case 4:
            (i = au),
              (n = ou),
              (au = r.stateNode.containerInfo),
              (ou = !0),
              fu(e, t, r),
              (au = i),
              (ou = n);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              !Yl &&
              null !== (i = r.updateQueue) &&
              null !== (i = i.lastEffect)
            ) {
              n = i = i.next;
              do {
                var d = n,
                  s = d.destroy;
                (d = d.tag),
                  void 0 !== s && (0 != (2 & d) || 0 != (4 & d)) && eu(r, t, s),
                  (n = n.next);
              } while (n !== i);
            }
            fu(e, t, r);
            break;
          case 1:
            if (
              !Yl &&
              (Jl(r, t),
              'function' == typeof (i = r.stateNode).componentWillUnmount)
            )
              try {
                (i.props = r.memoizedProps),
                  (i.state = r.memoizedState),
                  i.componentWillUnmount();
              } catch (l) {
                Dc(r, t, l);
              }
            fu(e, t, r);
            break;
          case 21:
            fu(e, t, r);
            break;
          case 22:
            1 & r.mode
              ? ((Yl = (i = Yl) || null !== r.memoizedState),
                fu(e, t, r),
                (Yl = i))
              : fu(e, t, r);
            break;
          default:
            fu(e, t, r);
        }
      }
      function pu(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var r = e.stateNode;
          null === r && (r = e.stateNode = new Zl()),
            t.forEach(function (t) {
              var i = kc.bind(null, e, t);
              r.has(t) || (r.add(t), t.then(i, i));
            });
        }
      }
      function yu(e, t) {
        var r = t.deletions;
        if (null !== r)
          for (var i = 0; i < r.length; i++) {
            var n = r[i];
            try {
              var s = e,
                l = t,
                u = l;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 5:
                    (au = u.stateNode), (ou = !1);
                    break e;
                  case 3:
                  case 4:
                    (au = u.stateNode.containerInfo), (ou = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === au) throw Error(d(160));
              hu(s, l, n), (au = null), (ou = !1);
              var c = n.alternate;
              null !== c && (c.return = null), (n.return = null);
            } catch (a) {
              Dc(n, t, a);
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
      }
      function mu(e, t) {
        var r = e.alternate,
          i = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((yu(t, e), gu(e), 4 & i)) {
              try {
                ru(3, e, e.return), iu(3, e);
              } catch (m) {
                Dc(e, e.return, m);
              }
              try {
                ru(5, e, e.return);
              } catch (m) {
                Dc(e, e.return, m);
              }
            }
            break;
          case 1:
            yu(t, e), gu(e), 512 & i && null !== r && Jl(r, r.return);
            break;
          case 5:
            if (
              (yu(t, e),
              gu(e),
              512 & i && null !== r && Jl(r, r.return),
              32 & e.flags)
            ) {
              var n = e.stateNode;
              try {
                fe(n, '');
              } catch (m) {
                Dc(e, e.return, m);
              }
            }
            if (4 & i && null != (n = e.stateNode)) {
              var s = e.memoizedProps,
                l = null !== r ? r.memoizedProps : s,
                u = e.type,
                c = e.updateQueue;
              if (((e.updateQueue = null), null !== c))
                try {
                  'input' === u &&
                    'radio' === s.type &&
                    null != s.name &&
                    Z(n, s),
                    ve(u, l);
                  var a = ve(u, s);
                  for (l = 0; l < c.length; l += 2) {
                    var o = c[l],
                      f = c[l + 1];
                    'style' === o
                      ? me(n, f)
                      : 'dangerouslySetInnerHTML' === o
                      ? oe(n, f)
                      : 'children' === o
                      ? fe(n, f)
                      : v(n, o, f, a);
                  }
                  switch (u) {
                    case 'input':
                      X(n, s);
                      break;
                    case 'textarea':
                      de(n, s);
                      break;
                    case 'select':
                      var h = n._wrapperState.wasMultiple;
                      n._wrapperState.wasMultiple = !!s.multiple;
                      var p = s.value;
                      null != p
                        ? re(n, !!s.multiple, p, !1)
                        : h !== !!s.multiple &&
                          (null != s.defaultValue
                            ? re(n, !!s.multiple, s.defaultValue, !0)
                            : re(n, !!s.multiple, s.multiple ? [] : '', !1));
                  }
                  n[hn] = s;
                } catch (m) {
                  Dc(e, e.return, m);
                }
            }
            break;
          case 6:
            if ((yu(t, e), gu(e), 4 & i)) {
              if (null === e.stateNode) throw Error(d(162));
              (n = e.stateNode), (s = e.memoizedProps);
              try {
                n.nodeValue = s;
              } catch (m) {
                Dc(e, e.return, m);
              }
            }
            break;
          case 3:
            if (
              (yu(t, e),
              gu(e),
              4 & i && null !== r && r.memoizedState.isDehydrated)
            )
              try {
                zt(t.containerInfo);
              } catch (m) {
                Dc(e, e.return, m);
              }
            break;
          case 4:
          default:
            yu(t, e), gu(e);
            break;
          case 13:
            yu(t, e),
              gu(e),
              8192 & (n = e.child).flags &&
                ((s = null !== n.memoizedState),
                (n.stateNode.isHidden = s),
                !s ||
                  (null !== n.alternate &&
                    null !== n.alternate.memoizedState) ||
                  (Uu = Ze())),
              4 & i && pu(e);
            break;
          case 22:
            if (
              ((o = null !== r && null !== r.memoizedState),
              1 & e.mode
                ? ((Yl = (a = Yl) || o), yu(t, e), (Yl = a))
                : yu(t, e),
              gu(e),
              8192 & i)
            ) {
              if (
                ((a = null !== e.memoizedState),
                (e.stateNode.isHidden = a) && !o && 0 != (1 & e.mode))
              )
                for (Xl = e, o = e.child; null !== o; ) {
                  for (f = Xl = o; null !== Xl; ) {
                    switch (((p = (h = Xl).child), h.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        ru(4, h, h.return);
                        break;
                      case 1:
                        Jl(h, h.return);
                        var y = h.stateNode;
                        if ('function' == typeof y.componentWillUnmount) {
                          (i = h), (r = h.return);
                          try {
                            (t = i),
                              (y.props = t.memoizedProps),
                              (y.state = t.memoizedState),
                              y.componentWillUnmount();
                          } catch (m) {
                            Dc(i, r, m);
                          }
                        }
                        break;
                      case 5:
                        Jl(h, h.return);
                        break;
                      case 22:
                        if (null !== h.memoizedState) {
                          Eu(f);
                          continue;
                        }
                    }
                    null !== p ? ((p.return = h), (Xl = p)) : Eu(f);
                  }
                  o = o.sibling;
                }
              e: for (o = null, f = e; ; ) {
                if (5 === f.tag) {
                  if (null === o) {
                    o = f;
                    try {
                      (n = f.stateNode),
                        a
                          ? 'function' == typeof (s = n.style).setProperty
                            ? s.setProperty('display', 'none', 'important')
                            : (s.display = 'none')
                          : ((u = f.stateNode),
                            (l =
                              null != (c = f.memoizedProps.style) &&
                              c.hasOwnProperty('display')
                                ? c.display
                                : null),
                            (u.style.display = ye('display', l)));
                    } catch (m) {
                      Dc(e, e.return, m);
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === o)
                    try {
                      f.stateNode.nodeValue = a ? '' : f.memoizedProps;
                    } catch (m) {
                      Dc(e, e.return, m);
                    }
                } else if (
                  ((22 !== f.tag && 23 !== f.tag) ||
                    null === f.memoizedState ||
                    f === e) &&
                  null !== f.child
                ) {
                  (f.child.return = f), (f = f.child);
                  continue;
                }
                if (f === e) break e;
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === e) break e;
                  o === f && (o = null), (f = f.return);
                }
                o === f && (o = null),
                  (f.sibling.return = f.return),
                  (f = f.sibling);
              }
            }
            break;
          case 19:
            yu(t, e), gu(e), 4 & i && pu(e);
          case 21:
        }
      }
      function gu(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var r = e.return; null !== r; ) {
                if (su(r)) {
                  var i = r;
                  break e;
                }
                r = r.return;
              }
              throw Error(d(160));
            }
            switch (i.tag) {
              case 5:
                var n = i.stateNode;
                32 & i.flags && (fe(n, ''), (i.flags &= -33)), cu(e, lu(e), n);
                break;
              case 3:
              case 4:
                var s = i.stateNode.containerInfo;
                uu(e, lu(e), s);
                break;
              default:
                throw Error(d(161));
            }
          } catch (l) {
            Dc(e, e.return, l);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function bu(e, t, r) {
        (Xl = e), vu(e, t, r);
      }
      function vu(e, t, r) {
        for (var i = 0 != (1 & e.mode); null !== Xl; ) {
          var n = Xl,
            d = n.child;
          if (22 === n.tag && i) {
            var s = null !== n.memoizedState || Kl;
            if (!s) {
              var l = n.alternate,
                u = (null !== l && null !== l.memoizedState) || Yl;
              l = Kl;
              var c = Yl;
              if (((Kl = s), (Yl = u) && !c))
                for (Xl = n; null !== Xl; )
                  (u = (s = Xl).child),
                    22 === s.tag && null !== s.memoizedState
                      ? Au(n)
                      : null !== u
                      ? ((u.return = s), (Xl = u))
                      : Au(n);
              for (; null !== d; ) (Xl = d), vu(d, t, r), (d = d.sibling);
              (Xl = n), (Kl = l), (Yl = c);
            }
            Cu(e);
          } else
            0 != (8772 & n.subtreeFlags) && null !== d
              ? ((d.return = n), (Xl = d))
              : Cu(e);
        }
      }
      function Cu(e) {
        for (; null !== Xl; ) {
          var t = Xl;
          if (0 != (8772 & t.flags)) {
            var r = t.alternate;
            try {
              if (0 != (8772 & t.flags))
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yl || iu(5, t);
                    break;
                  case 1:
                    var i = t.stateNode;
                    if (4 & t.flags && !Yl)
                      if (null === r) i.componentDidMount();
                      else {
                        var n =
                          t.elementType === t.type
                            ? r.memoizedProps
                            : md(t.type, r.memoizedProps);
                        i.componentDidUpdate(
                          n,
                          r.memoizedState,
                          i.__reactInternalSnapshotBeforeUpdate
                        );
                      }
                    var s = t.updateQueue;
                    null !== s && Id(t, s, i);
                    break;
                  case 3:
                    var l = t.updateQueue;
                    if (null !== l) {
                      if (((r = null), null !== t.child))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            r = t.child.stateNode;
                        }
                      Id(t, l, r);
                    }
                    break;
                  case 5:
                    var u = t.stateNode;
                    if (null === r && 4 & t.flags) {
                      r = u;
                      var c = t.memoizedProps;
                      switch (t.type) {
                        case 'button':
                        case 'input':
                        case 'select':
                        case 'textarea':
                          c.autoFocus && r.focus();
                          break;
                        case 'img':
                          c.src && (r.src = c.src);
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (null === t.memoizedState) {
                      var a = t.alternate;
                      if (null !== a) {
                        var o = a.memoizedState;
                        if (null !== o) {
                          var f = o.dehydrated;
                          null !== f && zt(f);
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(d(163));
                }
              Yl || (512 & t.flags && nu(t));
            } catch (h) {
              Dc(t, t.return, h);
            }
          }
          if (t === e) {
            Xl = null;
            break;
          }
          if (null !== (r = t.sibling)) {
            (r.return = t.return), (Xl = r);
            break;
          }
          Xl = t.return;
        }
      }
      function Eu(e) {
        for (; null !== Xl; ) {
          var t = Xl;
          if (t === e) {
            Xl = null;
            break;
          }
          var r = t.sibling;
          if (null !== r) {
            (r.return = t.return), (Xl = r);
            break;
          }
          Xl = t.return;
        }
      }
      function Au(e) {
        for (; null !== Xl; ) {
          var t = Xl;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var r = t.return;
                try {
                  iu(4, t);
                } catch (u) {
                  Dc(t, r, u);
                }
                break;
              case 1:
                var i = t.stateNode;
                if ('function' == typeof i.componentDidMount) {
                  var n = t.return;
                  try {
                    i.componentDidMount();
                  } catch (u) {
                    Dc(t, n, u);
                  }
                }
                var d = t.return;
                try {
                  nu(t);
                } catch (u) {
                  Dc(t, d, u);
                }
                break;
              case 5:
                var s = t.return;
                try {
                  nu(t);
                } catch (u) {
                  Dc(t, s, u);
                }
            }
          } catch (u) {
            Dc(t, t.return, u);
          }
          if (t === e) {
            Xl = null;
            break;
          }
          var l = t.sibling;
          if (null !== l) {
            (l.return = t.return), (Xl = l);
            break;
          }
          Xl = t.return;
        }
      }
      var wu,
        Du = Math.ceil,
        Gu = C.ReactCurrentDispatcher,
        Su = C.ReactCurrentOwner,
        xu = C.ReactCurrentBatchConfig,
        ku = 0,
        Fu = null,
        Pu = null,
        Tu = 0,
        Ru = 0,
        _u = Dn(0),
        Nu = 0,
        Ou = null,
        Lu = 0,
        ju = 0,
        Iu = 0,
        Mu = null,
        Bu = null,
        Uu = 0,
        zu = 1 / 0,
        Hu = null,
        Qu = !1,
        $u = null,
        Wu = null,
        Vu = !1,
        qu = null,
        Ku = 0,
        Yu = 0,
        Zu = null,
        Xu = -1,
        Ju = 0;
      function ec() {
        return 0 != (6 & ku) ? Ze() : -1 !== Xu ? Xu : (Xu = Ze());
      }
      function tc(e) {
        return 0 == (1 & e.mode)
          ? 1
          : 0 != (2 & ku) && 0 !== Tu
          ? Tu & -Tu
          : null !== yd.transition
          ? (0 === Ju && (Ju = yt()), Ju)
          : 0 !== (e = vt)
          ? e
          : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
      }
      function rc(e, t, r, i) {
        if (50 < Yu) throw ((Yu = 0), (Zu = null), Error(d(185)));
        gt(e, r, i),
          (0 != (2 & ku) && e === Fu) ||
            (e === Fu && (0 == (2 & ku) && (ju |= r), 4 === Nu && lc(e, Tu)),
            ic(e, i),
            1 === r &&
              0 === ku &&
              0 == (1 & t.mode) &&
              ((zu = Ze() + 500), Mn && zn()));
      }
      function ic(e, t) {
        var r = e.callbackNode;
        !(function (e, t) {
          for (
            var r = e.suspendedLanes,
              i = e.pingedLanes,
              n = e.expirationTimes,
              d = e.pendingLanes;
            0 < d;

          ) {
            var s = 31 - st(d),
              l = 1 << s,
              u = n[s];
            -1 === u
              ? (0 != (l & r) && 0 == (l & i)) || (n[s] = ht(l, t))
              : u <= t && (e.expiredLanes |= l),
              (d &= ~l);
          }
        })(e, t);
        var i = ft(e, e === Fu ? Tu : 0);
        if (0 === i)
          null !== r && qe(r),
            (e.callbackNode = null),
            (e.callbackPriority = 0);
        else if (((t = i & -i), e.callbackPriority !== t)) {
          if ((null != r && qe(r), 1 === t))
            0 === e.tag
              ? (function (e) {
                  (Mn = !0), Un(e);
                })(uc.bind(null, e))
              : Un(uc.bind(null, e)),
              sn(function () {
                0 == (6 & ku) && zn();
              }),
              (r = null);
          else {
            switch (Ct(i)) {
              case 1:
                r = Je;
                break;
              case 4:
                r = et;
                break;
              case 16:
              default:
                r = tt;
                break;
              case 536870912:
                r = it;
            }
            r = Fc(r, nc.bind(null, e));
          }
          (e.callbackPriority = t), (e.callbackNode = r);
        }
      }
      function nc(e, t) {
        if (((Xu = -1), (Ju = 0), 0 != (6 & ku))) throw Error(d(327));
        var r = e.callbackNode;
        if (Ac() && e.callbackNode !== r) return null;
        var i = ft(e, e === Fu ? Tu : 0);
        if (0 === i) return null;
        if (0 != (30 & i) || 0 != (i & e.expiredLanes) || t) t = mc(e, i);
        else {
          t = i;
          var n = ku;
          ku |= 2;
          var s = pc();
          for (
            (Fu === e && Tu === t) ||
            ((Hu = null), (zu = Ze() + 500), fc(e, t));
            ;

          )
            try {
              bc();
              break;
            } catch (u) {
              hc(e, u);
            }
          Ed(),
            (Gu.current = s),
            (ku = n),
            null !== Pu ? (t = 0) : ((Fu = null), (Tu = 0), (t = Nu));
        }
        if (0 !== t) {
          if (
            (2 === t && 0 !== (n = pt(e)) && ((i = n), (t = dc(e, n))), 1 === t)
          )
            throw ((r = Ou), fc(e, 0), lc(e, i), ic(e, Ze()), r);
          if (6 === t) lc(e, i);
          else {
            if (
              ((n = e.current.alternate),
              0 == (30 & i) &&
                !(function (e) {
                  for (var t = e; ; ) {
                    if (16384 & t.flags) {
                      var r = t.updateQueue;
                      if (null !== r && null !== (r = r.stores))
                        for (var i = 0; i < r.length; i++) {
                          var n = r[i],
                            d = n.getSnapshot;
                          n = n.value;
                          try {
                            if (!si(d(), n)) return !1;
                          } catch (l) {
                            return !1;
                          }
                        }
                    }
                    if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
                      (r.return = t), (t = r);
                    else {
                      if (t === e) break;
                      for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return !0;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return !0;
                })(n) &&
                (2 === (t = mc(e, i)) &&
                  0 !== (s = pt(e)) &&
                  ((i = s), (t = dc(e, s))),
                1 === t))
            )
              throw ((r = Ou), fc(e, 0), lc(e, i), ic(e, Ze()), r);
            switch (((e.finishedWork = n), (e.finishedLanes = i), t)) {
              case 0:
              case 1:
                throw Error(d(345));
              case 2:
              case 5:
                Ec(e, Bu, Hu);
                break;
              case 3:
                if (
                  (lc(e, i),
                  (130023424 & i) === i && 10 < (t = Uu + 500 - Ze()))
                ) {
                  if (0 !== ft(e, 0)) break;
                  if (((n = e.suspendedLanes) & i) !== i) {
                    ec(), (e.pingedLanes |= e.suspendedLanes & n);
                    break;
                  }
                  e.timeoutHandle = rn(Ec.bind(null, e, Bu, Hu), t);
                  break;
                }
                Ec(e, Bu, Hu);
                break;
              case 4:
                if ((lc(e, i), (4194240 & i) === i)) break;
                for (t = e.eventTimes, n = -1; 0 < i; ) {
                  var l = 31 - st(i);
                  (s = 1 << l), (l = t[l]) > n && (n = l), (i &= ~s);
                }
                if (
                  ((i = n),
                  10 <
                    (i =
                      (120 > (i = Ze() - i)
                        ? 120
                        : 480 > i
                        ? 480
                        : 1080 > i
                        ? 1080
                        : 1920 > i
                        ? 1920
                        : 3e3 > i
                        ? 3e3
                        : 4320 > i
                        ? 4320
                        : 1960 * Du(i / 1960)) - i))
                ) {
                  e.timeoutHandle = rn(Ec.bind(null, e, Bu, Hu), i);
                  break;
                }
                Ec(e, Bu, Hu);
                break;
              default:
                throw Error(d(329));
            }
          }
        }
        return ic(e, Ze()), e.callbackNode === r ? nc.bind(null, e) : null;
      }
      function dc(e, t) {
        var r = Mu;
        return (
          e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
          2 !== (e = mc(e, t)) && ((t = Bu), (Bu = r), null !== t && sc(t)),
          e
        );
      }
      function sc(e) {
        null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
      }
      function lc(e, t) {
        for (
          t &= ~Iu,
            t &= ~ju,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var r = 31 - st(t),
            i = 1 << r;
          (e[r] = -1), (t &= ~i);
        }
      }
      function uc(e) {
        if (0 != (6 & ku)) throw Error(d(327));
        Ac();
        var t = ft(e, 0);
        if (0 == (1 & t)) return ic(e, Ze()), null;
        var r = mc(e, t);
        if (0 !== e.tag && 2 === r) {
          var i = pt(e);
          0 !== i && ((t = i), (r = dc(e, i)));
        }
        if (1 === r) throw ((r = Ou), fc(e, 0), lc(e, t), ic(e, Ze()), r);
        if (6 === r) throw Error(d(345));
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Ec(e, Bu, Hu),
          ic(e, Ze()),
          null
        );
      }
      function cc(e, t) {
        var r = ku;
        ku |= 1;
        try {
          return e(t);
        } finally {
          0 === (ku = r) && ((zu = Ze() + 500), Mn && zn());
        }
      }
      function ac(e) {
        null !== qu && 0 === qu.tag && 0 == (6 & ku) && Ac();
        var t = ku;
        ku |= 1;
        var r = xu.transition,
          i = vt;
        try {
          if (((xu.transition = null), (vt = 1), e)) return e();
        } finally {
          (vt = i), (xu.transition = r), 0 == (6 & (ku = t)) && zn();
        }
      }
      function oc() {
        (Ru = _u.current), Gn(_u);
      }
      function fc(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var r = e.timeoutHandle;
        if ((-1 !== r && ((e.timeoutHandle = -1), nn(r)), null !== Pu))
          for (r = Pu.return; null !== r; ) {
            var i = r;
            switch ((td(i), i.tag)) {
              case 1:
                null != (i = i.type.childContextTypes) && _n();
                break;
              case 3:
                ns(), Gn(Fn), Gn(kn), as();
                break;
              case 5:
                ss(i);
                break;
              case 4:
                ns();
                break;
              case 13:
              case 19:
                Gn(ls);
                break;
              case 10:
                Ad(i.type._context);
                break;
              case 22:
              case 23:
                oc();
            }
            r = r.return;
          }
        if (
          ((Fu = e),
          (Pu = e = _c(e.current, null)),
          (Tu = Ru = t),
          (Nu = 0),
          (Ou = null),
          (Iu = ju = Lu = 0),
          (Bu = Mu = null),
          null !== Sd)
        ) {
          for (t = 0; t < Sd.length; t++)
            if (null !== (i = (r = Sd[t]).interleaved)) {
              r.interleaved = null;
              var n = i.next,
                d = r.pending;
              if (null !== d) {
                var s = d.next;
                (d.next = n), (i.next = s);
              }
              r.pending = i;
            }
          Sd = null;
        }
        return e;
      }
      function hc(e, t) {
        for (;;) {
          var r = Pu;
          try {
            if ((Ed(), (os.current = dl), gs)) {
              for (var i = ps.memoizedState; null !== i; ) {
                var n = i.queue;
                null !== n && (n.pending = null), (i = i.next);
              }
              gs = !1;
            }
            if (
              ((hs = 0),
              (ms = ys = ps = null),
              (bs = !1),
              (vs = 0),
              (Su.current = null),
              null === r || null === r.return)
            ) {
              (Nu = 1), (Ou = t), (Pu = null);
              break;
            }
            e: {
              var s = e,
                l = r.return,
                u = r,
                c = t;
              if (
                ((t = Tu),
                (u.flags |= 32768),
                null !== c &&
                  'object' == typeof c &&
                  'function' == typeof c.then)
              ) {
                var a = c,
                  o = u,
                  f = o.tag;
                if (0 == (1 & o.mode) && (0 === f || 11 === f || 15 === f)) {
                  var h = o.alternate;
                  h
                    ? ((o.updateQueue = h.updateQueue),
                      (o.memoizedState = h.memoizedState),
                      (o.lanes = h.lanes))
                    : ((o.updateQueue = null), (o.memoizedState = null));
                }
                var p = ml(l);
                if (null !== p) {
                  (p.flags &= -257),
                    gl(p, l, u, 0, t),
                    1 & p.mode && yl(s, a, t),
                    (c = a);
                  var y = (t = p).updateQueue;
                  if (null === y) {
                    var m = new Set();
                    m.add(c), (t.updateQueue = m);
                  } else y.add(c);
                  break e;
                }
                if (0 == (1 & t)) {
                  yl(s, a, t), yc();
                  break e;
                }
                c = Error(d(426));
              } else if (nd && 1 & u.mode) {
                var g = ml(l);
                if (null !== g) {
                  0 == (65536 & g.flags) && (g.flags |= 256),
                    gl(g, l, u, 0, t),
                    pd(cl(c, u));
                  break e;
                }
              }
              (s = c = cl(c, u)),
                4 !== Nu && (Nu = 2),
                null === Mu ? (Mu = [s]) : Mu.push(s),
                (s = l);
              do {
                switch (s.tag) {
                  case 3:
                    (s.flags |= 65536),
                      (t &= -t),
                      (s.lanes |= t),
                      Ld(s, hl(0, c, t));
                    break e;
                  case 1:
                    u = c;
                    var b = s.type,
                      v = s.stateNode;
                    if (
                      0 == (128 & s.flags) &&
                      ('function' == typeof b.getDerivedStateFromError ||
                        (null !== v &&
                          'function' == typeof v.componentDidCatch &&
                          (null === Wu || !Wu.has(v))))
                    ) {
                      (s.flags |= 65536),
                        (t &= -t),
                        (s.lanes |= t),
                        Ld(s, pl(s, u, t));
                      break e;
                    }
                }
                s = s.return;
              } while (null !== s);
            }
            Cc(r);
          } catch (C) {
            (t = C), Pu === r && null !== r && (Pu = r = r.return);
            continue;
          }
          break;
        }
      }
      function pc() {
        var e = Gu.current;
        return (Gu.current = dl), null === e ? dl : e;
      }
      function yc() {
        (0 !== Nu && 3 !== Nu && 2 !== Nu) || (Nu = 4),
          null === Fu ||
            (0 == (268435455 & Lu) && 0 == (268435455 & ju)) ||
            lc(Fu, Tu);
      }
      function mc(e, t) {
        var r = ku;
        ku |= 2;
        var i = pc();
        for ((Fu === e && Tu === t) || ((Hu = null), fc(e, t)); ; )
          try {
            gc();
            break;
          } catch (n) {
            hc(e, n);
          }
        if ((Ed(), (ku = r), (Gu.current = i), null !== Pu))
          throw Error(d(261));
        return (Fu = null), (Tu = 0), Nu;
      }
      function gc() {
        for (; null !== Pu; ) vc(Pu);
      }
      function bc() {
        for (; null !== Pu && !Ke(); ) vc(Pu);
      }
      function vc(e) {
        var t = wu(e.alternate, e, Ru);
        (e.memoizedProps = e.pendingProps),
          null === t ? Cc(e) : (Pu = t),
          (Su.current = null);
      }
      function Cc(e) {
        var t = e;
        do {
          var r = t.alternate;
          if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (r = Vl(r, t, Ru))) return void (Pu = r);
          } else {
            if (null !== (r = ql(r, t)))
              return (r.flags &= 32767), void (Pu = r);
            if (null === e) return (Nu = 6), void (Pu = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          }
          if (null !== (t = t.sibling)) return void (Pu = t);
          Pu = t = e;
        } while (null !== t);
        0 === Nu && (Nu = 5);
      }
      function Ec(e, t, r) {
        var i = vt,
          n = xu.transition;
        try {
          (xu.transition = null),
            (vt = 1),
            (function (e, t, r, i) {
              do {
                Ac();
              } while (null !== qu);
              if (0 != (6 & ku)) throw Error(d(327));
              r = e.finishedWork;
              var n = e.finishedLanes;
              if (null === r) return null;
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                r === e.current)
              )
                throw Error(d(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var s = r.lanes | r.childLanes;
              if (
                ((function (e, t) {
                  var r = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var i = e.eventTimes;
                  for (e = e.expirationTimes; 0 < r; ) {
                    var n = 31 - st(r),
                      d = 1 << n;
                    (t[n] = 0), (i[n] = -1), (e[n] = -1), (r &= ~d);
                  }
                })(e, s),
                e === Fu && ((Pu = Fu = null), (Tu = 0)),
                (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                  Vu ||
                  ((Vu = !0),
                  Fc(tt, function () {
                    return Ac(), null;
                  })),
                (s = 0 != (15990 & r.flags)),
                0 != (15990 & r.subtreeFlags) || s)
              ) {
                (s = xu.transition), (xu.transition = null);
                var l = vt;
                vt = 1;
                var u = ku;
                (ku |= 4),
                  (Su.current = null),
                  (function (e, t) {
                    if (((Ji = Qt), fi((e = oi())))) {
                      if ('selectionStart' in e)
                        var r = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var i =
                            (r =
                              ((r = e.ownerDocument) && r.defaultView) ||
                              window).getSelection && r.getSelection();
                          if (i && 0 !== i.rangeCount) {
                            r = i.anchorNode;
                            var n = i.anchorOffset,
                              s = i.focusNode;
                            i = i.focusOffset;
                            try {
                              r.nodeType, s.nodeType;
                            } catch (E) {
                              r = null;
                              break e;
                            }
                            var l = 0,
                              u = -1,
                              c = -1,
                              a = 0,
                              o = 0,
                              f = e,
                              h = null;
                            t: for (;;) {
                              for (
                                var p;
                                f !== r ||
                                  (0 !== n && 3 !== f.nodeType) ||
                                  (u = l + n),
                                  f !== s ||
                                    (0 !== i && 3 !== f.nodeType) ||
                                    (c = l + i),
                                  3 === f.nodeType && (l += f.nodeValue.length),
                                  null !== (p = f.firstChild);

                              )
                                (h = f), (f = p);
                              for (;;) {
                                if (f === e) break t;
                                if (
                                  (h === r && ++a === n && (u = l),
                                  h === s && ++o === i && (c = l),
                                  null !== (p = f.nextSibling))
                                )
                                  break;
                                h = (f = h).parentNode;
                              }
                              f = p;
                            }
                            r =
                              -1 === u || -1 === c
                                ? null
                                : { start: u, end: c };
                          } else r = null;
                        }
                      r = r || { start: 0, end: 0 };
                    } else r = null;
                    for (
                      en = { focusedElem: e, selectionRange: r },
                        Qt = !1,
                        Xl = t;
                      null !== Xl;

                    )
                      if (
                        ((e = (t = Xl).child),
                        0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (Xl = e);
                      else
                        for (; null !== Xl; ) {
                          t = Xl;
                          try {
                            var y = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== y) {
                                    var m = y.memoizedProps,
                                      g = y.memoizedState,
                                      b = t.stateNode,
                                      v = b.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? m
                                          : md(t.type, m),
                                        g
                                      );
                                    b.__reactInternalSnapshotBeforeUpdate = v;
                                  }
                                  break;
                                case 3:
                                  var C = t.stateNode.containerInfo;
                                  1 === C.nodeType
                                    ? (C.textContent = '')
                                    : 9 === C.nodeType &&
                                      C.documentElement &&
                                      C.removeChild(C.documentElement);
                                  break;
                                default:
                                  throw Error(d(163));
                              }
                          } catch (E) {
                            Dc(t, t.return, E);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (Xl = e);
                            break;
                          }
                          Xl = t.return;
                        }
                    (y = tu), (tu = !1);
                  })(e, r),
                  mu(r, e),
                  hi(en),
                  (Qt = !!Ji),
                  (en = Ji = null),
                  (e.current = r),
                  bu(r, e, n),
                  Ye(),
                  (ku = u),
                  (vt = l),
                  (xu.transition = s);
              } else e.current = r;
              if (
                (Vu && ((Vu = !1), (qu = e), (Ku = n)),
                (s = e.pendingLanes),
                0 === s && (Wu = null),
                (function (e) {
                  if (dt && 'function' == typeof dt.onCommitFiberRoot)
                    try {
                      dt.onCommitFiberRoot(
                        nt,
                        e,
                        void 0,
                        128 == (128 & e.current.flags)
                      );
                    } catch (t) {}
                })(r.stateNode),
                ic(e, Ze()),
                null !== t)
              )
                for (i = e.onRecoverableError, r = 0; r < t.length; r++)
                  (n = t[r]),
                    i(n.value, { componentStack: n.stack, digest: n.digest });
              if (Qu) throw ((Qu = !1), (e = $u), ($u = null), e);
              0 != (1 & Ku) && 0 !== e.tag && Ac(),
                (s = e.pendingLanes),
                0 != (1 & s)
                  ? e === Zu
                    ? Yu++
                    : ((Yu = 0), (Zu = e))
                  : (Yu = 0),
                zn();
            })(e, t, r, i);
        } finally {
          (xu.transition = n), (vt = i);
        }
        return null;
      }
      function Ac() {
        if (null !== qu) {
          var e = Ct(Ku),
            t = xu.transition,
            r = vt;
          try {
            if (((xu.transition = null), (vt = 16 > e ? 16 : e), null === qu))
              var i = !1;
            else {
              if (((e = qu), (qu = null), (Ku = 0), 0 != (6 & ku)))
                throw Error(d(331));
              var n = ku;
              for (ku |= 4, Xl = e.current; null !== Xl; ) {
                var s = Xl,
                  l = s.child;
                if (0 != (16 & Xl.flags)) {
                  var u = s.deletions;
                  if (null !== u) {
                    for (var c = 0; c < u.length; c++) {
                      var a = u[c];
                      for (Xl = a; null !== Xl; ) {
                        var o = Xl;
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(8, o, s);
                        }
                        var f = o.child;
                        if (null !== f) (f.return = o), (Xl = f);
                        else
                          for (; null !== Xl; ) {
                            var h = (o = Xl).sibling,
                              p = o.return;
                            if ((du(o), o === a)) {
                              Xl = null;
                              break;
                            }
                            if (null !== h) {
                              (h.return = p), (Xl = h);
                              break;
                            }
                            Xl = p;
                          }
                      }
                    }
                    var y = s.alternate;
                    if (null !== y) {
                      var m = y.child;
                      if (null !== m) {
                        y.child = null;
                        do {
                          var g = m.sibling;
                          (m.sibling = null), (m = g);
                        } while (null !== m);
                      }
                    }
                    Xl = s;
                  }
                }
                if (0 != (2064 & s.subtreeFlags) && null !== l)
                  (l.return = s), (Xl = l);
                else
                  e: for (; null !== Xl; ) {
                    if (0 != (2048 & (s = Xl).flags))
                      switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ru(9, s, s.return);
                      }
                    var b = s.sibling;
                    if (null !== b) {
                      (b.return = s.return), (Xl = b);
                      break e;
                    }
                    Xl = s.return;
                  }
              }
              var v = e.current;
              for (Xl = v; null !== Xl; ) {
                var C = (l = Xl).child;
                if (0 != (2064 & l.subtreeFlags) && null !== C)
                  (C.return = l), (Xl = C);
                else
                  e: for (l = v; null !== Xl; ) {
                    if (0 != (2048 & (u = Xl).flags))
                      try {
                        switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                            iu(9, u);
                        }
                      } catch (A) {
                        Dc(u, u.return, A);
                      }
                    if (u === l) {
                      Xl = null;
                      break e;
                    }
                    var E = u.sibling;
                    if (null !== E) {
                      (E.return = u.return), (Xl = E);
                      break e;
                    }
                    Xl = u.return;
                  }
              }
              if (
                ((ku = n),
                zn(),
                dt && 'function' == typeof dt.onPostCommitFiberRoot)
              )
                try {
                  dt.onPostCommitFiberRoot(nt, e);
                } catch (A) {}
              i = !0;
            }
            return i;
          } finally {
            (vt = r), (xu.transition = t);
          }
        }
        return !1;
      }
      function wc(e, t, r) {
        (e = Nd(e, (t = hl(0, (t = cl(r, t)), 1)), 1)),
          (t = ec()),
          null !== e && (gt(e, 1, t), ic(e, t));
      }
      function Dc(e, t, r) {
        if (3 === e.tag) wc(e, e, r);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              wc(t, e, r);
              break;
            }
            if (1 === t.tag) {
              var i = t.stateNode;
              if (
                'function' == typeof t.type.getDerivedStateFromError ||
                ('function' == typeof i.componentDidCatch &&
                  (null === Wu || !Wu.has(i)))
              ) {
                (t = Nd(t, (e = pl(t, (e = cl(r, e)), 1)), 1)),
                  (e = ec()),
                  null !== t && (gt(t, 1, e), ic(t, e));
                break;
              }
            }
            t = t.return;
          }
      }
      function Gc(e, t, r) {
        var i = e.pingCache;
        null !== i && i.delete(t),
          (t = ec()),
          (e.pingedLanes |= e.suspendedLanes & r),
          Fu === e &&
            (Tu & r) === r &&
            (4 === Nu ||
            (3 === Nu && (130023424 & Tu) === Tu && 500 > Ze() - Uu)
              ? fc(e, 0)
              : (Iu |= r)),
          ic(e, t);
      }
      function Sc(e, t) {
        0 === t &&
          (0 == (1 & e.mode)
            ? (t = 1)
            : ((t = at), 0 == (130023424 & (at <<= 1)) && (at = 4194304)));
        var r = ec();
        null !== (e = Fd(e, t)) && (gt(e, t, r), ic(e, r));
      }
      function xc(e) {
        var t = e.memoizedState,
          r = 0;
        null !== t && (r = t.retryLane), Sc(e, r);
      }
      function kc(e, t) {
        var r = 0;
        switch (e.tag) {
          case 13:
            var i = e.stateNode,
              n = e.memoizedState;
            null !== n && (r = n.retryLane);
            break;
          case 19:
            i = e.stateNode;
            break;
          default:
            throw Error(d(314));
        }
        null !== i && i.delete(t), Sc(e, r);
      }
      function Fc(e, t) {
        return Ve(e, t);
      }
      function Pc(e, t, r, i) {
        (this.tag = e),
          (this.key = r),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = i),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Tc(e, t, r, i) {
        return new Pc(e, t, r, i);
      }
      function Rc(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function _c(e, t) {
        var r = e.alternate;
        return (
          null === r
            ? (((r = Tc(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (r.type = e.type),
              (r.stateNode = e.stateNode),
              (r.alternate = e),
              (e.alternate = r))
            : ((r.pendingProps = t),
              (r.type = e.type),
              (r.flags = 0),
              (r.subtreeFlags = 0),
              (r.deletions = null)),
          (r.flags = 14680064 & e.flags),
          (r.childLanes = e.childLanes),
          (r.lanes = e.lanes),
          (r.child = e.child),
          (r.memoizedProps = e.memoizedProps),
          (r.memoizedState = e.memoizedState),
          (r.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (r.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (r.sibling = e.sibling),
          (r.index = e.index),
          (r.ref = e.ref),
          r
        );
      }
      function Nc(e, t, r, i, n, s) {
        var l = 2;
        if (((i = e), 'function' == typeof e)) Rc(e) && (l = 1);
        else if ('string' == typeof e) l = 5;
        else
          e: switch (e) {
            case w:
              return Oc(r.children, n, s, t);
            case D:
              (l = 8), (n |= 8);
              break;
            case G:
              return (
                ((e = Tc(12, r, t, 2 | n)).elementType = G), (e.lanes = s), e
              );
            case F:
              return ((e = Tc(13, r, t, n)).elementType = F), (e.lanes = s), e;
            case P:
              return ((e = Tc(19, r, t, n)).elementType = P), (e.lanes = s), e;
            case _:
              return Lc(r, n, s, t);
            default:
              if ('object' == typeof e && null !== e)
                switch (e.$$typeof) {
                  case S:
                    l = 10;
                    break e;
                  case x:
                    l = 9;
                    break e;
                  case k:
                    l = 11;
                    break e;
                  case T:
                    l = 14;
                    break e;
                  case R:
                    (l = 16), (i = null);
                    break e;
                }
              throw Error(d(130, null == e ? e : typeof e, ''));
          }
        return (
          ((t = Tc(l, r, t, n)).elementType = e), (t.type = i), (t.lanes = s), t
        );
      }
      function Oc(e, t, r, i) {
        return ((e = Tc(7, e, i, t)).lanes = r), e;
      }
      function Lc(e, t, r, i) {
        return (
          ((e = Tc(22, e, i, t)).elementType = _),
          (e.lanes = r),
          (e.stateNode = { isHidden: !1 }),
          e
        );
      }
      function jc(e, t, r) {
        return ((e = Tc(6, e, null, t)).lanes = r), e;
      }
      function Ic(e, t, r) {
        return (
          ((t = Tc(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            r),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Mc(e, t, r, i, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = mt(0)),
          (this.expirationTimes = mt(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = mt(0)),
          (this.identifierPrefix = i),
          (this.onRecoverableError = n),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Bc(e, t, r, i, n, d, s, l, u) {
        return (
          (e = new Mc(e, t, r, l, u)),
          1 === t ? ((t = 1), !0 === d && (t |= 8)) : (t = 0),
          (d = Tc(3, null, null, t)),
          (e.current = d),
          (d.stateNode = e),
          (d.memoizedState = {
            element: i,
            isDehydrated: r,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          Td(d),
          e
        );
      }
      function Uc(e) {
        if (!e) return xn;
        e: {
          if (ze((e = e._reactInternals)) !== e || 1 !== e.tag)
            throw Error(d(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Rn(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (null !== t);
          throw Error(d(171));
        }
        if (1 === e.tag) {
          var r = e.type;
          if (Rn(r)) return On(e, r, t);
        }
        return t;
      }
      function zc(e, t, r, i, n, d, s, l, u) {
        return (
          ((e = Bc(r, i, !0, e, 0, d, 0, l, u)).context = Uc(null)),
          (r = e.current),
          ((d = _d((i = ec()), (n = tc(r)))).callback = null != t ? t : null),
          Nd(r, d, n),
          (e.current.lanes = n),
          gt(e, n, i),
          ic(e, i),
          e
        );
      }
      function Hc(e, t, r, i) {
        var n = t.current,
          d = ec(),
          s = tc(n);
        return (
          (r = Uc(r)),
          null === t.context ? (t.context = r) : (t.pendingContext = r),
          ((t = _d(d, s)).payload = { element: e }),
          null !== (i = void 0 === i ? null : i) && (t.callback = i),
          null !== (e = Nd(n, t, s)) && (rc(e, n, s, d), Od(e, n, s)),
          s
        );
      }
      function Qc(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function $c(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var r = e.retryLane;
          e.retryLane = 0 !== r && r < t ? r : t;
        }
      }
      function Wc(e, t) {
        $c(e, t), (e = e.alternate) && $c(e, t);
      }
      wu = function (e, t, r) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || Fn.current) vl = !0;
          else {
            if (0 == (e.lanes & r) && 0 == (128 & t.flags))
              return (
                (vl = !1),
                (function (e, t, r) {
                  switch (t.tag) {
                    case 3:
                      Fl(t), hd();
                      break;
                    case 5:
                      ds(t);
                      break;
                    case 1:
                      Rn(t.type) && Ln(t);
                      break;
                    case 4:
                      is(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var i = t.type._context,
                        n = t.memoizedProps.value;
                      Sn(gd, i._currentValue), (i._currentValue = n);
                      break;
                    case 13:
                      if (null !== (i = t.memoizedState))
                        return null !== i.dehydrated
                          ? (Sn(ls, 1 & ls.current), (t.flags |= 128), null)
                          : 0 != (r & t.child.childLanes)
                          ? jl(e, t, r)
                          : (Sn(ls, 1 & ls.current),
                            null !== (e = Ql(e, t, r)) ? e.sibling : null);
                      Sn(ls, 1 & ls.current);
                      break;
                    case 19:
                      if (
                        ((i = 0 != (r & t.childLanes)), 0 != (128 & e.flags))
                      ) {
                        if (i) return zl(e, t, r);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (n = t.memoizedState) &&
                          ((n.rendering = null),
                          (n.tail = null),
                          (n.lastEffect = null)),
                        Sn(ls, ls.current),
                        i)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Dl(e, t, r);
                  }
                  return Ql(e, t, r);
                })(e, t, r)
              );
            vl = 0 != (131072 & e.flags);
          }
        else (vl = !1), nd && 0 != (1048576 & t.flags) && Jn(t, Wn, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var i = t.type;
            Hl(e, t), (e = t.pendingProps);
            var n = Tn(t, kn.current);
            Dd(t, r), (n = ws(null, t, i, e, n, r));
            var s = Ds();
            return (
              (t.flags |= 1),
              'object' == typeof n &&
              null !== n &&
              'function' == typeof n.render &&
              void 0 === n.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  Rn(i) ? ((s = !0), Ln(t)) : (s = !1),
                  (t.memoizedState =
                    null !== n.state && void 0 !== n.state ? n.state : null),
                  Td(t),
                  (n.updater = Ud),
                  (t.stateNode = n),
                  (n._reactInternals = t),
                  $d(t, i, e, r),
                  (t = kl(null, t, i, !0, s, r)))
                : ((t.tag = 0),
                  nd && s && ed(t),
                  Cl(null, t, n, r),
                  (t = t.child)),
              t
            );
          case 16:
            i = t.elementType;
            e: {
              switch (
                (Hl(e, t),
                (e = t.pendingProps),
                (i = (n = i._init)(i._payload)),
                (t.type = i),
                (n = t.tag =
                  (function (e) {
                    if ('function' == typeof e) return Rc(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === k) return 11;
                      if (e === T) return 14;
                    }
                    return 2;
                  })(i)),
                (e = md(i, e)),
                n)
              ) {
                case 0:
                  t = Sl(null, t, i, e, r);
                  break e;
                case 1:
                  t = xl(null, t, i, e, r);
                  break e;
                case 11:
                  t = El(null, t, i, e, r);
                  break e;
                case 14:
                  t = Al(null, t, i, md(i.type, e), r);
                  break e;
              }
              throw Error(d(306, i, ''));
            }
            return t;
          case 0:
            return (
              (i = t.type),
              (n = t.pendingProps),
              Sl(e, t, i, (n = t.elementType === i ? n : md(i, n)), r)
            );
          case 1:
            return (
              (i = t.type),
              (n = t.pendingProps),
              xl(e, t, i, (n = t.elementType === i ? n : md(i, n)), r)
            );
          case 3:
            e: {
              if ((Fl(t), null === e)) throw Error(d(387));
              (i = t.pendingProps),
                (n = (s = t.memoizedState).element),
                Rd(e, t),
                jd(t, i, null, r);
              var l = t.memoizedState;
              if (((i = l.element), s.isDehydrated)) {
                if (
                  ((s = {
                    element: i,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions,
                  }),
                  (t.updateQueue.baseState = s),
                  (t.memoizedState = s),
                  256 & t.flags)
                ) {
                  t = Pl(e, t, i, r, (n = cl(Error(d(423)), t)));
                  break e;
                }
                if (i !== n) {
                  t = Pl(e, t, i, r, (n = cl(Error(d(424)), t)));
                  break e;
                }
                for (
                  id = cn(t.stateNode.containerInfo.firstChild),
                    rd = t,
                    nd = !0,
                    dd = null,
                    r = Zd(t, null, i, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
              } else {
                if ((hd(), i === n)) {
                  t = Ql(e, t, r);
                  break e;
                }
                Cl(e, t, i, r);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              ds(t),
              null === e && cd(t),
              (i = t.type),
              (n = t.pendingProps),
              (s = null !== e ? e.memoizedProps : null),
              (l = n.children),
              tn(i, n) ? (l = null) : null !== s && tn(i, s) && (t.flags |= 32),
              Gl(e, t),
              Cl(e, t, l, r),
              t.child
            );
          case 6:
            return null === e && cd(t), null;
          case 13:
            return jl(e, t, r);
          case 4:
            return (
              is(t, t.stateNode.containerInfo),
              (i = t.pendingProps),
              null === e ? (t.child = Yd(t, null, i, r)) : Cl(e, t, i, r),
              t.child
            );
          case 11:
            return (
              (i = t.type),
              (n = t.pendingProps),
              El(e, t, i, (n = t.elementType === i ? n : md(i, n)), r)
            );
          case 7:
            return Cl(e, t, t.pendingProps, r), t.child;
          case 8:
          case 12:
            return Cl(e, t, t.pendingProps.children, r), t.child;
          case 10:
            e: {
              if (
                ((i = t.type._context),
                (n = t.pendingProps),
                (s = t.memoizedProps),
                (l = n.value),
                Sn(gd, i._currentValue),
                (i._currentValue = l),
                null !== s)
              )
                if (si(s.value, l)) {
                  if (s.children === n.children && !Fn.current) {
                    t = Ql(e, t, r);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === i) {
                          if (1 === s.tag) {
                            (c = _d(-1, r & -r)).tag = 2;
                            var a = s.updateQueue;
                            if (null !== a) {
                              var o = (a = a.shared).pending;
                              null === o
                                ? (c.next = c)
                                : ((c.next = o.next), (o.next = c)),
                                (a.pending = c);
                            }
                          }
                          (s.lanes |= r),
                            null !== (c = s.alternate) && (c.lanes |= r),
                            wd(s.return, r, t),
                            (u.lanes |= r);
                          break;
                        }
                        c = c.next;
                      }
                    } else if (10 === s.tag)
                      l = s.type === t.type ? null : s.child;
                    else if (18 === s.tag) {
                      if (null === (l = s.return)) throw Error(d(341));
                      (l.lanes |= r),
                        null !== (u = l.alternate) && (u.lanes |= r),
                        wd(l, r, t),
                        (l = s.sibling);
                    } else l = s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              Cl(e, t, n.children, r), (t = t.child);
            }
            return t;
          case 9:
            return (
              (n = t.type),
              (i = t.pendingProps.children),
              Dd(t, r),
              (i = i((n = Gd(n)))),
              (t.flags |= 1),
              Cl(e, t, i, r),
              t.child
            );
          case 14:
            return (
              (n = md((i = t.type), t.pendingProps)),
              Al(e, t, i, (n = md(i.type, n)), r)
            );
          case 15:
            return wl(e, t, t.type, t.pendingProps, r);
          case 17:
            return (
              (i = t.type),
              (n = t.pendingProps),
              (n = t.elementType === i ? n : md(i, n)),
              Hl(e, t),
              (t.tag = 1),
              Rn(i) ? ((e = !0), Ln(t)) : (e = !1),
              Dd(t, r),
              Hd(t, i, n),
              $d(t, i, n, r),
              kl(null, t, i, !0, e, r)
            );
          case 19:
            return zl(e, t, r);
          case 22:
            return Dl(e, t, r);
        }
        throw Error(d(156, t.tag));
      };
      var Vc =
        'function' == typeof reportError
          ? reportError
          : function (e) {
              console.error(e);
            };
      function qc(e) {
        this._internalRoot = e;
      }
      function Kc(e) {
        this._internalRoot = e;
      }
      function Yc(e) {
        return !(
          !e ||
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        );
      }
      function Zc(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function Xc() {}
      function Jc(e, t, r, i, n) {
        var d = r._reactRootContainer;
        if (d) {
          var s = d;
          if ('function' == typeof n) {
            var l = n;
            n = function () {
              var e = Qc(s);
              l.call(e);
            };
          }
          Hc(t, s, e, n);
        } else
          s = (function (e, t, r, i, n) {
            if (n) {
              if ('function' == typeof i) {
                var d = i;
                i = function () {
                  var e = Qc(s);
                  d.call(e);
                };
              }
              var s = zc(t, i, e, 0, null, !1, 0, '', Xc);
              return (
                (e._reactRootContainer = s),
                (e[pn] = s.current),
                Ui(8 === e.nodeType ? e.parentNode : e),
                ac(),
                s
              );
            }
            for (; (n = e.lastChild); ) e.removeChild(n);
            if ('function' == typeof i) {
              var l = i;
              i = function () {
                var e = Qc(u);
                l.call(e);
              };
            }
            var u = Bc(e, 0, !1, null, 0, !1, 0, '', Xc);
            return (
              (e._reactRootContainer = u),
              (e[pn] = u.current),
              Ui(8 === e.nodeType ? e.parentNode : e),
              ac(function () {
                Hc(t, u, r, i);
              }),
              u
            );
          })(r, t, e, n, i);
        return Qc(s);
      }
      (Kc.prototype.render = qc.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(d(409));
          Hc(e, t, null, null);
        }),
        (Kc.prototype.unmount = qc.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              ac(function () {
                Hc(null, e, null, null);
              }),
                (t[pn] = null);
            }
          }),
        (Kc.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Dt();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var r = 0;
              r < _t.length && 0 !== t && t < _t[r].priority;
              r++
            );
            _t.splice(r, 0, e), 0 === r && jt(e);
          }
        }),
        (Et = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var r = ot(t.pendingLanes);
                0 !== r &&
                  (bt(t, 1 | r),
                  ic(t, Ze()),
                  0 == (6 & ku) && ((zu = Ze() + 500), zn()));
              }
              break;
            case 13:
              ac(function () {
                var t = Fd(e, 1);
                if (null !== t) {
                  var r = ec();
                  rc(t, e, 1, r);
                }
              }),
                Wc(e, 1);
          }
        }),
        (At = function (e) {
          if (13 === e.tag) {
            var t = Fd(e, 134217728);
            if (null !== t) rc(t, e, 134217728, ec());
            Wc(e, 134217728);
          }
        }),
        (wt = function (e) {
          if (13 === e.tag) {
            var t = tc(e),
              r = Fd(e, t);
            if (null !== r) rc(r, e, t, ec());
            Wc(e, t);
          }
        }),
        (Dt = function () {
          return vt;
        }),
        (Gt = function (e, t) {
          var r = vt;
          try {
            return (vt = e), t();
          } finally {
            vt = r;
          }
        }),
        (Ae = function (e, t, r) {
          switch (t) {
            case 'input':
              if ((X(e, r), (t = r.name), 'radio' === r.type && null != t)) {
                for (r = e; r.parentNode; ) r = r.parentNode;
                for (
                  r = r.querySelectorAll(
                    'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < r.length;
                  t++
                ) {
                  var i = r[t];
                  if (i !== e && i.form === e.form) {
                    var n = En(i);
                    if (!n) throw Error(d(90));
                    V(i), X(i, n);
                  }
                }
              }
              break;
            case 'textarea':
              de(e, r);
              break;
            case 'select':
              null != (t = r.value) && re(e, !!r.multiple, t, !1);
          }
        }),
        (ke = cc),
        (Fe = ac);
      var ea = { usingClientEntryPoint: !1, Events: [vn, Cn, En, Se, xe, cc] },
        ta = {
          findFiberByHostInstance: bn,
          bundleType: 0,
          version: '18.2.0',
          rendererPackageName: 'react-dom',
        },
        ra = {
          bundleType: ta.bundleType,
          version: ta.version,
          rendererPackageName: ta.rendererPackageName,
          rendererConfig: ta.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: C.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = $e(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ta.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
        };
      if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ia.isDisabled && ia.supportsFiber)
          try {
            (nt = ia.inject(ra)), (dt = ia);
          } catch (ae) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ea),
        (t.createPortal = function (e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!Yc(t)) throw Error(d(200));
          return (function (e, t, r) {
            var i =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: A,
              key: null == i ? null : '' + i,
              children: e,
              containerInfo: t,
              implementation: r,
            };
          })(e, t, null, r);
        }),
        (t.createRoot = function (e, t) {
          if (!Yc(e)) throw Error(d(299));
          var r = !1,
            i = '',
            n = Vc;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (r = !0),
              void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
              void 0 !== t.onRecoverableError && (n = t.onRecoverableError)),
            (t = Bc(e, 1, !1, null, 0, r, 0, i, n)),
            (e[pn] = t.current),
            Ui(8 === e.nodeType ? e.parentNode : e),
            new qc(t)
          );
        }),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(d(188));
            throw ((e = Object.keys(e).join(',')), Error(d(268, e)));
          }
          return (e = null === (e = $e(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e) {
          return ac(e);
        }),
        (t.hydrate = function (e, t, r) {
          if (!Zc(t)) throw Error(d(200));
          return Jc(null, e, t, !0, r);
        }),
        (t.hydrateRoot = function (e, t, r) {
          if (!Yc(e)) throw Error(d(405));
          var i = (null != r && r.hydratedSources) || null,
            n = !1,
            s = '',
            l = Vc;
          if (
            (null != r &&
              (!0 === r.unstable_strictMode && (n = !0),
              void 0 !== r.identifierPrefix && (s = r.identifierPrefix),
              void 0 !== r.onRecoverableError && (l = r.onRecoverableError)),
            (t = zc(t, null, e, 1, null != r ? r : null, n, 0, s, l)),
            (e[pn] = t.current),
            Ui(e),
            i)
          )
            for (e = 0; e < i.length; e++)
              (n = (n = (r = i[e])._getVersion)(r._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [r, n])
                  : t.mutableSourceEagerHydrationData.push(r, n);
          return new Kc(t);
        }),
        (t.render = function (e, t, r) {
          if (!Zc(t)) throw Error(d(200));
          return Jc(null, e, t, !1, r);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Zc(e)) throw Error(d(40));
          return (
            !!e._reactRootContainer &&
            (ac(function () {
              Jc(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[pn] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = cc),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
          if (!Zc(r)) throw Error(d(200));
          if (null == e || void 0 === e._reactInternals) throw Error(d(38));
          return Jc(e, t, r, !1, i);
        }),
        (t.version = '18.2.0-next-9e3b772b8-20220608');
    },
    873: (e, t, r) => {
      'use strict';
      var i = r(144);
      (t.H = i.createRoot), i.hydrateRoot;
    },
    144: (e, t, r) => {
      'use strict';
      !(function e() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = r(400));
    },
    42: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => s });
      var i = r(311),
        n = r(468),
        d = r(408),
        s = new ((function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).setup = function (e) {
                var t;
                if (
                  !d.S$ &&
                  (null == (t = window) ? void 0 : t.addEventListener)
                ) {
                  var r = function () {
                    return e();
                  };
                  return (
                    window.addEventListener('visibilitychange', r, !1),
                    window.addEventListener('focus', r, !1),
                    function () {
                      window.removeEventListener('visibilitychange', r),
                        window.removeEventListener('focus', r);
                    }
                  );
                }
              }),
              t
            );
          }
          (0, i.A)(t, e);
          var r = t.prototype;
          return (
            (r.onSubscribe = function () {
              this.cleanup || this.setEventListener(this.setup);
            }),
            (r.onUnsubscribe = function () {
              var e;
              this.hasListeners() ||
                (null == (e = this.cleanup) || e.call(this),
                (this.cleanup = void 0));
            }),
            (r.setEventListener = function (e) {
              var t,
                r = this;
              (this.setup = e),
                null == (t = this.cleanup) || t.call(this),
                (this.cleanup = e(function (e) {
                  'boolean' == typeof e ? r.setFocused(e) : r.onFocus();
                }));
            }),
            (r.setFocused = function (e) {
              (this.focused = e), e && this.onFocus();
            }),
            (r.onFocus = function () {
              this.listeners.forEach(function (e) {
                e();
              });
            }),
            (r.isFocused = function () {
              return 'boolean' == typeof this.focused
                ? this.focused
                : 'undefined' == typeof document ||
                    [void 0, 'visible', 'prerender'].includes(
                      document.visibilityState
                    );
            }),
            t
          );
        })(n.Q))();
    },
    821: (e, t, r) => {
      'use strict';
      r.d(t, { QueryClient: () => i.E });
      var i = r(856),
        n = r(772);
      r.o(n, 'QueryClientProvider') &&
        r.d(t, {
          QueryClientProvider: function () {
            return n.QueryClientProvider;
          },
        }),
        r.o(n, 'useQuery') &&
          r.d(t, {
            useQuery: function () {
              return n.useQuery;
            },
          });
    },
    109: (e, t, r) => {
      'use strict';
      r.d(t, { B: () => d, t: () => n });
      var i = console;
      function n() {
        return i;
      }
      function d(e) {
        i = e;
      }
    },
    469: (e, t, r) => {
      'use strict';
      r.d(t, { j: () => n });
      var i = r(408),
        n = new ((function () {
          function e() {
            (this.queue = []),
              (this.transactions = 0),
              (this.notifyFn = function (e) {
                e();
              }),
              (this.batchNotifyFn = function (e) {
                e();
              });
          }
          var t = e.prototype;
          return (
            (t.batch = function (e) {
              var t;
              this.transactions++;
              try {
                t = e();
              } finally {
                this.transactions--, this.transactions || this.flush();
              }
              return t;
            }),
            (t.schedule = function (e) {
              var t = this;
              this.transactions
                ? this.queue.push(e)
                : (0, i.G6)(function () {
                    t.notifyFn(e);
                  });
            }),
            (t.batchCalls = function (e) {
              var t = this;
              return function () {
                for (
                  var r = arguments.length, i = new Array(r), n = 0;
                  n < r;
                  n++
                )
                  i[n] = arguments[n];
                t.schedule(function () {
                  e.apply(void 0, i);
                });
              };
            }),
            (t.flush = function () {
              var e = this,
                t = this.queue;
              (this.queue = []),
                t.length &&
                  (0, i.G6)(function () {
                    e.batchNotifyFn(function () {
                      t.forEach(function (t) {
                        e.notifyFn(t);
                      });
                    });
                  });
            }),
            (t.setNotifyFunction = function (e) {
              this.notifyFn = e;
            }),
            (t.setBatchNotifyFunction = function (e) {
              this.batchNotifyFn = e;
            }),
            e
          );
        })())();
    },
    227: (e, t, r) => {
      'use strict';
      r.d(t, { t: () => s });
      var i = r(311),
        n = r(468),
        d = r(408),
        s = new ((function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).setup = function (e) {
                var t;
                if (
                  !d.S$ &&
                  (null == (t = window) ? void 0 : t.addEventListener)
                ) {
                  var r = function () {
                    return e();
                  };
                  return (
                    window.addEventListener('online', r, !1),
                    window.addEventListener('offline', r, !1),
                    function () {
                      window.removeEventListener('online', r),
                        window.removeEventListener('offline', r);
                    }
                  );
                }
              }),
              t
            );
          }
          (0, i.A)(t, e);
          var r = t.prototype;
          return (
            (r.onSubscribe = function () {
              this.cleanup || this.setEventListener(this.setup);
            }),
            (r.onUnsubscribe = function () {
              var e;
              this.hasListeners() ||
                (null == (e = this.cleanup) || e.call(this),
                (this.cleanup = void 0));
            }),
            (r.setEventListener = function (e) {
              var t,
                r = this;
              (this.setup = e),
                null == (t = this.cleanup) || t.call(this),
                (this.cleanup = e(function (e) {
                  'boolean' == typeof e ? r.setOnline(e) : r.onOnline();
                }));
            }),
            (r.setOnline = function (e) {
              (this.online = e), e && this.onOnline();
            }),
            (r.onOnline = function () {
              this.listeners.forEach(function (e) {
                e();
              });
            }),
            (r.isOnline = function () {
              return 'boolean' == typeof this.online
                ? this.online
                : 'undefined' == typeof navigator ||
                    void 0 === navigator.onLine ||
                    navigator.onLine;
            }),
            t
          );
        })(n.Q))();
    },
    856: (e, t, r) => {
      'use strict';
      r.d(t, { E: () => b });
      var i = r(150),
        n = r(408),
        d = r(311),
        s = r(469),
        l = r(109),
        u = r(344),
        c = (function () {
          function e(e) {
            (this.abortSignalConsumed = !1),
              (this.hadObservers = !1),
              (this.defaultOptions = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.cache = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.initialState =
                e.state || this.getDefaultState(this.options)),
              (this.state = this.initialState),
              (this.meta = e.meta),
              this.scheduleGc();
          }
          var t = e.prototype;
          return (
            (t.setOptions = function (e) {
              var t;
              (this.options = (0, i.A)({}, this.defaultOptions, e)),
                (this.meta = null == e ? void 0 : e.meta),
                (this.cacheTime = Math.max(
                  this.cacheTime || 0,
                  null != (t = this.options.cacheTime) ? t : 3e5
                ));
            }),
            (t.setDefaultOptions = function (e) {
              this.defaultOptions = e;
            }),
            (t.scheduleGc = function () {
              var e = this;
              this.clearGcTimeout(),
                (0, n.gn)(this.cacheTime) &&
                  (this.gcTimeout = setTimeout(function () {
                    e.optionalRemove();
                  }, this.cacheTime));
            }),
            (t.clearGcTimeout = function () {
              this.gcTimeout &&
                (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
            }),
            (t.optionalRemove = function () {
              this.observers.length ||
                (this.state.isFetching
                  ? this.hadObservers && this.scheduleGc()
                  : this.cache.remove(this));
            }),
            (t.setData = function (e, t) {
              var r,
                i,
                d = this.state.data,
                s = (0, n.Zw)(e, d);
              return (
                (
                  null == (r = (i = this.options).isDataEqual)
                    ? void 0
                    : r.call(i, d, s)
                )
                  ? (s = d)
                  : !1 !== this.options.structuralSharing &&
                    (s = (0, n.BH)(d, s)),
                this.dispatch({
                  data: s,
                  type: 'success',
                  dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                }),
                s
              );
            }),
            (t.setState = function (e, t) {
              this.dispatch({ type: 'setState', state: e, setStateOptions: t });
            }),
            (t.cancel = function (e) {
              var t,
                r = this.promise;
              return (
                null == (t = this.retryer) || t.cancel(e),
                r ? r.then(n.lQ).catch(n.lQ) : Promise.resolve()
              );
            }),
            (t.destroy = function () {
              this.clearGcTimeout(), this.cancel({ silent: !0 });
            }),
            (t.reset = function () {
              this.destroy(), this.setState(this.initialState);
            }),
            (t.isActive = function () {
              return this.observers.some(function (e) {
                return !1 !== e.options.enabled;
              });
            }),
            (t.isFetching = function () {
              return this.state.isFetching;
            }),
            (t.isStale = function () {
              return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                this.observers.some(function (e) {
                  return e.getCurrentResult().isStale;
                })
              );
            }),
            (t.isStaleByTime = function (e) {
              return (
                void 0 === e && (e = 0),
                this.state.isInvalidated ||
                  !this.state.dataUpdatedAt ||
                  !(0, n.j3)(this.state.dataUpdatedAt, e)
              );
            }),
            (t.onFocus = function () {
              var e,
                t = this.observers.find(function (e) {
                  return e.shouldFetchOnWindowFocus();
                });
              t && t.refetch(), null == (e = this.retryer) || e.continue();
            }),
            (t.onOnline = function () {
              var e,
                t = this.observers.find(function (e) {
                  return e.shouldFetchOnReconnect();
                });
              t && t.refetch(), null == (e = this.retryer) || e.continue();
            }),
            (t.addObserver = function (e) {
              -1 === this.observers.indexOf(e) &&
                (this.observers.push(e),
                (this.hadObservers = !0),
                this.clearGcTimeout(),
                this.cache.notify({
                  type: 'observerAdded',
                  query: this,
                  observer: e,
                }));
            }),
            (t.removeObserver = function (e) {
              -1 !== this.observers.indexOf(e) &&
                ((this.observers = this.observers.filter(function (t) {
                  return t !== e;
                })),
                this.observers.length ||
                  (this.retryer &&
                    (this.retryer.isTransportCancelable ||
                    this.abortSignalConsumed
                      ? this.retryer.cancel({ revert: !0 })
                      : this.retryer.cancelRetry()),
                  this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
                this.cache.notify({
                  type: 'observerRemoved',
                  query: this,
                  observer: e,
                }));
            }),
            (t.getObserversCount = function () {
              return this.observers.length;
            }),
            (t.invalidate = function () {
              this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
            }),
            (t.fetch = function (e, t) {
              var r,
                i,
                d,
                s = this;
              if (this.state.isFetching)
                if (
                  this.state.dataUpdatedAt &&
                  (null == t ? void 0 : t.cancelRefetch)
                )
                  this.cancel({ silent: !0 });
                else if (this.promise) {
                  var c;
                  return (
                    null == (c = this.retryer) || c.continueRetry(),
                    this.promise
                  );
                }
              if ((e && this.setOptions(e), !this.options.queryFn)) {
                var a = this.observers.find(function (e) {
                  return e.options.queryFn;
                });
                a && this.setOptions(a.options);
              }
              var o = (0, n.HN)(this.queryKey),
                f = (0, n.jY)(),
                h = { queryKey: o, pageParam: void 0, meta: this.meta };
              Object.defineProperty(h, 'signal', {
                enumerable: !0,
                get: function () {
                  if (f) return (s.abortSignalConsumed = !0), f.signal;
                },
              });
              var p,
                y,
                m = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: o,
                  state: this.state,
                  fetchFn: function () {
                    return s.options.queryFn
                      ? ((s.abortSignalConsumed = !1), s.options.queryFn(h))
                      : Promise.reject('Missing queryFn');
                  },
                  meta: this.meta,
                };
              (null == (r = this.options.behavior) ? void 0 : r.onFetch) &&
                (null == (p = this.options.behavior) || p.onFetch(m));
              ((this.revertState = this.state),
              this.state.isFetching &&
                this.state.fetchMeta ===
                  (null == (i = m.fetchOptions) ? void 0 : i.meta)) ||
                this.dispatch({
                  type: 'fetch',
                  meta: null == (y = m.fetchOptions) ? void 0 : y.meta,
                });
              return (
                (this.retryer = new u.eJ({
                  fn: m.fetchFn,
                  abort:
                    null == f || null == (d = f.abort) ? void 0 : d.bind(f),
                  onSuccess: function (e) {
                    s.setData(e),
                      null == s.cache.config.onSuccess ||
                        s.cache.config.onSuccess(e, s),
                      0 === s.cacheTime && s.optionalRemove();
                  },
                  onError: function (e) {
                    ((0, u.wm)(e) && e.silent) ||
                      s.dispatch({ type: 'error', error: e }),
                      (0, u.wm)(e) ||
                        (null == s.cache.config.onError ||
                          s.cache.config.onError(e, s),
                        (0, l.t)().error(e)),
                      0 === s.cacheTime && s.optionalRemove();
                  },
                  onFail: function () {
                    s.dispatch({ type: 'failed' });
                  },
                  onPause: function () {
                    s.dispatch({ type: 'pause' });
                  },
                  onContinue: function () {
                    s.dispatch({ type: 'continue' });
                  },
                  retry: m.options.retry,
                  retryDelay: m.options.retryDelay,
                })),
                (this.promise = this.retryer.promise),
                this.promise
              );
            }),
            (t.dispatch = function (e) {
              var t = this;
              (this.state = this.reducer(this.state, e)),
                s.j.batch(function () {
                  t.observers.forEach(function (t) {
                    t.onQueryUpdate(e);
                  }),
                    t.cache.notify({
                      query: t,
                      type: 'queryUpdated',
                      action: e,
                    });
                });
            }),
            (t.getDefaultState = function (e) {
              var t =
                  'function' == typeof e.initialData
                    ? e.initialData()
                    : e.initialData,
                r =
                  void 0 !== e.initialData
                    ? 'function' == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0,
                i = void 0 !== t;
              return {
                data: t,
                dataUpdateCount: 0,
                dataUpdatedAt: i ? (null != r ? r : Date.now()) : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: i ? 'success' : 'idle',
              };
            }),
            (t.reducer = function (e, t) {
              var r, n;
              switch (t.type) {
                case 'failed':
                  return (0, i.A)({}, e, {
                    fetchFailureCount: e.fetchFailureCount + 1,
                  });
                case 'pause':
                  return (0, i.A)({}, e, { isPaused: !0 });
                case 'continue':
                  return (0, i.A)({}, e, { isPaused: !1 });
                case 'fetch':
                  return (0, i.A)(
                    {},
                    e,
                    {
                      fetchFailureCount: 0,
                      fetchMeta: null != (r = t.meta) ? r : null,
                      isFetching: !0,
                      isPaused: !1,
                    },
                    !e.dataUpdatedAt && { error: null, status: 'loading' }
                  );
                case 'success':
                  return (0, i.A)({}, e, {
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt:
                      null != (n = t.dataUpdatedAt) ? n : Date.now(),
                    error: null,
                    fetchFailureCount: 0,
                    isFetching: !1,
                    isInvalidated: !1,
                    isPaused: !1,
                    status: 'success',
                  });
                case 'error':
                  var d = t.error;
                  return (0, u.wm)(d) && d.revert && this.revertState
                    ? (0, i.A)({}, this.revertState)
                    : (0, i.A)({}, e, {
                        error: d,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: 'error',
                      });
                case 'invalidate':
                  return (0, i.A)({}, e, { isInvalidated: !0 });
                case 'setState':
                  return (0, i.A)({}, e, t.state);
                default:
                  return e;
              }
            }),
            e
          );
        })(),
        a = r(468),
        o = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this) || this).config = t || {}),
              (r.queries = []),
              (r.queriesMap = {}),
              r
            );
          }
          (0, d.A)(t, e);
          var r = t.prototype;
          return (
            (r.build = function (e, t, r) {
              var i,
                d = t.queryKey,
                s = null != (i = t.queryHash) ? i : (0, n.F$)(d, t),
                l = this.get(s);
              return (
                l ||
                  ((l = new c({
                    cache: this,
                    queryKey: d,
                    queryHash: s,
                    options: e.defaultQueryOptions(t),
                    state: r,
                    defaultOptions: e.getQueryDefaults(d),
                    meta: t.meta,
                  })),
                  this.add(l)),
                l
              );
            }),
            (r.add = function (e) {
              this.queriesMap[e.queryHash] ||
                ((this.queriesMap[e.queryHash] = e),
                this.queries.push(e),
                this.notify({ type: 'queryAdded', query: e }));
            }),
            (r.remove = function (e) {
              var t = this.queriesMap[e.queryHash];
              t &&
                (e.destroy(),
                (this.queries = this.queries.filter(function (t) {
                  return t !== e;
                })),
                t === e && delete this.queriesMap[e.queryHash],
                this.notify({ type: 'queryRemoved', query: e }));
            }),
            (r.clear = function () {
              var e = this;
              s.j.batch(function () {
                e.queries.forEach(function (t) {
                  e.remove(t);
                });
              });
            }),
            (r.get = function (e) {
              return this.queriesMap[e];
            }),
            (r.getAll = function () {
              return this.queries;
            }),
            (r.find = function (e, t) {
              var r = (0, n.b_)(e, t)[0];
              return (
                void 0 === r.exact && (r.exact = !0),
                this.queries.find(function (e) {
                  return (0, n.MK)(r, e);
                })
              );
            }),
            (r.findAll = function (e, t) {
              var r = (0, n.b_)(e, t)[0];
              return Object.keys(r).length > 0
                ? this.queries.filter(function (e) {
                    return (0, n.MK)(r, e);
                  })
                : this.queries;
            }),
            (r.notify = function (e) {
              var t = this;
              s.j.batch(function () {
                t.listeners.forEach(function (t) {
                  t(e);
                });
              });
            }),
            (r.onFocus = function () {
              var e = this;
              s.j.batch(function () {
                e.queries.forEach(function (e) {
                  e.onFocus();
                });
              });
            }),
            (r.onOnline = function () {
              var e = this;
              s.j.batch(function () {
                e.queries.forEach(function (e) {
                  e.onOnline();
                });
              });
            }),
            t
          );
        })(a.Q),
        f = (function () {
          function e(e) {
            (this.options = (0, i.A)({}, e.defaultOptions, e.options)),
              (this.mutationId = e.mutationId),
              (this.mutationCache = e.mutationCache),
              (this.observers = []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                isPaused: !1,
                status: 'idle',
                variables: void 0,
              }),
              (this.meta = e.meta);
          }
          var t = e.prototype;
          return (
            (t.setState = function (e) {
              this.dispatch({ type: 'setState', state: e });
            }),
            (t.addObserver = function (e) {
              -1 === this.observers.indexOf(e) && this.observers.push(e);
            }),
            (t.removeObserver = function (e) {
              this.observers = this.observers.filter(function (t) {
                return t !== e;
              });
            }),
            (t.cancel = function () {
              return this.retryer
                ? (this.retryer.cancel(),
                  this.retryer.promise.then(n.lQ).catch(n.lQ))
                : Promise.resolve();
            }),
            (t.continue = function () {
              return this.retryer
                ? (this.retryer.continue(), this.retryer.promise)
                : this.execute();
            }),
            (t.execute = function () {
              var e,
                t = this,
                r = 'loading' === this.state.status,
                i = Promise.resolve();
              return (
                r ||
                  (this.dispatch({
                    type: 'loading',
                    variables: this.options.variables,
                  }),
                  (i = i
                    .then(function () {
                      null == t.mutationCache.config.onMutate ||
                        t.mutationCache.config.onMutate(t.state.variables, t);
                    })
                    .then(function () {
                      return null == t.options.onMutate
                        ? void 0
                        : t.options.onMutate(t.state.variables);
                    })
                    .then(function (e) {
                      e !== t.state.context &&
                        t.dispatch({
                          type: 'loading',
                          context: e,
                          variables: t.state.variables,
                        });
                    }))),
                i
                  .then(function () {
                    return t.executeMutation();
                  })
                  .then(function (r) {
                    (e = r),
                      null == t.mutationCache.config.onSuccess ||
                        t.mutationCache.config.onSuccess(
                          e,
                          t.state.variables,
                          t.state.context,
                          t
                        );
                  })
                  .then(function () {
                    return null == t.options.onSuccess
                      ? void 0
                      : t.options.onSuccess(
                          e,
                          t.state.variables,
                          t.state.context
                        );
                  })
                  .then(function () {
                    return null == t.options.onSettled
                      ? void 0
                      : t.options.onSettled(
                          e,
                          null,
                          t.state.variables,
                          t.state.context
                        );
                  })
                  .then(function () {
                    return t.dispatch({ type: 'success', data: e }), e;
                  })
                  .catch(function (e) {
                    return (
                      null == t.mutationCache.config.onError ||
                        t.mutationCache.config.onError(
                          e,
                          t.state.variables,
                          t.state.context,
                          t
                        ),
                      (0, l.t)().error(e),
                      Promise.resolve()
                        .then(function () {
                          return null == t.options.onError
                            ? void 0
                            : t.options.onError(
                                e,
                                t.state.variables,
                                t.state.context
                              );
                        })
                        .then(function () {
                          return null == t.options.onSettled
                            ? void 0
                            : t.options.onSettled(
                                void 0,
                                e,
                                t.state.variables,
                                t.state.context
                              );
                        })
                        .then(function () {
                          throw (t.dispatch({ type: 'error', error: e }), e);
                        })
                    );
                  })
              );
            }),
            (t.executeMutation = function () {
              var e,
                t = this;
              return (
                (this.retryer = new u.eJ({
                  fn: function () {
                    return t.options.mutationFn
                      ? t.options.mutationFn(t.state.variables)
                      : Promise.reject('No mutationFn found');
                  },
                  onFail: function () {
                    t.dispatch({ type: 'failed' });
                  },
                  onPause: function () {
                    t.dispatch({ type: 'pause' });
                  },
                  onContinue: function () {
                    t.dispatch({ type: 'continue' });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                })),
                this.retryer.promise
              );
            }),
            (t.dispatch = function (e) {
              var t = this;
              (this.state = (function (e, t) {
                switch (t.type) {
                  case 'failed':
                    return (0, i.A)({}, e, {
                      failureCount: e.failureCount + 1,
                    });
                  case 'pause':
                    return (0, i.A)({}, e, { isPaused: !0 });
                  case 'continue':
                    return (0, i.A)({}, e, { isPaused: !1 });
                  case 'loading':
                    return (0, i.A)({}, e, {
                      context: t.context,
                      data: void 0,
                      error: null,
                      isPaused: !1,
                      status: 'loading',
                      variables: t.variables,
                    });
                  case 'success':
                    return (0, i.A)({}, e, {
                      data: t.data,
                      error: null,
                      status: 'success',
                      isPaused: !1,
                    });
                  case 'error':
                    return (0, i.A)({}, e, {
                      data: void 0,
                      error: t.error,
                      failureCount: e.failureCount + 1,
                      isPaused: !1,
                      status: 'error',
                    });
                  case 'setState':
                    return (0, i.A)({}, e, t.state);
                  default:
                    return e;
                }
              })(this.state, e)),
                s.j.batch(function () {
                  t.observers.forEach(function (t) {
                    t.onMutationUpdate(e);
                  }),
                    t.mutationCache.notify(t);
                });
            }),
            e
          );
        })();
      var h = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this) || this).config = t || {}),
              (r.mutations = []),
              (r.mutationId = 0),
              r
            );
          }
          (0, d.A)(t, e);
          var r = t.prototype;
          return (
            (r.build = function (e, t, r) {
              var i = new f({
                mutationCache: this,
                mutationId: ++this.mutationId,
                options: e.defaultMutationOptions(t),
                state: r,
                defaultOptions: t.mutationKey
                  ? e.getMutationDefaults(t.mutationKey)
                  : void 0,
                meta: t.meta,
              });
              return this.add(i), i;
            }),
            (r.add = function (e) {
              this.mutations.push(e), this.notify(e);
            }),
            (r.remove = function (e) {
              (this.mutations = this.mutations.filter(function (t) {
                return t !== e;
              })),
                e.cancel(),
                this.notify(e);
            }),
            (r.clear = function () {
              var e = this;
              s.j.batch(function () {
                e.mutations.forEach(function (t) {
                  e.remove(t);
                });
              });
            }),
            (r.getAll = function () {
              return this.mutations;
            }),
            (r.find = function (e) {
              return (
                void 0 === e.exact && (e.exact = !0),
                this.mutations.find(function (t) {
                  return (0, n.nJ)(e, t);
                })
              );
            }),
            (r.findAll = function (e) {
              return this.mutations.filter(function (t) {
                return (0, n.nJ)(e, t);
              });
            }),
            (r.notify = function (e) {
              var t = this;
              s.j.batch(function () {
                t.listeners.forEach(function (t) {
                  t(e);
                });
              });
            }),
            (r.onFocus = function () {
              this.resumePausedMutations();
            }),
            (r.onOnline = function () {
              this.resumePausedMutations();
            }),
            (r.resumePausedMutations = function () {
              var e = this.mutations.filter(function (e) {
                return e.state.isPaused;
              });
              return s.j.batch(function () {
                return e.reduce(function (e, t) {
                  return e.then(function () {
                    return t.continue().catch(n.lQ);
                  });
                }, Promise.resolve());
              });
            }),
            t
          );
        })(a.Q),
        p = r(42),
        y = r(227);
      function m(e, t) {
        return null == e.getNextPageParam
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      function g(e, t) {
        return null == e.getPreviousPageParam
          ? void 0
          : e.getPreviousPageParam(t[0], t);
      }
      var b = (function () {
        function e(e) {
          void 0 === e && (e = {}),
            (this.queryCache = e.queryCache || new o()),
            (this.mutationCache = e.mutationCache || new h()),
            (this.defaultOptions = e.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []);
        }
        var t = e.prototype;
        return (
          (t.mount = function () {
            var e = this;
            (this.unsubscribeFocus = p.m.subscribe(function () {
              p.m.isFocused() &&
                y.t.isOnline() &&
                (e.mutationCache.onFocus(), e.queryCache.onFocus());
            })),
              (this.unsubscribeOnline = y.t.subscribe(function () {
                p.m.isFocused() &&
                  y.t.isOnline() &&
                  (e.mutationCache.onOnline(), e.queryCache.onOnline());
              }));
          }),
          (t.unmount = function () {
            var e, t;
            null == (e = this.unsubscribeFocus) || e.call(this),
              null == (t = this.unsubscribeOnline) || t.call(this);
          }),
          (t.isFetching = function (e, t) {
            var r = (0, n.b_)(e, t)[0];
            return (r.fetching = !0), this.queryCache.findAll(r).length;
          }),
          (t.isMutating = function (e) {
            return this.mutationCache.findAll((0, i.A)({}, e, { fetching: !0 }))
              .length;
          }),
          (t.getQueryData = function (e, t) {
            var r;
            return null == (r = this.queryCache.find(e, t))
              ? void 0
              : r.state.data;
          }),
          (t.getQueriesData = function (e) {
            return this.getQueryCache()
              .findAll(e)
              .map(function (e) {
                return [e.queryKey, e.state.data];
              });
          }),
          (t.setQueryData = function (e, t, r) {
            var i = (0, n.vh)(e),
              d = this.defaultQueryOptions(i);
            return this.queryCache.build(this, d).setData(t, r);
          }),
          (t.setQueriesData = function (e, t, r) {
            var i = this;
            return s.j.batch(function () {
              return i
                .getQueryCache()
                .findAll(e)
                .map(function (e) {
                  var n = e.queryKey;
                  return [n, i.setQueryData(n, t, r)];
                });
            });
          }),
          (t.getQueryState = function (e, t) {
            var r;
            return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state;
          }),
          (t.removeQueries = function (e, t) {
            var r = (0, n.b_)(e, t)[0],
              i = this.queryCache;
            s.j.batch(function () {
              i.findAll(r).forEach(function (e) {
                i.remove(e);
              });
            });
          }),
          (t.resetQueries = function (e, t, r) {
            var d = this,
              l = (0, n.b_)(e, t, r),
              u = l[0],
              c = l[1],
              a = this.queryCache,
              o = (0, i.A)({}, u, { active: !0 });
            return s.j.batch(function () {
              return (
                a.findAll(u).forEach(function (e) {
                  e.reset();
                }),
                d.refetchQueries(o, c)
              );
            });
          }),
          (t.cancelQueries = function (e, t, r) {
            var i = this,
              d = (0, n.b_)(e, t, r),
              l = d[0],
              u = d[1],
              c = void 0 === u ? {} : u;
            void 0 === c.revert && (c.revert = !0);
            var a = s.j.batch(function () {
              return i.queryCache.findAll(l).map(function (e) {
                return e.cancel(c);
              });
            });
            return Promise.all(a).then(n.lQ).catch(n.lQ);
          }),
          (t.invalidateQueries = function (e, t, r) {
            var d,
              l,
              u,
              c = this,
              a = (0, n.b_)(e, t, r),
              o = a[0],
              f = a[1],
              h = (0, i.A)({}, o, {
                active:
                  null == (d = null != (l = o.refetchActive) ? l : o.active) ||
                  d,
                inactive: null != (u = o.refetchInactive) && u,
              });
            return s.j.batch(function () {
              return (
                c.queryCache.findAll(o).forEach(function (e) {
                  e.invalidate();
                }),
                c.refetchQueries(h, f)
              );
            });
          }),
          (t.refetchQueries = function (e, t, r) {
            var d = this,
              l = (0, n.b_)(e, t, r),
              u = l[0],
              c = l[1],
              a = s.j.batch(function () {
                return d.queryCache.findAll(u).map(function (e) {
                  return e.fetch(
                    void 0,
                    (0, i.A)({}, c, {
                      meta: { refetchPage: null == u ? void 0 : u.refetchPage },
                    })
                  );
                });
              }),
              o = Promise.all(a).then(n.lQ);
            return (
              (null == c ? void 0 : c.throwOnError) || (o = o.catch(n.lQ)), o
            );
          }),
          (t.fetchQuery = function (e, t, r) {
            var i = (0, n.vh)(e, t, r),
              d = this.defaultQueryOptions(i);
            void 0 === d.retry && (d.retry = !1);
            var s = this.queryCache.build(this, d);
            return s.isStaleByTime(d.staleTime)
              ? s.fetch(d)
              : Promise.resolve(s.state.data);
          }),
          (t.prefetchQuery = function (e, t, r) {
            return this.fetchQuery(e, t, r).then(n.lQ).catch(n.lQ);
          }),
          (t.fetchInfiniteQuery = function (e, t, r) {
            var i = (0, n.vh)(e, t, r);
            return (
              (i.behavior = {
                onFetch: function (e) {
                  e.fetchFn = function () {
                    var t,
                      r,
                      i,
                      d,
                      s,
                      l,
                      c,
                      a =
                        null == (t = e.fetchOptions) || null == (r = t.meta)
                          ? void 0
                          : r.refetchPage,
                      o =
                        null == (i = e.fetchOptions) || null == (d = i.meta)
                          ? void 0
                          : d.fetchMore,
                      f = null == o ? void 0 : o.pageParam,
                      h = 'forward' === (null == o ? void 0 : o.direction),
                      p = 'backward' === (null == o ? void 0 : o.direction),
                      y = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                      b =
                        (null == (l = e.state.data) ? void 0 : l.pageParams) ||
                        [],
                      v = (0, n.jY)(),
                      C = null == v ? void 0 : v.signal,
                      E = b,
                      A = !1,
                      w =
                        e.options.queryFn ||
                        function () {
                          return Promise.reject('Missing queryFn');
                        },
                      D = function (e, t, r, i) {
                        return (
                          (E = i ? [t].concat(E) : [].concat(E, [t])),
                          i ? [r].concat(e) : [].concat(e, [r])
                        );
                      },
                      G = function (t, r, i, n) {
                        if (A) return Promise.reject('Cancelled');
                        if (void 0 === i && !r && t.length)
                          return Promise.resolve(t);
                        var d = {
                            queryKey: e.queryKey,
                            signal: C,
                            pageParam: i,
                            meta: e.meta,
                          },
                          s = w(d),
                          l = Promise.resolve(s).then(function (e) {
                            return D(t, i, e, n);
                          });
                        return (0, u.dd)(s) && (l.cancel = s.cancel), l;
                      };
                    if (y.length)
                      if (h) {
                        var S = void 0 !== f,
                          x = S ? f : m(e.options, y);
                        c = G(y, S, x);
                      } else if (p) {
                        var k = void 0 !== f,
                          F = k ? f : g(e.options, y);
                        c = G(y, k, F, !0);
                      } else
                        !(function () {
                          E = [];
                          var t = void 0 === e.options.getNextPageParam,
                            r = !a || !y[0] || a(y[0], 0, y);
                          c = r
                            ? G([], t, b[0])
                            : Promise.resolve(D([], b[0], y[0]));
                          for (
                            var i = function (r) {
                                c = c.then(function (i) {
                                  if (!a || !y[r] || a(y[r], r, y)) {
                                    var n = t ? b[r] : m(e.options, i);
                                    return G(i, t, n);
                                  }
                                  return Promise.resolve(D(i, b[r], y[r]));
                                });
                              },
                              n = 1;
                            n < y.length;
                            n++
                          )
                            i(n);
                        })();
                    else c = G([]);
                    var P = c.then(function (e) {
                      return { pages: e, pageParams: E };
                    });
                    return (
                      (P.cancel = function () {
                        (A = !0),
                          null == v || v.abort(),
                          (0, u.dd)(c) && c.cancel();
                      }),
                      P
                    );
                  };
                },
              }),
              this.fetchQuery(i)
            );
          }),
          (t.prefetchInfiniteQuery = function (e, t, r) {
            return this.fetchInfiniteQuery(e, t, r).then(n.lQ).catch(n.lQ);
          }),
          (t.cancelMutations = function () {
            var e = this,
              t = s.j.batch(function () {
                return e.mutationCache.getAll().map(function (e) {
                  return e.cancel();
                });
              });
            return Promise.all(t).then(n.lQ).catch(n.lQ);
          }),
          (t.resumePausedMutations = function () {
            return this.getMutationCache().resumePausedMutations();
          }),
          (t.executeMutation = function (e) {
            return this.mutationCache.build(this, e).execute();
          }),
          (t.getQueryCache = function () {
            return this.queryCache;
          }),
          (t.getMutationCache = function () {
            return this.mutationCache;
          }),
          (t.getDefaultOptions = function () {
            return this.defaultOptions;
          }),
          (t.setDefaultOptions = function (e) {
            this.defaultOptions = e;
          }),
          (t.setQueryDefaults = function (e, t) {
            var r = this.queryDefaults.find(function (t) {
              return (0, n.Od)(e) === (0, n.Od)(t.queryKey);
            });
            r
              ? (r.defaultOptions = t)
              : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
          }),
          (t.getQueryDefaults = function (e) {
            var t;
            return e
              ? null ==
                (t = this.queryDefaults.find(function (t) {
                  return (0, n.Cp)(e, t.queryKey);
                }))
                ? void 0
                : t.defaultOptions
              : void 0;
          }),
          (t.setMutationDefaults = function (e, t) {
            var r = this.mutationDefaults.find(function (t) {
              return (0, n.Od)(e) === (0, n.Od)(t.mutationKey);
            });
            r
              ? (r.defaultOptions = t)
              : this.mutationDefaults.push({
                  mutationKey: e,
                  defaultOptions: t,
                });
          }),
          (t.getMutationDefaults = function (e) {
            var t;
            return e
              ? null ==
                (t = this.mutationDefaults.find(function (t) {
                  return (0, n.Cp)(e, t.mutationKey);
                }))
                ? void 0
                : t.defaultOptions
              : void 0;
          }),
          (t.defaultQueryOptions = function (e) {
            if (null == e ? void 0 : e._defaulted) return e;
            var t = (0, i.A)(
              {},
              this.defaultOptions.queries,
              this.getQueryDefaults(null == e ? void 0 : e.queryKey),
              e,
              { _defaulted: !0 }
            );
            return (
              !t.queryHash &&
                t.queryKey &&
                (t.queryHash = (0, n.F$)(t.queryKey, t)),
              t
            );
          }),
          (t.defaultQueryObserverOptions = function (e) {
            return this.defaultQueryOptions(e);
          }),
          (t.defaultMutationOptions = function (e) {
            return (null == e ? void 0 : e._defaulted)
              ? e
              : (0, i.A)(
                  {},
                  this.defaultOptions.mutations,
                  this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                  e,
                  { _defaulted: !0 }
                );
          }),
          (t.clear = function () {
            this.queryCache.clear(), this.mutationCache.clear();
          }),
          e
        );
      })();
    },
    344: (e, t, r) => {
      'use strict';
      r.d(t, { dd: () => l, eJ: () => a, wm: () => c });
      var i = r(42),
        n = r(227),
        d = r(408);
      function s(e) {
        return Math.min(1e3 * Math.pow(2, e), 3e4);
      }
      function l(e) {
        return 'function' == typeof (null == e ? void 0 : e.cancel);
      }
      var u = function (e) {
        (this.revert = null == e ? void 0 : e.revert),
          (this.silent = null == e ? void 0 : e.silent);
      };
      function c(e) {
        return e instanceof u;
      }
      var a = function (e) {
        var t,
          r,
          c,
          a,
          o = this,
          f = !1;
        (this.abort = e.abort),
          (this.cancel = function (e) {
            return null == t ? void 0 : t(e);
          }),
          (this.cancelRetry = function () {
            f = !0;
          }),
          (this.continueRetry = function () {
            f = !1;
          }),
          (this.continue = function () {
            return null == r ? void 0 : r();
          }),
          (this.failureCount = 0),
          (this.isPaused = !1),
          (this.isResolved = !1),
          (this.isTransportCancelable = !1),
          (this.promise = new Promise(function (e, t) {
            (c = e), (a = t);
          }));
        var h = function (t) {
            o.isResolved ||
              ((o.isResolved = !0),
              null == e.onSuccess || e.onSuccess(t),
              null == r || r(),
              c(t));
          },
          p = function (t) {
            o.isResolved ||
              ((o.isResolved = !0),
              null == e.onError || e.onError(t),
              null == r || r(),
              a(t));
          };
        !(function c() {
          if (!o.isResolved) {
            var a;
            try {
              a = e.fn();
            } catch (y) {
              a = Promise.reject(y);
            }
            (t = function (e) {
              if (
                !o.isResolved &&
                (p(new u(e)), null == o.abort || o.abort(), l(a))
              )
                try {
                  a.cancel();
                } catch (t) {}
            }),
              (o.isTransportCancelable = l(a)),
              Promise.resolve(a)
                .then(h)
                .catch(function (t) {
                  var l, u;
                  if (!o.isResolved) {
                    var a = null != (l = e.retry) ? l : 3,
                      h = null != (u = e.retryDelay) ? u : s,
                      y = 'function' == typeof h ? h(o.failureCount, t) : h,
                      m =
                        !0 === a ||
                        ('number' == typeof a && o.failureCount < a) ||
                        ('function' == typeof a && a(o.failureCount, t));
                    !f && m
                      ? (o.failureCount++,
                        null == e.onFail || e.onFail(o.failureCount, t),
                        (0, d.yy)(y)
                          .then(function () {
                            if (!i.m.isFocused() || !n.t.isOnline())
                              return new Promise(function (t) {
                                (r = t),
                                  (o.isPaused = !0),
                                  null == e.onPause || e.onPause();
                              }).then(function () {
                                (r = void 0),
                                  (o.isPaused = !1),
                                  null == e.onContinue || e.onContinue();
                              });
                          })
                          .then(function () {
                            f ? p(t) : c();
                          }))
                      : p(t);
                  }
                });
          }
        })();
      };
    },
    468: (e, t, r) => {
      'use strict';
      r.d(t, { Q: () => i });
      var i = (function () {
        function e() {
          this.listeners = [];
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (e) {
            var t = this,
              r = e || function () {};
            return (
              this.listeners.push(r),
              this.onSubscribe(),
              function () {
                (t.listeners = t.listeners.filter(function (e) {
                  return e !== r;
                })),
                  t.onUnsubscribe();
              }
            );
          }),
          (t.hasListeners = function () {
            return this.listeners.length > 0;
          }),
          (t.onSubscribe = function () {}),
          (t.onUnsubscribe = function () {}),
          e
        );
      })();
    },
    772: () => {},
    408: (e, t, r) => {
      'use strict';
      r.d(t, {
        BH: () => b,
        Cp: () => m,
        F$: () => p,
        G6: () => D,
        HN: () => u,
        MK: () => f,
        Od: () => y,
        S$: () => n,
        Zw: () => s,
        b_: () => o,
        f8: () => v,
        gn: () => l,
        j3: () => c,
        jY: () => G,
        lQ: () => d,
        nJ: () => h,
        vh: () => a,
        yy: () => w,
      });
      var i = r(150),
        n = 'undefined' == typeof window;
      function d() {}
      function s(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function l(e) {
        return 'number' == typeof e && e >= 0 && e !== 1 / 0;
      }
      function u(e) {
        return Array.isArray(e) ? e : [e];
      }
      function c(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function a(e, t, r) {
        return A(e)
          ? 'function' == typeof t
            ? (0, i.A)({}, r, { queryKey: e, queryFn: t })
            : (0, i.A)({}, t, { queryKey: e })
          : e;
      }
      function o(e, t, r) {
        return A(e) ? [(0, i.A)({}, t, { queryKey: e }), r] : [e || {}, t];
      }
      function f(e, t) {
        var r = e.active,
          i = e.exact,
          n = e.fetching,
          d = e.inactive,
          s = e.predicate,
          l = e.queryKey,
          u = e.stale;
        if (A(l))
          if (i) {
            if (t.queryHash !== p(l, t.options)) return !1;
          } else if (!m(t.queryKey, l)) return !1;
        var c = (function (e, t) {
          return (!0 === e && !0 === t) || (null == e && null == t)
            ? 'all'
            : !1 === e && !1 === t
            ? 'none'
            : (null != e ? e : !t)
            ? 'active'
            : 'inactive';
        })(r, d);
        if ('none' === c) return !1;
        if ('all' !== c) {
          var a = t.isActive();
          if ('active' === c && !a) return !1;
          if ('inactive' === c && a) return !1;
        }
        return (
          ('boolean' != typeof u || t.isStale() === u) &&
          ('boolean' != typeof n || t.isFetching() === n) &&
          !(s && !s(t))
        );
      }
      function h(e, t) {
        var r = e.exact,
          i = e.fetching,
          n = e.predicate,
          d = e.mutationKey;
        if (A(d)) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (y(t.options.mutationKey) !== y(d)) return !1;
          } else if (!m(t.options.mutationKey, d)) return !1;
        }
        return (
          ('boolean' != typeof i || ('loading' === t.state.status) === i) &&
          !(n && !n(t))
        );
      }
      function p(e, t) {
        return ((null == t ? void 0 : t.queryKeyHashFn) || y)(e);
      }
      function y(e) {
        var t,
          r = u(e);
        return (
          (t = r),
          JSON.stringify(t, function (e, t) {
            return C(t)
              ? Object.keys(t)
                  .sort()
                  .reduce(function (e, r) {
                    return (e[r] = t[r]), e;
                  }, {})
              : t;
          })
        );
      }
      function m(e, t) {
        return g(u(e), u(t));
      }
      function g(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !(!e || !t || 'object' != typeof e || 'object' != typeof t) &&
            !Object.keys(t).some(function (r) {
              return !g(e[r], t[r]);
            }))
        );
      }
      function b(e, t) {
        if (e === t) return e;
        var r = Array.isArray(e) && Array.isArray(t);
        if (r || (C(e) && C(t))) {
          for (
            var i = r ? e.length : Object.keys(e).length,
              n = r ? t : Object.keys(t),
              d = n.length,
              s = r ? [] : {},
              l = 0,
              u = 0;
            u < d;
            u++
          ) {
            var c = r ? u : n[u];
            (s[c] = b(e[c], t[c])), s[c] === e[c] && l++;
          }
          return i === d && l === i ? e : s;
        }
        return t;
      }
      function v(e, t) {
        if ((e && !t) || (t && !e)) return !1;
        for (var r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function C(e) {
        if (!E(e)) return !1;
        var t = e.constructor;
        if (void 0 === t) return !0;
        var r = t.prototype;
        return !!E(r) && !!r.hasOwnProperty('isPrototypeOf');
      }
      function E(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function A(e) {
        return 'string' == typeof e || Array.isArray(e);
      }
      function w(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function D(e) {
        Promise.resolve()
          .then(e)
          .catch(function (e) {
            return setTimeout(function () {
              throw e;
            });
          });
      }
      function G() {
        if ('function' == typeof AbortController) return new AbortController();
      }
    },
    17: (e, t, r) => {
      'use strict';
      r.d(t, {
        QueryClient: () => i.QueryClient,
        QueryClientProvider: () => n.QueryClientProvider,
        useQuery: () => n.useQuery,
      });
      var i = r(821);
      r.o(i, 'QueryClientProvider') &&
        r.d(t, {
          QueryClientProvider: function () {
            return i.QueryClientProvider;
          },
        }),
        r.o(i, 'useQuery') &&
          r.d(t, {
            useQuery: function () {
              return i.useQuery;
            },
          });
      var n = r(483);
    },
    483: (e, t, r) => {
      'use strict';
      r.d(t, { QueryClientProvider: () => f, useQuery: () => x });
      var i = r(469),
        n = r(144).unstable_batchedUpdates;
      i.j.setBatchNotifyFunction(n);
      var d = r(109),
        s = console;
      (0, d.B)(s);
      var l = r(41),
        u = l.createContext(void 0),
        c = l.createContext(!1);
      function a(e) {
        return e && 'undefined' != typeof window
          ? (window.ReactQueryClientContext ||
              (window.ReactQueryClientContext = u),
            window.ReactQueryClientContext)
          : u;
      }
      var o = function () {
          var e = l.useContext(a(l.useContext(c)));
          if (!e)
            throw new Error(
              'No QueryClient set, use QueryClientProvider to set one'
            );
          return e;
        },
        f = function (e) {
          var t = e.client,
            r = e.contextSharing,
            i = void 0 !== r && r,
            n = e.children;
          l.useEffect(
            function () {
              return (
                t.mount(),
                function () {
                  t.unmount();
                }
              );
            },
            [t]
          );
          var d = a(i);
          return l.createElement(
            c.Provider,
            { value: i },
            l.createElement(d.Provider, { value: t }, n)
          );
        },
        h = r(150),
        p = r(311),
        y = r(408),
        m = r(42),
        g = r(468),
        b = r(344),
        v = (function (e) {
          function t(t, r) {
            var i;
            return (
              ((i = e.call(this) || this).client = t),
              (i.options = r),
              (i.trackedProps = []),
              (i.selectError = null),
              i.bindMethods(),
              i.setOptions(r),
              i
            );
          }
          (0, p.A)(t, e);
          var r = t.prototype;
          return (
            (r.bindMethods = function () {
              (this.remove = this.remove.bind(this)),
                (this.refetch = this.refetch.bind(this));
            }),
            (r.onSubscribe = function () {
              1 === this.listeners.length &&
                (this.currentQuery.addObserver(this),
                C(this.currentQuery, this.options) && this.executeFetch(),
                this.updateTimers());
            }),
            (r.onUnsubscribe = function () {
              this.listeners.length || this.destroy();
            }),
            (r.shouldFetchOnReconnect = function () {
              return E(
                this.currentQuery,
                this.options,
                this.options.refetchOnReconnect
              );
            }),
            (r.shouldFetchOnWindowFocus = function () {
              return E(
                this.currentQuery,
                this.options,
                this.options.refetchOnWindowFocus
              );
            }),
            (r.destroy = function () {
              (this.listeners = []),
                this.clearTimers(),
                this.currentQuery.removeObserver(this);
            }),
            (r.setOptions = function (e, t) {
              var r = this.options,
                i = this.currentQuery;
              if (
                ((this.options = this.client.defaultQueryObserverOptions(e)),
                void 0 !== this.options.enabled &&
                  'boolean' != typeof this.options.enabled)
              )
                throw new Error('Expected enabled to be a boolean');
              this.options.queryKey || (this.options.queryKey = r.queryKey),
                this.updateQuery();
              var n = this.hasListeners();
              n &&
                A(this.currentQuery, i, this.options, r) &&
                this.executeFetch(),
                this.updateResult(t),
                !n ||
                  (this.currentQuery === i &&
                    this.options.enabled === r.enabled &&
                    this.options.staleTime === r.staleTime) ||
                  this.updateStaleTimeout();
              var d = this.computeRefetchInterval();
              !n ||
                (this.currentQuery === i &&
                  this.options.enabled === r.enabled &&
                  d === this.currentRefetchInterval) ||
                this.updateRefetchInterval(d);
            }),
            (r.getOptimisticResult = function (e) {
              var t = this.client.defaultQueryObserverOptions(e),
                r = this.client.getQueryCache().build(this.client, t);
              return this.createResult(r, t);
            }),
            (r.getCurrentResult = function () {
              return this.currentResult;
            }),
            (r.trackResult = function (e, t) {
              var r = this,
                i = {},
                n = function (e) {
                  r.trackedProps.includes(e) || r.trackedProps.push(e);
                };
              return (
                Object.keys(e).forEach(function (t) {
                  Object.defineProperty(i, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: function () {
                      return n(t), e[t];
                    },
                  });
                }),
                (t.useErrorBoundary || t.suspense) && n('error'),
                i
              );
            }),
            (r.getNextResult = function (e) {
              var t = this;
              return new Promise(function (r, i) {
                var n = t.subscribe(function (t) {
                  t.isFetching ||
                    (n(),
                    t.isError && (null == e ? void 0 : e.throwOnError)
                      ? i(t.error)
                      : r(t));
                });
              });
            }),
            (r.getCurrentQuery = function () {
              return this.currentQuery;
            }),
            (r.remove = function () {
              this.client.getQueryCache().remove(this.currentQuery);
            }),
            (r.refetch = function (e) {
              return this.fetch(
                (0, h.A)({}, e, {
                  meta: { refetchPage: null == e ? void 0 : e.refetchPage },
                })
              );
            }),
            (r.fetchOptimistic = function (e) {
              var t = this,
                r = this.client.defaultQueryObserverOptions(e),
                i = this.client.getQueryCache().build(this.client, r);
              return i.fetch().then(function () {
                return t.createResult(i, r);
              });
            }),
            (r.fetch = function (e) {
              var t = this;
              return this.executeFetch(e).then(function () {
                return t.updateResult(), t.currentResult;
              });
            }),
            (r.executeFetch = function (e) {
              this.updateQuery();
              var t = this.currentQuery.fetch(this.options, e);
              return (
                (null == e ? void 0 : e.throwOnError) || (t = t.catch(y.lQ)), t
              );
            }),
            (r.updateStaleTimeout = function () {
              var e = this;
              if (
                (this.clearStaleTimeout(),
                !y.S$ &&
                  !this.currentResult.isStale &&
                  (0, y.gn)(this.options.staleTime))
              ) {
                var t =
                  (0, y.j3)(
                    this.currentResult.dataUpdatedAt,
                    this.options.staleTime
                  ) + 1;
                this.staleTimeoutId = setTimeout(function () {
                  e.currentResult.isStale || e.updateResult();
                }, t);
              }
            }),
            (r.computeRefetchInterval = function () {
              var e;
              return 'function' == typeof this.options.refetchInterval
                ? this.options.refetchInterval(
                    this.currentResult.data,
                    this.currentQuery
                  )
                : null != (e = this.options.refetchInterval) && e;
            }),
            (r.updateRefetchInterval = function (e) {
              var t = this;
              this.clearRefetchInterval(),
                (this.currentRefetchInterval = e),
                !y.S$ &&
                  !1 !== this.options.enabled &&
                  (0, y.gn)(this.currentRefetchInterval) &&
                  0 !== this.currentRefetchInterval &&
                  (this.refetchIntervalId = setInterval(function () {
                    (t.options.refetchIntervalInBackground ||
                      m.m.isFocused()) &&
                      t.executeFetch();
                  }, this.currentRefetchInterval));
            }),
            (r.updateTimers = function () {
              this.updateStaleTimeout(),
                this.updateRefetchInterval(this.computeRefetchInterval());
            }),
            (r.clearTimers = function () {
              this.clearStaleTimeout(), this.clearRefetchInterval();
            }),
            (r.clearStaleTimeout = function () {
              this.staleTimeoutId &&
                (clearTimeout(this.staleTimeoutId),
                (this.staleTimeoutId = void 0));
            }),
            (r.clearRefetchInterval = function () {
              this.refetchIntervalId &&
                (clearInterval(this.refetchIntervalId),
                (this.refetchIntervalId = void 0));
            }),
            (r.createResult = function (e, t) {
              var r,
                i = this.currentQuery,
                n = this.options,
                s = this.currentResult,
                l = this.currentResultState,
                u = this.currentResultOptions,
                c = e !== i,
                a = c ? e.state : this.currentQueryInitialState,
                o = c ? this.currentResult : this.previousQueryResult,
                f = e.state,
                h = f.dataUpdatedAt,
                p = f.error,
                m = f.errorUpdatedAt,
                g = f.isFetching,
                b = f.status,
                v = !1,
                E = !1;
              if (t.optimisticResults) {
                var D = this.hasListeners(),
                  G = !D && C(e, t),
                  S = D && A(e, i, t, n);
                (G || S) && ((g = !0), h || (b = 'loading'));
              }
              if (
                t.keepPreviousData &&
                !f.dataUpdateCount &&
                (null == o ? void 0 : o.isSuccess) &&
                'error' !== b
              )
                (r = o.data), (h = o.dataUpdatedAt), (b = o.status), (v = !0);
              else if (t.select && void 0 !== f.data)
                if (
                  s &&
                  f.data === (null == l ? void 0 : l.data) &&
                  t.select === this.selectFn
                )
                  r = this.selectResult;
                else
                  try {
                    (this.selectFn = t.select),
                      (r = t.select(f.data)),
                      !1 !== t.structuralSharing &&
                        (r = (0, y.BH)(null == s ? void 0 : s.data, r)),
                      (this.selectResult = r),
                      (this.selectError = null);
                  } catch (k) {
                    (0, d.t)().error(k), (this.selectError = k);
                  }
              else r = f.data;
              if (
                void 0 !== t.placeholderData &&
                void 0 === r &&
                ('loading' === b || 'idle' === b)
              ) {
                var x;
                if (
                  (null == s ? void 0 : s.isPlaceholderData) &&
                  t.placeholderData === (null == u ? void 0 : u.placeholderData)
                )
                  x = s.data;
                else if (
                  ((x =
                    'function' == typeof t.placeholderData
                      ? t.placeholderData()
                      : t.placeholderData),
                  t.select && void 0 !== x)
                )
                  try {
                    (x = t.select(x)),
                      !1 !== t.structuralSharing &&
                        (x = (0, y.BH)(null == s ? void 0 : s.data, x)),
                      (this.selectError = null);
                  } catch (k) {
                    (0, d.t)().error(k), (this.selectError = k);
                  }
                void 0 !== x && ((b = 'success'), (r = x), (E = !0));
              }
              return (
                this.selectError &&
                  ((p = this.selectError),
                  (r = this.selectResult),
                  (m = Date.now()),
                  (b = 'error')),
                {
                  status: b,
                  isLoading: 'loading' === b,
                  isSuccess: 'success' === b,
                  isError: 'error' === b,
                  isIdle: 'idle' === b,
                  data: r,
                  dataUpdatedAt: h,
                  error: p,
                  errorUpdatedAt: m,
                  failureCount: f.fetchFailureCount,
                  errorUpdateCount: f.errorUpdateCount,
                  isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
                  isFetchedAfterMount:
                    f.dataUpdateCount > a.dataUpdateCount ||
                    f.errorUpdateCount > a.errorUpdateCount,
                  isFetching: g,
                  isRefetching: g && 'loading' !== b,
                  isLoadingError: 'error' === b && 0 === f.dataUpdatedAt,
                  isPlaceholderData: E,
                  isPreviousData: v,
                  isRefetchError: 'error' === b && 0 !== f.dataUpdatedAt,
                  isStale: w(e, t),
                  refetch: this.refetch,
                  remove: this.remove,
                }
              );
            }),
            (r.shouldNotifyListeners = function (e, t) {
              if (!t) return !0;
              var r = this.options,
                i = r.notifyOnChangeProps,
                n = r.notifyOnChangePropsExclusions;
              if (!i && !n) return !0;
              if ('tracked' === i && !this.trackedProps.length) return !0;
              var d = 'tracked' === i ? this.trackedProps : i;
              return Object.keys(e).some(function (r) {
                var i = r,
                  s = e[i] !== t[i],
                  l =
                    null == d
                      ? void 0
                      : d.some(function (e) {
                          return e === r;
                        }),
                  u =
                    null == n
                      ? void 0
                      : n.some(function (e) {
                          return e === r;
                        });
                return s && !u && (!d || l);
              });
            }),
            (r.updateResult = function (e) {
              var t = this.currentResult;
              if (
                ((this.currentResult = this.createResult(
                  this.currentQuery,
                  this.options
                )),
                (this.currentResultState = this.currentQuery.state),
                (this.currentResultOptions = this.options),
                !(0, y.f8)(this.currentResult, t))
              ) {
                var r = { cache: !0 };
                !1 !== (null == e ? void 0 : e.listeners) &&
                  this.shouldNotifyListeners(this.currentResult, t) &&
                  (r.listeners = !0),
                  this.notify((0, h.A)({}, r, e));
              }
            }),
            (r.updateQuery = function () {
              var e = this.client
                .getQueryCache()
                .build(this.client, this.options);
              if (e !== this.currentQuery) {
                var t = this.currentQuery;
                (this.currentQuery = e),
                  (this.currentQueryInitialState = e.state),
                  (this.previousQueryResult = this.currentResult),
                  this.hasListeners() &&
                    (null == t || t.removeObserver(this), e.addObserver(this));
              }
            }),
            (r.onQueryUpdate = function (e) {
              var t = {};
              'success' === e.type
                ? (t.onSuccess = !0)
                : 'error' !== e.type || (0, b.wm)(e.error) || (t.onError = !0),
                this.updateResult(t),
                this.hasListeners() && this.updateTimers();
            }),
            (r.notify = function (e) {
              var t = this;
              i.j.batch(function () {
                e.onSuccess
                  ? (null == t.options.onSuccess ||
                      t.options.onSuccess(t.currentResult.data),
                    null == t.options.onSettled ||
                      t.options.onSettled(t.currentResult.data, null))
                  : e.onError &&
                    (null == t.options.onError ||
                      t.options.onError(t.currentResult.error),
                    null == t.options.onSettled ||
                      t.options.onSettled(void 0, t.currentResult.error)),
                  e.listeners &&
                    t.listeners.forEach(function (e) {
                      e(t.currentResult);
                    }),
                  e.cache &&
                    t.client
                      .getQueryCache()
                      .notify({
                        query: t.currentQuery,
                        type: 'observerResultsUpdated',
                      });
              });
            }),
            t
          );
        })(g.Q);
      function C(e, t) {
        return (
          (function (e, t) {
            return !(
              !1 === t.enabled ||
              e.state.dataUpdatedAt ||
              ('error' === e.state.status && !1 === t.retryOnMount)
            );
          })(e, t) ||
          (e.state.dataUpdatedAt > 0 && E(e, t, t.refetchOnMount))
        );
      }
      function E(e, t, r) {
        if (!1 !== t.enabled) {
          var i = 'function' == typeof r ? r(e) : r;
          return 'always' === i || (!1 !== i && w(e, t));
        }
        return !1;
      }
      function A(e, t, r, i) {
        return (
          !1 !== r.enabled &&
          (e !== t || !1 === i.enabled) &&
          (!r.suspense || 'error' !== e.state.status) &&
          w(e, r)
        );
      }
      function w(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      function D() {
        var e = !1;
        return {
          clearReset: function () {
            e = !1;
          },
          reset: function () {
            e = !0;
          },
          isReset: function () {
            return e;
          },
        };
      }
      var G = l.createContext(D()),
        S = function () {
          return l.useContext(G);
        };
      function x(e, t, r) {
        return (function (e, t) {
          var r = l.useRef(!1),
            n = l.useState(0)[1],
            d = o(),
            s = S(),
            u = d.defaultQueryObserverOptions(e);
          (u.optimisticResults = !0),
            u.onError && (u.onError = i.j.batchCalls(u.onError)),
            u.onSuccess && (u.onSuccess = i.j.batchCalls(u.onSuccess)),
            u.onSettled && (u.onSettled = i.j.batchCalls(u.onSettled)),
            u.suspense &&
              ('number' != typeof u.staleTime && (u.staleTime = 1e3),
              0 === u.cacheTime && (u.cacheTime = 1)),
            (u.suspense || u.useErrorBoundary) &&
              (s.isReset() || (u.retryOnMount = !1));
          var c,
            a,
            f,
            h = l.useState(function () {
              return new t(d, u);
            })[0],
            p = h.getOptimisticResult(u);
          if (
            (l.useEffect(
              function () {
                (r.current = !0), s.clearReset();
                var e = h.subscribe(
                  i.j.batchCalls(function () {
                    r.current &&
                      n(function (e) {
                        return e + 1;
                      });
                  })
                );
                return (
                  h.updateResult(),
                  function () {
                    (r.current = !1), e();
                  }
                );
              },
              [s, h]
            ),
            l.useEffect(
              function () {
                h.setOptions(u, { listeners: !1 });
              },
              [u, h]
            ),
            u.suspense && p.isLoading)
          )
            throw h
              .fetchOptimistic(u)
              .then(function (e) {
                var t = e.data;
                null == u.onSuccess || u.onSuccess(t),
                  null == u.onSettled || u.onSettled(t, null);
              })
              .catch(function (e) {
                s.clearReset(),
                  null == u.onError || u.onError(e),
                  null == u.onSettled || u.onSettled(void 0, e);
              });
          if (
            p.isError &&
            !s.isReset() &&
            !p.isFetching &&
            ((c = u.suspense),
            (a = u.useErrorBoundary),
            (f = [p.error, h.getCurrentQuery()]),
            'function' == typeof a
              ? a.apply(void 0, f)
              : 'boolean' == typeof a
              ? a
              : c)
          )
            throw p.error;
          return (
            'tracked' === u.notifyOnChangeProps && (p = h.trackResult(p, u)), p
          );
        })((0, y.vh)(e, t, r), v);
      }
    },
    335: (e, t, r) => {
      'use strict';
      var i = r(41),
        n = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, r) {
        var i,
          d = {},
          c = null,
          a = null;
        for (i in (void 0 !== r && (c = '' + r),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, i) && !u.hasOwnProperty(i) && (d[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === d[i] && (d[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: a,
          props: d,
          _owner: l.current,
        };
      }
      (t.Fragment = d), (t.jsx = c), (t.jsxs = c);
    },
    304: (e, t) => {
      'use strict';
      var r = Symbol.for('react.element'),
        i = Symbol.for('react.portal'),
        n = Symbol.for('react.fragment'),
        d = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        l = Symbol.for('react.provider'),
        u = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
        a = Symbol.for('react.suspense'),
        o = Symbol.for('react.memo'),
        f = Symbol.for('react.lazy'),
        h = Symbol.iterator;
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        y = Object.assign,
        m = {};
      function g(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || p);
      }
      function b() {}
      function v(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = r || p);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            );
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (b.prototype = g.prototype);
      var C = (v.prototype = new b());
      (C.constructor = v), y(C, g.prototype), (C.isPureReactComponent = !0);
      var E = Array.isArray,
        A = Object.prototype.hasOwnProperty,
        w = { current: null },
        D = { key: !0, ref: !0, __self: !0, __source: !0 };
      function G(e, t, i) {
        var n,
          d = {},
          s = null,
          l = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (s = '' + t.key),
          t))
            A.call(t, n) && !D.hasOwnProperty(n) && (d[n] = t[n]);
        var u = arguments.length - 2;
        if (1 === u) d.children = i;
        else if (1 < u) {
          for (var c = Array(u), a = 0; a < u; a++) c[a] = arguments[a + 2];
          d.children = c;
        }
        if (e && e.defaultProps)
          for (n in (u = e.defaultProps)) void 0 === d[n] && (d[n] = u[n]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: l,
          props: d,
          _owner: w.current,
        };
      }
      function S(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r;
      }
      var x = /\/+/g;
      function k(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function F(e, t, n, d, s) {
        var l = typeof e;
        ('undefined' !== l && 'boolean' !== l) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (l) {
            case 'string':
            case 'number':
              u = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case r:
                case i:
                  u = !0;
              }
          }
        if (u)
          return (
            (s = s((u = e))),
            (e = '' === d ? '.' + k(u, 0) : d),
            E(s)
              ? ((n = ''),
                null != e && (n = e.replace(x, '$&/') + '/'),
                F(s, t, n, '', function (e) {
                  return e;
                }))
              : null != s &&
                (S(s) &&
                  (s = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    s,
                    n +
                      (!s.key || (u && u.key === s.key)
                        ? ''
                        : ('' + s.key).replace(x, '$&/') + '/') +
                      e
                  )),
                t.push(s)),
            1
          );
        if (((u = 0), (d = '' === d ? '.' : d + ':'), E(e)))
          for (var c = 0; c < e.length; c++) {
            var a = d + k((l = e[c]), c);
            u += F(l, t, n, a, s);
          }
        else if (
          ((a = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (h && e[h]) || e['@@iterator'])
              ? e
              : null;
          })(e)),
          'function' == typeof a)
        )
          for (e = a.call(e), c = 0; !(l = e.next()).done; )
            u += F((l = l.value), t, n, (a = d + k(l, c++)), s);
        else if ('object' === l)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          );
        return u;
      }
      function P(e, t, r) {
        if (null == e) return e;
        var i = [],
          n = 0;
        return (
          F(e, i, '', '', function (e) {
            return t.call(r, e, n++);
          }),
          i
        );
      }
      function T(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var R = { current: null },
        _ = { transition: null },
        N = {
          ReactCurrentDispatcher: R,
          ReactCurrentBatchConfig: _,
          ReactCurrentOwner: w,
        };
      (t.Children = {
        map: P,
        forEach: function (e, t, r) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
        (t.Component = g),
        (t.Fragment = n),
        (t.Profiler = s),
        (t.PureComponent = v),
        (t.StrictMode = d),
        (t.Suspense = a),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
        (t.cloneElement = function (e, t, i) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
            );
          var n = y({}, e.props),
            d = e.key,
            s = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (l = w.current)),
              void 0 !== t.key && (d = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              A.call(t, c) &&
                !D.hasOwnProperty(c) &&
                (n[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) n.children = i;
          else if (1 < c) {
            u = Array(c);
            for (var a = 0; a < c; a++) u[a] = arguments[a + 2];
            n.children = u;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: d,
            ref: s,
            props: n,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: u,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = G),
        (t.createFactory = function (e) {
          var t = G.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: { _status: -1, _result: e },
            _init: T,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: o, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = _.transition;
          _.transition = {};
          try {
            e();
          } finally {
            _.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.'
          );
        }),
        (t.useCallback = function (e, t) {
          return R.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return R.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return R.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return R.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return R.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return R.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return R.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return R.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return R.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return R.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return R.current.useRef(e);
        }),
        (t.useState = function (e) {
          return R.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return R.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return R.current.useTransition();
        }),
        (t.version = '18.2.0');
    },
    41: (e, t, r) => {
      'use strict';
      e.exports = r(304);
    },
    85: (e, t, r) => {
      'use strict';
      e.exports = r(335);
    },
    568: (e, t) => {
      'use strict';
      function r(e, t) {
        var r = e.length;
        e.push(t);
        e: for (; 0 < r; ) {
          var i = (r - 1) >>> 1,
            n = e[i];
          if (!(0 < d(n, t))) break e;
          (e[i] = t), (e[r] = n), (r = i);
        }
      }
      function i(e) {
        return 0 === e.length ? null : e[0];
      }
      function n(e) {
        if (0 === e.length) return null;
        var t = e[0],
          r = e.pop();
        if (r !== t) {
          e[0] = r;
          e: for (var i = 0, n = e.length, s = n >>> 1; i < s; ) {
            var l = 2 * (i + 1) - 1,
              u = e[l],
              c = l + 1,
              a = e[c];
            if (0 > d(u, r))
              c < n && 0 > d(a, u)
                ? ((e[i] = a), (e[c] = r), (i = c))
                : ((e[i] = u), (e[l] = r), (i = l));
            else {
              if (!(c < n && 0 > d(a, r))) break e;
              (e[i] = a), (e[c] = r), (i = c);
            }
          }
        }
        return t;
      }
      function d(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id;
      }
      if (
        'object' == typeof performance &&
        'function' == typeof performance.now
      ) {
        var s = performance;
        t.unstable_now = function () {
          return s.now();
        };
      } else {
        var l = Date,
          u = l.now();
        t.unstable_now = function () {
          return l.now() - u;
        };
      }
      var c = [],
        a = [],
        o = 1,
        f = null,
        h = 3,
        p = !1,
        y = !1,
        m = !1,
        g = 'function' == typeof setTimeout ? setTimeout : null,
        b = 'function' == typeof clearTimeout ? clearTimeout : null,
        v = 'undefined' != typeof setImmediate ? setImmediate : null;
      function C(e) {
        for (var t = i(a); null !== t; ) {
          if (null === t.callback) n(a);
          else {
            if (!(t.startTime <= e)) break;
            n(a), (t.sortIndex = t.expirationTime), r(c, t);
          }
          t = i(a);
        }
      }
      function E(e) {
        if (((m = !1), C(e), !y))
          if (null !== i(c)) (y = !0), _(A);
          else {
            var t = i(a);
            null !== t && N(E, t.startTime - e);
          }
      }
      function A(e, r) {
        (y = !1), m && ((m = !1), b(S), (S = -1)), (p = !0);
        var d = h;
        try {
          for (
            C(r), f = i(c);
            null !== f && (!(f.expirationTime > r) || (e && !F()));

          ) {
            var s = f.callback;
            if ('function' == typeof s) {
              (f.callback = null), (h = f.priorityLevel);
              var l = s(f.expirationTime <= r);
              (r = t.unstable_now()),
                'function' == typeof l ? (f.callback = l) : f === i(c) && n(c),
                C(r);
            } else n(c);
            f = i(c);
          }
          if (null !== f) var u = !0;
          else {
            var o = i(a);
            null !== o && N(E, o.startTime - r), (u = !1);
          }
          return u;
        } finally {
          (f = null), (h = d), (p = !1);
        }
      }
      'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var w,
        D = !1,
        G = null,
        S = -1,
        x = 5,
        k = -1;
      function F() {
        return !(t.unstable_now() - k < x);
      }
      function P() {
        if (null !== G) {
          var e = t.unstable_now();
          k = e;
          var r = !0;
          try {
            r = G(!0, e);
          } finally {
            r ? w() : ((D = !1), (G = null));
          }
        } else D = !1;
      }
      if ('function' == typeof v)
        w = function () {
          v(P);
        };
      else if ('undefined' != typeof MessageChannel) {
        var T = new MessageChannel(),
          R = T.port2;
        (T.port1.onmessage = P),
          (w = function () {
            R.postMessage(null);
          });
      } else
        w = function () {
          g(P, 0);
        };
      function _(e) {
        (G = e), D || ((D = !0), w());
      }
      function N(e, r) {
        S = g(function () {
          e(t.unstable_now());
        }, r);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          y || p || ((y = !0), _(A));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (x = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return i(c);
        }),
        (t.unstable_next = function (e) {
          switch (h) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = h;
          }
          var r = h;
          h = t;
          try {
            return e();
          } finally {
            h = r;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var r = h;
          h = e;
          try {
            return t();
          } finally {
            h = r;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, d) {
          var s = t.unstable_now();
          switch (
            ('object' == typeof d && null !== d
              ? (d = 'number' == typeof (d = d.delay) && 0 < d ? s + d : s)
              : (d = s),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = {
              id: o++,
              callback: n,
              priorityLevel: e,
              startTime: d,
              expirationTime: (l = d + l),
              sortIndex: -1,
            }),
            d > s
              ? ((e.sortIndex = d),
                r(a, e),
                null === i(c) &&
                  e === i(a) &&
                  (m ? (b(S), (S = -1)) : (m = !0), N(E, d - s)))
              : ((e.sortIndex = l), r(c, e), y || p || ((y = !0), _(A))),
            e
          );
        }),
        (t.unstable_shouldYield = F),
        (t.unstable_wrapCallback = function (e) {
          var t = h;
          return function () {
            var r = h;
            h = t;
            try {
              return e.apply(this, arguments);
            } finally {
              h = r;
            }
          };
        });
    },
    967: (e, t, r) => {
      'use strict';
      e.exports = r(568);
    },
    171: (e) => {
      'use strict';
      var t;
      (t = function () {
        var e = {},
          t = {};
        return (
          (e.on = function (e, r) {
            var i = { name: e, handler: r };
            return (t[e] = t[e] || []), t[e].unshift(i), i;
          }),
          (e.off = function (e) {
            var r = t[e.name].indexOf(e);
            -1 !== r && t[e.name].splice(r, 1);
          }),
          (e.trigger = function (e, r) {
            var i,
              n = t[e];
            if (n) for (i = n.length; i--; ) n[i].handler(r);
          }),
          e
        );
      }),
        (e.exports = t);
    },
    143: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i,
        n = r(211),
        d = (i = n) && i.__esModule ? i : { default: i };
      (t.default = {
        pauseVideo: {
          acceptableStates: [d.default.ENDED, d.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [d.default.ENDED, d.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            d.default.ENDED,
            d.default.PLAYING,
            d.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (e.exports = t.default);
    },
    976: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = l(r(124)),
        n = l(r(143)),
        d = l(r(906)),
        s = l(r(996));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const u = (0, i.default)('youtube-player'),
        c = {
          proxyEvents: (e) => {
            const t = {};
            for (const r of d.default) {
              const i = 'on' + r.slice(0, 1).toUpperCase() + r.slice(1);
              t[i] = (t) => {
                u('event "%s"', i, t), e.trigger(r, t);
              };
            }
            return t;
          },
          promisifyPlayer: (e, t = !1) => {
            const r = {};
            for (const i of s.default)
              t && n.default[i]
                ? (r[i] = (...t) =>
                    e.then((e) => {
                      const r = n.default[i],
                        d = e.getPlayerState(),
                        s = e[i].apply(e, t);
                      return r.stateChangeRequired ||
                        (Array.isArray(r.acceptableStates) &&
                          !r.acceptableStates.includes(d))
                        ? new Promise((t) => {
                            const i = () => {
                              const n = e.getPlayerState();
                              let d;
                              'number' == typeof r.timeout &&
                                (d = setTimeout(() => {
                                  e.removeEventListener('onStateChange', i),
                                    t();
                                }, r.timeout)),
                                Array.isArray(r.acceptableStates) &&
                                  r.acceptableStates.includes(n) &&
                                  (e.removeEventListener('onStateChange', i),
                                  clearTimeout(d),
                                  t());
                            };
                            e.addEventListener('onStateChange', i);
                          }).then(() => s)
                        : s;
                    }))
                : (r[i] = (...t) => e.then((e) => e[i].apply(e, t)));
            return r;
          },
        };
      (t.default = c), (e.exports = t.default);
    },
    211: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (e.exports = t.default);
    },
    906: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = [
          'ready',
          'stateChange',
          'playbackQualityChange',
          'playbackRateChange',
          'error',
          'apiChange',
          'volumeChange',
        ]),
        (e.exports = t.default);
    },
    996: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = [
          'cueVideoById',
          'loadVideoById',
          'cueVideoByUrl',
          'loadVideoByUrl',
          'playVideo',
          'pauseVideo',
          'stopVideo',
          'getVideoLoadedFraction',
          'cuePlaylist',
          'loadPlaylist',
          'nextVideo',
          'previousVideo',
          'playVideoAt',
          'setShuffle',
          'setLoop',
          'getPlaylist',
          'getPlaylistIndex',
          'setOption',
          'mute',
          'unMute',
          'isMuted',
          'setVolume',
          'getVolume',
          'seekTo',
          'getPlayerState',
          'getPlaybackRate',
          'setPlaybackRate',
          'getAvailablePlaybackRates',
          'getPlaybackQuality',
          'setPlaybackQuality',
          'getAvailableQualityLevels',
          'getCurrentTime',
          'getDuration',
          'removeEventListener',
          'getVideoUrl',
          'getVideoEmbedCode',
          'getOptions',
          'getOption',
          'addEventListener',
          'destroy',
          'setSize',
          'getIframe',
          'getSphericalProperties',
          'setSphericalProperties',
        ]),
        (e.exports = t.default);
    },
    924: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = s(r(171)),
        n = s(r(976)),
        d = s(r(397));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let l;
      (t.default = (e, t = {}, r = !1) => {
        const s = (0, i.default)();
        if ((l || (l = (0, d.default)(s)), t.events))
          throw new Error('Event handlers cannot be overwritten.');
        if ('string' == typeof e && !document.getElementById(e))
          throw new Error('Element "' + e + '" does not exist.');
        t.events = n.default.proxyEvents(s);
        const u = new Promise((r) => {
            if ('object' == typeof e && e.playVideo instanceof Function) {
              r(e);
            } else
              l.then((i) => {
                const n = new i.Player(e, t);
                return (
                  s.on('ready', () => {
                    r(n);
                  }),
                  null
                );
              });
          }),
          c = n.default.promisifyPlayer(u, r);
        return (c.on = s.on), (c.off = s.off), c;
      }),
        (e.exports = t.default);
    },
    397: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i,
        n = r(938),
        d = (i = n) && i.__esModule ? i : { default: i };
      (t.default = (e) =>
        new Promise((t) => {
          if (
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
          )
            return void t(window.YT);
          {
            const t = 'http:' === window.location.protocol ? 'http:' : 'https:';
            (0, d.default)(t + '//www.youtube.com/iframe_api', (t) => {
              t && e.trigger('error', t);
            });
          }
          const r = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = () => {
            r && r(), t(window.YT);
          };
        })),
        (e.exports = t.default);
    },
  },
  (e) => {
    var t;
    (t = 454), e((e.s = t));
  },
]);
