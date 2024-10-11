import{_ as w}from"./GoBackNavLink-2bbaee9a.js";import{a as u,b as _,d as t,u as a,_ as l,Z as $,e,f as n,t as r,g as c,i as y,h as o,F as b,l as k}from"./app-2bcc9048.js";import{_ as N}from"./FlexButton-c248a7cd.js";import{_ as x}from"./ReqTabs-3467e4dc.js";import{_ as B}from"./Card-02b1dfac.js";import{P as v}from"./PlusIcon-b6c7f9c8.js";import{_ as m,T as R}from"./TableRow-0f0462d9.js";import{_ as g}from"./TableBodyHeader-ed87f422.js";import{_ as C,a as i}from"./TableHead-a572ab49.js";import{r as D}from"./useRequestTypes-c28efcd5.js";import{r as p}from"./useRequestStatusTypes-702dba45.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-5bc916ef.js";const P={class:"py-8"},T={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"flex justify-between items-center pb-4"},j={class:"card-header !mb-4"},q={key:0,class:"text-red-500 text-xs font-bold"},M={__name:"Requests",props:{requests:Object},setup(f){return(d,h)=>(u(),_(b,null,[t(a($),{title:a(l)("Requests")},null,8,["title"]),t(w,null,{tabs:e(()=>[t(x)]),default:e(()=>[n("div",P,[n("div",T,[t(B,{class:"!mt-0"},{default:e(()=>[n("div",V,[n("h1",j,r(a(l)("Current Requests")),1),d.$page.props.auth.user.roles.includes("admin")?y("",!0):(u(),c(N,{key:0,href:d.route("requests.create"),text:a(l)("Initiate A Request")},{default:e(()=>[t(v)]),_:1},8,["href","text"]))]),t(C,{links:f.requests.links,showingNumber:f.requests.data.length,totalNumber:f.requests.total},{Head:e(()=>[t(i,null,{default:e(()=>[o(r(a(l)("ID")),1)]),_:1}),t(i,null,{default:e(()=>[o(r(a(l)("Created By")),1)]),_:1}),t(i,null,{default:e(()=>[o(r(a(l)("Type")),1)]),_:1}),t(i,null,{default:e(()=>[o(r(a(l)("Start Date")),1)]),_:1}),t(i,null,{default:e(()=>[o(r(a(l)("End Date")),1)]),_:1}),t(i,null,{default:e(()=>[o(r(a(l)("Status")),1)]),_:1})]),Body:e(()=>[(u(!0),_(b,null,k(f.requests.data,s=>(u(),c(R,{key:s.id},{default:e(()=>[t(g,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(s.id),1)]),_:2},1032,["href"]),t(g,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(s.employee_name),1)]),_:2},1032,["href"]),t(m,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(a(D)[s.type]),1)]),_:2},1032,["href"]),t(m,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(s.start_date),1)]),_:2},1032,["href"]),t(m,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(s.end_date??a(l)("N/A")),1)]),_:2},1032,["href"]),t(m,{href:d.route("requests.show",{id:s.id})},{default:e(()=>[o(r(s.status==="Pending"?a(p).pending+" ⏳":s.status==="Approved"?a(p).approved+" ✅":a(p).rejected+" 🚫")+" ",1),!d.$page.props.auth.user.roles.includes("admin")&&s.status!=="Pending"&&!s.is_seen?(u(),_("span",q,h[0]||(h[0]=[n("sup",null,"**",-1)]))):y("",!0)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{M as default};