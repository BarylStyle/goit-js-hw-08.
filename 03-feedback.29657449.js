function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var i,r,a,o,f,u,l=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=r;return i=r=void 0,l=t,o=e.apply(a,n)}function h(e){return l=e,f=setTimeout(O,t),s?y(e):o}function j(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-l>=a}function O(){var e=g();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return c?d(n,a-(e-l)):n}(e))}function S(e){return f=void 0,v&&i?y(e):(i=r=void 0,o)}function w(){var e=g(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(c)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),o}return t=b(t)||0,p(n)&&(s=!!n.leading,a=(c="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},w.flush=function(){return void 0===f?o:S(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||o.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector("form.feedback-form"),h=localStorage.getItem("feedback-form-state");if(h){const e=JSON.parse(h);y.elements.email.value=e.email,y.elements.message.value=e.message}y.addEventListener("input",(e=>{const t={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}));const j=e(t)((e=>{localStorage.setItem("feedback-from-state",JSON.stringify(e))}),500);input.addEventListener("change",(e=>{const t={email:e.target.elements.email.value,message:e.target.elements.message.value};j(t)})),y.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:e.target.elements.email.value,message:e.target.elements.message.value}),localStorage.clear(),y.reset()}));
//# sourceMappingURL=03-feedback.29657449.js.map
