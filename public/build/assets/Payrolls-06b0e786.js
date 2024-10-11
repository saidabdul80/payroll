import{r as g,w as k,a as n,b as y,d as s,u as P,Z as N,e as i,f as l,t,k as z,g as p,i as v,m as c,a9 as h,h as r,F as $,l as S,q as B}from"./app-2bcc9048.js";import{_ as F}from"./GoBackNavLink-2bbaee9a.js";import{_ as R,a as m}from"./TableHead-a572ab49.js";import{_ as b,T as U}from"./TableRow-0f0462d9.js";import{_ as V}from"./TableBodyHeader-ed87f422.js";import{_ as j}from"./TableBodyAction-ae72c53a.js";import{_ as T}from"./PayrollTabs-121205cd.js";import{o as A}from"./vue-datepicker-1849adfe.js";/* empty css             */import{_ as E}from"./InputError-7685150a.js";import{_ as D}from"./InputLabel-8fa952b5.js";import{_ as q}from"./Card-02b1dfac.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-5bc916ef.js";const C={class:"py-8"},M={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},O={class:"card-header !mb-4"},H={class:"flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4"},I={class:"w-1/2",dir:"ltr"},L={class:"ul-checkbox mb-1"},Z={class:"li-checkbox"},G={class:"ul-li-div-radio"},J={for:"horizontal-list-radio-all",class:"li-radio-label"},K={class:"li-checkbox"},Q={class:"ul-li-div-radio"},W={for:"horizontal-list-radio-pending",class:"li-radio-label"},X={class:"li-checkbox"},Y={class:"ul-li-div-radio"},x={for:"horizontal-list-radio-reviewed",class:"li-radio-label"},ee={class:"li-checkbox"},ae={class:"ul-li-div-radio"},le={for:"horizontal-list-radio-paid",class:"li-radio-label"},ve={__name:"Payrolls",props:{payrolls:Object,dateParam:String,statusParam:String},setup(_){const f=_,u=g(new Date(f.dateParam));f.dateParam===""&&(u.value="");const o=g(f.statusParam);f.statusParam===""&&(o.value="all");const w=()=>{const e={date:u.value===null?null:u.value,status:o.value===null?null:o.value};B.visit(route("payrolls.index",e),{preserveState:!0,preserveScroll:!0})};return k(u,w),k(o,w),(e,d)=>(n(),y($,null,[s(P(N),{title:e.__("Payrolls")},null,8,["title"]),s(F,null,{tabs:i(()=>[s(T)]),default:i(()=>[l("div",C,[l("div",M,[s(q,{class:"!mt-0"},{default:i(()=>[l("h1",O,t(e.__("Payrolls")),1),l("div",H,[l("div",null,[s(D,{for:"date",value:e.__("Filter by Month")+":"},null,8,["value"]),s(P(A),{id:"date",modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=a=>u.value=a),class:"py-1 block w-full",placeholder:e.__("Select a Date..."),"enable-time-picker":!1,"max-date":new Date,"month-picker":"",dark:z("isDark").value,required:""},null,8,["modelValue","placeholder","max-date","dark"]),Object.keys(e.$page.props.errors).length?(n(),p(E,{key:0,class:"mt-2",message:e.$page.props.errors},null,8,["message"])):v("",!0)]),l("div",I,[s(D,{for:"date",value:e.__("Filter by Status")+":"},null,8,["value"]),l("ul",L,[l("li",Z,[l("div",G,[c(l("input",{id:"horizontal-list-radio-all",type:"radio",value:"all","onUpdate:modelValue":d[1]||(d[1]=a=>o.value=a),name:"list-radio",class:"li-radio-input"},null,512),[[h,o.value]]),l("label",J,t(e.__("All")),1)])]),l("li",K,[l("div",Q,[c(l("input",{id:"horizontal-list-radio-pending",type:"radio",value:"pending","onUpdate:modelValue":d[2]||(d[2]=a=>o.value=a),name:"list-radio",class:"li-radio-input"},null,512),[[h,o.value]]),l("label",W,t(e.__("Pending")),1)])]),l("li",X,[l("div",Y,[c(l("input",{id:"horizontal-list-radio-reviewed",type:"radio",value:"reviewed","onUpdate:modelValue":d[3]||(d[3]=a=>o.value=a),name:"list-radio",class:"li-radio-input"},null,512),[[h,o.value]]),l("label",x,t(e.__("Reviewed")),1)])]),l("li",ee,[l("div",ae,[c(l("input",{id:"horizontal-list-radio-paid",type:"radio",value:"paid","onUpdate:modelValue":d[4]||(d[4]=a=>o.value=a),name:"list-radio",class:"li-radio-input"},null,512),[[h,o.value]]),l("label",le,t(e.__("Paid")),1)])])])])]),s(R,{links:_.payrolls.links,showingNumber:_.payrolls.data.length,totalNumber:_.payrolls.total},{Head:i(()=>[s(m,null,{default:i(()=>[r(t(e.__("Payroll ID")),1)]),_:1}),s(m,null,{default:i(()=>[r(t(e.__("Employee Name")),1)]),_:1}),s(m,null,{default:i(()=>[r(t(e.__("Total Amount")),1)]),_:1}),s(m,null,{default:i(()=>[r(t(e.__("Due Date")),1)]),_:1}),s(m,null,{default:i(()=>[r(t(e.__("Status")),1)]),_:1}),e.$page.props.auth.user.roles.includes("admin")?(n(),p(m,{key:0},{default:i(()=>[r(t(e.__("Action")),1)]),_:1})):v("",!0)]),Body:i(()=>[(n(!0),y($,null,S(_.payrolls.data,a=>(n(),p(U,{key:a.id},{default:i(()=>[s(V,{href:e.route("payrolls.show",{id:a.id})},{default:i(()=>[r(t(a.id),1)]),_:2},1032,["href"]),s(V,{href:e.route("payrolls.show",{id:a.id})},{default:i(()=>[r(t(a.employee_name),1)]),_:2},1032,["href"]),s(b,{href:e.route("payrolls.show",{id:a.id})},{default:i(()=>[r(t(a.currency)+" "+t(a.total_payable),1)]),_:2},1032,["href"]),s(b,{href:e.route("payrolls.show",{id:a.id})},{default:i(()=>[r(t(a.due_date),1)]),_:2},1032,["href"]),s(b,{href:e.route("payrolls.show",{id:a.id})},{default:i(()=>[r(t(a.status?"Paid":a.is_reviewed?"Reviewed":"Pending Review"),1)]),_:2},1032,["href"]),e.$page.props.auth.user.roles.includes("admin")?(n(),p(j,{key:0,href:e.route("payrolls.edit",{id:a.id})},{default:i(()=>[r(t(e.__("Edit")),1)]),_:2},1032,["href"])):v("",!0)]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{ve as default};