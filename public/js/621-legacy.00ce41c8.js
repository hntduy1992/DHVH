"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[621],{4497:function(t,e,i){i.d(e,{Z:function(){return b}});var n=i(4367),a=i(68932),o=i(23796),s=(i(9653),i(73210),i(26699),i(32023),i(41539),i(69826),i(43242)),l=i(25795),r=i(65907),u=i(83944),c=i(90390),d=i(60423),h=i(95703),f=i(45600),m=i(73325),v=i(71824),p=i(4589),g=(0,m.Z)(r.Z,u.Z,c.Z,d.Z,h.Z,l.Z),b=g.extend({name:"v-dialog",directives:{ClickOutside:f.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},(0,o.Z)(t,"v-dialog ".concat(this.contentClass).trim(),!0),(0,o.Z)(t,"v-dialog--active",this.isActive),(0,o.Z)(t,"v-dialog--persistent",this.persistent),(0,o.Z)(t,"v-dialog--fullscreen",this.fullscreen),(0,o.Z)(t,"v-dialog--scrollable",this.scrollable),(0,o.Z)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&(0,v.Jk)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c.Z.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,i;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(i=t.$refs.dialog)||void 0===i||i.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),n=(0,a.Z)(i).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(s.Z,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:(0,n.Z)({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=(0,n.Z)((0,n.Z)({},t.style),{},{maxWidth:(0,p.kb)(this.maxWidth),width:(0,p.kb)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},27781:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(68932),a=i(4367),o=i(9726),s=(i(9653),i(26699),i(41539),i(21249),i(68309),i(92222),i(40561),i(54747),i(47042),i(55978)),l=s.Z,r=i(95424),u=i(4589),c=i(71824),d=i(76290),h=l.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return(0,u.TI)(t).every((function(t){return null!=t&&"object"===(0,o.Z)(t)}))}}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},l.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,u.XE)(e,1024===this.base))},internalArrayValue:function(){return(0,u.TI)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,o=void 0===a?0:a,s=t.truncateText(n);return t.showSize?"".concat(s," (").concat((0,u.XE)(o,1024===t.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&(0,c.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];(0,u.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r.Z,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=l.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,d.y0)(t.data.style,{display:"none"})),t},genInput:function(){var t=l.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=l.options.methods.genTextFieldSlot.call(this);return e.data.on=(0,a.Z)((0,a.Z)({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=(0,n.Z)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},72542:function(t,e,i){i.r(e),i.d(e,{default:function(){return U}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LayoutDefault",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-subtitle",[t._v("LỌC BỘ TIÊU CHÍ ĐÁNH GIÁ")]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{dense:"",label:"Năm đánh giá","item-text":"name","item-value":"id",items:t.years},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-autocomplete",{attrs:{dense:"",label:"Bộ tiêu chí","item-text":"name","item-value":"id",items:t.categories},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}})],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-data-table",{attrs:{id:"survey",dense:"","item-key":"name","mobile-breakpoint":"0","disable-pagination":"","disable-sort":"","disable-filtering":"","hide-default-footer":"",headers:t.headers,items:t.iData,loading:t.loading},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[i("tbody",[t._l(n,(function(e,n){return[e.danhDauCau<2?[i("CauHoi",{key:e+n,attrs:{question:e}})]:t._e(),e.danhDauCau>=2?[i("CauTraLoi",{key:e+n,attrs:{question:e}})]:t._e()]}))],2),i("tfoot",[0==n.length?i("tr",[i("td",{staticClass:"text-center",attrs:{colspan:"8"}},[i("p",{staticClass:"ma-0"},[t._v(" Không tìm thấy dữ liệu ")])])]):t._e(),i("tr",[i("td"),i("td",{staticClass:"text-right font-weight-bold"},[t._v(" Tổng cộng ")]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold red--text"},[t._v(t._s(t.total1))])]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold red--text"},[t._v(t._s(parseFloat(t.total).toFixed(2)))])]),i("td"),i("td")])])]}}])})],1),i("v-divider"),i("v-card-actions",[i("v-row",{attrs:{dense:"","no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"12"}},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v(" File xác nhận điểm tự đánh giá của thủ trưởng đơn vị (có đóng dấu ký tên) ")]),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-file-input",{staticStyle:{"min-height":"auto","max-width":"300px"},attrs:{dense:"","hide-details":"","prepend-icon":"","prepend-inner-icon":"mdi-upload",placeholder:"File xác nhận điểm tự đánh giá",height:"20",clearable:"",disabled:t.disableSubmit},on:{change:t.upload,"click:clear":t.clearFile}})],1)],1),i("v-spacer"),i("v-btn",{attrs:{color:"error",loading:t.isSubmitting,disabled:t.disableSubmit},on:{click:function(e){return e.stopPropagation(),t.fnSubmit.apply(null,arguments)}}},[t._v(" Gửi điểm ")])],1)],1),i("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 red white--text"},[t._v(" HỆ THỐNG ")]),i("v-card-text",{staticClass:"pa-0"},[i("div",{staticClass:"pa-3 font-weight-bold"},[t._v("Bạn chưa đính kèm file xác nhận điểm tự đánh giá.")])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Đồng ý ")])],1)],1)],1)],1)],1)],1)},a=[],o=i(67906),s=i(16198),l=i(4367),r=(i(41539),i(54747),i(21249),i(20629)),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticClass:"font-weight-bold text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":!0,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.question.diemLonNhat).toFixed(2)))])]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":0==t.question.level,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.diemTuDanhGia).toFixed(2)))])]),i("td",{attrs:{rowspan:1==t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1==t.question.danhDauCau?[null!=t.fileName?i("div",{staticClass:"text-center"},[i("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2 white--text",attrs:{color:"blue-grey",elevation:"0",small:"",link:"",target:"_blank",href:t.download()}},"v-btn",a,!1),n),[i("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-cloud-download ")]),i("span",{staticClass:"ml-2"},[t._v("Tải về")])],1)]}}],null,!1,2256436589)},[i("span",[t._v(t._s(t.fileName.split("/").pop()))])])],1):t._e()]:t._e()],2),i("td",{staticClass:"text-center",attrs:{rowspan:1==t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1==t.question.danhDauCau&&null!=t.ghiChuDanhGia?i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",disabled:""},model:{value:t.ghiChuDanhGia,callback:function(e){t.ghiChuDanhGia=e},expression:"ghiChuDanhGia"}})],1):t._e()])])},c=[],d=(i(69826),{props:{question:{type:Object,default:null}},data:function(){return{dialog:!1,loading:!1,score:0,fileName:null,ghiChuDanhGia:null}},computed:(0,l.Z)((0,l.Z)({},(0,r.Se)("khaoSatStore",["bangDiem","cauHoi"])),{},{diemTuDanhGia:function(){var t,e,i=this;return null!==(t=null===(e=this.cauHoi.find((function(t){return t.maCauHoi===i.question.id})))||void 0===e?void 0:e.diem)&&void 0!==t?t:0}}),watch:{bangDiem:function(){var t=this;if(1===this.question.danhDauCau){var e=this.bangDiem.find((function(e){return e.maCauHoi===t.question.id}));this.fileName=e.fileDanhGia,this.ghiChuDanhGia=e.ghiChuDanhGia}}},methods:{download:function(){return"https://cscchcsadec.dongthap.gov.vn/storage/"+this.fileName}}}),h=d,f=i(1001),m=i(43453),v=i.n(m),p=i(680),g=i(96428),b=i(34350),C=i(19330),x=(0,f.Z)(h,u,c,!1,null,"bb0172ee",null),y=x.exports;v()(x,{VBtn:p.Z,VIcon:g.Z,VTextarea:b.Z,VTooltip:C.Z});var S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticClass:"font-weight-bold text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center font-italic"},[t._v(" "+t._s(t.question.diemLonNhat)+" ")]),i("td",[1===t.question.loaiCauHoi||3===t.question.danhDauCau&&1===t.question.loaiCauHoi?["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:""},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:""},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:""},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:""},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]:t._e()],2),3===t.question.danhDauCau&&1===t.question.loaiCauHoi?[i("td",[null!=t.fileName?i("div",{staticClass:"text-center"},[i("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2 white--text",attrs:{color:"blue-grey",elevation:"0",small:"",link:"",target:"_blank",href:t.download()}},"v-btn",a,!1),n),[i("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-cloud-download ")]),i("span",{staticClass:"ml-2"},[t._v("Tải về")])],1)]}}],null,!1,2256436589)},[i("span",[t._v(t._s(t.fileName.split("/").pop()))])])],1):t._e()]),i("td",{staticClass:"text-center font-weight-bold"},[null!=t.ghiChuDanhGia?i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",disabled:""},model:{value:t.ghiChuDanhGia,callback:function(e){t.ghiChuDanhGia=e},expression:"ghiChuDanhGia"}})],1):t._e()])]:t._e(),2===t.question.loaiCauHoi?[i("td"),i("td",{staticClass:"text-center font-weight-bold"},[t._v(" ĐTXHH ")])]:t._e()],2)},w=[],D=(i(38862),i(9653),i(56977),{props:{question:{type:Object,default:null}},data:function(){return{dialog:!1,loading:!1,formInput:null,minQuestion:{},ghiChuDanhGia:null,fileName:null}},computed:(0,l.Z)((0,l.Z)({},(0,r.Se)("khaoSatStore",["bangDiem","cauHoi","eventChange"])),{},{points:function(){var t=[],e=JSON.parse(JSON.stringify(this.question.diemNhoNhat));while(Number(e.toFixed(2))<=this.question.diemLonNhat)t.push({id:Number(e.toFixed(2)),name:e.toFixed(2)}),e+=this.question.buocNhay;return t}}),watch:{bangDiem:function(){var t=this;if(1===this.question.loaiCauHoi&&2===this.question.danhDauCau){var e=this.bangDiem.find((function(e){return e.maCauHoi===t.question.parentId}));this.ghiChuDanhGia=null===e||void 0===e?void 0:e.ghiChuDanhGia,this.fnSetValueForm(e)}if(1===this.question.loaiCauHoi&&3===this.question.danhDauCau){var i=this.bangDiem.find((function(e){return e.maCauHoi===t.question.id}));this.fnSetValueForm(i),this.fileName=null===i||void 0===i?void 0:i.fileDanhGia,this.ghiChuDanhGia=null===i||void 0===i?void 0:i.ghiChuDanhGia}}},methods:{download:function(){return"https://cscchcsadec.dongthap.gov.vn/storage/"+this.fileName},fnSetValueForm:function(t){var e=this,i=null===t||void 0===t?void 0:t.noiDungTraLoi.find((function(t){return t.id===e.question.id}));i&&(this.formInput=i.diem,this.$store.dispatch("khaoSatStore/capNhatDiemCapTren",t))}}}),k=D,Z=i(83702),_=i(68978),I=i(74739),$=i(43986),N=i(55978),T=(0,f.Z)(k,S,w,!1,null,"22b0ddba",null),V=T.exports;v()(T,{VBtn:p.Z,VCheckbox:Z.Z,VIcon:g.Z,VRadio:_.Z,VRadioGroup:I.Z,VSelect:$.Z,VTextField:N.Z,VTextarea:b.Z,VTooltip:C.Z});var q=i(45806),A=i(90073),H=i(33578),G=i(42013),B={metaInfo:{title:"Gửi điểm",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:H.Z,IBreadcrumb:G.Z,CauTraLoi:V,CauHoi:y},data:function(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"TỰ ĐÁNH GIÁ",disabled:!1,href:"/Auth/KhaoSat/TuDanhGia/ChamDiem"}],dialog:!1,category:{},iData:[],loading:!1,questions:[],year:(new Date).getFullYear(),categoryId:0,categories:[],isSubmitting:!1,disableSubmit:!0,total:0,total1:0,headers:[{text:"STT",value:"stt",width:20,align:"center"},{text:"Tiêu chí",value:"name",width:260},{text:"Điểm tối đa",value:"maxScore",width:55,align:"center"},{text:"Tự đánh giá",value:"year",width:75,align:"center"},{text:"Đính kèm",value:"year",width:80,align:"center"},{text:"Ghi chú",value:"year",width:80,align:"center"}]}},computed:(0,l.Z)((0,l.Z)({},(0,r.rn)("khaoSatStore",["bangDiem"])),{},{years:function(){for(var t=[],e=(new Date).getFullYear()+2,i=2022;i<e;i++)t.push({id:i,name:"Năm ".concat(i)});return t.reverse()}}),watch:{year:function(){this.categoryId=0,this.categories=[],this.data=[],this.fnGetDanhMuc()},categoryId:function(){this.data=[],this.fnGetCauHoi()},bangDiem:function(t){var e=0;t.forEach((function(t){e+=t.diem})),this.total=e}},created:function(){this.fnGetDanhMuc()},methods:{fnGetDanhMuc:function(){var t=this;return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("auth/khao-sat/tu-danh-gia/danh-muc",{params:{namApDung:t.year}}).then((function(e){var i,n;t.categories=(null===(i=e.data)||void 0===i?void 0:i.data).map((function(t){return{id:t.id,name:t.tenDanhMuc}})),t.categoryId=null===(n=t.categories[0])||void 0===n?void 0:n.id})).catch();case 2:return e.next=4,t.fnGetAvailable();case 4:case"end":return e.stop()}}),e)})))()},fnGetCauHoi:function(){var t=this;this.loading=!0,this.$axios.get("auth/khao-sat/tu-danh-gia/cau-hoi",{params:{maDanhMuc:this.categoryId,namApDung:this.year}}).then((function(e){t.iData=e.data.data.map((function(t){return A.x.fromJson(t)}));var i=[],n=[];t.total1=0,t.iData.forEach((function(e){var a=0===e.parentId?e.diemLonNhat:0;t.total1=t.total1+a,1!==e.danhDauCau&&3!==e.danhDauCau||(e.bangdiem||(e.bangdiem=q.Q.baseJson(),e.bangdiem.maCauHoi=e.id,e.bangdiem.maDanhMuc=t.categoryId,e.bangdiem.parentId=e.parentId),i.push(q.Q.fromJson(e.bangdiem))),n.push({maCauHoi:e.id,parentId:e.parentId,loaiCauHoi:e.loaiCauHoi,loaiDieuKien:e.loaiDieuKien,diem:0,diemThamDinh:0})})),setTimeout((function(){t.$store.commit("khaoSatStore/bangDiem",i),t.$store.commit("khaoSatStore/cauHoi",n)}),1)})).catch().finally((function(){t.loading=!1}))},fnGetAvailable:function(){var t=this;return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("auth/khao-sat/tu-danh-gia/kiem-tra-hop-le",{maDanhMuc:t.categoryId}).then((function(e){t.disableSubmit=!e.data.data,t.$store.commit("khaoSatStore/kiemTraTuDanhGia",t.disableSubmit)})).catch();case 2:case"end":return e.stop()}}),e)})))()},fnSubmit:function(){var t=this;null!=this.fileName?(this.isSubmitting=!0,this.$axios.post("auth/khao-sat/tu-danh-gia/gui-diem",{maDanhMuc:this.categoryId,fileName:this.fileName}).then((function(e){t.$store.dispatch("SnackbarStore/showSnackBar",e.data)})).catch().finally((function(){t.isSubmitting=!1,t.fnGetAvailable()}))):this.dialog=!0},upload:function(t){var e=this;return(0,s.Z)((0,o.Z)().mark((function i(){var n;return(0,o.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.loading=!0,t){i.next=4;break}return e.loading=!1,i.abrupt("return",null);case 4:return n=new FormData,n.append("file",t),i.next=8,e.$axios.post("auth/file-manager/singleUpload",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data.success&&(e.fileName=t.data.fileUrl)})).catch().finally((function(){e.loading=!1}));case 8:case"end":return i.stop()}}),i)})))()},clearFile:function(){this.fileName=null}}},F=B,L=i(71835),E=i(32371),z=i(37118),O=i(82102),M=i(16598),K=i(4497),J=i(11418),j=i(27781),P=i(62877),Q=i(99762),R=(0,f.Z)(F,n,a,!1,null,null,null),U=R.exports;v()(R,{VAutocomplete:L.Z,VBtn:p.Z,VCard:E.Z,VCardActions:z.h7,VCardSubtitle:z.Qq,VCardText:z.ZB,VCardTitle:z.EB,VCol:O.Z,VDataTable:M.Z,VDialog:K.Z,VDivider:J.Z,VFileInput:j.Z,VRow:P.Z,VSelect:$.Z,VSpacer:Q.Z})}}]);
//# sourceMappingURL=621-legacy.00ce41c8.js.map