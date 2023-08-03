import{a as h,b as w,f as d,r as c,O as y,w as p,d as e,u as g,Z as k,e as s,t as r,m as N,z as E,h as o,F as $,l as B,g as C}from"./app-f8f018c0.js";import{_ as V}from"./GoBackNavLink-cb249c66.js";import{_ as z}from"./EmployeeTabs-7f3837bf.js";import{_ as A}from"./SearchBar-669e8926.js";import{_ as D}from"./FlexButton-8d88afba.js";import{d as I}from"./index-d8197599.js";import{_ as M,a as n}from"./TableHead-d46ce82e.js";import{_ as v,T as S}from"./TableRow-2e0fff23.js";import{_ as b}from"./TableBodyHeader-9ce4f02f.js";import{_ as T}from"./TableBodyAction-48aa4c59.js";import{_ as H}from"./Card-67a7ecca.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-8df2896f.js";const U={name:"AddUserIcon"},j={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},F=d("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"},null,-1),x=[F];function L(u,_,m,l,f,a){return h(),w("svg",j,x)}const P=O(U,[["render",L]]),R={class:"py-8"},Z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},q={class:"card-header !mb-4"},G={class:"flex justify-between items-center gap-4 pb-4"},J=["placeholder"],ne={__name:"Employees",props:{employees:Object},setup(u){const _=c(""),m=c("id"),l=c(!0),f=I(()=>{y.visit(route("employees.index",{term:_.value,sort:m.value,sort_dir:l.value}),{preserveState:!0,preserveScroll:!0})},400);return p(_,f),p(m,f),p(l,f),(a,i)=>(h(),w($,null,[e(g(k),{title:a.__("Employees")},null,8,["title"]),e(V,null,{tabs:s(()=>[e(z)]),default:s(()=>[d("div",R,[d("div",Z,[e(H,{class:"!mt-0"},{default:s(()=>[d("h1",q,r(a.__("Current Employees")),1),d("div",G,[e(D,{href:a.route("employees.create"),text:a.__("Add Employee")},{default:s(()=>[e(P)]),_:1},8,["href","text"]),e(A,null,{default:s(()=>[N(d("input",{type:"text",id:"table-search-users","onUpdate:modelValue":i[0]||(i[0]=t=>_.value=t),class:"input-class",placeholder:a.__("Search for a user")},null,8,J),[[E,_.value]])]),_:1})]),e(M,{links:u.employees.links,showingNumber:u.employees.data.length,totalNumber:u.employees.total},{Head:s(()=>[e(n,{onClick:i[1]||(i[1]=t=>{m.value="id",l.value=!l.value}),sortable:""},{default:s(()=>[o(r(a.__("ID"))+" ↕",1)]),_:1}),e(n,{onClick:i[2]||(i[2]=t=>{m.value="name",l.value=!l.value}),sortable:""},{default:s(()=>[o(r(a.__("Name"))+" ↕",1)]),_:1}),e(n,null,{default:s(()=>[o(r(a.__("Email")),1)]),_:1}),e(n,null,{default:s(()=>[o(r(a.__("Phone")),1)]),_:1}),e(n,null,{default:s(()=>[o(r(a.__("National ID")),1)]),_:1}),e(n,null,{default:s(()=>[o(r(a.__("Action")),1)]),_:1})]),Body:s(()=>[(h(!0),w($,null,B(u.employees.data,t=>(h(),C(S,{key:t.id},{default:s(()=>[e(b,{href:a.route("employees.show",{id:t.id})},{default:s(()=>[o(r(t.id),1)]),_:2},1032,["href"]),e(b,{href:a.route("employees.show",{id:t.id})},{default:s(()=>[o(r(t.name),1)]),_:2},1032,["href"]),e(v,{href:a.route("employees.show",{id:t.id})},{default:s(()=>[o(r(t.email),1)]),_:2},1032,["href"]),e(v,{href:a.route("employees.show",{id:t.id})},{default:s(()=>[o(r(t.phone),1)]),_:2},1032,["href"]),e(v,{href:a.route("employees.show",{id:t.id})},{default:s(()=>[o(r(t.national_id),1)]),_:2},1032,["href"]),e(T,{href:a.route("employees.edit",{id:t.id})},{default:s(()=>[o(r(a.__("Edit")),1)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{ne as default};