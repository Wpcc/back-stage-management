(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5c3163c"],{"360f":function(e,n,t){"use strict";var o=t("7a8d"),r=t.n(o);r.a},"735d":function(e,n,t){"use strict";var o=t("f370"),r=t.n(o);r.a},"7a8d":function(e,n,t){},"9ed6":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("h3",{staticClass:"title"},[e._v("vue-admin-template")]),t("el-form-item",{ref:"dom",attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.handleLogin(n):null}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        Sign in\n      ")])],1)],1)],1)},r=[];function i(e){var n=["admin","editor"];return n.indexOf(e.trim())>=0}var a={name:"Login",data:function(){var e=function(e,n,t){i(n)?t():t(new Error("请输入正确的用户名"))},n=function(e,n,t){n.length<5?t(new Error("密码不能小于5位")):t()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:n}]},loading:!1,pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,e.$router.push({path:e.redirect||"/"})}).catch(function(){e.loading=!1})})}}},s=a,l=(t("735d"),t("360f"),t("2877")),c=Object(l["a"])(s,o,r,!1,null,"50ed8ec9",null);c.options.__file="index.vue";n["default"]=c.exports},f370:function(e,n,t){}}]);
//# sourceMappingURL=chunk-a5c3163c.8bd80ca1.js.map