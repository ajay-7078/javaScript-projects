export const JS_PROJECTS = [
  { id:"js-1", name:"Snake Game", about:"Classic Snake built in vanilla JS with progressive difficulty, high-score persistence, and smooth 60 fps canvas rendering.", link:"#snake-game", tags:["Game","Canvas"], type:"Game", year:"2025", color:"#fb923c" },
  { id:"js-2", name:"Typing Speed Test", about:"WPM & accuracy tracker with curated passages, real-time error highlighting, and a personal-bests leaderboard in localStorage.", link:"#typing-test", tags:["Interactive","Utility"], type:"Game", year:"2025", color:"#facc15" },
  { id:"js-3", name:"Password Generator", about:"Secure password generator with strength meter, custom length/char rules, batch generation, and a clipboard manager for recent passwords.", link:"#password-gen", tags:["Security","Utility"], type:"Tool", year:"2024", color:"#a78bfa" },
  { id:"js-4", name:"Text Diff Viewer", about:"Side-by-side & inline diff viewer for two text blocks. Highlights additions, deletions, and unchanged lines with word-level precision.", link:"#diff-viewer", tags:["Developer","Utility"], type:"Tool", year:"2024", color:"#facc15" },
  { id:"js-5", name:"Pixel Art Editor", about:"Grid-based pixel art tool with palette, fill bucket, undo/redo, onion skinning for sprite animation, and PNG export.", link:"#pixel-art", tags:["Design","Canvas"], type:"Tool", year:"2024", color:"#f472b6" },
  { id:"js-6", name:"Countdown Clock", about:"Minimal event countdown with custom date/time, timezone support, share-link generation, and confetti on zero.", link:"#countdown", tags:["Utility","Interactive"], type:"Tool", year:"2024", color:"#38bdf8" },
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
  { id:"n-3", name:"E-Commerce Storefront", about:"Full-stack shop with ISR product pages, Stripe checkout, cart context, and admin dashboard for inventory management.", link:"#storefront", tags:["E-Commerce","Stripe"], type:"Full-Stack", year:"2025", color:"#4ade80" },
  { id:"n-4", name:"Link-in-Bio Tool", about:"Dynamic link-page builder with live preview, custom themes, click analytics, and sub-second loads via edge runtime.", link:"#link-in-bio", tags:["SaaS","Analytics"], type:"SaaS", year:"2025", color:"#fb923c" },
  { id:"n-5", name:"Job Board", about:"Full-stack job board with Postgres, server actions for posting/filtering, RSS feed, and email alerts via Resend.", link:"#job-board", tags:["Full-Stack","Database"], type:"Full-Stack", year:"2024", color:"#facc15" },
  { id:"n-6", name:"AI Chat Interface", about:"Streaming chat UI using the AI SDK, multi-turn history, model switcher, and conversation export to Markdown.", link:"#ai-chat", tags:["AI","Streaming"], type:"Web App", year:"2024", color:"#f9a8d4" },
];

export const STACKS = {
  js:   { label:"JavaScript", badge:"JS",     accent:"#facc15", dim:"rgba(250,204,21,0.1)",  border:"rgba(250,204,21,0.22)",  desc:"Vanilla JS — no frameworks, just the platform.", projects: JS_PROJECTS },
  react:{ label:"React",      badge:"React",  accent:"#38bdf8", dim:"rgba(56,189,248,0.1)",  border:"rgba(56,189,248,0.22)",  desc:"Component-driven UIs built with React and hooks.", projects: REACT_PROJECTS },
  next: { label:"Next.js",    badge:"Next.js",accent:"#a78bfa", dim:"rgba(167,139,250,0.1)", border:"rgba(167,139,250,0.22)", desc:"Full-stack apps powered by the Next.js App Router.", projects: NEXT_PROJECTS },
};