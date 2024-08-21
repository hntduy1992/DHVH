"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[920],{8119:function(t,e,i){var s=i(680);e["Z"]=s.Z},5424:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(3325),n=i(5827),r=i(172),o=i(6952),l=i(7352),a=i(8085),h=i(2936),c=i(6505),d=i(9131),u=i(1824),p=(0,s.Z)(o.Z,d.Z,c.Z,a.Z,(0,l.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n.Zq,t)},genClose(){return this.$createElement(r.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const n=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(n,s),e)}})},7781:function(t,e,i){i.d(e,{Z:function(){return h}});i(6699);var s=i(5978),n=s.Z,r=i(5424),o=i(4589),l=i(1824),a=i(6290),h=n.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,o.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...n.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,o.XE)(e,1024===this.base))},internalArrayValue(){return(0,o.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,o.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,l.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,o.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(r.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=n.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,a.y0)(t.data.style,{display:"none"})),t},genInput(){const t=n.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=n.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},5871:function(t,e,i){i.d(e,{$:function(){return l}});const s=t=>({id:t.id,userName:t.userName,password:t.password,fullName:t.fullName,image:t.image,email:t.email,phone:t.phone,organizationId:t?.organizationId,roles:t.roles,status:t.status}),n=t=>({id:t.id,userName:t.userName,fullName:t.fullName,image:t.image,email:t.email,phone:t.phone,organizationId:t?.organizationId,organization:t?.organization,roles:t?.roles?t.roles.map((t=>t.id)):[],status:t.status}),r=t=>({id:t.id,userName:t.userName,fullName:t.fullName,image:t.image,email:t.email,phone:t.phone,organizationId:t?.organizationId,organization:t?.organization,roles:t?.roles?t.roles.map((t=>t.name)):[],status:t.status}),o=()=>({id:null,userName:null,password:null,fullName:null,image:null,email:null,phone:null,organizationId:null,roles:null,status:1}),l={toJson:s,fromJson:n,baseJson:o,fromProfileJson:r}},5486:function(t,e,i){i.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ValidationProvider",{attrs:{name:t.$attrs.label,rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[i("v-text-field",t._g(t._b({attrs:{"error-messages":s},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},"v-text-field",t.$attrs,!1),t.$listeners))]}}])})},n=[],r=i(2954),o={components:{ValidationProvider:r.d_},props:{rules:{type:[Object,String],default:""},value:{type:null}},data:()=>({innerValue:""}),watch:{innerValue(t){this.$emit("input",t)},value(t){this.innerValue=t}},created(){this.value&&(this.innerValue=this.value)}},l=o,a=i(1001),h=i(3453),c=i.n(h),d=i(5978),u=(0,a.Z)(l,s,n,!1,null,null,null),p=u.exports;c()(u,{VTextField:d.Z})},6920:function(t,e,i){i.r(e),i.d(e,{default:function(){return at}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutDefault",[s("validation-observer",{ref:"observer"},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-card",[s("template",{slot:"progress"},[s("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),s("v-img",{staticClass:"img-fluid",attrs:{src:i(2321),height:"150",width:"480",alt:""}},[s("div",{staticStyle:{"padding-top":"80px !important"}},[s("v-badge",{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[s("v-avatar",{attrs:{size:"50px"}},[s("v-img",{attrs:{src:t.image}})],1)],1),s("div",{staticClass:"d-inline-flex flex-column justify-center ms-3",staticStyle:{"vertical-align":"middle",color:"white"}},[s("span",{staticStyle:{"font-size":"15px","font-weight":"bold"}},[t._v(" "+t._s(t.model.fullName)+" ")]),s("small",{staticStyle:{"font-size":"x-small"}},[t._v("@ "+t._s(t.model.userName))])])],1)]),s("v-card-text",{staticClass:"pa-0"},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("v-list",{attrs:{dense:""}},[s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Tên tài khoản: ")]),s("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(t.model.userName)+" ")])],1),s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Họ và tên: ")]),s("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(t.model.fullName)+" ")])],1),s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Email:")]),s("v-list-item-content",{staticClass:"align-end"},[t.model.email?s("span",[t._v(t._s(t.model.email))]):s("span",[t._v("-")])])],1),s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Số điện thoại: ")]),s("v-list-item-content",{staticClass:"align-end"},[t.model.phone?s("span",[t._v(t._s(t.model.phone))]):s("span",[t._v("-")])])],1),s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Đơn vị:")]),s("v-list-item-content",{staticClass:"align-end"},[t.model.organization?s("span",[t._v(t._s(t.model.organization.name))]):s("span",[t._v("-")])])],1),s("v-list-item",[s("v-list-item-content",{staticStyle:{"font-weight":"bold"}},[t._v("Quyền:")]),s("v-list-item-content",{staticClass:"align-end"},[t.model.roles&&t.model.roles.length>0?t._l(t.model.roles,(function(e){return s("v-chip",{key:e,staticClass:"mr-2",staticStyle:{"max-width":"80px","text-align":"center"},attrs:{outlined:"",small:""}},[t._v(" "+t._s(e)+" ")])})):s("span",[t._v("-")])],2)],1)],1)],1)],1)],1)],2)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[s("v-card",[s("v-tabs",{attrs:{color:"green"},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[s("v-tab",{attrs:{href:"#tab1"}},[t._v("Cập nhật thông tin")])],1),s("v-divider"),s("v-card-text",[s("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[s("v-tab-item",{staticClass:"pa-2",attrs:{value:"tab1"}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("VTextValidation",{attrs:{dense:"",outlined:"",label:"Họ và tên",rules:{required:!0}},model:{value:t.model.fullName,callback:function(e){t.$set(t.model,"fullName",e)},expression:"model.fullName"}})],1),s("v-col",{attrs:{cols:"12"}},[s("VTextValidation",{attrs:{dense:"",outlined:"",label:"Mật khẩu",rules:{min:6},"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("VTextValidation",{staticStyle:{"max-width":"90%"},attrs:{dense:"",outlined:"",label:"Email",rules:{email:!0}},model:{value:t.model.email,callback:function(e){t.$set(t.model,"email",e)},expression:"model.email"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("VTextValidation",{attrs:{dense:"",outlined:"",label:"Số điện thoại"},model:{value:t.model.phone,callback:function(e){t.$set(t.model,"phone",e)},expression:"model.phone"}})],1),s("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[s("v-file-input",{attrs:{label:"Avatar","prepend-inner-icon":"mdi-upload","prepend-icon":"",accept:".png,.jpg,.jpeg",outlined:"",dense:"","small-chips":"",counter:"","hide-spin-buttons":""},on:{change:function(e){return t.upload(e)},"click:clear":function(e){return t.clearFile()}}})],1)],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"warning",small:""},on:{click:t.fnReset}},[t._v(" Làm lại ")]),s("v-btn",{attrs:{color:"error",small:""},on:{click:t.fnSubmit}},[t._v(" Lưu lại ")])],1)],1)],1)],1)],1)],1)},n=[],r=i(2954),o=i(5871),l=i(5486),a=i(3578),h={name:"ProfileUser",metaInfo:{title:"Thông tin cá nhân",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:a.Z,VTextValidation:l.Z,ValidationObserver:r._j},data(){return{model:o.$.baseJson(),showPassword:!1,tabModel:"tab1",permissions:[],submitted:!1,fileName:null}},computed:{image(){const t=this.$store.state.authStore.auth?.user?.image;return t?`https://cscchcsadec.dongthap.gov.vn/storage/${t}`:i(6645)}},mounted(){this.fnGetProfile()},methods:{async upload(t){if(this.loading=!0,!t)return this.loading=!1,null;const e=new FormData;e.append("file",t),await this.$axios.post("auth/file-manager/singleUpload",e,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{t.data.success&&(this.fileName=t.data.fileUrl)})).catch().finally((()=>{this.loading=!1}))},clearFile(){this.fileName=null},async fnGetProfile(){await this.$axios.get("auth/users/profile").then((t=>{this.model=o.$.fromProfileJson(t.data.data)})).catch((()=>{this.$store.dispatch("snackbarStore/showSnackBar",{message:"Thông tin yêu cầu không hợp lệ",isError:!0})}))},async fnSubmit(){this.submitted=!0;const t=await this.$refs.observer.validate();if(!t)return this.submitted=!1,!1;this.model.image=this.fileName,await this.$axios.post("auth/users/profile",o.$.toJson(this.model)).then((t=>{this.$store.commit("authStore/update",t.data.data),this.$store.dispatch("SnackbarStore/showSnackBar",t.data),this.fnReset()})).catch((t=>{const e=t.response?.data.errors;e&&this.$refs.observer.setErrors(e)})).finally((()=>{this.submitted=!1}))},async fnReset(){await this.fnGetProfile()}}},c=h,d=i(1001),u=i(3453),p=i.n(u),v=i(6370),f=i(2137),m=i(680),g=i(2371),w=i(7118),b=i(5424),y=i(2102),$=i(1418),x=i(7781),S=i(7047),C=i(6816),k=i(7620),I=i(4039),T=i(7003),_=i(2877),V=i(9762),B=i(7352),Z=i(6505),z=i(8085),A=i(4589),N=i(3325);const O=(0,N.Z)(Z.Z,(0,B.d)("tabsBar"),z.Z);var P=O.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...Z.Z.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.attrs={...i.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0},i.on={...i.on,keydown:t=>{t.keyCode===A.Do.enter&&this.click(t),this.$emit("keydown",t)}},t(e,i,this.$slots.default)}}),E=i(8625),D=i(5500);const M=(0,N.Z)(E.Z,(0,B.d)("windowGroup","v-window-item","v-window"));var R=M.extend().extend().extend({name:"v-window-item",directives:{Touch:D.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,A.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,A.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),L=R.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=R.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),G=(i(6699),i(172)),H=i(5827),W=i(4622),F=i(6341),X=i(549);function j(t){const e=.501,i=Math.abs(t);return Math.sign(t)*(i/((1/e-2)*(1-i)+1))}function q(t,e,i,s){const n=t.clientWidth,r=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);const o=e.wrapper+s,l=n+r,a=.4*n;return r<=s?s=Math.max(r-a,0):o<=l&&(s=Math.min(s-(o-l-a),e.content-e.wrapper)),i?-s:s}function J(t,e,i){const{offsetLeft:s,clientWidth:n}=t;if(i){const t=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const U=(0,N.Z)(W.y,F.Z).extend({name:"base-slide-group",directives:{Resize:X.Z,Touch:D.Z},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...W.y.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?j(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+j(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of(0,A.iZ)(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=q(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const i=`${t[0].toUpperCase()}${t.slice(1)}`,s=this[`has${i}`];return this.showArrows||s?this.$createElement(G.Z,{props:{disabled:!s}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(H.Z5,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,i,s){const n=i?-1:1,r=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,i=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=J(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=q(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});U.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var Y=i(9177),K=(0,N.Z)(U,Y.Z,z.Z).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...U.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=U.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const i=this.items,s=t.path,n=e.path;let r=!1,o=!1;for(const l of i)if(l.to===n?o=!0:l.to===s&&(r=!0),r&&o)break;!r&&o&&(this.internalValue=void 0)}},render(t){const e=U.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),Q=i(8119),tt=W.y.extend({name:"v-window",directives:{Touch:D.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...W.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var s,n,r;const o={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},a=null!=(s=null==(n=(r=this.$scopedSlots)[t])?void 0:n.call(r,{on:o,attrs:l}))?s:[this.$createElement(Q.Z,{props:{icon:!0},attrs:l,on:o},[this.$createElement(G.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},a)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),et=tt.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...tt.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||W.y.options.methods.getValue.call(this,t,e)}}}),it=i(6952),st=(0,N.Z)(it.Z).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),nt=i(1431);const rt=(0,N.Z)(it.Z,nt.Z,z.Z);var ot=rt.extend().extend({name:"v-tabs",directives:{Resize:X.Z},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:(0,A.kb)(this.slider.height),left:this.isReversed?void 0:(0,A.kb)(this.slider.left),right:this.isReversed?(0,A.kb)(this.slider.right):void 0,top:this.vertical?(0,A.kb)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:(0,A.kb)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick((()=>{window.setTimeout(this.callSlider,30)}))},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar(t,e){const i={style:{height:(0,A.kb)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,i),this.setBackgroundColor(this.backgroundColor,i),this.$createElement(K,i,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(et,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(st,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const i=[],s=[],n=this.$slots.default||[],r=n.length;for(let o=0;o<r;o++){const r=n[o];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":i.push(r);break;default:s.push(r)}else s.push(r)}return{tab:s,slider:e,items:t,item:i}}},render(t){const{tab:e,slider:i,items:s,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,i),this.genItems(s,n)])}}),lt=(0,d.Z)(c,s,n,!1,null,null,null),at=lt.exports;p()(lt,{VAvatar:v.Z,VBadge:f.Z,VBtn:m.Z,VCard:g.Z,VCardActions:w.h7,VCardText:w.ZB,VChip:b.Z,VCol:y.Z,VDivider:$.Z,VFileInput:x.Z,VImg:S.Z,VList:C.Z,VListItem:k.Z,VListItemContent:I.km,VProgressLinear:T.Z,VRow:_.Z,VSpacer:V.Z,VTab:P,VTabItem:L,VTabs:ot,VTabsItems:et})}}]);
//# sourceMappingURL=920.10fa9ef9.js.map