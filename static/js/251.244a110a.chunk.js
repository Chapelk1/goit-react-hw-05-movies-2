"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[251],{798:function(n,e,t){t.d(e,{ac:function(){return a},qD:function(){return d},sI:function(){return c},vf:function(){return h},yw:function(){return s}});var i=t(683),r=t(243),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA"}};function a(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",o)}function c(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n),o)}function s(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),o)}function d(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),o)}function h(n){var e={params:{query:"".concat(n)}};return r.Z.get("https://api.themoviedb.org/3/search/movie",(0,i.Z)((0,i.Z)({},o),e))}},251:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i,r,o,a,c,s,d,h,l,p=t(439),u=t(689),x=t(791),g=t(798),m=t(168),f=t(87),v=t(686),Z=(0,v.Z)(f.rU)(i||(i=(0,m.Z)(["\n  display: inline-block;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  background-color: #34424f;\n\n  &:hover {\n    color: white;\n    background-color: teal;\n    border-color: teal;\n  }\n"]))),j=v.Z.div(r||(r=(0,m.Z)(["\n display: flex;\n gap: 40px;\n padding-top: 20px;\n padding-bottom: 20px;\n"]))),w=v.Z.div(o||(o=(0,m.Z)(["\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),b=v.Z.div(a||(a=(0,m.Z)(["\n  max-width: 100%;\n  margin-bottom: 20px;\n"]))),y=v.Z.div(c||(c=(0,m.Z)(["\n  > a:not(:last-child){\n    margin-right: 20px;\n  }\n"]))),I=v.Z.div(s||(s=(0,m.Z)(["\n  \n"]))),_=v.Z.p(d||(d=(0,m.Z)(["\n  font-size: 20px;\n  color: white;\n"]))),k=v.Z.h1(h||(h=(0,m.Z)(["\n  margin-bottom: 12px;\n  color: white;\n"]))),G=v.Z.h2(l||(l=(0,m.Z)(["\n  margin-top: 20px;\n  color: white;\n"]))),J=t(184);function z(){var n,e,t=(0,u.UO)().movieId,i=(0,x.useState)(null),r=(0,p.Z)(i,2),o=r[0],a=r[1],c=null!==(n=null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,x.useEffect)((function(){(0,g.sI)(t).then((function(n){a(n.data)})).catch((function(n){console.error(n.response.data.status_message)}))}),[t]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Z,{to:c,children:"< Back"}),o&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(j,{children:[(0,J.jsxs)(w,{children:[(0,J.jsx)(b,{children:(0,J.jsx)("img",{src:o.poster_path?"https://image.tmdb.org/t/p/original".concat(o.poster_path):"https://fakeimg.pl/400x600",alt:o.title})}),(0,J.jsxs)(y,{children:[(0,J.jsx)(Z,{to:"cast",state:{from:c},children:"Cast"}),(0,J.jsx)(Z,{to:"reviews",state:{from:c},children:"Reviews"})]})]}),(0,J.jsxs)(I,{children:[(0,J.jsx)(k,{children:o.title}),(0,J.jsxs)(_,{children:["Vote averages: ",o.vote_average.toFixed(1)]}),(0,J.jsx)(G,{children:"Overview"}),(0,J.jsx)(_,{children:o.overview}),(0,J.jsx)(G,{children:"Genres"}),o.genres.map((function(n){return(0,J.jsx)(_,{children:n.name},n.name)}))]})]}),(0,J.jsx)(x.Suspense,{fallback:(0,J.jsx)(_,{children:"Loading subpage..."}),children:(0,J.jsx)(u.j3,{})})]})]})}}}]);
//# sourceMappingURL=251.244a110a.chunk.js.map