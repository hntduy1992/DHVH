"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[51],{454:function(e,t,a){a.d(t,{k:function(){return n}});const s=(e,t)=>({id:`Node-${t}`,displayName:e.name,children:0===e?.permissions.length?[]:e.permissions.map((e=>({id:e.id,displayName:e.display_name})))}),i=()=>({id:null,name:null,permissions:[]}),n={fromJson:s,baseJson:i}},5788:function(e,t,a){a.d(t,{_:function(){return r}});const s=e=>({id:e.id,name:e.name,guard_name:e.guard_name,permissions:e.permissions}),i=e=>({id:e.id,name:e.name,guard_name:e.guard_name,permissions:e.permissions,created_at:e.created_at}),n=()=>({id:null,name:null,guard_name:"api",permissions:[]}),r={toJson:s,fromJson:i,baseJson:n}},7529:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LayoutDefault",[a("validation-observer",{ref:"observer"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("IBreadcrumb",{attrs:{items:e.breadcrumbs}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",elevation:"0"}},[a("v-toolbar-title",[e._v("THÔNG TIN")])],1),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Tên phân quyền",rules:{required:!0}},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{dense:"",outlined:"",label:"Guard",items:["api","web"]},model:{value:e.item.guard_name,callback:function(t){e.$set(e.item,"guard_name",t)},expression:"item.guard_name"}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",elevation:"0"}},[a("v-toolbar-title",[e._v("CHỨC NĂNG")]),a("v-spacer"),a("v-text-field",{staticClass:"mr-2",staticStyle:{"max-width":"210px"},attrs:{label:"Tìm kiếm","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-treeview",{attrs:{selectable:"","return-object":"","selected-color":"error","item-text":"displayName","load-children":e.fnGetPermission,items:e.items,search:e.search,"open-all":!0},model:{value:e.permissions,callback:function(t){e.permissions=t},expression:"permissions"}})],1)],1)],1),a("v-divider"),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{elevation:"0",shaped:"",color:"warning"},on:{click:e.fnReset}},[a("v-icon",[e._v("mdi-reload")]),e._v(" Làm lại ")],1),a("v-btn",{attrs:{elevation:"0",shaped:"",color:"error"},on:{click:e.fnSubmit}},[a("v-icon",[e._v("mdi-content-save")]),e._v(" Lưu lại ")],1)],1)],1)],1)],1)],1)],1)},i=[],n=a(2954),r=a(5486),o=a(5788),l=a(454),d=a(3578),c=a(2013),m={components:{LayoutDefault:d.Z,VTextValidation:r.Z,ValidationObserver:n._j,IBreadcrumb:c.Z},data(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"Dashboard"},{text:"Quản Lý Phân Quyền",disabled:!1,href:"/Auth/Roles"},{text:"Cập nhật thông tin",disabled:!1,href:""}],loading:!1,item:o._.baseJson(),items:[{id:"Root-1",displayName:"Toàn quyền",children:[]}],search:null,permissions:[]}},watch:{permissions(e){this.item.permissions=e.map((e=>e.id))}},methods:{async fnGetPermission(){await this.axios.get("auth/roles/modules").then((e=>{this.items[0].children=e.data.data.map(((e,t)=>l.k.fromJson(e,t)))})).catch((e=>{console.log("e = ",e)})),await this.fnGetDetail()},async fnGetDetail(){await this.axios.get("auth/roles/edit/"+this.$route.params.id).then((e=>{this.item=o._.fromJson(e.data.data),this.permissions=this.item.permissions})).catch()},async fnSubmit(){this.loading=!0;const e=await this.$refs.observer.validate();if(!e)return this.loading=!1,!1;this.axios.post("auth/roles/edit/"+this.$route.params.id,o._.toJson(this.item)).then((e=>{this.$store.dispatch("SnackbarStore/showSnackBar",e.data),this.fnReset()})).catch().finally((()=>{this.loading=!1}))},async fnReset(){await this.fnGetDetail()}}},u=m,h=a(1001),v=a(3453),p=a.n(v),b=a(680),f=a(2371),_=a(7118),x=a(2102),V=a(1418),g=a(6428),w=a(2877),y=a(3986),Z=a(9762),k=a(5978),T=a(6656),C=a(7921),D=a(8080),S=(0,h.Z)(u,s,i,!1,null,null,null),J=S.exports;p()(S,{VBtn:b.Z,VCard:f.Z,VCardActions:_.h7,VCardText:_.ZB,VCol:x.Z,VDivider:V.Z,VIcon:g.Z,VRow:w.Z,VSelect:y.Z,VSpacer:Z.Z,VTextField:k.Z,VToolbar:T.Z,VToolbarTitle:C.qW,VTreeview:D.Z})}}]);
//# sourceMappingURL=51.8ac25ce2.js.map