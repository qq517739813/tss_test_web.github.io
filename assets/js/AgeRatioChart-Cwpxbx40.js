import{_ as i}from"./index.vue_vue_type_script_setup_true_name_ECharts_lang-YPsoTwZm.js";import{d as c,o as l,c as s,b as p,_ as m}from"./index-CjXGLxy2.js";import"./index-DzG2fHYp.js";const d={class:"echarts"},f=c({__name:"AgeRatioChart",setup(u){let r=[{value:200,name:"10岁以下",percentage:"16%"},{value:110,name:"10 - 18岁",percentage:"8%"},{value:150,name:"18 - 30岁",percentage:"12%"},{value:310,name:"30 - 40岁",percentage:"24%"},{value:250,name:"40 - 60岁",percentage:"20%"},{value:260,name:"60岁以上",percentage:"20%"}];const a=["#F6C95C","#EF7D33","#1F9393","#184EA1","#81C8EF","#9270CA"],n={color:a,tooltip:{show:!0,trigger:"item",formatter:"{b} <br/>占比：{d}%"},legend:{orient:"vertical",right:"20px",top:"15px",itemGap:15,itemWidth:14,formatter:function(e){let t="";return r.forEach(o=>{o.name===e&&(t=" "+e+"　 "+o.percentage)}),t},textStyle:{color:"#fff"}},grid:{top:"bottom",left:10,bottom:10},series:[{zlevel:1,name:"年龄比例",type:"pie",selectedMode:"single",radius:[50,90],center:["35%","50%"],startAngle:60,label:{position:"inside",show:!0,color:"#fff",formatter:function(e){return e.data.percentage},rich:{b:{fontSize:16,lineHeight:30,color:"#fff"}}},itemStyle:{shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:10},data:r.map((e,t)=>({value:e.value,name:e.name,percentage:e.percentage,itemStyle:{borderWidth:10,shadowBlur:20,borderColor:a[t],borderRadius:10}}))},{name:"",type:"pie",selectedMode:"single",radius:[50,90],center:["35%","50%"],startAngle:60,data:[{value:1e3,name:"",label:{show:!0,formatter:"{a|本日总数}",rich:{a:{align:"center",color:"rgb(98,137,169)",fontSize:14}},position:"center"}}]}]};return(e,t)=>(l(),s("div",d,[p(i,{option:n,resize:!1})]))}}),b=m(f,[["__scopeId","data-v-faf8f2c2"]]);export{b as default};
