/**
 * Created by Kaemmelot (Sebastian Hofmann) for christmas events at Tribal Wars 2 and other InnoGames forums in 2016.
 * Customized by Ralf Berger for the 7.th Forge Anniversary in 2019
 */
(function() {
    if ("snow" in window) {
        console.warn("Snow effect seems to be running already. You should avoid multiple includes!");
        return
    }
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime()
        }
    }

    function c(g, h, i) {
        if (g === null || typeof(g) === "undefined") {
            return
        }
        if (g.addEventListener) {
            g.addEventListener(h, i, false)
        } else {
            if (g.attachEvent) {
                g.attachEvent("on" + h, i)
            } else {
                g["on" + h] = i
            }
        }
    }

    function e(g, h, i) {
        if (g === null || typeof(g) === "undefined") {
            return
        }
        if (g.removeEventListener) {
            g.removeEventListener(h, i, false)
        } else {
            if (g.detachEvent) {
                g.detachEvent("on" + h, i)
            } else {
                g["on" + h] = null
            }
        }
    }(function() {
        var k = ["webkit", "moz"];
        for (var h = 0; h < k.length && !window.requestAnimationFrame; ++h) {
            var g = k[h];
            window.requestAnimationFrame = window[g + "RequestAnimationFrame"];
            window.cancelAnimationFrame = (window[g + "CancelAnimationFrame"] || window[g + "CancelRequestAnimationFrame"])
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var j = 0;
            window.requestAnimationFrame = function(m) {
                var l = Date.now();
                var i = Math.max(j + 16, l);
                return setTimeout(function() {
                    m(j = i)
                }, i - l)
            };
            window.cancelAnimationFrame = clearTimeout
        }
    }());

    function b() {
        return Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight)
    }

    function d() {
        return Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth)
    }
    var a;
    (function() {
        var g = {};
        var i = ["", "Webkit", "Moz", "ms", "O"];
        var h = document.createElement("div");
        a = function(k) {
            if (g[k]) {
                return g[k]
            }
            for (var j = 0, l = i.length; j < l; j++) {
                var m;
                if (j === 0) {
                    m = k
                } else {
                    m = i[j] + k.replace(/^\w/, function(n) {
                        return n.toUpperCase()
                    })
                }
                if (typeof h.style[m] === "string") {
                    g[k] = m;
                    return m
                }
            }
            return k
        }
    })();
    var f = function() {
        var M = document.createElement("canvas");
        if ("pointerEvents" in M.style) {
            M.style.pointerEvents = "none"
        } else {
            console.warn("This browser is not compatible with the snow effect. No snow for you :-(");
            return
        }
        var z = false;
        var o = typeof window.snowControlHidden === "boolean" && window.snowControlHidden;
        var E = new Image();
        var Q;
        var P;
        var i = [];
        var I = 0;
        var H = 0;
        var w = 0;
        var r = null;
        var G = 0;
        var C;
        var q;
        var m;
        var A;
        var J;
        var j;
        var k = new Date();
        var g = false;

        function t(S) {
            if (!z || !N.enabled) {
                window.snow.toggleFunction()
            }
            N = {
                enabled: true,
                multiplier: 1,
                baseSpeed: 1,
                controlOpen: true,
                controlTop: 200
            };
            window.snow = {
                count: 100,
                fps: 0,
                multiplier: 1,
                baseSpeed: 1,
                enabled: true,
                toggleFunction: window.snow.toggleFunction,
                resetFunction: window.snow.resetFunction
            };
            if (!S) {
                localStorage.setItem("kaemmelotSnow", JSON.stringify(N))
            }
            s(true)
        }
        window.snow = {
            count: 100,
            fps: 0,
            multiplier: 1,
            baseSpeed: 1,
            enabled: true,
            toggleFunction: function(S) {},
            resetFunction: function() {}
        };
        var N = null;
        try {
            N = JSON.parse(localStorage.getItem("kaemmelotSnow"))
        } catch (O) {}
        if (N === null || typeof N !== "object") {
            console.info("Invalid/Missing snow properties. Using default.");
            t()
        } else {
            if (typeof N.enabled === "boolean") {
                window.snow.enabled = N.enabled
            }
            if (typeof N.multiplier === "number") {
                window.snow.multiplier = N.multiplier
            }
            if (typeof N.baseSpeed === "number") {
                window.snow.baseSpeed = N.baseSpeed
            }
            if (typeof N.controlOpen !== "boolean") {
                N.controlOpen = true
            }
            if (typeof N.controlTop !== "number") {
                N.controlTop = 200
            }
            N = {
                enabled: window.snow.enabled,
                multiplier: window.snow.multiplier,
                baseSpeed: window.snow.baseSpeed,
                controlOpen: N.controlOpen,
                controlTop: N.controlTop
            }
        }
        if (o) {
            t(true);
            N.controlOpen = false
        }
        z = N.enabled;

	var myArray = [
  		"https://gamepedia.cursecdn.com/minecraft_br_gamepedia/e/e3/Sneeuwbal.png];

	var randomItem = myArray[Math.floor(Math.random()*myArray.length)];	
        E.src = randomItem ;




        if ("touchAction" in M.style) {
            M.style.touchAction = "none"
        }
        M.style.position = "absolute";
        M.style.display = "block";
        M.style.top = 0;
        M.style.left = 0;
        M.style.bottom = 0;
        M.style.right = 0;
        M.style.margin = 0;
        M.style.zIndex = 2147483000;
        M.style[a("transformStyle")] = "flat";
        M.style[a("userSelect")] = "none";
        document.body.appendChild(M);
        var R = M.getContext("2d");
        if ("globalCompositeOperation" in R) {
            R.globalCompositeOperation = "lighter"
        }

        function D(T) {
            var U, S, V;
            for (V = T.length; V; V--) {
                U = Math.floor(Math.random() * V);
                S = T[V - 1];
                T[V - 1] = T[U];
                T[U] = S
            }
            return T
        }
        var K = function() {
            this.radius = 1;
            this.alpha = 1;
            this.startPos = {
                x: -1,
                y: -1,
                angle: 0
            };
            this.pos = {
                x: -1,
                y: -1,
                angle: 0
            };
            this.steps = {
                x: 1,
                y: 1,
                angle: 0.5
            };
            this.movement = {
                deltaX: 1,
                deltaAngle: 0,
                movement1: 1,
                movement2: 1,
                movement3: 1,
                movement4: 1,
                offset: 0,
                deceleration: 1
            };
            this.startTime = new Date()
        };
        K.prototype.calculateCurrentPosition = function(V) {
            var T = (V.valueOf() - this.startTime.valueOf()) / this.movement.deceleration;
            var U = (T + this.movement.deltaX) / 7;
            var W = (T + this.movement.deltaAngle) / 100;
            var S = this.movement.movement1 + this.movement.movement4;
            var X = this.movement.movement4 - this.movement.movement1;
            this.pos = {
                x: Math.sin(this.movement.movement1 * U + this.movement.offset) * Math.sin(this.movement.movement2 * U + this.movement.offset / 2) * Math.sin(this.movement.movement3 * U) * this.steps.x + this.startPos.x,
                y: -this.steps.y * Math.sin(S * T + this.movement.offset) / (2 * S) + this.steps.y * Math.sin(X * T - this.movement.offset) / (2 * X) + this.movement.movement2 * this.steps.y * T * 10 + this.startPos.y,
                angle: Math.sin(this.movement.movement1 * W + this.movement.offset) * Math.sin(this.movement.movement2 * W + this.movement.offset / 2) * this.steps.angle + this.pos.angle
            }
        };
        K.prototype.restart = function(Z, X, Y, T, U, S, W, aa, V) {
            this.radius = Z;
            this.alpha = X;
            this.startPos = {
                x: U,
                y: S,
                angle: W
            };
            this.pos = {
                x: U,
                y: S,
                angle: W
            };
            this.steps = {
                x: aa,
                y: Math.round(10 * N.baseSpeed),
                angle: V
            };
            this.movement = {
                deltaX: Y,
                deltaAngle: T,
                movement1: Math.random(),
                movement2: Math.random() * 2.5 + 3,
                movement3: Math.random() * 5,
                movement4: Math.random(),
                offset: Math.random() * 500,
                deceleration: 10000 / (N.baseSpeed * N.baseSpeed)
            };
            this.startTime = new Date();
            this.calculateCurrentPosition(this.startTime);
            this.startPos = {
                x: U + this.startPos.x - this.pos.x,
                y: S + this.startPos.y - this.pos.y,
                angle: W + this.startPos.angle - this.pos.angle
            };
            this.pos = {
                x: U,
                y: S,
                angle: W
            }
        };

        function y(U, V, T) {
            if (typeof V !== "boolean") {
                var S = Math.floor(Math.random() * 5 + 5);
                T = typeof T !== "undefined" ? T : Math.floor(Math.random() * -(typeof V !== "undefined" ? V : 100) - S);
                U.restart(S, Math.min(1, Math.ceil(Math.random() * 1000) / 1000 + 0.3), Math.random() * 50, Math.random(), Math.floor(Math.random() * (P + S * 2) - S), T, Math.random() * Math.PI * 2 - Math.PI, P / 3, Math.PI * N.baseSpeed / 200)
            } else {
                U.restart(U.radius, U.alpha, U.movement.deltaX, U.movement.deltaAngle, U.pos.x, U.pos.y, U.pos.angle, P / 3, Math.PI * N.baseSpeed / 200)
            }
        }

        function v(S) {
            R.translate(S.pos.x - I, S.pos.y - H);
            I = S.pos.x;
            H = S.pos.y;
            R.rotate(S.pos.angle);
            R.globalAlpha = S.alpha;
            R.drawImage(E, 0, 0, E.width, E.height, -S.radius, -S.radius, S.radius * 2, S.radius * 2);
            R.rotate(-S.pos.angle)
        }

        function l() {
            if (!N.enabled) {
                z = false;
                C.innerHTML = window.snow.fps = 0;
                C.style.color = "black";
                R.clearRect(0, 0, P, Q);
                i = [];
                w = 0;
                r = null;
                return
            }
            if (!z) {
                window.snow.enabled = z = true
            }
            var T = new Date();
            if (r === null) {
                r = T
            }
            var V, Y;
            var X = window.snow.baseSpeed !== N.baseSpeed;
            var Z = [];
            var S;
            var aa = G >= i.length;
            var W;
            if (X) {
                window.snow.baseSpeed = N.baseSpeed;
                R.clearRect(0, 0, P, Q)
            }
            if (!g && (T.valueOf() - k.valueOf() > 5000)) {
                g = true;
                if (b() !== Q || d() !== P) {
                    s(true)
                }
            }
            if (!aa) {
                W = D((Array.apply(null, {
                    length: i.length
                })).map(Number.call, Number)).slice(0, i.length - G)
            }
            for (V = 0; V < i.length; V++) {
                S = i[V];
                if (!aa && W.indexOf(V) >= 0) {
                    continue
                }
                S.calculateCurrentPosition(T);
                if (S.pos.y - S.radius >= Q) {
                    if (T.valueOf() - r.valueOf() > 500) {
                        y(S, 0, S.pos.y % (Q + 100))
                    } else {
                        y(S)
                    }
                } else {
                    if (X) {
                        y(S, true)
                    }
                }
                Z.push(S)
            }
            i = Z;
            Y = i.length;
            while (G > Y) {
                Y++;
                S = new K();
                y(S, -Q - 100);
                i.push(S)
            }
            R.save();
            R.clearRect(0, 0, P, Q);
            for (V = 0; V < i.length; V++) {
                v(i[V])
            }
            R.restore();
            I = 0;
            H = 0;
            w++;
            T = new Date();
            if (T.valueOf() - r.valueOf() > 200) {
                var U = window.snow.fps;
                window.snow.fps = Math.round(w / ((T.valueOf() - r.valueOf()) / 1000));
                if (N.controlOpen && U !== window.snow.fps) {
                    C.innerHTML = window.snow.fps;
                    if (window.snow.fps >= 45 && (U < 45 || U === 0)) {
                        C.style.color = "green"
                    } else {
                        if (window.snow.fps >= 30 && window.snow.fps < 45 && (U >= 45 || U < 30 || U === 0)) {
                            C.style.color = "darkorange"
                        } else {
                            if (window.snow.fps < 30 && (U >= 30 || U === 0)) {
                                C.style.color = "red"
                            }
                        }
                    }
                }
                w = 0;
                r = T
            }
            window.requestAnimationFrame(l)
        }

        function u() {
            window.snow.count = G = Math.round(Q * P * N.multiplier / 7500)
        }

        function s(S) {
            M.height = 1;
            M.width = 1;
            Q = b();
            P = d();
            M.height = Q;
            M.width = P;
            if (S === true) {
                u()
            }
        }

        function F() {
            N.controlOpen = !N.controlOpen;
            localStorage.setItem("kaemmelotSnow", JSON.stringify(N));
            J.style.right = (N.controlOpen ? 132 : -18) + "px";
            j.style.right = (N.controlOpen ? 1 : -152) + "px";
            if (!N.controlOpen) {
                C.style.color = "black";
                C.innerHTML = 0
            } else {
                window.snow.fps = 0
            }
        }
        var h = null;
        var L = N.controlTop;

        function n(S) {
            S = S || window.event;
            S.stopPropagation();
            S.preventDefault();
            if (!("touches" in S) && (S.buttons & 1) !== 1) {
                p(false, S)
            } else {
                L = N.controlTop + ("touches" in S ? S.touches[0] : S).screenY - h;
                J.style.top = L + 20 + "px";
                j.style.top = L + "px"
            }
        }

        function p(U, S) {
            S = S || window.event;
            S.stopPropagation();
            S.preventDefault();
            if (U && h === null) {
                h = ("touches" in S ? S.touches[0] : S).screenY;
                c(document, "mousemove", n);
                c(document, "touchmove", n)
            } else {
                if (!U && h !== null) {
                    e(document, "mousemove", n);
                    e(document, "touchmove", n);
                    var T = ("touches" in S ? S.touches[0] : S);
                    if ((typeof T === "object") && ("screenY" in T)) {
                        N.controlTop += T.screenY - h
                    } else {
                        N.controlTop = L
                    }
                    J.style.top = N.controlTop + 20 + "px";
                    j.style.top = N.controlTop + "px";
                    h = null;
                    localStorage.setItem("kaemmelotSnow", JSON.stringify(N))
                }
            }
        }
        c(window, "resize", s);
        var x = function() {
            s(true);
            window.snow.toggleFunction = function(S) {
                window.snow.enabled = N.enabled = !S && !N.enabled;
                localStorage.setItem("kaemmelotSnow", JSON.stringify(N));
                if (!z && N.enabled) {
                    window.requestAnimationFrame(l)
                }
                q.style[a("box-shadow")] = N.enabled ? "0 0 5px 5px rgba(0,175,0,0.5)" : "0 0 5px 5px rgba(225,0,0,0.5)";
                q.style.backgroundColor = N.enabled ? "rgb(85,111,17)" : "transparent"
            };
            window.snow.resetFunction = function() {
                t();
                i = [];
                m.value = Math.round(N.baseSpeed * 100);
                A.value = Math.round(N.multiplier * 10);
                J.style.top = N.controlTop + 20 + "px";
                j.style.top = N.controlTop + "px";
                h = null
            };
            z &= E.naturalWidth !== 0;
            if (z) {
                window.requestAnimationFrame(l)
            } else {
                if (E.naturalWidth === 0) {
                    console.error("Could not load snowflake :-(")
                }
            }
        };
        if (E.complete) {
            x()
        } else {
            c(E, "load", x)
        }
        if (o) {
            return
        }
        var B;
        J = document.createElement("div");
        J.id = "snowControlDent";
        J.style.width = "42px";
        J.style.height = "52px";
        J.style.position = "fixed";
        J.style.top = N.controlTop + 20 + "px";
        J.style.right = (N.controlOpen ? 132 : -18) + "px";
        J.style[a("box-sizing")] = "border-box";
        J.style.zIndex = 2147483001;
        J.style.background = "#a23227";
        J.style[a("borderRadius")] = "10px";
        J.style[a("box-shadow")] = "inset 1px 1px 0 rgba(255,255,255,0.25),inset 0 0 6px #a23227,inset 0 10px 26px -13px #ac3223,1px 1px 3px rgba(0,0,0,0.75)";
        J.style.overflow = "visible";
        B = document.createElement("div");
        B.style.display = "block";
        B.style.position = "absolute";
        B.style.top = "5px";
        B.style.left = "2px";
        B.style.width = "20px";
        B.style.height = "20px";
        B.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAb1BMVEUAAAASCgcKBgEPCwcJBwMLBwQJBQMIBAILBwQJBgMIBQIJBgMJBgMJBgMIBgQLCAUlGxJZPh2AVSOIaDWYbSefdzaqgj+3iCjBlEPLkR/MoVbSoDPZs2HbrUPk0afnvk/sx2Pv37Py1Xj311f///8RBTBRAAAAEnRSTlMAAwgPFh8nMTtIVWJvfZyvsLKBdkHhAAAA20lEQVR42rXR3XKDIBAFYH60RC2JNGm0iLCY93/HLstOmEynlzk3nPGbBQfEWyKlfK4vUdooSeugS2nQTW7UWPTopp6oQbIdts5m9/mB1OBI1vR9b2wEJgZ4eFuT98NZJIaUYA8x5pxjxE5UAUoShouzRglNEwcGPwGXDafECSEdTUpoSpzmJSQgoN0IwjIPuNv843n7nQ9CmLryB/OyBwjr/b5iPLYCSlTaQrA1ARaGSrfN8x3AersQMF2+V743f63Q6MryVaHReB5UKcN5JPjzclIZrf5/7XfkF905GQbaFoOuAAAAAElFTkSuQmCC) center center no-repeat";
        B.style.backgroundSize = "cover";
        B.style.cursor = "pointer";
        c(B, "click", F);
        J.appendChild(B);
        B = B.cloneNode(true);
        B.style.top = "26px";
        B.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAARVBMVEUAAAAJBQNZPh3UsFQ/LBZgMhUvHw9FNB0gGREkHxNELBVNMRmYbSefdzaqgj+xjVC3iCjnvk/sx2Py1Xj311f75XL///+dvcVOAAAACXRSTlMAJ7Kzyt/i5uqUbM3LAAAAVUlEQVQoz92NoQ6AMBQDr2+TwP9/5wiGMIp4ZppMEGra5sTBP6OswlYQ3Bi3PqIV5TaYfURVRHX+09cMF4Vb6VIbURARyAT0PsG1QKULA+bwe9f38wBFDicKFP+VvQAAAABJRU5ErkJggg==) center center no-repeat";
        B.style.backgroundSize = "cover";
        B.style.cursor = "row-resize";
        c(B, "mousedown", p.bind(B, true));
        c(B, "touchstart", p.bind(B, true));
        c(B, "mouseup", p.bind(B, false));
        c(B, "touchend", p.bind(B, false));
        c(B, "touchcancel", p.bind(B, false));
        J.appendChild(B);
        j = document.createElement("div");
        j.id = "snowControl";
        j.style.width = "150px";
        j.style.height = "170px";
        j.style.position = "fixed";
        j.style.top = N.controlTop + "px";
        j.style.right = (N.controlOpen ? 1 : -152) + "px";
        j.style[a("box-sizing")] = "border-box";
        j.style.zIndex = 2147483002;
        j.style.background = "#5e0d0c";
        j.style[a("borderRadius")] = "15px";
        j.style[a("box-shadow")] = "inset 1px 1px 0 rgba(255,255,255,0.25),inset 0 0 6px #a23227,inset 0 125px 100px -50px #ac3223,1px 1px 3px rgba(0,0,0,0.75)";
        j.style.font = "monospace 14px";
        j.style.overflow = "visible";
        m = document.createElement("input");
        m.title = "Speed";
        m.type = "range";
        m.min = 75;
        m.max = 270;
        m.step = 15;
        m.value = Math.round(N.baseSpeed * 100);
        m.style.display = "block";
        m.style.position = "absolute";
        m.style.left = "36px";
        m.style.top = "55px";
        m.style.width = "100px";
        m.style.height = "21px";
        m.style.margin = "0";
        m.style[a("box-sizing")] = "border-box";
        c(m, "change", function() {
            N.baseSpeed = this.value / 100;
            localStorage.setItem("kaemmelotSnow", JSON.stringify(N))
        });
        j.appendChild(m);
        A = m.cloneNode(true);
        A.title = "Density";
        A.min = 2;
        A.max = 352;
        A.step = 10;
        A.value = Math.round(N.multiplier * 10);
        A.style.top = "83px";
        c(A, "change", function() {
            window.snow.multiplier = N.multiplier = this.value / 10;
            u();
            localStorage.setItem("kaemmelotSnow", JSON.stringify(N))
        });
        j.appendChild(A);
        q = document.createElement("div");
        q.title = "On/Off";
        q.style.display = "block";
        q.style.width = "26px";
        q.style.height = "26px";
        q.style.position = "absolute";
        q.style.left = "40px";
        q.style.top = "17px";
        q.style[a("borderRadius")] = "5px";
        q.style[a("box-sizing")] = "border-box";
        q.style[a("box-shadow")] = N.enabled ? "0 0 5px 5px rgba(0,175,0,0.5)" : "0 0 5px 5px rgba(225,0,0,0.5)";
        q.style.border = "1px rgba(0,0,0,0.5) solid";
        q.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAtFBMVEUAAAASCgcKBgEPCwcJBwMLBwQJBQMIBAILBwQJBgMIBQIJBgMJBgMJBgMGBAMnHRIIBgQLCAUlGxI/LBYjGRB3aT+ofDmVhGJgMhVuUiuLYDZFNB2ll2pNMRllPhhrUihzRCJ4UBF9XDSAVSOIaDWRYBmYbSefdzagh1Wqgj+3iCi4pXrBlEPMoVbNvXLSoDPUu4vbrUPhyobmwnHnvk/sx2Py1Xjy3JP311f75XL88Jb///8zsRImAAAAHXRSTlMAAwgPFh8nMTtIVWJvfYyYnK+wyszNz9jf4OPm/r5HjmAAAAEqSURBVCjPrZJLT8MwEIRnH27SphRxBQkkOPD/fxN3XklK4nh3OSQNLVfwydYnjXdnBvjnQ2dXZrjH+pYVEKckhKBfiFhFdV8XMF8ikpSS6DP1tCHGLKoL0V39CUykjbcEixWpPtn7LFPX0YUHAAZAIvfeERAKeLppRGhFuu/5WKKzKB9ld1ChZQzRJuWxN5RxMC/X3Jn7/BfzXYcvK9HCDLnw1ciLIKgOFLcp58m8TJpoHR4BBcINIEAWPxgAIjN0toFZk01xQu4vCRtRIRIV2eTWfRF0H1M+TGAHS/WIY3E/eUg0HHzLYK12D/raDsVPefEm3YoESFF5+9ZP2c9C6b2ilALDZ9+V4j8pk6jotoGb9ZMVi7MCEIkIAxFmFnHZDSKeF4n4U9m+ARR2jrhkkaYsAAAAAElFTkSuQmCC) center center no-repeat";
        q.style.backgroundSize = "cover";
        q.style.backgroundColor = N.enabled ? "rgb(85,111,17)" : "transparent";
        q.style.cursor = "pointer";
        c(q, "click", function() {
            window.snow.toggleFunction()
        });
        j.appendChild(q);
        B = q.cloneNode(true);
        B.title = "Reset";
        B.style.left = "84px";
        B.style.background = "url(data:image/png;base64,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) center center no-repeat";
        B.style.backgroundSize = "cover";
        B.style.backgroundColor = "transparent";
        B.style[a("box-shadow")] = "0 0 1px 2px rgba(0,0,0,0.2)";
        c(B, "click", function() {
            window.snow.resetFunction()
        });
        j.appendChild(B);
        B = document.createElement("label");
        B.title = "Speed";
        B.style.display = "block";
        B.style.position = "absolute";
        B.style.width = "26px";
        B.style.height = "26px";
        B.style.left = "7px";
        B.style.top = "52px";
        B.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAzFBMVEUAAAASCgcJBwMLBwQJBQMIBAIIBQIJBgMJBgMGBAMIBgRZPh0/LBYjGRB3aT9VSDAvHw+LYDZFNB2ll2rIeD85JRFELBVHNSJNMRlUOR5aMRZdPiNiUDplPhhmRSlzRCJ2TzF9XDR9ZkWHXEeIaDWPblKQbUGThW2aekegdFugh1WomYGrcUivhmqxjVC0fle0t1u4m2C4pXq+k3jJom3KqIPMoVbNvXLOxKbUu4vXzrPZs2Hhxpnhyobk0afv37Pw58v8+Nn9873///+1XXgvAAAAFXRSTlMAAxYfJzFVYm+MnLLKzM3a4uPm/v7r0dctAAABTklEQVR42rWSbVuCMBiFIxJxoZYGMVcTX1i6YrgJ6mqB4///qDBYrx+7Ol/v65xnO89z9m+ybAfU6jm29YOcu2BAcynWQ+Da38gFGEiZkPlsHpMh6FhfCZMJ2+x2u4zHMww6n2kgFav962EscpFl/A4Ck2m5gz3ZcF0+POZ5kTEBPbeNtMEN3Zda66oqi0KueBIYmzNIGdf6+I7YRJAc9rsN6tFVVpsSeqxKhuZK8vgKNAiwxUul9fNkUaUY5UqxJDAojZbjg64EJPdYqK0ga9+gJ7wUoh4kEBVKCUEWxtW7nmSqrFWok0rJ0ahFziWiWf1s1ZCCJtBzzL+mkMrGU5RHxfFHHZY7DKdMFrVOhEX41IbpEPuI0TzeriVP8LQxmeZv/eCeLElEEMSoab6N7IC+7wdhGKIIee2+jGwXeKMwhCPPbPnXbYBufRt/0RsCqDU+uJdluwAAAABJRU5ErkJggg==) center center no-repeat";
        j.appendChild(B);
        B = B.cloneNode(true);
        B.title = "Density";
        B.style.left = "7px";
        B.style.top = "81px";
        B.style.background = "url(data:image/png;base64,ASDF00) center center no-repeat";
        j.appendChild(B);
        B = document.createElement("label");
        B.title = "Frames per second (FPS)";
        B.style.display = "block";
        B.style.position = "absolute";
        B.style.left = "53px";
        B.style.top = "118px";
        B.style.width = "45px";
        B.style.height = "36px";
        B.style.zIndex = "0";
        B.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAkCAYAAAAdFbNSAAAIpElEQVR4Ae2Y6W9cVxnGoU5iO6kUWqRKFUKtQBWLUtLSgoAICh9KIlARVEqgLV9IoBJLA3xBtChCiEKpnLGT2I7Hy0yc8eJxvMSesevxePZ9Xzz2OPHECYSQD5Ha/gfn5X2u8qI7d+7ESRQhPmDp0Zm5M/f4d57znPecuR/5/999/D26u7UF2r3ro22ivXta90LtrS2PQXiN6/jeff0D3Cwd7mnd8QTUvrPlM0a17Xjo2e3E9x4Qte9qOSRq2/nQYYhfH4VwDd/H/7xnaMAC6Hbn6OzXrBNG7drRclLUtmvH0J301CcenRPtf+YLJejwoWc2v3Xo4A20r752ZLP37aOX8L8Afs/O4ibAvv6rn4dsnW8S5Oz/k7SaZh0W8s9bKL4yRIXYOG0U3CK6XgtC2usb5Qm0DcI9IvQhAjjM2hYawJh+cRbOffrxj+XMOgeoZ+wtU2EwY32/UEZ1/+UN0qvjD8dE2nv5HvqA64iMKaS4anT29797Q/3mpz9Ah4A0hQO4mfSOGd/rBw/3MRNoIRkwWsQG0KauYlHgQ3G2vXWnHx1sp38k+u9aaysdpjIOVmYILaAb4gFncfGFL3/uXeQHzoq7MvXNprXnr8e1dvidw3T+b0e0FpLvy3uZelHX8ZfR1n1fP3PSP67vadt5sQEaLmOFYsqMLmLKPrzmJtEH/0rR+/9M0Qc30qwUbVWW6NZWiG5dDdLNy166dS1M799Iap99eDMj94mkX+N6wADqwGVwAo0U1EEjv4iDfpFhKtHqVWRVc7Oa1jNTtJ4YoVp+hipRB1XiDiqG7XQ566TNzARdyfOAVy/Q9dIE3zcmoKYCPGIASIH+429fIVmUKI+ArittuIAPjB0L+N+5LcdGqZawUy48TNnQeW7tai0+QsWQnVKeXsqs9FF2xUql4BDlfP0q7e2lrL+PB2KjfNBGpWULsmu6ICXDiIy4feL1FwVcg4axxkV4AAUe02d0eSsxRPnIKBUiDsoF7ZRe6WeIc5QP2FQ+MKTQ5nwDKr3cpzJeq0q9101JHkRs4QyF57uUb6aDfHNdFFnsppDbQhVvB9qGhQdYgYaOv/JNDRpCChqgEXKsUEDXOw2HR6jM078esVHOP0gFBi+Gh1Upcl5VYmPcDlOZXxdD5/jzIXbYSqllq4oudGsKu06r4PwZFVnsVXFPH4UXu1XQfYoS0+9QcO6kAnDG+ecG6KPf/5q4rUFjN67bnlHmBFpg9eDIZC1ho9WYQxWCNlWJj6nL2SmqJp2qmpxQ6yxcW42NqnJ0RGFQWb+N4fspttijIgtnVJRhc8tdKuiyUGDeooxOI7uAlkoi0KhgTaGx6yDTUvSN8LXsBK0nx1SZnd1IObEA1WZumjXDA5hWG+lJtZYYZ+hRhnaojG8ITnM8TirfrIVC/No/3ymQcFcqB1pktw76hwefI0QEwpkG0MYaffTYT35EgDYDvpa0UyUxQdXEOK3FR6macqpLDForzKorhYsadDU1yY47Ac05t6v0yqAKu8+olZmT5L94ikKLvSTQAtsMGhJoON4UGtOgB9UvxGp2hqqZSVpLjhM7Spv5WXZ4Vm0V51QtD2g4fYE/n0BEqBAa5mwPUtjVTb7ZTixEyNRlgQYw4jDw1sE6aLTYQ7CXNGwsCLyUJLRGt4txbsMOXpjjaiMzxS7Pqa2SizWvMIhq6gLHw8nQ47woHZRcHqTIQi8F5k6pgOs0S4NWeqdF+J8AFmgMALB4/9I39jVCw3bYj4Ug0Ea3Ab+anKRscJihx9RaclJd5g2mVpinrZKbX19U1fQ0rgOa8qHzXCn6VcjdQwEXsnwK0cACpNTk23XAyK8RGgYCFu+//pWnCUlAIhqgcS6GA2YL8WphgkoxziovMDjNcFRNT9GVoouulhe4nefIAHyKStExSvvsXJf7KOjq4SyflSyLTKERBUAiGmgFev8Te6+bQqOkYEdqdnQsxTkeUd79IiO0GucqkrpAlzjTgL62uqAAjIVZ5VxXOCI5djqxPEDR9/ooyu2dgCFc10PjtR4a1Q1VruHcgU700JLrImuTazTynON4FCKjqqI5PU2XsjOQgjY4HuuoIJztJN8fXbJS1GMlbCTitNmPA4GWuiyLENCICX54YPPToOXcAWjs7QLd6LQsRCdlgnzmCDngJtyGuGI4eWFOq9X4uCpxucPnYXY4xg7HvAPEi/COLst7I7QsRJzpAY2du+6whKOffgqNVUSUDXNEoqNUjo8jJorjwhrVcpxn2EyAS11wmO8dZOBB8rsky81dlgHooeGylDw5lgK67tyBw1Kzn0hQkhcWDk1ZdpoXI2tEW5QcF01cLSjpHSLkOM6w+tObyAxYoAEq0KgeB7/0KQ0a1+SwBIMbDkvo2Oi23vUY6i5Pe4KhUj4bpVkZv11xq7KBcyrF30GliHist6EHm8bCCI26LNDQV596RHP7xec/eROVAzW6DhrW4/nCdj9Okc+gu4fBz1LMY1WxJSuDs7veARVmWNRkPl/wptJHBU/HXbmsPzsLNCKx9+HdCusMwHC5rnIAGiUPvw3lwI2OzQfQSeGls7wdd5Jn+l1A8omtm9vu21v0aYosWVWzWBihsZkZoaWV34RwGMD/cVkWov5xAesERoibUGq+++0DdOzVl2QwAoLay672kHfGQt5Ziwq4T1OYD0TYqrcDFul/zMLdX778WTrx4+frzhrga/okCaPBl+Q5nDxTk8df8ogL5Qc5w+HK3vUmqgMGwDnu5/hoEWoaCyO0OI3rT368nZ58/JFbL+x7LAPjEFkw3f+DRsNgZEYwEMzIs1/cXz7ynec2f/ba9/TxagpshIYe3t1aQJ/6h41gaE55j4ORgciTT+MDSRkM4oVZQUbl6ZRZPHAd96Cv+3+s+wBmBAASMf1gZL3se/rzN5FdDEae06GP/4kH5RiQ2WCMz5/x+QOJw39jdkR3Gwl8599syeypTAih/QAAAABJRU5ErkJggg==) center center no-repeat";
        j.appendChild(B);
        C = document.createElement("div");
        C.title = "Frames per second (FPS)";
        C.innerHTML = 0;
        C.style.display = "block";
        C.style.position = "absolute";
        C.style.width = "26px";
        C.style.left = "60px";
        C.style.top = "130px";
        C.style.textAlign = "center";
        C.style.zIndex = "1";
        C.style.color = "black";
        j.appendChild(C);
        B = document.createElement("div");
        B.style.display = "block";
        B.style.position = "absolute";
        B.style.width = "152px";
        B.style.height = "27px";
        B.style.left = "-1px";
        B.style.top = "-9px";
        B.style.pointerEvents = "none";
        if ("touchAction" in B.style) {
            B.style.touchAction = "none"
        }
        B.style.background = "url(data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7) center center no-repeat";
        j.appendChild(B);
        B = B.cloneNode(true);
        B.style.width = "26px";
        B.style.height = "20px";
        B.style.left = "0";
        B.style.top = "-9px";
        B.style.background = "url(data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7) center center no-repeat";
        J.appendChild(B);
        document.body.appendChild(J);
        document.body.appendChild(j)
    };
    if (document.readyState !== "loading") {
        f()
    } else {
        c(document, "DOMContentLoaded", f)
    }
})();