import{T as C,a as $,b as U,d as r,u as e,_ as s,Z as j,e as m,f as o,t as c,j as _,n,k as h,h as b,F as q,p as g,Q as F}from"./app-2bcc9048.js";import{_ as A}from"./GoBackNavLink-2bbaee9a.js";import{_ as M}from"./OrgTabs-d8c498e2.js";import{_ as d}from"./InputLabel-8fa952b5.js";import{_ as p}from"./TextInput-43ff59ef.js";import{_ as u}from"./InputError-7685150a.js";import{P as v}from"./PrimaryButton-f7253fde.js";import{S as f}from"./sweetalert2-50e64164.js";import{o as y}from"./vue-datepicker-1849adfe.js";/* empty css             */import{_ as P}from"./Card-02b1dfac.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"py-8"},Y={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},z={class:"card-header !mb-6"},O={class:"mt-2"},Q={class:"mt-2"},Z={class:"mt-2"},G={class:"mt-2"},H={class:"flex items-center justify-end mt-4"},ie={__name:"ShiftEdit",props:{shift:Object,name:String},setup(x){const a=x,[S,k,V]=a.shift.start_time.split(":").map(Number),[B,w,E]=a.shift.end_time.split(":").map(Number),t=C({name:a.name,start_time:{hours:S,minutes:k,seconds:V},end_time:{hours:B,minutes:w,seconds:E},shift_payment_multiplier:a.shift.shift_payment_multiplier,description:a.shift.description}),T=()=>{t.put(route("shifts.update",{id:a.shift.id}),{preserveScroll:!0,onError:()=>{g().error(s("Error Editing Shift"))},onSuccess:()=>{g().success(s("Shift Editing Successfully")),t.reset()}})},D=()=>{f.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:s("This shift has :n employee. Are you sure?",{n:a.shift.employees_count}),text:s("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:s("Yes, Delete!"),cancelButtonText:s("No, Cancel!"),reverseButtons:!0}).then(l=>{l.isConfirmed&&t.delete(route("shifts.destroy",{id:a.shift.id}),{preserveScroll:!0,onSuccess:()=>{f.fire(s("Branch Deleted!"),"","success")},onError:()=>{f.fire(s("Error!"),F().props.errors.only_shift,"error")}})})};return(N,l)=>($(),U(q,null,[r(e(j),{title:e(s)("Branch Edit")},null,8,["title"]),r(A,null,{tabs:m(()=>[r(M)]),default:m(()=>[o("div",W,[o("div",Y,[r(P,{class:"!mt-0"},{default:m(()=>[o("h1",z,c(e(s)("Edit A Branch")),1),o("form",{onSubmit:_(T,["prevent"])},[o("div",null,[r(d,{for:"position",value:e(s)("Shift Name")},null,8,["value"]),r(p,{id:"shift_name",type:"text",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.name}]),modelValue:e(t).name,"onUpdate:modelValue":l[0]||(l[0]=i=>e(t).name=i),required:"",autocomplete:"off",placeholder:e(s)("Day Shift")},null,8,["class","modelValue","placeholder"]),r(u,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),o("div",O,[r(d,{for:"start_time",value:e(s)("Shift Start Time")},null,8,["value"]),r(e(y),{modelValue:e(t).start_time,"onUpdate:modelValue":l[1]||(l[1]=i=>e(t).start_time=i),class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.start_time}]),placeholder:e(s)("Select a Time..."),"time-picker":"",dark:h("isDark").value,"is-24":!1,required:""},null,8,["modelValue","class","placeholder","dark"]),r(u,{class:"mt-2",message:e(t).errors.start_time},null,8,["message"])]),o("div",Q,[r(d,{for:"end_time",value:e(s)("Shift End Time")},null,8,["value"]),r(e(y),{modelValue:e(t).end_time,"onUpdate:modelValue":l[2]||(l[2]=i=>e(t).end_time=i),class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.end_time}]),placeholder:e(s)("Select a Time..."),"time-picker":"",dark:h("isDark").value,"is-24":!1,required:""},null,8,["modelValue","class","placeholder","dark"]),r(u,{class:"mt-2",message:e(t).errors.end_time},null,8,["message"])]),o("div",Z,[r(d,{for:"shift_payment_multiplier",value:e(s)("Multiplier")},null,8,["value"]),r(p,{id:"shift_payment_multiplier",type:"number",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.shift_payment_multiplier}]),modelValue:e(t).shift_payment_multiplier,"onUpdate:modelValue":l[3]||(l[3]=i=>e(t).shift_payment_multiplier=i),autocomplete:"off",placeholder:"1 ("+e(s)("default")+")",min:"0",step:"0.0001"},null,8,["class","modelValue","placeholder"]),r(u,{class:"mt-2",message:e(t).errors.shift_payment_multiplier},null,8,["message"])]),o("div",G,[r(d,{for:"description",value:e(s)("Description")},null,8,["value"]),r(p,{id:"description",type:"text",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.description}]),modelValue:e(t).description,"onUpdate:modelValue":l[4]||(l[4]=i=>e(t).description=i),autocomplete:"off",placeholder:e(s)("Normal day shift, small amount of customers expected during this shift.")},null,8,["class","modelValue","placeholder"]),r(u,{class:"mt-2",message:e(t).errors.description},null,8,["message"])]),o("div",H,[o("form",{onSubmit:_(D,["prevent"]),class:"inline"},[r(v,{class:"bg-red-600 hover:bg-red-700 ml-4"},{default:m(()=>[b(c(e(s)("Delete Shift")),1)]),_:1})],32),r(v,{class:n(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:m(()=>[b(c(e(s)("Edit Shift")),1)]),_:1},8,["class","disabled"])])],32)]),_:1})])])]),_:1})],64))}};export{ie as default};