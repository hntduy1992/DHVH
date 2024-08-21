"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[721],{71835:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(4367),s=(n(21249),n(41539),n(57327),n(73210),n(69826),n(34553),n(26699),n(32023),n(43986)),a=n(55978),r=n(76290),l=n(4589),o=(0,i.Z)((0,i.Z)({},s.l),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),c=s.Z.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},s.Z.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=(0,l.qF)(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s.Z.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),(0,i.Z)((0,i.Z)({},o),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s.Z.options.computed.listData.call(this);return e.props=(0,i.Z)((0,i.Z)({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l.Do.backspace&&e!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,a=this.selectedItems[s];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput:function(){var e=a.Z.options.methods.genInput.call(this);return e.data=(0,r.ZP)(e.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[l.Do.home,l.Do.end].includes(t)||s.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",s),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})},21673:function(e,t,n){n.d(t,{o:function(){return r}});var i=function(e){var t;return{id:e.id,tenDonVi:e.tenDonVi,email:e.email,dienThoai:e.dienThoai,parentId:null!==(t=e.parentId)&&void 0!==t?t:0,trangThai:e.trangThai}},s=function(e){return{id:e.id,tenDonVi:e.tenDonVi,email:e.email,dienThoai:e.dienThoai,parentId:e.parentId,capTren:e.parent,trangThai:e.trangThai}},a=function(){return{id:null,tenDonVi:null,email:null,dienThoai:null,parentId:0,trangThai:1}},r={toJson:i,fromJson:s,baseJson:a}},42013:function(e,t,n){n.d(t,{Z:function(){return S}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"m-toolbar",attrs:{elevation:"1",dense:""}},[n("ul",{staticClass:"breadcrumb hidden-xs-only"},e._l(e.items,(function(t){return n("li",{key:t.text},[n("router-link",{attrs:{to:t.href}},[e._v(e._s(t.text))])],1)})),0),n("v-breadcrumbs",{staticClass:"hidden-sm-and-up",attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-breadcrumbs-item",{attrs:{href:i.href,disabled:i.disabled}},[e._v(" "+e._s(i.text.toUpperCase())+" ")])]}}])})],1)},s=[],a={props:["items"]},r=a,l=n(1001),o=n(43453),c=n.n(o),u=n(78320),h=n(4367),d=(n(69600),n(23796)),m=n(6505),f=n(73325),p=(0,f.Z)(m.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return(0,d.Z)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,i=t.data;return e("li",[e(n,(0,h.Z)((0,h.Z)({},i),{},{attrs:(0,h.Z)((0,h.Z)({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(4589),g=(0,v.Ji)("v-breadcrumbs__divider","li"),I=n(48085),b=(0,f.Z)(I.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return(0,h.Z)({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(g,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var s=this.items[i];n.push(s.text),t?e.push(this.$scopedSlots.item({item:s})):e.push(this.$createElement(p,{key:n.join("."),props:s},[s.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),x=(0,l.Z)(r,i,s,!1,null,"efea5b80",null),S=x.exports;c()(x,{VAppBar:u.Z,VBreadcrumbs:b,VBreadcrumbsItem:p})},45486:function(e,t,n){n.d(t,{Z:function(){return m}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[n("v-text-field",e._g(e._b({attrs:{"error-messages":i},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"v-text-field",e.$attrs,!1),e.$listeners))]}}])})},s=[],a=n(12954),r={components:{ValidationProvider:a.d_},props:{rules:{type:[Object,String],default:""},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},l=r,o=n(1001),c=n(43453),u=n.n(c),h=n(55978),d=(0,o.Z)(l,i,s,!1,null,null,null),m=d.exports;u()(d,{VTextField:h.Z})},32639:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("LayoutDefault",[n("validation-observer",{ref:"observer"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("IBreadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-toolbar",{attrs:{dense:"",elevation:"0"}},[n("v-toolbar-title",[e._v("THÔNG TIN")])],1),n("v-divider"),n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-autocomplete",{attrs:{dense:"",outlined:"",label:"Cơ quan cấp trên",placeholder:"-- Chọn","item-text":"name","item-value":"id","return-object":!1,items:e.organizations,clearable:""},model:{value:e.org.parentId,callback:function(t){e.$set(e.org,"parentId",t)},expression:"org.parentId"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("VTextValidation",{attrs:{dense:"",outlined:"",label:"Tên đơn vị",rules:{required:!0}},model:{value:e.org.tenDonVi,callback:function(t){e.$set(e.org,"tenDonVi",t)},expression:"org.tenDonVi"}})],1),n("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[n("VTextValidation",{attrs:{dense:"",outlined:"",label:"Email",rules:{email:!0}},model:{value:e.org.email,callback:function(t){e.$set(e.org,"email",t)},expression:"org.email"}})],1),n("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[n("VTextValidation",{attrs:{type:"tel",dense:"",outlined:"",label:"Số điện thoại"},model:{value:e.org.dienThoai,callback:function(t){e.$set(e.org,"dienThoai",t)},expression:"org.dienThoai"}})],1),n("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[n("v-select",{attrs:{dense:"",outlined:"",label:"Trạng thái","item-text":"name","item-value":"id",items:[{id:0,name:"Chưa kích hoạt"},{id:1,name:"Hoạt động"},{id:2,name:"Tạm khóa"}],"return-object":!1},model:{value:e.org.trangThai,callback:function(t){e.$set(e.org,"trangThai",t)},expression:"org.trangThai"}})],1)],1)],1),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{elevation:"0",shaped:"",color:"warning"},on:{click:e.fnReset}},[n("v-icon",[e._v("mdi-reload")]),e._v(" Làm lại ")],1),n("v-btn",{attrs:{elevation:"0",shaped:"",color:"error",loading:e.loading},on:{click:e.fnSubmit}},[n("v-icon",[e._v("mdi-content-save")]),e._v(" Lưu lại ")],1)],1)],1)],1)],1)],1)],1)},s=[],a=n(67906),r=n(16198),l=(n(21249),n(41539),n(12954)),o=n(45486),c=n(21673),u=n(33578),h=n(42013),d={metaInfo:{title:"Chỉnh sửa - Đơn vị hành chính",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:u.Z,VTextValidation:o.Z,ValidationObserver:l._j,IBreadcrumb:h.Z},data:function(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"ĐƠN VỊ HÀNH CHÍNH",disabled:!1,href:"/Auth/DonViHanhChinh"},{text:"Cập nhật Thông tin",disabled:!1,href:""}],loading:!1,isLoading:!1,org:c.o.baseJson(),organizations:[],search:null}},watch:{orgManage:function(e){this.org.manages=e.map((function(e){return e.id}))}},created:function(){this.fnGetOrg(),this.fnGetDetail()},methods:{fnGetOrg:function(){var e=this;return(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("auth/don-vi/select").then((function(t){e.organizations=t.data.data.map((function(e){return{id:e.id,name:e.tenDonVi}}))})).catch();case 2:case"end":return t.stop()}}),t)})))()},fnGetDetail:function(){var e=this;return(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("auth/don-vi/id/"+e.$route.params.id).then((function(t){e.org=c.o.fromJson(t.data.data)})).catch();case 2:case"end":return t.stop()}}),t)})))()},fnSubmit:function(){var e=this;return(0,r.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$refs.observer.validate();case 3:if(n=t.sent,n){t.next=7;break}return e.loading=!1,t.abrupt("return",!1);case 7:e.$axios.post("auth/don-vi/id/"+e.$route.params.id,c.o.toJson(e.org)).then((function(t){e.$store.dispatch("SnackbarStore/showSnackBar",t.data),e.fnReset()})).catch().finally((function(){e.loading=!1}));case 8:case"end":return t.stop()}}),t)})))()},fnReset:function(){var e=this;return(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fnGetDetail();case 2:case"end":return t.stop()}}),t)})))()}}},m=d,f=n(1001),p=n(43453),v=n.n(p),g=n(71835),I=n(680),b=n(32371),x=n(37118),S=n(82102),Z=n(11418),D=n(96428),V=n(62877),y=n(43986),C=n(36656),T=n(27921),$=(0,f.Z)(m,i,s,!1,null,null,null),k=$.exports;v()($,{VAutocomplete:g.Z,VBtn:I.Z,VCard:b.Z,VCardActions:x.h7,VCardText:x.ZB,VCol:S.Z,VDivider:Z.Z,VIcon:D.Z,VRow:V.Z,VSelect:y.Z,VToolbar:C.Z,VToolbarTitle:T.qW})}}]);
//# sourceMappingURL=721-legacy.e9a019f8.js.map