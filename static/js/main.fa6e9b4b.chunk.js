(this.webpackJsonpgithubapp=this.webpackJsonpgithubapp||[]).push([[0],{22:function(e,t,a){},35:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(22),a(12)),u=a.n(o),i=a(17),s=a(10),m=a(25),p=function(e){var t=e.languages,a=e.userfullname,n="".concat(a,"'s preferred Languages");return r.a.createElement("div",null,r.a.createElement(m.a,{width:"500px",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:t,options:{title:n}}))},h=a(27),f=a(28),b=a(31),d=a(32),E=(a(43),a(33)),g=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.src;return r.a.createElement("div",{className:"avatarContainer"},r.a.createElement(E.a,{alt:"userImage",src:e,roundedCircle:!0}))}}]),a}(n.Component),v=a(14),j=a.n(v),w=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),m=o[0],h=o[1],f=Object(n.useState)(!1),b=Object(s.a)(f,2),d=b[0],E=b[1],v=Object(n.useState)(""),w=Object(s.a)(v,2),O=w[0],S=w[1],x=Object(n.useState)(""),y=Object(s.a)(x,2),k=y[0],C=y[1],T=Object(n.useState)(""),N=Object(s.a)(T,2),B=N[0],P=N[1],_=Object(n.useState)(0),A=Object(s.a)(_,2),G=A[0],U=A[1],z=Object(n.useState)(0),W=Object(s.a)(z,2),I=W[0],J=W[1],L=new Headers,M="Basic "+btoa("7844abf6117a5efdaf01:e3d43c1fa9086fe22b00870d25fda0e86cd67490");L.append("Authorization",M);var F={method:"GET",headers:L,redirect:"follow"},H=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,fetch("https://api.github.com/users/".concat(a),F);case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent)?(C(r.name),P(r.avatar_url),U(r.followers),J(r.following)):S("Not a valid user"),D(),E(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch("https://api.github.com/users/".concat(a,"/repos"),F);case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.length>0?(r=new Map,n.forEach((function(e){e.language&&(r.has(e.language)?r.set(e.language,r.get(e.language)+1):r.set(e.language,1))})),h([]),(l=[]).push(["Languages","Count"]),r.forEach((function(e,t){l.push([t,e])})),h((function(e){return l}))):S("Not a valid user"),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:H},r.a.createElement("h3",null,"Who are you searching for?"),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",placeholder:"Enter User's Github username",value:a,onChange:function(e){l(e.target.value)}}),r.a.createElement(j.a,{fontSize:"large",onClick:H}))),r.a.createElement("div",null,O),r.a.createElement("div",null,m.length>0&&!d&&r.a.createElement("div",null,r.a.createElement("div",{className:"user-info"},B&&r.a.createElement(g,{src:B}),k&&r.a.createElement("span",null,r.a.createElement("br",null),k),G&&r.a.createElement("p",null,"Followers: ",G),I&&r.a.createElement("p",null,"Following ",I)),r.a.createElement(p,{languages:m,userfullname:a,id:"chart"}))))},O=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"About Us"),r.a.createElement("p",null,"The Power of Babel is based on Tejas Shah's ",r.a.createElement("a",{target:"blank",href:"https://www.mintbean.io/project/506f7411-bdb1-4d34-b925-260e0d90589b"},"original project")," a mintbean.io hackathon."),r.a.createElement("p",null,"His project User's Favorite Language used the Github API to find a user's favorite languages to code in based on their. contributions to public Github repositories."),r.a.createElement("img",{src:"https://i.imgur.com/6YRcYC2.png",alt:"the original project made by Tejas Shah"}),r.a.createElement("p",null,"The Power of Babel expands upon his original work with extra UX and UI additions to turn it into a single page application."))},S=a(11),x=a(29),y=a.n(x),k=a(30),C=a.n(k),T=function(){return r.a.createElement("header",null,r.a.createElement("h2",null,"The Power of Babel"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(S.b,{to:"/"},r.a.createElement(y.a,{fontSize:"large"}))),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/app"},r.a.createElement(j.a,{fontSize:"large"}))),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/about"},r.a.createElement(C.a,{fontSize:"large"}))))))},N=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Styled by: ",r.a.createElement("a",{href:"https://github.com/joshuasoave"},"Josh Soave"),r.a.createElement("span",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Markus Spiske")," on ",r.a.createElement("a",{href:"https://unsplash.com/s/photos/language?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))))},B=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h2",null,"Welcome to The Power of Babel!"),r.a.createElement(S.b,{to:"/app"},r.a.createElement("img",{id:"home-img",src:"https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",alt:"computer code in a text editor"})),r.a.createElement("h4",null,"An application to find a Github user's favorite coding languages."))},P=a(2);var _=function(){return r.a.createElement(S.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement("main",null,r.a.createElement(P.a,{path:"/",exact:!0,component:B}),r.a.createElement(P.a,{path:"/GithubApp",component:B}),r.a.createElement(P.a,{path:"/about",component:O}),r.a.createElement(P.a,{path:"/app",component:w})),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.fa6e9b4b.chunk.js.map