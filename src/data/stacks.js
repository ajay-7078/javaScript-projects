export const JS_PROJECTS = [
  { id:"js-1", name:"Number Guessing Game", about:"Interactive number guessing game built with vanilla JavaScript. Features random number generation, user input validation, and score tracking with hints.", link:"https://ajay-7078.github.io/Num_guessing/", tags:["Game","Interactive"], type:"Game", year:"2024", color:"#fb923c" },
  { id:"js-2", name:"Color Switcher", about:"Dynamic color switcher tool that allows users to change background colors with smooth transitions. Features multiple color palettes and instant preview.", link:"https://ajay-7078.github.io/Color_Switcher/", tags:["Utility","UI"], type:"Tool", year:"2024", color:"#3b82f6" },
  { id:"js-3", name:"To-Do List App", about:"Complete task management application with add, edit, delete, and mark complete functionality. Features local storage for data persistence.", link:"https://ajay-7078.github.io/To_do_list/", tags:["Productivity","Utility"], type:"Tool", year:"2024", color:"#10b981" },
  { id:"js-4", name:"Currency Converter", about:"Real-time currency conversion tool with live exchange rates. Features multiple currency pairs, historical data, and responsive design.", link:"https://ajay-7078.github.io/currency_converter/", tags:["Finance","API"], type:"Tool", year:"2024", color:"#f59e0b" },
  { id:"js-5", name:"BMI Calculator", about:"Health calculator that computes Body Mass Index with weight and height inputs. Features BMI categories, health recommendations, and clean interface.", link:"https://ajay-7078.github.io/BMI_Calculator/", tags:["Health","Calculator"], type:"Tool", year:"2024", color:"#8b5cf6" },
];

export const REACT_PROJECTS = [
  { id:"r-8", name:"themechanger", about:"React theme switcher app with custom color modes, smooth transitions, and persistent user preferences.", link:"https://themechanger-nu.vercel.app", tags:["React","UI"], type:"Web App", year:"2025", color:"#60a5fa", repo:"React-repo" },
  { id:"r-10", name:"cur-convertor", about:"Currency converter built in React with instant exchange rate lookup and a clean responsive interface.", link:"https://cur-convertor.vercel.app", tags:["React","Utility"], type:"Tool", year:"2025", color:"#34d399", repo:"React-repo" },
  { id:"r-11", name:"pass-genrater", about:"Password generator tool with strength feedback, clipboard copy, and customizable character sets.", link:"https://pass-genrater.vercel.app", tags:["React","Security"], type:"Tool", year:"2025", color:"#f472b6", repo:"React-repo" },
  { id:"r-12", name:"counter", about:"Minimal counter app built with React, featuring increment, decrement, and reset controls.", link:"https://counter-weld-one.vercel.app", tags:["React","Utility"], type:"Web App", year:"2025", color:"#fbbf24", repo:"React-repo" },
  { id:"r-13", name:"counterreact", about:"A responsive React counter app with sleek UI and fast interactions.", link:"https://counterreact-nine.vercel.app", tags:["React","Utility"], type:"Web App", year:"2025", color:"#38bdf8", repo:"React-repo" },
  { id:"r-14", name:"bg-changer", about:"Background changer app with instant style swaps and visual customization built in React.", link:"https://my-bg-changer-omega.vercel.app", tags:["React","UI"], type:"Web App", year:"2025", color:"#f9a8d4", repo:"React-repo" },
  { id:"r-15", name:"todo-list", about:"Task manager app with add/remove workflows, clean styling, and responsive list handling.", link:"https://todo-list-red-tau.vercel.app", tags:["React","Productivity"], type:"Web App", year:"2025", color:"#a78bfa", repo:"React-repo" },
  { id:"r-16", name:"arttechpr0", about:"Creative art portfolio site built with React, showcasing interactive visuals and gallery features.", link:"https://arttechpr0.vercel.app", tags:["React","Art"], type:"Web App", year:"2025", color:"#10b981", repo:"arttech" },
  { id:"r-17", name:"next-js-proj", about:"Next.js-style project demo deployed on Vercel with modern routing and responsive layout.", link:"https://next-js-proj-amber.vercel.app", tags:["React","Next.js"], type:"Web App", year:"2025", color:"#a78bfa", repo:"next.js-proj" },
  { id:"r-18", name:"amazon-clone", about:"E-commerce clone built with React showcasing product browsing, cart interactions, and polished UI.", link:"https://amazon-clone-az.vercel.app", tags:["React","E-Commerce"], type:"Web App", year:"2025", color:"#f97316", repo:"amazon-clone" },
];

export const NEXT_PROJECTS = [
  { id:"n-1", name:"Weather Dashboard", about:"SSR 7-day forecast with hourly charts, wind/humidity panels, and a dynamic background adapting to live conditions.", link:"#weather", tags:["API","Dashboard"], type:"Dashboard", year:"2025", color:"#38bdf8" },
  { id:"n-2", name:"Dev Portfolio", about:"SEO-optimised portfolio with MDX blog, dark/light mode, animated project grid, and Vercel OG image generation.", link:"#portfolio", tags:["Portfolio","MDX"], type:"Website", year:"2025", color:"#a78bfa" },
];

export const STACKS = {
  js:   { label:"JavaScript", badge:"JS",     accent:"#facc15", dim:"rgba(250,204,21,0.1)",  border:"rgba(250,204,21,0.22)",  desc:"Vanilla JS — no frameworks, just the platform.", projects: JS_PROJECTS },
  react:{ label:"React",      badge:"React",  accent:"#38bdf8", dim:"rgba(56,189,248,0.1)",  border:"rgba(56,189,248,0.22)",  desc:"Component-driven UIs built with React and hooks.", projects: REACT_PROJECTS },
  next: { label:"Next.js",    badge:"Next.js",accent:"#a78bfa", dim:"rgba(167,139,250,0.1)", border:"rgba(167,139,250,0.22)", desc:"Full-stack apps powered by the Next.js App Router.", projects: NEXT_PROJECTS },
};