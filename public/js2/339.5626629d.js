"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[339],{1835:function(t,e,i){i.d(e,{Z:function(){return r}});i(6699);var s=i(3986),a=i(5978),n=i(6290),l=i(4589);const h={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var r=s.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>h},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,l.qF)(t,this.itemText),i=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...h,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=s.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((t=>t===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l.Do.backspace&&t!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,a=t!==s-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const t=a.Z.options.methods.genInput.call(this);return t.data=(0,n.ZP)(t.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l.Do.home,l.Do.end].includes(e)||s.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],a=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},2339:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LayoutDefault",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-subtitle",[t._v("LỌC BỘ TIÊU CHÍ ĐÁNH GIÁ")]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{dense:"",label:"Năm đánh giá","item-text":"name","item-value":"id",items:t.years},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-autocomplete",{attrs:{dense:"",label:"Bộ tiêu chí","item-text":"name","item-value":"id",items:t.categories},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}})],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-data-table",{attrs:{id:"survey",dense:"","item-key":"name","mobile-breakpoint":"0","disable-pagination":"","disable-sort":"","disable-filtering":"","hide-default-footer":"",headers:t.headers,items:t.data,loading:t.loading},scopedSlots:t._u([{key:"item.tenDonVi",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-600",staticStyle:{"margin-left":"15px"}},[t._v(t._s(s))])]}},{key:"item.diemdanhgia",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(s).toFixed(2)))])]}},{key:"item.diemthamdinh",fn:function(e){var s=e.value;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(s).toFixed(2)))])]}},{key:"item.trangThaiHienTai",fn:function(e){var s=e.value,a=e.item;return[!s||s<2?i("v-btn",{attrs:{small:"",outlined:"",color:"red"}},[t._v(" Chưa gửi đánh giá ")]):2===s||6===s?i("v-btn",{attrs:{small:"",outlined:"",color:"warning",to:"ThamDinh/"+a.id+"/ChamDiem?categoryId="+t.categoryId+(6===s?"&thamDinhLai=1":"")}},[t._v(" Thẩm định ")]):3===s||7===s?i("v-btn",{attrs:{small:"",outlined:"",color:"primary",to:"ThamDinh/"+a.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Đã thẩm định & Chờ duyệt ")]):s>=4&&s<7?i("v-btn",{attrs:{small:"",outlined:"",color:"success",to:"ThamDinh/"+a.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Đã duyệt ")]):8===s?i("v-btn",{attrs:{small:"",outlined:"",color:"info",to:"ThamDinh/"+a.id+"/GuiDiem?categoryId="+t.categoryId}},[t._v(" Hoàn thành ")]):t._e()]}},{key:"item.action",fn:function(e){var s=e.item;return[2!==s.trangThaiHienTai&&6!==s.trangThaiHienTai||!s.dathamdinh?t._e():i("v-btn",{attrs:{small:"",color:"primary",to:"ThamDinh/"+s.id+"/GuiDiem?categoryId="+t.categoryId+(6===s.trangThaiHienTai?"&thamDinhLai=1":"")}},[t._v(" Gửi thẩm định ")])]}}],null,!0)})],1)],1)],1)],1)],1)},a=[],n=i(3578),l=i(2013),h={name:"ThamDinh",metaInfo:{title:"Danh sách cần thẩm định",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:n.Z,IBreadcrumb:l.Z},data(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"THẨM ĐỊNH",disabled:!1,href:"/Auth/KhaoSat/ThamDinh"},{text:"Danh Sách Đơn Vị",disabled:!1,href:""}],category:{},data:[],loading:!1,questions:[],year:(new Date).getFullYear(),categoryId:0,categories:[],isSubmitting:!1,disableSubmit:!1,total:0,headers:[{text:"Đơn vị tự đánh giá",value:"tenDonVi",width:275},{text:"Điểm tự đánh giá",value:"diemdanhgia",width:55,align:"center"},{text:"Điểm thẩm định",value:"diemthamdinh",width:75,align:"center"},{text:"Trạng thái",value:"trangThaiHienTai",width:75,align:"center"},{text:"",value:"action",width:75,align:"center"}]}},computed:{years(){const t=[],e=(new Date).getFullYear()+2;for(let i=2022;i<e;i++)t.push({id:i,name:`Năm ${i}`});return t.reverse()}},watch:{year(){this.categoryId=0,this.data=[],this.fnGetDanhMuc()},categoryId(){this.data=[],this.fnDonViDanhGia()}},created(){this.fnGetDanhMuc(),0===this.categoryId&&(this.disableSubmit=!1)},methods:{async fnGetDanhMuc(){await this.$axios.get("auth/khao-sat/tham-dinh/danh-muc",{params:{namApDung:this.year}}).then((t=>{this.categories=t.data?.data.map((t=>({id:t.id,name:t.tenDanhMuc}))),this.categoryId=this.categories[0]?.id})).catch()},async fnDonViDanhGia(){this.loading=!0,await this.$axios.get("auth/khao-sat/tham-dinh/don-vi",{params:{year:this.year,categoryId:this.categoryId}}).then((t=>{this.data=t.data.data})).finally((()=>{this.loading=!1}))},async fnSubmit(){}}},r=h,o=i(1001),c=i(3453),d=i.n(c),u=i(1835),m=i(680),p=i(2371),I=i(7118),g=i(2102),v=i(6957),f=i(1418),y=i(2877),D=i(3986),S=(0,o.Z)(r,s,a,!1,null,null,null),x=S.exports;d()(S,{VAutocomplete:u.Z,VBtn:m.Z,VCard:p.Z,VCardSubtitle:I.Qq,VCardText:I.ZB,VCol:g.Z,VDataTable:v.Z,VDivider:f.Z,VRow:y.Z,VSelect:D.Z})}}]);
//# sourceMappingURL=339.5626629d.js.map