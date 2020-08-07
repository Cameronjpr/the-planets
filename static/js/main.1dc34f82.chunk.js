(this["webpackJsonpthe-planets"]=this["webpackJsonpthe-planets"]||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},21:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),l=(t(21),t(5)),i=t(8),u=Object(i.b)({name:"card",initialState:{value:2},reducers:{increment:function(e){return e.value+=1},decrement:function(e){return e.value-=1},setValue:function(e,n){e.value=n.payload}}}),m=u.actions,d=(m.increment,m.decrement,m.setValue),s=function(e){return e.card.value},f=u.reducer,p=t(2),v=t(3);function E(){var e=Object(p.a)(["\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex: none;\n  width: 100%;\n  flex-flow: row nowrap;\n  scroll-snap-type: x mandatory;\n"]);return E=function(){return e},e}var h=v.a.section(E());function b(){var e=Object(p.a)(["\n  width: 44px;\n  height: 44px;\n"]);return b=function(){return e},e}function g(){var e=Object(p.a)(["\n  width: 100px;\n  height: 100px;\n"]);return g=function(){return e},e}function w(){var e=Object(p.a)(["\n  scroll-snap-align: center;\n  scroll-padding: 50%;\n  color: white;\n  background: black;\n  margin: 5px;\n  min-width: 100%;\n  border-radius: 5px;\n"]);return w=function(){return e},e}var k=v.a.article(w()),y=v.a.img(g()),x=v.a.img(b());function j(e){var n=e.name,t=e.color,o=e.description,c=e.days,l=e.dist,i=e.focused,u=Object(r.useRef)(null);return Object(r.useEffect)((function(){u.current&&i&&(console.log(i,u.current),u.current.scrollIntoView({behavior:"smooth",block:"center"}))})),a.a.createElement(k,{ref:u},a.a.createElement("h1",{style:{color:t}},n),a.a.createElement(y,{src:"/the-planets"+"/img/".concat(n,".png")}),a.a.createElement("p",null,o),c&&l&&a.a.createElement("p",null,a.a.createElement("ul",null,a.a.createElement("li",null,"Days to orbit: ",c),a.a.createElement("li",null,"Distance to sun: ",l))))}var O=[{id:0,name:"Mercury",color:"#CCCBCB",revolutionPeriod:88,distToSun:"57m km"},{id:1,name:"Venus",color:"#E2CEBC",revolutionPeriod:224,distToSun:"108m km"},{id:2,name:"Earth",color:"#9EBAE4",revolutionPeriod:365,distToSun:"149m km"},{id:3,name:"Mars",color:"#E9A08A",revolutionPeriod:687,distToSun:"227m km"},{id:4,name:"Jupiter",color:"#C89343",revolutionPeriod:4333,distToSun:"778m km"},{id:5,name:"Saturn",color:"#D9BCA1",revolutionPeriod:10759,distToSun:"1.4bn km"},{id:6,name:"Uranus",color:"#89AFA8",revolutionPeriod:30687,distToSun:"2.8bn km"},{id:7,name:"Neptune",color:"#829BE3",revolutionPeriod:60190,distToSun:"4.4bn km"}];function S(){var e=Object(p.a)(["\n  display: inline;\n  @media (max-width: 600px) {\n    flex: 1 0 21%;\n  }\n  color: lightgrey;\n  background: black;\n  border: none;\n"]);return S=function(){return e},e}function T(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: center;\n"]);return T=function(){return e},e}var C=v.a.ul(T()),P=v.a.li(S());function B(e){var n=e.current;console.log(n);var t=Object(l.b)();return a.a.createElement("nav",null,a.a.createElement(C,null,O.map((function(e){return a.a.createElement(P,null,a.a.createElement("button",{key:e.id,onClick:function(){return n=e.id,void t(d(n));var n}},a.a.createElement(x,{alt:"The planet ".concat(e.name),src:"/the-planets"+"/img/".concat(e.name,".png")})),a.a.createElement("h3",null,e.name.slice(0,2)))}))))}var A=function(){var e=Object(l.c)(s);return a.a.createElement("main",null,a.a.createElement(h,{className:"scroller"},O.map((function(n,t){return a.a.createElement(j,{key:t,name:n.name,color:n.color,days:n.revolutionPeriod,dist:n.distToSun,focused:e===n.id})}))),a.a.createElement(B,{current:e}))};var V=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(A,null))},D=Object(i.a)({reducer:{card:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:D},a.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1dc34f82.chunk.js.map