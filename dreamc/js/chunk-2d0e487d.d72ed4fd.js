(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e487d"],{"912a":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"center-wrapper full-height"},c=Object(n["createElementVNode"])("h1",{class:"form__title"},"Welcome back!",-1),o=Object(n["createElementVNode"])("p",{class:"form__text"},[Object(n["createTextVNode"])("Hey, returning customer there is a new update for "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])(" and we now require you to provide an email this is for security & password resetting purposes. You will not be able to use "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])(" until you add one.")],-1),i={class:"error"},l={key:0},u=["disabled"];function s(e,t,r,s,d,b){var m=Object(n["resolveComponent"])("TextInput");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("form",{class:"form",onSubmit:t[1]||(t[1]=Object(n["withModifiers"])((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[c,o,Object(n["createElementVNode"])("p",i,Object(n["toDisplayString"])(e.error),1),Object(n["createVNode"])(m,{id:"email",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t}),icon:"envelope",placeholder:"Email",type:"email"},null,8,["modelValue"]),e.success?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",l,"Sent an confirmation email check your inbox.")):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("button",{disabled:!e.valid,class:"button button--primary full-sized mt",type:"submit"}," Send Confirmation ",8,u)],32)])}var d=r("1da1"),b=(r("96cf"),r("79f6")),m=r("5502"),p=r("eef9"),f=r("446e"),j=r("d86a"),O=r("555f"),v=Object(n["defineComponent"])({components:{Loader:O["a"],TextInput:f["a"]},setup:function(){var e=Object(m["b"])(),t=e.state,r=Object(n["ref"])(""),a=Object(n["ref"])(""),c=Object(n["ref"])(!1),o=Object(n["computed"])((function(){return j["a"].valid("email")}));function i(){return l.apply(this,arguments)}function l(){return l=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(j["a"].valid("email")){e.next=2;break}return e.abrupt("return");case 2:return c.value=!1,e.prev=3,Object(p["f"])(),r.value="",c.value=!1,e.next=9,b["m"].sendVerify(a.value);case 9:t.user.email_verified_at=(new Date).getTime(),c.value=!0,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](3),console.error(e.t0),r.value=e.t0.message,Object(p["g"])("error","Failed to send verification");case 18:return e.prev=18,Object(p["c"])(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[3,13,18,21]])}))),l.apply(this,arguments)}return{valid:o,error:r,submit:i,email:a,success:c}}}),w=r("6b0d"),h=r.n(w);const V=h()(v,[["render",s]]);t["default"]=V}}]);
//# sourceMappingURL=chunk-2d0e487d.d72ed4fd.js.map