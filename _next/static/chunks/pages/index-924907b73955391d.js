(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4669)}])},4669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var s=n(5893),a=n(645),i=n.n(a),r=n(9008),o=n.n(r),l=n(1664),c=n.n(l),d=n(3495),m=n(1526),u=n(512),x=n(8388);function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,x.m6)((0,u.W)(t))}function f(e){e&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}var p=n(7294),g=n(1465);let j=(0,n(5139).j)("clash-grotesk inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"px-6 py-3",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=p.forwardRef((e,t)=>{let{className:n,variant:a,size:i,asChild:r=!1,...o}=e,l=r?g.g7:"button";return(0,s.jsx)(l,{className:h(j({variant:a,size:i,className:n})),ref:t,...o})});v.displayName="Button";var b=n(6691);function w(){let[e,t]=(0,p.useState)("");return(0,p.useEffect)(()=>{let e=setInterval(()=>{let e=new Date;e.setHours(e.getHours()),t(e.toLocaleTimeString("en-US",{hour12:!0,hour:"numeric",minute:"numeric"}))},1e3);return()=>clearInterval(e)},[]),(0,s.jsxs)("footer",{className:"w-full bg-gradient-to-t from-primary/[1%] to-transparent",children:[(0,s.jsxs)("div",{className:"container mx-auto flex flex-row items-center justify-between py-6",children:[(0,s.jsxs)("span",{className:"flex flex-row items-center space-x-4",children:[(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Made with ❤️ by"," ",(0,s.jsx)(c(),{href:"https://github.com/Zavalaesteban1",target:"_blank",passHref:!0,className:"text-foreground transition hover:text-primary",children:"Zavala"})]}),(0,s.jsx)("hr",{className:"hidden h-6 border-l border-muted md:flex"}),(0,s.jsxs)("span",{className:"flex hidden flex-row items-center space-x-2 md:flex",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Local time:"}),(0,s.jsxs)("p",{className:"text-sm font-semibold",children:[e," UTC+1"]})]})]}),(0,s.jsxs)(c(),{href:"mailto:zavala.esteban105690@gmail.com",passHref:!0,className:"text-xs text-muted-foreground hover:text-foreground",children:[(0,s.jsxs)(v,{variant:"outline",children:[(0,s.jsx)(b.Z,{className:"h-4 w-4 md:mr-2"}),(0,s.jsx)("span",{className:"hidden md:flex",children:"zavala.esteban105690@gmail.com"})]})," Esteban"]})]}),(0,s.jsx)("div",{className:"h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50"})]})}var y=n(1163),N=n(2238),k=n.n(N);let _={initial:{opacity:0},enter:{opacity:.75,transition:{duration:1,delay:.2}}},C={initial:{top:0},exit:{top:"-100vh",transition:{duration:.8,ease:[.76,0,.24,1],delay:.2}}},E=["Hola","Hello","Bonjour","Ciao","Ol\xe0","やあ","Hall\xe5","Guten tag","Hallo"];function L(){let[e,t]=(0,p.useState)(0),[n,a]=(0,p.useState)({width:0,height:0});(0,p.useEffect)(()=>{a({width:window.innerWidth,height:window.innerHeight})},[]),(0,p.useEffect)(()=>{e!=E.length-1&&setTimeout(()=>{t(e+1)},0==e?1e3:150)},[e]);let i="M0 0 L".concat(n.width," 0 L").concat(n.width," ").concat(n.height," Q").concat(n.width/2," ").concat(n.height+300," 0 ").concat(n.height,"  L0 0"),r="M0 0 L".concat(n.width," 0 L").concat(n.width," ").concat(n.height," Q").concat(n.width/2," ").concat(n.height," 0 ").concat(n.height,"  L0 0");return(0,s.jsx)(d.E.div,{variants:C,initial:"initial",exit:"exit",className:k().introduction,children:n.width>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.E.p,{variants:_,initial:"initial",animate:"enter",children:[(0,s.jsx)("span",{}),E[e]]}),(0,s.jsx)("svg",{children:(0,s.jsx)(d.E.path,{variants:{initial:{d:i,transition:{duration:.7,ease:[.76,0,.24,1]}},exit:{d:r,transition:{duration:.7,ease:[.76,0,.24,1],delay:.3}}},initial:"initial",exit:"exit"})})]})})}let z={visible:e=>({opacity:1,transition:{delay:.12*e}}),hidden:{opacity:0}},S=[{href:"#home",text:"Home"},{href:"#about",text:"About"},{href:"#projects",text:"Projects"},{href:"#info",text:"Info"}];function F(e){let t=e.currentTarget.getAttribute("href");t&&t.startsWith("#")&&(e.preventDefault(),f(document.querySelector(t)))}function H(e){return(0,s.jsx)(d.E.li,{className:e.className,variants:z,custom:e.i,initial:"hidden",animate:"visible",exit:"hidden",children:(0,s.jsx)("a",{href:e.href,onClick:F,className:h(0===e.i&&"nav-active","nav-link"),children:e.text})})}function M(e){let[t,n]=(0,p.useState)(!1),[a,r]=(0,p.useState)(!1),[l,u]=(0,p.useState)(!0),{children:x,...f}=e,g=(0,y.useRouter)(),j={title:"Zavala",description:"Front-end lover and C++ is my go to langauge",image:"/assets/z.webp",type:"website",...f};return(0,p.useEffect)(()=>{let e=()=>{r(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,p.useEffect)(()=>{setTimeout(()=>{u(!1),document.body.style.cursor="default",window.scrollTo(0,0)},2e3)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:j.title}),(0,s.jsx)("meta",{name:"robots",content:"follow, index"}),(0,s.jsx)("meta",{name:"theme-color",content:"#7B82FE"}),(0,s.jsx)("meta",{content:j.description,name:"description"}),(0,s.jsx)("meta",{property:"og:url",content:"https://zavalaesteban1.github.io/zWebsite/".concat(g.asPath)}),(0,s.jsx)("link",{rel:"canonical",href:"https://zavalaesteban1.github.io/zWebsite/".concat(g.asPath)}),(0,s.jsx)("meta",{property:"og:type",content:j.type}),(0,s.jsx)("meta",{property:"og:site_name",content:"Zavala"}),(0,s.jsx)("meta",{property:"og:description",content:j.description}),(0,s.jsx)("meta",{property:"og:title",content:j.title}),(0,s.jsx)("meta",{property:"og:image",content:j.image}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:site",content:"WendoJ"}),(0,s.jsx)("meta",{name:"twitter:title",content:j.title}),(0,s.jsx)("meta",{name:"twitter:description",content:j.description}),(0,s.jsx)("meta",{name:"twitter:image",content:j.image}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"/icon-192x192.png"})]}),(0,s.jsxs)("nav",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" "+(h(k().nav,a?"bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition":"bg-transparent")||""),children:[(0,s.jsx)("div",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" absolute inset-y-0 right-0 flex items-center sm:hidden",children:(0,s.jsxs)("button",{onClick:()=>n(!t),"aria-controls":"mobile-menu","aria-expanded":"false",className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" "+(h(k().burger,"inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none")||""),children:[(0,s.jsx)("span",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" sr-only",children:"Open main menu"}),(0,s.jsx)(T,{"data-hide":t}),(0,s.jsx)(A,{"data-hide":!t})]})}),(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)("span",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" text-lg font-semibold",children:"Esteban"})}),(0,s.jsx)("ul",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" "+(k()["desktop-nav"]||""),children:S.map((e,t)=>(0,s.jsx)(H,{href:e.href,text:e.text,i:t,className:"text-base"},e.href))}),(0,s.jsx)(m.M,{children:t&&(0,s.jsxs)(d.E.div,{className:"fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:1,type:"spring",bounce:.25},children:[(0,s.jsxs)("div",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1",children:[(0,s.jsx)("span",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" text-base font-medium lowercase",children:"Menu"}),(0,s.jsxs)("button",{onClick:()=>n(!t),"aria-controls":"mobile-menu","aria-expanded":"false",className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" "+(k().burger||""),children:[(0,s.jsx)("span",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" sr-only",children:"Open main menu"}),(0,s.jsx)(A,{"data-hide":!t})]})]}),(0,s.jsxs)("div",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" flex h-full flex-col items-start justify-between overflow-y-auto",children:[(0,s.jsx)("ul",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]",children:S.map((e,a)=>(0,s.jsx)("button",{onClick:()=>n(!1),className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]]),children:(0,s.jsx)(H,{href:e.href,text:e.text,i:a,className:"text-xl"})},e.href))}),(0,s.jsx)("div",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10",children:(0,s.jsxs)("span",{className:i().dynamic([["812d1c19df4918e",[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"]]])+" text-sm text-muted-foreground",children:["\xa9 ",new Date().getFullYear()]})})]})]})},"menu"),(0,s.jsx)(i(),{id:"812d1c19df4918e",dynamic:[t?"hidden":"initial",t?"none":"unset",t?"none":"unset",t?"none":"unset",t?"none":"unset"],children:"html,body{overflow-y:".concat(t?"hidden":"initial",";scrollbar-width:").concat(t?"none":"unset",";-ms-overflow-style:").concat(t?"none":"unset",";touch-action:").concat(t?"none":"unset",";-ms-touch-action:").concat(t?"none":"unset","}")})]}),(0,s.jsx)(m.M,{mode:"wait",children:l&&(0,s.jsx)(L,{})}),(0,s.jsx)("main",{className:h("container",e.className),children:x}),(0,s.jsx)(w,{})]})}function T(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute h-5 w-5 text-neutral-100",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e,children:[(0,s.jsx)("path",{d:"M2.5 2.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M2.5 7.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M2.5 12.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function A(e){return(0,s.jsxs)("svg",{className:"absolute h-5 w-5 text-neutral-100",viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",...e,children:[(0,s.jsx)("path",{d:"M18 6L6 18"}),(0,s.jsx)("path",{d:"M6 6l12 12"})]})}var I=n(5202),Z=n.n(I),D=n(4203),W=n(8955),P=n(1209),B=n(840),G=n(6454),O=n(4307),R=n(1258),U=n(2469),V=n(5675),Y=n.n(V),q=n(5581),X=n(2662),Q=n.n(X);let J=[{label:"Years of experience",value:"1+"},{label:"Technologies mastered",value:"5+"},{label:"Companies worked with",value:"3"}],K=[{title:"Robot Vision System",description:"Developing computer vision algorithms",image:"/zWebsite/assets/robot-vision.jpg",url:"https://www.youtube.com/watch?v=CneUl_0Av68"},{title:"Liberty Mutual Project",description:"Build an internal Application for tech support",image:"/zWebsite/assets/liberty-mutual.jpg",url:"https://www.libertymutual.com"},{title:"Software Development",description:"Creating Software for a Software Engineering 1 course",image:"/zWebsite/assets/PythonWeb.jpg",url:"https://github.com/Zavalaesteban1/se1Test"},{title:"C++ Development",description:"Building robot vision with c++",image:"/zWebsite/assets/cpp-dev2.jpg",url:"https://github.com/Zavalaesteban1/robotVision"}],$=[{service:"Frontend Development",description:"Creating stellar user interfaces and web experiences using the latest technologies.",icon:D.Z},{service:"C++",description:"Building intuitive programs with Data Structures and Algorithms with C++",icon:W.Z},{service:"Contact Info",description:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(c(),{href:"https://www.linkedin.com/in/zavala0101",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#770F0F] transition-colors duration-200",children:"View LinkedIn Profile"}),(0,s.jsxs)(c(),{href:"/EzResume.pdf",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#770F0F] transition-colors duration-200",children:[(0,s.jsx)(q.ih9,{className:"text-xl"}),"View Resume"]})]}),icon:P.Z},{service:"Full-Stack Development",description:"Building complete, dynamic web applications from frontend to backend, ensuring seamless performance and user experience.",icon:B.Z},{service:"Product",description:"Creating products on the go ",icon:G.Z}];function ee(){let e=(0,p.useRef)(null),[t,a]=(0,p.useState)(!1),[i,r]=(0,p.useState)(0);return(0,p.useEffect)(()=>{let t=document.querySelectorAll("section"),s=document.querySelectorAll(".nav-link");function i(){let e="";a(window.scrollY>0),t.forEach(t=>{let n=t.offsetTop;if(window.scrollY>=n-250){var s;e=null!==(s=t.getAttribute("id"))&&void 0!==s?s:""}}),s.forEach(t=>{t.classList.remove("nav-active"),t.getAttribute("href")==="#".concat(e)&&(t.classList.add("nav-active"),console.log(t.getAttribute("href")))})}return async function(){var t;new(await n.e(732).then(n.bind(n,4774))).default({el:null!==(t=e.current)&&void 0!==t?t:new HTMLElement,smooth:!0})}(),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),(0,p.useEffect)(()=>{console.log("Current Slide:",i)},[i]),(0,p.useEffect)(()=>{let e=Array.from(document.querySelectorAll("#tilt"));Q().init(e,{speed:300,glare:!0,"max-glare":.1,gyroscope:!0,perspective:900,scale:.9})},[]),(0,s.jsx)(M,{children:(0,s.jsxs)("div",{ref:e,children:[(0,s.jsx)(et,{})," ",(0,s.jsxs)("section",{id:"home","data-scroll-section":!0,className:"mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between",children:[(0,s.jsxs)("div",{className:Z().intro,children:[(0,s.jsxs)("div",{"data-scroll":!0,"data-scroll-direction":"horizontal","data-scroll-speed":".09",className:"flex flex-row items-center space-x-1.5",children:[(0,s.jsx)("span",{className:Z().pill,children:"next.js"}),(0,s.jsx)("span",{className:Z().pill,children:"tailwindcss"}),(0,s.jsx)("span",{className:Z().pill,children:"typescript"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{"data-scroll":!0,"data-scroll-enable-touch-speed":!0,"data-scroll-speed":".06","data-scroll-direction":"horizontal",children:[(0,s.jsxs)("span",{className:"text-6xl tracking-tighter text-foreground 2xl:text-8xl",children:["Hello, I'm",(0,s.jsx)("br",{})]}),(0,s.jsx)("span",{className:"clash-grotesk text-gradient text-6xl 2xl:text-8xl",children:"Esteban Zavala."})]}),(0,s.jsxs)("p",{"data-scroll":!0,"data-scroll-enable-touch-speed":!0,"data-scroll-speed":".06",className:"mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl",children:["Software Engineer/Developer",(0,s.jsx)("br",{}),(0,s.jsxs)(c(),{href:"https://www.utrgv.edu",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#770F0F] transition-colors duration-200 hover:underline",children:["The University of Texas Rio Grande Valley",(0,s.jsx)("br",{})]}),(0,s.jsx)(c(),{href:"https://visitbtx.com/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#770F0F] transition-colors duration-200 hover:underline",children:"Brownsville, Texas"})]})]}),(0,s.jsxs)("span",{"data-scroll":!0,"data-scroll-enable-touch-speed":!0,"data-scroll-speed":".06",className:"flex flex-row items-center space-x-1.5 pt-6",children:[(0,s.jsx)(c(),{href:"mailto:zavala.esteban105690@gmail.com",passHref:!0,children:(0,s.jsxs)(v,{children:["Get in touch ",(0,s.jsx)(O.Z,{className:"ml-1 h-4 w-4"})]})}),(0,s.jsx)(v,{variant:"outline",onClick:()=>f(document.querySelector("#about")),children:"Learn more"})]}),(0,s.jsxs)("div",{className:h(Z().scroll,t&&Z()["scroll--hidden"]),children:["Scroll to discover"," ",(0,s.jsx)(U.AS7,{className:"mt-1 animate-bounce"})]})]}),(0,s.jsx)("div",{"data-scroll":!0,"data-scroll-speed":"-.01",id:Z()["canvas-container"],className:"mt-14 h-full w-full xl:mt-0",children:(0,s.jsx)(p.Suspense,{fallback:(0,s.jsx)("span",{children:"Loading..."}),children:(0,s.jsx)(Y(),{src:"/zWebsite/assets/pumpinggas.jpg",alt:"Description",fill:!0,priority:!0,className:"rounded-lg bg-black object-cover object-center"})})})]}),(0,s.jsx)("section",{id:"about","data-scroll-section":!0,children:(0,s.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":".4","data-scroll-position":"top",className:"my-14 flex max-w-6xl flex-col justify-start space-y-10",children:[(0,s.jsxs)("h2",{className:"py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]",children:["I'm an Programmer expirenced in"," ",(0,s.jsx)(c(),{href:"https://create.t3.gg/",target:"_blank",className:"underline",children:"Software Development utilizing C++, React, Javascript, Next.js."})," ","Since 2023, I started coding, changing the game for me. It allowed to dive into a new adventure. Mastered C++. Talked and travelled to other companies my first year of college. Created software for a robot and developed a software product for a company my 2nd year. Now in my 3rd year I'm a Teaching Assistant and the future has no limits."]}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-8 xl:grid-cols-3",children:J.map(e=>(0,s.jsxs)("div",{className:"flex flex-col items-center text-center xl:items-start xl:text-start",children:[(0,s.jsx)("span",{className:"clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl",children:e.value}),(0,s.jsx)("span",{className:"tracking-tight text-muted-foreground xl:text-lg",children:e.label})]},e.label))})]})}),(0,s.jsxs)("section",{id:"projects","data-scroll-section":!0,children:[(0,s.jsx)("div",{className:"relative isolate -z-10",children:(0,s.jsx)("div",{className:"absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60","aria-hidden":"true",children:(0,s.jsx)("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})})}),(0,s.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":".4",className:"my-64",children:[(0,s.jsx)("span",{className:"text-gradient clash-grotesk text-sm font-semibold tracking-tighter",children:"\uD83D\uDC8E Projects"}),(0,s.jsx)("h2",{className:"mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl",children:"Projects from the past year."}),(0,s.jsx)("p",{className:"mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg",children:"I've worked on a variety of projects, from creating the vision of a robot, to developing for Liberty Mutual."}),(0,s.jsxs)("div",{className:"relative mx-auto mt-14 max-w-4xl",children:[(0,s.jsxs)("div",{className:"relative bg-gray-800 rounded-lg",children:[(0,s.jsx)("div",{className:"relative aspect-[16/9] w-full overflow-hidden rounded-lg",children:(0,s.jsxs)(c(),{href:K[i].url||"#",target:"_blank",rel:"noopener noreferrer",className:"cursor-pointer",children:[(0,s.jsx)(Y(),{src:K[i].image,alt:K[i].title,fill:!0,className:"object-cover transition-transform duration-300 hover:scale-105",priority:!0}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-black/50",children:[(0,s.jsx)("h3",{className:"text-white text-xl font-bold",children:K[i].title}),(0,s.jsx)("p",{className:"text-white/80",children:K[i].description})]})]})}),(0,s.jsx)("button",{onClick:()=>r(e=>0===e?K.length-1:e-1),className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-200 backdrop-blur-sm",children:(0,s.jsx)(R.Z,{className:"h-8 w-8 text-white"})}),(0,s.jsx)("button",{onClick:()=>r(e=>e===K.length-1?0:e+1),className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-200 backdrop-blur-sm",children:(0,s.jsx)(O.Z,{className:"h-8 w-8 text-white"})})]}),(0,s.jsx)("div",{className:"mt-4 text-center",children:(0,s.jsxs)("span",{className:"bg-[#770F0F] px-4 py-2 rounded-full text-white font-medium transition-all duration-200 hover:bg-[#8B1212]",children:[i+1," / ",K.length]})})]})]})]}),(0,s.jsx)("section",{id:"info","data-scroll-section":!0,children:(0,s.jsx)("div",{"data-scroll":!0,"data-scroll-speed":".4","data-scroll-position":"top",className:"my-24 flex flex-col justify-start space-y-10",children:(0,s.jsxs)(d.E.div,{initial:{opacity:0,y:-10},whileInView:{opacity:1,x:0},transition:{duration:1,staggerChildren:.5},viewport:{once:!0},className:"grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3",children:[(0,s.jsxs)("div",{className:"flex flex-col py-6 xl:p-6",children:[(0,s.jsxs)("h2",{className:"text-4xl font-medium tracking-tight",children:["Need more info?",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-gradient clash-grotesk tracking-normal",children:"I got you."})]}),(0,s.jsx)("p",{className:"mt-2 tracking-tighter text-black",children:"Here are some of my skills and my contact info."})]}),$.map(e=>(0,s.jsxs)("div",{className:"flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md",children:[(0,s.jsx)(e.icon,{className:"my-6 text-primary",size:20}),(0,s.jsx)("span",{className:"text-lg tracking-tight text-foreground",children:e.service}),(0,s.jsx)("span",{className:"mt-2 tracking-tighter text-muted-foreground",children:e.description})]},e.service))]})})}),(0,s.jsx)("section",{id:"contact","data-scroll-section":!0,className:"my-64",children:(0,s.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":".4","data-scroll-position":"top",className:"flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24",children:[(0,s.jsxs)("h2",{className:"text-4xl font-medium tracking-tighter xl:text-6xl",children:["Let's work"," ",(0,s.jsx)("span",{className:"text-gradient clash-grotesk",children:"."})]}),(0,s.jsx)("p",{className:"mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg",children:"Interested in Internships for C++, Software Development, and Software Eningeering(Front-end)"}),(0,s.jsx)(c(),{href:"mailto:zavala.esteban105690@gmail.com",passHref:!0,children:(0,s.jsx)(v,{className:"mt-6",children:"Get in touch"})})]})})]})})}function et(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:(0,s.jsxs)("svg",{className:"relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",viewBox:"0 0 1155 678",children:[(0,s.jsx)("path",{fill:"url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)",fillOpacity:".1",d:"M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"}),(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"45de2b6b-92d5-4d68-a6a0-9b9b2abad533",x1:"1155.49",x2:"-78.208",y1:".177",y2:"474.645",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{stopColor:"#770F0F"}),(0,s.jsx)("stop",{offset:1,stopColor:"#770F0F"})]})})]})}),(0,s.jsx)("div",{className:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",children:(0,s.jsxs)("svg",{className:"relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]",viewBox:"0 0 1155 678",children:[(0,s.jsx)("path",{fill:"url(#770F0F",fillOpacity:".1",d:"M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"}),(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"ecb5b0c9-546c-4772-8c71-4d3f06d544bc",x1:"1155.49",x2:"-78.208",y1:".177",y2:"474.645",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{stopColor:"#770F0F"}),(0,s.jsx)("stop",{offset:1,stopColor:"#770F0F"})]})})]})})]})}},2238:function(e){e.exports={nav:"Container_nav__YF_KX","desktop-nav":"Container_desktop-nav__zmBLV","burger-button":"Container_burger-button___G6lT",burger:"Container_burger__djA3A",introduction:"Container_introduction__ucPw0"}},5202:function(e){e.exports={intro:"Home_intro__YsXuU",pill:"Home_pill__EMh1L",scroll:"Home_scroll__QIZoY","scroll--hidden":"Home_scroll--hidden__Et206","project-card":"Home_project-card__fhGaM","canvas-container":"Home_canvas-container__gHnzG"}}},function(e){e.O(0,[594,409,187,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);