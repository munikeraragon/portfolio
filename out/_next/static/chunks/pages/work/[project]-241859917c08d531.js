;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[649],
	{
		1425: function (e, t, n) {
			;(window.__NEXT_P = window.__NEXT_P || []).push([
				'/work/[project]',
				function () {
					return n(3788)
				},
			])
		},
		3788: function (e, t, n) {
			'use strict'
			n.r(t),
				n.d(t, {
					default: function () {
						return k
					},
				})
			var i = n(5893),
				r = n(1163),
				s = n(7294),
				o = function () {
					return (o =
						Object.assign ||
						function (e) {
							for (var t, n = 1, i = arguments.length; n < i; n++)
								for (var r in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
							return e
						}).apply(this, arguments)
				}
			function a(e, t) {
				void 0 === t && (t = {})
				var n = t.insertAt
				if (e && 'undefined' != typeof document) {
					var i = document.head || document.getElementsByTagName('head')[0],
						r = document.createElement('style')
					;(r.type = 'text/css'),
						'top' === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r),
						r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
				}
			}
			a(
				'.styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n'
			)
			var l,
				c = function (e) {
					return s.createElement('button', {
						className: 'styles-module_carousel-arrow__26sRw',
						onClick: e.onClick,
						'data-direction': e.direction,
					})
				}
			!(function (e) {
				;(e[(e.Right = -1)] = 'Right'), (e[(e.Left = 1)] = 'Left')
			})(l || (l = {}))
			var u = (function () {
					function e(e, t) {
						;(this.arr = e), (this.currentIndex = t)
					}
					return (
						(e.prototype.next = function () {
							var e = this.currentIndex,
								t = this.arr
							return (this.currentIndex = e < t.length - 1 ? e + 1 : 0), this.current()
						}),
						(e.prototype.prev = function () {
							var e = this.currentIndex,
								t = this.arr
							return (this.currentIndex = e > 0 && e < t.length ? e - 1 : t.length - 1), this.current()
						}),
						(e.prototype.current = function () {
							return this.arr[this.currentIndex]
						}),
						e
					)
				})(),
				d = function (e, t, n) {
					return n * e * t
				},
				f = function (e, t, n, i) {
					var r = e > t
					return n ? { left: r, right: r } : { left: r && 0 !== i, right: r && i + t < e }
				},
				h = function (e, t, n) {
					if (!n) return e
					for (var i = Array.from(e), r = new u(e, 0), s = 0; s < t; s++) i.unshift(r.prev())
					return i
				}
			function m(e) {
				return e.nativeEvent instanceof MouseEvent
					? e.nativeEvent.pageX
					: e.nativeEvent instanceof TouchEvent
					? e.nativeEvent.changedTouches[0].pageX
					: 0
			}
			var p = function (e) {
					var t = (0, s.useState)(200),
						n = t[0],
						i = t[1],
						r = (0, s.useCallback)(
							function (t) {
								if (null !== t) {
									var n = t.getBoundingClientRect().width / e.show
									i(n), e.widthCallBack(n)
								}
							},
							[n]
						)
					e.responsive &&
						(function (e) {
							var t = (0, s.useState)(window.innerWidth),
								r = t[0],
								o = t[1]
							;(0, s.useLayoutEffect)(function () {
								var e = function () {
									var e = r - window.innerWidth
									o(window.innerWidth),
										(function (e) {
											i(n - e)
										})(e)
								}
								return (
									window.addEventListener('resize', e),
									function () {
										return window.removeEventListener('resize', e)
									}
								)
							}, [])
						})()
					var a = (0, s.useState)({
							initial: e.transform,
							start: 0,
							isDown: !1,
							drag: 0,
							finished: !0,
							pointers: !0,
						}),
						c = a[0],
						u = a[1],
						d = function (t) {
							t.persist(), u(o(o({}, c), { isDown: !0, start: m(t), initial: e.transform, finished: !1 }))
						},
						f = function (t) {
							if ((t.persist(), !c.finished)) {
								if (Math.abs(c.drag) < n * e.swipeOn)
									return (
										e.dragCallback(e.transform),
										u({
											initial: e.transform,
											start: 0,
											isDown: !1,
											drag: 0,
											finished: !0,
											pointers: !0,
										})
									)
								e.slideCallback(c.drag > 0 ? l.Right : l.Left),
									u(o(o({}, c), { drag: 0, isDown: !1, finished: !0, pointers: !0 }))
							}
						},
						h = function (e) {
							if ((e.persist(), c.isDown)) {
								var t = m(e)
								u(o(o({}, c), { drag: c.start - t, pointers: !1 }))
							}
						},
						p = e.swiping
							? {
									onTouchCancel: f,
									onTouchEnd: f,
									onTouchMove: h,
									onTouchStart: d,
									onMouseDown: d,
									onMouseLeave: f,
									onMouseUp: f,
									onMouseMove: h,
							  }
							: {}
					return s.createElement(
						'div',
						{ ref: r, className: 'styles-module_item-provider__YgMwz' },
						s.createElement(
							'div',
							o({ 'data-testid': 'trackList' }, p, {
								className: 'styles-module_item-tracker__3bypy',
								style: {
									transform: 'translateX(' + (e.transform - c.drag) + 'px)',
									transition: 'transform ' + e.transition + 's ease 0s',
									width: n * e.items.length,
								},
							}),
							e.items.map(function (e, t) {
								return s.createElement(
									'div',
									{
										key: t,
										style: { width: n, pointerEvents: c.pointers ? 'all' : 'none' },
										className: 'styles-module_item-container__a8zaY',
									},
									e
								)
							})
						)
					)
				},
				g = {
					children: [],
					show: 1,
					slide: 1,
					transition: 0.5,
					swiping: !1,
					swipeOn: 1,
					responsive: !1,
					infinite: !0,
					className: '',
					useArrowKeys: !1,
					a11y: {},
					dynamic: !1,
					paginationCallback: null,
					pageCount: 0,
					rightArrow: null,
					leftArrow: null,
				},
				v = function (e) {
					var t,
						n,
						i,
						r,
						a = o(o({}, g), e),
						m = (0, s.useState)(h(a.children, a.slide, a.infinite)),
						v = m[0],
						w = m[1],
						x = (0, s.useState)(0),
						y = x[0],
						_ = x[1],
						k = (0, s.useState)({ transform: 0, transition: 0, isSliding: !1 }),
						b = k[0],
						j = k[1],
						C = (0, s.useState)(0),
						E = C[0],
						N = C[1],
						R = (0, s.useState)(f(a.children.length, a.show, a.infinite, E)),
						S = R[0],
						T = R[1],
						L =
							((i = e.children),
							(r = (0, s.useRef)()),
							(0, s.useEffect)(function () {
								r.current = i
							}),
							r.current),
						D = (0, s.useState)(0),
						A = D[0],
						M = D[1],
						I = (0, s.useRef)(h(a.children, a.slide, a.infinite)),
						P = (0, s.useRef)(!1)
					a.dynamic &&
						(0, s.useEffect)(
							function () {
								var e = (function (e, t, n, i, r) {
									if (n && n.length < t.length) return h(t, i, r)
									var s = e.map(function (e) {
										return t.find(function (t) {
											return e.key === t.key
										})
									})
									return s.some(function (e) {
										return void 0 === e
									})
										? h(t, i, r)
										: s
								})(I.current, a.children, L, a.slide, a.infinite)
								w(e),
									(I.current = e),
									A < a.pageCount &&
										L &&
										(null == L ? void 0 : L.length) < a.children.length &&
										(z(l.Right), M(A + 1))
							},
							[a.children]
						)
					var z = function (e) {
						if (!(b.isSliding || (e === l.Right && !S.right) || (e === l.Left && !S.left))) {
							if (a.paginationCallback && e === l.Right && A < a.pageCount - 1 && !P.current)
								return (P.current = !0), void a.paginationCallback(e)
							var t = a.children,
								n = (function (e, t, n, i) {
									var r = e - i * t
									return r < 0 ? n + r : n <= r ? r - n : r
								})(E, a.slide, t.length, e),
								i = a.infinite
									? (function (e, t, n, i, r, s) {
											var o = new u(e, n),
												a = Array.from(t)
											switch (+s) {
												case l.Left:
													for (var c = r; c >= 0; c--)
														(r - c < 0 || !a[c - r]) && a.unshift(o.current()), o.prev()
													break
												case l.Right:
													for (c = 0; c < i + r; c++)
														a[2 * r + c] || a.push(o.current()), o.next()
											}
											return a
									  })(t, v, n, a.show, a.slide, e)
									: v
							a.infinite && e === l.Right && (w(i), (I.current = i)),
								j({
									transform: b.transform + d(y, a.slide, e),
									transition: a.transition,
									isSliding: !0,
								}),
								N(n),
								T(f(t.length, a.show, a.infinite, n)),
								setTimeout(function () {
									if (a.infinite) {
										var t = (function (e, t, n) {
											return n === l.Left ? e.slice(0, -1 * t) : e.slice(t)
										})(e === l.Right ? I.current : i, a.slide, e)
										w(t), (I.current = t)
									}
									j({
										transform: a.infinite ? d(y, a.slide, l.Right) : b.transform + d(y, a.slide, e),
										transition: 0,
										isSliding: !1,
									})
								}, 1e3 * a.transition),
								(P.current = !1)
						}
					}
					return s.createElement(
						'div',
						o(
							{},
							a.a11y,
							{ 'data-testid': 'carousel', tabIndex: 0 },
							a.useArrowKeys
								? {
										onKeyDown: function (e) {
											37 === e.keyCode ? z(l.Left) : 39 === e.keyCode && z(l.Right)
										},
								  }
								: {},
							{ className: 'styles-module_carousel-base__3keqD ' + a.className }
						),
						S.left &&
							s.createElement(
								'div',
								{
									onClick: function () {
										return z(l.Left)
									},
								},
								null !== (t = a.leftArrow) && void 0 !== t
									? t
									: s.createElement(c, { direction: 'left' })
							),
						s.createElement(
							p,
							o({}, a, {
								transition: b.transition,
								items: I.current,
								transform: b.transform,
								slideCallback: function (e) {
									z(e)
								},
								dragCallback: function (e) {
									j({ transform: e, transition: a.transition, isSliding: !1 }),
										setTimeout(function () {
											return j(o(o({}, b), { transition: 0 }))
										}, 1e3 * a.transition)
								},
								widthCallBack: function (e) {
									_(e),
										j({
											transform: a.infinite ? d(e, a.slide, l.Right) : 0,
											transition: 0,
											isSliding: !1,
										})
								},
							})
						),
						S.right &&
							s.createElement(
								'div',
								{
									onClick: function () {
										return z(l.Right)
									},
								},
								null !== (n = a.rightArrow) && void 0 !== n
									? n
									: s.createElement(c, { direction: 'right' })
							)
					)
				}
			a(
				'.styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n'
			)
			var w = {
					tft: {
						title: 'TFT Decision Support Tool',
						images: [
							'/img/dst/home.png',
							'/img/dst/login.png',
							'/img/dst/table.png',
							'/img/dst/program.png',
							'/img/dst/plot.png',
							'/img/dst/map1.png',
							'/img/dst/map2.png',
							'/img/dst/map3.png',
						],
						technologies: [
							'Google Cloud',
							'Docker',
							'PostgreSQL',
							'Typescript',
							'Oauth',
							'React',
							'Express',
							'Mapbox',
							'Material-UI',
						],
						description:
							'In this project, I developed a full-stack application that leverages ML data sources to help guide the decision-making of River Restoration investments. The application uses a Javascript API and React Frontend deployed to Goggle Cloud as Docker containers.',
					},
					hp: {
						title: 'HP PrintOS App - Capstone Project',
						images: [
							'/img/hp/graph1.png',
							'/img/hp/graph2.jpg',
							'/img/hp/dash.png',
							'/img/hp/progress.png',
							'/img/hp/tasks.png',
						],
						technologies: [
							'AWS',
							'Typescript',
							'React',
							'Golang',
							'docker',
							'Swagger',
							'D3',
							'HighCharts',
							'Material-UI',
						],
						description:
							'In this project, my team and I worked alongside HP Developers to implement a full-stack application that enhances the tracking and visualization of PrintOS Jobs. We develop a suite of React visualizations including a React Graph library which we used to detect high-level patterns inside a 3D Printing Factory.',
					},
				},
				x = function () {
					var e = (0, r.useRouter)().query.project
					return 'string' === typeof e && e in w
						? (0, i.jsxs)('div', {
								className: 'flex flex-col max-w-7xl',
								children: [
									(0, i.jsx)('h1', {
										className: 'text-3xl font-medium text-center mb-8 mt-10',
										children: w[e].title,
									}),
									(0, i.jsxs)('div', {
										className: 'grid grid-cols-2 mb-20 max-w-6xl',
										children: [
											(0, i.jsxs)('div', {
												className: 'p-4',
												children: [
													(0, i.jsx)('p', {
														className: 'text-xl my-8',
														children: 'Description',
													}),
													(0, i.jsx)('p', {
														className: 'font-light leading-7',
														children: w[e].description,
													}),
												],
											}),
											(0, i.jsxs)('div', {
												className: 'p-4',
												children: [
													(0, i.jsx)('p', {
														className: 'text-xl my-8',
														children: 'Technologies',
													}),
													w[e].technologies.map(function (e) {
														return (0,
														i.jsx)('button', { className: 'py-1.5 border border-gray-500 mx-4 font-light text-sm rounded hover:bg-black hover:text-white hover:border-black w-32 my-2', children: e }, e)
													}),
												],
											}),
											(0, i.jsx)('div', {}),
										],
									}),
									(0, i.jsx)('div', {
										className: 'flex flex-col max-w-6xl mb-20',
										children: (0, i.jsx)(v, {
											show: 1,
											slide: 1,
											transition: 0.5,
											useArrowKeys: !0,
											rightArrow: (0, i.jsx)('div', {
												className: 'flex flex-col justify-center h-full text-gray-500',
												children: (0, i.jsx)('svg', {
													xmlns: 'http://www.w3.org/2000/svg',
													className: 'h-10 w-10',
													fill: 'none',
													viewBox: '0 0 24 24',
													stroke: 'currentColor',
													strokeWidth: 1.5,
													children: (0, i.jsx)('path', {
														strokeLinecap: 'round',
														strokeLinejoin: 'round',
														d: 'M9 5l7 7-7 7',
													}),
												}),
											}),
											leftArrow: (0, i.jsx)('div', {
												className: 'flex flex-col justify-center h-full text-gray-500',
												children: (0, i.jsx)('svg', {
													xmlns: 'http://www.w3.org/2000/svg',
													className: 'h-10 w-10',
													fill: 'none',
													viewBox: '0 0 24 24',
													stroke: 'currentColor',
													strokeWidth: 1.5,
													children: (0, i.jsx)('path', {
														strokeLinecap: 'round',
														strokeLinejoin: 'round',
														d: 'M15 19l-7-7 7-7',
													}),
												}),
											}),
											children: w[e].images.map(function (e) {
												return (0,
												i.jsx)('img', { alt: 'project', src: e, style: { width: 'auto', height: 'auto', display: 'block', maxWidth: '800px', margin: 'auto' } }, e)
											}),
										}),
									}),
								],
						  })
						: null
				},
				y = n(3877).Z,
				_ = ['About', 'Experience', 'Work', 'Contact']
			x.layout = function (e) {
				var t = e.children
				return (0, i.jsxs)('div', {
					className: 'flex flex-col',
					children: [
						(0, i.jsx)(y, {
							isDarkPage: !1,
							className: 'mt-4',
							tabs: _.map(function (e) {
								return {
									label: e,
									className:
										'text-md mr-3 my-4 hover:border hover:border-white border border-transparent',
								}
							}),
						}),
						(0, i.jsx)('main', { className: 'h-full flex flex-col items-center', children: t }),
					],
				})
			}
			var k = x
		},
		1163: function (e, t, n) {
			e.exports = n(387)
		},
	},
	function (e) {
		e.O(0, [449, 877, 774, 888, 179], function () {
			return (t = 1425), e((e.s = t))
			var t
		})
		var t = e.O()
		_N_E = t
	},
])
