(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={Wrapper:"HW5_Wrapper__2doXI",Chapter:"HW5_Chapter__3Jibf",NameChapter:"HW5_NameChapter__1rgPa",section:"HW5_section__3BZIj",default:"HW5_default__3BGYn",red:"HW5_red__xtT6W",superInput:"HW5_superInput__1lS06",errorInput:"HW5_errorInput__15iwE",error:"HW5_error__2U-_6",h7Wrapper:"HW5_h7Wrapper__1Gi7G",container:"HW5_container__13FGP",label:"HW5_label__1Jdkx",checked:"HW5_checked__1MK-H",input:"HW5_input__bW1AE",text:"HW5_text__3kFT8"}},,,,,function(e,a,t){e.exports={navBar:"Header_navBar__1LTT4",sideBar:"Header_sideBar__1-9da",navBarEl:"Header_navBarEl__3vo6i",activeLink:"Header_activeLink__28Ap6",SlideSideBar:"Header_SlideSideBar__3H-YI",CloseSlideSideBar:"Header_CloseSlideSideBar__3x13N",openbtn:"Header_openbtn__1P8zo"}},,,,,,,function(e,a,t){e.exports={message:"Message_message__297eA",messageInfo:"Message_messageInfo__BmxSv",name:"Message_name__3yFn6",messageContent:"Message_messageContent__1dpLB",messageTime:"Message_messageTime__2Wvlp"}},,,,,,,,,,function(e,a,t){e.exports={App:"App_App__2z0oR",heading:"App_heading__1qBoC"}},function(e,a,t){e.exports={blue:"HW4_blue__3y--U",column:"HW4_column__VrnNB"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Ben2u",spanClassName:"SuperCheckbox_spanClassName__uO1tg"}},,,,,,,function(e,a,t){e.exports={Span:"SuperEditableSpan_Span__R_GeF"}},function(e,a,t){e.exports={ErrorWrapper:"Error404_ErrorWrapper__3CeMl"}},function(e,a,t){e.exports={sortedPeopleWrapper:"HW8_sortedPeopleWrapper__9UkoF"}},function(e,a,t){e.exports={time:"Clock_time__1W3ns"}},,function(e,a,t){e.exports=t.p+"static/media/loader.8ae8a199.svg"},function(e,a,t){e.exports={RouterWrapper:"Router_RouterWrapper__3I9eS"}},function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(44),t(23)),s=t.n(o),i=t(3),u=t(11),m=t(6),d=t.n(m),p=t(4),E=t(13),v=t.n(E);var f=function(e){return r.a.createElement("div",{className:v.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:v.a.messageInfo},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.messageContent},e.message,r.a.createElement("span",{className:v.a.messageTime},e.time))))},h=t(1),_=t.n(h),g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",N="some text",C="22:00";var k=function(){return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 1"),r.a.createElement(f,{avatar:g,name:b,message:N,time:C}),r.a.createElement("hr",null))};var O=function(e){return r.a.createElement("div",{className:_.a.section},r.a.createElement("div",{key:e.affair._id},e.affair.name," ",r.a.createElement("span",null,"Priority: ",e.affair.priority)),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:_.a.default},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:_.a.default,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:_.a.default,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:_.a.default,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:_.a.default,onClick:function(){e.setFilter("low")}},"Low"))};var S=function(){var e=Object(n.useState)([{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,s);return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 2"),r.a.createElement(j,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e=e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null))},y=t(18),W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?_.a.error:_.a.superInput;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:_.a.errorText},l),r.a.createElement("button",{onClick:n,className:_.a.default},"add"),r.a.createElement("span",{className:_.a.countUsersText},c))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1],E=a.length;return r.a.createElement(W,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){""!==o?(t(o),alert("Hello ".concat(o," !")),p("")):p("Enter your name, please!"),console.log(a)},error:d,totalUsers:E})},x=t(52);var B=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 3"),r.a.createElement(w,{users:t,addUserCallback:function(e){var a=[{_id:Object(x.a)(),name:e}].concat(Object(y.a)(t));l(a)}}),r.a.createElement("hr",null))},H=t(7),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(_.a.error," ").concat(o||""),u="".concat(c?_.a.errorInput:_.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u,value:s.value},s)),c&&r.a.createElement("span",{className:i},c))},T=t(24),A=t.n(T),P=function(e){var a=e.red,t=e.className,n=Object(H.a)(e,["red","className"]),l="".concat(a?_.a.red:_.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},F=t(25),U=t.n(F),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var M=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],d=u[1];return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 4"),r.a.createElement("div",{className:A.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c,className:A.a.blue}),r.a.createElement(P,{red:!0,onClick:o},"delete "),r.a.createElement(L,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(L,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null))},J=t(32),R=t.n(J),D=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=l||{},p=d.children,E=d.onDoubleClick,v=(d.className,Object(H.a)(d,["children","onDoubleClick","className"])),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",R.a.Span);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:f},v),p||c.value))};function G(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function K(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}G("test",{x:"A",y:1});K("test",{x:"",y:0});var z=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 6"),r.a.createElement("div",null,r.a.createElement(D,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(P,{onClick:function(){G("editable-span-value",t)}},"save"),r.a.createElement(P,{onClick:function(){var e=K("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(B,null),r.a.createElement(M,null),r.a.createElement(z,null))},Y=t(33),q=t.n(Y);var Z=function(){return r.a.createElement("div",{className:q.a.ErrorWrapper},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},V=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(H.a)(e,["options","onChange","onChangeOption"]),l=a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("select",{onChange:function(e){t&&t(e.currentTarget.value)},value:n.value},l)},$=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("div",{className:_.a.container},r.a.createElement("label",{className:"".concat(_.a.label," ").concat(e===n?_.a.checked:""),key:a+"-"+t},r.a.createElement("input",{className:_.a.input,type:"radio",checked:e===n,onChange:c,value:n,name:a})),r.a.createElement("span",{className:_.a.text},e))})):[];return r.a.createElement(r.a.Fragment,null,o)},Q=["x","y","z"];var ee=function(){var e=Object(n.useState)(Q[0]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter}," homeworks 7"),r.a.createElement("div",{className:_.a.h7Wrapper},r.a.createElement("div",null,r.a.createElement(V,{options:Q,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement($,{name:"radio",options:Q,value:t,onChangeOption:l}))),r.a.createElement("hr",null))},ae=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(y.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):"down"===a.payload?Object(y.a)(e).sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})):e;case"check":return 18===a.payload?e.filter((function(e){return e.age>18})):e;default:return e}},te=t(34),ne=t.n(te),re=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var le=function(){var e=Object(n.useState)(re),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 8"),r.a.createElement("div",{className:ne.a.sortedPeopleWrapper},c),r.a.createElement(P,{onClick:function(){return l(ae(re,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(P,{onClick:function(){return l(ae(re,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(P,{onClick:function(){return l(ae(re,{type:"check",payload:18}))}},"check"),r.a.createElement("hr",null))},ce=t(35),oe=t.n(ce);var se=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],E=d[1],v=function(e){return e<10?"0"+e:e},f=v(s.getHours())+"-"+v(s.getMinutes())+"-"+v(s.getSeconds()),h=(new Date).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{className:oe.a.time},r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),p&&r.a.createElement("div",null,h)),r.a.createElement(P,{onClick:function(){var e=window.setInterval((function(){u(new Date)}),1e3);return l(e),function(){clearInterval(e)}}},"start"),r.a.createElement(P,{onClick:function(){clearInterval(t)}},"stop"))};var ie=function(){return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter},"homeworks 9"),r.a.createElement(se,null),r.a.createElement("hr",null))},ue=t(17),me=t(37),de=t.n(me),pe=t(29),Ee={loading:!1},ve=function(e){return{type:"SET_LOADING",loading:e}};var fe=function(){var e=Object(ue.b)(),a=Object(ue.c)((function(e){return e.loading}));return r.a.createElement("div",{className:_.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:_.a.NameChapter}," homeworks 10"),a.loading?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430...",r.a.createElement("img",{src:de.a})):r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){e(ve(!0)),setTimeout((function(){return e(ve(!1))}),2e3)}},"set loading...")))};var he=function(){return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement(le,null),r.a.createElement(ie,null),r.a.createElement(fe,null))};var _e=function(){return r.a.createElement("div",null)},ge=t(38),be=t.n(ge),Ne="/pre-junior",Ce="/JUNIOR",ke="/JuniorPlus";var Oe=function(){return r.a.createElement("div",{className:be.a.RouterWrapper},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:Ne})}}),r.a.createElement(p.b,{path:Ne,render:function(){return r.a.createElement(X,null)}}),"// add routes",r.a.createElement(p.b,{path:Ce,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(p.b,{path:ke,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(Z,null)}})))};var je=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c="".concat(d.a.openbtn," ").concat(t?d.a.mainBtn:""),o="".concat(d.a.sideBar," ").concat(t?d.a.SlideSideBar:d.a.CloseSlideSideBar);return r.a.createElement("div",{className:d.a.navBar},r.a.createElement("div",{className:d.a.mainBtn},r.a.createElement("button",{className:c,onClick:function(){return l(!t)}},"\u2630 Menu")),r.a.createElement("div",{className:o},r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:Ne,activeClassName:d.a.activeLink},"PRE_JUNIOR")),r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:Ce,activeClassName:d.a.activeLink},"JUNIOR")),r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:ke,activeClassName:d.a.activeLink},"JUNIOR_PLUS"))))};var Se=function(){return r.a.createElement("div",{className:_.a.Wrapper},r.a.createElement(u.a,null,r.a.createElement(je,null),r.a.createElement(Oe,null)))};var ye=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",{className:s.a.heading},"react homeworks:"),r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=t(16),we=Object(We.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(pe.a)(Object(pe.a)({},e),{},{loading:a.loading});default:return e}}}),xe=Object(We.c)(we),Be=xe;window.store=xe,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue.a,{store:Be},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.70a66e16.chunk.js.map