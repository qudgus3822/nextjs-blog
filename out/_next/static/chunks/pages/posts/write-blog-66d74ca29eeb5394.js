(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{4718:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/write-blog",function(){return t(1235)}])},1235:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var n=t(4051),a=t.n(n),r=t(5893),l=t(7294),c=t(1163),i=t.n(c);function o(e,s,t,n,a,r,l){try{var c=e[r](l),i=c.value}catch(o){return void t(o)}c.done?s(i):Promise.resolve(i).then(n,a)}function d(e){return function(){var s=this,t=arguments;return new Promise((function(n,a){var r=e.apply(s,t);function l(e){o(r,n,a,l,c,"next",e)}function c(e){o(r,n,a,l,c,"throw",e)}l(void 0)}))}}function u(){var e=(0,l.useState)(!0),s=(e[0],e[1]),t=(0,l.useState)(""),n=t[0],c=t[1];function o(){return(o=d(a().mark((function e(s){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),t={subject:s.currentTarget.subject.value,content:s.currentTarget.content.value,writer:s.currentTarget.writer.value,blogImage:s.currentTarget.blogImage.value,category:s.currentTarget.category.value},e.next=5,fetch(window.location.protocol+"//"+window.location.host+"/api/writeBlog",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if(201!==(n=e.sent).status){e.next=13;break}return e.next=9,n.json();case 9:r=e.sent,mutate(r),e.next=18;break;case 13:return e.t0=c,e.next=16,n.text();case 16:e.t1=e.sent,(0,e.t0)(e.t1);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,l.useEffect)((function(){var e=document.querySelector('script[src="/assets/js/app.js"]');e||((e=document.createElement("script")).src="/assets/js/app.js",e.async=!0,document.body.appendChild(e));var t=function(){return s(!1)};return e.addEventListener("load",t),function(){e.removeEventListener("load",t)}}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"page-wrapper",style:{marginTop:"10vh"},children:[n,(0,r.jsx)("div",{className:"page-content-tab",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("button",{className:"btn btn-de-primary",style:{marginBottom:"20px"},onClick:function(){return i().back()},children:"\ub4a4\ub85c"}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsx)("h4",{className:"card-title",children:"\ube14\ub85c\uadf8 \uae00\uc4f0\uae30"}),(0,r.jsx)("p",{className:"text-muted mb-0",children:"\ub098\ub9cc\uc758 \uae00\uc4f0\uae30"})]}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{className:"",onSubmit:function(e){return o.apply(this,arguments)}.bind(this),children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{children:"\uae00\uc4f4\uc774"}),(0,r.jsx)("div",{children:(0,r.jsxs)("select",{id:"writer",className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"\uae40\ubcd1\ud604",defaultValue:!0,children:"\uae40\ubcd1\ud604"}),(0,r.jsx)("option",{value:"\uae40\uc591\ud64d",children:"\uae40\uc591\ud64d"})]})})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{children:"\uce74\ud14c\uace0\ub9ac"}),(0,r.jsx)("div",{children:(0,r.jsxs)("select",{id:"category",className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"\uc77c\uc0c1",defaultValue:!0,children:"\uc77c\uc0c1"}),(0,r.jsx)("option",{value:"\ucf54\ub4dc",children:"\ucf54\ub4dc"}),(0,r.jsx)("option",{value:"\ub370\uc774\ud2b8",children:"\ub370\uc774\ud2b8"}),(0,r.jsx)("option",{value:"\ub18d\uad6c",children:"\ub18d\uad6c"})]})})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{children:"\uc774\ubbf8\uc9c0"}),(0,r.jsx)("div",{children:(0,r.jsxs)("select",{id:"blogImage",className:"form-select","aria-label":"Default select example",children:[(0,r.jsx)("option",{value:"1",defaultValue:!0,children:"\uc131\uae30\uc0ac"}),(0,r.jsx)("option",{value:"2",children:"\ub538\uae30"}),(0,r.jsx)("option",{value:"3",children:"\uc3d9\ub3c5\uc0c8"}),(0,r.jsx)("option",{value:"4",children:"\uc74c\uc2dd"}),(0,r.jsx)("option",{value:"5",children:"\ucee4\ud53c"}),(0,r.jsx)("option",{value:"6",children:"\uc5ec\uc790"})]})})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"subject",children:"\uc81c\ubaa9"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"subject",required:""})]})})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"message",children:"\ub0b4\uc6a9"}),(0,r.jsx)("textarea",{className:"form-control",rows:"5",id:"content"})]})})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-sm-12 text-end",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-de-primary px-4",children:"\uae00 \ub4f1\ub85d"})})})]})})]})]})})]})})}},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],(function(){return s=4718,e(e.s=s);var s}));var s=e.O();_N_E=s}]);