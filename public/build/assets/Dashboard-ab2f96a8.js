import{a as c,b as y,f as t,t as o,i as $,z as L,d as l,e as r,h,g as k,u as a,x as P,n as z,s as I,r as N,c as C,Q as p,T as E,w as H,o as O,_ as e,Z as Y,j as R,F as W}from"./app-2bcc9048.js";import{a as Q,b as G,M as U,T as V,C as Z,c as J,_ as K}from"./GoBackNavLink-2bbaee9a.js";import{_ as g}from"./Card-02b1dfac.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./ToolTip-507831a1.js";import{P as F}from"./PrimaryButton-f7253fde.js";import{S as v}from"./sweetalert2-50e64164.js";import{H as ee}from"./HorizontalRule-2d9dec5f.js";import"./index-7c2e6872.js";function te(s){const n=new Date,i=n.getDate(),d=n.getFullYear(),u=n.getMonth();let f=u,m=d;s>i?f=u:(f=(u+1)%12,m=u===11?d+1:d);const _=new Date(m,f,s),b=24*60*60*1e3;return Math.ceil((_-n)/b)}function B(s){const n=new Date,i=n.getMonth(),d=n.getFullYear(),u=new Date(d,i,s),f=(i+1)%12,m=i===11?d+1:d;return(new Date(m,f,s).getTime()-u.getTime())/(1e3*3600*24)}const se={key:0,class:"p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"},ae={class:"text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"},oe={class:"flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700"},ne={class:"pt-1 text-sm text-gray-500 dark:text-gray-400"},le={key:1,class:"relative mt-4"},re={class:"relative z-10 mt-2"},ie={class:"text-gray-800 sm:text-xl dark:text-white"},de={class:"pt-1 text-sm text-gray-500 dark:text-gray-400"},j={__name:"BlockQuote",props:{quote:{type:String,default:"We cannot solve problems with the kind of thinking we employed when we came up with them."},author:{type:String,default:"Albert Einstein"},style:{type:Number,default:1}},setup(s){return(n,i)=>s.style===1?(c(),y("blockquote",se,[t("p",ae,'"'+o(s.quote)+'"',1),t("div",oe,[t("cite",ne,"- "+o(s.author),1)])])):s.style===2?(c(),y("blockquote",le,[i[0]||(i[0]=t("svg",{class:"absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{d:"M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z",fill:"currentColor"})],-1)),t("div",re,[t("p",ie,[t("em",null,' "'+o(s.quote)+'" ',1)]),t("cite",de,"- "+o(s.author),1)])])):$("",!0)}},ce={name:"RightArrowIcon"},ue={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"};function fe(s,n,i,d,u,f){return c(),y("svg",ue,n[0]||(n[0]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"},null,-1)]))}const me=A(ce,[["render",fe]]),he={name:"LeftArrowIcon"},ge={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"};function ye(s,n,i,d,u,f){return c(),y("svg",ge,n[0]||(n[0]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"},null,-1)]))}const xe=A(he,[["render",ye]]),pe={class:"relative flex px-6 flex-col rounded-xl bg-gradient-to-r from-gray-50 to-purple-50 bg-clip-border text-gray-700 shadow-md dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-900 dark:text-gray-300 dark:shadow-lg"},_e={class:"pt-6 pb-2 flex flex-col items-center"},we={class:"block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"},be={key:0,class:"text-center block font-sans text-base font-light leading-relaxed text-inherit antialiased"},ve={class:"pb-6 pt-0 flex justify-center"},ke={class:"flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-purple-500 transition-all hover:bg-purple-500/10 active:bg-purple-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button","data-ripple-dark":"true"},D={__name:"IconCard",props:{ctaText:{type:String,default:"Learn More"},heading:String,text:String,href:String},setup(s){const n=document.dir==="ltr";return(i,d)=>(c(),y("div",pe,[t("div",_e,[L(i.$slots,"default"),t("h5",we,o(s.heading??"Heading"),1),s.text?(c(),y("p",be,o(s.text),1)):$("",!0)]),t("div",ve,[l(a(P),{class:"!font-medium !text-blue-gray-900 !transition-colors hover:!text-purple-500",href:s.href??"#"},{default:r(()=>[t("button",ke,[h(o(s.ctaText)+" ",1),n?(c(),k(me,{key:0})):$("",!0),n?$("",!0):(c(),k(xe,{key:1}))])]),_:1},8,["href"])])]))}},Se={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden"},T={__name:"ProgressBar",props:{percentage:Number,text:String,noText:{type:Boolean,default:!1},color:{type:String,default:"bg-purple-500"},textColor:{type:String,default:"text-purple-100"}},setup(s){const n=s,i=n.color+" "+n.textColor+(n.percentage===0?" !p-0 !text-black":"");return(d,u)=>(c(),y("div",Se,[t("div",{class:z([i,"flex items-center justify-center h-full text-xs font-medium text-center p-0.5 leading-none rounded-full"]),style:I("width:"+(s.percentage>100?100:s.percentage)+"%")},o(s.noText?"​":s.text??(s.percentage===0?"":s.percentage.toFixed(0)+"%")),7)]))}};function Ce(s){var f;const n=N(localStorage.getItem("lastApiCallTimestamp")||null),i="https://api.quotable.io/quotes/random?tags=Work|Motivational|Inspirational|Creativity";async function d(){try{const m=await fetch(i);if(!m.ok)throw new Error("API call error.");const _=await m.json();s.value=_[0],n.value=Date.now(),localStorage.setItem("lastApiCallTimestamp",n.value),localStorage.setItem("quote",JSON.stringify(_))}catch(m){throw new Error("Network response was NOT ok:",m)}}function u(){if(!n.value)return!0;const m=Date.now(),_=936e5;return m-n.value>=_}u()?d():s.value=(f=JSON.parse(localStorage.getItem("quote")))==null?void 0:f[0]}const De={class:"py-8"},$e={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Te={class:"flex justify-between gap-4"},Ae={class:"!card-header !mb-0"},Me={class:"text-xl"},Fe={class:"text-xs text-gray-200"},Be={key:0,class:"text-sm"},je={key:1,class:"text-sm"},Ie={class:"flex flex-col md:flex-row justify-between md:gap-4"},Ne={class:"text-2xl"},qe={class:"flex justify items-center"},Le={class:"text-2xl text-center font-semibold mb-4"},Pe={class:"space-y-4"},ze={class:"text-xl text-center"},Ee={class:"text-center text-gray-700 text-sm"},He={class:"flex flex-col md:flex-row justify-between md:gap-4"},Oe={class:"text-2xl text-white"},Ye={class:"mt-4 text-white"},Re={class:"text-white"},We={class:"font-medium"},Qe={class:"mt-1 text-white"},Ge={class:"font-medium"},Ue={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2"},Ve={class:"text-2xl"},Ze={class:"mt-4 w-full flex flex-col"},Je={class:"flex justify-between align-middle mb-6 sm:mb-2"},Ke={class:"font-medium"},Xe={class:"flex justify-between align-middle mb-6 sm:mb-2"},et={class:"font-medium"},tt={class:"flex justify-between align-middle mb-6 sm:mb-2"},st={class:"font-medium"},at={class:"text-2xl"},ot={class:"mt-4 grid grid-rows-3"},nt={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},lt={class:"w-full sm:w-1/3"},rt={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},it={class:"w-full sm:w-1/3"},dt={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},ct={class:"w-full sm:w-1/3"},ut={class:"flex flex-col md:flex-row justify-between md:gap-4"},ft={class:"text-2xl"},mt={class:"flex flex-wrap justify-center gap-4"},ht={__name:"Dashboard",props:{salary:Object,payroll_day:Number,employee_stats:Object,attendance_status:Number,is_today_off:Boolean},setup(s){const n=s,i=C(()=>te(n.payroll_day)),d=C(()=>Math.floor((B(n.payroll_day)-i.value)/B(n.payroll_day)*100)),u=C(()=>n.payroll_day===1?e("st"):n.payroll_day===2?e("nd"):n.payroll_day===3?e("rd"):e("th")),f=new Date().toLocaleDateString(p().props.locale,{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),m=E({}),_=C(()=>n.attendance_status===0?e("Sign in"):e("Sign off"));let b=n.attendance_status===0;H(()=>n.attendance_status,()=>{b=n.attendance_status===0});const M=()=>{const x=b?"attendance.dashboardSignIn":"attendance.dashboardSignOff";v.mixin({customClass:{cancelButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",confirmButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:e("Confirm :signType for attendance for :today?",{signType:b?e("Sign in"):e("Sign off"),today:f}),html:b.value?"<b>"+e("Notes")+"</b><br>"+e("1. Attendance for non-remote employees can only be taken from inside the organization.")+"<br>"+e("2. You need to register sign-off here again before leaving, otherwise, your attendance will not be accounted."):"",icon:"info",showCancelButton:!0,confirmButtonText:e("Confirm"),cancelButtonText:e("Cancel"),reverseButtons:!0}).then(q=>{q.isConfirmed&&m.post(route(x,{id:p().props.auth.user.id}),{preserveScroll:!0,onError:()=>{p().props.errors.ip_error?v.fire(e("Attendance Error"),p().props.errors.ip_error,"error"):p().props.errors.no_ip?v.fire(e("IP Error"),p().props.errors.no_ip,"error"):p().props.errors.authorization_error?v.fire(e("Authorization Error"),p().props.errors.authorization_error,"error"):p().props.errors.day_off?v.fire(e("Today is OFF!"),p().props.errors.day_off,"error"):v.fire(e("Error"),e("Something went wrong.")+"</br>"+e("Please contact your administrator of this error"),"error")},onSuccess:()=>{v.fire(e("Action Registerd"),b?e("Don't forget to come here and sign-off before you leave so that the attendance gets registered!"):"","success")}})})},S=N(null);return O(()=>{Ce(S)}),(x,w)=>(c(),y(W,null,[l(a(Y),{title:a(e)("Dashboard")},null,8,["title"]),l(K,null,{tabs:r(()=>[l(Q),l(G,{href:x.route("dashboard.index"),active:x.route().current("dashboard.index")},{default:r(()=>[h(o(a(e)("Dashboard")),1)]),_:1},8,["href","active"])]),default:r(()=>[t("div",De,[t("div",$e,[t("div",Te,[l(g,{class:"w-full md:w-3/4 !mt-0"},{default:r(()=>[t("h1",Ae,o(a(e)("Welcome, :name",{name:x.$page.props.auth.user.name}))+"!",1)]),_:1}),l(g,{class:"w-full md:w-1/4 !mt-0",vl:"","fancy-p":!1},{default:r(()=>[s.attendance_status!==2&&!s.is_today_off?(c(),y("form",{key:0,onSubmit:R(M,["prevent"]),class:"w-full h-full"},[l(F,{class:"w-full h-full flex justify-center"},{default:r(()=>[t("span",Me,[h(o(a(e)("Attendance :msg",{msg:_.value}))+" ",1),w[0]||(w[0]=t("br",null,null,-1)),t("span",Fe,o(a(e)("For"))+" "+o(a(f)),1)])]),_:1})],32)):(c(),k(F,{key:1,class:"w-full h-full flex justify-center !border-0 bg-gradient-to-r from-green-500 to-green-400 cursor-not-allowed",disabled:""},{default:r(()=>[s.is_today_off?(c(),y("span",Be,[h(o(a(e)("Today is off! 🕺🕺")),1),w[1]||(w[1]=t("br",null,null,-1))])):(c(),y("span",je,[h(o(a(e)("Attendance Taken Today! 🎉")),1),w[2]||(w[2]=t("br",null,null,-1))]))]),_:1}))]),_:1})]),t("div",Ie,[l(g,{class:"w-full md:w-3/4"},{default:r(()=>[t("h1",Ne,o(a(e)("Quote of the day")),1),t("div",qe,[S.value?(c(),k(j,{key:0,class:"mb-0",style:2,quote:S.value.content,author:S.value.author},null,8,["quote","author"])):(c(),k(j,{key:1,class:"mb-0",style:2,quote:a(e)("Loading Quote..."),author:a(e)("Loading Author...")},null,8,["quote","author"]))])]),_:1}),l(g,{class:"w-full md:w-1/4",vl:""},{default:r(()=>[t("h1",Le,o(a(e)("Your Salary")),1),t("div",Pe,[t("p",ze,[h(o(s.salary[0])+" ",1),t("span",null,o(new Intl.NumberFormat().format(s.salary[1])),1)]),l(ee,{class:"!bg-neutral-300"}),t("p",Ee,o(a(e)("Last Updated: :salary",{salary:s.salary[2]})),1)])]),_:1})]),t("div",He,[l(g,{class:"w-full md:w-1/4 bg-gradient-to-r from-indigo-700 to-purple-800 glow-element"},{default:r(()=>[t("h1",Oe,o(a(e)("Pay Day")),1),t("div",Ye,[t("p",Re,[t("span",We,o(a(e)("Pay Day"))+": ",1),h(o(n.payroll_day),1),t("sup",null,o(u.value),1),h(" "+o(a(e)("of every month"))+". ",1)]),t("p",Qe,[t("span",Ge,o(a(e)("Days Remaining"))+": ",1),h(o(i.value)+" "+o(a(e)("Days"))+". ",1)]),t("div",Ue,[t("div",{class:"bg-amber-400 text-xs font-medium text-indigo-700 text-center p-0.5 leading-none rounded-full",style:I("width:"+(d.value>100?100:d.value)+"%")},o(d.value.toFixed(0)+"%"),5)])])]),_:1}),l(g,{class:"w-full md:w-1/4"},{default:r(()=>[t("h1",Ve,o(a(e)("Data of :month",{month:new Date().toLocaleString(x.$page.props.locale,{month:"long"})})),1),t("div",Ze,[t("div",Je,[t("p",Ke,o(a(e)("Work Days"))+": ",1),t("p",null,o(s.employee_stats.attendableThisMonth)+" "+o(a(e)("Days")),1)]),t("div",Xe,[t("p",et,o(a(e)("Weekends"))+": ",1),t("p",null,o(s.employee_stats.weekendsThisMonth)+" "+o(a(e)("Days")),1)]),t("div",tt,[t("p",st,o(a(e)("Holidays"))+": ",1),t("p",null,o(s.employee_stats.holidaysThisMonth)+" "+o(a(e)("Days")),1)])])]),_:1}),l(g,{class:"w-full md:w-2/4"},{default:r(()=>[t("h1",at,o(a(e)("Your Attendance This Month")),1),t("div",ot,[t("div",nt,[t("p",lt,o(a(e)("Attended")+" "+s.employee_stats.totalAttendanceSoFar),1),l(T,{class:"col-span-3",color:"bg-green-500","no-text":"",percentage:s.employee_stats.totalAttendanceSoFar/s.employee_stats.attendableThisMonth*100,text:s.employee_stats.totalAbsenceSoFar+(s.employee_stats.totalAbsenceSoFar>0?a(e)("Day(s)"):"")},null,8,["percentage","text"])]),t("div",rt,[t("p",it,o(a(e)("Absented:"))+" "+o(s.employee_stats.absentedThisMonth),1),l(T,{"no-text":"",color:"bg-red-500",percentage:s.employee_stats.totalAbsenceSoFar/s.employee_stats.YearStats.absence_limit*100,text:s.employee_stats.totalAbsenceSoFar+(s.employee_stats.totalAbsenceSoFar>0?a(e)("Day(s)"):"")},null,8,["percentage","text"])]),t("div",dt,[t("p",ct,[h(o(a(e)("Hours:"))+" ",1),l(X,{direction:"bottom"},{default:r(()=>[h(o(a(e)("Number of Overtime/Undertime Hours (so far).")),1),w[3]||(w[3]=t("br",null,null,-1)),h(" "+o(a(e)("This value will be accounted for in the payroll, resulting in a reward or a penalty.")),1)]),_:1}),h(" "+o(s.employee_stats.hoursDifferenceSoFar.toFixed(0)+a(e)("h")),1)]),l(T,{class:"col-span-3",percentage:s.employee_stats.hoursDifferenceSoFar,text:s.employee_stats.hoursDifferenceSoFar===0?"":Math.abs(s.employee_stats.hoursDifferenceSoFar).toFixed(2)+" "+a(e)("Hours")+" "+(s.employee_stats.hoursDifferenceSoFar>0?a(e)("extra"):a(e)("late")),color:s.employee_stats.hoursDifferenceSoFar>0?"bg-green-500":"bg-red-500"},null,8,["percentage","text","color"])])])]),_:1})]),t("div",ut,[l(g,{class:"!p-2 w-full"},{default:r(()=>[t("h1",ft,o(a(e)("Quick Actions")),1),t("div",mt,[l(g,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:r(()=>[l(D,{heading:a(e)("Payrolls"),"cta-text":a(e)("Go To Payments"),href:x.route("payrolls.index")},{default:r(()=>[l(U,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),l(g,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:r(()=>[l(D,{heading:a(e)("Attendance"),"cta-text":a(e)("Go to Attendance"),href:x.route("attendance.dashboard")},{default:r(()=>[l(V,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),l(g,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:r(()=>[l(D,{heading:a(e)("Calendar"),"cta-text":a(e)("Go to Calendar"),href:x.route("calendar.index")},{default:r(()=>[l(Z,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),l(g,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:r(()=>[l(D,{heading:a(e)("Support"),"cta-text":a(e)("Go To Requests"),href:x.route("requests.index")},{default:r(()=>[l(J,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1})])]),_:1})])])])]),_:1})],64))}},St=A(ht,[["__scopeId","data-v-9f80f9ec"]]);export{St as default};
