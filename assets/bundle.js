(()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o,r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,"symbol"===t(o=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return String(e);if("object"!==t(o=o.call(e,"string")))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(i.key))?o:String(o),i)}}function o(t,e,o){e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1})}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}function i(e){var n=f();return function(){var o,r=a(e);o=n?(o=a(this).constructor,Reflect.construct(r,arguments,o)):r.apply(this,arguments),r=this;if(!o||"object"!==t(o)&&"function"!=typeof o){if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");if(void 0===(o=r))throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return o}}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function u(t,e,n){return(u=f()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e),e=new(Function.bind.apply(t,o));return n&&l(e,n.prototype),e}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}console.log("hello webpack"),r(y,c(HTMLElement)),p=i(y),o(y,[{key:"connectedCallback",value:function(){this.innerHTML='<div class="bg-blue-200 w-max h-12 text-2xl mx-auto my-2 px-5 py-0">Web Components</div>'}}]);var p,s=y;function y(){return e(this,y),p.apply(this,arguments)}customElements.define("my-component",s);var b,d=(s=document.querySelector("#host")).attachShadow({mode:"open"}),h=document.createElement("span");h.textContent="I'm in the shadow DOM",d.appendChild(h),console.log(s.shadowRoot),r(m,c(HTMLElement)),b=i(m),o(m,[{key:"connectedCallback",value:function(){this.innerHTML="my todo list"}}]),d=m;function m(){return e(this,m),b.apply(this,arguments)}customElements.define("todo-list",d)})(),(()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){var e="function"==typeof Map?new Map:void 0;return function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return n(t,arguments,i(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r(o,t)}(t)}function n(t,e,i){return(n=o()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e),e=new(Function.bind.apply(t,o));return n&&r(e,n.prototype),e}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(){var n=a,c=e(HTMLElement);if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(c&&c.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),c&&r(n,c),u=a,f=o();var u,f,l=function(){var e,n=i(u);e=f?(e=i(this).constructor,Reflect.construct(n,arguments,e)):n.apply(this,arguments),n=this;if(!e||"object"!==t(e)&&"function"!=typeof e){if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0===(e=n))throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e};function a(){var t;if(this instanceof a)return(t=l.call(this)).interval=!1,t.textEl=t.querySelector("[data-text]"),t.setupCountdown(),t;throw new TypeError("Cannot call a class as a function")}return function(e,n){for(var o,r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,"symbol"===t(o=function(e){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return String(e);if("object"!==t(n=n.call(e,"string")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(i.key))?o:String(o),i)}}((n=a).prototype,[{key:"setupCountdown",value:function(){var t=this;this.updateCountdown(),this.textEl.classList.remove("opacity-0"),this.interval=setInterval((function(){t.updateCountdown()}),1e3)}},{key:"updateCountdown",value:function(){var t=(new Date).getTime()/1e3,e=this.dataset.time-t,n=Math.floor(e/86400),o=Math.floor((e-86400*n)/3600),r=Math.floor((e-86400*n-3600*o)/60);e=Math.floor(e-86400*n-3600*o-60*r);this.dataset<t?clearInterval(this.interval):this.textEl.textContent=n<1?"".concat(o,"h ").concat(r,"m ").concat(e,"s"):"".concat(n,"days ").concat(o,"hours ").concat(r,"mins ").concat(e,"seconds")}}]),Object.defineProperty(n,"prototype",{writable:!1}),a}();customElements.define("datetime-countdown",c)})();