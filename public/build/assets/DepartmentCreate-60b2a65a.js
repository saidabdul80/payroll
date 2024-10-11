import{T as h,a as i,b as d,d as s,u as e,_ as r,Z as b,e as m,f as t,t as n,j as x,n as c,m as y,v as D,F as u,l as C,h as S,p as _}from"./app-2bcc9048.js";import{_ as V}from"./GoBackNavLink-2bbaee9a.js";import{_ as $}from"./OrgTabs-d8c498e2.js";import{_ as p}from"./InputLabel-8fa952b5.js";import{_ as w}from"./TextInput-43ff59ef.js";import{_ as f}from"./InputError-7685150a.js";import{P as k}from"./PrimaryButton-f7253fde.js";import{_ as B}from"./Card-02b1dfac.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={class:"py-8"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},j={class:"card-header !mb-4"},A={class:"grid grid-cols-2 gap-4 mt-4"},F={selected:"",value:""},M=["value"],T={class:"flex items-center justify-end mt-4"},J={__name:"DepartmentCreate",props:{employees:Object},setup(g){const a=h({name:"",manager_id:""}),v=()=>{a.post(route("departments.store"),{preserveScroll:!0,onError:()=>{_().error(r("Error Creating Department"))},onSuccess:()=>{_().success(r("Department Created Successfully")),a.reset()}})};return(P,l)=>(i(),d(u,null,[s(e(b),{title:e(r)("Department Create")},null,8,["title"]),s(V,null,{tabs:m(()=>[s($)]),default:m(()=>[t("div",E,[t("div",N,[s(B,{class:"!mt-0"},{default:m(()=>[t("h1",j,n(e(r)("Add A Department")),1),t("form",{onSubmit:x(v,["prevent"])},[t("div",A,[t("div",null,[s(p,{for:"department_name",value:e(r)("Department Name")},null,8,["value"]),s(w,{id:"department_name",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(a).errors.name}]),modelValue:e(a).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).name=o),required:"",autocomplete:"off",placeholder:e(r)("Sales")},null,8,["class","modelValue","placeholder"]),s(f,{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),t("div",null,[s(p,{for:"manager_id",value:e(r)("Manager")},null,8,["value"]),y(t("select",{id:"manager_id",class:"fancy-selector","onUpdate:modelValue":l[1]||(l[1]=o=>e(a).manager_id=o)},[t("option",F,n(e(r)("Choose an Employee")),1),(i(!0),d(u,null,C(g.employees,o=>(i(),d("option",{key:o.id,value:o.id},n(o.name),9,M))),128))],512),[[D,e(a).manager_id]]),s(f,{class:"mt-2",message:e(a).errors.manager_id},null,8,["message"])])]),t("div",T,[s(k,{class:c(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(a).processing}]),disabled:e(a).processing},{default:m(()=>[S(n(e(r)("Add Department")),1)]),_:1},8,["class","disabled"])])],32)]),_:1})])])]),_:1})],64))}};export{J as default};