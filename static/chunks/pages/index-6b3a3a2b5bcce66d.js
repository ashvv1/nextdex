(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),c=n(7795),i=n(4465),u=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let _=new Set;function h(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:c.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,o;let{href:c,as:_,children:v,prefetch:y,passHref:g,replace:b,shallow:j,scroll:x,locale:E,onClick:k,onMouseEnter:C,onTouchStart:M,legacyBehavior:N=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==y,w=l.default.useContext(u.RouterContext),L=l.default.useContext(s.AppRouterContext),H=null!=w?w:L,I=!w,{href:T,as:S}=l.default.useMemo(()=>{if(!w){let e=m(c);return{href:e,as:_?m(_):e}}let[t,n]=a.resolveHref(w,c,!0);return{href:t,as:_?a.resolveHref(w,_):n||t}},[w,c,_]),R=l.default.useRef(T),X=l.default.useRef(S);N&&(o=l.default.Children.only(n));let D=N?o&&"object"==typeof o&&o.ref:t,[K,F,U]=f.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(X.current!==S||R.current!==T)&&(U(),X.current=S,R.current=T),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[S,D,T,U,K]);l.default.useEffect(()=>{H&&F&&O&&h(H,T,S,{locale:E})},[S,T,F,E,O,null==w?void 0:w.locale,H]);let B={ref:A,onClick(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,n,o,r,c,i,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let _=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:c,locale:u,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(_):_()}(e,H,T,S,b,j,x,E,I,O)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),H&&(O||!I)&&h(H,T,S,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof M||M(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),H&&(O||!I)&&h(H,T,S,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||g||"a"===o.type&&!("href"in o.props)){let G=void 0!==E?E:null==w?void 0:w.locale,Q=(null==w?void 0:w.isLocaleDomain)&&d.getDomainLocale(S,G,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);B.href=Q||p.addBasePath(i.addLocale(S,G,null==w?void 0:w.defaultLocale))}return N?l.default.cloneElement(o,B):l.default.createElement("a",Object.assign({},P,B),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,u=i||!l,[s,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!u&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=c.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},c.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=c.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&c.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,u,n,t,s]);let _=o.useCallback(()=>{f(!1)},[]);return[p,s,_]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893),r=n(5536),l=n.n(r),a=n(9008),c=n.n(a);n(5675),n(1664);var i=n(1502),u=n.n(i);function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"NEXT POKEDEX"}),(0,o.jsx)("meta",{name:"description",content:"A pokedex made using Next.js"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("main",{className:u().main,children:[(0,o.jsx)("h1",{className:u().header,children:"NEXT.js POKEDEX"}),(0,o.jsx)("div",{className:u().grid,children:(0,o.jsxs)("a",{href:"./pokemon",className:u().card,target:"_current",rel:"noopener noreferrer",children:[(0,o.jsxs)("h2",{className:l().className,children:["Pokemon ",(0,o.jsx)("span",{children:"->"})]}),(0,o.jsx)("p",{className:l().className,children:"Get information on more than 1000 different pokemon!"})]})})]})]})}},5536:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},1502:function(e){e.exports={main:"Home_main__nLjiQ",header:"Home_header__GCVRv",description:"Home_description__41Owk",card:"Home_card___LpL1",code:"Home_code__suPER",grid:"Home_grid__GxQ85",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",vercelLogo:"Home_vercelLogo__dtSk9"}},1664:function(e,t,n){n(1551)}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);