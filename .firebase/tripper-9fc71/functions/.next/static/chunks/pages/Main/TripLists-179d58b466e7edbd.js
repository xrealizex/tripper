(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{7265:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7462),e=c(5987),f=c(7294),g=c(6010),h=c(1591),i=c(594),j=(0,i.Z)(f.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),k=function(a){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:a.palette.background.default,backgroundColor:"light"===a.palette.type?a.palette.grey[400]:a.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:a.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},l=f.forwardRef(function(a,b){var c,h,i,k,l,m,n=a.alt,o=a.children,p=a.classes,q=a.className,r=a.component,s=a.imgProps,t=a.sizes,u=a.src,v=a.srcSet,w=a.variant,x=(0,e.Z)(a,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,z=(h=(c={src:u,srcSet:v}).src,i=c.srcSet,k=f.useState(!1),l=k[0],m=k[1],f.useEffect(function(){if(h||i){m(!1);var a=!0,b=new Image;return b.src=h,b.srcSet=i,b.onload=function(){a&&m("loaded")},b.onerror=function(){a&&m("error")},function(){a=!1}}},[h,i]),l),A=u||v,B=A&&"error"!==z;return y=B?f.createElement("img",(0,d.Z)({alt:n,src:u,srcSet:v,sizes:t,className:p.img},s)):null!=o?o:A&&n?n[0]:f.createElement(j,{className:p.fallback}),f.createElement(void 0===r?"div":r,(0,d.Z)({className:(0,g.Z)(p.root,p.system,p[void 0===w?"circular":w],q,!B&&p.colorDefault),ref:b},x),y)}),m=(0,h.Z)(k,{name:"MuiAvatar"})(l)},9837:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Main/TripLists",function(){return c(2231)}])},2231:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return F}});var d=c(7568),e=c(1799);function f(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var g=c(4051),h=c.n(g),i=c(5893),j=c(7294),k=c(1163),l=c(9473),m=c(6690),n=c(3632),o=c(5321),p=c(3768),q=c(3823),r=c.n(q),s=c(282),t=function(a){var b,c=a.modalHandler,e=a.getPosts,f=a.setShow,g=(0,j.useState)(""),k=g[0],m=g[1],q=(0,j.useState)(""),t=q[0],u=q[1],v=(0,l.v9)(p.dy),w=(b=(0,d.Z)(h().mark(function a(b){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b.preventDefault();try{(0,o.ET)((0,o.hJ)(n.db,"posts"),{avatar:v.photoUrl,image:"",text:k,body:t,timestamp:(0,o.Bt)(),username:v.displayName}),e()}catch(c){console.log(c)}m(""),u(""),f(!1);case 5:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)});return(0,i.jsx)("div",{className:r().root,children:(0,i.jsx)("div",{className:r().overlay,children:(0,i.jsx)("div",{className:r().content,children:(0,i.jsxs)("form",{onSubmit:w,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{placeholder:"京都旅行",type:"text",autoFocus:!0,value:k,onChange:function(a){return m(a.target.value)},className:r().post_title}),(0,i.jsx)("textarea",{placeholder:"本文",wrap:"soft",autoFocus:!0,value:t,onChange:function(a){return u(a.target.value)},className:r().post_body})]}),(0,i.jsx)(s.Z,{type:"submit",disabled:!k,className:k?r().post_sendBtn:r().post_sendDisableBtn,children:"投稿する"}),(0,i.jsx)(s.Z,{type:"button",className:r().close_button,onClick:c,children:"閉じる"})]})})})})},u=t,v=c(4418),w=c.n(v),x=function(a){var b,c=a.post,d=(0,k.useRouter)(),e=function(){d.push("../Main/Plan/".concat(c.id))};return(0,i.jsxs)("div",{className:w().root,children:[(0,i.jsx)("p",{className:w().timestamp,children:(b=c.timestamp)?new Date(b.toDate()).toLocaleString():null}),(0,i.jsx)("p",{onClick:e,className:w().plan_name,children:c.text})]})},y=x,z=c(5549),A={src:"/_next/static/media/icon.97bf6eae.jpg",height:660,width:660,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJgKf//EAB4QAAIBAwUAAAAAAAAAAAAAAAECAwQFEgARIUFS/9oACAEBAAE/AJbk1yqqeKljwLhcgXbg97etf//EABcRAQADAAAAAAAAAAAAAAAAAAIAA1H/2gAIAQIBAT8ANYyf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECUf/aAAgBAwEBPwB1Wn//2Q=="},B=c(5507),C=c.n(B),D=c(7265),E=function(){var a,b,c,g=(0,j.useState)([]),q=g[0],r=g[1],t=(0,j.useState)(!1),v=t[0],w=t[1],x=(0,j.useState)(!1),B=x[0],E=x[1],F=(0,k.useRouter)(),G=(0,l.v9)(p.dy),H=(b=(0,d.Z)(h().mark(function a(){var b,c,d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.prev=1,b=(0,o.IO)((0,o.hJ)(n.db,"posts"),(0,o.Xo)("timestamp","desc")),a.next=5,(0,o.PL)(b);case 5:c=a.sent,d=[],c.docs.forEach(function(a){var b=a.data(),c=f((0,e.Z)({},b),{id:a.id});d.push(c)}),r(d),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),alert("エラーが発生しました。エラー内容：".concat(a.t0)),console.log(a.t0);case 15:return a.prev=15,w(!1),a.finish(15);case 18:case"end":return a.stop()}},a,null,[[1,11,15,18]])})),function(){return b.apply(this,arguments)});(0,j.useEffect)(function(){H()},[]);var I=(c=(0,d.Z)(h().mark(function a(){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,m.w7)(n.I8);case 3:F.push(z.F.logout.path),alert("ログアウトしました"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}},a,null,[[0,7]])})),function(){return c.apply(this,arguments)}),J=function(){E(!B)};return(0,i.jsxs)("div",{className:C().root,children:[(0,i.jsx)("span",{className:C().logo,onClick:I,children:"Tripper"}),(0,i.jsxs)("div",{className:C().container,children:[B&&(0,i.jsx)(u,{modalHandler:J,getPosts:H,setShow:E}),v&&(0,i.jsx)("p",{className:C().loading,children:"...Loading"}),0===q.length&&(0,i.jsx)("p",{className:B?C().hidden_none_tex:C().none_text,children:"※投稿がありません"}),(0,i.jsxs)("div",{className:C().postGridContainer,children:[(0,i.jsx)(D.Z,{src:null!==(a=G.photoUrl)&& void 0!==a?a:A,className:C().avatar}),(0,i.jsx)(s.Z,{onClick:function(){E(!0)},className:B?C().post_hiddenBtn:C().post_Btn,children:"投稿へ"})]}),(0,i.jsx)("div",{className:C().gridContainer,children:q.map(function(a){return(0,i.jsx)(y,{post:a},a.id)})}),(0,i.jsx)(s.Z,{onClick:I,className:C().logout_btn,children:"ログアウト"})]})]})},F=E},5549:function(a,b,c){"use strict";c.d(b,{F:function(){return d}});var d={main:{path:"../Main/TripLists",pageName:"メインページ"},register:{path:"../Register/Register",pageName:"メンバー登録"},login:{path:"../Login/Login",pageName:"ログイン"},logout:{path:"/",pageName:"ログアウト"},id:{path:"../Main/Plan/id",pageName:"id"},backToMain:{path:"../TripLists",pageName:"メインページ"}}},4418:function(a){a.exports={root:"AddTripPlan_root__8vfzo",plan_name:"AddTripPlan_plan_name__n5TG9",timestamp:"AddTripPlan_timestamp__0nkLP"}},3823:function(a){a.exports={root:"PostForm_root__QGqfF",overlay:"PostForm_overlay__4NGwq",content:"PostForm_content__Uxs27",post_title:"PostForm_post_title__iTebP",post_body:"PostForm_post_body__U48xi",post_sendBtn:"PostForm_post_sendBtn__c1AWi",post_sendDisableBtn:"PostForm_post_sendDisableBtn__HSdJN",close_button:"PostForm_close_button__ATwRj"}},5507:function(a){a.exports={root:"TripLists_root__ExD9A",logo:"TripLists_logo__zXlJ1",container:"TripLists_container__cblHu",loading:"TripLists_loading__YN3kH",none_text:"TripLists_none_text__GdyUU",hidden_none_text:"TripLists_hidden_none_text__i_sLn",postGridContainer:"TripLists_postGridContainer__IfmxN",post_hiddenBtn:"TripLists_post_hiddenBtn__E6PbL",post_Btn:"TripLists_post_Btn__Uh_UJ",logout_btn:"TripLists_logout_btn__YT9fq"}}},function(a){a.O(0,[192,282,774,888,179],function(){var b;return a(a.s=9837)}),_N_E=a.O()}])