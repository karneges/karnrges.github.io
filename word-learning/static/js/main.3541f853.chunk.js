(this["webpackJsonpenglish-words"]=this["webpackJsonpenglish-words"]||[]).push([[0],{157:function(e,t,n){e.exports=n(279)},162:function(e,t,n){},163:function(e,t,n){},256:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),l=n.n(r),o=(n(162),n(89)),i=n(23),u=n(24),m=(n(163),n(164),n(290)),s=n(39),d=function(e){var t=e.stateOfRows,n=e.values,r=e.fontSize,l=function(e,t){p((function(e){return(null===e||void 0===e?void 0:e.includes(+t.index))?null===e||void 0===e?void 0:e.filter((function(e){return e!==+t.index})):[].concat(Object(i.a)(e),[+t.index])}))};Object(a.useEffect)((function(){"close"===t.type&&p([]),"open"===t.type&&p(n.map((function(e){return+e.id})))}),[t]);var o=Object(a.useState)([]),d=Object(u.a)(o,2),f=d[0],p=d[1];return c.a.createElement(m.a,{fluid:!0,styled:!0},n.map((function(e,t){var n=e.word,a=e.translate,o=e.id;return c.a.createElement("div",{key:o,style:{fontSize:r}},c.a.createElement(m.a.Title,{style:{padding:"5px",paddingBottom:"0px"},active:null===f||void 0===f?void 0:f.includes(+o),index:o,onClick:l},c.a.createElement(s.a,{name:"dropdown"}),n),c.a.createElement(m.a.Content,{style:{padding:"5px",paddingLeft:"30px",paddingTop:"0px"},active:null===f||void 0===f?void 0:f.includes(+o)},c.a.createElement("p",null,a)))})))},f=n(292),p=n(293),E=n(291),v=n(289),b=n(288),O=(n(256),function(e){var t=e.callBack,n=Object(a.useState)(20),r=Object(u.a)(n,2),l=r[0],o=r[1];Object(a.useEffect)((function(){t(l+"px")}),[l]);return c.a.createElement(E.a.Group,null,c.a.createElement(E.a,{onClick:function(){o((function(e){return e+1}))}},"+ FontSize"),c.a.createElement(E.a.Or,{text:l}),c.a.createElement(E.a,{onClick:function(){o((function(e){return e-1}))},positive:!0},"- FontSize"))});var j=function(){var e=Object(a.useState)({type:"close"}),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(),m=Object(u.a)(l,2),s=m[0],j=m[1],y=Object(a.useState)("20px"),w=Object(u.a)(y,2),x=w[0],S=w[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{columns:2,stackable:!0},c.a.createElement(f.a.Column,{width:3},s&&c.a.createElement("div",{style:{position:"fixed"}},c.a.createElement(p.a,{className:"action-buttons"},c.a.createElement(O,{callBack:S}),c.a.createElement(E.a,{content:"Shuffle",primary:!0,onClick:function(){j((function(e){return Object(i.a)(e.sort((function(){return Math.random()-.5})))}))}}),c.a.createElement(E.a,{content:"Swap",primary:!0,onClick:function(){j((function(e){return null===e||void 0===e?void 0:e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{word:e.translate,translate:e.word})}))}))}})),c.a.createElement(p.a,{className:"action-buttons"},c.a.createElement("div",null,c.a.createElement(E.a,{content:"Open All",primary:!0,onClick:function(){return r({type:"open"})}}),c.a.createElement(E.a,{content:"Close All",secondary:!0,onClick:function(){return r({type:"close"})}}))))),c.a.createElement(f.a.Column,null,s&&c.a.createElement(p.a.Group,null,c.a.createElement(p.a,null,c.a.createElement(d,{stateOfRows:n,values:s,fontSize:x}))),c.a.createElement(p.a,null,c.a.createElement(v.a,{onSubmit:function(e,t){j(e.target.elements[0].value.replace(/ \u2014 /,"-").split("-").map((function(e){return e.trim()})).reduce((function(e,t){var n=t.split("\n").map((function(e){return e.trim()})).filter((function(e){return!!e}));return[].concat(Object(i.a)(e),Object(i.a)(n))}),[]).reduce((function(e,t,n,a){var c={};return n%2!==0&&(c={word:a[n-1],translate:a[n],id:n.toString()}),c.word?[].concat(Object(i.a)(e),[c]):e}),[]))}},c.a.createElement(b.a,{name:"text-area",placeholder:"Tell us more",style:{minHeight:100}}),c.a.createElement(E.a,{content:"Submit",warning:!0,type:"submit"}))))))};l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.3541f853.chunk.js.map