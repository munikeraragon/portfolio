;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[449],
	{
		8418: function (e, t, n) {
			'use strict'
			function r(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			function o(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e
					})(e) ||
					(function (e, t) {
						var n =
							null == e ? null : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
						if (null != n) {
							var r,
								o,
								u = [],
								i = !0,
								a = !1
							try {
								for (
									n = n.call(e);
									!(i = (r = n.next()).done) && (u.push(r.value), !t || u.length !== t);
									i = !0
								);
							} catch (l) {
								;(a = !0), (o = l)
							} finally {
								try {
									i || null == n.return || n.return()
								} finally {
									if (a) throw o
								}
							}
							return u
						}
					})(e, t) ||
					(function (e, t) {
						if (!e) return
						if ('string' === typeof e) return r(e, t)
						var n = Object.prototype.toString.call(e).slice(8, -1)
						'Object' === n && e.constructor && (n = e.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(n)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
					})(e, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
			t.default = void 0
			var u,
				i = (u = n(7294)) && u.__esModule ? u : { default: u },
				a = n(6273),
				l = n(387),
				s = n(7190)
			var c = {}
			function f(e, t, n, r) {
				if (e && a.isLocalURL(t)) {
					e.prefetch(t, n, r).catch(function (e) {
						0
					})
					var o = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
					c[t + '%' + n + (o ? '%' + o : '')] = !0
				}
			}
			var d = function (e) {
				var t,
					n = !1 !== e.prefetch,
					r = l.useRouter(),
					u = i.default.useMemo(
						function () {
							var t = o(a.resolveHref(r, e.href, !0), 2),
								n = t[0],
								u = t[1]
							return { href: n, as: e.as ? a.resolveHref(r, e.as) : u || n }
						},
						[r, e.href, e.as]
					),
					d = u.href,
					p = u.as,
					v = e.children,
					m = e.replace,
					b = e.shallow,
					h = e.scroll,
					y = e.locale
				'string' === typeof v && (v = i.default.createElement('a', null, v))
				var g = (t = i.default.Children.only(v)) && 'object' === typeof t && t.ref,
					E = o(s.useIntersection({ rootMargin: '200px' }), 2),
					w = E[0],
					S = E[1],
					I = i.default.useCallback(
						function (e) {
							w(e), g && ('function' === typeof g ? g(e) : 'object' === typeof g && (g.current = e))
						},
						[g, w]
					)
				i.default.useEffect(
					function () {
						var e = S && n && a.isLocalURL(d),
							t = 'undefined' !== typeof y ? y : r && r.locale,
							o = c[d + '%' + p + (t ? '%' + t : '')]
						e && !o && f(r, d, p, { locale: t })
					},
					[p, d, S, y, n, r]
				)
				var R = {
					ref: I,
					onClick: function (e) {
						t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
							e.defaultPrevented ||
								(function (e, t, n, r, o, u, i, l) {
									;('A' !== e.currentTarget.nodeName ||
										(!(function (e) {
											var t = e.currentTarget.target
											return (
												(t && '_self' !== t) ||
												e.metaKey ||
												e.ctrlKey ||
												e.shiftKey ||
												e.altKey ||
												(e.nativeEvent && 2 === e.nativeEvent.which)
											)
										})(e) &&
											a.isLocalURL(n))) &&
										(e.preventDefault(),
										null == i && r.indexOf('#') >= 0 && (i = !1),
										t[o ? 'replace' : 'push'](n, r, { shallow: u, locale: l, scroll: i }))
								})(e, r, d, p, m, b, h, y)
					},
					onMouseEnter: function (e) {
						t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
							a.isLocalURL(d) && f(r, d, p, { priority: !0 })
					},
				}
				if (e.passHref || ('a' === t.type && !('href' in t.props))) {
					var x = 'undefined' !== typeof y ? y : r && r.locale,
						T = r && r.isLocaleDomain && a.getDomainLocale(p, x, r && r.locales, r && r.domainLocales)
					R.href = T || a.addBasePath(a.addLocale(p, x, r && r.defaultLocale))
				}
				return i.default.cloneElement(t, R)
			}
			t.default = d
		},
		7190: function (e, t, n) {
			'use strict'
			function r(e, t) {
				;(null == t || t > e.length) && (t = e.length)
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
				return r
			}
			function o(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e
					})(e) ||
					(function (e, t) {
						var n =
							null == e ? null : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
						if (null != n) {
							var r,
								o,
								u = [],
								i = !0,
								a = !1
							try {
								for (
									n = n.call(e);
									!(i = (r = n.next()).done) && (u.push(r.value), !t || u.length !== t);
									i = !0
								);
							} catch (l) {
								;(a = !0), (o = l)
							} finally {
								try {
									i || null == n.return || n.return()
								} finally {
									if (a) throw o
								}
							}
							return u
						}
					})(e, t) ||
					(function (e, t) {
						if (!e) return
						if ('string' === typeof e) return r(e, t)
						var n = Object.prototype.toString.call(e).slice(8, -1)
						'Object' === n && e.constructor && (n = e.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(n)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
					})(e, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.useIntersection = function (e) {
					var t = e.rootMargin,
						n = e.disabled || !a,
						r = u.useRef(),
						s = o(u.useState(!1), 2),
						c = s[0],
						f = s[1],
						d = u.useCallback(
							function (e) {
								r.current && (r.current(), (r.current = void 0)),
									n ||
										c ||
										(e &&
											e.tagName &&
											(r.current = (function (e, t, n) {
												var r = (function (e) {
														var t = e.rootMargin || '',
															n = l.get(t)
														if (n) return n
														var r = new Map(),
															o = new IntersectionObserver(function (e) {
																e.forEach(function (e) {
																	var t = r.get(e.target),
																		n = e.isIntersecting || e.intersectionRatio > 0
																	t && n && t(n)
																})
															}, e)
														return l.set(t, (n = { id: t, observer: o, elements: r })), n
													})(n),
													o = r.id,
													u = r.observer,
													i = r.elements
												return (
													i.set(e, t),
													u.observe(e),
													function () {
														i.delete(e),
															u.unobserve(e),
															0 === i.size && (u.disconnect(), l.delete(o))
													}
												)
											})(
												e,
												function (e) {
													return e && f(e)
												},
												{ rootMargin: t }
											)))
							},
							[n, t, c]
						)
					return (
						u.useEffect(
							function () {
								if (!a && !c) {
									var e = i.requestIdleCallback(function () {
										return f(!0)
									})
									return function () {
										return i.cancelIdleCallback(e)
									}
								}
							},
							[c]
						),
						[d, c]
					)
				})
			var u = n(7294),
				i = n(9311),
				a = 'undefined' !== typeof IntersectionObserver
			var l = new Map()
		},
		1664: function (e, t, n) {
			e.exports = n(8418)
		},
		4671: function (e, t, n) {
			'use strict'
			n.d(t, {
				Z: function () {
					return i
				},
			})
			var r = n(7294)
			function o(e) {
				let t
				const n = new Set(),
					r = (e, r) => {
						const o = 'function' === typeof e ? e(t) : e
						if (o !== t) {
							const e = t
							;(t = r ? o : Object.assign({}, t, o)), n.forEach((n) => n(t, e))
						}
					},
					o = () => t,
					u = {
						setState: r,
						getState: o,
						subscribe: (e, r, u) =>
							r || u
								? ((e, r = o, u = Object.is) => {
										console.warn('[DEPRECATED] Please use `subscribeWithSelector` middleware')
										let i = r(t)
										function a() {
											const n = r(t)
											if (!u(i, n)) {
												const t = i
												e((i = n), t)
											}
										}
										return n.add(a), () => n.delete(a)
								  })(e, r, u)
								: (n.add(e), () => n.delete(e)),
						destroy: () => n.clear(),
					}
				return (t = e(r, o, u)), u
			}
			const u =
				'undefined' === typeof window ||
				!window.navigator ||
				/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
					? r.useEffect
					: r.useLayoutEffect
			function i(e) {
				const t = 'function' === typeof e ? o(e) : e,
					n = (e = t.getState, n = Object.is) => {
						const [, o] = (0, r.useReducer)((e) => e + 1, 0),
							i = t.getState(),
							a = (0, r.useRef)(i),
							l = (0, r.useRef)(e),
							s = (0, r.useRef)(n),
							c = (0, r.useRef)(!1),
							f = (0, r.useRef)()
						let d
						void 0 === f.current && (f.current = e(i))
						let p = !1
						;(a.current !== i || l.current !== e || s.current !== n || c.current) &&
							((d = e(i)), (p = !n(f.current, d))),
							u(() => {
								p && (f.current = d),
									(a.current = i),
									(l.current = e),
									(s.current = n),
									(c.current = !1)
							})
						const v = (0, r.useRef)(i)
						u(() => {
							const e = () => {
									try {
										const e = t.getState(),
											n = l.current(e)
										s.current(f.current, n) || ((a.current = e), (f.current = n), o())
									} catch (e) {
										;(c.current = !0), o()
									}
								},
								n = t.subscribe(e)
							return t.getState() !== v.current && e(), n
						}, [])
						const m = p ? d : f.current
						return (0, r.useDebugValue)(m), m
					}
				return (
					Object.assign(n, t),
					(n[Symbol.iterator] = function () {
						console.warn('[useStore, api] = create() is deprecated and will be removed in v4')
						const e = [n, t]
						return {
							next() {
								const t = e.length <= 0
								return { value: e.shift(), done: t }
							},
						}
					}),
					n
				)
			}
		},
		3447: function (e, t, n) {
			'use strict'
			n.d(t, {
				v: function () {
					return G
				},
			})
			var r,
				o = n(7294),
				u = n(2984),
				i = n(2351),
				a = n(9362),
				l = n(4192),
				s = n(6723),
				c = n(3784),
				f = n(9946),
				d =
					(((r = d || {}).Space = ' '),
					(r.Enter = 'Enter'),
					(r.Escape = 'Escape'),
					(r.Backspace = 'Backspace'),
					(r.Delete = 'Delete'),
					(r.ArrowLeft = 'ArrowLeft'),
					(r.ArrowUp = 'ArrowUp'),
					(r.ArrowRight = 'ArrowRight'),
					(r.ArrowDown = 'ArrowDown'),
					(r.Home = 'Home'),
					(r.End = 'End'),
					(r.PageUp = 'PageUp'),
					(r.PageDown = 'PageDown'),
					(r.Tab = 'Tab'),
					r)
			var p,
				v =
					(((p = v || {})[(p.First = 0)] = 'First'),
					(p[(p.Previous = 1)] = 'Previous'),
					(p[(p.Next = 2)] = 'Next'),
					(p[(p.Last = 3)] = 'Last'),
					(p[(p.Specific = 4)] = 'Specific'),
					(p[(p.Nothing = 5)] = 'Nothing'),
					p)
			function m(e, t) {
				let n = t.resolveItems()
				if (n.length <= 0) return null
				let r = t.resolveActiveIndex(),
					o = null != r ? r : -1,
					u = (() => {
						switch (e.focus) {
							case 0:
								return n.findIndex((e) => !t.resolveDisabled(e))
							case 1: {
								let e = n
									.slice()
									.reverse()
									.findIndex(
										(e, n, r) => !(-1 !== o && r.length - n - 1 >= o) && !t.resolveDisabled(e)
									)
								return -1 === e ? e : n.length - 1 - e
							}
							case 2:
								return n.findIndex((e, n) => !(n <= o) && !t.resolveDisabled(e))
							case 3: {
								let e = n
									.slice()
									.reverse()
									.findIndex((e) => !t.resolveDisabled(e))
								return -1 === e ? e : n.length - 1 - e
							}
							case 4:
								return n.findIndex((n) => t.resolveId(n) === e.id)
							case 5:
								return null
							default:
								!(function (e) {
									throw new Error('Unexpected object: ' + e)
								})(e)
						}
					})()
				return -1 === u ? r : u
			}
			function b(e) {
				let t = e.parentElement,
					n = null
				for (; t && !(t instanceof HTMLFieldSetElement); )
					t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
				let r = '' === (null == t ? void 0 : t.getAttribute('disabled'))
				return (
					(!r ||
						!(function (e) {
							if (!e) return !1
							let t = e.previousElementSibling
							for (; null !== t; ) {
								if (t instanceof HTMLLegendElement) return !1
								t = t.previousElementSibling
							}
							return !0
						})(n)) &&
					r
				)
			}
			function h(e) {
				return 'undefined' == typeof window
					? null
					: e instanceof Node
					? e.ownerDocument
					: null != e && e.hasOwnProperty('current') && e.current instanceof Node
					? e.current.ownerDocument
					: document
			}
			let y = [
				'[contentEditable=true]',
				'[tabindex]',
				'a[href]',
				'area[href]',
				'button:not([disabled])',
				'iframe',
				'input:not([disabled])',
				'select:not([disabled])',
				'textarea:not([disabled])',
			]
				.map((e) => `${e}:not([tabindex='-1'])`)
				.join(',')
			var g,
				E,
				w = ((e) => (
					(e[(e.First = 1)] = 'First'),
					(e[(e.Previous = 2)] = 'Previous'),
					(e[(e.Next = 4)] = 'Next'),
					(e[(e.Last = 8)] = 'Last'),
					(e[(e.WrapAround = 16)] = 'WrapAround'),
					(e[(e.NoScroll = 32)] = 'NoScroll'),
					e
				))(w || {}),
				S =
					(((E = S || {})[(E.Error = 0)] = 'Error'),
					(E[(E.Overflow = 1)] = 'Overflow'),
					(E[(E.Success = 2)] = 'Success'),
					(E[(E.Underflow = 3)] = 'Underflow'),
					E),
				I = (((g = I || {})[(g.Previous = -1)] = 'Previous'), (g[(g.Next = 1)] = 'Next'), g)
			var R = ((e) => ((e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e))(R || {})
			;['textarea', 'input'].join(',')
			function x(e, t = (e) => e) {
				return e.slice().sort((e, n) => {
					let r = t(e),
						o = t(n)
					if (null === r || null === o) return 0
					let u = r.compareDocumentPosition(o)
					return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
				})
			}
			var T = n(1021),
				C = n(3855)
			function L(e, t, n) {
				let r = (0, C.E)(t)
				;(0, o.useEffect)(() => {
					function t(e) {
						r.current(e)
					}
					return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
				}, [e, n])
			}
			var M = ((e) => ((e[(e.None = 1)] = 'None'), (e[(e.IgnoreScrollbars = 2)] = 'IgnoreScrollbars'), e))(
				M || {}
			)
			function P(e, t, n = 1) {
				let r = (0, o.useRef)(!1),
					u = (0, C.E)((o) => {
						if (r.current) return
						;(r.current = !0),
							(0, T.Y)(() => {
								r.current = !1
							})
						let u = (function e(t) {
								return 'function' == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
							})(e),
							i = o.target
						if (i.ownerDocument.documentElement.contains(i)) {
							if (2 === (2 & n)) {
								let e = 20,
									t = i.ownerDocument.documentElement
								if (
									o.clientX > t.clientWidth - e ||
									o.clientX < e ||
									o.clientY > t.clientHeight - e ||
									o.clientY < e
								)
									return
							}
							for (let e of u) {
								if (null === e) continue
								let t = e instanceof HTMLElement ? e : e.current
								if (null != t && t.contains(i)) return
							}
							return t(o, i)
						}
					})
				L('pointerdown', (...e) => u.current(...e)), L('mousedown', (...e) => u.current(...e))
			}
			var k = n(6567)
			function O(e) {
				var t
				if (e.type) return e.type
				let n = null != (t = e.as) ? t : 'button'
				return 'string' == typeof n && 'button' === n.toLowerCase() ? 'button' : void 0
			}
			function A(e, t) {
				let [n, r] = (0, o.useState)(() => O(e))
				return (
					(0, s.e)(() => {
						r(O(e))
					}, [e.type, e.as]),
					(0, s.e)(() => {
						n ||
							!t.current ||
							(t.current instanceof HTMLButtonElement && !t.current.hasAttribute('type') && r('button'))
					}, [n, t]),
					n
				)
			}
			var N,
				D = (((N = D || {})[(N.Open = 0)] = 'Open'), (N[(N.Closed = 1)] = 'Closed'), N),
				F = ((e) => ((e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e))(F || {}),
				j = ((e) => (
					(e[(e.OpenMenu = 0)] = 'OpenMenu'),
					(e[(e.CloseMenu = 1)] = 'CloseMenu'),
					(e[(e.GoToItem = 2)] = 'GoToItem'),
					(e[(e.Search = 3)] = 'Search'),
					(e[(e.ClearSearch = 4)] = 'ClearSearch'),
					(e[(e.RegisterItem = 5)] = 'RegisterItem'),
					(e[(e.UnregisterItem = 6)] = 'UnregisterItem'),
					e
				))(j || {})
			function H(e, t = (e) => e) {
				let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
					r = x(t(e.items.slice()), (e) => e.dataRef.current.domRef.current),
					o = n ? r.indexOf(n) : null
				return -1 === o && (o = null), { items: r, activeItemIndex: o }
			}
			let U = {
					1: (e) => (1 === e.menuState ? e : { ...e, activeItemIndex: null, menuState: 1 }),
					0: (e) => (0 === e.menuState ? e : { ...e, menuState: 0 }),
					2: (e, t) => {
						var n
						let r = H(e),
							o = m(t, {
								resolveItems: () => r.items,
								resolveActiveIndex: () => r.activeItemIndex,
								resolveId: (e) => e.id,
								resolveDisabled: (e) => e.dataRef.current.disabled,
							})
						return {
							...e,
							...r,
							searchQuery: '',
							activeItemIndex: o,
							activationTrigger: null != (n = t.trigger) ? n : 1,
						}
					},
					3: (e, t) => {
						let n = '' !== e.searchQuery ? 0 : 1,
							r = e.searchQuery + t.value.toLowerCase(),
							o = (
								null !== e.activeItemIndex
									? e.items
											.slice(e.activeItemIndex + n)
											.concat(e.items.slice(0, e.activeItemIndex + n))
									: e.items
							).find((e) => {
								var t
								return (
									(null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) &&
									!e.dataRef.current.disabled
								)
							}),
							u = o ? e.items.indexOf(o) : -1
						return -1 === u || u === e.activeItemIndex
							? { ...e, searchQuery: r }
							: { ...e, searchQuery: r, activeItemIndex: u, activationTrigger: 1 }
					},
					4: (e) => ('' === e.searchQuery ? e : { ...e, searchQuery: '', searchActiveItemIndex: null }),
					5: (e, t) => {
						let n = H(e, (e) => [...e, { id: t.id, dataRef: t.dataRef }])
						return { ...e, ...n }
					},
					6: (e, t) => {
						let n = H(e, (e) => {
							let n = e.findIndex((e) => e.id === t.id)
							return -1 !== n && e.splice(n, 1), e
						})
						return { ...e, ...n, activationTrigger: 1 }
					},
				},
				_ = (0, o.createContext)(null)
			function V(e) {
				let t = (0, o.useContext)(_)
				if (null === t) {
					let t = new Error(`<${e} /> is missing a parent <Menu /> component.`)
					throw (Error.captureStackTrace && Error.captureStackTrace(t, V), t)
				}
				return t
			}
			function Y(e, t) {
				return (0, u.E)(t.type, U, e, t)
			}
			_.displayName = 'MenuContext'
			let $ = o.Fragment,
				Q = (0, i.yV)(function (e, t) {
					let n = (0, o.useReducer)(Y, {
							menuState: 1,
							buttonRef: (0, o.createRef)(),
							itemsRef: (0, o.createRef)(),
							items: [],
							searchQuery: '',
							activeItemIndex: null,
							activationTrigger: 1,
						}),
						[{ menuState: r, itemsRef: a, buttonRef: l }, s] = n,
						f = (0, c.T)(t)
					P([l, a], (e, t) => {
						var n
						0 === r &&
							(s({ type: 1 }),
							(function (e, t = 0) {
								var n
								return (
									e !== (null == (n = h(e)) ? void 0 : n.body) &&
									(0, u.E)(t, {
										0: () => e.matches(y),
										1() {
											let t = e
											for (; null !== t; ) {
												if (t.matches(y)) return !0
												t = t.parentElement
											}
											return !1
										},
									})
								)
							})(t, R.Loose) || (e.preventDefault(), null == (n = l.current) || n.focus()))
					})
					let d = (0, o.useMemo)(() => ({ open: 0 === r }), [r]),
						p = e,
						v = { ref: f }
					return o.createElement(
						_.Provider,
						{ value: n },
						o.createElement(
							k.up,
							{ value: (0, u.E)(r, { 0: k.ZM.Open, 1: k.ZM.Closed }) },
							(0, i.sY)({ ourProps: v, theirProps: p, slot: d, defaultTag: $, name: 'Menu' })
						)
					)
				}),
				q = (0, i.yV)(function (e, t) {
					var n
					let [r, u] = V('Menu.Button'),
						a = (0, c.T)(r.buttonRef, t),
						s = `headlessui-menu-button-${(0, f.M)()}`,
						p = (0, l.G)(),
						m = (0, o.useCallback)(
							(e) => {
								switch (e.key) {
									case d.Space:
									case d.Enter:
									case d.ArrowDown:
										e.preventDefault(),
											e.stopPropagation(),
											u({ type: 0 }),
											p.nextFrame(() => u({ type: 2, focus: v.First }))
										break
									case d.ArrowUp:
										e.preventDefault(),
											e.stopPropagation(),
											u({ type: 0 }),
											p.nextFrame(() => u({ type: 2, focus: v.Last }))
								}
							},
							[u, p]
						),
						h = (0, o.useCallback)((e) => {
							switch (e.key) {
								case d.Space:
									e.preventDefault()
							}
						}, []),
						y = (0, o.useCallback)(
							(t) => {
								if (b(t.currentTarget)) return t.preventDefault()
								e.disabled ||
									(0 === r.menuState
										? (u({ type: 1 }),
										  p.nextFrame(() => {
												var e
												return null == (e = r.buttonRef.current)
													? void 0
													: e.focus({ preventScroll: !0 })
										  }))
										: (t.preventDefault(), t.stopPropagation(), u({ type: 0 })))
							},
							[u, p, r, e.disabled]
						),
						g = (0, o.useMemo)(() => ({ open: 0 === r.menuState }), [r]),
						E = e,
						w = {
							ref: a,
							id: s,
							type: A(e, r.buttonRef),
							'aria-haspopup': !0,
							'aria-controls': null == (n = r.itemsRef.current) ? void 0 : n.id,
							'aria-expanded': e.disabled ? void 0 : 0 === r.menuState,
							onKeyDown: m,
							onKeyUp: h,
							onClick: y,
						}
					return (0, i.sY)({ ourProps: w, theirProps: E, slot: g, defaultTag: 'button', name: 'Menu.Button' })
				}),
				K = i.AN.RenderStrategy | i.AN.Static,
				W = (0, i.yV)(function (e, t) {
					var n, r
					let [u, p] = V('Menu.Items'),
						m = (0, c.T)(u.itemsRef, t),
						b = (function (...e) {
							return (0, o.useMemo)(() => h(...e), [...e])
						})(u.itemsRef),
						y = `headlessui-menu-items-${(0, f.M)()}`,
						g = (0, l.G)(),
						E = (0, k.oJ)(),
						w = null !== E ? E === k.ZM.Open : 0 === u.menuState
					;(0, o.useEffect)(() => {
						let e = u.itemsRef.current
						!e ||
							(0 === u.menuState &&
								e !== (null == b ? void 0 : b.activeElement) &&
								e.focus({ preventScroll: !0 }))
					}, [u.menuState, u.itemsRef, b]),
						(function ({ container: e, accept: t, walk: n, enabled: r = !0 }) {
							let u = (0, o.useRef)(t),
								i = (0, o.useRef)(n)
							;(0, o.useEffect)(() => {
								;(u.current = t), (i.current = n)
							}, [t, n]),
								(0, s.e)(() => {
									if (!e || !r) return
									let t = h(e)
									if (!t) return
									let n = u.current,
										o = i.current,
										a = Object.assign((e) => n(e), { acceptNode: n }),
										l = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1)
									for (; l.nextNode(); ) o(l.currentNode)
								}, [e, r, u, i])
						})({
							container: u.itemsRef.current,
							enabled: 0 === u.menuState,
							accept: (e) =>
								'menuitem' === e.getAttribute('role')
									? NodeFilter.FILTER_REJECT
									: e.hasAttribute('role')
									? NodeFilter.FILTER_SKIP
									: NodeFilter.FILTER_ACCEPT,
							walk(e) {
								e.setAttribute('role', 'none')
							},
						})
					let S = (0, o.useCallback)(
							(e) => {
								var t, n
								switch ((g.dispose(), e.key)) {
									case d.Space:
										if ('' !== u.searchQuery)
											return e.preventDefault(), e.stopPropagation(), p({ type: 3, value: e.key })
									case d.Enter:
										if (
											(e.preventDefault(),
											e.stopPropagation(),
											p({ type: 1 }),
											null !== u.activeItemIndex)
										) {
											let { dataRef: e } = u.items[u.activeItemIndex]
											null == (n = null == (t = e.current) ? void 0 : t.domRef.current) ||
												n.click()
										}
										;(0, a.k)().nextFrame(() => {
											var e
											return null == (e = u.buttonRef.current)
												? void 0
												: e.focus({ preventScroll: !0 })
										})
										break
									case d.ArrowDown:
										return e.preventDefault(), e.stopPropagation(), p({ type: 2, focus: v.Next })
									case d.ArrowUp:
										return (
											e.preventDefault(), e.stopPropagation(), p({ type: 2, focus: v.Previous })
										)
									case d.Home:
									case d.PageUp:
										return e.preventDefault(), e.stopPropagation(), p({ type: 2, focus: v.First })
									case d.End:
									case d.PageDown:
										return e.preventDefault(), e.stopPropagation(), p({ type: 2, focus: v.Last })
									case d.Escape:
										e.preventDefault(),
											e.stopPropagation(),
											p({ type: 1 }),
											(0, a.k)().nextFrame(() => {
												var e
												return null == (e = u.buttonRef.current)
													? void 0
													: e.focus({ preventScroll: !0 })
											})
										break
									case d.Tab:
										e.preventDefault(), e.stopPropagation()
										break
									default:
										1 === e.key.length &&
											(p({ type: 3, value: e.key }), g.setTimeout(() => p({ type: 4 }), 350))
								}
							},
							[p, g, u, b]
						),
						I = (0, o.useCallback)((e) => {
							switch (e.key) {
								case d.Space:
									e.preventDefault()
							}
						}, []),
						R = (0, o.useMemo)(() => ({ open: 0 === u.menuState }), [u]),
						x = e,
						T = {
							'aria-activedescendant':
								null === u.activeItemIndex || null == (n = u.items[u.activeItemIndex]) ? void 0 : n.id,
							'aria-labelledby': null == (r = u.buttonRef.current) ? void 0 : r.id,
							id: y,
							onKeyDown: S,
							onKeyUp: I,
							role: 'menu',
							tabIndex: 0,
							ref: m,
						}
					return (0,
					i.sY)({ ourProps: T, theirProps: x, slot: R, defaultTag: 'div', features: K, visible: w, name: 'Menu.Items' })
				}),
				Z = o.Fragment,
				B = (0, i.yV)(function (e, t) {
					let { disabled: n = !1, ...r } = e,
						[u, l] = V('Menu.Item'),
						d = `headlessui-menu-item-${(0, f.M)()}`,
						p = null !== u.activeItemIndex && u.items[u.activeItemIndex].id === d,
						m = (0, o.useRef)(null),
						b = (0, c.T)(t, m)
					;(0, s.e)(() => {
						if (0 !== u.menuState || !p || 0 === u.activationTrigger) return
						let e = (0, a.k)()
						return (
							e.requestAnimationFrame(() => {
								var e, t
								null == (t = null == (e = m.current) ? void 0 : e.scrollIntoView) ||
									t.call(e, { block: 'nearest' })
							}),
							e.dispose
						)
					}, [m, p, u.menuState, u.activationTrigger, u.activeItemIndex])
					let h = (0, o.useRef)({ disabled: n, domRef: m })
					;(0, s.e)(() => {
						h.current.disabled = n
					}, [h, n]),
						(0, s.e)(() => {
							var e, t
							h.current.textValue =
								null == (t = null == (e = m.current) ? void 0 : e.textContent)
									? void 0
									: t.toLowerCase()
						}, [h, m]),
						(0, s.e)(() => (l({ type: 5, id: d, dataRef: h }), () => l({ type: 6, id: d })), [h, d])
					let y = (0, o.useCallback)(
							(e) => {
								if (n) return e.preventDefault()
								l({ type: 1 }),
									(0, a.k)().nextFrame(() => {
										var e
										return null == (e = u.buttonRef.current)
											? void 0
											: e.focus({ preventScroll: !0 })
									})
							},
							[l, u.buttonRef, n]
						),
						g = (0, o.useCallback)(() => {
							if (n) return l({ type: 2, focus: v.Nothing })
							l({ type: 2, focus: v.Specific, id: d })
						}, [n, d, l]),
						E = (0, o.useCallback)(() => {
							n || p || l({ type: 2, focus: v.Specific, id: d, trigger: 0 })
						}, [n, p, d, l]),
						w = (0, o.useCallback)(() => {
							n || !p || l({ type: 2, focus: v.Nothing })
						}, [n, p, l]),
						S = (0, o.useMemo)(() => ({ active: p, disabled: n }), [p, n])
					return (0,
					i.sY)({ ourProps: { id: d, ref: b, role: 'menuitem', tabIndex: !0 === n ? void 0 : -1, 'aria-disabled': !0 === n || void 0, disabled: void 0, onClick: y, onFocus: g, onPointerMove: E, onMouseMove: E, onPointerLeave: w, onMouseLeave: w }, theirProps: r, slot: S, defaultTag: Z, name: 'Menu.Item' })
				}),
				G = Object.assign(Q, { Button: q, Items: W, Item: B })
		},
		1407: function (e, t, n) {
			'use strict'
			n.d(t, {
				u: function () {
					return D
				},
			})
			var r = n(7294),
				o = n(2351),
				u = n(6567),
				i = n(2984),
				a = n(1021),
				l = n(9946),
				s = n(6723)
			function c() {
				let e = (0, r.useRef)(!1)
				return (
					(0, s.e)(
						() => (
							(e.current = !0),
							() => {
								e.current = !1
							}
						),
						[]
					),
					e
				)
			}
			var f = n(3855),
				d = n(2180),
				p = n(3784)
			var v = n(9362)
			function m(e, ...t) {
				e && t.length > 0 && e.classList.add(...t)
			}
			function b(e, ...t) {
				e && t.length > 0 && e.classList.remove(...t)
			}
			var h,
				y = (((h = y || {}).Ended = 'ended'), (h.Cancelled = 'cancelled'), h)
			function g(e, t, n, r) {
				let o = n ? 'enter' : 'leave',
					u = (0, v.k)(),
					a =
						void 0 !== r
							? (function (e) {
									let t = { called: !1 }
									return (...n) => {
										if (!t.called) return (t.called = !0), e(...n)
									}
							  })(r)
							: () => {},
					l = (0, i.E)(o, { enter: () => t.enter, leave: () => t.leave }),
					s = (0, i.E)(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
					c = (0, i.E)(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom })
				return (
					b(
						e,
						...t.enter,
						...t.enterTo,
						...t.enterFrom,
						...t.leave,
						...t.leaveFrom,
						...t.leaveTo,
						...t.entered
					),
					m(e, ...l, ...c),
					u.nextFrame(() => {
						b(e, ...c),
							m(e, ...s),
							(function (e, t) {
								let n = (0, v.k)()
								if (!e) return n.dispose
								let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
									[u, i] = [r, o].map((e) => {
										let [t = 0] = e
											.split(',')
											.filter(Boolean)
											.map((e) => (e.includes('ms') ? parseFloat(e) : 1e3 * parseFloat(e)))
											.sort((e, t) => t - e)
										return t
									})
								if (u + i !== 0) {
									let r = []
									r.push(
										n.addEventListener(
											e,
											'transitionrun',
											() => {
												r.splice(0).forEach((e) => e()),
													r.push(
														n.addEventListener(
															e,
															'transitionend',
															() => {
																t('ended'), r.splice(0).forEach((e) => e())
															},
															{ once: !0 }
														),
														n.addEventListener(
															e,
															'transitioncancel',
															() => {
																t('cancelled'), r.splice(0).forEach((e) => e())
															},
															{ once: !0 }
														)
													)
											},
											{ once: !0 }
										)
									)
								} else t('ended')
								n.add(() => t('cancelled')), n.dispose
							})(e, (n) => ('ended' === n && (b(e, ...l), m(e, ...t.entered)), a(n)))
					}),
					u.dispose
				)
			}
			var E = n(4192)
			function w({ container: e, direction: t, classes: n, events: r, onStart: o, onStop: u }) {
				let a = c(),
					l = (0, E.G)(),
					d = (0, f.E)(t),
					p = (0, f.E)(() =>
						(0, i.E)(d.current, {
							enter: () => r.current.beforeEnter(),
							leave: () => r.current.beforeLeave(),
							idle: () => {},
						})
					),
					m = (0, f.E)(() =>
						(0, i.E)(d.current, {
							enter: () => r.current.afterEnter(),
							leave: () => r.current.afterLeave(),
							idle: () => {},
						})
					)
				;(0, s.e)(() => {
					let t = (0, v.k)()
					l.add(t.dispose)
					let r = e.current
					if (r && 'idle' !== d.current && a.current)
						return (
							t.dispose(),
							p.current(),
							o.current(d.current),
							t.add(
								g(r, n.current, 'enter' === d.current, (e) => {
									t.dispose(),
										(0, i.E)(e, {
											[y.Ended]() {
												m.current(), u.current(d.current)
											},
											[y.Cancelled]: () => {},
										})
								})
							),
							t.dispose
						)
				}, [t])
			}
			function S(e = '') {
				return e.split(' ').filter((e) => e.trim().length > 1)
			}
			let I = (0, r.createContext)(null)
			I.displayName = 'TransitionContext'
			var R,
				x = (((R = x || {}).Visible = 'visible'), (R.Hidden = 'hidden'), R)
			let T = (0, r.createContext)(null)
			function C(e) {
				return 'children' in e ? C(e.children) : e.current.filter(({ state: e }) => 'visible' === e).length > 0
			}
			function L(e) {
				let t = (0, f.E)(e),
					n = (0, r.useRef)([]),
					u = c(),
					l = (0, f.E)((e, r = o.l4.Hidden) => {
						let l = n.current.findIndex(({ id: t }) => t === e)
						;-1 !== l &&
							((0, i.E)(r, {
								[o.l4.Unmount]() {
									n.current.splice(l, 1)
								},
								[o.l4.Hidden]() {
									n.current[l].state = 'hidden'
								},
							}),
							(0, a.Y)(() => {
								var e
								!C(n) && u.current && (null == (e = t.current) || e.call(t))
							}))
					}),
					s = (0, f.E)((e) => {
						let t = n.current.find(({ id: t }) => t === e)
						return (
							t
								? 'visible' !== t.state && (t.state = 'visible')
								: n.current.push({ id: e, state: 'visible' }),
							() => l.current(e, o.l4.Unmount)
						)
					})
				return (0, r.useMemo)(() => ({ children: n, register: s, unregister: l }), [s, l, n])
			}
			function M() {}
			T.displayName = 'NestingContext'
			let P = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave']
			function k(e) {
				var t
				let n = {}
				for (let r of P) n[r] = null != (t = e[r]) ? t : M
				return n
			}
			let O = o.AN.RenderStrategy,
				A = (0, o.yV)(function (e, t) {
					let {
							beforeEnter: n,
							afterEnter: a,
							beforeLeave: s,
							afterLeave: c,
							enter: v,
							enterFrom: m,
							enterTo: b,
							entered: h,
							leave: y,
							leaveFrom: g,
							leaveTo: E,
							...R
						} = e,
						x = (0, r.useRef)(null),
						M = (0, p.T)(x, t),
						[P, A] = (0, r.useState)('visible'),
						N = R.unmount ? o.l4.Unmount : o.l4.Hidden,
						{
							show: D,
							appear: F,
							initial: j,
						} = (function () {
							let e = (0, r.useContext)(I)
							if (null === e)
								throw new Error(
									'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
								)
							return e
						})(),
						{ register: H, unregister: U } = (function () {
							let e = (0, r.useContext)(T)
							if (null === e)
								throw new Error(
									'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
								)
							return e
						})(),
						_ = (0, r.useRef)(null),
						V = (0, l.M)(),
						Y = (0, r.useRef)(!1),
						$ = L(() => {
							Y.current || (A('hidden'), U.current(V))
						})
					;(0, r.useEffect)(() => {
						if (V) return H.current(V)
					}, [H, V]),
						(0, r.useEffect)(() => {
							if (N === o.l4.Hidden && V) {
								if (D && 'visible' !== P) return void A('visible')
								;(0, i.E)(P, { hidden: () => U.current(V), visible: () => H.current(V) })
							}
						}, [P, V, H, U, D, N])
					let Q = (0, f.E)({
							enter: S(v),
							enterFrom: S(m),
							enterTo: S(b),
							entered: S(h),
							leave: S(y),
							leaveFrom: S(g),
							leaveTo: S(E),
						}),
						q = (function (e) {
							let t = (0, r.useRef)(k(e))
							return (
								(0, r.useEffect)(() => {
									t.current = k(e)
								}, [e]),
								t
							)
						})({ beforeEnter: n, afterEnter: a, beforeLeave: s, afterLeave: c }),
						K = (0, d.H)()
					;(0, r.useEffect)(() => {
						if (K && 'visible' === P && null === x.current)
							throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?')
					}, [x, P, K])
					let W = j && !F,
						Z = !K || W || _.current === D ? 'idle' : D ? 'enter' : 'leave'
					w({
						container: x,
						classes: Q,
						events: q,
						direction: Z,
						onStart: (0, f.E)(() => {}),
						onStop: (0, f.E)((e) => {
							'leave' === e && !C($) && (A('hidden'), U.current(V))
						}),
					}),
						(0, r.useEffect)(() => {
							!W || (N === o.l4.Hidden ? (_.current = null) : (_.current = D))
						}, [D, W, P])
					let B = R,
						G = { ref: M }
					return r.createElement(
						T.Provider,
						{ value: $ },
						r.createElement(
							u.up,
							{ value: (0, i.E)(P, { visible: u.ZM.Open, hidden: u.ZM.Closed }) },
							(0, o.sY)({
								ourProps: G,
								theirProps: B,
								defaultTag: 'div',
								features: O,
								visible: 'visible' === P,
								name: 'Transition.Child',
							})
						)
					)
				}),
				N = (0, o.yV)(function (e, t) {
					let { show: n, appear: a = !1, unmount: l, ...c } = e,
						f = (0, p.T)(t)
					;(0, d.H)()
					let v = (0, u.oJ)()
					if (
						(void 0 === n && null !== v && (n = (0, i.E)(v, { [u.ZM.Open]: !0, [u.ZM.Closed]: !1 })),
						![!0, !1].includes(n))
					)
						throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.')
					let [m, b] = (0, r.useState)(n ? 'visible' : 'hidden'),
						h = L(() => {
							b('hidden')
						}),
						[y, g] = (0, r.useState)(!0),
						E = (0, r.useRef)([n])
					;(0, s.e)(() => {
						!1 !== y && E.current[E.current.length - 1] !== n && (E.current.push(n), g(!1))
					}, [E, n])
					let w = (0, r.useMemo)(() => ({ show: n, appear: a, initial: y }), [n, a, y])
					;(0, r.useEffect)(() => {
						n ? b('visible') : C(h) || b('hidden')
					}, [n, h])
					let S = { unmount: l }
					return r.createElement(
						T.Provider,
						{ value: h },
						r.createElement(
							I.Provider,
							{ value: w },
							(0, o.sY)({
								ourProps: {
									...S,
									as: r.Fragment,
									children: r.createElement(A, { ref: f, ...S, ...c }),
								},
								theirProps: {},
								defaultTag: r.Fragment,
								features: O,
								visible: 'visible' === m,
								name: 'Transition',
							})
						)
					)
				})
			let D = Object.assign(N, {
				Child: function (e) {
					let t = null !== (0, r.useContext)(I),
						n = null !== (0, u.oJ)()
					return r.createElement(
						r.Fragment,
						null,
						!t && n ? r.createElement(N, { ...e }) : r.createElement(A, { ...e })
					)
				},
				Root: N,
			})
		},
		4192: function (e, t, n) {
			'use strict'
			n.d(t, {
				G: function () {
					return u
				},
			})
			var r = n(7294),
				o = n(9362)
			function u() {
				let [e] = (0, r.useState)(o.k)
				return (0, r.useEffect)(() => () => e.dispose(), [e]), e
			}
		},
		9946: function (e, t, n) {
			'use strict'
			n.d(t, {
				M: function () {
					return s
				},
			})
			var r,
				o = n(7294),
				u = n(6723),
				i = n(2180)
			let a = 0
			function l() {
				return ++a
			}
			let s =
				null != (r = o.useId)
					? r
					: function () {
							let e = (0, i.H)(),
								[t, n] = o.useState(e ? l : null)
							return (
								(0, u.e)(() => {
									null === t && n(l())
								}, [t]),
								null != t ? '' + t : void 0
							)
					  }
		},
		6723: function (e, t, n) {
			'use strict'
			n.d(t, {
				e: function () {
					return o
				},
			})
			var r = n(7294)
			const o = 'undefined' != typeof window ? r.useLayoutEffect : r.useEffect
		},
		3855: function (e, t, n) {
			'use strict'
			n.d(t, {
				E: function () {
					return u
				},
			})
			var r = n(7294),
				o = n(6723)
			function u(e) {
				let t = (0, r.useRef)(e)
				return (
					(0, o.e)(() => {
						t.current = e
					}, [e]),
					t
				)
			}
		},
		2180: function (e, t, n) {
			'use strict'
			n.d(t, {
				H: function () {
					return u
				},
			})
			var r = n(7294)
			let o = { serverHandoffComplete: !1 }
			function u() {
				let [e, t] = (0, r.useState)(o.serverHandoffComplete)
				return (
					(0, r.useEffect)(() => {
						!0 !== e && t(!0)
					}, [e]),
					(0, r.useEffect)(() => {
						!1 === o.serverHandoffComplete && (o.serverHandoffComplete = !0)
					}, []),
					e
				)
			}
		},
		3784: function (e, t, n) {
			'use strict'
			n.d(t, {
				T: function () {
					return u
				},
			})
			var r = n(7294)
			let o = Symbol()
			function u(...e) {
				let t = (0, r.useRef)(e)
				;(0, r.useEffect)(() => {
					t.current = e
				}, [e])
				let n = (0, r.useCallback)(
					(e) => {
						for (let n of t.current) null != n && ('function' == typeof n ? n(e) : (n.current = e))
					},
					[t]
				)
				return e.every((e) => null == e || (null == e ? void 0 : e[o])) ? void 0 : n
			}
		},
		6567: function (e, t, n) {
			'use strict'
			n.d(t, {
				up: function () {
					return l
				},
				ZM: function () {
					return i
				},
				oJ: function () {
					return a
				},
			})
			var r = n(7294)
			let o = (0, r.createContext)(null)
			o.displayName = 'OpenClosedContext'
			var u,
				i = (((u = i || {})[(u.Open = 0)] = 'Open'), (u[(u.Closed = 1)] = 'Closed'), u)
			function a() {
				return (0, r.useContext)(o)
			}
			function l({ value: e, children: t }) {
				return r.createElement(o.Provider, { value: e }, t)
			}
		},
		9362: function (e, t, n) {
			'use strict'
			function r() {
				let e = [],
					t = [],
					n = {
						enqueue(e) {
							t.push(e)
						},
						addEventListener: (e, t, r, o) => (
							e.addEventListener(t, r, o), n.add(() => e.removeEventListener(t, r, o))
						),
						requestAnimationFrame(...e) {
							let t = requestAnimationFrame(...e)
							return n.add(() => cancelAnimationFrame(t))
						},
						nextFrame: (...e) => n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
						setTimeout(...e) {
							let t = setTimeout(...e)
							return n.add(() => clearTimeout(t))
						},
						add: (t) => (
							e.push(t),
							() => {
								let n = e.indexOf(t)
								if (n >= 0) {
									let [t] = e.splice(n, 1)
									t()
								}
							}
						),
						dispose() {
							for (let t of e.splice(0)) t()
						},
						async workQueue() {
							for (let e of t.splice(0)) await e()
						},
					}
				return n
			}
			n.d(t, {
				k: function () {
					return r
				},
			})
		},
		2984: function (e, t, n) {
			'use strict'
			function r(e, t, ...n) {
				if (e in t) {
					let r = t[e]
					return 'function' == typeof r ? r(...n) : r
				}
				let o = new Error(
					`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t)
						.map((e) => `"${e}"`)
						.join(', ')}.`
				)
				throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o)
			}
			n.d(t, {
				E: function () {
					return r
				},
			})
		},
		1021: function (e, t, n) {
			'use strict'
			function r(e) {
				'function' == typeof queueMicrotask
					? queueMicrotask(e)
					: Promise.resolve()
							.then(e)
							.catch((e) =>
								setTimeout(() => {
									throw e
								})
							)
			}
			n.d(t, {
				Y: function () {
					return r
				},
			})
		},
		2351: function (e, t, n) {
			'use strict'
			n.d(t, {
				AN: function () {
					return a
				},
				l4: function () {
					return l
				},
				yV: function () {
					return d
				},
				sY: function () {
					return s
				},
			})
			var r,
				o,
				u = n(7294),
				i = n(2984),
				a =
					(((o = a || {})[(o.None = 0)] = 'None'),
					(o[(o.RenderStrategy = 1)] = 'RenderStrategy'),
					(o[(o.Static = 2)] = 'Static'),
					o),
				l = (((r = l || {})[(r.Unmount = 0)] = 'Unmount'), (r[(r.Hidden = 1)] = 'Hidden'), r)
			function s({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: u = !0, name: a }) {
				let l = f(t, e)
				if (u) return c(l, n, r, a)
				let s = null != o ? o : 0
				if (2 & s) {
					let { static: e = !1, ...t } = l
					if (e) return c(t, n, r, a)
				}
				if (1 & s) {
					let { unmount: e = !0, ...t } = l
					return (0, i.E)(e ? 0 : 1, {
						0: () => null,
						1: () => c({ ...t, hidden: !0, style: { display: 'none' } }, n, r, a),
					})
				}
				return c(l, n, r, a)
			}
			function c(e, t = {}, n, r) {
				let { as: o = n, children: i, refName: a = 'ref', ...l } = v(e, ['unmount', 'static']),
					s = void 0 !== e.ref ? { [a]: e.ref } : {},
					c = 'function' == typeof i ? i(t) : i
				if (
					(l.className && 'function' == typeof l.className && (l.className = l.className(t)),
					o === u.Fragment && Object.keys(p(l)).length > 0)
				) {
					if (!(0, u.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
						throw new Error(
							[
								'Passing props on "Fragment"!',
								'',
								`The current component <${r} /> is rendering a "Fragment".`,
								'However we need to passthrough the following props:',
								Object.keys(l)
									.map((e) => `  - ${e}`)
									.join('\n'),
								'',
								'You can apply a few solutions:',
								[
									'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
									'Render a single element as the child so that we can forward the props onto that element.',
								]
									.map((e) => `  - ${e}`)
									.join('\n'),
							].join('\n')
						)
					return (0, u.cloneElement)(c, Object.assign({}, f(c.props, p(v(l, ['ref']))), s))
				}
				return (0, u.createElement)(o, Object.assign({}, v(l, ['ref']), o !== u.Fragment && s), c)
			}
			function f(...e) {
				if (0 === e.length) return {}
				if (1 === e.length) return e[0]
				let t = {},
					n = {}
				for (let r of e)
					for (let e in r)
						e.startsWith('on') && 'function' == typeof r[e]
							? (null != n[e] || (n[e] = []), n[e].push(r[e]))
							: (t[e] = r[e])
				if (t.disabled || t['aria-disabled'])
					return Object.assign(t, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])))
				for (let r in n)
					Object.assign(t, {
						[r](e) {
							let t = n[r]
							for (let n of t) {
								if (e.defaultPrevented) return
								n(e)
							}
						},
					})
				return t
			}
			function d(e) {
				var t
				return Object.assign((0, u.forwardRef)(e), { displayName: null != (t = e.displayName) ? t : e.name })
			}
			function p(e) {
				let t = Object.assign({}, e)
				for (let n in t) void 0 === t[n] && delete t[n]
				return t
			}
			function v(e, t = []) {
				let n = Object.assign({}, e)
				for (let r of t) r in n && delete n[r]
				return n
			}
		},
	},
])
