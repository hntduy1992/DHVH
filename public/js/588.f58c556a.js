"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[588],{1835:function(t,e,i){i.d(e,{Z:function(){return r}});i(6699);var s=i(3986),n=i(5978),a=i(6290),o=i(4589);const h={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var r=s.Z.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>h},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,o.qF)(t,this.itemText),i=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...h,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=s.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((t=>t===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===o.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o.Do.backspace&&t!==o.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,n=t!==s-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const t=n.Z.options.methods.genInput.call(this);return t.data=(0,a.ZP)(t.data,{attrs:{"aria-activedescendant":(0,o.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,o.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[o.Do.home,o.Do.end].includes(e)||s.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],n=this.getText(s);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",n),null===(i=t.clipboardData)||void 0===i||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})},4497:function(t,e,i){i.d(e,{Z:function(){return g}});i(6699);var s=i(3242),n=i(5795),a=i(5907),o=i(3944),h=i(390),r=i(423),l=i(5703),c=i(5600),d=i(3325),u=i(1824),m=i(4589);const v=(0,d.Z)(a.Z,o.Z,h.Z,r.Z,l.Z,n.Z);var g=v.extend({name:"v-dialog",directives:{ClickOutside:c.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9330:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(5795),n=i(6952),a=i(4561),o=i(5907),h=i(5936),r=i(4589),l=i(1824),c=i(3325),d=(0,c.Z)(n.Z,a.Z,o.Z,h.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||i?n=s+t.width/2-e.width/2:(this.left||this.right)&&(n=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),`${this.calcXOverflow(n,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,r.kb)(this.maxWidth),minWidth:(0,r.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,r.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===r.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},8588:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LayoutDefault",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-subtitle",[t._v("LỌC BỘ TIÊU CHÍ ĐÁNH GIÁ")]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{dense:"",label:"Năm đánh giá","item-text":"name","item-value":"id",items:t.years},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-autocomplete",{attrs:{dense:"",label:"Bộ tiêu chí","item-text":"name","item-value":"id",items:t.categories},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}})],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-data-table",{attrs:{id:"survey",dense:"","item-key":"name","mobile-breakpoint":"0","disable-pagination":"","disable-sort":"","disable-filtering":"","hide-default-footer":"",headers:t.headers,items:t.data,loading:t.loading},scopedSlots:t._u([{key:"item.tenDonVi",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-600",staticStyle:{"margin-left":"15px"}},[t._v(t._s(s))])]}},{key:"item.dinhkem",fn:function(e){var s=e.value;return[null!=s&&""!=s?i("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[null!=s&&""!=s?i("v-btn",t._g(t._b({staticClass:"ma-2 white--text",attrs:{color:"blue-grey",elevation:"0",small:"",link:"",target:"_blank",href:t.download(s)}},"v-btn",a,!1),n),[i("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-cloud-download ")]),i("span",{staticClass:"ml-2"},[t._v("Tải về")])],1):t._e()]}}],null,!0)},[i("span",[t._v(t._s(s.split("/").pop()))])]):t._e()]}},{key:"item.diemdanhgia",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(s).toFixed(2)))])]}},{key:"item.diemthamdinh",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(s).toFixed(2)))])]}},{key:"item.diemtonghop",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(s).toFixed(2)))])]}},{key:"item.trangThaiHienTai",fn:function(e){var s=e.value,n=e.item;return[3===s&&0===n.dathamdinh?i("v-btn",{attrs:{small:"",outlined:"",color:"error"},on:{click:function(e){return t.openDialog(n.id)}}},[t._v(" Đang thẩm định ")]):t._e(),3===s&&1===n.dathamdinh?i("v-btn",{attrs:{small:"",outlined:"",color:"green",to:"XacNhan/"+n.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Chờ xác nhận ")]):4===s?i("v-btn",{attrs:{small:"",outlined:"",color:"primary",to:"XacNhan/"+n.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Đã xác nhận & chờ ý kiến ")]):5===s?i("v-btn",{attrs:{small:"",outlined:"",color:"#048940",to:"XacNhan/"+n.id+"/XemYKien?categoryId="+t.categoryId}},[t._v(" Xác nhận ý kiến & tổng hợp ")]):6===s?i("v-btn",{attrs:{small:"",outlined:"",color:"#581845",to:"XacNhan/"+n.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Đang thẩm định lại ")]):7===s?i("v-btn",{attrs:{small:"",outlined:"",color:"#048940",to:"XacNhan/"+n.id+"/XemYKien?categoryId="+t.categoryId}},[t._v(" Xác nhận & tổng hợp ")]):8===s?i("v-btn",{attrs:{small:"",outlined:"",color:"#f70690",to:"XacNhan/"+n.id+"/XemYKien?categoryId="+t.categoryId}},[t._v(" Hoàn thành tổng hợp ")]):t._e()]}},{key:"item.thamdinh",fn:function(e){var s=e.item;return[s.trangThaiHienTai>=3&&s.trangThaiHienTai<7&&4!=s.trangThaiHienTai?i("v-btn",{attrs:{small:"",text:"",color:"#bf213c"},on:{click:function(e){return t.openDialog(s.id)}}},[t._v(" Trả thẩm định ")]):t._e()]}}],null,!0)})],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"blue",dark:"",small:""},on:{click:t.fnExportToWord}},[i("v-icon",[t._v("mdi-file-export")]),t._v(" Xuất file tổng hợp ")],1),i("v-spacer")],1)],1),i("v-dialog",{attrs:{persistent:"",width:"650"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" Danh sách đơn vị thẩm định ")]),i("v-card-text",[i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(" Đơn vị thẩm định ")]),i("th",{staticClass:"text-left"},[t._v(" Trạng thái ")]),i("th",{staticClass:"text-left"})])]),i("tbody",t._l(t.desserts,(function(e){return i("tr",{key:e.tenDonVi},[i("td",[i("strong",[t._v(t._s(e.tenDonVi))])]),i("td",[1==e.trangThai?i("span",[t._v("Đã thẩm định")]):i("span",{staticClass:"error--text font-weight-bold"},[t._v("Chưa thẩm định")])]),i("td",[1==e.trangThai?i("v-btn",{staticClass:"white--text",attrs:{color:"red",elevation:"2",small:"",rounded:""},on:{click:function(i){return t.fnConfirmReturn(e)}}},[t._v(" Trả thẩm định ")]):t._e()],1)])})),0)]},proxy:!0}])})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Đóng ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"315"},model:{value:t.confirmModel,callback:function(e){t.confirmModel=e},expression:"confirmModel"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v(" HỆ THỐNG ")]),i("v-card-text",[t._v("Bạn chắc chắn muốn trả điểm thẩm định?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.fnConfirmClose}},[t._v(" Không ")]),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.fnConfirmAccept}},[t._v(" Có ")])],1)],1)],1)],1)],1)],1)},n=[],a=i(3578),o=i(2013),h={name:"XacNhan-index",components:{LayoutDefault:a.Z,IBreadcrumb:o.Z},data(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Auth/Dashboard"},{text:"Xác Nhận",disabled:!1,href:"/Auth/KhaoSat/XacNhan"},{text:"Danh Sách Đơn Vị",disabled:!1,href:""}],category:{},data:[],loading:!1,questions:[],year:(new Date).getFullYear(),categoryId:0,categories:[],isSubmitting:!1,disableSubmit:!1,total:0,headers:[{text:"Đơn vị tự đánh giá",value:"tenDonVi",width:230},{text:"File xác nhận",value:"dinhkem",width:90,align:"center"},{text:"Điểm tự đánh giá",value:"diemdanhgia",width:55,align:"center"},{text:"Điểm thẩm định",value:"diemthamdinh",width:75,align:"center"},{text:"Tổng kết điểm",value:"diemtonghop",width:75,align:"center"},{text:"Trạng thái",value:"trangThaiHienTai",width:75,align:"center"},{text:"Đơn vị thẩm định",value:"thamdinh",width:75,align:"center"}],dialog:!1,desserts:[],confirmModel:!1,orgId:{}}},computed:{years(){const t=[],e=(new Date).getFullYear()+2;for(let i=2022;i<e;i++)t.push({id:i,name:`Năm ${i}`});return t.reverse()}},watch:{year(){this.categoryId=0,this.data=[],this.fnGetDanhMuc()},categoryId(){this.data=[],this.fnDonViDanhGia()}},created(){this.fnGetDanhMuc(),0===this.categoryId&&(this.disableSubmit=!1)},methods:{async fnExportToWord(){await this.$axios.post("auth/file-manager/export-to-word/tong-hop",{danhMuc:this.categoryId,namApDung:this.year}).then((t=>{window.location.href="https://cscchcsadec.dongthap.gov.vn/storage/files/TongHop/"+t.data.file}))},async fnGetDanhMuc(){await this.$axios.get("auth/khao-sat/xac-nhan/danh-muc",{params:{namApDung:this.year}}).then((t=>{this.categories=t.data?.data.map((t=>({id:t.id,name:t.tenDanhMuc}))),this.categoryId=this.categories[0]?.id})).catch()},async fnGetDanhSachDonViThamDinh(t){await this.$axios.get("auth/khao-sat/xac-nhan/don-vi-tham-dinh",{params:{namApDung:this.year,categoryId:this.categoryId,donVi:t}}).then((e=>{this.desserts=e.data?.data.map((e=>({id:e.id,maDonViDanhGia:t,tenDonVi:e.tenDonVi,trangThai:e.trangThai}))),console.log("---------",this.desserts)})).catch()},async fnDonViDanhGia(){this.loading=!0,await this.$axios.get("auth/khao-sat/xac-nhan/don-vi",{params:{year:this.year,categoryId:this.categoryId}}).then((t=>{this.data=t.data.data})).finally((()=>{this.loading=!1}))},async fnSubmit(){},download(t){return"https://cscchcsadec.dongthap.gov.vn/storage/"+t},openDialog(t){this.dialog=!0,this.fnGetDanhSachDonViThamDinh(t)},closeDialog(){this.dialog=!1,this.desserts=[]},fnConfirmReturn(t){this.orgId=t,this.confirmModel=!0},async fnConfirmAccept(){const t={namApDung:this.year,maDanhMuc:this.categoryId,maDonViThamDinh:this.orgId.id,maDonViDanhGia:this.orgId.maDonViDanhGia};await this.$axios.post("auth/khao-sat/xac-nhan/tra-diem-tham-dinh",t).catch(),await this.fnGetDanhSachDonViThamDinh(this.orgId.maDonViDanhGia),this.fnConfirmClose()},fnConfirmClose(){this.confirmModel=!1,this.orgId={}}}},r=h,l=i(1001),c=i(3453),d=i.n(c),u=i(1835),m=i(680),v=i(2371),g=i(7118),p=i(2102),f=i(6598),y=i(4497),I=i(1418),x=i(6428),b=i(2877),D=i(3986),S=i(3568),C=i(9762),w=i(9330),k=(0,l.Z)(r,s,n,!1,null,null,null),_=k.exports;d()(k,{VAutocomplete:u.Z,VBtn:m.Z,VCard:v.Z,VCardActions:g.h7,VCardSubtitle:g.Qq,VCardText:g.ZB,VCardTitle:g.EB,VCol:p.Z,VDataTable:f.Z,VDialog:y.Z,VDivider:I.Z,VIcon:x.Z,VRow:b.Z,VSelect:D.Z,VSimpleTable:S.Z,VSpacer:C.Z,VTooltip:w.Z})}}]);
//# sourceMappingURL=588.f58c556a.js.map