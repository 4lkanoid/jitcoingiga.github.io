(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de35"],{d2e6:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"center-wrapper full-height"},c=Object(n["createElementVNode"])("p",null,"Verifying email",-1);function o(e,t,r,o,i,s){var u=Object(n["resolveComponent"])("Loader");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(u,{class:"loader--s"}),c])}var i=r("1da1"),s=(r("96cf"),r("6c02")),u=r("5502"),p=r("eef9"),l=r("79f6"),d=r("446e"),f=r("555f"),b=Object(n["defineComponent"])({components:{Loader:f["a"],TextInput:d["a"]},setup:function(){var e=Object(s["d"])(),t=e.push,r=Object(u["b"])(),n=r.state,a=Object(s["c"])(),c=a.params,o=a.query,d=c.id,f=c.hash,b=o.expires,m=o.signature;function h(){return v.apply(this,arguments)}function v(){return v=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["m"].verifyEmail(d,f,m,b);case 3:return n.user.email_verified_at=(new Date).getTime(),e.next=6,t({name:"dashboard.home"});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0),Object(p["g"])("error","Failed to verify email");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),v.apply(this,arguments)}return h().then(),{}}}),m=r("6b0d"),h=r.n(m);const v=h()(b,[["render",o]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-2d21de35.f777f20b.js.map