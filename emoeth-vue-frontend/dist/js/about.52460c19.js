(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"166a":function(t,e,i){},"1e25":function(t,e,i){},"20d6":function(t,e,i){"use strict";var n=i("5ca1"),r=i("0a49")(6),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),n(n.P+n.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(s)},3408:function(t,e,i){},"3ad0":function(t,e,i){},"4f5e":function(t,e,i){"use strict";var n=i("1e25"),r=i.n(n);r.a},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return X})),i.d(e,"c",(function(){return U})),i.d(e,"b",(function(){return W}));var n=i("80d2"),r=(i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("7f7f"),i("6b54"),i("8e6e"),i("ac6a"),i("456d"),i("20d6"),i("bd86")),s=(i("3ad0"),i("8dd9"));function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,shaped:Boolean,subheader:Boolean,threeLine:Boolean,tile:{type:Boolean,default:!0},twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return u({},s["a"].options.computed.classes.call(this),{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--shaped":this.shaped,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=a(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(r){i.e(r)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:u({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),p=(i("4917"),i("db42"),i("9d26")),h=i("da13"),f=i("2b0e"),v=f["default"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}}),m=i("7e2b"),g=i("d9bd"),b=f["default"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(g["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}}),y=i("a9ad"),O=i("f2e7"),j=i("3206"),_=i("5607"),w=i("0789"),x=i("58df");function I(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var P=Object(x["a"])(m["a"],b,y["a"],Object(j["a"])("list"),O["a"]),V=P.extend().extend({name:"v-list-group",directives:{ripple:_["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(p["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(v,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(h["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(r["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:C({},this.listeners$,{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(n["j"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(v,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(w["a"],this.genItems())])}}),A=(i("899c"),i("7514"),i("6762"),i("2fdb"),i("c5f6"),i("166a"),i("a452")),S=i("7560");function k(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function D(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?k(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var $=Object(x["a"])(A["a"],S["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return D({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(g["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});$.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}});function B(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var L=Object(x["a"])($,y["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return E({},$.options.computed.classes.call(this),{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,E({},$.options.methods.genData.call(this),{attrs:{role:"listbox"}}))}}}),z=f["default"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,r=void 0===n?[]:n;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var s=r.filter((function(t){return!1===t.isComment&&" "!==t.text}));return s.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,r)}}),T=(i("3408"),i("24b2"));function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var H=Object(x["a"])(y["a"],T["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return F({height:Object(n["f"])(this.size),minWidth:Object(n["f"])(this.size),width:Object(n["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),G=H;function J(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?J(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var N=G.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return R({"v-list-item__avatar--horizontal":this.horizontal},G.options.computed.classes.call(this),{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=G.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),Q=Object(n["g"])("v-list-item__action-text","span"),X=Object(n["g"])("v-list-item__content","div"),U=Object(n["g"])("v-list-item__title","div"),W=Object(n["g"])("v-list-item__subtitle","div");h["a"]},"899c":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c}));var n=i("b0af"),r=i("80d2"),s=Object(r["g"])("v-card__actions"),a=Object(r["g"])("v-card__subtitle"),o=Object(r["g"])("v-card__text"),c=Object(r["g"])("v-card__title");n["a"]},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},db42:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("snackbar",{attrs:{text:"This page is still under construction 😉"}}),t._l(t.experiences,(function(e){return t.showIllustration?i("experience",{key:"experience-"+e.id,attrs:{experience:e,id:"experience-"+e.id}}):t._e()}))],2)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"px-12 py-6",attrs:{justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"5"}},[i("v-slide-x-transition",{attrs:{appear:!0}},[i("v-card",{staticClass:"custom-transition no-border-right"},[i("v-img",{attrs:{height:"280",src:t.experience.illustration}})],1)],1)],1),i("v-col",{staticClass:"justify-center d-flex",attrs:{cols:"7"}},[i("div",{staticClass:"experience-content"},[i("v-slide-x-reverse-transition",{attrs:{appear:!0}},[i("div",{key:"floating-"+t.experience.id,staticClass:"elevation-2 pa-2 white floater custom-transition"},[i("v-img",{attrs:{src:t.experience.logo,alt:t.experience.alt,width:"140px"}})],1)]),i("v-fade-transition",{attrs:{appear:!0}},[i("v-card",{staticClass:"no-border-left custom-transition",attrs:{transition:"fade",height:"280px"}},[i("v-card-title",[t._v(t._s(t.experience.dates))]),i("v-card-text",[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.experience.title))]),t._l(t.experience.missions,(function(e){return i("v-list-item-subtitle",{key:"mission-"+e.id},[t._v("\n                  "+t._s(e.action)+"\n                ")])}))],2)],1)],1)],1)],1)],1)])],1)},a=[],o={name:"Experience",props:{experience:Object,showIllustration:Boolean}},c=o,l=(i("4f5e"),i("2877")),u=i("6544"),d=i.n(u),p=i("b0af"),h=i("99d9"),f=i("62ad"),v=i("0789"),m=i("adda"),g=i("da13"),b=i("5d23"),y=i("0fd9"),O=Object(l["a"])(c,s,a,!1,null,"5c76797d",null),j=O.exports;d()(O,{VCard:p["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:f["a"],VFadeTransition:v["b"],VImg:m["a"],VListItem:g["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:y["a"],VSlideXReverseTransition:v["c"],VSlideXTransition:v["d"]});var _=i("22b2"),w={name:"About",components:{Experience:j,Snackbar:_["a"]},data:function(){return{showIllustration:!1,experiences:[{id:0,slug:"hellofresh_internship",title:"OpsTech Developer",dates:"January - July 2019",illustration:"https://cdn.vuetifyjs.com/images/cards/cooking.png",left_position:!0,logo:"https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg",alt:"HelloFresh Logo",missions:[{id:0,action:"• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes"},{id:1,action:" • Gathered customer data to support Customer Care and Finance teams with a dedicated interface"},{id:2,action:"• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company"},{id:3,action:"• Mined historical data to improve user experience and support Quality team"}]},{id:1,slug:"hellofresh_internship",title:"OpsTech Developer",dates:"January - July 2019",illustration:"https://cdn.vuetifyjs.com/images/cards/cooking.png",left_position:!0,logo:"https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg",alt:"HelloFresh Logo",missions:[{id:0,action:"• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes"},{id:1,action:" • Gathered customer data to support Customer Care and Finance teams with a dedicated interface"},{id:2,action:"• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company"},{id:3,action:"• Mined historical data to improve user experience and support Quality team"}]},{id:2,slug:"hellofresh_internship",title:"OpsTech Developer",dates:"January - July 2019",illustration:"https://cdn.vuetifyjs.com/images/cards/cooking.png",left_position:!0,logo:"https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg",alt:"HelloFresh Logo",missions:[{id:0,action:"• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes"},{id:1,action:" • Gathered customer data to support Customer Care and Finance teams with a dedicated interface"},{id:2,action:"• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company"},{id:3,action:"• Mined historical data to improve user experience and support Quality team"}]}]}},methods:{},mounted:function(){this.showIllustration=!0}},x=w,I=i("a523"),C=Object(l["a"])(x,n,r,!1,null,"f25b42f4",null);e["default"]=C.exports;d()(C,{VContainer:I["a"]})},fd3f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("snackbar",{attrs:{text:"This page is still under construction 😉"}}),i("v-row",{attrs:{justify:"center"}},[i("v-col",{staticClass:"justify-center d-flex",attrs:{cols:"12"}},[i("h1",{staticClass:"display-2 font-weight-light mb-3"},[t._v("\n        Blog page\n      ")])])],1)],1)},r=[],s=i("22b2"),a={name:"About",components:{Snackbar:s["a"]},data:function(){return{}},methods:{},mounted:function(){}},o=a,c=i("2877"),l=i("6544"),u=i.n(l),d=i("62ad"),p=i("a523"),h=i("0fd9"),f=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=f.exports;u()(f,{VCol:d["a"],VContainer:p["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=about.52460c19.js.map