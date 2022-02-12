"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[46],{2104:function(n,t,r){r.d(t,{$4:function(){return Z},Dx:function(){return h},US:function(){return w},jJ:function(){return v},sj:function(){return b},eW:function(){return y},H2:function(){return P},MW:function(){return _},Ei:function(){return k},Xb:function(){return j}});var e,o,i,a,c,u,p,s,f,l,x,d=r(168),m=r(5751),g=r(501),h=(m.ZP.section(e||(e=(0,d.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),m.ZP.h1(o||(o=(0,d.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText}))),v=(0,m.ZP)(g.OL)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n"]))),Z=m.ZP.div(a||(a=(0,d.Z)(["\n  padding: 0 10px;\n"]))),w=m.ZP.h2(c||(c=(0,d.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),b=m.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText})),y=m.ZP.ul(p||(p=(0,d.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),P=m.ZP.li(s||(s=(0,d.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.buttonBg})),_=m.ZP.p(f||(f=(0,d.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.active})),k=m.ZP.img(l||(l=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  max-width: 300px;\n"]))),j=m.ZP.img(x||(x=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  width: 100%;\n"])))},46:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,o,i,a,c=r(5861),u=r(885),p=r(7757),s=r.n(p),f=r(2791),l=r(6871),x=r(4234),d=r(2104),m=r(168),g=r(5751),h=(g.ZP.div(e||(e=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g.ZP.li(o||(o=(0,m.Z)(["\n  border: 1px solid ",";\n  border-radius: 15px 15px 0 0;\n  padding: 15px;\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.active}))),v=g.ZP.ul(i||(i=(0,m.Z)([""]))),Z=g.ZP.p(a||(a=(0,m.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.active})),w=r(184);function b(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],o=(0,l.UO)().moviesId;return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.Bt)(o).then((function(n){return e(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[o]),0===r.length?(0,w.jsx)(d.Dx,{children:"No reviews for this movie"}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(v,{children:r.map((function(n){return(0,w.jsxs)(h,{children:[(0,w.jsxs)(d.sj,{children:[n.author," :"]}),(0,w.jsx)(Z,{children:n.content})]},n.id)}))})})}},4234:function(n,t,r){r.d(t,{KJ:function(){return l},Ai:function(){return x},Y5:function(){return d},y:function(){return m},Bt:function(){return g}});var e=r(5861),o=r(7757),i=r.n(o),a=r(4569),c=r.n(a),u="https://api.themoviedb.org/3/",p="02589241ae4d8ab43f8f4c55a27ffcb3";function s(){return f.apply(this,arguments)}function f(){return f=(0,e.Z)(i().mark((function n(){var t,r,e,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,c().get(t,r);case 4:return e=n.sent,n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return s("".concat(u,"/trending/movie/day?api_key=").concat(p))}function x(n){return s("".concat(u,"search/movie?api_key=").concat(p,"&query=").concat(n,"&language=en-US&include_adult=false"))}function d(n){return s("".concat(u,"movie/").concat(n,"?api_key=").concat(p,"&language=en-US"))}function m(n){return s("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(p,"&language=en-US&"))}function g(n){return s("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(p,"&language=en-US&"))}}}]);
//# sourceMappingURL=46.4bac5257.chunk.js.map