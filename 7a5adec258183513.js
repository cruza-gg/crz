(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 80559, (e, t, s) => {}, 65845, (e, t, s) => {
    var i = e.i(17141);
    e.r(80559);
    var r = e.r(44440),
        n = r && "object" == typeof r && "default" in r ? r : {
            default: r
        },
        o = void 0 !== i.default && i.default.env && !0,
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        c = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    s = t.name,
                    i = void 0 === s ? "stylesheet" : s,
                    r = t.optimizeForSpeed,
                    n = void 0 === r ? o : r;
                l(a(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", l("boolean" == typeof n, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = n, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var c = "u" > typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = c ? c.getAttribute("content") : null
            }
            var t, s = e.prototype;
            return s.setOptimizeForSpeed = function(e) {
                    l("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, s.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, s.inject = function() {
                    var e = this;
                    if (l(!this._injected, "sheet already injected"), this._injected = !0, "u" > typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, s) {
                            return "number" == typeof s ? e._serverSheet.cssRules[s] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), s
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, s.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, s.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, s.insertRule = function(e, t) {
                    if (l(a(e), "`insertRule` accepts only strings"), "u" < typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var s = this.getSheet();
                        "number" != typeof t && (t = s.cssRules.length);
                        try {
                            s.insertRule(e, t)
                        } catch (t) {
                            return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var i = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, i))
                    }
                    return this._rulesCount++
                }, s.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "u" < typeof window) {
                        var s = "u" > typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !s.cssRules[e]) return e;
                        s.deleteRule(e);
                        try {
                            s.insertRule(t, e)
                        } catch (i) {
                            o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), s.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var i = this._tags[e];
                        l(i, "old rule at index `" + e + "` not found"), i.textContent = t
                    }
                    return e
                }, s.deleteRule = function(e) {
                    if ("u" < typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, s.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "u" > typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, s.cssRules = function() {
                    var e = this;
                    return "u" < typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, s) {
                        return s ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, s.makeStyleTag = function(e, t, s) {
                    t && l(a(t), "makeStyleTag accepts only strings as second parameter");
                    var i = document.createElement("style");
                    this._nonce && i.setAttribute("nonce", this._nonce), i.type = "text/css", i.setAttribute("data-" + e, ""), t && i.appendChild(document.createTextNode(t));
                    var r = document.head || document.getElementsByTagName("head")[0];
                    return s ? r.insertBefore(i, s) : r.appendChild(i), i
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var s = 0; s < t.length; s++) {
                        var i = t[s];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }(e.prototype, t), e
        }();

    function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var u = function(e) {
            for (var t = 5381, s = e.length; s;) t = 33 * t ^ e.charCodeAt(--s);
            return t >>> 0
        },
        d = {};

    function h(e, t) {
        if (!t) return "jsx-" + e;
        var s = String(t),
            i = e + s;
        return d[i] || (d[i] = "jsx-" + u(e + "-" + s)), d[i]
    }

    function f(e, t) {
        "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var s = e + t;
        return d[s] || (d[s] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[s]
    }
    var p = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    s = t.styleSheet,
                    i = void 0 === s ? null : s,
                    r = t.optimizeForSpeed,
                    n = void 0 !== r && r;
                this._sheet = i || new c({
                    name: "styled-jsx",
                    optimizeForSpeed: n
                }), this._sheet.inject(), i && "boolean" == typeof n && (this._sheet.setOptimizeForSpeed(n), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "u" > typeof window && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var s = this.getIdAndRules(e),
                    i = s.styleId,
                    r = s.rules;
                if (i in this._instancesCounts) {
                    this._instancesCounts[i] += 1;
                    return
                }
                var n = r.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[i] = n, this._instancesCounts[i] = 1
            }, t.remove = function(e) {
                var t = this,
                    s = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(s in this._instancesCounts, "styleId: `" + s + "` not found"), this._instancesCounts[s] -= 1, this._instancesCounts[s] < 1) {
                    var i = this._fromServer && this._fromServer[s];
                    i ? (i.parentNode.removeChild(i), delete this._fromServer[s]) : (this._indices[s].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[s]), delete this._instancesCounts[s]
                }
            }, t.update = function(e, t) {
                this.add(t), this.remove(e)
            }, t.flush = function() {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }, t.cssRules = function() {
                var e = this,
                    t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                        return [t, e._fromServer[t]]
                    }) : [],
                    s = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return s[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, s;
                return t = this.cssRules(), void 0 === (s = e) && (s = {}), t.map(function(e) {
                    var t = e[0],
                        i = e[1];
                    return n.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: s.nonce ? s.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    s = e.dynamic,
                    i = e.id;
                if (s) {
                    var r = h(i, s);
                    return {
                        styleId: r,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return f(r, e)
                        }) : [f(r, t)]
                    }
                }
                return {
                    styleId: h(i),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        m = r.createContext(null);

    function b() {
        return new p
    }

    function x() {
        return r.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var y = n.default.useInsertionEffect || n.default.useLayoutEffect,
        v = "u" > typeof window ? b() : void 0;

    function _(e) {
        var t = v || x();
        return t && ("u" < typeof window ? t.add(e) : y(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    _.dynamic = function(e) {
        return e.map(function(e) {
            return h(e[0], e[1])
        }).join(" ")
    }, s.StyleRegistry = function(e) {
        var t = e.registry,
            s = e.children,
            i = r.useContext(m),
            o = r.useState(function() {
                return i || t || b()
            })[0];
        return n.default.createElement(m.Provider, {
            value: o
        }, s)
    }, s.createStyleRegistry = b, s.style = _, s.useStyleRegistry = x
}, 38022, (e, t, s) => {
    t.exports = e.r(65845).style
}, 31713, e => {
    "use strict";
    var t = e.i(87433),
        s = e.i(38022),
        i = e.i(44440);

    function r() {
        let [e, r] = (0, i.useState)({
            activeBeams: 0,
            accountsSecured: 0,
            successRate: 0,
            usersOnline: 0
        });
        return (0, i.useEffect)(() => {
            document.querySelectorAll(".count-up").forEach(e => {
                var t;
                let s, i, r, n = parseFloat(e.getAttribute("data-target") || "0");
                t = e.getAttribute("data-type") || void 0, s = 0, i = n / 125, r = () => {
                    (s += i) >= n && (s = n), "percent" === t ? e.innerText = s.toFixed(1) + "%" : e.innerText = Math.floor(s).toLocaleString(), s < n && requestAnimationFrame(r)
                }, requestAnimationFrame(r)
            })
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(s.default, {
                id: "f7b4a8616bb11597",
                children: '*{box-sizing:border-box;margin:0;padding:0;font-family:Orbitron,sans-serif}html,body{color:#fff;background:url(https://cdn.discordapp.com/attachments/1477872829016965243/1478322541201457305/01cffb14ea56c91a4cee3b945f00701e.gif?ex=69a7faa7&is=69a6a927&hm=b09af19f631d8124110aed59f74744f57558db883b13f252912699a91b3119c5&) 50%/cover no-repeat fixed;overflow-x:hidden}body:before{content:"";z-index:0;background:#000000a6;width:100%;height:100%;position:fixed;top:0;left:0}.scan-line{z-index:10;pointer-events:none;background:linear-gradient(#0000,#fffc,#0000);width:100%;height:2px;animation:3s linear infinite scanMove;position:fixed;top:-5px;left:0;box-shadow:0 0 12px #fff}@keyframes scanMove{0%{top:-5px}to{top:100%}}.container{z-index:20;text-align:center;padding:60px 20px;position:relative}h1{letter-spacing:5px;text-shadow:0 0 25px #fff;font-size:60px}.subtitle{opacity:.8;margin-top:10px}.stats{grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-top:50px;display:grid}.stat-box{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#00000073;border:1px solid #fff3;border-radius:15px;padding:25px;transition:all .3s}.stat-box:hover{transform:scale(1.05);box-shadow:0 0 20px #fff}.stat-box h2{text-shadow:0 0 15px #fff;font-size:32px;font-weight:700}.stat-box p{opacity:.8;margin-top:8px;font-size:14px}.section{grid-template-columns:repeat(auto-fit,minmax(250px,1fr));justify-items:center;gap:25px;margin-top:70px;display:grid}.card{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);cursor:pointer;color:#fff;background:#00000080;border:1px solid #fff3;border-radius:15px;flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:300px;min-height:200px;padding:25px;text-decoration:none;transition:all .4s;display:flex}.card:hover{border:1px solid #ffffff80;transform:scale(1.06);box-shadow:0 0 35px #fff9,0 0 60px #fff3}.card h3{text-shadow:0 0 15px #fff;margin-bottom:10px;font-size:22px}.card p{opacity:.8;text-align:center;font-size:16px}'
            }), (0, t.jsx)("div", {
                className: "jsx-f7b4a8616bb11597 scan-line"
            }), (0, t.jsxs)("div", {
                className: "jsx-f7b4a8616bb11597 container",
                children: [(0, t.jsx)("h1", {
                    className: "jsx-f7b4a8616bb11597",
                    children: "vnyzx"
                }), (0, t.jsx)("p", {
                    className: "jsx-f7b4a8616bb11597 subtitle",
                    children: "Fast • Secure • Reliable Access"
                }), (0, t.jsxs)("div", {
                    className: "jsx-f7b4a8616bb11597 stats",
                    children: [(0, t.jsxs)("div", {
                        className: "jsx-f7b4a8616bb11597 stat-box",
                        children: [(0, t.jsx)("h2", {
                            "data-target": "18942",
                            className: "jsx-f7b4a8616bb11597 count-up",
                            children: "0"
                        }), (0, t.jsx)("p", {
                            className: "jsx-f7b4a8616bb11597",
                            children: "Active Beams"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "jsx-f7b4a8616bb11597 stat-box",
                        children: [(0, t.jsx)("h2", {
                            "data-target": "12781",
                            className: "jsx-f7b4a8616bb11597 count-up",
                            children: "0"
                        }), (0, t.jsx)("p", {
                            className: "jsx-f7b4a8616bb11597",
                            children: "Accounts Secured"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "jsx-f7b4a8616bb11597 stat-box",
                        children: [(0, t.jsx)("h2", {
                            "data-target": "99.3",
                            "data-type": "percent",
                            className: "jsx-f7b4a8616bb11597 count-up",
                            children: "0%"
                        }), (0, t.jsx)("p", {
                            className: "jsx-f7b4a8616bb11597",
                            children: "Success Rate"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "jsx-f7b4a8616bb11597 stat-box",
                        children: [(0, t.jsx)("h2", {
                            "data-target": "6512",
                            className: "jsx-f7b4a8616bb11597 count-up",
                            children: "0"
                        }), (0, t.jsx)("p", {
                            className: "jsx-f7b4a8616bb11597",
                            children: "Users Online"
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "jsx-f7b4a8616bb11597 section",
                    children: [{
                        title: "Shockify",
                        desc: "Fast and secure access",
                        link: "https://shockify.st/?code=OTE1NDE2NzE2NDU3NjU0OTAxMw=="
                    }, {
                        title: "Splunk",
                        desc: "Stable beaming solution",
                        link: "https://app.beamers.si/u/VNYZX"
                    }, {
                        title: "Injuries",
                        desc: "High-performance access",
                        link: "https://logged.tg/auth/vnyzx"
                    }, {
                        title: "Immortal",
                        desc: "Advanced access technology",
                        link: "https://immortal.rs/?code=OTE1NDE2NzE2NDU3NjU0OTAxMw=="
                    }].map((e, s) => (0, t.jsxs)("a", {
                        href: e.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-f7b4a8616bb11597 card",
                        children: [(0, t.jsx)("h3", {
                            className: "jsx-f7b4a8616bb11597",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "jsx-f7b4a8616bb11597",
                            children: e.desc
                        })]
                    }, s))
                })]
            })]
        })
    }
    e.s(["default", () => r])
}]);