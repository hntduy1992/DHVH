"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[710],{2245:function(){},71835:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(4367),a=(i(21249),i(41539),i(57327),i(73210),i(69826),i(34553),i(26699),i(32023),i(43986)),s=i(55978),o=i(76290),r=i(4589),u=(0,n.Z)((0,n.Z)({},a.l),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),h=a.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a.Z.options.props.menuProps.type,default:function(){return u}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},a.Z.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=(0,r.qF)(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=a.Z.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),(0,n.Z)((0,n.Z)({},u),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=a.Z.options.computed.listData.call(this);return t.props=(0,n.Z)((0,n.Z)({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;if(t!==e){if(!this.autoSelectFirst){var n=e[this.$refs.menu.listIndex];n?this.setMenuIndex(t.findIndex((function(t){return t===n}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.autoSelectFirst&&t.length&&(i.setMenuIndex(0),i.$emit("update:list-index",i.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r.Do.backspace&&t!==r.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,a=t!==n-1?t:t-1,s=this.selectedItems[a];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,a.Z.options.methods.clearableCallback.call(this)},genInput:function(){var t=s.Z.options.methods.genInput.call(this);return t.data=(0,o.ZP)(t.data,{attrs:{"aria-activedescendant":(0,r.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,r.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=a.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?a.Z.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[r.Do.home,r.Do.end].includes(e)||a.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){a.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){a.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){a.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],a=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}})},83702:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(73274),a=i(4367),s=(i(41539),i(39714),i(2245),i(70172)),o=i(5055),r=i(7764),u=["title"],h=r.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},o.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,(0,n.Z)(t,u));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",(0,a.Z)((0,a.Z)({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},68978:function(t,e,i){i.d(e,{Z:function(){return D}});var n=i(73274),a=i(4367),s=(i(68309),i(55097)),o=i(70172),r=i(5055),u=i(66210),h=i(46952),l=i(17352),c=i(89155),d=i(48085),p=i(7764),m=i(4589),f=i(73325),v=i(76290),g=["title"],I=(0,f.Z)(u.Z,h.Z,c.Z,(0,l.d)("radioGroup"),d.Z),D=I.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return p.Z.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return r.Z.options.computed.computedId.call(this)},hasLabel:r.Z.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return p.Z.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return p.Z.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(s.Z,{on:{click:p.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,m.z9)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,(0,n.Z)(t,g));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput((0,a.Z)({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:(0,v.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}})},74739:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(4367),a=(i(9653),i(2245),i(5055)),s=i(24622),o=i(73325),r=(0,o.Z)(s.y,a.Z),u=r.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},a.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},a.Z.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=a.Z.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=a.Z.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:s.y.options.methods.onClick},render:function(t){var e=a.Z.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}})},34350:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(4367),a=(i(9653),i(55978)),s=i(73325),o=(0,s.Z)(a.Z),r=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return(0,n.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var i;t?e.calculateInputHeight():null==(i=e.$refs.input)||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},19330:function(t,e,i){i.d(e,{Z:function(){return d}});var n=i(23796),a=(i(9653),i(25795)),s=i(46952),o=i(44561),r=i(65907),u=i(5936),h=i(4589),l=i(71824),c=i(73325),d=(0,c.Z)(s.Z,o.Z,r.Z,u.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=a+e.width/2-i.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),"".concat(this.calcYOverflow(a),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,h.kb)(this.maxWidth),minWidth:(0,h.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,h.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===h.Do.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},(0,n.Z)(t,this.contentClass,!0),(0,n.Z)(t,"menuable__content__active",this.isActive),(0,n.Z)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},89155:function(t,e,i){var n=i(46286),a=i(20144);e["Z"]=a.Z.extend({name:"rippleable",directives:{ripple:n.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},7764:function(t,e,i){i.d(e,{X:function(){return r}});i(41539),i(39714),i(57327);var n=i(5055),a=i(89155),s=i(34419),o=i(73325);function r(t){t.preventDefault()}e["Z"]=(0,o.Z)(n.Z,a.Z,s.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},45806:function(t,e,i){i.d(e,{Q:function(){return o}});i(56977);var n=function(t){return{id:t.id,diem:parseFloat(t.diem).toFixed(2),diemThamDinh:parseFloat(t.diemThamDinh).toFixed(2),maCauHoi:t.maCauHoi,maDanhMuc:t.maDanhMuc,noiDungTraLoi:t.noiDungTraLoi,maDonViDanhGia:t.maDonViDanhGia,maNguoiDanhGia:t.maNguoiDanhGia,fileDanhGia:t.fileDanhGia,ghiChuDanhGia:t.ghiChuDanhGia,maDonViThamDinh:t.maDonViThamDinh,maNguoiThamDinh:t.maNguoiThamDinh,noiDungThamDinh:t.noiDungThamDinh,ghiChuThamDinh:t.ghiChuThamDinh,parentId:t.parentId,trangThai:t.trangThai}},a=function(t){var e,i;return{id:t.id,diem:t.diem,diemThamDinh:t.diemThamDinh,parentId:t.parentId,maCauHoi:t.maCauHoi,maDanhMuc:t.maDanhMuc,noiDungTraLoi:null!==(e=t.noiDungTraLoi)&&void 0!==e?e:[],maDonViDanhGia:t.maDonViDanhGia,maNguoiDanhGia:t.maNguoiDanhGia,fileDanhGia:t.fileDanhGia,ghiChuDanhGia:t.ghiChuDanhGia,maDonViThamDinh:t.maDonViThamDinh,maNguoiThamDinh:t.maNguoiThamDinh,noiDungThamDinh:null!==(i=t.noiDungThamDinh)&&void 0!==i?i:[],ghiChuThamDinh:t.ghiChuThamDinh,trangThai:t.trangThai}},s=function(){return{id:null,diem:0,diemThamDinh:0,maCauHoi:null,maDanhMuc:null,noiDungTraLoi:[],maDonViDanhGia:null,maNguoiDanhGia:null,fileDanhGia:null,ghiChuDanhGia:null,maDonViThamDinh:null,maNguoiThamDinh:null,noiDungThamDinh:null,ghiChuThamDinh:null,parentId:0,trangThai:1}},o={toJson:n,fromJson:a,baseJson:s}},90073:function(t,e,i){i.d(e,{x:function(){return o}});i(9653),i(56977);var n=function(t){return{id:t.id,stt:t.stt,parentId:t.parentId,tenCauHoi:t.tenCauHoi,diemNhoNhat:Number(parseFloat(t.diemNhoNhat).toFixed(2)),buocNhay:Number(parseFloat(t.buocNhay).toFixed(3)),diemLonNhat:Number(parseFloat(t.diemLonNhat).toFixed(2)),loaiDieuKien:t.loaiDieuKien,loaiCauHoi:t.loaiCauHoi,danhDauCau:t.danhDauCau,kieuNhapLieu:2===t.danhDauCau||3===t.danhDauCau?t.kieuNhapLieu:null,maDanhMuc:t.maDanhMuc,sapXep:t.sapXep,trangThai:t.trangThai}},a=function(t){var e,i;return{id:t.id,stt:t.stt,parentId:t.parentId,tenCauHoi:t.tenCauHoi,diemNhoNhat:Number(parseFloat(t.diemNhoNhat).toFixed(2)),buocNhay:Number(parseFloat(t.buocNhay).toFixed(3)),diemLonNhat:Number(parseFloat(t.diemLonNhat).toFixed(2)),loaiDieuKien:t.loaiDieuKien,loaiCauHoi:t.loaiCauHoi,danhDauCau:t.danhDauCau,kieuNhapLieu:2===t.danhDauCau||3===t.danhDauCau?t.kieuNhapLieu:null,maDanhMuc:t.maDanhMuc,sapXep:t.sapXep,childrenCount:null!==(e=null===t||void 0===t?void 0:t.children_count)&&void 0!==e?e:0,level:null!==(i=null===t||void 0===t?void 0:t.level)&&void 0!==i?i:0,bangdiem:t.bangdiem,donViThamDinh:t.donvithamdinh?t.donvithamdinh.maDonVi:0,trangThai:t.trangThai,ykien:t.ykien}},s=function(){return{id:null,parentId:0,stt:null,tenCauHoi:null,diemNhoNhat:"0",buocNhay:"0",diemLonNhat:"0",maDanhMuc:null,loaiDieuKien:"AND",loaiCauHoi:1,danhDauCau:0,kieuNhapLieu:null,sapXep:1,trangThai:1}},o={toJson:n,fromJson:a,baseJson:s}}}]);
//# sourceMappingURL=710-legacy.9eed65ab.js.map