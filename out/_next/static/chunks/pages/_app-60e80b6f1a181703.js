;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[888],
	{
		6363: function (n, e, r) {
			;(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(2957)
				},
			])
		},
		2957: function (n, e, r) {
			'use strict'
			r.r(e)
			var t = r(5893)
			r(472)
			function u(n, e, r) {
				return (
					e in n
						? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (n[e] = r),
					n
				)
			}
			function o(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						t = Object.keys(r)
					'function' === typeof Object.getOwnPropertySymbols &&
						(t = t.concat(
							Object.getOwnPropertySymbols(r).filter(function (n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							})
						)),
						t.forEach(function (e) {
							u(n, e, r[e])
						})
				}
				return n
			}
			e.default = function (n) {
				var e = n.Component,
					r = n.pageProps,
					u =
						e.layout ||
						function (n) {
							var e = n.children
							return (0, t.jsx)(t.Fragment, { children: e })
						}
				return (0, t.jsx)(u, { children: (0, t.jsx)(e, o({}, r)) })
			}
		},
		472: function () {},
	},
	function (n) {
		var e = function (e) {
			return n((n.s = e))
		}
		n.O(0, [774, 179], function () {
			return e(6363), e(387)
		})
		var r = n.O()
		_N_E = r
	},
])
