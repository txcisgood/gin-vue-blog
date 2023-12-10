import{_ as o}from"./CommonPage-60900c13.js";import{_ as c}from"./CrudTable-706359a4.js";import{e as p,p as m,o as d,f as u,w as f,j as g,i as _,s as t,y as h,l as a,v as w,N as s}from"./index-7d3bcf57.js";import{N as y}from"./Image-da15fe39.js";import{N as k}from"./Popconfirm-a41de709.js";import"./AppPage-e3cb8e40.js";import"./Space-dcdf9175.js";import"./Input-41b621cb.js";import"./RadioGroup-64dd0ada.js";import"./get-slot-1efb97e5.js";import"./Checkbox-b4c2fca7.js";import"./Forward-47c9bfa7.js";import"./utils-540fee40.js";const F=Object.assign({name:"在线用户"},{__name:"index",setup(b){const r=p(null);m(()=>{var e;(e=r.value)==null||e.handleSearch()});const n=[{title:"头像",key:"avatar",width:40,align:"center",render(e){return t(y,{height:40,imgProps:{style:{"border-radius":"1px"}},src:h(e.avatar),"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})}},{title:"昵称",key:"nickname",width:60,align:"center",ellipsis:{tooltip:!0}},{title:"登录 IP",key:"ip_address",width:70,align:"center",ellipsis:{tooltip:!0},render(e){return t("span",e.ip_address||"未知")}},{title:"登录地址",key:"ip_source",width:70,align:"center",ellipsis:{tooltip:!0},render(e){return t("span",e.ip_source||"未知")}},{title:"登录浏览器",key:"browser",width:70,align:"center",ellipsis:{tooltip:!0},render(e){return t("span",e.browser||"未知")}},{title:"操作系统",key:"os",width:70,align:"center",ellipsis:{tooltip:!0},render(e){return t("span",e.os||"未知")}},{title:"登录时间",key:"last_login_time",align:"center",width:70,render(e){return t(s,{size:"small",type:"text",ghost:!0},{default:()=>w(e.last_login_time),icon:()=>t("i",{class:"i-mdi:update"})})}},{title:"操作",key:"actions",width:60,align:"center",fixed:"right",render(e){return t(k,{onPositiveClick:()=>l(e)},{trigger:()=>t(s,{size:"small",type:"warning"},{default:()=>"下线",icon:()=>t("i",{class:"i-material-symbols:delete-outline"})}),default:()=>t("div",{},"确定强制该用户下线吗?")})}}];async function l(e){var i;try{await a.forceOfflineUser(e),window.$message.success("该用户已被强制下线!"),(i=r.value)==null||i.handleSearch()}catch{window.$message.error("强制下线失败!")}}return(e,i)=>(d(),u(o,{title:"在线用户"},{default:f(()=>[g(c,{ref_key:"$table",ref:r,columns:n,"get-data":_(a).getOnlineUsers},null,8,["get-data"])]),_:1}))}});export{F as default};