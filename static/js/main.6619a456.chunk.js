(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={Wrapper:"HW5_Wrapper__2doXI",Chapter:"HW5_Chapter__3Jibf",NameChapter:"HW5_NameChapter__1rgPa",section:"HW5_section__3BZIj",red:"HW5_red__xtT6W",errorInput:"HW5_errorInput__15iwE",error:"HW5_error__2U-_6",container:"HW5_container__13FGP"}},,,,,,function(e,a,t){e.exports={navBar:"Header_navBar__1LTT4",sideBar:"Header_sideBar__1-9da",navBarEl:"Header_navBarEl__3vo6i",activeLink:"Header_activeLink__28Ap6",SlideSideBar:"Header_SlideSideBar__3H-YI",CloseSlideSideBar:"Header_CloseSlideSideBar__3x13N",openbtn:"Header_openbtn__1P8zo"}},,,,,function(e,a,t){e.exports={default:"SuperButton_default__2fHeI"}},,function(e,a,t){e.exports={rangeContainer:"SuperRange_rangeContainer__2be7s",rangeSliderContainer:"SuperRange_rangeSliderContainer__1yvfq",rangeValue:"SuperRange_rangeValue__1_Kdh",range:"SuperRange_range__3NQgV"}},,,function(e,a,t){e.exports={label:"SuperCheckbox_label__2QCAI",checkbox:"SuperCheckbox_checkbox__Ben2u",check:"SuperCheckbox_check__1y62Y",indicator:"SuperCheckbox_indicator__2fr7e",text:"SuperCheckbox_text__3FkZm",styledText:"SuperCheckbox_styledText__3SFCt"}},,function(e,a,t){e.exports={message:"Message_message__297eA",messageInfo:"Message_messageInfo__BmxSv",name:"Message_name__3yFn6",messageContent:"Message_messageContent__1dpLB",messageTime:"Message_messageTime__2Wvlp"}},,,,function(e,a,t){e.exports={doubleRangeContainer:"SuperDoubleRange_doubleRangeContainer__16EWL",rangeSlider:"SuperDoubleRange_rangeSlider__13X8f",rangeValue:"SuperDoubleRange_rangeValue__2OHb_"}},,function(e,a,t){e.exports={label:"SuperRadio_label__3BsSi",checked:"SuperRadio_checked__2oasv",input:"SuperRadio_input__shZXA",text:"SuperRadio_text__24kww"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2LBJ0"}},,function(e,a,t){e.exports={App:"App_App__2z0oR",heading:"App_heading__1qBoC"}},function(e,a,t){e.exports={blue:"HW4_blue__3y--U",column:"HW4_column__VrnNB"}},,function(e,a,t){e.exports={dark:"HW12_dark__1x6y8","dark-text":"HW12_dark-text__17gPe",red:"HW12_red__1juGC","red-text":"HW12_red-text__yHLXZ",some:"HW12_some__34sCw","some-text":"HW12_some-text__vMEIt"}},,,,,,,,,,,,,function(e,a,t){e.exports={Span:"SuperEditableSpan_Span__R_GeF"}},function(e,a,t){e.exports={ErrorWrapper:"Error404_ErrorWrapper__3CeMl"}},function(e,a,t){e.exports={box:"SuperSelect_box__Tnkal"}},function(e,a,t){e.exports={h7Wrapper:"HW7_h7Wrapper__ITfvM"}},function(e,a,t){e.exports={sortedPeopleWrapper:"HW8_sortedPeopleWrapper__9UkoF"}},function(e,a,t){e.exports={time:"Clock_time__1W3ns"}},,function(e,a,t){e.exports=t.p+"static/media/loader.8ae8a199.svg"},,function(e,a,t){e.exports={checkboxContainer:"Request_checkboxContainer__3j0nb"}},function(e,a,t){e.exports={RouterWrapper:"Router_RouterWrapper__3I9eS"}},function(e,a,t){e.exports=t(87)},,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),l=t.n(c),o=(t(63),t(31)),s=t.n(o),i=t(2),u=t(16),m=t(7),d=t.n(m),p=t(4),E=t(19),v=t.n(E);var _=function(e){return r.a.createElement("div",{className:v.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:v.a.messageInfo},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.messageContent},e.message,r.a.createElement("span",{className:v.a.messageTime},e.time))))},h=t(1),f=t.n(h),g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",C="some text",N="22:00";var k=function(){return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 1"),r.a.createElement(_,{avatar:g,name:b,message:C,time:N}),r.a.createElement("hr",null))},O=t(12),S=t.n(O);var x=function(e){return r.a.createElement("div",{className:f.a.section},r.a.createElement("div",{key:e.affair._id},e.affair.name," ",r.a.createElement("span",null,"Priority: ",e.affair.priority)),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:S.a.default},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:S.a.default,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:S.a.default,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:S.a.default,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:S.a.default,onClick:function(){e.setFilter("low")}},"Low"))};var y=function(){var e=Object(n.useState)([{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("all"),o=Object(i.a)(l,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,s);return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 2"),r.a.createElement(j,{data:m,setFilter:u,deleteAffairCallback:function(e){return c(function(e,a){return e=e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null))},w=t(24),W=t(29),H=t.n(W),B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,c=e.error,l=e.totalUsers,o=c?f.a.error:H.a.superInput;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:f.a.errorText},c),r.a.createElement("button",{onClick:n,className:S.a.default},"add"),r.a.createElement("span",{className:f.a.countUsersText},l))},T=function(e){var a=e.users,t=e.addUserCallback,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1],E=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){""!==o?(t(o),alert("Hello ".concat(o," !")),p("")):p("Enter your name, please!"),console.log(a)},error:d,totalUsers:E})},R=t(89);var I=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 3"),r.a.createElement(T,{users:t,addUserCallback:function(e){var a=[{_id:Object(R.a)(),name:e}].concat(Object(w.a)(t));c(a)}}),r.a.createElement("hr",null))},A=t(5),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,o=(e.className,e.spanClassName),s=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(f.a.error," ").concat(o||""),u="".concat(l?f.a.errorInput:H.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:u,value:s.value},s)),l&&r.a.createElement("span",{className:i},l))},F=t(32),L=t.n(F),M=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,["red","className"]),c="".concat(a?f.a.red:S.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},n))},U=t(17),D=t.n(U),J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName),c=e.children,l=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(D.a.checkbox," ").concat(l.checked?n:""),s="".concat(l.checked?D.a.styledText:D.a.text);return r.a.createElement("label",{className:D.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},l)),r.a.createElement("span",{className:D.a.check}),r.a.createElement("i",{className:D.a.indicator}),c&&r.a.createElement("span",{className:s},c))};var V=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=t?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],d=u[1];return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 4"),r.a.createElement("div",{className:L.a.column},r.a.createElement(P,{value:t,onChangeText:c,onEnter:o,error:l,className:L.a.blue}),r.a.createElement(M,{red:!0,onClick:o},"delete "),r.a.createElement(J,{checked:m,onChangeChecked:d},"HELLO!!! "),r.a.createElement(J,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null))},G=t(47),X=t.n(G),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=c||{},p=d.children,E=d.onDoubleClick,v=(d.className,Object(A.a)(d,["children","onDoubleClick","className"])),_="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",X.a.Span);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:_},v),p||l.value))};function q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function K(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}q("test",{x:"A",y:1});K("test",{x:"",y:0});var z=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 6"),r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(M,{onClick:function(){q("editable-span-value",t)}},"save"),r.a.createElement(M,{onClick:function(){var e=K("editable-span-value",t);c(e)}},"restore"),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(I,null),r.a.createElement(V,null),r.a.createElement(z,null))},Q=t(48),$=t.n(Q);var ee=function(){return r.a.createElement("div",{className:$.a.ErrorWrapper},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ae=t(49),te=t.n(ae),ne=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(A.a)(e,["options","onChange","onChangeOption"]),c=a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("div",{className:te.a.box},r.a.createElement("select",{onChange:function(e){t&&t(e.currentTarget.value)},value:n.value},c))},re=t(25),ce=t.n(re),le=function(e){e.type;var a=e.name,t=e.options,n=e.value,c=(e.onChange,e.onChangeOption),l=(Object(A.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("div",{className:f.a.container},r.a.createElement("label",{className:"".concat(ce.a.label," ").concat(e===n?ce.a.checked:""),key:a+"-"+t},r.a.createElement("input",{className:ce.a.input,type:"radio",checked:e===n,onChange:l,value:e,name:a})),r.a.createElement("span",{className:ce.a.text},e))})):[];return r.a.createElement(r.a.Fragment,null,o)},oe=t(50),se=t.n(oe),ie=["x","y","z"];var ue=function(){var e=Object(n.useState)(ie[0]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter}," homeworks 7"),r.a.createElement("div",{className:se.a.h7Wrapper},r.a.createElement("div",null,r.a.createElement(ne,{options:ie,value:t,onChangeOption:c,icon:""})),r.a.createElement("div",null,r.a.createElement(le,{name:"radio",options:ie,value:t,onChangeOption:c}))),r.a.createElement("hr",null))},me=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(w.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):"down"===a.payload?Object(w.a)(e).sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})):e;case"check":return 18===a.payload?e.filter((function(e){return e.age>18})):e;default:return e}},de=t(51),pe=t.n(de),Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(n.useState)(Ee),a=Object(i.a)(e,2),t=a[0],c=a[1],l=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 8"),r.a.createElement("div",{className:pe.a.sortedPeopleWrapper},l),r.a.createElement(M,{onClick:function(){return c(me(Ee,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(M,{onClick:function(){return c(me(Ee,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(M,{onClick:function(){return c(me(Ee,{type:"check",payload:18}))}},"check"),r.a.createElement("hr",null))},_e=t(52),he=t.n(_e);var fe=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(new Date),o=Object(i.a)(l,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],E=d[1],v=function(){clearInterval(t)},_=function(e){return e<10?"0"+e:e},h=_(s.getHours())+":"+_(s.getMinutes())+":"+_(s.getSeconds()),f=(new Date).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{className:he.a.time},r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},h),p&&r.a.createElement("div",null,f)),r.a.createElement(M,{onClick:function(){v();var e=window.setInterval((function(){u(new Date)}),1e3);c(e)}},"start"),r.a.createElement(M,{onClick:v},"stop"))};var ge=function(){return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter},"homeworks 9"),r.a.createElement(fe,null),r.a.createElement("hr",null))},be=t(15),Ce=t(54),Ne=t.n(Ce),ke=t(13),Oe={loading:!1},Se=function(e){return{type:"SET_LOADING",loading:e}};var xe=function(){var e=Object(be.b)(),a=Object(be.c)((function(e){return e.loading}));return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter}," homeworks 10"),a.loading?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430...",r.a.createElement("img",{src:Ne.a})):r.a.createElement("div",null,r.a.createElement(M,{onClick:function(){e(Se(!0)),setTimeout((function(){return e(Se(!1))}),2e3)}},"set loading...")))};var je=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(ve,null),r.a.createElement(ge,null),r.a.createElement(xe,null))},ye=t(14),we=t.n(ye),We=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,c=Object(A.a)(e,["type","onChange","onChangeRange","className"]),l="".concat(we.a.range," ").concat(n||"");return r.a.createElement("div",{className:we.a.rangeSliderContainer},r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:l,min:0,max:100},c)))},He=t(23),Be=t.n(He),Te=function(e){var a=e.onDoubleRangeChange,t=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Be.a.rangeSlider},r.a.createElement("input",{type:"range",min:0,max:100,step:1,value:t[0],onChange:function(e){a&&a([+e.target.value,t[1]])}}),r.a.createElement("input",{type:"range",min:0,max:100,step:1,value:t[1],onChange:function(e){a&&a([t[0],+e.target.value])}})))};var Re=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(100),o=Object(i.a)(l,2),s=o[0],u=o[1];return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter}," homeworks 11"),r.a.createElement("div",{className:we.a.rangeContainer},r.a.createElement("div",{className:we.a.rangeValue},t),r.a.createElement(We,{value:t,onChangeRange:function(e){s<=t||c(e)}})),r.a.createElement("div",{className:Be.a.doubleRangeContainer},r.a.createElement("div",{className:Be.a.rangeValue},t),r.a.createElement(Te,{values:[t,s],onDoubleRangeChange:function(e){e[1]<=e[0]||(c(e[0]),u(e[1]))}}),r.a.createElement("div",{className:we.a.rangeValue},s)))},Ie=t(34),Ae=t.n(Ie),Pe={theme:"some"},Fe="CHANGE_THEME",Le=["dark","red","some"];var Me=function(){var e=Object(be.c)((function(e){return e.themeChanging.theme})),a=Object(be.b)();return r.a.createElement("div",{className:"".concat(Ae.a[e]," ").concat(f.a.Chapter)},r.a.createElement("hr",null),r.a.createElement("span",{className:Ae.a[e+"-text"]},r.a.createElement("div",{className:f.a.NameChapter},"homeworks 12")),r.a.createElement(le,{name:"radio1",onChangeOption:function(e){a({type:"CHANGE_THEME",value:e})},options:Le,value:e}),r.a.createElement("hr",null))},Ue=t(55),De=t.n(Ue).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Je=function(e){return De.post("auth/test",{success:e})},Ve=t(56),Ge=t.n(Ve);var Xe=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){Je(t).then((function(e){console.log(Object(ke.a)({},e)),s=e.data.errorText,u(s)})).catch((function(e){console.log(Object(ke.a)({},e)),console.log(e.response?e.response.data.errorText:e.message),s=e.response?e.response.data.errorText:e.message,u(s)}))}),[t]),r.a.createElement("div",null,r.a.createElement(M,{onClick:function(){c(!t)}},"Press Me"),r.a.createElement("div",{className:Ge.a.checkboxContainer},r.a.createElement(J,{type:"checkbox",checked:t})),r.a.createElement("span",null,s))};var Ze=function(){return r.a.createElement("div",{className:f.a.Chapter},r.a.createElement("hr",null),r.a.createElement("div",{className:f.a.NameChapter}," homeworks 13"),r.a.createElement(Xe,null))};var qe=function(){return r.a.createElement("div",null,r.a.createElement(Re,null),r.a.createElement(Me,null),r.a.createElement(Ze,null))},Ke=t(57),ze=t.n(Ke),Ye="/pre-junior",Qe="/JUNIOR",$e="/JuniorPlus";var ea=function(){return r.a.createElement("div",{className:ze.a.RouterWrapper},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:Ye})}}),r.a.createElement(p.b,{path:Ye,render:function(){return r.a.createElement(Y,null)}}),"// add routes",r.a.createElement(p.b,{path:Qe,render:function(){return r.a.createElement(je,null)}}),r.a.createElement(p.b,{path:$e,render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(ee,null)}})))};var aa=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l="".concat(d.a.openbtn," ").concat(t?d.a.mainBtn:""),o="".concat(d.a.sideBar," ").concat(t?d.a.SlideSideBar:d.a.CloseSlideSideBar);return r.a.createElement("div",{className:d.a.navBar},r.a.createElement("div",{className:d.a.mainBtn},r.a.createElement("button",{className:l,onClick:function(){c(!t)}},"\u2630 Menu")),r.a.createElement("div",{className:o},r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:Ye,activeClassName:d.a.activeLink},"PRE_JUNIOR")),r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:Qe,activeClassName:d.a.activeLink},"JUNIOR")),r.a.createElement("div",{className:d.a.navBarEl},r.a.createElement(u.b,{to:$e,activeClassName:d.a.activeLink},"JUNIOR_PLUS"))))};var ta=function(){return r.a.createElement("div",{className:f.a.Wrapper},r.a.createElement(u.a,null,r.a.createElement(aa,null),r.a.createElement(ea,null)))};var na=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",{className:s.a.heading},"react homeworks:"),r.a.createElement(ta,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ra=t(22),ca=Object(ra.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{loading:a.loading});default:return e}},themeChanging:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Fe:return Object(ke.a)(Object(ke.a)({},e),{},{theme:a.value});default:return e}}}),la=Object(ra.c)(ca),oa=la;window.store=la,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be.a,{store:oa},r.a.createElement(na,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.6619a456.chunk.js.map