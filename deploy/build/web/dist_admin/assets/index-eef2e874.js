import{p as $,e as p,o as T,f as U,w as n,l as f,j as r,h as v,i as s,k as S,g as x,s as a,y as q,z as _,N as d,v as z}from"./index-7d3bcf57.js";import{_ as B}from"./CommonPage-60900c13.js";import{_ as b}from"./QueryItem-c84c912a.js";import{_ as I}from"./CrudTable-706359a4.js";import{c as k,d as P}from"./config-7d76553c.js";import{u as D}from"./useCRUD-87b8d7a3.js";import{N as R}from"./Image-da15fe39.js";import{N as V,a as y}from"./Tabs-aa5b26a3.js";import{N as j}from"./Input-41b621cb.js";import{N as K}from"./Space-dcdf9175.js";import{N as M}from"./Popconfirm-a41de709.js";import"./AppPage-e3cb8e40.js";import"./Checkbox-b4c2fca7.js";import"./RadioGroup-64dd0ada.js";import"./get-slot-1efb97e5.js";import"./Forward-47c9bfa7.js";import"./utils-540fee40.js";import"./Add-58674542.js";const O=x("span",{class:"i-material-symbols:recycling-rounded"},null,-1),A=x("span",{class:"i-ic:outline-approval"},null,-1),oe=Object.assign({name:"评论管理"},{__name:"index",setup(E){$(()=>{g("all")});const o=p(null),m=p({nickname:"",type:""}),u=p({is_review:null}),{handleDelete:h}=D({name:"评论",doDelete:f.deleteComments,refresh:()=>{var e;return(e=o.value)==null?void 0:e.handleSearch()}}),N=[{type:"selection",width:15,fixed:"left"},{title:"头像",key:"avatar",width:50,align:"center",render(e){return a(R,{height:50,imgProps:{style:{"border-radius":"3px"}},src:q(e.avatar),"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})}},{title:"评论人",key:"nickname",width:50,align:"center",ellipsis:{tooltip:!0}},{title:"回复对象",key:"reply_nick_name",width:50,align:"center",render(e){return a("span",e.reply_nickname||"无")}},{title:"评论内容",key:"content",width:140,align:"center",ellipsis:{tooltip:!0}},{title:"评论时间",key:"created_at",align:"center",width:60,render(e){return a(d,{size:"small",type:"text",ghost:!0},{default:()=>z(e.created_at),icon:()=>a("i",{class:"i-mdi:update"})})}},{title:"状态",key:"is_review",width:50,align:"center",render(e){return a(_,{type:e.is_review?"success":"error"},{default:()=>e.is_review?"通过":"审核中"})}},{title:"来源",key:"type",width:50,align:"center",render(e){return a(_,{type:k[e.type].tag},{default:()=>k[e.type].name})}},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render(e){return[e.is_review?a(d,{size:"small",type:"warning",style:"margin-left: 15px;",onClick:()=>c([e.id],0)},{default:()=>"撤下",icon:()=>a("i",{class:"i-mi:circle-error"})}):a(d,{size:"small",type:"success",style:"margin-left: 15px;",onClick:()=>c([e.id],1)},{default:()=>"通过",icon:()=>a("i",{class:"i-mi:circle-check"})}),a(M,{onPositiveClick:()=>h([e.id],!1)},{trigger:()=>a(d,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:()=>a("i",{class:"i-material-symbols:delete-outline"})}),default:()=>a("div",{},"确定删除该条评论吗?")})]}}];async function c(e,t){var l,i;if(!e.length){window.$message.info("请选择要审核的数据");return}await f.updateCommentReview({ids:e,is_review:t}),(l=window.$message)==null||l.success(t?"审核成功":"撤下成功"),(i=o.value)==null||i.handleSearch()}function g(e){var t;switch(e){case"all":u.value.is_review=null;break;case"has_review":u.value.is_review=1;break;case"not_review":u.value.is_review=0;break}(t=o.value)==null||t.handleSearch()}return(e,t)=>(T(),U(B,{title:"评论管理"},{action:n(()=>{var l,i;return[r(s(d),{type:"error",disabled:!((l=o.value)!=null&&l.selections.length),onClick:t[0]||(t[0]=C=>{var w;return s(h)((w=o.value)==null?void 0:w.selections)})},{icon:n(()=>[O]),default:n(()=>[v(" 批量删除 ")]),_:1},8,["disabled"]),r(s(d),{type:"success",disabled:!((i=o.value)!=null&&i.selections.length),onClick:t[1]||(t[1]=C=>c(o.value.selections,1))},{icon:n(()=>[A]),default:n(()=>[v(" 批量通过 ")]),_:1},8,["disabled"])]}),default:n(()=>[r(s(V),{type:"line",animated:"","onUpdate:value":g},{prefix:n(()=>[v(" 状态 ")]),default:n(()=>[r(s(y),{name:"all",tab:"全部"}),r(s(y),{name:"has_review",tab:"通过"}),r(s(y),{name:"not_review",tab:"审核中"})]),_:1}),r(I,{ref_key:"$table",ref:o,"query-items":m.value,"onUpdate:queryItems":t[6]||(t[6]=l=>m.value=l),"extra-params":u.value,columns:N,"get-data":s(f).getComments},{queryBar:n(()=>[r(b,{label:"用户","label-width":40,"content-width":180},{default:n(()=>[r(s(j),{value:m.value.nickname,"onUpdate:value":t[2]||(t[2]=l=>m.value.nickname=l),clearable:"",type:"text",placeholder:"请输入用户昵称",onKeydown:t[3]||(t[3]=S(l=>{var i;return(i=o.value)==null?void 0:i.handleSearch()},["enter"]))},null,8,["value"])]),_:1}),r(b,{label:"来源","label-width":40,"content-width":160},{default:n(()=>[r(s(K),{value:m.value.type,"onUpdate:value":[t[4]||(t[4]=l=>m.value.type=l),t[5]||(t[5]=l=>{var i;return(i=o.value)==null?void 0:i.handleSearch()})],clearable:"",filterable:"",placeholder:"请选择评论来源",options:s(P)},null,8,["value","options"])]),_:1})]),_:1},8,["query-items","extra-params","get-data"])]),_:1}))}});export{oe as default};