"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{2194:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,u=e(5861),o=e(9439),i=e(4687),s=e.n(i),f=e(2791),p=e(7689),l=e(168),d=e(1087),h=e(6487),v=h.ZP.ul(r||(r=(0,l.Z)(["\n  margin: 15px 0;\n"]))),m=h.ZP.li(a||(a=(0,l.Z)(["\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),g=(0,h.ZP)(d.rU)(c||(c=(0,l.Z)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  :hover {\n    color: #20206e;\n  }\n"]))),x=e(184),k=function(n){var t=n.trending,e=n.loading,r=(0,p.TH)();return(0,x.jsx)(x.Fragment,{children:e?(0,x.jsx)("div",{children:"Loading"}):(0,x.jsx)(v,{children:t.map((function(n){var t=n.id,e=n.title,a=n.name;return(0,x.jsx)(m,{children:(0,x.jsx)(g,{to:"movies/".concat(t),state:{from:r.pathname},children:e||a})},t)}))})})},w=e(4390),Z=function(){var n=(0,f.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),c=(0,o.Z)(a,2),i=c[0],p=c[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,(0,w.Df)();case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)("main",{children:[(0,x.jsx)("h1",{children:"Trending today"}),(0,x.jsx)(k,{trending:e,loading:i})]})}},4390:function(n,t,e){e.d(t,{Df:function(){return i},IR:function(){return l},Jh:function(){return f},Pg:function(){return s},_r:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="e0c732ac82726138cafb99c2ace843bf",i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(o)).catch((function(n){throw new Error("Oops... seems like an error occured.")}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=194.b4865309.chunk.js.map