(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{7265:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7462),e=c(5987),f=c(7294),g=c(6010),h=c(1591),i=c(594),j=(0,i.Z)(f.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),k=function(a){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:a.palette.background.default,backgroundColor:"light"===a.palette.type?a.palette.grey[400]:a.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:a.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},l=f.forwardRef(function(a,b){var c,h,i,k,l,m,n=a.alt,o=a.children,p=a.classes,q=a.className,r=a.component,s=a.imgProps,t=a.sizes,u=a.src,v=a.srcSet,w=a.variant,x=(0,e.Z)(a,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,z=(h=(c={src:u,srcSet:v}).src,i=c.srcSet,k=f.useState(!1),l=k[0],m=k[1],f.useEffect(function(){if(h||i){m(!1);var a=!0,b=new Image;return b.src=h,b.srcSet=i,b.onload=function(){a&&m("loaded")},b.onerror=function(){a&&m("error")},function(){a=!1}}},[h,i]),l),A=u||v,B=A&&"error"!==z;return y=B?f.createElement("img",(0,d.Z)({alt:n,src:u,srcSet:v,sizes:t,className:p.img},s)):null!=o?o:A&&n?n[0]:f.createElement(j,{className:p.fallback}),f.createElement(void 0===r?"div":r,(0,d.Z)({className:(0,g.Z)(p.root,p.system,p[void 0===w?"circular":w],q,!B&&p.colorDefault),ref:b},x),y)}),m=(0,h.Z)(k,{name:"MuiAvatar"})(l)},2959:function(a,b,c){"use strict";function d(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.reduce(function(a,b){return null==b?a:function(){for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];a.apply(this,d),b.apply(this,d)}},function(){})}c.d(b,{Z:function(){return d}})},9437:function(a,b,c){"use strict";function d(a){var b,c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:166;function d(){for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];var g=this,h=function(){a.apply(g,e)};clearTimeout(b),b=setTimeout(h,c)}return d.clear=function(){clearTimeout(b)},d}c.d(b,{Z:function(){return d}})},8923:function(a,b,c){"use strict";c.r(b),c.d(b,{capitalize:function(){return d.Z},createChainedFunction:function(){return e.Z},createSvgIcon:function(){return f.Z},debounce:function(){return g.Z},deprecatedPropType:function(){return h},isMuiElement:function(){return i.Z},ownerDocument:function(){return j.Z},ownerWindow:function(){return k.Z},requirePropFactory:function(){return l},setRef:function(){return m.Z},unstable_useId:function(){return s},unsupportedProp:function(){return n},useControlled:function(){return o.Z},useEventCallback:function(){return p.Z},useForkRef:function(){return q.Z},useIsFocusVisible:function(){return t.Z}});var d=c(3871),e=c(2959),f=c(594),g=c(9437);function h(a,b){return function(){return null}}var i=c(3711),j=c(626),k=c(713);function l(a){return function(){return null}}var m=c(4236);function n(a,b,c,d,e){return null}var o=c(2775),p=c(5192),q=c(3834),r=c(7294);function s(a){var b=r.useState(a),c=b[0],d=b[1];return r.useEffect(function(){null==c&&d("mui-".concat(Math.round(1e5*Math.random())))},[c]),a||c}var t=c(4896)},3711:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(7294);function e(a,b){return d.isValidElement(a)&& -1!==b.indexOf(a.type.muiName)}},626:function(a,b,c){"use strict";function d(a){return a&&a.ownerDocument||document}c.d(b,{Z:function(){return d}})},713:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(626);function e(a){return(0,d.Z)(a).defaultView||window}},2775:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(7294);function e(a){var b=a.controlled,c=a.default,e=(a.name,a.state,d.useRef(void 0!==b)),f=e.current,g=d.useState(c),h=g[0],i=g[1],j=d.useCallback(function(a){f||i(a)},[]);return[f?b:h,j]}},3279:function(a,b,c){"use strict";var d=c(4836),e=c(5263);b.Z=void 0;var f=e(c(7294)),g=(0,d(c(2108)).default)(f.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message");b.Z=g},2108:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return d.createSvgIcon}});var d=c(8923)},9411:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Main/Plan/[id]",function(){return c(5069)}])},5069:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(1163),j=c(9473),k=c(3632),l=c(5321),m=c(5549),n=c(3768),o=c(7265),p=c(3279),q=c(7462),r=c(6612),s=c(9382),t=c(6607),u=c.n(t),v=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(a,(0,q.Z)({defaultTheme:s.Z},b))}(function(a){return{small:{width:a.spacing(3),height:a.spacing(3),marginRight:a.spacing(1)}}}),w=function(){var a,b=(0,j.v9)(n.dy),c=v(),e=(0,h.useState)(),q=e[0],r=e[1],s=(0,h.useState)(!1),t=s[0],w=s[1],x=(0,h.useState)(!1),y=x[0],z=x[1],A=(0,h.useState)(""),B=A[0],C=A[1],D=(0,h.useState)([{id:"",avatar:"",text:"",username:"",timestamp:""},]),E=D[0],F=D[1],G=(0,i.useRouter)(),H=G.query.id,I=(a=(0,d.Z)(f().mark(function a(){var b,c,d;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.prev=1,b=(0,l.JU)(k.db,"posts","".concat(H)),a.next=5,(0,l.QT)(b);case 5:(c=a.sent).exists()?r(d=c.data()):console.log("No such document!"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),alert("エラーが発生しました。エラー内容：".concat(a.t0)),console.log(a.t0);case 13:return a.prev=13,w(!1),a.finish(13);case 16:case"end":return a.stop()}},a,null,[[1,9,13,16]])})),function(){return a.apply(this,arguments)});(0,h.useEffect)(function(){I()},[]);var J,K=(0,l.IO)((0,l.hJ)(k.db,"posts","".concat(H),"comments"),(0,l.Xo)("timestamp","desc"));(0,l.cf)(K,function(a){F(a.docs.map(function(a){return{id:a.id,avatar:a.data().avatar,text:a.data().text,username:a.data().username,timestamp:a.data().timestamp}}))}),(0,h.useEffect)(function(){},[]);var L=(J=(0,d.Z)(f().mark(function a(c){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c.preventDefault(),(0,l.ET)((0,l.hJ)(k.db,"posts","".concat(H),"comments"),{avatar:b.photoUrl,text:B,timestamp:(0,l.Bt)(),username:b.displayName}),C("");case 3:case"end":return a.stop()}},a)})),function(a){return J.apply(this,arguments)}),M=function(){G.push(m.F.backToMain.path)};return(0,g.jsx)("div",{className:u().root,children:(0,g.jsxs)("div",{className:u().container,children:[t&&(0,g.jsx)("p",{className:u().loading,children:"...Loading"}),(null==q?void 0:q.length)===0&&(0,g.jsx)("p",{children:"※投稿がありません"}),q?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:u().plan_title,children:q.text}),(0,g.jsx)("div",{className:u().plan_body,children:q.body})]}):(0,g.jsx)("p",{children:"No Data"}),(0,g.jsxs)("div",{className:u().comment_open_container,children:[(0,g.jsx)(p.Z,{className:u().comment_open_icon,onClick:function(){return z(!y)}}),(0,g.jsx)("span",{className:u().comment_open_text,children:"コメントする"})]}),y&&(0,g.jsxs)("div",{className:u().comment_and_form_container,children:[E.map(function(a){var b;return(0,g.jsxs)("div",{className:u().comment_container,children:[(0,g.jsx)(o.Z,{src:a.avatar,className:c.small}),(0,g.jsxs)("span",{className:u().comment_user,children:["@",a.username]}),(0,g.jsxs)("span",{className:u().comment_text,children:[a.text," "]}),(0,g.jsx)("span",{className:u().comment_time,children:a.timestamp&&((b=a.timestamp)?new Date(b.toDate()).toLocaleString():null)})]},a.id)}),(0,g.jsx)("form",{onSubmit:L,children:(0,g.jsxs)("div",{className:u().comment_form,children:[(0,g.jsx)("input",{className:u().comment_input,type:"text",placeholder:"コメントを入力してください",value:B,onChange:function(a){return C(a.target.value)}}),(0,g.jsx)("button",{disabled:!B,className:B?u().comment_button:u().comment_disable_button,type:"submit",children:"送信"})]})})]}),(0,g.jsx)("button",{onClick:M,className:u().back_button,children:"戻る"})]})})},x=w},5549:function(a,b,c){"use strict";c.d(b,{F:function(){return d}});var d={main:{path:"../Main/TripLists",pageName:"メインページ"},register:{path:"../Register/Register",pageName:"メンバー登録"},login:{path:"../Login/Login",pageName:"ログイン"},logout:{path:"/",pageName:"ログアウト"},id:{path:"../Main/Plan/id",pageName:"id"},backToMain:{path:"../TripLists",pageName:"メインページ"}}},6607:function(a){a.exports={root:"id_root__laXVG",container:"id_container__MMn4s",loading:"id_loading__gf7gg",plan_title:"id_plan_title__ZUN_H",plan_body:"id_plan_body___Q4R4",comment_open_container:"id_comment_open_container__WCam0",comment_open_icon:"id_comment_open_icon__9iAeg",comment_open_text:"id_comment_open_text__Lb2I4",comment_and_form_container:"id_comment_and_form_container__3MBPz",comment_container:"id_comment_container__PAWTs",comment_user:"id_comment_user__qhr5S",comment_text:"id_comment_text__mumhc",comment_time:"id_comment_time__C_sMg",comment_form:"id_comment_form__CwDuS",comment_input:"id_comment_input__OeJMa",comment_disable_button:"id_comment_disable_button__KGAFJ",comment_button:"id_comment_button__rZltR",back_button:"id_back_button__tNsni"}},4836:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports},5263:function(a,b,c){var d=c(8698).default;function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}a.exports=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==d(a)&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var f={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if("default"!==h&&Object.prototype.hasOwnProperty.call(a,h)){var i=g?Object.getOwnPropertyDescriptor(a,h):null;i&&(i.get||i.set)?Object.defineProperty(f,h,i):f[h]=a[h]}return f.default=a,c&&c.set(a,f),f},a.exports.__esModule=!0,a.exports.default=a.exports},8698:function(a){function b(c){return a.exports=b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a.exports.__esModule=!0,a.exports.default=a.exports,b(c)}a.exports=b,a.exports.__esModule=!0,a.exports.default=a.exports}},function(a){a.O(0,[192,774,888,179],function(){var b;return a(a.s=9411)}),_N_E=a.O()}])