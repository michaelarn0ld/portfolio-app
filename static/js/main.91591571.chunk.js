(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),a=t(4),c=t.n(a),s=(t(9),t(2)),l=[{title:"Home",url:"#home",inactiveClassName:"nav-links",activeClassName:"nav-links home"},{title:"About",url:"#about",inactiveClassName:"nav-links",activeClassName:"nav-links about"},{title:"Projects",url:"#projects",inactiveClassName:"nav-links",activeClassName:"nav-links projects"},{title:"Blog",url:"#blog",inactiveClassName:"nav-links",activeClassName:"nav-links blog"},{title:"Contact",url:"#",inactiveClassName:"nav-links-mobile",activeClassName:"nav-links-mobile"}],r=(t(10),t(11),t(0)),o=["button--primary","button--outline"],d=["button--medium","button--large"],j=function(e){var n=e.children,t=e.type,i=e.onClick,a=e.buttonStyle,c=e.buttonSize,s=o.includes(a)?a:o[0],l=d.includes(c)?c:d[0];return Object(r.jsx)("button",{className:"button ".concat(s," ").concat(l),onClick:i,type:t,children:n})};var b=function(){var e=Object(i.useState)(""),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),d=o[0],b=o[1],m=Object(i.useState)(""),u=Object(s.a)(m,2),h=u[0],v=u[1],w=Object(i.useState)(!1),O=Object(s.a)(w,2),p=O[0],x=O[1],N=p?{}:{display:"none"};return window.addEventListener("scroll",(function(){window.scrollY>=80?b(!0):b(!1)})),window.addEventListener("scroll",(function(){window.scrollY>=.8*window.innerHeight&&window.scrollY<1.8*window.innerHeight?v("Home"):window.scrollY>=1.8*window.innerHeight&&window.scrollY<2.8*window.innerHeight?v("About"):window.scrollY>=2.8*window.innerHeight&&window.scrollY<3.8*window.innerHeight?v("Projects"):window.scrollY>=3.8*window.innerHeight?v("Blog"):v("")})),Object(r.jsxs)("nav",{className:d?"navbar-items active":"navbar-items",children:[Object(r.jsx)("div",{className:d?"navbar-background active":"navbar-background"}),Object(r.jsxs)("h1",{className:"navbar-logo",onClick:function(){return window.scrollTo({top:0})},children:["Michael Arnold",Object(r.jsx)("a",{href:"https://github.com/michaelarn0ld",target:"_blank",className:"media-links",style:{marginLeft:10},children:Object(r.jsx)("i",{className:"fab fa-github"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/michaelarnoldcpp",target:"_blank",className:"media-links",children:Object(r.jsx)("i",{className:"fab fa-linkedin",children:" "})}),Object(r.jsx)("a",{href:"https://twitter.com/michaelarn0ld_",target:"_blank",className:"media-links",children:Object(r.jsx)("i",{className:"fab fa-twitter-square",children:" "})})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){a(!t),x(!0)},children:Object(r.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("div",{className:"navbar-main",children:[Object(r.jsx)("ul",{style:window.screen.width>960?{}:N,className:t?"nav-menu active":"nav-menu",children:l.map((function(e,n){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:h==e.title?e.activeClassName:e.inactiveClassName,href:e.url,onClick:function(){return a(!1)},children:e.title})},n)}))}),Object(r.jsx)(j,{children:"Contact"})]})]})},m=(t(13),function(e){var n=e.id;return Object(r.jsxs)("div",{id:n,className:"content-home-wrapper",children:[Object(r.jsx)("div",{className:"content-home-upper",children:Object(r.jsx)("h1",{children:"Hello World"})}),Object(r.jsx)("div",{className:"content-home-middle",children:Object(r.jsx)("h1",{children:"Hello Middle"})}),Object(r.jsx)("div",{className:"content-home-lower",children:Object(r.jsx)("h1",{children:"Hello Lower"})})]})}),u=(t(14),function(e){var n=e.id;return Object(r.jsx)("div",{id:n,className:"content-about-wrapper",children:Object(r.jsx)("h1",{children:"About"})})}),h=(t(15),function(e){var n=e.id;return Object(r.jsx)("div",{id:n,className:"content-projects-wrapper",children:Object(r.jsx)("h1",{children:"Projects"})})}),v=(t(16),function(e){var n=e.id;return Object(r.jsx)("div",{id:n,className:"content-blog-wrapper",children:Object(r.jsx)("h1",{children:"Blog"})})});var w=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"landing-page",children:[Object(r.jsx)("div",{className:"nav-wrapper",children:Object(r.jsx)(b,{})}),Object(r.jsx)("div",{className:"landing-body",children:"Hi, I'm Michael."}),Object(r.jsxs)("div",{className:"content-wrapper",children:[Object(r.jsx)(m,{id:"home"}),Object(r.jsx)(u,{id:"about"}),Object(r.jsx)(h,{id:"projects"}),Object(r.jsx)(v,{id:"blog"})]})]})})};c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.91591571.chunk.js.map