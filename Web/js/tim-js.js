! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t() }(this, (function() { var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) { return e(t = { exports: {} }, t.exports), t.exports } var n = function(e) { return e && e.Math == Math && e },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        o = function(e) { try { return !!e() } catch (t) { return !0 } },
        i = !o((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })),
        s = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        u = { f: a && !s.call({ 1: 2 }, 1) ? function(e) { var t = a(this, e); return !!t && t.enumerable } : s },
        c = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } },
        l = {}.toString,
        p = function(e) { return l.call(e).slice(8, -1) },
        f = "".split,
        h = o((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(e) { return "String" == p(e) ? f.call(e, "") : Object(e) } : Object,
        d = function(e) { if (null == e) throw TypeError("Can't call method on " + e); return e },
        g = function(e) { return h(d(e)) },
        m = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e },
        v = function(e, t) { if (!m(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !m(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") },
        y = {}.hasOwnProperty,
        _ = function(e, t) { return y.call(e, t) },
        C = r.document,
        I = m(C) && m(C.createElement),
        M = function(e) { return I ? C.createElement(e) : {} },
        S = !i && !o((function() { return 7 != Object.defineProperty(M("div"), "a", { get: function() { return 7 } }).a })),
        T = Object.getOwnPropertyDescriptor,
        E = { f: i ? T : function(e, t) { if (e = g(e), t = v(t, !0), S) try { return T(e, t) } catch (n) {}
                if (_(e, t)) return c(!u.f.call(e, t), e[t]) } },
        D = function(e) { if (!m(e)) throw TypeError(String(e) + " is not an object"); return e },
        k = Object.defineProperty,
        w = { f: i ? k : function(e, t, n) { if (D(e), t = v(t, !0), D(n), S) try { return k(e, t, n) } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (e[t] = n.value), e } },
        A = i ? function(e, t, n) { return w.f(e, t, c(1, n)) } : function(e, t, n) { return e[t] = n, e },
        b = function(e, t) { try { A(r, e, t) } catch (n) { r[e] = t } return t },
        R = r["__core-js_shared__"] || b("__core-js_shared__", {}),
        O = Function.toString; "function" != typeof R.inspectSource && (R.inspectSource = function(e) { return O.call(e) }); var L, N, P, G = R.inspectSource,
        x = r.WeakMap,
        U = "function" == typeof x && /native code/.test(G(x)),
        q = t((function(e) {
            (e.exports = function(e, t) { return R[e] || (R[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.6.4", mode: "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) })),
        F = 0,
        j = Math.random(),
        B = function(e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++F + j).toString(36) },
        H = q("keys"),
        V = function(e) { return H[e] || (H[e] = B(e)) },
        K = {},
        $ = r.WeakMap; if (U) { var Y = new $,
            z = Y.get,
            W = Y.has,
            X = Y.set;
        L = function(e, t) { return X.call(Y, e, t), t }, N = function(e) { return z.call(Y, e) || {} }, P = function(e) { return W.call(Y, e) } } else { var J = V("state");
        K[J] = !0, L = function(e, t) { return A(e, J, t), t }, N = function(e) { return _(e, J) ? e[J] : {} }, P = function(e) { return _(e, J) } } var Q = { set: L, get: N, has: P, enforce: function(e) { return P(e) ? N(e) : L(e, {}) }, getterFor: function(e) { return function(t) { var n; if (!m(t) || (n = N(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } } },
        Z = t((function(e) { var t = Q.get,
                n = Q.enforce,
                o = String(String).split("String");
            (e.exports = function(e, t, i, s) { var a = !!s && !!s.unsafe,
                    u = !!s && !!s.enumerable,
                    c = !!s && !!s.noTargetGet; "function" == typeof i && ("string" != typeof t || _(i, "name") || A(i, "name", t), n(i).source = o.join("string" == typeof t ? t : "")), e !== r ? (a ? !c && e[t] && (u = !0) : delete e[t], u ? e[t] = i : A(e, t, i)) : u ? e[t] = i : b(t, i) })(Function.prototype, "toString", (function() { return "function" == typeof this && t(this).source || G(this) })) })),
        ee = r,
        te = function(e) { return "function" == typeof e ? e : void 0 },
        ne = function(e, t) { return arguments.length < 2 ? te(ee[e]) || te(r[e]) : ee[e] && ee[e][t] || r[e] && r[e][t] },
        re = Math.ceil,
        oe = Math.floor,
        ie = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? oe : re)(e) },
        se = Math.min,
        ae = function(e) { return e > 0 ? se(ie(e), 9007199254740991) : 0 },
        ue = Math.max,
        ce = Math.min,
        le = function(e, t) { var n = ie(e); return n < 0 ? ue(n + t, 0) : ce(n, t) },
        pe = function(e) { return function(t, n, r) { var o, i = g(t),
                    s = ae(i.length),
                    a = le(r, s); if (e && n != n) { for (; s > a;)
                        if ((o = i[a++]) != o) return !0 } else
                    for (; s > a; a++)
                        if ((e || a in i) && i[a] === n) return e || a || 0; return !e && -1 } },
        fe = { includes: pe(!0), indexOf: pe(!1) },
        he = fe.indexOf,
        de = function(e, t) { var n, r = g(e),
                o = 0,
                i = []; for (n in r) !_(K, n) && _(r, n) && i.push(n); for (; t.length > o;) _(r, n = t[o++]) && (~he(i, n) || i.push(n)); return i },
        ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        me = ge.concat("length", "prototype"),
        ve = { f: Object.getOwnPropertyNames || function(e) { return de(e, me) } },
        ye = { f: Object.getOwnPropertySymbols },
        _e = ne("Reflect", "ownKeys") || function(e) { var t = ve.f(D(e)),
                n = ye.f; return n ? t.concat(n(e)) : t },
        Ce = function(e, t) { for (var n = _e(t), r = w.f, o = E.f, i = 0; i < n.length; i++) { var s = n[i];
                _(e, s) || r(e, s, o(t, s)) } },
        Ie = /#|\.prototype\./,
        Me = function(e, t) { var n = Te[Se(e)]; return n == De || n != Ee && ("function" == typeof t ? o(t) : !!t) },
        Se = Me.normalize = function(e) { return String(e).replace(Ie, ".").toLowerCase() },
        Te = Me.data = {},
        Ee = Me.NATIVE = "N",
        De = Me.POLYFILL = "P",
        ke = Me,
        we = E.f,
        Ae = function(e, t) { var n, o, i, s, a, u = e.target,
                c = e.global,
                l = e.stat; if (n = c ? r : l ? r[u] || b(u, {}) : (r[u] || {}).prototype)
                for (o in t) { if (s = t[o], i = e.noTargetGet ? (a = we(n, o)) && a.value : n[o], !ke(c ? o : u + (l ? "." : "#") + o, e.forced) && void 0 !== i) { if (typeof s == typeof i) continue;
                        Ce(s, i) }(e.sham || i && i.sham) && A(s, "sham", !0), Z(n, o, s, e) } },
        be = function(e) { if ("function" != typeof e) throw TypeError(String(e) + " is not a function"); return e },
        Re = function(e, t, n) { if (be(e), void 0 === t) return e; switch (n) {
                case 0:
                    return function() { return e.call(t) };
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, r) { return e.call(t, n, r) };
                case 3:
                    return function(n, r, o) { return e.call(t, n, r, o) } } return function() { return e.apply(t, arguments) } },
        Oe = function(e) { return Object(d(e)) },
        Le = Array.isArray || function(e) { return "Array" == p(e) },
        Ne = !!Object.getOwnPropertySymbols && !o((function() { return !String(Symbol()) })),
        Pe = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ge = q("wks"),
        xe = r.Symbol,
        Ue = Pe ? xe : xe && xe.withoutSetter || B,
        qe = function(e) { return _(Ge, e) || (Ne && _(xe, e) ? Ge[e] = xe[e] : Ge[e] = Ue("Symbol." + e)), Ge[e] },
        Fe = qe("species"),
        je = function(e, t) { var n; return Le(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[Fe]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t) },
        Be = [].push,
        He = function(e) { var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                o = 4 == e,
                i = 6 == e,
                s = 5 == e || i; return function(a, u, c, l) { for (var p, f, d = Oe(a), g = h(d), m = Re(u, c, 3), v = ae(g.length), y = 0, _ = l || je, C = t ? _(a, v) : n ? _(a, 0) : void 0; v > y; y++)
                    if ((s || y in g) && (f = m(p = g[y], y, d), e))
                        if (t) C[y] = f;
                        else if (f) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return p;
                    case 6:
                        return y;
                    case 2:
                        Be.call(C, p) } else if (o) return !1;
                return i ? -1 : r || o ? o : C } },
        Ve = { forEach: He(0), map: He(1), filter: He(2), some: He(3), every: He(4), find: He(5), findIndex: He(6) },
        Ke = function(e, t) { var n = [][e]; return !!n && o((function() { n.call(null, t || function() { throw 1 }, 1) })) },
        $e = Object.defineProperty,
        Ye = {},
        ze = function(e) { throw e },
        We = function(e, t) { if (_(Ye, e)) return Ye[e];
            t || (t = {}); var n = [][e],
                r = !!_(t, "ACCESSORS") && t.ACCESSORS,
                s = _(t, 0) ? t[0] : ze,
                a = _(t, 1) ? t[1] : void 0; return Ye[e] = !!n && !o((function() { if (r && !i) return !0; var e = { length: -1 };
                r ? $e(e, 1, { enumerable: !0, get: ze }) : e[1] = 1, n.call(e, s, a) })) },
        Xe = Ve.forEach,
        Je = Ke("forEach"),
        Qe = We("forEach"),
        Ze = Je && Qe ? [].forEach : function(e) { return Xe(this, e, arguments.length > 1 ? arguments[1] : void 0) };
    Ae({ target: "Array", proto: !0, forced: [].forEach != Ze }, { forEach: Ze }); var et = function(e, t, n, r) { try { return r ? t(D(n)[0], n[1]) : t(n) } catch (i) { var o = e.return; throw void 0 !== o && D(o.call(e)), i } },
        tt = {},
        nt = qe("iterator"),
        rt = Array.prototype,
        ot = function(e) { return void 0 !== e && (tt.Array === e || rt[nt] === e) },
        it = function(e, t, n) { var r = v(t);
            r in e ? w.f(e, r, c(0, n)) : e[r] = n },
        st = {};
    st[qe("toStringTag")] = "z"; var at = "[object z]" === String(st),
        ut = qe("toStringTag"),
        ct = "Arguments" == p(function() { return arguments }()),
        lt = at ? p : function(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (n) {} }(t = Object(e), ut)) ? n : ct ? p(t) : "Object" == (r = p(t)) && "function" == typeof t.callee ? "Arguments" : r },
        pt = qe("iterator"),
        ft = function(e) { if (null != e) return e[pt] || e["@@iterator"] || tt[lt(e)] },
        ht = function(e) { var t, n, r, o, i, s, a = Oe(e),
                u = "function" == typeof this ? this : Array,
                c = arguments.length,
                l = c > 1 ? arguments[1] : void 0,
                p = void 0 !== l,
                f = ft(a),
                h = 0; if (p && (l = Re(l, c > 2 ? arguments[2] : void 0, 2)), null == f || u == Array && ot(f))
                for (n = new u(t = ae(a.length)); t > h; h++) s = p ? l(a[h], h) : a[h], it(n, h, s);
            else
                for (i = (o = f.call(a)).next, n = new u; !(r = i.call(o)).done; h++) s = p ? et(o, l, [r.value, h], !0) : r.value, it(n, h, s); return n.length = h, n },
        dt = qe("iterator"),
        gt = !1; try { var mt = 0,
            vt = { next: function() { return { done: !!mt++ } }, return: function() { gt = !0 } };
        vt[dt] = function() { return this }, Array.from(vt, (function() { throw 2 })) } catch (gC) {} var yt = function(e, t) { if (!t && !gt) return !1; var n = !1; try { var r = {};
                r[dt] = function() { return { next: function() { return { done: n = !0 } } } }, e(r) } catch (gC) {} return n },
        _t = !yt((function(e) { Array.from(e) }));
    Ae({ target: "Array", stat: !0, forced: _t }, { from: ht }); var Ct, It = Object.keys || function(e) { return de(e, ge) },
        Mt = i ? Object.defineProperties : function(e, t) { D(e); for (var n, r = It(t), o = r.length, i = 0; o > i;) w.f(e, n = r[i++], t[n]); return e },
        St = ne("document", "documentElement"),
        Tt = V("IE_PROTO"),
        Et = function() {},
        Dt = function(e) { return "<script>" + e + "<\/script>" },
        kt = function() { try { Ct = document.domain && new ActiveXObject("htmlfile") } catch (gC) {} var e, t;
            kt = Ct ? function(e) { e.write(Dt("")), e.close(); var t = e.parentWindow.Object; return e = null, t }(Ct) : ((t = M("iframe")).style.display = "none", St.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Dt("document.F=Object")), e.close(), e.F); for (var n = ge.length; n--;) delete kt.prototype[ge[n]]; return kt() };
    K[Tt] = !0; var wt = Object.create || function(e, t) { var n; return null !== e ? (Et.prototype = D(e), n = new Et, Et.prototype = null, n[Tt] = e) : n = kt(), void 0 === t ? n : Mt(n, t) };
    Ae({ target: "Object", stat: !0, sham: !i }, { create: wt }); var At = o((function() { It(1) }));
    Ae({ target: "Object", stat: !0, forced: At }, { keys: function(e) { return It(Oe(e)) } }); var bt, Rt, Ot, Lt = function(e) { return function(t, n) { var r, o, i = String(d(t)),
                    s = ie(n),
                    a = i.length; return s < 0 || s >= a ? e ? "" : void 0 : (r = i.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === a || (o = i.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? i.charAt(s) : r : e ? i.slice(s, s + 2) : o - 56320 + (r - 55296 << 10) + 65536 } },
        Nt = { codeAt: Lt(!1), charAt: Lt(!0) },
        Pt = !o((function() {
            function e() {} return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype })),
        Gt = V("IE_PROTO"),
        xt = Object.prototype,
        Ut = Pt ? Object.getPrototypeOf : function(e) { return e = Oe(e), _(e, Gt) ? e[Gt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? xt : null },
        qt = qe("iterator"),
        Ft = !1;
    [].keys && ("next" in (Ot = [].keys()) ? (Rt = Ut(Ut(Ot))) !== Object.prototype && (bt = Rt) : Ft = !0), null == bt && (bt = {}), _(bt, qt) || A(bt, qt, (function() { return this })); var jt = { IteratorPrototype: bt, BUGGY_SAFARI_ITERATORS: Ft },
        Bt = w.f,
        Ht = qe("toStringTag"),
        Vt = function(e, t, n) { e && !_(e = n ? e : e.prototype, Ht) && Bt(e, Ht, { configurable: !0, value: t }) },
        Kt = jt.IteratorPrototype,
        $t = function() { return this },
        Yt = function(e, t, n) { var r = t + " Iterator"; return e.prototype = wt(Kt, { next: c(1, n) }), Vt(e, r, !1), tt[r] = $t, e },
        zt = Object.setPrototypeOf || ("__proto__" in {} ? function() { var e, t = !1,
                n = {}; try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array } catch (gC) {} return function(n, r) { return D(n),
                    function(e) { if (!m(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype") }(r), t ? e.call(n, r) : n.__proto__ = r, n } }() : void 0),
        Wt = jt.IteratorPrototype,
        Xt = jt.BUGGY_SAFARI_ITERATORS,
        Jt = qe("iterator"),
        Qt = function() { return this },
        Zt = function(e, t, n, r, o, i, s) { Yt(n, t, r); var a, u, c, l = function(e) { if (e === o && g) return g; if (!Xt && e in h) return h[e]; switch (e) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() { return new n(this, e) } } return function() { return new n(this) } },
                p = t + " Iterator",
                f = !1,
                h = e.prototype,
                d = h[Jt] || h["@@iterator"] || o && h[o],
                g = !Xt && d || l(o),
                m = "Array" == t && h.entries || d; if (m && (a = Ut(m.call(new e)), Wt !== Object.prototype && a.next && (Ut(a) !== Wt && (zt ? zt(a, Wt) : "function" != typeof a[Jt] && A(a, Jt, Qt)), Vt(a, p, !0))), "values" == o && d && "values" !== d.name && (f = !0, g = function() { return d.call(this) }), h[Jt] !== g && A(h, Jt, g), tt[t] = g, o)
                if (u = { values: l("values"), keys: i ? g : l("keys"), entries: l("entries") }, s)
                    for (c in u)(Xt || f || !(c in h)) && Z(h, c, u[c]);
                else Ae({ target: t, proto: !0, forced: Xt || f }, u);
            return u },
        en = Nt.charAt,
        tn = Q.set,
        nn = Q.getterFor("String Iterator");
    Zt(String, "String", (function(e) { tn(this, { type: "String Iterator", string: String(e), index: 0 }) }), (function() { var e, t = nn(this),
            n = t.string,
            r = t.index; return r >= n.length ? { value: void 0, done: !0 } : (e = en(n, r), t.index += e.length, { value: e, done: !1 }) })); var rn = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }; for (var on in rn) { var sn = r[on],
            an = sn && sn.prototype; if (an && an.forEach !== Ze) try { A(an, "forEach", Ze) } catch (gC) { an.forEach = Ze } } var un, cn, ln = { SDK_READY: "sdkStateReady", SDK_NOT_READY: "sdkStateNotReady", SDK_DESTROY: "sdkDestroy", MESSAGE_RECEIVED: "onMessageReceived", MESSAGE_REVOKED: "onMessageRevoked", CONVERSATION_LIST_UPDATED: "onConversationListUpdated", GROUP_LIST_UPDATED: "onGroupListUpdated", GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice", PROFILE_UPDATED: "onProfileUpdated", BLACKLIST_UPDATED: "blacklistUpdated", KICKED_OUT: "kickedOut", ERROR: "error", NET_STATE_CHANGE: "netStateChange" },
        pn = { MSG_TEXT: "TIMTextElem", MSG_IMAGE: "TIMImageElem", MSG_SOUND: "TIMSoundElem", MSG_AUDIO: "TIMSoundElem", MSG_FILE: "TIMFileElem", MSG_FACE: "TIMFaceElem", MSG_VIDEO: "TIMVideoFileElem", MSG_GEO: "TIMLocationElem", MSG_GRP_TIP: "TIMGroupTipElem", MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem", MSG_CUSTOM: "TIMCustomElem", MSG_PRIORITY_HIGH: "High", MSG_PRIORITY_NORMAL: "Normal", MSG_PRIORITY_LOW: "Low", MSG_PRIORITY_LOWEST: "Lowest", CONV_C2C: "C2C", CONV_GROUP: "GROUP", CONV_SYSTEM: "@TIM#SYSTEM", GRP_PRIVATE: "Private", GRP_PUBLIC: "Public", GRP_CHATROOM: "ChatRoom", GRP_AVCHATROOM: "AVChatRoom", GRP_MBR_ROLE_OWNER: "Owner", GRP_MBR_ROLE_ADMIN: "Admin", GRP_MBR_ROLE_MEMBER: "Member", GRP_TIP_MBR_JOIN: 1, GRP_TIP_MBR_QUIT: 2, GRP_TIP_MBR_KICKED_OUT: 3, GRP_TIP_MBR_SET_ADMIN: 4, GRP_TIP_MBR_CANCELED_ADMIN: 5, GRP_TIP_GRP_PROFILE_UPDATED: 6, GRP_TIP_MBR_PROFILE_UPDATED: 7, MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify", MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify", MSG_REMIND_DISCARD: "Discard", GENDER_UNKNOWN: "Gender_Type_Unknown", GENDER_FEMALE: "Gender_Type_Female", GENDER_MALE: "Gender_Type_Male", KICKED_OUT_MULT_ACCOUNT: "multipleAccount", KICKED_OUT_MULT_DEVICE: "multipleDevice", KICKED_OUT_USERSIG_EXPIRED: "userSigExpired", ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny", ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny", FORBID_TYPE_NONE: "AdminForbid_Type_None", FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut", JOIN_OPTIONS_FREE_ACCESS: "FreeAccess", JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission", JOIN_OPTIONS_DISABLE_APPLY: "DisableApply", JOIN_STATUS_SUCCESS: "JoinedSuccess", JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup", JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval", GRP_PROFILE_OWNER_ID: "ownerID", GRP_PROFILE_CREATE_TIME: "createTime", GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime", GRP_PROFILE_MEMBER_NUM: "memberNum", GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum", GRP_PROFILE_JOIN_OPTION: "joinOption", GRP_PROFILE_INTRODUCTION: "introduction", GRP_PROFILE_NOTIFICATION: "notification", GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers", NET_STATE_CONNECTED: "connected", NET_STATE_CONNECTING: "connecting", NET_STATE_DISCONNECTED: "disconnected" },
        fn = ne("navigator", "userAgent") || "",
        hn = r.process,
        dn = hn && hn.versions,
        gn = dn && dn.v8;
    gn ? cn = (un = gn.split("."))[0] + un[1] : fn && (!(un = fn.match(/Edge\/(\d+)/)) || un[1] >= 74) && (un = fn.match(/Chrome\/(\d+)/)) && (cn = un[1]); var mn = cn && +cn,
        vn = qe("species"),
        yn = function(e) { return mn >= 51 || !o((function() { var t = []; return (t.constructor = {})[vn] = function() { return { foo: 1 } }, 1 !== t[e](Boolean).foo })) },
        _n = Ve.map,
        Cn = yn("map"),
        In = We("map");
    Ae({ target: "Array", proto: !0, forced: !Cn || !In }, { map: function(e) { return _n(this, e, arguments.length > 1 ? arguments[1] : void 0) } }); var Mn = [].slice,
        Sn = {},
        Tn = function(e, t, n) { if (!(t in Sn)) { for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                Sn[t] = Function("C,a", "return new C(" + r.join(",") + ")") } return Sn[t](e, n) },
        En = Function.bind || function(e) { var t = be(this),
                n = Mn.call(arguments, 1),
                r = function() { var o = n.concat(Mn.call(arguments)); return this instanceof r ? Tn(t, o.length, o) : t.apply(e, o) }; return m(t.prototype) && (r.prototype = t.prototype), r };

    function Dn(e) { return (Dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

    function kn(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function wn(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

    function An(e, t, n) { return t && wn(e.prototype, t), n && wn(e, n), e }

    function bn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Rn(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }

    function On(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Rn(Object(n), !0).forEach((function(t) { bn(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

    function Ln(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pn(e, t) }

    function Nn(e) { return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

    function Pn(e, t) { return (Pn = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

    function Gn() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }

    function xn(e, t, n) { return (xn = Gn() ? Reflect.construct : function(e, t, n) { var r = [null];
            r.push.apply(r, t); var o = new(Function.bind.apply(e, r)); return n && Pn(o, n.prototype), o }).apply(null, arguments) }

    function Un(e) { var t = "function" == typeof Map ? new Map : void 0; return (Un = function(e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e; var n; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) { if (t.has(e)) return t.get(e);
                t.set(e, r) }

            function r() { return xn(e, arguments, Nn(this).constructor) } return r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Pn(r, e) })(e) }

    function qn(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

    function Fn(e, t) { return !t || "object" != typeof t && "function" != typeof t ? qn(e) : t }

    function jn(e) { return function() { var t, n = Nn(e); if (Gn()) { var r = Nn(this).constructor;
                t = Reflect.construct(n, arguments, r) } else t = n.apply(this, arguments); return Fn(this, t) } }

    function Bn(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return; var n = [],
                r = !0,
                o = !1,
                i = void 0; try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (u) { o = !0, i = u } finally { try { r || null == a.return || a.return() } finally { if (o) throw i } } return n }(e, t) || Vn(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function Hn(e) { return function(e) { if (Array.isArray(e)) return Kn(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || Vn(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function Vn(e, t) { if (e) { if ("string" == typeof e) return Kn(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kn(e, t) : void 0 } }

    function Kn(e, t) {
        (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r }

    function $n(e) { if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (e = Vn(e))) { var t = 0,
                    n = function() {}; return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var r, o, i = !0,
            s = !1; return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return i = e.done, e }, e: function(e) { s = !0, o = e }, f: function() { try { i || null == r.return || r.return() } finally { if (s) throw o } } } }
    Ae({ target: "Function", proto: !0 }, { bind: En }); var Yn = function() {
            function e() { kn(this, e), this.cache = [], this.options = null } return An(e, [{ key: "use", value: function(e) { if ("function" != typeof e) throw "middleware must be a function"; return this.cache.push(e), this } }, { key: "next", value: function(e) { if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this)) } }, { key: "run", value: function(e) { return this.middlewares = this.cache.map((function(e) { return e })), this.options = e, this.next() } }]), e }(),
        zn = qe("isConcatSpreadable"),
        Wn = mn >= 51 || !o((function() { var e = []; return e[zn] = !1, e.concat()[0] !== e })),
        Xn = yn("concat"),
        Jn = function(e) { if (!m(e)) return !1; var t = e[zn]; return void 0 !== t ? !!t : Le(e) };
    Ae({ target: "Array", proto: !0, forced: !Wn || !Xn }, { concat: function(e) { var t, n, r, o, i, s = Oe(this),
                a = je(s, 0),
                u = 0; for (t = -1, r = arguments.length; t < r; t++)
                if (i = -1 === t ? s : arguments[t], Jn(i)) { if (u + (o = ae(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded"); for (n = 0; n < o; n++, u++) n in i && it(a, u, i[n]) } else { if (u >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    it(a, u++, i) }
            return a.length = u, a } }); var Qn = w.f,
        Zn = Function.prototype,
        er = Zn.toString,
        tr = /^\s*function ([^ (]*)/;
    i && !("name" in Zn) && Qn(Zn, "name", { configurable: !0, get: function() { try { return er.call(this).match(tr)[1] } catch (gC) { return "" } } }); var nr = t((function(t, n) { var r, o, i, s, a, u, c, l, p, f, h, d, g, m, v, y, _, C;
        t.exports = (r = "function" == typeof Promise, o = "object" == typeof self ? self : e, i = "undefined" != typeof Symbol, s = "undefined" != typeof Map, a = "undefined" != typeof Set, u = "undefined" != typeof WeakMap, c = "undefined" != typeof WeakSet, l = "undefined" != typeof DataView, p = i && void 0 !== Symbol.iterator, f = i && void 0 !== Symbol.toStringTag, h = a && "function" == typeof Set.prototype.entries, d = s && "function" == typeof Map.prototype.entries, g = h && Object.getPrototypeOf((new Set).entries()), m = d && Object.getPrototypeOf((new Map).entries()), v = p && "function" == typeof Array.prototype[Symbol.iterator], y = v && Object.getPrototypeOf([][Symbol.iterator]()), _ = p && "function" == typeof String.prototype[Symbol.iterator], C = _ && Object.getPrototypeOf("" [Symbol.iterator]()), function(e) { var t = typeof e; if ("object" !== t) return t; if (null === e) return "null"; if (e === o) return "global"; if (Array.isArray(e) && (!1 === f || !(Symbol.toStringTag in e))) return "Array"; if ("object" == typeof window && null !== window) { if ("object" == typeof window.location && e === window.location) return "Location"; if ("object" == typeof window.document && e === window.document) return "Document"; if ("object" == typeof window.navigator) { if ("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes) return "MimeTypeArray"; if ("object" == typeof window.navigator.plugins && e === window.navigator.plugins) return "PluginArray" } if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement) { if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement"; if ("TD" === e.tagName) return "HTMLTableDataCellElement"; if ("TH" === e.tagName) return "HTMLTableHeaderCellElement" } } var n = f && e[Symbol.toStringTag]; if ("string" == typeof n) return n; var i = Object.getPrototypeOf(e); return i === RegExp.prototype ? "RegExp" : i === Date.prototype ? "Date" : r && i === Promise.prototype ? "Promise" : a && i === Set.prototype ? "Set" : s && i === Map.prototype ? "Map" : c && i === WeakSet.prototype ? "WeakSet" : u && i === WeakMap.prototype ? "WeakMap" : l && i === DataView.prototype ? "DataView" : s && i === m ? "Map Iterator" : a && i === g ? "Set Iterator" : v && i === y ? "Array Iterator" : _ && i === C ? "String Iterator" : null === i ? "Object" : Object.prototype.toString.call(e).slice(8, -1) }) }));
    Ae({ target: "Array", stat: !0 }, { isArray: Le }); var rr = qe("unscopables"),
        or = Array.prototype;
    null == or[rr] && w.f(or, rr, { configurable: !0, value: wt(null) }); var ir = function(e) { or[rr][e] = !0 },
        sr = Ve.find,
        ar = !0,
        ur = We("find"); "find" in [] && Array(1).find((function() { ar = !1 })), Ae({ target: "Array", proto: !0, forced: ar || !ur }, { find: function(e) { return sr(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), ir("find"); var cr = fe.includes,
        lr = We("indexOf", { ACCESSORS: !0, 1: 0 });
    Ae({ target: "Array", proto: !0, forced: !lr }, { includes: function(e) { return cr(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), ir("includes"); var pr = fe.indexOf,
        fr = [].indexOf,
        hr = !!fr && 1 / [1].indexOf(1, -0) < 0,
        dr = Ke("indexOf"),
        gr = We("indexOf", { ACCESSORS: !0, 1: 0 });
    Ae({ target: "Array", proto: !0, forced: hr || !dr || !gr }, { indexOf: function(e) { return hr ? fr.apply(this, arguments) || 0 : pr(this, e, arguments.length > 1 ? arguments[1] : void 0) } }); var mr = Q.set,
        vr = Q.getterFor("Array Iterator"),
        yr = Zt(Array, "Array", (function(e, t) { mr(this, { type: "Array Iterator", target: g(e), index: 0, kind: t }) }), (function() { var e = vr(this),
                t = e.target,
                n = e.kind,
                r = e.index++; return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 } }), "values");
    tt.Arguments = tt.Array, ir("keys"), ir("values"), ir("entries"); var _r = [].join,
        Cr = h != Object,
        Ir = Ke("join", ",");
    Ae({ target: "Array", proto: !0, forced: Cr || !Ir }, { join: function(e) { return _r.call(g(this), void 0 === e ? "," : e) } }); var Mr = yn("slice"),
        Sr = We("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        Tr = qe("species"),
        Er = [].slice,
        Dr = Math.max;
    Ae({ target: "Array", proto: !0, forced: !Mr || !Sr }, { slice: function(e, t) { var n, r, o, i = g(this),
                s = ae(i.length),
                a = le(e, s),
                u = le(void 0 === t ? s : t, s); if (Le(i) && ("function" != typeof(n = i.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[Tr]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Er.call(i, a, u); for (r = new(void 0 === n ? Array : n)(Dr(u - a, 0)), o = 0; a < u; a++, o++) a in i && it(r, o, i[a]); return r.length = o, r } }), Ae({ target: "Date", stat: !0 }, { now: function() { return (new Date).getTime() } }); var kr = "".repeat || function(e) { var t = String(d(this)),
                n = "",
                r = ie(e); if (r < 0 || Infinity == r) throw RangeError("Wrong number of repetitions"); for (; r > 0;
                (r >>>= 1) && (t += t)) 1 & r && (n += t); return n },
        wr = Math.ceil,
        Ar = function(e) { return function(t, n, r) { var o, i, s = String(d(t)),
                    a = s.length,
                    u = void 0 === r ? " " : String(r),
                    c = ae(n); return c <= a || "" == u ? s : (o = c - a, (i = kr.call(u, wr(o / u.length))).length > o && (i = i.slice(0, o)), e ? s + i : i + s) } },
        br = { start: Ar(!1), end: Ar(!0) }.start,
        Rr = Math.abs,
        Or = Date.prototype,
        Lr = Or.getTime,
        Nr = Or.toISOString,
        Pr = o((function() { return "0385-07-25T07:06:39.999Z" != Nr.call(new Date(-50000000000001)) })) || !o((function() { Nr.call(new Date(NaN)) })) ? function() { if (!isFinite(Lr.call(this))) throw RangeError("Invalid time value"); var e = this.getUTCFullYear(),
                t = this.getUTCMilliseconds(),
                n = e < 0 ? "-" : e > 9999 ? "+" : ""; return n + br(Rr(e), n ? 6 : 4, 0) + "-" + br(this.getUTCMonth() + 1, 2, 0) + "-" + br(this.getUTCDate(), 2, 0) + "T" + br(this.getUTCHours(), 2, 0) + ":" + br(this.getUTCMinutes(), 2, 0) + ":" + br(this.getUTCSeconds(), 2, 0) + "." + br(t, 3, 0) + "Z" } : Nr;
    Ae({ target: "Date", proto: !0, forced: Date.prototype.toISOString !== Pr }, { toISOString: Pr }); var Gr = Date.prototype,
        xr = Gr.toString,
        Ur = Gr.getTime;
    new Date(NaN) + "" != "Invalid Date" && Z(Gr, "toString", (function() { var e = Ur.call(this); return e == e ? xr.call(this) : "Invalid Date" })); var qr = function(e, t, n) { var r, o; return zt && "function" == typeof(r = t.constructor) && r !== n && m(o = r.prototype) && o !== n.prototype && zt(e, o), e },
        Fr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        jr = "[" + Fr + "]",
        Br = RegExp("^" + jr + jr + "*"),
        Hr = RegExp(jr + jr + "*$"),
        Vr = function(e) { return function(t) { var n = String(d(t)); return 1 & e && (n = n.replace(Br, "")), 2 & e && (n = n.replace(Hr, "")), n } },
        Kr = { start: Vr(1), end: Vr(2), trim: Vr(3) },
        $r = ve.f,
        Yr = E.f,
        zr = w.f,
        Wr = Kr.trim,
        Xr = r.Number,
        Jr = Xr.prototype,
        Qr = "Number" == p(wt(Jr)),
        Zr = function(e) { var t, n, r, o, i, s, a, u, c = v(e, !1); if ("string" == typeof c && c.length > 2)
                if (43 === (t = (c = Wr(c)).charCodeAt(0)) || 45 === t) { if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN } else if (48 === t) { switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, o = 49; break;
                    case 79:
                    case 111:
                        r = 8, o = 55; break;
                    default:
                        return +c } for (s = (i = c.slice(2)).length, a = 0; a < s; a++)
                    if ((u = i.charCodeAt(a)) < 48 || u > o) return NaN;
                return parseInt(i, r) } return +c }; if (ke("Number", !Xr(" 0o1") || !Xr("0b1") || Xr("+0x1"))) { for (var eo, to = function(e) { var t = arguments.length < 1 ? 0 : e,
                    n = this; return n instanceof to && (Qr ? o((function() { Jr.valueOf.call(n) })) : "Number" != p(n)) ? qr(new Xr(Zr(t)), n, to) : Zr(t) }, no = i ? $r(Xr) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), ro = 0; no.length > ro; ro++) _(Xr, eo = no[ro]) && !_(to, eo) && zr(to, eo, Yr(Xr, eo));
        to.prototype = Jr, Jr.constructor = to, Z(r, "Number", to) } var oo = ve.f,
        io = {}.toString,
        so = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        ao = { f: function(e) { return so && "[object Window]" == io.call(e) ? function(e) { try { return oo(e) } catch (gC) { return so.slice() } }(e) : oo(g(e)) } },
        uo = ao.f,
        co = o((function() { return !Object.getOwnPropertyNames(1) }));
    Ae({ target: "Object", stat: !0, forced: co }, { getOwnPropertyNames: uo }); var lo = o((function() { Ut(1) }));
    Ae({ target: "Object", stat: !0, forced: lo, sham: !Pt }, { getPrototypeOf: function(e) { return Ut(Oe(e)) } }); var po = at ? {}.toString : function() { return "[object " + lt(this) + "]" };
    at || Z(Object.prototype, "toString", po, { unsafe: !0 }); var fo = Kr.trim,
        ho = r.parseInt,
        go = /^[+-]?0[Xx]/,
        mo = 8 !== ho(Fr + "08") || 22 !== ho(Fr + "0x16") ? function(e, t) { var n = fo(String(e)); return ho(n, t >>> 0 || (go.test(n) ? 16 : 10)) } : ho;
    Ae({ global: !0, forced: parseInt != mo }, { parseInt: mo }); var vo, yo, _o, Co = r.Promise,
        Io = function(e, t, n) { for (var r in t) Z(e, r, t[r], n); return e },
        Mo = qe("species"),
        So = function(e) { var t = ne(e),
                n = w.f;
            i && t && !t[Mo] && n(t, Mo, { configurable: !0, get: function() { return this } }) },
        To = function(e, t, n) { if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return e },
        Eo = t((function(e) { var t = function(e, t) { this.stopped = e, this.result = t };
            (e.exports = function(e, n, r, o, i) { var s, a, u, c, l, p, f, h = Re(n, r, o ? 2 : 1); if (i) s = e;
                else { if ("function" != typeof(a = ft(e))) throw TypeError("Target is not iterable"); if (ot(a)) { for (u = 0, c = ae(e.length); c > u; u++)
                            if ((l = o ? h(D(f = e[u])[0], f[1]) : h(e[u])) && l instanceof t) return l;
                        return new t(!1) }
                    s = a.call(e) } for (p = s.next; !(f = p.call(s)).done;)
                    if ("object" == typeof(l = et(s, h, f.value, o)) && l && l instanceof t) return l;
                return new t(!1) }).stop = function(e) { return new t(!0, e) } })),
        Do = qe("species"),
        ko = function(e, t) { var n, r = D(e).constructor; return void 0 === r || null == (n = D(r)[Do]) ? t : be(n) },
        wo = /(iphone|ipod|ipad).*applewebkit/i.test(fn),
        Ao = r.location,
        bo = r.setImmediate,
        Ro = r.clearImmediate,
        Oo = r.process,
        Lo = r.MessageChannel,
        No = r.Dispatch,
        Po = 0,
        Go = {},
        xo = function(e) { if (Go.hasOwnProperty(e)) { var t = Go[e];
                delete Go[e], t() } },
        Uo = function(e) { return function() { xo(e) } },
        qo = function(e) { xo(e.data) },
        Fo = function(e) { r.postMessage(e + "", Ao.protocol + "//" + Ao.host) };
    bo && Ro || (bo = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return Go[++Po] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t) }, vo(Po), Po }, Ro = function(e) { delete Go[e] }, "process" == p(Oo) ? vo = function(e) { Oo.nextTick(Uo(e)) } : No && No.now ? vo = function(e) { No.now(Uo(e)) } : Lo && !wo ? (_o = (yo = new Lo).port2, yo.port1.onmessage = qo, vo = Re(_o.postMessage, _o, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || o(Fo) ? vo = "onreadystatechange" in M("script") ? function(e) { St.appendChild(M("script")).onreadystatechange = function() { St.removeChild(this), xo(e) } } : function(e) { setTimeout(Uo(e), 0) } : (vo = Fo, r.addEventListener("message", qo, !1))); var jo, Bo, Ho, Vo, Ko, $o, Yo, zo, Wo = { set: bo, clear: Ro },
        Xo = E.f,
        Jo = Wo.set,
        Qo = r.MutationObserver || r.WebKitMutationObserver,
        Zo = r.process,
        ei = r.Promise,
        ti = "process" == p(Zo),
        ni = Xo(r, "queueMicrotask"),
        ri = ni && ni.value;
    ri || (jo = function() { var e, t; for (ti && (e = Zo.domain) && e.exit(); Bo;) { t = Bo.fn, Bo = Bo.next; try { t() } catch (gC) { throw Bo ? Vo() : Ho = void 0, gC } }
        Ho = void 0, e && e.enter() }, ti ? Vo = function() { Zo.nextTick(jo) } : Qo && !wo ? (Ko = !0, $o = document.createTextNode(""), new Qo(jo).observe($o, { characterData: !0 }), Vo = function() { $o.data = Ko = !Ko }) : ei && ei.resolve ? (Yo = ei.resolve(void 0), zo = Yo.then, Vo = function() { zo.call(Yo, jo) }) : Vo = function() { Jo.call(r, jo) }); var oi, ii, si, ai, ui = ri || function(e) { var t = { fn: e, next: void 0 };
            Ho && (Ho.next = t), Bo || (Bo = t, Vo()), Ho = t },
        ci = function(e) { var t, n;
            this.promise = new e((function(e, r) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r })), this.resolve = be(t), this.reject = be(n) },
        li = { f: function(e) { return new ci(e) } },
        pi = function(e, t) { if (D(e), m(t) && t.constructor === e) return t; var n = li.f(e); return (0, n.resolve)(t), n.promise },
        fi = function(e) { try { return { error: !1, value: e() } } catch (gC) { return { error: !0, value: gC } } },
        hi = Wo.set,
        di = qe("species"),
        gi = "Promise",
        mi = Q.get,
        vi = Q.set,
        yi = Q.getterFor(gi),
        _i = Co,
        Ci = r.TypeError,
        Ii = r.document,
        Mi = r.process,
        Si = ne("fetch"),
        Ti = li.f,
        Ei = Ti,
        Di = "process" == p(Mi),
        ki = !!(Ii && Ii.createEvent && r.dispatchEvent),
        wi = ke(gi, (function() { if (!(G(_i) !== String(_i))) { if (66 === mn) return !0; if (!Di && "function" != typeof PromiseRejectionEvent) return !0 } if (mn >= 51 && /native code/.test(_i)) return !1; var e = _i.resolve(1),
                t = function(e) { e((function() {}), (function() {})) }; return (e.constructor = {})[di] = t, !(e.then((function() {})) instanceof t) })),
        Ai = wi || !yt((function(e) { _i.all(e).catch((function() {})) })),
        bi = function(e) { var t; return !(!m(e) || "function" != typeof(t = e.then)) && t },
        Ri = function(e, t, n) { if (!t.notified) { t.notified = !0; var r = t.reactions;
                ui((function() { for (var o = t.value, i = 1 == t.state, s = 0; r.length > s;) { var a, u, c, l = r[s++],
                            p = i ? l.ok : l.fail,
                            f = l.resolve,
                            h = l.reject,
                            d = l.domain; try { p ? (i || (2 === t.rejection && Pi(e, t), t.rejection = 1), !0 === p ? a = o : (d && d.enter(), a = p(o), d && (d.exit(), c = !0)), a === l.promise ? h(Ci("Promise-chain cycle")) : (u = bi(a)) ? u.call(a, f, h) : f(a)) : h(o) } catch (gC) { d && !c && d.exit(), h(gC) } }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Li(e, t) })) } },
        Oi = function(e, t, n) { var o, i;
            ki ? ((o = Ii.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), r.dispatchEvent(o)) : o = { promise: t, reason: n }, (i = r["on" + e]) ? i(o) : "unhandledrejection" === e && function(e, t) { var n = r.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t)) }("Unhandled promise rejection", n) },
        Li = function(e, t) { hi.call(r, (function() { var n, r = t.value; if (Ni(t) && (n = fi((function() { Di ? Mi.emit("unhandledRejection", r, e) : Oi("unhandledrejection", e, r) })), t.rejection = Di || Ni(t) ? 2 : 1, n.error)) throw n.value })) },
        Ni = function(e) { return 1 !== e.rejection && !e.parent },
        Pi = function(e, t) { hi.call(r, (function() { Di ? Mi.emit("rejectionHandled", e) : Oi("rejectionhandled", e, t.value) })) },
        Gi = function(e, t, n, r) { return function(o) { e(t, n, o, r) } },
        xi = function(e, t, n, r) { t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, Ri(e, t, !0)) },
        Ui = function(e, t, n, r) { if (!t.done) { t.done = !0, r && (t = r); try { if (e === n) throw Ci("Promise can't be resolved itself"); var o = bi(n);
                    o ? ui((function() { var r = { done: !1 }; try { o.call(n, Gi(Ui, e, r, t), Gi(xi, e, r, t)) } catch (gC) { xi(e, r, gC, t) } })) : (t.value = n, t.state = 1, Ri(e, t, !1)) } catch (gC) { xi(e, { done: !1 }, gC, t) } } };
    wi && (_i = function(e) { To(this, _i, gi), be(e), oi.call(this); var t = mi(this); try { e(Gi(Ui, this, t), Gi(xi, this, t)) } catch (gC) { xi(this, t, gC) } }, (oi = function(e) { vi(this, { type: gi, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = Io(_i.prototype, { then: function(e, t) { var n = yi(this),
                r = Ti(ko(this, _i)); return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Di ? Mi.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Ri(this, n, !1), r.promise }, catch: function(e) { return this.then(void 0, e) } }), ii = function() { var e = new oi,
            t = mi(e);
        this.promise = e, this.resolve = Gi(Ui, e, t), this.reject = Gi(xi, e, t) }, li.f = Ti = function(e) { return e === _i || e === si ? new ii(e) : Ei(e) }, "function" == typeof Co && (ai = Co.prototype.then, Z(Co.prototype, "then", (function(e, t) { var n = this; return new _i((function(e, t) { ai.call(n, e, t) })).then(e, t) }), { unsafe: !0 }), "function" == typeof Si && Ae({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(e) { return pi(_i, Si.apply(r, arguments)) } }))), Ae({ global: !0, wrap: !0, forced: wi }, { Promise: _i }), Vt(_i, gi, !1), So(gi), si = ne(gi), Ae({ target: gi, stat: !0, forced: wi }, { reject: function(e) { var t = Ti(this); return t.reject.call(void 0, e), t.promise } }), Ae({ target: gi, stat: !0, forced: wi }, { resolve: function(e) { return pi(this, e) } }), Ae({ target: gi, stat: !0, forced: Ai }, { all: function(e) { var t = this,
                n = Ti(t),
                r = n.resolve,
                o = n.reject,
                i = fi((function() { var n = be(t.resolve),
                        i = [],
                        s = 0,
                        a = 1;
                    Eo(e, (function(e) { var u = s++,
                            c = !1;
                        i.push(void 0), a++, n.call(t, e).then((function(e) { c || (c = !0, i[u] = e, --a || r(i)) }), o) })), --a || r(i) })); return i.error && o(i.value), n.promise }, race: function(e) { var t = this,
                n = Ti(t),
                r = n.reject,
                o = fi((function() { var o = be(t.resolve);
                    Eo(e, (function(e) { o.call(t, e).then(n.resolve, r) })) })); return o.error && r(o.value), n.promise } }); var qi = function() { var e = D(this),
            t = ""; return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t };

    function Fi(e, t) { return RegExp(e, t) } var ji, Bi, Hi = { UNSUPPORTED_Y: o((function() { var e = Fi("a", "y"); return e.lastIndex = 2, null != e.exec("abcd") })), BROKEN_CARET: o((function() { var e = Fi("^r", "gy"); return e.lastIndex = 2, null != e.exec("str") })) },
        Vi = RegExp.prototype.exec,
        Ki = String.prototype.replace,
        $i = Vi,
        Yi = (ji = /a/, Bi = /b*/g, Vi.call(ji, "a"), Vi.call(Bi, "a"), 0 !== ji.lastIndex || 0 !== Bi.lastIndex),
        zi = Hi.UNSUPPORTED_Y || Hi.BROKEN_CARET,
        Wi = void 0 !== /()??/.exec("")[1];
    (Yi || Wi || zi) && ($i = function(e) { var t, n, r, o, i = this,
            s = zi && i.sticky,
            a = qi.call(i),
            u = i.source,
            c = 0,
            l = e; return s && (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"), l = String(e).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (u = "(?: " + u + ")", l = " " + l, c++), n = new RegExp("^(?:" + u + ")", a)), Wi && (n = new RegExp("^" + u + "$(?!\\s)", a)), Yi && (t = i.lastIndex), r = Vi.call(s ? n : i, l), s ? r ? (r.input = r.input.slice(c), r[0] = r[0].slice(c), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : Yi && r && (i.lastIndex = i.global ? r.index + r[0].length : t), Wi && r && r.length > 1 && Ki.call(r[0], n, (function() { for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0) })), r }); var Xi = $i;
    Ae({ target: "RegExp", proto: !0, forced: /./.exec !== Xi }, { exec: Xi }); var Ji = RegExp.prototype,
        Qi = Ji.toString,
        Zi = o((function() { return "/a/b" != Qi.call({ source: "a", flags: "b" }) })),
        es = "toString" != Qi.name;
    (Zi || es) && Z(RegExp.prototype, "toString", (function() { var e = D(this),
            t = String(e.source),
            n = e.flags; return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in Ji) ? qi.call(e) : n) }), { unsafe: !0 }); var ts = qe("match"),
        ns = function(e) { var t; return m(e) && (void 0 !== (t = e[ts]) ? !!t : "RegExp" == p(e)) },
        rs = function(e) { if (ns(e)) throw TypeError("The method doesn't accept regular expressions"); return e },
        os = qe("match");
    Ae({ target: "String", proto: !0, forced: ! function(e) { var t = /./; try { "/./" [e](t) } catch (n) { try { return t[os] = !1, "/./" [e](t) } catch (r) {} } return !1 }("includes") }, { includes: function(e) { return !!~String(d(this)).indexOf(rs(e), arguments.length > 1 ? arguments[1] : void 0) } }); var is = qe("species"),
        ss = !o((function() { var e = /./; return e.exec = function() { var e = []; return e.groups = { a: "7" }, e }, "7" !== "".replace(e, "$<a>") })),
        as = "$0" === "a".replace(/./, "$0"),
        us = qe("replace"),
        cs = !!/./ [us] && "" === /./ [us]("a", "$0"),
        ls = !o((function() { var e = /(?:)/,
                t = e.exec;
            e.exec = function() { return t.apply(this, arguments) }; var n = "ab".split(e); return 2 !== n.length || "a" !== n[0] || "b" !== n[1] })),
        ps = function(e, t, n, r) { var i = qe(e),
                s = !o((function() { var t = {}; return t[i] = function() { return 7 }, 7 != "" [e](t) })),
                a = s && !o((function() { var t = !1,
                        n = /a/; return "split" === e && ((n = {}).constructor = {}, n.constructor[is] = function() { return n }, n.flags = "", n[i] = /./ [i]), n.exec = function() { return t = !0, null }, n[i](""), !t })); if (!s || !a || "replace" === e && (!ss || !as || cs) || "split" === e && !ls) { var u = /./ [i],
                    c = n(i, "" [e], (function(e, t, n, r, o) { return t.exec === Xi ? s && !o ? { done: !0, value: u.call(t, n, r) } : { done: !0, value: e.call(n, t, r) } : { done: !1 } }), { REPLACE_KEEPS_$0: as, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: cs }),
                    l = c[0],
                    p = c[1];
                Z(String.prototype, e, l), Z(RegExp.prototype, i, 2 == t ? function(e, t) { return p.call(e, this, t) } : function(e) { return p.call(e, this) }) }
            r && A(RegExp.prototype[i], "sham", !0) },
        fs = Nt.charAt,
        hs = function(e, t, n) { return t + (n ? fs(e, t).length : 1) },
        ds = function(e, t) { var n = e.exec; if ("function" == typeof n) { var r = n.call(e, t); if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null"); return r } if ("RegExp" !== p(e)) throw TypeError("RegExp#exec called on incompatible receiver"); return Xi.call(e, t) };
    ps("match", 1, (function(e, t, n) { return [function(t) { var n = d(this),
                r = null == t ? void 0 : t[e]; return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n)) }, function(e) { var r = n(t, e, this); if (r.done) return r.value; var o = D(e),
                i = String(this); if (!o.global) return ds(o, i); var s = o.unicode;
            o.lastIndex = 0; for (var a, u = [], c = 0; null !== (a = ds(o, i));) { var l = String(a[0]);
                u[c] = l, "" === l && (o.lastIndex = hs(i, ae(o.lastIndex), s)), c++ } return 0 === c ? null : u }] })); var gs = Math.max,
        ms = Math.min,
        vs = Math.floor,
        ys = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        _s = /\$([$&'`]|\d\d?)/g;
    ps("replace", 2, (function(e, t, n, r) { var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            i = r.REPLACE_KEEPS_$0,
            s = o ? "$" : "$0"; return [function(n, r) { var o = d(this),
                i = null == n ? void 0 : n[e]; return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r) }, function(e, r) { if (!o && i || "string" == typeof r && -1 === r.indexOf(s)) { var u = n(t, e, this, r); if (u.done) return u.value } var c = D(e),
                l = String(this),
                p = "function" == typeof r;
            p || (r = String(r)); var f = c.global; if (f) { var h = c.unicode;
                c.lastIndex = 0 } for (var d = [];;) { var g = ds(c, l); if (null === g) break; if (d.push(g), !f) break; "" === String(g[0]) && (c.lastIndex = hs(l, ae(c.lastIndex), h)) } for (var m, v = "", y = 0, _ = 0; _ < d.length; _++) { g = d[_]; for (var C = String(g[0]), I = gs(ms(ie(g.index), l.length), 0), M = [], S = 1; S < g.length; S++) M.push(void 0 === (m = g[S]) ? m : String(m)); var T = g.groups; if (p) { var E = [C].concat(M, I, l);
                    void 0 !== T && E.push(T); var k = String(r.apply(void 0, E)) } else k = a(C, l, I, M, T, r);
                I >= y && (v += l.slice(y, I) + k, y = I + C.length) } return v + l.slice(y) }];

        function a(e, n, r, o, i, s) { var a = r + e.length,
                u = o.length,
                c = _s; return void 0 !== i && (i = Oe(i), c = ys), t.call(s, c, (function(t, s) { var c; switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(a);
                    case "<":
                        c = i[s.slice(1, -1)]; break;
                    default:
                        var l = +s; if (0 === l) return t; if (l > u) { var p = vs(l / 10); return 0 === p ? t : p <= u ? void 0 === o[p - 1] ? s.charAt(1) : o[p - 1] + s.charAt(1) : t }
                        c = o[l - 1] } return void 0 === c ? "" : c })) } })); var Cs = qe("iterator"),
        Is = qe("toStringTag"),
        Ms = yr.values; for (var Ss in rn) { var Ts = r[Ss],
            Es = Ts && Ts.prototype; if (Es) { if (Es[Cs] !== Ms) try { A(Es, Cs, Ms) } catch (gC) { Es[Cs] = Ms }
            if (Es[Is] || A(Es, Is, Ss), rn[Ss])
                for (var Ds in yr)
                    if (Es[Ds] !== yr[Ds]) try { A(Es, Ds, yr[Ds]) } catch (gC) { Es[Ds] = yr[Ds] } } } var ks = Kr.trim,
        ws = r.parseFloat,
        As = 1 / ws(Fr + "-0") != -Infinity ? function(e) { var t = ks(String(e)),
                n = ws(t); return 0 === n && "-" == t.charAt(0) ? -0 : n } : ws;
    Ae({ global: !0, forced: parseFloat != As }, { parseFloat: As }); var bs = "undefined" != typeof window,
        Rs = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync,
        Os = bs && window.navigator && window.navigator.userAgent || "",
        Ls = /AppleWebKit\/([\d.]+)/i.exec(Os),
        Ns = (Ls && parseFloat(Ls.pop()), /iPad/i.test(Os)),
        Ps = (/iPhone/i.test(Os), /iPod/i.test(Os), function() { var e = Os.match(/OS (\d+)_/i);
            e && e[1] && e[1] }(), /Android/i.test(Os)),
        Gs = function() { var e = Os.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if (!e) return null; var t = e[1] && parseFloat(e[1]),
                n = e[2] && parseFloat(e[2]); return t && n ? parseFloat(e[1] + "." + e[2]) : t || null }(),
        xs = (Ps && /webkit/i.test(Os), /Firefox/i.test(Os), /Edge/i.test(Os)),
        Us = !xs && /Chrome/i.test(Os),
        qs = (function() { var e = Os.match(/Chrome\/(\d+)/);
            e && e[1] && parseFloat(e[1]) }(), /MSIE/.test(Os)),
        Fs = (/MSIE\s8\.0/.test(Os), function() { var e = /MSIE\s(\d+)\.\d/.exec(Os),
                t = e && parseFloat(e[1]); return !t && /Trident\/7.0/i.test(Os) && /rv:11.0/.test(Os) && (t = 11), t }()),
        js = (/Safari/i.test(Os), /TBS\/\d+/i.test(Os)),
        Bs = (function() { var e = Os.match(/TBS\/(\d+)/i); if (e && e[1]) e[1] }(), !js && /MQQBrowser\/\d+/i.test(Os), !js && / QQBrowser\/\d+/i.test(Os), /(micromessenger|webbrowser)/i.test(Os)),
        Hs = (/Windows/i.test(Os), /MAC OS X/i.test(Os), /MicroMessenger/i.test(Os), yn("splice")),
        Vs = We("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        Ks = Math.max,
        $s = Math.min;
    Ae({ target: "Array", proto: !0, forced: !Hs || !Vs }, { splice: function(e, t) { var n, r, o, i, s, a, u = Oe(this),
                c = ae(u.length),
                l = le(e, c),
                p = arguments.length; if (0 === p ? n = r = 0 : 1 === p ? (n = 0, r = c - l) : (n = p - 2, r = $s(Ks(ie(t), 0), c - l)), c + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded"); for (o = je(u, r), i = 0; i < r; i++)(s = l + i) in u && it(o, i, u[s]); if (o.length = r, n < r) { for (i = l; i < c - r; i++) a = i + n, (s = i + r) in u ? u[a] = u[s] : delete u[a]; for (i = c; i > c - r + n; i--) delete u[i - 1] } else if (n > r)
                for (i = c - r; i > l; i--) a = i + n - 1, (s = i + r - 1) in u ? u[a] = u[s] : delete u[a]; for (i = 0; i < n; i++) u[i + l] = arguments[i + 2]; return u.length = c - r + n, o } }); var Ys, zs, Ws = !o((function() { return Object.isExtensible(Object.preventExtensions({})) })),
        Xs = t((function(e) { var t = w.f,
                n = B("meta"),
                r = 0,
                o = Object.isExtensible || function() { return !0 },
                i = function(e) { t(e, n, { value: { objectID: "O" + ++r, weakData: {} } }) },
                s = e.exports = { REQUIRED: !1, fastKey: function(e, t) { if (!m(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!_(e, n)) { if (!o(e)) return "F"; if (!t) return "E";
                            i(e) } return e[n].objectID }, getWeakData: function(e, t) { if (!_(e, n)) { if (!o(e)) return !0; if (!t) return !1;
                            i(e) } return e[n].weakData }, onFreeze: function(e) { return Ws && s.REQUIRED && o(e) && !_(e, n) && i(e), e } };
            K[n] = !0 })),
        Js = (Xs.REQUIRED, Xs.fastKey, Xs.getWeakData, Xs.onFreeze, w.f),
        Qs = Xs.fastKey,
        Zs = Q.set,
        ea = Q.getterFor,
        ta = (function(e, t, n) { var i = -1 !== e.indexOf("Map"),
                s = -1 !== e.indexOf("Weak"),
                a = i ? "set" : "add",
                u = r[e],
                c = u && u.prototype,
                l = u,
                p = {},
                f = function(e) { var t = c[e];
                    Z(c, e, "add" == e ? function(e) { return t.call(this, 0 === e ? 0 : e), this } : "delete" == e ? function(e) { return !(s && !m(e)) && t.call(this, 0 === e ? 0 : e) } : "get" == e ? function(e) { return s && !m(e) ? void 0 : t.call(this, 0 === e ? 0 : e) } : "has" == e ? function(e) { return !(s && !m(e)) && t.call(this, 0 === e ? 0 : e) } : function(e, n) { return t.call(this, 0 === e ? 0 : e, n), this }) }; if (ke(e, "function" != typeof u || !(s || c.forEach && !o((function() {
                    (new u).entries().next() }))))) l = n.getConstructor(t, e, i, a), Xs.REQUIRED = !0;
            else if (ke(e, !0)) { var h = new l,
                    d = h[a](s ? {} : -0, 1) != h,
                    g = o((function() { h.has(1) })),
                    v = yt((function(e) { new u(e) })),
                    y = !s && o((function() { for (var e = new u, t = 5; t--;) e[a](t, t); return !e.has(-0) }));
                v || ((l = t((function(t, n) { To(t, l, e); var r = qr(new u, t, l); return null != n && Eo(n, r[a], r, i), r }))).prototype = c, c.constructor = l), (g || y) && (f("delete"), f("has"), i && f("get")), (y || d) && f(a), s && c.clear && delete c.clear }
            p[e] = l, Ae({ global: !0, forced: l != u }, p), Vt(l, e), s || n.setStrong(l, e, i) }("Map", (function(e) { return function() { return e(this, arguments.length ? arguments[0] : void 0) } }), { getConstructor: function(e, t, n, r) { var o = e((function(e, s) { To(e, o, t), Zs(e, { type: t, index: wt(null), first: void 0, last: void 0, size: 0 }), i || (e.size = 0), null != s && Eo(s, e[r], e, n) })),
                    s = ea(t),
                    a = function(e, t, n) { var r, o, a = s(e),
                            c = u(e, t); return c ? c.value = n : (a.last = c = { index: o = Qs(t, !0), key: t, value: n, previous: r = a.last, next: void 0, removed: !1 }, a.first || (a.first = c), r && (r.next = c), i ? a.size++ : e.size++, "F" !== o && (a.index[o] = c)), e },
                    u = function(e, t) { var n, r = s(e),
                            o = Qs(t); if ("F" !== o) return r.index[o]; for (n = r.first; n; n = n.next)
                            if (n.key == t) return n }; return Io(o.prototype, { clear: function() { for (var e = s(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, i ? e.size = 0 : this.size = 0 }, delete: function(e) { var t = s(this),
                            n = u(this, e); if (n) { var r = n.next,
                                o = n.previous;
                            delete t.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), t.first == n && (t.first = r), t.last == n && (t.last = o), i ? t.size-- : this.size-- } return !!n }, forEach: function(e) { for (var t, n = s(this), r = Re(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (r(t.value, t.key, this); t && t.removed;) t = t.previous }, has: function(e) { return !!u(this, e) } }), Io(o.prototype, n ? { get: function(e) { var t = u(this, e); return t && t.value }, set: function(e, t) { return a(this, 0 === e ? 0 : e, t) } } : { add: function(e) { return a(this, e = 0 === e ? 0 : e, e) } }), i && Js(o.prototype, "size", { get: function() { return s(this).size } }), o }, setStrong: function(e, t, n) { var r = t + " Iterator",
                    o = ea(t),
                    i = ea(r);
                Zt(e, t, (function(e, t) { Zs(this, { type: r, target: e, state: o(e), kind: t, last: void 0 }) }), (function() { for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous; return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? { value: n.key, done: !1 } : "values" == t ? { value: n.value, done: !1 } : { value: [n.key, n.value], done: !1 } : (e.target = void 0, { value: void 0, done: !0 }) }), n ? "entries" : "values", !n, !0), So(t) } }), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    Ys = "undefined" != typeof console ? console : void 0 !== ta && ta.console ? ta.console : "undefined" != typeof window && window.console ? window.console : {}; for (var na = function() {}, ra = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], oa = ra.length; oa--;) zs = ra[oa], console[zs] || (Ys[zs] = na);
    Ys.methods = ra; var ia = Ys,
        sa = 0,
        aa = new Map;

    function ua() { var e = new Date; return "TIM " + e.toLocaleTimeString("en-US", { hour12: !1 }) + "." + function(e) { var t; switch (e.toString().length) {
                case 1:
                    t = "00" + e; break;
                case 2:
                    t = "0" + e; break;
                default:
                    t = e } return t }(e.getMilliseconds()) + ":" } var ca = { _data: [], _length: 0, _visible: !1, arguments2String: function(e) { var t; if (1 === e.length) t = ua() + e[0];
                else { t = ua(); for (var n = 0, r = e.length; n < r; n++) va(e[n]) ? _a(e[n]) ? t += Ea(e[n]) : t += JSON.stringify(e[n]) : t += e[n], t += " " } return t }, debug: function() { if (sa <= -1) { var e = this.arguments2String(arguments);
                    ca.record(e, "debug"), ia.debug(e) } }, log: function() { if (sa <= 0) { var e = this.arguments2String(arguments);
                    ca.record(e, "log"), ia.log(e) } }, info: function() { if (sa <= 1) { var e = this.arguments2String(arguments);
                    ca.record(e, "info"), ia.info(e) } }, warn: function() { if (sa <= 2) { var e = this.arguments2String(arguments);
                    ca.record(e, "warn"), ia.warn(e) } }, error: function() { if (sa <= 3) { var e = this.arguments2String(arguments);
                    ca.record(e, "error"), ia.error(e) } }, time: function(e) { aa.set(e, Sa.now()) }, timeEnd: function(e) { if (aa.has(e)) { var t = Sa.now() - aa.get(e); return aa.delete(e), t } return ia.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0 }, setLevel: function(e) { e < 4 && ia.log(ua() + "set level from " + sa + " to " + e), sa = e }, record: function(e, t) { 1100 === ca._length && (ca._data.splice(0, 100), ca._length = 1e3), ca._length++, ca._data.push("".concat(e, " [").concat(t, "] \n")) }, getLog: function() { return ca._data } },
        la = function(e) { return "file" === Ca(e) },
        pa = function(e) { return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === Dn(e) && e.constructor === Number) },
        fa = function(e) { return "string" == typeof e },
        ha = function(e) { return null !== e && "object" === Dn(e) },
        da = function(e) { if ("object" !== Dn(e) || null === e) return !1; var t = Object.getPrototypeOf(e); if (null === t) return !0; for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n); return t === n },
        ga = function(e) { return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === Ca(e) },
        ma = function(e) { return void 0 === e },
        va = function(e) { return ga(e) || ha(e) },
        ya = function(e) { return "function" == typeof e },
        _a = function(e) { return e instanceof Error },
        Ca = function(e) { return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase() },
        Ia = function(e) { if ("string" != typeof e) return !1; var t = e[0]; return !/[^a-zA-Z0-9]/.test(t) },
        Ma = 0;
    Date.now || (Date.now = function() { return (new Date).getTime() }); var Sa = { now: function() { 0 === Ma && (Ma = Date.now() - 1); var e = Date.now() - Ma; return e > 4294967295 ? (Ma += 4294967295, Date.now() - Ma) : e }, utc: function() { return Math.round(Date.now() / 1e3) } },
        Ta = function e(t, n, r, o) { if (!va(t) || !va(n)) return 0; for (var i, s = 0, a = Object.keys(n), u = 0, c = a.length; u < c; u++)
                if (i = a[u], !(ma(n[i]) || r && r.includes(i)))
                    if (va(t[i]) && va(n[i])) s += e(t[i], n[i], r, o);
                    else { if (o && o.includes(n[i])) continue;
                        t[i] !== n[i] && (t[i] = n[i], s += 1) }
            return s },
        Ea = function(e) { return JSON.stringify(e, ["message", "code"]) },
        Da = function() { var e = new Date,
                t = e.toISOString(),
                n = e.getTimezoneOffset() / 60,
                r = ""; return r = n < 0 ? n > -10 ? "+0" + Math.abs(100 * n) : "+" + Math.abs(100 * n) : n >= 10 ? "-" + 100 * n : "-0" + 100 * n, t.replace("Z", r) },
        ka = function(e) { if (0 === e.length) return 0; for (var t = 0, n = 0, r = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t];) n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === r ? 3 : 2; return n },
        wa = function(e) { var t = e || 99999999; return Math.round(Math.random() * t) },
        Aa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ba = Aa.length,
        Ra = function(e, t) { for (var n in e)
                if (e[n] === t) return !0;
            return !1 },
        Oa = {},
        La = function() { if (Rs) return "https:"; var e = window.location.protocol; return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e },
        Na = function(e) { return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(/https|http/, "https") };

    function Pa(e, t) { ga(e) && ga(t) ? t.forEach((function(t) { var n = t.key,
                r = t.value,
                o = e.find((function(e) { return e.key === n }));
            o ? o.value = r : e.push({ key: n, value: r }) })) : ca.warn("updateCustomField target 或 source 不是数组，忽略此次更新。") } var Ga = function(e) { return e === pn.GRP_PUBLIC },
        xa = function(e) { return e === pn.GRP_AVCHATROOM },
        Ua = function(e) { return fa(e) && e === pn.CONV_SYSTEM };

    function qa(e, t) { var n = {}; return Object.keys(e).forEach((function(r) { n[r] = t(e[r], r) })), n } var Fa = Object.prototype.hasOwnProperty;

    function ja(e) { if (null == e) return !0; if ("boolean" == typeof e) return !1; if ("number" == typeof e) return 0 === e; if ("string" == typeof e) return 0 === e.length; if ("function" == typeof e) return 0 === e.length; if (Array.isArray(e)) return 0 === e.length; if (e instanceof Error) return "" === e.message; if (da(e)) { for (var t in e)
                if (Fa.call(e, t)) return !1;
            return !0 } return !("map" !== Ca(e) && ! function(e) { return "set" === Ca(e) }(e) && !la(e)) && 0 === e.size }

    function Ba(e, t, n) { if (void 0 === t) return !0; var r = !0; if ("object" === nr(t).toLowerCase()) Object.keys(t).forEach((function(o) { var i = 1 === e.length ? e[0][o] : void 0;
            r = !!Ha(i, t[o], n, o) && r }));
        else if ("array" === nr(t).toLowerCase())
            for (var o = 0; o < t.length; o++) r = !!Ha(e[o], t[o], n, t[o].name) && r; if (r) return r; throw new Error("Params validate failed.") }

    function Ha(e, t, n, r) { if (void 0 === t) return !0; var o = !0; return t.required && ja(e) && (ia.error("TIM [".concat(n, '] Missing required params: "').concat(r, '".')), o = !1), ja(e) || nr(e).toLowerCase() === t.type.toLowerCase() || (ia.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(r, '".Expected ').concat(t.type, ".")), o = !1), t.validator && !t.validator(e) && (ia.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), o = !1), o } var Va = { f: qe },
        Ka = w.f,
        $a = Ve.forEach,
        Ya = V("hidden"),
        za = qe("toPrimitive"),
        Wa = Q.set,
        Xa = Q.getterFor("Symbol"),
        Ja = Object.prototype,
        Qa = r.Symbol,
        Za = ne("JSON", "stringify"),
        eu = E.f,
        tu = w.f,
        nu = ao.f,
        ru = u.f,
        ou = q("symbols"),
        iu = q("op-symbols"),
        su = q("string-to-symbol-registry"),
        au = q("symbol-to-string-registry"),
        uu = q("wks"),
        cu = r.QObject,
        lu = !cu || !cu.prototype || !cu.prototype.findChild,
        pu = i && o((function() { return 7 != wt(tu({}, "a", { get: function() { return tu(this, "a", { value: 7 }).a } })).a })) ? function(e, t, n) { var r = eu(Ja, t);
            r && delete Ja[t], tu(e, t, n), r && e !== Ja && tu(Ja, t, r) } : tu,
        fu = function(e, t) { var n = ou[e] = wt(Qa.prototype); return Wa(n, { type: "Symbol", tag: e, description: t }), i || (n.description = t), n },
        hu = Pe ? function(e) { return "symbol" == typeof e } : function(e) { return Object(e) instanceof Qa },
        du = function(e, t, n) { e === Ja && du(iu, t, n), D(e); var r = v(t, !0); return D(n), _(ou, r) ? (n.enumerable ? (_(e, Ya) && e[Ya][r] && (e[Ya][r] = !1), n = wt(n, { enumerable: c(0, !1) })) : (_(e, Ya) || tu(e, Ya, c(1, {})), e[Ya][r] = !0), pu(e, r, n)) : tu(e, r, n) },
        gu = function(e, t) { D(e); var n = g(t),
                r = It(n).concat(_u(n)); return $a(r, (function(t) { i && !mu.call(n, t) || du(e, t, n[t]) })), e },
        mu = function(e) { var t = v(e, !0),
                n = ru.call(this, t); return !(this === Ja && _(ou, t) && !_(iu, t)) && (!(n || !_(this, t) || !_(ou, t) || _(this, Ya) && this[Ya][t]) || n) },
        vu = function(e, t) { var n = g(e),
                r = v(t, !0); if (n !== Ja || !_(ou, r) || _(iu, r)) { var o = eu(n, r); return !o || !_(ou, r) || _(n, Ya) && n[Ya][r] || (o.enumerable = !0), o } },
        yu = function(e) { var t = nu(g(e)),
                n = []; return $a(t, (function(e) { _(ou, e) || _(K, e) || n.push(e) })), n },
        _u = function(e) { var t = e === Ja,
                n = nu(t ? iu : g(e)),
                r = []; return $a(n, (function(e) {!_(ou, e) || t && !_(Ja, e) || r.push(ou[e]) })), r }; if (Ne || (Z((Qa = function() { if (this instanceof Qa) throw TypeError("Symbol is not a constructor"); var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = B(e),
                n = function(e) { this === Ja && n.call(iu, e), _(this, Ya) && _(this[Ya], t) && (this[Ya][t] = !1), pu(this, t, c(1, e)) }; return i && lu && pu(Ja, t, { configurable: !0, set: n }), fu(t, e) }).prototype, "toString", (function() { return Xa(this).tag })), Z(Qa, "withoutSetter", (function(e) { return fu(B(e), e) })), u.f = mu, w.f = du, E.f = vu, ve.f = ao.f = yu, ye.f = _u, Va.f = function(e) { return fu(qe(e), e) }, i && (tu(Qa.prototype, "description", { configurable: !0, get: function() { return Xa(this).description } }), Z(Ja, "propertyIsEnumerable", mu, { unsafe: !0 }))), Ae({ global: !0, wrap: !0, forced: !Ne, sham: !Ne }, { Symbol: Qa }), $a(It(uu), (function(e) {! function(e) { var t = ee.Symbol || (ee.Symbol = {});
                _(t, e) || Ka(t, e, { value: Va.f(e) }) }(e) })), Ae({ target: "Symbol", stat: !0, forced: !Ne }, { for: function(e) { var t = String(e); if (_(su, t)) return su[t]; var n = Qa(t); return su[t] = n, au[n] = t, n }, keyFor: function(e) { if (!hu(e)) throw TypeError(e + " is not a symbol"); if (_(au, e)) return au[e] }, useSetter: function() { lu = !0 }, useSimple: function() { lu = !1 } }), Ae({ target: "Object", stat: !0, forced: !Ne, sham: !i }, { create: function(e, t) { return void 0 === t ? wt(e) : gu(wt(e), t) }, defineProperty: du, defineProperties: gu, getOwnPropertyDescriptor: vu }), Ae({ target: "Object", stat: !0, forced: !Ne }, { getOwnPropertyNames: yu, getOwnPropertySymbols: _u }), Ae({ target: "Object", stat: !0, forced: o((function() { ye.f(1) })) }, { getOwnPropertySymbols: function(e) { return ye.f(Oe(e)) } }), Za) { var Cu = !Ne || o((function() { var e = Qa(); return "[null]" != Za([e]) || "{}" != Za({ a: e }) || "{}" != Za(Object(e)) }));
        Ae({ target: "JSON", stat: !0, forced: Cu }, { stringify: function(e, t, n) { for (var r, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]); if (r = t, (m(t) || void 0 !== e) && !hu(e)) return Le(t) || (t = function(e, t) { if ("function" == typeof r && (t = r.call(this, e, t)), !hu(t)) return t }), o[1] = t, Za.apply(null, o) } }) }
    Qa.prototype[za] || A(Qa.prototype, za, Qa.prototype.valueOf), Vt(Qa, "Symbol"), K[Ya] = !0; var Iu = w.f,
        Mu = r.Symbol; if (i && "function" == typeof Mu && (!("description" in Mu.prototype) || void 0 !== Mu().description)) { var Su = {},
            Tu = function() { var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof Tu ? new Mu(e) : void 0 === e ? Mu() : Mu(e); return "" === e && (Su[t] = !0), t };
        Ce(Tu, Mu); var Eu = Tu.prototype = Mu.prototype;
        Eu.constructor = Tu; var Du = Eu.toString,
            ku = "Symbol(test)" == String(Mu("test")),
            wu = /^Symbol\((.*)\)[^)]+$/;
        Iu(Eu, "description", { configurable: !0, get: function() { var e = m(this) ? this.valueOf() : this,
                    t = Du.call(e); if (_(Su, e)) return ""; var n = ku ? t.slice(7, -1) : t.replace(wu, "$1"); return "" === n ? void 0 : n } }), Ae({ global: !0, forced: !0 }, { Symbol: Tu }) } var Au = u.f,
        bu = function(e) { return function(t) { for (var n, r = g(t), o = It(r), s = o.length, a = 0, u = []; s > a;) n = o[a++], i && !Au.call(r, n) || u.push(e ? [n, r[n]] : r[n]); return u } },
        Ru = { entries: bu(!0), values: bu(!1) }.values;
    Ae({ target: "Object", stat: !0 }, { values: function(e) { return Ru(e) } }); var Ou = { SUCCESS: "JoinedSuccess", WAIT_APPROVAL: "WaitAdminApproval" },
        Lu = { SUCCESS: 0 },
        Nu = { IS_LOGIN: 1, IS_NOT_LOGIN: 0 },
        Pu = { UNSEND: "unSend", SUCCESS: "success", FAIL: "fail" },
        Gu = { NOT_START: "notStart", PENDING: "pengding", RESOLVED: "resolved", REJECTED: "rejected" },
        xu = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_TEXT, this.content = { text: t.text || "" } } return An(e, [{ key: "setText", value: function(e) { this.content.text = e } }, { key: "sendable", value: function() { return 0 !== this.content.text.length } }]), e }(),
        Uu = qe("iterator"),
        qu = !o((function() { var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = ""; return e.pathname = "c%20d", t.forEach((function(e, r) { t.delete("b"), n += r + e })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[Uu] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host })),
        Fu = Object.assign,
        ju = Object.defineProperty,
        Bu = !Fu || o((function() { if (i && 1 !== Fu({ b: 1 }, Fu(ju({}, "a", { enumerable: !0, get: function() { ju(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0; var e = {},
                t = {},
                n = Symbol(); return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) { t[e] = e })), 7 != Fu({}, e)[n] || "abcdefghijklmnopqrst" != It(Fu({}, t)).join("") })) ? function(e, t) { for (var n = Oe(e), r = arguments.length, o = 1, s = ye.f, a = u.f; r > o;)
                for (var c, l = h(arguments[o++]), p = s ? It(l).concat(s(l)) : It(l), f = p.length, d = 0; f > d;) c = p[d++], i && !a.call(l, c) || (n[c] = l[c]); return n } : Fu,
        Hu = /[^\0-\u007E]/,
        Vu = /[.\u3002\uFF0E\uFF61]/g,
        Ku = "Overflow: input needs wider integers to process",
        $u = Math.floor,
        Yu = String.fromCharCode,
        zu = function(e) { return e + 22 + 75 * (e < 26) },
        Wu = function(e, t, n) { var r = 0; for (e = n ? $u(e / 700) : e >> 1, e += $u(e / t); e > 455; r += 36) e = $u(e / 35); return $u(r + 36 * e / (e + 38)) },
        Xu = function(e) { var t, n, r = [],
                o = (e = function(e) { for (var t = [], n = 0, r = e.length; n < r;) { var o = e.charCodeAt(n++); if (o >= 55296 && o <= 56319 && n < r) { var i = e.charCodeAt(n++);
                            56320 == (64512 & i) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o), n--) } else t.push(o) } return t }(e)).length,
                i = 128,
                s = 0,
                a = 72; for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(Yu(n)); var u = r.length,
                c = u; for (u && r.push("-"); c < o;) { var l = 2147483647; for (t = 0; t < e.length; t++)(n = e[t]) >= i && n < l && (l = n); var p = c + 1; if (l - i > $u((2147483647 - s) / p)) throw RangeError(Ku); for (s += (l - i) * p, i = l, t = 0; t < e.length; t++) { if ((n = e[t]) < i && ++s > 2147483647) throw RangeError(Ku); if (n == i) { for (var f = s, h = 36;; h += 36) { var d = h <= a ? 1 : h >= a + 26 ? 26 : h - a; if (f < d) break; var g = f - d,
                                m = 36 - d;
                            r.push(Yu(zu(d + g % m))), f = $u(g / m) }
                        r.push(Yu(zu(f))), a = Wu(s, p, c == u), s = 0, ++c } }++s, ++i } return r.join("") },
        Ju = function(e) { var t = ft(e); if ("function" != typeof t) throw TypeError(String(e) + " is not iterable"); return D(t.call(e)) },
        Qu = ne("fetch"),
        Zu = ne("Headers"),
        ec = qe("iterator"),
        tc = Q.set,
        nc = Q.getterFor("URLSearchParams"),
        rc = Q.getterFor("URLSearchParamsIterator"),
        oc = /\+/g,
        ic = Array(4),
        sc = function(e) { return ic[e - 1] || (ic[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi")) },
        ac = function(e) { try { return decodeURIComponent(e) } catch (gC) { return e } },
        uc = function(e) { var t = e.replace(oc, " "),
                n = 4; try { return decodeURIComponent(t) } catch (gC) { for (; n;) t = t.replace(sc(n--), ac); return t } },
        cc = /[!'()~]|%20/g,
        lc = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" },
        pc = function(e) { return lc[e] },
        fc = function(e) { return encodeURIComponent(e).replace(cc, pc) },
        hc = function(e, t) { if (t)
                for (var n, r, o = t.split("&"), i = 0; i < o.length;)(n = o[i++]).length && (r = n.split("="), e.push({ key: uc(r.shift()), value: uc(r.join("=")) })) },
        dc = function(e) { this.entries.length = 0, hc(this.entries, e) },
        gc = function(e, t) { if (e < t) throw TypeError("Not enough arguments") },
        mc = Yt((function(e, t) { tc(this, { type: "URLSearchParamsIterator", iterator: Ju(nc(e).entries), kind: t }) }), "Iterator", (function() { var e = rc(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value; return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n })),
        vc = function() { To(this, vc, "URLSearchParams"); var e, t, n, r, o, i, s, a, u, c = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                p = []; if (tc(l, { type: "URLSearchParams", entries: p, updateURL: function() {}, updateSearchParams: dc }), void 0 !== c)
                if (m(c))
                    if ("function" == typeof(e = ft(c)))
                        for (n = (t = e.call(c)).next; !(r = n.call(t)).done;) { if ((s = (i = (o = Ju(D(r.value))).next).call(o)).done || (a = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                            p.push({ key: s.value + "", value: a.value + "" }) } else
                            for (u in c) _(c, u) && p.push({ key: u, value: c[u] + "" });
                    else hc(p, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "") },
        yc = vc.prototype;
    Io(yc, { append: function(e, t) { gc(arguments.length, 2); var n = nc(this);
            n.entries.push({ key: e + "", value: t + "" }), n.updateURL() }, delete: function(e) { gc(arguments.length, 1); for (var t = nc(this), n = t.entries, r = e + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
            t.updateURL() }, get: function(e) { gc(arguments.length, 1); for (var t = nc(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n) return t[r].value;
            return null }, getAll: function(e) { gc(arguments.length, 1); for (var t = nc(this).entries, n = e + "", r = [], o = 0; o < t.length; o++) t[o].key === n && r.push(t[o].value); return r }, has: function(e) { gc(arguments.length, 1); for (var t = nc(this).entries, n = e + "", r = 0; r < t.length;)
                if (t[r++].key === n) return !0;
            return !1 }, set: function(e, t) { gc(arguments.length, 1); for (var n, r = nc(this), o = r.entries, i = !1, s = e + "", a = t + "", u = 0; u < o.length; u++)(n = o[u]).key === s && (i ? o.splice(u--, 1) : (i = !0, n.value = a));
            i || o.push({ key: s, value: a }), r.updateURL() }, sort: function() { var e, t, n, r = nc(this),
                o = r.entries,
                i = o.slice(); for (o.length = 0, n = 0; n < i.length; n++) { for (e = i[n], t = 0; t < n; t++)
                    if (o[t].key > e.key) { o.splice(t, 0, e); break }
                t === n && o.push(e) }
            r.updateURL() }, forEach: function(e) { for (var t, n = nc(this).entries, r = Re(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this) }, keys: function() { return new mc(this, "keys") }, values: function() { return new mc(this, "values") }, entries: function() { return new mc(this, "entries") } }, { enumerable: !0 }), Z(yc, ec, yc.entries), Z(yc, "toString", (function() { for (var e, t = nc(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(fc(e.key) + "=" + fc(e.value)); return n.join("&") }), { enumerable: !0 }), Vt(vc, "URLSearchParams"), Ae({ global: !0, forced: !qu }, { URLSearchParams: vc }), qu || "function" != typeof Qu || "function" != typeof Zu || Ae({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(e) { var t, n, r, o = [e]; return arguments.length > 1 && (t = arguments[1], m(t) && (n = t.body, "URLSearchParams" === lt(n) && ((r = t.headers ? new Zu(t.headers) : new Zu).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = wt(t, { body: c(0, String(n)), headers: c(0, r) }))), o.push(t)), Qu.apply(this, o) } }); var _c, Cc = { URLSearchParams: vc, getState: nc },
        Ic = Nt.codeAt,
        Mc = r.URL,
        Sc = Cc.URLSearchParams,
        Tc = Cc.getState,
        Ec = Q.set,
        Dc = Q.getterFor("URL"),
        kc = Math.floor,
        wc = Math.pow,
        Ac = /[A-Za-z]/,
        bc = /[\d+\-.A-Za-z]/,
        Rc = /\d/,
        Oc = /^(0x|0X)/,
        Lc = /^[0-7]+$/,
        Nc = /^\d+$/,
        Pc = /^[\dA-Fa-f]+$/,
        Gc = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        xc = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        Uc = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        qc = /[\u0009\u000A\u000D]/g,
        Fc = function(e, t) { var n, r, o; if ("[" == t.charAt(0)) { if ("]" != t.charAt(t.length - 1)) return "Invalid host"; if (!(n = Bc(t.slice(1, -1)))) return "Invalid host";
                e.host = n } else if (Xc(e)) { if (t = function(e) { var t, n, r = [],
                            o = e.toLowerCase().replace(Vu, ".").split("."); for (t = 0; t < o.length; t++) n = o[t], r.push(Hu.test(n) ? "xn--" + Xu(n) : n); return r.join(".") }(t), Gc.test(t)) return "Invalid host"; if (null === (n = jc(t))) return "Invalid host";
                e.host = n } else { if (xc.test(t)) return "Invalid host"; for (n = "", r = ht(t), o = 0; o < r.length; o++) n += zc(r[o], Vc);
                e.host = n } },
        jc = function(e) { var t, n, r, o, i, s, a, u = e.split("."); if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e; for (n = [], r = 0; r < t; r++) { if ("" == (o = u[r])) return e; if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = Oc.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) s = 0;
                else { if (!(10 == i ? Nc : 8 == i ? Lc : Pc).test(o)) return e;
                    s = parseInt(o, i) }
                n.push(s) } for (r = 0; r < t; r++)
                if (s = n[r], r == t - 1) { if (s >= wc(256, 5 - t)) return null } else if (s > 255) return null; for (a = n.pop(), r = 0; r < n.length; r++) a += n[r] * wc(256, 3 - r); return a },
        Bc = function(e) { var t, n, r, o, i, s, a, u = [0, 0, 0, 0, 0, 0, 0, 0],
                c = 0,
                l = null,
                p = 0,
                f = function() { return e.charAt(p) }; if (":" == f()) { if (":" != e.charAt(1)) return;
                p += 2, l = ++c } for (; f();) { if (8 == c) return; if (":" != f()) { for (t = n = 0; n < 4 && Pc.test(f());) t = 16 * t + parseInt(f(), 16), p++, n++; if ("." == f()) { if (0 == n) return; if (p -= n, c > 6) return; for (r = 0; f();) { if (o = null, r > 0) { if (!("." == f() && r < 4)) return;
                                p++ } if (!Rc.test(f())) return; for (; Rc.test(f());) { if (i = parseInt(f(), 10), null === o) o = i;
                                else { if (0 == o) return;
                                    o = 10 * o + i } if (o > 255) return;
                                p++ }
                            u[c] = 256 * u[c] + o, 2 != ++r && 4 != r || c++ } if (4 != r) return; break } if (":" == f()) { if (p++, !f()) return } else if (f()) return;
                    u[c++] = t } else { if (null !== l) return;
                    p++, l = ++c } } if (null !== l)
                for (s = c - l, c = 7; 0 != c && s > 0;) a = u[c], u[c--] = u[l + s - 1], u[l + --s] = a;
            else if (8 != c) return; return u },
        Hc = function(e) { var t, n, r, o; if ("number" == typeof e) { for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = kc(e / 256); return t.join(".") } if ("object" == typeof e) { for (t = "", r = function(e) { for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o); return o > n && (t = r, n = o), t }(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = !1), r === n ? (t += n ? ":" : "::", o = !0) : (t += e[n].toString(16), n < 7 && (t += ":"))); return "[" + t + "]" } return e },
        Vc = {},
        Kc = Bu({}, Vc, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        $c = Bu({}, Kc, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        Yc = Bu({}, $c, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }),
        zc = function(e, t) { var n = Ic(e, 0); return n > 32 && n < 127 && !_(t, e) ? e : encodeURIComponent(e) },
        Wc = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        Xc = function(e) { return _(Wc, e.scheme) },
        Jc = function(e) { return "" != e.username || "" != e.password },
        Qc = function(e) { return !e.host || e.cannotBeABaseURL || "file" == e.scheme },
        Zc = function(e, t) { var n; return 2 == e.length && Ac.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n) },
        el = function(e) { var t; return e.length > 1 && Zc(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t) },
        tl = function(e) { var t = e.path,
                n = t.length;!n || "file" == e.scheme && 1 == n && Zc(t[0], !0) || t.pop() },
        nl = function(e) { return "." === e || "%2e" === e.toLowerCase() },
        rl = {},
        ol = {},
        il = {},
        sl = {},
        al = {},
        ul = {},
        cl = {},
        ll = {},
        pl = {},
        fl = {},
        hl = {},
        dl = {},
        gl = {},
        ml = {},
        vl = {},
        yl = {},
        _l = {},
        Cl = {},
        Il = {},
        Ml = {},
        Sl = {},
        Tl = function(e, t, n, r) { var o, i, s, a, u, c = n || rl,
                l = 0,
                p = "",
                f = !1,
                h = !1,
                d = !1; for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(Uc, "")), t = t.replace(qc, ""), o = ht(t); l <= o.length;) { switch (i = o[l], c) {
                    case rl:
                        if (!i || !Ac.test(i)) { if (n) return "Invalid scheme";
                            c = il; continue }
                        p += i.toLowerCase(), c = ol; break;
                    case ol:
                        if (i && (bc.test(i) || "+" == i || "-" == i || "." == i)) p += i.toLowerCase();
                        else { if (":" != i) { if (n) return "Invalid scheme";
                                p = "", c = il, l = 0; continue } if (n && (Xc(e) != _(Wc, p) || "file" == p && (Jc(e) || null !== e.port) || "file" == e.scheme && !e.host)) return; if (e.scheme = p, n) return void(Xc(e) && Wc[e.scheme] == e.port && (e.port = null));
                            p = "", "file" == e.scheme ? c = ml : Xc(e) && r && r.scheme == e.scheme ? c = sl : Xc(e) ? c = ll : "/" == o[l + 1] ? (c = al, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = Il) } break;
                    case il:
                        if (!r || r.cannotBeABaseURL && "#" != i) return "Invalid scheme"; if (r.cannotBeABaseURL && "#" == i) { e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, c = Sl; break }
                        c = "file" == r.scheme ? ml : ul; continue;
                    case sl:
                        if ("/" != i || "/" != o[l + 1]) { c = ul; continue }
                        c = pl, l++; break;
                    case al:
                        if ("/" == i) { c = fl; break }
                        c = Cl; continue;
                    case ul:
                        if (e.scheme = r.scheme, i == _c) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                        else if ("/" == i || "\\" == i && Xc(e)) c = cl;
                        else if ("?" == i) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", c = Ml;
                        else { if ("#" != i) { e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), c = Cl; continue }
                            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = Sl } break;
                    case cl:
                        if (!Xc(e) || "/" != i && "\\" != i) { if ("/" != i) { e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, c = Cl; continue }
                            c = fl } else c = pl; break;
                    case ll:
                        if (c = pl, "/" != i || "/" != p.charAt(l + 1)) continue;
                        l++; break;
                    case pl:
                        if ("/" != i && "\\" != i) { c = fl; continue } break;
                    case fl:
                        if ("@" == i) { f && (p = "%40" + p), f = !0, s = ht(p); for (var g = 0; g < s.length; g++) { var m = s[g]; if (":" != m || d) { var v = zc(m, Yc);
                                    d ? e.password += v : e.username += v } else d = !0 }
                            p = "" } else if (i == _c || "/" == i || "?" == i || "#" == i || "\\" == i && Xc(e)) { if (f && "" == p) return "Invalid authority";
                            l -= ht(p).length + 1, p = "", c = hl } else p += i; break;
                    case hl:
                    case dl:
                        if (n && "file" == e.scheme) { c = yl; continue } if (":" != i || h) { if (i == _c || "/" == i || "?" == i || "#" == i || "\\" == i && Xc(e)) { if (Xc(e) && "" == p) return "Invalid host"; if (n && "" == p && (Jc(e) || null !== e.port)) return; if (a = Fc(e, p)) return a; if (p = "", c = _l, n) return; continue } "[" == i ? h = !0 : "]" == i && (h = !1), p += i } else { if ("" == p) return "Invalid host"; if (a = Fc(e, p)) return a; if (p = "", c = gl, n == dl) return } break;
                    case gl:
                        if (!Rc.test(i)) { if (i == _c || "/" == i || "?" == i || "#" == i || "\\" == i && Xc(e) || n) { if ("" != p) { var y = parseInt(p, 10); if (y > 65535) return "Invalid port";
                                    e.port = Xc(e) && y === Wc[e.scheme] ? null : y, p = "" } if (n) return;
                                c = _l; continue } return "Invalid port" }
                        p += i; break;
                    case ml:
                        if (e.scheme = "file", "/" == i || "\\" == i) c = vl;
                        else { if (!r || "file" != r.scheme) { c = Cl; continue } if (i == _c) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                            else if ("?" == i) e.host = r.host, e.path = r.path.slice(), e.query = "", c = Ml;
                            else { if ("#" != i) { el(o.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), tl(e)), c = Cl; continue }
                                e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = Sl } } break;
                    case vl:
                        if ("/" == i || "\\" == i) { c = yl; break }
                        r && "file" == r.scheme && !el(o.slice(l).join("")) && (Zc(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), c = Cl; continue;
                    case yl:
                        if (i == _c || "/" == i || "\\" == i || "?" == i || "#" == i) { if (!n && Zc(p)) c = Cl;
                            else if ("" == p) { if (e.host = "", n) return;
                                c = _l } else { if (a = Fc(e, p)) return a; if ("localhost" == e.host && (e.host = ""), n) return;
                                p = "", c = _l } continue }
                        p += i; break;
                    case _l:
                        if (Xc(e)) { if (c = Cl, "/" != i && "\\" != i) continue } else if (n || "?" != i)
                            if (n || "#" != i) { if (i != _c && (c = Cl, "/" != i)) continue } else e.fragment = "", c = Sl;
                        else e.query = "", c = Ml; break;
                    case Cl:
                        if (i == _c || "/" == i || "\\" == i && Xc(e) || !n && ("?" == i || "#" == i)) { if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (tl(e), "/" == i || "\\" == i && Xc(e) || e.path.push("")) : nl(p) ? "/" == i || "\\" == i && Xc(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Zc(p) && (e.host && (e.host = ""), p = p.charAt(0) + ":"), e.path.push(p)), p = "", "file" == e.scheme && (i == _c || "?" == i || "#" == i))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift(); "?" == i ? (e.query = "", c = Ml) : "#" == i && (e.fragment = "", c = Sl) } else p += zc(i, $c); break;
                    case Il:
                        "?" == i ? (e.query = "", c = Ml) : "#" == i ? (e.fragment = "", c = Sl) : i != _c && (e.path[0] += zc(i, Vc)); break;
                    case Ml:
                        n || "#" != i ? i != _c && ("'" == i && Xc(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : zc(i, Vc)) : (e.fragment = "", c = Sl); break;
                    case Sl:
                        i != _c && (e.fragment += zc(i, Kc)) }
                l++ } },
        El = function(e) { var t, n, r = To(this, El, "URL"),
                o = arguments.length > 1 ? arguments[1] : void 0,
                s = String(e),
                a = Ec(r, { type: "URL" }); if (void 0 !== o)
                if (o instanceof El) t = Dc(o);
                else if (n = Tl(t = {}, String(o))) throw TypeError(n); if (n = Tl(a, s, null, t)) throw TypeError(n); var u = a.searchParams = new Sc,
                c = Tc(u);
            c.updateSearchParams(a.query), c.updateURL = function() { a.query = String(u) || null }, i || (r.href = kl.call(r), r.origin = wl.call(r), r.protocol = Al.call(r), r.username = bl.call(r), r.password = Rl.call(r), r.host = Ol.call(r), r.hostname = Ll.call(r), r.port = Nl.call(r), r.pathname = Pl.call(r), r.search = Gl.call(r), r.searchParams = xl.call(r), r.hash = Ul.call(r)) },
        Dl = El.prototype,
        kl = function() { var e = Dc(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                o = e.host,
                i = e.port,
                s = e.path,
                a = e.query,
                u = e.fragment,
                c = t + ":"; return null !== o ? (c += "//", Jc(e) && (c += n + (r ? ":" + r : "") + "@"), c += Hc(o), null !== i && (c += ":" + i)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + s.join("/") : "", null !== a && (c += "?" + a), null !== u && (c += "#" + u), c },
        wl = function() { var e = Dc(this),
                t = e.scheme,
                n = e.port; if ("blob" == t) try { return new URL(t.path[0]).origin } catch (gC) { return "null" }
            return "file" != t && Xc(e) ? t + "://" + Hc(e.host) + (null !== n ? ":" + n : "") : "null" },
        Al = function() { return Dc(this).scheme + ":" },
        bl = function() { return Dc(this).username },
        Rl = function() { return Dc(this).password },
        Ol = function() { var e = Dc(this),
                t = e.host,
                n = e.port; return null === t ? "" : null === n ? Hc(t) : Hc(t) + ":" + n },
        Ll = function() { var e = Dc(this).host; return null === e ? "" : Hc(e) },
        Nl = function() { var e = Dc(this).port; return null === e ? "" : String(e) },
        Pl = function() { var e = Dc(this),
                t = e.path; return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "" },
        Gl = function() { var e = Dc(this).query; return e ? "?" + e : "" },
        xl = function() { return Dc(this).searchParams },
        Ul = function() { var e = Dc(this).fragment; return e ? "#" + e : "" },
        ql = function(e, t) { return { get: e, set: t, configurable: !0, enumerable: !0 } }; if (i && Mt(Dl, { href: ql(kl, (function(e) { var t = Dc(this),
                    n = String(e),
                    r = Tl(t, n); if (r) throw TypeError(r);
                Tc(t.searchParams).updateSearchParams(t.query) })), origin: ql(wl), protocol: ql(Al, (function(e) { var t = Dc(this);
                Tl(t, String(e) + ":", rl) })), username: ql(bl, (function(e) { var t = Dc(this),
                    n = ht(String(e)); if (!Qc(t)) { t.username = ""; for (var r = 0; r < n.length; r++) t.username += zc(n[r], Yc) } })), password: ql(Rl, (function(e) { var t = Dc(this),
                    n = ht(String(e)); if (!Qc(t)) { t.password = ""; for (var r = 0; r < n.length; r++) t.password += zc(n[r], Yc) } })), host: ql(Ol, (function(e) { var t = Dc(this);
                t.cannotBeABaseURL || Tl(t, String(e), hl) })), hostname: ql(Ll, (function(e) { var t = Dc(this);
                t.cannotBeABaseURL || Tl(t, String(e), dl) })), port: ql(Nl, (function(e) { var t = Dc(this);
                Qc(t) || ("" == (e = String(e)) ? t.port = null : Tl(t, e, gl)) })), pathname: ql(Pl, (function(e) { var t = Dc(this);
                t.cannotBeABaseURL || (t.path = [], Tl(t, e + "", _l)) })), search: ql(Gl, (function(e) { var t = Dc(this); "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Tl(t, e, Ml)), Tc(t.searchParams).updateSearchParams(t.query) })), searchParams: ql(xl), hash: ql(Ul, (function(e) { var t = Dc(this); "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Tl(t, e, Sl)) : t.fragment = null })) }), Z(Dl, "toJSON", (function() { return kl.call(this) }), { enumerable: !0 }), Z(Dl, "toString", (function() { return kl.call(this) }), { enumerable: !0 }), Mc) { var Fl = Mc.createObjectURL,
            jl = Mc.revokeObjectURL;
        Fl && Z(El, "createObjectURL", (function(e) { return Fl.apply(Mc, arguments) })), jl && Z(El, "revokeObjectURL", (function(e) { return jl.apply(Mc, arguments) })) }
    Vt(El, "URL"), Ae({ global: !0, forced: !qu, sham: !i }, { URL: El }); var Bl = { JSON: { TYPE: { C2C: { NOTICE: 1, COMMON: 9, EVENT: 10 }, GROUP: { COMMON: 3, TIP: 4, SYSTEM: 5, TIP2: 6 }, FRIEND: { NOTICE: 7 }, PROFILE: { NOTICE: 8 } }, SUBTYPE: { C2C: { COMMON: 0, READED: 92, KICKEDOUT: 96 }, GROUP: { COMMON: 0, LOVEMESSAGE: 1, TIP: 2, REDPACKET: 3 } }, OPTIONS: { GROUP: { JOIN: 1, QUIT: 2, KICK: 3, SET_ADMIN: 4, CANCEL_ADMIN: 5, MODIFY_GROUP_INFO: 6, MODIFY_MEMBER_INFO: 7 } } }, PROTOBUF: {}, IMAGE_TYPES: { ORIGIN: 1, LARGE: 2, SMALL: 3 }, IMAGE_FORMAT: { JPG: 1, JPEG: 1, GIF: 2, PNG: 3, BMP: 4, UNKNOWN: 255 } },
        Hl = 1,
        Vl = 2,
        Kl = 3,
        $l = 4,
        Yl = 5,
        zl = 7,
        Wl = 8,
        Xl = 9,
        Jl = 10,
        Ql = 15,
        Zl = 255,
        ep = 2,
        tp = 0,
        np = 1,
        rp = { NICK: "Tag_Profile_IM_Nick", GENDER: "Tag_Profile_IM_Gender", BIRTHDAY: "Tag_Profile_IM_BirthDay", LOCATION: "Tag_Profile_IM_Location", SELFSIGNATURE: "Tag_Profile_IM_SelfSignature", ALLOWTYPE: "Tag_Profile_IM_AllowType", LANGUAGE: "Tag_Profile_IM_Language", AVATAR: "Tag_Profile_IM_Image", MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings", ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType", LEVEL: "Tag_Profile_IM_Level", ROLE: "Tag_Profile_IM_Role" },
        op = { UNKNOWN: "Gender_Type_Unknown", FEMALE: "Gender_Type_Female", MALE: "Gender_Type_Male" },
        ip = { NONE: "AdminForbid_Type_None", SEND_OUT: "AdminForbid_Type_SendOut" },
        sp = { NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_ANY: "AllowType_Type_AllowAny", DENY_ANY: "AllowType_Type_DenyAny" },
        ap = function() {
            function e(t) { kn(this, e), this._imageMemoryURL = "", this._file = t.file, Rs ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = pn.MSG_IMAGE, this._percent = 0, this.content = { imageFormat: Bl.IMAGE_FORMAT[t.imageFormat] || Bl.IMAGE_FORMAT.UNKNOWN, uuid: t.uuid, imageInfoArray: [] }, this.initImageInfoArray(t.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl() } return An(e, [{ key: "_initImageInfoModel", value: function() { var e = this;
                    this._ImageInfoModel = function(t) { this.instanceID = wa(9999999), this.sizeType = t.type || 0, this.size = t.size || 0, this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || "", this.url = t.url || e._imageMemoryURL || e._defaultImage }, this._ImageInfoModel.prototype = { setSizeType: function(e) { this.sizeType = e }, setImageUrl: function(e) { e && (this.imageUrl = e) }, getImageUrl: function() { return this.imageUrl } } } }, { key: "initImageInfoArray", value: function(e) { for (var t = 2, n = null, r = null; t >= 0;) r = void 0 === e || void 0 === e[t] ? { type: 0, size: 0, width: 0, height: 0, url: "" } : e[t], (n = new this._ImageInfoModel(r)).setSizeType(t + 1), this.addImageInfo(n), t-- } }, { key: "updateImageInfoArray", value: function(e) { for (var t, n = this.content.imageInfoArray.length, r = 0; r < n; r++) t = this.content.imageInfoArray[r], e.size && (t.size = e.size), e.url && t.setImageUrl(e.url), e.width && (t.width = e.width), e.height && (t.height = e.height) } }, { key: "_autoFixUrl", value: function() { for (var e = this.content.imageInfoArray.length, t = "", n = "", r = ["http", "https"], o = null, i = 0; i < e; i++) this.content.imageInfoArray[i].url && "" !== (o = this.content.imageInfoArray[i]).imageUrl && (n = o.imageUrl.slice(0, o.imageUrl.indexOf("://") + 1), t = o.imageUrl.slice(o.imageUrl.indexOf("://") + 1), r.indexOf(n) < 0 && (n = "https:"), this.content.imageInfoArray[i].setImageUrl([n, t].join(""))) } }, { key: "updatePercent", value: function(e) { this._percent = e, this._percent > 1 && (this._percent = 1) } }, { key: "updateImageFormat", value: function(e) { this.content.imageFormat = e } }, { key: "createImageDataASURLInWeb", value: function(e) { void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0])) } }, { key: "createImageDataASURLInWXMiniApp", value: function(e) { e && e.url && (this._imageMemoryURL = e.url) } }, { key: "replaceImageInfo", value: function(e, t) { this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e) } }, { key: "addImageInfo", value: function(e) { this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e) } }, { key: "sendable", value: function() { return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size) } }]), e }(),
        up = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_FACE, this.content = t || null } return An(e, [{ key: "sendable", value: function() { return null !== this.content } }]), e }(),
        cp = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_AUDIO, this._percent = 0, this.content = { downloadFlag: 2, second: t.second, size: t.size, url: t.url, remoteAudioUrl: "", uuid: t.uuid } } return An(e, [{ key: "updatePercent", value: function(e) { this._percent = e, this._percent > 1 && (this._percent = 1) } }, { key: "updateAudioUrl", value: function(e) { this.content.remoteAudioUrl = e } }, { key: "sendable", value: function() { return "" !== this.content.remoteAudioUrl } }]), e }();
    Ae({ target: "Object", stat: !0, forced: !i, sham: !i }, { defineProperty: w.f }); var lp = { from: !0, groupID: !0, groupName: !0, to: !0 },
        pp = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_GRP_TIP, this.content = {}, this._initContent(t) } return An(e, [{ key: "_initContent", value: function(e) { var t = this;
                    Object.keys(e).forEach((function(n) { switch (n) {
                            case "remarkInfo":
                                break;
                            case "groupProfile":
                                t.content.groupProfile = {}, t._initGroupProfile(e[n]); break;
                            case "operatorInfo":
                            case "memberInfoList":
                                break;
                            case "msgMemberInfo":
                                t.content.memberList = e[n], Object.defineProperty(t.content, "msgMemberInfo", { get: function() { return ca.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupTipPayload"), t.content.memberList.map((function(e) { return { userID: e.userID, shutupTime: e.muteTime } })) } }); break;
                            default:
                                t.content[n] = e[n] } })), this.content.userIDList || (this.content.userIDList = [this.content.operatorID]) } }, { key: "_initGroupProfile", value: function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) { var r = t[n];
                        lp[r] && (this.content.groupProfile[r] = e[r]) } } }]), e }(),
        fp = { from: !0, groupID: !0, name: !0, to: !0 },
        hp = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t) } return An(e, [{ key: "_initContent", value: function(e) { var t = this;
                    Object.keys(e).forEach((function(n) { switch (n) {
                            case "memberInfoList":
                                break;
                            case "remarkInfo":
                                t.content.handleMessage = e[n]; break;
                            case "groupProfile":
                                t.content.groupProfile = {}, t._initGroupProfile(e[n]); break;
                            default:
                                t.content[n] = e[n] } })) } }, { key: "_initGroupProfile", value: function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) { var r = t[n];
                        fp[r] && (this.content.groupProfile[r] = e[r]) } } }]), e }(),
        dp = Math.min,
        gp = [].lastIndexOf,
        mp = !!gp && 1 / [1].lastIndexOf(1, -0) < 0,
        vp = Ke("lastIndexOf"),
        yp = We("indexOf", { ACCESSORS: !0, 1: 0 }),
        _p = mp || !vp || !yp ? function(e) { if (mp) return gp.apply(this, arguments) || 0; var t = g(this),
                n = ae(t.length),
                r = n - 1; for (arguments.length > 1 && (r = dp(r, ie(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1 } : gp;
    Ae({ target: "Array", proto: !0, forced: _p !== [].lastIndexOf }, { lastIndexOf: _p }); var Cp = { 70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。", 70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。", 70003: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。", 70005: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。", 70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。", 70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。", 70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。", 70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(https://cloud.tencent.com/document/product/269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。", 70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。", 70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。", 70051: "帐号被拉入黑名单。", 70052: "UserSig 已经失效，请重新生成，再次尝试。", 70107: "因安全原因被限制登录，请不要频繁登录。", 70169: "请求的用户帐号不存在。", 70114: "服务端内部超时，请稍后重试。", 70202: "服务端内部超时，请稍后重试。", 70206: "请求中批量数量不合法。", 70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。", 70403: "请求失败，需要 App 管理员权限。", 70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(https://cloud.tencent.com/document/product/269/32458)。", 70500: "服务端内部错误，请稍后重试。", 71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。", 20001: "请求包非法。", 20002: "UserSig 或 A2 失效。", 20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。", 20004: "网络异常，请重试。", 20005: "服务端内部错误，请重试。", 20006: "触发发送单聊消息之前回调，App 后台返回禁止下发该消息。", 20007: "发送单聊消息，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(https://cloud.tencent.com/document/product/269/38656)。", 20009: "消息发送双方互相不是好友，禁止发送（配置单聊消息校验好友关系才会出现）。", 20010: "发送单聊消息，自己不是对方的好友（单向关系），禁止发送。", 20011: "发送单聊消息，对方不是自己的好友（单向关系），禁止发送。", 20012: "发送方被禁言，该条消息被禁止发送。", 20016: "消息撤回超过了时间限制（默认2分钟）。", 20018: "删除漫游内部错误。", 90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。", 90002: "JSON 格式请求包中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。", 90003: "JSON 格式请求包体中缺少 To_Account 字段或者 To_Account 帐号不存在。", 90005: "JSON 格式请求包体中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。", 90006: "JSON 格式请求包体中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。", 90007: "JSON 格式请求包体中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。", 90008: "JSON 格式请求包体中缺少 From_Account 字段或者 From_Account 帐号不存在。", 90009: "请求需要 App 管理员权限。", 90010: "JSON 格式请求包不符合消息格式描述，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。", 90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。", 90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。", 90026: "消息离线存储时间错误（最多不能超过7天）。", 90031: "JSON 格式请求包体中 SyncOtherMachine 字段不是 Integer 类型。", 90044: "JSON 格式请求包体中 MsgLifeTime 字段不是 Integer 类型。", 90048: "请求的用户帐号不存在。", 90054: "撤回请求中的 MsgKey 不合法。", 90994: "服务内部错误，请重试。", 90995: "服务内部错误，请重试。", 91e3: "服务内部错误，请重试。", 90992: "服务内部错误，请重试；如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。", 93e3: "JSON 数据包超长，消息包体请不要超过8k。", 91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。", 10002: "服务端内部错误，请重试。", 10003: "请求中的接口名称错误，请核对接口名称并重试。", 10004: "参数非法，请根据错误描述检查请求是否正确。", 10005: "请求包体中携带的帐号数量过多。", 10006: "操作频率限制，请尝试降低调用的频率。", 10007: "操作权限不足，例如 Public 群组中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。", 10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。", 10009: "该群不允许群主主动退出。", 10010: "群组不存在，或者曾经存在过，但是目前已经被解散。", 10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。", 10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。", 10013: "被邀请加入的用户已经是群成员。", 10014: "群已满员，无法将请求中的用户加入群组，如果是批量加人，可以尝试减少加入用户的数量。", 10015: "找不到指定 ID 的群组。", 10016: "App 后台通过第三方回调拒绝本次操作。", 10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。", 10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。", 10019: "请求的用户帐号不存在。", 10021: "群组 ID 已被使用，请选择其他的群组 ID。", 10023: "发消息的频率超限，请延长两次发消息时间的间隔。", 10024: "此邀请或者申请请求已经被处理。", 10025: "群组 ID 已被使用，并且操作者为群主，可以直接使用。", 10026: "该 SDKAppID 请求的命令字已被禁用。", 10030: "请求撤回的消息不存在。", 10031: "消息撤回超过了时间限制（默认2分钟）。", 10032: "请求撤回的消息不支持撤回操作。", 10033: "群组类型不支持消息撤回操作。", 10034: "该消息类型不支持删除操作。", 10035: "音视频聊天室和在线成员广播大群不支持删除消息。", 10036: "音视频聊天室创建数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买预付费套餐“IM音视频聊天室”。", 10037: "单个用户可创建和加入的群组数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“单人可创建与加入群组数”。", 10038: "群成员数量超过限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“扩展群人数上限”。", 10041: "该应用（SDKAppID）已配置不支持群消息撤回。" },
        Ip = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this)).code = e.code, r.message = Cp[e.code] || e.message, r.data = e.data || {}, r } return n }(Un(Error)),
        Mp = 2e3,
        Sp = 2001,
        Tp = 2002,
        Ep = 2003,
        Dp = 2022,
        kp = 2023,
        wp = 2040,
        Ap = 2100,
        bp = 2103,
        Rp = 2105,
        Op = 2106,
        Lp = 2108,
        Np = 2109,
        Pp = 2110,
        Gp = 2251,
        xp = 2252,
        Up = 2253,
        qp = 2300,
        Fp = 2301,
        jp = 2350,
        Bp = 2351,
        Hp = 2352,
        Vp = 2400,
        Kp = 2401,
        $p = 2402,
        Yp = 2403,
        zp = 2500,
        Wp = 2501,
        Xp = 2502,
        Jp = 2600,
        Qp = 2601,
        Zp = 2620,
        ef = 2621,
        tf = 2622,
        nf = 2660,
        rf = 2661,
        of = 2662,
        sf = 2680,
        af = 2681,
        uf = 2682,
        cf = 2683,
        lf = 2684,
        pf = 2685,
        ff = 2700,
        hf = 2721,
        df = 2722,
        gf = 2740,
        mf = 2741,
        vf = 2742,
        yf = 2800,
        _f = 2801,
        Cf = 2802,
        If = 2803,
        Mf = 2804,
        Sf = 2805,
        Tf = 2900,
        Ef = 2901,
        Df = 2902,
        kf = 2903,
        wf = 2904,
        Af = 2999,
        bf = 91101,
        Rf = 20002,
        Of = 70001,
        Lf = "无 SDKAppID",
        Nf = "无 accountType",
        Pf = "无 userID",
        Gf = "无 userSig",
        xf = "无 tinyID",
        Uf = "无 a2key",
        qf = "未检测到 COS 上传插件",
        Ff = "消息发送失败",
        jf = "MessageController.constructor() 需要参数 options",
        Bf = "需要 Message 的实例",
        Hf = 'Message.conversationType 只能为 "C2C" 或 "GROUP"',
        Vf = "无法发送空文件",
        Kf = "回调函数运行时遇到错误，请检查接入侧代码",
        $f = "消息撤回失败",
        Yf = "请先选择一个图片",
        zf = "只允许上传 jpg png jpeg gif 格式的图片",
        Wf = "图片大小超过20M，无法发送",
        Xf = "语音上传失败",
        Jf = "语音大小大于20M，无法发送",
        Qf = "视频上传失败",
        Zf = "视频大小超过100M，无法发送",
        eh = "只允许上传 mp4 格式的视频",
        th = "文件上传失败",
        nh = "请先选择一个文件",
        rh = "文件大小超过100M，无法发送 ",
        oh = "缺少必要的参数文件 URL",
        ih = "没有找到相应的会话，请检查传入参数",
        sh = "没有找到相应的用户或群组，请检查传入参数",
        ah = "未记录的会话类型",
        uh = "非法的群类型，请检查传入参数",
        ch = "不能加入 Private 类型的群组",
        lh = "AVChatRoom 类型的群组不能转让群主",
        ph = "不能把群主转让给自己",
        fh = "不能解散 Private 类型的群组",
        hh = "加群失败，请检查传入参数或重试",
        dh = "AVChatRoom 类型的群不支持邀请群成员",
        gh = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",
        mh = "不能在 AVChatRoom 类型的群组踢人",
        vh = "你不是群主，只有群主才有权限操作",
        yh = "不能在 Private / AVChatRoom 类型的群中设置群成员身份",
        _h = "不合法的群成员身份，请检查传入参数",
        Ch = "不能设置自己的群成员身份，请检查传入参数",
        Ih = "不能将自己禁言，请检查传入参数",
        Mh = "传入 deleteFriend 接口的参数无效",
        Sh = "传入 updateMyProfile 接口的参数无效",
        Th = "updateMyProfile 无标配资料字段或自定义资料字段",
        Eh = "传入 addToBlacklist 接口的参数无效",
        Dh = "传入 removeFromBlacklist 接口的参数无效",
        kh = "不能拉黑自己",
        wh = "网络层初始化错误，缺少 URL 参数",
        Ah = "打包错误，未定义的 serverName",
        bh = "未定义的 packageConfig",
        Rh = "未连接到网络",
        Oh = "不规范的参数名称",
        Lh = "意料外的通知条件",
        Nh = "_syncOffset 丢失",
        Ph = "获取 longpolling id 失败",
        Gh = "接口需要 SDK 处于 ready 状态后才能调用",
        xh = ["jpg", "jpeg", "gif", "png"],
        Uh = ["mp4"],
        qh = function() {
            function e(t) { kn(this, e); var n = this._check(t); if (n instanceof Ip) throw n;
                this.type = pn.MSG_FILE, this._percent = 0; var r = this._getFileInfo(t);
                this.content = { downloadFlag: 2, fileUrl: t.url || "", uuid: t.uuid, fileName: r.name || "", fileSize: r.size || 0 } } return An(e, [{ key: "_getFileInfo", value: function(e) { if (e.fileName && e.fileSize) return { size: e.fileSize, name: e.fileName }; if (Rs) return {}; var t = e.file.files[0]; return { size: t.size, name: t.name, type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase() } } }, { key: "updatePercent", value: function(e) { this._percent = e, this._percent > 1 && (this._percent = 1) } }, { key: "updateFileUrl", value: function(e) { this.content.fileUrl = e } }, { key: "_check", value: function(e) { if (e.size > 104857600) return new Ip({ code: $p, message: "".concat(rh, ": ").concat(104857600, " bytes") }) } }, { key: "sendable", value: function() { return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize) } }]), e }(),
        Fh = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_CUSTOM, this.content = { data: t.data || "", description: t.description || "", extension: t.extension || "" } } return An(e, [{ key: "setData", value: function(e) { return this.content.data = e, this } }, { key: "setDescription", value: function(e) { return this.content.description = e, this } }, { key: "setExtension", value: function(e) { return this.content.extension = e, this } }, { key: "sendable", value: function() { return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length } }]), e }(),
        jh = function() {
            function e(t) { kn(this, e), this.type = pn.MSG_VIDEO, this._percent = 0, this.content = { remoteVideoUrl: t.remoteVideoUrl, videoFormat: t.videoFormat, videoSecond: parseInt(t.videoSecond, 10), videoSize: t.videoSize, videoUrl: t.videoUrl, videoDownloadFlag: 2, videoUUID: t.videoUUID, thumbUUID: t.thumbUUID, thumbFormat: t.thumbFormat, thumbWidth: t.thumbWidth, thumbHeight: t.thumbHeight, thumbSize: t.thumbSize, thumbDownloadFlag: 2, thumbUrl: t.thumbUrl } } return An(e, [{ key: "updatePercent", value: function(e) { this._percent = e, this._percent > 1 && (this._percent = 1) } }, { key: "updateVideoUrl", value: function(e) { e && (this.content.remoteVideoUrl = e) } }, { key: "sendable", value: function() { return "" !== this.content.remoteVideoUrl } }]), e }(),
        Bh = function e(t) { kn(this, e), this.type = pn.MSG_GEO, this.content = t },
        Hh = { 1: pn.MSG_PRIORITY_HIGH, 2: pn.MSG_PRIORITY_NORMAL, 3: pn.MSG_PRIORITY_LOW, 4: pn.MSG_PRIORITY_LOWEST },
        Vh = function() {
            function e(t) { kn(this, e), this.ID = "", this.conversationID = t.conversationID || null, this.conversationType = t.conversationType || pn.CONV_C2C, this.conversationSubType = t.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t.random || wa(), this.priority = this._computePriority(t.priority), this.nick = "", this.avatar = "", this._elements = [], this.isPlaceMessage = t.isPlaceMessage || 0, this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits, this.geo = {}, this.from = t.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t.isSystemMessage || !1, this.protocol = t.protocol || "JSON", this.isResend = !1, this.isRead = !1, this.status = t.status || Pu.SUCCESS, this.reInitialize(t.currentUser), this.extractGroupInfo(t.groupProfile || null) } return An(e, [{ key: "getElements", value: function() { return this._elements } }, { key: "extractGroupInfo", value: function(e) { null !== e && (fa(e.fromAccountNick) && (this.nick = e.fromAccountNick), fa(e.fromAccountHeadurl) && (this.avatar = e.fromAccountHeadurl)) } }, { key: "_initProxy", value: function() { this.payload = this._elements[0].content, this.type = this._elements[0].type } }, { key: "reInitialize", value: function(e) { e && (this.status = this.from ? Pu.SUCCESS : Pu.UNSEND, !this.from && (this.from = e)), this._initFlow(e), this._initielizeSequence(e), this._concactConversationID(e), this.generateMessageID(e) } }, { key: "isSendable", value: function() { return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (ca.warn("".concat(this._elements[0].type, ' need "boolean : sendable()" method')), !1) : this._elements[0].sendable()) } }, { key: "_initTo", value: function(e) { this.conversationType === pn.CONV_GROUP && (this.to = e.groupID) } }, { key: "_initielizeSequence", value: function(e) { 0 === this.clientSequence && e && (this.clientSequence = function(e) { if (!e) return ca.error("autoincrementIndex(string: key) need key parameter"), !1; if (void 0 === Oa[e]) { var t = new Date,
                                n = "3".concat(t.getHours()).slice(-2),
                                r = "0".concat(t.getMinutes()).slice(-2),
                                o = "0".concat(t.getSeconds()).slice(-2);
                            Oa[e] = parseInt([n, r, o, "0001"].join("")), n = null, r = null, o = null, ca.warn("utils.autoincrementIndex() create new sequence : ".concat(e, " = ").concat(Oa[e])) } return Oa[e]++ }(e)), 0 === this.sequence && this.conversationType === pn.CONV_C2C && (this.sequence = this.clientSequence) } }, { key: "generateMessageID", value: function(e) { var t = e === this.from ? 1 : 0,
                        n = this.sequence > 0 ? this.sequence : this.clientSequence;
                    this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t) } }, { key: "_initFlow", value: function(e) { "" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this.flow = "in") } }, { key: "_concactConversationID", value: function(e) { var t = this.to,
                        n = "",
                        r = this.conversationType;
                    r !== pn.CONV_SYSTEM ? (n = r === pn.CONV_C2C ? e === this.from ? t : this.from : this.to, this.conversationID = "".concat(r).concat(n)) : this.conversationID = pn.CONV_SYSTEM } }, { key: "isElement", value: function(e) { return e instanceof xu || e instanceof ap || e instanceof up || e instanceof cp || e instanceof qh || e instanceof jh || e instanceof pp || e instanceof hp || e instanceof Fh || e instanceof Bh } }, { key: "setElement", value: function(e) { var t = this; if (this.isElement(e)) return this._elements = [e], void this._initProxy(); var n = function(e) { switch (e.type) {
                            case pn.MSG_TEXT:
                                t.setTextElement(e.content); break;
                            case pn.MSG_IMAGE:
                                t.setImageElement(e.content); break;
                            case pn.MSG_AUDIO:
                                t.setAudioElement(e.content); break;
                            case pn.MSG_FILE:
                                t.setFileElement(e.content); break;
                            case pn.MSG_VIDEO:
                                t.setVideoElement(e.content); break;
                            case pn.MSG_CUSTOM:
                                t.setCustomElement(e.content); break;
                            case pn.MSG_GEO:
                                t.setGEOElement(e.content); break;
                            case pn.MSG_GRP_TIP:
                                t.setGroupTipElement(e.content); break;
                            case pn.MSG_GRP_SYS_NOTICE:
                                t.setGroupSystemNoticeElement(e.content); break;
                            case pn.MSG_FACE:
                                t.setFaceElement(e.content); break;
                            default:
                                ca.warn(e.type, e.content, "no operation......") } }; if (Array.isArray(e))
                        for (var r = 0; r < e.length; r++) n(e[r]);
                    else n(e);
                    this._initProxy() } }, { key: "setTextElement", value: function(e) { var t = "string" == typeof e ? e : e.text,
                        n = new xu({ text: t });
                    this._elements.push(n) } }, { key: "setImageElement", value: function(e) { var t = new ap(e);
                    this._elements.push(t) } }, { key: "setAudioElement", value: function(e) { var t = new cp(e);
                    this._elements.push(t) } }, { key: "setFileElement", value: function(e) { var t = new qh(e);
                    this._elements.push(t) } }, { key: "setVideoElement", value: function(e) { var t = new jh(e);
                    this._elements.push(t) } }, { key: "setGEOElement", value: function(e) { var t = new Bh(e);
                    this._elements.push(t) } }, { key: "setCustomElement", value: function(e) { var t = new Fh(e);
                    this._elements.push(t) } }, { key: "setGroupTipElement", value: function(e) { if (e.operatorInfo) { var t = e.operatorInfo,
                            n = t.nick,
                            r = t.avatar;
                        fa(n) && (this.nick = n), fa(r) && (this.avatar = r) } var o = new pp(e);
                    this._elements.push(o) } }, { key: "setGroupSystemNoticeElement", value: function(e) { var t = new hp(e);
                    this._elements.push(t) } }, { key: "setFaceElement", value: function(e) { var t = new up(e);
                    this._elements.push(t) } }, { key: "setIsRead", value: function(e) { this.isRead = e } }, { key: "_computePriority", value: function(e) { if (ma(e)) return pn.MSG_PRIORITY_NORMAL; if (fa(e) && -1 !== Object.values(Hh).indexOf(e)) return e; if (pa(e)) { var t = "" + e; if (-1 !== Object.keys(Hh).indexOf(t)) return Hh[t] } return pn.MSG_PRIORITY_NORMAL } }, { key: "elements", get: function() { return ca.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"), this._elements } }]), e }(),
        Kh = function(e) { return !!e && (!!(function(e) { return fa(e) && e.slice(0, 3) === pn.CONV_C2C }(e) || function(e) { return fa(e) && e.slice(0, 5) === pn.CONV_GROUP }(e) || Ua(e)) || (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：\n  C2C + userID（单聊）\n  GROUP + groupID（群聊）\n  @TIM#SYSTEM（系统通知会话）")), !1)) },
        $h = { login: { userID: { type: "String", required: !0 }, userSig: { type: "String", required: !0 } }, addToBlacklist: { userIDList: { type: "Array", required: !0 } }, mutilParam: [{ name: "paramName", type: "Number", required: !0 }, { name: "paramName", type: "String", required: !0 }], on: [{ name: "eventName", type: "String", validator: function(e) { return "string" == typeof e && 0 !== e.length || (console.warn("on 接口的 eventName 参数必须是 String 类型，且不能为空。"), !1) } }, { name: "handler", type: "Function", validator: function(e) { return "function" != typeof e ? (console.warn("on 接口的 handler 参数必须是 Function 类型。"), !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), !0) } }], once: [{ name: "eventName", type: "String", validator: function(e) { return "string" == typeof e && 0 !== e.length || (console.warn("once 接口的 eventName 参数必须是 String 类型，且不能为空。"), !1) } }, { name: "handler", type: "Function", validator: function(e) { return "function" != typeof e ? (console.warn("once 接口的 handler 参数必须是 Function 类型。"), !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !0) } }], off: [{ name: "eventName", type: "String", validator: function(e) { return "string" == typeof e && 0 !== e.length || (console.warn("off 接口的 eventName 参数必须是 String 类型，且不能为空。"), !1) } }, { name: "handler", type: "Function", validator: function(e) { return "function" != typeof e ? (console.warn("off 接口的 handler 参数必须是 Function 类型。"), !1) : ("" === e.name && console.warn("off 接口的 handler 参数为匿名函数，无法取消订阅。"), !0) } }], sendMessage: [{ name: "message", type: "Object", required: !0 }], getMessageList: { conversationID: { type: "String", required: !0, validator: function(e) { return Kh(e) } }, nextReqMessageID: { type: "String" }, count: { type: "Number", validator: function(e) { return !(!ma(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn("getMessageList 接口的 count 参数必须为正整数"), !1) } } }, setMessageRead: { conversationID: { type: "String", required: !0, validator: function(e) { return Kh(e) } } }, getConversationProfile: [{ name: "conversationID", type: "String", required: !0, validator: function(e) { return Kh(e) } }], deleteConversation: [{ name: "conversationID", type: "String", required: !0, validator: function(e) { return Kh(e) } }], getGroupList: { groupProfileFilter: { type: "Array" } }, getGroupProfile: { groupID: { type: "String", required: !0 }, groupCustomFieldFilter: { type: "Array" }, memberCustomFieldFilter: { type: "Array" } }, getGroupProfileAdvance: { groupIDList: { type: "Array", required: !0 } }, createGroup: { name: { type: "String", required: !0 } }, joinGroup: { groupID: { type: "String", required: !0 }, type: { type: "String" }, applyMessage: { type: "String" } }, quitGroup: [{ name: "groupID", type: "String", required: !0 }], handleApplication: { message: { type: "Object", required: !0 }, handleAction: { type: "String", required: !0 }, handleMessage: { type: "String" } }, changeGroupOwner: { groupID: { type: "String", required: !0 }, newOwnerID: { type: "String", required: !0 } }, updateGroupProfile: { groupID: { type: "String", required: !0 }, muteAllMembers: { type: "Boolean" } }, dismissGroup: [{ name: "groupID", type: "String", required: !0 }], searchGroupByID: [{ name: "groupID", type: "String", required: !0 }], getGroupMemberList: { groupID: { type: "String", required: !0 }, offset: { type: "Number" }, count: { type: "Number" } }, getGroupMemberProfile: { groupID: { type: "String", required: !0 }, userIDList: { type: "Array", required: !0 }, memberCustomFieldFilter: { type: "Array" } }, addGroupMemeber: { groupID: { type: "String", required: !0 }, userIDList: { type: "Array", required: !0 } }, setGroupMemberRole: { groupID: { type: "String", required: !0 }, userID: { type: "String", required: !0 }, role: { type: "String", required: !0 } }, setGroupMemberMuteTime: { groupID: { type: "String", required: !0 }, userID: { type: "String", required: !0 }, muteTime: { type: "Number", validator: function(e) { return e >= 0 } } }, setGroupMemberNameCard: { groupID: { type: "String", required: !0 }, userID: { type: "String" }, nameCard: { type: "String", required: !0, validator: function(e) { return !0 !== /^\s+$/.test(e) } } }, setMessageRemindType: { groupID: { type: "String", required: !0 }, messageRemindType: { type: "String", required: !0 } }, setGroupMemberCustomField: { groupID: { type: "String", required: !0 }, userID: { type: "String" }, memberCustomField: { type: "Array", required: !0 } }, deleteGroupMember: { groupID: { type: "String", required: !0 } }, createTextMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { return fa(e.text) ? 0 !== e.text.length || (console.warn("createTextMessage 消息内容不能为空。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"), !1) : (console.warn("createTextMessage payload.text 类型必须为字符串。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"), !1) } } }, createCustomMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { return e.data && !fa(e.data) ? (console.warn("createCustomMessage payload.data 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"), !1) : e.description && !fa(e.description) ? (console.warn("createCustomMessage payload.description 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"), !1) : !(e.extension && !fa(e.extension)) || (console.warn("createCustomMessage payload.extension 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"), !1) } } }, createImageMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { if (ma(e.file)) return console.warn("createImageMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), !1; if (bs) { if (!(e.file instanceof HTMLInputElement || la(e.file))) return console.warn("createImageMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn("createImageMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), !1 } return !0 }, onProgress: { type: "Function", required: !1, validator: function(e) { return ma(e) && console.warn("createImageMessage 没有 onProgress 回调，您将无法获取图片上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"), !0 } } } }, createAudioMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0 }, onProgress: { type: "Function", required: !1, validator: function(e) { return ma(e) && console.warn("createAudioMessage 没有 onProgress 回调，您将无法获取音频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createAudioMessage"), !0 } } }, createVideoMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { if (ma(e.file)) return console.warn("createVideoMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"), !1; if (bs) { if (!(e.file instanceof HTMLInputElement || la(e.file))) return console.warn("createVideoMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn("createVideoMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"), !1 } return !0 } }, onProgress: { type: "Function", required: !1, validator: function(e) { return ma(e) && console.warn("createVideoMessage 没有 onProgress 回调，您将无法获取视频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"), !0 } } }, createFaceMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { return !!da(e) && (pa(e.index) ? !!fa(e.data) || (console.warn("createFaceMessage payload.data 类型必须为 String！"), !1) : (console.warn("createFaceMessage payload.index 类型必须为 Number！"), !1)) } } }, createFileMessage: { to: { type: "String", required: !0 }, conversationType: { type: "String", required: !0 }, payload: { type: "Object", required: !0, validator: function(e) { if (ma(e.file)) return console.warn("createFileMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), !1; if (bs) { if (!(e.file instanceof HTMLInputElement || la(e.file))) return console.warn("createFileMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), !1; if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn("createFileMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), !1 } return !0 } }, onProgress: { type: "Function", required: !1, validator: function(e) { return ma(e) && console.warn("createFileMessage 没有 onProgress 回调，您将无法获取文件上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"), !0 } } }, revokeMessage: [{ name: "message", type: "Object", required: !0, validator: function(e) { return e instanceof Vh ? e.conversationType === pn.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1) : (console.warn("revokeMessage 参数 message 必须为 Message(https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html) 实例。"), !1) } }], getUserProfile: { userIDList: { type: "Array", validator: function(e) { return ga(e) ? (0 === e.length && console.warn("getUserProfile userIDList 不能为空数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"), !0) : (console.warn("getUserProfile userIDList 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"), !1) } } }, updateMyProfile: { profileCustomField: { type: "Array", validator: function(e) { return !!ma(e) || (!!ga(e) || (console.warn("updateMyProfile profileCustomField 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile"), !1)) } } } },
        Yh = { login: "login", logout: "logout", on: "on", once: "once", off: "off", setLogLevel: "setLogLevel", downloadLog: "downloadLog", registerPlugin: "registerPlugin", destroy: "destroy", createTextMessage: "createTextMessage", createImageMessage: "createImageMessage", createAudioMessage: "createAudioMessage", createVideoMessage: "createVideoMessage", createCustomMessage: "createCustomMessage", createFaceMessage: "createFaceMessage", createFileMessage: "createFileMessage", sendMessage: "sendMessage", resendMessage: "resendMessage", getMessageList: "getMessageList", setMessageRead: "setMessageRead", revokeMessage: "revokeMessage", getConversationList: "getConversationList", getConversationProfile: "getConversationProfile", deleteConversation: "deleteConversation", getGroupList: "getGroupList", getGroupProfile: "getGroupProfile", createGroup: "createGroup", joinGroup: "joinGroup", updateGroupProfile: "updateGroupProfile", quitGroup: "quitGroup", dismissGroup: "dismissGroup", changeGroupOwner: "changeGroupOwner", searchGroupByID: "searchGroupByID", setMessageRemindType: "setMessageRemindType", handleGroupApplication: "handleGroupApplication", getGroupMemberProfile: "getGroupMemberProfile", getGroupMemberList: "getGroupMemberList", addGroupMember: "addGroupMember", deleteGroupMember: "deleteGroupMember", setGroupMemberNameCard: "setGroupMemberNameCard", setGroupMemberMuteTime: "setGroupMemberMuteTime", setGroupMemberRole: "setGroupMemberRole", setGroupMemberCustomField: "setGroupMemberCustomField", getMyProfile: "getMyProfile", getUserProfile: "getUserProfile", updateMyProfile: "updateMyProfile", getBlacklist: "getBlacklist", addToBlacklist: "addToBlacklist", removeFromBlacklist: "removeFromBlacklist", getFriendList: "getFriendList" },
        zh = "1.7.3",
        Wh = "537048168",
        Xh = "10",
        Jh = "protobuf",
        Qh = "json",
        Zh = { HOST: { TYPE: 3, ACCESS_LAYER_TYPES: { SANDBOX: 1, TEST: 2, PRODUCTION: 3 }, CURRENT: { COMMON: "https://webim.tim.qq.com", PIC: "https://pic.tim.qq.com", COS: "https://yun.tim.qq.com" }, PRODUCTION: { COMMON: "https://webim.tim.qq.com", PIC: "https://pic.tim.qq.com", COS: "https://yun.tim.qq.com" }, SANDBOX: { COMMON: "https://events.tim.qq.com", PIC: "https://pic.tim.qq.com", COS: "https://yun.tim.qq.com" }, TEST: { COMMON: "https://test.tim.qq.com", PIC: "https://pic.tim.qq.com", COS: "https://test.tim.qq.com" }, setCurrent: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3; switch (e) {
                        case this.ACCESS_LAYER_TYPES.SANDBOX:
                            this.CURRENT = this.SANDBOX, this.TYPE = this.ACCESS_LAYER_TYPES.SANDBOX; break;
                        case this.ACCESS_LAYER_TYPES.TEST:
                            this.CURRENT = this.TEST, this.TYPE = this.ACCESS_LAYER_TYPES.TEST; break;
                        default:
                            this.CURRENT = this.PRODUCTION, this.TYPE = this.ACCESS_LAYER_TYPES.PRODUCTION } } }, NAME: { OPEN_IM: "openim", GROUP: "group_open_http_svc", FRIEND: "sns", PROFILE: "profile", RECENT_CONTACT: "recentcontact", PIC: "openpic", BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc", BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc", IM_OPEN_STAT: "imopenstat", WEB_IM: "webim", IM_COS_SIGN: "im_cos_sign_svr" }, CMD: { ACCESS_LAYER: "accesslayer", LOGIN: "login", LOGOUT_LONG_POLL: "longpollinglogout", LOGOUT_ALL: "logout", PORTRAIT_GET: "portrait_get_all", PORTRAIT_SET: "portrait_set", GET_LONG_POLL_ID: "getlongpollingid", LONG_POLL: "longpolling", AVCHATROOM_LONG_POLL: "get_msg", FRIEND_ADD: "friend_add", FRIEND_GET_ALL: "friend_get_all", FRIEND_DELETE: "friend_delete", RESPONSE_PENDENCY: "friend_response", GET_PENDENCY: "pendency_get", DELETE_PENDENCY: "pendency_delete", GET_GROUP_PENDENCY: "get_pendency", GET_BLACKLIST: "black_list_get", ADD_BLACKLIST: "black_list_add", DELETE_BLACKLIST: "black_list_delete", CREATE_GROUP: "create_group", GET_JOINED_GROUPS: "get_joined_group_list", SEND_MESSAGE: "sendmsg", REVOKE_C2C_MESSAGE: "msgwithdraw", SEND_GROUP_MESSAGE: "send_group_msg", REVOKE_GROUP_MESSAGE: "group_msg_recall", GET_GROUP_INFO: "get_group_info", GET_GROUP_MEMBER_INFO: "get_specified_group_member_info", GET_GROUP_MEMBER_LIST: "get_group_member_info", QUIT_GROUP: "quit_group", CHANGE_GROUP_OWNER: "change_group_owner", DESTROY_GROUP: "destroy_group", ADD_GROUP_MEMBER: "add_group_member", DELETE_GROUP_MEMBER: "delete_group_member", SEARCH_GROUP_BY_ID: "get_group_public_info", APPLY_JOIN_GROUP: "apply_join_group", HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group", MODIFY_GROUP_INFO: "modify_group_base_info", MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info", DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg", GET_CONVERSATION_LIST: "get", PAGING_GET_CONVERSATION_LIST: "page_get", DELETE_CONVERSATION: "delete", GET_MESSAGES: "getmsg", GET_C2C_ROAM_MESSAGES: "getroammsg", GET_GROUP_ROAM_MESSAGES: "group_msg_get", SET_C2C_MESSAGE_READ: "msgreaded", SET_GROUP_MESSAGE_READ: "msg_read_report", FILE_READ_AND_WRITE_AUTHKEY: "authkey", FILE_UPLOAD: "pic_up", COS_SIGN: "cos", TIM_WEB_REPORT: "tim_web_report", BIG_DATA_HALLWAY_AUTH_KEY: "authkey" }, CHANNEL: { SOCKET: 1, XHR: 2, AUTO: 0 }, NAME_VERSION: { openim: "v4", group_open_http_svc: "v4", sns: "v4", profile: "v4", recentcontact: "v4", openpic: "v4", group_open_http_noauth_svc: "v1", group_open_long_polling_http_noauth_svc: "v1", imopenstat: "v4", im_cos_sign_svr: "v4", webim: "v4" } };
    Zh.HOST.setCurrent(Zh.HOST.ACCESS_LAYER_TYPES.PRODUCTION); var ed = { request: { toAccount: "To_Account", fromAccount: "From_Account", to: "To_Account", from: "From_Account", groupID: "GroupId", avatar: "FaceUrl" }, response: { GroupId: "groupID", Member_Account: "userID", MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", MsgSeq: "sequence", MsgRandom: "random", MsgTimeStamp: "time", MsgContent: "content", MsgBody: "elements", GroupWithdrawInfoArray: "revokedInfos", WithdrawC2cMsgNotify: "c2cMessageRevokedNotify", C2cWithdrawInfoArray: "revokedInfos", MsgRand: "random", MsgType: "type", MsgShow: "messageShow", NextMsgSeq: "nextMessageSeq", FaceUrl: "avatar", ProfileDataMod: "profileModify", Profile_Account: "userID", ValueBytes: "value", ValueNum: "value", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation", Operator_Account: "operatorID", OpType: "operationType", ReportType: "operationType", UserId: "userID", User_Account: "userID", List_Account: "userIDList", MsgOperatorMemberExtraInfo: "operatorInfo", MsgMemberExtraInfo: "memberInfoList", ImageUrl: "avatar", NickName: "nick", MsgGroupNewInfo: "newGroupProfile", MsgAppDefinedData: "groupCustomField", Owner_Account: "ownerID", GroupName: "name", GroupFaceUrl: "avatar", GroupIntroduction: "introduction", GroupNotification: "notification", GroupApplyJoinOption: "joinOption", MsgKey: "messageKey", GroupInfo: "groupProfile", ShutupTime: "muteTime", Desc: "description", Ext: "extension" }, ignoreKeyWord: ["C2C", "ID", "USP"] },
        td = "_contextWasUpdated",
        nd = "_contextWasReset",
        rd = "_a2KeyAndTinyIDUpdated",
        od = "_specifiedConfigUpdated",
        id = "_noticeIsSynchronizing",
        sd = "_noticeIsSynchronized",
        ad = "_messageSent",
        ud = "_syncMessageProcessing",
        cd = "_syncMessageFinished",
        ld = "_receiveInstantMessage",
        pd = "_receiveGroupInstantMessage",
        fd = "_receveGroupSystemNotice",
        hd = "_messageRevoked",
        dd = "_longPollGetIDFailed",
        gd = "_longPollRequestFailed",
        md = "_longPollResponseOK",
        vd = "_longPollFastStart",
        yd = "_longPollSlowStart",
        _d = "_longPollKickedOut",
        Cd = "_longPollMitipuleDeviceKickedOut",
        Id = "_longPollGetNewC2CNotice",
        Md = "_longPollGetNewGroupMessages",
        Sd = "_longPollGetNewGroupTips",
        Td = "_longPollGetNewGroupNotice",
        Ed = "_longPollGetNewFriendMessages",
        Dd = "_longPollProfileModified",
        kd = "_longPollNoticeReceiveSystemOrders",
        wd = " _longpollGroupMessageRevoked",
        Ad = "_longpollC2CMessageRevoked",
        bd = "_avlongPollRequestFailed",
        Rd = "_avlongPollResponseOK",
        Od = "_onGroupListUpdated",
        Ld = "_loginSuccess",
        Nd = "_signLogoutExcuting",
        Pd = "_logoutSuccess",
        Gd = "_a2keyExpired",
        xd = "_errorHasBeenDetected",
        Ud = "_onConversationListUpdated",
        qd = "_onConversationListProfileUpdated",
        Fd = "_conversationDeleted",
        jd = "onProfileUpdated",
        Bd = "joinAVChatRoomSuccess",
        Hd = "joinAVChatRoomSuccessNoAuth",
        Vd = "_sdkStateReady",
        Kd = Ve.filter,
        $d = yn("filter"),
        Yd = We("filter");
    Ae({ target: "Array", proto: !0, forced: !$d || !Yd }, { filter: function(e) { return Kd(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), Ae({ target: "Object", stat: !0, forced: Object.assign !== Bu }, { assign: Bu }); var zd = Kr.trim;

    function Wd(e, t) { if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
        t = Object.assign({ pascalCase: !1 }, t); var n; return 0 === (e = Array.isArray(e) ? e.map((function(e) { return e.trim() })).filter((function(e) { return e.length })).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = Xd(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) { return t.toUpperCase() })).replace(/\d+(\w|$)/g, (function(e) { return e.toUpperCase() })), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n) }
    Ae({ target: "String", proto: !0, forced: function(e) { return o((function() { return !!Fr[e]() || "​᠎" != "​᠎" [e]() || Fr[e].name !== e })) }("trim") }, { trim: function() { return zd(this) } }); var Xd = function(e) { for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) { var i = e[o];
            t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o), t = !1, r = n, n = !0, o++) : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), r = n, n = !1, t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, r = n, n = i.toUpperCase() === i && i.toLowerCase() !== i) } return e };

    function Jd(e, t, n) { var r = [],
            o = 0,
            i = function e(t, n) { if (++o > 10) return o--, t; if (ga(t)) { var i = t.map((function(t) { return ha(t) ? e(t, n) : t })); return o--, i } if (ha(t)) { var s = (a = t, u = function(e, t) { if (!Ia(t)) return !1; if ((s = t) !== Wd(s)) { for (var o = !0, i = 0; i < ed.ignoreKeyWord.length; i++)
                                if (t.includes(ed.ignoreKeyWord[i])) { o = !1; break }
                            o && r.push(t) } var s; return ma(n[t]) ? function(e) { return "OPPOChannelID" === e ? e : e[0].toUpperCase() + Wd(e).slice(1) }(t) : n[t] }, c = Object.create(null), Object.keys(a).forEach((function(e) { var t = u(a[e], e);
                        t && (c[t] = a[e]) })), c); return s = qa(s, (function(t, r) { return ga(t) || ha(t) ? e(t, n) : t })), o--, s } var a, u, c }(e, t = On({}, ed.request, {}, t)); return r.length > 0 && n.innerEmitter.emit(xd, { code: Tf, message: Oh }), i }

    function Qd(e, t) { if (t = On({}, ed.response, {}, t), ga(e)) return e.map((function(e) { return ha(e) ? Qd(e, t) : e })); if (ha(e)) { var n = (r = e, o = function(e, n) { return ma(t[n]) ? Wd(n) : t[n] }, i = {}, Object.keys(r).forEach((function(e) { i[o(r[e], e)] = r[e] })), i); return n = qa(n, (function(e) { return ga(e) || ha(e) ? Qd(e, t) : e })) } var r, o, i } var Zd = function() {
            function e(t) { var n = this;
                kn(this, e), this.url = "", this.requestData = null, this.method = t.method || "POST", this.callback = function(e) { return Qd(e = t.decode(e), n._getResponseMap(t)) }, this._initializeServerMap(), this._initializeURL(t), this._initializeRequestData(t) } return An(e, [{ key: "_initializeServerMap", value: function() { this._serverMap = Object.create(null); var e = ""; for (var t in Zh.NAME)
                        if (Object.prototype.hasOwnProperty.call(Zh.NAME, t)) switch (e = Zh.NAME[t]) {
                            case Zh.NAME.PIC:
                                this._serverMap[e] = Zh.HOST.CURRENT.PIC; break;
                            case Zh.NAME.IM_COS_SIGN:
                                this._serverMap[e] = Zh.HOST.CURRENT.COS; break;
                            default:
                                this._serverMap[e] = Zh.HOST.CURRENT.COMMON } } }, { key: "_getHost", value: function(e) { if (void 0 !== this._serverMap[e]) return this._serverMap[e]; throw new Ip({ code: If, message: Ah }) } }, { key: "_initializeURL", value: function(e) { var t = e.serverName,
                        n = e.cmd,
                        r = this._getHost(t),
                        o = "".concat(r, "/").concat(Zh.NAME_VERSION[t], "/").concat(t, "/").concat(n);
                    o += "?".concat(this._getQueryString(e.queryString)), this.url = o } }, { key: "getUrl", value: function() { return this.url.replace(/&reqtime=(\d+)/, "&reqtime=".concat(Math.ceil(+new Date / 1e3))) } }, { key: "_initializeRequestData", value: function(e) { var t, n = e.requestData;
                    t = this._requestDataCleaner(n), this.requestData = e.encode(t) } }, { key: "_requestDataCleaner", value: function(e) { var t = Array.isArray(e) ? [] : Object.create(null); for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && Ia(n) && null !== e[n] && ("object" !== Dn(e[n]) ? t[n] = e[n] : t[n] = this._requestDataCleaner.bind(this)(e[n])); return t } }, { key: "_getQueryString", value: function(e) { var t = []; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && ("function" != typeof e[n] ? t.push("".concat(n, "=").concat(e[n])) : t.push("".concat(n, "=").concat(e[n]()))); return t.join("&") } }, { key: "_getResponseMap", value: function(e) { if (e.keyMaps && e.keyMaps.response && Object.keys(e.keyMaps.response).length > 0) return e.keyMaps.response } }]), e }(),
        eg = [].slice,
        tg = /MSIE .\./.test(fn),
        ng = function(e) { return function(t, n) { var r = arguments.length > 2,
                    o = r ? eg.call(arguments, 2) : void 0; return e(r ? function() {
                    ("function" == typeof t ? t : Function(t)).apply(this, o) } : t, n) } };

    function rg(e) { this.mixin(e) }
    Ae({ global: !0, bind: !0, forced: tg }, { setTimeout: ng(r.setTimeout), setInterval: ng(r.setInterval) }), rg.mixin = function(e) { var t = e.prototype || e;
        t._isReady = !1, t.ready = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (e) return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e)) }, t.triggerReady = function() { var e = this;
            this._isReady = !0, setTimeout((function() { var t = e._readyQueue;
                e._readyQueue = [], t && t.length > 0 && t.forEach((function(e) { e.call(this) }), e) }), 1) }, t.resetReady = function() { this._isReady = !1, this._readyQueue = [] }, t.isReady = function() { return this._isReady } }; var og = function() {
            function e(t) { kn(this, e), rg.mixin(this), this.tim = t } return An(e, [{ key: "isLoggedIn", value: function() { return this.tim.context.login === Nu.IS_LOGIN || !!this.tim.context.a2Key } }, { key: "createTransportCapsule", value: function(e) { var t = this.tim.packageConfig.get(e); return t ? new Zd(t) : null } }, { key: "request", value: function(e) { var t = this.createTransportCapsule(e); return t || ca.error("unknown transport capsule, please check!", e), this.tim.connectionController.request(t) } }, { key: "emitInnerEvent", value: function(e, t) { this.tim.innerEmitter.emit(e, t) } }, { key: "emitOuterEvent", value: function(e, t) { this.tim.outerEmitter.emit(e, t) } }, { key: "reset", value: function() { ca.warn(["method: IMController.reset() method must be implemented"].join()) } }, { key: "probeNetwork", value: function() { return this.tim.netMonitor.probe() } }, { key: "getNetworkType", value: function() { return this.tim.netMonitor.getNetworkType() } }, { key: "getPlatform", value: function() { var e = "web"; return Bs ? e = "wechat" : Rs && (e = "wxmp"), e } }]), e }(),
        ig = function() {
            function e(t, n) { kn(this, e), this.data = t, this._innerEmitter = n, this.defaultData = {}, Object.assign(this.defaultData, t), this.initGetterAndSetter() } return An(e, [{ key: "initGetterAndSetter", value: function() { var e = this,
                        t = function(t) { Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function() { return e.data[t] }, set: function(n) { e.data[t] !== n && (e.data[t] = n, e.onChange.bind(e)(t, n)) } }) }; for (var n in e.data) Object.prototype.hasOwnProperty.call(e.data, n) && t(n) } }, { key: "onChange", value: function(e, t) { this._innerEmitter.emit(td, { key: e, value: t }) } }, { key: "reset", value: function() { for (var e in ca.log("Context.reset"), this.data) Object.prototype.hasOwnProperty.call(this.data, e) && (this.data[e] = this.defaultData.hasOwnProperty(e) ? this.defaultData[e] : null) } }]), e }(),
        sg = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r;
                kn(this, n); var o = (r = t.call(this, e)).tim.loginInfo; return r._context = new ig({ login: Nu.IS_NOT_LOGIN, SDKAppID: o.SDKAppID, appIDAt3rd: null, accountType: o.accountType, identifier: o.identifier, tinyID: null, identifierNick: o.identifierNick, userSig: o.userSig, a2Key: null, contentType: "json", apn: 1 }, r.tim.innerEmitter), r._initListener(), r } return An(n, [{ key: "reset", value: function() { this._context.reset(), this.emitInnerEvent(nd) } }, { key: "_initListener", value: function() { this.tim.innerEmitter.on(td, this._onContextMemberChange, this), this.tim.innerEmitter.on(Ld, this._updateA2KeyAndTinyID, this) } }, { key: "_updateA2KeyAndTinyID", value: function(e) { var t = e.data,
                        n = t.a2Key,
                        r = t.tinyID;
                    this._context.a2Key = n, this._context.tinyID = r, this.emitInnerEvent(rd), this.triggerReady() } }, { key: "getContext", value: function() { return this._context } }, { key: "_onContextMemberChange", value: function(e) { var t = e.data,
                        n = t.key,
                        r = t.value;
                    ("tinyID" === n || "a2Key" === n) && (r.length <= 0 ? this._context.login = Nu.IS_NOT_LOGIN : this._context.login = null !== this._context.a2Key ? Nu.IS_LOGIN : Nu.IS_NOT_LOGIN) } }]), n }(og),
        ag = function e(t) { kn(this, e), this.code = 0, this.data = t || {} },
        ug = null,
        cg = function(e) { ug = e },
        lg = function(e) { return e instanceof ag ? (ca.warn("IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！"), Promise.resolve(e)) : Promise.resolve(new ag(e)) },
        pg = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (e instanceof Ip) return t && null !== ug && ug.emit(ln.ERROR, e), Promise.reject(e); if (e instanceof Error) { var n = new Ip({ code: kf, message: e.message }); return t && null !== ug && ug.emit(ln.ERROR, n), Promise.reject(n) } if (ma(e) || ma(e.code) || ma(e.message)) ca.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
            else { if (pa(e.code) && fa(e.message)) { var r = new Ip(e); return t && null !== ug && ug.emit(ln.ERROR, r), Promise.reject(r) }
                ca.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!") } },
        fg = "sdkReady",
        hg = "login",
        dg = "longpolling",
        gg = "longpollingAV",
        mg = "sendMessage",
        vg = "messageReceived",
        yg = "messageReceivedAV",
        _g = "initConversationList",
        Cg = "initGroupList",
        Ig = "upload",
        Mg = function() {
            function e() { kn(this, e), this.SDKAppID = "", this.version = "", this.tinyID = "", this.userID = "", this.platform = "", this.method = "", this.time = "", this.startts = 0, this.endts = 0, this.timespan = 0, this.codeint = 0, this.message = "", this.text = "", this.msgType = "", this.networkType = "", this.platform = "", this._sentFlag = !1 } return An(e, [{ key: "setCommonInfo", value: function(e, t, n, r, o) { this.SDKAppID = "".concat(e), this.version = "".concat(t), this.tinyID = n, this.userID = r, this.platform = o, this.time = Da(), this.startts && this.endts && !this.timespan && (this.timespan = Math.abs(this.endts - this.startts)) } }, { key: "setMethod", value: function(e) { return this.method = e, this } }, { key: "setStart", value: function() { this.startts = Date.now() } }, { key: "setEnd", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._sentFlag || (this.endts = Date.now(), t ? (this._sentFlag = !0, this._eventStatController.pushIn(this)) : setTimeout((function() { e._sentFlag = !0, e._eventStatController.pushIn(e) }), 0)) } }, { key: "setError", value: function(e, t, n) { return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), e.message && this.setMessage(e.message)) : (this.setCode(Sf), this.setMessage(Rh))), this) : (ca.warn("SSOLogData.setError value not instanceof Error, please check!"), this) } }, { key: "setCode", value: function(e) { return ma(e) || this._sentFlag || ("ECONNABORTED" === e && (this.codeint = 103), pa(e) ? this.codeint = e : ca.warn("SSOLogData.setCode value not a number, please check!", e, Dn(e))), this } }, { key: "setMessage", value: function(e) { return ma(e) || this._sentFlag ? this : fa(e) ? (this.message = e, this) : this } }, { key: "setText", value: function(e) { return pa(e) ? this.text = e.toString() : fa(e) && (this.text = e), this } }, { key: "setMessageType", value: function(e) { return this.msgType = e, this } }, { key: "setNetworkType", value: function(e) { return ma(e) ? ca.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = e, this } }], [{ key: "bindController", value: function(t) { e.prototype._eventStatController = t } }]), e }(),
        Sg = "sdkConstruct",
        Tg = "sdkReady",
        Eg = "accessLayer",
        Dg = "login",
        kg = "logout",
        wg = "kickedOut",
        Ag = "registerPlugin",
        bg = "getCosAuthKey",
        Rg = "upload",
        Og = "sendMessage",
        Lg = "getC2CRoamingMessages",
        Ng = "getGroupRoamingMessages",
        Pg = "revokeMessage",
        Gg = "setC2CMessageRead",
        xg = "setGroupMessageRead",
        Ug = "getConversationList",
        qg = "getConversationProfile",
        Fg = "deleteConversation",
        jg = "getConversationListInStorage",
        Bg = "syncConversationList",
        Hg = "createGroup",
        Vg = "applyJoinGroup",
        Kg = "quitGroup",
        $g = "searchGroupByID",
        Yg = "changeGroupOwner",
        zg = "handleGroupApplication",
        Wg = "setMessageRemindType",
        Xg = "dismissGroup",
        Jg = "updateGroupProfile",
        Qg = "getGroupList",
        Zg = "getGroupProfile",
        em = "getGroupListInStorage",
        tm = "getGroupLastSequence",
        nm = "getGroupMemberList",
        rm = "getGroupMemberProfile",
        om = "addGroupMember",
        im = "deleteGroupMember",
        sm = "setGroupMemberMuteTime",
        am = "setGroupMemberNameCard",
        um = "setGroupMemberRole",
        cm = "setGroupMemberCustomField",
        lm = "getLongPollID",
        pm = "longPollingError",
        fm = "networkJitter",
        hm = "fastStart",
        dm = "slowStart",
        gm = "messageLoss",
        mm = "getUserProfile",
        vm = "updateMyProfile",
        ym = "getBlacklist",
        _m = "addToBlacklist",
        Cm = "removeFromBlacklist",
        Im = "mpHideToShow",
        Mm = "callbackFunctionError",
        Sm = "exceptionError",
        Tm = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e))._initializeListener(), r } return An(n, [{ key: "login", value: function(e) { if (this.isLoggedIn()) { var t = "您已经登录账号".concat(e.identifier, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。"); return ca.warn(t), lg({ actionStatus: "OK", errorCode: 0, errorInfo: t, repeatLogin: !0 }) }
                    ca.log("SignController.login userID=", e.identifier), ca.time(hg); var n = this._checkLoginInfo(e); return ja(n) ? (this.tim.context.identifier = e.identifier, this.tim.context.userSig = e.userSig, this.tim.context.identifier && this.tim.context.userSig ? this._accessLayer() : void 0) : pg(n) } }, { key: "_isLoginCurrentUser", value: function(e) { return this.tim.context.identifier === e } }, { key: "_initializeListener", value: function() { var e = this.tim.innerEmitter;
                    e.on(_d, this._onMultipleAccountKickedOut, this), e.on(Cd, this._onMultipleDeviceKickedOut, this), e.on(Gd, this._onUserSigExpired, this) } }, { key: "_accessLayer", value: function() { var e = this,
                        t = new Mg; return t.setMethod(Eg).setStart(), ca.log("SignController._accessLayer."), this.request({ name: "accessLayer", action: "query" }).then((function(n) { return t.setCode(0).setNetworkType(e.getNetworkType()).setText(n.data.webImAccessLayer).setEnd(), ca.log("SignController._accessLayer ok. webImAccessLayer=".concat(n.data.webImAccessLayer)), 1 === n.data.webImAccessLayer && Zh.HOST.setCurrent(n.data.webImAccessLayer), e._login() })).catch((function(n) { return e.probeNetwork().then((function(r) { var o = Bn(r, 2),
                                i = o[0],
                                s = o[1];
                            t.setError(n, i, s).setEnd(!0), e.tim.eventStatController.reportAtOnce() })), ca.error("SignController._accessLayer failed. error:".concat(n)), pg(n) })) } }, { key: "_login", value: function() { var e = this,
                        t = new Mg; return t.setMethod(Dg).setStart(), this.request({ name: "login", action: "query" }).then((function(n) { var r = null; if (!n.data.tinyID) throw r = new Ip({ code: Dp, message: xf }), t.setError(r, !0, e.getNetworkType()).setEnd(), r; if (!n.data.a2Key) throw r = new Ip({ code: kp, message: Uf }), t.setError(r, !0, e.getNetworkType()).setEnd(), r; return t.setCode(0).setNetworkType(e.getNetworkType()).setText("".concat(e.tim.loginInfo.identifier)).setEnd(), ca.log("SignController.login ok. userID=".concat(e.tim.loginInfo.identifier, " loginCost=").concat(ca.timeEnd(hg), "ms")), e.emitInnerEvent(Ld, { a2Key: n.data.a2Key, tinyID: n.data.tinyID }), lg(n.data) })).catch((function(n) { return e.probeNetwork().then((function(e) { var r = Bn(e, 2),
                                o = r[0],
                                i = r[1];
                            t.setError(n, o, i).setEnd(!0) })), ca.error("SignController.login failed. error:".concat(n)), pg(n) })) } }, { key: "logout", value: function() { var e = new Mg; return e.setMethod(kg).setStart(), e.setCode(0).setNetworkType(this.getNetworkType()).setText("userID=".concat(this.tim.loginInfo.identifier, " type=").concat("longPollLogout")).setEnd(!0), ca.info("SignController.logout"), this.emitInnerEvent(Nd), this._logout(np).then(this._emitLogoutSuccess.bind(this)).catch(this._emitLogoutSuccess.bind(this)) } }, { key: "_logout", value: function(e) { var t = this.tim.notificationController,
                        n = e === tp ? "logout" : "longPollLogout",
                        r = e === tp ? { name: n, action: "query" } : { name: n, action: "query", param: { longPollID: t.getLongPollID() } }; return this.request(r).catch((function(e) { return ca.error("SignController._logout error:", e), pg(e) })) } }, { key: "_checkLoginInfo", value: function(e) { var t = 0,
                        n = ""; return null === e.SDKAppID ? (t = Mp, n = Lf) : null === e.accountType ? (t = Sp, n = Nf) : null === e.identifier ? (t = Tp, n = Pf) : null === e.userSig && (t = Ep, n = Gf), ja(t) || ja(n) ? {} : { code: t, message: n } } }, { key: "_emitLogoutSuccess", value: function() { return this.emitInnerEvent(Pd), lg({}) } }, { key: "_onMultipleAccountKickedOut", value: function() { var e = this,
                        t = new Mg;
                    t.setMethod(wg).setStart(), t.setCode(0).setNetworkType(this.getNetworkType()).setText(pn.KICKED_OUT_MULT_ACCOUNT).setEnd(!0), ca.warn("SignController._onMultipleAccountKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)), this.tim.logout().then((function() { e.emitOuterEvent(ln.KICKED_OUT, { type: pn.KICKED_OUT_MULT_ACCOUNT }) })) } }, { key: "_onMultipleDeviceKickedOut", value: function() { var e = this,
                        t = new Mg;
                    t.setMethod(wg).setStart(), t.setCode(0).setNetworkType(this.getNetworkType()).setText(pn.KICKED_OUT_MULT_DEVICE).setEnd(!0), ca.warn("SignController._onMultipleDeviceKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)), this.tim.logout().then((function() { e.emitOuterEvent(ln.KICKED_OUT, { type: pn.KICKED_OUT_MULT_DEVICE }) })) } }, { key: "_onUserSigExpired", value: function() { var e = new Mg;
                    e.setMethod(wg).setStart(), e.setCode(0).setNetworkType(this.getNetworkType()).setText(pn.KICKED_OUT_USERSIG_EXPIRED).setEnd(!0), ca.warn("SignController._onUserSigExpired: userSig 签名过期被踢下线"), this.emitOuterEvent(ln.KICKED_OUT, { type: pn.KICKED_OUT_USERSIG_EXPIRED }), this.tim.resetSDK() } }, { key: "reset", value: function() { ca.info("SignController.reset") } }]), n }(og),
        Em = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } },
        Dm = Object.prototype.toString;

    function km(e) { return "[object Array]" === Dm.call(e) }

    function wm(e) { return void 0 === e }

    function Am(e) { return null !== e && "object" == typeof e }

    function bm(e) { return "[object Function]" === Dm.call(e) }

    function Rm(e, t) { if (null != e)
            if ("object" != typeof e && (e = [e]), km(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e) } var Om = { isArray: km, isArrayBuffer: function(e) { return "[object ArrayBuffer]" === Dm.call(e) }, isBuffer: function(e) { return null !== e && !wm(e) && null !== e.constructor && !wm(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }, isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData }, isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }, isString: function(e) { return "string" == typeof e }, isNumber: function(e) { return "number" == typeof e }, isObject: Am, isUndefined: wm, isDate: function(e) { return "[object Date]" === Dm.call(e) }, isFile: function(e) { return "[object File]" === Dm.call(e) }, isBlob: function(e) { return "[object Blob]" === Dm.call(e) }, isFunction: bm, isStream: function(e) { return Am(e) && bm(e.pipe) }, isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }, forEach: Rm, merge: function e() { var t = {};

            function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n } for (var r = 0, o = arguments.length; r < o; r++) Rm(arguments[r], n); return t }, deepMerge: function e() { var t = {};

            function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n } for (var r = 0, o = arguments.length; r < o; r++) Rm(arguments[r], n); return t }, extend: function(e, t, n) { return Rm(t, (function(t, r) { e[r] = n && "function" == typeof t ? Em(t, n) : t })), e }, trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") } };

    function Lm(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var Nm = function(e, t, n) { if (!t) return e; var r; if (n) r = n(t);
        else if (Om.isURLSearchParams(t)) r = t.toString();
        else { var o = [];
            Om.forEach(t, (function(e, t) { null != e && (Om.isArray(e) ? t += "[]" : e = [e], Om.forEach(e, (function(e) { Om.isDate(e) ? e = e.toISOString() : Om.isObject(e) && (e = JSON.stringify(e)), o.push(Lm(t) + "=" + Lm(e)) }))) })), r = o.join("&") } if (r) { var i = e.indexOf("#"); - 1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + r } return e };

    function Pm() { this.handlers = [] }
    Pm.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, Pm.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, Pm.prototype.forEach = function(e) { Om.forEach(this.handlers, (function(t) { null !== t && e(t) })) }; var Gm = Pm,
        xm = function(e, t, n) { return Om.forEach(n, (function(n) { e = n(e, t) })), e },
        Um = function(e) { return !(!e || !e.__CANCEL__) };

    function qm() { throw new Error("setTimeout has not been defined") }

    function Fm() { throw new Error("clearTimeout has not been defined") } var jm = qm,
        Bm = Fm;

    function Hm(e) { if (jm === setTimeout) return setTimeout(e, 0); if ((jm === qm || !jm) && setTimeout) return jm = setTimeout, setTimeout(e, 0); try { return jm(e, 0) } catch (t) { try { return jm.call(null, e, 0) } catch (t) { return jm.call(this, e, 0) } } } "function" == typeof ta.setTimeout && (jm = setTimeout), "function" == typeof ta.clearTimeout && (Bm = clearTimeout); var Vm, Km = [],
        $m = !1,
        Ym = -1;

    function zm() { $m && Vm && ($m = !1, Vm.length ? Km = Vm.concat(Km) : Ym = -1, Km.length && Wm()) }

    function Wm() { if (!$m) { var e = Hm(zm);
            $m = !0; for (var t = Km.length; t;) { for (Vm = Km, Km = []; ++Ym < t;) Vm && Vm[Ym].run();
                Ym = -1, t = Km.length }
            Vm = null, $m = !1,
                function(e) { if (Bm === clearTimeout) return clearTimeout(e); if ((Bm === Fm || !Bm) && clearTimeout) return Bm = clearTimeout, clearTimeout(e); try { Bm(e) } catch (t) { try { return Bm.call(null, e) } catch (t) { return Bm.call(this, e) } } }(e) } }

    function Xm(e, t) { this.fun = e, this.array = t }
    Xm.prototype.run = function() { this.fun.apply(null, this.array) };

    function Jm() {} var Qm = Jm,
        Zm = Jm,
        ev = Jm,
        tv = Jm,
        nv = Jm,
        rv = Jm,
        ov = Jm; var iv = ta.performance || {},
        sv = iv.now || iv.mozNow || iv.msNow || iv.oNow || iv.webkitNow || function() { return (new Date).getTime() }; var av = new Date; var uv = { nextTick: function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                Km.push(new Xm(e, t)), 1 !== Km.length || $m || Hm(Wm) }, title: "browser", browser: !0, env: {}, argv: [], version: "", versions: {}, on: Qm, addListener: Zm, once: ev, off: tv, removeListener: nv, removeAllListeners: rv, emit: ov, binding: function(e) { throw new Error("process.binding is not supported") }, cwd: function() { return "/" }, chdir: function(e) { throw new Error("process.chdir is not supported") }, umask: function() { return 0 }, hrtime: function(e) { var t = .001 * sv.call(iv),
                    n = Math.floor(t),
                    r = Math.floor(t % 1 * 1e9); return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r] }, platform: "browser", release: {}, config: {}, uptime: function() { return (new Date - av) / 1e3 } },
        cv = function(e, t) { Om.forEach(e, (function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) })) },
        lv = function(e, t, n, r, o) { return function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e }(new Error(e), t, n, r, o) },
        pv = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
        fv = Om.isStandardBrowserEnv() ? function() { var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function r(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return e = r(window.location.href),
                function(t) { var n = Om.isString(t) ? r(t) : t; return n.protocol === e.protocol && n.host === e.host } }() : function() { return !0 },
        hv = Om.isStandardBrowserEnv() ? { write: function(e, t, n, r, o, i) { var s = [];
                s.push(e + "=" + encodeURIComponent(t)), Om.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), Om.isString(r) && s.push("path=" + r), Om.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} },
        dv = function(e) { return new Promise((function(t, n) { var r = e.data,
                    o = e.headers;
                Om.isFormData(r) && delete o["Content-Type"]; var i = new XMLHttpRequest; if (e.auth) { var s = e.auth.username || "",
                        a = e.auth.password || "";
                    o.Authorization = "Basic " + btoa(s + ":" + a) } var u, c, l = (u = e.baseURL, c = e.url, u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c) ? function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }(u, c) : c); if (i.open(e.method.toUpperCase(), Nm(l, e.params, e.paramsSerializer), !0), i.timeout = e.timeout, i.onreadystatechange = function() { if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) { var r = "getAllResponseHeaders" in i ? function(e) { var t, n, r, o = {}; return e ? (Om.forEach(e.split("\n"), (function(e) { if (r = e.indexOf(":"), t = Om.trim(e.substr(0, r)).toLowerCase(), n = Om.trim(e.substr(r + 1)), t) { if (o[t] && pv.indexOf(t) >= 0) return;
                                            o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n } })), o) : o }(i.getAllResponseHeaders()) : null,
                                o = { data: e.responseType && "text" !== e.responseType ? i.response : i.responseText, status: i.status, statusText: i.statusText, headers: r, config: e, request: i };! function(e, t, n) { var r = n.config.validateStatus;!r || r(n.status) ? e(n) : t(lv("Request failed with status code " + n.status, n.config, null, n.request, n)) }(t, n, o), i = null } }, i.onabort = function() { i && (n(lv("Request aborted", e, "ECONNABORTED", i)), i = null) }, i.onerror = function() { n(lv("Network Error", e, null, i)), i = null }, i.ontimeout = function() { var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(lv(t, e, "ECONNABORTED", i)), i = null }, Om.isStandardBrowserEnv()) { var p = hv,
                        f = (e.withCredentials || fv(l)) && e.xsrfCookieName ? p.read(e.xsrfCookieName) : void 0;
                    f && (o[e.xsrfHeaderName] = f) } if ("setRequestHeader" in i && Om.forEach(o, (function(e, t) { void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e) })), Om.isUndefined(e.withCredentials) || (i.withCredentials = !!e.withCredentials), e.responseType) try { i.responseType = e.responseType } catch (h) { if ("json" !== e.responseType) throw h }
                "function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { i && (i.abort(), n(e), i = null) })), void 0 === r && (r = null), i.send(r) })) },
        gv = { "Content-Type": "application/x-www-form-urlencoded" };

    function mv(e, t) {!Om.isUndefined(e) && Om.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var vv, yv = { adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== uv && "[object process]" === Object.prototype.toString.call(uv)) && (vv = dv), vv), transformRequest: [function(e, t) { return cv(t, "Accept"), cv(t, "Content-Type"), Om.isFormData(e) || Om.isArrayBuffer(e) || Om.isBuffer(e) || Om.isStream(e) || Om.isFile(e) || Om.isBlob(e) ? e : Om.isArrayBufferView(e) ? e.buffer : Om.isURLSearchParams(e) ? (mv(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : Om.isObject(e) ? (mv(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (t) {}
            return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 } };
    yv.headers = { common: { Accept: "application/json, text/plain, */*" } }, Om.forEach(["delete", "get", "head"], (function(e) { yv.headers[e] = {} })), Om.forEach(["post", "put", "patch"], (function(e) { yv.headers[e] = Om.merge(gv) })); var _v = yv;

    function Cv(e) { e.cancelToken && e.cancelToken.throwIfRequested() } var Iv = function(e) { return Cv(e), e.headers = e.headers || {}, e.data = xm(e.data, e.headers, e.transformRequest), e.headers = Om.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Om.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || _v.adapter)(e).then((function(t) { return Cv(e), t.data = xm(t.data, t.headers, e.transformResponse), t }), (function(t) { return Um(t) || (Cv(e), t && t.response && (t.response.data = xm(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) },
        Mv = function(e, t) { t = t || {}; var n = {},
                r = ["url", "method", "params", "data"],
                o = ["headers", "auth", "proxy"],
                i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            Om.forEach(r, (function(e) { void 0 !== t[e] && (n[e] = t[e]) })), Om.forEach(o, (function(r) { Om.isObject(t[r]) ? n[r] = Om.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : Om.isObject(e[r]) ? n[r] = Om.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r]) })), Om.forEach(i, (function(r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]) })); var s = r.concat(o).concat(i),
                a = Object.keys(t).filter((function(e) { return -1 === s.indexOf(e) })); return Om.forEach(a, (function(r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]) })), n };

    function Sv(e) { this.defaults = e, this.interceptors = { request: new Gm, response: new Gm } }
    Sv.prototype.request = function(e) { "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = Mv(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get"; var t = [Iv, void 0],
            n = Promise.resolve(e); for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift()); return n }, Sv.prototype.getUri = function(e) { return e = Mv(this.defaults, e), Nm(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, Om.forEach(["delete", "get", "head", "options"], (function(e) { Sv.prototype[e] = function(t, n) { return this.request(Om.merge(n || {}, { method: e, url: t })) } })), Om.forEach(["post", "put", "patch"], (function(e) { Sv.prototype[e] = function(t, n, r) { return this.request(Om.merge(r || {}, { method: e, url: t, data: n })) } })); var Tv = Sv;

    function Ev(e) { this.message = e }
    Ev.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, Ev.prototype.__CANCEL__ = !0; var Dv = Ev;

    function kv(e) { if ("function" != typeof e) throw new TypeError("executor must be a function."); var t;
        this.promise = new Promise((function(e) { t = e })); var n = this;
        e((function(e) { n.reason || (n.reason = new Dv(e), t(n.reason)) })) }
    kv.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, kv.source = function() { var e; return { token: new kv((function(t) { e = t })), cancel: e } }; var wv = kv;

    function Av(e) { var t = new Tv(e),
            n = Em(Tv.prototype.request, t); return Om.extend(n, Tv.prototype, t), Om.extend(n, t), n } var bv = Av(_v);
    bv.Axios = Tv, bv.create = function(e) { return Av(Mv(bv.defaults, e)) }, bv.Cancel = Dv, bv.CancelToken = wv, bv.isCancel = Um, bv.all = function(e) { return Promise.all(e) }, bv.spread = function(e) { return function(t) { return e.apply(null, t) } }; var Rv = bv,
        Ov = bv;
    Rv.default = Ov; var Lv = Rv,
        Nv = Lv.create({ timeout: 3e4, headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" } });
    Nv.interceptors.response.use((function(e) { var t = e.data,
            n = t.error_code,
            r = t.ErrorCode; return pa(n) && (r = n), r !== Lu.SUCCESS && (e.data.ErrorCode = Number(r)), e }), (function(e) { return "Network Error" === e.message && (!0 === Nv.defaults.withCredentials && ca.warn("Network Error, try to close `IMAxios.defaults.withCredentials` to false. (IMAxios.js)"), Nv.defaults.withCredentials = !1), Promise.reject(e) })); var Pv = function() {
            function e() { kn(this, e) } return An(e, [{ key: "request", value: function(e) { console.warn("请注意： ConnectionBase.request() 方法必须被派生类重写:"), console.log("参数如下：\n    * @param {String} options.url string 是 开发者服务器接口地址\n    * @param {*} options.data - string/object/ArrayBuffer 否 请求的参数\n    * @param {Object} options.header - Object 否 设置请求的 header，\n    * @param {String} options.method - string GET 否 HTTP 请求方法\n    * @param {String} options.dataType - string json 否 返回的数据格式\n    * @param {String} options.responseType - string text 否 响应的数据类型\n    * @param {Boolean} isRetry - string text false 是否为重试的请求\n   ") } }, { key: "_checkOptions", value: function(e) { if (!1 == !!e.url) throw new Ip({ code: Cf, message: wh }) } }, { key: "_initOptions", value: function(e) { e.method = ["POST", "GET", "PUT", "DELETE", "OPTION"].indexOf(e.method) >= 0 ? e.method : "POST", e.dataType = e.dataType || "json", e.responseType = e.responseType || "json" } }]), e }(),
        Gv = function(e) { Ln(n, e); var t = jn(n);

            function n() { var e; return kn(this, n), (e = t.call(this)).retry = 2, e } return An(n, [{ key: "request", value: function(e) { return this._checkOptions(e), this._initOptions(e), this._requestWithRetry({ url: e.url, data: e.data, method: e.method }) } }, { key: "_requestWithRetry", value: function(e) { var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return Nv(e).catch((function(r) { return t.retry && n < t.retry ? t._requestWithRetry(e, ++n) : pg(new Ip({ code: r.code || "", message: r.message || "" })) })) } }]), n }(Pv),
        xv = [],
        Uv = [],
        qv = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        Fv = !1;

    function jv() { Fv = !0; for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) xv[t] = e[t], Uv[e.charCodeAt(t)] = t;
        Uv["-".charCodeAt(0)] = 62, Uv["_".charCodeAt(0)] = 63 }

    function Bv(e, t, n) { for (var r, o, i = [], s = t; s < n; s += 3) r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], i.push(xv[(o = r) >> 18 & 63] + xv[o >> 12 & 63] + xv[o >> 6 & 63] + xv[63 & o]); return i.join("") }

    function Hv(e) { var t;
        Fv || jv(); for (var n = e.length, r = n % 3, o = "", i = [], s = 0, a = n - r; s < a; s += 16383) i.push(Bv(e, s, s + 16383 > a ? a : s + 16383)); return 1 === r ? (t = e[n - 1], o += xv[t >> 2], o += xv[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += xv[t >> 10], o += xv[t >> 4 & 63], o += xv[t << 2 & 63], o += "="), i.push(o), i.join("") }

    function Vv(e, t, n, r, o) { var i, s, a = 8 * o - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            p = n ? o - 1 : 0,
            f = n ? -1 : 1,
            h = e[t + p]; for (p += f, i = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; i = 256 * i + e[t + p], p += f, l -= 8); for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += f, l -= 8); if (0 === i) i = 1 - c;
        else { if (i === u) return s ? NaN : Infinity * (h ? -1 : 1);
            s += Math.pow(2, r), i -= c } return (h ? -1 : 1) * s * Math.pow(2, i - r) }

    function Kv(e, t, n, r, o, i) { var s, a, u, c = 8 * i - o - 1,
            l = (1 << c) - 1,
            p = l >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : i - 1,
            d = r ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || Infinity === t ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + p >= 1 ? f / u : f * Math.pow(2, 1 - p)) * u >= 2 && (s++, u /= 2), s + p >= l ? (a = 0, s = l) : s + p >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + h] = 255 & a, h += d, a /= 256, o -= 8); for (s = s << o | a, c += o; c > 0; e[n + h] = 255 & s, h += d, s /= 256, c -= 8);
        e[n + h - d] |= 128 * g } var $v = {}.toString,
        Yv = Array.isArray || function(e) { return "[object Array]" == $v.call(e) };

    function zv() { return Xv.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

    function Wv(e, t) { if (zv() < t) throw new RangeError("Invalid typed array length"); return Xv.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Xv.prototype : (null === e && (e = new Xv(t)), e.length = t), e }

    function Xv(e, t, n) { if (!(Xv.TYPED_ARRAY_SUPPORT || this instanceof Xv)) return new Xv(e, t, n); if ("number" == typeof e) { if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string"); return Zv(this, e) } return Jv(this, e, t, n) }

    function Jv(e, t, n, r) { if ("number" == typeof t) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) { if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
            t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
            Xv.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Xv.prototype : e = ey(e, t); return e }(e, t, n, r) : "string" == typeof t ? function(e, t, n) { "string" == typeof n && "" !== n || (n = "utf8"); if (!Xv.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | ry(t, n),
                o = (e = Wv(e, r)).write(t, n);
            o !== r && (e = e.slice(0, o)); return e }(e, t, n) : function(e, t) { if (ny(t)) { var n = 0 | ty(t.length); return 0 === (e = Wv(e, n)).length || t.copy(e, 0, 0, n), e } if (t) { if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? Wv(e, 0) : ey(e, t); if ("Buffer" === t.type && Yv(t.data)) return ey(e, t.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(e, t) }

    function Qv(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be a number'); if (e < 0) throw new RangeError('"size" argument must not be negative') }

    function Zv(e, t) { if (Qv(t), e = Wv(e, t < 0 ? 0 : 0 | ty(t)), !Xv.TYPED_ARRAY_SUPPORT)
            for (var n = 0; n < t; ++n) e[n] = 0; return e }

    function ey(e, t) { var n = t.length < 0 ? 0 : 0 | ty(t.length);
        e = Wv(e, n); for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]; return e }

    function ty(e) { if (e >= zv()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + zv().toString(16) + " bytes"); return 0 | e }

    function ny(e) { return !(null == e || !e._isBuffer) }

    function ry(e, t) { if (ny(e)) return e.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength; "string" != typeof e && (e = "" + e); var n = e.length; if (0 === n) return 0; for (var r = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
            case void 0:
                return Ay(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return by(e).length;
            default:
                if (r) return Ay(e).length;
                t = ("" + t).toLowerCase(), r = !0 } }

    function oy(e, t, n) { var r = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (t >>>= 0)) return ""; for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return yy(this, t, n);
            case "utf8":
            case "utf-8":
                return gy(this, t, n);
            case "ascii":
                return my(this, t, n);
            case "latin1":
            case "binary":
                return vy(this, t, n);
            case "base64":
                return dy(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return _y(this, t, n);
            default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), r = !0 } }

    function iy(e, t, n) { var r = e[t];
        e[t] = e[n], e[n] = r }

    function sy(e, t, n, r, o) { if (0 === e.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) { if (o) return -1;
            n = e.length - 1 } else if (n < 0) { if (!o) return -1;
            n = 0 } if ("string" == typeof t && (t = Xv.from(t, r)), ny(t)) return 0 === t.length ? -1 : ay(e, t, n, r, o); if ("number" == typeof t) return t &= 255, Xv.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : ay(e, [t], n, r, o); throw new TypeError("val must be string, number or Buffer") }

    function ay(e, t, n, r, o) { var i, s = 1,
            a = e.length,
            u = t.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, u /= 2, n /= 2 }

        function c(e, t) { return 1 === s ? e[t] : e.readUInt16BE(t * s) } if (o) { var l = -1; for (i = n; i < a; i++)
                if (c(e, i) === c(t, -1 === l ? 0 : i - l)) { if (-1 === l && (l = i), i - l + 1 === u) return l * s } else -1 !== l && (i -= i - l), l = -1 } else
            for (n + u > a && (n = a - u), i = n; i >= 0; i--) { for (var p = !0, f = 0; f < u; f++)
                    if (c(e, i + f) !== c(t, f)) { p = !1; break }
                if (p) return i }
        return -1 }

    function uy(e, t, n, r) { n = Number(n) || 0; var o = e.length - n;
        r ? (r = Number(r)) > o && (r = o) : r = o; var i = t.length; if (i % 2 != 0) throw new TypeError("Invalid hex string");
        r > i / 2 && (r = i / 2); for (var s = 0; s < r; ++s) { var a = parseInt(t.substr(2 * s, 2), 16); if (isNaN(a)) return s;
            e[n + s] = a } return s }

    function cy(e, t, n, r) { return Ry(Ay(t, e.length - n), e, n, r) }

    function ly(e, t, n, r) { return Ry(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

    function py(e, t, n, r) { return ly(e, t, n, r) }

    function fy(e, t, n, r) { return Ry(by(t), e, n, r) }

    function hy(e, t, n, r) { return Ry(function(e, t) { for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i }(t, e.length - n), e, n, r) }

    function dy(e, t, n) { return 0 === t && n === e.length ? Hv(e) : Hv(e.slice(t, n)) }

    function gy(e, t, n) { n = Math.min(e.length, n); for (var r = [], o = t; o < n;) { var i, s, a, u, c = e[o],
                l = null,
                p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1; if (o + p <= n) switch (p) {
                case 1:
                    c < 128 && (l = c); break;
                case 2:
                    128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u); break;
                case 3:
                    i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u); break;
                case 4:
                    i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u) }
            null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += p } return function(e) { var t = e.length; if (t <= 4096) return String.fromCharCode.apply(String, e); var n = "",
                r = 0; for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096)); return n }(r) }
    Xv.TYPED_ARRAY_SUPPORT = void 0 === ta.TYPED_ARRAY_SUPPORT || ta.TYPED_ARRAY_SUPPORT, Xv.poolSize = 8192, Xv._augment = function(e) { return e.__proto__ = Xv.prototype, e }, Xv.from = function(e, t, n) { return Jv(null, e, t, n) }, Xv.TYPED_ARRAY_SUPPORT && (Xv.prototype.__proto__ = Uint8Array.prototype, Xv.__proto__ = Uint8Array), Xv.alloc = function(e, t, n) { return function(e, t, n, r) { return Qv(t), t <= 0 ? Wv(e, t) : void 0 !== n ? "string" == typeof r ? Wv(e, t).fill(n, r) : Wv(e, t).fill(n) : Wv(e, t) }(null, e, t, n) }, Xv.allocUnsafe = function(e) { return Zv(null, e) }, Xv.allocUnsafeSlow = function(e) { return Zv(null, e) }, Xv.isBuffer = function(e) { return null != e && (!!e._isBuffer || Oy(e) || function(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && Oy(e.slice(0, 0)) }(e)) }, Xv.compare = function(e, t) { if (!ny(e) || !ny(t)) throw new TypeError("Arguments must be Buffers"); if (e === t) return 0; for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
            if (e[o] !== t[o]) { n = e[o], r = t[o]; break }
        return n < r ? -1 : r < n ? 1 : 0 }, Xv.isEncoding = function(e) { switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1 } }, Xv.concat = function(e, t) { if (!Yv(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return Xv.alloc(0); var n; if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length; var r = Xv.allocUnsafe(t),
            o = 0; for (n = 0; n < e.length; ++n) { var i = e[n]; if (!ny(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(r, o), o += i.length } return r }, Xv.byteLength = ry, Xv.prototype._isBuffer = !0, Xv.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) iy(this, t, t + 1); return this }, Xv.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) iy(this, t, t + 3), iy(this, t + 1, t + 2); return this }, Xv.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) iy(this, t, t + 7), iy(this, t + 1, t + 6), iy(this, t + 2, t + 5), iy(this, t + 3, t + 4); return this }, Xv.prototype.toString = function() { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? gy(this, 0, e) : oy.apply(this, arguments) }, Xv.prototype.equals = function(e) { if (!ny(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === Xv.compare(this, e) }, Xv.prototype.inspect = function() { var e = ""; return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">" }, Xv.prototype.compare = function(e, t, n, r, o) { if (!ny(e)) throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && t >= n) return 0; if (r >= o) return -1; if (t >= n) return 1; if (this === e) return 0; for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(i, s), u = this.slice(r, o), c = e.slice(t, n), l = 0; l < a; ++l)
            if (u[l] !== c[l]) { i = u[l], s = c[l]; break }
        return i < s ? -1 : s < i ? 1 : 0 }, Xv.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, Xv.prototype.indexOf = function(e, t, n) { return sy(this, e, t, n, !0) }, Xv.prototype.lastIndexOf = function(e, t, n) { return sy(this, e, t, n, !1) }, Xv.prototype.write = function(e, t, n, r) { if (void 0 === t) r = "utf8", n = this.length, t = 0;
        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
        else { if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var o = this.length - t; if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8"); for (var i = !1;;) switch (r) {
            case "hex":
                return uy(this, e, t, n);
            case "utf8":
            case "utf-8":
                return cy(this, e, t, n);
            case "ascii":
                return ly(this, e, t, n);
            case "latin1":
            case "binary":
                return py(this, e, t, n);
            case "base64":
                return fy(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return hy(this, e, t, n);
            default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), i = !0 } }, Xv.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };

    function my(e, t, n) { var r = "";
        n = Math.min(e.length, n); for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]); return r }

    function vy(e, t, n) { var r = "";
        n = Math.min(e.length, n); for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]); return r }

    function yy(e, t, n) { var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = t; i < n; ++i) o += wy(e[i]); return o }

    function _y(e, t, n) { for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

    function Cy(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

    function Iy(e, t, n, r, o, i) { if (!ny(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > o || t < i) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

    function My(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

    function Sy(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255 }

    function Ty(e, t, n, r, o, i) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

    function Ey(e, t, n, r, o) { return o || Ty(e, 0, n, 4), Kv(e, t, n, r, 23, 4), n + 4 }

    function Dy(e, t, n, r, o) { return o || Ty(e, 0, n, 8), Kv(e, t, n, r, 52, 8), n + 8 }
    Xv.prototype.slice = function(e, t) { var n, r = this.length; if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Xv.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = Xv.prototype;
        else { var o = t - e;
            n = new Xv(o, void 0); for (var i = 0; i < o; ++i) n[i] = this[i + e] } return n }, Xv.prototype.readUIntLE = function(e, t, n) { e |= 0, t |= 0, n || Cy(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o; return r }, Xv.prototype.readUIntBE = function(e, t, n) { e |= 0, t |= 0, n || Cy(e, t, this.length); for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o; return r }, Xv.prototype.readUInt8 = function(e, t) { return t || Cy(e, 1, this.length), this[e] }, Xv.prototype.readUInt16LE = function(e, t) { return t || Cy(e, 2, this.length), this[e] | this[e + 1] << 8 }, Xv.prototype.readUInt16BE = function(e, t) { return t || Cy(e, 2, this.length), this[e] << 8 | this[e + 1] }, Xv.prototype.readUInt32LE = function(e, t) { return t || Cy(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, Xv.prototype.readUInt32BE = function(e, t) { return t || Cy(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, Xv.prototype.readIntLE = function(e, t, n) { e |= 0, t |= 0, n || Cy(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r }, Xv.prototype.readIntBE = function(e, t, n) { e |= 0, t |= 0, n || Cy(e, t, this.length); for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i }, Xv.prototype.readInt8 = function(e, t) { return t || Cy(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, Xv.prototype.readInt16LE = function(e, t) { t || Cy(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, Xv.prototype.readInt16BE = function(e, t) { t || Cy(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, Xv.prototype.readInt32LE = function(e, t) { return t || Cy(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, Xv.prototype.readInt32BE = function(e, t) { return t || Cy(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, Xv.prototype.readFloatLE = function(e, t) { return t || Cy(e, 4, this.length), Vv(this, e, !0, 23, 4) }, Xv.prototype.readFloatBE = function(e, t) { return t || Cy(e, 4, this.length), Vv(this, e, !1, 23, 4) }, Xv.prototype.readDoubleLE = function(e, t) { return t || Cy(e, 8, this.length), Vv(this, e, !0, 52, 8) }, Xv.prototype.readDoubleBE = function(e, t) { return t || Cy(e, 8, this.length), Vv(this, e, !1, 52, 8) }, Xv.prototype.writeUIntLE = function(e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || Iy(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var o = 1,
            i = 0; for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255; return t + n }, Xv.prototype.writeUIntBE = function(e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || Iy(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var o = n - 1,
            i = 1; for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255; return t + n }, Xv.prototype.writeUInt8 = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 1, 255, 0), Xv.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, Xv.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 2, 65535, 0), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : My(this, e, t, !0), t + 2 }, Xv.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 2, 65535, 0), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : My(this, e, t, !1), t + 2 }, Xv.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 4, 4294967295, 0), Xv.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Sy(this, e, t, !0), t + 4 }, Xv.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 4, 4294967295, 0), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Sy(this, e, t, !1), t + 4 }, Xv.prototype.writeIntLE = function(e, t, n, r) { if (e = +e, t |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
            Iy(this, e, t, n, o - 1, -o) } var i = 0,
            s = 1,
            a = 0; for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255; return t + n }, Xv.prototype.writeIntBE = function(e, t, n, r) { if (e = +e, t |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
            Iy(this, e, t, n, o - 1, -o) } var i = n - 1,
            s = 1,
            a = 0; for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255; return t + n }, Xv.prototype.writeInt8 = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 1, 127, -128), Xv.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, Xv.prototype.writeInt16LE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 2, 32767, -32768), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : My(this, e, t, !0), t + 2 }, Xv.prototype.writeInt16BE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 2, 32767, -32768), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : My(this, e, t, !1), t + 2 }, Xv.prototype.writeInt32LE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 4, 2147483647, -2147483648), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Sy(this, e, t, !0), t + 4 }, Xv.prototype.writeInt32BE = function(e, t, n) { return e = +e, t |= 0, n || Iy(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Xv.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Sy(this, e, t, !1), t + 4 }, Xv.prototype.writeFloatLE = function(e, t, n) { return Ey(this, e, t, !0, n) }, Xv.prototype.writeFloatBE = function(e, t, n) { return Ey(this, e, t, !1, n) }, Xv.prototype.writeDoubleLE = function(e, t, n) { return Dy(this, e, t, !0, n) }, Xv.prototype.writeDoubleBE = function(e, t, n) { return Dy(this, e, t, !1, n) }, Xv.prototype.copy = function(e, t, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n); var o, i = r - n; if (this === e && n < t && t < r)
            for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
        else if (i < 1e3 || !Xv.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) e[o + t] = this[o + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t); return i }, Xv.prototype.fill = function(e, t, n, r) { if ("string" == typeof e) { if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) { var o = e.charCodeAt(0);
                o < 256 && (e = o) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !Xv.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index"); if (n <= t) return this; var i; if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
            for (i = t; i < n; ++i) this[i] = e;
        else { var s = ny(e) ? e : Ay(new Xv(e, r).toString()),
                a = s.length; for (i = 0; i < n - t; ++i) this[i + t] = s[i % a] } return this }; var ky = /[^+\/0-9A-Za-z-_]/g;

    function wy(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

    function Ay(e, t) { var n;
        t = t || Infinity; for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) { if ((n = e.charCodeAt(s)) > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                        (t -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === r) {
                        (t -= 3) > -1 && i.push(239, 191, 189); continue }
                    o = n; continue } if (n < 56320) {
                    (t -= 3) > -1 && i.push(239, 191, 189), o = n; continue }
                n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (t -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) { if ((t -= 1) < 0) break;
                i.push(n) } else if (n < 2048) { if ((t -= 2) < 0) break;
                i.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((t -= 3) < 0) break;
                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return i }

    function by(e) { return function(e) { var t, n, r, o, i, s;
            Fv || jv(); var a = e.length; if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            i = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, s = new qv(3 * a / 4 - i), r = i > 0 ? a - 4 : a; var u = 0; for (t = 0, n = 0; t < r; t += 4, n += 3) o = Uv[e.charCodeAt(t)] << 18 | Uv[e.charCodeAt(t + 1)] << 12 | Uv[e.charCodeAt(t + 2)] << 6 | Uv[e.charCodeAt(t + 3)], s[u++] = o >> 16 & 255, s[u++] = o >> 8 & 255, s[u++] = 255 & o; return 2 === i ? (o = Uv[e.charCodeAt(t)] << 2 | Uv[e.charCodeAt(t + 1)] >> 4, s[u++] = 255 & o) : 1 === i && (o = Uv[e.charCodeAt(t)] << 10 | Uv[e.charCodeAt(t + 1)] << 4 | Uv[e.charCodeAt(t + 2)] >> 2, s[u++] = o >> 8 & 255, s[u++] = 255 & o), s }(function(e) { if ((e = function(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }(e).replace(ky, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

    function Ry(e, t, n, r) { for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o]; return o }

    function Oy(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) } var Ly = function(e) { Ln(n, e); var t = jn(n);

            function n() { var e; return kn(this, n), (e = t.call(this)).retry = 2, e._request = e.promisify(wx.request), e } return An(n, [{ key: "request", value: function(e) { return this._checkOptions(e), this._initOptions(e), e = On({}, e, { responseType: "text" }), this._requestWithRetry(e) } }, { key: "_requestWithRetry", value: function(e) { var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return this._request(e).then(this._handleResolve).catch((function(r) { if (fa(r.errMsg)) { if (r.errMsg.includes("abort")) return lg({}); if (r.errMsg.includes("timeout")) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : pg(new Ip({ code: _f, message: r.errMsg })); if (r.errMsg.includes("fail")) return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : pg(new Ip({ code: yf, message: r.errMsg })) } return pg(new Ip(On({ code: kf, message: r.message }, r))) })) } }, { key: "_handleResolve", value: function(e) { var t = e.data,
                        n = t.error_code,
                        r = t.ErrorCode; return "number" == typeof n && (r = n), r !== Lu.SUCCESS && (e.data.ErrorCode = Number("".concat(r))), e } }, { key: "promisify", value: function(e) { return function(t) { return new Promise((function(n, r) { var o = e(Object.assign({}, t, { success: n, fail: r }));
                            t.updateAbort && t.updateAbort((function() { o && ya(o.abort) && o.abort() })) })) } } }]), n }(Pv),
        Ny = function() {
            function e() { kn(this, e), this.request = 0, this.success = 0, this.fail = 0, this.reportRate = 10, this.requestTimeCost = [] } return An(e, [{ key: "report", value: function() { if (1 !== this.request) { if (this.request % this.reportRate != 0) return null; var e = this.avgRequestTime(),
                            t = "runLoop reports: success=".concat(this.success, ",fail=").concat(this.fail, ",total=").concat(this.request, ",avg=").concat(e, ",cur=").concat(this.requestTimeCost[this.requestTimeCost.length - 1], ",max=").concat(Math.max.apply(null, this.requestTimeCost), ",min=").concat(Math.min.apply(null, this.requestTimeCost));
                        ca.log(t) } } }, { key: "setRequestTime", value: function(e, t) { var n = Math.abs(t - e);
                    100 === this.requestTimeCost.length && this.requestTimeCost.shift(), this.requestTimeCost.push(n) } }, { key: "avgRequestTime", value: function() { for (var e, t = this.requestTimeCost.length, n = 0, r = 0; r < t; r++) n += this.requestTimeCost[r]; return e = n / t, Math.round(100 * e) / 100 } }]), e }(),
        Py = Lv.create({ timeout: 6e3, headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" } });
    Py.interceptors.response.use((function(e) { var t = e.data,
            n = t.error_code,
            r = t.ErrorCode; return pa(n) && (r = n), r !== Lu.SUCCESS && (e.data.ErrorCode = Number(r)), e }), (function(e) { return "Network Error" === e.message && (!0 === Py.defaults.withCredentials && ca.warn("Network Error, try to close `IMAxiosAVChatroom.defaults.withCredentials` to false. (IMAxiosAVChatroom.js)"), Py.defaults.withCredentials = !1), Promise.reject(e) })); var Gy = Lv.CancelToken,
        xy = function() {
            function e(t) { kn(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new Ny } return An(e, [{ key: "destructor", value: function() { clearTimeout(this._seedID); var e = this._index(); for (var t in this) Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null); return e } }, { key: "setIndex", value: function(e) { this._index = e } }, { key: "getIndex", value: function() { return this._index } }, { key: "isRunning", value: function() { return !this._stoped } }, { key: "_initializeOptions", value: function(e) { this.options = e } }, { key: "_initializeMembers", value: function() { this._index = -1, this._seedID = 0, this._requestStatus = !1, this._stoped = !1, this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, this.options.isAVChatRoomLoop ? this.requestor = Py : this.requestor = Nv, ca.log("XHRRunLoop._initializeMembers isAVChatRoomLoop=".concat(!!this.options.isAVChatRoomLoop)), this.abort = null } }, { key: "start", value: function() { 0 === this._seedID ? (this._stoped = !1, this._send()) : ca.log('XHRRunLoop.start(), XHRRunLoop is running now, if you want to restart runLoop , please run "stop()" first.') } }, { key: "_reset", value: function() { ca.log("XHRRunLoop._reset(), reset long poll _intervalTime", this._intervalTime), this.stop(), this.start() } }, { key: "_intervalTimeIncrease", value: function() { this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold)) } }, { key: "_intervalTimeDecrease", value: function() { 0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), this._intervalTime < 0 && (this._intervalTime = 0)) } }, { key: "_intervalTimeAdjustment", value: function() { var e = Date.now();
                    100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), this._responseTime = e } }, { key: "_intervalTimeAdjustmentBaseOnResponseData", value: function(e) { e.ErrorCode === Lu.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease() } }, { key: "_send", value: function() { var e = this; if (!0 !== this._requestStatus) { this._requestStatus = !0, this.status.request++, "function" == typeof this.options.before && this.options.before(this.options.pack.requestData); var t = Date.now(),
                            n = 0;
                        this.requestor.request({ url: this.options.pack.getUrl(), data: this.options.pack.requestData, method: this.options.pack.method, cancelToken: new Gy((function(t) { e.abort = t })) }).then((function(r) { if (e._intervalTimeAdjustmentBaseOnResponseData.bind(e)(r.data), e._retryCount > 0 && (e._retryCount = 0), e.status.success++, n = Date.now(), e.status.setRequestTime(t, n), r.data.timecost = n - t, "function" == typeof e.options.success) try { e.options.success({ pack: e.options.pack, error: !1, data: e.options.pack.callback(r.data) }) } catch (o) { ca.warn("XHRRunLoop._send(), error:", o) }
                            e._requestStatus = !1, !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), e.status.report() })).catch((function(r) { if (e.status.fail++, e._retryCount++, e._intervalTimeAdjustment.bind(e)(), !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), e._requestStatus = !1, "function" == typeof e.options.fail && void 0 !== r.request) try { e.options.fail({ pack: e.options.pack, error: r, data: !1 }) } catch (o) { ca.warn("XHRRunLoop._send(), fail callback error:"), ca.error(o) }
                            n = Date.now(), e.status.setRequestTime(t, n), e.status.report() })) } } }, { key: "stop", value: function() { this._clearAllTimeOut(), this._stoped = !0 } }, { key: "_clearAllTimeOut", value: function() { clearTimeout(this._seedID), this._seedID = 0 } }]), e }(),
        Uy = function() {
            function e(t) { kn(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new Ny } return An(e, [{ key: "destructor", value: function() { clearTimeout(this._seedID); var e = this._index(); for (var t in this) Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null); return e } }, { key: "setIndex", value: function(e) { this._index = e } }, { key: "isRunning", value: function() { return !this._stoped } }, { key: "getIndex", value: function() { return this._index } }, { key: "_initializeOptions", value: function(e) { this.options = e } }, { key: "_initializeMembers", value: function() { this._index = -1, this._seedID = 0, this._requestStatus = !1, this._stoped = !1, this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, this.requestor = new Ly, this.abort = null } }, { key: "start", value: function() { 0 === this._seedID ? (this._stoped = !1, this._send()) : ca.log('WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.') } }, { key: "_reset", value: function() { ca.log("WXRunLoop.reset(), long poll _intervalMaxRate", this._intervalMaxRate), this.stop(), this.start() } }, { key: "_intervalTimeIncrease", value: function() { this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold)) } }, { key: "_intervalTimeDecrease", value: function() { 0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), this._intervalTime < 0 && (this._intervalTime = 0)) } }, { key: "_intervalTimeAdjustment", value: function() { var e = Date.now();
                    100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), this._responseTime = e } }, { key: "_intervalTimeAdjustmentBaseOnResponseData", value: function(e) { e.ErrorCode === Lu.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease() } }, { key: "_send", value: function() { var e = this; if (!0 !== this._requestStatus) { var t = this;
                        this._requestStatus = !0, this.status.request++, "function" == typeof this.options.before && this.options.before(t.options.pack.requestData); var n = Date.now(),
                            r = 0;
                        this.requestor.request({ url: t.options.pack.getUrl(), data: t.options.pack.requestData, method: t.options.pack.method, updateAbort: function(t) { e.abort = t } }).then((function(o) { if (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(o.data), t._retryCount > 0 && (t._retryCount = 0), e.status.success++, r = Date.now(), e.status.setRequestTime(n, r), o.data.timecost = r - n, "function" == typeof t.options.success) try { e.options.success({ pack: e.options.pack, error: !1, data: e.options.pack.callback(o.data) }) } catch (i) { ca.warn("WXRunLoop._send(), error:", i) }
                            t._requestStatus = !1, !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), e.status.report() })).catch((function(o) { if (e.status.fail++, t._retryCount++, t._intervalTimeAdjustment.bind(e)(), !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), t._requestStatus = !1, "function" == typeof t.options.fail) try { e.options.fail({ pack: e.options.pack, error: o, data: !1 }) } catch (i) { ca.warn("WXRunLoop._send(), fail callback error:"), ca.error(i) }
                            r = Date.now(), e.status.setRequestTime(n, r), e.status.report() })) } } }, { key: "stop", value: function() { this._clearAllTimeOut(), this._stoped = !0 } }, { key: "_clearAllTimeOut", value: function() { clearTimeout(this._seedID), this._seedID = 0 } }]), e }(),
        qy = function() {
            function e(t) { kn(this, e), this.tim = t, this.httpConnection = Rs ? new Ly : new Gv, this.keepAliveConnections = [] } return An(e, [{ key: "initializeListener", value: function() { this.tim.innerEmitter.on(Nd, this._stopAllRunLoop, this) } }, { key: "request", value: function(e) { var t = { url: e.url, data: e.requestData, method: e.method, callback: e.callback }; return this.httpConnection.request(t).then((function(t) { return t.data = e.callback(t.data), t.data.errorCode !== Lu.SUCCESS ? pg(new Ip({ code: t.data.errorCode, message: t.data.errorInfo })) : t })) } }, { key: "createRunLoop", value: function(e) { var t = this.createKeepAliveConnection(e); return t.setIndex(this.keepAliveConnections.push(t) - 1), t } }, { key: "stopRunLoop", value: function(e) { e.stop() } }, { key: "_stopAllRunLoop", value: function() { for (var e = this.keepAliveConnections.length, t = 0; t < e; t++) this.keepAliveConnections[t].stop() } }, { key: "destroyRunLoop", value: function(e) { e.stop(); var t = e.destructor();
                    this.keepAliveConnections.slice(t, 1) } }, { key: "startRunLoopExclusive", value: function(e) { for (var t = e.getIndex(), n = 0; n < this.keepAliveConnections.length; n++) n !== t && this.keepAliveConnections[n].stop();
                    e.start() } }, { key: "createKeepAliveConnection", value: function(e) { return Rs ? new Uy(e) : (this.tim.options.runLoopNetType === ep || this.tim.options.runLoopNetType, new xy(e)) } }, { key: "clearAll", value: function() { this.conn.cancelAll() } }, { key: "reset", value: function() { this.keepAliveConnections = [] } }]), e }(),
        Fy = function() {
            function e(t) { kn(this, e), this.tim = t, this.tim.innerEmitter.on(xd, this._onErrorDetected, this) } return An(e, [{ key: "_onErrorDetected", value: function(e) { var t = e.data,
                        n = new Mg;
                    n.setMethod(Sm).setStart(), n.setCode(0).setText("code=".concat(t.code, " message=").concat(t.message)).setNetworkType(this.tim.netMonitor.getNetworkType()).setEnd(), t.code ? ca.warn("Oops! code:".concat(t.code, " message:").concat(t.message)) : ca.warn("Oops! message:".concat(t.message, " stack:").concat(t.stack)), this.tim.outerEmitter.emit(ln.ERROR, t) } }]), e }(),
        jy = function() {
            function e(t) { var n = this;
                kn(this, e), ja(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this.selfSignature = t.selfSignature || "", this.allowType = t.allowType || pn.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "", this.messageSettings = t.messageSettings || 0, this.adminForbidType = t.adminForbidType || pn.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], ja(t.profileCustomField) || t.profileCustomField.forEach((function(e) { n.profileCustomField.push({ key: e.key, value: e.value }) }))) } return An(e, [{ key: "validate", value: function(e) { var t = !0,
                        n = ""; if (ja(e)) return { valid: !1, tips: "empty options" }; if (e.profileCustomField)
                        for (var r = e.profileCustomField.length, o = null, i = 0; i < r; i++) { if (o = e.profileCustomField[i], !fa(o.key) || -1 === o.key.indexOf("Tag_Profile_Custom")) return { valid: !1, tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom" }; if (!fa(o.value)) return { valid: !1, tips: "自定义资料字段的 value 必须是字符串" } }
                    for (var s in e)
                        if (Object.prototype.hasOwnProperty.call(e, s)) { if ("profileCustomField" === s) continue; if (ja(e[s]) && !fa(e[s]) && !pa(e[s])) { n = "key:" + s + ", invalid value:" + e[s], t = !1; continue } switch (s) {
                                case "nick":
                                    fa(e[s]) || (n = "nick should be a string", t = !1), ka(e[s]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(ka(e[s]), " bytes"), t = !1); break;
                                case "gender":
                                    Ra(op, e.gender) || (n = "key:gender, invalid value:" + e.gender, t = !1); break;
                                case "birthday":
                                    pa(e.birthday) || (n = "birthday should be a number", t = !1); break;
                                case "location":
                                    fa(e.location) || (n = "location should be a string", t = !1); break;
                                case "selfSignature":
                                    fa(e.selfSignature) || (n = "selfSignature should be a string", t = !1); break;
                                case "allowType":
                                    Ra(sp, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType, t = !1); break;
                                case "language":
                                    pa(e.language) || (n = "language should be a number", t = !1); break;
                                case "avatar":
                                    fa(e.avatar) || (n = "avatar should be a string", t = !1); break;
                                case "messageSettings":
                                    0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", t = !1); break;
                                case "adminForbidType":
                                    Ra(ip, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType, t = !1); break;
                                case "level":
                                    pa(e.level) || (n = "level should be a number", t = !1); break;
                                case "role":
                                    pa(e.role) || (n = "role should be a number", t = !1); break;
                                default:
                                    n = "unknown key:" + s + "  " + e[s], t = !1 } }
                    return { valid: t, tips: n } } }]), e }(),
        By = function() {
            function e(t) { kn(this, e), this.userController = t, this.TAG = "profile", this.Actions = { Q: "query", U: "update" }, this.accountProfileMap = new Map, this.expirationTime = 864e5 } return An(e, [{ key: "setExpirationTime", value: function(e) { this.expirationTime = e } }, { key: "getUserProfile", value: function(e) { var t = this,
                        n = e.userIDList;
                    e.fromAccount = this.userController.getMyAccount(), n.length > 100 && (ca.warn("ProfileHandler.getUserProfile 获取用户资料人数不能超过100人"), n.length = 100); for (var r, o = [], i = [], s = 0, a = n.length; s < a; s++) r = n[s], this.userController.isMyFriend(r) && this._containsAccount(r) ? i.push(this._getProfileFromMap(r)) : o.push(r); if (0 === o.length) return lg(i);
                    e.toAccount = o; var u = e.bFromGetMyProfile || !1,
                        c = [];
                    e.toAccount.forEach((function(e) { c.push({ toAccount: e, standardSequence: 0, customSequence: 0 }) })), e.userItem = c; var l = new Mg;
                    l.setMethod(mm).setText(n.length > 5 ? "userIDList.length=".concat(n.length) : "userIDList=".concat(n)).setStart(); var p = this.userController.generateConfig(this.TAG, this.Actions.Q, e); return this.userController.request(p).then((function(e) { l.setCode(0).setNetworkType(t.userController.getNetworkType()).setEnd(), ca.info("ProfileHandler.getUserProfile ok"); var n = t._handleResponse(e).concat(i); return u ? (t.userController.onGotMyProfile(), new ag(n[0])) : new ag(n) })).catch((function(e) { return t.userController.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            l.setError(e, r, o).setEnd() })), ca.error("ProfileHandler.getUserProfile error:", e), pg(e) })) } }, { key: "getMyProfile", value: function() { var e = this.userController.getMyAccount(); if (ca.log("ProfileHandler.getMyProfile myAccount=" + e), this._fillMap(), this._containsAccount(e)) { var t = this._getProfileFromMap(e); return ca.debug("ProfileHandler.getMyProfile from cache, myProfile:" + JSON.stringify(t)), this.userController.onGotMyProfile(), lg(t) } return this.getUserProfile({ fromAccount: e, userIDList: [e], bFromGetMyProfile: !0 }) } }, { key: "_handleResponse", value: function(e) { for (var t, n, r = Sa.now(), o = e.data.userProfileItem, i = [], s = 0, a = o.length; s < a; s++) "@TLS#NOT_FOUND" !== o[s].to && "" !== o[s].to && (t = o[s].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, o[s].profileItem)), i.push(n)); return ca.log("ProfileHandler._handleResponse cost " + (Sa.now() - r) + " ms"), i } }, { key: "_getLatestProfileFromResponse", value: function(e, t) { var n = {}; if (n.userID = e, n.profileCustomField = [], !ja(t))
                        for (var r = 0, o = t.length; r < o; r++)
                            if (t[r].tag.indexOf("Tag_Profile_Custom") > -1) n.profileCustomField.push({ key: t[r].tag, value: t[r].value });
                            else switch (t[r].tag) {
                                case rp.NICK:
                                    n.nick = t[r].value; break;
                                case rp.GENDER:
                                    n.gender = t[r].value; break;
                                case rp.BIRTHDAY:
                                    n.birthday = t[r].value; break;
                                case rp.LOCATION:
                                    n.location = t[r].value; break;
                                case rp.SELFSIGNATURE:
                                    n.selfSignature = t[r].value; break;
                                case rp.ALLOWTYPE:
                                    n.allowType = t[r].value; break;
                                case rp.LANGUAGE:
                                    n.language = t[r].value; break;
                                case rp.AVATAR:
                                    n.avatar = t[r].value; break;
                                case rp.MESSAGESETTINGS:
                                    n.messageSettings = t[r].value; break;
                                case rp.ADMINFORBIDTYPE:
                                    n.adminForbidType = t[r].value; break;
                                case rp.LEVEL:
                                    n.level = t[r].value; break;
                                case rp.ROLE:
                                    n.role = t[r].value; break;
                                default:
                                    ca.warn("ProfileHandler._handleResponse unkown tag->", t[r].tag, t[r].value) }
                            return n } }, { key: "updateMyProfile", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(vm).setText(JSON.stringify(e)).setStart(); var r = (new jy).validate(e); if (!r.valid) return n.setCode(hf).setMessage("ProfileHandler.updateMyProfile info:".concat(r.tips)).setNetworkType(this.userController.getNetworkType()).setEnd(), ca.error("ProfileHandler.updateMyProfile info:".concat(r.tips, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")), pg({ code: hf, message: Sh }); var o = []; for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && ("profileCustomField" === i ? e.profileCustomField.forEach((function(e) { o.push({ tag: e.key, value: e.value }) })) : o.push({ tag: rp[i.toUpperCase()], value: e[i] })); if (0 === o.length) return n.setCode(df).setMessage(Th).setNetworkType(this.userController.getNetworkType()).setEnd(), ca.error("ProfileHandler.updateMyProfile info:".concat(Th, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")), pg({ code: df, message: Th }); var s = this.userController.generateConfig(this.TAG, this.Actions.U, { fromAccount: this.userController.getMyAccount(), profileItem: o }); return this.userController.request(s).then((function(r) { n.setCode(0).setNetworkType(t.userController.getNetworkType()).setEnd(), ca.info("ProfileHandler.updateMyProfile ok"); var o = t._updateMap(t.userController.getMyAccount(), e); return t.userController.emitOuterEvent(ln.PROFILE_UPDATED, [o]), lg(o) })).catch((function(e) { return t.userController.probeNetwork().then((function(t) { var r = Bn(t, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(e, o, i).setEnd() })), ca.error("ProfileHandler.updateMyProfile error:", e), pg(e) })) } }, { key: "onProfileModified", value: function(e) { var t = e.data; if (!ja(t)) { var n, r, o = t.length;
                        ca.info("ProfileHandler.onProfileModified length=" + o); for (var i = [], s = 0; s < o; s++) n = t[s].userID, r = this._updateMap(n, this._getLatestProfileFromResponse(n, t[s].profileList)), i.push(r);
                        this.userController.emitInnerEvent(jd, i), this.userController.emitOuterEvent(ln.PROFILE_UPDATED, i) } } }, { key: "_fillMap", value: function() { if (0 === this.accountProfileMap.size) { for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, r = e.length; n < r; n++) t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
                        ca.log("ProfileHandler._fillMap from cache, map.size=" + this.accountProfileMap.size) } } }, { key: "_updateMap", value: function(e, t) { var n, r = Date.now(); return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && Pa(n.profileCustomField, t.profileCustomField), Ta(n, t, ["profileCustomField"]), n.lastUpdatedTime = r) : (n = new jy(t), (this.userController.isMyFriend(e) || e === this.userController.getMyAccount()) && (n.lastUpdatedTime = r, this.accountProfileMap.set(e, n))), this._flushMap(e === this.userController.getMyAccount()), n } }, { key: "_flushMap", value: function(e) { var t = Hn(this.accountProfileMap.values()),
                        n = this.userController.tim.storage;
                    ca.debug("ProfileHandler._flushMap length=".concat(t.length, " flushAtOnce=").concat(e)), n.setItem(this.TAG, t, e) } }, { key: "_containsAccount", value: function(e) { return this.accountProfileMap.has(e) } }, { key: "_getProfileFromMap", value: function(e) { return this.accountProfileMap.get(e) } }, { key: "_getCachedProfiles", value: function() { var e = this.userController.tim.storage.getItem(this.TAG); return ja(e) ? [] : e } }, { key: "onConversationsProfileUpdated", value: function(e) { for (var t, n, r, o = [], i = 0, s = e.length; i < s; i++) n = (t = e[i]).userID, this.userController.isMyFriend(n) && (this._containsAccount(n) ? (r = this._getProfileFromMap(n), Ta(r, t) > 0 && o.push(n)) : o.push(t.userID));
                    0 !== o.length && (ca.info("ProfileHandler.onConversationsProfileUpdated toAccount:", o), this.getUserProfile({ userIDList: o })) } }, { key: "reset", value: function() { this._flushMap(!0), this.accountProfileMap.clear() } }]), e }();
    Ae({ target: "String", proto: !0 }, { repeat: kr }); var Hy = function() {
            function e(t) { kn(this, e), this.options = t ? t.options : { enablePointer: !0 }, this.pointsList = {}, this.reportText = {}, this.maxNameLen = 0, this.gapChar = "-", this.log = console.log, this.currentTask = "" } return An(e, [{ key: "newTask", value: function(e) {!1 !== this.options.enablePointer && (e || (e = ["task", this._timeFormat()].join("-")), this.pointsList[e] = [], this.currentTask = e, console.log("Pointer new Task : ".concat(this.currentTask))) } }, { key: "deleteTask", value: function(e) {!1 !== this.options.enablePointer && (e || (e = this.currentTask), this.pointsList[e].length = 0, delete this.pointsList[e]) } }, { key: "dot", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0; if (!1 !== this.options.enablePointer) { t = t || this.currentTask; var n = +new Date;
                        this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen, this.flen = this.maxNameLen + 10, this.pointsList[t].push({ pointerName: e, time: n }) } } }, { key: "_analisys", value: function(e) { if (!1 !== this.options.enablePointer) { e = e || this.currentTask; for (var t = this.pointsList[e], n = t.length, r = [], o = [], i = 0; i < n; i++) 0 !== i && (o = this._analisysTowPoints(t[i - 1], t[i]), r.push(o.join(""))); return o = this._analisysTowPoints(t[0], t[n - 1], !0), r.push(o.join("")), r.join("") } } }, { key: "_analisysTowPoints", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; if (!1 !== this.options.enablePointer) { var r = this.flen,
                            o = t.time - e.time,
                            i = o.toString(),
                            s = e.pointerName + this.gapChar.repeat(r - e.pointerName.length),
                            a = t.pointerName + this.gapChar.repeat(r - t.pointerName.length),
                            u = this.gapChar.repeat(4 - i.length) + i,
                            c = n ? ["%c", s, a, u, "ms\n%c"] : [s, a, u, "ms\n"]; return c } } }, { key: "report", value: function(e) { if (!1 !== this.options.enablePointer) { e = e || this.currentTask; var t = this._analisys(e);
                        this.pointsList = []; var n = this._timeFormat(),
                            r = "Pointer[".concat(e, "(").concat(n, ")]"),
                            o = 4 * this.maxNameLen,
                            i = (o - r.length) / 2;
                        console.log(["-".repeat(i), r, "-".repeat(i)].join("")), console.log("%c" + t, "color:#66a", "color:red", "color:#66a"), console.log("-".repeat(o)) } } }, { key: "_timeFormat", value: function() { var e = new Date,
                        t = this.zeroFix(e.getMonth() + 1, 2),
                        n = this.zeroFix(e.getDate(), 2); return "".concat(t, "-").concat(n, " ").concat(e.getHours(), ":").concat(e.getSeconds(), ":").concat(e.getMinutes(), "~").concat(e.getMilliseconds()) } }, { key: "zeroFix", value: function(e, t) { return ("000000000" + e).slice(-t) } }, { key: "reportAll", value: function() { if (!1 !== this.options.enablePointer)
                        for (var e in this.pointsList) Object.prototype.hasOwnProperty.call(this.pointsList, e) && this.eport(e) } }]), e }(),
        Vy = function e(t, n) { kn(this, e), this.userID = t; var r = {}; if (r.userID = t, !ja(n))
                for (var o = 0, i = n.length; o < i; o++) switch (n[o].tag) {
                    case rp.NICK:
                        r.nick = n[o].value; break;
                    case rp.GENDER:
                        r.gender = n[o].value; break;
                    case rp.BIRTHDAY:
                        r.birthday = n[o].value; break;
                    case rp.LOCATION:
                        r.location = n[o].value; break;
                    case rp.SELFSIGNATURE:
                        r.selfSignature = n[o].value; break;
                    case rp.ALLOWTYPE:
                        r.allowType = n[o].value; break;
                    case rp.LANGUAGE:
                        r.language = n[o].value; break;
                    case rp.AVATAR:
                        r.avatar = n[o].value; break;
                    case rp.MESSAGESETTINGS:
                        r.messageSettings = n[o].value; break;
                    case rp.ADMINFORBIDTYPE:
                        r.adminForbidType = n[o].value; break;
                    case rp.LEVEL:
                        r.level = n[o].value; break;
                    case rp.ROLE:
                        r.role = n[o].value; break;
                    default:
                        ca.debug("snsProfileItem unkown tag->", n[o].tag) }
            this.profile = new jy(r) },
        Ky = function() {
            function e(t) { kn(this, e), this.userController = t, this.TAG = "friend", this.Actions = { G: "get", D: "delete" }, this.friends = new Map, this.pointer = new Hy } return An(e, [{ key: "isMyFriend", value: function(e) { var t = this.friends.has(e); return t || ca.debug("FriendHandler.isMyFriend " + e + " is not my friend"), t } }, { key: "_transformFriendList", value: function(e) { if (!ja(e) && !ja(e.infoItem)) { ca.info("FriendHandler._transformFriendList friendNum=" + e.friendNum); for (var t, n, r = e.infoItem, o = 0, i = r.length; o < i; o++) n = r[o].infoAccount, t = new Vy(n, r[o].snsProfileItem), this.friends.set(n, t) } } }, { key: "_friends2map", value: function(e) { var t = new Map; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]); return t } }, { key: "getFriendList", value: function() { var e = this,
                        t = {};
                    t.fromAccount = this.userController.getMyAccount(), ca.info("FriendHandler.getFriendList myAccount=" + t.fromAccount); var n = this.userController.generateConfig(this.TAG, this.Actions.G, t); return this.userController.request(n).then((function(t) { ca.info("FriendHandler.getFriendList ok"), e._transformFriendList(t.data); var n = Hn(e.friends.values()); return lg(n) })).catch((function(e) { return ca.error("FriendHandler.getFriendList error:", JSON.stringify(e)), pg(e) })) } }, { key: "deleteFriend", value: function(e) { if (!Array.isArray(e.toAccount)) return ca.error("FriendHandler.deleteFriend options.toAccount 必需是数组"), pg({ code: ff, message: Mh });
                    e.toAccount.length > 1e3 && (ca.warn("FriendHandler.deleteFriend 删除好友人数不能超过1000人"), e.toAccount.length = 1e3); var t = this.userController.generateConfig(this.TAG, this.Actions.D, e); return this.userController.request(t).then((function(e) { return ca.info("FriendHandler.deleteFriend ok"), lg() })).catch((function(e) { return ca.error("FriendHandler.deleteFriend error:", e), pg(e) })) } }]), e }(),
        $y = function e(t) { kn(this, e), ja || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0) },
        Yy = function() {
            function e(t) { kn(this, e), this.userController = t, this.TAG = "blacklist", this.Actions = { G: "get", C: "create", D: "delete" }, this.blacklistMap = new Map, this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0 } return An(e, [{ key: "getBlacklist", value: function() { var e = this,
                        t = {};
                    t.fromAccount = this.userController.getMyAccount(), t.maxLimited = this.maxLimited, t.startIndex = 0, t.lastSequence = this.curruentSequence; var n = new Mg;
                    n.setMethod(ym).setStart(); var r = this.userController.generateConfig(this.TAG, this.Actions.G, t); return this.userController.request(r).then((function(t) { var r = ja(t.data.blackListItem) ? 0 : t.data.blackListItem.length; return n.setCode(0).setNetworkType(e.userController.getNetworkType()).setText(r).setEnd(), ca.info("BlacklistHandler.getBlacklist ok"), e.curruentSequence = t.data.curruentSequence, e._handleResponse(t.data.blackListItem, !0), e._onBlacklistUpdated() })).catch((function(t) { return e.userController.probeNetwork().then((function(e) { var r = Bn(e, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(t, o, i).setEnd() })), ca.error("BlacklistHandler.getBlacklist error:", t), pg(t) })) } }, { key: "addBlacklist", value: function(e) { var t = this,
                        n = new Mg; if (n.setMethod(_m).setStart(), !ga(e.userIDList)) return n.setCode(gf).setMessage("BlacklistHandler.addBlacklist options.userIDList 必需是数组").setNetworkType(this.userController.getNetworkType()).setEnd(), ca.error("BlacklistHandler.addBlacklist options.userIDList 必需是数组"), pg({ code: gf, message: Eh }); var r = this.userController.tim.loginInfo.identifier; if (1 === e.userIDList.length && e.userIDList[0] === r) return n.setCode(vf).setMessage(kh).setNetworkType(this.userController.getNetworkType()).setEnd(), ca.error("BlacklistHandler.addBlacklist 不能把自己拉黑"), pg({ code: vf, message: kh });
                    e.userIDList.includes(r) && (e.userIDList = e.userIDList.filter((function(e) { return e !== r })), ca.warn("BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤")), e.fromAccount = this.userController.getMyAccount(), e.toAccount = e.userIDList; var o = this.userController.generateConfig(this.TAG, this.Actions.C, e); return this.userController.request(o).then((function(r) { return n.setCode(0).setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setEnd(), ca.info("BlacklistHandler.addBlacklist ok"), t._handleResponse(r.data.resultItem, !0), t._onBlacklistUpdated() })).catch((function(e) { return t.userController.probeNetwork().then((function(t) { var r = Bn(t, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(e, o, i).setEnd() })), ca.error("BlacklistHandler.addBlacklist error:", e), pg(e) })) } }, { key: "_handleResponse", value: function(e, t) { if (!ja(e))
                        for (var n, r, o, i = 0, s = e.length; i < s; i++) r = e[i].to, o = e[i].resultCode, (ma(o) || 0 === o) && (t ? ((n = this.blacklistMap.has(r) ? this.blacklistMap.get(r) : new $y).userID = r, !ja(e[i].addBlackTimeStamp) && (n.timeStamp = e[i].addBlackTimeStamp), this.blacklistMap.set(r, n)) : this.blacklistMap.has(r) && (n = this.blacklistMap.get(r), this.blacklistMap.delete(r)));
                    ca.log("BlacklistHandler._handleResponse total=" + this.blacklistMap.size + " bAdd=" + t) } }, { key: "deleteBlacklist", value: function(e) { var t = this,
                        n = new Mg; if (n.setMethod(Cm).setStart(), !ga(e.userIDList)) return n.setCode(mf).setMessage("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组").setNetworkType(this.userController.getNetworkType()).setEnd(), ca.error("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"), pg({ code: mf, message: Dh });
                    e.fromAccount = this.userController.getMyAccount(), e.toAccount = e.userIDList; var r = this.userController.generateConfig(this.TAG, this.Actions.D, e); return this.userController.request(r).then((function(r) { return n.setCode(0).setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setEnd(), ca.info("BlacklistHandler.deleteBlacklist ok"), t._handleResponse(r.data.resultItem, !1), t._onBlacklistUpdated() })).catch((function(e) { return t.userController.probeNetwork().then((function(t) { var r = Bn(t, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(e, o, i).setEnd() })), ca.error("BlacklistHandler.deleteBlacklist error:", e), pg(e) })) } }, { key: "_onBlacklistUpdated", value: function() { var e = Hn(this.blacklistMap.keys()); return this.userController.emitOuterEvent(ln.BLACKLIST_UPDATED, e), lg(e) } }, { key: "handleBlackListDelAccount", value: function(e) { for (var t, n = [], r = 0, o = e.length; r < o; r++) t = e[r], this.blacklistMap.has(t) && (this.blacklistMap.delete(t), n.push(t));
                    n.length > 0 && (ca.log("BlacklistHandler.handleBlackListDelAccount delCount=" + n.length + " : " + n.join(",")), this.userController.emitOuterEvent(ln.BLACKLIST_UPDATED, Hn(this.blacklistMap.keys()))) } }, { key: "handleBlackListAddAccount", value: function(e) { for (var t, n = [], r = 0, o = e.length; r < o; r++) t = e[r], this.blacklistMap.has(t) || (this.blacklistMap.set(t, new $y({ userID: t })), n.push(t));
                    n.length > 0 && (ca.log("BlacklistHandler.handleBlackListAddAccount addCount=" + n.length + " : " + n.join(",")), this.userController.emitOuterEvent(ln.BLACKLIST_UPDATED, Hn(this.blacklistMap.keys()))) } }, { key: "reset", value: function() { this.blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0 } }]), e }(),
        zy = function() {
            function e(t) { kn(this, e), this.userController = t, this.TAG = "applyC2C", this.Actions = { C: "create", G: "get", D: "delete", U: "update" } } return An(e, [{ key: "applyAddFriend", value: function(e) { var t = this,
                        n = this.userController.generateConfig(this.TAG, this.Actions.C, e),
                        r = this.userController.request(n); return r.then((function(e) { t.userController.isActionSuccessful("applyAddFriend", t.Actions.C, e) })).catch((function(e) {})), r } }, { key: "getPendency", value: function(e) { var t = this,
                        n = this.userController.generateConfig(this.TAG, this.Actions.G, e),
                        r = this.userController.request(n); return r.then((function(e) { t.userController.isActionSuccessful("getPendency", t.Actions.G, e) })).catch((function(e) {})), r } }, { key: "deletePendency", value: function(e) { var t = this,
                        n = this.userController.generateConfig(this.TAG, this.Actions.D, e),
                        r = this.userController.request(n); return r.then((function(e) { t.userController.isActionSuccessful("deletePendency", t.Actions.D, e) })).catch((function(e) {})), r } }, { key: "replyPendency", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = this.userController.generateConfig(this.TAG, this.Actions.U, t),
                        r = this.userController.request(n); return r.then((function(t) { e.userController.isActionSuccessful("replyPendency", e.Actions.U, t) })).catch((function(e) {})), r } }]), e }(),
        Wy = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).profileHandler = new By(qn(r)), r.friendHandler = new Ky(qn(r)), r.blacklistHandler = new Yy(qn(r)), r.applyC2CHandler = new zy(qn(r)), r._initializeListener(), r } return An(n, [{ key: "_initializeListener", value: function(e) { var t = this.tim.innerEmitter;
                    t.on(rd, this.onContextUpdated, this), t.on(Dd, this.onProfileModified, this), t.on(Ed, this.onNewFriendMessages, this), t.on(qd, this.onConversationsProfileUpdated, this) } }, { key: "onContextUpdated", value: function(e) { var t = this.tim.context;!1 != !!t.a2Key && !1 != !!t.tinyID && (this.profileHandler.getMyProfile(), this.friendHandler.getFriendList(), this.blacklistHandler.getBlacklist()) } }, { key: "onGotMyProfile", value: function() { this.triggerReady() } }, { key: "onProfileModified", value: function(e) { this.profileHandler.onProfileModified(e) } }, { key: "onNewFriendMessages", value: function(e) { ca.debug("onNewFriendMessages", JSON.stringify(e.data)), ja(e.data.blackListDelAccount) || this.blacklistHandler.handleBlackListDelAccount(e.data.blackListDelAccount), ja(e.data.blackListAddAccount) || this.blacklistHandler.handleBlackListAddAccount(e.data.blackListAddAccount) } }, { key: "onConversationsProfileUpdated", value: function(e) { this.profileHandler.onConversationsProfileUpdated(e.data) } }, { key: "getMyAccount", value: function() { return this.tim.context.identifier } }, { key: "isMyFriend", value: function(e) { return this.friendHandler.isMyFriend(e) } }, { key: "generateConfig", value: function(e, t, n) { return { name: e, action: t, param: n } } }, { key: "getMyProfile", value: function() { return this.profileHandler.getMyProfile() } }, { key: "getUserProfile", value: function(e) { return this.profileHandler.getUserProfile(e) } }, { key: "updateMyProfile", value: function(e) { return this.profileHandler.updateMyProfile(e) } }, { key: "getFriendList", value: function() { return this.friendHandler.getFriendList() } }, { key: "deleteFriend", value: function(e) { return this.friendHandler.deleteFriend(e) } }, { key: "getBlacklist", value: function() { return this.blacklistHandler.getBlacklist() } }, { key: "addBlacklist", value: function(e) { return this.blacklistHandler.addBlacklist(e) } }, { key: "deleteBlacklist", value: function(e) { return this.blacklistHandler.deleteBlacklist(e) } }, { key: "applyAddFriend", value: function(e) { return this.applyC2CHandler.applyAddFriend(e) } }, { key: "getPendency", value: function(e) { return this.applyC2CHandler.getPendency(e) } }, { key: "deletePendency", value: function(e) { return this.applyC2CHandler.deletePendency(e) } }, { key: "replyPendency", value: function(e) { return this.applyC2CHandler.replyPendency(e) } }, { key: "reset", value: function() { ca.info("UserController.reset"), this.resetReady(), this.profileHandler.reset(), this.blacklistHandler.reset(), this.checkTimes = 0 } }]), n }(og),
        Xy = [],
        Jy = Xy.sort,
        Qy = o((function() { Xy.sort(void 0) })),
        Zy = o((function() { Xy.sort(null) })),
        e_ = Ke("sort");
    Ae({ target: "Array", proto: !0, forced: Qy || !Zy || !e_ }, { sort: function(e) { return void 0 === e ? Jy.call(Oe(this)) : Jy.call(Oe(this), be(e)) } }); var t_ = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"],
        n_ = function() {
            function e(t) { kn(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = { messageRemindType: "", joinTime: "", nameCard: "", role: "" }, this.lastMessage = { lastTime: "", lastSequence: "", fromAccount: "", messageForShow: "" }, this.nextMessageSeq = "", this.memberNum = "", this.maxMemberNum = "", this.joinOption = "", this.groupCustomField = [], this.muteAllMembers = void 0, this._initGroup(t) } return An(e, [{ key: "_initGroup", value: function(e) { for (var t in e) t_.indexOf(t) < 0 || ("selfInfo" !== t ? this[t] = e[t] : this.updateSelfInfo(e[t])) } }, { key: "updateGroup", value: function(e) { e.lastMsgTime && (this.lastMessage.lastTime = e.lastMsgTime), ma(e.muteAllMembers) || ("On" === e.muteAllMembers ? e.muteAllMembers = !0 : e.muteAllMembers = !1), e.groupCustomField && Pa(this.groupCustomField, e.groupCustomField), Ta(this, e, ["members", "errorCode", "lastMsgTime", "groupCustomField"]) } }, { key: "updateSelfInfo", value: function(e) { var t = e.nameCard,
                        n = e.joinTime,
                        r = e.role,
                        o = e.messageRemindType;
                    Ta(this.selfInfo, { nameCard: t, joinTime: n, role: r, messageRemindType: o }, [], ["", null, void 0, 0, NaN]) } }, { key: "setSelfNameCard", value: function(e) { this.selfInfo.nameCard = e } }]), e }(),
        r_ = function(e, t) { if (ma(t)) return ""; switch (e) {
                case pn.MSG_TEXT:
                    return t.text;
                case pn.MSG_IMAGE:
                    return "[图片]";
                case pn.MSG_GEO:
                    return "[位置]";
                case pn.MSG_AUDIO:
                    return "[语音]";
                case pn.MSG_VIDEO:
                    return "[视频]";
                case pn.MSG_FILE:
                    return "[文件]";
                case pn.MSG_CUSTOM:
                    return "[自定义消息]";
                case pn.MSG_GRP_TIP:
                    return "[群提示消息]";
                case pn.MSG_GRP_SYS_NOTICE:
                    return "[群系统通知]";
                case pn.MSG_FACE:
                    return "[动画表情]";
                default:
                    return "" } },
        o_ = function() {
            function e(t) { var n;
                kn(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, this.type = t.type || "", this.lastMessage = (n = t.lastMessage, ma(n) ? { lastTime: 0, lastSequence: 0, fromAccount: 0, messageForShow: "", payload: null, type: "", isRevoked: !1 } : n instanceof Vh ? { lastTime: n.time || 0, lastSequence: n.sequence || 0, fromAccount: n.from || "", messageForShow: r_(n.type, n.payload), payload: n.payload || null, type: n.type || null, isRevoked: !1 } : On({}, n, { isRevoked: !1, messageForShow: r_(n.type, n.payload) })), t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this._initProfile(t) } return An(e, [{ key: "_initProfile", value: function(e) { var t = this;
                    Object.keys(e).forEach((function(n) { switch (n) {
                            case "userProfile":
                                t.userProfile = e.userProfile; break;
                            case "groupProfile":
                                t.groupProfile = e.groupProfile } })), ma(this.userProfile) && this.type === pn.CONV_C2C ? this.userProfile = new jy({ userID: e.conversationID.replace("C2C", "") }) : ma(this.groupProfile) && this.type === pn.CONV_GROUP && (this.groupProfile = new n_({ groupID: e.conversationID.replace("GROUP", "") })) } }, { key: "updateUnreadCount", value: function(e, t) { ma(e) || (this.subType === pn.GRP_CHATROOM || xa(this.subType) ? this.unreadCount = 0 : t && this.type === pn.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e) } }, { key: "reduceUnreadCount", value: function() { this.unreadCount >= 1 && (this.unreadCount -= 1) } }, { key: "isLastMessageRevoked", value: function(e) { var t = e.sequence,
                        n = e.time; return this.type === pn.CONV_C2C && t === this.lastMessage.lastSequence && n === this.lastMessage.lastTime || this.type === pn.CONV_GROUP && t === this.lastMessage.lastSequence } }, { key: "setLastMessageRevoked", value: function(e) { this.lastMessage.isRevoked = e } }, { key: "toAccount", get: function() { return this.conversationID.replace("C2C", "").replace("GROUP", "") } }, { key: "subType", get: function() { return this.groupProfile ? this.groupProfile.type : "" } }]), e }(),
        i_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).pagingStatus = Gu.NOT_START, r.pagingTimeStamp = 0, r.conversationMap = new Map, r.tempGroupList = [], r._initListeners(), r } return An(n, [{ key: "hasLocalConversationMap", value: function() { return this.conversationMap.size > 0 } }, { key: "createLocalConversation", value: function(e) { return this.conversationMap.has(e) ? this.conversationMap.get(e) : new o_({ conversationID: e, type: e.slice(0, 3) === pn.CONV_C2C ? pn.CONV_C2C : pn.CONV_GROUP }) } }, { key: "hasLocalConversation", value: function(e) { return this.conversationMap.has(e) } }, { key: "getConversationList", value: function() { var e = this;
                    ca.log("ConversationController.getConversationList."), this.pagingStatus === Gu.REJECTED && (ca.log("ConversationController.getConversationList. continue to sync conversationList"), this._syncConversationList()); var t = new Mg; return t.setMethod(Ug).setStart(), this.request({ name: "conversation", action: "query" }).then((function(n) { var r = n.data.conversations,
                            o = void 0 === r ? [] : r,
                            i = e._getConversationOptions(o); return e._updateLocalConversationList(i, !0), e._setStorageConversationList(), t.setCode(0).setText(o.length).setNetworkType(e.getNetworkType()).setEnd(), ca.log("ConversationController.getConversationList ok."), lg({ conversationList: e.getLocalConversationList() }) })).catch((function(n) { return e.probeNetwork().then((function(e) { var r = Bn(e, 2),
                                o = r[0],
                                i = r[1];
                            t.setError(n, o, i).setEnd() })), ca.error("ConversationController.getConversationList error:", n), pg(n) })) } }, { key: "_syncConversationList", value: function() { var e = this,
                        t = new Mg; return t.setMethod(Bg).setStart(), this.pagingStatus === Gu.NOT_START && this.conversationMap.clear(), this._autoPagingSyncConversationList().then((function(n) { return e.pagingStatus = Gu.RESOLVED, e._setStorageConversationList(), t.setCode(0).setText("".concat(e.conversationMap.size)).setNetworkType(e.getNetworkType()).setEnd(), n })).catch((function(n) { return e.pagingStatus = Gu.REJECTED, t.setText(e.pagingTimeStamp), e.probeNetwork().then((function(e) { var r = Bn(e, 2),
                                o = r[0],
                                i = r[1];
                            t.setError(n, o, i).setEnd() })), pg(n) })) } }, { key: "_autoPagingSyncConversationList", value: function() { var e = this; return this.pagingStatus = Gu.PENDING, this.request({ name: "conversation", action: "pagingQuery", param: { fromAccount: this.tim.context.identifier, timeStamp: this.pagingTimeStamp, orderType: 1 } }).then((function(t) { var n = t.data,
                            r = n.completeFlag,
                            o = n.conversations,
                            i = void 0 === o ? [] : o,
                            s = n.timeStamp; if (ca.log("ConversationController._autoPagingSyncConversationList completeFlag=".concat(r, " nums=").concat(i.length)), i.length > 0) { var a = e._getConversationOptions(i);
                            e._updateLocalConversationList(a, !0) } return e._isReady ? e._emitConversationUpdate() : e.triggerReady(), e.pagingTimeStamp = s, 1 !== r ? e._autoPagingSyncConversationList() : lg() })) } }, { key: "getConversationProfile", value: function(e) { var t = this,
                        n = this.conversationMap.has(e) ? this.conversationMap.get(e) : this.createLocalConversation(e); if (n._isInfoCompleted || n.type === pn.CONV_SYSTEM) return lg({ conversation: n }); var r = new Mg; return r.setMethod(qg).setStart(), ca.log("ConversationController.getConversationProfile. conversationID:", e), this._updateUserOrGroupProfileCompletely(n).then((function(n) { return r.setCode(0).setNetworkType(t.getNetworkType()).setText("conversationID=".concat(e, " unreadCount=").concat(n.data.conversation.unreadCount)).setEnd(), ca.log("ConversationController.getConversationProfile ok. conversationID:", e), n })).catch((function(n) { return t.probeNetwork().then((function(t) { var o = Bn(t, 2),
                                i = o[0],
                                s = o[1];
                            r.setError(n, i, s).setText("conversationID=".concat(e)).setEnd() })), ca.error("ConversationController.getConversationProfile error:", n), pg(n) })) } }, { key: "deleteConversation", value: function(e) { var t = this,
                        n = {}; if (!this.conversationMap.has(e)) { var r = new Ip({ code: zp, message: ih }); return pg(r) } switch (this.conversationMap.get(e).type) {
                        case pn.CONV_C2C:
                            n.type = 1, n.toAccount = e.slice(3); break;
                        case pn.CONV_GROUP:
                            n.type = 2, n.toGroupID = e.slice(5); break;
                        case pn.CONV_SYSTEM:
                            return this.tim.groupController.deleteGroupSystemNotice({ messageList: this.tim.messageController.getLocalMessageList(e) }), this.deleteLocalConversation(e), lg({ conversationID: e });
                        default:
                            var o = new Ip({ code: Xp, message: ah }); return pg(o) } var i = new Mg; return i.setMethod(Fg).setText("conversationID=".concat(e)).setStart(), ca.log("ConversationController.deleteConversation. conversationID:", e), this.tim.setMessageRead({ conversationID: e }).then((function() { return t.request({ name: "conversation", action: "delete", param: n }) })).then((function() { return i.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("ConversationController.deleteConversation ok. conversationID:", e), t.deleteLocalConversation(e), lg({ conversationID: e }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            i.setError(e, r, o).setEnd() })), ca.error("ConversationController.deleteConversation error:", e), pg(e) })) } }, { key: "getLocalConversationList", value: function() { return Hn(this.conversationMap.values()) } }, { key: "getLocalConversation", value: function(e) { return this.conversationMap.get(e) } }, { key: "_initLocalConversationList", value: function() { var e = new Mg;
                    e.setMethod(jg).setStart(), ca.time(_g), ca.log("ConversationController._initLocalConversationList init"); var t = this._getStorageConversationList(); if (t) { for (var n = t.length, r = 0; r < n; r++) this.conversationMap.set(t[r].conversationID, new o_(t[r]));
                        this._emitConversationUpdate(!0, !1), e.setCode(0).setNetworkType(this.getNetworkType()).setText(n).setEnd() } else e.setCode(0).setNetworkType(this.getNetworkType()).setText(0).setEnd();
                    this._syncConversationList() } }, { key: "_getStorageConversationList", value: function() { return this.tim.storage.getItem("conversationMap") } }, { key: "_setStorageConversationList", value: function() { var e = this.getLocalConversationList().slice(0, 20).map((function(e) { return { conversationID: e.conversationID, type: e.type, subType: e.subType, lastMessage: e.lastMessage, groupProfile: e.groupProfile, userProfile: e.userProfile } }));
                    this.tim.storage.setItem("conversationMap", e) } }, { key: "_initListeners", value: function() { var e = this;
                    this.tim.innerEmitter.once(rd, this._initLocalConversationList, this), this.tim.innerEmitter.on(ad, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(ud, this._handleSyncMessages, this), this.tim.innerEmitter.on(cd, this._handleSyncMessages, this), this.tim.innerEmitter.on(ld, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(pd, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(fd, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on(Od, this._onGroupListUpdated, this), this.tim.innerEmitter.on(jd, this._updateConversationUserProfile, this), this.tim.innerEmitter.on(hd, this._onMessageRevoked, this), this.ready((function() { e.tempGroupList.length > 0 && (e._updateConversationGroupProfile(e.tempGroupList), e.tempGroupList.length = 0) })) } }, { key: "_onGroupListUpdated", value: function(e) { this._updateConversationGroupProfile(e.data) } }, { key: "_updateConversationGroupProfile", value: function(e) { var t = this;
                    ga(e) && 0 === e.length || (this.hasLocalConversationMap() ? (e.forEach((function(e) { var n = "GROUP".concat(e.groupID); if (t.conversationMap.has(n)) { var r = t.conversationMap.get(n);
                            r.groupProfile = e, r.lastMessage.lastSequence < e.nextMessageSeq && (r.lastMessage.lastSequence = e.nextMessageSeq - 1), r.subType || (r.subType = e.type) } })), this._emitConversationUpdate(!0, !1)) : this.tempGroupList = e) } }, { key: "_updateConversationUserProfile", value: function(e) { var t = this;
                    e.data.forEach((function(e) { var n = "C2C".concat(e.userID);
                        t.conversationMap.has(n) && (t.conversationMap.get(n).userProfile = e) })), this._emitConversationUpdate(!0, !1) } }, { key: "_onMessageRevoked", value: function(e) { var t = this,
                        n = e.data; if (0 !== n.length) { var r = null,
                            o = !1;
                        n.forEach((function(e) {
                            (r = t.conversationMap.get(e.conversationID)) && r.isLastMessageRevoked(e) && (o = !0, r.setLastMessageRevoked(!0)) })), o && this._emitConversationUpdate(!0, !1) } } }, { key: "_handleSyncMessages", value: function(e) { this._onSendOrReceiveMessage(e, !0) } }, { key: "_onSendOrReceiveMessage", value: function(e) { var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = e.data.eventDataList;
                    this._isReady ? 0 !== r.length && (this._updateLocalConversationList(r, !1, n), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready((function() { t._onSendOrReceiveMessage(e, n) })) } }, { key: "_updateLocalConversationList", value: function(e, t, n) { var r;
                    r = this._updateTempConversations(e, t, n), this.conversationMap = new Map(this._sortConversations([].concat(Hn(r.conversations), Hn(this.conversationMap)))), t || this._updateUserOrGroupProfile(r.newerConversations) } }, { key: "_updateTempConversations", value: function(e, t, n) { for (var r = [], o = [], i = 0, s = e.length; i < s; i++) { var a = new o_(e[i]),
                            u = this.conversationMap.get(a.conversationID); if (this.conversationMap.has(a.conversationID)) { var c = ["unreadCount", "allowType", "adminForbidType", "payload"];
                            n && c.push("lastMessage"), Ta(u, a, c, [null, void 0, "", 0, NaN]), u.updateUnreadCount(a.unreadCount, t), n || (u.lastMessage.payload = e[i].lastMessage.payload), this.conversationMap.delete(u.conversationID), r.push([u.conversationID, u]) } else { if (a.type === pn.CONV_GROUP) { var l = a.groupProfile.groupID,
                                    p = this.tim.groupController.getLocalGroupProfile(l);
                                p && (a.groupProfile = p, a.updateUnreadCount(0)) }
                            o.push(a), r.push([a.conversationID, a]) } } return { conversations: r, newerConversations: o } } }, { key: "_sortConversations", value: function(e) { return e.sort((function(e, t) { return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime })) } }, { key: "_updateUserOrGroupProfile", value: function(e) { var t = this; if (0 !== e.length) { var n = [],
                            r = [];
                        e.forEach((function(e) { if (e.type === pn.CONV_C2C) n.push(e.toAccount);
                            else if (e.type === pn.CONV_GROUP) { var o = e.toAccount;
                                t.tim.groupController.hasLocalGroup(o) ? e.groupProfile = t.tim.groupController.getLocalGroupProfile(o) : r.push(o) } })), n.length > 0 && this.tim.getUserProfile({ userIDList: n }).then((function(e) { var n = e.data;
                            ga(n) ? n.forEach((function(e) { t.conversationMap.get("C2C".concat(e.userID)).userProfile = e })) : t.conversationMap.get("C2C".concat(n.userID)).userProfile = n })), r.length > 0 && this.tim.groupController.getGroupProfileAdvance({ groupIDList: r, responseFilter: { groupBaseInfoFilter: ["Type", "Name", "FaceUrl"] } }).then((function(e) { e.data.successGroupList.forEach((function(e) { var n = "GROUP".concat(e.groupID); if (t.conversationMap.has(n)) { var r = t.conversationMap.get(n);
                                    Ta(r.groupProfile, e, [], [null, void 0, "", 0, NaN]), !r.subType && e.type && (r.subType = e.type) } })) })) } } }, { key: "_updateUserOrGroupProfileCompletely", value: function(e) { var t = this; return e.type === pn.CONV_C2C ? this.tim.getUserProfile({ userIDList: [e.toAccount] }).then((function(n) { var r = n.data; return 0 === r.length ? pg(new Ip({ code: Wp, message: sh })) : (e.userProfile = r[0], e._isInfoCompleted = !0, t._unshiftConversation(e), lg({ conversation: e })) })) : this.tim.getGroupProfile({ groupID: e.toAccount }).then((function(n) { return e.groupProfile = n.data.group, e._isInfoCompleted = !0, t._unshiftConversation(e), lg({ conversation: e }) })) } }, { key: "_unshiftConversation", value: function(e) { e instanceof o_ && !this.conversationMap.has(e.conversationID) && (this.conversationMap = new Map([
                        [e.conversationID, e]
                    ].concat(Hn(this.conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(!0, !1)) } }, { key: "deleteLocalConversation", value: function(e) { return this.conversationMap.delete(e), this._setStorageConversationList(), this.emitInnerEvent(Fd, e), this._emitConversationUpdate(!0, !1), this.conversationMap.has(e) } }, { key: "_getConversationOptions", value: function(e) { var t = [],
                        n = e.filter((function(e) { var t = e.lastMsg; return da(t) })).map((function(e) { if (1 === e.type) { var n = { userID: e.userID, nick: e.c2CNick, avatar: e.c2CImage }; return t.push(n), { conversationID: "C2C".concat(e.userID), type: "C2C", lastMessage: { lastTime: e.time, lastSequence: e.sequence, fromAccount: e.lastC2CMsgFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null }, userProfile: new jy(n) } } return { conversationID: "GROUP".concat(e.groupID), type: "GROUP", lastMessage: { lastTime: e.time, lastSequence: e.messageReadSeq + e.unreadCount, fromAccount: e.msgGroupFromAccount, messageForShow: e.messageShow, type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null, payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null }, groupProfile: new n_({ groupID: e.groupID, name: e.groupNick, avatar: e.groupImage }), unreadCount: e.unreadCount } })); return t.length > 0 && this.emitInnerEvent(qd, t), n } }, { key: "_emitConversationUpdate", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = Hn(this.conversationMap.values());
                    t && this.emitInnerEvent(Ud, n), e && this.emitOuterEvent(ln.CONVERSATION_LIST_UPDATED, n) } }, { key: "_conversationMapTreeShaking", value: function(e) { var t = this,
                        n = new Map(Hn(this.conversationMap));
                    e.forEach((function(e) { return n.delete(e.conversationID) })), n.has(pn.CONV_SYSTEM) && n.delete(pn.CONV_SYSTEM); var r = this.tim.groupController.getJoinedAVChatRoom();
                    r && n.delete("".concat(pn.CONV_GROUP).concat(r.groupID)), Hn(n.keys()).forEach((function(e) { return t.conversationMap.delete(e) })) } }, { key: "reset", value: function() { this.pagingStatus = Gu.NOT_START, this.pagingTimeStamp = 0, this.conversationMap.clear(), this.resetReady(), this.tim.innerEmitter.once(rd, this._initLocalConversationList, this) } }]), n }(og),
        s_ = 1..toFixed,
        a_ = Math.floor,
        u_ = function(e, t, n) { return 0 === t ? n : t % 2 == 1 ? u_(e, t - 1, n * e) : u_(e * e, t / 2, n) },
        c_ = s_ && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !o((function() { s_.call({}) }));
    Ae({ target: "Number", proto: !0, forced: c_ }, { toFixed: function(e) { var t, n, r, o, i = function(e) { if ("number" != typeof e && "Number" != p(e)) throw TypeError("Incorrect invocation"); return +e }(this),
                s = ie(e),
                a = [0, 0, 0, 0, 0, 0],
                u = "",
                c = "0",
                l = function(e, t) { for (var n = -1, r = t; ++n < 6;) r += e * a[n], a[n] = r % 1e7, r = a_(r / 1e7) },
                f = function(e) { for (var t = 6, n = 0; --t >= 0;) n += a[t], a[t] = a_(n / e), n = n % e * 1e7 },
                h = function() { for (var e = 6, t = ""; --e >= 0;)
                        if ("" !== t || 0 === e || 0 !== a[e]) { var n = String(a[e]);
                            t = "" === t ? n : t + kr.call("0", 7 - n.length) + n }
                    return t }; if (s < 0 || s > 20) throw RangeError("Incorrect fraction digits"); if (i != i) return "NaN"; if (i <= -1e21 || i >= 1e21) return String(i); if (i < 0 && (u = "-", i = -i), i > 1e-21)
                if (n = (t = function(e) { for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096; for (; n >= 2;) t += 1, n /= 2; return t }(i * u_(2, 69, 1)) - 69) < 0 ? i * u_(2, -t, 1) : i / u_(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) { for (l(0, n), r = s; r >= 7;) l(1e7, 0), r -= 7; for (l(u_(10, r, 1), 0), r = t - 1; r >= 23;) f(1 << 23), r -= 23;
                    f(1 << r), l(1, 1), f(2), c = h() } else l(0, n), l(1 << -t, 0), c = h() + kr.call("0", s);
            return c = s > 0 ? u + ((o = c.length) <= s ? "0." + kr.call("0", s - o) + c : c.slice(0, o - s) + "." + c.slice(o - s)) : u + c } }); var l_ = [].push,
        p_ = Math.min,
        f_ = !o((function() { return !RegExp(4294967295, "y") }));
    ps("split", 2, (function(e, t, n) { var r; return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) { var r = String(d(this)),
                o = void 0 === n ? 4294967295 : n >>> 0; if (0 === o) return []; if (void 0 === e) return [r]; if (!ns(e)) return t.call(r, e, o); for (var i, s, a, u = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, p = new RegExp(e.source, c + "g");
                (i = Xi.call(p, r)) && !((s = p.lastIndex) > l && (u.push(r.slice(l, i.index)), i.length > 1 && i.index < r.length && l_.apply(u, i.slice(1)), a = i[0].length, l = s, u.length >= o));) p.lastIndex === i.index && p.lastIndex++; return l === r.length ? !a && p.test("") || u.push("") : u.push(r.slice(l)), u.length > o ? u.slice(0, o) : u } : "0".split(void 0, 0).length ? function(e, n) { return void 0 === e && 0 === n ? [] : t.call(this, e, n) } : t, [function(t, n) { var o = d(this),
                i = null == t ? void 0 : t[e]; return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n) }, function(e, o) { var i = n(r, e, this, o, r !== t); if (i.done) return i.value; var s = D(e),
                a = String(this),
                u = ko(s, RegExp),
                c = s.unicode,
                l = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (f_ ? "y" : "g"),
                p = new u(f_ ? s : "^(?:" + s.source + ")", l),
                f = void 0 === o ? 4294967295 : o >>> 0; if (0 === f) return []; if (0 === a.length) return null === ds(p, a) ? [a] : []; for (var h = 0, d = 0, g = []; d < a.length;) { p.lastIndex = f_ ? d : 0; var m, v = ds(p, f_ ? a : a.slice(d)); if (null === v || (m = p_(ae(p.lastIndex + (f_ ? 0 : d)), a.length)) === h) d = hs(a, d, c);
                else { if (g.push(a.slice(h, d)), g.length === f) return g; for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]), g.length === f) return g;
                    d = h = m } } return g.push(a.slice(h)), g }] }), !f_); var h_ = function() {
            function e(t) { if (kn(this, e), void 0 === t) throw new Ip({ code: bp, message: jf }); if (void 0 === t.tim) throw new Ip({ code: bp, message: "".concat(jf, ".tim") });
                this.list = new Map, this.tim = t.tim, this._initializeOptions(t) } return An(e, [{ key: "getLocalOldestMessageByConversationID", value: function(e) { if (!e) return null; if (!this.list.has(e)) return null; var t = this.list.get(e).values(); return t ? t.next().value : null } }, { key: "_initializeOptions", value: function(e) { this.options = {}; var t = { memory: { maxDatasPerKey: 100, maxBytesPerData: 256, maxKeys: 0 }, cache: { maxDatasPerKey: 10, maxBytesPerData: 256, maxKeys: 0 } }; for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) { if (void 0 === e[n]) { this.options[n] = t[n]; continue } var r = t[n]; for (var o in r)
                                if (Object.prototype.hasOwnProperty.call(r, o)) { if (void 0 === e[n][o]) { this.options[n][o] = r[o]; continue }
                                    this.options[n][o] = e[n][o] } } } }, { key: "pushIn", value: function(e) { var t = e.conversationID,
                        n = e.ID,
                        r = !0; return this.list.has(t) || this.list.set(t, new Map), this.list.has(t) && this.list.get(t).has(n) ? r = !1 : this.list.get(t).set(n, e), r } }, { key: "unshift", value: function(e) { ga(e) ? e.length > 0 && this._unshiftMultipleMessages(e) : this._unshiftSingleMessage(e) } }, { key: "_unshiftSingleMessage", value: function(e) { var t = e.conversationID,
                        n = e.ID; if (!this.list.has(t)) return this.list.set(t, new Map), void this.list.get(t).set(n, e); var r = Array.from(this.list.get(t));
                    r.unshift([n, e]), this.list.set(t, new Map(r)) } }, { key: "_unshiftMultipleMessages", value: function(e) { for (var t = e.length, n = [], r = e[0].conversationID, o = this.list.has(r) ? Array.from(this.list.get(r)) : [], i = 0; i < t; i++) n.push([e[i].ID, e[i]]);
                    this.list.set(r, new Map(n.concat(o))) } }, { key: "remove", value: function(e) { var t = e.conversationID,
                        n = e.ID;
                    this.list.has(t) && this.list.get(t).delete(n) } }, { key: "revoke", value: function(e, t, n) { if (ca.debug("revoke message", e, t, n), this.list.has(e)) { var r, o = $n(this.list.get(e)); try { for (o.s(); !(r = o.n()).done;) { var i = Bn(r.value, 2)[1]; if (i.sequence === t && !i.isRevoked && (ma(n) || i.random === n)) return i.isRevoked = !0, i } } catch (s) { o.e(s) } finally { o.f() } } return null } }, { key: "removeByConversationID", value: function(e) { this.list.has(e) && this.list.delete(e) } }, { key: "hasLocalMessageList", value: function(e) { return this.list.has(e) } }, { key: "getLocalMessageList", value: function(e) { return this.hasLocalMessageList(e) ? Hn(this.list.get(e).values()) : [] } }, { key: "hasLocalMessage", value: function(e, t) { return !!this.hasLocalMessageList(e) && this.list.get(e).has(t) } }, { key: "getLocalMessage", value: function(e, t) { return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null } }, { key: "reset", value: function() { this.list.clear() } }]), e }(),
        d_ = function() {
            function e(t) { kn(this, e), this.tim = t } return An(e, [{ key: "setMessageRead", value: function(e) { var t = e.conversationID,
                        n = e.messageID,
                        r = this.tim.conversationController.getLocalConversation(t); if (ca.log("ReadReportHandler.setMessageRead conversationID=".concat(t, " unreadCount=").concat(r ? r.unreadCount : 0)), !r || 0 === r.unreadCount) return lg(); var o = n ? this.tim.messageController.getLocalMessage(t, n) : null; switch (r.type) {
                        case pn.CONV_C2C:
                            return this._setC2CMessageRead({ conversationID: t, lastMessageTime: o ? o.time : r.lastMessage.lastTime });
                        case pn.CONV_GROUP:
                            return this._setGroupMessageRead({ conversationID: t, lastMessageSeq: o ? o.sequence : r.lastMessage.lastSequence });
                        case pn.CONV_SYSTEM:
                            return r.unreadCount = 0, lg();
                        default:
                            return lg() } } }, { key: "_setC2CMessageRead", value: function(e) { var t = this,
                        n = e.conversationID,
                        r = e.lastMessageTime;
                    ca.log("ReadReportHandler._setC2CMessageRead conversationID=".concat(n, " lastMessageTime=").concat(r)), pa(r) || ca.warn("ReadReportHandler._setC2CMessageRead 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确"); var o = new Mg; return o.setMethod(Gg).setText("".concat(n, "-").concat(r)).setStart(), this.tim.messageController.request({ name: "conversation", action: "setC2CMessageRead", param: { C2CMsgReaded: { cookie: "", C2CMsgReadedItem: [{ toAccount: n.replace("C2C", ""), lastMessageTime: r }] } } }).then((function() { return o.setCode(0).setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), ca.log("ReadReportHandler._setC2CMessageRead ok."), t._updateIsReadAfterReadReport({ conversationID: n, lastMessageTime: r }), t._updateUnreadCount(n), new ag })).catch((function(e) { return t.tim.netMonitor.probe().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                i = n[1];
                            o.setError(e, r, i).setEnd() })), ca.log("ReadReportHandler._setC2CMessageRead failed. ".concat(Ea(e))), pg(e) })) } }, { key: "_setGroupMessageRead", value: function(e) { var t = this,
                        n = e.conversationID,
                        r = e.lastMessageSeq;
                    ca.log("ReadReportHandler._setGroupMessageRead conversationID=".concat(n, " lastMessageSeq=").concat(r)), pa(r) || ca.warn("ReadReportHandler._setGroupMessageRead 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"); var o = new Mg; return o.setMethod(xg).setText("".concat(n, "-").concat(r)).setStart(), this.tim.messageController.request({ name: "conversation", action: "setGroupMessageRead", param: { groupID: n.replace("GROUP", ""), messageReadSeq: r } }).then((function() { return o.setCode(0).setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(), ca.log("ReadReportHandler._setGroupMessageRead ok."), t._updateIsReadAfterReadReport({ conversationID: n, lastMessageSeq: r }), t._updateUnreadCount(n), new ag })).catch((function(e) { return t.tim.netMonitor.probe().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                i = n[1];
                            o.setError(e, r, i).setEnd() })), ca.log("ReadReportHandler._setGroupMessageRead failed. ".concat(Ea(e))), pg(e) })) } }, { key: "_updateUnreadCount", value: function(e) { var t = this.tim,
                        n = t.conversationController,
                        r = t.messageController,
                        o = n.getLocalConversation(e),
                        i = r.getLocalMessageList(e);
                    o && (o.unreadCount = i.filter((function(e) { return !e.isRead })).length, ca.log("ReadReportHandler._updateUnreadCount conversationID=".concat(o.conversationID, " unreadCount=").concat(o.unreadCount))) } }, { key: "_updateIsReadAfterReadReport", value: function(e) { var t = e.conversationID,
                        n = e.lastMessageSeq,
                        r = e.lastMessageTime,
                        o = this.tim.messageController.getLocalMessageList(t); if (0 !== o.length)
                        for (var i, s = o.length - 1; s >= 0; s--)
                            if (i = o[s], !(r && i.time > r || n && i.sequence > n)) { if ("in" === i.flow && i.isRead) break;
                                i.setIsRead(!0) } } }, { key: "updateIsRead", value: function(e) { var t = this.tim,
                        n = t.conversationController,
                        r = t.messageController,
                        o = n.getLocalConversation(e),
                        i = r.getLocalMessageList(e); if (o && 0 !== i.length && !Ua(o.type)) { for (var s = [], a = 0; a < i.length; a++) "in" !== i[a].flow ? "out" !== i[a].flow || i[a].isRead || i[a].setIsRead(!0) : s.push(i[a]); var u = 0; if (o.type === pn.CONV_C2C) { var c = s.slice(-o.unreadCount).filter((function(e) { return e.isRevoked })).length;
                            u = s.length - o.unreadCount - c } else u = s.length - o.unreadCount; for (var l = 0; l < u && !s[l].isRead; l++) s[l].setIsRead(!0) } } }]), e }(),
        g_ = Ve.findIndex,
        m_ = !0,
        v_ = We("findIndex"); "findIndex" in [] && Array(1).findIndex((function() { m_ = !1 })), Ae({ target: "Array", proto: !0, forced: m_ || !v_ }, { findIndex: function(e) { return g_(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), ir("findIndex"); var y_ = function() {
            function e(t) { var n = t.tim,
                    r = t.messageController;
                kn(this, e), this.tim = n, this.messageController = r, this.completedMap = new Map, this._initListener() } return An(e, [{ key: "getMessageList", value: function(e) { var t = this,
                        n = e.conversationID,
                        r = e.nextReqMessageID,
                        o = e.count; if (this.tim.groupController.checkJoinedAVChatRoomByID(n.replace("GROUP", ""))) return ca.log("GetMessageHandler.getMessageList not available in avchatroom. conversationID=".concat(n)), lg({ messageList: [], nextReqMessageID: "", isCompleted: !0 });
                    (ma(o) || o > 15) && (o = 15); var i = this._computeLeftCount({ conversationID: n, nextReqMessageID: r }); return ca.log("GetMessageHandler.getMessageList. conversationID=".concat(n, " leftCount=").concat(i, " count=").concat(o, " nextReqMessageID=").concat(r)), this._needGetHistory({ conversationID: n, leftCount: i, count: o }) ? this.messageController.getHistoryMessages({ conversationID: n, count: 20 }).then((function() { return i = t._computeLeftCount({ conversationID: n, nextReqMessageID: r }), new ag(t._computeResult({ conversationID: n, nextReqMessageID: r, count: o, leftCount: i })) })) : (ca.log("GetMessageHandler.getMessageList. get messagelist from memory"), lg(this._computeResult({ conversationID: n, nextReqMessageID: r, count: o, leftCount: i }))) } }, { key: "setCompleted", value: function(e) { ca.log("GetMessageHandler.setCompleted. conversationID=".concat(e)), this.completedMap.set(e, !0) } }, { key: "deleteCompletedItem", value: function(e) { ca.log("GetMessageHandler.deleteCompletedItem. conversationID=".concat(e)), this.completedMap.delete(e) } }, { key: "_initListener", value: function() { var e = this;
                    this.tim.innerEmitter.on(Vd, (function() { e.setCompleted(pn.CONV_SYSTEM) })), this.tim.innerEmitter.on(Bd, (function(t) { var n = t.data;
                        e.setCompleted("".concat(pn.CONV_GROUP).concat(n)) })) } }, { key: "_getMessageListSize", value: function(e) { return this.messageController.getLocalMessageList(e).length } }, { key: "_needGetHistory", value: function(e) { var t = e.conversationID,
                        n = e.leftCount,
                        r = e.count,
                        o = this.tim.conversationController.getLocalConversation(t),
                        i = !!o && o.type === pn.CONV_SYSTEM,
                        s = !!o && o.subType === pn.GRP_AVCHATROOM; return !i && !s && (n < r && !this.completedMap.has(t)) } }, { key: "_computeResult", value: function(e) { var t = e.conversationID,
                        n = e.nextReqMessageID,
                        r = e.count,
                        o = e.leftCount,
                        i = this._computeMessageList({ conversationID: t, nextReqMessageID: n, count: r }),
                        s = this._computeIsCompleted({ conversationID: t, leftCount: o, count: r }),
                        a = this._computeNextReqMessageID({ messageList: i, isCompleted: s, conversationID: t }); return ca.log("GetMessageHandler._computeResult. conversationID=".concat(t, " leftCount=").concat(o, " count=").concat(r, " nextReqMessageID=").concat(a, " nums=").concat(i.length, " isCompleted=").concat(s)), { messageList: i, nextReqMessageID: a, isCompleted: s } } }, { key: "_computeNextReqMessageID", value: function(e) { var t = e.messageList,
                        n = e.isCompleted,
                        r = e.conversationID; if (!n) return 0 === t.length ? "" : t[0].ID; var o = this.messageController.getLocalMessageList(r); return 0 === o.length ? "" : o[0].ID } }, { key: "_computeMessageList", value: function(e) { var t = e.conversationID,
                        n = e.nextReqMessageID,
                        r = e.count,
                        o = this.messageController.getLocalMessageList(t),
                        i = this._computeIndexEnd({ nextReqMessageID: n, messageList: o }),
                        s = this._computeIndexStart({ indexEnd: i, count: r }); return o.slice(s, i) } }, { key: "_computeIndexEnd", value: function(e) { var t = e.messageList,
                        n = void 0 === t ? [] : t,
                        r = e.nextReqMessageID; return r ? n.findIndex((function(e) { return e.ID === r })) : n.length } }, { key: "_computeIndexStart", value: function(e) { var t = e.indexEnd,
                        n = e.count; return t > n ? t - n : 0 } }, { key: "_computeLeftCount", value: function(e) { var t = e.conversationID,
                        n = e.nextReqMessageID; return n ? this.messageController.getLocalMessageList(t).findIndex((function(e) { return e.ID === n })) : this._getMessageListSize(t) } }, { key: "_computeIsCompleted", value: function(e) { var t = e.conversationID; return !!(e.leftCount <= e.count && this.completedMap.has(t)) } }, { key: "reset", value: function() { ca.log("GetMessageHandler.reset"), this.completedMap.clear() } }]), e }(),
        __ = function e(t) { kn(this, e), this.value = t, this.next = null },
        C_ = function() {
            function e(t) { kn(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map, ca.log("SinglyLinkedList init MAX_LENGTH=".concat(this.MAX_LENGTH)) } return An(e, [{ key: "pushIn", value: function(e) { var t = new __(e); if (this.map.size < this.MAX_LENGTH) null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this.map.set(e, 1);
                    else { var n = this.pNodeToDel;
                        this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1) } } }, { key: "has", value: function(e) { return this.map.has(e) } }, { key: "tail", value: function() { return this.pTail } }, { key: "size", value: function() { return this.map.size } }, { key: "data", value: function() { return Array.from(this.map.keys()) } }, { key: "reset", value: function() { for (var e; null !== this.pNodeToDel;) e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null;
                    this.pTail = null, this.map.clear() } }]), e }(),
        I_ = function() {
            function e(t) { kn(this, e), this.tim = t } return An(e, [{ key: "upload", value: function(e) { switch (e.type) {
                        case pn.MSG_IMAGE:
                            return this._uploadImage(e);
                        case pn.MSG_FILE:
                            return this._uploadFile(e);
                        case pn.MSG_AUDIO:
                            return this._uploadAudio(e);
                        case pn.MSG_VIDEO:
                            return this._uploadVideo(e);
                        default:
                            return Promise.resolve() } } }, { key: "_uploadImage", value: function(e) { var t = this.tim,
                        n = t.uploadController,
                        r = t.messageController,
                        o = e.getElements()[0],
                        i = r.getMessageOptionByID(e.messageID); return n.uploadImage({ file: i.payload.file, to: i.to, onProgress: function(e) { if (o.updatePercent(e), ya(i.onProgress)) try { i.onProgress(e) } catch (t) { return pg(new Ip({ code: Np, message: "".concat(Kf) })) } } }).then((function(e) { var t, n = e.location,
                            r = e.fileType,
                            i = e.fileSize,
                            s = Na(n); return o.updateImageFormat(r), o.updateImageInfoArray({ size: i, url: s }), t = o._imageMemoryURL, Rs ? new Promise((function(e, n) { wx.getImageInfo({ src: t, success: function(t) { e({ width: t.width, height: t.height }) }, fail: function() { e({ width: 0, height: 0 }) } }) })) : qs && 9 === Fs ? Promise.resolve({ width: 0, height: 0 }) : new Promise((function(e, n) { var r = new Image;
                            r.onload = function() { e({ width: this.width, height: this.height }), r = null }, r.onerror = function() { e({ width: 0, height: 0 }), r = null }, r.src = t })) })).then((function(t) { var n = t.width,
                            r = t.height; return o.updateImageInfoArray({ width: n, height: r }), e })) } }, { key: "_uploadFile", value: function(e) { var t = this.tim,
                        n = t.uploadController,
                        r = t.messageController,
                        o = e.getElements()[0],
                        i = r.getMessageOptionByID(e.messageID); return n.uploadFile({ file: i.payload.file, to: i.to, onProgress: function(e) { if (o.updatePercent(e), ya(i.onProgress)) try { i.onProgress(e) } catch (t) { return pg(new Ip({ code: Np, message: "".concat(Kf) })) } } }).then((function(t) { var n = t.location,
                            r = Na(n); return o.updateFileUrl(r), e })) } }, { key: "_uploadAudio", value: function(e) { var t = this.tim,
                        n = t.uploadController,
                        r = t.messageController,
                        o = e.getElements()[0],
                        i = r.getMessageOptionByID(e.messageID); return n.uploadAudio({ file: i.payload.file, to: i.to, onProgress: function(e) { if (o.updatePercent(e), ya(i.onProgress)) try { i.onProgress(e) } catch (t) { return pg(new Ip({ code: Np, message: "".concat(Kf) })) } } }).then((function(t) { var n = t.location,
                            r = Na(n); return o.updateAudioUrl(r), e })) } }, { key: "_uploadVideo", value: function(e) { var t = this.tim,
                        n = t.uploadController,
                        r = t.messageController,
                        o = e.getElements()[0],
                        i = r.getMessageOptionByID(e.messageID); return n.uploadVideo({ file: i.payload.file, to: i.to, onProgress: function(e) { if (o.updatePercent(e), ya(i.onProgress)) try { i.onProgress(e) } catch (t) { return pg(new Ip({ code: Np, message: "".concat(Kf) })) } } }).then((function(t) { var n = Na(t.location); return o.updateVideoUrl(n), e })) } }]), e }(),
        M_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e))._initializeMembers(), r._initializeListener(), r._initialzeHandlers(), r.messageOptionMap = new Map, r } return An(n, [{ key: "_initializeMembers", value: function() { this.messagesList = new h_({ tim: this.tim }), this.currentMessageKey = {}, this.singlyLinkedList = new C_(100) } }, { key: "_initialzeHandlers", value: function() { this.readReportHandler = new d_(this.tim, this), this.getMessageHandler = new y_({ messageController: this, tim: this.tim }), this.uploadFileHandler = new I_(this.tim) } }, { key: "reset", value: function() { this.messagesList.reset(), this.currentMessageKey = {}, this.getMessageHandler.reset(), this.singlyLinkedList.reset(), this.messageOptionMap.clear() } }, { key: "_initializeListener", value: function() { var e = this.tim.innerEmitter;
                    e.on(Id, this._onReceiveC2CMessage, this), e.on(id, this._onSyncMessagesProcessing, this), e.on(sd, this._onSyncMessagesFinished, this), e.on(Md, this._onReceiveGroupMessage, this), e.on(Sd, this._onReceiveGroupTips, this), e.on(Td, this._onReceiveSystemNotice, this), e.on(wd, this._onReceiveGroupMessageRevokedNotice, this), e.on(Ad, this._onReceiveC2CMessageRevokedNotice, this), e.on(Fd, this._clearConversationMessages, this) } }, { key: "sendMessageInstance", value: function(e, t) { var n, r = this,
                        o = this.tim.sumStatController,
                        i = null; switch (e.conversationType) {
                        case pn.CONV_C2C:
                            i = this._handleOnSendC2CMessageSuccess.bind(this); break;
                        case pn.CONV_GROUP:
                            i = this._handleOnSendGroupMessageSuccess.bind(this); break;
                        default:
                            return pg(new Ip({ code: Op, message: Hf })) } return this.singlyLinkedList.pushIn(e.random), this.uploadFileHandler.upload(e).then((function() { var i = null; return e.isSendable() ? (o.addTotalCount(mg), n = Date.now(), e.conversationType === pn.CONV_C2C ? i = r._createC2CMessagePack(e, t) : e.conversationType === pn.CONV_GROUP && (i = r._createGroupMessagePack(e, t)), r.request(i)) : pg({ code: Yp, message: oh }) })).then((function(t) { return o.addSuccessCount(mg), o.addCost(mg, Math.abs(Date.now() - n)), e.conversationType === pn.CONV_GROUP && (e.sequence = t.data.sequence, e.time = t.data.time, e.generateMessageID(r.tim.context.identifier)), r.messagesList.pushIn(e), i(e, t.data), r.messageOptionMap.delete(e.messageID), r.emitInnerEvent(ad, { eventDataList: [{ conversationID: e.conversationID, unreadCount: 0, type: e.conversationType, subType: e.conversationSubType, lastMessage: e }] }), new ag({ message: e }) })).catch((function(t) { e.status = Pu.FAIL; var n = new Mg; return n.setMethod(Og).setMessageType(e.type).setText("".concat(r._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)).setStart(), r.probeNetwork().then((function(e) { var r = Bn(e, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(t, o, i).setEnd() })), ca.error("MessageController.sendMessageInstance error:", t), pg(new Ip({ code: t && t.code ? t.code : Ap, message: t && t.message ? t.message : Ff, data: { message: e } })) })) } }, { key: "resendMessage", value: function(e) { return e.isResend = !0, e.status = Pu.UNSEND, this.sendMessageInstance(e) } }, { key: "_isFileLikeMessage", value: function(e) { return [pn.MSG_IMAGE, pn.MSG_FILE, pn.MSG_AUDIO, pn.MSG_VIDEO].indexOf(e.type) >= 0 } }, { key: "_resendBinaryTypeMessage", value: function() {} }, { key: "_canIUseOnlineOnlyFlag", value: function(e) { var t = this.tim.groupController.getJoinedAVChatRoom(); return !t || t.groupID !== e.to || e.conversationType !== pn.CONV_GROUP } }, { key: "_createC2CMessagePack", value: function(e, t) { var n = 0,
                        r = null; return t && (t.offlinePushInfo && (r = t.offlinePushInfo), !0 === t.onlineUserOnly && (n = 1, r ? r.disablePush = !0 : r = { disablePush: !0 })), { name: "c2cMessage", action: "create", tjgID: this._generateTjgID(e), param: { toAccount: e.to, msgBody: e.getElements(), msgSeq: e.sequence, msgRandom: e.random, msgLifeTime: this._canIUseOnlineOnlyFlag(e) && n ? 0 : void 0, offlinePushInfo: r ? { pushFlag: !0 === r.disablePush ? 1 : 0, title: r.title || "", desc: r.description || "", ext: r.extension || "", apnsInfo: { badgeMode: !0 === r.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: r.androidOPPOChannelID || "" } } : void 0 } } } }, { key: "_handleOnSendC2CMessageSuccess", value: function(e, t) { e.status = Pu.SUCCESS, e.time = t.time } }, { key: "_createGroupMessagePack", value: function(e, t) { var n = 0,
                        r = null; return t && (!0 === t.onlineUserOnly && (n = 1), t.offlinePushInfo && (r = t.offlinePushInfo)), { name: "groupMessage", action: "create", tjgID: this._generateTjgID(e), param: { groupID: e.to, msgBody: e.getElements(), random: e.random, priority: e.priority, clientSequence: e.clientSequence, onlineOnlyFlag: this._canIUseOnlineOnlyFlag(e) ? n : 0, offlinePushInfo: r ? { pushFlag: !0 === r.disablePush ? 1 : 0, title: r.title || "", desc: r.description || "", ext: r.extension || "", apnsInfo: { badgeMode: !0 === r.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: r.androidOPPOChannelID || "" } } : void 0 } } } }, { key: "_handleOnSendGroupMessageSuccess", value: function(e, t) { e.sequence = t.sequence, e.time = t.time, e.status = Pu.SUCCESS } }, { key: "_onReceiveC2CMessage", value: function(e) { ca.debug("MessageController._onReceiveC2CMessage nums=".concat(e.data.length)); var t = Date.now(),
                        n = this._newC2CMessageStoredAndSummary({ notifiesList: e.data, type: pn.CONV_C2C, C2CRemainingUnreadList: e.C2CRemainingUnreadList }),
                        r = n.eventDataList,
                        o = n.result; if (r.length > 0 && this.emitInnerEvent(ld, { eventDataList: r, result: o }), o.length > 0) { var i = this.tim.sumStatController;
                        i.addTotalCount(vg), i.addSuccessCount(vg), i.addCost(vg, Date.now() - t), this.emitOuterEvent(ln.MESSAGE_RECEIVED, o) } } }, { key: "_onReceiveGroupMessage", value: function(e) { ca.debug("MessageController._onReceiveGroupMessage nums=".concat(e.data.length)); var t = Date.now(),
                        n = this.newGroupMessageStoredAndSummary(e.data),
                        r = n.eventDataList,
                        o = n.result; if (r.length > 0 && this.emitInnerEvent(pd, { eventDataList: r, result: o, isGroupTip: !1 }), o.length > 0) { var i = this.tim.sumStatController;
                        i.addTotalCount(vg), i.addSuccessCount(vg), i.addCost(vg, Date.now() - t), this.emitOuterEvent(ln.MESSAGE_RECEIVED, o) } } }, { key: "_onReceiveGroupTips", value: function(e) { var t = Date.now(),
                        n = e.data;
                    ca.debug("MessageController._onReceiveGroupTips nums=".concat(n.length)); var r = this.newGroupTipsStoredAndSummary(n),
                        o = r.eventDataList,
                        i = r.result; if (o.length > 0 && this.emitInnerEvent(pd, { eventDataList: o, result: i, isGroupTip: !0 }), i.length > 0) { var s = this.tim.sumStatController;
                        s.addTotalCount(vg), s.addSuccessCount(vg), s.addCost(vg, Date.now() - t), this.emitOuterEvent(ln.MESSAGE_RECEIVED, i) } } }, { key: "_onReceiveSystemNotice", value: function(e) { var t = Date.now(),
                        n = e.data,
                        r = n.groupSystemNotices,
                        o = n.type;
                    ca.debug("MessageController._onReceiveSystemNotice nums=".concat(r.length)); var i = this.newSystemNoticeStoredAndSummary({ notifiesList: r, type: o }),
                        s = i.eventDataList,
                        a = i.result; if (s.length > 0 && this.emitInnerEvent(fd, { eventDataList: s, result: a, type: o }), a.length > 0 && "poll" === o) { var u = this.tim.sumStatController;
                        u.addTotalCount(vg), u.addSuccessCount(vg), u.addCost(vg, Date.now() - t), this.emitOuterEvent(ln.MESSAGE_RECEIVED, a) } } }, { key: "_onReceiveGroupMessageRevokedNotice", value: function(e) { var t = this;
                    ca.debug("MessageController._onReceiveGroupMessageRevokedNotice nums=".concat(e.data.length)); var n = [],
                        r = null;
                    e.data.forEach((function(e) { e.elements.revokedInfos.forEach((function(e) {
                            (r = t.messagesList.revoke("GROUP".concat(e.groupID), e.sequence)) && n.push(r) })) })), 0 !== n.length && (this.emitInnerEvent(hd, n), this.emitOuterEvent(ln.MESSAGE_REVOKED, n)) } }, { key: "_onReceiveC2CMessageRevokedNotice", value: function(e) { var t = this;
                    ca.debug("MessageController._onReceiveC2CMessageRevokedNotice nums=".concat(e.data.length)); var n = [],
                        r = null;
                    e.data.forEach((function(e) { e.c2cMessageRevokedNotify.revokedInfos.forEach((function(e) { var o = t.tim.context.identifier === e.from ? "C2C".concat(e.to) : "C2C".concat(e.from);
                            (r = t.messagesList.revoke(o, e.sequence, e.random)) && n.push(r) })) })), 0 !== n.length && (this.emitInnerEvent(hd, n), this.emitOuterEvent(ln.MESSAGE_REVOKED, n)) } }, { key: "_clearConversationMessages", value: function(e) { var t = e.data;
                    this.messagesList.removeByConversationID(t), this.getMessageHandler.deleteCompletedItem(t) } }, { key: "_pushIntoNoticeResult", value: function(e, t) { var n = this.messagesList.pushIn(t),
                        r = this.singlyLinkedList.has(t.random); return !(!n || !1 !== r) && (e.push(t), !0) } }, { key: "_newC2CMessageStoredAndSummary", value: function(e) { for (var t = e.notifiesList, n = e.type, r = e.C2CRemainingUnreadList, o = e.isFromSync, i = null, s = [], a = [], u = {}, c = this.tim.bigDataHallwayController, l = 0, p = t.length; l < p; l++) { var f = t[l]; if (f.currentUser = this.tim.context.identifier, f.conversationType = n, f.isSystemMessage = !!f.isSystemMessage, i = new Vh(f), f.elements = c.parseElements(f.elements, f.from), i.setElement(f.elements), !o)
                            if (!this._pushIntoNoticeResult(a, i)) continue;
                        void 0 === u[i.conversationID] ? u[i.conversationID] = s.push({ conversationID: i.conversationID, unreadCount: "out" === i.flow ? 0 : 1, type: i.conversationType, subType: i.conversationSubType, lastMessage: i }) - 1 : (s[u[i.conversationID]].type = i.conversationType, s[u[i.conversationID]].subType = i.conversationSubType, s[u[i.conversationID]].lastMessage = i, "in" === i.flow && s[u[i.conversationID]].unreadCount++) } if (ga(r))
                        for (var h = function(e, t) { var n = s.find((function(t) { return t.conversationID === "C2C".concat(r[e].from) }));
                                n ? n.unreadCount += r[e].count : s.push({ conversationID: "C2C".concat(r[e].from), unreadCount: r[e].count, type: pn.CONV_C2C, lastMsgTime: r[e].lastMsgTime }) }, d = 0, g = r.length; d < g; d++) h(d); return { eventDataList: s, result: a } } }, { key: "newGroupMessageStoredAndSummary", value: function(e) { var t = null,
                        n = [],
                        r = {},
                        o = [],
                        i = pn.CONV_GROUP,
                        s = this.tim.bigDataHallwayController,
                        a = e.length;
                    a > 1 && e.sort((function(e, t) { return e.sequence - t.sequence })); for (var u = 0; u < a; u++) { var c = e[u]; if (c.currentUser = this.tim.context.identifier, c.conversationType = i, c.isSystemMessage = !!c.isSystemMessage, t = new Vh(c), c.elements = s.parseElements(c.elements, c.from), t.setElement(c.elements), !this._isMessageFromAVChatroom(t)) this._pushIntoNoticeResult(o, t) && (void 0 === r[t.conversationID] ? r[t.conversationID] = n.push({ conversationID: t.conversationID, unreadCount: "out" === t.flow ? 0 : 1, type: t.conversationType, subType: t.conversationSubType, lastMessage: t }) - 1 : (n[r[t.conversationID]].type = t.conversationType, n[r[t.conversationID]].subType = t.conversationSubType, n[r[t.conversationID]].lastMessage = t, "in" === t.flow && n[r[t.conversationID]].unreadCount++)) } return { eventDataList: n, result: o } } }, { key: "_isMessageFromAVChatroom", value: function(e) { var t = e.conversationID.slice(5); return this.tim.groupController.checkJoinedAVChatRoomByID(t) } }, { key: "newGroupTipsStoredAndSummary", value: function(e) { for (var t = null, n = [], r = [], o = {}, i = 0, s = e.length; i < s; i++) { var a = e[i]; if (a.currentUser = this.tim.context.identifier, a.conversationType = pn.CONV_GROUP, (t = new Vh(a)).setElement({ type: pn.MSG_GRP_TIP, content: On({}, a.elements, { groupProfile: a.groupProfile }) }), t.isSystemMessage = !1, !this._isMessageFromAVChatroom(t)) this._pushIntoNoticeResult(r, t) && (void 0 === o[t.conversationID] ? o[t.conversationID] = n.push({ conversationID: t.conversationID, unreadCount: "out" === t.flow ? 0 : 1, type: t.conversationType, subType: t.conversationSubType, lastMessage: t }) - 1 : (n[o[t.conversationID]].type = t.conversationType, n[o[t.conversationID]].subType = t.conversationSubType, n[o[t.conversationID]].lastMessage = t, "in" === t.flow && n[o[t.conversationID]].unreadCount++)) } return { eventDataList: n, result: r } } }, { key: "newSystemNoticeStoredAndSummary", value: function(e) { var t = e.notifiesList,
                        n = e.type,
                        r = null,
                        o = t.length,
                        i = 0,
                        s = [],
                        a = { conversationID: pn.CONV_SYSTEM, unreadCount: 0, type: pn.CONV_SYSTEM, subType: null, lastMessage: null }; for (i = 0; i < o; i++) { var u = t[i]; if (u.elements.operationType !== Ql) u.currentUser = this.tim.context.identifier, u.conversationType = pn.CONV_SYSTEM, u.conversationID = pn.CONV_SYSTEM, (r = new Vh(u)).setElement({ type: pn.MSG_GRP_SYS_NOTICE, content: On({}, u.elements, { groupProfile: u.groupProfile }) }), r.isSystemMessage = !0, (1 === r.sequence && 1 === r.random || 2 === r.sequence && 2 === r.random) && (r.sequence = wa(), r.random = wa(), r.generateMessageID(u.currentUser), ca.log("MessageController.newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID=".concat(r.ID))), this._pushIntoNoticeResult(s, r) && ("poll" === n ? a.unreadCount++ : "sync" === n && r.setIsRead(!0), a.subType = r.conversationSubType) } return a.lastMessage = s[s.length - 1], { eventDataList: s.length > 0 ? [a] : [], result: s } } }, { key: "_onSyncMessagesProcessing", value: function(e) { var t = this._newC2CMessageStoredAndSummary({ notifiesList: e.data, type: pn.CONV_C2C, isFromSync: !0, C2CRemainingUnreadList: e.C2CRemainingUnreadList }),
                        n = t.eventDataList,
                        r = t.result;
                    this.emitInnerEvent(ud, { eventDataList: n, result: r }) } }, { key: "_onSyncMessagesFinished", value: function(e) { this.triggerReady(); var t = this._newC2CMessageStoredAndSummary({ notifiesList: e.data.messageList, type: pn.CONV_C2C, isFromSync: !0, C2CRemainingUnreadList: e.data.C2CRemainingUnreadList }),
                        n = t.eventDataList,
                        r = t.result;
                    this.emitInnerEvent(cd, { eventDataList: n, result: r }) } }, { key: "getHistoryMessages", value: function(e) { if (e.conversationID === pn.CONV_SYSTEM) return lg();!e.count && (e.count = 15), e.count > 20 && (e.count = 20); var t = this.messagesList.getLocalOldestMessageByConversationID(e.conversationID);
                    t || ((t = {}).time = 0, t.sequence = 0, 0 === e.conversationID.indexOf(pn.CONV_C2C) ? (t.to = e.conversationID.replace(pn.CONV_C2C, ""), t.conversationType = pn.CONV_C2C) : 0 === e.conversationID.indexOf(pn.CONV_GROUP) && (t.to = e.conversationID.replace(pn.CONV_GROUP, ""), t.conversationType = pn.CONV_GROUP)); var n = ""; switch (t.conversationType) {
                        case pn.CONV_C2C:
                            return n = e.conversationID.replace(pn.CONV_C2C, ""), this.getC2CRoamMessages({ conversationID: e.conversationID, peerAccount: n, count: e.count, lastMessageTime: void 0 === this.currentMessageKey[e.conversationID] ? 0 : t.time });
                        case pn.CONV_GROUP:
                            return this.getGroupRoamMessages({ conversationID: e.conversationID, groupID: t.to, count: e.count, sequence: t.sequence - 1 });
                        default:
                            return lg() } } }, { key: "getC2CRoamMessages", value: function(e) { var t = this,
                        n = void 0 !== this.currentMessageKey[e.conversationID] ? this.currentMessageKey[e.conversationID] : "";
                    ca.log("MessageController.getC2CRoamMessages toAccount=".concat(e.peerAccount, " count=").concat(e.count || 15, " lastMessageTime=").concat(e.lastMessageTime || 0, " messageKey=").concat(n)); var r = new Mg; return r.setMethod(Lg).setStart(), this.request({ name: "c2cMessage", action: "query", param: { peerAccount: e.peerAccount, count: e.count || 15, lastMessageTime: e.lastMessageTime || 0, messageKey: n } }).then((function(o) { var i = o.data,
                            s = i.complete,
                            a = i.messageList;
                        ma(a) ? ca.log("MessageController.getC2CRoamMessages ok. complete=".concat(s, " but messageList is undefined!")) : ca.log("MessageController.getC2CRoamMessages ok. complete=".concat(s, " nums=").concat(a.length)), r.setCode(0).setNetworkType(t.getNetworkType()).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(n, "-").concat(s, "-").concat(a ? a.length : "undefined")).setEnd(), 1 === s && t.getMessageHandler.setCompleted(e.conversationID); var u = t._roamMessageStore(a, pn.CONV_C2C, e.conversationID); return t.readReportHandler.updateIsRead(e.conversationID), t.currentMessageKey[e.conversationID] = o.data.messageKey, u })).catch((function(o) { return t.probeNetwork().then((function(t) { var i = Bn(t, 2),
                                s = i[0],
                                a = i[1];
                            r.setError(o, s, a).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(n)).setEnd() })), ca.warn("MessageController.getC2CRoamMessages failed. ".concat(o)), pg(o) })) } }, { key: "_computeLastSequence", value: function(e) { return e.sequence >= 0 ? Promise.resolve(e.sequence) : this.tim.groupController.getGroupLastSequence(e.groupID) } }, { key: "getGroupRoamMessages", value: function(e) { var t = this,
                        n = new Mg,
                        r = 0; return this._computeLastSequence(e).then((function(o) { return r = o, ca.log("MessageController.getGroupRoamMessages groupID=".concat(e.groupID, " lastSequence=").concat(r)), n.setMethod(Ng).setStart(), t.request({ name: "groupMessage", action: "query", param: { groupID: e.groupID, count: 21, sequence: r } }) })).then((function(o) { var i = o.data,
                            s = i.messageList,
                            a = i.complete;
                        ma(s) ? ca.log("MessageController.getGroupRoamMessages ok. complete=".concat(a, " but messageList is undefined!")) : ca.log("MessageController.getGroupRoamMessages ok. complete=".concat(a, " nums=").concat(s.length)), n.setCode(0).setNetworkType(t.getNetworkType()).setText("".concat(e.groupID, "-").concat(r, "-").concat(a, "-").concat(s ? s.length : "undefined")).setEnd(); var u = "GROUP".concat(e.groupID); if (2 === a || ja(s)) return t.getMessageHandler.setCompleted(u), []; var c = t._roamMessageStore(s, pn.CONV_GROUP, u); return t.readReportHandler.updateIsRead(u), c })).catch((function(o) { return t.probeNetwork().then((function(t) { var i = Bn(t, 2),
                                s = i[0],
                                a = i[1];
                            n.setError(o, s, a).setText("".concat(e.groupID, "-").concat(r)).setEnd() })), ca.warn("MessageController.getGroupRoamMessages failed. ".concat(o)), pg(o) })) } }, { key: "_roamMessageStore", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = null,
                        o = [],
                        i = 0,
                        s = e.length,
                        a = null,
                        u = t === pn.CONV_GROUP,
                        c = this.tim.bigDataHallwayController,
                        l = function() { i = u ? e.length - 1 : 0, s = u ? 0 : e.length },
                        p = function() { u ? --i : ++i },
                        f = function() { return u ? i >= s : i < s }; for (l(); f(); p()) u && 1 === e[i].sequence && this.getMessageHandler.setCompleted(n), 1 !== e[i].isPlaceMessage && ((r = new Vh(e[i])).to = e[i].to, r.isSystemMessage = !!e[i].isSystemMessage, r.conversationType = t, e[i].event === Bl.JSON.TYPE.GROUP.TIP ? a = { type: pn.MSG_GRP_TIP, content: On({}, e[i].elements, { groupProfile: e[i].groupProfile }) } : (e[i].elements = c.parseElements(e[i].elements, e[i].from), a = e[i].elements), r.setElement(a), r.reInitialize(this.tim.context.identifier), o.push(r)); return this.messagesList.unshift(o), l = p = f = null, o } }, { key: "getLocalMessageList", value: function(e) { return this.messagesList.getLocalMessageList(e) } }, { key: "getLocalMessage", value: function(e, t) { return this.messagesList.getLocalMessage(e, t) } }, { key: "hasLocalMessage", value: function(e, t) { return this.messagesList.hasLocalMessage(e, t) } }, { key: "deleteLocalMessage", value: function(e) { e instanceof Vh && this.messagesList.remove(e) } }, { key: "revokeMessage", value: function(e) { var t, n = this;
                    e.conversationType === pn.CONV_C2C ? t = { name: "c2cMessageWillBeRevoked", action: "create", param: { msgInfo: { fromAccount: e.from, toAccount: e.to, msgSeq: e.sequence, msgRandom: e.random, msgTimeStamp: e.time } } } : e.conversationType === pn.CONV_GROUP && (t = { name: "groupMessageWillBeRevoked", action: "create", param: { to: e.to, msgSeqList: [{ msgSeq: e.sequence }] } }); var r = new Mg; return r.setMethod(Pg).setMessageType(e.type).setText("".concat(this._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)).setStart(), this.request(t).then((function(t) { var o = t.data.recallRetList; if (!ja(o) && 0 !== o[0].retCode) { var i = new Ip({ code: o[0].retCode, message: Cp[o[0].retCode] || $f, data: { message: e } }); return r.setCode(i.code).setMessage(i.message).setEnd(), pg(i) } return ca.info("MessageController.revokeMessage ok. ID=".concat(e.ID)), e.isRevoked = !0, r.setCode(0).setEnd(), n.emitInnerEvent(hd, [e]), new ag({ message: e }) })).catch((function(t) { n.probeNetwork().then((function(e) { var n = Bn(e, 2),
                                o = n[0],
                                i = n[1];
                            r.setError(t, o, i).setEnd() })); var o = new Ip({ code: t && t.code ? t.code : Pp, message: t && t.message ? t.message : $f, data: { message: e } }); return ca.warn("MessageController.revokeMessage failed. ID=".concat(e.ID, " code=").concat(o.code, " message=").concat(o.message)), pg(o) })) } }, { key: "setMessageRead", value: function(e) { var t = this; return new Promise((function(n, r) { t.ready((function() { t.readReportHandler.setMessageRead(e).then(n).catch(r) })) })) } }, { key: "getMessageList", value: function(e) { return this.getMessageHandler.getMessageList(e) } }, { key: "createTextMessage", value: function(e) { e.currentUser = this.tim.context.identifier; var t = new Vh(e),
                        n = "string" == typeof e.payload ? e.payload : e.payload.text,
                        r = new xu({ text: n }); return t.setElement(r), t } }, { key: "createCustomMessage", value: function(e) { e.currentUser = this.tim.context.identifier; var t = new Vh(e),
                        n = new Fh({ data: e.payload.data, description: e.payload.description, extension: e.payload.extension }); return t.setElement(n), t } }, { key: "createImageMessage", value: function(e) { e.currentUser = this.tim.context.identifier; var t = new Vh(e); if (Rs) { var n = e.payload.file; if (la(n)) return void ca.warn("微信小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象"); var r = n.tempFilePaths[0],
                            o = { url: r, name: r.slice(r.lastIndexOf("/") + 1), size: n.tempFiles[0].size, type: r.slice(r.lastIndexOf(".") + 1).toLowerCase() };
                        e.payload.file = o } else if (bs && la(e.payload.file)) { var i = e.payload.file;
                        e.payload.file = { files: [i] } } var s = new ap({ imageFormat: "UNKNOWN", uuid: this._generateUUID(), file: e.payload.file }); return t.setElement(s), this.messageOptionMap.set(t.messageID, e), t } }, { key: "createFileMessage", value: function(e) { if (!Rs) { if (bs && la(e.payload.file)) { var t = e.payload.file;
                            e.payload.file = { files: [t] } }
                        e.currentUser = this.tim.context.identifier; var n = new Vh(e),
                            r = new qh({ uuid: this._generateUUID(), file: e.payload.file }); return n.setElement(r), this.messageOptionMap.set(n.messageID, e), n }
                    ca.warn("微信小程序目前不支持选择文件， createFileMessage 接口不可用！") } }, { key: "createAudioMessage", value: function(e) { if (Rs) { var t = e.payload.file; if (Rs) { var n = { url: t.tempFilePath, name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1), size: t.fileSize, second: parseInt(t.duration) / 1e3, type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase() };
                            e.payload.file = n }
                        e.currentUser = this.tim.context.identifier; var r = new Vh(e),
                            o = new cp({ second: Math.floor(t.duration / 1e3), size: t.fileSize, url: t.tempFilePath, uuid: this._generateUUID() }); return r.setElement(o), this.messageOptionMap.set(r.messageID, e), r }
                    ca.warn("createAudioMessage 目前只支持微信小程序发语音消息") } }, { key: "createVideoMessage", value: function(e) { e.currentUser = this.tim.context.identifier, e.payload.file.thumbUrl = "https://webim-1252463788.cos.ap-shanghai.myqcloud.com/assets/images/transparent.png", e.payload.file.thumbSize = 1668; var t = {}; if (Rs) { if (la(e.payload.file)) return void ca.warn("微信小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象"); var n = e.payload.file;
                        t.url = n.tempFilePath, t.name = n.tempFilePath.slice(n.tempFilePath.lastIndexOf("/") + 1), t.size = n.size, t.second = n.duration, t.type = n.tempFilePath.slice(n.tempFilePath.lastIndexOf(".") + 1).toLowerCase() } else if (bs) { if (la(e.payload.file)) { var r = e.payload.file;
                            e.payload.file.files = [r] } var o = e.payload.file;
                        t.url = window.URL.createObjectURL(o.files[0]), t.name = o.files[0].name, t.size = o.files[0].size, t.second = o.files[0].duration || 0, t.type = o.files[0].type.split("/")[1] }
                    e.payload.file.videoFile = t; var i = new Vh(e),
                        s = new jh({ videoFormat: t.type, videoSecond: Number(t.second.toFixed(0)), videoSize: t.size, remoteVideoUrl: "", videoUrl: t.url, videoUUID: this._generateUUID(), thumbUUID: this._generateUUID(), thumbWidth: e.payload.file.width || 200, thumbHeight: e.payload.file.height || 200, thumbUrl: e.payload.file.thumbUrl, thumbSize: e.payload.file.thumbSize, thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase() }); return i.setElement(s), this.messageOptionMap.set(i.messageID, e), i } }, { key: "createFaceMessage", value: function(e) { e.currentUser = this.tim.context.identifier; var t = new Vh(e),
                        n = new up(e.payload); return t.setElement(n), t } }, { key: "_generateUUID", value: function() { var e = this.tim.context; return "".concat(e.SDKAppID, "-").concat(e.identifier, "-").concat(function() { for (var e = "", t = 32; t > 0; --t) e += Aa[Math.floor(Math.random() * ba)]; return e }()) } }, { key: "_generateTjgID", value: function(e) { return this.tim.context.tinyID + "-" + e.random } }, { key: "getMessageOptionByID", value: function(e) { return this.messageOptionMap.get(e) } }]), n }(og),
        S_ = function() {
            function e(t) { kn(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t) } return An(e, [{ key: "_initMember", value: function(e) { this.updateMember(e) } }, { key: "updateMember", value: function(e) { var t = [null, void 0, "", 0, NaN];
                    e.memberCustomField && Pa(this.memberCustomField, e.memberCustomField), Ta(this, e, ["memberCustomField"], t) } }, { key: "updateRole", value: function(e) {
                    ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e) } }, { key: "updateMuteUntil", value: function(e) { ma(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3)) } }, { key: "updateNameCard", value: function(e) { ma(e) || (this.nameCard = e) } }, { key: "updateMemberCustomField", value: function(e) { e && Pa(this.memberCustomField, e) } }]), e }(),
        T_ = function() {
            function e(t) { kn(this, e), this.tim = t.tim, this.groupController = t.groupController, this._initListeners() } return An(e, [{ key: "_initListeners", value: function() { this.tim.innerEmitter.on(pd, this._onReceivedGroupTips, this) } }, { key: "_onReceivedGroupTips", value: function(e) { var t = this,
                        n = e.data,
                        r = n.result;
                    n.isGroupTip && r.forEach((function(e) { switch (e.payload.operationType) {
                            case 1:
                                t._onNewMemberComeIn(e); break;
                            case 2:
                                t._onMemberQuit(e); break;
                            case 3:
                                t._onMemberKickedOut(e); break;
                            case 4:
                                t._onMemberSetAdmin(e); break;
                            case 5:
                                t._onMemberCancelledAdmin(e); break;
                            case 6:
                                t._onGroupProfileModified(e); break;
                            case 7:
                                t._onMemberInfoModified(e); break;
                            default:
                                ca.warn("GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=", e.payload.operationType) } })) } }, { key: "_onNewMemberComeIn", value: function(e) { var t = e.payload,
                        n = t.memberNum,
                        r = t.groupProfile.groupID,
                        o = this.groupController.getLocalGroupProfile(r);
                    o && pa(n) && (o.memberNum = n) } }, { key: "_onMemberQuit", value: function(e) { var t = e.payload,
                        n = t.memberNum,
                        r = t.groupProfile.groupID,
                        o = this.groupController.getLocalGroupProfile(r);
                    o && pa(n) && (o.memberNum = n), this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList) } }, { key: "_onMemberKickedOut", value: function(e) { var t = e.payload,
                        n = t.memberNum,
                        r = t.groupProfile.groupID,
                        o = this.groupController.getLocalGroupProfile(r);
                    o && pa(n) && (o.memberNum = n), this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList) } }, { key: "_onMemberSetAdmin", value: function(e) { var t = this,
                        n = e.payload.groupProfile.groupID;
                    e.payload.userIDList.forEach((function(e) { var r = t.groupController.getLocalGroupMemberInfo(n, e);
                        r && r.updateRole(pn.GRP_MBR_ROLE_ADMIN) })) } }, { key: "_onMemberCancelledAdmin", value: function(e) { var t = this,
                        n = e.payload.groupProfile.groupID;
                    e.payload.userIDList.forEach((function(e) { var r = t.groupController.getLocalGroupMemberInfo(n, e);
                        r && r.updateRole(pn.GRP_MBR_ROLE_MEMBER) })) } }, { key: "_onGroupProfileModified", value: function(e) { var t = this,
                        n = e.payload.newGroupProfile,
                        r = e.payload.groupProfile.groupID,
                        o = this.groupController.getLocalGroupProfile(r);
                    Object.keys(n).forEach((function(e) { switch (e) {
                            case "ownerID":
                                t._ownerChaged(o, n); break;
                            default:
                                o[e] = n[e] } })), this.groupController.emitGroupListUpdate(!0, !0) } }, { key: "_ownerChaged", value: function(e, t) { var n = e.groupID,
                        r = this.groupController.getLocalGroupProfile(n),
                        o = this.tim.context.identifier; if (o === t.ownerID) { r.updateGroup({ selfInfo: { role: pn.GRP_MBR_ROLE_OWNER } }); var i = this.groupController.getLocalGroupMemberInfo(n, o),
                            s = this.groupController.getLocalGroupProfile(n).ownerID,
                            a = this.groupController.getLocalGroupMemberInfo(n, s);
                        i && i.updateRole(pn.GRP_MBR_ROLE_OWNER), a && a.updateRole(pn.GRP_MBR_ROLE_MEMBER) } } }, { key: "_onMemberInfoModified", value: function(e) { var t = this,
                        n = e.payload.groupProfile.groupID;
                    e.payload.memberList.forEach((function(e) { var r = t.groupController.getLocalGroupMemberInfo(n, e.userID);
                        r && e.muteTime && r.updateMuteUntil(e.muteTime) })) } }]), e }(),
        E_ = function() {
            function e(t) { kn(this, e), this.groupController = t.groupController, this.tim = t.tim, this.pendencyMap = new Map, this._initLiceners() } return An(e, [{ key: "_initLiceners", value: function() { this.tim.innerEmitter.on(fd, this._onReceivedGroupSystemNotice, this), this.tim.innerEmitter.on(sd, this._clearGroupSystemNotice, this) } }, { key: "_clearGroupSystemNotice", value: function() { var e = this;
                    this.getPendencyList().then((function(t) { t.forEach((function(t) { e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t) })); var n = e.tim.messageController.getLocalMessageList(pn.CONV_SYSTEM),
                            r = [];
                        n.forEach((function(t) { var n = t.payload,
                                o = n.operatorID,
                                i = n.operationType,
                                s = n.groupProfile; if (i === Hl) { var a = "".concat(o, "_").concat(s.groupID, "_").concat(s.to),
                                    u = e.pendencyMap.get(a);
                                u && pa(u.handled) && 0 !== u.handled && r.push(t) } })), e.groupController.deleteGroupSystemNotice({ messageList: r }) })) } }, { key: "getPendencyList", value: function(e) { var t = this; return this.groupController.request({ name: "group", action: "getGroupPendency", param: { startTime: e && e.startTime ? e.startTime : 0, limit: e && e.limit ? e.limit : 10, handleAccount: this.tim.context.identifier } }).then((function(e) { var n = e.data,
                            r = n.pendencyList; return 0 !== n.nextStartTime ? t.getPendencyList({ startTime: n.nextStartTime }).then((function(e) { return [].concat(Hn(r), Hn(e)) })) : r })) } }, { key: "_onReceivedGroupSystemNotice", value: function(e) { var t = this,
                        n = e.data,
                        r = n.result; "sync" !== n.type && r.forEach((function(e) { switch (e.payload.operationType) {
                            case 1:
                                t._onApplyGroupRequest(e); break;
                            case 2:
                                t._onApplyGroupRequestAgreed(e); break;
                            case 3:
                                t._onApplyGroupRequestRefused(e); break;
                            case 4:
                                t._onMemberKicked(e); break;
                            case 5:
                                t._onGroupDismissed(e); break;
                            case 6:
                                break;
                            case 7:
                                t._onInviteGroup(e); break;
                            case 8:
                                t._onQuitGroup(e); break;
                            case 9:
                                t._onSetManager(e); break;
                            case 10:
                                t._onDeleteManager(e); break;
                            case 11:
                            case 12:
                            case 15:
                                break;
                            case 255:
                                t.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Zl }) } })) } }, { key: "_onApplyGroupRequest", value: function(e) { this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Hl }) } }, { key: "_onApplyGroupRequestAgreed", value: function(e) { var t = this,
                        n = e.payload.groupProfile.groupID;
                    this.groupController.hasLocalGroup(n) || this.groupController.getGroupProfile({ groupID: n }).then((function(e) { var n = e.data.group;
                        n && (t.groupController.updateGroupMap([n]), t.groupController.emitGroupListUpdate()) })), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Vl }) } }, { key: "_onApplyGroupRequestRefused", value: function(e) { this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Kl }) } }, { key: "_onMemberKicked", value: function(e) { var t = e.payload.groupProfile.groupID;
                    this.groupController.hasLocalGroup(t) && this.groupController.deleteLocalGroupAndConversation(t), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: $l }) } }, { key: "_onGroupDismissed", value: function(e) { var t = e.payload.groupProfile.groupID,
                        n = this.groupController.hasLocalGroup(t),
                        r = this.groupController.AVChatRoomHandler;
                    n && this.groupController.deleteLocalGroupAndConversation(t), r.checkJoinedAVChatRoomByID(t) && r.reset(), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Yl }) } }, { key: "_onInviteGroup", value: function(e) { var t = this,
                        n = e.payload.groupProfile.groupID;
                    this.groupController.hasLocalGroup(n) || this.groupController.getGroupProfile({ groupID: n }).then((function(e) { var n = e.data.group;
                        n && (t.groupController.updateGroupMap([n]), t.groupController.emitGroupListUpdate()) })), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: zl }) } }, { key: "_onQuitGroup", value: function(e) { var t = e.payload.groupProfile.groupID;
                    this.groupController.hasLocalGroup(t) && this.groupController.deleteLocalGroupAndConversation(t), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Wl }) } }, { key: "_onSetManager", value: function(e) { var t = e.payload.groupProfile,
                        n = t.to,
                        r = t.groupID,
                        o = this.groupController.getLocalGroupMemberInfo(r, n);
                    o && o.updateRole(pn.GRP_MBR_ROLE_ADMIN), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Xl }) } }, { key: "_onDeleteManager", value: function(e) { var t = e.payload.groupProfile,
                        n = t.to,
                        r = t.groupID,
                        o = this.groupController.getLocalGroupMemberInfo(r, n);
                    o && o.updateRole(pn.GRP_MBR_ROLE_MEMBER), this.groupController.emitOuterEvent(ln.GROUP_SYSTEM_NOTICE_RECEIVED, { message: e, type: Jl }) } }, { key: "reset", value: function() { this.pendencyMap.clear() } }]), e }(),
        D_ = { 3: !0, 4: !0, 5: !0, 6: !0 },
        k_ = function() {
            function e(t) { var n = t.tim,
                    r = t.groupController;
                kn(this, e), this.tim = n, this.groupController = r, this.AVChatRoomLoop = null, this.key = "", this.startSeq = 0, this.group = {}, this.sequencesLinkedList = new C_(100), this.receivedMessageCount = 0 } return An(e, [{ key: "hasJoinedAVChatRoom", value: function() { return !(!this.group || ma(this.group.groupID)) } }, { key: "checkJoinedAVChatRoomByID", value: function(e) { return !(!this.group && ma(this.group.groupID)) && e === this.group.groupID } }, { key: "getJoinedAVChatRoom", value: function() { return this.hasJoinedAVChatRoom() ? this.group : null } }, { key: "_updateProperties", value: function(e) { var t = this;
                    Object.keys(e).forEach((function(n) { t[n] = e[n] })) } }, { key: "start", value: function() { var e = { key: this.key, startSeq: this.startSeq }; if (null === this.AVChatRoomLoop) { var t = this.groupController.createTransportCapsule({ name: "AVChatRoom", action: "startLongPoll", param: e });
                        this.AVChatRoomLoop = this.tim.connectionController.createRunLoop({ pack: t, before: this._updateRequestData.bind(this), success: this._handleSuccess.bind(this), fail: this._handleFailure.bind(this), isAVChatRoomLoop: !0 }), this.AVChatRoomLoop.start(), ca.log("AVChatRoomHandler.start message channel started") } else this.AVChatRoomLoop.isRunning() || this.AVChatRoomLoop.start() } }, { key: "stop", value: function() { null !== this.AVChatRoomLoop && this.AVChatRoomLoop.isRunning() && (this.AVChatRoomLoop.abort(), this.AVChatRoomLoop.stop(), ca.log("AVChatRoomHandler.stop message channel stopped")) } }, { key: "startRunLoop", value: function(e) { var t = this; return this._precheck().then((function() { var n = e.longPollingKey,
                            r = e.group; return t._updateProperties({ key: n, startSeq: 0, group: r || {} }), t.groupController.updateGroupMap([r]), t.groupController.emitGroupListUpdate(!0, !1), t.start(), t.groupController.isLoggedIn() ? lg({ status: Ou.SUCCESS, group: r }) : lg({ status: Ou.SUCCESS }) })) } }, { key: "joinWithoutAuth", value: function(e) { var t = this; return this.groupController.request({ name: "group", action: "applyJoinAVChatRoom", param: e }).then((function(n) { var r = n.data.longPollingKey; if (ma(r)) return pg(new Ip({ code: of, message: gh }));
                        ca.log("AVChatRoomHandler.joinWithoutAuth ok. groupID:", e.groupID), t.groupController.emitInnerEvent(Hd), t.groupController.emitInnerEvent(Bd, e.groupID); var o = new n_({ groupID: e.groupID }); return t.startRunLoop({ group: o, longPollingKey: r }), new ag({ status: Ou.SUCCESS }) })).catch((function(t) { return ca.error("AVChatRoomHandler.joinWithoutAuth error:".concat(t.message, ". groupID:").concat(e.groupID)), pg(t) })) } }, { key: "_precheck", value: function() { if (!this.hasJoinedAVChatRoom()) return Promise.resolve(); if (this.groupController.isLoggedIn()) { if (!(this.group.selfInfo.role === pn.GRP_MBR_ROLE_OWNER || this.group.ownerID === this.tim.loginInfo.identifier)) return this.groupController.quitGroup(this.group.groupID);
                        this.groupController.deleteLocalGroupAndConversation(this.group.groupID) } else this.groupController.deleteLocalGroupAndConversation(this.group.groupID); return this.reset(), Promise.resolve() } }, { key: "_updateRequestData", value: function(e) { e.StartSeq = this.startSeq, e.Key = this.key, this.tim.sumStatController.addTotalCount(gg) } }, { key: "_handleSuccess", value: function(e) { this.tim.sumStatController.addSuccessCount(gg), this.tim.sumStatController.addCost(gg, e.data.timecost), this.startSeq = e.data.nextSeq, this.key = e.data.key, Array.isArray(e.data.rspMsgList) && e.data.rspMsgList.forEach((function(e) { e.to = e.groupID })), e.data.rspMsgList && e.data.rspMsgList.length > 0 && this._dispatchNotice(e.data.rspMsgList), this.groupController.emitInnerEvent(Rd) } }, { key: "_handleFailure", value: function(e) { if (e.error)
                        if ("ECONNABORTED" === e.error.code || e.error.code === _f)
                            if (e.error.config) { var t = e.error.config.url,
                                    n = e.error.config.data;
                                ca.log("AVChatRoomHandler._handleFailure request timed out. url=".concat(t, " data=").concat(n)) } else ca.log("AVChatRoomHandler._handleFailure request timed out");
                    else ca.log("AVChatRoomHandler._handleFailure request failed due to network error");
                    this.groupController.emitInnerEvent(bd) } }, { key: "_dispatchNotice", value: function(e) { if (ga(e) && 0 !== e.length) { var t = Date.now(),
                            n = null,
                            r = [],
                            o = [],
                            i = e.length;
                        i > 1 && e.sort((function(e, t) { return e.sequence - t.sequence })); for (var s = 0; s < i; s++)
                            if (D_[e[s].event]) { this.receivedMessageCount += 1; var a = (n = this.packMessage(e[s], e[s].event)).conversationID; if (this.receivedMessageCount % 40 == 0 && this.tim.messageLossController.detectMessageLoss(a, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()) { var u = this.sequencesLinkedList.tail().value,
                                        c = n.sequence - u;
                                    c > 1 && c <= 20 ? this.tim.messageLossController.onMessageMaybeLost(a, u + 1, c - 1) : c < -1 && c >= -20 && this.tim.messageLossController.onMessageMaybeLost(a, n.sequence + 1, Math.abs(c) - 1) }
                                this.sequencesLinkedList.pushIn(n.sequence), this.tim.messageController.hasLocalMessage(n.conversationID, n.ID) || (n.conversationType === pn.CONV_SYSTEM && o.push(n), r.push(n)) } else ca.warn("AVChatRoomHandler._dispatchMessage 未处理的 event 类型：", e[s].event);
                        if (o.length > 0 && this.groupController.emitInnerEvent(fd, { result: o, eventDataList: [], type: "poll" }), 0 !== r.length) { var l = this.packConversationOption(r);
                            l.length > 0 && this.groupController.emitInnerEvent(pd, { eventDataList: l, type: "poll" }), ca.debug("AVChatRoomHandler._dispatchNotice nums=".concat(r.length)); var p = this.tim.sumStatController;
                            p.addTotalCount(yg), p.addSuccessCount(yg), p.addCost(yg, Date.now() - t), this.groupController.emitOuterEvent(ln.MESSAGE_RECEIVED, r) } } } }, { key: "packMessage", value: function(e, t) { e.currentUser = this.tim.context.identifier, e.conversationType = 5 === t ? pn.CONV_SYSTEM : pn.CONV_GROUP, e.isSystemMessage = !!e.isSystemMessage; var n = new Vh(e),
                        r = this.packElements(e, t); return n.setElement(r), n } }, { key: "packElements", value: function(e, t) { return 4 === t || 6 === t ? { type: pn.MSG_GRP_TIP, content: On({}, e.elements, { groupProfile: e.groupProfile }) } : 5 === t ? { type: pn.MSG_GRP_SYS_NOTICE, content: On({}, e.elements, { groupProfile: e.groupProfile }) } : this.tim.bigDataHallwayController.parseElements(e.elements, e.from) } }, { key: "packConversationOption", value: function(e) { for (var t = new Map, n = 0; n < e.length; n++) { var r = e[n],
                            o = r.conversationID; if (t.has(o)) { var i = t.get(o);
                            i.lastMessage = r, "in" === r.flow && i.unreadCount++ } else t.set(o, { conversationID: r.conversationID, unreadCount: "out" === r.flow ? 0 : 1, type: r.conversationType, subType: r.conversationSubType, lastMessage: r }) } return Hn(t.values()) } }, { key: "reset", value: function() { null !== this.AVChatRoomLoop && (ca.log("AVChatRoomHandler.reset"), this.stop(), this.AVChatRoomLoop = null, this.key = "", this.startSeq = 0, this.group = {}, this.sequencesLinkedList.reset(), this.receivedMessageCount = 0) } }]), e }(),
        w_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).groupMap = new Map, r.groupMemberListMap = new Map, r.groupNoticeHandler = new E_({ tim: e, groupController: qn(r) }), r.groupTipsHandler = new T_({ tim: e, groupController: qn(r) }), r.AVChatRoomHandler = new k_({ tim: e, groupController: qn(r) }), r._initListeners(), r } return An(n, [{ key: "createGroup", value: function(e) { var t = this; if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) { var n = new Ip({ code: Jp, message: uh }); return pg(n) }
                    xa(e.type) && !ma(e.memberList) && e.memberList.length > 0 && (ca.warn("GroupController.createGroup 创建AVChatRoom时不能添加群成员，自动忽略该字段"), e.memberList = void 0), Ga(e.type) || ma(e.joinOption) || (ca.warn("GroupController.createGroup 创建Private/ChatRoom/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段"), e.joinOption = void 0); var r = new Mg; return r.setMethod(Hg).setStart(), ca.log("GroupController.createGroup."), this.request({ name: "group", action: "create", param: e }).then((function(n) { if (r.setCode(0).setNetworkType(t.getNetworkType()).setText("groupType=".concat(e.type, " groupID=").concat(n.data.groupID)).setEnd(), ca.log("GroupController.createGroup ok. groupID:", n.data.groupID), e.type === pn.GRP_AVCHATROOM) return t.getGroupProfile({ groupID: n.data.groupID });
                        t.updateGroupMap([On({}, e, { groupID: n.data.groupID })]); var o = t.tim.createCustomMessage({ to: n.data.groupID, conversationType: pn.CONV_GROUP, payload: { data: "group_create", extension: "".concat(t.tim.context.identifier, "创建群组") } }); return t.tim.sendMessage(o), t.emitGroupListUpdate(), t.getGroupProfile({ groupID: n.data.groupID }) })).then((function(e) { var t = e.data.group; return t.selfInfo.messageRemindType = pn.MSG_REMIND_ACPT_AND_NOTE, t.selfInfo.role = pn.GRP_MBR_ROLE_OWNER, e })).catch((function(n) { return r.setText("groupType=".concat(e.type)), t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            r.setError(n, o, i).setEnd() })), ca.error("GroupController.createGroup error:", n), pg(n) })) } }, { key: "joinGroup", value: function(e) { if (this.hasLocalGroup(e.groupID)) { var t = { status: pn.JOIN_STATUS_ALREADY_IN_GROUP }; return lg(t) } if (e.type === pn.GRP_PRIVATE) { var n = new Ip({ code: Qp, message: ch }); return pg(n) } return ca.log("GroupController.joinGroup. groupID:", e.groupID), this.isLoggedIn() ? this.applyJoinGroup(e) : this.AVChatRoomHandler.joinWithoutAuth(e) } }, { key: "quitGroup", value: function(e) { var t = this;
                    ca.log("GroupController.quitGroup. groupID:", e); var n = this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e); if (n && !this.isLoggedIn()) return ca.log("GroupController.quitGroup anonymously ok. groupID:", e), this.deleteLocalGroupAndConversation(e), this.AVChatRoomHandler.reset(), lg({ groupID: e }); var r = new Mg; return r.setMethod(Kg).setStart(), this.request({ name: "group", action: "quitGroup", param: { groupID: e } }).then((function() { return r.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e)).setEnd(), ca.log("GroupController.quitGroup ok. groupID:", e), n && t.AVChatRoomHandler.reset(), t.deleteLocalGroupAndConversation(e), new ag({ groupID: e }) })).catch((function(n) { return r.setText("groupID=".concat(e)), t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            r.setError(n, o, i).setEnd() })), ca.error("GroupController.quitGroup error.  error:".concat(n, ". groupID:").concat(e)), pg(n) })) } }, { key: "changeGroupOwner", value: function(e) { var t = this; if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === pn.GRP_AVCHATROOM) return pg(new Ip({ code: Zp, message: lh })); if (e.newOwnerID === this.tim.loginInfo.identifier) return pg(new Ip({ code: ef, message: ph })); var n = new Mg; return n.setMethod(Yg).setStart(), ca.log("GroupController.changeGroupOwner. groupID:", e.groupID), this.request({ name: "group", action: "changeGroupOwner", param: e }).then((function() { n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(), ca.log("GroupController.changeGroupOwner ok. groupID:", e.groupID); var r = e.groupID,
                            o = e.newOwnerID;
                        t.groupMap.get(r).ownerID = o; var i = t.groupMemberListMap.get(r); if (i instanceof Map) { var s = i.get(t.tim.loginInfo.identifier);
                            ma(s) || (s.updateRole("Member"), t.groupMap.get(r).selfInfo.role = "Member"); var a = i.get(o);
                            ma(a) || a.updateRole("Owner") } return t.emitGroupListUpdate(!0, !1), new ag({ group: t.groupMap.get(r) }) })).catch((function(r) { return n.setText("groupID=".concat(e.groupID)), t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            n.setError(r, o, i).setEnd() })), ca.error("GroupController.changeGroupOwner error:".concat(r, ". groupID:").concat(e.groupID)), pg(r) })) } }, { key: "dismissGroup", value: function(e) { var t = this; if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === pn.GRP_PRIVATE) return pg(new Ip({ code: tf, message: fh })); var n = new Mg; return n.setMethod(Xg).setStart(), ca.log("GroupController.dismissGroup. groupID:".concat(e)), this.request({ name: "group", action: "destroyGroup", param: { groupID: e } }).then((function() { return n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e)).setEnd(), ca.log("GroupController.dismissGroup ok. groupID:".concat(e)), t.deleteLocalGroupAndConversation(e), t.checkJoinedAVChatRoomByID(e) && t.AVChatRoomHandler.reset(), new ag({ groupID: e }) })).catch((function(r) { return n.setText("groupID=".concat(e)), t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            n.setError(r, o, i).setEnd() })), ca.error("GroupController.dismissGroup error:".concat(r, ". groupID:").concat(e)), pg(r) })) } }, { key: "updateGroupProfile", value: function(e) { var t = this;!this.hasLocalGroup(e.groupID) || Ga(this.getLocalGroupProfile(e.groupID).type) || ma(e.joinOption) || (ca.warn("GroupController.updateGroupProfile Private/ChatRoom/AVChatRoom群不能设置字段：joinOption，自动忽略该字段"), e.joinOption = void 0), ma(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = "On" : e.muteAllMembers = "Off"); var n = new Mg; return n.setMethod(Jg).setStart(), n.setText(JSON.stringify(e)), ca.log("GroupController.updateGroupProfile. groupID:", e.groupID), this.request({ name: "group", action: "updateGroupProfile", param: e }).then((function() {
                        (n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.updateGroupProfile ok. groupID:", e.groupID), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setStorageGroupList()); return new ag({ group: t.groupMap.get(e.groupID) }) })).catch((function(r) { return t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            n.setError(r, o, i).setEnd() })), ca.log("GroupController.updateGroupProfile failed. error:".concat(Ea(r), " groupID:").concat(e.groupID)), pg(r) })) } }, { key: "setGroupMemberRole", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.userID,
                        o = e.role,
                        i = this.groupMap.get(n); if (i.selfInfo.role !== pn.GRP_MBR_ROLE_OWNER) return pg(new Ip({ code: af, message: vh })); if ([pn.GRP_PRIVATE, pn.GRP_AVCHATROOM].includes(i.type)) return pg(new Ip({ code: uf, message: yh })); if ([pn.GRP_MBR_ROLE_ADMIN, pn.GRP_MBR_ROLE_MEMBER].indexOf(o) < 0) return pg(new Ip({ code: cf, message: _h })); if (r === this.tim.loginInfo.identifier) return pg(new Ip({ code: lf, message: Ch })); var s = new Mg; return s.setMethod(um).setStart(), s.setText("groupID=".concat(n, " userID=").concat(r, " role=").concat(o)), ca.log("GroupController.setGroupMemberRole. groupID:".concat(n, ". userID: ").concat(r)), this._modifyGroupMemberInfo({ groupID: n, userID: r, role: o }).then((function(e) { return s.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.setGroupMemberRole ok. groupID:".concat(n, ". userID: ").concat(r)), new ag({ group: i, member: e }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            s.setError(e, r, o).setEnd() })), ca.error("GroupController.setGroupMemberRole error:".concat(e, ". groupID:").concat(n, ". userID:").concat(r)), pg(e) })) } }, { key: "setGroupMemberMuteTime", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.userID,
                        o = e.muteTime; if (r === this.tim.loginInfo.identifier) return pg(new Ip({ code: pf, message: Ih }));
                    ca.log("GroupController.setGroupMemberMuteTime. groupID:".concat(n, ". userID: ").concat(r)); var i = new Mg; return i.setMethod(sm).setStart(), i.setText("groupID=".concat(n, " userID=").concat(r, " muteTime=").concat(o)), this._modifyGroupMemberInfo({ groupID: n, userID: r, muteTime: o }).then((function(e) { return i.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.setGroupMemberMuteTime ok. groupID:".concat(n, ". userID: ").concat(r)), new ag({ group: t.getLocalGroupProfile(n), member: e }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            i.setError(e, r, o).setEnd() })), ca.error("GroupController.setGroupMemberMuteTime error:".concat(e, ". groupID:").concat(n, ". userID:").concat(r)), pg(e) })) } }, { key: "setMessageRemindType", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(Wg).setStart(), n.setText("groupID=".concat(e.groupID, " userID=").concat(e.userID || this.tim.loginInfo.identifier)), ca.log("GroupController.setMessageRemindType. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier)); var r = e.groupID,
                        o = e.messageRemindType; return this._modifyGroupMemberInfo({ groupID: r, messageRemindType: o, userID: this.tim.loginInfo.identifier }).then((function() { n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.setMessageRemindType ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || t.tim.loginInfo.identifier)); var r = t.getLocalGroupProfile(e.groupID); return r && (r.selfInfo.messageRemindType = o), new ag({ group: r }) })).catch((function(r) { return t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            n.setError(r, o, i).setEnd() })), ca.error("GroupController.setMessageRemindType error:".concat(r, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID || t.tim.loginInfo.identifier)), pg(r) })) } }, { key: "setGroupMemberNameCard", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.userID,
                        o = void 0 === r ? this.tim.loginInfo.identifier : r,
                        i = e.nameCard;
                    ca.log("GroupController.setGroupMemberNameCard. groupID:".concat(n, ". userID: ").concat(o)); var s = new Mg; return s.setMethod(am).setStart(), s.setText("groupID=".concat(n, " userID=").concat(o, " nameCard=").concat(i)), this._modifyGroupMemberInfo({ groupID: n, userID: o, nameCard: i }).then((function(e) { ca.log("GroupController.setGroupMemberNameCard ok. groupID:".concat(n, ". userID: ").concat(o)), s.setCode(0).setNetworkType(t.getNetworkType()).setEnd(); var r = t.getLocalGroupProfile(n); return o === t.tim.loginInfo.identifier && r && r.setSelfNameCard(i), new ag({ group: r, member: e }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            s.setError(e, r, o).setEnd() })), ca.error("GroupController.setGroupMemberNameCard error:".concat(e, ". groupID:").concat(n, ". userID:").concat(o)), pg(e) })) } }, { key: "setGroupMemberCustomField", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.userID,
                        o = void 0 === r ? this.tim.loginInfo.identifier : r,
                        i = e.memberCustomField;
                    ca.log("GroupController.setGroupMemberCustomField. groupID:".concat(n, ". userID: ").concat(o)); var s = new Mg; return s.setMethod(cm).setStart(), s.setText("groupID=".concat(n, " userID=").concat(o, " memberCustomField=").concat(i)), this._modifyGroupMemberInfo({ groupID: n, userID: o, memberCustomField: i }).then((function(e) { return s.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.setGroupMemberCustomField ok. groupID:".concat(n, ". userID: ").concat(o)), new ag({ group: t.groupMap.get(n), member: e }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            s.setError(e, r, o).setEnd() })), ca.error("GroupController.setGroupMemberCustomField error:".concat(e, ". groupID:").concat(n, ". userID:").concat(o)), pg(e) })) } }, { key: "getGroupList", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(Qg).setStart(), ca.log("GroupController.getGroupList"); var r = { introduction: "Introduction", notification: "Notification", createTime: "CreateTime", ownerID: "Owner_Account", lastInfoTime: "LastInfoTime", memberNum: "MemberNum", maxMemberNum: "MaxMemberNum", joinOption: "ApplyJoinOption", muteAllMembers: "ShutUpAllMember" },
                        o = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"]; return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(e) { r[e] && o.push(r[e]) })), this.request({ name: "group", action: "list", param: { responseFilter: { groupBaseInfoFilter: o, selfInfoFilter: ["Role", "JoinTime", "MsgFlag"] } } }).then((function(e) { var r = e.data.groups; return n.setCode(0).setNetworkType(t.getNetworkType()).setText(r.length).setEnd(), ca.log("GroupController.getGroupList ok. nums=".concat(r.length)), t._groupListTreeShaking(r), t.updateGroupMap(r), t.tempConversationList && (ca.log("GroupController.getGroupList update last message with tempConversationList, nums=".concat(t.tempConversationList.length)), t._handleUpdateGroupLastMessage({ data: t.tempConversationList }), t.tempConversationList = null), t.emitGroupListUpdate(), new ag({ groupList: t.getLocalGroups() }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var r = Bn(t, 2),
                                o = r[0],
                                i = r[1];
                            n.setError(e, o, i).setEnd() })), ca.error("GroupController.getGroupList error: ", e), pg(e) })) } }, { key: "getGroupMemberList", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.offset,
                        o = void 0 === r ? 0 : r,
                        i = e.count,
                        s = void 0 === i ? 15 : i,
                        a = new Mg;
                    a.setMethod(nm).setStart(), ca.log("GroupController.getGroupMemberList groupID: ".concat(n, " offset: ").concat(o, " count: ").concat(s)); var u = []; return this.request({ name: "group", action: "getGroupMemberList", param: { groupID: n, offset: o, limit: s > 100 ? 100 : s, memberInfoFilter: ["Role", "NameCard", "ShutUpUntil"] } }).then((function(e) { var r = e.data,
                            o = r.members,
                            i = r.memberNum; return ga(o) && 0 !== o.length ? (t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).memberNum = i), u = t._updateLocalGroupMemberMap(n, o), t.tim.getUserProfile({ userIDList: o.map((function(e) { return e.userID })), tagList: [rp.NICK, rp.AVATAR] })) : Promise.resolve([]) })).then((function(e) { var r = e.data; if (!ga(r) || 0 === r.length) return lg({ memberList: [] }); var i = r.map((function(e) { return { userID: e.userID, nick: e.nick, avatar: e.avatar } })); return t._updateLocalGroupMemberMap(n, i), a.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(n, " offset=").concat(o, " count=").concat(s)).setEnd(), ca.log("GroupController.getGroupMemberList ok."), new ag({ memberList: u }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            a.setError(e, r, o).setEnd() })), ca.error("GroupController.getGroupMemberList error: ", e), pg(e) })) } }, { key: "getLocalGroups", value: function() { return Hn(this.groupMap.values()) } }, { key: "getLocalGroupProfile", value: function(e) { return this.groupMap.get(e) } }, { key: "hasLocalGroup", value: function(e) { return this.groupMap.has(e) } }, { key: "getLocalGroupMemberInfo", value: function(e, t) { return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null } }, { key: "setLocalGroupMember", value: function(e, t) { if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t.userID, t);
                    else { var n = (new Map).set(t.userID, t);
                        this.groupMemberListMap.set(e, n) } } }, { key: "hasLocalGroupMember", value: function(e, t) { return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t) } }, { key: "hasLocalGroupMemberMap", value: function(e) { return this.groupMemberListMap.has(e) } }, { key: "getGroupProfile", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(Zg).setStart(), ca.log("GroupController.getGroupProfile. groupID:", e.groupID); var r = e.groupID,
                        o = e.groupCustomFieldFilter,
                        i = { groupIDList: [r], responseFilter: { groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"], groupCustomFieldFilter: o } }; return this.getGroupProfileAdvance(i).then((function(o) { var i, s = o.data,
                            a = s.successGroupList,
                            u = s.failureGroupList; return ca.log("GroupController.getGroupProfile ok. groupID:", e.groupID), u.length > 0 ? pg(u[0]) : (xa(a[0].type) && !t.hasLocalGroup(r) ? i = new n_(a[0]) : (t.updateGroupMap(a), i = t.getLocalGroupProfile(r)), n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(i.groupID, " type=").concat(i.type, " muteAllMembers=").concat(i.muteAllMembers, " ownerID=").concat(i.ownerID)).setEnd(), i && i.selfInfo && !i.selfInfo.nameCard ? t.updateSelfInfo(i).then((function(e) { return new ag({ group: e }) })) : new ag({ group: i })) })).catch((function(r) { return t.probeNetwork().then((function(t) { var o = Bn(t, 2),
                                i = o[0],
                                s = o[1];
                            n.setError(r, i, s).setText("groupID=".concat(e.groupID)).setEnd() })), ca.error("GroupController.getGroupProfile error:".concat(Ea(r), ". groupID:").concat(e.groupID)), pg(r) })) } }, { key: "getGroupMemberProfile", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(rm).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setStart(), ca.log("GroupController.getGroupMemberProfile groupID:".concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))), e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50)); var r = e.groupID,
                        o = e.userIDList; return this._getGroupMemberProfileAdvance(On({}, e, { userIDList: o })).then((function(e) { var n = e.data.members; return ga(n) && 0 !== n.length ? (t._updateLocalGroupMemberMap(r, n), t.tim.getUserProfile({ userIDList: n.map((function(e) { return e.userID })), tagList: [rp.NICK, rp.AVATAR] })) : lg([]) })).then((function(e) { var i = e.data.map((function(e) { return { userID: e.userID, nick: e.nick, avatar: e.avatar } }));
                        t._updateLocalGroupMemberMap(r, i); var s = o.filter((function(e) { return t.hasLocalGroupMember(r, e) })).map((function(e) { return t.getLocalGroupMemberInfo(r, e) })); return n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), new ag({ memberList: s }) })) } }, { key: "_getGroupMemberProfileAdvance", value: function(e) { return this.request({ name: "group", action: "getGroupMemberProfile", param: On({}, e, { memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"] }) }) } }, { key: "updateSelfInfo", value: function(e) { var t = e.groupID;
                    ca.log("GroupController.updateSelfInfo groupID:", t); var n = { groupID: t, userIDList: [this.tim.loginInfo.identifier] }; return this.getGroupMemberProfile(n).then((function(n) { var r = n.data.memberList; return ca.log("GroupController.updateSelfInfo ok. groupID:", t), e && 0 !== r.length && e.updateSelfInfo(r[0]), e })) } }, { key: "addGroupMember", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(om).setText("groupID=".concat(e.groupID)).setStart(); var r = this.getLocalGroupProfile(e.groupID); if (xa(r.type)) { var o = new Ip({ code: rf, message: dh }); return n.setCode(rf).setMessage(dh).setNetworkType(this.getNetworkType()).setText("groupID=".concat(e.groupID, " groupType=").concat(r.type)).setEnd(), pg(o) } return e.userIDList = e.userIDList.map((function(e) { return { userID: e } })), ca.log("GroupController.addGroupMember. groupID:", e.groupID), this.request({ name: "group", action: "addGroupMember", param: e }).then((function(o) { var i = o.data.members;
                        n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(), ca.log("GroupController.addGroupMember ok. groupID:", e.groupID); var s = i.filter((function(e) { return 1 === e.result })).map((function(e) { return e.userID })),
                            a = i.filter((function(e) { return 0 === e.result })).map((function(e) { return e.userID })),
                            u = i.filter((function(e) { return 2 === e.result })).map((function(e) { return e.userID })); return 0 === s.length ? new ag({ successUserIDList: s, failureUserIDList: a, existedUserIDList: u }) : (r.memberNum += s.length, new ag({ successUserIDList: s, failureUserIDList: a, existedUserIDList: u, group: r })) })).catch((function(r) { return t.probeNetwork().then((function(t) { var o = Bn(t, 2),
                                i = o[0],
                                s = o[1];
                            n.setError(r, i, s).setText("groupID=".concat(e.groupID)).setEnd() })), ca.error("GroupController.addGroupMember error:".concat(r, ", groupID:").concat(e.groupID)), pg(r) })) } }, { key: "deleteGroupMember", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(im).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setStart(), ca.log("GroupController.deleteGroupMember groupID:".concat(e.groupID, " userIDList:").concat(e.userIDList)); var r = this.getLocalGroupProfile(e.groupID); return r.type === pn.GRP_AVCHATROOM ? pg(new Ip({ code: sf, message: mh })) : this.request({ name: "group", action: "deleteGroupMember", param: e }).then((function() { return n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.deleteGroupMember ok"), r.memberNum--, t.deleteLocalGroupMembers(e.groupID, e.userIDList), new ag({ group: r, userIDList: e.userIDList }) })).catch((function(r) { return t.probeNetwork().then((function(t) { var o = Bn(t, 2),
                                i = o[0],
                                s = o[1];
                            n.setError(r, i, s).setText("groupID=".concat(e.groupID)).setEnd() })), ca.error("GroupController.deleteGroupMember error:".concat(r.code, ", groupID:").concat(e.groupID)), pg(r) })) } }, { key: "searchGroupByID", value: function(e) { var t = this,
                        n = { groupIDList: [e] },
                        r = new Mg; return r.setMethod($g).setText("groupID=".concat(e)).setStart(), ca.log("GroupController.searchGroupByID. groupID:".concat(e)), this.request({ name: "group", action: "searchGroupByID", param: n }).then((function(n) { var o = n.data.groupProfile; if (o[0].errorCode !== Lu.SUCCESS) throw new Ip({ code: o[0].errorCode, message: o[0].errorInfo }); return r.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.searchGroupByID ok. groupID:".concat(e)), new ag({ group: new n_(o[0]) }) })).catch((function(n) { return t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            r.setError(n, o, i).setEnd() })), ca.warn("GroupController.searchGroupByID error:".concat(Ea(n), ", groupID:").concat(e)), pg(n) })) } }, { key: "applyJoinGroup", value: function(e) { var t = this,
                        n = new Mg; return n.setMethod(Vg).setStart(), this.request({ name: "group", action: "applyJoinGroup", param: e }).then((function(r) { var o = r.data,
                            i = o.joinedStatus,
                            s = o.longPollingKey; switch (n.setCode(0).setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID, " joinedStatus=").concat(i)).setEnd(), ca.log("GroupController.joinGroup ok. groupID:", e.groupID), i) {
                            case Ou.WAIT_APPROVAL:
                                return new ag({ status: Ou.WAIT_APPROVAL });
                            case Ou.SUCCESS:
                                return t.getGroupProfile({ groupID: e.groupID }).then((function(n) { var r = n.data.group,
                                        o = { status: Ou.SUCCESS, group: r }; return ma(s) ? new ag(o) : (t.emitInnerEvent(Bd, e.groupID), t.AVChatRoomHandler.startRunLoop({ longPollingKey: s, group: r })) }));
                            default:
                                var a = new Ip({ code: nf, message: hh }); return ca.error("GroupController.joinGroup error:".concat(a, ". groupID:").concat(e.groupID)), pg(a) } })).catch((function(r) { return n.setText("groupID=".concat(e.groupID)), t.probeNetwork().then((function(e) { var t = Bn(e, 2),
                                o = t[0],
                                i = t[1];
                            n.setError(r, o, i).setEnd() })), ca.error("GroupController.joinGroup error:".concat(r, ". groupID:").concat(e.groupID)), pg(r) })) } }, { key: "applyJoinAVChatRoom", value: function(e) { return this.AVChatRoomHandler.applyJoinAVChatRoom(e) } }, { key: "handleGroupApplication", value: function(e) { var t = this,
                        n = e.message.payload,
                        r = n.groupProfile.groupID,
                        o = n.authentication,
                        i = n.messageKey,
                        s = n.operatorID,
                        a = new Mg; return a.setMethod(zg).setText("groupID=".concat(r)).setStart(), ca.log("GroupController.handleApplication. groupID:", r), this.request({ name: "group", action: "handleApplyJoinGroup", param: On({}, e, { applicant: s, groupID: r, authentication: o, messageKey: i }) }).then((function() { return a.setCode(0).setNetworkType(t.getNetworkType()).setEnd(), ca.log("GroupController.handleApplication ok. groupID:", r), t.deleteGroupSystemNotice({ messageList: [e.message] }), new ag({ group: t.getLocalGroupProfile(r) }) })).catch((function(e) { return t.probeNetwork().then((function(t) { var n = Bn(t, 2),
                                r = n[0],
                                o = n[1];
                            a.setError(e, r, o).setEnd() })), ca.error("GroupController.handleApplication error.  error:".concat(e, ". groupID:").concat(r)), pg(e) })) } }, { key: "deleteGroupSystemNotice", value: function(e) { var t = this; return ga(e.messageList) && 0 !== e.messageList.length ? (ca.log("GroupController.deleteGroupSystemNotice " + e.messageList.map((function(e) { return e.ID }))), this.request({ name: "group", action: "deleteGroupSystemNotice", param: { messageListToDelete: e.messageList.map((function(e) { return { from: pn.CONV_SYSTEM, messageSeq: e.clientSequence, messageRandom: e.random } })) } }).then((function() { return ca.log("GroupController.deleteGroupSystemNotice ok"), e.messageList.forEach((function(e) { t.tim.messageController.deleteLocalMessage(e) })), new ag })).catch((function(e) { return ca.error("GroupController.deleteGroupSystemNotice error:", e), pg(e) }))) : lg() } }, { key: "getGroupProfileAdvance", value: function(e) { return ga(e.groupIDList) && e.groupIDList.length > 50 && (ca.warn("GroupController.getGroupProfileAdvance 获取群资料的数量不能超过50个"), e.groupIDList.length = 50), ca.log("GroupController.getGroupProfileAdvance. groupIDList:", e.groupIDList), this.request({ name: "group", action: "query", param: e }).then((function(e) { ca.log("GroupController.getGroupProfileAdvance ok."); var t = e.data.groups,
                            n = t.filter((function(e) { return ma(e.errorCode) || e.errorCode === Lu.SUCCESS })),
                            r = t.filter((function(e) { return e.errorCode && e.errorCode !== Lu.SUCCESS })).map((function(e) { return new Ip({ code: Number("500".concat(e.errorCode)), message: e.errorInfo, data: { groupID: e.groupID } }) })); return new ag({ successGroupList: n, failureGroupList: r }) })).catch((function(t) { return ca.error("GroupController.getGroupProfileAdvance error:".concat(Ea(t), ". groupIDList:").concat(e.groupIDList)), pg(t) })) } }, { key: "_deleteLocalGroup", value: function(e) { return this.groupMap.delete(e), this.groupMemberListMap.delete(e), this._setStorageGroupList(), this.groupMap.has(e) && this.groupMemberListMap.has(e) } }, { key: "_initGroupList", value: function() { var e = this,
                        t = new Mg;
                    t.setMethod(em).setStart(), ca.time(Cg), ca.log("GroupController._initGroupList"); var n = this._getStorageGroupList();
                    ga(n) && n.length > 0 ? (n.forEach((function(t) { e.groupMap.set(t.groupID, new n_(t)) })), this.emitGroupListUpdate(!0, !1), t.setCode(0).setNetworkType(this.getNetworkType()).setText(this.groupMap.size).setEnd()) : t.setCode(0).setNetworkType(this.getNetworkType()).setText(0).setEnd(), this.triggerReady(), ca.log("GroupController._initGroupList ok. initCost=".concat(ca.timeEnd(Cg), "ms")), this.getGroupList() } }, { key: "_initListeners", value: function() { var e = this.tim.innerEmitter;
                    e.once(rd, this._initGroupList, this), e.on(Ud, this._handleUpdateGroupLastMessage, this), e.on(pd, this._handleReceivedGroupMessage, this), e.on(jd, this._handleProfileUpdated, this) } }, { key: "emitGroupListUpdate", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this.getLocalGroups();
                    t && this.emitInnerEvent(Od, n), e && this.emitOuterEvent(ln.GROUP_LIST_UPDATED, n) } }, { key: "_handleReceivedGroupMessage", value: function(e) { var t = this,
                        n = e.data.eventDataList;
                    Array.isArray(n) && n.forEach((function(e) { var n = e.conversationID.replace(pn.CONV_GROUP, "");
                        t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1) })) } }, { key: "_onReceivedGroupSystemNotice", value: function(e) { var t = e.data;
                    this.groupNoticeHandler._onReceivedGroupNotice(t) } }, { key: "_handleUpdateGroupLastMessage", value: function(e) { var t = e.data; if (ca.log("GroupController._handleUpdateGroupLastMessage convNums=".concat(t.length, " groupNums=").concat(this.groupMap.size)), 0 !== this.groupMap.size) { for (var n, r, o, i = !1, s = 0, a = t.length; s < a; s++)(n = t[s]).conversationID && n.type !== pn.CONV_GROUP && (r = n.conversationID.split(/^GROUP/)[1], (o = this.getLocalGroupProfile(r)) && (o.lastMessage = n.lastMessage, i = !0));
                        i && (this.groupMap = this._sortLocalGroupList(this.groupMap), this.emitGroupListUpdate(!0, !1)) } else this.tempConversationList = t } }, { key: "_sortLocalGroupList", value: function(e) { var t = Hn(e).filter((function(e) { var t = Bn(e, 2);
                        t[0]; return !ja(t[1].lastMessage) })); return t.sort((function(e, t) { return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime })), new Map([].concat(Hn(t), Hn(e))) } }, { key: "_getStorageGroupList", value: function() { return this.tim.storage.getItem("groupMap") } }, { key: "_setStorageGroupList", value: function() { var e = this.getLocalGroups().filter((function(e) { var t = e.type; return !xa(t) })).slice(0, 20).map((function(e) { return { groupID: e.groupID, name: e.name, avatar: e.avatar, type: e.type } }));
                    this.tim.storage.setItem("groupMap", e) } }, { key: "updateGroupMap", value: function(e) { var t = this;
                    e.forEach((function(e) { t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new n_(e)) })), this._setStorageGroupList() } }, { key: "_updateLocalGroupMemberMap", value: function(e, t) { var n = this; return ga(t) && 0 !== t.length ? t.map((function(t) { return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new S_(t)), n.getLocalGroupMemberInfo(e, t.userID) })) : [] } }, { key: "deleteLocalGroupMembers", value: function(e, t) { var n = this.groupMemberListMap.get(e);
                    n && t.forEach((function(e) { n.delete(e) })) } }, { key: "_modifyGroupMemberInfo", value: function(e) { var t = this,
                        n = e.groupID,
                        r = e.userID; return this.request({ name: "group", action: "modifyGroupMemberInfo", param: e }).then((function() { if (t.hasLocalGroupMember(n, r)) { var o = t.getLocalGroupMemberInfo(n, r); return ma(e.muteTime) || o.updateMuteUntil(e.muteTime), ma(e.role) || o.updateRole(e.role), ma(e.nameCard) || o.updateNameCard(e.nameCard), ma(e.memberCustomField) || o.updateMemberCustomField(e.memberCustomField), o } return t.getGroupMemberProfile({ groupID: n, userIDList: [r] }).then((function(e) { return Bn(e.data.memberList, 1)[0] })) })) } }, { key: "_groupListTreeShaking", value: function(e) { for (var t = new Map(Hn(this.groupMap)), n = 0, r = e.length; n < r; n++) t.delete(e[n].groupID);
                    this.AVChatRoomHandler.hasJoinedAVChatRoom() && t.delete(this.AVChatRoomHandler.group.groupID); for (var o = Hn(t.keys()), i = 0, s = o.length; i < s; i++) this.groupMap.delete(o[i]) } }, { key: "_handleProfileUpdated", value: function(e) { for (var t = this, n = e.data, r = function(e) { var r = n[e];
                            t.groupMemberListMap.forEach((function(e) { e.has(r.userID) && e.get(r.userID).updateMember({ nick: r.nick, avatar: r.avatar }) })) }, o = 0; o < n.length; o++) r(o) } }, { key: "getJoinedAVChatRoom", value: function() { return this.AVChatRoomHandler.getJoinedAVChatRoom() } }, { key: "deleteLocalGroupAndConversation", value: function(e) { this._deleteLocalGroup(e), this.tim.conversationController.deleteLocalConversation("GROUP".concat(e)), this.emitGroupListUpdate(!0, !1) } }, { key: "checkJoinedAVChatRoomByID", value: function(e) { return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e) } }, { key: "getGroupLastSequence", value: function(e) { var t = this,
                        n = new Mg;
                    n.setMethod(tm).setStart(); var r = 0; if (this.hasLocalGroup(e)) { var o = this.getLocalGroupProfile(e); if (o.lastMessage.lastSequence > 0) return r = o.lastMessage.lastSequence, ca.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)), n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(), Promise.resolve(r); if (o.nextMessageSeq > 1) return r = o.nextMessageSeq - 1, ca.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local group profile[nextMessageSeq]. groupID=").concat(e)), n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local group profile[nextMessageSeq]. groupID=").concat(e)).setEnd(), Promise.resolve(r) } var i = "GROUP".concat(e),
                        s = this.tim.conversationController.getLocalConversation(i); if (s && s.lastMessage.lastSequence) return r = s.lastMessage.lastSequence, ca.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)), n.setCode(0).setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(r, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(), Promise.resolve(r); var a = { groupIDList: [e], responseFilter: { groupBaseInfoFilter: ["NextMsgSeq"] } }; return this.getGroupProfileAdvance(a).then((function(o) { var i = o.data.successGroupList; return ja(i) ? ca.log("GroupController.getGroupLastSequence successGroupList is empty. groupID=".concat(e)) : (r = i[0].nextMessageSeq - 1, ca.log("GroupController.getGroupLastSequence got lastSequence=".concat(r, " from getGroupProfileAdvance. groupID=").concat(e))), n.setCode(0).setNetworkType(t.getNetworkType()).setText("got lastSequence=".concat(r, " from getGroupProfileAdvance. groupID=").concat(e)).setEnd(), r })).catch((function(r) { return t.probeNetwork().then((function(t) { var o = Bn(t, 2),
                                i = o[0],
                                s = o[1];
                            n.setError(r, i, s).setText("get lastSequence failed from getGroupProfileAdvance. groupID=".concat(e)).setEnd() })), ca.warn("GroupController.getGroupLastSequence failed. ".concat(r)), pg(r) })) } }, { key: "reset", value: function() { this.groupMap.clear(), this.groupMemberListMap.clear(), this.resetReady(), this.groupNoticeHandler.reset(), this.AVChatRoomHandler.reset(), this.tim.innerEmitter.once(rd, this._initGroupList, this) } }]), n }(og),
        A_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r;
                kn(this, n), (r = t.call(this, e)).REALTIME_MESSAGE_TIMEOUT = 11e4, r.LONGPOLLING_ID_TIMEOUT = 3e5, r._currentState = pn.NET_STATE_CONNECTED, r._status = { OPENIM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 }, AVCHATROOM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 } }; var o = r.tim.innerEmitter; return o.on(dd, r._onGetLongPollIDFailed, qn(r)), o.on(md, r._onOpenIMResponseOK, qn(r)), o.on(gd, r._onOpenIMRequestFailed, qn(r)), o.on(Rd, r._onAVChatroomResponseOK, qn(r)), o.on(bd, r._onAVChatroomRequestFailed, qn(r)), r } return An(n, [{ key: "_onGetLongPollIDFailed", value: function() { this._currentState !== pn.NET_STATE_DISCONNECTED && this._emitNetStateChangeEvent(pn.NET_STATE_DISCONNECTED) } }, { key: "_onOpenIMResponseOK", value: function() { this._onResponseOK("OPENIM") } }, { key: "_onOpenIMRequestFailed", value: function() { this._onRequestFailed("OPENIM") } }, { key: "_onAVChatroomResponseOK", value: function() { this.isLoggedIn() || this._onResponseOK("AVCHATROOM") } }, { key: "_onAVChatroomRequestFailed", value: function() { this.isLoggedIn() || this._onRequestFailed("AVCHATROOM") } }, { key: "_onResponseOK", value: function(e) { var t = this._status[e],
                        n = Date.now(); if (0 !== t.lastResponseReceivedTime) { var r = n - t.lastResponseReceivedTime; if (ca.debug("StatusController._onResponseOK key=".concat(e, " currentState=").concat(this._currentState, " interval=").concat(r, " failedCount=").concat(t.failedCount, " jitterCount=").concat(t.jitterCount)), t.failedCount > 0 && (t.failedCount = 0, t.jitterCount += 1, this._currentState !== pn.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(pn.NET_STATE_CONNECTED)), r <= this.REALTIME_MESSAGE_TIMEOUT) { if (t.jitterCount >= 3) { var o = new Mg;
                                o.setMethod(fm).setStart(), o.setCode(0).setText("".concat(e, "-").concat(r, "-").concat(t.jitterCount)).setNetworkType(this.getNetworkType()).setEnd(), t.jitterCount = 0 } } else if (r >= this.REALTIME_MESSAGE_TIMEOUT && r < this.LONGPOLLING_ID_TIMEOUT) { var i = new Mg;
                            i.setMethod(hm).setStart(), i.setCode(0).setText("".concat(e, "-").concat(r)).setNetworkType(this.getNetworkType()).setEnd(), ca.warn("StatusController._onResponseOK, fast start. key=".concat(e, " interval=").concat(r, " ms")), this.emitInnerEvent(vd) } else if (r >= this.LONGPOLLING_ID_TIMEOUT) { var s = new Mg;
                            s.setMethod(dm).setStart(), s.setCode(0).setText("".concat(e, "-").concat(r)).setNetworkType(this.getNetworkType()).setEnd(), ca.warn("StatusController._onResponseOK, slow start. key=".concat(e, " interval=").concat(r, " ms")), this.emitInnerEvent(yd) }
                        t.lastResponseReceivedTime = n } else t.lastResponseReceivedTime = n } }, { key: "_onRequestFailed", value: function(e) { var t = this,
                        n = this._status[e];
                    Date.now() - n.lastResponseReceivedTime >= this.LONGPOLLING_ID_TIMEOUT ? this._currentState !== pn.NET_STATE_DISCONNECTED && (ca.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable more than 5min. key=".concat(e, " networkType=").concat(this.getNetworkType())), this._emitNetStateChangeEvent(pn.NET_STATE_DISCONNECTED)) : (n.failedCount += 1, n.failedCount > 5 ? this.probeNetwork().then((function(r) { var o = Bn(r, 2),
                            i = o[0],
                            s = o[1];
                        i ? (t._currentState !== pn.NET_STATE_CONNECTING && t._emitNetStateChangeEvent(pn.NET_STATE_CONNECTING), ca.warn("StatusController._onRequestFailed, connecting, network jitter. key=".concat(e, " networkType=").concat(s))) : (t._currentState !== pn.NET_STATE_DISCONNECTED && t._emitNetStateChangeEvent(pn.NET_STATE_DISCONNECTED), ca.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable. key=".concat(e, " networkType=").concat(s))), n.failedCount = 0, n.jitterCount = 0 })) : this._currentState === pn.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(pn.NET_STATE_CONNECTING)) } }, { key: "_emitNetStateChangeEvent", value: function(e) { ca.log("StatusController._emitNetStateChangeEvent net state changed from ".concat(this._currentState, " to ").concat(e)), this._currentState = e, this.emitOuterEvent(ln.NET_STATE_CHANGE, { state: e }) } }, { key: "reset", value: function() { ca.log("StatusController.reset"), this._currentState = pn.NET_STATE_CONNECTED, this._status = { OPENIM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 }, AVCHATROOM: { lastResponseReceivedTime: 0, jitterCount: 0, failedCount: 0 } } } }]), n }(og);

    function b_() { return null } var R_ = function() {
            function e(t) { kn(this, e), this.tim = t, this.isWX = Rs, this.storageQueue = new Map, this.checkTimes = 0, this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3), this._errorTolerantHandle() } return An(e, [{ key: "_errorTolerantHandle", value: function() {!this.isWX && ma(window.localStorage) && (this.getItem = b_, this.setItem = b_, this.removeItem = b_, this.clear = b_) } }, { key: "_onCheckTimer", value: function() { if (this.checkTimes++, this.checkTimes % 20 == 0) { if (0 === this.storageQueue.size) return;
                        this._doFlush() } } }, { key: "_doFlush", value: function() { try { var e, t = $n(this.storageQueue); try { for (t.s(); !(e = t.n()).done;) { var n = Bn(e.value, 2),
                                    r = n[0],
                                    o = n[1];
                                this.isWX ? wx.setStorageSync(this._getKey(r), o) : localStorage.setItem(this._getKey(r), JSON.stringify(o)) } } catch (i) { t.e(i) } finally { t.f() }
                        this.storageQueue.clear() } catch (gC) { ca.warn("Storage._doFlush error", gC) } } }, { key: "_getPrefix", value: function() { var e = this.tim.loginInfo,
                        t = e.SDKAppID,
                        n = e.identifier; return "TIM_".concat(t, "_").concat(n, "_") } }, { key: "getItem", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try { var n = t ? this._getKey(e) : e; return this.isWX ? wx.getStorageSync(n) : JSON.parse(localStorage.getItem(n)) } catch (gC) { ca.warn("Storage.getItem error:", gC) } } }, { key: "setItem", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if (n) { var o = r ? this._getKey(e) : e;
                        this.isWX ? wx.setStorageSync(o, t) : localStorage.setItem(o, JSON.stringify(t)) } else this.storageQueue.set(e, t) } }, { key: "clear", value: function() { try { this.isWX ? wx.clearStorageSync() : localStorage.clear() } catch (gC) { ca.warn("Storage.clear error:", gC) } } }, { key: "removeItem", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; try { var n = t ? this._getKey(e) : e;
                        this.isWX ? wx.removeStorageSync(n) : localStorage.removeItem(n) } catch (gC) { ca.warn("Storage.removeItem error:", gC) } } }, { key: "getSize", value: function(e) { var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b"; try { var r = { size: 0, limitSize: 5242880, unit: n }; if (Object.defineProperty(r, "leftSize", { enumerable: !0, get: function() { return r.limitSize - r.size } }), this.isWX && (r.limitSize = 1024 * wx.getStorageInfoSync().limitSize), e) r.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
                        else if (this.isWX) { var o = wx.getStorageInfoSync(),
                                i = o.keys;
                            i.forEach((function(e) { r.size += JSON.stringify(wx.getStorageSync(e)).length + t._getKey(e).length })) } else
                            for (var s in localStorage) localStorage.hasOwnProperty(s) && (r.size += localStorage.getItem(s).length + s.length); return this._convertUnit(r) } catch (gC) { ca.warn("Storage.getSize error:", gC) } } }, { key: "_convertUnit", value: function(e) { var t = {},
                        n = e.unit; for (var r in t.unit = n, e) "number" == typeof e[r] && ("kb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024) : "mb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024 / 1024) : t[r] = e[r]); return t } }, { key: "_getKey", value: function(e) { return "".concat(this._getPrefix()).concat(e) } }, { key: "reset", value: function() { this._doFlush(), this.checkTimes = 0 } }]), e }(),
        O_ = t((function(e) { var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function o(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

            function i(e, t, r, i, s) { if ("function" != typeof r) throw new TypeError("The listener must be a function"); var a = new o(r, i || e, s),
                    u = n ? n + t : t; return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e }

            function s(e, t) { 0 == --e._eventsCount ? e._events = new r : delete e._events[t] }

            function a() { this._events = new r, this._eventsCount = 0 }
            Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), a.prototype.eventNames = function() { var e, r, o = []; if (0 === this._eventsCount) return o; for (r in e = this._events) t.call(e, r) && o.push(n ? r.slice(1) : r); return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o }, a.prototype.listeners = function(e) { var t = n ? n + e : e,
                    r = this._events[t]; if (!r) return []; if (r.fn) return [r.fn]; for (var o = 0, i = r.length, s = new Array(i); o < i; o++) s[o] = r[o].fn; return s }, a.prototype.listenerCount = function(e) { var t = n ? n + e : e,
                    r = this._events[t]; return r ? r.fn ? 1 : r.length : 0 }, a.prototype.emit = function(e, t, r, o, i, s) { var a = n ? n + e : e; if (!this._events[a]) return !1; var u, c, l = this._events[a],
                    p = arguments.length; if (l.fn) { switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, r), !0;
                        case 4:
                            return l.fn.call(l.context, t, r, o), !0;
                        case 5:
                            return l.fn.call(l.context, t, r, o, i), !0;
                        case 6:
                            return l.fn.call(l.context, t, r, o, i, s), !0 } for (c = 1, u = new Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u) } else { var f, h = l.length; for (c = 0; c < h; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), p) {
                        case 1:
                            l[c].fn.call(l[c].context); break;
                        case 2:
                            l[c].fn.call(l[c].context, t); break;
                        case 3:
                            l[c].fn.call(l[c].context, t, r); break;
                        case 4:
                            l[c].fn.call(l[c].context, t, r, o); break;
                        default:
                            if (!u)
                                for (f = 1, u = new Array(p - 1); f < p; f++) u[f - 1] = arguments[f];
                            l[c].fn.apply(l[c].context, u) } } return !0 }, a.prototype.on = function(e, t, n) { return i(this, e, t, n, !1) }, a.prototype.once = function(e, t, n) { return i(this, e, t, n, !0) }, a.prototype.removeListener = function(e, t, r, o) { var i = n ? n + e : e; if (!this._events[i]) return this; if (!t) return s(this, i), this; var a = this._events[i]; if (a.fn) a.fn !== t || o && !a.once || r && a.context !== r || s(this, i);
                else { for (var u = 0, c = [], l = a.length; u < l; u++)(a[u].fn !== t || o && !a[u].once || r && a[u].context !== r) && c.push(a[u]);
                    c.length ? this._events[i] = 1 === c.length ? c[0] : c : s(this, i) } return this }, a.prototype.removeAllListeners = function(e) { var t; return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new r, this._eventsCount = 0), this }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a })),
        L_ = function(e) { var t, n, r, o, i; return ja(e.context) ? (t = "", n = 0, r = 0, o = 0, i = 1) : (t = e.context.a2Key, n = e.context.tinyID, r = e.context.SDKAppID, o = e.context.contentType, i = e.context.apn), { platform: Xh, websdkappid: Wh, v: zh, a2: t, tinyid: n, sdkappid: r, contentType: o, apn: i, reqtime: function() { return +new Date } } },
        N_ = function() {
            function e(t) { kn(this, e), this.tim = t, this.tim.innerEmitter.on(td, this._update, this), this.tim.innerEmitter.on(nd, this._update, this), this.tim.innerEmitter.on(od, this._updateSpecifiedConfig, this), this._initConfig() } return An(e, [{ key: "_update", value: function(e) { this._initConfig() } }, { key: "_updateSpecifiedConfig", value: function(e) { var t = this;
                    e.data.forEach((function(e) { t._set(e) })) } }, { key: "get", value: function(e) { var t = e.name,
                        n = e.action,
                        r = e.param,
                        o = e.tjgID; if (ma(this.config[t]) || ma(this.config[t][n])) throw new Ip({ code: Mf, message: "".concat(bh, ": PackageConfig.").concat(t) }); var i = function e(t) { if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null); var n = Array.isArray(t) ? [] : Object.create(null),
                            r = ""; for (var o in t) null !== t[o] ? void 0 !== t[o] ? (r = Dn(t[o]), ["string", "number", "function", "boolean"].indexOf(r) >= 0 ? n[o] = t[o] : n[o] = e(t[o])) : n[o] = void 0 : n[o] = null; return n }(this.config[t][n]); return i.requestData = this._initRequestData(r, i), i.encode = this._initEncoder(i), i.decode = this._initDecoder(i), o && (i.queryString.tjg_id = o), i } }, { key: "_set", value: function(e) { var t = e.key,
                        n = e.value; if (!1 != !!t) { var r = t.split("."); if (!(r.length <= 0)) {! function e(t, n, r, o) { var i = n[r]; "object" === Dn(t[i]) ? e(t[i], n, r + 1, o) : t[i] = o }(this.config, r, 0, n) } } } }, { key: "_initConfig", value: function() { var e;
                    this.config = {}, this.config.accessLayer = (e = this.tim, { create: null, query: { serverName: Zh.NAME.WEB_IM, cmd: Zh.CMD.ACCESS_LAYER, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { platform: Xh, identifier: e.context.identifier, usersig: e.context.userSig, contentType: e.context.contentType, apn: null !== e.context ? e.context.apn : 1, websdkappid: Wh, v: zh }, requestData: {} }, update: null, delete: null }), this.config.login = function(e) { return { create: null, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.LOGIN, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { websdkappid: Wh, v: zh, platform: Xh, identifier: e.loginInfo.identifier, usersig: e.loginInfo.userSig, sdkappid: e.loginInfo.SDKAppID, accounttype: e.loginInfo.accountType, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: +new Date / 1e3 }, requestData: { state: "Online" }, keyMaps: { request: { tinyID: "tinyId" }, response: { TinyId: "tinyID" } } }, update: null, delete: null } }(this.tim), this.config.logout = function(e) { return { create: null, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.LOGOUT_ALL, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { websdkappid: Wh, v: zh, platform: Xh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : "", sdkappid: null !== e.loginInfo ? e.loginInfo.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : "", reqtime: +new Date / 1e3 }, requestData: {} }, update: null, delete: null } }(this.tim), this.config.longPollLogout = function(e) { return { create: null, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.LOGOUT_LONG_POLL, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { websdkappid: Wh, v: zh, platform: Xh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return Date.now() } }, requestData: { longPollID: "" }, keyMaps: { request: { longPollID: "LongPollingId" } } }, update: null, delete: null } }(this.tim), this.config.profile = function(e) { var t = L_(e),
                            n = Zh.NAME.PROFILE,
                            r = Zh.CHANNEL.XHR,
                            o = Qh; return { query: { serverName: n, cmd: Zh.CMD.PORTRAIT_GET, channel: r, protocol: o, method: "POST", queryString: t, requestData: { fromAccount: "", userItem: [] }, keyMaps: { request: { toAccount: "To_Account", standardSequence: "StandardSequence", customSequence: "CustomSequence" } } }, update: { serverName: n, cmd: Zh.CMD.PORTRAIT_SET, channel: r, protocol: o, method: "POST", queryString: t, requestData: { fromAccount: "", profileItem: [{ tag: rp.NICK, value: "" }, { tag: rp.GENDER, value: "" }, { tag: rp.ALLOWTYPE, value: "" }, { tag: rp.AVATAR, value: "" }] } } } }(this.tim), this.config.group = function(e) { var t = { websdkappid: Wh, v: zh, platform: Xh, a2: null !== e.context && e.context.a2Key ? e.context.a2Key : void 0, tinyid: null !== e.context && e.context.tinyID ? e.context.tinyID : void 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, accounttype: null !== e.context ? e.context.accountType : 0 },
                            n = { request: { ownerID: "Owner_Account", userID: "Member_Account", newOwnerID: "NewOwner_Account", maxMemberNum: "MaxMemberCount", groupCustomField: "AppDefinedData", memberCustomField: "AppMemberDefinedData", groupCustomFieldFilter: "AppDefinedDataFilter_Group", memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember", messageRemindType: "MsgFlag", userIDList: "MemberList", groupIDList: "GroupIdList", applyMessage: "ApplyMsg", muteTime: "ShutUpTime", muteAllMembers: "ShutUpAllMember", joinOption: "ApplyJoinOption" }, response: { GroupIdList: "groups", MsgFlag: "messageRemindType", AppDefinedData: "groupCustomField", AppMemberDefinedData: "memberCustomField", AppDefinedDataFilter_Group: "groupCustomFieldFilter", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", InfoSeq: "infoSequence", MemberList: "members", GroupInfo: "groups", ShutUpUntil: "muteUntil", ShutUpAllMember: "muteAllMembers", ApplyJoinOption: "joinOption" } }; return { create: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.CREATE_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { type: pn.GRP_PRIVATE, name: void 0, groupID: void 0, ownerID: e.loginInfo.identifier, introduction: void 0, notification: void 0, avatar: void 0, maxMemberNum: void 0, joinOption: void 0, memberList: void 0, groupCustomField: void 0 }, keyMaps: n }, list: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_JOINED_GROUPS, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { userID: e.loginInfo.identifier, limit: void 0, offset: void 0, groupType: void 0, responseFilter: void 0 }, keyMaps: n }, query: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_GROUP_INFO, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupIDList: void 0, responseFilter: void 0 }, keyMaps: n }, getGroupMemberProfile: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_GROUP_MEMBER_INFO, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, userIDList: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 }, keyMaps: { request: On({}, n.request, { userIDList: "Member_List_Account" }), response: n.response } }, getGroupMemberList: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_GROUP_MEMBER_LIST, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, limit: 0, offset: 0, memberRoleFilter: void 0, memberInfoFilter: void 0 }, keyMaps: n }, quitGroup: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.QUIT_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0 } }, changeGroupOwner: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.CHANGE_GROUP_OWNER, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, newOwnerID: void 0 }, keyMaps: n }, destroyGroup: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.DESTROY_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0 } }, updateGroupProfile: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.MODIFY_GROUP_INFO, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, name: void 0, introduction: void 0, notification: void 0, avatar: void 0, maxMemberNum: void 0, joinOption: void 0, groupCustomField: void 0, muteAllMembers: void 0 }, keyMaps: { request: On({}, n.request, { groupCustomField: "AppDefinedData" }), response: n.response } }, modifyGroupMemberInfo: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.MODIFY_GROUP_MEMBER_INFO, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, userID: void 0, messageRemindType: void 0, nameCard: void 0, role: void 0, memberCustomField: void 0, muteTime: void 0 }, keyMaps: n }, addGroupMember: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.ADD_GROUP_MEMBER, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, silence: void 0, userIDList: void 0 }, keyMaps: n }, deleteGroupMember: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.DELETE_GROUP_MEMBER, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, userIDList: void 0, reason: void 0 }, keyMaps: { request: { userIDList: "MemberToDel_Account" } } }, searchGroupByID: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.SEARCH_GROUP_BY_ID, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupIDList: void 0, responseFilter: { groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"] } }, keyMaps: { request: { groupIDList: "GroupIdList" } } }, applyJoinGroup: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.APPLY_JOIN_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0 }, keyMaps: n }, applyJoinAVChatRoom: { serverName: Zh.NAME.BIG_GROUP_NO_AUTH, cmd: Zh.CMD.APPLY_JOIN_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: { websdkappid: Wh, v: zh, platform: Xh, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, accounttype: null !== e.context ? e.context.accountType : 0 }, requestData: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0 }, keyMaps: n }, handleApplyJoinGroup: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.HANDLE_APPLY_JOIN_GROUP, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { groupID: void 0, applicant: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMaps: { request: { applicant: "Applicant_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg", messageKey: "MsgKey" }, response: { MsgKey: "messageKey" } } }, deleteGroupSystemNotice: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.DELETE_GROUP_SYSTEM_MESSAGE, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { messageListToDelete: void 0 }, keyMaps: { request: { messageListToDelete: "DelMsgList", messageSeq: "MsgSeq", messageRandom: "MsgRandom" } } }, getGroupPendency: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_GROUP_PENDENCY, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: t, requestData: { startTime: void 0, limit: void 0, handleAccount: void 0 }, keyMaps: { request: { handleAccount: "Handle_Account" } } } } }(this.tim), this.config.longPollID = function(e) { return { create: {}, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.GET_LONG_POLL_ID, channel: Zh.CHANNEL.XHR, protocol: Qh, queryString: { websdkappid: Wh, v: zh, platform: Xh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: +new Date / 1e3 }, requestData: {}, keyMaps: { response: { LongPollingId: "longPollingID" } } }, update: {}, delete: {} } }(this.tim), this.config.longPoll = function(e) { var t = { websdkappid: Wh, v: zh, platform: Xh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, accounttype: null !== e.context ? e.loginInfo.accountType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: Math.ceil(+new Date / 1e3) }; return { create: {}, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.LONG_POLL, channel: Zh.CHANNEL.AUTO, protocol: Qh, queryString: t, requestData: { timeout: null, cookie: { notifySeq: 0, noticeSeq: 0, longPollingID: 0 } }, keyMaps: { response: { C2cMsgArray: "C2CMessageArray", GroupMsgArray: "groupMessageArray", GroupTips: "groupTips", C2cNotifyMsgArray: "C2CNotifyMessageArray", ClientSeq: "clientSequence", MsgPriority: "priority", NoticeSeq: "noticeSequence", MsgContent: "content", MsgType: "type", MsgBody: "elements", ToGroupId: "to", Desc: "description", Ext: "extension" } } }, update: {}, delete: {} } }(this.tim), this.config.applyC2C = function(e) { var t = L_(e),
                            n = Zh.NAME.FRIEND,
                            r = Zh.CHANNEL.XHR,
                            o = Qh; return { create: { serverName: n, cmd: Zh.CMD.FRIEND_ADD, channel: r, protocol: o, queryString: t, requestData: { fromAccount: "", addFriendItem: [] } }, get: { serverName: n, cmd: Zh.CMD.GET_PENDENCY, channel: r, protocol: o, queryString: t, requestData: { fromAccount: "", pendencyType: "Pendency_Type_ComeIn" } }, update: { serverName: n, cmd: Zh.CMD.RESPONSE_PENDENCY, channel: r, protocol: o, queryString: t, requestData: { fromAccount: "", responseFriendItem: [] } }, delete: { serverName: n, cmd: Zh.CMD.DELETE_PENDENCY, channel: r, protocol: o, queryString: t, requestData: { fromAccount: "", toAccount: [], pendencyType: "Pendency_Type_ComeIn" } } } }(this.tim), this.config.friend = function(e) { var t = L_(e),
                            n = Zh.NAME.FRIEND,
                            r = Zh.CHANNEL.XHR,
                            o = Qh; return { get: { serverName: n, cmd: Zh.CMD.FRIEND_GET_ALL, channel: r, protocol: o, method: "POST", queryString: t, requestData: { fromAccount: "", timeStamp: 0, tagList: [rp.NICK, "Tag_SNS_IM_Remark", rp.AVATAR] }, keyMaps: { request: {}, response: {} } }, delete: { serverName: n, cmd: Zh.CMD.FRIEND_DELETE, channel: r, protocol: o, method: "POST", queryString: t, requestData: { fromAccount: "", toAccount: [], deleteType: "Delete_Type_Single" } } } }(this.tim), this.config.blacklist = function(e) { var t = L_(e); return { create: { serverName: Zh.NAME.FRIEND, cmd: Zh.CMD.ADD_BLACKLIST, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: "", toAccount: [] } }, get: { serverName: Zh.NAME.FRIEND, cmd: Zh.CMD.GET_BLACKLIST, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: "", startIndex: 0, maxLimited: 30, lastSequence: 0 } }, delete: { serverName: Zh.NAME.FRIEND, cmd: Zh.CMD.DELETE_BLACKLIST, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: "", toAccount: [] } }, update: {} } }(this.tim), this.config.c2cMessage = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } },
                            n = { request: { fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody", count: "MaxCnt", lastMessageTime: "LastMsgTime", messageKey: "MsgKey", peerAccount: "Peer_Account", data: "Data", description: "Desc", extension: "Ext", type: "MsgType", content: "MsgContent", sizeType: "Type", uuid: "UUID", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag" }, response: { MsgContent: "content", MsgTime: "time", Data: "data", Desc: "description", Ext: "extension", MsgKey: "messageKey", MsgType: "type", MsgBody: "elements", Download_Flag: "downloadFlag", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID" } }; return { create: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.SEND_MESSAGE, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: e.loginInfo.identifier, toAccount: "", msgTimeStamp: Math.ceil(+new Date / 1e3), msgSeq: 0, msgRandom: 0, msgBody: [], msgLifeTime: void 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: "" } } }, keyMaps: n }, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.GET_C2C_ROAM_MESSAGES, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { peerAccount: "", count: 15, lastMessageTime: 0, messageKey: "", withRecalledMsg: 1 }, keyMaps: n }, update: null, delete: null } }(this.tim), this.config.c2cMessageWillBeRevoked = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } }; return { create: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.REVOKE_C2C_MESSAGE, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { msgInfo: { fromAccount: "", toAccount: "", msgTimeStamp: Math.ceil(+new Date / 1e3), msgSeq: 0, msgRandom: 0 } }, keyMaps: { request: { msgInfo: "MsgInfo", fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody" } } } } }(this.tim), this.config.groupMessage = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } },
                            n = { request: { to: "GroupId", extension: "Ext", data: "Data", description: "Desc", random: "Random", sequence: "ReqMsgSeq", count: "ReqMsgNumber", type: "MsgType", priority: "MsgPriority", content: "MsgContent", elements: "MsgBody", sizeType: "Type", uuid: "UUID", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", clientSequence: "ClientSeq" }, response: { Random: "random", MsgTime: "time", MsgSeq: "sequence", ReqMsgSeq: "sequence", RspMsgList: "messageList", IsPlaceMsg: "isPlaceMessage", IsSystemMsg: "isSystemMessage", ToGroupId: "to", EnumFrom_AccountType: "fromAccountType", EnumTo_AccountType: "toAccountType", GroupCode: "groupCode", MsgPriority: "priority", MsgBody: "elements", MsgType: "type", MsgContent: "content", IsFinished: "complete", Download_Flag: "downloadFlag", ClientSeq: "clientSequence", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID" } }; return { create: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.SEND_GROUP_MESSAGE, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { groupID: "", fromAccount: e.loginInfo.identifier, random: 0, clientSequence: 0, priority: "", msgBody: [], onlineOnlyFlag: 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0 }, androidInfo: { OPPOChannelID: "" } } }, keyMaps: n }, query: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.GET_GROUP_ROAM_MESSAGES, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { withRecalledMsg: 1, groupID: "", count: 15, sequence: "" }, keyMaps: n }, update: null, delete: null } }(this.tim), this.config.groupMessageWillBeRevoked = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } }; return { create: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.REVOKE_GROUP_MESSAGE, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { to: "", msgSeqList: [] }, keyMaps: { request: { to: "GroupId", msgSeqList: "MsgSeqList", msgSeq: "MsgSeq" } } } } }(this.tim), this.config.conversation = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1 }; return { query: { serverName: Zh.NAME.RECENT_CONTACT, cmd: Zh.CMD.GET_CONVERSATION_LIST, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: e.loginInfo.identifier, count: 0 }, keyMaps: { request: {}, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq" } } }, pagingQuery: { serverName: Zh.NAME.RECENT_CONTACT, cmd: Zh.CMD.PAGING_GET_CONVERSATION_LIST, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: void 0, timeStamp: void 0, orderType: void 0 }, keyMaps: { request: {}, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq" } } }, delete: { serverName: Zh.NAME.RECENT_CONTACT, cmd: Zh.CMD.DELETE_CONVERSATION, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { fromAccount: e.loginInfo.identifier, toAccount: void 0, type: 1, toGroupID: void 0 }, keyMaps: { request: { toGroupID: "ToGroupid" } } }, setC2CMessageRead: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.SET_C2C_MESSAGE_READ, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { C2CMsgReaded: void 0 }, keyMaps: { request: { lastMessageTime: "LastedMsgTime" } } }, setGroupMessageRead: { serverName: Zh.NAME.GROUP, cmd: Zh.CMD.SET_GROUP_MESSAGE_READ, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { groupID: void 0, messageReadSeq: void 0 }, keyMaps: { request: { messageReadSeq: "MsgReadedSeq" } } } } }(this.tim), this.config.syncMessage = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return [Math.ceil(+new Date), Math.random()].join("") } }; return { create: null, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.GET_MESSAGES, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { cookie: "", syncFlag: 0, needAbstract: 1 }, keyMaps: { request: { fromAccount: "From_Account", toAccount: "To_Account", from: "From_Account", to: "To_Account", time: "MsgTimeStamp", sequence: "MsgSeq", random: "MsgRandom", elements: "MsgBody" }, response: { MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", ClientSeq: "clientSequence", MsgSeq: "sequence", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgRandom: "random", MsgTimeStamp: "time", MsgContent: "content", ToGroupId: "groupID", MsgKey: "messageKey", GroupTips: "groupTips", MsgBody: "elements", MsgType: "type", C2CRemainingUnreadCount: "C2CRemainingUnreadList" } } }, update: null, delete: null } }(this.tim), this.config.AVChatRoom = function(e) { return { startLongPoll: { serverName: Zh.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH, cmd: Zh.CMD.AVCHATROOM_LONG_POLL, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { websdkappid: Wh, v: zh, platform: Xh, sdkappid: e.loginInfo.SDKAppID, accounttype: "792", apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } }, requestData: { USP: 1, startSeq: 1, holdTime: 90, key: void 0 }, keyMaps: { request: { USP: "USP" }, response: { ToGroupId: "groupID", MsgPriority: "priority" } } } } }(this.tim), this.config.cosUpload = function(e) { var t = { platform: Xh, websdkappid: Wh, v: zh, a2: null !== e.context ? e.context.a2Key : "", tinyid: null !== e.context ? e.context.tinyID : 0, sdkappid: null !== e.context ? e.context.SDKAppID : 0, contentType: null !== e.context ? e.context.contentType : 0, apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return Date.now() } }; return { create: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.FILE_UPLOAD, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { appVersion: "2.1", fromAccount: "", toAccount: "", sequence: 0, time: function() { return Math.ceil(Date.now() / 1e3) }, random: function() { return wa() }, fileStrMd5: "", fileSize: "", serverVer: 1, authKey: "", busiId: 1, pkgFlag: 1, sliceOffset: 0, sliceSize: 0, sliceData: "", contentType: "application/x-www-form-urlencoded" }, keyMaps: { request: {}, response: {} } }, update: null, delete: null } }(this.tim), this.config.cosSig = function(e) { var t = { sdkappid: function() { return e.loginInfo.SDKAppID }, identifier: function() { return e.loginInfo.identifier }, userSig: function() { return e.context.userSig } }; return { create: null, query: { serverName: Zh.NAME.IM_COS_SIGN, cmd: Zh.CMD.COS_SIGN, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: t, requestData: { cmd: "open_im_cos_svc", subCmd: "get_cos_token", duration: 300, version: 2 }, keyMaps: { request: { userSig: "usersig", subCmd: "sub_cmd", cmd: "cmd", duration: "duration", version: "version" }, response: { expired_time: "expiredTime", bucket_name: "bucketName", session_token: "sessionToken", tmp_secret_id: "secretId", tmp_secret_key: "secretKey" } } }, update: null, delete: null } }(this.tim), this.config.bigDataHallwayAuthKey = function(e) { return { create: null, query: { serverName: Zh.NAME.OPEN_IM, cmd: Zh.CMD.BIG_DATA_HALLWAY_AUTH_KEY, channel: Zh.CHANNEL.XHR, protocol: Qh, method: "POST", queryString: { websdkappid: Wh, v: zh, platform: Xh, sdkappid: e.loginInfo.SDKAppID, accounttype: "792", apn: null !== e.context ? e.context.apn : 1, reqtime: function() { return +new Date } }, requestData: {} } } }(this.tim), this.config.ssoEventStat = function(e) { var t = { sdkappid: e.loginInfo.SDKAppID, reqtime: Math.ceil(+new Date / 1e3) }; return { create: { serverName: Zh.NAME.IM_OPEN_STAT, cmd: Zh.CMD.TIM_WEB_REPORT, channel: Zh.CHANNEL.AUTO, protocol: Qh, queryString: t, requestData: { table: "", report: [] }, keyMaps: { request: { table: "table", report: "report", SDKAppID: "sdkappid", version: "version", tinyID: "tinyid", userID: "userid", platform: "platform", method: "method", time: "time", start: "start", end: "end", cost: "cost", status: "status", codeint: "codeint", message: "message", pointer: "pointer", text: "text", msgType: "msgtype", networkType: "networktype", startts: "startts", endts: "endts", timespan: "timespan" } } }, query: {}, update: {}, delete: {} } }(this.tim), this.config.ssoSumStat = function(e) { var t = null;
                        null !== e.context && (t = { sdkappid: e.context.SDKAppID, reqtime: Math.ceil(+new Date / 1e3) }); return { create: { serverName: Zh.NAME.IM_OPEN_STAT, cmd: Zh.CMD.TIM_WEB_REPORT, channel: Zh.CHANNEL.AUTO, protocol: Qh, queryString: t, requestData: { table: "", report: [] }, keyMaps: { request: { table: "table", report: "report", SDKAppID: "sdkappid", version: "version", tinyID: "tinyid", userID: "userid", item: "item", lpID: "lpid", platform: "platform", networkType: "networktype", total: "total", successRate: "successrate", avg: "avg", timespan: "timespan", time: "time" } } }, query: {}, update: {}, delete: {} } }(this.tim) } }, { key: "_initRequestData", value: function(e, t) { if (void 0 === e) return Jd(t.requestData, this._getRequestMap(t), this.tim); var n = t.requestData,
                        r = Object.create(null); for (var o in n)
                        if (Object.prototype.hasOwnProperty.call(n, o)) { if (r[o] = "function" == typeof n[o] ? n[o]() : n[o], void 0 === e[o]) continue;
                            r[o] = e[o] }
                    return r = Jd(r, this._getRequestMap(t), this.tim) } }, { key: "_getRequestMap", value: function(e) { if (e.keyMaps && e.keyMaps.request && Object.keys(e.keyMaps.request).length > 0) return e.keyMaps.request } }, { key: "_initEncoder", value: function(e) { switch (e.protocol) {
                        case Qh:
                            return function(e) { if ("string" === Dn(e)) try { return JSON.parse(e) } catch (gC) { return e }
                                return e };
                        case Jh:
                            return function(e) { return e };
                        default:
                            return function(e) { return ca.warn("PackageConfig._initEncoder(), unknow response type, data: ", JSON.stringify(e)), e } } } }, { key: "_initDecoder", value: function(e) { switch (e.protocol) {
                        case Qh:
                            return function(e) { if ("string" === Dn(e)) try { return JSON.parse(e) } catch (gC) { return e }
                                return e };
                        case Jh:
                            return function(e) { return e };
                        default:
                            return function(e) { return ca.warn("PackageConfig._initDecoder(), unknow response type, data: ", e), e } } } }]), e }(),
        P_ = Math.floor;
    Ae({ target: "Number", stat: !0 }, { isInteger: function(e) { return !m(e) && isFinite(e) && P_(e) === e } }); var G_ = function() { for (var e = [], t = x_(arguments), n = 0; n < arguments.length; n++) Number.isInteger(arguments[n]) ? e.push(arguments[n]) : e.push(!0 == !!arguments[n] ? "1" : "0"); return e.join(t) },
        x_ = function(e) { var t = e.length,
                n = e[t - 1]; if ("string" != typeof n) return ""; if (n.length > 1) return ""; var r = e[t - 1]; return delete e[t - 1], e.length -= t === e.length ? 1 : 0, r },
        U_ = { C2CMessageArray: 1, groupMessageArray: 1, groupTips: 1, C2CNotifyMessageArray: 1, profileModify: 1, friendListMod: 1 },
        q_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e))._initialization(), r } return An(n, [{ key: "_initialization", value: function() { this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, this._syncMessagesFinished = !1, this._isLongPoll = !1, this._longPollID = 0, this._noticeSequence = 0, this._initializeListener(), this._runLoop = null, this._initShuntChannels() } }, { key: "_initShuntChannels", value: function() { this._shuntChannels = Object.create(null), this._shuntChannels.C2CMessageArray = this._C2CMessageArrayChannel.bind(this), this._shuntChannels.groupMessageArray = this._groupMessageArrayChannel.bind(this), this._shuntChannels.groupTips = this._groupTipsChannel.bind(this), this._shuntChannels.C2CNotifyMessageArray = this._C2CNotifyMessageArrayChannel.bind(this), this._shuntChannels.profileModify = this._profileModifyChannel.bind(this), this._shuntChannels.friendListMod = this._friendListModChannel.bind(this) } }, { key: "_C2CMessageArrayChannel", value: function(e, t, n) { this.emitInnerEvent(Id, t) } }, { key: "_groupMessageArrayChannel", value: function(e, t, n) { this.emitInnerEvent(Md, t) } }, { key: "_groupTipsChannel", value: function(e, t, n) { var r = this; switch (e) {
                        case 4:
                        case 6:
                            this.emitInnerEvent(Sd, t); break;
                        case 5:
                            t.forEach((function(e) { ga(e.elements.revokedInfos) ? r.emitInnerEvent(wd, t) : r.emitInnerEvent(Td, { groupSystemNotices: t, type: n }) })); break;
                        default:
                            ca.log("NotificationController._groupTipsChannel unknown event=".concat(e, " type=").concat(n), t) } } }, { key: "_C2CNotifyMessageArrayChannel", value: function(e, t, n) { this._isKickedoutNotice(t) ? this.emitInnerEvent(Cd) : this._isSysCmdMsgNotify(t) ? this.emitInnerEvent(kd) : this._isC2CMessageRevokedNotify(t) && this.emitInnerEvent(Ad, t) } }, { key: "_profileModifyChannel", value: function(e, t, n) { this.emitInnerEvent(Dd, t) } }, { key: "_friendListModChannel", value: function(e, t, n) { this.emitInnerEvent(Ed, t) } }, { key: "_dispatchNotice", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "poll"; if (ga(e))
                        for (var n = null, r = null, o = "", i = "", s = "", a = 0, u = 0, c = e.length; u < c; u++) a = (n = e[u]).event, o = Object.keys(n).find((function(e) { return void 0 !== U_[e] })), ya(this._shuntChannels[o]) ? (r = n[o], "poll" === t && this._updatenoticeSequence(r), this._shuntChannels[o](a, r, t)) : ("poll" === t && this._updatenoticeSequence(), i = "".concat(Ef), s = "".concat(Lh, ": ").concat(a, ", ").concat(o), this.emitInnerEvent(xd, new Ip({ code: i, message: s, data: { payloadName: o, event: a } })), i = "", s = "") } }, { key: "getLongPollID", value: function() { return this._longPollID } }, { key: "_IAmReady", value: function() { this.triggerReady() } }, { key: "reset", value: function() { this._noticeSequence = 0, this._resetSync(), this.closeNoticeChannel() } }, { key: "_resetSync", value: function() { this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = !1, this._syncMessagesFinished = !1 } }, { key: "_setNoticeSeqInRequestData", value: function(e) { e.Cookie.NoticeSeq = this._noticeSequence, this.tim.sumStatController.addTotalCount(dg) } }, { key: "_updatenoticeSequence", value: function(e) { if (e) { var t = e[e.length - 1].noticeSequence;
                        t && "number" == typeof t ? t <= this._noticeSequence || (this._noticeSequence = t) : this._noticeSequence++ } else this._noticeSequence++ } }, { key: "_initializeListener", value: function() { var e = this.tim.innerEmitter;
                    e.on(rd, this._startSyncMessages, this), e.on(Pd, this.closeNoticeChannel, this), e.on(vd, this._onFastStart, this) } }, { key: "openNoticeChannel", value: function() { ca.log("NotificationController.openNoticeChannel"), this._getLongPollID() } }, { key: "closeNoticeChannel", value: function() { ca.log("NotificationController.closeNoticeChannel"), (this._runLoop instanceof xy || this._runLoop instanceof Uy) && (this._runLoop.abort(), this._runLoop.stop()), this._longPollID = 0, this._isLongPoll = !1 } }, { key: "_getLongPollID", value: function() { var e = this; if (0 === this._longPollID) { var t = new Mg;
                        t.setMethod(lm).setStart(), this.request({ name: "longPollID", action: "query" }).then((function(n) { var r = n.data.longPollingID;
                            e._onGetLongPollIDSuccess(r), t.setCode(0).setText("longPollingID=".concat(r)).setNetworkType(e.getNetworkType()).setEnd() })).catch((function(n) { var r = new Ip({ code: n.code || wf, message: n.message || Ph });
                            e.emitInnerEvent(dd), e.emitInnerEvent(xd, r), e.probeNetwork().then((function(e) { var n = Bn(e, 2),
                                    o = n[0],
                                    i = n[1];
                                t.setError(r, o, i).setEnd() })) })) } else this._onGetLongPollIDSuccess(this._longPollID) } }, { key: "_onGetLongPollIDSuccess", value: function(e) { this.emitInnerEvent(od, [{ key: "long_poll_logout.query.requestData.longPollingID", value: e }, { key: "longPoll.query.requestData.cookie.longPollingID", value: e }]), this._longPollID = e, this._startLongPoll(), this._IAmReady(), this.tim.sumStatController.recordLongPollingID(this._longPollID) } }, { key: "_startLongPoll", value: function() { if (!0 !== this._isLongPoll) { ca.log("NotificationController._startLongPoll..."); var e = this.tim.connectionController,
                            t = this.createTransportCapsule({ name: "longPoll", action: "query" });
                        this._isLongPoll = !0, this._runLoop = e.createRunLoop({ pack: t, before: this._setNoticeSeqInRequestData.bind(this), success: this._onNoticeReceived.bind(this), fail: this._onNoticeFail.bind(this) }), this._runLoop.start() } else ca.log("NotificationController._startLongPoll is running...") } }, { key: "_onFastStart", value: function() { this.closeNoticeChannel(), this.syncMessage() } }, { key: "_onNoticeReceived", value: function(e) { var t = e.data; if (t.errorCode !== Lu.SUCCESS) { var n = new Mg;
                        n.setMethod(pm).setStart(), n.setMessage(t.errorInfo || JSON.stringify(t)).setCode(t.errorCode).setNetworkType(this.getNetworkType()).setEnd(!0), this._onResponseError(t) } else this.emitInnerEvent(md);
                    this.tim.sumStatController.addSuccessCount(dg), this.tim.sumStatController.addCost(dg, t.timecost), e.data.eventArray && this._dispatchNotice(e.data.eventArray) } }, { key: "_onResponseError", value: function(e) { switch (e.errorCode) {
                        case bf:
                            ca.warn("NotificationController._onResponseError, longPollingID=".concat(this._longPollID, " was kicked out")), this.emitInnerEvent(_d), this.closeNoticeChannel(); break;
                        case Rf:
                        case Of:
                            this.emitInnerEvent(Gd); break;
                        default:
                            ma(e.errorCode) || ma(e.errorInfo) ? ca.log("NotificationController._onResponseError, errorCode or errorInfo undefined!", e) : this.emitInnerEvent(xd, new Ip({ code: e.errorCode, message: e.errorInfo })) } } }, { key: "_onNoticeFail", value: function(e) { if (e.error)
                        if ("ECONNABORTED" === e.error.code || e.error.code === _f)
                            if (e.error.config) { var t = e.error.config.url,
                                    n = e.error.config.data;
                                ca.log("NotificationController._onNoticeFail request timed out. url=".concat(t, " data=").concat(n)) } else ca.log("NotificationController._onNoticeFail request timed out.");
                    else ca.log("NotificationController._onNoticeFail request failed due to network error");
                    this.emitInnerEvent(gd) } }, { key: "_isKickedoutNotice", value: function(e) { return !!e[0].hasOwnProperty("kickoutMsgNotify") } }, { key: "_isSysCmdMsgNotify", value: function(e) { if (!e[0]) return !1; var t = e[0]; return !!Object.prototype.hasOwnProperty.call(t, "sysCmdMsgNotify") } }, { key: "_isC2CMessageRevokedNotify", value: function(e) { var t = e[0]; return !!Object.prototype.hasOwnProperty.call(t, "c2cMessageRevokedNotify") } }, { key: "_startSyncMessages", value: function(e) {!0 !== this._syncMessagesFinished && this.syncMessage() } }, { key: "syncMessage", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this._syncMessagesIsRunning = !0, this.request({ name: "syncMessage", action: "query", param: { cookie: t, syncFlag: n } }).then((function(t) { var n = t.data; switch (G_(n.cookie, n.syncFlag)) {
                            case "00":
                            case "01":
                                e.emitInnerEvent(xd, { code: Df, message: Nh }); break;
                            case "10":
                            case "11":
                                n.eventArray && e._dispatchNotice(n.eventArray, "sync"), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), e.emitInnerEvent(id, { data: n.messageList, C2CRemainingUnreadList: n.C2CRemainingUnreadList }), e._syncOffset = n.cookie, e.syncMessage(n.cookie, n.syncFlag); break;
                            case "12":
                                n.eventArray && e._dispatchNotice(n.eventArray, "sync"), e.openNoticeChannel(), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), e.emitInnerEvent(sd, { messageList: n.messageList, C2CRemainingUnreadList: n.C2CRemainingUnreadList }), e._syncOffset = n.cookie, e._syncNoticeList = [], e._syncMessagesIsRunning = !1, e._syncMessagesFinished = !0 } })).catch((function(t) { e._syncMessagesIsRunning = !1, ca.error("NotificationController.syncMessage failed. error:".concat(t)) })) } }]), n }(og),
        F_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).COSSDK = null, r._cosUploadMethod = null, r.expiredTimeLimit = 300, r.appid = 0, r.bucketName = "", r.ciUrl = "", r.directory = "", r.downloadUrl = "", r.uploadUrl = "", r.expiredTimeOut = r.expiredTimeLimit, r.region = "ap-shanghai", r.cos = null, r.cosOptions = { secretId: "", secretKey: "", sessionToken: "", expiredTime: 0 }, r._timer = 0, r.tim.innerEmitter.on(rd, r._init, qn(r)), r.triggerReady(), r } return An(n, [{ key: "_expiredTimer", value: function() { var e = this;
                    this._timer = setInterval((function() { Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 60 && (e._getAuthorizationKey(), clearInterval(e._timer)) }), 3e4) } }, { key: "_init", value: function() { var e = Rs ? "cos-wx-sdk" : "cos-js-sdk";
                    this.COSSDK = this.tim.getPlugin(e), this.COSSDK ? this._getAuthorizationKey() : ca.warn("UploadController._init 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin") } }, { key: "_getAuthorizationKey", value: function() { var e = this,
                        t = Math.ceil(Date.now() / 1e3),
                        n = new Mg;
                    n.setMethod(bg).setStart(), this.request({ name: "cosSig", action: "query", param: { duration: this.expiredTimeLimit } }).then((function(r) { ca.log("UploadController._getAuthorizationKey ok. data:", r.data); var o = r.data,
                            i = o.expiredTime - t;
                        n.setCode(0).setText("timeout=".concat(i, "s")).setNetworkType(e.getNetworkType()).setEnd(), e.appid = o.appid, e.bucketName = o.bucketName, e.ciUrl = o.ciUrl, e.directory = o.directory, e.downloadUrl = o.downloadUrl, e.uploadUrl = o.uploadUrl, e.expiredTimeOut = i, e.cosOptions = { secretId: o.secretId, secretKey: o.secretKey, sessionToken: o.sessionToken, expiredTime: o.expiredTime }, e._initUploaderMethod(), e._expiredTimer() })).catch((function(t) { e.probeNetwork().then((function(n) { var r = Bn(n, 2),
                                o = r[0],
                                i = r[1];
                            e.setError(t, o, i).setEnd() })), ca.warn("UploadController._getAuthorizationKey failed. error:", t) })) } }, { key: "_initUploaderMethod", value: function() { var e = this;
                    this.appid && (this.cos = Rs ? new this.COSSDK({ ForcePathStyle: !0, getAuthorization: this._getAuthorization.bind(this) }) : new this.COSSDK({ getAuthorization: this._getAuthorization.bind(this) }), this._cosUploadMethod = Rs ? function(t, n) { e.cos.postObject(t, n) } : function(t, n) { e.cos.uploadFiles(t, n) }) } }, { key: "_getAuthorization", value: function(e, t) { t({ TmpSecretId: this.cosOptions.secretId, TmpSecretKey: this.cosOptions.secretKey, XCosSecurityToken: this.cosOptions.sessionToken, ExpiredTime: this.cosOptions.expiredTime }) } }, { key: "uploadImage", value: function(e) { if (!e.file) return pg(new Ip({ code: Gp, message: Yf })); var t = this._checkImageType(e.file); if (!0 !== t) return t; var n = this._checkImageMime(e.file); if (!0 !== n) return n; var r = this._checkImageSize(e.file); return !0 !== r ? r : this.upload(e) } }, { key: "_checkImageType", value: function(e) { var t = ""; return t = Rs ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), xh.indexOf(t.toLowerCase()) >= 0 || pg(new Ip({ coe: xp, message: zf })) } }, { key: "_checkImageMime", value: function(e) { return !0 } }, { key: "_checkImageSize", value: function(e) { var t = 0; return 0 === (t = Rs ? e.size : e.files[0].size) ? pg(new Ip({ code: Lp, message: "".concat(Vf) })) : t < 20971520 || pg(new Ip({ coe: Up, message: "".concat(Wf) })) } }, { key: "uploadFile", value: function(e) { var t = null; return e.file ? e.file.files[0].size > 104857600 ? (t = new Ip({ code: $p, message: rh }), pg(t)) : 0 === e.file.files[0].size ? (t = new Ip({ code: Lp, message: "".concat(Vf) }), pg(t)) : this.upload(e) : (t = new Ip({ code: Kp, message: nh }), pg(t)) } }, { key: "uploadVideo", value: function(e) { return e.file.videoFile.size > 104857600 ? pg(new Ip({ code: Bp, message: "".concat(Zf) })) : 0 === e.file.videoFile.size ? pg(new Ip({ code: Lp, message: "".concat(Vf) })) : -1 === Uh.indexOf(e.file.videoFile.type) ? pg(new Ip({ code: Hp, message: "".concat(eh) })) : Rs ? this.handleVideoUpload({ file: e.file.videoFile }) : bs ? this.handleVideoUpload(e) : void 0 } }, { key: "handleVideoUpload", value: function(e) { var t = this; return new Promise((function(n, r) { t.upload(e).then((function(e) { n(e) })).catch((function() { t.upload(e).then((function(e) { n(e) })).catch((function() { r(new Ip({ code: jp, message: Qf })) })) })) })) } }, { key: "uploadAudio", value: function(e) { return e.file ? e.file.size > 20971520 ? pg(new Ip({ code: Fp, message: "".concat(Jf) })) : 0 === e.file.size ? pg(new Ip({ code: Lp, message: "".concat(Vf) })) : this.upload(e) : pg(new Ip({ code: qp, message: Xf })) } }, { key: "upload", value: function(e) { var t = this; if (!ya(this._cosUploadMethod)) return ca.warn("UploadController.upload 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin"), pg(new Ip({ code: wp, message: qf })); var n = new Mg;
                    n.setMethod(Rg).setStart(), ca.time(Ig); var r = Rs ? e.file : e.file.files[0]; return new Promise((function(o, i) { var s = Rs ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e),
                            a = t;
                        t._cosUploadMethod(s, (function(e, s) { var u = Object.create(null); if (s) { if (e || ga(s.files) && s.files[0].error) { var c = new Ip({ code: Vp, message: th }); return n.setError(c, !0, t.getNetworkType()).setEnd(), ca.log("UploadController.upload failed, error:", s.files[0].error), 403 === s.files[0].error.statusCode && (ca.warn("UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"), t._getAuthorizationKey()), void i(c) }
                                u.fileName = r.name, u.fileSize = r.size, u.fileType = r.type.slice(r.type.indexOf("/") + 1).toLowerCase(), u.location = Rs ? s.Location : s.files[0].data.Location; var l = ca.timeEnd(Ig),
                                    p = a._formatFileSize(r.size),
                                    f = a._formatSpeed(1e3 * r.size / l),
                                    h = "size=".concat(p, ",time=").concat(l, "ms,speed=").concat(f); return ca.log("UploadController.upload success name=".concat(r.name, ",").concat(h)), o(u), void n.setCode(0).setNetworkType(t.getNetworkType()).setText(h).setEnd() } var d = new Ip({ code: Vp, message: th });
                            n.setError(d, !0, a.getNetworkType()).setEnd(), ca.warn("UploadController.upload failed, error:", e), 403 === e.statusCode && (ca.warn("UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"), t._getAuthorizationKey()), i(d) })) })) } }, { key: "_formatFileSize", value: function(e) { return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB" } }, { key: "_formatSpeed", value: function(e) { return e <= 1048576 ? (e / 1024).toFixed(1) + "KB/s" : (e / 1048576).toFixed(1) + "MB/s" } }, { key: "_createCosOptionsWeb", value: function(e) { var t = this.tim.context.identifier,
                        n = this._genFileName(t, e.to, e.file.files[0].name); return { files: [{ Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(n), Body: e.file.files[0] }], SliceSize: 1048576, onProgress: function(t) { if ("function" == typeof e.onProgress) try { e.onProgress(t.percent) } catch (n) { ca.warn("onProgress callback error:"), ca.error(n) } }, onFileFinish: function(e, t, n) {} } } }, { key: "_createCosOptionsWXMiniApp", value: function(e) { var t = this.tim.context.identifier,
                        n = this._genFileName(t, e.to, e.file.name),
                        r = e.file.url; return { Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(n), FilePath: r, onProgress: function(t) { if (ca.log(JSON.stringify(t)), "function" == typeof e.onProgress) try { e.onProgress(t.percent) } catch (n) { ca.warn("onProgress callback error:"), ca.error(n) } } } } }, { key: "_genFileName", value: function(e, t, n) { return "".concat(e, "-").concat(t, "-").concat(wa(99999), "-").concat(n) } }, { key: "reset", value: function() { this._timer && (clearInterval(this._timer), this._timer = 0) } }]), n }(og),
        j_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).FILETYPE = { SOUND: 2106, FILE: 2107, VIDEO: 2113 }, r._bdh_download_server = "grouptalk.c2c.qq.com", r._BDHBizID = 10001, r._authKey = "", r._expireTime = 0, r.tim.innerEmitter.on(rd, r._getAuthKey, qn(r)), r } return An(n, [{ key: "_getAuthKey", value: function() { var e = this;
                    this.request({ name: "bigDataHallwayAuthKey", action: "query" }).then((function(t) { t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime)) })) } }, { key: "_isFromOlderVersion", value: function(e) { return 2 !== e.content.downloadFlag } }, { key: "parseElements", value: function(e, t) { if (!ga(e) || !t) return []; for (var n = [], r = null, o = 0; o < e.length; o++) r = e[o], this._needParse(r) ? n.push(this._parseElement(r, t)) : n.push(e[o]); return n } }, { key: "_needParse", value: function(e) { return !(!this._isFromOlderVersion(e) || e.type !== pn.MSG_AUDIO && e.type !== pn.MSG_FILE && e.type !== pn.MSG_VIDEO) } }, { key: "_parseElement", value: function(e, t) { switch (e.type) {
                        case pn.MSG_AUDIO:
                            return this._parseAudioElement(e, t);
                        case pn.MSG_FILE:
                            return this._parseFileElement(e, t);
                        case pn.MSG_VIDEO:
                            return this._parseVideoElement(e, t) } } }, { key: "_parseAudioElement", value: function(e, t) { return e.content.url = this._genAudioUrl(e.content.uuid, t), e } }, { key: "_parseFileElement", value: function(e, t) { return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), e } }, { key: "_parseVideoElement", value: function(e, t) { return e.content.url = this._genVideoUrl(e.content.uuid, t), e } }, { key: "_genAudioUrl", value: function(e, t) { return "" === this._authKey ? (ca.warn("BigDataHallwayController._genAudioUrl no authKey!"), "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0") } }, { key: "_genFileUrl", value: function(e, t, n) { return "" === this._authKey ? (ca.warn("BigDataHallwayController._genFileUrl no authKey!"), "") : (n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now())), "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n))) } }, { key: "_genVideoUrl", value: function(e, t) { return "" === this._authKey ? (ca.warn("BigDataHallwayController._genVideoUrl no authKey!"), "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0") } }, { key: "reset", value: function() { this._authKey = "", this.expireTime = 0 } }]), n }(og),
        B_ = { app_id: "", event_id: "", api_base: "https://pingtas.qq.com/pingd", prefix: "_mta_", version: "1.3.9", stat_share_app: !1, stat_pull_down_fresh: !1, stat_reach_bottom: !1, stat_param: !0 };

    function H_() { try { var e = "s" + V_(); return wx.setStorageSync(B_.prefix + "ssid", e), e } catch (t) {} }

    function V_(e) { for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) { var r = Math.floor(10 * Math.random()),
                o = t[r];
            t[r] = t[n - 1], t[n - 1] = o } for (n = r = 0; 5 > n; n++) r = 10 * r + t[n]; return (e || "") + (r + "") + +new Date }

    function K_() { try { var e = getCurrentPages(),
                t = "/"; return 0 < e.length && (t = e.pop().__route__), t } catch (n) { console.log("get current page path error:" + n) } }

    function $_() { var e, t = { dm: "wechat.apps.xx", url: encodeURIComponent(K_() + W_(X_.Data.pageQuery)), pvi: "", si: "", ty: 0 }; return t.pvi = ((e = function() { try { return wx.getStorageSync(B_.prefix + "auid") } catch (t) {} }()) || (e = function() { try { var t = V_(); return wx.setStorageSync(B_.prefix + "auid", t), t } catch (e) {} }(), t.ty = 1), e), t.si = function() { var e = function() { try { return wx.getStorageSync(B_.prefix + "ssid") } catch (e) {} }(); return e || (e = H_()), e }(), t }

    function Y_() { var e = function() { var e = wx.getSystemInfoSync(); return { adt: encodeURIComponent(e.model), scl: e.pixelRatio, scr: e.windowWidth + "x" + e.windowHeight, lg: e.language, fl: e.version, jv: encodeURIComponent(e.system), tz: encodeURIComponent(e.platform) } }(); return function(e) { wx.getNetworkType({ success: function(t) { e(t.networkType) } }) }((function(e) { try { wx.setStorageSync(B_.prefix + "ntdata", e) } catch (t) {} })), e.ct = wx.getStorageSync(B_.prefix + "ntdata") || "4g", e }

    function z_() { var e, t = X_.Data.userInfo,
            n = []; for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]); return t = n.join(";"), { r2: B_.app_id, r4: "wx", ext: "v=" + B_.version + (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : "") } }

    function W_(e) { if (!B_.stat_param || !e) return "";
        e = function(e) { if (1 > B_.ignore_params.length) return e; var t, n = {}; for (t in e) 0 <= B_.ignore_params.indexOf(t) || (n[t] = e[t]); return n }(e); var t, n = []; for (t in e) n.push(t + "=" + e[t]); return 0 < n.length ? "?" + n.join("&") : "" } var X_ = { App: { init: function(e) { "appID" in e && (B_.app_id = e.appID), "eventID" in e && (B_.event_id = e.eventID), "statShareApp" in e && (B_.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (B_.stat_pull_down_fresh = e.statPullDownFresh), "statReachBottom" in e && (B_.stat_reach_bottom = e.statReachBottom), "ignoreParams" in e && (B_.ignore_params = e.ignoreParams), "statParam" in e && (B_.stat_param = e.statParam), H_(); try { "lauchOpts" in e && (X_.Data.lanchInfo = e.lauchOpts, X_.Data.lanchInfo.landing = 1) } catch (t) {} "autoReport" in e && e.autoReport && function() { var e = Page;
                        Page = function(t) { var n = t.onLoad;
                            t.onLoad = function(e) { n && n.call(this, e), X_.Data.lastPageQuery = X_.Data.pageQuery, X_.Data.pageQuery = e, X_.Data.lastPageUrl = X_.Data.pageUrl, X_.Data.pageUrl = K_(), X_.Data.show = !1, X_.Page.init() }, e(t) } }() } }, Page: { init: function() { var e, t = getCurrentPages()[getCurrentPages().length - 1];
                    t.onShow && (e = t.onShow, t.onShow = function() { if (!0 === X_.Data.show) { var t = X_.Data.lastPageQuery;
                            X_.Data.lastPageQuery = X_.Data.pageQuery, X_.Data.pageQuery = t, X_.Data.lastPageUrl = X_.Data.pageUrl, X_.Data.pageUrl = K_() }
                        X_.Data.show = !0, X_.Page.stat(), e.apply(this, arguments) }), B_.stat_pull_down_fresh && t.onPullDownRefresh && function() { var e = t.onPullDownRefresh;
                        t.onPullDownRefresh = function() { X_.Event.stat(B_.prefix + "pulldownfresh", { url: t.__route__ }), e.apply(this, arguments) } }(), B_.stat_reach_bottom && t.onReachBottom && function() { var e = t.onReachBottom;
                        t.onReachBottom = function() { X_.Event.stat(B_.prefix + "reachbottom", { url: t.__route__ }), e.apply(this, arguments) } }(), B_.stat_share_app && t.onShareAppMessage && function() { var e = t.onShareAppMessage;
                        t.onShareAppMessage = function() { return X_.Event.stat(B_.prefix + "shareapp", { url: t.__route__ }), e.apply(this, arguments) } }() }, multiStat: function(e, t) { if (1 == t) X_.Page.stat(e);
                    else { var n = getCurrentPages()[getCurrentPages().length - 1];
                        n.onShow && function() { var t = n.onShow;
                            n.onShow = function() { X_.Page.stat(e), t.call(this, arguments) } }() } }, stat: function(e) { if ("" != B_.app_id) { var t = [],
                            n = z_(); if (e && (n.r2 = e), e = [$_(), n, Y_()], X_.Data.lanchInfo) { e.push({ ht: X_.Data.lanchInfo.scene }), X_.Data.pageQuery && X_.Data.pageQuery._mta_ref_id && e.push({ rarg: X_.Data.pageQuery._mta_ref_id }); try { 1 == X_.Data.lanchInfo.landing && (n.ext += ";lp=1", X_.Data.lanchInfo.landing = 0) } catch (i) {} }
                        e.push({ rdm: "/", rurl: 0 >= X_.Data.lastPageUrl.length ? X_.Data.pageUrl + W_(X_.Data.lastPageQuery) : encodeURIComponent(X_.Data.lastPageUrl + W_(X_.Data.lastPageQuery)) }), e.push({ rand: +new Date }), n = 0; for (var r = e.length; n < r; n++)
                            for (var o in e[n]) e[n].hasOwnProperty(o) && t.push(o + "=" + (void 0 === e[n][o] ? "" : e[n][o]));
                        wx.request({ url: B_.api_base + "?" + t.join("&").toLowerCase() }) } } }, Event: { stat: function(e, t) { if ("" != B_.event_id) { var n = [],
                            r = $_(),
                            o = z_();
                        r.dm = "wxapps.click", r.url = e, o.r2 = B_.event_id; var i, s = void 0 === t ? {} : t,
                            a = []; for (i in s) s.hasOwnProperty(i) && a.push(encodeURIComponent(i) + "=" + encodeURIComponent(s[i])); for (s = a.join(";"), o.r5 = s, s = 0, o = (r = [r, o, Y_(), { rand: +new Date }]).length; s < o; s++)
                            for (var u in r[s]) r[s].hasOwnProperty(u) && n.push(u + "=" + (void 0 === r[s][u] ? "" : r[s][u]));
                        wx.request({ url: B_.api_base + "?" + n.join("&").toLowerCase() }) } } }, Data: { userInfo: null, lanchInfo: null, pageQuery: null, lastPageQuery: null, pageUrl: "", lastPageUrl: "", show: !1 } },
        J_ = X_,
        Q_ = function() {
            function e() { kn(this, e), this.cache = [], this.MtaWX = null, this._init() } return An(e, [{ key: "report", value: function(e, t) { var n = this; try { bs ? window.MtaH5 ? (window.MtaH5.clickStat(e, t), this.cache.forEach((function(e) { var t = e.name,
                                r = e.param;
                            window.MtaH5.clickStat(t, r), n.cache.shift() }))) : this.cache.push({ name: e, param: t }) : Rs && (this.MtaWX ? (this.MtaWX.Event.stat(e, t), this.cache.forEach((function(e) { var t = e.name,
                                r = e.param;
                            n.MtaWX.stat(t, r), n.cache.shift() }))) : this.cache.push({ name: e, param: t })) } catch (gC) {} } }, { key: "stat", value: function() { try { bs && window.MtaH5 ? window.MtaH5.pgv() : Rs && this.MtaWX && this.MtaWX.Page.stat() } catch (gC) {} } }, { key: "_init", value: function() { try { if (bs) { window._mtac = { autoReport: 0 }; var e = document.createElement("script"),
                                t = La();
                            e.src = "".concat(t, "//pingjs.qq.com/h5/stats.js?v2.0.4"), e.setAttribute("name", "MTAH5"), e.setAttribute("sid", "500690998"), e.setAttribute("cid", "500691017"); var n = document.getElementsByTagName("script")[0];
                            n.parentNode.insertBefore(e, n) } else Rs && (this.MtaWX = J_, this.MtaWX.App.init({ appID: "500690995", eventID: "500691014", autoReport: !1, statParam: !0 })) } catch (gC) {} } }]), e }(),
        Z_ = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r;
                kn(this, n), (r = t.call(this, e)).MTA = new Q_; var o = r.tim.innerEmitter; return o.on(Vd, r._stat, qn(r)), o.on(Hd, r._stat, qn(r)), r } return An(n, [{ key: "_stat", value: function() { this.MTA.report("sdkappid", { value: this.tim.context.SDKAppID }), this.MTA.report("version", { value: dC.VERSION }), this.MTA.stat() } }]), n }(og),
        eC = function() {
            function e(t) { kn(this, e), this._table = "timwebii", this._report = [] } return An(e, [{ key: "pushIn", value: function(e) { ca.debug("SSOLogBody.pushIn", this._report.length, e), this._report.push(e) } }, { key: "backfill", value: function(e) { var t;
                    ga(e) && 0 !== e.length && (ca.debug("SSOLogBody.backfill", this._report.length, e.length), (t = this._report).unshift.apply(t, Hn(e))) } }, { key: "getLogsNumInMemory", value: function() { return this._report.length } }, { key: "isEmpty", value: function() { return 0 === this._report.length } }, { key: "_reset", value: function() { this._report.length = 0, this._report = [] } }, { key: "getTable", value: function() { return this._table } }, { key: "getLogsInMemory", value: function() { var e = this._report.slice(); return this._reset(), e } }]), e }(),
        tC = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).TAG = "im-ssolog-event", r._reportBody = new eC, r._version = "2.6.5", r.MIN_THRESHOLD = 20, r.MAX_THRESHOLD = 100, r.WAITING_TIME = 6e4, r.INTERVAL = 2e4, r._timerID = 0, r._resetLastReportTime(), r._startReportTimer(), r._retryCount = 0, r.MAX_RETRY_COUNT = 3, r.tim.innerEmitter.on(Ld, r._onLoginSuccess, qn(r)), r } return An(n, [{ key: "reportAtOnce", value: function() { ca.debug("EventStatController.reportAtOnce"), this._report() } }, { key: "_onLoginSuccess", value: function() { var e = this,
                        t = this.tim.storage,
                        n = t.getItem(this.TAG, !1);
                    ja(n) || (ca.log("EventStatController._onLoginSuccess get ssolog in storage, nums=" + n.length), n.forEach((function(t) { e._reportBody.pushIn(t) })), t.removeItem(this.TAG, !1)) } }, { key: "pushIn", value: function(e) { e instanceof Mg && (e.setCommonInfo(this.tim.context.SDKAppID, this._version, this.tim.context.tinyID, this.tim.loginInfo.identifier, this.getPlatform()), this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report()) } }, { key: "_resetLastReportTime", value: function() { this._lastReportTime = Date.now() } }, { key: "_startReportTimer", value: function() { var e = this;
                    this._timerID = setInterval((function() { Date.now() < e._lastReportTime + e.WAITING_TIME || e._reportBody.isEmpty() || e._report() }), this.INTERVAL) } }, { key: "_stopReportTimer", value: function() { this._timerID > 0 && (clearInterval(this._timerID), this._timerID = 0) } }, { key: "_report", value: function() { var e = this; if (!this._reportBody.isEmpty()) { var t = this._reportBody.getLogsInMemory();
                        this.request({ name: "ssoEventStat", action: "create", param: { table: this._reportBody.getTable(), report: t } }).then((function() { e._resetLastReportTime(), e._retryCount > 0 && (ca.debug("EventStatController.report retry success"), e._retryCount = 0) })).catch((function(n) { if (ca.warn("EventStatController.report, online:".concat(e.getNetworkType(), " error:").concat(n)), e._reportBody.backfill(t), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD || e._retryCount === e.MAX_RETRY_COUNT || 0 === e._timerID) return e._retryCount = 0, void e._flushAtOnce();
                            e._retryCount += 1 })) } } }, { key: "_flushAtOnce", value: function() { var e = this.tim.storage,
                        t = e.getItem(this.TAG, !1),
                        n = this._reportBody.getLogsInMemory(); if (ja(t)) ca.log("EventStatController._flushAtOnce nums=" + n.length), e.setItem(this.TAG, n, !0, !1);
                    else { var r = n.concat(t);
                        r.length > this.MAX_THRESHOLD && (r = r.slice(0, this.MAX_THRESHOLD)), ca.log("EventStatController._flushAtOnce nums=" + r.length), e.setItem(this.TAG, r, !0, !1) } } }, { key: "reset", value: function() { ca.log("EventStatController.reset"), this._stopReportTimer(), this._report() } }]), n }(og),
        nC = "none",
        rC = "online",
        oC = function() {
            function e() { kn(this, e), this._networkType = "", this.maxWaitTime = 3e3 } return An(e, [{ key: "start", value: function() { var e = this;
                    Rs ? (wx.getNetworkType({ success: function(t) { e._networkType = t.networkType, t.networkType === nC ? ca.warn("NetMonitor no network, please check!") : ca.info("NetMonitor networkType:".concat(t.networkType)) } }), wx.onNetworkStatusChange(this._onWxNetworkStatusChange.bind(this))) : this._networkType = rC } }, { key: "_onWxNetworkStatusChange", value: function(e) { this._networkType = e.networkType, e.isConnected ? ca.info("NetMonitor networkType:".concat(e.networkType)) : ca.warn("NetMonitor no network, please check!") } }, { key: "probe", value: function() { var e = this; return new Promise((function(t, n) { if (Rs) wx.getNetworkType({ success: function(n) { e._networkType = n.networkType, n.networkType === nC ? (ca.warn("NetMonitor no network, please check!"), t([!1, n.networkType])) : (ca.info("NetMonitor networkType:".concat(n.networkType)), t([!0, n.networkType])) } });
                        else if (window && window.fetch) fetch("".concat(La(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())).then((function(e) { e.ok ? t([!0, rC]) : t([!1, nC]) })).catch((function(e) { t([!1, nC]) }));
                        else { var r = new XMLHttpRequest,
                                o = setTimeout((function() { ca.warn("NetMonitor fetch timeout. Probably no network, please check!"), r.abort(), e._networkType = nC, t([!1, nC]) }), e.maxWaitTime);
                            r.onreadystatechange = function() { 4 === r.readyState && (clearTimeout(o), 200 === r.status || 304 === r.status ? (this._networkType = rC, t([!0, rC])) : (ca.warn("NetMonitor fetch status:".concat(r.status, ". Probably no network, please check!")), this._networkType = nC, t([!1, nC]))) }, r.open("GET", "".concat(La(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())), r.send() } })) } }, { key: "getNetworkType", value: function() { return this._networkType } }, { key: "reset", value: function() { this._networkType = "" } }]), e }(),
        iC = function() {
            function e(t) { var n = this;
                kn(this, e), ga(t) ? (this._map = new Map, t.forEach((function(e) { n._map.set(e, []) }))) : ca.warn("AverageCalculator.constructor need keys") } return An(e, [{ key: "push", value: function(e, t) { return !(ma(e) || !this._map.has(e) || !pa(t)) && (this._map.get(e).push(t), !0) } }, { key: "getSize", value: function(e) { return ma(e) || !this._map.has(e) ? -1 : this._map.get(e).length } }, { key: "getAvg", value: function(e) { if (ma(e) || !this._map.has(e)) return -1; var t = this._map.get(e),
                        n = t.length; if (0 === n) return 0; var r = 0; return t.forEach((function(e) { r += e })), t.length = 0, this._map.set(e, []), parseInt(r / n) } }, { key: "getMax", value: function(e) { return ma(e) || !this._map.has(e) ? -1 : Math.max.apply(null, this._map.get(e)) } }, { key: "getMin", value: function(e) { return ma(e) || !this._map.has(e) ? -1 : Math.min.apply(null, this._map.get(e)) } }, { key: "reset", value: function() { this._map.forEach((function(e) { e.length = 0 })) } }]), e }(),
        sC = function() {
            function e(t) { var n = this;
                kn(this, e), ga(t) ? (this._map = new Map, t.forEach((function(e) { n._map.set(e, { totalCount: 0, successCount: 0 }) }))) : ca.warn("SuccessRateCalculator.constructor need keys") } return An(e, [{ key: "addTotalCount", value: function(e) { return !(ma(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !0) } }, { key: "addSuccessCount", value: function(e) { return !(ma(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1, !0) } }, { key: "getSuccessRate", value: function(e) { if (ma(e) || !this._map.has(e)) return -1; var t = this._map.get(e); if (0 === t.totalCount) return 1; var n = parseFloat((t.successCount / t.totalCount).toFixed(2)); return t.totalCount = t.successCount = 0, n } }, { key: "getTotalCount", value: function(e) { return ma(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount } }, { key: "reset", value: function() { this._map.forEach((function(e) { e.totalCount = 0, e.successCount = 0 })) } }]), e }(),
        aC = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e)).TABLE = "timwebsum", r.TAG = "im-ssolog-sumstat", r._items = [dg, gg, mg, vg, yg], r._thresholdMap = new Map, r._thresholdMap.set(dg, 100), r._thresholdMap.set(gg, 150), r._thresholdMap.set(mg, 15), r._thresholdMap.set(vg, 50), r._thresholdMap.set(yg, 50), r._lpID = "", r._platform = r.getPlatform(), r._lastReportTime = 0, r._statInfoArr = [], r._retryCount = 0, r._avgCalc = new iC(r._items), r._successRateCalc = new sC(r._items), r.tim.innerEmitter.on(Ld, r._onLoginSuccess, qn(r)), r } return An(n, [{ key: "_onLoginSuccess", value: function() { var e = this,
                        t = this.tim.storage,
                        n = t.getItem(this.TAG, !1);
                    ja(n) || (ca.log("SumStatController._onLoginSuccess get sumstatlog in storage, nums=" + n.length), n.forEach((function(t) { e._statInfoArr.pushIn(t) })), t.removeItem(this.TAG, !1)) } }, { key: "recordLongPollingID", value: function(e) { this._lpID = e } }, { key: "addTotalCount", value: function(e) { this._successRateCalc.addTotalCount(e) ? 1 === this._successRateCalc.getTotalCount(e) && (this._lastReportTime = Date.now()) : ca.warn("SumStatController.addTotalCount invalid key:", e) } }, { key: "addSuccessCount", value: function(e) { this._successRateCalc.addSuccessCount(e) || ca.warn("SumStatController.addSuccessCount invalid key:", e) } }, { key: "addCost", value: function(e, t) { this._avgCalc.push(e, t) ? (ca.debug("SumStatController.addCost", e, t, this._avgCalc.getSize(e)), this._avgCalc.getSize(e) >= this._thresholdMap.get(e) && this._report(e)) : ca.warn("SumStatController.addCost invalid key or cost:", e, t) } }, { key: "_getItemNum", value: function(e) { switch (e) {
                        case dg:
                            return 1;
                        case gg:
                            return 2;
                        case mg:
                            return 3;
                        case vg:
                            return 4;
                        case yg:
                            return 5;
                        default:
                            return 100 } } }, { key: "_getStatInfo", value: function(e) { var t = null; return this._avgCalc.getSize(e) > 0 && (t = { SDKAppID: "".concat(this.tim.context.SDKAppID), version: "".concat("2.6.5"), tinyID: this.tim.context.tinyID, userID: this.tim.loginInfo.identifier, item: this._getItemNum(e), lpID: e === dg ? this._lpID : "", platform: this._platform, networkType: this.getNetworkType(), total: this._successRateCalc.getTotalCount(e), successRate: this._successRateCalc.getSuccessRate(e), avg: this._avgCalc.getAvg(e), timespan: Date.now() - this._lastReportTime, time: Da() }), t } }, { key: "_report", value: function(e) { var t = this,
                        n = [],
                        r = null;
                    ma(e) ? this._items.forEach((function(e) { null !== (r = t._getStatInfo(e)) && n.push(r) })) : null !== (r = this._getStatInfo(e)) && n.push(r), ca.debug("SumStatController._report", n), this._statInfoArr.length > 0 && (n = n.concat(this.statInfoArr), this._statInfoArr = []), this._doReport(n) } }, { key: "_doReport", value: function(e) { var t = this;
                    ja(e) ? ca.warn("SumStatController._doReport statInfoArr is empty, do nothing") : this.request({ name: "ssoSumStat", action: "create", param: { table: this.TABLE, report: e } }).then((function() { t._lastReportTime = Date.now(), t._retryCount > 0 && (ca.debug("SumStatController._doReport retry success"), t._retryCount = 0) })).catch((function(n) { ca.warn("SumStatController._doReport, online:".concat(t.getNetworkType(), " error:"), n, e), t._retryCount <= 1 ? setTimeout((function() { ca.info("SumStatController._doReport retry", e), t._retryCount += 1, t._doReport(e) }), 5e3) : (t._retryCount = 0, t._statInfoArr = t._statInfoArr.concat(e), t._flusgAtOnce()) })) } }, { key: "_flushAtOnce", value: function() { var e = this.tim.storage,
                        t = e.getItem(this.TAG, !1),
                        n = this._statInfoArr; if (ja(t)) ca.log("SumStatController._flushAtOnce nums=" + n.length), e.setItem(this.TAG, n, !0, !1);
                    else { var r = n.concat(t);
                        r.length > 10 && (r = r.slice(0, 10)), ca.log("SumStatController._flushAtOnce nums=" + r.length), e.setItem(this.TAG, r, !0, !1) }
                    this._statInfoArr = [] } }, { key: "reset", value: function() { ca.info("SumStatController.reset"), this._report(), this._avgCalc.reset(), this._successRateCalc.reset() } }]), n }(og),
        uC = function() {
            function e() { kn(this, e), this._funcMap = new Map } return An(e, [{ key: "defense", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if ("string" != typeof e) return null; if (0 === e.length) return null; if ("function" != typeof t) return null; if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this._funcMap.get(e).get(t);
                    this._funcMap.has(e) || this._funcMap.set(e, new Map); var r = null; return this._funcMap.get(e).has(t) ? r = this._funcMap.get(e).get(t) : (r = this._pack(e, t, n), this._funcMap.get(e).set(t, r)), r } }, { key: "defenseOnce", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; return "function" != typeof t ? null : this._pack(e, t, n) } }, { key: "find", value: function(e, t) { return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (ca.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")), null) : (ca.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")), null) } }, { key: "delete", value: function(e, t) { return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0))) } }, { key: "_pack", value: function(e, t, n) { return function() { try { t.apply(n, Array.from(arguments)) } catch (o) { var r = new Mg;
                            r.setMethod(Mm).setText("eventName=".concat(e)).setStart(), r.setCode(0).setMessage(o.message).setEnd() } } } }]), e }(),
        cC = function(e) { Ln(n, e); var t = jn(n);

            function n(e) { var r; return kn(this, n), (r = t.call(this, e))._maybeLostSequencesMap = new Map, r } return An(n, [{ key: "onMessageMaybeLost", value: function(e, t, n) { this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []); for (var r = this._maybeLostSequencesMap.get(e), o = 0; o < n; o++) r.push(t + o);
                    ca.debug("MessageLossController.onMessageMaybeLost. maybeLostSequences:".concat(r)) } }, { key: "detectMessageLoss", value: function(e, t) { var n = this._maybeLostSequencesMap.get(e); if (!ja(n) && !ja(t)) { var r = t.filter((function(e) { return -1 !== n.indexOf(e) })); if (ca.debug("MessageLossController.detectMessageLoss. matchedSequences:".concat(r)), n.length === r.length) ca.info("MessageLossController.detectMessageLoss no message loss. conversationID=".concat(e));
                        else { var o, i = n.filter((function(e) { return -1 === r.indexOf(e) })),
                                s = i.length;
                            s <= 5 ? o = e + "-" + i.join("-") : (i.sort((function(e, t) { return e - t })), o = e + " start:" + i[0] + " end:" + i[s - 1] + " count:" + s); var a = new Mg;
                            a.setMethod(gm).setStart(), a.setCode(0).setText(o).setNetworkType(this.getNetworkType()).setEnd(), ca.warn("MessageLossController.detectMessageLoss message loss detected. conversationID:".concat(e, " lostSequences:").concat(i)) }
                        n.length = 0 } } }, { key: "reset", value: function() { ca.log("MessageLossController.reset"), this._maybeLostSequencesMap.clear() } }]), n }(og),
        lC = function() {
            function e(t) { kn(this, e); var n = new Mg;
                n.setMethod(Sg).setStart(), rg.mixin(this), this._initOptions(t), this._initMemberVariables(), this._initControllers(), this._initListener(), Mg.bindController(this.eventStatController), n.setCode(0).setText("mp=".concat(Rs, "-ua=").concat(Os)).setEnd(), ca.info("SDK inWxMiniApp:".concat(Rs, ", SDKAppID:").concat(t.SDKAppID, ", UserAgent:").concat(Os)), this._safetyCallbackFactory = new uC } return An(e, [{ key: "login", value: function(e) { return ca.time(fg), this._ssoLog = new Mg, this._ssoLog.setMethod(Tg).setStart(), this.netMonitor.start(), this.loginInfo.identifier = e.identifier || e.userID, this.loginInfo.userSig = e.userSig, this.signController.login(this.loginInfo) } }, { key: "logout", value: function() { var e = this.signController.logout(); return this.resetSDK(), e } }, { key: "on", value: function(e, t, n) { e === ln.GROUP_SYSTEM_NOTICE_RECEIVED && ca.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupSystemNoticePayload"), ca.debug("on", "eventName:".concat(e)), this.outerEmitter.on(e, this._safetyCallbackFactory.defense(e, t, n), n) } }, { key: "once", value: function(e, t, n) { ca.debug("once", "eventName:".concat(e)), this.outerEmitter.once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this) } }, { key: "off", value: function(e, t, n, r) { ca.debug("off", "eventName:".concat(e)); var o = this._safetyCallbackFactory.find(e, t);
                    null !== o && (this.outerEmitter.off(e, o, n, r), this._safetyCallbackFactory.delete(e, t)) } }, { key: "registerPlugin", value: function(e) { var t = this;
                    this.plugins || (this.plugins = {}), Object.keys(e).forEach((function(n) { t.plugins[n] = e[n] })); var n = new Mg;
                    n.setMethod(Ag).setStart(), n.setCode(0).setText("key=".concat(Object.keys(e))).setEnd() } }, { key: "getPlugin", value: function(e) { return this.plugins[e] || void 0 } }, { key: "setLogLevel", value: function(e) { if (e <= 0) { console.log(["", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", ""].join("\n")), console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#ff0000");
                        console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html\n", "常见问题: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n")) }
                    ca.setLevel(e) } }, { key: "downloadLog", value: function() { var e = document.createElement("a"),
                        t = new Date,
                        n = new Blob(this.getLog());
                    e.download = "TIM-" + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + this.loginInfo.SDKAppID + "-" + this.context.identifier + ".txt", e.href = URL.createObjectURL(n), e.click(), URL.revokeObjectURL(n) } }, { key: "destroy", value: function() { this.logout(), this.outerEmitter.emit(ln.SDK_DESTROY, { SDKAppID: this.loginInfo.SDKAppID }) } }, { key: "createTextMessage", value: function(e) { return this.messageController.createTextMessage(e) } }, { key: "createImageMessage", value: function(e) { return this.messageController.createImageMessage(e) } }, { key: "createAudioMessage", value: function(e) { return this.messageController.createAudioMessage(e) } }, { key: "createVideoMessage", value: function(e) { return this.messageController.createVideoMessage(e) } }, { key: "createCustomMessage", value: function(e) { return this.messageController.createCustomMessage(e) } }, { key: "createFaceMessage", value: function(e) { return this.messageController.createFaceMessage(e) } }, { key: "createFileMessage", value: function(e) { return this.messageController.createFileMessage(e) } }, { key: "sendMessage", value: function(e, t) { return e instanceof Vh ? this.messageController.sendMessageInstance(e, t) : pg(new Ip({ code: Rp, message: Bf })) } }, { key: "revokeMessage", value: function(e) { return this.messageController.revokeMessage(e) } }, { key: "resendMessage", value: function(e) { return this.messageController.resendMessage(e) } }, { key: "getMessageList", value: function(e) { return this.messageController.getMessageList(e) } }, { key: "setMessageRead", value: function(e) { return this.messageController.setMessageRead(e) } }, { key: "getConversationList", value: function() { return this.conversationController.getConversationList() } }, { key: "getConversationProfile", value: function(e) { return this.conversationController.getConversationProfile(e) } }, { key: "deleteConversation", value: function(e) { return this.conversationController.deleteConversation(e) } }, { key: "getMyProfile", value: function() { return this.userController.getMyProfile() } }, { key: "getUserProfile", value: function(e) { return this.userController.getUserProfile(e) } }, { key: "updateMyProfile", value: function(e) { return this.userController.updateMyProfile(e) } }, { key: "getFriendList", value: function() { return this.userController.getFriendList() } }, { key: "deleteFriend", value: function(e) { return this.userController.deleteFriend(e) } }, { key: "getBlacklist", value: function() { return this.userController.getBlacklist() } }, { key: "addToBlacklist", value: function(e) { return this.userController.addBlacklist(e) } }, { key: "removeFromBlacklist", value: function(e) { return this.userController.deleteBlacklist(e) } }, { key: "getGroupList", value: function(e) { return this.groupController.getGroupList(e) } }, { key: "getGroupProfile", value: function(e) { return this.groupController.getGroupProfile(e) } }, { key: "createGroup", value: function(e) { return this.groupController.createGroup(e) } }, { key: "dismissGroup", value: function(e) { return this.groupController.dismissGroup(e) } }, { key: "updateGroupProfile", value: function(e) { return this.groupController.updateGroupProfile(e) } }, { key: "joinGroup", value: function(e) { return this.groupController.joinGroup(e) } }, { key: "quitGroup", value: function(e) { return this.groupController.quitGroup(e) } }, { key: "searchGroupByID", value: function(e) { return this.groupController.searchGroupByID(e) } }, { key: "changeGroupOwner", value: function(e) { return this.groupController.changeGroupOwner(e) } }, { key: "handleGroupApplication", value: function(e) { return this.groupController.handleGroupApplication(e) } }, { key: "setMessageRemindType", value: function(e) { return this.groupController.setMessageRemindType(e) } }, { key: "getGroupMemberList", value: function(e) { return this.groupController.getGroupMemberList(e) } }, { key: "getGroupMemberProfile", value: function(e) { return this.groupController.getGroupMemberProfile(e) } }, { key: "addGroupMember", value: function(e) { return this.groupController.addGroupMember(e) } }, { key: "deleteGroupMember", value: function(e) { return this.groupController.deleteGroupMember(e) } }, { key: "setGroupMemberMuteTime", value: function(e) { return this.groupController.setGroupMemberMuteTime(e) } }, { key: "setGroupMemberRole", value: function(e) { return this.groupController.setGroupMemberRole(e) } }, { key: "setGroupMemberNameCard", value: function(e) { return this.groupController.setGroupMemberNameCard(e) } }, { key: "setGroupMemberCustomField", value: function(e) { return this.groupController.setGroupMemberCustomField(e) } }, { key: "_initOptions", value: function(e) { this.plugins = {}; var t = e.SDKAppID || 0,
                        n = wa();
                    this.context = { SDKAppID: t, accountType: n }, this.loginInfo = { SDKAppID: t, accountType: n, identifier: null, userSig: null }, this.options = { runLoopNetType: e.runLoopNetType || ep, enablePointer: e.enablePointer || !1 } } }, { key: "_initMemberVariables", value: function() { this.innerEmitter = new O_, this.outerEmitter = new O_, cg(this.outerEmitter), this.packageConfig = new N_(this), this.storage = new R_(this), this.netMonitor = new oC, this.outerEmitter._emit = this.outerEmitter.emit, this.outerEmitter.emit = function(e, t) { var n = arguments[0],
                            r = [n, { name: arguments[0], data: arguments[1] }];
                        ca.debug("emit outer event:".concat(n), r[1]), this.outerEmitter._emit.apply(this.outerEmitter, r) }.bind(this), this.innerEmitter._emit = this.innerEmitter.emit, this.innerEmitter.emit = function(e, t) { var n;
                        da(arguments[1]) && arguments[1].data ? (ca.warn("inner eventData has data property, please check!"), n = [e, { name: arguments[0], data: arguments[1].data }]) : n = [e, { name: arguments[0], data: arguments[1] }], ca.debug("emit inner event:".concat(e), n[1]), this.innerEmitter._emit.apply(this.innerEmitter, n) }.bind(this) } }, { key: "_initControllers", value: function() { this.exceptionController = new Fy(this), this.connectionController = new qy(this), this.contextController = new sg(this), this.context = this.contextController.getContext(), this.signController = new Tm(this), this.messageController = new M_(this), this.conversationController = new i_(this), this.userController = new Wy(this), this.groupController = new w_(this), this.notificationController = new q_(this), this.bigDataHallwayController = new j_(this), this.statusController = new A_(this), this.uploadController = new F_(this), this.messageLossController = new cC(this), this.eventStatController = new tC(this), this.sumStatController = new aC(this), this.mtaReportController = new Z_(this), this._initReadyListener() } }, { key: "_initListener", value: function() { var e = this; if (this.innerEmitter.on(yd, this._onSlowStart, this), Rs && "function" == typeof wx.onAppShow && "function" == typeof wx.onAppHide) { var t = null;
                        wx.onAppHide((function() {
                            (t = new Mg).setMethod(Im).setStart() })), wx.onAppShow((function() { null !== t && t.setCode(0).setNetworkType(e.netMonitor.getNetworkType()).setEnd() })) } } }, { key: "_initReadyListener", value: function() { for (var e = this, t = this.readyList, n = 0, r = t.length; n < r; n++) this[t[n]].ready((function() { return e._readyHandle() })) } }, { key: "_onSlowStart", value: function() { ca.log("slow start longpolling..."), this.resetSDK(), this.login(this.loginInfo) } }, { key: "resetSDK", value: function() { var e = this;
                    this.initList.forEach((function(t) { e[t].reset && e[t].reset() })), this.netMonitor.reset(), this.storage.reset(), this.resetReady(), this._initReadyListener(), this.outerEmitter.emit(ln.SDK_NOT_READY) } }, { key: "_readyHandle", value: function() { for (var e = this.readyList, t = !0, n = 0, r = e.length; n < r; n++)
                        if (!this[e[n]].isReady()) { t = !1; break }
                    if (t) { var o = ca.timeEnd(fg);
                        ca.warn("SDK is ready. cost=".concat(o, "ms")), this.triggerReady(), this.innerEmitter.emit(Vd), this.outerEmitter.emit(ln.SDK_READY), this._ssoLog.setCode(0).setNetworkType(this.netMonitor.getNetworkType()).setText(o).setEnd() } } }]), e }();
    lC.prototype.readyList = ["conversationController"], lC.prototype.initList = ["exceptionController", "connectionController", "signController", "contextController", "messageController", "conversationController", "userController", "groupController", "notificationController", "eventStatController", "sumStatController", "messageLossController"]; var pC = { login: "login", on: "on", off: "off", ready: "ready", setLogLevel: "setLogLevel", joinGroup: "joinGroup", quitGroup: "quitGroup", registerPlugin: "registerPlugin" };

    function fC(e, t) { return !(!e.isReady() && void 0 === pC[t]) || (e.innerEmitter.emit(xd, new Ip({ code: Af, message: "".concat(t, " ").concat(Gh, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_READY") })), !1) } var hC = {},
        dC = {}; return dC.create = function(e) { if (e.SDKAppID && hC[e.SDKAppID]) return hC[e.SDKAppID];
        ca.log("TIM.create"); var t = new lC(e);
        t.on(ln.SDK_DESTROY, (function(e) { hC[e.data.SDKAppID] = null, delete hC[e.data.SDKAppID] })); var n = function(e) { var t = Object.create(null); return Object.keys(Yh).forEach((function(n) { if (e[n]) { var r = Yh[n],
                        o = new Yn;
                    t[r] = function() { var t = Array.from(arguments); return o.use((function(t, r) { if (fC(e, n)) return r() })).use((function(e, t) { if (!0 === Ba(e, $h[n], r)) return t() })).use((function(t, r) { return e[n].apply(e, t) })), o.run(t) } } })), t }(t); return hC[e.SDKAppID] = n, ca.log("TIM.create ok"), n }, dC.TYPES = pn, dC.EVENT = ln, dC.VERSION = "2.6.5", ca.log("TIM.VERSION: ".concat(dC.VERSION)), dC }));