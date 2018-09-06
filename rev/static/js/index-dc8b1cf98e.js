(function () {
  'use strict';

  function TouchSlide(a) {
    a = a || {};
    var b = {
      slideCell: a.slideCell || "#touchSlide",
      titCell: a.titCell || ".hd li",
      mainCell: a.mainCell || ".bd",
      effect: a.effect || "left",
      autoPlay: a.autoPlay || !1,
      delayTime: a.delayTime || 200,
      interTime: a.interTime || 2500,
      defaultIndex: a.defaultIndex || 0,
      titOnClassName: a.titOnClassName || "on",
      autoPage: a.autoPage || !1,
      prevCell: a.prevCell || ".prev",
      nextCell: a.nextCell || ".next",
      pageStateCell: a.pageStateCell || ".pageState",
      pnLoop: "undefined " == a.pnLoop ? !0 : a.pnLoop,
      startFun: a.startFun || null,
      endFun: a.endFun || null,
      switchLoad: a.switchLoad || null
    },
        c = document.getElementById(b.slideCell.replace("#", ""));

    if (!c) {
      return !1;
    }

    var d = function d(a, b) {
      a = a.split(" ");
      var c = [];
      b = b || document;
      var d = [b];

      for (var e in a) {
        0 != a[e].length && c.push(a[e]);
      }

      for (var e in c) {
        if (0 == d.length) {
          return !1;
        }

        var f = [];

        for (var g in d) {
          if ("#" == c[e][0]) {
            f.push(document.getElementById(c[e].replace("#", "")));
          } else if ("." == c[e][0]) {
            for (var h = d[g].getElementsByTagName("*"), i = 0; i < h.length; i++) {
              var j = h[i].className;
              j && -1 != j.search(new RegExp("\\b" + c[e].replace(".", "") + "\\b")) && f.push(h[i]);
            }
          } else {
            for (var h = d[g].getElementsByTagName(c[e]), i = 0; i < h.length; i++) {
              f.push(h[i]);
            }
          }
        }

        d = f;
      }

      return 0 == d.length || d[0] == b ? !1 : d;
    },
        e = function e(a, b) {
      var c = document.createElement("div");
      c.innerHTML = b, c = c.children[0];
      var d = a.cloneNode(!0);
      return c.appendChild(d), a.parentNode.replaceChild(c, a), m = d, c;
    },
        g = function g(a, b) {
      !a || !b || a.className && -1 != a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className += (a.className ? " " : "") + b);
    },
        h = function h(a, b) {
      !a || !b || a.className && -1 == a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className = a.className.replace(new RegExp("\\s*\\b" + b + "\\b", "g"), ""));
    },
        i = b.effect,
        j = d(b.prevCell, c)[0],
        k = d(b.nextCell, c)[0],
        l = d(b.pageStateCell)[0],
        m = d(b.mainCell, c)[0];

    if (!m) {
      return !1;
    }

    var N,
        O,
        n = m.children.length,
        o = d(b.titCell, c),
        p = o ? o.length : n,
        q = b.switchLoad,
        r = parseInt(b.defaultIndex),
        s = parseInt(b.delayTime),
        t = parseInt(b.interTime),
        u = "false" == b.autoPlay || 0 == b.autoPlay ? !1 : !0,
        v = "false" == b.autoPage || 0 == b.autoPage ? !1 : !0,
        w = "false" == b.pnLoop || 0 == b.pnLoop ? !1 : !0,
        x = r,
        y = null,
        z = null,
        A = null,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        G = /hp-tablet/gi.test(navigator.appVersion),
        H = "ontouchstart" in window && !G,
        I = H ? "touchstart" : "mousedown",
        J = H ? "touchmove" : "",
        K = H ? "touchend" : "mouseup",
        M = m.parentNode.clientWidth,
        P = n;

    if (0 == p && (p = n), v) {
      p = n, o = o[0], o.innerHTML = "";
      var Q = "";

      if (1 == b.autoPage || "true" == b.autoPage) {
        for (var R = 0; p > R; R++) {
          Q += "<li></li>";
        }
      } else {
        for (var R = 0; p > R; R++) {
          Q += b.autoPage.replace("$", R + 1);
        }
      }

      o.innerHTML = Q, o = o.children;
    }

    "leftLoop" == i && (P += 2, m.appendChild(m.children[0].cloneNode(!0)), m.insertBefore(m.children[n - 1].cloneNode(!0), m.children[0])), N = e(m, '<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'), m.style.cssText = "width:" + P * M + "px;" + "position:relative;overflow:hidden;padding:0;margin:0;";

    for (var R = 0; P > R; R++) {
      m.children[R].style.cssText = "display:table-cell;vertical-align:top;width:" + M + "px";
    }

    var S = function S() {
      "function" == typeof b.startFun && b.startFun(r, p);
    },
        T = function T() {
      "function" == typeof b.endFun && b.endFun(r, p);
    },
        U = function U(a) {
      var b = ("leftLoop" == i ? r + 1 : r) + a,
          c = function c(a) {
        for (var b = m.children[a].getElementsByTagName("img"), c = 0; c < b.length; c++) {
          b[c].getAttribute(q) && (b[c].setAttribute("src", b[c].getAttribute(q)), b[c].removeAttribute(q));
        }
      };

      if (c(b), "leftLoop" == i) {
        switch (b) {
          case 0:
            c(n);
            break;

          case 1:
            c(n + 1);
            break;

          case n:
            c(0);
            break;

          case n + 1:
            c(1);
        }
      }
    },
        V = function V() {
      M = N.clientWidth, m.style.width = P * M + "px";

      for (var a = 0; P > a; a++) {
        m.children[a].style.width = M + "px";
      }

      var b = "leftLoop" == i ? r + 1 : r;
      W(-b * M, 0);
    };

    window.addEventListener("resize", V, !1);

    var W = function W(a, b, c) {
      c = c ? c.style : m.style, c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms", c.webkitTransform = "translate(" + a + "px,0)" + "translateZ(0)", c.msTransform = c.MozTransform = c.OTransform = "translateX(" + a + "px)";
    },
        X = function X(a) {
      switch (i) {
        case "left":
          r >= p ? r = a ? r - 1 : 0 : 0 > r && (r = a ? 0 : p - 1), null != q && U(0), W(-r * M, s), x = r;
          break;

        case "leftLoop":
          null != q && U(0), W(-(r + 1) * M, s), -1 == r ? (z = setTimeout(function () {
            W(-p * M, 0);
          }, s), r = p - 1) : r == p && (z = setTimeout(function () {
            W(-M, 0);
          }, s), r = 0), x = r;
      }

      S(), A = setTimeout(function () {
        T();
      }, s);

      for (var c = 0; p > c; c++) {
        h(o[c], b.titOnClassName), c == r && g(o[c], b.titOnClassName);
      }

      0 == w && (h(k, "nextStop"), h(j, "prevStop"), 0 == r ? g(j, "prevStop") : r == p - 1 && g(k, "nextStop")), l && (l.innerHTML = "<span>" + (r + 1) + "</span>/" + p);
    };

    if (X(), u && (y = setInterval(function () {
      r++, X();
    }, t)), o) {
      for (var R = 0; p > R; R++) {
        !function () {
          var a = R;
          o[a].addEventListener("click", function () {
            clearTimeout(z), clearTimeout(A), r = a, X();
          });
        }();
      }
    }

    k && k.addEventListener("click", function () {
      (1 == w || r != p - 1) && (clearTimeout(z), clearTimeout(A), r++, X());
    }), j && j.addEventListener("click", function () {
      (1 == w || 0 != r) && (clearTimeout(z), clearTimeout(A), r--, X());
    });

    var Y = function Y(a) {
      clearTimeout(z), clearTimeout(A), O = void 0, D = 0;
      var b = H ? a.touches[0] : a;
      B = b.pageX, C = b.pageY, m.addEventListener(J, Z, !1), m.addEventListener(K, $, !1);
    },
        Z = function Z(a) {
      if (!H || !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
        var b = H ? a.touches[0] : a;

        if (D = b.pageX - B, E = b.pageY - C, "undefined" == typeof O && (O = !!(O || Math.abs(D) < Math.abs(E))), !O) {
          switch (a.preventDefault(), u && clearInterval(y), i) {
            case "left":
              (0 == r && D > 0 || r >= p - 1 && 0 > D) && (D = .4 * D), W(-r * M + D, 0);
              break;

            case "leftLoop":
              W(-(r + 1) * M + D, 0);
          }

          null != q && Math.abs(D) > M / 3 && U(D > -0 ? -1 : 1);
        }
      }
    },
        $ = function $(a) {
      0 != D && (a.preventDefault(), O || (Math.abs(D) > M / 10 && (D > 0 ? r-- : r++), X(!0), u && (y = setInterval(function () {
        r++, X();
      }, t))), m.rveEventListener(J, Z, !1), m.removeEventListener(K, $, !1));
    };

    m.addEventListener(I, Y, !1);
  }

  function lazyload() {
    function isInSight(el) {
      var bound = el.getBoundingClientRect();
      var clientHeight = window.innerHeight; //如果只考虑向下滚动加载
      //const clientWidth=window.innerWeight;

      return bound.top <= clientHeight + 500;
    }

    var index = 0;

    function checkImgs() {
      var imgs = document.querySelectorAll('.bglazy');

      for (var i = index; i < imgs.length; i++) {
        if (isInSight(imgs[i])) {
          loadImg(imgs[i]);
          index = i;
        }
      }
    }

    function loadImg(el) {
      el.classList.remove('bglazy');
    }

    function throttle(fn, mustRun) {
      if (mustRun === void 0) mustRun = 500;
      var previous = null;
      return function () {
        var now = new Date();
        var context = this;
        var args = arguments;

        if (!previous) {
          previous = now;
        }

        var remaining = now - previous;

        if (mustRun && remaining >= mustRun) {
          fn.apply(context, args);
          previous = now;
        }
      };
    }

    window.onload = checkImgs();
    window.onscroll = throttle(checkImgs);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function lazysizes() {
    (function (window, factory) {
      var lazySizes = factory(window, window.document);
      window.lazySizes = lazySizes;

      if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module.exports) {
        module.exports = lazySizes;
      }
    })(window, function l(window, document) {
      /*jshint eqnull:true */

      if (!document.getElementsByClassName) {
        return;
      }

      var lazysizes, lazySizesConfig;
      var docElem = document.documentElement;
      var Date = window.Date;
      var supportPicture = window.HTMLPictureElement;
      var _addEventListener = 'addEventListener';
      var _getAttribute = 'getAttribute';
      var addEventListener = window[_addEventListener];
      var setTimeout = window.setTimeout;
      var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
      var requestIdleCallback = window.requestIdleCallback;
      var regPicture = /^picture$/i;
      var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
      var regClassCache = {};
      var forEach = Array.prototype.forEach;

      var hasClass = function hasClass(ele, cls) {
        if (!regClassCache[cls]) {
          regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        }

        return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
      };

      var addClass = function addClass(ele, cls) {
        if (!hasClass(ele, cls)) {
          ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
        }
      };

      var removeClass = function removeClass(ele, cls) {
        var reg;

        if (reg = hasClass(ele, cls)) {
          ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
        }
      };

      var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
        var action = add ? _addEventListener : 'removeEventListener';

        if (add) {
          addRemoveLoadEvents(dom, fn);
        }

        loadEvents.forEach(function (evt) {
          dom[action](evt, fn);
        });
      };

      var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
        var event = document.createEvent('CustomEvent');

        if (!detail) {
          detail = {};
        }

        detail.instance = lazysizes;
        event.initCustomEvent(name, !noBubbles, !noCancelable, detail);
        elem.dispatchEvent(event);
        return event;
      };

      var updatePolyfill = function updatePolyfill(el, full) {
        var polyfill;

        if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
          polyfill({
            reevaluate: true,
            elements: [el]
          });
        } else if (full && full.src) {
          el.src = full.src;
        }
      };

      var getCSS = function getCSS(elem, style) {
        return (getComputedStyle(elem, null) || {})[style];
      };

      var getWidth = function getWidth(elem, parent, width) {
        width = width || elem.offsetWidth;

        while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
          width = parent.offsetWidth;
          parent = parent.parentNode;
        }

        return width;
      };

      var rAF = function () {
        var running, waiting;
        var firstFns = [];
        var secondFns = [];
        var fns = firstFns;

        var run = function run() {
          var runFns = fns;
          fns = firstFns.length ? secondFns : firstFns;
          running = true;
          waiting = false;

          while (runFns.length) {
            runFns.shift()();
          }

          running = false;
        };

        var rafBatch = function rafBatch(fn, queue) {
          if (running && !queue) {
            fn.apply(this, arguments);
          } else {
            fns.push(fn);

            if (!waiting) {
              waiting = true;
              (document.hidden ? setTimeout : requestAnimationFrame)(run);
            }
          }
        };

        rafBatch._lsFlush = run;
        return rafBatch;
      }();

      var rAFIt = function rAFIt(fn, simple) {
        return simple ? function () {
          rAF(fn);
        } : function () {
          var that = this;
          var args = arguments;
          rAF(function () {
            fn.apply(that, args);
          });
        };
      };

      var throttle = function throttle(fn) {
        var running;
        var lastTime = 0;
        var gDelay = lazySizesConfig.throttleDelay;
        var rICTimeout = lazySizesConfig.ricTimeout;

        var run = function run() {
          running = false;
          lastTime = Date.now();
          fn();
        };

        var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
          requestIdleCallback(run, {
            timeout: rICTimeout
          });

          if (rICTimeout !== lazySizesConfig.ricTimeout) {
            rICTimeout = lazySizesConfig.ricTimeout;
          }
        } : rAFIt(function () {
          setTimeout(run);
        }, true);
        return function (isPriority) {
          var delay;

          if (isPriority = isPriority === true) {
            rICTimeout = 33;
          }

          if (running) {
            return;
          }

          running = true;
          delay = gDelay - (Date.now() - lastTime);

          if (delay < 0) {
            delay = 0;
          }

          if (isPriority || delay < 9) {
            idleCallback();
          } else {
            setTimeout(idleCallback, delay);
          }
        };
      }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


      var debounce = function debounce(func) {
        var timeout, timestamp;
        var wait = 99;

        var run = function run() {
          timeout = null;
          func();
        };

        var later = function later() {
          var last = Date.now() - timestamp;

          if (last < wait) {
            setTimeout(later, wait - last);
          } else {
            (requestIdleCallback || run)(run);
          }
        };

        return function () {
          timestamp = Date.now();

          if (!timeout) {
            timeout = setTimeout(later, wait);
          }
        };
      };

      (function () {
        var prop;
        var lazySizesDefaults = {
          lazyClass: 'lazyload',
          loadedClass: 'lazyloaded',
          loadingClass: 'lazyloading',
          preloadClass: 'lazypreload',
          errorClass: 'lazyerror',
          //strictClass: 'lazystrict',
          autosizesClass: 'lazyautosizes',
          srcAttr: 'data-src',
          srcsetAttr: 'data-srcset',
          sizesAttr: 'data-sizes',
          //preloadAfterLoad: false,
          minSize: 40,
          customMedia: {},
          init: true,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: true,
          ricTimeout: 0,
          throttleDelay: 125
        };
        lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

        for (prop in lazySizesDefaults) {
          if (!(prop in lazySizesConfig)) {
            lazySizesConfig[prop] = lazySizesDefaults[prop];
          }
        }

        window.lazySizesConfig = lazySizesConfig;
        setTimeout(function () {
          if (lazySizesConfig.init) {
            init();
          }
        });
      })();

      var loader = function () {
        var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
        var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;
        var defaultExpand, preloadExpand, hFac;
        var regImg = /^img$/i;
        var regIframe = /^iframe$/i;
        var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);
        var shrinkExpand = 0;
        var currentExpand = 0;
        var isLoading = 0;
        var lowRuns = -1;

        var resetPreloading = function resetPreloading(e) {
          isLoading--;

          if (e && e.target) {
            addRemoveLoadEvents(e.target, resetPreloading);
          }

          if (!e || isLoading < 0 || !e.target) {
            isLoading = 0;
          }
        };

        var isNestedVisible = function isNestedVisible(elem, elemExpand) {
          var outerRect;
          var parent = elem;
          var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';
          eLtop -= elemExpand;
          eLbottom += elemExpand;
          eLleft -= elemExpand;
          eLright += elemExpand;

          while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
            visible = (getCSS(parent, 'opacity') || 1) > 0;

            if (visible && getCSS(parent, 'overflow') != 'visible') {
              outerRect = parent.getBoundingClientRect();
              visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
            }
          }

          return visible;
        };

        var checkElements = function checkElements() {
          var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;
          var lazyloadElems = lazysizes.elements;

          if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
            i = 0;
            lowRuns++;

            if (preloadExpand == null) {
              if (!('expand' in lazySizesConfig)) {
                lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
              }

              defaultExpand = lazySizesConfig.expand;
              preloadExpand = defaultExpand * lazySizesConfig.expFactor;
            }

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }

            for (; i < eLlen; i++) {
              if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
                continue;
              }

              if (!supportScroll) {
                unveilElement(lazyloadElems[i]);
                continue;
              }

              if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
                elemExpand = currentExpand;
              }

              if (beforeExpandVal !== elemExpand) {
                eLvW = innerWidth + elemExpand * hFac;
                elvH = innerHeight + elemExpand;
                elemNegativeExpand = elemExpand * -1;
                beforeExpandVal = elemExpand;
              }

              rect = lazyloadElems[i].getBoundingClientRect();

              if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
                unveilElement(lazyloadElems[i]);
                loadedSomething = true;

                if (isLoading > 9) {
                  break;
                }
              } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
                autoLoadElem = preloadElems[0] || lazyloadElems[i];
              }
            }

            if (autoLoadElem && !loadedSomething) {
              unveilElement(autoLoadElem);
            }
          }
        };

        var throttledCheckElements = throttle(checkElements);

        var switchLoadingClass = function switchLoadingClass(e) {
          addClass(e.target, lazySizesConfig.loadedClass);
          removeClass(e.target, lazySizesConfig.loadingClass);
          addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
          triggerEvent(e.target, 'lazyloaded');
        };

        var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

        var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
          rafedSwitchLoadingClass({
            target: e.target
          });
        };

        var changeIframeSrc = function changeIframeSrc(elem, src) {
          try {
            elem.contentWindow.location.replace(src);
          } catch (e) {
            elem.src = src;
          }
        };

        var handleSources = function handleSources(source) {
          var customMedia;

          var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

          if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
            source.setAttribute('media', customMedia);
          }

          if (sourceSrcset) {
            source.setAttribute('srcset', sourceSrcset);
          }
        };

        var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
          var src, srcset, parent, isPicture, event, firesLoad;

          if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
            if (sizes) {
              if (isAuto) {
                addClass(elem, lazySizesConfig.autosizesClass);
              } else {
                elem.setAttribute('sizes', sizes);
              }
            }

            srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
            src = elem[_getAttribute](lazySizesConfig.srcAttr);

            if (isImg) {
              parent = elem.parentNode;
              isPicture = parent && regPicture.test(parent.nodeName || '');
            }

            firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
            event = {
              target: elem
            };

            if (firesLoad) {
              addRemoveLoadEvents(elem, resetPreloading, true);
              clearTimeout(resetPreloadingTimer);
              resetPreloadingTimer = setTimeout(resetPreloading, 2500);
              addClass(elem, lazySizesConfig.loadingClass);
              addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
            }

            if (isPicture) {
              forEach.call(parent.getElementsByTagName('source'), handleSources);
            }

            if (srcset) {
              elem.setAttribute('srcset', srcset);
            } else if (src && !isPicture) {
              if (regIframe.test(elem.nodeName)) {
                changeIframeSrc(elem, src);
              } else {
                elem.src = src;
              }
            }

            if (isImg && (srcset || isPicture)) {
              updatePolyfill(elem, {
                src: src
              });
            }
          }

          if (elem._lazyRace) {
            delete elem._lazyRace;
          }

          removeClass(elem, lazySizesConfig.lazyClass);
          rAF(function () {
            if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
              if (firesLoad) {
                resetPreloading(event);
              } else {
                isLoading--;
              }

              switchLoadingClass(event);
            }
          }, true);
        });

        var unveilElement = function unveilElement(elem) {
          var detail;
          var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

          var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));

          var isAuto = sizes == 'auto';

          if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
            return;
          }

          detail = triggerEvent(elem, 'lazyunveilread').detail;

          if (isAuto) {
            autoSizer.updateElem(elem, true, elem.offsetWidth);
          }

          elem._lazyRace = true;
          isLoading++;
          lazyUnveil(elem, detail, isAuto, sizes, isImg);
        };

        var onload = function onload() {
          if (isCompleted) {
            return;
          }

          if (Date.now() - started < 999) {
            setTimeout(onload, 999);
            return;
          }

          var afterScroll = debounce(function () {
            lazySizesConfig.loadMode = 3;
            throttledCheckElements();
          });
          isCompleted = true;
          lazySizesConfig.loadMode = 3;
          throttledCheckElements();
          addEventListener('scroll', function () {
            if (lazySizesConfig.loadMode == 3) {
              lazySizesConfig.loadMode = 2;
            }

            afterScroll();
          }, true);
        };

        return {
          _: function _() {
            started = Date.now();
            lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
            preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
            hFac = lazySizesConfig.hFac;
            addEventListener('scroll', throttledCheckElements, true);
            addEventListener('resize', throttledCheckElements, true);

            if (window.MutationObserver) {
              new MutationObserver(throttledCheckElements).observe(docElem, {
                childList: true,
                subtree: true,
                attributes: true
              });
            } else {
              docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

              docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

              setInterval(throttledCheckElements, 999);
            }

            addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

            ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
              document[_addEventListener](name, throttledCheckElements, true);
            });

            if (/d$|^c/.test(document.readyState)) {
              onload();
            } else {
              addEventListener('load', onload);

              document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

              setTimeout(onload, 20000);
            }

            if (lazysizes.elements.length) {
              checkElements();

              rAF._lsFlush();
            } else {
              throttledCheckElements();
            }
          },
          checkElems: throttledCheckElements,
          unveil: unveilElement
        };
      }();

      var autoSizer = function () {
        var autosizesElems;
        var sizeElement = rAFIt(function (elem, parent, event, width) {
          var sources, i, len;
          elem._lazysizesWidth = width;
          width += 'px';
          elem.setAttribute('sizes', width);

          if (regPicture.test(parent.nodeName || '')) {
            sources = parent.getElementsByTagName('source');

            for (i = 0, len = sources.length; i < len; i++) {
              sources[i].setAttribute('sizes', width);
            }
          }

          if (!event.detail.dataAttr) {
            updatePolyfill(elem, event.detail);
          }
        });

        var getSizeElement = function getSizeElement(elem, dataAttr, width) {
          var event;
          var parent = elem.parentNode;

          if (parent) {
            width = getWidth(elem, parent, width);
            event = triggerEvent(elem, 'lazybeforesizes', {
              width: width,
              dataAttr: !!dataAttr
            });

            if (!event.defaultPrevented) {
              width = event.detail.width;

              if (width && width !== elem._lazysizesWidth) {
                sizeElement(elem, parent, event, width);
              }
            }
          }
        };

        var updateElementsSizes = function updateElementsSizes() {
          var i;
          var len = autosizesElems.length;

          if (len) {
            i = 0;

            for (; i < len; i++) {
              getSizeElement(autosizesElems[i]);
            }
          }
        };

        var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
        return {
          _: function _() {
            autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
            addEventListener('resize', debouncedUpdateElementsSizes);
          },
          checkElems: debouncedUpdateElementsSizes,
          updateElem: getSizeElement
        };
      }();

      var init = function init() {
        if (!init.i) {
          init.i = true;

          autoSizer._();

          loader._();
        }
      };

      lazysizes = {
        cfg: lazySizesConfig,
        autoSizer: autoSizer,
        loader: loader,
        init: init,
        uP: updatePolyfill,
        aC: addClass,
        rC: removeClass,
        hC: hasClass,
        fire: triggerEvent,
        gW: getWidth,
        rAF: rAF
      };
      return lazysizes;
    });
  }

  TouchSlide({
    slideCell: "#focus",
    titCell: ".hd ul",
    //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell: ".bd ul",
    effect: "left",
    autoPlay: true,
    //自动播放,
    interTime: 3000,
    //切换时间
    autoPage: true,
    //自动分页
    switchLoad: "s-src"
  });
  lazyload();
  lazysizes();

}());
