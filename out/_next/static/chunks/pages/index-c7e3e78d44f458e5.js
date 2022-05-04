;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405],
	{
		5301: function (r, t, n) {
			;(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return n(2848)
				},
			])
		},
		2848: function (r, t, n) {
			'use strict'
			n.r(t),
				n.d(t, {
					default: function () {
						return b
					},
				})
			var e = n(5893),
				a = n(3877),
				o = n(7294)
			function l(r, t) {
				;(null == t || t > r.length) && (t = r.length)
				for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n]
				return e
			}
			function i(r, t) {
				return (
					(function (r) {
						if (Array.isArray(r)) return r
					})(r) ||
					(function (r, t) {
						var n =
							null == r ? null : ('undefined' !== typeof Symbol && r[Symbol.iterator]) || r['@@iterator']
						if (null != n) {
							var e,
								a,
								o = [],
								l = !0,
								i = !1
							try {
								for (
									n = n.call(r);
									!(l = (e = n.next()).done) && (o.push(e.value), !t || o.length !== t);
									l = !0
								);
							} catch (u) {
								;(i = !0), (a = u)
							} finally {
								try {
									l || null == n.return || n.return()
								} finally {
									if (i) throw a
								}
							}
							return o
						}
					})(r, t) ||
					(function (r, t) {
						if (!r) return
						if ('string' === typeof r) return l(r, t)
						var n = Object.prototype.toString.call(r).slice(8, -1)
						'Object' === n && r.constructor && (n = r.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(n)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(r, t)
					})(r, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
			var u = function (r) {
					var t = r.className,
						n = void 0 === t ? '' : t,
						a = r.active,
						o = r.name,
						l = r.onClick,
						i = void 0 === l ? function () {} : l
					return (0, e.jsx)('button', {
						className: ''
							.concat(n, ' transition duration-300 border-2 rounded-sm ')
							.concat(a ? 'h-3 w-3 bg-transparent' : 'origin-center rotate-45 h-2 w-2'),
						onClick: function () {
							return i(o)
						},
					})
				},
				c = function (r) {
					var t = r.className,
						n = void 0 === t ? '' : t,
						a = r.pages,
						l = r.currentPage,
						c = (0, o.useCallback)(
							function (r) {
								var t = !0,
									n = !1,
									e = void 0
								try {
									for (
										var o, l = Object.entries(a)[Symbol.iterator]();
										!(t = (o = l.next()).done);
										t = !0
									) {
										var u,
											c,
											s = i(o.value, 2),
											f = s[0],
											y = s[1]
										if (f === r)
											null === (u = y.ref) ||
												void 0 === u ||
												null === (c = u.current) ||
												void 0 === c ||
												c.scrollIntoView({ behavior: 'smooth' })
									}
								} catch (d) {
									;(n = !0), (e = d)
								} finally {
									try {
										t || null == l.return || l.return()
									} finally {
										if (n) throw e
									}
								}
							},
							[a]
						)
					return (0, e.jsx)('div', {
						className: ''.concat(n, ' flex fixed bottom-16 right-16'),
						children: (0, e.jsx)('ul', {
							className: 'flex flex-col items-center',
							children: Object.keys(a).map(function (r) {
								return (0,
								e.jsx)('li', { children: (0, e.jsx)(u, { name: r, active: r === l, onClick: c, className: ''.concat(a[l].className) }) }, r)
							}),
						}),
					})
				},
				s = (0, o.memo)(c),
				f = n(942)
			function y(r, t) {
				;(null == t || t > r.length) && (t = r.length)
				for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n]
				return e
			}
			function d(r, t) {
				return (
					(function (r) {
						if (Array.isArray(r)) return r
					})(r) ||
					(function (r, t) {
						var n =
							null == r ? null : ('undefined' !== typeof Symbol && r[Symbol.iterator]) || r['@@iterator']
						if (null != n) {
							var e,
								a,
								o = [],
								l = !0,
								i = !1
							try {
								for (
									n = n.call(r);
									!(l = (e = n.next()).done) && (o.push(e.value), !t || o.length !== t);
									l = !0
								);
							} catch (u) {
								;(i = !0), (a = u)
							} finally {
								try {
									l || null == n.return || n.return()
								} finally {
									if (i) throw a
								}
							}
							return o
						}
					})(r, t) ||
					v(r, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
			function m(r) {
				return (
					(function (r) {
						if (Array.isArray(r)) return y(r)
					})(r) ||
					(function (r) {
						if (('undefined' !== typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
							return Array.from(r)
					})(r) ||
					v(r) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
			function v(r, t) {
				if (r) {
					if ('string' === typeof r) return y(r, t)
					var n = Object.prototype.toString.call(r).slice(8, -1)
					return (
						'Object' === n && r.constructor && (n = r.constructor.name),
						'Map' === n || 'Set' === n
							? Array.from(n)
							: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? y(r, t)
							: void 0
					)
				}
			}
			var b = function () {
				var r = (0, f.H)(),
					t = r.pages,
					n = r.currentPage,
					l = r.setCurrentPage,
					i = r.nextPage
				;(0, o.useEffect)(
					function () {
						var r = !0,
							n = !1,
							e = void 0
						try {
							for (var a, o = Object.entries(t)[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
								var l,
									u,
									c = d(a.value, 2),
									s = c[0],
									f = c[1]
								if (s === i)
									null === (l = f.ref) ||
										void 0 === l ||
										null === (u = l.current) ||
										void 0 === u ||
										u.scrollIntoView({ behavior: 'smooth' })
							}
						} catch (y) {
							;(n = !0), (e = y)
						} finally {
							try {
								r || null == o.return || o.return()
							} finally {
								if (n) throw e
							}
						}
					},
					[i, t]
				)
				var u = (0, o.useCallback)(
					function () {
						l(
							(function (r) {
								var t,
									n = (t = Math).min.apply(
										t,
										m(
											Object.values(r).map(function (r) {
												var t, n
												return Math.abs(
													(null === (t = r.ref) ||
													void 0 === t ||
													null === (n = t.current) ||
													void 0 === n
														? void 0
														: n.getBoundingClientRect().y) || 0
												)
											})
										)
									),
									e = !0,
									a = !1,
									o = void 0
								try {
									for (
										var l, i = Object.entries(r)[Symbol.iterator]();
										!(e = (l = i.next()).done);
										e = !0
									) {
										var u,
											c,
											s = d(l.value, 2),
											f = s[0],
											y = s[1]
										if (
											Math.abs(
												(null === (u = y.ref) ||
												void 0 === u ||
												null === (c = u.current) ||
												void 0 === c
													? void 0
													: c.getBoundingClientRect().y) || 0
											) === n
										)
											return f
									}
								} catch (v) {
									;(a = !0), (o = v)
								} finally {
									try {
										e || null == i.return || i.return()
									} finally {
										if (a) throw o
									}
								}
							})(t) || ''
						)
					},
					[t, l]
				)
				return (0, e.jsxs)('div', {
					onScroll: u,
					className:
						'w-screen h-screen overflow-scroll snap-y snap-mandatory flex flex-col items-center bg-black text-white',
					children: [
						(0, e.jsx)(s, { pages: t, currentPage: n }),
						(0, e.jsx)(a.Z, {
							className: 'fixed mt-4',
							isDarkPage: t[n].isDarkPage,
							tabs: Object.keys(t).map(function (r) {
								return {
									label: r,
									className: ''
										.concat('font-light', '  transition duration-150\n\t\t\t\t\t')
										.concat(t[n].className, ' text-md mr-3 my-4 text-lg'),
								}
							}),
						}),
						Object.keys(t).map(function (r) {
							return (0,
							e.jsx)('div', { ref: t[r].ref, className: 'snap-center min-h-screen flex flex-col items-center w-full', children: t[r].page }, r)
						}),
					],
				})
			}
		},
	},
	function (r) {
		r.O(0, [449, 877, 774, 888, 179], function () {
			return (t = 5301), r((r.s = t))
			var t
		})
		var t = r.O()
		_N_E = t
	},
])
