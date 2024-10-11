import{c as T,T as C,r as E,o as F,Q as D,w as I,a as _,b as g,d as m,u as e,_ as s,Z as q,e as f,f as a,t as o,g as y,h as k,i as v,j as P,n as h,k as w,F as N,l as H,m as R,v as z,p as O,q as L}from"./app-2bcc9048.js";import{_ as Q}from"./GoBackNavLink-2bbaee9a.js";import{o as S}from"./vue-datepicker-1849adfe.js";/* empty css             */import{_ as W}from"./AttendanceTabs-6e3cc2a3.js";import{_ as Y}from"./TextInput-43ff59ef.js";import{_ as Z}from"./InputError-7685150a.js";import{P as G}from"./PrimaryButton-f7253fde.js";import{_ as U}from"./InputLabel-8fa952b5.js";import{_ as V}from"./Notice-1632501c.js";import{_ as J}from"./Card-02b1dfac.js";import{H as K}from"./HorizontalRule-2d9dec5f.js";import{a as x}from"./useAttendanceTypes-304fd9d8.js";import"./_plugin-vue_export-helper-c27b6911.js";const X={class:"py-8"},ee={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},te={class:"card-header !mb-1"},ae={class:"relative shadow-md sm:rounded-lg mt-8 overflow-x-scroll md:overflow-visible"},se={class:"w-full text-sm text-left"},le={class:"table-thead"},ne={scope:"col",class:"px-6 py-3"},oe={scope:"col",class:"px-6 py-3"},ie={scope:"col",class:"px-6 py-3"},de={scope:"col",class:"px-6 py-3"},re={scope:"col",class:"px-6 py-3"},ce={scope:"row",class:"table-th"},me={class:"hidden"},ue={class:"table-td w-40"},_e=["onUpdate:modelValue","disabled"],he={value:"on_time",selected:""},fe={value:"late"},pe={value:"missed"},ye={class:"table-td"},be={class:"table-td"},ge={class:"table-td"},ke={class:"p-4 text-sm"},ve={class:"flex items-center justify-end mt-4"},Ee={__name:"AttendanceCreate",props:{employees:Object,attendances:Object,dateParam:String,attendable:Boolean},setup(c){const l=c,A=T(()=>l.attendances!==null&&Array.isArray(l.attendances)&&l.attendances.length===l.employees.length),p=T(()=>l.attendances!==null&&Array.isArray(l.attendances)&&l.attendances.length>0&&l.attendances.length<l.employees.length),t=C({date:E(new Date(l.dateParam).toISOString().split("T")[0]),employee_id:[],status:[],sign_in_time:[],sign_off_time:[],notes:[],is_manually_filled:[]}),j=()=>{t.post(route("attendances.store"),{preserveScroll:!0,onError:()=>{O().error(s("Error Taking Attendance"))},onSuccess:()=>{O().success(s("Attendance Taken Successfully"))}})};function $(){t.employee_id=Array.from({length:l.employees.length},(d,r)=>l.employees[r].id),t.status=Array(l.employees.length).fill("on_time"),t.sign_in_time=Array(l.employees.length).fill({hours:9,minutes:0,seconds:0}),t.sign_off_time=Array(l.employees.length).fill({hours:17,minutes:0,seconds:0}),t.notes=Array(l.employees.length).fill(null),t.is_manually_filled=Array(l.employees.length).fill(!1)}function B(){let d=0;for(;;){for(let r=0;r<l.attendances.length;r++)if(l.attendances[r].employee_id===l.employees[d].id){const n=l.attendances[r];if(t.status[d]=n.status,t.notes[d]=n.notes,t.is_manually_filled[d]=n.is_manually_filled,n.sign_in_time===null)t.sign_in_time[d]=null;else{const[i,u,b]=n.sign_in_time.split(":").map(Number);t.sign_in_time[d]={hours:i,minutes:u,seconds:b}}if(n.sign_off_time===null)t.sign_off_time[d]=null;else{const[i,u,b]=n.sign_off_time.split(":").map(Number);t.sign_off_time[d]={hours:i,minutes:u,seconds:b}}break}if(d++,d>=l.employees.length)break}}function M(d,r,n){if(d){if(!r.is_manually_filled[n]&&r.status[n]!=="missed")return"⚠️";if(r.is_manually_filled[n])return r.sign_off_time[n]===null?"✍️":"✅"}return""}return F(()=>{Object.keys(D().props.errors).length&&alert(D().props.errors.term),$(),(A.value||p.value)&&B()}),I(()=>t.date,()=>{L.visit(route("attendances.create",{term:t.date.toISOString().split("T")[0]}),{preserveState:!1,preserveScroll:!0})}),(d,r)=>(_(),g(N,null,[m(e(q),{title:e(s)("Take Attendance")},null,8,["title"]),m(Q,null,{tabs:f(()=>[m(W)]),default:f(()=>[a("div",X,[a("div",ee,[m(J,{class:"!mt-0"},{default:f(()=>[a("h1",te,o(e(s)("Take/Edit Attendance")),1),p.value?(_(),y(U,{key:0,class:"!font-thin"},{default:f(()=>[k(o(e(s)("Note: This page overwrites employees manually registered attendance"))+". ",1)]),_:1})):v("",!0),a("form",{onSubmit:P(j,["prevent"]),class:"pt-4"},[a("div",null,[m(U,{for:"date",value:e(s)("Select Day")},null,8,["value"]),m(e(S),{id:"date",modelValue:e(t).date,"onUpdate:modelValue":r[0]||(r[0]=n=>e(t).date=n),class:h(["py-1 block w-full",{"border border-red-500":e(t).errors.date}]),placeholder:"Select Date...","enable-time-picker":!1,"max-date":new Date,dark:w("isDark").value,required:""},null,8,["modelValue","class","max-date","dark"]),m(Z,{class:"mt-2",message:e(t).errors.date},null,8,["message"])]),c.attendable?v("",!0):(_(),y(V,{key:0,type:"success",bold:e(s)("Off Day!"),text:e(s)("This day is off (Weekend or a Holiday). No attendance for this day")+". 🎉"},null,8,["bold","text"])),A.value?(_(),y(V,{key:1,type:"warning",bold:e(s)("Notice!"),text:e(s)("The selected day's attendance has been already taken. You are now editing the previously taken attendance.")},null,8,["bold","text"])):p.value?(_(),y(V,{key:2,type:"warning",bold:e(s)("Incomplete Attendance!"),br:"",text:e(s)("Some employees have taken their attendances here while others did not. Any changes you make in this page will overwrite the records here.")+"<br />"+e(s)("Records with the sign ✍️ denotes that this employee has taken their attendance but hasn't signed off yet (incomplete attendance).")+"<br />"+e(s)("Records with the sign ✅ denotes that this employee has taken their attendance and has signed off (complete attendance).")+"<br />"},null,8,["bold","text"])):v("",!0),m(K,{class:"mt-6"}),a("div",ae,[a("table",se,[a("thead",le,[a("tr",null,[a("th",ne,o(e(s)("Employee name (ID)")),1),a("th",oe,o(e(s)("Status")),1),a("th",ie,o(e(s)("Sign In Time")),1),a("th",de,o(e(s)("Sign Off Time")),1),a("th",re,o(e(s)("Notes?")),1)])]),a("tbody",null,[(_(!0),g(N,null,H(c.employees,(n,i)=>(_(),g("tr",{key:n.id,class:h(["table-tr",{"bg-gray-50":i%2===1}])},[a("th",ce,[k(o(n.name+" ("+n.id+")")+" "+o(M(p.value,e(t),i))+" ",1),a("span",me,o(e(t).employee_id[i]=n.id),1)]),a("td",ue,[R(a("select",{"onUpdate:modelValue":u=>e(t).status[i]=u,class:h(["fancy-selector",{"opacity-75 cursor-not-allowed":!c.attendable}]),disabled:!c.attendable},[a("option",he,o(e(x).on_time),1),a("option",fe,o(e(x).late),1),a("option",pe,o(e(x).missed),1)],10,_e),[[z,e(t).status[i]]])]),a("td",ye,[m(e(S),{modelValue:e(t).sign_in_time[i],"onUpdate:modelValue":u=>e(t).sign_in_time[i]=u,class:h(["mt-1 block w-full",{"opacity-75 cursor-not-allowed":!c.attendable}]),placeholder:e(s)("Select Time..."),"time-picker":"","is-24":!1,required:"",dark:w("isDark").value,disabled:!c.attendable},null,8,["modelValue","onUpdate:modelValue","placeholder","dark","disabled","class"])]),a("td",be,[m(e(S),{modelValue:e(t).sign_off_time[i],"onUpdate:modelValue":u=>e(t).sign_off_time[i]=u,class:h(["mt-1 block w-full",{"opacity-75 cursor-not-allowed":!c.attendable}]),placeholder:e(s)("Select Time..."),"time-picker":"","is-24":!1,required:"",dark:w("isDark").value,disabled:!c.attendable},null,8,["modelValue","onUpdate:modelValue","placeholder","dark","disabled","class"])]),a("td",ge,[m(Y,{id:"notes",type:"text",class:h(["mt-1 block w-full",{"opacity-75 cursor-not-allowed":!c.attendable}]),modelValue:e(t).notes[i],"onUpdate:modelValue":u=>e(t).notes[i]=u,autocomplete:"off",placeholder:e(s)("Note..."),disabled:!c.attendable},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled","class"])])],2))),128))])]),a("div",ke,[a("p",null,o(e(s)("⚠️ Means there this page has registered attendances recorded, but this record is not recorded and needs to be filled"))+".",1),a("p",null,o(e(s)("✍️ Means there this page has registered attendances recorded, and this record has been taken by employee, but hasn't signed off yet (incomplete attendance)"))+".",1),a("p",null,o(e(s)("✅ Means there this page has registered attendances recorded, and this record's attendance has been fully taken by employee (complete attendance)"))+".",1)])]),a("div",ve,[m(G,{class:h(["ltr:ml-4 rtl:mr-4",{"opacity-25 cursor-not-allowed":e(t).processing||!c.attendable}]),disabled:e(t).processing||!c.attendable},{default:f(()=>[k(o(e(s)("Confirm Attendance")),1)]),_:1},8,["class","disabled"])])],32)]),_:1})])])]),_:1})],64))}};export{Ee as default};
