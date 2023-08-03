import{c as w,m as x,x as v,a as d,b as h,o as k,T as V,r as u,g as c,e as p,d as r,u as t,Z as B,t as C,i as f,f as e,s as $,h as l,n as P,j}from"./app-f8f018c0.js";import{_ as q}from"./GuestLayout-17195d43.js";import{_ as g}from"./InputError-06e3d699.js";import{_ as b}from"./InputLabel-3db03ad5.js";import{_}from"./TextInput-57a390c2.js";import"./_plugin-vue_export-helper-c27b6911.js";const E=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(n,{emit:s}){const m=n,i=w({get(){return m.checked},set(o){s("update:checked",o)}});return(o,a)=>x((d(),h("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":a[0]||(a[0]=y=>i.value=y),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,E)),[[v,i.value]])}},N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],U=e("div",{class:"flex justify-center font-bold py-4"}," This is a test app. Data is reset every 24 hours. ",-1),D=e("div",{class:"flex flex-col justify-center mb-4 text-sm"},[e("p",{class:"mb-2"},[l("Admin -> email: '"),e("b",null,"super@root.com"),l("' Password: '"),e("b",null,"password"),l("' ")]),e("p",{class:"mb-2"},[l("Employee -> email: '"),e("b",null,"spicy@pillow.com"),l("' Password: '"),e("b",null,"password"),l("' ")])],-1),M={class:"mt-4"},R={class:"block mt-4"},T={class:"flex items-center"},A=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},z=["disabled"],O={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(n){k(()=>{document.documentElement.classList.remove("dark")});const s=V({email:u("super@root.com"),password:u("password"),remember:!1}),m=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(i,o)=>(d(),c(q,null,{default:p(()=>[r(t(B),{title:"Log in"}),n.status?(d(),h("div",N,C(n.status),1)):f("",!0),e("form",{onSubmit:j(m,["prevent"])},[U,D,e("div",null,[r(b,{for:"email",value:"Email"}),r(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),r(g,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),e("div",M,[r(b,{for:"password",value:"Password"}),r(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":o[1]||(o[1]=a=>t(s).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),r(g,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("div",R,[e("label",T,[r(L,{name:"remember",checked:t(s).remember,"onUpdate:checked":o[2]||(o[2]=a=>t(s).remember=a)},null,8,["checked"]),A])]),e("div",F,[n.canResetPassword?(d(),c(t($),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:p(()=>[l(" Forgot your password? ")]),_:1},8,["href"])):f("",!0),e("button",{class:P(["ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",{"opacity-25":t(s).processing}]),disabled:t(s).processing}," Log in ",10,z)])],40,S)]),_:1}))}};export{O as default};