(this.webpackJsonpmomentum=this.webpackJsonpmomentum||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(5),a=c.n(n),i=c(21),r=c.n(i),o=(c(67),c(35),c(19)),j=c(12),l=c(13),d=c(119),b=c(120),m=c(28),u=c.n(m),O=c(58),h=c(59),x=c(57),f=c(118),p=c(54),v=c.n(p),g=c(60).a.initializeApp({apiKey:"AIzaSyB-xBRkOfQngJbam008_bBkWgA3ibe2rVA",authDomain:"momentum-e7bef.firebaseapp.com",databaseURL:"https://momentum-e7bef.firebaseio.com",projectId:"momentum-e7bef",storageBucket:"momentum-e7bef.appspot.com",messagingSenderId:"406851941644",appId:"1:406851941644:web:726535e010f14827f90529",measurementId:"G-D19B5CEBGM"});var N=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],i=function(){return a(!c)},r=Object(n.useState)(!1),m=Object(l.a)(r,2),p=m[0],N=m[1],w=function(){return N(!p)},y=Object(n.useState)([{name:"",email:"",password:"",uid:"",weather:"",time:"",focus:""}]),S=Object(l.a)(y,2),C=S[0],I=S[1],k=Object(n.useState)(""),T=Object(l.a)(k,2),E=T[0],A=T[1],B=Object(n.useState)([]),P=Object(l.a)(B,2),q=P[0],D=P[1],F=Object(n.useState)(!1),G=Object(l.a)(F,2),M=G[0],W=G[1],z=Object(n.useState)("name"),R=Object(l.a)(z,2),L=R[0],Q=R[1],H=Object(n.useState)(""),J=Object(l.a)(H,2),_=J[0],K=J[1],U=Object(n.useState)([]),V=Object(l.a)(U,2),X=(V[0],V[1]),Y=Object(n.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ce=Object(l.a)(te,2),se=ce[0],ne=ce[1],ae=Object(n.useState)(!0),ie=Object(l.a)(ae,2),re=ie[0],oe=ie[1],je=Object(n.useState)(!0),le=Object(l.a)(je,2),de=le[0],be=le[1],me=Object(n.useState)(!0),ue=Object(l.a)(me,2),Oe=ue[0],he=ue[1],xe=Object(n.useState)(""),fe=Object(l.a)(xe,2),pe=fe[0],ve=fe[1];Object(n.useEffect)((function(){!function(){var e=new Date,t=(e.getHours()<10?"0":"")+e.getHours(),c=(e.getMinutes()<10?"0":"")+e.getMinutes();ee(t),A(t+":"+c)}()}));var ge=function(e){W(!0),I(Object(j.a)(Object(j.a)({},C),{},Object(o.a)({},e.target.name,e.target.value)))},Ne=function(e){W(!0),I(Object(j.a)(Object(j.a)({},C),{},Object(o.a)({},e.target.name,e.target.value)))},we=function(e){e.target.value="",Q("email")},ye=function(e){Q("password"),console.log(C)},Se=function(e){W(!0),I(Object(j.a)(Object(j.a)({},C),{},Object(o.a)({},e.target.name,e.target.value)))},Ce=function(){g.auth().signInWithEmailAndPassword(C.email,C.password).then((function(e){console.log(e),ne(e.operationType),D(e),"signIn"===e.operationType?Q("dashboard"):Q("name")})).catch((function(e){console.log(e)}))},Ie=function(){var e=new g.firebase_.auth.GoogleAuthProvider;g.auth().signInWithPopup(e).then((function(e){D(e),ne(e.operationType),"signIn"===e.operationType?(Q("dashboard"),I(Object(j.a)(Object(j.a)({},C),{},{uid:e.user.uid,email:e.user.email}))):Q("name")})).catch((function(e){console.log(e)}))},ke=function(e){K(Object(j.a)(Object(j.a)({},_),{},Object(o.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){C.uid&&g.database().ref("userDetails").push(C)}),[]);var Te=function(){he(!1),console.log("todo submit")};Object(n.useEffect)((function(){g.database().ref("userDetails").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),X(t)}))}),[]),Object(n.useEffect)((function(){v.a.get("http://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=bfc873dcbfd97dce32a13927f3563bf9").then((function(e){ve(e.data)})).catch((function(e){console.error(e.message)}))}),[]);var Ee=function(){K(""),he(!0)},Ae=function(){Q("name")},Be=Object(n.useState)("general"),Pe=Object(l.a)(Be,2),qe=Pe[0],De=Pe[1],Fe=function(){De("general")},Ge=function(){De("question")};return Object(s.jsxs)("div",{className:" main",children:[Object(s.jsx)("div",{className:"col-sm-12 col-xm-12 hd",children:"dashboard"===L?Object(s.jsx)("div",{children:"signIn"===se?Object(s.jsx)("div",{class:"weather",children:!0===re?function(){if("signIn"===se)return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsxs)("h3",{children:[Object(s.jsx)(f.a,{placement:"right",isOpen:c,target:"TooltipExample",toggle:i,children:pe.weather[0].description}),Object(s.jsx)("img",{id:"TooltipExample",src:"http://openweathermap.org/img/w/"+pe.weather[0].icon+".png",alert:""}),Math.floor(pe.main.temp-273.15),Object(s.jsx)("sup",{children:"\xb0c"})]})}),Object(s.jsx)("span",{children:pe.name})]})}():[]}):[]}):[]}),Object(s.jsx)("div",{className:"col-sm-12 col-xm-12 mid ",children:"name"===L?Object(s.jsxs)("div",{class:"home",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("span",{className:"title",children:"Hello, what's your name?"})}),Object(s.jsx)("form",{onSubmit:function(e){return we(e)},children:Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("input",{type:"text",onChange:ge,className:"in",name:"name",required:!0})})}),Object(s.jsx)("div",{className:"text-center mt-3",children:!1===M?[]:Object(s.jsx)("button",{type:"submit",onClick:function(e){return we(e)},className:"btn",children:"Continue"})})]}):"email"===L?Object(s.jsxs)("div",{class:"home",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsxs)("span",{className:"title",children:["What's your email,",C.name,"?"]})}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("input",{type:"email",onChange:Ne,name:"email",className:"in",required:!0})}),Object(s.jsx)("div",{className:"text-center mt-3",children:!1===M?[]:Object(s.jsx)("button",{onClick:ye,className:"btn",children:"Continue"})}),Object(s.jsxs)("div",{type:"submit",className:"mt-5 border p-2",style:{cursor:"pointer"},onClick:Ie,children:[Object(s.jsx)("span",{style:{color:"#fff"},children:"SignIn with "}),Object(s.jsx)(x.a,{style:{fontSize:"30px",cursor:"pointer"}})]})]}):"password"===L?Object(s.jsxs)("div",{class:"home",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("span",{className:"title",children:"Please Choose a password."})}),Object(s.jsx)("form",{onSubmit:Ce,children:Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("input",{type:"password",onChange:Se,name:"password",className:"in",required:!0})})}),Object(s.jsx)("div",{className:"text-center mt-3",children:!1===M?[]:Object(s.jsx)("button",{onClick:Ce,className:"btn",children:"Continue"})})]}):"dashboard"===L&&"signIn"===se?Object(s.jsxs)("div",{class:"home",children:[Object(s.jsx)("div",{class:"clock",children:Object(s.jsxs)("span",{class:"time",children:[" ",!0===de?E:[]]})}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsxs)("span",{className:"title",children:["Good"," ",$<12?"Morning":$<15?"Afternoon":"Evening",",",C.name]})}),!0===Oe?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("span",{className:"focus",children:"What is your main focus for today?"})}),Object(s.jsx)("form",{onSubmit:Te,children:Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("input",{type:"text",onChange:ke,name:"todo",className:"in",required:!0})})})]}):[],!1===Oe?Object(s.jsxs)("div",{className:"text-center mt-3",children:[Object(s.jsx)("span",{style:{color:"#fff",marginRight:"7px"},children:_.todo}),Object(s.jsx)(O.a,{onClick:Ee,style:{color:"red",cursor:"pointer"}})]}):[],Object(s.jsx)(d.a,{placement:"bottom",isOpen:p,target:"Popover1",toggle:w,children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-4",style:{borderRight:"1px solid #000"},children:[Object(s.jsx)("div",{children:Object(s.jsx)("h5",{onClick:Fe,className:"bar",children:"General"})}),Object(s.jsx)("div",{children:Object(s.jsx)("h5",{onClick:Ge,className:"bar",children:"Question"})})]}),Object(s.jsxs)("div",{className:"col-6",children:["general"===qe?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h4",{children:"General"})}),Object(s.jsx)("div",{children:Object(s.jsx)("span",{children:" Customize your dashboard"})}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsx)("div",{className:"col-8",children:"Weather : "}),Object(s.jsx)("div",{className:"col-4 ",children:Object(s.jsx)(u.a,{value:re||!1,onToggle:function(e){oe(!re),I(Object(j.a)(Object(j.a)({},C),{},{weather:re}))}})})]}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsx)("div",{className:"col-8",children:"Time : "}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)(u.a,{value:de||!1,onToggle:function(e){be(!de),I(Object(j.a)(Object(j.a)({},C),{},{time:de}))}})})]}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsx)("div",{className:"col-8",children:"Question : "}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)(u.a,{value:Oe||!1,onToggle:function(e){he(!Oe),I(Object(j.a)(Object(j.a)({},C),{},{focus:Oe}))}})})]})]}):[],"question"===qe?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h5",{children:"Question "})}),Object(s.jsxs)("div",{children:["* ",_.todo]})]}):[]]})]})}),Object(s.jsxs)("div",{children:["Name:",C.name]}),Object(s.jsxs)("div",{children:["Email:",q.user.email]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"text-center border mt-3 logout",onClick:Ae,children:Object(s.jsx)("span",{children:"Logout"})})})]})})]}):void 0}),Object(s.jsx)("div",{className:"col-sm-12 col-xm-12 footer",children:"dashboard"===L?Object(s.jsx)("div",{children:"signIn"===se?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:{marginRight:"auto",marginBottom:"0"},children:Object(s.jsx)(h.a,{id:"Popover1",style:{fontSize:"25px",color:"#fff",cursor:"pointer"}})}),Object(s.jsx)("div",{className:"text-center",style:{color:"#fff"},children:'"So many of our dreams at first seem impossible. Then they seem improbable. And then, when we summon the will, they soon become inevitable."'})]}):[]}):[]})]})};var w=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(N,{})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(115);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(w,{style:{background:"#ddd"}})}),document.getElementById("root")),y()},35:function(e,t,c){},67:function(e,t,c){}},[[116,1,2]]]);