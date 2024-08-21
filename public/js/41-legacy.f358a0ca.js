"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[41],{42013:function(t,e,i){i.d(e,{Z:function(){return x}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"m-toolbar",attrs:{elevation:"1",dense:""}},[i("ul",{staticClass:"breadcrumb hidden-xs-only"},t._l(t.items,(function(e){return i("li",{key:e.text},[i("router-link",{attrs:{to:e.href}},[t._v(t._s(e.text))])],1)})),0),i("v-breadcrumbs",{staticClass:"hidden-sm-and-up",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{attrs:{href:a.href,disabled:a.disabled}},[t._v(" "+t._s(a.text.toUpperCase())+" ")])]}}])})],1)},n=[],s={props:["items"]},o=s,u=i(1001),r=i(43453),h=i.n(r),d=i(78320),l=i(4367),c=(i(69600),i(23796)),m=i(6505),f=i(73325),v=(0,f.Z)(m.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return(0,c.Z)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return t("li",[t(i,(0,l.Z)((0,l.Z)({},a),{},{attrs:(0,l.Z)((0,l.Z)({},a.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),p=i(4589),g=(0,p.Ji)("v-breadcrumbs__divider","li"),C=i(48085),b=(0,f.Z)(C.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return(0,l.Z)({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(g,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],a=0;a<this.items.length;a++){var n=this.items[a];i.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(v,{key:i.join("."),props:n},[n.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),D=(0,u.Z)(o,a,n,!1,null,"efea5b80",null),x=D.exports;h()(D,{VAppBar:d.Z,VBreadcrumbs:b,VBreadcrumbsItem:v})},96966:function(t,e,i){i.r(e),i.d(e,{default:function(){return E}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LayoutDefault",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-subtitle",[t._v("LỌC BỘ TIÊU CHÍ ĐÁNH GIÁ")]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{dense:"",label:"Năm đánh giá","item-text":"name","item-value":"id",items:t.years,disabled:!0},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-autocomplete",{attrs:{dense:"",label:"Bộ tiêu chí","item-text":"name","item-value":"id",items:t.categories,disabled:!0},model:{value:t.tempCatId,callback:function(e){t.tempCatId=e},expression:"tempCatId"}})],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{"min-width":"860"}},[i("v-card-text",[i("table",{staticClass:"table",attrs:{id:"thamdinh"}},[i("thead",[i("tr",[i("th",[t._v("STT")]),i("th",[t._v("Tiêu chí")]),i("th",[t._v("Điểm lớn nhất")]),i("th",[t._v("Tự đánh giá")]),i("th",[t._v("Đính kèm")]),i("th",[t._v("Ghi chú tự đánh giá")]),i("th",[t._v("Thẩm định")]),i("th",[t._v("Ghi chú thẩm định")]),1==t.$route.query.thamDinhLai?i("th",[t._v("Ý kiến đơn vị")]):t._e()])]),i("tbody",[t._l(t.iData,(function(e,a){return[e.danhDauCau<2?[i("CauHoi",{key:e+a,attrs:{question:e}})]:t._e(),e.danhDauCau>=2?[i("CauTraLoi",{key:e+a,attrs:{question:e}})]:t._e()]}))],2),i("tfoot",[0===t.iData.length?i("tr",[i("td",{staticClass:"text-center",attrs:{colspan:"8"}},[i("p",{staticClass:"ma-0"},[t._v(" Không tìm thấy dữ liệu ")])])]):t._e(),i("tr",[i("td"),i("td",{staticClass:"text-right font-weight-bold"},[t._v(" Tổng cộng ")]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.total1))])]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(t.total).toFixed(2)))])]),i("td"),i("td"),i("td",{staticClass:"text-center",attrs:{colspan:"2"}},[i("span",{staticClass:"font-weight-bold red--text"},[t._v(t._s(parseFloat(t.total2).toFixed(2)))])])])])])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error",loading:t.isSubmitting,disabled:t.disableSubmit},on:{click:function(e){return e.stopPropagation(),t.fnSubmit.apply(null,arguments)}}},[t._v(" Lưu lại ")])],1)],1)],1)],1)],1)},n=[],s=i(67906),o=i(16198),u=i(4367),r=(i(41539),i(54747),i(21249),i(39714),i(69826),i(20629)),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticClass:"font-weight-bold text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":!0,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.question.diemLonNhat).toFixed(2)))])]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":0==t.question.level,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.diemTuDanhGia).toFixed(2)))])]),i("td",{staticClass:"w-cell-100",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1===t.question.danhDauCau?[null!=t.fileName?i("div",{staticClass:"text-center"},[i("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2 white--text",attrs:{color:"blue-grey",elevation:"0",small:"",link:"",target:"_blank",href:t.download()}},"v-btn",n,!1),a),[i("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-cloud-download ")]),i("span",{staticClass:"ml-2"},[t._v("Tải về")])],1)]}}],null,!1,2256436589)},[i("span",[t._v(t._s(t.fileName.split("/").pop()))])])],1):t._e()]:t._e()],2),i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1===t.question.danhDauCau&&null!=t.ghiChuDanhGia?i("div",{staticStyle:{width:"150px"}},[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuDanhGia,callback:function(e){t.ghiChuDanhGia=e},expression:"ghiChuDanhGia"}})],1):t._e()]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":0===t.question.level,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.diemThamDinh).toFixed(2)))])]),i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2"},model:{value:t.ghiChuThamDinh,callback:function(e){t.ghiChuThamDinh=e},expression:"ghiChuThamDinh"}})],1)]],2),1===t.$route.query.thamDinhLai?i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",{staticStyle:{width:"150px"}},[null!=t.ghiChuYKien?i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuYKien,callback:function(e){t.ghiChuYKien=e},expression:"ghiChuYKien"}}):i("span",[t._v("Thống nhất")])],1)]],2):t._e()])},d=[],l=(i(38862),i(34553),{props:{question:{type:Object,default:null}},data:function(){return{dialog:!1,dialog2:!1,loading:!1,score:0,fileName:null,ghiChuDanhGia:null,ghiChuThamDinh:null,dontHavePermission:!1,iReact:!0,ghiChuYKien:null}},computed:(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({},(0,r.Se)("khaoSatStore",["bangDiem","cauHoi"])),(0,r.rn)("khaoSatStore",["disableThamDinh","permissions"])),(0,r.rn)("authStore",["auth"])),{},{diemTuDanhGia:function(){var t,e=this;return null===(t=this.cauHoi.find((function(t){return t.maCauHoi===e.question.id})))||void 0===t?void 0:t.diem},diemThamDinh:function(){var t,e=this;return null===(t=this.cauHoi.find((function(t){return t.maCauHoi===e.question.id})))||void 0===t?void 0:t.diemThamDinh}}),watch:{ghiChuThamDinh:function(){this.capNhatBangDiem()},bangDiem:function(){var t=this;if(1===this.question.danhDauCau){var e=this.bangDiem.find((function(e){return e.maCauHoi===t.question.id}));this.fileName=e.fileDanhGia,this.ghiChuDanhGia=e.ghiChuDanhGia,this.ghiChuThamDinh=e.ghiChuThamDinh}},cauHoi:function(){if(!this.iReact)return null;if(this.iReact=!1,this.question.donViThamDinh===this.auth.user.organizationId){var t=JSON.parse(JSON.stringify(this.permissions));t.push(this.question.id),this.$store.commit("khaoSatStore/permissions",t)}this.disableThamDinh||this.question.donViThamDinh!==this.auth.user.organizationId?this.dontHavePermission=!0:this.dontHavePermission=!1}},methods:{download:function(){return"https://cscchcsadec.dongthap.gov.vn/storage/"+this.fileName},capNhatBangDiem:function(){var t=this;this.dialog2=!1;var e=JSON.parse(JSON.stringify(this.bangDiem)),i=e.findIndex((function(e){return e.maCauHoi===t.question.id}));e[i].ghiChuThamDinh=this.ghiChuThamDinh,this.$store.commit("khaoSatStore/capNhatBangDiem",{index:i,value:e[i]})}},created:function(){var t,e;1==this.$route.query.thamDinhLai&&(this.ghiChuYKien=null===(t=this.question)||void 0===t||null===(e=t.ykien)||void 0===e?void 0:e.noiDung)}}),c=l,m=i(1001),f=i(43453),v=i.n(f),p=i(680),g=i(96428),C=i(34350),b=i(19330),D=(0,m.Z)(c,h,d,!1,null,null,null),x=D.exports;v()(D,{VBtn:p.Z,VIcon:g.Z,VTextarea:C.Z,VTooltip:b.Z});var q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[2===t.question.danhDauCau?[i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.diemLonNhat.toFixed(2))+" ")]),i("td",{staticClass:"text-center"},[1===t.question.loaiCauHoi?["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]:t._e()],2),i("td",[t.dontHavePermission?t._e():["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]],2)]:[i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td"),i("td",{staticClass:"text-center"},[1===t.question.loaiCauHoi&&3===t.question.danhDauCau?["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]:[i("span",{staticClass:"font-weight-bold"},[t._v("ĐTXHH")])]],2),i("td"),i("td"),i("td",[t.dontHavePermission?t._e():["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]],2),i("td",{staticClass:"text-center"},[3!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2"},model:{value:t.ghiChuThamDinh,callback:function(e){t.ghiChuThamDinh=e},expression:"ghiChuThamDinh"}})],1)]],2),1!==t.$route.query.thamDinhLai||t.dontHavePermission?t._e():i("td",{staticClass:"text-center"},[3===t.question.danhDauCau?[t.question.hasChild?t._e():i("div",[null!=t.ghiChuYKien?i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuYKien,callback:function(e){t.ghiChuYKien=e},expression:"ghiChuYKien"}}):i("span",[t._v("Thống nhất")])],1)]:t._e()],2)]],2)},S=[],T=(i(9653),i(56977),i(26699),i(32023),i(47941),{props:{question:{type:Object,default:null}},data:function(){return{dialog:!1,dialog2:!1,loading:!1,formInput:null,formThamDinh:null,minQuestion:{},ghiChuThamDinh:null,iReact:!0,iReact2:!0,dontHavePermission:!0,ghiChuYKien:null}},computed:(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({},(0,r.Se)("khaoSatStore",["bangDiem","cauHoi","eventChange"])),(0,r.Se)("authStore",["auth"])),(0,r.rn)("khaoSatStore",["disableThamDinh","permissions"])),{},{points:function(){var t=[],e=JSON.parse(JSON.stringify(this.question.diemNhoNhat));while(Number(e.toFixed(2))<=this.question.diemLonNhat)t.push({id:Number(e.toFixed(2)),name:e.toFixed(2)}),e+=this.question.buocNhay;return t},parent:function(){var t=this;return this.cauHoi.find((function(e){return e.maCauHoi===t.question.parentId}))||{}}}),watch:{cauHoi:function(){if(!this.iReact2)return null;if(this.iReact2=!1,3===this.question.danhDauCau){if(this.question.donViThamDinh===this.auth.user.organizationId){var t=JSON.parse(JSON.stringify(this.permissions));t.push(this.question.id),this.$store.commit("khaoSatStore/permissions",t)}this.disableThamDinh||this.question.donViThamDinh!==this.auth.user.organizationId||(this.dontHavePermission=!1)}else this.disableThamDinh||!this.permissions.includes(this.question.parentId)&&!this.permissions.includes(this.question.id)||(this.dontHavePermission=!1)},eventChange:function(){0!==Object.keys(this.eventChange).length&&this.eventChange.maCauHoi===this.question.parentId&&this.eventChange.maCauTraLoi!==this.question.id&&(this.formThamDinh="")},bangDiem:function(){var t=this;if(!this.iReact)return null;if(1===this.question.loaiCauHoi&&2===this.question.danhDauCau){var e=this.bangDiem.find((function(e){return e.maCauHoi===t.question.parentId}));this.fnSetValueForm(e)}if((1===this.question.loaiCauHoi||2===this.question.loaiCauHoi)&&3===this.question.danhDauCau){var i=this.bangDiem.find((function(e){return e.maCauHoi===t.question.id}));this.fnSetValueForm(i),this.fileName=i.fileDanhGia,this.ghiChuDanhGia=i.ghiChuDanhGia}}},methods:{fnChangePoint:function(t){var e=this;t=t?Number(t):0;var i=JSON.parse(JSON.stringify(this.bangDiem)),a={};if(a=3===this.question.danhDauCau?i.find((function(t){return t.maCauHoi===e.question.id})):i.find((function(t){return t.maCauHoi===e.question.parentId})),"OR"===this.parent.loaiDieuKien)a.diemThamDinh=t,a.noiDungThamDinh=[{id:this.question.id,diem:t}];else{var n=a.noiDungThamDinh.findIndex((function(t){return t.id===e.question.id}));-1===n?a.noiDungThamDinh.push({id:this.question.id,diem:t}):a.noiDungThamDinh[n].diem=t;var s=0;a.noiDungThamDinh.forEach((function(t){s+=t.diem})),a.diemThamDinh=s}var o,u=this.bangDiem.findIndex((function(t){return t.maCauHoi===a.maCauHoi}));(this.$store.dispatch("khaoSatStore/capNhatBangDiem",{index:u,value:a}),"OR"===this.parent.loaiDieuKien)&&this.$store.commit("khaoSatStore/eventChange",{maCauHoi:a.maCauHoi,maCauTraLoi:null===(o=a.noiDungThamDinh[0])||void 0===o?void 0:o.id})},capNhatBangDiem:function(){var t=this;this.dialog2=!1;var e=JSON.parse(JSON.stringify(this.bangDiem)),i=e.findIndex((function(e){return e.maCauHoi===t.question.id}));e[i].ghiChuThamDinh=this.ghiChuThamDinh,this.$store.commit("khaoSatStore/capNhatBangDiem",{index:i,value:e[i]})},fnSetValueForm:function(t){var e=this;this.iReact=!1;var i=null===t||void 0===t?void 0:t.noiDungTraLoi.find((function(t){return t.id===e.question.id}));i&&(this.formInput=i.diem);var a=null===t||void 0===t?void 0:t.noiDungThamDinh.find((function(t){return t.id===e.question.id}));a&&(this.formThamDinh=a.diem),this.$store.dispatch("khaoSatStore/capNhatDiemCapTren",t)}},created:function(){var t,e;1==this.$route.query.thamDinhLai&&(this.ghiChuYKien=null===(t=this.question)||void 0===t||null===(e=t.ykien)||void 0===e?void 0:e.noiDung)}}),k=T,_=i(83702),y=i(68978),N=i(74739),I=i(43986),H=i(55978),w=(0,m.Z)(k,q,S,!1,null,null,null),Z=w.exports;v()(w,{VCheckbox:_.Z,VRadio:y.Z,VRadioGroup:N.Z,VSelect:I.Z,VTextField:H.Z,VTextarea:C.Z});var L=i(45806),$=i(90073),V=i(33578),P=i(42013),G={metaInfo:{title:"Thẩm định",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:V.Z,IBreadcrumb:P.Z,CauTraLoi:Z,CauHoi:x},data:function(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"THẨM ĐỊNH",disabled:!1,href:"/Auth/KhaoSat/ThamDinh"},{text:"CHẤM ĐIỂM",disabled:!1,href:"/Auth/KhaoSat/ThamDinh/ChamDiem"}],category:{},iData:[],loading:!1,questions:[],year:(new Date).getFullYear(),categoryId:0,tempCatId:0,categories:[],isSubmitting:!1,disableSubmit:!0,total:0,total1:0,total2:0}},computed:(0,u.Z)((0,u.Z)((0,u.Z)({},(0,r.rn)("khaoSatStore",["bangDiem","permissions"])),(0,r.rn)("authStore",["auth"])),{},{years:function(){for(var t=[],e=(new Date).getFullYear()+2,i=2022;i<e;i++)t.push({id:i,name:"Năm ".concat(i)});return t.reverse()}}),watch:{year:function(){this.categoryId=0,this.categories=[],this.data=[],this.fnGetDanhMuc()},categoryId:function(){this.data=[],this.fnGetCauHoi()},bangDiem:function(t){var e=this,i=0,a=0;t.forEach((function(t){i+=t.diem,t.maDonViThamDinh===e.auth.user.organizationId&&(a+=t.diemThamDinh)})),this.total=i,this.total2=a}},created:function(){var t=this;return(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.categoryId=t.$route.query.categoryId,e.next=3,t.fnGetDanhMuc();case 3:return e.next=5,t.fnGetAvailable();case 5:case"end":return e.stop()}}),e)})))()},methods:{fnGetDanhMuc:function(){var t=this;return(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("auth/khao-sat/tham-dinh/danh-muc",{params:{namApDung:t.year}}).then((function(e){var i;t.categories=(null===(i=e.data)||void 0===i?void 0:i.data).map((function(t){return{id:t.id,name:t.tenDanhMuc}}))})).catch().finally((function(){t.tempCatId=0==parseInt(t.$route.query.categoryId.toString())?t.categories[0].id:parseInt(t.$route.query.categoryId.toString())}));case 2:case"end":return e.stop()}}),e)})))()},fnGetCauHoi:function(){var t=this;this.$axios.get("auth/khao-sat/tham-dinh/cau-hoi",{params:{maDanhMuc:this.categoryId,maDonVi:this.$route.params.orgId}}).then((function(e){t.iData=e.data.data.map((function(t){return $.x.fromJson(t)}));var i=[],a=[];t.total1=0,t.iData.forEach((function(e){var n=0===e.parentId?e.diemLonNhat:0;t.total1=t.total1+n,1!==e.danhDauCau&&3!==e.danhDauCau||(e.bangdiem||(e.bangdiem=L.Q.baseJson(),e.bangdiem.maCauHoi=e.id,e.bangdiem.maDanhMuc=t.categoryId,e.bangdiem.parentId=e.parentId),i.push(L.Q.fromJson(e.bangdiem))),a.push({maCauHoi:e.id,parentId:e.parentId,loaiCauHoi:e.loaiCauHoi,loaiDieuKien:e.loaiDieuKien,diem:0,diemThamDinh:0})})),setTimeout((function(){t.$store.commit("khaoSatStore/bangDiem",i),t.$store.commit("khaoSatStore/cauHoi",a)}),1)})).catch()},fnGetAvailable:function(){var t=this;return(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("auth/khao-sat/tham-dinh/kiem-tra-hop-le",{maDanhMuc:t.categoryId,maDonVi:t.$route.params.orgId}).then((function(e){t.disableSubmit=!e.data.data,t.$store.commit("khaoSatStore/kiemTraThamDinh",t.disableSubmit)})).catch();case 2:case"end":return e.stop()}}),e)})))()},fnSubmit:function(){var t=this;this.isSubmitting=!0;var e=[];this.permissions.forEach((function(i){var a=t.$store.getters["khaoSatStore/bangDiem"].find((function(t){return t.maCauHoi===i}));a&&e.push(a)})),this.$axios.post("auth/khao-sat/tham-dinh/luu-diem",e).then((function(e){t.$store.dispatch("SnackbarStore/showSnackBar",e.data)})).catch().finally((function(){t.isSubmitting=!1}))}}},B=G,F=i(71835),K=i(32371),O=i(37118),J=i(82102),R=i(11418),A=i(62877),Y=i(99762),j=(0,m.Z)(B,a,n,!1,null,null,null),E=j.exports;v()(j,{VAutocomplete:F.Z,VBtn:p.Z,VCard:K.Z,VCardActions:O.h7,VCardSubtitle:O.Qq,VCardText:O.ZB,VCol:J.Z,VDivider:R.Z,VRow:A.Z,VSelect:I.Z,VSpacer:Y.Z})}}]);
//# sourceMappingURL=41-legacy.f358a0ca.js.map