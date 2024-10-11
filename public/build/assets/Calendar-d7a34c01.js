import{B as ye,C as Ue,c as y,w as Be,a as b,b as P,z as F,u as l,f as m,i as G,F as $,l as H,n as S,t as I,j as _,s as me,h as ee,T as Ee,r as He,o as Ne,d as M,_ as C,Z as je,e as N,g as Ve,k as Re,D as qe,p as ge}from"./app-2bcc9048.js";import{_ as ze}from"./GoBackNavLink-2bbaee9a.js";import{_ as Qe}from"./CalendarTabs-25e16fc8.js";import{_ as fe}from"./InputLabel-8fa952b5.js";import{_ as De}from"./InputError-7685150a.js";import{o as Ge}from"./vue-datepicker-1849adfe.js";/* empty css             */import{_ as Ze}from"./FlexButton-c248a7cd.js";import{_ as Je}from"./Card-02b1dfac.js";import{_ as Ke}from"./TextInput-43ff59ef.js";import{P as ve}from"./PlusIcon-b6c7f9c8.js";import{c as j}from"./useCalendarItemTypes-069dd68b.js";import"./_plugin-vue_export-helper-c27b6911.js";var Xe=Object.defineProperty,et=(e,a,t)=>a in e?Xe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Q=(e,a,t)=>(et(e,typeof a!="symbol"?a+"":a,t),t);const R=()=>Z(new Date),tt=(e,a,t)=>{switch(a){case"year":return new Date(e.getFullYear(),0);case"month":return new Date(e.getFullYear(),e.getMonth());case"week":return te(e,t);default:return e}},at=e=>[...Array(7)].map((a,t)=>A(e,t)),A=(e,a)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+a,e.getHours(),e.getMinutes(),e.getSeconds()),te=(e,a)=>A(e,(a-e.getDay()-7)%-7),rt=(e,a)=>A(te(e,a),7),V=e=>new Date(e.getFullYear(),e.getMonth()),ot=e=>Math.ceil(e.getDate()/7),st=(e,a,t)=>new Date(e.getFullYear()+(a=="year"?t:0),e.getMonth()+(a=="month"?t:0),e.getDate()+(a=="week"?t*7:0)),ae=e=>("0"+String(e.getMonth()+1)).slice(-2),re=e=>("0"+String(e.getDate())).slice(-2),he=e=>e.getFullYear()+"-"+ae(e),nt=e=>he(e)+"-"+re(e),lt=e=>ae(e)+"-"+re(e),it=(e,a,t)=>{if(e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0)return"";if(!J()){var i=new Date().getTimezoneOffset()*6e4;return new Date(e.getTime()-i).toISOString().slice(11,16)}return e.toLocaleTimeString(a,t)},dt=(e,a,t,i)=>{const c=e.getFullYear()===a.getFullYear(),k=Pe(e,a),g=t!=="year"&&t!=="month";let f=[];return f.push(i[e.getMonth()]),g&&(f.push(" "),f.push(e.getDate())),c||(f.push(g?", ":" "),f.push(e.getFullYear())),!k||!c?(f.push(" – "),k||f.push(i[a.getMonth()]),g&&f.push(" ")):g&&f.push(" – "),g?(f.push(a.getDate()),f.push(", ")):f.push(" "),f.push(a.getFullYear()),f.join("")},be=(e,a)=>{const t=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),i=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return(t-i)/864e5},ut=(e,a)=>!!e&&!!a&&be(e,a)===0,ct=(e,a)=>!!e&&!!a&&e.getTime()===a.getTime(),Pe=(e,a)=>!!e&&!!a&&e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth(),pt=e=>V(e)<V(R()),mt=e=>V(e)>V(R()),gt=e=>Z(e)>R(),ft=e=>Z(e)<R(),Dt=e=>e.getMonth()!==A(e,7).getMonth(),vt=e=>e.getMonth()!==A(e,1).getMonth(),ke=e=>{let a=[...Array(7)].map(t=>0);return e.split(/\D/,7).forEach((t,i)=>a[i]=Number(t)),a[1]--,new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])},X=e=>typeof e=="string"?ke(e):new Date(e),Z=e=>{const a=new Date(e);return a.setHours(0,0,0,0),a},yt=e=>e.substring(0,2),J=()=>typeof Intl<"u",ht=(e,a)=>{if(!J())return[...Array(12)].map(i=>"");const t=new Intl.DateTimeFormat(e,{month:a});return[...Array(12)].map((i,c)=>t.format(new Date(2017,c,1)))},bt=(e,a,t)=>{if(!J())return[...Array(7)].map(c=>"");const i=new Intl.DateTimeFormat(e,{weekday:a});return[...Array(7)].map((c,k)=>i.format(new Date(2017,0,(k+1+t)%7)))},Pt=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),kt=(e,a)=>{const t=e.classes?[...e.classes]:[];return a&&t.push("isHovered"),{originalItem:e,startDate:X(e.startDate),endDate:X(e.endDate||e.startDate),classes:t,title:e.title||"Untitled",id:e.id,url:e.url,tooltip:e.tooltip??e.title}},o={addDays:A,beginningOfMonth:V,beginningOfPeriod:tt,beginningOfWeek:te,dateOnly:Z,dayDiff:be,daysOfWeek:at,endOfWeek:rt,formattedPeriod:dt,formattedTime:it,fromIsoStringToLocalDate:ke,getDefaultBrowserLocale:Pt,getFormattedMonthNames:ht,getFormattedWeekdayNames:bt,incrementPeriod:st,instanceOfMonth:ot,isFutureMonth:mt,isInFuture:gt,isInPast:ft,isLastDayOfMonth:vt,isLastInstanceOfMonth:Dt,isoMonthDay:lt,isoYearMonth:he,isoYearMonthDay:nt,isPastMonth:pt,isSameDate:ut,isSameDateTime:ct,isSameMonth:Pe,languageCode:yt,normalizeItem:kt,paddedDay:re,paddedMonth:ae,supportsIntl:J,today:R,toLocalDate:X};class wt{constructor(){Q(this,"currentDragItem"),Q(this,"dateSelectionOrigin"),Q(this,"currentHoveredItemId",""),Q(this,"CalendarMath",o)}}const Mt={class:"cv-header-days"},Ct={key:0,class:"cv-weeknumber"},_t=["aria-multiselectable"],It={key:0,class:"cv-weeknumber"},St={class:"cv-weekdays"},Ot=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],xt={class:"cv-day-number"},Ft=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],Lt=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],$t=ye({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(e,{emit:a}){const t=e,i=Ue(new wt),c=y(()=>t.locale||o.getDefaultBrowserLocale()),k=y(()=>t.showDate?o.dateOnly(t.showDate):o.today()),g=y(()=>o.beginningOfPeriod(k.value,t.displayPeriodUom,t.startingDayOfWeek)),f=y(()=>o.addDays(o.incrementPeriod(g.value,t.displayPeriodUom,t.displayPeriodCount),-1)),p=y(()=>{const r=o.beginningOfWeek(o.beginningOfPeriod(g.value,"year",0),t.startingDayOfWeek),n=o.beginningOfWeek(g.value,t.startingDayOfWeek);return 1+Math.floor(o.dayDiff(r,n)/7)}),D=y(()=>o.beginningOfWeek(g.value,t.startingDayOfWeek)),v=y(()=>o.endOfWeek(f.value,t.startingDayOfWeek)),Y=y(()=>{const r=Math.floor((o.dayDiff(D.value,v.value)+1)/7);return[...Array(r)].map((n,u)=>o.addDays(D.value,u*7))}),O=y(()=>o.getFormattedMonthNames(c.value,t.monthNameFormat)),T=y(()=>o.getFormattedWeekdayNames(c.value,t.weekdayNameFormat,t.startingDayOfWeek)),W=y(()=>t.items?t.items.map(r=>o.normalizeItem(r,r.id===i.currentHoveredItemId)):[]),U=y(()=>o.beginningOfPeriod(o.today(),t.displayPeriodUom,t.startingDayOfWeek)),we=y(()=>o.addDays(o.incrementPeriod(U.value,t.displayPeriodUom,t.displayPeriodCount),-1)),Me=y(()=>o.formattedPeriod(g.value,f.value,t.displayPeriodUom,O.value)),Ce=y(()=>{const r=U.value,n=g.value;return t.currentPeriodLabel?t.currentPeriodLabel==="icons"?t.currentPeriodLabelIcons[Math.sign(r.getTime()-n.getTime())+1]:t.currentPeriodLabel:o.formattedPeriod(r,we.value,t.displayPeriodUom,O.value)}),_e=y(()=>({previousYear:L(-12),previousPeriod:L(-1),nextPeriod:L(1),previousFullPeriod:L(-t.displayPeriodCount),nextFullPeriod:L(t.displayPeriodCount),nextYear:L(12),currentPeriod:U.value,currentPeriodLabel:Ce.value,periodStart:g.value,periodEnd:f.value,displayLocale:c.value,displayFirstDate:D.value,displayLastDate:v.value,monthNames:O.value,fixedItems:W.value,periodLabel:Me.value})),Ie=y(()=>({periodStart:g,periodEnd:f,displayFirstDate:D,displayLastDate:v}));Be(()=>Ie,r=>{t.periodChangedCallback&&(a("period-changed"),t.periodChangedCallback(r,"watch"))},{immediate:!0,deep:!0});const Se=(r,n)=>{t.disablePast&&o.isInPast(r)||t.disableFuture&&o.isInFuture(r)||a("click-date",r,ie(r,r),n)},oe=(r,n)=>a("click-item",r,n),B=r=>"dow"+(r+t.startingDayOfWeek)%7,L=r=>{const n=o.incrementPeriod(g.value,t.displayPeriodUom,r),u=o.incrementPeriod(n,t.displayPeriodUom,t.displayPeriodCount);return t.disablePast&&u<=o.today()||t.disableFuture&&n>o.today()?null:n},se=(r,n)=>{i.currentHoveredItemId=r.id,t.doEmitItemMouseEvents&&a("item-mouseenter",r,n)},ne=(r,n)=>{i.currentHoveredItemId="",t.doEmitItemMouseEvents&&a("item-mouseleave",r,n)},Oe=(r,n)=>{var u,h;if(!t.enableDateSelection)return!1;(u=n.dataTransfer)==null||u.setData("text",r.toString());let s=new Image;return s.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(h=n.dataTransfer)==null||h.setDragImage(s,10,10),i.dateSelectionOrigin=r,a("date-selection-start",K(r),n),!0},le=(r,n)=>{var u;return t.enableDragDrop?((u=n.dataTransfer)==null||u.setData("text",r.id),i.currentDragItem=r,i.dateSelectionOrigin=void 0,a("drag-start",r,n),!0):!1},K=r=>r<=i.dateSelectionOrigin?[r,i.dateSelectionOrigin]:[i.dateSelectionOrigin,r],xe=(r,n)=>{t.enableDragDrop&&a("drag-over-date",i.currentDragItem,r,n)},Fe=(r,n)=>{t.enableDateSelection&&i.dateSelectionOrigin&&a("date-selection",K(r),n),t.enableDragDrop&&(a("drag-enter-date",i.currentDragItem,r,n),n.target.classList.add("draghover"))},Le=(r,n)=>{t.enableDateSelection&&t.selectionStart||!t.enableDragDrop||(a("drag-leave-date",i.currentDragItem,r,n),n.target.classList.remove("draghover"))},$e=(r,n)=>{if(t.enableDateSelection&&i.dateSelectionOrigin){a("date-selection-finish",K(r),n);return}t.enableDragDrop&&(a("drop-on-date",i.currentDragItem,r,n),n.target.classList.remove("draghover"))},Ae=(r,n)=>r.startDate<n.startDate?-1:n.startDate<r.startDate?1:r.endDate>n.endDate?-1:n.endDate>r.endDate?1:r.id<n.id?-1:1,Ye=r=>ie(r,o.addDays(r,6)),ie=(r,n)=>W.value.filter(u=>u.endDate>=r&&o.dateOnly(u.startDate)<=n,this).sort(Ae),Te=r=>!!W.value.find(n=>n.endDate>=r&&o.dateOnly(n.startDate)<=r),de=r=>!(!t.selectionStart||!t.selectionEnd||r<o.dateOnly(t.selectionStart)||r>o.dateOnly(t.selectionEnd)),ue=r=>{const n=Ye(r),u=[],h=[[],[],[],[],[],[],[]];if(!n)return u;for(let s=0;s<n.length;s++){const d=Object.assign({},n[s],{classes:[...n[s].classes],itemRow:0}),w=d.startDate<r,E=w?0:o.dayDiff(r,d.startDate),pe=Math.min(7-E,o.dayDiff(o.addDays(r,E),d.endDate)+1);w&&d.classes.push("continued"),o.dayDiff(r,d.endDate)>6&&d.classes.push("toBeContinued"),o.isInPast(d.endDate)&&d.classes.push("past"),d.originalItem.url&&d.classes.push("hasUrl");for(let x=0;x<7;x++)if(x===E){let z=0;for(;h[x][z];)z++;d.itemRow=z,h[x][z]=!0}else x<E+pe&&(h[x][d.itemRow]=!0);d.classes.push(`offset${E}`),d.classes.push(`span${pe}`),u.push(d)}return u},We=r=>{const n='<span class="startTime">'+o.formattedTime(r.startDate,c.value,t.timeFormatOptions)+"</span>";let u="";return o.isSameDateTime(r.startDate,r.endDate)||(u='<span class="endTime">'+o.formattedTime(r.endDate,c.value,t.timeFormatOptions)+"</span>"),n+u},ce=r=>t.showTimes?We(r)+" "+r.title:r.title,q=r=>{const n=r.itemRow,u=t.itemContentHeight,h=t.itemBorderHeight;return`calc(${t.itemTop} + ${n}*${u} + ${n}*${h})`};return(r,n)=>(b(),P("div",{"aria-label":"Calendar",class:S(["cv-wrapper",`locale-${l(o).languageCode(l(c))}`,`locale-${l(c)}`,`y${l(g).getFullYear()}`,`m${l(o).paddedMonth(l(g))}`,`period-${e.displayPeriodUom}`,`periodCount-${e.displayPeriodCount}`,{past:l(o).isPastMonth(l(g)),future:l(o).isFutureMonth(l(g)),noIntl:!l(o).supportsIntl}])},[F(r.$slots,"header",{headerProps:l(_e)}),m("div",Mt,[e.displayWeekNumbers?(b(),P("div",Ct)):G("",!0),(b(!0),P($,null,H(l(T),(u,h)=>F(r.$slots,"dayHeader",{index:B(h),label:u},()=>[(b(),P("div",{key:B(h),class:S([B(h),"cv-header-day"])},I(u),3))])),256))]),m("div",{"aria-multiselectable":e.enableDateSelection,class:"cv-weeks"},[(b(!0),P($,null,H(l(Y),(u,h)=>(b(),P("div",{key:`${h}-week`,class:S(["cv-week",`week${h+1}`,`ws${l(o).isoYearMonthDay(u)}`])},[e.displayWeekNumbers?(b(),P("div",It,[F(r.$slots,"weekNumber",{date:u,numberInYear:l(p)+h,numberInPeriod:h+1},()=>[m("span",null,I(l(p)+h),1)])])):G("",!0),m("div",St,[(b(!0),P($,null,H(l(o).daysOfWeek(u),(s,d)=>(b(),P("div",{key:B(d),draggable:e.enableDateSelection,class:S(["cv-day",B(d),`d${l(o).isoYearMonthDay(s)}`,`d${l(o).isoMonthDay(s)}`,`d${l(o).paddedDay(s)}`,`instance${l(o).instanceOfMonth(s)}`,{today:l(o).isSameDate(s,l(o).today()),outsideOfMonth:!l(o).isSameMonth(s,l(k)),past:l(o).isInPast(s),future:l(o).isInFuture(s),last:l(o).isLastDayOfMonth(s),lastInstance:l(o).isLastInstanceOfMonth(s),hasItems:Te(s),selectionStart:l(o).isSameDate(s,e.selectionStart),selectionEnd:l(o).isSameDate(s,e.selectionEnd)},...e.dateClasses&&e.dateClasses[l(o).isoYearMonthDay(s)]||[]]),"aria-grabbed":e.enableDateSelection?de(s):void 0,"aria-label":s.getDate().toString(),"aria-selected":de(s),"aria-dropeffect":e.enableDragDrop&&i.currentDragItem?"move":e.enableDateSelection&&i.dateSelectionOrigin?"execute":"none",onClick:w=>Se(s,w),onDragstart:w=>Oe(s,w),onDrop:_(w=>$e(s,w),["prevent"]),onDragover:_(w=>xe(s,w),["prevent"]),onDragenter:_(w=>Fe(s,w),["prevent"]),onDragleave:_(w=>Le(s,w),["prevent"])},[m("div",xt,I(s.getDate()),1),F(r.$slots,"dayContent",{day:s})],42,Ot))),128)),t.enableHtmlTitles?(b(!0),P($,{key:0},H(ue(u),s=>F(r.$slots,"item",{value:s,weekStartDate:u,top:q(s)},()=>[(b(),P("div",{key:s.id,draggable:e.enableDragDrop,"aria-grabbed":e.enableDragDrop?s==i.currentDragItem:void 0,class:S([s.classes,"cv-item"]),title:s.tooltip||s.title,style:me(`top:${q(s)};${s.originalItem.style}`),onDragstart:d=>le(s,d),onMouseenter:d=>se(s,d),onMouseleave:d=>ne(s,d),onClick:_(d=>oe(s,d),["stop"]),innerHTML:ce(s)},null,46,Ft))])),256)):(b(!0),P($,{key:1},H(ue(u),s=>F(r.$slots,"item",{value:s,weekStartDate:u,top:q(s)},()=>[(b(),P("div",{key:s.id,draggable:e.enableDragDrop,"aria-grabbed":e.enableDragDrop?s==i.currentDragItem:void 0,class:S([s.classes,"cv-item"]),title:s.tooltip||s.title,style:me(`top:${q(s)};${s.originalItem.style}`),onDragstart:d=>le(s,d),onMouseenter:d=>se(s,d),onMouseleave:d=>ne(s,d),onClick:_(d=>oe(s,d),["stop"])},I(ce(s)),47,Lt)),ee(" div> ")])),256))])],2))),128))],8,_t)],2))}}),At={class:"cv-header"},Yt={class:"cv-header-nav"},Tt=["disabled"],Wt=["disabled","innerHTML"],Ut=["disabled"],Bt=["disabled"],Et={class:"periodLabel"},Ht=ye({__name:"CalendarViewHeader",props:{headerProps:{type:Object,required:!0},previousYearLabel:{type:String,default:"<<"},previousPeriodLabel:{type:String,default:"<"},nextPeriodLabel:{type:String,default:">"},nextYearLabel:{type:String,default:">>"}},emits:["input"],setup(e,{emit:a}){const t=i=>a("input",i);return(i,c)=>(b(),P("div",At,[m("div",Yt,[m("button",{disabled:!e.headerProps.previousYear,class:"previousYear","aria-label":"Previous Year",onClick:c[0]||(c[0]=_(k=>t(e.headerProps.previousYear),["prevent"]))},I(e.previousYearLabel),9,Tt),m("button",{disabled:!e.headerProps.previousPeriod,class:"previousPeriod","aria-label":"Previous Period",onClick:c[1]||(c[1]=_(k=>t(e.headerProps.previousPeriod),["prevent"])),innerHTML:e.previousPeriodLabel},null,8,Wt),m("button",{class:"currentPeriod","aria-label":"Current Period",onClick:c[2]||(c[2]=_(k=>t(e.headerProps.currentPeriod),["prevent"]))},I(e.headerProps.currentPeriodLabel),1),m("button",{disabled:!e.headerProps.nextPeriod,class:"nextPeriod","aria-label":"Next Period",onClick:c[3]||(c[3]=_(k=>t(e.headerProps.nextPeriod),["prevent"]))},I(e.nextPeriodLabel),9,Ut),m("button",{disabled:!e.headerProps.nextYear,class:"nextYear","aria-label":"Next Year",onClick:c[4]||(c[4]=_(k=>t(e.headerProps.nextYear),["prevent"]))},I(e.nextYearLabel),9,Bt)]),m("div",Et,[F(i.$slots,"label",{},()=>[ee(I(e.headerProps.periodLabel),1)])])]))}});const Nt={class:"py-8"},jt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Vt={class:"flex justify-between px-6 pt-6 pb-2"},Rt={class:"card-header"},qt={key:0},zt={class:"flex justify-start items-center gap-4"},Qt={class:"flex items-center justify-end mt-5"},Gt={class:"text-white bg-purple-600 hover:bg-purple-700 border border-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-500 rounded px-5 p-1.5 text-center inline-flex items-center dark:focus:ring-purple-600 dark:bg-purple-800 dark:border-purple-800 dark:text-white dark:hover:bg-purple-700"},Zt={class:"fancy-p py-0"},ua={__name:"Calendar",props:{calendarItems:Object,leaveRequests:Object},setup(e){const a=Ee({date:"",title:"",type:"meeting"}),t=()=>{Object.keys(a.date).forEach(function(p){a.date[p]&&!/^\d{4}-\d{2}-\d{2}$/.test(a.date[p])&&(a.date[p]=qe(a.date[p]).format("YYYY-MM-DD"))}),a.post(route("calendars.store"),{preserveScroll:!0,onError:()=>{ge().error(C("Error Creating Calendar Item"))},onSuccess:()=>{ge().success(C("Calendar Item Stored Successfully")),a.reset()}})},i=e,c=y(()=>{const p=i.calendarItems.map(v=>{const{start_date:Y,end_date:O,id:T,title:W,type:U}=v;return{id:T,title:"["+j[U].toUpperCase()+"] "+W,startDate:Y,endDate:O}}),D=i.leaveRequests.map(v=>{const{start_date:Y,end_date:O,id:T}=v;return{id:T,title:C("[ :type ] :name",{type:C("Approved Leave"),name:v.employee.name}),startDate:Y,endDate:O}});return p.concat(D)}),k=y(()=>({"theme-default":!0,"holiday-us-traditional":!1,"holiday-us-official":!1})),g=He(new Date);function f(p){g.value=p}return Ne(()=>{f(new Date);const p=document.querySelectorAll(".cv-item");for(let D=0;D<p.length;D++){const v=p[D].textContent;v.includes("[Approved Leave]")?p[D].style.setProperty("background-color","#ffc5c5","important"):v.includes("["+j.holiday.toUpperCase()+"]")?(p[D].style.setProperty("background-color","#c7f6ca","important"),p[D].style.setProperty("font-weight","bold","important")):v.includes("["+j.meeting.toUpperCase()+"]")?p[D].style.setProperty("background-color","#c5d4ff","important"):v.includes("["+j.event.toUpperCase()+"]")?p[D].style.setProperty("background-color","#bce6ef","important"):v.includes("["+j.other.toUpperCase()+"]")&&p[D].style.setProperty("background-color","#ffe1c5","important")}}),(p,D)=>(b(),P($,null,[M(l(je),{title:l(C)("Calendar")},null,8,["title"]),M(ze,null,{tabs:N(()=>[M(Qe)]),default:N(()=>[m("div",Nt,[m("div",jt,[M(Je,{"fancy-p":!1,class:"!mt-0"},{default:N(()=>[m("div",Vt,[m("h1",Rt,I(l(C)("Current Calendar")),1),p.$page.props.auth.user.roles.includes("admin")?(b(),Ve(Ze,{key:0,href:p.route("calendars.create"),text:l(C)("Add Items to Calendar")},{default:N(()=>[M(ve)]),_:1},8,["href","text"])):G("",!0)]),p.$page.props.auth.user.roles.includes("admin")?(b(),P("div",qt,[m("form",{onSubmit:_(t,["prevent"]),class:"px-6 py-0"},[m("div",zt,[m("div",null,[M(fe,{for:"date",value:l(C)("Date (Range selection is available)")},null,8,["value"]),M(l(Ge),{id:"date",modelValue:l(a).date,"onUpdate:modelValue":D[0]||(D[0]=v=>l(a).date=v),class:S(["block w-full",{"border border-red-500":l(a).errors.date}]),placeholder:l(C)("Select Date..."),"enable-time-picker":!1,"min-date":new Date,range:"",dark:Re("isDark").value,required:""},null,8,["modelValue","class","placeholder","min-date","dark"]),M(De,{class:"mt-2",message:l(a).errors.date},null,8,["message"])]),m("div",null,[M(fe,{for:"title",value:l(C)("Title")},null,8,["value"]),M(Ke,{id:"title",type:"text",class:S(["block w-full p-1.5 border-gray-300 rounded focus:border-purple-500 focus:ring-purple-500",{"border border-red-500":l(a).errors.title}]),modelValue:l(a).title,"onUpdate:modelValue":D[1]||(D[1]=v=>l(a).title=v),autocomplete:"off",placeholder:l(C)("Sprint Review"),required:""},null,8,["class","modelValue","placeholder"]),M(De,{class:"mt-2",message:l(a).errors.title},null,8,["message"])]),m("div",Qt,[m("button",Gt,[M(ve,{class:"mx-1"}),ee(" "+I(l(C)("Add a Quick Meeting")),1)])])])],32)])):G("",!0),m("div",Zt,[M(l($t),{dir:"ltr",class:S(["!dark:text-black",k.value]),items:c.value,"show-date":g.value,startingDayOfWeek:6,style:{"min-height":"30em"}},{header:N(({headerProps:v})=>[M(l(Ht),{"header-props":v,onInput:f},null,8,["header-props"])]),_:1},8,["items","show-date","class"])])]),_:1})])])]),_:1})],64))}};export{ua as default};
