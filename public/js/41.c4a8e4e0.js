"use strict";(self["webpackChunkSaDec"]=self["webpackChunkSaDec"]||[]).push([[41],{2013:function(t,e,i){i.d(e,{Z:function(){return b}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"m-toolbar",attrs:{elevation:"1",dense:""}},[i("ul",{staticClass:"breadcrumb hidden-xs-only"},t._l(t.items,(function(e){return i("li",{key:e.text},[i("router-link",{attrs:{to:e.href}},[t._v(t._s(e.text))])],1)})),0),i("v-breadcrumbs",{staticClass:"hidden-sm-and-up",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("v-breadcrumbs-item",{attrs:{href:a.href,disabled:a.disabled}},[t._v(" "+t._s(a.text.toUpperCase())+" ")])]}}])})],1)},s=[],n={props:["items"]},o=n,h=i(1001),u=i(3453),r=i.n(u),d=i(8320),l=i(6505),m=i(3325),c=(0,m.Z)(l.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:i}=this.generateRouteLink();return t("li",[t(e,{...i,attrs:{...i.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),p=i(4589),g=(0,p.Ji)("v-breadcrumbs__divider","li"),v=i(8085),f=(0,m.Z)(v.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(g,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,i=[];for(let a=0;a<this.items.length;a++){const s=this.items[a];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(c,{key:i.join("."),props:s},[s.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),C=(0,h.Z)(o,a,s,!1,null,"efea5b80",null),b=C.exports;r()(C,{VAppBar:d.Z,VBreadcrumbs:f,VBreadcrumbsItem:c})},6966:function(t,e,i){i.r(e),i.d(e,{default:function(){return A}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LayoutDefault",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("IBreadcrumb",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-subtitle",[t._v("LỌC BỘ TIÊU CHÍ ĐÁNH GIÁ")]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{dense:"",label:"Năm đánh giá","item-text":"name","item-value":"id",items:t.years,disabled:!0},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-autocomplete",{attrs:{dense:"",label:"Bộ tiêu chí","item-text":"name","item-value":"id",items:t.categories,disabled:!0},model:{value:t.tempCatId,callback:function(e){t.tempCatId=e},expression:"tempCatId"}})],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{"min-width":"860"}},[i("v-card-text",[i("table",{staticClass:"table",attrs:{id:"thamdinh"}},[i("thead",[i("tr",[i("th",[t._v("STT")]),i("th",[t._v("Tiêu chí")]),i("th",[t._v("Điểm lớn nhất")]),i("th",[t._v("Tự đánh giá")]),i("th",[t._v("Đính kèm")]),i("th",[t._v("Ghi chú tự đánh giá")]),i("th",[t._v("Thẩm định")]),i("th",[t._v("Ghi chú thẩm định")]),1==t.$route.query.thamDinhLai?i("th",[t._v("Ý kiến đơn vị")]):t._e()])]),i("tbody",[t._l(t.iData,(function(e,a){return[e.danhDauCau<2?[i("CauHoi",{key:e+a,attrs:{question:e}})]:t._e(),e.danhDauCau>=2?[i("CauTraLoi",{key:e+a,attrs:{question:e}})]:t._e()]}))],2),i("tfoot",[0===t.iData.length?i("tr",[i("td",{staticClass:"text-center",attrs:{colspan:"8"}},[i("p",{staticClass:"ma-0"},[t._v(" Không tìm thấy dữ liệu ")])])]):t._e(),i("tr",[i("td"),i("td",{staticClass:"text-right font-weight-bold"},[t._v(" Tổng cộng ")]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.total1))])]),i("td",{staticClass:"text-center"},[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(parseFloat(t.total).toFixed(2)))])]),i("td"),i("td"),i("td",{staticClass:"text-center",attrs:{colspan:"2"}},[i("span",{staticClass:"font-weight-bold red--text"},[t._v(t._s(parseFloat(t.total2).toFixed(2)))])])])])])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error",loading:t.isSubmitting,disabled:t.disableSubmit},on:{click:function(e){return e.stopPropagation(),t.fnSubmit.apply(null,arguments)}}},[t._v(" Lưu lại ")])],1)],1)],1)],1)],1)},s=[],n=i(629),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticClass:"font-weight-bold text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":!0,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.question.diemLonNhat).toFixed(2)))])]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":0==t.question.level,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.diemTuDanhGia).toFixed(2)))])]),i("td",{staticClass:"w-cell-100",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1===t.question.danhDauCau?[null!=t.fileName?i("div",{staticClass:"text-center"},[i("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2 white--text",attrs:{color:"blue-grey",elevation:"0",small:"",link:"",target:"_blank",href:t.download()}},"v-btn",s,!1),a),[i("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-cloud-download ")]),i("span",{staticClass:"ml-2"},[t._v("Tải về")])],1)]}}],null,!1,2256436589)},[i("span",[t._v(t._s(t.fileName.split("/").pop()))])])],1):t._e()]:t._e()],2),i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1===t.question.danhDauCau&&null!=t.ghiChuDanhGia?i("div",{staticStyle:{width:"150px"}},[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuDanhGia,callback:function(e){t.ghiChuDanhGia=e},expression:"ghiChuDanhGia"}})],1):t._e()]),i("td",{staticClass:"text-center"},[i("span",{class:{"font-weight-bold":0===t.question.level,"red--text":0===t.question.level}},[t._v(t._s(parseFloat(t.diemThamDinh).toFixed(2)))])]),i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2"},model:{value:t.ghiChuThamDinh,callback:function(e){t.ghiChuThamDinh=e},expression:"ghiChuThamDinh"}})],1)]],2),1===t.$route.query.thamDinhLai?i("td",{staticClass:"text-center",attrs:{rowspan:1===t.question.danhDauCau&&t.question.childrenCount>0&&t.question.childrenCount+1}},[1!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",{staticStyle:{width:"150px"}},[null!=t.ghiChuYKien?i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuYKien,callback:function(e){t.ghiChuYKien=e},expression:"ghiChuYKien"}}):i("span",[t._v("Thống nhất")])],1)]],2):t._e()])},h=[],u={props:{question:{type:Object,default:null}},data(){return{dialog:!1,dialog2:!1,loading:!1,score:0,fileName:null,ghiChuDanhGia:null,ghiChuThamDinh:null,dontHavePermission:!1,iReact:!0,ghiChuYKien:null}},computed:{...(0,n.Se)("khaoSatStore",["bangDiem","cauHoi"]),...(0,n.rn)("khaoSatStore",["disableThamDinh","permissions"]),...(0,n.rn)("authStore",["auth"]),diemTuDanhGia(){return this.cauHoi.find((t=>t.maCauHoi===this.question.id))?.diem},diemThamDinh(){return this.cauHoi.find((t=>t.maCauHoi===this.question.id))?.diemThamDinh}},watch:{ghiChuThamDinh(){this.capNhatBangDiem()},bangDiem(){if(1===this.question.danhDauCau){const t=this.bangDiem.find((t=>t.maCauHoi===this.question.id));this.fileName=t.fileDanhGia,this.ghiChuDanhGia=t.ghiChuDanhGia,this.ghiChuThamDinh=t.ghiChuThamDinh}},cauHoi(){if(!this.iReact)return null;if(this.iReact=!1,this.question.donViThamDinh===this.auth.user.organizationId){const t=JSON.parse(JSON.stringify(this.permissions));t.push(this.question.id),this.$store.commit("khaoSatStore/permissions",t)}this.disableThamDinh||this.question.donViThamDinh!==this.auth.user.organizationId?this.dontHavePermission=!0:this.dontHavePermission=!1}},methods:{download(){return"https://cscchcsadec.dongthap.gov.vn/storage/"+this.fileName},capNhatBangDiem(){this.dialog2=!1;const t=JSON.parse(JSON.stringify(this.bangDiem)),e=t.findIndex((t=>t.maCauHoi===this.question.id));t[e].ghiChuThamDinh=this.ghiChuThamDinh,this.$store.commit("khaoSatStore/capNhatBangDiem",{index:e,value:t[e]})}},created(){1==this.$route.query.thamDinhLai&&(this.ghiChuYKien=this.question?.ykien?.noiDung)}},r=u,d=i(1001),l=i(3453),m=i.n(l),c=i(680),p=i(6428),g=i(4350),v=i(9330),f=(0,d.Z)(r,o,h,!1,null,null,null),C=f.exports;m()(f,{VBtn:c.Z,VIcon:p.Z,VTextarea:g.Z,VTooltip:v.Z});var b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[2===t.question.danhDauCau?[i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.diemLonNhat.toFixed(2))+" ")]),i("td",{staticClass:"text-center"},[1===t.question.loaiCauHoi?["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]:t._e()],2),i("td",[t.dontHavePermission?t._e():["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]],2)]:[i("td",{staticClass:"text-center"},[t._v(" "+t._s(t.question.stt)+" ")]),i("td",[t._v(" "+t._s(t.question.tenCauHoi)+" ")]),i("td"),i("td",{staticClass:"text-center"},[1===t.question.loaiCauHoi&&3===t.question.danhDauCau?["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:!0},model:{value:t.formInput,callback:function(e){t.formInput=e},expression:"formInput"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]:[i("span",{staticClass:"font-weight-bold"},[t._v("ĐTXHH")])]],2),i("td"),i("td"),i("td",[t.dontHavePermission?t._e():["Text"===t.question.kieuNhapLieu?i("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"",label:"Nhập điểm",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Select"===t.question.kieuNhapLieu?i("v-select",{staticStyle:{width:"70px","min-width":"0",margin:"0 auto"},attrs:{dense:"","hide-details":"",placeholder:"Chọn","item-text":"name","item-value":"id","return-object":!1,items:t.points,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):"Checkbox"===t.question.kieuNhapLieu?i("v-checkbox",{staticClass:"align-center justify-center pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",color:"red",value:t.question.diemLonNhat,"true-value":t.question.diemLonNhat,"input-value":t.question.diemLonNhat,disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}}):i("v-radio-group",{staticClass:"pa-0",staticStyle:{margin:"0 auto",width:"24px"},attrs:{dense:"","hide-details":"",disabled:t.dontHavePermission},on:{change:t.fnChangePoint},model:{value:t.formThamDinh,callback:function(e){t.formThamDinh=e},expression:"formThamDinh"}},[i("v-radio",{attrs:{color:"red",value:t.question.diemLonNhat}})],1)]],2),i("td",{staticClass:"text-center"},[3!==t.question.danhDauCau||t.dontHavePermission?t._e():[t.question.hasChild?t._e():i("div",[i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2"},model:{value:t.ghiChuThamDinh,callback:function(e){t.ghiChuThamDinh=e},expression:"ghiChuThamDinh"}})],1)]],2),1!==t.$route.query.thamDinhLai||t.dontHavePermission?t._e():i("td",{staticClass:"text-center"},[3===t.question.danhDauCau?[t.question.hasChild?t._e():i("div",[null!=t.ghiChuYKien?i("v-textarea",{staticClass:"mt-2",attrs:{label:"Nội dung",dense:"",outlined:"","hide-details":"",rows:"2",readonly:!0},model:{value:t.ghiChuYKien,callback:function(e){t.ghiChuYKien=e},expression:"ghiChuYKien"}}):i("span",[t._v("Thống nhất")])],1)]:t._e()],2)]],2)},D=[],x=(i(6699),{props:{question:{type:Object,default:null}},data(){return{dialog:!1,dialog2:!1,loading:!1,formInput:null,formThamDinh:null,minQuestion:{},ghiChuThamDinh:null,iReact:!0,iReact2:!0,dontHavePermission:!0,ghiChuYKien:null}},computed:{...(0,n.Se)("khaoSatStore",["bangDiem","cauHoi","eventChange"]),...(0,n.Se)("authStore",["auth"]),...(0,n.rn)("khaoSatStore",["disableThamDinh","permissions"]),points(){const t=[];let e=JSON.parse(JSON.stringify(this.question.diemNhoNhat));while(Number(e.toFixed(2))<=this.question.diemLonNhat)t.push({id:Number(e.toFixed(2)),name:e.toFixed(2)}),e+=this.question.buocNhay;return t},parent(){return this.cauHoi.find((t=>t.maCauHoi===this.question.parentId))||{}}},watch:{cauHoi(){if(!this.iReact2)return null;if(this.iReact2=!1,3===this.question.danhDauCau){if(this.question.donViThamDinh===this.auth.user.organizationId){const t=JSON.parse(JSON.stringify(this.permissions));t.push(this.question.id),this.$store.commit("khaoSatStore/permissions",t)}this.disableThamDinh||this.question.donViThamDinh!==this.auth.user.organizationId||(this.dontHavePermission=!1)}else this.disableThamDinh||!this.permissions.includes(this.question.parentId)&&!this.permissions.includes(this.question.id)||(this.dontHavePermission=!1)},eventChange(){0!==Object.keys(this.eventChange).length&&this.eventChange.maCauHoi===this.question.parentId&&this.eventChange.maCauTraLoi!==this.question.id&&(this.formThamDinh="")},bangDiem(){if(!this.iReact)return null;if(1===this.question.loaiCauHoi&&2===this.question.danhDauCau){const t=this.bangDiem.find((t=>t.maCauHoi===this.question.parentId));this.fnSetValueForm(t)}if((1===this.question.loaiCauHoi||2===this.question.loaiCauHoi)&&3===this.question.danhDauCau){const t=this.bangDiem.find((t=>t.maCauHoi===this.question.id));this.fnSetValueForm(t),this.fileName=t.fileDanhGia,this.ghiChuDanhGia=t.ghiChuDanhGia}}},methods:{fnChangePoint(t){t=t?Number(t):0;const e=JSON.parse(JSON.stringify(this.bangDiem));let i={};if(i=3===this.question.danhDauCau?e.find((t=>t.maCauHoi===this.question.id)):e.find((t=>t.maCauHoi===this.question.parentId)),"OR"===this.parent.loaiDieuKien)i.diemThamDinh=t,i.noiDungThamDinh=[{id:this.question.id,diem:t}];else{const e=i.noiDungThamDinh.findIndex((t=>t.id===this.question.id));-1===e?i.noiDungThamDinh.push({id:this.question.id,diem:t}):i.noiDungThamDinh[e].diem=t;let a=0;i.noiDungThamDinh.forEach((t=>{a+=t.diem})),i.diemThamDinh=a}const a=this.bangDiem.findIndex((t=>t.maCauHoi===i.maCauHoi));this.$store.dispatch("khaoSatStore/capNhatBangDiem",{index:a,value:i}),"OR"===this.parent.loaiDieuKien&&this.$store.commit("khaoSatStore/eventChange",{maCauHoi:i.maCauHoi,maCauTraLoi:i.noiDungThamDinh[0]?.id})},capNhatBangDiem(){this.dialog2=!1;const t=JSON.parse(JSON.stringify(this.bangDiem)),e=t.findIndex((t=>t.maCauHoi===this.question.id));t[e].ghiChuThamDinh=this.ghiChuThamDinh,this.$store.commit("khaoSatStore/capNhatBangDiem",{index:e,value:t[e]})},fnSetValueForm(t){this.iReact=!1;const e=t?.noiDungTraLoi.find((t=>t.id===this.question.id));e&&(this.formInput=e.diem);const i=t?.noiDungThamDinh.find((t=>t.id===this.question.id));i&&(this.formThamDinh=i.diem),this.$store.dispatch("khaoSatStore/capNhatDiemCapTren",t)}},created(){1==this.$route.query.thamDinhLai&&(this.ghiChuYKien=this.question?.ykien?.noiDung)}}),q=x,S=i(3702),T=i(8978),_=i(4739),k=i(3986),y=i(5978),N=(0,d.Z)(q,b,D,!1,null,null,null),I=N.exports;m()(N,{VCheckbox:S.Z,VRadio:T.Z,VRadioGroup:_.Z,VSelect:k.Z,VTextField:y.Z,VTextarea:g.Z});var H=i(5806),w=i(73),L=i(3578),$=i(2013),V={metaInfo:{title:"Thẩm định",titleTemplate:"%s - ĐÁNH GIÁ CHỈ SỐ CẢI CÁCH HÀNH CHÍNH SA ĐÉC",htmlAttrs:{lang:"vi",amp:!0}},components:{LayoutDefault:L.Z,IBreadcrumb:$.Z,CauTraLoi:I,CauHoi:C},data(){return{breadcrumbs:[{text:"DASHBOARD",disabled:!1,href:"Dashboard"},{text:"THẨM ĐỊNH",disabled:!1,href:"/Auth/KhaoSat/ThamDinh"},{text:"CHẤM ĐIỂM",disabled:!1,href:"/Auth/KhaoSat/ThamDinh/ChamDiem"}],category:{},iData:[],loading:!1,questions:[],year:(new Date).getFullYear(),categoryId:0,tempCatId:0,categories:[],isSubmitting:!1,disableSubmit:!0,total:0,total1:0,total2:0}},computed:{...(0,n.rn)("khaoSatStore",["bangDiem","permissions"]),...(0,n.rn)("authStore",["auth"]),years(){const t=[],e=(new Date).getFullYear()+2;for(let i=2022;i<e;i++)t.push({id:i,name:`Năm ${i}`});return t.reverse()}},watch:{year(){this.categoryId=0,this.categories=[],this.data=[],this.fnGetDanhMuc()},categoryId(){this.data=[],this.fnGetCauHoi()},bangDiem(t){let e=0,i=0;t.forEach((t=>{e+=t.diem,t.maDonViThamDinh===this.auth.user.organizationId&&(i+=t.diemThamDinh)})),this.total=e,this.total2=i}},async created(){this.categoryId=this.$route.query.categoryId,await this.fnGetDanhMuc(),await this.fnGetAvailable()},methods:{async fnGetDanhMuc(){await this.$axios.get("auth/khao-sat/tham-dinh/danh-muc",{params:{namApDung:this.year}}).then((t=>{this.categories=t.data?.data.map((t=>({id:t.id,name:t.tenDanhMuc})))})).catch().finally((()=>{this.tempCatId=0==parseInt(this.$route.query.categoryId.toString())?this.categories[0].id:parseInt(this.$route.query.categoryId.toString())}))},fnGetCauHoi(){this.$axios.get("auth/khao-sat/tham-dinh/cau-hoi",{params:{maDanhMuc:this.categoryId,maDonVi:this.$route.params.orgId}}).then((t=>{this.iData=t.data.data.map((t=>w.x.fromJson(t)));const e=[],i=[];this.total1=0,this.iData.forEach((t=>{const a=0===t.parentId?t.diemLonNhat:0;this.total1=this.total1+a,1!==t.danhDauCau&&3!==t.danhDauCau||(t.bangdiem||(t.bangdiem=H.Q.baseJson(),t.bangdiem.maCauHoi=t.id,t.bangdiem.maDanhMuc=this.categoryId,t.bangdiem.parentId=t.parentId),e.push(H.Q.fromJson(t.bangdiem))),i.push({maCauHoi:t.id,parentId:t.parentId,loaiCauHoi:t.loaiCauHoi,loaiDieuKien:t.loaiDieuKien,diem:0,diemThamDinh:0})})),setTimeout((()=>{this.$store.commit("khaoSatStore/bangDiem",e),this.$store.commit("khaoSatStore/cauHoi",i)}),1)})).catch()},async fnGetAvailable(){await this.$axios.post("auth/khao-sat/tham-dinh/kiem-tra-hop-le",{maDanhMuc:this.categoryId,maDonVi:this.$route.params.orgId}).then((t=>{this.disableSubmit=!t.data.data,this.$store.commit("khaoSatStore/kiemTraThamDinh",this.disableSubmit)})).catch()},fnSubmit(){this.isSubmitting=!0;const t=[];this.permissions.forEach((e=>{const i=this.$store.getters["khaoSatStore/bangDiem"].find((t=>t.maCauHoi===e));i&&t.push(i)})),this.$axios.post("auth/khao-sat/tham-dinh/luu-diem",t).then((t=>{this.$store.dispatch("SnackbarStore/showSnackBar",t.data)})).catch().finally((()=>{this.isSubmitting=!1}))}}},Z=V,P=i(1835),G=i(2371),B=i(7118),F=i(2102),K=i(1418),O=i(2877),J=i(9762),R=(0,d.Z)(Z,a,s,!1,null,null,null),A=R.exports;m()(R,{VAutocomplete:P.Z,VBtn:c.Z,VCard:G.Z,VCardActions:B.h7,VCardSubtitle:B.Qq,VCardText:B.ZB,VCol:F.Z,VDivider:K.Z,VRow:O.Z,VSelect:k.Z,VSpacer:J.Z})}}]);
//# sourceMappingURL=41.c4a8e4e0.js.map