(this["webpackJsonphomeworks-for-ignat"]=this["webpackJsonphomeworks-for-ignat"]||[]).push([[0],[,,,,function(e,t,n){e.exports={btn:"Affairs_btn__3CAXE",active:"Affairs_active__2zrXr",affair:"Affairs_affair__3fu3M",item:"Affairs_item__1trhZ",high:"Affairs_high__276Ap",middle:"Affairs_middle__2TMKC",low:"Affairs_low__2Kq-Z"}},,,,function(e,t,n){e.exports={main:"Message_main__2gtYR",avatar:"Message_avatar__2_hOK",content:"Message_content__32CSI",angle:"Message_angle__1aEO2",name:"Message_name__2COhl",message:"Message_message__8m9Il",time:"Message_time__TSzW5"}},,,function(e,t,n){e.exports={header:"Header_header__2sMcc",link:"Header_link__1P8Ik",active:"Header_active__2D0zp",block:"Header_block__15g3e"}},,,,,function(e,t,n){e.exports={form:"SuperInputText_form__2intw",superInput:"SuperInputText_superInput__VuhAw",errorInput:"SuperInputText_errorInput__1kNAT",error:"SuperInputText_error__1Zvh8"}},function(e,t,n){e.exports={btn:"SuperButton_btn__2FzYX",default:"SuperButton_default__3dg7U",red:"SuperButton_red__yhbli"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3P1Ko",checkbox:"SuperCheckbox_checkbox__3OnxH"}},,function(e,t,n){e.exports={blue:"HW4_blue__11Hu-",column:"HW4_column__2ciB8",testSpanError:"HW4_testSpanError__3xWJ2"}},,,function(e,t,n){e.exports={App:"App_App__3Sjsa"}},function(e,t,n){e.exports={greeting:"Greeting_greeting__1iM2X",error:"Greeting_error__2P7Wh"}},function(e,t,n){e.exports={span:"EditableSpan_span__2F2vf"}},function(e,t,n){e.exports={select:"Select_select__3f4YO"}},function(e,t,n){e.exports={item:"HW8_item__10xqO"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),s=n.n(r),i=(n(33),n(23)),o=n.n(i),j=n(9),l=n(2),u=n(8),b=n.n(u),d=n(0);var O=function(e){return Object(d.jsxs)("div",{className:b.a.main,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.message,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",m="some text",f="22:00";var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:h,name:x,message:m,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},p=n(3),_=n(4),g=n.n(_);var k=function(e){var t=g.a.item+" "+g.a[e.affair.priority];return Object(d.jsxs)("div",{className:g.a.affair,children:[Object(d.jsx)("div",{className:g.a.affairName+" "+g.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:g.a.btn+" "+g.a.item,children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t.currentTarget.value)},a=g.a.btn+" "+("all"===e.filter?g.a.active:""),c=g.a.btn+" "+("high"===e.filter?g.a.active:""),r=g.a.btn+" "+("middle"===e.filter?g.a.active:""),s=g.a.btn+" "+("low"===e.filter?g.a.active:""),i=function(t){return g.a.btn+" "+(e.filter===t?g.a.active:"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:n,value:"all",className:a,children:"All"}),Object(d.jsx)("button",{onClick:n,value:"high",className:c,children:"High"}),Object(d.jsx)("button",{onClick:n,value:"middle",className:r,children:"Middle"}),Object(d.jsx)("button",{onClick:n,value:"low",className:s,children:"Low"}),Object(d.jsx)("button",{onClick:n,value:"all",className:i("all"),children:"All"}),Object(d.jsx)("button",{onClick:n,value:"high",className:i("high"),children:"High"}),Object(d.jsx)("button",{onClick:n,value:"middle",className:i("middle"),children:"Middle"}),Object(d.jsx)("button",{onClick:n,value:"low",className:i("low"),children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(N),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(p.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(C,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(15),S=n(24),A=n.n(S),T=function(e){var t=e.onEnter,n=e.name,a=e.setNameCallback,c=e.addUser,r=e.error,s=e.totalUsers,i=A.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:n,onChange:a,className:i,onKeyDown:t,onBlur:a}),Object(d.jsx)("span",{children:r}),Object(d.jsx)("button",{onClick:c,children:"add"}),Object(d.jsx)("span",{children:s})]})},I=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(p.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(p.a)(o,2),l=j[0],u=j[1],b=function(){n(s),alert("Hello ".concat(s)),i("")},O=t.length;return Object(d.jsx)(T,{onEnter:function(e){"Enter"===e.key&&s&&b()},name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u("")):(s&&i(""),u("empty name"))},addUser:b,error:l,totalUsers:O})},E=n(43);var M=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(I,{users:n,addUserCallback:function(e){c([].concat(Object(y.a)(n),[{_id:Object(E.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=n(5),P=n(7),B=n(16),F=n.n(B),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},D=n(20),J=n.n(D),K=n(17),L=n.n(K),U=function(e){var t=e.red,n=e.className,a=e.disabled,c=Object(P.a)(e,["red","className","disabled"]),r="".concat(L.a.btn," ").concat(t?L.a.red:L.a.default," ").concat(n);return Object(d.jsx)("button",Object(H.a)({className:r,disabled:a},c))},X=n(18),z=n.n(X),G=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:z.a.label,children:[Object(d.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:z.a.spanClassName,children:c})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(p.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(W,{className:J.a.blue}),Object(d.jsx)(U,{children:"default"}),Object(d.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(U,{disabled:!0,children:"disabled"}),Object(d.jsx)(G,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(G,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Z=n(25),q=n.n(Z),R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(p.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(P.a)(l,["children","onDoubleClick","className"]),x="".concat(q.a.span," ").concat(O||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(W,Object(H.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:u||r.value}))})};function V(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}V("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(R,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(U,{onClick:function(){V("editable-span-value",n)},children:"save"}),Object(d.jsx)(U,{onClick:function(){c($("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(w,{}),Object(d.jsx)(M,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(Q,{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ne=n(26),ae=n.n(ne),ce=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(P.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(H.a)(Object(H.a)({className:ae.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},re=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(H.a)({type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},se=["x","y","z"];var ie=function(){var e=Object(a.useState)(se[1]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ce,{options:se,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(re,{name:"radio",options:se,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},oe=function(e,t){switch(t.type){case"sort":var n=Object(y.a)(e).sort((function(e,t){return e.age>t.age?1:e.age<t.age?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},je=n(27),le=n.n(je),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var be=function(){var e=Object(a.useState)(ue),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:le.a.item,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsxs)("div",{children:[Object(d.jsx)(U,{onClick:function(){return c(oe(ue,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(U,{onClick:function(){return c(oe(ue,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(U,{onClick:function(){return c(oe(ue,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var de=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(p.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(p.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=i.toLocaleTimeString()||Object(d.jsx)("br",{}),x=i.toLocaleDateString()||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(U,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(U,{onClick:O,children:"stop"})]})};var Oe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(de,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},he=n(13),xe={loading:!1},me=function(e){return{type:"LOADING",status:e}};var fe=function(){var e=Object(he.b)(),t=Object(he.c)((function(e){return e.loading.loading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(d.jsx)("div",{children:Object(d.jsx)(U,{onClick:function(){e(me(!0)),setTimeout((function(){e(me(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ve=function(){return Object(d.jsxs)("div",{children:["Junior",Object(d.jsx)(ie,{}),Object(d.jsx)(be,{}),Object(d.jsx)(Oe,{}),Object(d.jsx)(fe,{})]})};var pe=function(){return Object(d.jsx)("div",{children:"JuniorPlus"})},_e="/pre-junior",ge="/junior",ke="/junior-plus";var Ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:_e,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(l.a,{path:ge,element:Object(d.jsx)(ve,{})}),Object(d.jsx)(l.a,{path:ke,element:Object(d.jsx)(pe,{})}),"// add routes",Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(te,{})})]})})},Ne=n(11),we=n.n(Ne);var ye=function(){return Object(d.jsxs)("div",{className:we.a.header,children:[Object(d.jsx)(j.b,{className:we.a.link,to:_e,children:"pre-junior "}),Object(d.jsx)(j.b,{className:we.a.link,to:ge,children:"junior "}),Object(d.jsx)(j.b,{className:we.a.link,to:ke,children:"junior+"}),Object(d.jsx)("div",{className:we.a.block})]})};var Se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ye,{}),Object(d.jsx)(Ce,{})]})})};var Ae=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=n(22),Ie=Object(Te.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(H.a)(Object(H.a)({},e),{},{loading:t.status});default:return e}}}),Ee=Object(Te.b)(Ie),Me=Ee;window.store=Ee,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(he.a,{store:Me,children:Object(d.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.6849f878.chunk.js.map