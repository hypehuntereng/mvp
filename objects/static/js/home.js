!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return o = {}, i.m = n = [function(e, t, n) {
        var i;
        i = [e, n(7)],
        void 0 !== (n = "function" == typeof (n = function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(t),
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }(),
                s = function() {
                    function t(e) {
                        n(this, t),
                        this.resolveOptions(e),
                        this.initSelection()
                    }
                    return r(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action,
                            this.container = e.container,
                            this.emitter = e.emitter,
                            this.target = e.target,
                            this.text = e.text,
                            this.trigger = e.trigger,
                            this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                            this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            },
                            this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                            this.fakeElem = document.createElement("textarea"),
                            this.fakeElem.style.fontSize = "12pt",
                            this.fakeElem.style.border = "0",
                            this.fakeElem.style.padding = "0",
                            this.fakeElem.style.margin = "0",
                            this.fakeElem.style.position = "absolute",
                            this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px",
                            this.fakeElem.setAttribute("readonly", ""),
                            this.fakeElem.value = this.text,
                            this.container.appendChild(this.fakeElem),
                            this.selectedText = (0, i.default)(this.fakeElem),
                            this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                            this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, i.default)(this.target),
                            this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(),
                            window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action)
                                throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType)
                                    throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled"))
                                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            e.exports = s
        }) ? n.apply(t, i) : n) && (e.exports = n)
    }, function(e, t, n) {
        var c = n(6),
            u = n(5);
        e.exports = function(e, t, n) {
            if (!e && !t && !n)
                throw new Error("Missing required arguments");
            if (!c.string(t))
                throw new TypeError("Second argument must be a String");
            if (!c.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (c.node(e))
                return o = t, r = n, (i = e).addEventListener(o, r), {
                    destroy: function() {
                        i.removeEventListener(o, r)
                    }
                };
            var i,
                o,
                r,
                s,
                a,
                l;
            if (c.nodeList(e))
                return s = e, a = t, l = n, Array.prototype.forEach.call(s, function(e) {
                    e.addEventListener(a, l)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(s, function(e) {
                            e.removeEventListener(a, l)
                        })
                    }
                };
            if (c.string(e))
                return e = e, t = t, n = n, u(document.body, e, t, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }
    }, function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                function i() {
                    o.off(e, i),
                    t.apply(n, arguments)
                }
                var o = this;
                return i._ = t, this.on(e, i, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++)
                    n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    o = [];
                if (i && t)
                    for (var r = 0, s = i.length; r < s; r++)
                        i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                return o.length ? n[e] = o : delete n[e], this
            }
        },
        e.exports = n
    }, function(e, t, n) {
        var i;
        i = [e, n(0), n(2), n(1)],
        void 0 !== (n = "function" == typeof (n = function(e, t, n, i) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            function l(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n))
                    return t.getAttribute(n)
            }
            var c = o(t),
                u = o(n),
                d = o(i),
                p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }(),
                h = function(e) {
                    function i(e, t) {
                        r(this, i);
                        var n = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                        return n.resolveOptions(t), n.listenClick(e), n
                    }
                    return a(i, e), f(i, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                            this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                            this.text = "function" == typeof e.text ? e.text : this.defaultText,
                            this.container = "object" === p(e.container) ? e.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = (0, d.default)(e, "click", function(e) {
                                return t.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                            this.clipboardAction = new c.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(e) {
                            return l("action", e)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(e) {
                            var t = l("target", e);
                            if (t)
                                return document.querySelector(t)
                        }
                    }, {
                        key: "defaultText",
                        value: function(e) {
                            return l("text", e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                t = "string" == typeof e ? [e] : e,
                                n = !!document.queryCommandSupported;
                            return t.forEach(function(e) {
                                n = n && !!document.queryCommandSupported(e)
                            }), n
                        }
                    }]), i
                }(u.default);
            e.exports = h
        }) ? n.apply(t, i) : n) && (e.exports = n)
    }, function(e, t) {
        var n;
        "undefined" == typeof Element || Element.prototype.matches || ((n = Element.prototype).matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector),
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t))
                    return e;
                e = e.parentNode
            }
        }
    }, function(e, t, n) {
        function r(e, t, n, i, o) {
            var r = function(t, n, e, i) {
                return function(e) {
                    e.delegateTarget = s(e.target, n),
                    e.delegateTarget && i.call(t, e)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, r, o), {
                destroy: function() {
                    e.removeEventListener(n, r, o)
                }
            }
        }
        var s = n(4);
        e.exports = function(e, t, n, i, o) {
            return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                return r(e, t, n, i, o)
            }))
        }
    }, function(e, n) {
        n.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        },
        n.nodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
        },
        n.string = function(e) {
            return "string" == typeof e || e instanceof String
        },
        n.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t,
                n = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), n = window.getSelection(), (t = document.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(t), n.toString());
            return n
        }
    }], i.c = o, i.i = function(e) {
        return e
    }, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 3);
    function i(e) {
        if (o[e])
            return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n,
        o
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        k = T.document,
        n = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        v = i.hasOwnProperty,
        s = v.toString,
        c = s.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };
    function w(e, t, n) {
        var i,
            o = (t = t || k).createElement("script");
        if (o.text = e, n)
            for (i in u)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
            return new C.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var e,
            t,
            n,
            i,
            o,
            r = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || b(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    o = r[t],
                    r !== (n = e[t]) && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (o = i ? (i = !1, o && Array.isArray(o) ? o : []) : o && C.isPlainObject(o) ? o : {}, r[t] = C.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    },
    C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof (e = v.call(e, "constructor") && e.constructor) || s.call(e) !== c))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var n,
                i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i,
                o,
                r = 0,
                s = [];
            if (p(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && s.push(o);
            return g.apply([], s)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }
        function i() {
            T()
        }
        var e,
            f,
            w,
            r,
            o,
            h,
            p,
            m,
            x,
            l,
            c,
            T,
            k,
            s,
            C,
            g,
            a,
            u,
            v,
            S = "sizzle" + +new Date,
            y = n.document,
            $ = 0,
            b = 0,
            E = se(),
            A = se(),
            D = se(),
            j = function(e, t) {
                return e === t && (c = !0), 0
            },
            O = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            L = t.push,
            M = t.push,
            P = t.slice,
            _ = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + N + "*(" + H + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + N + "*\\]",
            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            z = new RegExp(N + "+", "g"),
            W = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            U = new RegExp("^" + N + "*," + N + "*"),
            B = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            Y = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            Z = new RegExp(R),
            X = new RegExp("^" + H + "$"),
            K = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = ge(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply(t = P.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (n) {
            M = {
                apply: t.length ? function(e, t) {
                    L.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        function re(e, t, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c,
                u,
                d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== k && T(t), t = t || k, C)) {
                if (11 !== p && (l = Q.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o)))
                                return n;
                            if (s.id === o)
                                return n.push(s), n
                        } else if (d && (s = d.getElementById(o)) && v(t, s) && s.id === o)
                            return n.push(s), n
                    } else {
                        if (l[2])
                            return M.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(o)), n
                    }
                if (f.qsa && !D[e + " "] && (!g || !g.test(e))) {
                    if (1 !== p)
                        d = t,
                        u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = S), r = (c = h(e)).length; r--;)
                            c[r] = "#" + a + " " + me(c[r]);
                        u = c.join(","),
                        d = ee.test(e) && fe(t.parentNode) || t
                    }
                    if (u)
                        try {
                            return M.apply(n, d.querySelectorAll(u)), n
                        } catch (e) {} finally {
                            a === S && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(W, "$1"), t, n, i)
        }
        function se() {
            var n = [];
            function i(e, t) {
                return n.push(e + " ") > w.cacheLength && delete i[n.shift()], i[e + " "] = t
            }
            return i
        }
        function ae(e) {
            return e[S] = !0, e
        }
        function le(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--;)
                w.attrHandle[n[i]] = t
        }
        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function pe(s) {
            return ae(function(r) {
                return r = +r, ae(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;)
                        e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = re.support = {}, o = re.isXML = function(e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, T = re.setDocument = function(e) {
            var t,
                e = e ? e.ownerDocument || e : y;
            return e !== k && 9 === e.nodeType && e.documentElement && (s = (k = e).documentElement, C = !o(k), y !== k && (t = k.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), f.attributes = le(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = le(function(e) {
                return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = J.test(k.getElementsByClassName), f.getById = le(function(e) {
                return s.appendChild(e).id = S, !k.getElementsByName || !k.getElementsByName(S).length
            }), f.getById ? (w.filter.ID = function(e) {
                var t = e.replace(te, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(te, d);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var n,
                        i,
                        o,
                        r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" !== e)
                    return r;
                for (; n = r[o++];)
                    1 === n.nodeType && i.push(n);
                return i
            }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                    return t.getElementsByClassName(e)
            }, a = [], g = [], (f.qsa = J.test(k.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + F + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]")
            }), le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })), (f.matchesSelector = J.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                f.disconnectedMatch = u.call(e, "*"),
                u.call(e, "[s!='']:x"),
                a.push("!=", R)
            }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), v = t || J.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, j = t ? function(e, t) {
                if (e === t)
                    return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === y && v(y, e) ? -1 : t === k || t.ownerDocument === y && v(y, t) ? 1 : l ? _(l, e) - _(l, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return c = !0, 0;
                var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                if (!o || !r)
                    return e === k ? -1 : t === k ? 1 : o ? -1 : r ? 1 : l ? _(l, e) - _(l, t) : 0;
                if (o === r)
                    return ue(e, t);
                for (n = e; n = n.parentNode;)
                    s.unshift(n);
                for (n = t; n = n.parentNode;)
                    a.unshift(n);
                for (; s[i] === a[i];)
                    i++;
                return i ? ue(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
            }), k
        }, re.matches = function(e, t) {
            return re(e, null, null, t)
        }, re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== k && T(e), t = t.replace(Y, "='$1']"), f.matchesSelector && C && !D[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t)))
                try {
                    var n = u.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < re(t, k, null, [e]).length
        }, re.contains = function(e, t) {
            return (e.ownerDocument || e) !== k && T(e), v(e, t)
        }, re.attr = function(e, t) {
            (e.ownerDocument || e) !== k && T(e);
            var n = w.attrHandle[t.toLowerCase()],
                n = n && O.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== n ? n : f.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, re.escape = function(e) {
            return (e + "").replace(ne, ie)
        }, re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, re.uniqueSort = function(e) {
            var t,
                n = [],
                i = 0,
                o = 0;
            if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(j), c) {
                for (; t = e[o++];)
                    t === e[o] && (i = n.push(o));
                for (; i--;)
                    e.splice(n[i], 1)
            }
            return l = null, e
        }, r = re.getText = function(e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++];)
                    n += r(t);
            return n
        }, (w = re.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Z.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(t, n, i) {
                    return function(e) {
                        e = re.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = v != y ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            d = b && e.nodeName.toLowerCase(),
                            p = !n && !b,
                            f = !1;
                        if (u) {
                            if (v) {
                                for (; c;) {
                                    for (s = e; s = s[c];)
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                for (f = (a = (i = (o = (r = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                    if (1 === s.nodeType && ++f && s === e) {
                                        o[h] = [$, a, f];
                                        break
                                    }
                            } else if (!1 === (f = p ? a = (i = (o = (r = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && i[1] : f))
                                for (; (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [$, f]), s !== e));)
                                    ;
                            return (f -= g) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t,
                        s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return s[S] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                        for (var n, i = s(e, r), o = i.length; o--;)
                            e[n = _(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var i = [],
                        o = [],
                        a = p(e.replace(W, "$1"));
                    return a[S] ? ae(function(e, t, n, i) {
                        for (var o, r = a(e, null, i, []), s = e.length; s--;)
                            (o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, t, n) {
                        return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return 0 < re(t, e).length
                    }
                }),
                contains: ae(function(t) {
                    return t = t.replace(te, d), function(e) {
                        return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                    }
                }),
                lang: ae(function(n) {
                    return X.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;)
                        e.push(i);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;)
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function he() {}
        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ge(s, e, t) {
            var a = e.dir,
                l = e.next,
                c = l || a,
                u = t && "parentNode" === c,
                d = b++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || u)
                        return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i,
                    o,
                    r = [$, d];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || u) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || u)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase())
                                e = e[a] || e;
                            else {
                                if ((o = i[c]) && o[0] === $ && o[1] === d)
                                    return r[2] = o[2];
                                if ((i[c] = r)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function ve(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n))
                        return !1;
                return !0
            } : o[0]
        }
        function ye(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }
        function be(f, h, m, g, v, e) {
            return g && !g[S] && (g = be(g)), v && !v[S] && (v = be(v, e)), ae(function(e, t, n, i) {
                var o,
                    r,
                    s,
                    a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++)
                            re(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !e && h ? u : ye(u, a, f, n, i),
                    p = m ? v || (e ? f : c || g) ? [] : t : d;
                if (m && m(d, p, n, i), g)
                    for (o = ye(p, l), g(o, [], n, i), r = o.length; r--;)
                        (s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = p.length; r--;)
                                (s = p[r]) && o.push(d[r] = s);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)
                            (s = p[r]) && -1 < (o = v ? _(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else
                    p = ye(p === t ? p.splice(c, p.length) : p),
                    v ? v(null, t, p, i) : M.apply(t, p)
            })
        }
        function we(g, v) {
            function e(e, t, n, i, o) {
                var r,
                    s,
                    a,
                    l = 0,
                    c = "0",
                    u = e && [],
                    d = [],
                    p = x,
                    f = e || b && w.find.TAG("*", o),
                    h = $ += null == p ? 1 : Math.random() || .1,
                    m = f.length;
                for (o && (x = t === k || t || o); c !== m && null != (r = f[c]); c++) {
                    if (b && r) {
                        for (s = 0, t || r.ownerDocument === k || (T(r), n = !C); a = g[s++];)
                            if (a(r, t || k, n)) {
                                i.push(r);
                                break
                            }
                        o && ($ = h)
                    }
                    y && ((r = !a && r) && l--, e && u.push(r))
                }
                if (l += c, y && c !== l) {
                    for (s = 0; a = v[s++];)
                        a(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--;)
                                u[c] || d[c] || (d[c] = I.call(i));
                        d = ye(d)
                    }
                    M.apply(i, d),
                    o && !e && 0 < d.length && 1 < l + v.length && re.uniqueSort(i)
                }
                return o && ($ = h, x = p), u
            }
            var y = 0 < v.length,
                b = 0 < g.length;
            return y ? ae(e) : e
        }
        return he.prototype = w.filters = w.pseudos, w.setFilters = new he, h = re.tokenize = function(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a,
                l,
                c = A[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (r in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = B.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(W, " ")
                }), s = s.slice(n.length)), w.filter)
                    !(i = K[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? re.error(e) : A(e, a).slice(0)
        }, p = re.compile = function(e, t) {
            var n,
                i = [],
                o = [],
                r = D[e + " "];
            if (!r) {
                for (n = (t = t || h(e)).length; n--;)
                    ((r = function e(t) {
                        for (var i, n, o, r = t.length, s = w.relative[t[0].type], a = s || w.relative[" "], l = s ? 1 : 0, c = ge(function(e) {
                                return e === i
                            }, a, !0), u = ge(function(e) {
                                return -1 < _(i, e)
                            }, a, !0), d = [function(e, t, n) {
                                return n = !s && (n || t !== x) || ((i = t).nodeType ? c : u)(e, t, n), i = null, n
                            }]; l < r; l++)
                            if (n = w.relative[t[l].type])
                                d = [ge(ve(d), n)];
                            else {
                                if ((n = w.filter[t[l].type].apply(null, t[l].matches))[S]) {
                                    for (o = ++l; o < r && !w.relative[t[o].type]; o++)
                                        ;
                                    return be(1 < l && ve(d), 1 < l && me(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && me(t))
                                }
                                d.push(n)
                            }
                        return ve(d)
                    }(t[n]))[S] ? i : o).push(r);
                (r = D(e, we(o, i))).selector = e
            }
            return r
        }, m = re.select = function(e, t, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c = "function" == typeof e && e,
                u = !i && h(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && C && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(te, d), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = K.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(te, d), ee.test(r[0].type) && fe(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && me(r)))
                            return M.apply(n, i), n;
                        break
                    }
            }
            return (c || p(e, u))(i, t, !C, n, !t || ee.test(e) && fe(t.parentNode) || t), n
        }, f.sortStable = S.split("").sort(j).join("") === S, f.detectDuplicates = !!c, T(), f.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(F, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), re
    }(T);
    C.find = f,
    C.expr = f.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = f.uniqueSort,
    C.text = f.getText,
    C.isXMLDoc = f.isXML,
    C.contains = f.contains,
    C.escapeSelector = f.escape;
    function x(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && C(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function S(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var $ = C.expr.match.needsContext;
    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, i) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    C.fn.extend({
        find: function(e) {
            var t,
                n,
                i = this.length,
                o = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]), t = 0; t < i; t++)
                C.find(e, o[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && $.test(e) ? C(e) : e || [], !1).length
        }
    });
    var j,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        if (!e)
            return this;
        if (n = n || j, "string" != typeof e)
            return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t)
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), A.test(i[1]) && C.isPlainObject(t))
                for (var i in t)
                    b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = k.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = C.fn,
    j = C(k);
    var I = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n,
                i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && C(e);
            if (!$.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(i, o) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), I.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function _(e) {
        return e
    }
    function F(e) {
        throw e
    }
    function N(e, t, n, i) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var e,
            n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);
        function o() {
            for (a = a || i.once, s = r = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;)
                    !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1),
            r = !1,
            a && (l = t ? [] : "")
        }
        var r,
            t,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            d = {
                add: function() {
                    return l && (t && !r && (u = l.length - 1, c.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            b(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments), t && !r && o()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; -1 < (n = C.inArray(t, l, n));)
                            l.splice(n, 1),
                            n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = c = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = c = [], t || r || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || o()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    },
    C.extend({
        Deferred: function(e) {
            var r = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return C.Deferred(function(i) {
                            C.each(r, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                            o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;
                        function c(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e,
                                        t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        b(t) ? a ? t.call(e, c(l, r, _, a), c(l, r, F, a)) : (l++, t.call(e, c(l, r, _, a), c(l, r, F, a), c(l, r, _, r.notifyWith))) : (s !== _ && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace),
                                            l <= o + 1 && (s !== F && (n = void 0, i = [e]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            r[0][3].add(c(0, e, b(i) ? i : _, e.notifyWith)),
                            r[1][3].add(c(0, e, b(t) ? t : _)),
                            r[2][3].add(c(0, e, b(n) ? n : F))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, s) : s
                    }
                },
                a = {};
            return C.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                },
                a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    r[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = C.Deferred();
            if (n <= 1 && (N(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then)))
                return s.then();
            for (; i--;)
                N(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && H.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    },
    C.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var q = C.Deferred();
    function R() {
        k.removeEventListener("DOMContentLoaded", R),
        T.removeEventListener("load", R),
        C.ready()
    }
    C.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    },
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || q.resolveWith(k, [C]))
        }
    }),
    C.ready.then = q.then,
    "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? T.setTimeout(C.ready) : (k.addEventListener("DOMContentLoaded", R), T.addEventListener("load", R));
    var z = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === h(n))
                for (a in o = !0, n)
                    z(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, b(i) || (s = !0), t = c ? s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                return c.call(C(e), n)
            }) : t))
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        W = /^-ms-/,
        U = /-([a-z])/g;
    function B(e, t) {
        return t.toUpperCase()
    }
    function Y(e) {
        return e.replace(W, "ms-").replace(U, B)
    }
    function Z(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function X() {
        this.expando = C.expando + X.uid++
    }
    X.uid = 1,
    X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i,
                o = this.cache(e);
            if ("string" == typeof t)
                o[Y(t)] = n;
            else
                for (i in t)
                    o[Y(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(P) || []).length;
                    for (; n--;)
                        delete i[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !C.isEmptyObject(e)
        }
    };
    var K = new X,
        V = new X,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Q(e, t, n) {
        var i,
            o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                V.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return V.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return V.access(e, t, n)
        },
        removeData: function(e, t) {
            V.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(n, e) {
            var t,
                i,
                o,
                r = this[0],
                s = r && r.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    V.set(this, n)
                }) : z(this, function(e) {
                    var t;
                    return r && void 0 === e ? void 0 !== (t = V.get(r, n)) || void 0 !== (t = Q(r, n)) ? t : void 0 : void this.each(function() {
                        V.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = V.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;)
                    s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Y(i.slice(5)), Q(r, i, o[i]));
                K.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                V.remove(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = C._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--),
            o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                C.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        K.remove(e, [t + "queue", n])
                    })
                })
        }
    }),
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i,
                o = 1,
                r = C.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                (i = K.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });
    function ee(e, t, n, i) {
        var o,
            r = {};
        for (o in t)
            r[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, i || []), t)
            e.style[o] = r[o];
        return i
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        };
    function re(e, t, n, i) {
        var o,
            r,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== c && +l) && ne.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;)
                C.style(e, t, u + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                u /= r;
            u *= 2,
            C.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var se = {};
    function ae(e, t) {
        for (var n, i, o, r, s, a = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style && (n = i.style.display, t ? ("none" === n && (a[l] = K.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && oe(i) && (a[l] = (s = r = void 0, r = (o = i).ownerDocument, s = o.nodeName, (o = se[s]) || (r = r.body.appendChild(r.createElement(s)), o = C.css(r, "display"), r.parentNode.removeChild(r), "none" === o && (o = "block"), se[s] = o)))) : "none" !== n && (a[l] = "none", K.set(i, "display", n)));
        for (l = 0; l < c; l++)
            null != a[l] && (e[l].style.display = a[l]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    function pe(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E(e, t) ? C.merge([e], n) : n
    }
    function fe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    de.optgroup = de.option,
    de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
    de.th = de.td;
    var he = /<|&#?\w+;/;
    function me(e, t, n, i, o) {
        for (var r, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === h(r))
                    C.merge(d, r.nodeType ? [r] : r);
                else if (he.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")), a = (ce.exec(r) || ["", ""])[1].toLowerCase(), a = de[a] || de._default, s.innerHTML = a[1] + C.htmlPrefilter(r) + a[2], c = a[0]; c--;)
                        s = s.lastChild;
                    C.merge(d, s.childNodes),
                    (s = u.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(r));
        for (u.textContent = "", p = 0; r = d[p++];)
            if (i && -1 < C.inArray(r, i))
                o && o.push(r);
            else if (l = C.contains(r.ownerDocument, r), s = pe(u.appendChild(r), "script"), l && fe(s), n)
                for (c = 0; r = s[c++];)
                    ue.test(r.type || "") && n.push(r);
        return u
    }
    t = k.createDocumentFragment().appendChild(k.createElement("div")),
    (f = k.createElement("input")).setAttribute("type", "radio"),
    f.setAttribute("checked", "checked"),
    f.setAttribute("name", "t"),
    t.appendChild(f),
    y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
    t.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var ge = k.documentElement,
        ve = /^key/,
        ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function xe() {
        return !1
    }
    function Te() {
        try {
            return k.activeElement
        } catch (e) {}
    }
    function ke(e, t, n, i, o, r) {
        var s,
            a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t)
                ke(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o)
            o = xe;
        else if (!o)
            return e;
        return 1 === r && (s = o, (o = function(e) {
            return C().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, o, i, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h = K.get(t);
            if (h)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ge, o), n.guid || (n.guid = C.guid++), (a = h.events) || (a = h.events = {}), (s = h.handle) || (s = h.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length; l--;)
                    d = f = (c = be.exec(e[l]) || [])[1],
                    p = (c[2] || "").split(".").sort(),
                    d && (u = C.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = C.event.special[d] || {}, c = C.extend({
                        type: d,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (f = a[d]) || ((f = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), C.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = K.hasData(e) && K.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;)
                    if (f = m = (a = be.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = C.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;)
                            u = p[r],
                            !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l)
                            C.event.remove(e, f + t[c], n, i, !0);
                C.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t,
                n,
                i,
                o,
                r,
                s = C.event.fix(e),
                a = new Array(arguments.length),
                l = (K.get(this, "events") || {})[s.type] || [],
                e = C.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (r = C.event.handlers.call(this, s, l), t = 0; (i = r[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return E(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[C.expando] = !0
    },
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        C.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t,
                    n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, n, i) {
            return ke(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ke(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i,
                o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                    C.event.remove(this, e, n, t)
                });
            for (o in e)
                this.off(o, t, e[o]);
            return this
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ae(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }
    function Oe(e, t) {
        var n,
            i,
            o,
            r,
            s,
            a;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (r = K.access(e), s = K.set(t, r), a = r.events))
                for (o in delete s.handle, s.events = {}, a)
                    for (n = 0, i = a[o].length; n < i; n++)
                        C.event.add(t, o, a[o][n]);
            V.hasData(e) && (e = V.access(e), e = C.extend({}, e), V.set(t, e))
        }
    }
    function Ie(n, i, o, r) {
        i = g.apply([], i);
        var e,
            t,
            s,
            a,
            l,
            c,
            u = 0,
            d = n.length,
            p = d - 1,
            f = i[0],
            h = b(f);
        if (h || 1 < d && "string" == typeof f && !y.checkClone && $e.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())),
                Ie(t, i, o, r)
            });
        if (d && (t = (e = me(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = C.map(pe(e, "script"), De)).length; u < d; u++)
                l = e,
                u !== p && (l = C.clone(l, !0, !0), a && C.merge(s, pe(l, "script"))),
                o.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, C.map(s, je), u = 0; u < a; u++)
                    l = s[u],
                    ue.test(l.type || "") && !K.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : w(l.textContent.replace(Ee, ""), c, l))
        }
        return n
    }
    function Le(e, t, n) {
        for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || C.cleanData(pe(i)),
            i.parentNode && (n && C.contains(i.ownerDocument, i) && fe(pe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = C.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = pe(u), i = 0, o = (r = pe(e)).length; i < o; i++)
                    a = r[i],
                    l = s[i],
                    c = void 0,
                    "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || pe(e), s = s || pe(u), i = 0, o = r.length; i < o; i++)
                        Oe(r[i], s[i]);
                else
                    Oe(e, u);
            return 0 < (s = pe(u, "script")).length && fe(s, !d && pe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Z(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++)
                t = r === o ? this : this.clone(!0),
                C(i[r])[s](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me,
        Pe,
        _e,
        Fe,
        Ne,
        He,
        qe,
        Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? T : t).getComputedStyle(e)
        },
        We = new RegExp(ie.join("|"), "i");
    function Ue() {
        var e;
        qe && (He.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", qe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ge.appendChild(He).appendChild(qe), e = T.getComputedStyle(qe), Me = "1%" !== e.top, Ne = 12 === Be(e.marginLeft), qe.style.right = "60%", Fe = 36 === Be(e.right), Pe = 36 === Be(e.width), qe.style.position = "absolute", _e = 36 === qe.offsetWidth || "absolute", ge.removeChild(He), qe = null)
    }
    function Be(e) {
        return Math.round(parseFloat(e))
    }
    function Ye(e, t, n) {
        var i,
            o,
            r = e.style;
        return (n = n || ze(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (o = C.style(e, t)), !y.pixelBoxStyles() && Re.test(o) && We.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }
    function Ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    He = k.createElement("div"),
    (qe = k.createElement("div")).style && (qe.style.backgroundClip = "content-box", qe.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === qe.style.backgroundClip, C.extend(y, {
        boxSizingReliable: function() {
            return Ue(), Pe
        },
        pixelBoxStyles: function() {
            return Ue(), Fe
        },
        pixelPosition: function() {
            return Ue(), Me
        },
        reliableMarginLeft: function() {
            return Ue(), Ne
        },
        scrollboxSize: function() {
            return Ue(), _e
        }
    }));
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "Moz", "ms"],
        Qe = k.createElement("div").style;
    function et(e) {
        return C.cssProps[e] || (C.cssProps[e] = function(e) {
                if (e in Qe)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                    if ((e = Je[n] + t) in Qe)
                        return e
            }(e) || e)
    }
    function tt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function nt(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += C.css(e, n + ie[s], !0, o)),
            i ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + ie[s] + "Width", !0, o))) : (l += C.css(e, "padding" + ie[s], !0, o), "padding" !== n ? l += C.css(e, "border" + ie[s] + "Width", !0, o) : a += C.css(e, "border" + ie[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
    }
    function it(e, t, n) {
        var i = ze(e),
            o = Ye(e, t, i),
            r = "border-box" === C.css(e, "boxSizing", !1, i),
            s = r;
        if (Re.test(o)) {
            if (!n)
                return o;
            o = "auto"
        }
        return s = s && (y.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== C.css(e, "display", !1, i)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + nt(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }
    function ot(e, t, n, i, o) {
        return new ot.prototype.init(e, t, n, i, o)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ye(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                    r,
                    s,
                    a = Y(t),
                    l = Ke.test(t),
                    c = e.style;
                if (l || (t = et(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n)
                    return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = re(e, t, o), r = "number"),
                null != n && n == n && ("number" === r && (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o,
                r = Y(t);
            return Ke.test(t) || (t = et(r)), "normal" === (o = void 0 === (o = (r = C.cssHooks[t] || C.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Ye(e, t, i) : o) && t in Ge && (o = Ge[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }),
    C.each(["height", "width"], function(e, s) {
        C.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !Xe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, s, n) : ee(e, Ve, function() {
                        return it(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var i,
                    o = ze(e),
                    r = "border-box" === C.css(e, "boxSizing", !1, o),
                    n = n && nt(e, s, n, r, o);
                return r && y.scrollboxSize() === o.position && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - nt(e, s, "border", !1, o) - .5)), n && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = C.css(e, s)), tt(0, t, n)
            }
        }
    }),
    C.cssHooks.marginLeft = Ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        C.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + ie[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== o && (C.cssHooks[o + r].set = tt)
    }),
    C.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var i,
                    o,
                    r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = ze(e), o = t.length; s < o; s++)
                        r[t[s]] = C.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    (C.Tween = ot).prototype = {
        constructor: ot,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ot.propHooks[this.prop];
            return (e && e.get ? e : ot.propHooks._default).get(this)
        },
        run: function(e) {
            var t,
                n = ot.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : ot.propHooks._default).set(this), this
        }
    },
    ot.prototype.init.prototype = ot.prototype,
    ot.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = ot.prototype.init,
    C.fx.step = {};
    var rt,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
    function ct() {
        st && (!1 === k.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ct) : T.setTimeout(ct, C.fx.interval), C.fx.tick())
    }
    function ut() {
        return T.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }
    function dt(e, t) {
        var n,
            i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }
    function pt(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function ft(o, e, t) {
        var n,
            r,
            i = 0,
            s = ft.prefilters.length,
            a = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r)
                    return !1;
                for (var e = rt || ut(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++)
                    c.tweens[n].run(t);
                return a.notifyWith(o, [c, t, e]), t < 1 && i ? e : (i || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; t < n; t++)
                        c.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
            var n,
                i,
                o,
                r,
                s;
            for (n in e)
                if (i = Y(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                    for (n in r = s.expand(r), delete e[i], r)
                        n in e || (e[n] = r[n], t[n] = o);
                else
                    t[i] = o
        }(u, c.opts.specialEasing); i < s; i++)
            if (n = ft.prefilters[i].call(c, o, u, c.opts))
                return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(u, pt, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    C.Animation = C.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return re(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; i < o; i++)
                n = e[i],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u = "width" in t || "height" in t,
                d = this,
                p = {},
                f = e.style,
                h = e.nodeType && oe(e),
                m = K.get(e, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    C.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
                if (o = t[i], at.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        h = !0
                    }
                    p[i] = m && m[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = C.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
                    f.display = c
                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })), l = !1, p)
                    l || (m ? "hidden" in m && (h = m.hidden) : m = K.access(e, "fxshow", {
                        display: c
                    }), r && (m.hidden = !h), h && ae([e], !0), d.done(function() {
                        for (i in h || ae([e]), K.remove(e, "fxshow"), p)
                            C.style(e, i, p[i])
                    })),
                    l = pt(h ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start, h && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this),
            i.queue && C.dequeue(this, i.queue)
        }, i
    },
    C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = C.isEmptyObject(t),
                r = C.speed(e, n, i),
                i = function() {
                    var e = ft(this, C.extend({}, t), r);
                    (o || K.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = C.timers,
                    i = K.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && lt.test(t) && s(i[t]);
                for (t = n.length; t--;)
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || C.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e,
                    t = K.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = C.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, i) {
        var o = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(dt(i, !0), e, t, n)
        }
    }),
    C.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e,
            t = 0,
            n = C.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(),
        rt = void 0
    },
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    },
    C.fx.interval = 13,
    C.fx.start = function() {
        st || (st = !0, ct())
    },
    C.fx.stop = function() {
        st = null
    },
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    },
    t = k.createElement("input"),
    te = k.createElement("select").appendChild(k.createElement("option")),
    t.type = "checkbox",
    y.checkOn = "" !== t.value,
    y.optSelected = te.selected,
    (t = k.createElement("input")).value = "t",
    t.type = "radio",
    y.radioValue = "t" === t.value;
    var ht,
        mt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return z(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var i,
                o,
                r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                i = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];)
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = mt[t] || C.find.attr;
        mt[t] = function(e, t, n) {
            var i,
                o,
                r = t.toLowerCase();
            return n || (o = mt[r], mt[r] = i, i = null != s(e, t, n) ? r : null, mt[r] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(P) || []).join(" ")
    }
    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return z(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }),
    C.extend({
        prop: function(e, t, n) {
            var i,
                o,
                r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(t) {
            var e,
                n,
                i,
                o,
                r,
                s,
                a = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, bt(this)))
                });
            if ((e = wt(t)).length)
                for (; n = this[a++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (r = 0; o = e[r++];)
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                n,
                i,
                o,
                r,
                s,
                a = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, bt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = wt(t)).length)
                for (; n = this[a++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; -1 < i.indexOf(" " + o + " ");)
                                i = i.replace(" " + o + " ", " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                C(this).toggleClass(o.call(this, e, bt(this), t), t)
            }) : this.each(function() {
                var e,
                    t,
                    n,
                    i;
                if (s)
                    for (t = 0, n = C(this), i = wt(o); e = i[t++];)
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== o && "boolean" != r || ((e = bt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + yt(bt(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    C.fn.extend({
        val: function(t) {
            var n,
                e,
                i,
                o = this[0];
            return arguments.length ? (i = b(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : yt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !E(t.parentNode, "optgroup"))) {
                            if (t = C(t).val(), o)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;)
                        ((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }),
    y.focusin = "onfocusin" in T;
    function Tt(e) {
        e.stopPropagation()
    }
    var kt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c,
                u,
                d = [n || k],
                p = v.call(e, "type") ? e.type : e,
                f = v.call(e, "namespace") ? e.namespace.split(".") : [],
                h = u = r = n = n || k;
            if (3 !== n.nodeType && 8 !== n.nodeType && !kt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !m(n)) {
                    for (s = c.delegateType || p, kt.test(s + p) || (h = h.parentNode); h; h = h.parentNode)
                        d.push(h),
                        r = h;
                    r === (n.ownerDocument || k) && d.push(r.defaultView || r.parentWindow || T)
                }
                for (o = 0; (h = d[o++]) && !e.isPropagationStopped();)
                    u = h,
                    e.type = 1 < o ? s : c.bindType || p,
                    (l = (K.get(h, "events") || {})[e.type] && K.get(h, "handle")) && l.apply(h, t),
                    (l = a && h[a]) && l.apply && Z(h) && (e.result = l.apply(h, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Z(n) || a && b(n[p]) && !m(n) && ((r = n[a]) && (n[a] = null), C.event.triggered = p, e.isPropagationStopped() && u.addEventListener(p, Tt), n[p](), e.isPropagationStopped() && u.removeEventListener(p, Tt), C.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(e, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i);
                t || e.addEventListener(n, o, !0),
                K.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i) - 1;
                t ? K.access(e, i, t) : (e.removeEventListener(n, o, !0), K.remove(e, i))
            }
        }
    });
    var Ct = T.location,
        St = Date.now(),
        $t = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Et = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) {
            t = b(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i,
            o = [];
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, o, r) {
                    if (Array.isArray(e))
                        C.each(e, function(e, t) {
                            o || Et.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                        });
                    else if (o || "object" !== h(e))
                        r(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], o, r)
                }(i, e[i], t, n);
        return o.join("&")
    },
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        It = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        Ft = {},
        Nt = {},
        Ht = "*/".concat("*"),
        qt = k.createElement("a");
    function Rt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n,
                i = 0,
                o = e.toLowerCase().match(P) || [];
            if (b(t))
                for (; n = o[i++];)
                    "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function zt(t, i, o, r) {
        var s = {},
            a = t === Nt;
        function l(e) {
            var n;
            return s[e] = !0, C.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
            }), n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Wt(e, t) {
        var n,
            i,
            o = C.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    qt.href = Ct.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Rt(Ft),
        ajaxTransport: Rt(Nt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var l,
                c,
                u,
                n,
                d,
                i,
                p,
                f,
                o,
                h = C.ajaxSetup({}, t),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                v = C.Deferred(),
                y = C.Callbacks("once memory"),
                b = h.statusCode || {},
                r = {},
                s = {},
                a = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Mt.exec(u);)
                                    n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, r[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p)
                                w.always(e[w.status]);
                            else
                                for (var t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return l && l.abort(e), x(0, e), this
                    }
                };
            if (v.promise(w), h.url = ((e || h.url || Ct.href) + "").replace(_t, Ct.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                i = k.createElement("a");
                try {
                    i.href = h.url,
                    i.href = i.href,
                    h.crossDomain = qt.protocol + "//" + qt.host != i.protocol + "//" + i.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), zt(Ft, h, t, w), p)
                return w;
            for (o in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), c = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (e = h.url.slice(c.length), h.data && (h.processData || "string" == typeof h.data) && (c += ($t.test(c) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (c = c.replace(Lt, "$1"), e = ($t.test(c) ? "&" : "?") + "_=" + St++ + e), h.url = c + e), h.ifModified && (C.lastModified[c] && w.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && w.setRequestHeader("If-None-Match", C.etag[c])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers)
                w.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, w, h) || p))
                return w.abort();
            if (a = "abort", y.add(h.complete), w.done(h.success), w.fail(h.error), l = zt(Nt, h, t, w)) {
                if (w.readyState = 1, f && g.trigger("ajaxSend", [w, h]), p)
                    return w;
                h.async && 0 < h.timeout && (d = T.setTimeout(function() {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    p = !1,
                    l.send(r, x)
                } catch (e) {
                    if (p)
                        throw e;
                    x(-1, e)
                }
            } else
                x(-1, "No Transport");
            function x(e, t, n, i) {
                var o,
                    r,
                    s,
                    a = t;
                p || (p = !0, d && T.clearTimeout(d), l = void 0, u = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r), n[r]
                }(h, w, n)), s = function(e, t, n, i) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, s, w, i), i ? (h.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), (n = w.getResponseHeader("etag")) && (C.etag[c] = n)), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || a) + "", i ? v.resolveWith(m, [o, a, w]) : v.rejectWith(m, [w, a, r]), w.statusCode(b), b = void 0, f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [w, h, i ? o : r]), y.fireWith(m, [w, a]), f && (g.trigger("ajaxComplete", [w, h]), --C.active || C.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, o) {
        C[o] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }),
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    },
    C.fn.extend({
        wrapAll: function(e) {
            return this[0] && (b(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    },
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    },
    C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Bt = C.ajaxSettings.xhr();
    y.cors = !!Bt && "withCredentials" in Bt,
    y.ajax = Bt = !!Bt,
    C.ajaxTransport(function(o) {
        var r,
            s;
        if (y.cors || Bt && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n,
                        i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)
                        i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ut[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    },
                    i.onload = r(),
                    s = i.onerror = i.ontimeout = r("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && T.setTimeout(function() {
                            r && s()
                        })
                    },
                    r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r)
                            throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
    }),
    C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function(n) {
        var i,
            o;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    i = C("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }),
                    k.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var Yt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || C.expando + "_" + St++;
            return this[e] = !0, e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i,
            o,
            r,
            s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return r || C.error(i + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = T[i], T[i] = function() {
                r = arguments
            }, n.always(function() {
                void 0 === o ? C(T).removeProp(i) : T[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)),
                r && b(o) && o(r[0]),
                r = o = void 0
            }), "script"
    }),
    y.createHTMLDocument = ((t = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length),
    C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(i)) : t = k), i = !n && [], (n = A.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
        var i
    },
    C.fn.load = function(e, t, n) {
        var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    },
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    },
    C.offset = {
        setOffset: function(e, t, n) {
            var i,
                o,
                r,
                s,
                a = C.css(e, "position"),
                l = C(e),
                c = {};
            "static" === a && (e.style.position = "relative"),
            r = l.offset(),
            i = C.css(e, "top"),
            s = C.css(e, "left"),
            s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0),
            null != (t = b(t) ? t.call(e, n, C.extend({}, r)) : t).top && (c.top = t.top - r.top + o),
            null != t.left && (c.left = t.left - r.left + s),
            "using" in t ? t.using.call(e, c) : l.css(c)
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e,
                n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");)
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - C.css(i, "marginTop", !0),
                    left: t.left - o.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");)
                    e = e.offsetParent;
                return e || ge
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        C.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var i;
                return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void (i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = Ye(e, n), Re.test(t) ? C(e).position()[n] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            C.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    C.fn.extend({
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
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    C.proxy = function(e, t) {
        var n,
            i;
        if ("string" == typeof t && (i = e[t], t = e, e = i), b(e))
            return n = a.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
    },
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    },
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = E,
    C.isFunction = b,
    C.isWindow = m,
    C.camelCase = Y,
    C.type = h,
    C.now = Date.now,
    C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Xt = T.jQuery,
        Kt = T.$;
    return C.noConflict = function(e) {
        return T.$ === C && (T.$ = Kt), e && T.jQuery === C && (T.jQuery = Xt), C
    }, e || (T.jQuery = T.$ = C), C
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var i,
        s = window.Slick || {};
    i = 0,
    (s = function(e, t) {
        var n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        c.extend(n, n.initials),
        n.activeBreakpoint = null,
        n.animType = null,
        n.animProp = null,
        n.breakpoints = [],
        n.breakpointSettings = [],
        n.cssTransitions = !1,
        n.focussed = !1,
        n.interrupted = !1,
        n.hidden = "hidden",
        n.paused = !0,
        n.positionProp = null,
        n.respondTo = null,
        n.rowCount = 1,
        n.shouldClick = !0,
        n.$slider = c(e),
        n.$slidesCache = null,
        n.transformType = null,
        n.transitionType = null,
        n.visibilityChange = "visibilitychange",
        n.windowWidth = 0,
        n.windowTimer = null,
        e = c(e).data("slick") || {},
        n.options = c.extend({}, n.defaults, t, e),
        n.currentSlide = n.options.initialSlide,
        n.originalSettings = n.options,
        void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"),
        n.autoPlay = c.proxy(n.autoPlay, n),
        n.autoPlayClear = c.proxy(n.autoPlayClear, n),
        n.autoPlayIterator = c.proxy(n.autoPlayIterator, n),
        n.changeSlide = c.proxy(n.changeSlide, n),
        n.clickHandler = c.proxy(n.clickHandler, n),
        n.selectHandler = c.proxy(n.selectHandler, n),
        n.setPosition = c.proxy(n.setPosition, n),
        n.swipeHandler = c.proxy(n.swipeHandler, n),
        n.dragHandler = c.proxy(n.dragHandler, n),
        n.keyHandler = c.proxy(n.keyHandler, n),
        n.instanceUid = i++,
        n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        n.registerBreakpoints(),
        n.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    },
    s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t)
            n = t,
            t = null;
        else if (t < 0 || t >= i.slideCount)
            return !1;
        i.unload(),
        "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }),
        i.$slidesCache = i.$slides,
        i.reinit()
    },
    s.prototype.animateHeight = function() {
        var e,
            t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
            height: e
        }, t.options.speed))
    },
    s.prototype.animateSlide = function(e, t) {
        var n = {},
            i = this;
        i.animateHeight(),
        !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
        !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)",
                i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
            i.disableTransition(),
            t.call()
        }, i.options.speed))
    },
    s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? c(e).not(this.$slider) : e
    },
    s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    },
    s.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    },
    s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    },
    s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    },
    s.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    },
    s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    },
    s.prototype.buildDots = function() {
        var e,
            t,
            n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1)
                t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active")
        }
    },
    s.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    },
    s.prototype.buildRows = function() {
        var e,
            t,
            n,
            i = this,
            o = document.createDocumentFragment(),
            r = i.$slider.children();
        if (1 < i.options.rows) {
            for (n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
                for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
                        var u = e * n + (a * i.options.slidesPerRow + c);
                        r.get(u) && l.appendChild(r.get(u))
                    }
                    s.appendChild(l)
                }
                o.appendChild(s)
            }
            i.$slider.empty().append(o),
            i.$slider.children().children().children().css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    },
    s.prototype.checkResponsive = function(e, t) {
        var n,
            i,
            o,
            r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null, r.breakpoints)
                r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i),
            e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    },
    s.prototype.changeSlide = function(e, t) {
        var n,
            i = this,
            o = c(e.currentTarget);
        switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, e.data.message) {
        case "previous":
            r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
            break;
        case "next":
            r = 0 == n ? i.options.slidesToScroll : n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
            break;
        case "index":
            var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(r), !1, t),
            o.children().trigger("focus");
            break;
        default:
            return
        }
    },
    s.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes(),
            n = 0;
        if (e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    },
    s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        c(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
        c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    },
    s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    },
    s.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    },
    s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    },
    s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        c(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    },
    s.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    },
    s.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    },
    s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    },
    s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    },
    s.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
            }, 0)
        })
    },
    s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    },
    s.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++i;
            else
                for (; t < e.slideCount;)
                    ++i,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;)
                ++i,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    },
    s.prototype.getLeft = function(e) {
        var t,
            n,
            i = this,
            o = 0;
        return i.slideOffset = 0, t = i.$slides.first().outerHeight(!0), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, n = -1, !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)), o = t * i.options.slidesToShow * n), i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, o = (e + i.options.slidesToShow - i.slideCount) * t), i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0), !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o, !0 === i.options.variableWidth && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === i.options.centerMode && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (i.$list.width() - o.outerWidth()) / 2)), t
    },
    s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    },
    s.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;)
            i.push(t),
            t = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i
    },
    s.prototype.getSlick = function() {
        return this
    },
    s.prototype.getSlideCount = function() {
        var n,
            i = this,
            o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
        return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * i.swipeLeft)
                return n = t, !1
        }), Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    },
    s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    },
    s.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1, t.autoPlay())
    },
    s.prototype.initADA = function() {
        var n = this,
            i = Math.ceil(n.slideCount / n.options.slidesToShow),
            o = n.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < n.slideCount
            });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }),
            -1 !== t && c(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
            c(this).attr({
                role: "presentation"
            }),
            c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
            n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    },
    s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    },
    s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    },
    s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    },
    s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
        c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
        c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        c(e.setPosition)
    },
    s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    },
    s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    },
    s.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    n = c(this).attr("data-srcset"),
                    i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                },
                o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, t])
                },
                o.src = t
            })
        }
        var t,
            n,
            i,
            r = this;
        if (!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++)
                o < 0 && (o = r.slideCount - 1),
                t = (t = t.add(a.eq(o))).add(a.eq(s)),
                o--,
                s++;
        e(t),
        r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    },
    s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    },
    s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    },
    s.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    },
    s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    },
    s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    },
    s.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    },
    s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    },
    s.prototype.preventDefault = function(e) {
        e.preventDefault()
    },
    s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t,
            n,
            i,
            o,
            r = this,
            s = c("img[data-lazy]", r.$slider);
        s.length ? (t = s.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)),
            t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, t, n]),
            r.progressiveLazyLoad()
        }, s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad())
        }, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    },
    s.prototype.refresh = function(e) {
        var t = this,
            n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        n = t.currentSlide,
        t.destroy(!0),
        c.extend(t, t.initials, {
            currentSlide: n
        }),
        t.init(),
        e || t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    },
    s.prototype.registerBreakpoints = function() {
        var e,
            t,
            n,
            i = this,
            o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window", o)
                if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n;)
                        i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1),
                        n--;
                    i.breakpoints.push(t),
                    i.breakpointSettings[t] = o[e].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    },
    s.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    },
    s.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    },
    s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
            return !1;
        i.unload(),
        (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    },
    s.prototype.setCSS = function(e) {
        var t,
            n,
            i = this,
            o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
        i.$slideTrack.css(o)
    },
    s.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    },
    s.prototype.setFade = function() {
        var n,
            i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1,
            !0 === i.options.rtl ? c(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    },
    s.prototype.setHeight = function() {
        var e,
            t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
    },
    s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e,
            t,
            n,
            i,
            o,
            r = this,
            s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o)
            r.options[n] = i;
        else if ("multiple" === o)
            c.each(n, function(e, t) {
                r.options[e] = t
            });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== c.type(r.options.responsive))
                    r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e;)
                        r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(i[t])
                }
        s && (r.unload(), r.reinit())
    },
    s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    },
    s.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    },
    s.prototype.setSlideClasses = function(e) {
        var t,
            n,
            i,
            o = this,
            r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(e).addClass("slick-current"),
        !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0, i = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = o.options.slidesToShow + e, r.slice(t - i + 1 + n, t + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, t = !0 === o.options.infinite ? o.options.slidesToShow + e : e, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - i), t + i) : r.slice(t, t + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    },
    s.prototype.setupInfinite = function() {
        var e,
            t,
            n,
            i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e)
                t = e - 1,
                c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1)
                t = e,
                c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    },
    s.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    },
    s.prototype.selectHandler = function(e) {
        e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
        e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    },
    s.prototype.slideHandler = function(e, t, n) {
        var i,
            o,
            r,
            s,
            a = this;
        if (t = t || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
            if (!1 === t && a.asNavFor(e), i = e, s = a.getLeft(i), t = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
                    a.postSlide(i)
                }) : a.postSlide(i));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
                    a.postSlide(i)
                }) : a.postSlide(i));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), t = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (r = (r = a.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade)
                    return !0 !== n ? (a.fadeSlideOut(t), a.fadeSlide(o, function() {
                        a.postSlide(o)
                    })) : a.postSlide(o), void a.animateHeight();
                !0 !== n ? a.animateSlide(s, function() {
                    a.postSlide(o)
                }) : a.postSlide(o)
            }
    },
    s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    },
    s.prototype.swipeDirection = function() {
        var e = this,
            t = e.touchObject.startX - e.touchObject.curX,
            n = e.touchObject.startY - e.touchObject.curY,
            t = Math.atan2(n, t);
        return (t = (t = Math.round(180 * t / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    },
    s.prototype.swipeEnd = function(e) {
        var t,
            n,
            i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling)
            return i.scrolling = !1;
        if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    },
    s.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    },
    s.prototype.swipeMove = function(e) {
        var t,
            n,
            i = this,
            o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))), !i.options.verticalSwiping && !i.swiping && 4 < n ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = n), o = i.swipeDirection(), void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0, e.preventDefault()), n = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (n = i.touchObject.curY > i.touchObject.startY ? 1 : -1), e = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (e = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = t + e * n : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * n, !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * n), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))))
    },
    s.prototype.swipeStart = function(e) {
        var t,
            n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    },
    s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    },
    s.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    },
    s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    },
    s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    },
    s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    },
    s.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    },
    c.fn.slick = function() {
        for (var e, t = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = t.length, r = 0; r < o; r++)
            if ("object" == typeof n || void 0 === n ? t[r].slick = new s(t[r], n) : e = t[r].slick[n].apply(t[r].slick, i), void 0 !== e)
                return e;
        return t
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
    "use strict";
    return function(f, n, e, t) {
        var h = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++)
                    t[r] && e[o](t[r], n, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                t = document.createElement(t || "div");
                return e && (t.className = e), t
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, n) {
                h.bind(e, t, n, !0)
            },
            removeClass: function(e, t) {
                t = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(t, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                h.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n;) {
                    if (h.hasClass(n, t))
                        return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t)
                        return i;
                return -1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i))
                            continue;
                        e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (h.features)
                    return h.features;
                var e,
                    t,
                    n = h.createEl().style,
                    i = "",
                    o = {};
                o.oldIE = document.all && !document.addEventListener,
                o.touch = "ontouchstart" in window,
                window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame),
                o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled,
                o.pointerEvent || (e = navigator.userAgent, !/iP(hone|od)/.test(navigator.platform) || (t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && 0 < t.length && (1 <= (t = parseInt(t[1], 10)) && t < 8 && (o.isOldIOSPhone = !0)), t = (t = e.match(/Android\s([0-9\.]*)/)) ? t[1] : 0, 1 <= (t = parseFloat(t)) && (t < 4.4 && (o.isOldAndroid = !0), o.androidVersion = t), o.isMobileOpera = /opera mini|opera mobi/i.test(e));
                for (var r, s, a, l = ["transform", "perspective", "animationName"], c = ["", "webkit", "Moz", "ms", "O"], u = 0; u < 4; u++) {
                    i = c[u];
                    for (var d = 0; d < 3; d++)
                        r = l[d],
                        s = i + (i ? r.charAt(0).toUpperCase() + r.slice(1) : r),
                        !o[r] && s in n && (o[r] = s);
                    i && !o.raf && (i = i.toLowerCase(), o.raf = window[i + "RequestAnimationFrame"], o.raf && (o.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                }
                return o.raf || (a = 0, o.raf = function(e) {
                    var t = (new Date).getTime(),
                        n = Math.max(0, 16 - (t - a)),
                        i = window.setTimeout(function() {
                            e(t + n)
                        }, n);
                    return a = t + n, i
                }, o.caf = function(e) {
                    clearTimeout(e)
                }), o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, h.features = o
            }
        };
        h.detectFeatures(),
        h.features.oldIE && (h.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", s = function() {
                    n.handleEvent.call(n)
                }, a = 0; a < t.length; a++)
                if (o = t[a])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o])
                                return !1
                        } else
                            n["oldIE" + o] = s;
                        e[r]("on" + o, n["oldIE" + o])
                    } else
                        e[r]("on" + o, n)
        });
        var m = this,
            g = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function(e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function(e, t) {
                    return e || t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        h.extend(g, t);
        function i() {
            return {
                x: 0,
                y: 0
            }
        }
        function o(e, t) {
            h.extend(m, t.publicMethods),
            Ge.push(e)
        }
        function s(e) {
            var t = Yt();
            return t - 1 < e ? e - t : e < 0 ? t + e : e
        }
        function r(e, t) {
            return et[e] || (et[e] = []), et[e].push(t)
        }
        function v(e) {
            var t = et[e];
            if (t) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < t.length; i++)
                    t[i].apply(m, n)
            }
        }
        function u() {
            return (new Date).getTime()
        }
        function y(e) {
            He = e,
            m.bg.style.opacity = e * g.bgOpacity
        }
        function a(e, t, n, i, o) {
            (!Qe || o && o !== m.currItem) && (i /= (o || m.currItem).fitRatio),
            e[ae] = G + t + "px, " + n + "px" + J + " scale(" + i + ")"
        }
        function d(e, t) {
            var n;
            !g.loop && t && (n = W + (Xe.x * Ye - e) / Xe.x, t = Math.round(e - wt.x), (n < 0 && 0 < t || n >= Yt() - 1 && t < 0) && (e = wt.x + t * g.mainScrollEndFriction)),
            wt.x = e,
            it(e, U)
        }
        function l(e, t) {
            var n = xt[e] - Ze[e];
            return We[e] + ze[e] + n - t / V * n
        }
        function b(e, t) {
            e.x = t.x,
            e.y = t.y,
            t.id && (e.id = t.id)
        }
        function c(e) {
            e.x = Math.round(e.x),
            e.y = Math.round(e.y)
        }
        function p(e, t) {
            return e = Gt(m.currItem, Be, e), t && (Le = e), e
        }
        function w(e) {
            return (e = e || m.currItem).initialZoomLevel
        }
        function x(e) {
            return 0 < (e = e || m.currItem).w ? g.maxSpreadZoom : 1
        }
        function T(e, t, n, i) {
            return i === m.currItem.initialZoomLevel ? (n[e] = m.currItem.initialPosition[e], !0) : (n[e] = l(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
        }
        function k(e) {
            var t = "";
            g.escKey && 27 === e.keyCode ? t = "close" : g.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
            t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, m[t]()))
        }
        function C(e) {
            e && (Ee || $e || Pe || Te) && (e.preventDefault(), e.stopPropagation())
        }
        function S() {
            m.setScrollOffset(0, h.getScrollY())
        }
        function $(e) {
            st[e] && (st[e].raf && de(st[e].raf), at--, delete st[e])
        }
        function E(e) {
            st[e] && $(e),
            st[e] || (at++, st[e] = {})
        }
        function A() {
            for (var e in st)
                st.hasOwnProperty(e) && $(e)
        }
        function D(e, t, n, i, o, r, s) {
            var a,
                l = u();
            E(e);
            var c = function() {
                if (st[e]) {
                    if (a = u() - l, i <= a)
                        return $(e), r(n), void (s && s());
                    r((n - t) * o(a / i) + t),
                    st[e].raf = ue(c)
                }
            };
            c()
        }
        function j(e, t) {
            return gt.x = Math.abs(e.x - t.x), gt.y = Math.abs(e.y - t.y), Math.sqrt(gt.x * gt.x + gt.y * gt.y)
        }
        function O(e, t) {
            return $t.prevent = !St(e.target, g.isClickableElement), v("preventDragEvent", e, t, $t), $t.prevent
        }
        function I(e, t) {
            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
        }
        function L(e, t, n) {
            n.x = .5 * (e.x + t.x),
            n.y = .5 * (e.y + t.y)
        }
        function M() {
            var e = Ue.y - m.currItem.initialPosition.y;
            return 1 - Math.abs(e / (Be.y / 2))
        }
        function P(e) {
            for (; 0 < Dt.length;)
                Dt.pop();
            return le ? (Re = 0, ft.forEach(function(e) {
                0 === Re ? Dt[0] = e : 1 === Re && (Dt[1] = e),
                Re++
            })) : -1 < e.type.indexOf("touch") ? e.touches && 0 < e.touches.length && (Dt[0] = I(e.touches[0], Et), 1 < e.touches.length && (Dt[1] = I(e.touches[1], At))) : (Et.x = e.pageX, Et.y = e.pageY, Et.id = "", Dt[0] = Et), Dt
        }
        function _(e, t) {
            var n,
                i,
                o,
                r = Ue[e] + t[e],
                s = 0 < t[e],
                a = wt.x + t.x,
                l = wt.x - ht.x,
                c = r > Le.min[e] || r < Le.max[e] ? g.panEndFriction : 1,
                r = Ue[e] + t[e] * c;
            return !g.allowPanToNext && K !== m.currItem.initialZoomLevel || (Me ? "h" !== _e || "x" !== e || $e || (s ? (r > Le.min[e] && (c = g.panEndFriction, Le.min[e], n = Le.min[e] - We[e]), (n <= 0 || l < 0) && 1 < Yt() ? (o = a, l < 0 && a > ht.x && (o = ht.x)) : Le.min.x !== Le.max.x && (i = r)) : (r < Le.max[e] && (c = g.panEndFriction, Le.max[e], n = We[e] - Le.max[e]), (n <= 0 || 0 < l) && 1 < Yt() ? (o = a, 0 < l && a < ht.x && (o = ht.x)) : Le.min.x !== Le.max.x && (i = r))) : o = a, "x" !== e) ? void (Pe || De || K > m.currItem.fitRatio && (Ue[e] += t[e] * c)) : (void 0 !== o && (d(o, !0), De = o !== ht.x), Le.min.x !== Le.max.x && (void 0 !== i ? Ue.x = i : De || (Ue.x += t.x * c)), void 0 !== o)
        }
        function F(e) {
            var t;
            "mousedown" === e.type && 0 < e.button || (Ut ? e.preventDefault() : ke && "mousedown" === e.type || (O(e, !0) && e.preventDefault(), v("pointerDown"), le && ((t = h.arraySearch(ft, e.pointerId, "id")) < 0 && (t = ft.length), ft[t] = {
                x: e.pageX,
                y: e.pageY,
                id: e.pointerId
            }), e = (t = P(e)).length, je = null, A(), Ce && 1 !== e || (Ce = Fe = !0, h.bind(window, Y, m), xe = qe = Ne = Te = De = Ee = Se = $e = !1, _e = null, v("firstTouchStart", t), b(We, Ue), ze.x = ze.y = 0, b(dt, t[0]), b(pt, dt), ht.x = Xe.x * Ye, mt = [{
                x: dt.x,
                y: dt.y
            }], be = ye = u(), p(K, !0), kt(), Ct()), !Oe && 1 < e && !Pe && !De && (V = K, Oe = Se = !($e = !1), ze.y = ze.x = 0, b(We, Ue), b(lt, t[0]), b(ct, t[1]), L(lt, ct, Tt), xt.x = Math.abs(Tt.x) - Ue.x, xt.y = Math.abs(Tt.y) - Ue.y, Ie = j(lt, ct))))
        }
        function N(e) {
            var t,
                n;
            e.preventDefault(),
            le && -1 < (t = h.arraySearch(ft, e.pointerId, "id")) && ((n = ft[t]).x = e.pageX, n.y = e.pageY),
            Ce && (n = P(e), _e || Ee || Oe ? je = n : wt.x !== Xe.x * Ye ? _e = "h" : (e = Math.abs(n[0].x - dt.x) - Math.abs(n[0].y - dt.y), 10 <= Math.abs(e) && (_e = 0 < e ? "h" : "v", je = n)))
        }
        function H(e) {
            if (ge.isOldAndroid) {
                if (ke && "mouseup" === e.type)
                    return;
                -1 < e.type.indexOf("touch") && (clearTimeout(ke), ke = setTimeout(function() {
                    ke = 0
                }, 600))
            }
            v("pointerUp"),
            O(e, !1) && e.preventDefault(),
            !le || -1 < (n = h.arraySearch(ft, e.pointerId, "id")) && (r = ft.splice(n, 1)[0], navigator.pointerEnabled ? r.type = e.pointerType || "mouse" : (r.type = {
                4: "mouse",
                2: "touch",
                3: "pen"
            }[e.pointerType], r.type || (r.type = e.pointerType || "mouse")));
            var t = P(e),
                n = t.length;
            if (2 === (n = "mouseup" === e.type ? 0 : n))
                return !(je = null);
            1 === n && b(pt, t[0]),
            0 !== n || _e || Pe || (r || ("mouseup" === e.type ? r = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (r = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
            })), v("touchRelease", e, r));
            var i,
                o,
                r = -1;
            if (0 === n && (Ce = !1, h.unbind(window, Y, m), kt(), Oe ? r = 0 : -1 !== bt && (r = u() - bt)), bt = 1 === n ? u() : -1, r = -1 !== r && r < 150 ? "zoom" : "swipe", Oe && n < 2 && (Oe = !1, 1 === n && (r = "zoomPointerUp"), v("zoomGestureEnded")), je = null, Ee || $e || Pe || Te)
                if (A(), (we = we || Ot()).calculateSwipeSpeed("x"), Te)
                    M() < g.verticalDragRange ? m.close() : (i = Ue.y, o = He, D("verticalDrag", 0, 1, 300, h.easing.cubic.out, function(e) {
                        Ue.y = (m.currItem.initialPosition.y - i) * e + i,
                        y((1 - o) * e + o),
                        tt()
                    }), v("onVerticalDrag", 1));
                else {
                    if ((De || Pe) && 0 === n) {
                        if (Lt(r, we))
                            return;
                        r = "zoomPointerUp"
                    }
                    if (!Pe)
                        return "swipe" !== r ? void Pt() : void (!De && K > m.currItem.fitRatio && It(we))
                }
        }
        var q,
            R,
            z,
            W,
            U,
            B,
            Y,
            Z,
            X,
            K,
            V,
            G,
            J,
            Q,
            ee,
            te,
            ne,
            ie,
            oe,
            re,
            se,
            ae,
            le,
            ce,
            ue,
            de,
            pe,
            fe,
            he,
            me,
            ge,
            ve,
            ye,
            be,
            we,
            xe,
            Te,
            ke,
            Ce,
            Se,
            $e,
            Ee,
            Ae,
            De,
            je,
            Oe,
            Ie,
            Le,
            Me,
            Pe,
            _e,
            Fe,
            Ne,
            He,
            qe,
            Re,
            ze = i(),
            We = i(),
            Ue = i(),
            Be = {},
            Ye = 0,
            Ze = {},
            Xe = i(),
            Ke = 0,
            Ve = !0,
            Ge = [],
            Je = {},
            Qe = !1,
            et = {},
            tt = function(e) {
                Me && (e && (K > m.currItem.fitRatio ? Qe || (Jt(m.currItem, !1, !0), Qe = !0) : Qe && (Jt(m.currItem), Qe = !1)), a(Me, Ue.x, Ue.y, K))
            },
            nt = function(e) {
                e.container && a(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            },
            it = function(e, t) {
                t[ae] = G + e + "px, 0px" + J
            },
            ot = null,
            rt = function() {
                ot && (h.unbind(document, "mousemove", rt), h.addClass(f, "pswp--has_mouse"), g.mouseUsed = !0, v("mouseUsed")),
                ot = setTimeout(function() {
                    ot = null
                }, 100)
            },
            st = {},
            at = 0,
            t = {
                shout: v,
                listen: r,
                viewportSize: Be,
                options: g,
                isMainScrollAnimating: function() {
                    return Pe
                },
                getZoomLevel: function() {
                    return K
                },
                getCurrentIndex: function() {
                    return W
                },
                isDragging: function() {
                    return Ce
                },
                isZooming: function() {
                    return Oe
                },
                setScrollOffset: function(e, t) {
                    Ze.x = e,
                    me = Ze.y = t,
                    v("updateScrollOffset", Ze)
                },
                applyZoomPan: function(e, t, n, i) {
                    Ue.x = t,
                    Ue.y = n,
                    K = e,
                    tt(i)
                },
                init: function() {
                    if (!q && !R) {
                        var e;
                        m.framework = h,
                        m.template = f,
                        m.bg = h.getChildByClass(f, "pswp__bg"),
                        pe = f.className,
                        q = !0,
                        ge = h.detectFeatures(),
                        ue = ge.raf,
                        de = ge.caf,
                        ae = ge.transform,
                        he = ge.oldIE,
                        m.scrollWrap = h.getChildByClass(f, "pswp__scroll-wrap"),
                        m.container = h.getChildByClass(m.scrollWrap, "pswp__container"),
                        U = m.container.style,
                        m.itemHolders = te = [{
                            el: m.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: m.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: m.container.children[2],
                            wrap: 0,
                            index: -1
                        }],
                        te[0].el.style.display = te[2].el.style.display = "none",
                        function() {
                            if (ae) {
                                var e = ge.perspective && !ce;
                                return G = "translate" + (e ? "3d(" : "("), J = ge.perspective ? ", 0px)" : ")"
                            }
                            ae = "left",
                            h.addClass(f, "pswp--ie"),
                            it = function(e, t) {
                                t.left = e + "px"
                            },
                            nt = function(e) {
                                var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                                    n = e.container.style,
                                    i = t * e.w,
                                    t = t * e.h;
                                n.width = i + "px",
                                n.height = t + "px",
                                n.left = e.initialPosition.x + "px",
                                n.top = e.initialPosition.y + "px"
                            },
                            tt = function() {
                                var e,
                                    t,
                                    n,
                                    i;
                                Me && (e = Me, n = (t = 1 < (i = m.currItem).fitRatio ? 1 : i.fitRatio) * i.w, i = t * i.h, e.width = n + "px", e.height = i + "px", e.left = Ue.x + "px", e.top = Ue.y + "px")
                            }
                        }(),
                        X = {
                            resize: m.updateSize,
                            orientationchange: function() {
                                clearTimeout(ve),
                                ve = setTimeout(function() {
                                    Be.x !== m.scrollWrap.clientWidth && m.updateSize()
                                }, 500)
                            },
                            scroll: S,
                            keydown: k,
                            click: C
                        };
                        var t = ge.isOldIOSPhone || ge.isOldAndroid || ge.isMobileOpera;
                        for (ge.animationName && ge.transform && !t || (g.showAnimationDuration = g.hideAnimationDuration = 0), e = 0; e < Ge.length; e++)
                            m["init" + Ge[e]]();
                        n && (m.ui = new n(m, h)).init(),
                        v("firstUpdate"),
                        W = W || g.index || 0,
                        (isNaN(W) || W < 0 || W >= Yt()) && (W = 0),
                        m.currItem = Bt(W),
                        (ge.isOldIOSPhone || ge.isOldAndroid) && (Ve = !1),
                        f.setAttribute("aria-hidden", "false"),
                        g.modal && (Ve ? f.style.position = "fixed" : (f.style.position = "absolute", f.style.top = h.getScrollY() + "px")),
                        void 0 === me && (v("initialLayout"), me = fe = h.getScrollY());
                        t = "pswp--open ";
                        for (g.mainClass && (t += g.mainClass + " "), g.showHideOpacity && (t += "pswp--animate_opacity "), t += ce ? "pswp--touch" : "pswp--notouch", t += ge.animationName ? " pswp--css_animation" : "", t += ge.svg ? " pswp--svg" : "", h.addClass(f, t), m.updateSize(), B = -1, Ke = null, e = 0; e < 3; e++)
                            it((e + B) * Xe.x, te[e].el.style);
                        he || h.bind(m.scrollWrap, Z, m),
                        r("initialZoomInEnd", function() {
                            m.setContent(te[0], W - 1),
                            m.setContent(te[2], W + 1),
                            te[0].el.style.display = te[2].el.style.display = "block",
                            g.focus && f.focus(),
                            h.bind(document, "keydown", m),
                            ge.transform && h.bind(m.scrollWrap, "click", m),
                            g.mouseUsed || h.bind(document, "mousemove", rt),
                            h.bind(window, "resize scroll orientationchange", m),
                            v("bindEvents")
                        }),
                        m.setContent(te[1], W),
                        m.updateCurrItem(),
                        v("afterInit"),
                        Ve || (Q = setInterval(function() {
                            at || Ce || Oe || K !== m.currItem.initialZoomLevel || m.updateSize()
                        }, 1e3)),
                        h.addClass(f, "pswp--visible")
                    }
                },
                close: function() {
                    q && (R = !(q = !1), v("close"), h.unbind(window, "resize scroll orientationchange", m), h.unbind(window, "scroll", X.scroll), h.unbind(document, "keydown", m), h.unbind(document, "mousemove", rt), ge.transform && h.unbind(m.scrollWrap, "click", m), Ce && h.unbind(window, Y, m), clearTimeout(ve), v("unbindEvents"), Zt(m.currItem, null, !0, m.destroy))
                },
                destroy: function() {
                    v("destroy"),
                    Rt && clearTimeout(Rt),
                    f.setAttribute("aria-hidden", "true"),
                    f.className = pe,
                    Q && clearInterval(Q),
                    h.unbind(m.scrollWrap, Z, m),
                    h.unbind(window, "scroll", m),
                    kt(),
                    A(),
                    et = null
                },
                panTo: function(e, t, n) {
                    n || (e > Le.min.x ? e = Le.min.x : e < Le.max.x && (e = Le.max.x), t > Le.min.y ? t = Le.min.y : t < Le.max.y && (t = Le.max.y)),
                    Ue.x = e,
                    Ue.y = t,
                    tt()
                },
                handleEvent: function(e) {
                    e = e || window.event,
                    X[e.type] && X[e.type](e)
                },
                goTo: function(e) {
                    var t = (e = s(e)) - W;
                    Ke = t,
                    W = e,
                    m.currItem = Bt(W),
                    Ye -= t,
                    d(Xe.x * Ye),
                    A(),
                    Pe = !1,
                    m.updateCurrItem()
                },
                next: function() {
                    m.goTo(W + 1)
                },
                prev: function() {
                    m.goTo(W - 1)
                },
                updateCurrZoomItem: function(e) {
                    var t;
                    e && v("beforeChange", 0),
                    Me = te[1].el.children.length ? (t = te[1].el.children[0], h.hasClass(t, "pswp__zoom-wrap") ? t.style : null) : null,
                    Le = m.currItem.bounds,
                    V = K = m.currItem.initialZoomLevel,
                    Ue.x = Le.center.x,
                    Ue.y = Le.center.y,
                    e && v("afterChange")
                },
                invalidateCurrItems: function() {
                    ee = !0;
                    for (var e = 0; e < 3; e++)
                        te[e].item && (te[e].item.needsUpdate = !0)
                },
                updateCurrItem: function(e) {
                    if (0 !== Ke) {
                        var t,
                            n = Math.abs(Ke);
                        if (!(e && n < 2)) {
                            m.currItem = Bt(W),
                            Qe = !1,
                            v("beforeChange", Ke),
                            3 <= n && (B += Ke + (0 < Ke ? -3 : 3), n = 3);
                            for (var i = 0; i < n; i++)
                                0 < Ke ? (t = te.shift(), te[2] = t, it((++B + 2) * Xe.x, t.el.style), m.setContent(t, W - n + i + 1 + 1)) : (t = te.pop(), te.unshift(t), it(--B * Xe.x, t.el.style), m.setContent(t, W + n - i - 1 - 1));
                            !Me || 1 !== Math.abs(Ke) || (e = Bt(ne)).initialZoomLevel !== K && (Gt(e, Be), Jt(e), nt(e)),
                            Ke = 0,
                            m.updateCurrZoomItem(),
                            ne = W,
                            v("afterChange")
                        }
                    }
                },
                updateSize: function(e) {
                    if (!Ve && g.modal) {
                        var t = h.getScrollY();
                        if (me !== t && (f.style.top = t + "px", me = t), !e && Je.x === window.innerWidth && Je.y === window.innerHeight)
                            return;
                        Je.x = window.innerWidth,
                        Je.y = window.innerHeight,
                        f.style.height = Je.y + "px"
                    }
                    if (Be.x = m.scrollWrap.clientWidth, Be.y = m.scrollWrap.clientHeight, S(), Xe.x = Be.x + Math.round(Be.x * g.spacing), Xe.y = Be.y, d(Xe.x * Ye), v("beforeResize"), void 0 !== B) {
                        for (var n, i, o, r = 0; r < 3; r++)
                            n = te[r],
                            it((r + B) * Xe.x, n.el.style),
                            o = W + r - 1,
                            g.loop && 2 < Yt() && (o = s(o)),
                            (i = Bt(o)) && (ee || i.needsUpdate || !i.bounds) ? (m.cleanSlide(i), m.setContent(n, o), 1 === r && (m.currItem = i, m.updateCurrZoomItem(!0)), i.needsUpdate = !1) : -1 === n.index && 0 <= o && m.setContent(n, o),
                            i && i.container && (Gt(i, Be), Jt(i), nt(i));
                        ee = !1
                    }
                    V = K = m.currItem.initialZoomLevel,
                    (Le = m.currItem.bounds) && (Ue.x = Le.center.x, Ue.y = Le.center.y, tt(!0)),
                    v("resize")
                },
                zoomTo: function(t, e, n, i, o) {
                    e && (V = K, xt.x = Math.abs(e.x) - Ue.x, xt.y = Math.abs(e.y) - Ue.y, b(We, Ue));
                    var e = p(t, !1),
                        r = {};
                    T("x", e, r, t),
                    T("y", e, r, t);
                    var s = K,
                        a = Ue.x,
                        l = Ue.y;
                    c(r);
                    e = function(e) {
                        1 === e ? (K = t, Ue.x = r.x, Ue.y = r.y) : (K = (t - s) * e + s, Ue.x = (r.x - a) * e + a, Ue.y = (r.y - l) * e + l),
                        o && o(e),
                        tt(1 === e)
                    };
                    n ? D("customZoomTo", 0, 1, n, i || h.easing.sine.inOut, e) : e(1)
                }
            },
            lt = {},
            ct = {},
            ut = {},
            dt = {},
            pt = {},
            ft = [],
            ht = {},
            mt = [],
            gt = {},
            vt = 0,
            yt = i(),
            bt = 0,
            wt = i(),
            xt = i(),
            Tt = i(),
            kt = function() {
                Ae && (de(Ae), Ae = null)
            },
            Ct = function() {
                Ce && (Ae = ue(Ct), jt())
            },
            St = function(e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")) && (t(e) ? e : St(e.parentNode, t))
            },
            $t = {},
            Et = {},
            At = {},
            Dt = [],
            jt = function() {
                if (je) {
                    var e = je.length;
                    if (0 !== e)
                        if (b(lt, je[0]), ut.x = lt.x - dt.x, ut.y = lt.y - dt.y, Oe && 1 < e)
                            dt.x = lt.x,
                            dt.y = lt.y,
                            (ut.x || ut.y || (r = je[1], s = ct, r.x !== s.x || r.y !== s.y)) && (b(ct, je[1]), $e || ($e = !0, v("zoomGestureStarted")), i = j(lt, ct), (o = Mt(i)) > m.currItem.initialZoomLevel + m.currItem.initialZoomLevel / 15 && (qe = !0), n = 1, e = w(), r = x(), o < e ? g.pinchToClose && !qe && V <= m.currItem.initialZoomLevel ? (y(s = 1 - (e - o) / (e / 1.2)), v("onPinchClose", s), Ne = !0) : o = e - (n = 1 < (n = (e - o) / e) ? 1 : n) * (e / 3) : r < o && (o = r + (n = 1 < (n = (o - r) / (6 * e)) ? 1 : n) * e), n < 0 && (n = 0), L(lt, ct, yt), ze.x += yt.x - Tt.x, ze.y += yt.y - Tt.y, b(Tt, yt), Ue.x = l("x", o), Ue.y = l("y", o), xe = K < o, K = o, tt());
                        else if (_e && (Fe && (Fe = !1, 10 <= Math.abs(ut.x) && (ut.x -= je[0].x - pt.x), 10 <= Math.abs(ut.y) && (ut.y -= je[0].y - pt.y)), dt.x = lt.x, dt.y = lt.y, 0 !== ut.x || 0 !== ut.y)) {
                            if ("v" === _e && g.closeOnVerticalDrag && "fit" === g.scaleMode && K === m.currItem.initialZoomLevel) {
                                ze.y += ut.y,
                                Ue.y += ut.y;
                                var t = M();
                                return Te = !0, v("onVerticalDrag", t), y(t), void tt()
                            }
                            n = u(),
                            i = lt.x,
                            o = lt.y,
                            50 < n - be && ((t = 2 < mt.length ? mt.shift() : {}).x = i, t.y = o, mt.push(t), be = n),
                            Ee = !0,
                            Le = m.currItem.bounds,
                            _("x", ut) || (_("y", ut), c(Ue), tt())
                        }
                }
                var n,
                    i,
                    o,
                    r,
                    s
            },
            Ot = function() {
                var t,
                    n,
                    i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(e) {
                            n = 1 < mt.length ? (t = u() - be + 50, mt[mt.length - 2][e]) : (t = u() - ye, pt[e]),
                            i.lastFlickOffset[e] = dt[e] - n,
                            i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e]),
                            20 < i.lastFlickDist[e] ? i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t : i.lastFlickSpeed[e] = 0,
                            Math.abs(i.lastFlickSpeed[e]) < .1 && (i.lastFlickSpeed[e] = 0),
                            i.slowDownRatio[e] = .95,
                            i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e],
                            i.speedDecelerationRatio[e] = 1
                        },
                        calculateOverBoundsAnimOffset: function(t, e) {
                            i.backAnimStarted[t] || (Ue[t] > Le.min[t] ? i.backAnimDestination[t] = Le.min[t] : Ue[t] < Le.max[t] && (i.backAnimDestination[t] = Le.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, D("bounceZoomPan" + t, Ue[t], i.backAnimDestination[t], e || 300, h.easing.sine.out, function(e) {
                                Ue[t] = e,
                                tt()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, Ue[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            if (st.zoomPan && (st.zoomPan.raf = ue(i.panAnimLoop), i.now = u(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), tt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05))
                                return Ue.x = Math.round(Ue.x), Ue.y = Math.round(Ue.y), tt(), void $("zoomPan")
                        }
                    };
                return i
            },
            It = function(e) {
                return e.calculateSwipeSpeed("y"), Le = m.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (E("zoomPan"), e.lastNow = u(), void e.panAnimLoop())
            },
            Lt = function(e, t) {
                var n,
                    i;
                Pe || (vt = W),
                "swipe" === e && (i = dt.x - pt.x, e = t.lastFlickDist.x < 10, 30 < i && (e || 20 < t.lastFlickOffset.x) ? r = -1 : i < -30 && (e || t.lastFlickOffset.x < -20) && (r = 1)),
                r && ((W += r) < 0 ? (W = g.loop ? Yt() - 1 : 0, o = !0) : W >= Yt() && (W = g.loop ? 0 : Yt() - 1, o = !0), o && !g.loop || (Ke += r, Ye -= r, n = !0));
                var o = Xe.x * Ye,
                    r = Math.abs(o - wt.x),
                    s = n || o > wt.x == 0 < t.lastFlickSpeed.x ? (s = 0 < Math.abs(t.lastFlickSpeed.x) ? r / Math.abs(t.lastFlickSpeed.x) : 333, s = Math.min(s, 400), Math.max(s, 250)) : 333;
                return vt === W && (n = !1), Pe = !0, v("mainScrollAnimStart"), D("mainScroll", wt.x, o, s, h.easing.cubic.out, d, function() {
                    A(),
                    Pe = !1,
                    vt = -1,
                    !n && vt === W || m.updateCurrItem(),
                    v("mainScrollAnimComplete")
                }), n && m.updateCurrItem(!0), n
            },
            Mt = function(e) {
                return 1 / Ie * e * V
            },
            Pt = function() {
                var e = K,
                    t = w(),
                    n = x();
                K < t ? e = t : n < K && (e = n);
                var i,
                    o = He;
                return Ne && !xe && !qe && K < t ? m.close() : (Ne && (i = function(e) {
                    y((1 - o) * e + o)
                }), m.zoomTo(e, 0, 200, h.easing.cubic.out, i)), !0
            };
        o("Gestures", {
            publicMethods: {
                initGestures: function() {
                    function e(e, t, n, i, o) {
                        ie = e + t,
                        oe = e + n,
                        re = e + i,
                        se = o ? e + o : ""
                    }
                    (le = ge.pointerEvent) && ge.touch && (ge.touch = !1),
                    le ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : ge.touch ? (e("touch", "start", "move", "end", "cancel"), ce = !0) : e("mouse", "down", "move", "up"),
                    Y = oe + " " + re + " " + se,
                    Z = ie,
                    le && !ce && (ce = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints),
                    m.likelyTouchDevice = ce,
                    X[ie] = F,
                    X[oe] = N,
                    X[re] = H,
                    se && (X[se] = X[re]),
                    ge.touch && (Z += " mousedown", Y += " mousemove mouseup", X.mousedown = X[ie], X.mousemove = X[oe], X.mouseup = X[re]),
                    ce || (g.allowPanToNext = !1)
                }
            }
        });
        function _t() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        }
        function Ft(e, t, n, i, o, r) {
            t.loadError || i && (t.imageAppended = !0, Jt(t, i, t === m.currItem && Qe), n.appendChild(i), r && setTimeout(function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }
        function Nt(e) {
            function t() {
                e.loading = !1,
                e.loaded = !0,
                e.loadComplete ? e.loadComplete(e) : e.img = null,
                n.onload = n.onerror = null,
                n = null
            }
            e.loading = !0,
            e.loaded = !1;
            var n = e.img = h.createEl("pswp__img", "img");
            return n.onload = t, n.onerror = function() {
                e.loadError = !0,
                t()
            }, n.src = e.src, n
        }
        function Ht(e, t) {
            return e.src && e.loadError && e.container && (t && (e.container.innerHTML = ""), e.container.innerHTML = g.errorMsg.replace("%url%", e.src), 1)
        }
        function qt() {
            if (Kt.length) {
                for (var e, t = 0; t < Kt.length; t++)
                    (e = Kt[t]).holder.index === e.index && Ft(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Kt = []
            }
        }
        var Rt,
            zt,
            Wt,
            Ut,
            Bt,
            Yt,
            Zt = function(s, e, a, t) {
                var l;
                Rt && clearTimeout(Rt),
                Wt = Ut = !0,
                s.initialLayout ? (l = s.initialLayout, s.initialLayout = null) : l = g.getThumbBoundsFn && g.getThumbBoundsFn(W);
                function c() {
                    $("initialZoom"),
                    a ? (m.template.removeAttribute("style"), m.bg.removeAttribute("style")) : (y(1), e && (e.style.display = "block"), h.addClass(f, "pswp--animated-in"), v("initialZoom" + (a ? "OutEnd" : "InEnd"))),
                    t && t(),
                    Ut = !1
                }
                var u = a ? g.hideAnimationDuration : g.showAnimationDuration;
                if (!u || !l || void 0 === l.x)
                    return v("initialZoom" + (a ? "Out" : "In")), K = s.initialZoomLevel, b(Ue, s.initialPosition), tt(), f.style.opacity = a ? 0 : 1, y(1), void (u ? setTimeout(function() {
                        c()
                    }, u) : c());
                var d,
                    p;
                d = z,
                p = !m.currItem.src || m.currItem.loadError || g.showHideOpacity,
                s.miniImg && (s.miniImg.style.webkitBackfaceVisibility = "hidden"),
                a || (K = l.w / s.w, Ue.x = l.x, Ue.y = l.y - fe, m[p ? "template" : "bg"].style.opacity = .001, tt()),
                E("initialZoom"),
                a && !d && h.removeClass(f, "pswp--animated-in"),
                p && (a ? h[(d ? "remove" : "add") + "Class"](f, "pswp--animate_opacity") : setTimeout(function() {
                    h.addClass(f, "pswp--animate_opacity")
                }, 30)),
                Rt = setTimeout(function() {
                    var t,
                        n,
                        i,
                        o,
                        r,
                        e;
                    v("initialZoom" + (a ? "Out" : "In")),
                    a ? (t = l.w / s.w, n = Ue.x, i = Ue.y, o = K, r = He, e = function(e) {
                        1 === e ? (K = t, Ue.x = l.x, Ue.y = l.y - me) : (K = (t - o) * e + o, Ue.x = (l.x - n) * e + n, Ue.y = (l.y - me - i) * e + i),
                        tt(),
                        p ? f.style.opacity = 1 - e : y(r - e * r)
                    }, d ? D("initialZoom", 0, 1, u, h.easing.cubic.out, e, c) : (e(1), Rt = setTimeout(c, u + 20))) : (K = s.initialZoomLevel, b(Ue, s.initialPosition), tt(), y(1), p ? f.style.opacity = 1 : y(1), Rt = setTimeout(c, u + 20))
                }, a ? 25 : 90)
            },
            Xt = {},
            Kt = [],
            Vt = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                    return zt.length
                }
            },
            Gt = function(e, t, n) {
                if (!e.src || e.loadError)
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = _t(), e.initialPosition = e.bounds.center, e.bounds;
                var i,
                    o,
                    r,
                    s = !n;
                return s && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), v("parseVerticalMargin", e)), Xt.x = t.x, Xt.y = t.y - e.vGap.top - e.vGap.bottom, s && (i = Xt.x / e.w, o = Xt.y / e.h, e.fitRatio = i < o ? i : o, "orig" === (r = g.scaleMode) ? n = 1 : "fit" === r && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = _t())), n ? (i = (t = e).w * n, o = e.h * n, (r = t.bounds).center.x = Math.round((Xt.x - i) / 2), r.center.y = Math.round((Xt.y - o) / 2) + t.vGap.top, r.max.x = i > Xt.x ? Math.round(Xt.x - i) : r.center.x, r.max.y = o > Xt.y ? Math.round(Xt.y - o) + t.vGap.top : r.center.y, r.min.x = i > Xt.x ? 0 : r.center.x, r.min.y = o > Xt.y ? t.vGap.top : r.center.y, s && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0
            },
            Jt = function(e, t, n) {
                var i;
                e.src && (t = t || e.container.lastChild, i = n ? e.w : Math.round(e.w * e.fitRatio), n = n ? e.h : Math.round(e.h * e.fitRatio), e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = n + "px"), t.style.width = i + "px", t.style.height = n + "px")
            };
        o("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = s(e);
                    var t = Bt(e);
                    t && (!t.loaded && !t.loading || ee) && (v("gettingData", e, t), t.src && Nt(t))
                },
                initController: function() {
                    h.extend(g, Vt, !0),
                    m.items = zt = e,
                    Bt = m.getItemAt,
                    Yt = g.getNumItemsFn,
                    g.loop,
                    Yt() < 3 && (g.loop = !1),
                    r("beforeChange", function(e) {
                        for (var t = g.preload, n = null === e || 0 <= e, i = Math.min(t[0], Yt()), o = Math.min(t[1], Yt()), r = 1; r <= (n ? o : i); r++)
                            m.lazyLoadItem(W + r);
                        for (r = 1; r <= (n ? i : o); r++)
                            m.lazyLoadItem(W - r)
                    }),
                    r("initialLayout", function() {
                        m.currItem.initialLayout = g.getThumbBoundsFn && g.getThumbBoundsFn(W)
                    }),
                    r("mainScrollAnimComplete", qt),
                    r("initialZoomInEnd", qt),
                    r("destroy", function() {
                        for (var e, t = 0; t < zt.length; t++)
                            (e = zt[t]).container && (e.container = null),
                            e.placeholder && (e.placeholder = null),
                            e.img && (e.img = null),
                            e.preloader && (e.preloader = null),
                            e.loadError && (e.loaded = e.loadError = !1);
                        Kt = null
                    })
                },
                getItemAt: function(e) {
                    return 0 <= e && void 0 !== zt[e] && zt[e]
                },
                allowProgressiveImg: function() {
                    return g.forceProgressiveLoading || !ce || g.mouseUsed || 1200 < screen.width
                },
                setContent: function(t, n) {
                    g.loop && (n = s(n));
                    var e = m.getItemAt(t.index);
                    e && (e.container = null);
                    var i,
                        o,
                        r = m.getItemAt(n);
                    r ? (v("gettingData", n, r), t.index = n, o = (t.item = r).container = h.createEl("pswp__zoom-wrap"), !r.src && r.html && (r.html.tagName ? o.appendChild(r.html) : o.innerHTML = r.html), Ht(r), Gt(r, Be), !r.src || r.loadError || r.loaded ? r.src && !r.loadError && ((i = h.createEl("pswp__img", "img")).style.opacity = 1, i.src = r.src, Jt(r, i), Ft(0, r, o, i)) : (r.loadComplete = function(e) {
                        if (q) {
                            if (t && t.index === n) {
                                if (Ht(e, !0))
                                    return e.loadComplete = e.img = null, Gt(e, Be), nt(e), void (t.index === W && m.updateCurrZoomItem());
                                e.imageAppended ? !Ut && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) : ge.transform && (Pe || Ut) ? Kt.push({
                                    item: e,
                                    baseDiv: o,
                                    img: e.img,
                                    index: n,
                                    holder: t,
                                    clearPlaceholder: !0
                                }) : Ft(0, e, o, e.img, 0, !0)
                            }
                            e.loadComplete = null,
                            e.img = null,
                            v("imageLoadComplete", n, e)
                        }
                    }, h.features.transform && (e = "pswp__img pswp__img--placeholder", e += r.msrc ? "" : " pswp__img--placeholder--blank", e = h.createEl(e, r.msrc ? "img" : ""), r.msrc && (e.src = r.msrc), Jt(r, e), o.appendChild(e), r.placeholder = e), r.loading || Nt(r), m.allowProgressiveImg() && (!Wt && ge.transform ? Kt.push({
                        item: r,
                        baseDiv: o,
                        img: r.img,
                        index: n,
                        holder: t
                    }) : Ft(0, r, o, r.img, 0, !0))), Wt || n !== W ? nt(r) : (Me = o.style, Zt(r, i || r.img)), t.el.innerHTML = "", t.el.appendChild(o)) : t.el.innerHTML = ""
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null),
                    e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        function Qt(e, t, n) {
            var i = document.createEvent("CustomEvent"),
                n = {
                    origEvent: e,
                    target: e.target,
                    releasePoint: t,
                    pointerType: n || "touch"
                };
            i.initCustomEvent("pswpTap", !0, !0, n),
            e.target.dispatchEvent(i)
        }
        var en,
            tn,
            nn = {};
        o("Tap", {
            publicMethods: {
                initTap: function() {
                    r("firstTouchStart", m.onTapStart),
                    r("touchRelease", m.onTapRelease),
                    r("destroy", function() {
                        nn = {},
                        en = null
                    })
                },
                onTapStart: function(e) {
                    1 < e.length && (clearTimeout(en), en = null)
                },
                onTapRelease: function(e, t) {
                    var n,
                        i,
                        o;
                    !t || Ee || Se || at || (n = t, en && (clearTimeout(en), en = null, i = n, o = nn, Math.abs(i.x - o.x) < 25 && Math.abs(i.y - o.y) < 25) ? v("doubleTap", n) : "mouse" !== t.type ? "BUTTON" === e.target.tagName.toUpperCase() || h.hasClass(e.target, "pswp__single-tap") ? Qt(e, t) : (b(nn, n), en = setTimeout(function() {
                        Qt(e, t),
                        en = null
                    }, 300)) : Qt(e, t, "mouse"))
                }
            }
        }),
        o("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    he || (ce ? r("mouseUsed", function() {
                        m.setupDesktopZoom()
                    }) : m.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(e) {
                    tn = {};
                    var t = "wheel mousewheel DOMMouseScroll";
                    r("bindEvents", function() {
                        h.bind(f, t, m.handleMouseWheel)
                    }),
                    r("unbindEvents", function() {
                        tn && h.unbind(f, t, m.handleMouseWheel)
                    }),
                    m.mouseZoomedIn = !1;
                    function n() {
                        m.mouseZoomedIn && (h.removeClass(f, "pswp--zoomed-in"), m.mouseZoomedIn = !1),
                        K < 1 ? h.addClass(f, "pswp--zoom-allowed") : h.removeClass(f, "pswp--zoom-allowed"),
                        o()
                    }
                    var i,
                        o = function() {
                            i && (h.removeClass(f, "pswp--dragging"), i = !1)
                        };
                    r("resize", n),
                    r("afterChange", n),
                    r("pointerDown", function() {
                        m.mouseZoomedIn && (i = !0, h.addClass(f, "pswp--dragging"))
                    }),
                    r("pointerUp", o),
                    e || n()
                },
                handleMouseWheel: function(e) {
                    if (K <= m.currItem.fitRatio)
                        return g.modal && (!g.closeOnScroll || at || Ce ? e.preventDefault() : ae && 2 < Math.abs(e.deltaY) && (z = !0, m.close())), !0;
                    if (e.stopPropagation(), tn.x = 0, "deltaX" in e)
                        1 === e.deltaMode ? (tn.x = 18 * e.deltaX, tn.y = 18 * e.deltaY) : (tn.x = e.deltaX, tn.y = e.deltaY);
                    else if ("wheelDelta" in e)
                        e.wheelDeltaX && (tn.x = -.16 * e.wheelDeltaX),
                        e.wheelDeltaY ? tn.y = -.16 * e.wheelDeltaY : tn.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e))
                            return;
                        tn.y = e.detail
                    }
                    p(K, !0);
                    var t = Ue.x - tn.x,
                        n = Ue.y - tn.y;
                    (g.modal || t <= Le.min.x && t >= Le.max.x && n <= Le.min.y && n >= Le.max.y) && e.preventDefault(),
                    m.panTo(t, n)
                },
                toggleDesktopZoom: function(e) {
                    e = e || {
                        x: Be.x / 2 + Ze.x,
                        y: Be.y / 2 + Ze.y
                    };
                    var t = g.getDoubleTapZoom(!0, m.currItem),
                        n = K === t;
                    m.mouseZoomedIn = !n,
                    m.zoomTo(n ? m.currItem.initialZoomLevel : t, e, 333),
                    h[(n ? "remove" : "add") + "Class"](f, "pswp--zoomed-in")
                }
            }
        });
        function on() {
            return vn.hash.substring(1)
        }
        function rn() {
            an && clearTimeout(an),
            cn && clearTimeout(cn)
        }
        function sn() {
            var e = on(),
                t = {};
            if (e.length < 5)
                return t;
            var n,
                i = e.split("&");
            for (r = 0; r < i.length; r++)
                i[r] && ((n = i[r].split("=")).length < 2 || (t[n[0]] = n[1]));
            if (g.galleryPIDs) {
                for (var o = t.pid, r = t.pid = 0; r < zt.length; r++)
                    if (zt[r].pid === o) {
                        t.pid = r;
                        break
                    }
            } else
                t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }
        var an,
            ln,
            cn,
            un,
            dn,
            pn,
            fn,
            hn,
            mn,
            gn,
            vn,
            yn,
            bn = {
                history: !0,
                galleryUID: 1
            },
            wn = function() {
                var e,
                    t;
                cn && clearTimeout(cn),
                at || Ce ? cn = setTimeout(wn, 500) : (un ? clearTimeout(ln) : un = !0, t = W + 1, (e = Bt(W)).hasOwnProperty("pid") && (t = e.pid), e = fn + "&gid=" + g.galleryUID + "&pid=" + t, hn || -1 === vn.hash.indexOf(e) && (gn = !0), t = vn.href.split("#")[0] + "#" + e, yn ? "#" + e !== window.location.hash && history[hn ? "replaceState" : "pushState"]("", document.title, t) : hn ? vn.replace(t) : vn.hash = e, hn = !0, ln = setTimeout(function() {
                    un = !1
                }, 60))
            };
        o("History", {
            publicMethods: {
                initHistory: function() {
                    var e,
                        t;
                    h.extend(g, bn, !0),
                    g.history && (vn = window.location, hn = mn = gn = !1, fn = on(), yn = "pushState" in history, -1 < fn.indexOf("gid=") && (fn = (fn = fn.split("&gid=")[0]).split("?gid=")[0]), r("afterChange", m.updateURL), r("unbindEvents", function() {
                        h.unbind(window, "hashchange", m.onHashChange)
                    }), e = function() {
                        pn = !0,
                        mn || (gn ? history.back() : fn ? vn.hash = fn : yn ? history.pushState("", document.title, vn.pathname + vn.search) : vn.hash = ""),
                        rn()
                    }, r("unbindEvents", function() {
                        z && e()
                    }), r("destroy", function() {
                        pn || e()
                    }), r("firstUpdate", function() {
                        W = sn().pid
                    }), -1 < (t = fn.indexOf("pid=")) && ("&" === (fn = fn.substring(0, t)).slice(-1) && (fn = fn.slice(0, -1))), setTimeout(function() {
                        q && h.bind(window, "hashchange", m.onHashChange)
                    }, 40))
                },
                onHashChange: function() {
                    return on() === fn ? (mn = !0, void m.close()) : void (un || (dn = !0, m.goTo(sn().pid), dn = !1))
                },
                updateURL: function() {
                    rn(),
                    dn || (hn ? an = setTimeout(wn, 800) : wn())
                }
            }
        }),
        h.extend(m, t)
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
    "use strict";
    return function(i, a) {
        function e(e) {
            if (E)
                return !0;
            e = e || window.event,
            $.timeToIdle && $.mouseUsed && !w && F();
            for (var t, n, i = (e.target || e.srcElement).getAttribute("class") || "", o = 0; o < H.length; o++)
                (t = H[o]).onTap && -1 < i.indexOf("pswp__" + t.name) && (t.onTap(), n = !0);
            n && (e.stopPropagation && e.stopPropagation(), E = !0, e = a.features.isOldAndroid ? 600 : 30, setTimeout(function() {
                E = !1
            }, e))
        }
        function t(e, t, n) {
            a[(n ? "add" : "remove") + "Class"](e, "pswp__" + t)
        }
        function n() {
            var e = 1 === $.getNumItemsFn();
            e !== S && (t(f, "ui--one-slide", e), S = e)
        }
        function o() {
            t(y, "share-modal--hidden", L)
        }
        function r() {
            return (L = !L) ? (a.removeClass(y, "pswp__share-modal--fade-in"), setTimeout(function() {
                L && o()
            }, 300)) : (o(), setTimeout(function() {
                L || a.addClass(y, "pswp__share-modal--fade-in")
            }, 30)), L || P(), 0
        }
        function s(e) {
            var t = (e = e || window.event).target || e.srcElement;
            return i.shout("shareLinkClick", e, t), !(!t.href || !t.hasAttribute("download") && (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), L || r(), 1))
        }
        function l(e) {
            for (var t = 0; t < $.closeElClasses.length; t++)
                if (a.hasClass(e, "pswp__" + $.closeElClasses[t]))
                    return !0
        }
        function c(e) {
            (e = (e = e || window.event).relatedTarget || e.toElement) && "HTML" !== e.nodeName || (clearTimeout(D), D = setTimeout(function() {
                j.setIdle(!0)
            }, $.timeToIdleOutside))
        }
        function u(e) {
            var t,
                n = e.vGap;
            !i.likelyTouchDevice || $.mouseUsed || screen.width > $.fitControlsWidth ? (t = $.barsSize, $.captionEl && "auto" === t.bottom ? (m || ((m = a.createEl("pswp__caption pswp__caption--fake")).appendChild(a.createEl("pswp__caption__center")), f.insertBefore(m, h), a.addClass(f, "pswp__ui--fit")), $.addCaptionHTMLFn(e, m, !0) ? (e = m.clientHeight, n.bottom = parseInt(e, 10) || 44) : n.bottom = t.top) : n.bottom = "auto" === t.bottom ? 0 : t.bottom, n.top = t.top) : n.top = n.bottom = 0
        }
        function d() {
            function e(e) {
                if (e)
                    for (var t = e.length, n = 0; n < t; n++) {
                        o = e[n],
                        r = o.className;
                        for (var i = 0; i < H.length; i++)
                            s = H[i],
                            -1 < r.indexOf("pswp__" + s.name) && ($[s.option] ? (a.removeClass(o, "pswp__element--disabled"), s.onInit && s.onInit(o)) : a.addClass(o, "pswp__element--disabled"))
                    }
            }
            var o,
                r,
                s;
            e(f.children);
            var t = a.getChildByClass(f, "pswp__top-bar");
            t && e(t.children)
        }
        var p,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            w,
            x,
            T,
            k,
            C,
            S,
            $,
            E,
            A,
            D,
            j = this,
            O = !1,
            I = !0,
            L = !0,
            M = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return i.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return i.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            P = function() {
                for (var e, t, n, i, o = "", r = 0; r < $.shareButtons.length; r++)
                    e = $.shareButtons[r],
                    t = $.getImageURLForShare(e),
                    n = $.getPageURLForShare(e),
                    i = $.getTextForShare(e),
                    o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
                    $.parseShareButtonOut && (o = $.parseShareButtonOut(e, o));
                y.children[0].innerHTML = o,
                y.children[0].onclick = s
            },
            _ = 0,
            F = function() {
                clearTimeout(D),
                _ = 0,
                w && j.setIdle(!1)
            },
            N = function(e) {
                k !== e && (t(T, "preloader--active", !e), k = e)
            },
            H = [{
                name: "caption",
                option: "captionEl",
                onInit: function(e) {
                    h = e
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(e) {
                    y = e
                },
                onTap: function() {
                    r()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(e) {
                    v = e
                },
                onTap: function() {
                    r()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: i.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(e) {
                    g = e
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: i.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: i.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: i.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    p.isFullscreen() ? p.exit() : p.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(e) {
                    T = e
                }
            }];
        j.init = function() {
            var t;
            a.extend(i.options, M, !0),
            $ = i.options,
            f = a.getChildByClass(i.scrollWrap, "pswp__ui"),
            (x = i.listen)("onVerticalDrag", function(e) {
                I && e < .95 ? j.hideControls() : !I && .95 <= e && j.showControls()
            }),
            x("onPinchClose", function(e) {
                I && e < .9 ? (j.hideControls(), t = !0) : t && !I && .9 < e && j.showControls()
            }),
            x("zoomGestureEnded", function() {
                (t = !1) && !I && j.showControls()
            }),
            x("beforeChange", j.update),
            x("doubleTap", function(e) {
                var t = i.currItem.initialZoomLevel;
                i.getZoomLevel() !== t ? i.zoomTo(t, e, 333) : i.zoomTo($.getDoubleTapZoom(!1, i.currItem), e, 333)
            }),
            x("preventDragEvent", function(e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && -1 < e.type.indexOf("mouse") && (0 < i.getAttribute("class").indexOf("__caption") || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }),
            x("bindEvents", function() {
                a.bind(f, "pswpTap click", e),
                a.bind(i.scrollWrap, "pswpTap", j.onGlobalTap),
                i.likelyTouchDevice || a.bind(i.scrollWrap, "mouseover", j.onMouseOver)
            }),
            x("unbindEvents", function() {
                L || r(),
                A && clearInterval(A),
                a.unbind(document, "mouseout", c),
                a.unbind(document, "mousemove", F),
                a.unbind(f, "pswpTap click", e),
                a.unbind(i.scrollWrap, "pswpTap", j.onGlobalTap),
                a.unbind(i.scrollWrap, "mouseover", j.onMouseOver),
                p && (a.unbind(document, p.eventK, j.updateFullscreen), p.isFullscreen() && ($.hideAnimationDuration = 0, p.exit()), p = null)
            }),
            x("destroy", function() {
                $.captionEl && (m && f.removeChild(m), a.removeClass(h, "pswp__caption--empty")),
                y && (y.children[0].onclick = null),
                a.removeClass(f, "pswp__ui--over-close"),
                a.addClass(f, "pswp__ui--hidden"),
                j.setIdle(!1)
            }),
            $.showAnimationDuration || a.removeClass(f, "pswp__ui--hidden"),
            x("initialZoomIn", function() {
                $.showAnimationDuration && a.removeClass(f, "pswp__ui--hidden")
            }),
            x("initialZoomOut", function() {
                a.addClass(f, "pswp__ui--hidden")
            }),
            x("parseVerticalMargin", u),
            d(),
            $.shareEl && v && y && (L = !0),
            n(),
            $.timeToIdle && x("mouseUsed", function() {
                a.bind(document, "mousemove", F),
                a.bind(document, "mouseout", c),
                A = setInterval(function() {
                    2 === ++_ && j.setIdle(!0)
                }, $.timeToIdle / 2)
            }),
            $.fullscreenEl && !a.features.isOldAndroid && ((p = p || j.getFullscreenAPI()) ? (a.bind(document, p.eventK, j.updateFullscreen), j.updateFullscreen(), a.addClass(i.template, "pswp--supports-fs")) : a.removeClass(i.template, "pswp--supports-fs")),
            $.preloaderEl && (N(!0), x("beforeChange", function() {
                clearTimeout(C),
                C = setTimeout(function() {
                    i.currItem && i.currItem.loading ? i.allowProgressiveImg() && (!i.currItem.img || i.currItem.img.naturalWidth) || N(!1) : N(!0)
                }, $.loadingIndicatorDelay)
            }), x("imageLoadComplete", function(e, t) {
                i.currItem === t && N(!0)
            }))
        },
        j.setIdle = function(e) {
            t(f, "ui--idle", w = e)
        },
        j.update = function() {
            O = !(!I || !i.currItem) && (j.updateIndexIndicator(), $.captionEl && ($.addCaptionHTMLFn(i.currItem, h), t(h, "caption--empty", !i.currItem.title)), !0),
            L || r(),
            n()
        },
        j.updateFullscreen = function(e) {
            e && setTimeout(function() {
                i.setScrollOffset(0, a.getScrollY())
            }, 50),
            a[(p.isFullscreen() ? "add" : "remove") + "Class"](i.template, "pswp--fs")
        },
        j.updateIndexIndicator = function() {
            $.counterEl && (g.innerHTML = i.getCurrentIndex() + 1 + $.indexIndicatorSep + $.getNumItemsFn())
        },
        j.onGlobalTap = function(e) {
            var t = (e = e || window.event).target || e.srcElement;
            if (!E)
                if (e.detail && "mouse" === e.detail.pointerType)
                    l(t) ? i.close() : a.hasClass(t, "pswp__img") && (1 === i.getZoomLevel() && i.getZoomLevel() <= i.currItem.fitRatio ? $.clickToCloseNonZoomable && i.close() : i.toggleDesktopZoom(e.detail.releasePoint));
                else if ($.tapToToggleControls && (I ? j.hideControls() : j.showControls()), $.tapToClose && (a.hasClass(t, "pswp__img") || l(t)))
                    return void i.close()
        },
        j.onMouseOver = function(e) {
            e = (e = e || window.event).target || e.srcElement;
            t(f, "ui--over-close", l(e))
        },
        j.hideControls = function() {
            a.addClass(f, "pswp__ui--hidden"),
            I = !1
        },
        j.showControls = function() {
            I = !0,
            O || j.update(),
            a.removeClass(f, "pswp__ui--hidden")
        },
        j.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        },
        j.getFullscreenAPI = function() {
            var e,
                t = document.documentElement,
                n = "fullscreenchange";
            return t.requestFullscreen ? e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n
            } : t.mozRequestFullScreen ? e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n
            } : t.webkitRequestFullscreen ? e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n
            } : t.msRequestFullscreen && (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), e && (e.enter = function() {
                return b = $.closeOnScroll, $.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? i.template[this.enterK]() : void i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, e.exit = function() {
                return $.closeOnScroll = b, document[this.exitK]()
            }, e.isFullscreen = function() {
                return document[this.elementK]
            }), e
        }
    }
}),
function(s) {
    "use strict";
    var e = "kinetic-active";
    function n() {
        return !1
    }
    function r(e, t) {
        return this.settings = t, this.el = e, this.$el = s(e), this._initElements(), this
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }),
    s.support = s.support || {},
    s.extend(s.support, {
        touch: "ontouchend" in document
    }),
    r.DATA_KEY = "kinetic",
    r.DEFAULTS = {
        cursor: "move",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: .9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
            up: "kinetic-moving-up",
            down: "kinetic-moving-down",
            left: "kinetic-moving-left",
            right: "kinetic-moving-right"
        },
        deceleratingClass: {
            up: "kinetic-decelerating-up",
            down: "kinetic-decelerating-down",
            left: "kinetic-decelerating-left",
            right: "kinetic-decelerating-right"
        }
    },
    r.prototype.start = function(e) {
        this.settings = s.extend(this.settings, e),
        this.velocity = e.velocity || this.velocity,
        this.velocityY = e.velocityY || this.velocityY,
        this.settings.decelerate = !1,
        this._move()
    },
    r.prototype.end = function() {
        this.settings.decelerate = !0
    },
    r.prototype.stop = function() {
        this.velocity = 0,
        this.velocityY = 0,
        this.settings.decelerate = !0,
        s.isFunction(this.settings.stopped) && this.settings.stopped.call(this)
    },
    r.prototype.detach = function() {
        this._detachListeners(),
        this.$el.removeClass(e).css("cursor", "")
    },
    r.prototype.attach = function() {
        this.$el.hasClass(e) || (this._attachListeners(this.$el), this.$el.addClass(e).css("cursor", this.settings.cursor))
    },
    r.prototype._initElements = function() {
        this.$el.addClass(e),
        s.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null
        }),
        this.velocity = 0,
        this.velocityY = 0,
        s(document).mouseup(s.proxy(this._resetMouse, this)).click(s.proxy(this._resetMouse, this)),
        this._initEvents(),
        this.$el.css("cursor", this.settings.cursor),
        this.settings.triggerHardware && this.$el.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-perspective": "1000",
            "-webkit-backface-visibility": "hidden"
        })
    },
    r.prototype._initEvents = function() {
        var n = this;
        this.settings.events = {
            touchStart: function(e) {
                var t;
                n._useTarget(e.target, e) && (t = e.originalEvent.touches[0], n.threshold = n._threshold(e.target, e), n._start(t.clientX, t.clientY), e.stopPropagation())
            },
            touchMove: function(e) {
                var t;
                n.mouseDown && (t = e.originalEvent.touches[0], n._inputmove(t.clientX, t.clientY), e.preventDefault && e.preventDefault())
            },
            inputDown: function(e) {
                n._useTarget(e.target, e) && (n.threshold = n._threshold(e.target, e), n._start(e.clientX, e.clientY), n.elementFocused = e.target, "IMG" === e.target.nodeName && e.preventDefault(), e.stopPropagation())
            },
            inputEnd: function(e) {
                n._useTarget(e.target, e) && (n._end(), n.elementFocused = null, e.preventDefault && e.preventDefault())
            },
            inputMove: function(e) {
                n.mouseDown && (n._inputmove(e.clientX, e.clientY), e.preventDefault && e.preventDefault())
            },
            scroll: function(e) {
                s.isFunction(n.settings.moved) && n.settings.moved.call(n, n.settings),
                e.preventDefault && e.preventDefault()
            },
            inputClick: function(e) {
                return 0 < Math.abs(n.velocity) ? (e.preventDefault(), !1) : void 0
            },
            dragStart: function(e) {
                return (!n._useTarget(e.target, e) || !n.elementFocused) && void 0
            }
        },
        this._attachListeners(this.$el, this.settings)
    },
    r.prototype._inputmove = function(e, t) {
        var n = this.$el;
        if (this.el, (!this.lastMove || new Date > new Date(this.lastMove.getTime() + this.throttleTimeout)) && (this.lastMove = new Date, this.mouseDown && (this.xpos || this.ypos))) {
            var i = e - this.xpos,
                o = t - this.ypos;
            if (0 < this.threshold) {
                var r = Math.sqrt(i * i + o * o);
                if (this.threshold > r)
                    return;
                this.threshold = 0
            }
            this.elementFocused && (s(this.elementFocused).blur(), this.elementFocused = null, n.focus()),
            this.settings.decelerate = !1,
            this.velocity = this.velocityY = 0;
            r = this.scrollLeft(),
            n = this.scrollTop();
            this.scrollLeft(this.settings.x ? r - i : r),
            this.scrollTop(this.settings.y ? n - o : n),
            this.prevXPos = this.xpos,
            this.prevYPos = this.ypos,
            this.xpos = e,
            this.ypos = t,
            this._calculateVelocities(),
            this._setMoveClasses(this.settings.movingClass),
            s.isFunction(this.settings.moved) && this.settings.moved.call(this, this.settings)
        }
    },
    r.prototype._calculateVelocities = function() {
        this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity),
        this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity)
    },
    r.prototype._end = function() {
        this.xpos && this.prevXPos && !1 === this.settings.decelerate && (this.settings.decelerate = !0, this._calculateVelocities(), this.xpos = this.prevXPos = this.mouseDown = !1, this._move())
    },
    r.prototype._useTarget = function(e, t) {
        return !s.isFunction(this.settings.filterTarget) || !1 !== this.settings.filterTarget.call(this, e, t)
    },
    r.prototype._threshold = function(e, t) {
        return s.isFunction(this.settings.threshold) ? this.settings.threshold.call(this, e, t) : this.settings.threshold
    },
    r.prototype._start = function(e, t) {
        this.mouseDown = !0,
        this.velocity = this.prevXPos = 0,
        this.velocityY = this.prevYPos = 0,
        this.xpos = e,
        this.ypos = t
    },
    r.prototype._resetMouse = function() {
        this.xpos = !1,
        this.ypos = !1,
        this.mouseDown = !1
    },
    r.prototype._decelerateVelocity = function(e, t) {
        return 0 === Math.floor(Math.abs(e)) ? 0 : e * t
    },
    r.prototype._capVelocity = function(e, t) {
        var n = e;
        return 0 < e ? t < e && (n = t) : e < 0 - t && (n = 0 - t), n
    },
    r.prototype._setMoveClasses = function(e) {
        var t = this.settings,
            n = this.$el;
        n.removeClass(t.movingClass.up).removeClass(t.movingClass.down).removeClass(t.movingClass.left).removeClass(t.movingClass.right).removeClass(t.deceleratingClass.up).removeClass(t.deceleratingClass.down).removeClass(t.deceleratingClass.left).removeClass(t.deceleratingClass.right),
        0 < this.velocity && n.addClass(e.right),
        this.velocity < 0 && n.addClass(e.left),
        0 < this.velocityY && n.addClass(e.down),
        this.velocityY < 0 && n.addClass(e.up)
    },
    r.prototype._move = function() {
        var e = (this.$el, this.el),
            t = this,
            n = t.settings;
        n.x && 0 < e.scrollWidth ? (this.scrollLeft(this.scrollLeft() + this.velocity), 0 < Math.abs(this.velocity) && (this.velocity = n.decelerate ? t._decelerateVelocity(this.velocity, n.slowdown) : this.velocity)) : this.velocity = 0,
        n.y && 0 < e.scrollHeight ? (this.scrollTop(this.scrollTop() + this.velocityY), 0 < Math.abs(this.velocityY) && (this.velocityY = n.decelerate ? t._decelerateVelocity(this.velocityY, n.slowdown) : this.velocityY)) : this.velocityY = 0,
        t._setMoveClasses(n.deceleratingClass),
        s.isFunction(n.moved) && n.moved.call(this, n),
        0 < Math.abs(this.velocity) || 0 < Math.abs(this.velocityY) ? this.moving || (this.moving = !0, window.requestAnimationFrame(function() {
            t.moving = !1,
            t._move()
        })) : t.stop()
    },
    r.prototype._getScroller = function() {
        var e = this.$el;
        return e = this.$el.is("body") || this.$el.is("html") ? s(window) : e
    },
    r.prototype.scrollLeft = function(e) {
        var t = this._getScroller();
        return "number" != typeof e ? t.scrollLeft() : (t.scrollLeft(e), void (this.settings.scrollLeft = e))
    },
    r.prototype.scrollTop = function(e) {
        var t = this._getScroller();
        return "number" != typeof e ? t.scrollTop() : (t.scrollTop(e), void (this.settings.scrollTop = e))
    },
    r.prototype._attachListeners = function() {
        var e = this.$el,
            t = this.settings;
        s.support.touch && e.bind("touchstart", t.events.touchStart).bind("touchend", t.events.inputEnd).bind("touchmove", t.events.touchMove),
        e.mousedown(t.events.inputDown).mouseup(t.events.inputEnd).mousemove(t.events.inputMove),
        e.click(t.events.inputClick).scroll(t.events.scroll).bind("selectstart", n).bind("dragstart", t.events.dragStart)
    },
    r.prototype._detachListeners = function() {
        var e = this.$el,
            t = this.settings;
        s.support.touch && e.unbind("touchstart", t.events.touchStart).unbind("touchend", t.events.inputEnd).unbind("touchmove", t.events.touchMove),
        e.unbind("mousedown", t.events.inputDown).unbind("mouseup", t.events.inputEnd).unbind("mousemove", t.events.inputMove),
        e.unbind("click", t.events.inputClick).unbind("scroll", t.events.scroll).unbind("selectstart", n).unbind("dragstart", t.events.dragStart)
    },
    s.Kinetic = r,
    s.fn.kinetic = function(i, o) {
        return this.each(function() {
            var e = s(this),
                t = e.data(r.DATA_KEY),
                n = s.extend({}, r.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data(r.DATA_KEY, t = new r(this, n)),
            "string" == typeof i && t[i](o)
        })
    }
}(window.jQuery || window.Zepto),
function(u) {
    "use strict";
    function i(e, t) {
        if (!(this instanceof i)) {
            var n = new i(e, t);
            return n.open(), n
        }
        this.id = i.id++,
        this.setup(e, t),
        this.chainCallbacks(i._callbackChain)
    }
    if (void 0 === u)
        return "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.");
    if (u.fn.jquery.match(/-ajax/))
        return "console" in window && window.console.info("Featherlight needs regular jQuery, not the slim version.");
    function o(t) {
        return s = u.grep(s, function(e) {
            return e !== t && 0 < e.$instance.closest("body").length
        })
    }
    function n(e) {
        u.each(i.opened().reverse(), function() {
            return e.isDefaultPrevented() || !1 !== this[l[e.type]](e) ? void 0 : (e.preventDefault(), e.stopPropagation(), !1)
        })
    }
    function r(e) {
        var t;
        e !== i._globalHandlerInstalled && (i._globalHandlerInstalled = e, t = u.map(l, function(e, t) {
            return t + "." + i.prototype.namespace
        }).join(" "), u(window)[e ? "on" : "off"](t, n))
    }
    var s = [],
        a = {
            allow: 1,
            allowfullscreen: 1,
            frameborder: 1,
            height: 1,
            longdesc: 1,
            marginheight: 1,
            marginwidth: 1,
            mozallowfullscreen: 1,
            name: 1,
            referrerpolicy: 1,
            sandbox: 1,
            scrolling: 1,
            src: 1,
            srcdoc: 1,
            style: 1,
            webkitallowfullscreen: 1,
            width: 1
        },
        l = {
            keyup: "onKeyUp",
            resize: "onResize"
        };
    i.prototype = {
        constructor: i,
        namespace: "featherlight",
        targetAttr: "data-featherlight",
        variant: null,
        resetCss: !1,
        background: null,
        openTrigger: "click",
        closeTrigger: "click",
        filter: null,
        root: "body",
        openSpeed: 250,
        closeSpeed: 250,
        closeOnClick: "background",
        closeOnEsc: !0,
        closeIcon: "&#10005;",
        loading: "",
        persist: !1,
        otherClose: null,
        beforeOpen: u.noop,
        beforeContent: u.noop,
        beforeClose: u.noop,
        afterOpen: u.noop,
        afterContent: u.noop,
        afterClose: u.noop,
        onKeyUp: u.noop,
        onResize: u.noop,
        type: null,
        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
        setup: function(e, t) {
            "object" != typeof e || e instanceof u != 0 || t || (t = e, e = void 0);
            var n = u.extend(this, t, {
                    target: e
                }),
                e = n.resetCss ? n.namespace + "-reset" : n.namespace,
                e = u(n.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<button class="' + e + "-close-icon " + n.namespace + '-close" aria-label="Close">', n.closeIcon, "</button>", '<div class="' + n.namespace + '-inner">' + n.loading + "</div>", "</div>", "</div>"].join("")),
                i = "." + n.namespace + "-close" + (n.otherClose ? "," + n.otherClose : "");
            return n.$instance = e.clone().addClass(n.variant), n.$instance.on(n.closeTrigger + "." + n.namespace, function(e) {
                var t;
                e.isDefaultPrevented() || (t = u(e.target), ("background" === n.closeOnClick && t.is("." + n.namespace) || "anywhere" === n.closeOnClick || t.closest(i).length) && (n.close(e), e.preventDefault()))
            }), this
        },
        getContent: function() {
            if (!1 !== this.persist && this.$content)
                return this.$content;
            function e(e) {
                return t.$currentTarget && t.$currentTarget.attr(e)
            }
            var t = this,
                n = this.constructor.contentFilters,
                i = e(t.targetAttr),
                o = t.target || i || "",
                r = n[t.type];
            if (!r && o in n && (r = n[o], o = t.target && i), o = o || e("href") || "", !r)
                for (var s in n)
                    t[s] && (r = n[s], o = t[s]);
            if (!r) {
                var a = o,
                    o = null;
                if (u.each(t.contentFilters, function() {
                    return r = n[this], !(o = !(o = r.test ? r.test(a) : o) && r.regex && a.match && a.match(r.regex) ? a : o)
                }), !o)
                    return "console" in window && window.console.error("Featherlight: no content filter found " + (a ? ' for "' + a + '"' : " (no target specified)")), !1
            }
            return r.process.call(t, o)
        },
        setContent: function(e) {
            return this.$instance.removeClass(this.namespace + "-loading"), this.$instance.toggleClass(this.namespace + "-iframe", e.is("iframe")), this.$instance.find("." + this.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(u.contains(this.$instance[0], e[0]) ? "" : e), this.$content = e.addClass(this.namespace + "-inner"), this
        },
        open: function(t) {
            var n = this;
            if (n.$instance.hide().appendTo(n.root), !(t && t.isDefaultPrevented() || !1 === n.beforeOpen(t))) {
                t && t.preventDefault();
                var e = n.getContent();
                if (e)
                    return s.push(n), r(!0), n.$instance.fadeIn(n.openSpeed), n.beforeContent(t), u.when(e).always(function(e) {
                        n.setContent(e),
                        n.afterContent(t)
                    }).then(n.$instance.promise()).done(function() {
                        n.afterOpen(t)
                    })
            }
            return n.$instance.detach(), u.Deferred().reject().promise()
        },
        close: function(e) {
            var t = this,
                n = u.Deferred();
            return !1 === t.beforeClose(e) ? n.reject() : (0 === o(t).length && r(!1), t.$instance.fadeOut(t.closeSpeed, function() {
                t.$instance.detach(),
                t.afterClose(e),
                n.resolve()
            })), n.promise()
        },
        resize: function(e, t) {
            var n;
            e && t && (this.$content.css("width", "").css("height", ""), 1 < (n = Math.max(e / (this.$content.parent().width() - 1), t / (this.$content.parent().height() - 1))) && (n = t / Math.floor(t / n), this.$content.css("width", e / n + "px").css("height", t / n + "px")))
        },
        chainCallbacks: function(e) {
            for (var t in e)
                this[t] = u.proxy(e[t], this, u.proxy(this[t], this))
        }
    },
    u.extend(i, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: i.prototype,
        contentFilters: {
            jquery: {
                regex: /^[#.]\w/,
                test: function(e) {
                    return e instanceof u && e
                },
                process: function(e) {
                    return !1 !== this.persist ? u(e) : u(e).clone(!0)
                }
            },
            image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function(e) {
                    var t = u.Deferred(),
                        n = new Image,
                        i = u('<img src="' + e + '" alt="" class="' + this.namespace + '-image" />');
                    return n.onload = function() {
                        i.naturalWidth = n.width,
                        i.naturalHeight = n.height,
                        t.resolve(i)
                    }, n.onerror = function() {
                        t.reject(i)
                    }, n.src = e, t.promise()
                }
            },
            html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function(e) {
                    return u(e)
                }
            },
            ajax: {
                regex: /./,
                process: function(e) {
                    var n = u.Deferred(),
                        i = u("<div></div>").load(e, function(e, t) {
                            "error" !== t && n.resolve(i.contents()),
                            n.fail()
                        });
                    return n.promise()
                }
            },
            iframe: {
                process: function(e) {
                    var t = new u.Deferred,
                        n = u("<iframe/>"),
                        i = function(e, t) {
                            var n,
                                i = {},
                                o = new RegExp("^" + t + "([A-Z])(.*)");
                            for (n in e) {
                                var r = n.match(o);
                                r && (i[(r[1] + r[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = e[n])
                            }
                            return i
                        }(this, "iframe"),
                        o = function(e, t) {
                            var n,
                                i = {};
                            for (n in e)
                                n in t && (i[n] = e[n], delete e[n]);
                            return i
                        }(i, a);
                    return n.hide().attr("src", e).attr(o).css(i).on("load", function() {
                        t.resolve(n.show())
                    }).appendTo(this.$instance.find("." + this.namespace + "-content")), t.promise()
                }
            },
            text: {
                process: function(e) {
                    return u("<div>", {
                        text: e
                    })
                }
            }
        },
        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
        readElementConfig: function(e, t) {
            var n = this,
                i = new RegExp("^data-" + t + "-(.*)"),
                o = {};
            return e && e.attributes && u.each(e.attributes, function() {
                var e = this.name.match(i);
                if (e) {
                    var t = this.value,
                        e = u.camelCase(e[1]);
                    if (0 <= u.inArray(e, n.functionAttributes))
                        t = new Function(t);
                    else
                        try {
                            t = JSON.parse(t)
                        } catch (e) {}
                    o[e] = t
                }
            }), o
        },
        extend: function(e, t) {
            function n() {
                this.constructor = e
            }
            return n.prototype = this.prototype, e.prototype = new n, e.__super__ = this.prototype, u.extend(e, this, t), e.defaults = e.prototype, e
        },
        attach: function(o, r, s) {
            var a = this;
            "object" != typeof r || r instanceof u != 0 || s || (s = r, r = void 0);
            var l,
                e = (s = u.extend({}, s)).namespace || a.defaults.namespace,
                c = u.extend({}, a.defaults, a.readElementConfig(o[0], e), s),
                e = function(e) {
                    var t = u(e.currentTarget),
                        n = u.extend({
                            $source: o,
                            $currentTarget: t
                        }, a.readElementConfig(o[0], c.namespace), a.readElementConfig(e.currentTarget, c.namespace), s),
                        i = l || t.data("featherlight-persisted") || new a(r, n);
                    "shared" === i.persist ? l = i : !1 !== i.persist && t.data("featherlight-persisted", i),
                    n.$currentTarget.blur && n.$currentTarget.blur(),
                    i.open(e)
                };
            return o.on(c.openTrigger + "." + c.namespace, c.filter, e), {
                filter: c.filter,
                handler: e
            }
        },
        current: function() {
            var e = this.opened();
            return e[e.length - 1] || null
        },
        opened: function() {
            var t = this;
            return o(), u.grep(s, function(e) {
                return e instanceof t
            })
        },
        close: function(e) {
            var t = this.current();
            return t ? t.close(e) : void 0
        },
        _onReady: function() {
            var i,
                o = this;
            o.autoBind && ((i = u(o.autoBind)).each(function() {
                o.attach(u(this))
            }), u(document).on("click", o.autoBind, function(e) {
                var t,
                    n;
                e.isDefaultPrevented() || (t = u(e.currentTarget), i.length !== (i = i.add(t)).length && (!(n = o.attach(t)).filter || 0 < u(e.target).parentsUntil(t, n.filter).length) && n.handler(e))
            }))
        },
        _callbackChain: {
            onKeyUp: function(e, t) {
                return 27 === t.keyCode ? (this.closeOnEsc && u.featherlight.close(t), !1) : e(t)
            },
            beforeOpen: function(e, t) {
                return u(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = u("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = u("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(e, t) {
                    return u(t).attr("tabindex")
                }), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), e(t)
            },
            afterClose: function(e, t) {
                var t = e(t),
                    n = this;
                return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function(e, t) {
                    u(t).attr("tabindex", n._previousWithTabIndices[e])
                }), this._previouslyActive.focus(), 0 === i.opened().length && u(document.documentElement).removeClass("with-featherlight"), t
            },
            onResize: function(e, t) {
                return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), e(t)
            },
            afterContent: function(e, t) {
                e = e(t);
                return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(t), e
            }
        }
    }),
    u.featherlight = i,
    u.fn.featherlight = function(e, t) {
        return i.attach(this, e, t), this
    },
    u(document).ready(function() {
        i._onReady()
    })
}(jQuery),
window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    function getUrlParameter(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    function removeParam(e) {
        var t = window.location.href,
            n = t.split("?")[0],
            i = [],
            t = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
        if ("" !== t) {
            for (var o = (i = t.split("&")).length - 1; 0 <= o; --o)
                i[o].split("=")[0] === e && i.splice(o, 1);
            n = n + "?" + i.join("&")
        }
        return n
    }
    function isMobile() {
        return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
    }
    window.unicornplatform = {},
    isMobile() ? $("body").addClass("body--mobile") : $("body").addClass("body--desktop");
    var message = {
        show: C4,
        hide: D4,
        init: function() {
            $(document).on("click", ".js-open-engaging-message", function(e) {
                e.preventDefault();
                e = $(this).attr("data-index");
                C4($('.js-engaging-message[data-index="' + e + '"]'))
            }),
            H4(),
            $(document).on("click", ".js-close-message", function(e) {
                e.preventDefault(),
                D4([$(this).parents(".js-message")])
            })
        }
    };
    function C4(e, t) {
        t && e.find(".js-error-message-text").text(t),
        e.addClass("state-visible")
    }
    function D4(e) {
        for (var t, n = e.length, i = 0; i < n; i++)
            e[i].removeClass("state-visible"),
            (t = e[i]).removeClass("state-reacted"),
            t.find(".js-react-on-message").removeAttr("disabled")
    }
    function H4() {
        $(document).on("click", ".js-react-on-message", function(e) {
            var t,
                n;
            e.preventDefault(),
            t = $(this),
            n = t.parents(".js-message"),
            (e = n).addClass("state-reacted"),
            e.find(".js-react-on-message").attr("disabled", "disabled"),
            t = t.text(),
            n.find(".js-reaction-text").text(t)
        })
    }
    message.init();
    var button = {
            showSuccessTick: function(e) {
                e.addClass("state-show-success-tick")
            },
            removeSuccessTick: function(e) {
                e.removeClass("state-show-success-tick")
            },
            disableSubmit: function(e) {
                e.attr("disabled", "disabled")
            },
            enableSubmit: function(e) {
                e.removeAttr("disabled")
            },
            showSpinner: function(e) {
                e.addClass("state-show-spinner")
            },
            stopSpinner: function(e) {
                e.removeClass("state-show-spinner")
            }
        },
        submitNoIntegrationForm = {
            init: function() {
                for (var e = $(".js-no-integration-form"), t = e.length, n = 0; n < t; n++)
                    !function(e) {
                        var t = e.find(".js-engaging-message"),
                            n = e.find(".js-success-message"),
                            i = e.find(".js-error-message"),
                            o = e.find(".js-submit-button"),
                            r = e.find(".js-form-input");
                        e.attr("success-redirect"),
                        e.on("submit", function(e) {
                            e.preventDefault(),
                            $(this),
                            message.show(i, "The form is not connected to any integration.")
                        }),
                        r.on("keypress", "", function(e) {
                            if (13 === e.which)
                                return o.trigger("click"), !1
                        }),
                        r.on("focus", "", function(e) {
                            e.preventDefault(),
                            message.hide([n, t, i])
                        }).on("blur", "", function(e) {
                            e.preventDefault()
                        })
                    }(e.eq(n))
            }
        },
        S7,
        T7;
    function evaluateCodeAfterFormSubmission(codeString, $emailFormObject) {
        if (codeString && 0 !== codeString.length)
            try {
                var formDataSerialize = $emailFormObject.serialize(),
                    formDataSerializeArray = $emailFormObject.serializeArray(),
                    formDataKeyValue = $emailFormObject.serializeArray().reduce(function(e, t) {
                        return e[t.name] = t.value, e
                    }, {});
                eval(codeString)
            } catch (e) {
                console.error('⚠️ Your "after form submission" JS code has failed to execute.'),
                console.error("The code: "),
                console.info(codeString),
                console.error("The error message: "),
                console.info(e)
            }
    }
    function redirectAfterFormSubmission(e, t, n, i) {
        void 0 !== e && 0 < e.length && (-1 !== (e = e).indexOf(".") && -1 === e.indexOf("http://") && -1 === e.indexOf("https://") && (e = "http://" + e), "True" === n && (e = -1 !== e.indexOf("?") ? e + "&" + i : e + "?" + i), window.open(e, "True" === t ? "_blank" : "_self"))
    }
    function U7(e) {
        for (var t, n = e.find(".js-tab-content-item"), i = 0, o = n.length, r = 0; r < o; r++)
            i < (t = n.eq(r).outerHeight()) && (i = t);
        20 < i && e.css({
            height: i
        })
    }
    function V7() {
        for (var e = 0; e < T7; e++)
            U7(S7.eq(e))
    }
    function W7() {
        var e,
            c;
        V7(),
        e = !1,
        window.addEventListener("resize", function() {
            clearTimeout(e),
            e = setTimeout(V7, 350)
        }),
        c = setInterval(function() {
            if ($(".js-tabs-item-list.state-loaded").length === T7)
                clearInterval(c);
            else
                for (var e = $(".js-tabs-item-list:not(.state-loaded)"), t = e.length, n = 0; n < t; n++) {
                    for (var i = e.eq(n), o = i.find(".js-tab-content-item"), r = o.length, s = 0; s < r; s++) {
                        var a = o.eq(s),
                            l = a.find("img");
                        (0 === l.length || !1 === a.hasClass("state-loaded") && l[0].complete) && a.addClass("state-loaded")
                    }
                    r === i.find(".js-tab-content-item.state-loaded").length && (i.addClass("state-loaded"), U7(i))
                }
        }, 500)
    }
    submitNoIntegrationForm.init(),
    window.unicornplatform.subscribeMailchimpForm = {
        init: function() {
            for (var e = $(".js-subscribe-mailchimp-form"), t = e.length, n = 0; n < t; n++)
                !function(n) {
                    var i = n.find(".js-engaging-message"),
                        o = n.find(".js-success-message"),
                        r = n.find(".js-error-message"),
                        s = n.find(".js-submit-button"),
                        e = n.find(".js-form-input"),
                        a = n.attr("data-redirect-url"),
                        l = n.attr("data-redirect-target-blank"),
                        c = n.attr("data-pass-values-redirect"),
                        u = n.attr("data-success-code");
                    n.on("submit", function(e) {
                        var t;
                        e.preventDefault(),
                        $(this),
                        button.showSpinner(s),
                        button.disableSubmit(s),
                        $.ajax({
                            type: n.attr("method"),
                            url: (t = n.attr("action"), e = "", e = t.replace(/post\?u=/i, "post-json?u="), e += "&c=?"),
                            data: n.serialize(),
                            cache: !1,
                            dataType: "json",
                            contentType: "application/json; charset=utf-8"
                        }).done(function(e) {
                            "success" != e.result ? (message.hide([o, i, r]), message.show(r, e.msg), button.stopSpinner(s), button.enableSubmit(s)) : (message.hide([o, i, r]), button.showSuccessTick(s), setTimeout(function() {
                                button.stopSpinner(s)
                            }, 200), setTimeout(function() {
                                button.removeSuccessTick(s),
                                button.enableSubmit(s)
                            }, 3e3), evaluateCodeAfterFormSubmission(u, n), redirectAfterFormSubmission(a, l, c, n.serialize()))
                        }).fail(function(e) {
                            button.stopSpinner(s),
                            button.enableSubmit(s),
                            message.hide([o, i, r]),
                            message.show(r, "Uh. We could not connect to the server. Please try again later."),
                            console.log(e)
                        }).always(function(e) {})
                    }),
                    e.on("keypress", "", function(e) {
                        if (13 === e.which)
                            return s.trigger("click"), !1
                    }),
                    e.on("focus", "", function(e) {
                        e.preventDefault(),
                        message.hide([o, i, r])
                    }).on("blur", "", function(e) {
                        e.preventDefault()
                    })
                }(e.eq(n))
        }
    },
    window.unicornplatform.subscribeMailchimpForm.init(),
    window.unicornplatform.subscribeZapierForm = {
        init: function() {
            for (var e = $(".js-subscribe-zapier-form"), t = e.length, n = 0; n < t; n++)
                !function(t) {
                    var n = t.find(".js-engaging-message"),
                        i = t.find(".js-success-message"),
                        o = t.find(".js-error-message"),
                        r = t.find(".js-submit-button"),
                        e = t.find(".js-form-input"),
                        s = t.attr("data-redirect-url"),
                        a = t.attr("data-redirect-target-blank"),
                        l = t.attr("data-pass-values-redirect"),
                        c = t.attr("data-success-code");
                    t.on("submit", function(e) {
                        e.preventDefault(),
                        $(this),
                        button.showSpinner(r),
                        button.disableSubmit(r),
                        $.ajax({
                            type: t.attr("method"),
                            url: t.attr("action"),
                            data: t.serialize(),
                            cache: !1,
                            dataType: "json"
                        }).done(function(e) {
                            "success" !== e.status ? (message.hide([i, n, o]), message.show(o, "There is an unknown error. We are so sorry!"), button.stopSpinner(r), button.enableSubmit(r)) : (message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                                button.stopSpinner(r)
                            }, 200), setTimeout(function() {
                                button.removeSuccessTick(r),
                                button.enableSubmit(r)
                            }, 3e3), evaluateCodeAfterFormSubmission(c, t), redirectAfterFormSubmission(s, a, l, t.serialize()))
                        }).fail(function(e) {
                            button.stopSpinner(r),
                            button.enableSubmit(r),
                            message.hide([i, n, o]),
                            message.show(o, "Uh. We could not connect to the server. Please try again later."),
                            console.log(e)
                        }).always(function(e) {})
                    }),
                    e.on("keypress", "", function(e) {
                        if (13 === e.which)
                            return r.trigger("click"), !1
                    }),
                    e.on("focus", "", function(e) {
                        e.preventDefault(),
                        message.hide([i, n, o])
                    }).on("blur", "", function(e) {
                        e.preventDefault()
                    })
                }(e.eq(n))
        }
    },
    window.unicornplatform.subscribeZapierForm.init(),
    window.unicornplatform.subscribeGoogleSheetForm = {
        init: function() {
            for (var e = $(".js-subscribe-google-sheet-form"), t = e.length, n = 0; n < t; n++)
                !function(t) {
                    var n = t.find(".js-engaging-message"),
                        i = t.find(".js-success-message"),
                        o = t.find(".js-error-message"),
                        r = t.find(".js-submit-button"),
                        e = t.find(".js-form-input"),
                        s = t.attr("data-redirect-url"),
                        a = t.attr("data-redirect-target-blank"),
                        l = t.attr("data-sheet-id"),
                        c = t.attr("data-pass-values-redirect"),
                        u = t.attr("data-success-code");
                    t.on("submit", function(e) {
                        e.preventDefault(),
                        $(this),
                        button.showSpinner(r),
                        button.disableSubmit(r),
                        $.ajax({
                            type: t.attr("method"),
                            url: t.attr("action"),
                            data: t.serialize() + "&SHEET_ID=" + l,
                            cache: !1,
                            dataType: "json"
                        }).done(function(e) {
                            "success" !== e.status ? (message.hide([i, n, o]), message.show(o, "There is an unknown error. We are so sorry!"), button.stopSpinner(r), button.enableSubmit(r)) : (message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                                button.stopSpinner(r)
                            }, 200), setTimeout(function() {
                                button.removeSuccessTick(r),
                                button.enableSubmit(r)
                            }, 3e3), evaluateCodeAfterFormSubmission(u, t), redirectAfterFormSubmission(s, a, c, t.serialize()))
                        }).fail(function(e) {
                            button.stopSpinner(r),
                            button.enableSubmit(r),
                            message.hide([i, n, o]),
                            message.show(o, "Uh. We could not connect to the server. Please try again later."),
                            console.log(e)
                        }).always(function(e) {})
                    }),
                    e.on("keypress", "", function(e) {
                        if (13 === e.which)
                            return r.trigger("click"), !1
                    }),
                    e.on("focus", "", function(e) {
                        e.preventDefault(),
                        message.hide([i, n, o])
                    }).on("blur", "", function(e) {
                        e.preventDefault()
                    })
                }(e.eq(n))
        }
    },
    window.unicornplatform.subscribeGoogleSheetForm.init(),
    window.unicornplatform.subscribeWebhookForm = {
        init: function() {
            for (var e = $(".js-subscribe-webhook-form"), t = e.length, n = 0; n < t; n++)
                !function(t) {
                    var n = t.find(".js-engaging-message"),
                        i = t.find(".js-success-message"),
                        o = t.find(".js-error-message"),
                        r = t.find(".js-submit-button"),
                        e = t.find(".js-form-input"),
                        s = t.attr("data-redirect-url"),
                        a = t.attr("data-redirect-target-blank"),
                        l = t.attr("data-pass-values-redirect"),
                        c = t.attr("data-success-code");
                    t.on("submit", function(e) {
                        e.preventDefault(),
                        $(this),
                        button.showSpinner(r),
                        button.disableSubmit(r),
                        $.ajax({
                            type: t.attr("method"),
                            url: t.attr("action"),
                            data: t.serialize(),
                            cache: !1,
                            dataType: "json"
                        }).done(function(e) {
                            message.hide([i, n, o]),
                            button.showSuccessTick(r),
                            setTimeout(function() {
                                button.stopSpinner(r)
                            }, 200),
                            setTimeout(function() {
                                button.removeSuccessTick(r),
                                button.enableSubmit(r)
                            }, 3e3),
                            evaluateCodeAfterFormSubmission(c, t),
                            redirectAfterFormSubmission(s, a, l, t.serialize())
                        }).fail(function(e) {
                            button.stopSpinner(r),
                            button.enableSubmit(r);
                            var t = "Uh. We could not connect to the server. Please try again later.";
                            void 0 !== e.error && (t = e.error),
                            message.hide([i, n, o]),
                            message.show(o, t)
                        }).always(function(e) {})
                    }),
                    e.on("keypress", "", function(e) {
                        if (13 === e.which)
                            return r.trigger("click"), !1
                    }),
                    e.on("focus", "", function(e) {
                        e.preventDefault(),
                        message.hide([i, n, o])
                    }).on("blur", "", function(e) {
                        e.preventDefault()
                    })
                }(e.eq(n))
        }
    },
    window.unicornplatform.subscribeWebhookForm.init(),
    window.unicornplatform.roadmapScroll = {
        init: function() {
            var e = $("#js-roadmap-wrapper");
            0 < e.length && (function() {
                var e = 700;
                isMobile() && (e = 150);
                var t = $(".js-roadmap-item"),
                    e = t.length * (t.eq(0).width() + 60) + e;
                $(".js-roadmap-box").css("width", e)
            }(), isMobile() || e.kinetic({
                maxvelocity: 30
            }))
        }
    },
    window.unicornplatform.roadmapScroll.init(),
    window.unicornplatform.slider = {
        init: function() {
            for (var e = $(".js-slider"), t = e.length, n = "", i = 0; i < t; i++) {
                n = e.eq(i);
                var o = JSON.parse(n.attr("data-slider-config")),
                    r = n.parent().find(".js-prev-arrow"),
                    s = n.parent().find(".js-next-arrow");
                0 < r.length && 0 < s.length ? (o.prevArrow = r, o.nextArrow = s) : o.arrows = !1,
                n.hasClass("slick-initialized") || n.slick(o)
            }
        }
    },
    window.unicornplatform.slider.init(),
    window.unicornplatform.tabs = {
        init: function() {
            S7 = $(".js-tabs-item-list"),
            0 < (T7 = S7.length) && W7(),
            $(document).on("click", ".js-open-tab", function(e) {
                if (e.preventDefault(), $(this).hasClass("state-active-tab"))
                    return !1;
                var t = $(this).attr("data-index"),
                    e = $(this).attr("data-group");
                $('.js-open-tab[data-group="' + e + '"]').removeClass("state-active-tab"),
                $(this).addClass("state-active-tab"),
                $('.js-tab-content[data-group="' + e + '"]').removeClass("state-active-tab"),
                $('.js-tab-content[data-group="' + e + '"][data-index="' + t + '"]').addClass("state-active-tab")
            })
        },
        setAll: V7
    },
    window.unicornplatform.tabs.init();
    var showContentOnClick = {
        bind: function() {
            $(document).on("mouseenter", ".js-hover-to-show-sibling", function(e) {
                e.preventDefault(),
                $(this).siblings(".js-content-to-show").addClass("state-visible")
            }),
            $(document).on("mouseleave", ".js-hover-to-show-sibling", function(e) {
                e.preventDefault(),
                $(this).siblings(".js-content-to-show").removeClass("state-visible")
            })
        }
    };
    showContentOnClick.bind();
    var clipboard = new ClipboardJS(".js-copy-text");
    clipboard.on("success", function(e) {
        var t = $(e.trigger);
        button.showSuccessTick(t),
        button.disableSubmit(t),
        setTimeout(function() {
            button.removeSuccessTick(t),
            button.enableSubmit(t)
        }, 3e3)
    }),
    clipboard.on("error", function(e) {
        console.error("Copy action error: ", e.action),
        console.error("Trigger:", e.trigger)
    });
    var faqToggle = {
        init: function() {
            $(document).on("click", ".js-open-faq", function(e) {
                e.preventDefault(),
                $(this).find(".js-faq-item").slideToggle(200),
                $(this).toggleClass("state-active")
            }),
            $(document).on("click", ".js-open-faq a", function(e) {
                e.stopPropagation()
            })
        }
    };
    faqToggle.init();
    var openMenu = (P8 = $("body"), {
            bind: function() {
                $(document).on("click", ".js-open-menu", function(e) {
                    e.preventDefault();
                    var t = $(this).parents(".js-menu");
                    $(this).hasClass("state-active-burger") ? R8(t, $(this)) : (e = t, t = $(this), e.addClass("state-opened-menu"), t.addClass("state-active-burger"), P8.addClass("state-fixed-body"))
                })
            },
            close: R8
        }),
        P8;
    function R8(e, t) {
        e.removeClass("state-opened-menu"),
        t.removeClass("state-active-burger"),
        P8.removeClass("state-fixed-body")
    }
    openMenu.bind();
    var toggleDropdown = {
        bind: function() {
            var n = $(".js-toggle-dropdown");
            $(document).on("click", ".js-toggle-dropdown", function(e) {
                var t = $(this);
                $(this).hasClass("state-opened-dropdown") ? $8(t) : ($8(n), t.addClass("state-opened-dropdown"))
            }),
            $(document).on("click", function(e) {
                !0 === $(e.target).hasClass("js-toggle-dropdown") || 1 === $(e.target).parents(".js-toggle-dropdown").length || $8(n)
            })
        },
        close: $8
    };
    function $8(e) {
        e.removeClass("state-opened-dropdown")
    }
    toggleDropdown.bind();
    var scrollDown = {
        bind: function() {
            $(document).on("click", ".js-scroll-down", function(e) {
                e.preventDefault();
                e = $(this).parents(".js-scroll-this-box"),
                e = e.outerHeight() + e.position().top;
                $("html, body").animate({
                    scrollTop: e
                }, 450)
            })
        }
    };
    scrollDown.bind();
    var highlightHeadingWord = {
        init: function() {
            $(".js-scroll-down").addClass("state-active")
        }
    };
    highlightHeadingWord.init();
    var interactions = {
        bind: function() {
            $(document).on("click", ".js-toggle-animation", function(e) {
                e.preventDefault(),
                $(this).toggleClass("state-active-animation")
            })
        }
    };
    interactions.bind();
    var lightbox = {
        bind: function() {
            $(document).on("click", ".js-lightbox-single-image", function(e) {
                e.preventDefault();
                var t = document.querySelectorAll(".pswp")[0],
                    n = $(this).attr("src"),
                    i = $(this).attr("data-height"),
                    e = $(this).attr("data-width");
                new PhotoSwipe(t, PhotoSwipeUI_Default, [{
                    src: n,
                    w: e,
                    h: i
                }], {
                    index: 0,
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !1,
                    zoomEl: !1,
                    shareEl: !1,
                    counterEl: !1,
                    arrowEl: !0,
                    preloaderEl: !0
                }).init()
            })
        }
    };
    lightbox.bind();
    var scrollTo = {
        init: function() {
            $(document).on("click", 'a[href^="#"]:not([href="#"]), a[href^="/#"]:not([href="/#"]), .js-scroll-to-id', function(e) {
                var t = $(this).attr("href");
                "/" !== window.location.pathname && -1 !== t.indexOf("/#") || (e.preventDefault(), e = "", e = "#" + t.split("#")[1], t = $(e).offset().top, $("html, body").animate({
                    scrollTop: t
                }, 400), e = $(".js-menu.state-opened-menu"), t = $(".js-open-menu.state-active-burger"), 0 < e.length && 0 < t.length && openMenu.close(e, t))
            })
        }
    };
    scrollTo.init();
    var showError = {
        showManually: function(e) {
            void 0 !== e && $(".js-form-error-message").text(e),
            $(".js-form-error-box").addClass("state-visible")
        },
        showAutomatically: function() {
            var e = getUrlParameter("error_message");
            0 < e.length && ($(".js-form-error-box").addClass("state-visible"), $(".js-form-error-message").text(e))
        }
    };
    showError.showAutomatically(),
    window.unicornplatform.stripeCheckout = {
        bind: function() {
            $(document).on("click", "[data-stripe-product-id]", function(e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    s;
                void 0 !== window.Stripe && void 0 !== window.stripe_public_api_key && "" !== window.stripe_public_api_key && (t = (s = $(this)).attr("data-stripe-product-id"), n = s.attr("data-successful-payment-url"), i = s.attr("data-cancel-payment-url"), "" !== n && void 0 !== n || (n = window.location.href + "?popup_id=successful_payment"), "" !== i && void 0 !== i || (i = window.location.href + "?popup_id=cancelled_payment"), t && "" !== t && (e.preventDefault(), o = Stripe(window.stripe_public_api_key), r = [{
                    quantity: 1
                }], "plan" === (e = t.split("_")[0]) ? r[0].plan = t : "sku" === e ? r[0].sku = t : "price" === e ? r[0].price = t : console.error("A message for the website owner: there has been a mistake in setting up your Stripe integration. Please contact the Unicorn Platform support crew."), "price" === e ? (s = s.attr("data-stripe-mode"), o.redirectToCheckout({
                    lineItems: r,
                    mode: s,
                    successUrl: n,
                    cancelUrl: i
                }).then(function(e) {
                    e.error && alert('The purchase ended up with an error: "' + e.error.message + '" We are sorry.')
                })) : o.redirectToCheckout({
                    items: r,
                    successUrl: n,
                    cancelUrl: i
                }).then(function(e) {
                    e.error && alert('The purchase ended up with an error: "' + e.error.message + '" We are sorry.')
                })))
            })
        }
    },
    window.unicornplatform.stripeCheckout.bind();
    var popup = (X9 = {
            openSpeed: 150,
            closeSpeed: 50,
            loading: "",
            afterClose: function() {
                var e = {
                    Title: document.title,
                    Url: removeParam("popup_id")
                };
                history.pushState(e, e.Title, e.Url)
            }
        }, {
            openOnPageLoad: function() {
                var e = getUrlParameter("popup_id");
                e && "" !== e && $.featherlight(Y9(e), X9)
            },
            bind: function() {
                $(document).on("click", ".js-open-popup", function(e) {
                    e.preventDefault();
                    e = $(this).attr("data-popup-id");
                    $(this).featherlight(Y9(e), X9)
                })
            }
        }),
        X9,
        loadMore,
        gaa,
        haa,
        iaa,
        kaa;
    function Y9(e) {
        var t = $("#" + e),
            e = t;
        return e = 0 === t.length ? $("#no_such_popup") : e
    }
    popup.openOnPageLoad(),
    popup.bind(),
    null !== localStorage.getItem("allBlogPosts") && (gaa = $(".js-post-item"), haa = $(".js-posts-list"), iaa = gaa.length, kaa = JSON.parse(localStorage.getItem("allBlogPosts")), loadMore = {
        bind: function() {
            var i = (kaa.length - iaa) / 5;
            $(document).on("click", "#js-load-more", function(e) {
                if (e.preventDefault(), 0 < i) {
                    for (var t = iaa; t < iaa + 5 && t < kaa.length; t++) {
                        var n = gaa.clone().eq(0);
                        n.attr("href", kaa[t].url),
                        "" !== kaa[t].og_image_url ? n.find(".js-post-item__img").attr("src", kaa[t].og_image_url) : "" !== kaa[t].first_image_url && n.find(".js-post-item__img").attr("src", kaa[t].first_image_url),
                        n.find(".js-post-item__title").text(kaa[t].title),
                        haa.append(n)
                    }
                    iaa += 5,
                    i <= 1 && $(".js-load-more-wrapper").hide(),
                    i -= 1
                }
            })
        }
    }, loadMore.bind());
    var $overlayList = $("#js-overlay-list");
    setTimeout(function() {
        var n,
            i,
            o,
            r;
        $overlayList.hasClass("read-more-zoom") && (n = $("#js-read-more"), i = $(".js-nav"), o = $(window).height(), r = $overlayList.height(), i.css({
            transition: "0.6s cubic-bezier(0.33, 1, 0.68, 1)"
        }), $(window).on("scroll", function() {
            var e = n.offset().top,
                t = $(this).scrollTop();
            o < r ? e - o < t ? ($overlayList.css("transform", "scale(0.92) translateY(-60px)"), i.css({
                opacity: "0",
                visibility: "hidden"
            })) : ($overlayList.css("transform", "scale(1)"), i.css({
                opacity: "1",
                visibility: "visible"
            })) : r < o && (0 < t ? ($overlayList.css("transform", "scale(0.92) translateY(-60px)"), i.css({
                opacity: "0",
                visibility: "hidden"
            })) : ($overlayList.css("transform", "scale(1)"), i.css({
                opacity: "1",
                visibility: "visible"
            })))
        }))
    }, 500)
});
var widgets = {
    bindClose: function() {
        $(document).on("click", ".js-close-widget", function(e) {
            e.preventDefault();
            e = $(this).attr("data-widget-id");
            $("#" + e).toggleClass("state-visible"),
            localStorage["unicorn-widget-" + e] = "hidden"
        })
    },
    bindInit: function() {
        var e,
            t = $(".js-widget");
        0 < t.length && (e = t.attr("id"), "hidden" !== localStorage["unicorn-widget-" + e] && setTimeout(function() {
            t.toggleClass("state-visible")
        }, 2e3))
    }
};
widgets.bindClose(),
widgets.bindInit();

