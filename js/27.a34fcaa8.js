(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{Gc8S:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{staticClass:"eden-breadcrumb",attrs:{separator:"/"}},[r("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.list,function(e,n){return e.meta.title?r("el-breadcrumb-item",{key:e.path},["noredirect"===e.redirect||n===e.length-1?r("span",{staticClass:"no-redirect"},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")]):r("router-link",{attrs:{to:e.redirect||e.path}},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")])],1):t._e()}))],1)},a=[],i=(r("f3/d"),r("VRzm"),{name:"breadcrumb",data:function(){return{list:null}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name});t[0]&&"dashboard"!==t[0].name&&(t=[{path:"/dashboard",meta:{title:"dashboard"}}].concat(t)),this.list=t},getTitle:function(t){return this.$te("route.".concat(t))?this.$t("route.".concat(t)):t}}}),c=i,u=(r("maPQ"),r("xypg"),r("KHd+")),s=Object(u["a"])(c,n,a,!1,null,"7dd9b3ae",null);e["default"]=s.exports},hgyD:function(t,e,r){},maPQ:function(t,e,r){"use strict";var n=r("hgyD"),a=r.n(n);a.a},xj7F:function(t,e,r){},xypg:function(t,e,r){"use strict";var n=r("xj7F"),a=r.n(n);a.a}}]);
//# sourceMappingURL=27.a34fcaa8.js.map