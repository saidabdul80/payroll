import{c as n,a as t,b as a,f as d,t as l,i as b,n as g}from"./app-2bcc9048.js";const i={class:"my-4"},c={key:0,d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"},u={key:1,d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"},y={class:"font-medium"},k={key:0},x=["innerHTML"],h="currentColor",f={__name:"Notice",props:{type:{type:String,default:"info"},br:{type:Boolean,default:!1},bold:String,text:String},setup(r){const s=n(()=>{let e="flex items-center p-4 mb-4 text-sm rounded-lg";switch(r.type){case"danger":return e+" text-red-800 border border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800";case"success":return e+" text-green-800 border border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800";case"warning":return e+" text-yellow-800 border border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800";case"dark":return e+" text-gray-800 border border-gray-300 bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600";default:return e+" text-blue-800 border border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"}});return(e,o)=>(t(),a("div",i,[d("div",{class:g(s.value),role:"alert"},[(t(),a("svg",{class:"flex-shrink-0 inline w-4 h-4 ltr:mr-3 rtl:ml-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:h,viewBox:"0 0 20 20"},[r.type==="danger"?(t(),a("path",c)):(t(),a("path",u))])),o[0]||(o[0]=d("span",{class:"sr-only"},"Info",-1)),d("div",null,[d("span",y,l(r.bold+" "),1),r.br?(t(),a("br",k)):b("",!0),d("span",{innerHTML:r.text},null,8,x)])],2)]))}};export{f as _};