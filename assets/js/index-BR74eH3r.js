import{u as p}from"./useHandleData-BK-BGghM.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-uDN0gikb.js";import{d as _,i as L,R as N,r as d,o as R,c as $,b as n,w as s,u as i,a1 as D,e as c,ax as U,a3 as m,t as E,H as P,a as V,P as b}from"./index-CjXGLxy2.js";import{a as A,b as B,c as H,d as f,r as q}from"./user-jg87bYz4.js";import"./sortable.esm-9-_WONQE.js";const M={class:"table-box"},j=V("span",{style:{color:"var(--el-color-primary)"}},"我是插入在表格最后的内容。若表格有合计行，该内容会位于合计行之上。",-1),G=_({name:"complexProTable"}),X=_({...G,setup(W){const o=L(),w=N([{type:"selection",width:80},{type:"index",label:"#",width:80},{type:"expand",label:"Expand",width:100},{prop:"base",label:"基本信息",headerRender:e=>n(d("el-button"),{type:"primary",onClick:()=>b.success("我是通过 tsx 语法渲染的表头")},{default:()=>[e.column.label]}),_children:[{prop:"username",label:"用户姓名",width:110},{prop:"user.detail.age",label:"年龄",width:100},{prop:"gender",label:"性别",width:100,enum:A,fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"details",label:"详细资料",_children:[{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"}]}]},{prop:"status",label:"用户状态",tag:!0,enum:B,fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:200},{prop:"operation",label:"操作",fixed:"right",width:230}]),h=()=>{var e,a,t,l,r,u;(t=(e=o.value)==null?void 0:e.element)==null||t.setCurrentRow((a=o.value)==null?void 0:a.tableData[4]),(u=(l=o.value)==null?void 0:l.element)==null||u.toggleRowSelection((r=o.value)==null?void 0:r.tableData[4],!0)},y=e=>{const{columns:a}=e,t=[];return a.forEach((l,r)=>{if(r===0)return t[r]="合计";t[r]="N/A"}),t},g=({rowIndex:e,columnIndex:a})=>{if(a===3)return e%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},C=({rowIndex:e})=>e===2?"warning-row":e===6?"success-row":"",v=(e,a)=>{a.property=="radio"||a.property=="operation"||b.success("当前行被点击了！")},k=async e=>{var a;await p(f,{id:[e.id]},`删除【${e.username}】用户`),(a=o.value)==null||a.getTableList()},x=async e=>{var a,t;await p(f,{id:e},"删除所选用户信息"),(a=o.value)==null||a.clearSelection(),(t=o.value)==null||t.getTableList()},S=async e=>{var a;await p(q,{id:e.id},`重置【${e.username}】用户密码`),(a=o.value)==null||a.getTableList()};return(e,a)=>{const t=d("el-button");return R(),$("div",M,[n(T,{ref_key:"proTable",ref:o,title:"用户列表","highlight-current-row":"",columns:w,"request-api":i(H),"row-class-name":C,"span-method":g,"show-summary":!0,"summary-method":y,onRowClick:v},{tableHeader:s(l=>{var r,u;return[n(t,{type:"primary",icon:i(D),onClick:(u=(r=o.value)==null?void 0:r.element)==null?void 0:u.toggleAllSelection},{default:s(()=>[c("全选 / 全不选")]),_:1},8,["icon","onClick"]),n(t,{type:"primary",icon:i(U),plain:"",onClick:h},{default:s(()=>[c("选中第五行")]),_:1},8,["icon"]),n(t,{type:"danger",icon:i(m),plain:"",disabled:!l.isSelected,onClick:F=>x(l.selectedListIds)},{default:s(()=>[c(" 批量删除用户 ")]),_:2},1032,["icon","disabled","onClick"])]}),expand:s(l=>[c(E(l.row),1)]),operation:s(l=>[n(t,{type:"primary",link:"",icon:i(P),onClick:r=>S(l.row)},{default:s(()=>[c("重置密码")]),_:2},1032,["icon","onClick"]),n(t,{type:"primary",link:"",icon:i(m),onClick:r=>k(l.row)},{default:s(()=>[c("删除")]),_:2},1032,["icon","onClick"])]),append:s(()=>[j]),_:1},8,["columns","request-api"])])}}});export{X as default};
