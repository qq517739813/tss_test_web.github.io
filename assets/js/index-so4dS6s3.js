import{d as t,x as u,o as _,c as d,a as p,B as g,r as c,b as e,w as a,e as l,_ as f}from"./index-CjXGLxy2.js";const h=["xlink:href"],v=t({name:"SvgIcon"}),n=t({...v,props:{name:{},prefix:{default:"icon"},iconStyle:{default:()=>({width:"100px",height:"100px"})}},setup(r){const s=r,x=u(()=>`#${s.prefix}-${s.name}`);return(o,i)=>(_(),d("svg",{style:g(o.iconStyle),"aria-hidden":"true"},[p("use",{"xlink:href":x.value},null,8,h)],4))}}),b={class:"card content-box"},y={class:"icon-list"},S=t({name:"svgIcon"}),w=t({...S,setup(r){return(s,x)=>{const o=c("el-alert"),i=c("el-descriptions-item"),m=c("el-descriptions");return _(),d("div",b,[e(o,{title:"SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons",type:"warning",closable:!1}),p("div",y,[e(n,{name:"xianxingdaoyu"}),e(n,{name:"xianxingdiqiu"}),e(n,{name:"xianxingditu"}),e(n,{name:"xianxingfanchuan"}),e(n,{name:"xianxingfeiji"}),e(n,{name:"xianxinglvhangriji"}),e(n,{name:"xianxingtianqiyubao"}),e(n,{name:"xianxingxiangjipaizhao"}),e(n,{name:"xianxingxiarilengyin"}),e(n,{name:"xianxingyoulun"}),e(n,{name:"xianxingxiarilengyin"})]),e(m,{title:"配置项 📚",column:1,border:""},{default:a(()=>[e(i,{label:"name"},{default:a(()=>[l(" 图标的名称，svg 图标必须存储在 src/assets/icons 目录下 ")]),_:1}),e(i,{label:"prefix"},{default:a(()=>[l(' 图标的前缀，默认为 "icon" ')]),_:1}),e(i,{label:"iconStyle"},{default:a(()=>[l(' 图标的样式，默认样式为 { width: "100px", height: "100px" } ')]),_:1})]),_:1})])}}}),j=f(w,[["__scopeId","data-v-9255bc47"]]);export{j as default};
