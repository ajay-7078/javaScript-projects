import { useState, useEffect, useRef } from "react";
import { STACKS, JS_PROJECTS, REACT_PROJECTS, NEXT_PROJECTS } from './data/stacks';
import useInView from './hooks/useInView';
import StackSection from './components/StackSection';

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const total = JS_PROJECTS.length + REACT_PROJECTS.length + NEXT_PROJECTS.length;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (id) => {
    setPage(id);
    ({ home: homeRef, about: aboutRef, projects: projectsRef })[id]?.current?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const aboutV = useInView(aboutRef);
  const projectsV = useInView(projectsRef);

  const NAV = [{ id:"home",label:"Home" }, { id:"about",label:"About" }, { id:"projects",label:"Projects" }];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#ffffff;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.12);border-radius:2px;}
        ::selection{background:rgba(0,0,0,0.18);}
      `}</style>

      <div style={{ minHeight:"100vh", background:"#ffffff", color:"#333333" }}>

        {/* NAV */}
        <nav style={{
          position:"fixed", top:0, left:0, right:0, zIndex:200,
          height:"60px", padding:"0 48px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.5)",
          backdropFilter:"blur(18px)",
          borderBottom:`1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "transparent"}`,
          transition:"background 0.3s, border-color 0.3s",
        }}>
          <span style={{
            fontFamily:"'Space Grotesk',sans-serif", fontSize:"17px",
            fontWeight:700, color:"#333333",
            letterSpacing:"-0.02em",
          }}>
            Project
          </span>
          <div style={{ display:"flex", gap:"2px" }}>
            {NAV.map(n => (
              <button key={n.id} onClick={() => nav(n.id)} style={{
                padding:"6px 16px", background:"none", border:"none", cursor:"pointer",
                color: page===n.id ? "#333333" : "rgba(0,0,0,0.38)",
                fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", letterSpacing:"0.06em",
                transition:"color 0.2s",
                borderBottom: page===n.id ? "1px solid rgba(0,0,0,0.45)" : "1px solid transparent",
              }}>{n.label}</button>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section ref={homeRef} style={{
          minHeight:"100vh", display:"flex", flexDirection:"column",
          justifyContent:"center", padding:"100px 48px 80px",
          position:"relative", overflow:"hidden",
        }}>
          {/* grid bg */}
          <div style={{
            position:"absolute",inset:0,pointerEvents:"none",
            backgroundImage:`linear-gradient(rgba(0,0,0,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.022) 1px,transparent 1px)`,
            backgroundSize:"60px 60px",
          }}/>

          <div style={{ position:"relative", maxWidth:"820px" }}>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.05s forwards" }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(0,0,0,0.3)", letterSpacing:"0.14em", display:"block", marginBottom:"26px" }}>
                ✦ &nbsp; BUILT BY CLAUDE · AI ASSISTANT
              </span>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.15s forwards" }}>
              <h1 style={{
                fontFamily:"'Space Grotesk',sans-serif",
                fontSize:"clamp(50px,7vw,86px)",
                fontWeight:700, lineHeight:1.04,
                color:"#333333", marginBottom:"26px", letterSpacing:"-0.03em",
              }}>
                Projects &amp;<br/>
                <span style={{ fontStyle:"italic", color:"rgba(0,0,0,0.5)" }}>Experiments</span>
              </h1>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.25s forwards" }}>
              <p style={{
                fontFamily:"'Inter',sans-serif", fontSize:"19px",
                color:"rgba(0,0,0,0.5)", lineHeight:1.7,
                maxWidth:"520px", marginBottom:"40px",
              }}>
                A curated collection of tools, games, dashboards, and full-stack apps —
                organised by the technology stack they were built with.
              </p>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.35s forwards", display:"flex", gap:"16px", flexWrap:"wrap" }}>
              <button onClick={() => nav("projects")} style={{
                padding:"11px 26px", background:"#333333", color:"#ffffff",
                border:"none", borderRadius:"8px", cursor:"pointer",
                fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", letterSpacing:"0.06em", fontWeight:500,
              }}>Browse projects ↓</button>
              <button onClick={() => nav("about")} style={{
                padding:"11px 26px", background:"transparent", color:"rgba(0,0,0,0.55)",
                border:"1px solid rgba(0,0,0,0.16)", borderRadius:"8px", cursor:"pointer",
                fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", letterSpacing:"0.06em",
              }}>About</button>
            </div>
          </div>

          {/* stat pills */}
          <div style={{
            position:"absolute", bottom:"48px", right:"48px",
            display:"flex", gap:"10px", flexWrap:"wrap",
            opacity:0, animation:"fadeUp 0.6s ease 0.45s forwards",
          }}>
            {[
              { n: JS_PROJECTS.length,   l:"JavaScript", c:"#facc15" },
              { n: REACT_PROJECTS.length, l:"React",      c:"#38bdf8" },
              { n: NEXT_PROJECTS.length,  l:"Next.js",    c:"#a78bfa" },
            ].map(s => (
              <div key={s.l} style={{
                padding:"10px 18px", borderRadius:"10px",
                background:"rgba(0,0,0,0.035)", border:"1px solid rgba(0,0,0,0.08)",
                display:"flex", flexDirection:"column", alignItems:"center", gap:"3px",
              }}>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"24px", fontWeight:700, color:s.c }}>{s.n}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", color:"rgba(0,0,0,0.3)", letterSpacing:"0.1em" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section ref={aboutRef} style={{ padding:"96px 48px", borderTop:"1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth:"820px", margin:"0 auto" }}>
            <div>
              <span style={{ opacity: aboutV?1:0, transition:"opacity 0.5s", fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(0,0,0,0.28)", letterSpacing:"0.14em", display:"block", marginBottom:"18px" }}>
                01 / ABOUT
              </span>
              <h2 style={{ opacity: aboutV?1:0, transform: aboutV?"translateY(0)":"translateY(18px)", transition:"opacity 0.5s 0.05s, transform 0.5s 0.05s", fontFamily:"'Space Grotesk',sans-serif", fontSize:"42px", fontWeight:700, color:"#333333", marginBottom:"40px", letterSpacing:"-0.025em", lineHeight:1.12 }}>
                What you'll<br/><span style={{ fontStyle:"italic", color:"rgba(0,0,0,0.45)" }}>find here</span>
              </h2>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"36px" }}>
              {[
                { icon:"▲", color:"#facc15", title:"JavaScript", body:"Vanilla JS projects that run in the browser — games, editors, and utilities built without any framework overhead." },
                { icon:"◆", color:"#38bdf8", title:"React",      body:"Component-driven SPAs using React hooks, context, and composable UI patterns for richer interactivity." },
                { icon:"●", color:"#a78bfa", title:"Next.js",    body:"Full-stack projects with the App Router, server components, server actions, and edge functions." },
                { icon:"✦", color:"#4ade80", title:"Open Source",body:"Every project is free to explore. Tap ↗ on any card to open the source or live demo." },
              ].map((item, i) => (
                <div key={item.title} style={{ opacity: 1, transform: "translateY(0)", transition:`opacity 0.5s ease ${i*60}ms, transform 0.5s ease ${i*60}ms` }}>
                  <span style={{ fontSize:"12px", color:item.color, display:"block", marginBottom:"10px" }}>{item.icon}</span>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"19px", fontWeight:600, color:"#333333", marginBottom:"8px" }}>{item.title}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", color:"rgba(0,0,0,0.48)", lineHeight:1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef} style={{ padding:"96px 48px 120px", borderTop:"1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
            <div style={{ marginBottom:"68px" }}>
              <span style={{ opacity: projectsV?1:0, transition:"opacity 0.5s", fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(0,0,0,0.28)", letterSpacing:"0.14em", display:"block", marginBottom:"16px" }}>
                02 / PROJECTS
              </span>
              <h2 style={{ opacity: projectsV?1:0, transform: projectsV?"translateY(0)":"translateY(18px)", transition:"opacity 0.5s 0.06s, transform 0.5s 0.06s", fontFamily:"'Space Grotesk',sans-serif", fontSize:"42px", fontWeight:700, color:"#333333", letterSpacing:"-0.025em", lineHeight:1.12 }}>
                {total} projects,<br/><span style={{ fontStyle:"italic", color:"rgba(0,0,0,0.42)" }}>3 stacks</span>
              </h2>
            </div>

            <StackSection sk="js" STACKS={STACKS} />
            <StackSection sk="react" STACKS={STACKS} />
            <StackSection sk="next" STACKS={STACKS} />
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop:"1px solid rgba(0,0,0,0.06)",
          padding:"28px 48px",
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"10px",
        }}>
          <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"15px", fontWeight:600, color:"rgba(0,0,0,0.3)" }}>
            Project
          </span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(0,0,0,0.18)", letterSpacing:"0.1em" }}>
            {total} PROJECTS · JS · REACT · NEXT.JS
          </span>
        </footer>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </>
  );
}
