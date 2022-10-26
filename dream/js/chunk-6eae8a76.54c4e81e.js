(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eae8a76"],{"107c":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var n=r("da84"),a=r("c65b"),c=r("825a"),o=r("1626"),l=r("c6b6"),u=r("9263"),s=n.TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var n=a(r,e,t);return null!==n&&c(n),n}if("RegExp"===l(e))return a(u,e,t);throw s("RegExp#exec called on incompatible receiver")}},"2edc":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-4dc20922"),e=e(),Object(n["popScopeId"])(),e},c={class:"bg-light rounded p mb"},o=a((function(){return Object(n["createElementVNode"])("h1",{class:"text-l mb text-lg"},"Settings",-1)})),l=Object(n["createTextVNode"])(" Here you can change your account settings for "),u=a((function(){return Object(n["createElementVNode"])("b",null,"Dream",-1)})),s=Object(n["createTextVNode"])(" If you make a mistake when changing a setting and would like this cool-down to be reset you can make a ticket at "),i=Object(n["createTextVNode"])("Tickets"),d={class:"bg-light rounded p mb"},b=a((function(){return Object(n["createElementVNode"])("h2",{class:"text-l mb text-lg"},"HWID",-1)})),p=a((function(){return Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" In order for you to use "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])(" you must set your computer HWID in this box. To obtain your HWID you must download and run "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])('. Running dream will show the message "Not Authenticated" & "HWID copied to your clipboard". This means that the HWID is now copied and you can paste it here. ')],-1)})),m={class:"hwid"},f=a((function(){return Object(n["createElementVNode"])("span",null,"Last Updated at: ",-1)})),h={key:0},g=Object(n["createTextVNode"])("Successfully updated user HWID. You may now access "),O=a((function(){return Object(n["createElementVNode"])("b",null,"Dream",-1)})),j=[g,O],v={class:"error"},w={class:"group mt group--allow-wrap"},x=["disabled"],V={class:"bg-light rounded p"},y=a((function(){return Object(n["createElementVNode"])("h2",{class:"text-l mb text-lg"},"Username",-1)})),E=a((function(){return Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])("Here you can change your "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])(" username that you login with")],-1)})),N={class:"mt mb error"},k={class:"group mt group--allow-wrap"},I=["disabled"],D={key:0},R={class:"bg-light rounded p mt"},T=a((function(){return Object(n["createElementVNode"])("h2",{class:"text-l mb text-lg"},"Email",-1)})),_=a((function(){return Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])("If you are migrating your "),Object(n["createElementVNode"])("b",null,"Dream"),Object(n["createTextVNode"])(" account from our old system you will need to fill this in to be able to use our product")],-1)})),U={class:"mt mb error"},C={class:"group mt group--allow-wrap"},H=["disabled"],P={key:0},W=Object(n["createTextVNode"])(" You email has been updated. Please check your email for a verification code before you can start using "),A=a((function(){return Object(n["createElementVNode"])("b",null,"Dream",-1)})),S=Object(n["createTextVNode"])(" again. "),Y=[W,A,S],B={class:"bg-light rounded p mt"},z=a((function(){return Object(n["createElementVNode"])("h2",{class:"text-l mb text-lg"},"Change Password",-1)})),F={class:"mt mb error"},M=["disabled"],q={class:"bg-light rounded p mt"},J=a((function(){return Object(n["createElementVNode"])("h2",{class:"text-l mb text-lg"},"Delete Account",-1)})),K=a((function(){return Object(n["createElementVNode"])("p",null," Warning if you delete your account you will no longer be able to access dream and your account will be completely removed. This change is irreversible ",-1)})),$={class:"mt mb error"},L=Object(n["createTextVNode"])(" Delete Account ");function G(e,t,r,a,g,O){var W=Object(n["resolveComponent"])("router-link"),A=Object(n["resolveComponent"])("TextInput"),S=Object(n["resolveComponent"])("icon");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",c,[o,Object(n["createElementVNode"])("p",null,[l,u,s,Object(n["createVNode"])(W,{to:{name:"dashboard.tickets"},class:"text-p"},{default:Object(n["withCtx"])((function(){return[i]})),_:1},8,["to"])])]),Object(n["createElementVNode"])("div",d,[b,p,Object(n["createElementVNode"])("div",m,[f,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.lastHWIDChange),1)]),e.hwid.success?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",h,j)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("p",v,Object(n["toDisplayString"])(e.hwid.error),1),Object(n["createElementVNode"])("div",w,[Object(n["createVNode"])(A,{id:"hwid",modelValue:e.hwid.value,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.hwid.value=t}),"max-length":64,"min-length":64,class:"group__span",icon:"id-badge",placeholder:"HWID"},null,8,["modelValue"]),Object(n["createElementVNode"])("button",{disabled:!e.hwidValid,class:"button button--lr",onClick:t[1]||(t[1]=function(){return e.submitHWID&&e.submitHWID.apply(e,arguments)})}," Update HWID ",8,x)])]),Object(n["createElementVNode"])("div",V,[y,E,Object(n["createElementVNode"])("p",N,Object(n["toDisplayString"])(e.username.error),1),Object(n["createElementVNode"])("div",k,[Object(n["createVNode"])(A,{id:"username",modelValue:e.username.value,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.username.value=t}),class:"group__span",icon:"user",placeholder:"Username",type:"text"},null,8,["modelValue"]),Object(n["createElementVNode"])("button",{disabled:!e.usernameValid,class:"button button--lr",onClick:t[3]||(t[3]=function(){return e.submitUsername&&e.submitUsername.apply(e,arguments)})}," Update Username ",8,I)]),e.username.success?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",D," You username has been updated! ")):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",R,[T,_,Object(n["createElementVNode"])("p",U,Object(n["toDisplayString"])(e.email.error),1),Object(n["createElementVNode"])("div",C,[Object(n["createVNode"])(A,{id:"email",modelValue:e.email.value,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.email.value=t}),class:"group__span",icon:"envelope",placeholder:"Email",type:"email"},null,8,["modelValue"]),Object(n["createElementVNode"])("button",{disabled:!e.emailValid,class:"button button--lr",onClick:t[5]||(t[5]=function(){return e.submitEmail&&e.submitEmail.apply(e,arguments)})}," Update Email ",8,H)]),e.email.success?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",P,Y)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",B,[z,Object(n["createVNode"])(A,{id:"password",modelValue:e.password.old,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.password.old=t}),"max-length":99,"min-length":4,class:"mb full-sized",icon:"lock-open",placeholder:"Old Password",required:"",type:"password"},null,8,["modelValue"]),Object(n["createVNode"])(A,{id:"new_password",modelValue:e.password.new,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.password.new=t}),"max-length":99,"min-length":4,class:"mb full-sized",icon:"lock",placeholder:"New Password",required:"",type:"password"},null,8,["modelValue"]),Object(n["createVNode"])(A,{id:"confirm_password",modelValue:e.password.confirm,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.password.confirm=t}),"max-length":99,"min-length":4,class:"mb full-sized",icon:"lock",placeholder:"Confirm Password",required:"",type:"password"},null,8,["modelValue"]),Object(n["createElementVNode"])("p",F,Object(n["toDisplayString"])(e.passwordError),1),Object(n["createElementVNode"])("button",{disabled:!e.password.valid,class:"button button--lr full-sized",onClick:t[9]||(t[9]=function(){return e.changePassword&&e.changePassword.apply(e,arguments)})}," Change Password ",8,M)]),Object(n["createElementVNode"])("div",q,[J,K,Object(n["createElementVNode"])("p",$,Object(n["toDisplayString"])(e.deleteError),1),Object(n["createElementVNode"])("button",{class:"button button--lr full-sized mt",onClick:t[10]||(t[10]=function(){return e.deleteAccount&&e.deleteAccount.apply(e,arguments)})},[Object(n["createVNode"])(S,{class:"button__icon",icon:"trash"}),L])])])}var Q=r("1da1"),X=(r("96cf"),r("ac1f"),r("466d"),r("c1df")),Z=r.n(X),ee=r("d86a"),te=r("5502"),re=r("6c02"),ne=r("eef9"),ae=r("79f6"),ce=r("446e"),oe=Object(n["defineComponent"])({components:{TextInput:ce["a"]},setup:function(){var e=Object(te["b"])(),t=e.state,r=Object(re["d"])(),a=r.push,c=t.user,o=c.username,l=c.hwid,u=c.email,s=Object(n["ref"])(""),i=Object(n["ref"])(""),d=Object(n["reactive"])({value:Object(n["toRef"])(c,"email"),error:"",changes:!1,success:!1}),b=Object(n["reactive"])({value:Object(n["toRef"])(c,"username"),error:"",changes:!1,success:!1}),p=Object(n["reactive"])({value:Object(n["toRef"])(c,"hwid"),error:"",changes:!1,success:!1}),m=Object(n["reactive"])({old:"",new:"",confirm:"",valid:!1}),f=Object(n["computed"])((function(){return ee["a"].valid("hwid")&&p.changes})),h=Object(n["computed"])((function(){return ee["a"].valid("email")&&d.changes})),g=Object(n["computed"])((function(){return ee["a"].valid("username")&&b.changes}));Object(n["watch"])(p,(function(e){return p.changes=e.value!=l})),Object(n["watch"])(b,(function(e){return b.changes=e.value!=o})),Object(n["watch"])(d,(function(e){return d.changes=e.value!=u})),Object(n["watch"])(m,(function(e){ee["a"].clear("confirm_password"),ee["a"].match("password","confirm_password",e.new,e.confirm),m.valid=ee["a"].valid("password")&&e.new.length>0&&e.old.length>0&&e.confirm.length>0&&e.confirm===m.new&&ee["a"].valid("new_password")&&ee["a"].valid("confirm_password")}),{deep:!0});var O=Object(n["toRef"])(c,"last_hwid_change"),j=Object(n["computed"])((function(){return null==O.value?"Never":Z()(O.value).format("Do MMMM YYYY [at] h:mm a")}));function v(){return w.apply(this,arguments)}function w(){return w=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ee["a"].match("password","confirm_password",m.new,m.confirm),m.valid){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(ne["b"])("Change Password","Are you sure you want to change your password?");case 5:if(t=e.sent,t){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,i.value="",Object(ne["f"])(),e.next=13,ae["m"].updatePassword(m.old,m.new);case 13:Object(ne["g"])("info","Your password has been updated"),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](8),console.error(e.t0),i.value=e.t0.message,Object(ne["g"])("error","Failed to update password");case 21:return e.prev=21,Object(ne["c"])(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[8,16,21,24]])}))),w.apply(this,arguments)}function x(){return V.apply(this,arguments)}function V(){return V=Object(Q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ee["a"].valid("email")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,Object(ne["f"])(),d.success=!1,d.error="",e.next=8,ae["m"].sendVerify(d.value);case 8:c.email_verified_at=null,d.success=!0,u=d.value,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](2),console.error(e.t0),d.error=e.t0.message,Object(ne["g"])("error","Failed to send verification");case 18:return e.prev=18,Object(ne["c"])(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,13,18,21]])}))),V.apply(this,arguments)}function y(){return E.apply(this,arguments)}function E(){return E=Object(Q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ee["a"].valid("hwid")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,Object(ne["f"])(),p.success=!1,p.error="",e.next=8,ae["m"].updateHWID(p.value);case 8:O.value=(new Date).getTime(),p.success=!0,Object(ne["g"])("info","Updated HWID"),l=p.value,e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error(e.t0),p.error=e.t0.message,Object(ne["g"])("error","Failed to change HWID");case 19:return e.prev=19,Object(ne["c"])(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[2,14,19,22]])}))),E.apply(this,arguments)}function N(){return k.apply(this,arguments)}function k(){return k=Object(Q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ee["a"].valid("username")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,Object(ne["f"])(),b.success=!1,b.error="",e.next=8,ae["m"].updateUsername(b.value);case 8:b.success=!0,Object(ne["g"])("info","Updated Username"),o=b.value,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](2),console.error(e.t0),b.error=e.t0.message,Object(ne["g"])("error","Failed to change Username");case 18:return e.prev=18,Object(ne["c"])(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,13,18,21]])}))),k.apply(this,arguments)}function I(){return D.apply(this,arguments)}function D(){return D=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(ne["e"])("Enter Password","Please enter your password to delete your account");case 2:if(t=e.sent,r=t.result,n=t.input,r){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,Object(ne["f"])(),e.next=11,ae["m"].deleteAccount(n);case 11:return Object(ae["c"])(),e.next=14,a({name:"login"});case 14:Object(ne["g"])("info","Your account has been deleted"),e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](7),console.error(e.t0),s.value=e.t0.message,Object(ne["g"])("error","Failed to delete account");case 22:return e.prev=22,Object(ne["c"])(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[7,17,22,25]])}))),D.apply(this,arguments)}return{lastHWIDChange:j,hwid:p,passwordError:i,email:d,user:c,submitEmail:x,submitHWID:y,hwidValid:f,emailValid:h,deleteAccount:I,deleteError:s,password:m,changePassword:v,submitUsername:N,username:b,usernameValid:g}}}),le=(r("e519"),r("6b0d")),ue=r.n(le);const se=ue()(oe,[["render",G],["__scopeId","data-v-4dc20922"]]);t["default"]=se},"466d":function(e,t,r){"use strict";var n=r("c65b"),a=r("d784"),c=r("825a"),o=r("50c4"),l=r("577e"),u=r("1d80"),s=r("dc4a"),i=r("8aa5"),d=r("14c3");a("match",(function(e,t,r){return[function(t){var r=u(this),a=void 0==t?void 0:s(t,e);return a?n(a,t,r):new RegExp(t)[e](l(r))},function(e){var n=c(this),a=l(e),u=r(t,n,a);if(u.done)return u.value;if(!n.global)return d(n,a);var s=n.unicode;n.lastIndex=0;var b,p=[],m=0;while(null!==(b=d(n,a))){var f=l(b[0]);p[m]=f,""===f&&(n.lastIndex=i(a,o(n.lastIndex),s)),m++}return 0===m?null:p}]}))},6102:function(e,t,r){},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("c65b"),a=r("e330"),c=r("577e"),o=r("ad6d"),l=r("9f7f"),u=r("5692"),s=r("7c73"),i=r("69f3").get,d=r("fce3"),b=r("107c"),p=u("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,f=m,h=a("".charAt),g=a("".indexOf),O=a("".replace),j=a("".slice),v=function(){var e=/a/,t=/b*/g;return n(m,e,"a"),n(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=l.UNSUPPORTED_Y||l.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],V=v||x||w||d||b;V&&(f=function(e){var t,r,a,l,u,d,b,V=this,y=i(V),E=c(e),N=y.raw;if(N)return N.lastIndex=V.lastIndex,t=n(f,N,E),V.lastIndex=N.lastIndex,t;var k=y.groups,I=w&&V.sticky,D=n(o,V),R=V.source,T=0,_=E;if(I&&(D=O(D,"y",""),-1===g(D,"g")&&(D+="g"),_=j(E,V.lastIndex),V.lastIndex>0&&(!V.multiline||V.multiline&&"\n"!==h(E,V.lastIndex-1))&&(R="(?: "+R+")",_=" "+_,T++),r=new RegExp("^(?:"+R+")",D)),x&&(r=new RegExp("^"+R+"$(?!\\s)",D)),v&&(a=V.lastIndex),l=n(m,I?r:V,_),I?l?(l.input=j(l.input,T),l[0]=j(l[0],T),l.index=V.lastIndex,V.lastIndex+=l[0].length):V.lastIndex=0:v&&l&&(V.lastIndex=V.global?l.index+l[0].length:a),x&&l&&l.length>1&&n(p,l[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)})),l&&k)for(l.groups=d=s(null),u=0;u<k.length;u++)b=k[u],d[b[0]]=l[b[1]];return l}),e.exports=f},"9f7f":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;t.UNSUPPORTED_Y=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("e330"),a=r("6eeb"),c=r("9263"),o=r("d039"),l=r("b622"),u=r("9112"),s=l("species"),i=RegExp.prototype;e.exports=function(e,t,r,d){var b=l(e),p=!o((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=p&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!p||!m||r){var f=n(/./[b]),h=t(b,""[e],(function(e,t,r,a,o){var l=n(e),u=t.exec;return u===c||u===i.exec?p&&!o?{done:!0,value:f(t,r,a)}:{done:!0,value:l(r,t,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(i,b,h[1])}d&&u(i[b],"sham",!0)}},e519:function(e,t,r){"use strict";r("6102")},fce3:function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-6eae8a76.54c4e81e.js.map