"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[48],{798:function(t,n,e){e.d(n,{ac:function(){return c},qD:function(){return u},sI:function(){return a},vf:function(){return h},yw:function(){return s}});var r=e(683),i=e(243),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA"}};function c(){return i.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",o)}function a(t){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(t),o)}function s(t){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),o)}function u(t){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),o)}function h(t){var n={params:{query:"".concat(t)}};return i.Z.get("https://api.themoviedb.org/3/search/movie",(0,r.Z)((0,r.Z)({},o),n))}},48:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r,i,o,c,a,s=e(439),u=e(689),h=e(791),d=e(798),l=e(168),f=e(686),Z=f.Z.ul(r||(r=(0,l.Z)(["\nlist-style: none;\npadding-bottom: 40px;\n"]))),p=f.Z.li(i||(i=(0,l.Z)(["\n  max-width: 500px;\n\n  &:not(:last-child){\n    margin-bottom: 40px;\n  }\n"]))),m=f.Z.h3(o||(o=(0,l.Z)(["\n  color: white;\n  margin-bottom: 20px;\n"]))),v=f.Z.p(c||(c=(0,l.Z)(["\n  color: white;\n"]))),g=e(184);function j(t){var n=t.reviews;return(0,g.jsx)(Z,{children:n.results.map((function(t){return(0,g.jsxs)(p,{children:[(0,g.jsxs)(m,{children:[(0,g.jsx)("b",{children:"Author:"})," ",t.author]}),(0,g.jsx)(v,{children:t.content})]},t.id)}))})}var w=f.Z.p(a||(a=(0,l.Z)(["\n    color: white;\n"])));function x(){var t=(0,u.UO)().movieId,n=(0,h.useState)(null),e=(0,s.Z)(n,2),r=e[0],i=e[1],o=(0,h.useState)(!1),c=(0,s.Z)(o,2),a=c[0],l=c[1];return(0,h.useEffect)((function(){(0,d.qD)(t).then((function(t){0!==t.data.total_pages?(i(t.data),l(!1)):l(!0)})).catch((function(t){l(!0),console.error(t.response.data.status_message)}))}),[t]),(0,g.jsxs)(g.Fragment,{children:[a&&(0,g.jsx)(w,{children:"We don`t have any reviews for this movie."}),r&&(0,g.jsx)(j,{reviews:r})]})}}}]);
//# sourceMappingURL=48.f50af564.chunk.js.map