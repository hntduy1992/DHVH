"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[18],{46049:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LayoutDefault",[a("validation-observer",{ref:"observer"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("IBreadcrumb",{attrs:{items:e.breadcrumbs}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",elevation:"0"}},[a("v-toolbar-title",[e._v("THÔNG TIN")])],1),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Tên tài khoản",rules:{required:!0,regex:/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/}},model:{value:e.user.userName,callback:function(t){e.$set(e.user,"userName",t)},expression:"user.userName"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Mật khẩu","append-icon":e.showPwd?"mdi-eye":"mdi-eye-off",rules:{required:!0,min:6},type:e.showPwd?"text":"password"},on:{"click:append":function(t){e.showPwd=!e.showPwd}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Họ và tên",rules:{required:!0}},model:{value:e.user.fullName,callback:function(t){e.$set(e.user,"fullName",t)},expression:"user.fullName"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("VTextValidation",{attrs:{dense:"",outlined:"",label:"Email",rules:{email:!0}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("VTextValidation",{attrs:{type:"tel",dense:"",outlined:"",label:"Số điện thoại"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"",label:"Cơ quan",placeholder:"-- Chọn","item-text":"name","item-value":"id","return-object":!1,items:e.organizations,clearable:""},model:{value:e.user.organizationId,callback:function(t){e.$set(e.user,"organizationId",t)},expression:"user.organizationId"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("VSelectValidation",{attrs:{dense:"",outlined:"",multiple:"",label:"Phân quyền","item-text":"name","item-value":"id","item-color":"red","return-object":!1,items:e.roles,rules:{required:!0}},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item,s=t.index;return[0===s?a("v-chip",{attrs:{color:"success",small:""}},[a("span",[e._v(e._s(n.name))])]):e._e(),1===s?a("span",{staticClass:"grey--text text-caption"},[e._v(" (+"+e._s(e.user.roles.length-1)+" khác) ")]):e._e()]}}]),model:{value:e.user.roles,callback:function(t){e.$set(e.user,"roles",t)},expression:"user.roles"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-select",{attrs:{dense:"",outlined:"",label:"Trạng thái","item-text":"name","item-value":"id",items:[{id:0,name:"Chưa kích hoạt"},{id:1,name:"Hoạt động"},{id:2,name:"Tạm khóa"}],"return-object":!1},model:{value:e.user.status,callback:function(t){e.$set(e.user,"status",t)},expression:"user.status"}})],1)],1)],1),a("v-divider"),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{elevation:"0",shaped:"",color:"warning"},on:{click:e.fnReset}},[a("v-icon",[e._v("mdi-reload")]),e._v(" Làm lại ")],1),a("v-btn",{attrs:{elevation:"0",shaped:"",color:"error",loading:e.loading},on:{click:e.fnSubmit}},[a("v-icon",[e._v("mdi-content-save")]),e._v(" Lưu lại ")],1)],1)],1)],1)],1)],1)],1)},s=[],r=a(67906),o=a(16198),i=(a(21249),a(68309),a(41539),a(12954)),l=a(45486),u=a(35871),c=a(11548),d=a(33578),m=a(42013),v={name:"User-index",components:{LayoutDefault:d.Z,VSelectValidation:c.Z,VTextValidation:l.Z,ValidationObserver:i._j,IBreadcrumb:m.Z},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"Dashboard"},{text:"Quản lý tài khoản",disabled:!1,href:"/auth/users"},{text:"Thêm mới",disabled:!1,href:""}],loading:!1,isLoading:!1,showPwd:!1,user:u.$.baseJson(),organizations:[],roles:[]}},created:function(){this.fnGetRoles(),this.fnGetOrg()},methods:{fnGetOrg:function(){var e=this;return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("auth/don-vi/select").then((function(t){e.organizations=t.data.data.map((function(e){return{id:e.id,name:e.tenDonVi}}))})).catch();case 2:case"end":return t.stop()}}),t)})))()},fnGetRoles:function(){var e=this;return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("auth/roles/all").then((function(t){e.roles=t.data.data.map((function(e){return{id:e.id,name:e.name}}))})).catch();case 2:case"end":return t.stop()}}),t)})))()},fnSubmit:function(){var e=this;return(0,o.Z)((0,r.Z)().mark((function t(){var a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$refs.observer.validate();case 3:if(a=t.sent,a){t.next=7;break}return e.loading=!1,t.abrupt("return",!1);case 7:e.axios.post("auth/users/create",u.$.toJson(e.user)).then((function(t){e.$store.dispatch("SnackbarStore/showSnackBar",t.data),e.fnReset()})).catch().finally((function(){e.loading=!1}));case 8:case"end":return t.stop()}}),t)})))()},fnReset:function(){var e=this;return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.reset();case 2:e.user=u.$.baseJson();case 3:case"end":return t.stop()}}),t)})))()}}},h=v,f=a(1001),p=a(43453),b=a.n(p),x=a(71835),w=a(680),V=a(32371),k=a(37118),Z=a(95424),g=a(82102),_=a(11418),$=a(96428),T=a(62877),C=a(43986),S=a(36656),y=a(27921),D=(0,f.Z)(h,n,s,!1,null,null,null),N=D.exports;b()(D,{VAutocomplete:x.Z,VBtn:w.Z,VCard:V.Z,VCardActions:k.h7,VCardText:k.ZB,VChip:Z.Z,VCol:g.Z,VDivider:_.Z,VIcon:$.Z,VRow:T.Z,VSelect:C.Z,VToolbar:S.Z,VToolbarTitle:y.qW})}}]);
//# sourceMappingURL=18-legacy.d3544c00.js.map