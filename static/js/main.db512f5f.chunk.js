(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{77:function(e,t,n){},80:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),o=n(136),s=n(135),l=(n(73),n(74),n(75),n(76),n(77),n(57)),d=n(138),u=Object(l.a)({palette:{primary:{main:"#00acc1"},secondary:{main:"#fff"},text:{disabled:"#757575"},action:{}},typography:{fontFamily:["sans-serif"].join(","),button:{letterSpacing:"0.09rem"}}}),j=Object(d.a)(u),p=n(33),b=n(34),m=n(18),g=n(124),f=n(126),x=(n(80),n(128)),O=n(47),h=n(5),v=Object(g.a)((function(e){return{root:{flexGrow:1},title:{textAlign:"center",padding:e.spacing(2),color:"#fff",fontWeight:"bold",letterSpacing:"0.2rem",textTransform:"uppercase"}}}));var y=function(){var e=v();return Object(h.jsx)(f.a,{item:!0,className:e.root,children:Object(h.jsx)(x.a,{position:"fixed",children:Object(h.jsx)(O.a,{variant:"h2",className:e.title,children:"Scoreboard"})})})},C=n(129),S=n(130),N=n(132),k=n(131),F=n(56),I=n.n(F),W=n(137),B=Object(g.a)((function(e){return{listContainer:{position:"relative",paddingBottom:"100px",top:"100px"},itemContainer:{textAlign:"center",padding:e.spacing(2),paddingBottom:e.spacing(1),paddingTop:e.spacing(1),position:"relative"},listItem:{backgroundColor:"#fff",border:"3px solid",padding:e.spacing(1),paddingLeft:e.spacing(4),borderRadius:"5px",minHeight:"60px",fontWeight:"bold"},textContainer:{minHeight:"40px",padding:"8px 0"},nameContainer:{display:"inline-block",width:"90px"},input:{padding:"2px 2px",maxWidth:"100px"},scoreContainer:{padding:"10px",marginLeft:"20px",minHeight:"40px"}}}));var w=function(e){var t=e.players,n=e.activeId,a=e.activateScoreInput,i=e.keyUp,r=e.deletePlayer,c=e.updateScore,o=e.newScore,s=B(),l=function(e){return n===e.id?Object(h.jsxs)("span",{className:s.scoreContainer,children:[e.score," +",Object(h.jsx)("span",{children:Object(h.jsx)(W.a,{id:"newscore",type:"number",autoFocus:!0,value:o,onKeyUp:function(){return i()},onChange:function(e){return c(e)},size:"small",InputProps:{classes:{input:s.input}}})})]}):Object(h.jsx)("span",{className:s.scoreContainer,onClick:function(){return a(e)},children:e.score})};return Object(h.jsx)(f.a,{item:!0,xs:12,md:12,className:s.listContainer,children:t.map((function(e){return Object(h.jsx)(f.a,{item:!0,xs:12,md:12,children:Object(h.jsx)(C.a,{className:s.itemContainer,children:Object(h.jsxs)(S.a,{className:s.listItem,style:{borderColor:e.color},children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(I.a,{onClick:function(){return r(e)}})}),Object(h.jsxs)(N.a,{className:s.textContainer,children:[Object(h.jsx)("span",{className:s.nameContainer,children:e.name}),l(e)]})]})})},e.id)}))})},P=n(24),A=n(133),T=Object(g.a)((function(e){return{button:Object(P.a)({marginTop:e.spacing(2),marginBottom:e.spacing(2),minHeight:"50px",minWidth:"50px",color:"#fff",fontWeight:"bold",borderRadius:"0"},e.breakpoints.down("390"),{minWidth:"60px"})}}));var D=function(e){var t=e.title,n=e.color,a=void 0===n?"primary":n,i=e.onClick,r=e.variant,c=(e.fullWidth,e.elevated),o=void 0===c||c,s=e.disabled,l=void 0!==s&&s,d=T();return Object(h.jsx)(A.a,{variant:r,disableElevation:!o,color:a,style:{color:"secondary"===a?"#fff":"#004750"},onClick:i,className:d.button,fullWidth:!0,disabled:l,children:t})},H=["#060075","#007540","#752200","#750175","#0191B8","#B80000","#F59C00","#F500A0","#91D0F5","#F5D825","#F59292","#00F5C7"],L=Object(g.a)((function(e){return{container:{width:"80%",margin:"auto",position:"relative",top:"100px",padding:e.spacing(2),"& *":{margin:e.spacing(1)}},lengthDisplay:{position:"relative",right:"0",textAlign:"end",margin:"0px"}}}));var E=function(e){var t=e.name,n=e.setName,a=e.setScore,i=e.savePlayer,r=L();return Object(h.jsxs)(f.a,{item:!0,className:r.container,children:[Object(h.jsx)(W.a,{id:"player-name",label:"Name",type:"text",fullWidth:!0,inputProps:{maxLength:12},onChange:function(e){return n(e.target.value)},style:{marginBottom:"2px"}}),Object(h.jsx)("div",{className:r.lengthDisplay,children:12-t.length}),Object(h.jsx)(W.a,{id:"player-score",label:"Initial score",type:"number",fullWidth:!0,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)(D,{variant:"outlined",disableElevation:!0,onClick:i,title:0===t.length?"Cancel":"Save"})]})},M=n(134),R=Object(g.a)((function(e){var t;return{footer:(t={top:"auto",bottom:0,padding:e.spacing(2)},Object(P.a)(t,e.breakpoints.down("321"),{padding:e.spacing(1)}),Object(P.a)(t,"minHeight","100px"),t),buttonContainer:{"& button":{margin:e.spacing(1)}}}}));var U=function(e){var t=e.addAction,n=e.addPlayer,a=e.playerCount,r=e.clearBoard,c=e.resetScores,o=R();return Object(h.jsx)(x.a,{position:"fixed",className:o.footer,children:Object(h.jsxs)(M.a,{className:o.buttonContainer,style:a>0?{margin:"auto"}:{},children:[a>0&&!t&&Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(D,{variant:"outlined",onClick:r,title:"Clear board",color:"secondary"}),Object(h.jsx)(D,{variant:"outlined",color:"secondary",onClick:c,title:"Reset scores"})]}),!t&&Object(h.jsx)(D,{variant:"outlined",color:"secondary",onClick:n,title:"Add player",disabled:12===a,fullWidth:0===a})]})})},J=Object(g.a)((function(e){return{titleContainer:{textAlign:"center",position:"relative",top:"100px"},container:{height:"100%",position:"relative",minWidth:"360px"}}}));var z=function(){var e=J(),t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(""),j=Object(m.a)(u,2),g=j[0],x=j[1],O=Object(a.useState)(0),v=Object(m.a)(O,2),C=v[0],S=v[1],N=Object(a.useState)(""),k=Object(m.a)(N,2),F=k[0],I=k[1],W=Object(a.useState)(0),B=Object(m.a)(W,2),P=B[0],A=B[1],T=Object(a.useState)(void 0),D=Object(m.a)(T,2),L=D[0],M=D[1],R=Object(a.useState)(Object(b.a)(H)),z=Object(m.a)(R,2),G=z[0],K=z[1],q=function(){x(""),S(0)},Q=function(){var e=Object(b.a)(G),t=Math.floor(Math.random()*e.length),n=e[t];return e.splice(t,1),K(e),n};return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{}),Object(h.jsxs)(f.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"stretch",className:e.container,children:[!l&&Object(h.jsxs)(i.a.Fragment,{children:[0===r.length&&Object(h.jsx)(f.a,{item:!0,className:e.titleContainer,children:Object(h.jsx)("h2",{children:"Begin by adding players!"})}),Object(h.jsx)(w,{players:r,activeId:P,activateScoreInput:function(e){A(e.id)},keyUp:function(){void 0!==L&&clearTimeout(L);var e=parseInt(F),t=setTimeout((function(){M(void 0);var t=r.map((function(t){return t.id===P?Object(p.a)(Object(p.a)({},t),{},{score:parseInt(t.score)+(isNaN(e)?0:e)}):t}));c(t),A(0),I("")}),750);M(t)},updateScore:function(e){I(e.target.value)},newScore:F,deletePlayer:function(e){var t=r.filter((function(t){return t.id!==e.id}));c(t)}})]}),l&&Object(h.jsx)(E,{name:g,setName:x,setScore:S,savePlayer:function(){if(d(!1),0!==g.trim().length){var e={id:r.length+1,name:g,score:C,color:Q()};c([].concat(Object(b.a)(r),[e])),q()}else q()}})]}),Object(h.jsx)(U,{addPlayer:function(){r.length<12&&(A(0),d(!0))},addAction:l,playerCount:r.length,clearBoard:function(){K(Object(b.a)(H)),A(0),c([])},resetScores:function(){var e=r.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{score:0})}));c(e)}})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsxs)(s.a,{theme:j,children:[Object(h.jsx)(o.a,{}),Object(h.jsx)(z,{})]})}),document.getElementById("root")),G()}},[[89,1,2]]]);
//# sourceMappingURL=main.db512f5f.chunk.js.map