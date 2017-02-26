webpackJsonp([0, 1], [
function(e, t, n) {
    var i = n(1);
    window.APP = window.APP || {},
    APP.globalRoute = n(2),
    APP.breakpoints = {},
    APP.pubSubEvents = {},
    APP.init = function() {
        var e = {};
        APP.router = new i(e),
        APP.globalRoute()
    }
    ,
    APP.init()
}
, function(e, t, n) {
    var i, r;
    !function() {
        function n(e) {
            var t = {};
            t.routes = e;
            var n = function() {
                t.route(window.location.pathname)
            };
            return t.addRoute = function(e) {
                for (var n in e)
                    t.routes[n] = e[n]
            }
            ,
            t.matchPathToRoute = function(e, t) {
                var n = new RegExp(e,'i')
                  , i = t.match(n);
                return !!i
            }
            ,
            t.route = function(e) {
                var n = e;
                for (var i in t.routes) {
                    var r = t.routes[i]
                      , o = t.matchPathToRoute(i, n);
                    if (o) {
                        if (!r)
                            throw new Error('No function was defined for this route.');
                        r()
                    }
                }
            }
            ,
            n(),
            t
        }
        'undefined' != typeof e && 'undefined' != typeof e.exports ? e.exports = n : (i = [],
        r = function() {
            return n
        }
        .apply(t, i),
        !(void 0 !== r && (e.exports = r)))
    }()
}
, function(e, t, n) {
    (function(t) {
        var i = n(4);
        n(5),
        n(6),
        n(7),
        e.exports = function() {
            function e() {
                t('.js-shape-image-set-1').animate({
                    transform: 'translate(0px, -' + c + 'px)'
                }, {
                    duration: 14e4,
                    easing: 'linear',
                    complete: function() {
                        t('.js-shape-image-set-1').css({
                            transform: 'translate(0px, 0px)',
                            transition: 'none'
                        }),
                        e()
                    }
                })
            }
            function n() {
                t('.js-shape-image-set-2').animate({
                    transform: 'translate(0px, -' + c + 'px)'
                }, {
                    duration: 1e5,
                    easing: 'linear',
                    complete: function() {
                        t('.js-shape-image-set-2').css({
                            transform: 'translate(0px, 0px)',
                            transition: 'none'
                        }),
                        n()
                    }
                })
            }
            function r() {
                t('.js-project-hover').removeClass('is-visible'),
                t('.js-project-list').removeClass('is-hidden'),
                t('.js-footer').removeClass('is-hidden')
            }
            function o() {
                t('.js-loading').addClass('is-loaded'),
                t('.js-img-load-after').each(function() {
                    var e = t(this).attr('data-src');
                    t(this).attr('src', e)
                }),
                setTimeout(function() {
                    t('.js-content-container').addClass('is-visible'),
                    t('.js-greeting').length && t('.js-greeting').addClass('is-visible'),
                    t('.js-loading').remove()
                }, 250)
            }
            i.attach(document.body),
            t(window).load(function() {
                t(window).trigger('resize').scroll()
            }),
            t('.js-lax').parallax({
                calibrateX: !1,
                calibrateY: !1,
                invertX: !0,
                invertY: !0,
                scalarX: 12,
                scalarY: 3,
                limitY: 300,
                frictionX: .02,
                frictionY: .02
            });
            var s = t(document).height()
              , a = t(window).height() / 2
              , c = s + a;
            t('.js-shape-image').addClass('is-visible'),
            t('.js-shapes-container').css('height', s),
            t('.js-content-container').css('height', s),
            t('.js-shapes-container-2').css('top', a + 'px'),
            t('.js-site-container').css('height', s),
            t('.js-project-link').bind('click', function(e) {
                e.preventDefault();
                var n = t(this).attr('data-project');
                t('.js-project-hover-' + n).toggleClass('is-visible'),
                t('.js-project-list').toggleClass('is-hidden'),
                t('.js-footer').toggleClass('is-hidden')
            }),
            t('.js-project-hover-close').bind('click', function() {
                r()
            }),
            t(document).keyup(function(e) {
                27 == e.keyCode && r()
            });
            var l = {
                animate: !0,
                patternWidth: 100,
                patternHeight: 100,
                grainOpacity: .06,
                grainDensity: 1,
                grainWidth: 1,
                grainHeight: 1
            };
            grained('#grained', l);
            var u = 0;
            t('.js-egg').bind('click', function() {
                var e = t('.js-shape-letter-or-number')
                  , n = t('.js-shape-ball')
                  , i = 1;
                0 == u ? (e.each(function() {
                    t(this).attr('src', 'images/fruit-' + i + '.png'),
                    i < 3 ? i++ : i = 1
                }),
                n.each(function() {
                    t(this).attr('src', 'images/fruit-ball.png')
                }),
                u++) : 1 == u ? (e.each(function() {
                    t(this).attr('src', 'images/coffee-' + i + '.png'),
                    i < 2 ? i++ : i = 1
                }),
                n.each(function() {
                    t(this).attr('src', 'images/coffee-' + i + '.png')
                }),
                u++) : 2 == u ? (e.each(function() {
                    t(this).attr('src', 'images/cruisin-' + i + '.png'),
                    i < 2 ? i++ : i = 1
                }),
                n.each(function() {
                    t(this).attr('src', 'images/cruisin-' + i + '.png')
                }),
                u++) : 3 == u ? (e.each(function() {
                    t(this).attr('src', 'images/dolphin-' + i + '.png'),
                    i < 2 ? i++ : i = 1
                }),
                n.each(function() {
                    t(this).attr('src', 'images/dolphin-' + i + '.png')
                }),
                u++) : 4 == u && (e.each(function() {
                    var e = t(this).attr('data-og-src');
                    t(this).attr('src', e)
                }),
                n.each(function() {
                    var e = t(this).attr('data-og-src');
                    t(this).attr('src', e)
                }),
                u = 0)
            }),
            t(window).load(function() {
                t(window).trigger('resize').scroll(),
                o(),
                e(),
                n()
            })
        }
    }
    ).call(t, n(3))
}
, function(e, t, n) {
    var i, r;
    !function(t, n) {
        'object' == typeof e && 'object' == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error('jQuery requires a window with a document');
            return n(e)
        }
        : n(t)
    }('undefined' != typeof window ? window : this, function(n, o) {
        function s(e) {
            var t = 'length'in e && e.length
              , n = ie.type(e);
            return 'function' !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e))
        }
        function a(e, t, n) {
            if (ie.isFunction(t))
                return ie.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                });
            if (t.nodeType)
                return ie.grep(e, function(e) {
                    return e === t !== n
                });
            if ('string' == typeof t) {
                if (pe.test(t))
                    return ie.filter(t, e, n);
                t = ie.filter(t, e)
            }
            return ie.grep(e, function(e) {
                return J.call(t, e) >= 0 !== n
            })
        }
        function c(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        function l(e) {
            var t = ye[e] = {};
            return ie.each(e.match(ve) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function u() {
            te.removeEventListener('DOMContentLoaded', u, !1),
            n.removeEventListener('load', u, !1),
            ie.ready()
        }
        function p() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }),
            this.expando = ie.expando + p.uid++
        }
        function f(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = 'data-' + t.replace(ke, '-$1').toLowerCase(),
                n = e.getAttribute(i),
                'string' == typeof n) {
                    try {
                        n = 'true' === n || 'false' !== n && ('null' === n ? null : +n + '' === n ? +n : Ce.test(n) ? ie.parseJSON(n) : n)
                    } catch (e) {}
                    Te.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        function h() {
            return !0
        }
        function d() {
            return !1
        }
        function m() {
            try {
                return te.activeElement
            } catch (e) {}
        }
        function g(e, t) {
            return ie.nodeName(e, 'table') && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e
        }
        function v(e) {
            return e.type = (null !== e.getAttribute('type')) + '/' + e.type,
            e
        }
        function y(e) {
            var t = $e.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute('type'),
            e
        }
        function x(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                we.set(e[n], 'globalEval', !t || we.get(t[n], 'globalEval'))
        }
        function b(e, t) {
            var n, i, r, o, s, a, c, l;
            if (1 === t.nodeType) {
                if (we.hasData(e) && (o = we.access(e),
                s = we.set(t, o),
                l = o.events)) {
                    delete s.handle,
                    s.events = {};
                    for (r in l)
                        for (n = 0,
                        i = l[r].length; n < i; n++)
                            ie.event.add(t, r, l[r][n])
                }
                Te.hasData(e) && (a = Te.access(e),
                c = ie.extend({}, a),
                Te.set(t, c))
            }
        }
        function w(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
            return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n
        }
        function T(e, t) {
            var n = t.nodeName.toLowerCase();
            'input' === n && je.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue)
        }
        function C(e, t) {
            var i, r = ie(t.createElement(e)).appendTo(t.body), o = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(r[0])) ? i.display : ie.css(r[0], 'display');
            return r.detach(),
            o
        }
        function k(e) {
            var t = te
              , n = Be[e];
            return n || (n = C(e, t),
            'none' !== n && n || (Ye = (Ye || ie('<iframe frameborder='0' width='0' height='0'/>')).appendTo(t.documentElement),
            t = Ye[0].contentDocument,
            t.write(),
            t.close(),
            n = C(e, t),
            Ye.detach()),
            Be[e] = n),
            n
        }
        function E(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || Ue(e),
            n && (s = n.getPropertyValue(t) || n[t]),
            n && ('' !== s || ie.contains(e.ownerDocument, e) || (s = ie.style(e, t)),
            _e.test(s) && ze.test(t) && (i = a.width,
            r = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = r,
            a.maxWidth = o)),
            void 0 !== s ? s + '' : s
        }
        function S(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function N(e, t) {
            if (t in e)
                return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ze.length; r--; )
                if (t = Ze[r] + n,
                t in e)
                    return t;
            return i
        }
        function j(e, t, n) {
            var i = Ge.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || 'px') : t
        }
        function D(e, t, n, i, r) {
            for (var o = n === (i ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0; o < 4; o += 2)
                'margin' === n && (s += ie.css(e, n + Se[o], !0, r)),
                i ? ('content' === n && (s -= ie.css(e, 'padding' + Se[o], !0, r)),
                'margin' !== n && (s -= ie.css(e, 'border' + Se[o] + 'Width', !0, r))) : (s += ie.css(e, 'padding' + Se[o], !0, r),
                'padding' !== n && (s += ie.css(e, 'border' + Se[o] + 'Width', !0, r)));
            return s
        }
        function A(e, t, n) {
            var i = !0
              , r = 'width' === t ? e.offsetWidth : e.offsetHeight
              , o = Ue(e)
              , s = 'border-box' === ie.css(e, 'boxSizing', !1, o);
            if (r <= 0 || null == r) {
                if (r = E(e, t, o),
                (r < 0 || null == r) && (r = e.style[t]),
                _e.test(r))
                    return r;
                i = s && (ee.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
            }
            return r + D(e, t, n || (s ? 'border' : 'content'), i, o) + 'px'
        }
        function L(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)
                i = e[s],
                i.style && (o[s] = we.get(i, 'olddisplay'),
                n = i.style.display,
                t ? (o[s] || 'none' !== n || (i.style.display = ''),
                '' === i.style.display && Ne(i) && (o[s] = we.access(i, 'olddisplay', k(i.nodeName)))) : (r = Ne(i),
                'none' === n && r || we.set(i, 'olddisplay', r ? n : ie.css(i, 'display'))));
            for (s = 0; s < a; s++)
                i = e[s],
                i.style && (t && 'none' !== i.style.display && '' !== i.style.display || (i.style.display = t ? o[s] || '' : 'none'));
            return e
        }
        function F(e, t, n, i, r) {
            return new F.prototype.init(e,t,n,i,r)
        }
        function M() {
            return setTimeout(function() {
                et = void 0
            }),
            et = ie.now()
        }
        function q(e, t) {
            var n, i = 0, r = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                n = Se[i],
                r['margin' + n] = r['padding' + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function O(e, t, n) {
            for (var i, r = (st[t] || []).concat(st['*']), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, t, e))
                    return i
        }
        function H(e, t, n) {
            var i, r, o, s, a, c, l, u, p = this, f = {}, h = e.style, d = e.nodeType && Ne(e), m = we.get(e, 'fxshow');
            n.queue || (a = ie._queueHooks(e, 'fx'),
            null == a.unqueued && (a.unqueued = 0,
            c = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || c()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    ie.queue(e, 'fx').length || a.empty.fire()
                })
            })),
            1 === e.nodeType && ('height'in t || 'width'in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            l = ie.css(e, 'display'),
            u = 'none' === l ? we.get(e, 'olddisplay') || k(e.nodeName) : l,
            'inline' === u && 'none' === ie.css(e, 'float') && (h.display = 'inline-block')),
            n.overflow && (h.overflow = 'hidden',
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i],
                nt.exec(r)) {
                    if (delete t[i],
                    o = o || 'toggle' === r,
                    r === (d ? 'hide' : 'show')) {
                        if ('show' !== r || !m || void 0 === m[i])
                            continue;
                        d = !0
                    }
                    f[i] = m && m[i] || ie.style(e, i)
                } else
                    l = void 0;
            if (ie.isEmptyObject(f))
                'inline' === ('none' === l ? k(e.nodeName) : l) && (h.display = l);
            else {
                m ? 'hidden'in m && (d = m.hidden) : m = we.access(e, 'fxshow', {}),
                o && (m.hidden = !d),
                d ? ie(e).show() : p.done(function() {
                    ie(e).hide()
                }),
                p.done(function() {
                    var t;
                    we.remove(e, 'fxshow');
                    for (t in f)
                        ie.style(e, t, f[t])
                });
                for (i in f)
                    s = O(d ? m[i] : 0, i, p),
                    i in m || (m[i] = s.start,
                    d && (s.end = s.start,
                    s.start = 'width' === i || 'height' === i ? 1 : 0))
            }
        }
        function P(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = ie.camelCase(n),
                r = t[i],
                o = e[n],
                ie.isArray(o) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                s = ie.cssHooks[i],
                s && 'expand'in s) {
                    o = s.expand(o),
                    delete e[i];
                    for (n in o)
                        n in e || (e[n] = o[n],
                        t[n] = r)
                } else
                    t[i] = r
        }
        function R(e, t, n) {
            var i, r, o = 0, s = ot.length, a = ie.Deferred().always(function() {
                delete c.elem
            }), c = function() {
                if (r)
                    return !1;
                for (var t = et || M(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, c = l.tweens.length; s < c; s++)
                    l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]),
                o < 1 && c ? n : (a.resolveWith(e, [l]),
                !1)
            }, l = a.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: et || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? l.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                    this
                }
            }), u = l.props;
            for (P(u, l.opts.specialEasing); o < s; o++)
                if (i = ot[o].call(l, e, u, l.opts))
                    return i;
            return ie.map(u, O, l),
            ie.isFunction(l.opts.start) && l.opts.start.call(e, l),
            ie.fx.timer(ie.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function X(e) {
            return function(t, n) {
                'string' != typeof t && (n = t,
                t = '*');
                var i, r = 0, o = t.toLowerCase().match(ve) || [];
                if (ie.isFunction(n))
                    for (; i = o[r++]; )
                        '+' === i[0] ? (i = i.slice(1) || '*',
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function $(e, t, n, i) {
            function r(a) {
                var c;
                return o[a] = !0,
                ie.each(e[a] || [], function(e, a) {
                    var l = a(t, n, i);
                    return 'string' != typeof l || s || o[l] ? s ? !(c = l) : void 0 : (t.dataTypes.unshift(l),
                    r(l),
                    !1)
                }),
                c
            }
            var o = {}
              , s = e === Ct;
            return r(t.dataTypes[0]) || !o['*'] && r('*')
        }
        function W(e, t) {
            var n, i, r = ie.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ie.extend(!0, e, i),
            e
        }
        function I(e, t, n) {
            for (var i, r, o, s, a = e.contents, c = e.dataTypes; '*' === c[0]; )
                c.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        c.unshift(r);
                        break
                    }
            if (c[0]in n)
                o = c[0];
            else {
                for (r in n) {
                    if (!c[0] || e.converters[r + ' ' + c[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o)
                return o !== c[0] && c.unshift(o),
                n[o]
        }
        function Y(e, t, n, i) {
            var r, o, s, a, c, l = {}, u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters)
                    l[s.toLowerCase()] = e.converters[s];
            for (o = u.shift(); o; )
                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                c = o,
                o = u.shift())
                    if ('*' === o)
                        o = c;
                    else if ('*' !== c && c !== o) {
                        if (s = l[c + ' ' + o] || l['* ' + o],
                        !s)
                            for (r in l)
                                if (a = r.split(' '),
                                a[1] === o && (s = l[c + ' ' + a[0]] || l['* ' + a[0]])) {
                                    s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0],
                                    u.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && e.throws)
                                t = s(t);
                            else
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: 'parsererror',
                                        error: s ? e : 'No conversion from ' + c + ' to ' + o
                                    }
                                }
                    }
            return {
                state: 'success',
                data: t
            }
        }
        function B(e, t, n, i) {
            var r;
            if (ie.isArray(t))
                ie.each(t, function(t, r) {
                    n || jt.test(e) ? i(e, r) : B(e + '[' + ('object' == typeof r ? t : '') + ']', r, n, i)
                });
            else if (n || 'object' !== ie.type(t))
                i(e, t);
            else
                for (r in t)
                    B(e + '[' + r + ']', t[r], n, i)
        }
        function z(e) {
            return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var _ = []
          , U = _.slice
          , V = _.concat
          , G = _.push
          , J = _.indexOf
          , Q = {}
          , K = Q.toString
          , Z = Q.hasOwnProperty
          , ee = {}
          , te = n.document
          , ne = '2.1.4'
          , ie = function(e, t) {
            return new ie.fn.init(e,t)
        }
          , re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , oe = /^-ms-/
          , se = /-([\da-z])/gi
          , ae = function(e, t) {
            return t.toUpperCase()
        };
        ie.fn = ie.prototype = {
            jquery: ne,
            constructor: ie,
            selector: '',
            length: 0,
            toArray: function() {
                return U.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : U.call(this)
            },
            pushStack: function(e) {
                var t = ie.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e, t) {
                return ie.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(ie.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(U.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: G,
            sort: _.sort,
            splice: _.splice
        },
        ie.extend = ie.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, c = arguments.length, l = !1;
            for ('boolean' == typeof s && (l = s,
            s = arguments[a] || {},
            a++),
            'object' == typeof s || ie.isFunction(s) || (s = {}),
            a === c && (s = this,
            a--); a < c; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                        i = e[t],
                        s !== i && (l && i && (ie.isPlainObject(i) || (r = ie.isArray(i))) ? (r ? (r = !1,
                        o = n && ie.isArray(n) ? n : []) : o = n && ie.isPlainObject(n) ? n : {},
                        s[t] = ie.extend(l, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }
        ,
        ie.extend({
            expando: 'jQuery' + (ne + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return 'function' === ie.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return 'object' === ie.type(e) && !e.nodeType && !ie.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, 'isPrototypeOf'))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? Q[K.call(e)] || 'object' : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = ie.trim(e),
                e && (1 === e.indexOf('use strict') ? (t = te.createElement('script'),
                t.text = e,
                te.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(oe, 'ms-').replace(se, ae)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i, r = 0, o = e.length, a = s(e);
                if (n) {
                    if (a)
                        for (; r < o && (i = t.apply(e[r], n),
                        i !== !1); r++)
                            ;
                    else
                        for (r in e)
                            if (i = t.apply(e[r], n),
                            i === !1)
                                break
                } else if (a)
                    for (; r < o && (i = t.call(e[r], r, e[r]),
                    i !== !1); r++)
                        ;
                else
                    for (r in e)
                        if (i = t.call(e[r], r, e[r]),
                        i === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? '' : (e + '').replace(re, '')
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? ie.merge(n, 'string' == typeof e ? [e] : e) : G.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : J.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++)
                    i = !t(e[o], o),
                    i !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var i, r = 0, o = e.length, a = s(e), c = [];
                if (a)
                    for (; r < o; r++)
                        i = t(e[r], r, n),
                        null != i && c.push(i);
                else
                    for (r in e)
                        i = t(e[r], r, n),
                        null != i && c.push(i);
                return V.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ('string' == typeof t && (n = e[t],
                t = e,
                e = n),
                ie.isFunction(e))
                    return i = U.call(arguments, 2),
                    r = function() {
                        return e.apply(t || this, i.concat(U.call(arguments)))
                    }
                    ,
                    r.guid = e.guid = e.guid || ie.guid++,
                    r
            },
            now: Date.now,
            support: ee
        }),
        ie.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function(e, t) {
            Q['[object ' + t + ']'] = t.toLowerCase()
        });
        var ce = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, c, l, p, h, d, m;
                if ((t ? t.ownerDocument || t : $) !== F && L(t),
                t = t || F,
                n = n || [],
                a = t.nodeType,
                'string' != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
                    return n;
                if (!i && q) {
                    if (11 !== a && (r = ye.exec(e)))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s),
                                !o || !o.parentNode)
                                    return n;
                                if (o.id === s)
                                    return n.push(o),
                                    n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s)
                                return n.push(o),
                                n
                        } else {
                            if (r[2])
                                return K.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((s = r[3]) && w.getElementsByClassName)
                                return K.apply(n, t.getElementsByClassName(s)),
                                n
                        }
                    if (w.qsa && (!O || !O.test(e))) {
                        if (h = p = X,
                        d = t,
                        m = 1 !== a && e,
                        1 === a && 'object' !== t.nodeName.toLowerCase()) {
                            for (l = E(e),
                            (p = t.getAttribute('id')) ? h = p.replace(be, '\\$&') : t.setAttribute('id', h),
                            h = '[id='' + h + ''] ',
                            c = l.length; c--; )
                                l[c] = h + f(l[c]);
                            d = xe.test(e) && u(t.parentNode) || t,
                            m = l.join(',')
                        }
                        if (m)
                            try {
                                return K.apply(n, d.querySelectorAll(m)),
                                n
                            } catch (e) {} finally {
                                p || t.removeAttribute('id')
                            }
                    }
                }
                return N(e.replace(ce, '$1'), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + ' ') > T.cacheLength && delete e[t.shift()],
                    e[n + ' '] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[X] = !0,
                e
            }
            function r(e) {
                var t = F.createElement('div');
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split('|'), i = e.length; i--; )
                    T.attrHandle[n[i]] = t
            }
            function s(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return 'input' === n && t.type === e
                }
            }
            function c(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ('input' === n || 'button' === n) && t.type === e
                }
            }
            function l(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--; )
                            n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function u(e) {
                return e && 'undefined' != typeof e.getElementsByTagName && e
            }
            function p() {}
            function f(e) {
                for (var t = 0, n = e.length, i = ''; t < n; t++)
                    i += e[t].value;
                return i
            }
            function h(e, t, n) {
                var i = t.dir
                  , r = n && 'parentNode' === i
                  , o = I++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r)
                            return e(t, n, o)
                }
                : function(t, n, s) {
                    var a, c, l = [W, o];
                    if (s) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || r) && e(t, n, s))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || r) {
                                if (c = t[X] || (t[X] = {}),
                                (a = c[i]) && a[0] === W && a[1] === o)
                                    return l[2] = a[2];
                                if (c[i] = l,
                                l[2] = e(t, n, s))
                                    return !0
                            }
                }
            }
            function d(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--; )
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function m(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++)
                    t(e, n[r], i);
                return i
            }
            function g(e, t, n, i, r) {
                for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)
                    (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                    l && t.push(a)));
                return s
            }
            function v(e, t, n, r, o, s) {
                return r && !r[X] && (r = v(r)),
                o && !o[X] && (o = v(o, s)),
                i(function(i, s, a, c) {
                    var l, u, p, f = [], h = [], d = s.length, v = i || m(t || '*', a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, f, e, a, c), x = n ? o || (i ? e : d || r) ? [] : s : y;
                    if (n && n(y, x, a, c),
                    r)
                        for (l = g(x, h),
                        r(l, [], a, c),
                        u = l.length; u--; )
                            (p = l[u]) && (x[h[u]] = !(y[h[u]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                u = x.length; u--; )
                                    (p = x[u]) && l.push(y[u] = p);
                                o(null, x = [], l, c)
                            }
                            for (u = x.length; u--; )
                                (p = x[u]) && (l = o ? ee(i, p) : f[u]) > -1 && (i[l] = !(s[l] = p))
                        }
                    } else
                        x = g(x === s ? x.splice(d, x.length) : x),
                        o ? o(null, s, x, c) : K.apply(s, x)
                })
            }
            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[' '], a = o ? 1 : 0, c = h(function(e) {
                    return e === t
                }, s, !0), l = h(function(e) {
                    return ee(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var r = !o && (i || n !== j) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                    return t = null,
                    r
                }
                ]; a < r; a++)
                    if (n = T.relative[e[a].type])
                        u = [h(d(u), n)];
                    else {
                        if (n = T.filter[e[a].type].apply(null, e[a].matches),
                        n[X]) {
                            for (i = ++a; i < r && !T.relative[e[i].type]; i++)
                                ;
                            return v(a > 1 && d(u), a > 1 && f(e.slice(0, a - 1).concat({
                                value: ' ' === e[a - 2].type ? '*' : ''
                            })).replace(ce, '$1'), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && f(e))
                        }
                        u.push(n)
                    }
                return d(u)
            }
            function x(e, n) {
                var r = n.length > 0
                  , o = e.length > 0
                  , s = function(i, s, a, c, l) {
                    var u, p, f, h = 0, d = '0', m = i && [], v = [], y = j, x = i || o && T.find.TAG('*', l), b = W += null == y ? 1 : Math.random() || .1, w = x.length;
                    for (l && (j = s !== F && s); d !== w && null != (u = x[d]); d++) {
                        if (o && u) {
                            for (p = 0; f = e[p++]; )
                                if (f(u, s, a)) {
                                    c.push(u);
                                    break
                                }
                            l && (W = b)
                        }
                        r && ((u = !f && u) && h--,
                        i && m.push(u))
                    }
                    if (h += d,
                    r && d !== h) {
                        for (p = 0; f = n[p++]; )
                            f(m, v, s, a);
                        if (i) {
                            if (h > 0)
                                for (; d--; )
                                    m[d] || v[d] || (v[d] = J.call(c));
                            v = g(v)
                        }
                        K.apply(c, v),
                        l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && (W = b,
                    j = y),
                    m
                };
                return r ? i(s) : s
            }
            var b, w, T, C, k, E, S, N, j, D, A, L, F, M, q, O, H, P, R, X = 'sizzle' + 1 * new Date, $ = e.document, W = 0, I = 0, Y = n(), B = n(), z = n(), _ = function(e, t) {
                return e === t && (A = !0),
                0
            }, U = 1 << 31, V = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, K = G.push, Z = G.slice, ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, te = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ne = '[\\x20\\t\\r\\n\\f]', ie = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', re = ie.replace('w', 'w#'), oe = '\\[' + ne + '*(' + ie + ')(?:' + ne + '*([*^$|!~]?=)' + ne + '*(?:'((?:\\\\.|[^\\\\'])*)'|\'((?:\\\\.|[^\\\\\'])*)\'|(' + re + '))|)' + ne + '*\\]', se = ':(' + ie + ')(?:\\((('((?:\\\\.|[^\\\\'])*)'|\'((?:\\\\.|[^\\\\\'])*)\')|((?:\\\\.|[^\\\\()[\\]]|' + oe + ')*)|.*)\\)|)', ae = new RegExp(ne + '+','g'), ce = new RegExp('^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$','g'), le = new RegExp('^' + ne + '*,' + ne + '*'), ue = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'), pe = new RegExp('=' + ne + '*([^\\]'\']*?)' + ne + '*\\]','g'), fe = new RegExp(se), he = new RegExp('^' + re + '$'), de = {
                ID: new RegExp('^#(' + ie + ')'),
                CLASS: new RegExp('^\\.(' + ie + ')'),
                TAG: new RegExp('^(' + ie.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + oe),
                PSEUDO: new RegExp('^' + se),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ne + '*(even|odd|(([+-]|)(\\d*)n|)' + ne + '*(?:([+-]|)' + ne + '*(\\d+)|))' + ne + '*\\)|)','i'),
                bool: new RegExp('^(?:' + te + ')$','i'),
                needsContext: new RegExp('^' + ne + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ne + '*((?:-\\d)?\\d*)' + ne + '*\\)|)(?=[^-]|$)','i')
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp('\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)','ig'), Te = function(e, t, n) {
                var i = '0x' + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Ce = function() {
                L()
            };
            try {
                K.apply(G = Z.call($.childNodes), $.childNodes),
                G[$.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: G.length ? function(e, t) {
                        Q.apply(e, Z.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {},
            k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && 'HTML' !== t.nodeName
            }
            ,
            L = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : $;
                return i !== F && 9 === i.nodeType && i.documentElement ? (F = i,
                M = i.documentElement,
                n = i.defaultView,
                n && n !== n.top && (n.addEventListener ? n.addEventListener('unload', Ce, !1) : n.attachEvent && n.attachEvent('onunload', Ce)),
                q = !k(i),
                w.attributes = r(function(e) {
                    return e.className = 'i',
                    !e.getAttribute('className')
                }),
                w.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment('')),
                    !e.getElementsByTagName('*').length
                }),
                w.getElementsByClassName = ve.test(i.getElementsByClassName),
                w.getById = r(function(e) {
                    return M.appendChild(e).id = X,
                    !i.getElementsByName || !i.getElementsByName(X).length
                }),
                w.getById ? (T.find.ID = function(e, t) {
                    if ('undefined' != typeof t.getElementById && q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }
                ,
                T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        return e.getAttribute('id') === t
                    }
                }
                ) : (delete T.find.ID,
                T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                        return n && n.value === t
                    }
                }
                ),
                T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if ('*' === e) {
                        for (; n = o[r++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }
                ,
                T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if (q)
                        return t.getElementsByClassName(e)
                }
                ,
                H = [],
                O = [],
                (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                    M.appendChild(e).innerHTML = '<a id='' + X + ''></a><select id='' + X + '-\f]' msallowcapture=''><option selected=''></option></select>',
                    e.querySelectorAll('[msallowcapture^='']').length && O.push('[*^$]=' + ne + '*(?:''|\'\')'),
                    e.querySelectorAll('[selected]').length || O.push('\\[' + ne + '*(?:value|' + te + ')'),
                    e.querySelectorAll('[id~=' + X + '-]').length || O.push('~='),
                    e.querySelectorAll(':checked').length || O.push(':checked'),
                    e.querySelectorAll('a#' + X + '+*').length || O.push('.#.+[+~]')
                }),
                r(function(e) {
                    var t = i.createElement('input');
                    t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length && O.push('name' + ne + '*[*^$|!~]?='),
                    e.querySelectorAll(':enabled').length || O.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    O.push(',.*:')
                })),
                (w.matchesSelector = ve.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = P.call(e, 'div'),
                    P.call(e, '[s!='']:x'),
                    H.push('!=', se)
                }),
                O = O.length && new RegExp(O.join('|')),
                H = H.length && new RegExp(H.join('|')),
                t = ve.test(M.compareDocumentPosition),
                R = t || ve.test(M.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                _ = t ? function(e, t) {
                    if (e === t)
                        return A = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === $ && R($, e) ? -1 : t === i || t.ownerDocument === $ && R($, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return A = !0,
                        0;
                    var n, r = 0, o = e.parentNode, a = t.parentNode, c = [e], l = [t];
                    if (!o || !a)
                        return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (o === a)
                        return s(e, t);
                    for (n = e; n = n.parentNode; )
                        c.unshift(n);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (; c[r] === l[r]; )
                        r++;
                    return r ? s(c[r], l[r]) : c[r] === $ ? -1 : l[r] === $ ? 1 : 0
                }
                ,
                i) : F
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== F && L(e),
                n = n.replace(pe, '='$1']'),
                w.matchesSelector && q && (!H || !H.test(n)) && (!O || !O.test(n)))
                    try {
                        var i = P.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (e) {}
                return t(n, F, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== F && L(e),
                R(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== F && L(e);
                var n = T.attrHandle[t.toLowerCase()]
                  , i = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : w.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            t.error = function(e) {
                throw new Error('Syntax error, unrecognized expression: ' + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (A = !w.detectDuplicates,
                D = !w.sortStable && e.slice(0),
                e.sort(_),
                A) {
                    for (; t = e[r++]; )
                        t === e[r] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return D = null,
                e
            }
            ,
            C = t.getText = function(e) {
                var t, n = '', i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ('string' == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += C(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += C(t);
                return n
            }
            ,
            T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    '>': {
                        dir: 'parentNode',
                        first: !0
                    },
                    ' ': {
                        dir: 'parentNode'
                    },
                    '+': {
                        dir: 'previousSibling',
                        first: !0
                    },
                    '~': {
                        dir: 'previousSibling'
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Te),
                        e[3] = (e[3] || e[4] || e[5] || '').replace(we, Te),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])),
                        e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return '*' === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = Y[e + ' '];
                        return t || (t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) && Y(e, function(e) {
                            return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '')
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? '!=' === n : !n || (o += '',
                            '=' === n ? o === i : '!=' === n ? o !== i : '^=' === n ? i && 0 === o.indexOf(i) : '*=' === n ? i && o.indexOf(i) > -1 : '$=' === n ? i && o.slice(-i.length) === i : '~=' === n ? (' ' + o.replace(ae, ' ') + ' ').indexOf(i) > -1 : '|=' === n && (o === i || o.slice(0, i.length + 1) === i + '-'))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = 'nth' !== e.slice(0, 3)
                          , s = 'last' !== e.slice(-4)
                          , a = 'of-type' === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, c) {
                            var l, u, p, f, h, d, m = o !== s ? 'nextSibling' : 'previousSibling', g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !c && !a;
                            if (g) {
                                if (o) {
                                    for (; m; ) {
                                        for (p = t; p = p[m]; )
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                return !1;
                                        d = m = 'only' === e && !d && 'nextSibling'
                                    }
                                    return !0
                                }
                                if (d = [s ? g.firstChild : g.lastChild],
                                s && y) {
                                    for (u = g[X] || (g[X] = {}),
                                    l = u[e] || [],
                                    h = l[0] === W && l[1],
                                    f = l[0] === W && l[2],
                                    p = h && g.childNodes[h]; p = ++h && p && p[m] || (f = h = 0) || d.pop(); )
                                        if (1 === p.nodeType && ++f && p === t) {
                                            u[e] = [W, h, f];
                                            break
                                        }
                                } else if (y && (l = (t[X] || (t[X] = {}))[e]) && l[0] === W)
                                    f = l[1];
                                else
                                    for (; (p = ++h && p && p[m] || (f = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (y && ((p[X] || (p[X] = {}))[e] = [W, f]),
                                    p !== t)); )
                                        ;
                                return f -= r,
                                f === i || f % i === 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
                        return o[X] ? o(n) : o.length > 1 ? (r = [e, e, '', n],
                        T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--; )
                                i = ee(e, r[s]),
                                e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                          , n = []
                          , r = S(e.replace(ce, '$1'));
                        return r[X] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--; )
                                (o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, Te),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return he.test(e || '') || t.error('unsupported lang: ' + e),
                        e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = q ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + '-');
                            while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1;
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return 'input' === t && !!e.checked || 'option' === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return 'input' === t && 'button' === e.type || 'button' === t
                    },
                    text: function(e) {
                        var t;
                        return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            },
            T.pseudos.nth = T.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                T.pseudos[b] = a(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                T.pseudos[b] = c(b);
            return p.prototype = T.filters = T.pseudos,
            T.setFilters = new p,
            E = t.tokenize = function(e, n) {
                var i, r, o, s, a, c, l, u = B[e + ' '];
                if (u)
                    return n ? 0 : u.slice(0);
                for (a = e,
                c = [],
                l = T.preFilter; a; ) {
                    i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                    c.push(o = [])),
                    i = !1,
                    (r = ue.exec(a)) && (i = r.shift(),
                    o.push({
                        value: i,
                        type: r[0].replace(ce, ' ')
                    }),
                    a = a.slice(i.length));
                    for (s in T.filter)
                        !(r = de[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(),
                        o.push({
                            value: i,
                            type: s,
                            matches: r
                        }),
                        a = a.slice(i.length));
                    if (!i)
                        break
                }
                return n ? a.length : a ? t.error(e) : B(e, c).slice(0)
            }
            ,
            S = t.compile = function(e, t) {
                var n, i = [], r = [], o = z[e + ' '];
                if (!o) {
                    for (t || (t = E(e)),
                    n = t.length; n--; )
                        o = y(t[n]),
                        o[X] ? i.push(o) : r.push(o);
                    o = z(e, x(r, i)),
                    o.selector = e
                }
                return o
            }
            ,
            N = t.select = function(e, t, n, i) {
                var r, o, s, a, c, l = 'function' == typeof e && e, p = !i && E(e = l.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if (o = p[0] = p[0].slice(0),
                    o.length > 2 && 'ID' === (s = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0],
                        !t)
                            return n;
                        l && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                    !T.relative[a = s.type]); )
                        if ((c = T.find[a]) && (i = c(s.matches[0].replace(we, Te), xe.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1),
                            e = i.length && f(o),
                            !e)
                                return K.apply(n, i),
                                n;
                            break
                        }
                }
                return (l || S(e, p))(i, t, !q, n, xe.test(e) && u(t.parentNode) || t),
                n
            }
            ,
            w.sortStable = X.split('').sort(_).join('') === X,
            w.detectDuplicates = !!A,
            L(),
            w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(F.createElement('div'))
            }),
            r(function(e) {
                return e.innerHTML = '<a href='#'></a>',
                '#' === e.firstChild.getAttribute('href')
            }) || o('type|href|height|width', function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
            }),
            w.attributes && r(function(e) {
                return e.innerHTML = '<input/>',
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
            }) || o('value', function(e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            r(function(e) {
                return null == e.getAttribute('disabled')
            }) || o(te, function(e, t, n) {
                var i;
                if (!n)
                    return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            t
        }(n);
        ie.find = ce,
        ie.expr = ce.selectors,
        ie.expr[':'] = ie.expr.pseudos,
        ie.unique = ce.uniqueSort,
        ie.text = ce.getText,
        ie.isXMLDoc = ce.isXML,
        ie.contains = ce.contains;
        var le = ie.expr.match.needsContext
          , ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
          , pe = /^.[^:#\[\.,]*$/;
        ie.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === i.nodeType ? ie.find.matchesSelector(i, e) ? [i] : [] : ie.find.matches(e, ie.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        ie.fn.extend({
            find: function(e) {
                var t, n = this.length, i = [], r = this;
                if ('string' != typeof e)
                    return this.pushStack(ie(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (ie.contains(r[t], this))
                                return !0
                    }));
                for (t = 0; t < n; t++)
                    ie.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? ie.unique(i) : i),
                i.selector = this.selector ? this.selector + ' ' + e : e,
                i
            },
            filter: function(e) {
                return this.pushStack(a(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(a(this, e || [], !0))
            },
            is: function(e) {
                return !!a(this, 'string' == typeof e && le.test(e) ? ie(e) : e || [], !1).length
            }
        });
        var fe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, de = ie.fn.init = function(e, t) {
            var n, i;
            if (!e)
                return this;
            if ('string' == typeof e) {
                if (n = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e),
                !n || !n[1] && t)
                    return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t,
                    ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                    ue.test(n[1]) && ie.isPlainObject(t))
                        for (n in t)
                            ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = te.getElementById(n[2]),
                i && i.parentNode && (this.length = 1,
                this[0] = i),
                this.context = te,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : ie.isFunction(e) ? 'undefined' != typeof fe.ready ? fe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            ie.makeArray(e, this))
        }
        ;
        de.prototype = ie.fn,
        fe = ie(te);
        var me = /^(?:parents|prev(?:Until|All))/
          , ge = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ie.extend({
            dir: function(e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && ie(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }),
        ie.fn.extend({
            has: function(e) {
                var t = ie(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (ie.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = le.test(e) || 'string' != typeof e ? ie(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ie.unique(o) : o)
            },
            index: function(e) {
                return e ? 'string' == typeof e ? J.call(ie(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        ie.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ie.dir(e, 'parentNode')
            },
            parentsUntil: function(e, t, n) {
                return ie.dir(e, 'parentNode', n)
            },
            next: function(e) {
                return c(e, 'nextSibling')
            },
            prev: function(e) {
                return c(e, 'previousSibling')
            },
            nextAll: function(e) {
                return ie.dir(e, 'nextSibling')
            },
            prevAll: function(e) {
                return ie.dir(e, 'previousSibling')
            },
            nextUntil: function(e, t, n) {
                return ie.dir(e, 'nextSibling', n)
            },
            prevUntil: function(e, t, n) {
                return ie.dir(e, 'previousSibling', n)
            },
            siblings: function(e) {
                return ie.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ie.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || ie.merge([], e.childNodes)
            }
        }, function(e, t) {
            ie.fn[e] = function(n, i) {
                var r = ie.map(this, t, n);
                return 'Until' !== e.slice(-5) && (i = n),
                i && 'string' == typeof i && (r = ie.filter(i, r)),
                this.length > 1 && (ge[e] || ie.unique(r),
                me.test(e) && r.reverse()),
                this.pushStack(r)
            }
        });
        var ve = /\S+/g
          , ye = {};
        ie.Callbacks = function(e) {
            e = 'string' == typeof e ? ye[e] || l(e) : ie.extend({}, e);
            var t, n, i, r, o, s, a = [], c = !e.once && [], u = function(l) {
                for (t = e.memory && l,
                n = !0,
                s = r || 0,
                r = 0,
                o = a.length,
                i = !0; a && s < o; s++)
                    if (a[s].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1,
                a && (c ? c.length && u(c.shift()) : t ? a = [] : p.disable())
            }, p = {
                add: function() {
                    if (a) {
                        var n = a.length;
                        !function t(n) {
                            ie.each(n, function(n, i) {
                                var r = ie.type(i);
                                'function' === r ? e.unique && p.has(i) || a.push(i) : i && i.length && 'string' !== r && t(i)
                            })
                        }(arguments),
                        i ? o = a.length : t && (r = n,
                        u(t))
                    }
                    return this
                },
                remove: function() {
                    return a && ie.each(arguments, function(e, t) {
                        for (var n; (n = ie.inArray(t, a, n)) > -1; )
                            a.splice(n, 1),
                            i && (n <= o && o--,
                            n <= s && s--)
                    }),
                    this
                },
                has: function(e) {
                    return e ? ie.inArray(e, a) > -1 : !(!a || !a.length)
                },
                empty: function() {
                    return a = [],
                    o = 0,
                    this
                },
                disable: function() {
                    return a = c = t = void 0,
                    this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return c = void 0,
                    t || p.disable(),
                    this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !a || n && !c || (t = t || [],
                    t = [e, t.slice ? t.slice() : t],
                    i ? c.push(t) : u(t)),
                    this
                },
                fire: function() {
                    return p.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!n
                }
            };
            return p
        }
        ,
        ie.extend({
            Deferred: function(e) {
                var t = [['resolve', 'done', ie.Callbacks('once memory'), 'resolved'], ['reject', 'fail', ie.Callbacks('once memory'), 'rejected'], ['notify', 'progress', ie.Callbacks('memory')]]
                  , n = 'pending'
                  , i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, o) {
                                var s = ie.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + 'With'](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, i) : i
                    }
                }
                  , r = {};
                return i.pipe = i.then,
                ie.each(t, function(e, o) {
                    var s = o[2]
                      , a = o[3];
                    i[o[1]] = s.add,
                    a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    r[o[0]] = function() {
                        return r[o[0] + 'With'](this === r ? i : this, arguments),
                        this
                    }
                    ,
                    r[o[0] + 'With'] = s.fireWith
                }),
                i.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t, n, i, r = 0, o = U.call(arguments), s = o.length, a = 1 !== s || e && ie.isFunction(e.promise) ? s : 0, c = 1 === a ? e : ie.Deferred(), l = function(e, n, i) {
                    return function(r) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? U.call(arguments) : r,
                        i === t ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                    }
                };
                if (s > 1)
                    for (t = new Array(s),
                    n = new Array(s),
                    i = new Array(s); r < s; r++)
                        o[r] && ie.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(c.reject).progress(l(r, n, t)) : --a;
                return a || c.resolveWith(i, o),
                c.promise()
            }
        });
        var xe;
        ie.fn.ready = function(e) {
            return ie.ready.promise().done(e),
            this
        }
        ,
        ie.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ie.readyWait++ : ie.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --ie.readyWait : ie.isReady) || (ie.isReady = !0,
                e !== !0 && --ie.readyWait > 0 || (xe.resolveWith(te, [ie]),
                ie.fn.triggerHandler && (ie(te).triggerHandler('ready'),
                ie(te).off('ready'))))
            }
        }),
        ie.ready.promise = function(e) {
            return xe || (xe = ie.Deferred(),
            'complete' === te.readyState ? setTimeout(ie.ready) : (te.addEventListener('DOMContentLoaded', u, !1),
            n.addEventListener('load', u, !1))),
            xe.promise(e)
        }
        ,
        ie.ready.promise();
        var be = ie.access = function(e, t, n, i, r, o, s) {
            var a = 0
              , c = e.length
              , l = null == n;
            if ('object' === ie.type(n)) {
                r = !0;
                for (a in n)
                    ie.access(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0,
            ie.isFunction(i) || (s = !0),
            l && (s ? (t.call(e, i),
            t = null) : (l = t,
            t = function(e, t, n) {
                return l.call(ie(e), n)
            }
            )),
            t))
                for (; a < c; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
        }
        ;
        ie.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        ,
        p.uid = 1,
        p.accepts = ie.acceptData,
        p.prototype = {
            key: function(e) {
                if (!p.accepts(e))
                    return 0;
                var t = {}
                  , n = e[this.expando];
                if (!n) {
                    n = p.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        },
                        Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n,
                        ie.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}),
                n
            },
            set: function(e, t, n) {
                var i, r = this.key(e), o = this.cache[r];
                if ('string' == typeof t)
                    o[t] = n;
                else if (ie.isEmptyObject(o))
                    ie.extend(this.cache[r], t);
                else
                    for (i in t)
                        o[i] = t[i];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && 'string' == typeof t && void 0 === n ? (i = this.get(e, t),
                void 0 !== i ? i : this.get(e, ie.camelCase(t))) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = this.key(e), s = this.cache[o];
                if (void 0 === t)
                    this.cache[o] = {};
                else {
                    ie.isArray(t) ? i = t.concat(t.map(ie.camelCase)) : (r = ie.camelCase(t),
                    t in s ? i = [t, r] : (i = r,
                    i = i in s ? [i] : i.match(ve) || [])),
                    n = i.length;
                    for (; n--; )
                        delete s[i[n]]
                }
            },
            hasData: function(e) {
                return !ie.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var we = new p
          , Te = new p
          , Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ke = /([A-Z])/g;
        ie.extend({
            hasData: function(e) {
                return Te.hasData(e) || we.hasData(e)
            },
            data: function(e, t, n) {
                return Te.access(e, t, n)
            },
            removeData: function(e, t) {
                Te.remove(e, t)
            },
            _data: function(e, t, n) {
                return we.access(e, t, n)
            },
            _removeData: function(e, t) {
                we.remove(e, t)
            }
        }),
        ie.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Te.get(o),
                    1 === o.nodeType && !we.get(o, 'hasDataAttrs'))) {
                        for (n = s.length; n--; )
                            s[n] && (i = s[n].name,
                            0 === i.indexOf('data-') && (i = ie.camelCase(i.slice(5)),
                            f(o, i, r[i])));
                        we.set(o, 'hasDataAttrs', !0)
                    }
                    return r
                }
                return 'object' == typeof e ? this.each(function() {
                    Te.set(this, e)
                }) : be(this, function(t) {
                    var n, i = ie.camelCase(e);
                    if (o && void 0 === t) {
                        if (n = Te.get(o, e),
                        void 0 !== n)
                            return n;
                        if (n = Te.get(o, i),
                        void 0 !== n)
                            return n;
                        if (n = f(o, i, void 0),
                        void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            var n = Te.get(this, i);
                            Te.set(this, i, t),
                            e.indexOf('-') !== -1 && void 0 !== n && Te.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Te.remove(this, e)
                })
            }
        }),
        ie.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || 'fx') + 'queue',
                    i = we.get(e, t),
                    n && (!i || ie.isArray(n) ? i = we.access(e, t, ie.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || 'fx';
                var n = ie.queue(e, t)
                  , i = n.length
                  , r = n.shift()
                  , o = ie._queueHooks(e, t)
                  , s = function() {
                    ie.dequeue(e, t)
                };
                'inprogress' === r && (r = n.shift(),
                i--),
                r && ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                r.call(e, s, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + 'queueHooks';
                return we.get(e, n) || we.access(e, n, {
                    empty: ie.Callbacks('once memory').add(function() {
                        we.remove(e, [t + 'queue', n])
                    })
                })
            }
        }),
        ie.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return 'string' != typeof e && (t = e,
                e = 'fx',
                n--),
                arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = ie.queue(this, e, t);
                    ie._queueHooks(this, e),
                    'fx' === e && 'inprogress' !== n[0] && ie.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ie.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || 'fx', [])
            },
            promise: function(e, t) {
                var n, i = 1, r = ie.Deferred(), o = this, s = this.length, a = function() {
                    --i || r.resolveWith(o, [o])
                };
                for ('string' != typeof e && (t = e,
                e = void 0),
                e = e || 'fx'; s--; )
                    n = we.get(o[s], e + 'queueHooks'),
                    n && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                r.promise(t)
            }
        });
        var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Se = ['Top', 'Right', 'Bottom', 'Left']
          , Ne = function(e, t) {
            return e = t || e,
            'none' === ie.css(e, 'display') || !ie.contains(e.ownerDocument, e)
        }
          , je = /^(?:checkbox|radio)$/i;
        !function() {
            var e = te.createDocumentFragment()
              , t = e.appendChild(te.createElement('div'))
              , n = te.createElement('input');
            n.setAttribute('type', 'radio'),
            n.setAttribute('checked', 'checked'),
            n.setAttribute('name', 't'),
            t.appendChild(n),
            ee.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = '<textarea>x</textarea>',
            ee.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var De = 'undefined';
        ee.focusinBubbles = 'onfocusin'in n;
        var Ae = /^key/
          , Le = /^(?:mouse|pointer|contextmenu)|click/
          , Fe = /^(?:focusinfocus|focusoutblur)$/
          , Me = /^([^.]*)(?:\.(.+)|)$/;
        ie.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, c, l, u, p, f, h, d, m, g = we.get(e);
                if (g)
                    for (n.handler && (o = n,
                    n = o.handler,
                    r = o.selector),
                    n.guid || (n.guid = ie.guid++),
                    (c = g.events) || (c = g.events = {}),
                    (s = g.handle) || (s = g.handle = function(t) {
                        return typeof ie !== De && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || '').match(ve) || [''],
                    l = t.length; l--; )
                        a = Me.exec(t[l]) || [],
                        h = m = a[1],
                        d = (a[2] || '').split('.').sort(),
                        h && (p = ie.event.special[h] || {},
                        h = (r ? p.delegateType : p.bindType) || h,
                        p = ie.event.special[h] || {},
                        u = ie.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && ie.expr.match.needsContext.test(r),
                            namespace: d.join('.')
                        }, o),
                        (f = c[h]) || (f = c[h] = [],
                        f.delegateCount = 0,
                        p.setup && p.setup.call(e, i, d, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)),
                        p.add && (p.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                        r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        ie.event.global[h] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, c, l, u, p, f, h, d, m, g = we.hasData(e) && we.get(e);
                if (g && (c = g.events)) {
                    for (t = (t || '').match(ve) || [''],
                    l = t.length; l--; )
                        if (a = Me.exec(t[l]) || [],
                        h = m = a[1],
                        d = (a[2] || '').split('.').sort(),
                        h) {
                            for (p = ie.event.special[h] || {},
                            h = (i ? p.delegateType : p.bindType) || h,
                            f = c[h] || [],
                            a = a[2] && new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                            s = o = f.length; o--; )
                                u = f[o],
                                !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ('**' !== i || !u.selector) || (f.splice(o, 1),
                                u.selector && f.delegateCount--,
                                p.remove && p.remove.call(e, u));
                            s && !f.length && (p.teardown && p.teardown.call(e, d, g.handle) !== !1 || ie.removeEvent(e, h, g.handle),
                            delete c[h])
                        } else
                            for (h in c)
                                ie.event.remove(e, h + t[l], n, i, !0);
                    ie.isEmptyObject(c) && (delete g.handle,
                    we.remove(e, 'events'))
                }
            },
            trigger: function(e, t, i, r) {
                var o, s, a, c, l, u, p, f = [i || te], h = Z.call(e, 'type') ? e.type : e, d = Z.call(e, 'namespace') ? e.namespace.split('.') : [];
                if (s = a = i = i || te,
                3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(h + ie.event.triggered) && (h.indexOf('.') >= 0 && (d = h.split('.'),
                h = d.shift(),
                d.sort()),
                l = h.indexOf(':') < 0 && 'on' + h,
                e = e[ie.expando] ? e : new ie.Event(h,'object' == typeof e && e),
                e.isTrigger = r ? 2 : 3,
                e.namespace = d.join('.'),
                e.namespace_re = e.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)') : null,
                e.result = void 0,
                e.target || (e.target = i),
                t = null == t ? [e] : ie.makeArray(t, [e]),
                p = ie.event.special[h] || {},
                r || !p.trigger || p.trigger.apply(i, t) !== !1)) {
                    if (!r && !p.noBubble && !ie.isWindow(i)) {
                        for (c = p.delegateType || h,
                        Fe.test(c + h) || (s = s.parentNode); s; s = s.parentNode)
                            f.push(s),
                            a = s;
                        a === (i.ownerDocument || te) && f.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
                        e.type = o > 1 ? c : p.bindType || h,
                        u = (we.get(s, 'events') || {})[e.type] && we.get(s, 'handle'),
                        u && u.apply(s, t),
                        u = l && s[l],
                        u && u.apply && ie.acceptData(s) && (e.result = u.apply(s, t),
                        e.result === !1 && e.preventDefault());
                    return e.type = h,
                    r || e.isDefaultPrevented() || p._default && p._default.apply(f.pop(), t) !== !1 || !ie.acceptData(i) || l && ie.isFunction(i[h]) && !ie.isWindow(i) && (a = i[l],
                    a && (i[l] = null),
                    ie.event.triggered = h,
                    i[h](),
                    ie.event.triggered = void 0,
                    a && (i[l] = a)),
                    e.result
                }
            },
            dispatch: function(e) {
                e = ie.event.fix(e);
                var t, n, i, r, o, s = [], a = U.call(arguments), c = (we.get(this, 'events') || {})[e.type] || [], l = ie.event.special[e.type] || {};
                if (a[0] = e,
                e.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (s = ie.event.handlers.call(this, e, c),
                    t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = r.elem,
                        n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                            e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o,
                            e.data = o.data,
                            i = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                            void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s = [], a = t.delegateCount, c = e.target;
                if (a && c.nodeType && (!e.button || 'click' !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (c.disabled !== !0 || 'click' !== e.type) {
                            for (i = [],
                            n = 0; n < a; n++)
                                o = t[n],
                                r = o.selector + ' ',
                                void 0 === i[r] && (i[r] = o.needsContext ? ie(r, this).index(c) >= 0 : ie.find(r, this, null, [c]).length),
                                i[r] && i.push(o);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }),
                s
            },
            props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
            fixHooks: {},
            keyHooks: {
                props: 'char charCode key keyCode'.split(' '),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || te,
                    i = n.documentElement,
                    r = n.body,
                    e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                    e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                }
            },
            fix: function(e) {
                if (e[ie.expando])
                    return e;
                var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Le.test(r) ? this.mouseHooks : Ae.test(r) ? this.keyHooks : {}),
                i = s.props ? this.props.concat(s.props) : this.props,
                e = new ie.Event(o),
                t = i.length; t--; )
                    n = i[t],
                    e[n] = o[n];
                return e.target || (e.target = te),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== m() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: 'focusin'
                },
                blur: {
                    trigger: function() {
                        if (this === m() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: 'focusout'
                },
                click: {
                    trigger: function() {
                        if ('checkbox' === this.type && this.click && ie.nodeName(this, 'input'))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return ie.nodeName(e.target, 'a')
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = ie.extend(new ie.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ie.event.trigger(r, null, t) : ie.event.dispatch.call(t, r),
                r.isDefaultPrevented() && n.preventDefault()
            }
        },
        ie.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
        ,
        ie.Event = function(e, t) {
            return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : d) : this.type = e,
            t && ie.extend(this, t),
            this.timeStamp = e && e.timeStamp || ie.now(),
            void (this[ie.expando] = !0)) : new ie.Event(e,t)
        }
        ,
        ie.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h,
                e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h,
                e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        ie.each({
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout'
        }, function(e, t) {
            ie.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    return r && (r === i || ie.contains(i, r)) || (e.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        ee.focusinBubbles || ie.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function(e, t) {
            var n = function(e) {
                ie.event.simulate(t, e.target, ie.event.fix(e), !0)
            };
            ie.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , r = we.access(i, t);
                    r || i.addEventListener(e, n, !0),
                    we.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , r = we.access(i, t) - 1;
                    r ? we.access(i, t, r) : (i.removeEventListener(e, n, !0),
                    we.remove(i, t))
                }
            }
        }),
        ie.fn.extend({
            on: function(e, t, n, i, r) {
                var o, s;
                if ('object' == typeof e) {
                    'string' != typeof t && (n = n || t,
                    t = void 0);
                    for (s in e)
                        this.on(s, t, n, e[s], r);
                    return this
                }
                if (null == n && null == i ? (i = t,
                n = t = void 0) : null == i && ('string' == typeof t ? (i = n,
                n = void 0) : (i = n,
                n = t,
                t = void 0)),
                i === !1)
                    i = d;
                else if (!i)
                    return this;
                return 1 === r && (o = i,
                i = function(e) {
                    return ie().off(e),
                    o.apply(this, arguments)
                }
                ,
                i.guid = o.guid || (o.guid = ie.guid++)),
                this.each(function() {
                    ie.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    ie(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ('object' == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && 'function' != typeof t || (n = t,
                t = void 0),
                n === !1 && (n = d),
                this.each(function() {
                    ie.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ie.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return ie.event.trigger(e, t, n, !0)
            }
        });
        var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , Oe = /<([\w:]+)/
          , He = /<|&#?\w+;/
          , Pe = /<(?:script|style|link)/i
          , Re = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Xe = /^$|\/(?:java|ecma)script/i
          , $e = /^true\/(.*)/
          , We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , Ie = {
            option: [1, '<select multiple='multiple'>', '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', '']
        };
        Ie.optgroup = Ie.option,
        Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
        Ie.th = Ie.td,
        ie.extend({
            clone: function(e, t, n) {
                var i, r, o, s, a = e.cloneNode(!0), c = ie.contains(e.ownerDocument, e);
                if (!(ee.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                    for (s = w(a),
                    o = w(e),
                    i = 0,
                    r = o.length; i < r; i++)
                        T(o[i], s[i]);
                if (t)
                    if (n)
                        for (o = o || w(e),
                        s = s || w(a),
                        i = 0,
                        r = o.length; i < r; i++)
                            b(o[i], s[i]);
                    else
                        b(e, a);
                return s = w(a, 'script'),
                s.length > 0 && x(s, !c && w(e, 'script')),
                a
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, s, a, c, l, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if (r = e[f],
                    r || 0 === r)
                        if ('object' === ie.type(r))
                            ie.merge(p, r.nodeType ? [r] : r);
                        else if (He.test(r)) {
                            for (o = o || u.appendChild(t.createElement('div')),
                            s = (Oe.exec(r) || ['', ''])[1].toLowerCase(),
                            a = Ie[s] || Ie._default,
                            o.innerHTML = a[1] + r.replace(qe, '<$1></$2>') + a[2],
                            l = a[0]; l--; )
                                o = o.lastChild;
                            ie.merge(p, o.childNodes),
                            o = u.firstChild,
                            o.textContent = ''
                        } else
                            p.push(t.createTextNode(r));
                for (u.textContent = '',
                f = 0; r = p[f++]; )
                    if ((!i || ie.inArray(r, i) === -1) && (c = ie.contains(r.ownerDocument, r),
                    o = w(u.appendChild(r), 'script'),
                    c && x(o),
                    n))
                        for (l = 0; r = o[l++]; )
                            Xe.test(r.type || '') && n.push(r);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, r, o = ie.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                    if (ie.acceptData(n) && (r = n[we.expando],
                    r && (t = we.cache[r]))) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? ie.event.remove(n, i) : ie.removeEvent(n, i, t.handle);
                        we.cache[r] && delete we.cache[r]
                    }
                    delete Te.cache[n[Te.expando]]
                }
            }
        }),
        ie.fn.extend({
            text: function(e) {
                return be(this, function(e) {
                    return void 0 === e ? ie.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = g(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = g(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ie.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                    t || 1 !== n.nodeType || ie.cleanData(w(n)),
                    n.parentNode && (t && ie.contains(n.ownerDocument, n) && x(w(n, 'script')),
                    n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (ie.cleanData(w(e, !1)),
                    e.textContent = '');
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return ie.clone(this, e, t)
                })
            },
            html: function(e) {
                return be(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ('string' == typeof e && !Pe.test(e) && !Ie[(Oe.exec(e) || ['', ''])[1].toLowerCase()]) {
                        e = e.replace(qe, '<$1></$2>');
                        try {
                            for (; n < i; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (ie.cleanData(w(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode,
                    ie.cleanData(w(this)),
                    e && e.replaceChild(t, this)
                }),
                e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = V.apply([], e);
                var n, i, r, o, s, a, c = 0, l = this.length, u = this, p = l - 1, f = e[0], h = ie.isFunction(f);
                if (h || l > 1 && 'string' == typeof f && !ee.checkClone && Re.test(f))
                    return this.each(function(n) {
                        var i = u.eq(n);
                        h && (e[0] = f.call(this, n, i.html())),
                        i.domManip(e, t)
                    });
                if (l && (n = ie.buildFragment(e, this[0].ownerDocument, !1, this),
                i = n.firstChild,
                1 === n.childNodes.length && (n = i),
                i)) {
                    for (r = ie.map(w(n, 'script'), v),
                    o = r.length; c < l; c++)
                        s = n,
                        c !== p && (s = ie.clone(s, !0, !0),
                        o && ie.merge(r, w(s, 'script'))),
                        t.call(this[c], s, c);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument,
                        ie.map(r, y),
                        c = 0; c < o; c++)
                            s = r[c],
                            Xe.test(s.type || '') && !we.access(s, 'globalEval') && ie.contains(a, s) && (s.src ? ie._evalUrl && ie._evalUrl(s.src) : ie.globalEval(s.textContent.replace(We, '')))
                }
                return this
            }
        }),
        ie.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function(e, t) {
            ie.fn[e] = function(e) {
                for (var n, i = [], r = ie(e), o = r.length - 1, s = 0; s <= o; s++)
                    n = s === o ? this : this.clone(!0),
                    ie(r[s])[t](n),
                    G.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ye, Be = {}, ze = /^margin/, _e = new RegExp('^(' + Ee + ')(?!px)[a-z%]+$','i'), Ue = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
        };
        !function() {
            function e() {
                s.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute',
                s.innerHTML = '',
                r.appendChild(o);
                var e = n.getComputedStyle(s, null);
                t = '1%' !== e.top,
                i = '4px' === e.width,
                r.removeChild(o)
            }
            var t, i, r = te.documentElement, o = te.createElement('div'), s = te.createElement('div');
            s.style && (s.style.backgroundClip = 'content-box',
            s.cloneNode(!0).style.backgroundClip = '',
            ee.clearCloneStyle = 'content-box' === s.style.backgroundClip,
            o.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute',
            o.appendChild(s),
            n.getComputedStyle && ie.extend(ee, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return null == i && e(),
                    i
                },
                reliableMarginRight: function() {
                    var e, t = s.appendChild(te.createElement('div'));
                    return t.style.cssText = s.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0',
                    t.style.marginRight = t.style.width = '0',
                    s.style.width = '1px',
                    r.appendChild(o),
                    e = !parseFloat(n.getComputedStyle(t, null).marginRight),
                    r.removeChild(o),
                    s.removeChild(t),
                    e
                }
            }))
        }(),
        ie.swap = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)
                e.style[o] = s[o];
            return r
        }
        ;
        var Ve = /^(none|table(?!-c[ea]).+)/
          , Ge = new RegExp('^(' + Ee + ')(.*)$','i')
          , Je = new RegExp('^([+-])=(' + Ee + ')','i')
          , Qe = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }
          , Ke = {
            letterSpacing: '0',
            fontWeight: '400'
        }
          , Ze = ['Webkit', 'O', 'Moz', 'ms'];
        ie.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = E(e, 'opacity');
                            return '' === n ? '1' : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: 'cssFloat'
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = ie.camelCase(t), c = e.style;
                    return t = ie.cssProps[a] || (ie.cssProps[a] = N(c, a)),
                    s = ie.cssHooks[t] || ie.cssHooks[a],
                    void 0 === n ? s && 'get'in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : (o = typeof n,
                    'string' === o && (r = Je.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ie.css(e, t)),
                    o = 'number'),
                    null != n && n === n && ('number' !== o || ie.cssNumber[a] || (n += 'px'),
                    ee.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (c[t] = 'inherit'),
                    s && 'set'in s && void 0 === (n = s.set(e, n, i)) || (c[t] = n)),
                    void 0)
                }
            },
            css: function(e, t, n, i) {
                var r, o, s, a = ie.camelCase(t);
                return t = ie.cssProps[a] || (ie.cssProps[a] = N(e.style, a)),
                s = ie.cssHooks[t] || ie.cssHooks[a],
                s && 'get'in s && (r = s.get(e, !0, n)),
                void 0 === r && (r = E(e, t, i)),
                'normal' === r && t in Ke && (r = Ke[t]),
                '' === n || n ? (o = parseFloat(r),
                n === !0 || ie.isNumeric(o) ? o || 0 : r) : r
            }
        }),
        ie.each(['height', 'width'], function(e, t) {
            ie.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return Ve.test(ie.css(e, 'display')) && 0 === e.offsetWidth ? ie.swap(e, Qe, function() {
                            return A(e, t, i)
                        }) : A(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && Ue(e);
                    return j(e, n, i ? D(e, t, i, 'border-box' === ie.css(e, 'boxSizing', !1, r), r) : 0)
                }
            }
        }),
        ie.cssHooks.marginRight = S(ee.reliableMarginRight, function(e, t) {
            if (t)
                return ie.swap(e, {
                    display: 'inline-block'
                }, E, [e, 'marginRight'])
        }),
        ie.each({
            margin: '',
            padding: '',
            border: 'Width'
        }, function(e, t) {
            ie.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
                        r[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            },
            ze.test(e) || (ie.cssHooks[e + t].set = j)
        }),
        ie.fn.extend({
            css: function(e, t) {
                return be(this, function(e, t, n) {
                    var i, r, o = {}, s = 0;
                    if (ie.isArray(t)) {
                        for (i = Ue(e),
                        r = t.length; s < r; s++)
                            o[t[s]] = ie.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ne(this) ? ie(this).show() : ie(this).hide()
                })
            }
        }),
        ie.Tween = F,
        F.prototype = {
            constructor: F,
            init: function(e, t, n, i, r, o) {
                this.elem = e,
                this.prop = n,
                this.easing = r || 'swing',
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = o || (ie.cssNumber[n] ? '' : 'px')
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : F.propHooks._default.set(this),
                this
            }
        },
        F.prototype.init.prototype = F.prototype,
        F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ''),
                    t && 'auto' !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ie.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        ie.fx = F.prototype.init,
        ie.fx.step = {};
        var et, tt, nt = /^(?:toggle|show|hide)$/, it = new RegExp('^(?:([+-])=|)(' + Ee + ')([a-z%]*)$','i'), rt = /queueHooks$/, ot = [H], st = {
            '*': [function(e, t) {
                var n = this.createTween(e, t)
                  , i = n.cur()
                  , r = it.exec(t)
                  , o = r && r[3] || (ie.cssNumber[e] ? '' : 'px')
                  , s = (ie.cssNumber[e] || 'px' !== o && +i) && it.exec(ie.css(n.elem, e))
                  , a = 1
                  , c = 20;
                if (s && s[3] !== o) {
                    o = o || s[3],
                    r = r || [],
                    s = +i || 1;
                    do
                        a = a || '.5',
                        s /= a,
                        ie.style(n.elem, e, s + o);
                    while (a !== (a = n.cur() / i) && 1 !== a && --c)
                }
                return r && (s = n.start = +s || +i || 0,
                n.unit = o,
                n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
                n
            }
            ]
        };
        ie.Animation = ie.extend(R, {
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e,
                e = ['*']) : e = e.split(' ');
                for (var n, i = 0, r = e.length; i < r; i++)
                    n = e[i],
                    st[n] = st[n] || [],
                    st[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? ot.unshift(e) : ot.push(e)
            }
        }),
        ie.speed = function(e, t, n) {
            var i = e && 'object' == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return i.duration = ie.fx.off ? 0 : 'number' == typeof i.duration ? i.duration : i.duration in ie.fx.speeds ? ie.fx.speeds[i.duration] : ie.fx.speeds._default,
            null != i.queue && i.queue !== !0 || (i.queue = 'fx'),
            i.old = i.complete,
            i.complete = function() {
                ie.isFunction(i.old) && i.old.call(this),
                i.queue && ie.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        ie.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ne).css('opacity', 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ie.isEmptyObject(e)
                  , o = ie.speed(t, n, i)
                  , s = function() {
                    var t = R(this, ie.extend({}, e), o);
                    (r || we.get(this, 'finish')) && t.stop(!0)
                };
                return s.finish = s,
                r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return 'string' != typeof e && (n = t,
                t = e,
                e = void 0),
                t && e !== !1 && this.queue(e || 'fx', []),
                this.each(function() {
                    var t = !0
                      , r = null != e && e + 'queueHooks'
                      , o = ie.timers
                      , s = we.get(this);
                    if (r)
                        s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s)
                            s[r] && s[r].stop && rt.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                        o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                        t = !1,
                        o.splice(r, 1));
                    !t && n || ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || 'fx'),
                this.each(function() {
                    var t, n = we.get(this), i = n[e + 'queue'], r = n[e + 'queueHooks'], o = ie.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                    ie.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length; t--; )
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                        o.splice(t, 1));
                    for (t = 0; t < s; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ie.each(['toggle', 'show', 'hide'], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, i, r) {
                return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
            }
        }),
        ie.each({
            slideDown: q('show'),
            slideUp: q('hide'),
            slideToggle: q('toggle'),
            fadeIn: {
                opacity: 'show'
            },
            fadeOut: {
                opacity: 'hide'
            },
            fadeToggle: {
                opacity: 'toggle'
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        ie.timers = [],
        ie.fx.tick = function() {
            var e, t = 0, n = ie.timers;
            for (et = ie.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || ie.fx.stop(),
            et = void 0
        }
        ,
        ie.fx.timer = function(e) {
            ie.timers.push(e),
            e() ? ie.fx.start() : ie.timers.pop()
        }
        ,
        ie.fx.interval = 13,
        ie.fx.start = function() {
            tt || (tt = setInterval(ie.fx.tick, ie.fx.interval))
        }
        ,
        ie.fx.stop = function() {
            clearInterval(tt),
            tt = null
        }
        ,
        ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e,
            t = t || 'fx',
            this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        }
        ,
        function() {
            var e = te.createElement('input')
              , t = te.createElement('select')
              , n = t.appendChild(te.createElement('option'));
            e.type = 'checkbox',
            ee.checkOn = '' !== e.value,
            ee.optSelected = n.selected,
            t.disabled = !0,
            ee.optDisabled = !n.disabled,
            e = te.createElement('input'),
            e.value = 't',
            e.type = 'radio',
            ee.radioValue = 't' === e.value
        }();
        var at, ct, lt = ie.expr.attrHandle;
        ie.fn.extend({
            attr: function(e, t) {
                return be(this, ie.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ie.removeAttr(this, e)
                })
            }
        }),
        ie.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === De ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(),
                    i = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? ct : at)),
                    void 0 === n ? i && 'get'in i && null !== (r = i.get(e, t)) ? r : (r = ie.find.attr(e, t),
                    null == r ? void 0 : r) : null !== n ? i && 'set'in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''),
                    n) : void ie.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0, o = t && t.match(ve);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++]; )
                        i = ie.propFix[n] || n,
                        ie.expr.match.bool.test(n) && (e[i] = !1),
                        e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ee.radioValue && 'radio' === t && ie.nodeName(e, 'input')) {
                            var n = e.value;
                            return e.setAttribute('type', t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            }
        }),
        ct = {
            set: function(e, t, n) {
                return t === !1 ? ie.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = lt[t] || ie.find.attr;
            lt[t] = function(e, t, i) {
                var r, o;
                return i || (o = lt[t],
                lt[t] = r,
                r = null != n(e, t, i) ? t.toLowerCase() : null,
                lt[t] = o),
                r
            }
        });
        var ut = /^(?:input|select|textarea|button)$/i;
        ie.fn.extend({
            prop: function(e, t) {
                return be(this, ie.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ie.propFix[e] || e]
                })
            }
        }),
        ie.extend({
            propFix: {
                for: 'htmlFor',
                class: 'className'
            },
            prop: function(e, t, n) {
                var i, r, o, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return o = 1 !== s || !ie.isXMLDoc(e),
                    o && (t = ie.propFix[t] || t,
                    r = ie.propHooks[t]),
                    void 0 !== n ? r && 'set'in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && 'get'in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute('tabindex') || ut.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }),
        ee.optSelected || (ie.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            }
        }),
        ie.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function() {
            ie.propFix[this.toLowerCase()] = this
        });
        var pt = /[\t\r\n\f]/g;
        ie.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a = 'string' == typeof e && e, c = 0, l = this.length;
                if (ie.isFunction(e))
                    return this.each(function(t) {
                        ie(this).addClass(e.call(this, t, this.className))
                    });
                if (a)
                    for (t = (e || '').match(ve) || []; c < l; c++)
                        if (n = this[c],
                        i = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(pt, ' ') : ' ')) {
                            for (o = 0; r = t[o++]; )
                                i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
                            s = ie.trim(i),
                            n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a = 0 === arguments.length || 'string' == typeof e && e, c = 0, l = this.length;
                if (ie.isFunction(e))
                    return this.each(function(t) {
                        ie(this).removeClass(e.call(this, t, this.className))
                    });
                if (a)
                    for (t = (e || '').match(ve) || []; c < l; c++)
                        if (n = this[c],
                        i = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(pt, ' ') : '')) {
                            for (o = 0; r = t[o++]; )
                                for (; i.indexOf(' ' + r + ' ') >= 0; )
                                    i = i.replace(' ' + r + ' ', ' ');
                            s = e ? ie.trim(i) : '',
                            n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                    ie(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ('string' === n)
                        for (var t, i = 0, r = ie(this), o = e.match(ve) || []; t = o[i++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        n !== De && 'boolean' !== n || (this.className && we.set(this, '__className__', this.className),
                        this.className = this.className || e === !1 ? '' : we.get(this, '__className__') || '')
                })
            },
            hasClass: function(e) {
                for (var t = ' ' + e + ' ', n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(pt, ' ').indexOf(t) >= 0)
                        return !0;
                return !1
            }
        });
        var ft = /\r/g;
        ie.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)
                        return i = ie.isFunction(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? e.call(this, n, ie(this).val()) : e,
                            null == r ? r = '' : 'number' == typeof r ? r += '' : ie.isArray(r) && (r = ie.map(r, function(e) {
                                return null == e ? '' : e + ''
                            })),
                            t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()],
                            t && 'set'in t && void 0 !== t.set(this, r, 'value') || (this.value = r))
                        });
                    if (r)
                        return t = ie.valHooks[r.type] || ie.valHooks[r.nodeName.toLowerCase()],
                        t && 'get'in t && void 0 !== (n = t.get(r, 'value')) ? n : (n = r.value,
                        'string' == typeof n ? n.replace(ft, '') : null == n ? '' : n)
                }
            }
        }),
        ie.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ie.find.attr(e, 'value');
                        return null != t ? t : ie.trim(ie.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = 'select-one' === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, c = r < 0 ? a : o ? r : 0; c < a; c++)
                            if (n = i[c],
                            (n.selected || c === r) && (ee.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, 'optgroup'))) {
                                if (t = ie(n).val(),
                                o)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ie.makeArray(t), s = r.length; s--; )
                            i = r[s],
                            (i.selected = ie.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        ie.each(['radio', 'checkbox'], function() {
            ie.valHooks[this] = {
                set: function(e, t) {
                    if (ie.isArray(t))
                        return e.checked = ie.inArray(ie(e).val(), t) >= 0
                }
            },
            ee.checkOn || (ie.valHooks[this].get = function(e) {
                return null === e.getAttribute('value') ? 'on' : e.value
            }
            )
        }),
        ie.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function(e, t) {
            ie.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ie.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n)
            }
        });
        var ht = ie.now()
          , dt = /\?/;
        ie.parseJSON = function(e) {
            return JSON.parse(e + '')
        }
        ,
        ie.parseXML = function(e) {
            var t, n;
            if (!e || 'string' != typeof e)
                return null;
            try {
                n = new DOMParser,
                t = n.parseFromString(e, 'text/xml')
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName('parsererror').length || ie.error('Invalid XML: ' + e),
            t
        }
        ;
        var mt = /#.*$/
          , gt = /([?&])_=[^&]*/
          , vt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , xt = /^(?:GET|HEAD)$/
          , bt = /^\/\//
          , wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
          , Tt = {}
          , Ct = {}
          , kt = '*/'.concat('*')
          , Et = n.location.href
          , St = wt.exec(Et.toLowerCase()) || [];
        ie.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et,
                type: 'GET',
                isLocal: yt.test(St[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': kt,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript'
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON'
                },
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': ie.parseJSON,
                    'text xml': ie.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e)
            },
            ajaxPrefilter: X(Tt),
            ajaxTransport: X(Ct),
            ajax: function(e, t) {
                function n(e, t, n, s) {
                    var c, u, v, y, b, T = t;
                    2 !== x && (x = 2,
                    a && clearTimeout(a),
                    i = void 0,
                    o = s || '',
                    w.readyState = e > 0 ? 4 : 0,
                    c = e >= 200 && e < 300 || 304 === e,
                    n && (y = I(p, w, n)),
                    y = Y(p, y, w, c),
                    c ? (p.ifModified && (b = w.getResponseHeader('Last-Modified'),
                    b && (ie.lastModified[r] = b),
                    b = w.getResponseHeader('etag'),
                    b && (ie.etag[r] = b)),
                    204 === e || 'HEAD' === p.type ? T = 'nocontent' : 304 === e ? T = 'notmodified' : (T = y.state,
                    u = y.data,
                    v = y.error,
                    c = !v)) : (v = T,
                    !e && T || (T = 'error',
                    e < 0 && (e = 0))),
                    w.status = e,
                    w.statusText = (t || T) + '',
                    c ? d.resolveWith(f, [u, T, w]) : d.rejectWith(f, [w, T, v]),
                    w.statusCode(g),
                    g = void 0,
                    l && h.trigger(c ? 'ajaxSuccess' : 'ajaxError', [w, p, c ? u : v]),
                    m.fireWith(f, [w, T]),
                    l && (h.trigger('ajaxComplete', [w, p]),
                    --ie.active || ie.event.trigger('ajaxStop')))
                }
                'object' == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var i, r, o, s, a, c, l, u, p = ie.ajaxSetup({}, t), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? ie(f) : ie.event, d = ie.Deferred(), m = ie.Callbacks('once memory'), g = p.statusCode || {}, v = {}, y = {}, x = 0, b = 'canceled', w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = vt.exec(o); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e,
                        v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e)
                                    g[t] = [g[t], e[t]];
                            else
                                w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return i && i.abort(t),
                        n(0, t),
                        this
                    }
                };
                if (d.promise(w).complete = m.add,
                w.success = w.done,
                w.error = w.fail,
                p.url = ((e || p.url || Et) + '').replace(mt, '').replace(bt, St[1] + '//'),
                p.type = t.method || t.type || p.method || p.type,
                p.dataTypes = ie.trim(p.dataType || '*').toLowerCase().match(ve) || [''],
                null == p.crossDomain && (c = wt.exec(p.url.toLowerCase()),
                p.crossDomain = !(!c || c[1] === St[1] && c[2] === St[2] && (c[3] || ('http:' === c[1] ? '80' : '443')) === (St[3] || ('http:' === St[1] ? '80' : '443')))),
                p.data && p.processData && 'string' != typeof p.data && (p.data = ie.param(p.data, p.traditional)),
                $(Tt, p, t, w),
                2 === x)
                    return w;
                l = ie.event && p.global,
                l && 0 === ie.active++ && ie.event.trigger('ajaxStart'),
                p.type = p.type.toUpperCase(),
                p.hasContent = !xt.test(p.type),
                r = p.url,
                p.hasContent || (p.data && (r = p.url += (dt.test(r) ? '&' : '?') + p.data,
                delete p.data),
                p.cache === !1 && (p.url = gt.test(r) ? r.replace(gt, '$1_=' + ht++) : r + (dt.test(r) ? '&' : '?') + '_=' + ht++)),
                p.ifModified && (ie.lastModified[r] && w.setRequestHeader('If-Modified-Since', ie.lastModified[r]),
                ie.etag[r] && w.setRequestHeader('If-None-Match', ie.etag[r])),
                (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader('Content-Type', p.contentType),
                w.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + kt + '; q=0.01' : '') : p.accepts['*']);
                for (u in p.headers)
                    w.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === x))
                    return w.abort();
                b = 'abort';
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[u](p[u]);
                if (i = $(Ct, p, t, w)) {
                    w.readyState = 1,
                    l && h.trigger('ajaxSend', [w, p]),
                    p.async && p.timeout > 0 && (a = setTimeout(function() {
                        w.abort('timeout')
                    }, p.timeout));
                    try {
                        x = 1,
                        i.send(v, n)
                    } catch (e) {
                        if (!(x < 2))
                            throw e;
                        n(-1, e)
                    }
                } else
                    n(-1, 'No Transport');
                return w
            },
            getJSON: function(e, t, n) {
                return ie.get(e, t, n, 'json')
            },
            getScript: function(e, t) {
                return ie.get(e, void 0, t, 'script')
            }
        }),
        ie.each(['get', 'post'], function(e, t) {
            ie[t] = function(e, n, i, r) {
                return ie.isFunction(n) && (r = r || i,
                i = n,
                n = void 0),
                ie.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }),
        ie._evalUrl = function(e) {
            return ie.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        ie.fn.extend({
            wrapAll: function(e) {
                var t;
                return ie.isFunction(e) ? this.each(function(t) {
                    ie(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this)
            },
            wrapInner: function(e) {
                return ie.isFunction(e) ? this.each(function(t) {
                    ie(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ie(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ie.isFunction(e);
                return this.each(function(n) {
                    ie(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ie.nodeName(this, 'body') || ie(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        ie.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }
        ,
        ie.expr.filters.visible = function(e) {
            return !ie.expr.filters.hidden(e)
        }
        ;
        var Nt = /%20/g
          , jt = /\[\]$/
          , Dt = /\r?\n/g
          , At = /^(?:submit|button|image|reset|file)$/i
          , Lt = /^(?:input|select|textarea|keygen)/i;
        ie.param = function(e, t) {
            var n, i = [], r = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? '' : t,
                i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional),
            ie.isArray(e) || e.jquery && !ie.isPlainObject(e))
                ie.each(e, function() {
                    r(this.name, this.value)
                });
            else
                for (n in e)
                    B(n, e[n], t, r);
            return i.join('&').replace(Nt, '+')
        }
        ,
        ie.fn.extend({
            serialize: function() {
                return ie.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ie.prop(this, 'elements');
                    return e ? ie.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ie(this).is(':disabled') && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !je.test(e))
                }).map(function(e, t) {
                    var n = ie(this).val();
                    return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, '\r\n')
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Dt, '\r\n')
                    }
                }).get()
            }
        }),
        ie.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Ft = 0
          , Mt = {}
          , qt = {
            0: 200,
            1223: 204
        }
          , Ot = ie.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent('onunload', function() {
            for (var e in Mt)
                Mt[e]()
        }),
        ee.cors = !!Ot && 'withCredentials'in Ot,
        ee.ajax = Ot = !!Ot,
        ie.ajaxTransport(function(e) {
            var t;
            if (ee.cors || Ot && !e.crossDomain)
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(), s = ++Ft;
                        if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (r in e.xhrFields)
                                o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
                        for (r in n)
                            o.setRequestHeader(r, n[r]);
                        t = function(e) {
                            return function() {
                                t && (delete Mt[s],
                                t = o.onload = o.onerror = null,
                                'abort' === e ? o.abort() : 'error' === e ? i(o.status, o.statusText) : i(qt[o.status] || o.status, o.statusText, 'string' == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }
                        ,
                        o.onload = t(),
                        o.onerror = t('error'),
                        t = Mt[s] = t('abort');
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        ie.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                'text script': function(e) {
                    return ie.globalEval(e),
                    e
                }
            }
        }),
        ie.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET')
        }),
        ie.ajaxTransport('script', function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = ie('<script>').prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on('load error', n = function(e) {
                            t.remove(),
                            n = null,
                            e && r('error' === e.type ? 404 : 200, e.type)
                        }
                        ),
                        te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ht = []
          , Pt = /(=)\?(?=&|$)|\?\?/;
        ie.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function() {
                var e = Ht.pop() || ie.expando + '_' + ht++;
                return this[e] = !0,
                e
            }
        }),
        ie.ajaxPrefilter('json jsonp', function(e, t, i) {
            var r, o, s, a = e.jsonp !== !1 && (Pt.test(e.url) ? 'url' : 'string' == typeof e.data && !(e.contentType || '').indexOf('application/x-www-form-urlencoded') && Pt.test(e.data) && 'data');
            if (a || 'jsonp' === e.dataTypes[0])
                return r = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Pt, '$1' + r) : e.jsonp !== !1 && (e.url += (dt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                e.converters['script json'] = function() {
                    return s || ie.error(r + ' was not called'),
                    s[0]
                }
                ,
                e.dataTypes[0] = 'json',
                o = n[r],
                n[r] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    n[r] = o,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                    Ht.push(r)),
                    s && ie.isFunction(o) && o(s[0]),
                    s = o = void 0
                }),
                'script'
        }),
        ie.parseHTML = function(e, t, n) {
            if (!e || 'string' != typeof e)
                return null;
            'boolean' == typeof t && (n = t,
            t = !1),
            t = t || te;
            var i = ue.exec(e)
              , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ie.buildFragment([e], t, r),
            r && r.length && ie(r).remove(),
            ie.merge([], i.childNodes))
        }
        ;
        var Rt = ie.fn.load;
        ie.fn.load = function(e, t, n) {
            if ('string' != typeof e && Rt)
                return Rt.apply(this, arguments);
            var i, r, o, s = this, a = e.indexOf(' ');
            return a >= 0 && (i = ie.trim(e.slice(a)),
            e = e.slice(0, a)),
            ie.isFunction(t) ? (n = t,
            t = void 0) : t && 'object' == typeof t && (r = 'POST'),
            s.length > 0 && ie.ajax({
                url: e,
                type: r,
                dataType: 'html',
                data: t
            }).done(function(e) {
                o = arguments,
                s.html(i ? ie('<div>').append(ie.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                s.each(n, o || [e.responseText, t, e])
            }
            ),
            this
        }
        ,
        ie.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
            ie.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ie.expr.filters.animated = function(e) {
            return ie.grep(ie.timers, function(t) {
                return e === t.elem
            }).length
        }
        ;
        var Xt = n.document.documentElement;
        ie.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, c, l, u = ie.css(e, 'position'), p = ie(e), f = {};
                'static' === u && (e.style.position = 'relative'),
                a = p.offset(),
                o = ie.css(e, 'top'),
                c = ie.css(e, 'left'),
                l = ('absolute' === u || 'fixed' === u) && (o + c).indexOf('auto') > -1,
                l ? (i = p.position(),
                s = i.top,
                r = i.left) : (s = parseFloat(o) || 0,
                r = parseFloat(c) || 0),
                ie.isFunction(t) && (t = t.call(e, n, a)),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + r),
                'using'in t ? t.using.call(e, f) : p.css(f)
            }
        },
        ie.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        ie.offset.setOffset(this, e, t)
                    });
                var t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                }, o = i && i.ownerDocument;
                if (o)
                    return t = o.documentElement,
                    ie.contains(t, i) ? (typeof i.getBoundingClientRect !== De && (r = i.getBoundingClientRect()),
                    n = z(o),
                    {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    return 'fixed' === ie.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    ie.nodeName(e[0], 'html') || (i = e.offset()),
                    i.top += ie.css(e[0], 'borderTopWidth', !0),
                    i.left += ie.css(e[0], 'borderLeftWidth', !0)),
                    {
                        top: t.top - i.top - ie.css(n, 'marginTop', !0),
                        left: t.left - i.left - ie.css(n, 'marginLeft', !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Xt; e && !ie.nodeName(e, 'html') && 'static' === ie.css(e, 'position'); )
                        e = e.offsetParent;
                    return e || Xt
                })
            }
        }),
        ie.each({
            scrollLeft: 'pageXOffset',
            scrollTop: 'pageYOffset'
        }, function(e, t) {
            var i = 'pageYOffset' === t;
            ie.fn[e] = function(r) {
                return be(this, function(e, r, o) {
                    var s = z(e);
                    return void 0 === o ? s ? s[t] : e[r] : void (s ? s.scrollTo(i ? n.pageXOffset : o, i ? o : n.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }),
        ie.each(['top', 'left'], function(e, t) {
            ie.cssHooks[t] = S(ee.pixelPosition, function(e, n) {
                if (n)
                    return n = E(e, t),
                    _e.test(n) ? ie(e).position()[t] + 'px' : n
            })
        }),
        ie.each({
            Height: 'height',
            Width: 'width'
        }, function(e, t) {
            ie.each({
                padding: 'inner' + e,
                content: t,
                '': 'outer' + e
            }, function(n, i) {
                ie.fn[i] = function(i, r) {
                    var o = arguments.length && (n || 'boolean' != typeof i)
                      , s = n || (i === !0 || r === !0 ? 'margin' : 'border');
                    return be(this, function(t, n, i) {
                        var r;
                        return ie.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (r = t.documentElement,
                        Math.max(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e])) : void 0 === i ? ie.css(t, n, s) : ie.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }),
        ie.fn.size = function() {
            return this.length
        }
        ,
        ie.fn.andSelf = ie.fn.addBack,
        i = [],
        r = function() {
            return ie
        }
        .apply(t, i),
        !(void 0 !== r && (e.exports = r));
        var $t = n.jQuery
          , Wt = n.$;
        return ie.noConflict = function(e) {
            return n.$ === ie && (n.$ = Wt),
            e && n.jQuery === ie && (n.jQuery = $t),
            ie
        }
        ,
        typeof o === De && (n.jQuery = n.$ = ie),
        ie
    })
}
, function(e, t, n) {
    var i;
    !function() {
        'use strict';
        function r(e, t) {
            function n(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            var i;
            if (t = t || {},
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            this.targetElement = null,
            this.touchStartX = 0,
            this.touchStartY = 0,
            this.lastTouchIdentifier = 0,
            this.touchBoundary = t.touchBoundary || 10,
            this.layer = e,
            this.tapDelay = t.tapDelay || 200,
            this.tapTimeout = t.tapTimeout || 700,
            !r.notNeeded(e)) {
                for (var o = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'], a = this, c = 0, l = o.length; c < l; c++)
                    a[o[c]] = n(a[o[c]], a);
                s && (e.addEventListener('mouseover', this.onMouse, !0),
                e.addEventListener('mousedown', this.onMouse, !0),
                e.addEventListener('mouseup', this.onMouse, !0)),
                e.addEventListener('click', this.onClick, !0),
                e.addEventListener('touchstart', this.onTouchStart, !1),
                e.addEventListener('touchmove', this.onTouchMove, !1),
                e.addEventListener('touchend', this.onTouchEnd, !1),
                e.addEventListener('touchcancel', this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
                    var r = Node.prototype.removeEventListener;
                    'click' === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
                }
                ,
                e.addEventListener = function(t, n, i) {
                    var r = Node.prototype.addEventListener;
                    'click' === t ? r.call(e, t, n.hijacked || (n.hijacked = function(e) {
                        e.propagationStopped || n(e)
                    }
                    ), i) : r.call(e, t, n, i)
                }
                ),
                'function' == typeof e.onclick && (i = e.onclick,
                e.addEventListener('click', function(e) {
                    i(e)
                }, !1),
                e.onclick = null)
            }
        }
        var o = navigator.userAgent.indexOf('Windows Phone') >= 0
          , s = navigator.userAgent.indexOf('Android') > 0 && !o
          , a = /iP(ad|hone|od)/.test(navigator.userAgent) && !o
          , c = a && /OS 4_\d(_\d)?/.test(navigator.userAgent)
          , l = a && /OS [6-7]_\d/.test(navigator.userAgent)
          , u = navigator.userAgent.indexOf('BB10') > 0;
        r.prototype.needsClick = function(e) {
            switch (e.nodeName.toLowerCase()) {
            case 'button':
            case 'select':
            case 'textarea':
                if (e.disabled)
                    return !0;
                break;
            case 'input':
                if (a && 'file' === e.type || e.disabled)
                    return !0;
                break;
            case 'label':
            case 'iframe':
            case 'video':
                return !0
            }
            return /\bneedsclick\b/.test(e.className)
        }
        ,
        r.prototype.needsFocus = function(e) {
            switch (e.nodeName.toLowerCase()) {
            case 'textarea':
                return !0;
            case 'select':
                return !s;
            case 'input':
                switch (e.type) {
                case 'button':
                case 'checkbox':
                case 'file':
                case 'image':
                case 'radio':
                case 'submit':
                    return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
            }
        }
        ,
        r.prototype.sendClick = function(e, t) {
            var n, i;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(),
            i = t.changedTouches[0],
            n = document.createEvent('MouseEvents'),
            n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
            n.forwardedTouchEvent = !0,
            e.dispatchEvent(n)
        }
        ,
        r.prototype.determineEventType = function(e) {
            return s && 'select' === e.tagName.toLowerCase() ? 'mousedown' : 'click'
        }
        ,
        r.prototype.focus = function(e) {
            var t;
            a && e.setSelectionRange && 0 !== e.type.indexOf('date') && 'time' !== e.type && 'month' !== e.type ? (t = e.value.length,
            e.setSelectionRange(t, t)) : e.focus()
        }
        ,
        r.prototype.updateScrollParent = function(e) {
            var t, n;
            if (t = e.fastClickScrollParent,
            !t || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n,
                        e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        }
        ,
        r.prototype.getTargetElementFromEventTarget = function(e) {
            return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
        }
        ,
        r.prototype.onTouchStart = function(e) {
            var t, n, i;
            if (e.targetTouches.length > 1)
                return !0;
            if (t = this.getTargetElementFromEventTarget(e.target),
            n = e.targetTouches[0],
            a) {
                if (i = window.getSelection(),
                i.rangeCount && !i.isCollapsed)
                    return !0;
                if (!c) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier)
                        return e.preventDefault(),
                        !1;
                    this.lastTouchIdentifier = n.identifier,
                    this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0,
            this.trackingClickStart = e.timeStamp,
            this.targetElement = t,
            this.touchStartX = n.pageX,
            this.touchStartY = n.pageY,
            e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
            !0
        }
        ,
        r.prototype.touchHasMoved = function(e) {
            var t = e.changedTouches[0]
              , n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
        }
        ,
        r.prototype.onTouchMove = function(e) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
            this.targetElement = null),
            !0)
        }
        ,
        r.prototype.findControl = function(e) {
            return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea')
        }
        ,
        r.prototype.onTouchEnd = function(e) {
            var t, n, i, r, o, u = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (e.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0,
                !0;
            if (e.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1,
            this.lastClickTime = e.timeStamp,
            n = this.trackingClickStart,
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            l && (o = e.changedTouches[0],
            u = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || u,
            u.fastClickScrollParent = this.targetElement.fastClickScrollParent),
            i = u.tagName.toLowerCase(),
            'label' === i) {
                if (t = this.findControl(u)) {
                    if (this.focus(u),
                    s)
                        return !1;
                    u = t
                }
            } else if (this.needsFocus(u))
                return e.timeStamp - n > 100 || a && window.top !== window && 'input' === i ? (this.targetElement = null,
                !1) : (this.focus(u),
                this.sendClick(u, e),
                a && 'select' === i || (this.targetElement = null,
                e.preventDefault()),
                !1);
            return !(!a || c || (r = u.fastClickScrollParent,
            !r || r.fastClickLastScrollTop === r.scrollTop)) || (this.needsClick(u) || (e.preventDefault(),
            this.sendClick(u, e)),
            !1)
        }
        ,
        r.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        }
        ,
        r.prototype.onMouse = function(e) {
            return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
            e.stopPropagation(),
            e.preventDefault(),
            !1))))
        }
        ,
        r.prototype.onClick = function(e) {
            var t;
            return this.trackingClick ? (this.targetElement = null,
            this.trackingClick = !1,
            !0) : 'submit' === e.target.type && 0 === e.detail || (t = this.onMouse(e),
            t || (this.targetElement = null),
            t)
        }
        ,
        r.prototype.destroy = function() {
            var e = this.layer;
            s && (e.removeEventListener('mouseover', this.onMouse, !0),
            e.removeEventListener('mousedown', this.onMouse, !0),
            e.removeEventListener('mouseup', this.onMouse, !0)),
            e.removeEventListener('click', this.onClick, !0),
            e.removeEventListener('touchstart', this.onTouchStart, !1),
            e.removeEventListener('touchmove', this.onTouchMove, !1),
            e.removeEventListener('touchend', this.onTouchEnd, !1),
            e.removeEventListener('touchcancel', this.onTouchCancel, !1)
        }
        ,
        r.notNeeded = function(e) {
            var t, n, i, r;
            if ('undefined' == typeof window.ontouchstart)
                return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!s)
                    return !0;
                if (t = document.querySelector('meta[name=viewport]')) {
                    if (t.content.indexOf('user-scalable=no') !== -1)
                        return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
            if (u && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
            i[1] >= 10 && i[2] >= 3 && (t = document.querySelector('meta[name=viewport]')))) {
                if (t.content.indexOf('user-scalable=no') !== -1)
                    return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
            return 'none' === e.style.msTouchAction || 'manipulation' === e.style.touchAction || (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
            !!(r >= 27 && (t = document.querySelector('meta[name=viewport]'),
            t && (t.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ('none' === e.style.touchAction || 'manipulation' === e.style.touchAction));
        }
        ,
        r.attach = function(e, t) {
            return new r(e,t)
        }
        ,
        i = function() {
            return r
        }
        .call(t, n, t, e),
        !(void 0 !== i && (e.exports = i))
    }()
}
, function(e, t, n) {
    (function(e) {
        !function(e, t, n, i) {
            'use strict';
            function r(t, n) {
                this.element = t,
                this.$context = e(t).data('api', this),
                this.$layers = this.$context.find('.layer');
                var i = {
                    calibrateX: this.$context.data('calibrate-x') || null,
                    calibrateY: this.$context.data('calibrate-y') || null,
                    invertX: this.$context.data('invert-x') || null,
                    invertY: this.$context.data('invert-y') || null,
                    limitX: parseFloat(this.$context.data('limit-x')) || null,
                    limitY: parseFloat(this.$context.data('limit-y')) || null,
                    scalarX: parseFloat(this.$context.data('scalar-x')) || null,
                    scalarY: parseFloat(this.$context.data('scalar-y')) || null,
                    frictionX: parseFloat(this.$context.data('friction-x')) || null,
                    frictionY: parseFloat(this.$context.data('friction-y')) || null,
                    originX: parseFloat(this.$context.data('origin-x')) || null,
                    originY: parseFloat(this.$context.data('origin-y')) || null
                };
                for (var r in i)
                    null === i[r] && delete i[r];
                e.extend(this, a, n, i),
                this.calibrationTimer = null,
                this.calibrationFlag = !0,
                this.enabled = !1,
                this.depths = [],
                this.raf = null,
                this.bounds = null,
                this.ex = 0,
                this.ey = 0,
                this.ew = 0,
                this.eh = 0,
                this.ecx = 0,
                this.ecy = 0,
                this.erx = 0,
                this.ery = 0,
                this.cx = 0,
                this.cy = 0,
                this.ix = 0,
                this.iy = 0,
                this.mx = 0,
                this.my = 0,
                this.vx = 0,
                this.vy = 0,
                this.onMouseMove = this.onMouseMove.bind(this),
                this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
                this.onOrientationTimer = this.onOrientationTimer.bind(this),
                this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
                this.onAnimationFrame = this.onAnimationFrame.bind(this),
                this.onWindowResize = this.onWindowResize.bind(this),
                this.initialise()
            }
            var o = 'parallax'
              , s = 30
              , a = {
                relativeInput: !1,
                clipRelativeInput: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5
            };
            r.prototype.transformSupport = function(e) {
                for (var r = n.createElement('div'), o = !1, s = null, a = !1, c = null, l = null, u = 0, p = this.vendors.length; u < p; u++)
                    if (null !== this.vendors[u] ? (c = this.vendors[u][0] + 'transform',
                    l = this.vendors[u][1] + 'Transform') : (c = 'transform',
                    l = 'transform'),
                    r.style[l] !== i) {
                        o = !0;
                        break
                    }
                switch (e) {
                case '2D':
                    a = o;
                    break;
                case '3D':
                    if (o) {
                        var f = n.body || n.createElement('body')
                          , h = n.documentElement
                          , d = h.style.overflow;
                        n.body || (h.style.overflow = 'hidden',
                        h.appendChild(f),
                        f.style.overflow = 'hidden',
                        f.style.background = ''),
                        f.appendChild(r),
                        r.style[l] = 'translate3d(1px,1px,1px)',
                        s = t.getComputedStyle(r).getPropertyValue(c),
                        a = s !== i && s.length > 0 && 'none' !== s,
                        h.style.overflow = d,
                        f.removeChild(r)
                    }
                }
                return a
            }
            ,
            r.prototype.ww = null,
            r.prototype.wh = null,
            r.prototype.wcx = null,
            r.prototype.wcy = null,
            r.prototype.wrx = null,
            r.prototype.wry = null,
            r.prototype.portrait = null,
            r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            r.prototype.vendors = [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],
            r.prototype.motionSupport = !!t.DeviceMotionEvent,
            r.prototype.orientationSupport = !!t.DeviceOrientationEvent,
            r.prototype.orientationStatus = 0,
            r.prototype.transform2DSupport = r.prototype.transformSupport('2D'),
            r.prototype.transform3DSupport = r.prototype.transformSupport('3D'),
            r.prototype.propertyCache = {},
            r.prototype.initialise = function() {
                'static' === this.$context.css('position') && this.$context.css({
                    position: 'relative'
                }),
                this.accelerate(this.$context),
                this.updateLayers(),
                this.updateDimensions(),
                this.enable(),
                this.queueCalibration(this.calibrationDelay)
            }
            ,
            r.prototype.updateLayers = function() {
                this.$layers = this.$context.find('.layer'),
                this.depths = [],
                this.$layers.css({
                    position: 'absolute',
                    display: 'block',
                    left: 0,
                    top: 0
                }),
                this.$layers.first().css({
                    position: 'relative'
                }),
                this.accelerate(this.$layers),
                this.$layers.each(e.proxy(function(t, n) {
                    this.depths.push(e(n).data('depth') || 0)
                }, this))
            }
            ,
            r.prototype.updateDimensions = function() {
                this.ww = t.innerWidth,
                this.wh = t.innerHeight,
                this.wcx = this.ww * this.originX,
                this.wcy = this.wh * this.originY,
                this.wrx = Math.max(this.wcx, this.ww - this.wcx),
                this.wry = Math.max(this.wcy, this.wh - this.wcy)
            }
            ,
            r.prototype.updateBounds = function() {
                this.bounds = this.element.getBoundingClientRect(),
                this.ex = this.bounds.left,
                this.ey = this.bounds.top,
                this.ew = this.bounds.width,
                this.eh = this.bounds.height,
                this.ecx = this.ew * this.originX,
                this.ecy = this.eh * this.originY,
                this.erx = Math.max(this.ecx, this.ew - this.ecx),
                this.ery = Math.max(this.ecy, this.eh - this.ecy)
            }
            ,
            r.prototype.queueCalibration = function(e) {
                clearTimeout(this.calibrationTimer),
                this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
            }
            ,
            r.prototype.enable = function() {
                this.enabled || (this.enabled = !0,
                this.orientationSupport ? (this.portrait = null,
                t.addEventListener('deviceorientation', this.onDeviceOrientation),
                setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0,
                this.cy = 0,
                this.portrait = !1,
                t.addEventListener('mousemove', this.onMouseMove)),
                t.addEventListener('resize', this.onWindowResize),
                this.raf = requestAnimationFrame(this.onAnimationFrame))
            }
            ,
            r.prototype.disable = function() {
                this.enabled && (this.enabled = !1,
                this.orientationSupport ? t.removeEventListener('deviceorientation', this.onDeviceOrientation) : t.removeEventListener('mousemove', this.onMouseMove),
                t.removeEventListener('resize', this.onWindowResize),
                cancelAnimationFrame(this.raf))
            }
            ,
            r.prototype.calibrate = function(e, t) {
                this.calibrateX = e === i ? this.calibrateX : e,
                this.calibrateY = t === i ? this.calibrateY : t
            }
            ,
            r.prototype.invert = function(e, t) {
                this.invertX = e === i ? this.invertX : e,
                this.invertY = t === i ? this.invertY : t
            }
            ,
            r.prototype.friction = function(e, t) {
                this.frictionX = e === i ? this.frictionX : e,
                this.frictionY = t === i ? this.frictionY : t
            }
            ,
            r.prototype.scalar = function(e, t) {
                this.scalarX = e === i ? this.scalarX : e,
                this.scalarY = t === i ? this.scalarY : t
            }
            ,
            r.prototype.limit = function(e, t) {
                this.limitX = e === i ? this.limitX : e,
                this.limitY = t === i ? this.limitY : t
            }
            ,
            r.prototype.origin = function(e, t) {
                this.originX = e === i ? this.originX : e,
                this.originY = t === i ? this.originY : t
            }
            ,
            r.prototype.clamp = function(e, t, n) {
                return e = Math.max(e, t),
                e = Math.min(e, n)
            }
            ,
            r.prototype.css = function(t, n, r) {
                var o = this.propertyCache[n];
                if (!o)
                    for (var s = 0, a = this.vendors.length; s < a; s++)
                        if (o = null !== this.vendors[s] ? e.camelCase(this.vendors[s][1] + '-' + n) : n,
                        t.style[o] !== i) {
                            this.propertyCache[n] = o;
                            break
                        }
                t.style[o] = r
            }
            ,
            r.prototype.accelerate = function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    this.css(i, 'transform', 'translate3d(0,0,0)'),
                    this.css(i, 'transform-style', 'preserve-3d'),
                    this.css(i, 'backface-visibility', 'hidden')
                }
            }
            ,
            r.prototype.setPosition = function(e, t, n) {
                t += 'px',
                n += 'px',
                this.transform3DSupport ? this.css(e, 'transform', 'translate3d(' + t + ',' + n + ',0)') : this.transform2DSupport ? this.css(e, 'transform', 'translate(' + t + ',' + n + ')') : (e.style.left = t,
                e.style.top = n)
            }
            ,
            r.prototype.onOrientationTimer = function(e) {
                this.orientationSupport && 0 === this.orientationStatus && (this.disable(),
                this.orientationSupport = !1,
                this.enable())
            }
            ,
            r.prototype.onCalibrationTimer = function(e) {
                this.calibrationFlag = !0
            }
            ,
            r.prototype.onWindowResize = function(e) {
                this.updateDimensions()
            }
            ,
            r.prototype.onAnimationFrame = function() {
                this.updateBounds();
                var e = this.ix - this.cx
                  , t = this.iy - this.cy;
                (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
                this.portrait ? (this.mx = this.calibrateX ? t : this.iy,
                this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix,
                this.my = this.calibrateY ? t : this.iy),
                this.mx *= this.ew * (this.scalarX / 100),
                this.my *= this.eh * (this.scalarY / 100),
                isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
                isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
                this.vx += (this.mx - this.vx) * this.frictionX,
                this.vy += (this.my - this.vy) * this.frictionY;
                for (var n = 0, i = this.$layers.length; n < i; n++) {
                    var r = this.depths[n]
                      , o = this.$layers[n]
                      , s = this.vx * r * (this.invertX ? -1 : 1)
                      , a = this.vy * r * (this.invertY ? -1 : 1);
                    this.setPosition(o, s, a)
                }
                this.raf = requestAnimationFrame(this.onAnimationFrame)
            }
            ,
            r.prototype.onDeviceOrientation = function(e) {
                if (!this.desktop && null !== e.beta && null !== e.gamma) {
                    this.orientationStatus = 1;
                    var n = (e.beta || 0) / s
                      , i = (e.gamma || 0) / s
                      , r = t.innerHeight > t.innerWidth;
                    this.portrait !== r && (this.portrait = r,
                    this.calibrationFlag = !0),
                    this.calibrationFlag && (this.calibrationFlag = !1,
                    this.cx = n,
                    this.cy = i),
                    this.ix = n,
                    this.iy = i
                }
            }
            ,
            r.prototype.onMouseMove = function(e) {
                var t = e.clientX
                  , n = e.clientY;
                !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex),
                t = Math.min(t, this.ex + this.ew),
                n = Math.max(n, this.ey),
                n = Math.min(n, this.ey + this.eh)),
                this.ix = (t - this.ex - this.ecx) / this.erx,
                this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx,
                this.iy = (n - this.wcy) / this.wry)
            }
            ;
            var c = {
                enable: r.prototype.enable,
                disable: r.prototype.disable,
                updateLayers: r.prototype.updateLayers,
                calibrate: r.prototype.calibrate,
                friction: r.prototype.friction,
                invert: r.prototype.invert,
                scalar: r.prototype.scalar,
                limit: r.prototype.limit,
                origin: r.prototype.origin
            };
            e.fn[o] = function(t) {
                var n = arguments;
                return this.each(function() {
                    var i = e(this)
                      , s = i.data(o);
                    s || (s = new r(this,t),
                    i.data(o, s)),
                    c[t] && s[t].apply(s, Array.prototype.slice.call(n, 1))
                })
            }
        }(e || window.Zepto, window, document),
        function() {
            for (var e = 0, t = ['ms', 'moz', 'webkit', 'o'], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
                window.requestAnimationFrame = window[t[n] + 'RequestAnimationFrame'],
                window.cancelAnimationFrame = window[t[n] + 'CancelAnimationFrame'] || window[t[n] + 'CancelRequestAnimationFrame'];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var i = (new Date).getTime()
                  , r = Math.max(0, 16 - (i - e))
                  , o = window.setTimeout(function() {
                    t(i + r)
                }, r);
                return e = i + r,
                o
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            }
            )
        }()
    }
    ).call(t, n(3))
}
, function(e, t) {
    !function(e, t) {
        'use strict';
        function n(e, n) {
            function i(e, t, n, i) {
                var r = '';
                r = t.length ? t + '{' + n + '}' : n,
                'insertRule'in e ? e.insertRule(r, i) : 'addRule'in e && e.addRule(t, n, i)
            }
            var r = null
              , o = null
              , s = null;
            if ('string' == typeof e && (r = t.getElementById(e.split('#')[1])),
            !r)
                return void console.error('Grained: cannot find the element with id ' + e);
            o = r.id,
            'absolute' !== r.style.position && (r.style.position = 'relative'),
            r.style.overflow = 'hidden';
            var a = ['', '-moz-', '-o-animation-', '-webkit-', '-ms-']
              , c = {
                animate: !0,
                patternWidth: 100,
                patternHeight: 100,
                grainOpacity: .1,
                grainDensity: 1,
                grainWidth: 1,
                grainHeight: 1,
                grainChaos: .5,
                grainSpeed: 20
            };
            Object.keys(n).forEach(function(e) {
                c[e] = n[e]
            });
            for (var l = function() {
                var e = t.createElement('canvas')
                  , n = e.getContext('2d');
                e.width = c.patternWidth,
                e.height = c.patternHeight;
                for (var i = 0; i < c.patternWidth; i += c.grainDensity)
                    for (var r = 0; r < c.patternHeight; r += c.grainDensity) {
                        var o = 256 * Math.random() | 0;
                        n.fillStyle = 'rgba(' + [o, o, o, c.grainOpacity].join() + ')',
                        n.fillRect(i, r, c.grainWidth, c.grainHeight)
                    }
                return e.toDataURL('image/png')
            }, u = l(), p = '', f = ['0%:-10%,10%', '10%:-25%,0%', '20%:-30%,10%', '30%:-30%,30%', '40%::-20%,20%', '50%:-15%,10%', '60%:-20%,20%', '70%:-5%,20%', '80%:-25%,5%', '90%:-30%,25%', '100%:-10%,10%'], h = a.length; h--; ) {
                p += '@' + a[h] + 'keyframes grained{';
                for (var d = 0; d < f.length; d++) {
                    var m = f[d].split(':');
                    p += m[0] + '{',
                    p += a[h] + 'transform:translate(' + m[1] + ');',
                    p += '}'
                }
                p += '}'
            }
            var g = t.getElementById('grained-animation');
            g && g.parentElement.removeChild(g);
            var v = t.createElement('style');
            v.type = 'text/css',
            v.id = 'grained-animation',
            v.innerHTML = p,
            t.body.appendChild(v);
            var y = t.getElementById('grained-animation-' + o);
            y && y.parentElement.removeChild(y),
            v = t.createElement('style'),
            v.type = 'text/css',
            v.id = 'grained-animation-' + o,
            t.body.appendChild(v);
            var x = 'background-image: url(' + u + ');';
            if (x += 'position: absolute;content: '';height: 300%;width: 300%;left: -100%;top: -100%;',
            h = a.length,
            c.animate)
                for (; h--; )
                    x += a[h] + 'animation-name:grained;',
                    x += a[h] + 'animation-iteration-count: infinite;',
                    x += a[h] + 'animation-duration: ' + c.grainChaos + 's;',
                    x += a[h] + 'animation-timing-function: steps(' + c.grainSpeed + ', end);';
            s = '#' + o + '::before',
            i(v.sheet, s, x)
        }
        e.grained = n
    }(window, document)
}
,function(e, t, n) {
    (function(e) {
        !function(e, t, n, i, r) {
            function o(t) {
                t = t.split(')');
                var n, r, o, s = e.trim, a = -1, c = t.length - 1, l = C ? new Float32Array(6) : [], u = C ? new Float32Array(6) : [], p = C ? new Float32Array(6) : [1, 0, 0, 1, 0, 0];
                for (l[0] = l[3] = p[0] = p[3] = 1,
                l[1] = l[2] = l[4] = l[5] = 0; ++a < c; ) {
                    switch (n = t[a].split('('),
                    r = s(n[0]),
                    o = n[1],
                    u[0] = u[3] = 1,
                    u[1] = u[2] = u[4] = u[5] = 0,
                    r) {
                    case j + 'X':
                        u[4] = parseInt(o, 10);
                        break;
                    case j + 'Y':
                        u[5] = parseInt(o, 10);
                        break;
                    case j:
                        o = o.split(','),
                        u[4] = parseInt(o[0], 10),
                        u[5] = parseInt(o[1] || 0, 10);
                        break;
                    case D:
                        o = f(o),
                        u[0] = i.cos(o),
                        u[1] = i.sin(o),
                        u[2] = -i.sin(o),
                        u[3] = i.cos(o);
                        break;
                    case A + 'X':
                        u[0] = +o;
                        break;
                    case A + 'Y':
                        u[3] = o;
                        break;
                    case A:
                        o = o.split(','),
                        u[0] = o[0],
                        u[3] = o.length > 1 ? o[1] : o[0];
                        break;
                    case L + 'X':
                        u[2] = i.tan(f(o));
                        break;
                    case L + 'Y':
                        u[1] = i.tan(f(o));
                        break;
                    case F:
                        o = o.split(','),
                        u[0] = o[0],
                        u[1] = o[1],
                        u[2] = o[2],
                        u[3] = o[3],
                        u[4] = parseInt(o[4], 10),
                        u[5] = parseInt(o[5], 10)
                    }
                    p[0] = l[0] * u[0] + l[2] * u[1],
                    p[1] = l[1] * u[0] + l[3] * u[1],
                    p[2] = l[0] * u[2] + l[2] * u[3],
                    p[3] = l[1] * u[2] + l[3] * u[3],
                    p[4] = l[0] * u[4] + l[2] * u[5] + l[4],
                    p[5] = l[1] * u[4] + l[3] * u[5] + l[5],
                    l = [p[0], p[1], p[2], p[3], p[4], p[5]]
                }
                return p
            }
            function s(e) {
                var t, n, r, o = e[0], s = e[1], a = e[2], c = e[3];
                return o * c - s * a ? (t = i.sqrt(o * o + s * s),
                o /= t,
                s /= t,
                r = o * a + s * c,
                a -= o * r,
                c -= s * r,
                n = i.sqrt(a * a + c * c),
                a /= n,
                c /= n,
                r /= n,
                o * c < s * a && (o = -o,
                s = -s,
                r = -r,
                t = -t)) : t = n = r = 0,
                [[j, [+e[4], +e[5]]], [D, i.atan2(s, o)], [L + 'X', i.atan(r)], [A, [t, n]]]
            }
            function a(t, n) {
                var i, r, a, f, d = {
                    start: [],
                    end: []
                }, m = -1;
                if (('none' == t || l(t)) && (t = ''),
                ('none' == n || l(n)) && (n = ''),
                t && n && !n.indexOf('matrix') && h(t).join() == h(n.split(')')[0]).join() && (d.origin = t,
                t = '',
                n = n.slice(n.indexOf(')') + 1)),
                t || n) {
                    if (t && n && u(t) != u(n))
                        d.start = s(o(t)),
                        d.end = s(o(n));
                    else
                        for (t && (t = t.split(')')) && (i = t.length),
                        n && (n = n.split(')')) && (i = n.length); ++m < i - 1; )
                            t[m] && (r = t[m].split('(')),
                            n[m] && (a = n[m].split('(')),
                            f = e.trim((r || a)[0]),
                            p(d.start, c(f, r ? r[1] : 0)),
                            p(d.end, c(f, a ? a[1] : 0));
                    return d
                }
            }
            function c(e, t) {
                var n, i = +!e.indexOf(A), r = e.replace(/e[XY]/, 'e');
                switch (e) {
                case j + 'Y':
                case A + 'Y':
                    t = [i, t ? parseFloat(t) : i];
                    break;
                case j + 'X':
                case j:
                case A + 'X':
                    n = 1;
                case A:
                    t = t ? (t = t.split(',')) && [parseFloat(t[0]), parseFloat(t.length > 1 ? t[1] : e == A ? n || t[0] : i + '')] : [i, i];
                    break;
                case L + 'X':
                case L + 'Y':
                case D:
                    t = t ? f(t) : 0;
                    break;
                case F:
                    return s(t ? h(t) : [1, 0, 0, 1, 0, 0])
                }
                return [[r, t]]
            }
            function l(e) {
                return E.test(e)
            }
            function u(e) {
                return e.replace(/(?:\([^)]*\))|\s/g, '')
            }
            function p(e, t, n) {
                for (; n = t.shift(); )
                    e.push(n)
            }
            function f(e) {
                return ~e.indexOf('deg') ? parseInt(e, 10) * (2 * i.PI / 360) : ~e.indexOf('grad') ? parseInt(e, 10) * (i.PI / 200) : parseFloat(e)
            }
            function h(e) {
                return e = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(e),
                [e[1], e[2], e[3], e[4], e[5], e[6]]
            }
            for (var d, m, g, v, y = n.createElement('div'), x = y.style, b = 'Transform', w = ['O' + b, 'ms' + b, 'Webkit' + b, 'Moz' + b], T = w.length, C = ('Float32Array'in t), k = /Matrix([^)]*)/, E = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/, S = 'transform', N = 'transformOrigin', j = 'translate', D = 'rotate', A = 'scale', L = 'skew', F = 'matrix'; T--; )
                w[T]in x && (e.support[S] = d = w[T],
                e.support[N] = d + 'Origin');
            d || (e.support.matrixFilter = m = '' === x.filter),
            e.cssNumber[S] = e.cssNumber[N] = !0,
            d && d != S ? (e.cssProps[S] = d,
            e.cssProps[N] = d + 'Origin',
            d == 'Moz' + b ? g = {
                get: function(t, n) {
                    return n ? e.css(t, d).split('px').join('') : t.style[d]
                },
                set: function(e, t) {
                    e.style[d] = /matrix\([^)p]*\)/.test(t) ? t.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, F + '$1$2px,$3px') : t
                }
            } : /^1\.[0-5](?:\.|$)/.test(e.fn.jquery) && (g = {
                get: function(t, n) {
                    return n ? e.css(t, d.replace(/^ms/, 'Ms')) : t.style[d]
                }
            })) : m && (g = {
                get: function(t, n, i) {
                    var o, s, a = n && t.currentStyle ? t.currentStyle : t.style;
                    return a && k.test(a.filter) ? (o = RegExp.$1.split(','),
                    o = [o[0].split('=')[1], o[2].split('=')[1], o[1].split('=')[1], o[3].split('=')[1]]) : o = [1, 0, 0, 1],
                    e.cssHooks[N] ? (s = e._data(t, 'transformTranslate', r),
                    o[4] = s ? s[0] : 0,
                    o[5] = s ? s[1] : 0) : (o[4] = a ? parseInt(a.left, 10) || 0 : 0,
                    o[5] = a ? parseInt(a.top, 10) || 0 : 0),
                    i ? o : F + '(' + o + ')'
                },
                set: function(t, n, i) {
                    var r, s, a, c, l = t.style;
                    i || (l.zoom = 1),
                    n = o(n),
                    s = ['Matrix(M11=' + n[0], 'M12=' + n[2], 'M21=' + n[1], 'M22=' + n[3], 'SizingMethod='auto expand''].join(),
                    a = (r = t.currentStyle) && r.filter || l.filter || '',
                    l.filter = k.test(a) ? a.replace(k, s) : a + ' progid:DXImageTransform.Microsoft.' + s + ')',
                    e.cssHooks[N] ? e.cssHooks[N].set(t, n) : ((c = e.transform.centerOrigin) && (l['margin' == c ? 'marginLeft' : 'left'] = -(t.offsetWidth / 2) + t.clientWidth / 2 + 'px',
                    l['margin' == c ? 'marginTop' : 'top'] = -(t.offsetHeight / 2) + t.clientHeight / 2 + 'px'),
                    l.left = n[4] + 'px',
                    l.top = n[5] + 'px')
                }
            }),
            g && (e.cssHooks[S] = g),
            v = g && g.get || e.css,
            e.fx.step.transform = function(t) {
                var n, r, o, s, c = t.elem, l = t.start, u = t.end, p = t.pos, f = '', h = 1e5;
                for (l && 'string' != typeof l || (l || (l = v(c, d)),
                m && (c.style.zoom = 1),
                u = u.split('+=').join(l),
                e.extend(t, a(l, u)),
                l = t.start,
                u = t.end),
                n = l.length; n--; )
                    switch (r = l[n],
                    o = u[n],
                    s = 0,
                    r[0]) {
                    case j:
                        s = 'px';
                    case A:
                        s || (s = ''),
                        f = r[0] + '(' + i.round((r[1][0] + (o[1][0] - r[1][0]) * p) * h) / h + s + ',' + i.round((r[1][1] + (o[1][1] - r[1][1]) * p) * h) / h + s + ')' + f;
                        break;
                    case L + 'X':
                    case L + 'Y':
                    case D:
                        f = r[0] + '(' + i.round((r[1] + (o[1] - r[1]) * p) * h) / h + 'rad)' + f
                    }
                t.origin && (f = t.origin + f),
                g && g.set ? g.set(c, f, 1) : c.style[d] = f
            }
            ,
            e.transform = {
                centerOrigin: 'margin'
            }
        }(e, window, document, Math)
    }
    ).call(t, n(3))
}
]);
