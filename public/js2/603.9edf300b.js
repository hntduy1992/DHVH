"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[603],{4350:function(t,e,a){a.d(e,{Z:function(){return s}});var n=a(5978),i=a(3325);const o=(0,i.Z)(n.Z);var s=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=n.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){n.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},291:function(t,e,a){a.d(e,{L:function(){return s}});const n=t=>({id:t.id,tenDanhMuc:t.tenDanhMuc,noiDung:t.noiDung,namApDung:t.namApDung,donViApDung:t.donViApDung,trangThai:t.trangThai}),i=t=>({id:t.id,tenDanhMuc:t.tenDanhMuc,noiDung:t.noiDung,namApDung:t.namApDung,donViApDung:t?.donvi?t.donvi.map((t=>t.maDonVi)):[],trangThai:t.trangThai}),o=()=>({id:null,tenDanhMuc:null,noiDung:null,namApDung:null,donViApDung:[],trangThai:1}),s={toJson:n,fromJson:i,baseJson:o}},117:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("LayoutDefault",[a("validation-observer",{ref:"observer"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",elevation:"0"}},[a("v-toolbar-title",[t._v("THÔNG TIN")])],1),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Tên bộ tiêu chí",rules:{required:!0}},model:{value:t.item.tenDanhMuc,callback:function(e){t.$set(t.item,"tenDanhMuc",e)},expression:"item.tenDanhMuc"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Năm áp dụng",rules:{required:!0,numeric:!0}},model:{value:t.item.namApDung,callback:function(e){t.$set(t.item,"namApDung",e)},expression:"item.namApDung"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-textarea",{attrs:{dense:"",outlined:"",label:"Mô tả",rows:"3"},model:{value:t.item.noiDung,callback:function(e){t.$set(t.item,"noiDung",e)},expression:"item.noiDung"}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",elevation:"0"}},[a("v-toolbar-title",[t._v("ĐƠN VỊ ÁP DỤNG")]),a("v-spacer"),a("v-text-field",{staticClass:"mr-2",staticStyle:{"max-width":"210px"},attrs:{label:"Tìm kiếm","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-treeview",{attrs:{selectable:"","return-object":!1,"selected-color":"error","item-text":"name",items:t.items,"load-children":t.fnGetOrg,search:t.search,"open-all":!0},model:{value:t.item.donViApDung,callback:function(e){t.$set(t.item,"donViApDung",e)},expression:"item.donViApDung"}})],1)],1)],1),a("v-divider"),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{elevation:"0",shaped:"",color:"warning"},on:{click:t.fnReset}},[a("v-icon",[t._v("mdi-reload")]),t._v(" Làm lại ")],1),a("v-btn",{attrs:{elevation:"0",shaped:"",color:"error",loading:t.loading},on:{click:t.fnSubmit}},[a("v-icon",[t._v("mdi-content-save")]),t._v(" Lưu lại ")],1)],1)],1)],1)],1)],1)],1)},i=[],o=a(2954),s=a(5486),r=a(291),l=a(3578),c=a(2013),u={components:{LayoutDefault:l.Z,VTextValidation:s.Z,ValidationObserver:o._j,IBreadcrumb:c.Z},data(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"BỘ TIÊU CHÍ",disabled:!1,href:"/Auth/KhaoSat/DanhMuc"},{text:"Thêm Mới",disabled:!1,href:""}],loading:!1,item:r.L.baseJson(),organizations:[],items:[{id:"Root-1",name:"Tất cả",children:[]}],search:null,organizationId:null}},watch:{},methods:{async fnGetOrg(){await this.$axios.get("auth/don-vi/select").then((t=>{this.organizations=t.data.data.map((t=>({id:t.id,name:t.tenDonVi}))),this.items[0].children=this.organizations})).catch()},async fnSubmit(){this.loading=!0;const t=await this.$refs.observer.validate();if(!t)return this.loading=!1,!1;this.$axios.post("auth/khao-sat/danh-muc/them-moi",r.L.toJson(this.item)).then((t=>{this.$store.dispatch("SnackbarStore/showSnackBar",t.data),this.fnReset()})).catch().finally((()=>{this.loading=!1}))},async fnReset(){await this.$refs.observer.reset(),this.item=r.L.baseJson()}}},d=u,h=a(1001),m=a(3453),v=a.n(m),p=a(680),g=a(2371),b=a(7118),D=a(2102),f=a(1418),w=a(6428),x=a(2877),V=a(9762),T=a(5978),Z=a(4350),k=a(6656),y=a(7921),A=a(8080),I=(0,h.Z)(d,n,i,!1,null,null,null),$=I.exports;v()(I,{VBtn:p.Z,VCard:g.Z,VCardActions:b.h7,VCardText:b.ZB,VCol:D.Z,VDivider:f.Z,VIcon:w.Z,VRow:x.Z,VSpacer:V.Z,VTextField:T.Z,VTextarea:Z.Z,VToolbar:k.Z,VToolbarTitle:y.qW,VTreeview:A.Z})}}]);
//# sourceMappingURL=603.9edf300b.js.map