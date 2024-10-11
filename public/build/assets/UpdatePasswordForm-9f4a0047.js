import{r as c,T as y,a as w,b as _,f as o,t as n,d as e,u as r,e as f,h as g,i as V,I as P,j as k}from"./app-2bcc9048.js";import{_ as d}from"./InputError-7685150a.js";import{_ as u}from"./InputLabel-8fa952b5.js";import{P as b}from"./PrimaryButton-f7253fde.js";import{_ as p}from"./TextInput-43ff59ef.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"text-lg font-medium"},I={class:"mt-1 text-sm text-gray-600"},N={class:"flex items-center gap-4"},U={key:0,class:"text-sm text-gray-600"},j={__name:"UpdatePasswordForm",setup(h){const m=c(null),i=c(null),s=y({current_password:"",password:"",password_confirmation:""}),v=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),m.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(a,t)=>(w(),_("section",null,[o("header",null,[o("h2",S,n(a.__("Update Password")),1),o("p",I,n(a.__("Ensure your account is using a long, random password to stay secure"))+". ",1)]),o("form",{onSubmit:k(v,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[e(u,{for:"current_password",value:a.__("Current Password")},null,8,["value"]),e(p,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:r(s).current_password,"onUpdate:modelValue":t[0]||(t[0]=l=>r(s).current_password=l),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(u,{for:"password",value:a.__("New Password")},null,8,["value"]),e(p,{id:"password",ref_key:"passwordInput",ref:m,modelValue:r(s).password,"onUpdate:modelValue":t[1]||(t[1]=l=>r(s).password=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(u,{for:"password_confirmation",value:a.__("Confirm Password")},null,8,["value"]),e(p,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=l=>r(s).password_confirmation=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",N,[e(b,{disabled:r(s).processing},{default:f(()=>[g(n(a.__("Save")),1)]),_:1},8,["disabled"]),e(P,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:f(()=>[r(s).recentlySuccessful?(w(),_("p",U,n(a.__("Saved"))+".",1)):V("",!0)]),_:1})])],32)]))}};export{j as default};
