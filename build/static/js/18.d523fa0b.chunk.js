(this["webpackJsonpnotsnowy.finance"]=this["webpackJsonpnotsnowy.finance"]||[]).push([[18],{1039:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(24)),i=n(1),o=a(i),l=a(n(1040)),c=a(n(1041));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,i=t.easingFn,o=t.end,l=t.formattingFn,u=t.prefix,s=t.separator,m=t.start,p=t.suffix,f=t.useEasing;return new c(e,m,o,a,r,{decimal:n,easingFn:i,formattingFn:l,separator:s,prefix:u,suffix:p,useEasing:f,useGrouping:!!s})},h=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return m(b(n=E(this,(e=f(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof n.props.children&&l(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),g(n.containerRef.current,n.props)})),m(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})})),m(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})})),m(b(n),"restart",(function(){n.reset(),n.start()})),m(b(n),"start",(function(){var e=b(n),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,o=n.props,l=o.delay,c=o.onEnd,u=o.onStart,s=function(){return n.instance.start((function(){return c({pauseResume:t,reset:a,start:r,update:i})}))};l>0?n.timeoutId=setTimeout(s,1e3*l):s(),u({pauseResume:t,reset:a,update:i})})),m(b(n),"update",(function(e){var t=b(n),a=t.pauseResume,r=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:i})})),m(b(n),"containerRef",o.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.redraw,l=t.duration,c=t.separator,u=t.decimals,s=t.decimal;return l!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||i!==e.prefix||c!==e.separator||u!==e.decimals||s!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.duration,l=t.separator,c=t.decimals,u=t.decimal,s=t.preserveValue;o===e.duration&&a===e.start&&r===e.suffix&&i===e.prefix&&l===e.separator&&c===e.decimals&&u===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(s||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,l=this.reset,c=this.restart,u=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:i,reset:l,start:c,update:u}):o.createElement("span",{className:n,ref:r,style:a})}}])&&s(n.prototype,a),r&&s(n,r),t}(i.Component);m(h,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),m(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var x={innerHTML:null};t.default=h,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h.defaultProps,{},e),n=t.start,a=t.formattingFn,r=y(i.useState("function"===typeof a?a(n):n),2),o=r[0],l=r[1],c=i.useRef(null),u=function(){var e=c.current;if(null!==e)return e;var n=function(){var e=g(x,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);l(e)},e}();return c.current=n,n},s=function(){var e=t.onReset;u().reset(),e({pauseResume:d,start:f,update:b})},f=function e(){var n=t.onStart,a=t.onEnd;u().reset(),u().start((function(){a({pauseResume:d,reset:s,start:e,update:b})})),n({pauseResume:d,reset:s,update:b})},d=function(){var e=t.onPauseResume;u().pauseResume(),e({reset:s,start:f,update:b})},b=function(e){var n=t.onUpdate;u().update(e),n({pauseResume:d,reset:s,start:f})};return i.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:d,reset:s,update:b}),u().start((function(){clearTimeout(r),a({pauseResume:d,reset:s,start:f,update:b})}))}),1e3*e);return s}),[]),{countUp:o,start:f,pauseResume:d,reset:s,update:b}}},1040:function(e,t,n){"use strict";var a=function(){};e.exports=a},1041:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,c=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3===0&&(r=l.options.separator+r),r=n[o-i-1]+r;n=r}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]}))),(c?"-":"")+l.options.prefix+n+a+l.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var c in l.options)i.hasOwnProperty(c)&&null!==i[c]&&(l.options[c]=i[c]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var u=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-u)),r=window.setTimeout((function(){e(n+a)}),a);return u=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),o(l.startVal)&&o(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!o(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},1059:function(e){e.exports=JSON.parse("{}")},1516:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));var a,r,i,o,l,c,u,s=n(35),m=n(93),p=n(43),f=n(1),d=n.n(f),b=n(772),E=n(34),y=n(693),g=n(25),h=n(696),x=n(746),v=n.n(x),O=n(747),w=n.n(O),S=n(899),j=n.n(S),R=n(1039),N=n.n(R),k=n(688),C=n(732),F=n(712),V=n(711),A=n(820),T=n(822),M=n(781),z=n(2),P=n.n(z),B=n(14),D=n(218),L=n(669),_=function(){var e=Object(f.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(L.a)().slowRefresh,i=Object(D.a)();return Object(f.useEffect)((function(){function e(){return(e=Object(B.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,i.getTotalValueLocked();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,i,r]),n},H=(n(1059),n(232)),U=n(1509),$=n(1485),I=n(906),q=n(1487),G=n(687),Q=n(692),W=n(1483),J=(Object(E.c)(a||(a=Object(p.a)(["\n  body {\n    background: url(",") no-repeat !important;\n    background-size: cover !important;\n  }\n"])),w.a),Object(W.a)((function(e){return{button:Object(m.a)({},e.breakpoints.down("415"),{marginTop:"10px"}),tokenButton:{},"@media only screen and (max-width: 1200px)":{tokenButton:{fontSize:"12px",marginRight:"4%"}},flex:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flexStart",alignItems:"center",flexWrap:"wrap"},"@media only screen and (max-width: 850px)":{tokenButton:{width:"40% !important"}},"@media only screen and (max-width: 670px)":{tokenButton:{width:"80% !important"}}}}))),Z=E.d.div(o||(o=Object(p.a)(["\n  //color: ",";\n  font-size: 30px;\n  font-weight: 700;\n"])),(function(e){return e.theme.color.grey[300]})),K=E.d.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n"]))),Y=E.d.div(c||(c=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n"]))),X=E.d.div(u||(u=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 1%;\n"]))),ee=function(){var e=J(),t=_(),n=Object(F.a)("NOSNO-USDC-LP"),a=Object(F.a)("NOSNOSHARE-USDC-LP"),o=Object(C.a)(),l=Object(M.a)(),c=Object(T.a)(),u=Object(D.a)(),m=Object(A.a)(),x=m.price,O=m.marketCap,w=m.priceChange;H.tomb,H.tShare;var S="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D",R="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875",z=Object(f.useMemo)((function(){return n||null}),[n]),P=Object(f.useMemo)((function(){return a||null}),[a]),B=Object(f.useMemo)((function(){return o?Number(o.priceInDollars).toFixed(2):null}),[o]),L=Object(f.useMemo)((function(){return o?Number(o.tokenInFtm).toFixed(4):null}),[o]),W=Object(f.useMemo)((function(){return o?String(o.circulatingSupply):null}),[o]),ee=Object(f.useMemo)((function(){return o?String(o.totalSupply):null}),[o]),te=Object(f.useMemo)((function(){return l?Number(l.priceInDollars).toFixed(2):null}),[l]),ne=Object(f.useMemo)((function(){return l?Number(l.tokenInFtm).toFixed(4):null}),[l]),ae=Object(f.useMemo)((function(){return l?String(l.circulatingSupply):null}),[l]),re=Object(f.useMemo)((function(){return l?String(l.totalSupply):null}),[l]),ie=Object(f.useMemo)((function(){return c?Number(c.priceInDollars).toFixed(2):null}),[c]),oe=Object(f.useMemo)((function(){return c?Number(c.tokenInFtm).toFixed(4):null}),[c]),le=Object(f.useMemo)((function(){return c?String(c.circulatingSupply):null}),[c]),ce=Object(f.useMemo)((function(){return c?String(c.totalSupply):null}),[c]),ue=Object(h.a)(u.TOMB),se=Object(f.useMemo)((function(){return Object(g.a)(ue)}),[ue]),me=(se*B).toFixed(2),pe=Object(h.a)(u.TSHARE),fe=Object(f.useMemo)((function(){return Object(g.a)(pe)}),[pe]),de=(fe*te).toFixed(2),be=Object(h.a)(u.TBOND),Ee=Object(f.useMemo)((function(){return Object(g.a)(be)}),[be]),ye=(Ee*oe).toFixed(2),ge=E.d.a(r||(r=Object(p.a)(["\n    font-weight: 700;\n    text-decoration: none;\n    color: #E6E6E6;\n  "]))),he=E.d.div(i||(i=Object(p.a)(["\n  font-family: Quicksand, cursive;\n  align-items: center;\n  display: flex;\n  font-size: 16px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),xe=Object(V.a)(d.a.createElement(Q.a,null,d.a.createElement(U.a,{p:4},d.a.createElement("h1",{style:{color:"#5686d6"}},"Welcome to"),d.a.createElement("h1",null,"Not Snowy Finance"),d.a.createElement("p",null,"One of The first algorithmic stablecoin on Avalanche C Chain, pegged to the price of 1 AVAX via seigniorage."),d.a.createElement("p",null,"Stake your TOMB-AVAX LP in the farms to earn HSHARE rewards. Then stake your earned HSHARE in the boardroom to earn more TOMB!"),d.a.createElement(ge,{href:"https://github.com/0xGuard-com/audit-reports/blob/master/tomb-finance/Tomb-Finance_final-audit-report.pdf"},"Link to Audit Report"),d.a.createElement("p",null),d.a.createElement("img",{alt:"0xguard",src:"https://gateway.pinata.cloud/ipfs/QmYBxp5LCFmmYrZcgQQiznhsZkcfQhJ8dvwEgdBPorZ1A7?preview=1",width:200}),d.a.createElement("p",null),d.a.createElement(ge,{href:"https://rugdoc.io/project/tomb-finance/"},"Link to KYC"),d.a.createElement("p",null),d.a.createElement("img",{alt:"kyc",src:"https://gateway.pinata.cloud/ipfs/QmPDKWKCH8Zr5NHyQ5LzaG3H2xTiU7ui1MvoSagpLFQjWf?preview=1",width:200}))));Object(s.a)(xe,1)[0];return d.a.createElement(b.a,null,d.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",style:{zIndex:-420}},d.a.createElement("source",{src:v.a,type:"video/mp4"})),d.a.createElement($.a,{container:!0,spacing:3},d.a.createElement($.a,{item:!0,xs:12,sm:6},d.a.createElement(G.a,null,d.a.createElement(I.a,{style:{position:"relative"}},d.a.createElement(U.a,{p:4},d.a.createElement("h1",{style:{color:"#ffffff"}},"My balance")),d.a.createElement(Y,null,d.a.createElement(X,null,d.a.createElement(k.a,{symbol:"TOMB"}),d.a.createElement(K,null,d.a.createElement(Z,null,se),d.a.createElement(y.a,{text:" NOSNO available"}),d.a.createElement("span",{style:{fontSize:"15px",marginLeft:"2%"}}," ($",me||"-.----",")\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),d.a.createElement("div",{className:e.flex},d.a.createElement(q.a,{color:"primary",target:"_blank",href:S,variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Buy"),d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://dexscreener.com/avalanche/0xe63b66a8cf7811525cd15dab15f17fb62aa5af2f",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Chart"),d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://snowtrace.io/address/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D#code",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Contract")))),d.a.createElement(X,null,d.a.createElement(k.a,{symbol:"HSHARE"}),d.a.createElement(K,null,d.a.createElement(Z,null,fe),d.a.createElement(y.a,{text:" NOSNOSHARE available                             "}),d.a.createElement("span",{style:{fontSize:"15px",marginLeft:"2%"}}," ($",de||"-.----",")"),d.a.createElement("div",{className:e.flex},d.a.createElement(q.a,{color:"primary",target:"_blank",href:R,variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Buy"),d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://dexscreener.com/avalanche/0x061349a57b702ebe3139ca419457bb23f7e0d8a2",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Chart"),d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://snowtrace.io/address/0xe7a102fbc8ab3581d62830ddb599eccaae5e7875#code",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Contract")))),d.a.createElement(X,null,d.a.createElement(k.a,{symbol:"HBOND"}),d.a.createElement(K,null,d.a.createElement(Z,null,Ee),d.a.createElement(y.a,{text:" NOSNOBOND available"}),d.a.createElement("span",{style:{fontSize:"15px",marginLeft:"2%"}}," ($",ye||"-.----",")"),d.a.createElement("div",{className:e.flex},d.a.createElement(q.a,{color:"primary",href:"/bonds",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Bond"),d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://snowtrace.io/address/0x8aB4Ac266d8e698b7E39f97Ec17876076680f6f1#code",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"27%",marginRight:"5%"},className:e.tokenButton},"Contract")))))))),d.a.createElement($.a,{item:!0,xs:12,sm:6},d.a.createElement(U.a,{p:4},d.a.createElement("h1",null,"Welcome to"),d.a.createElement("h1",null,"Not Snowy Finance"),d.a.createElement("h4",{style:{color:"#d65656",marginTop:"4%"}},"Bringing more degens and utility to the Avalanche-C Chain."),d.a.createElement("h4",{style:{color:"#d65656"}},"$NOSNO is pegged at a ratio of 1:1 with $USDC."),d.a.createElement("h4",{style:{color:"#d65656",marginBottom:"3%"}},"Earn and stake $NOSNOSHARE to help peg $NOSNO with seigniorage.")),d.a.createElement($.a,{item:!0,xs:20,sm:12,style:{display:"flex"}},d.a.createElement(G.a,{style:{borderRadius:"20px",backgroundColor:"#161414"}},d.a.createElement(I.a,{style:{margin:"37px"}},d.a.createElement("h1",null,"Total Value Locked"),d.a.createElement(N.a,{style:{fontSize:"40px"},end:t,separator:",",prefix:"$"}))))),d.a.createElement($.a,{item:!0,xs:12,sm:3},d.a.createElement(G.a,null,d.a.createElement(I.a,{style:{position:"relative"}},d.a.createElement(U.a,{align:"center",mt:2},d.a.createElement(k.a,{symbol:"WFTM"})),d.a.createElement("h2",{align:"center"},"USDC"),d.a.createElement("p",{align:"center"},"Current Price"),d.a.createElement(U.a,{align:"center"},d.a.createElement("span",{style:{fontSize:"30px"}},"$",x||"-.----")),d.a.createElement(U.a,{align:"center",marginBottom:3},"\xa0"),d.a.createElement(he,null,d.a.createElement("span",{style:{fontSize:"14px"}},"Market Cap:",d.a.createElement("br",null),"24h Price Change:  ",d.a.createElement("br",null),"\xa0"),d.a.createElement("span",{style:{fontSize:"14px"}},"$",O," ",d.a.createElement("br",null),w.toFixed(2),"% ",d.a.createElement("br",null),"\xa0")),d.a.createElement(U.a,null,d.a.createElement(q.a,{color:"primary",target:"_blank",href:"https://traderjoexyz.com/trade?outputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd#/",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"100%"},className:e.button},"Purchase"))))),d.a.createElement($.a,{item:!0,xs:12,sm:3},d.a.createElement(G.a,null,d.a.createElement(I.a,{style:{position:"relative"}},d.a.createElement(U.a,{align:"center",mt:2},d.a.createElement(k.a,{symbol:"TOMB"})),d.a.createElement("h2",{align:"center"},"NOSNO"),d.a.createElement("p",{align:"center"},"Current Price"),d.a.createElement(U.a,{align:"center"},d.a.createElement("span",{style:{fontSize:"30px"}},L||"-.----"," ",d.a.createElement("img",{alt:"logo",style:{width:"30px"},src:j.a}))),d.a.createElement(U.a,{align:"center",marginBottom:3},d.a.createElement("span",{style:{fontSize:"16px",alignContent:"flex-start"}},"$",B||"-.--")),d.a.createElement(he,null,d.a.createElement("span",{style:{fontSize:"14px"}},"Market Cap:",d.a.createElement("br",null),"Circulating Supply:  ",d.a.createElement("br",null),"Total Supply:"),d.a.createElement("span",{style:{fontSize:"14px"}},"$",((W-2e4)*B).toFixed(2)," ",d.a.createElement("br",null),W-2e4," ",d.a.createElement("br",null),ee)),d.a.createElement(U.a,null,d.a.createElement(q.a,{color:"primary",target:"_blank",href:S,variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"100%"},className:e.button},"Purchase"))))),d.a.createElement($.a,{item:!0,xs:12,sm:3},d.a.createElement(G.a,null,d.a.createElement(I.a,{style:{position:"relative"}},d.a.createElement(U.a,{align:"center",mt:2},d.a.createElement(k.a,{symbol:"HSHARE"})),d.a.createElement("h2",{align:"center"},"NOSNOSHARE"),d.a.createElement("p",{align:"center"},"Current Price"),d.a.createElement(U.a,{align:"center"},d.a.createElement("span",{style:{fontSize:"30px"}},ne||"-.----"," ",d.a.createElement("img",{alt:"logo",style:{width:"30px"},src:j.a}))),d.a.createElement(U.a,{align:"center",marginBottom:3},d.a.createElement("span",{style:{fontSize:"16px"}},"$",te||"-.--")),d.a.createElement(he,null,d.a.createElement("span",{style:{fontSize:"14px"}},"Market Cap:  ",d.a.createElement("br",null),"Circulating Supply:  ",d.a.createElement("br",null),"Total Supply:"),d.a.createElement("span",{style:{fontSize:"14px"}},"$",(ae*te).toFixed(2)," ",d.a.createElement("br",null),ae," ",d.a.createElement("br",null),re)),d.a.createElement(U.a,null,d.a.createElement(q.a,{color:"primary",target:"_blank",href:R,variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"100%"},className:e.button},"Purchase"))))),d.a.createElement($.a,{item:!0,xs:12,sm:3},d.a.createElement(G.a,null,d.a.createElement(I.a,{style:{position:"relative"}},d.a.createElement(U.a,{align:"center",mt:2},d.a.createElement(k.a,{symbol:"HBOND"})),d.a.createElement("h2",{align:"center"},"NOSNOBOND"),d.a.createElement("p",{align:"center"},"Current Price"),d.a.createElement(U.a,{align:"center"},d.a.createElement("span",{style:{fontSize:"30px"}},oe||"-.----"," ",d.a.createElement("img",{alt:"logo",style:{width:"30px"},src:j.a}))),d.a.createElement(U.a,{align:"center",marginBottom:3},d.a.createElement("span",{style:{fontSize:"16px"}},"$",ie||"-.--")),d.a.createElement(he,null,d.a.createElement("span",{style:{fontSize:"14px"}},"Market Cap:  ",d.a.createElement("br",null),"Circulating Supply:  ",d.a.createElement("br",null),"Total Supply:"),d.a.createElement("span",{style:{fontSize:"14px"}},"$",(le*ie).toFixed(2)," ",d.a.createElement("br",null),le," ",d.a.createElement("br",null),ce)),d.a.createElement(U.a,null,d.a.createElement(q.a,{color:"primary",target:"_blank",href:"/bonds",variant:"contained",style:{marginTop:"10px",borderRadius:"10px",width:"100%"},className:e.button},"Bond"))))),d.a.createElement($.a,{item:!0,xs:12,sm:6},d.a.createElement(G.a,null,d.a.createElement(I.a,{align:"center"},d.a.createElement("h2",null,"NOSNO-USDC LP"),d.a.createElement(U.a,{mt:2},d.a.createElement(k.a,{symbol:"NOSNO-USDC-LP"})),d.a.createElement(U.a,{mt:2},d.a.createElement("span",{style:{fontSize:"26px"}},(null===z||void 0===z?void 0:z.tokenAmount)?null===z||void 0===z?void 0:z.tokenAmount:"-.--"," NOSNO /"," ",(null===z||void 0===z?void 0:z.ftmAmount)?null===z||void 0===z?void 0:z.ftmAmount:"-.--"," USDC")),d.a.createElement(U.a,null,"$",(null===z||void 0===z?void 0:z.priceOfOne)?z.priceOfOne:"-.--"),d.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===z||void 0===z?void 0:z.totalLiquidity)?z.totalLiquidity:"-.--"," ",d.a.createElement("br",null),"Total supply: ",(null===z||void 0===z?void 0:z.totalSupply)?z.totalSupply:"-.--")))),d.a.createElement($.a,{item:!0,xs:12,sm:6},d.a.createElement(G.a,null,d.a.createElement(I.a,{align:"center"},d.a.createElement("h2",null,"NOSNOSHARE-USDC LP"),d.a.createElement(U.a,{mt:2},d.a.createElement(k.a,{symbol:"NOSNOSHARE-USDC-LP"})),d.a.createElement(U.a,{mt:2},d.a.createElement("span",{style:{fontSize:"26px"}},(null===P||void 0===P?void 0:P.tokenAmount)?null===P||void 0===P?void 0:P.tokenAmount:"-.--"," NOSNOSHARE /"," ",(null===P||void 0===P?void 0:P.ftmAmount)?null===P||void 0===P?void 0:P.ftmAmount:"-.--"," USDC")),d.a.createElement(U.a,null,"$",(null===P||void 0===P?void 0:P.priceOfOne)?P.priceOfOne:"-.--"),d.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===P||void 0===P?void 0:P.totalLiquidity)?P.totalLiquidity:"-.--",d.a.createElement("br",null),"Total supply: ",(null===P||void 0===P?void 0:P.totalSupply)?P.totalSupply:"-.--"))))))}},712:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),o=n(35),l=n(1),c=n(218),u=n(669);t.a=function(e){var t=Object(l.useState)(),n=Object(o.a)(t,2),a=n[0],s=n[1],m=Object(u.a)().slowRefresh,p=Object(c.a)();return Object(l.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,p.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s,p,m,e]),a}},820:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),o=n(35),l=n(900),c=n.n(l),u=n(1);t.a=function(){var e=Object(u.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(u.useState)(0),s=Object(o.a)(l,2),m=s[0],p=s[1],f=Object(u.useState)(0),d=Object(o.a)(f,2),b=d[0],E=d[1];return Object(u.useEffect)((function(){y();var e=setInterval((function(){y()}),1e4);return function(){clearInterval(e)}}),[]),{price:n,marketCap:m,priceChange:b};function y(){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=joe");case 2:t=e.sent,n=t.data,a(n[0].current_price),p(n[0].market_cap),E(n[0].price_change_percentage_24h);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}},822:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),o=n(35),l=n(1),c=n(218),u=n(669);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().slowRefresh,m=Object(c.a)();return Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),n}},906:function(e,t,n){"use strict";var a=n(10),r=n(44),i=n(1),o=(n(24),n(219)),l=n(220),c=i.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,u=void 0===c?"div":c,s=Object(r.a)(e,["classes","className","component"]);return i.createElement(u,Object(a.a)({className:Object(o.default)(n.root,l),ref:t},s))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)}}]);