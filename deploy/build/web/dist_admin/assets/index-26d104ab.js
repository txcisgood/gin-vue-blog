import{_ as U}from"./CommonPage-60900c13.js";import{_ as P}from"./UploadOne-7994ca3e.js";import{u as R,e as p,o as C,f as q,w as r,j as a,i as s,g as v,h as f,l as _,N as c}from"./index-7d3bcf57.js";import{N as B,a as b}from"./Tabs-aa5b26a3.js";import{N as g,a as u}from"./FormItem-f3617c31.js";import{N as d}from"./Input-41b621cb.js";import"./AppPage-e3cb8e40.js";import"./Upload-c098fdfc.js";import"./Image-da15fe39.js";import"./utils-540fee40.js";import"./Add-58674542.js";const S={class:"m-30 flex items-center"},$={class:"mr-30 w-200"},K={__name:"index",setup(I){const i=R(),w=p(null),o=p({avatar:i.avatar,nickname:i.nickname,intro:i.intro,website:i.website});async function h(){var n;(n=w.value)==null||n.validate(async e=>{e||(await _.updateCurrent(o.value),$message.success("更新成功!"),i.setUserInfo(o.value))})}const y={nickname:[{required:!0,message:"请输入昵称",trigger:["input","blur","change"]}]},m=p(null),l=p({old_password:"",new_password:"",confirm_password:""});function N(){var n;(n=m.value)==null||n.validate(async e=>{e||(await _.updateCurrentPassword(l.value),$message.success("修改成功!"))})}const k={old_password:[{required:!0,message:"请输入旧密码",trigger:["input","blur","change"]}],new_password:[{required:!0,message:"请输入新密码",trigger:["input","blur","change"]}],confirm_password:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:F,message:"两次密码输入不一致",trigger:"input"},{validator:x,message:"两次密码输入不一致",trigger:["blur","password-input"]}]};function F(n,e){return!!l.value.new_password&&l.value.new_password.startsWith(e)&&l.value.new_password.length>=e.length}function x(n,e){return e===l.value.new_password}return(n,e)=>(C(),q(U,{"show-header":!1},{default:r(()=>[a(s(B),{type:"line",animated:""},{default:r(()=>[a(s(b),{name:"website",tab:"修改信息"},{default:r(()=>[v("div",S,[v("div",$,[a(P,{preview:o.value.avatar,"onUpdate:preview":e[0]||(e[0]=t=>o.value.avatar=t),width:130},null,8,["preview"])]),a(s(g),{ref_key:"infoFormRef",ref:w,"label-placement":"left","label-align":"left","label-width":"100",model:o.value,rules:y,class:"w-400"},{default:r(()=>[a(s(u),{label:"昵称",path:"nickname"},{default:r(()=>[a(s(d),{value:o.value.nickname,"onUpdate:value":e[1]||(e[1]=t=>o.value.nickname=t),type:"text",placeholder:"请填写昵称"},null,8,["value"])]),_:1}),a(s(u),{label:"个人简介",path:"intro"},{default:r(()=>[a(s(d),{value:o.value.intro,"onUpdate:value":e[2]||(e[2]=t=>o.value.intro=t),type:"text",placeholder:"请填写个人简介"},null,8,["value"])]),_:1}),a(s(u),{label:"个人网站",path:"website"},{default:r(()=>[a(s(d),{value:o.value.website,"onUpdate:value":e[3]||(e[3]=t=>o.value.website=t),type:"text",placeholder:"请填写个人网站"},null,8,["value"])]),_:1}),a(s(c),{type:"primary",onClick:h},{default:r(()=>[f(" 修改 ")]),_:1})]),_:1},8,["model"])])]),_:1}),a(s(b),{name:"contact",tab:"修改密码"},{default:r(()=>[a(s(g),{ref_key:"passwordFormRef",ref:m,"label-placement":"left","label-align":"left",model:l.value,"label-width":"100",rules:k,class:"m-30 w-400"},{default:r(()=>[a(s(u),{label:"旧密码",path:"old_password"},{default:r(()=>[a(s(d),{value:l.value.old_password,"onUpdate:value":e[4]||(e[4]=t=>l.value.old_password=t),type:"password","show-password-on":"mousedown",placeholder:"请输入旧密码"},null,8,["value"])]),_:1}),a(s(u),{label:"新密码",path:"new_password"},{default:r(()=>[a(s(d),{value:l.value.new_password,"onUpdate:value":e[5]||(e[5]=t=>l.value.new_password=t),disabled:!l.value.old_password,type:"password","show-password-on":"mousedown",placeholder:"请输入新密码"},null,8,["value","disabled"])]),_:1}),a(s(u),{label:"确认密码",path:"confirm_password"},{default:r(()=>[a(s(d),{value:l.value.confirm_password,"onUpdate:value":e[6]||(e[6]=t=>l.value.confirm_password=t),disabled:!l.value.new_password,type:"password","show-password-on":"mousedown",placeholder:"请再次输入新密码"},null,8,["value","disabled"])]),_:1}),a(s(c),{type:"primary",onClick:N},{default:r(()=>[f(" 修改 ")]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}))}};export{K as default};