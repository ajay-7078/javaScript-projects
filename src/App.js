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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Poppins:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#fafbfc;}
        ::-webkit-scrollbar{width:8px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:4px;}
        ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0.25);}
        ::selection{background:#3b82f6;color:#ffffff;}
      `}</style>

      <div style={{ minHeight:"100vh", background:"linear-gradient(135deg, #fafbfc 0%, #f0f4f8 100%)", color:"#1a202c" }}>

        {/* NAV */}
        <nav style={{
          position:"fixed", top:0, left:0, right:0, zIndex:200,
          height:"64px", padding:"0 48px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
          backdropFilter:"blur(20px)",
          borderBottom:`1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)"}`,
          transition:"all 0.3s ease",
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
        }}>
          <span style={{
            fontFamily:"'Poppins',sans-serif", fontSize:"18px",
            fontWeight:700, color:"#1a202c",
            letterSpacing:"-0.02em",
          }}>
            Portfolio
          </span>
          <div style={{ display:"flex", gap:"8px" }}>
            {NAV.map(n => (
              <button key={n.id} onClick={() => nav(n.id)} style={{
                padding:"8px 18px", background:"none", border:"none", cursor:"pointer",
                color: page===n.id ? "#3b82f6" : "rgba(26,32,44,0.6)",
                fontFamily:"'Poppins',sans-serif", fontSize:"13px", fontWeight:500, letterSpacing:"0.02em",
                transition:"all 0.3s ease",
                borderBottom: page===n.id ? "2px solid #3b82f6" : "2px solid transparent",
                borderRadius:"4px",
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
          {/* animated bg */}
          <div style={{
            position:"absolute",inset:0,pointerEvents:"none",
            backgroundImage:`linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)`,
            backgroundSize:"60px 60px",
          }}/>
          
          {/* gradient orbs */}
          <div style={{
            position:"absolute", top:"-10%", right:"-5%", width:"400px", height:"400px",
            background:"radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            borderRadius:"50%", pointerEvents:"none", animation:"float 6s ease-in-out infinite",
          }}/>
          <div style={{
            position:"absolute", bottom:"10%", left:"-10%", width:"300px", height:"300px",
            background:"radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            borderRadius:"50%", pointerEvents:"none", animation:"float 8s ease-in-out infinite 1s",
          }}/>

          <div style={{ position:"relative", maxWidth:"900px" }}>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.05s forwards" }}>
              <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"12px", color:"#3b82f6", letterSpacing:"0.1em", display:"block", marginBottom:"20px", fontWeight:600 }}>
                ✦ &nbsp; WELCOME TO MY PORTFOLIO
              </span>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.15s forwards" }}>
              <h1 style={{
                fontFamily:"'Poppins',sans-serif",
                fontSize:"clamp(48px,8vw,88px)",
                fontWeight:800, lineHeight:1.08,
                color:"#1a202c", marginBottom:"24px", letterSpacing:"-0.02em",
                background:"linear-gradient(135deg, #1a202c 0%, #3b82f6 100%)",
                backgroundClip:"text",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}>
                Projects &<br/>
                Experiments
              </h1>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.25s forwards" }}>
              <p style={{
                fontFamily:"'Poppins',sans-serif", fontSize:"18px", fontWeight:400,
                color:"#4a5568", lineHeight:1.8,
                maxWidth:"560px", marginBottom:"48px",
              }}>
                A curated collection of tools, games, dashboards, and full-stack applications organized by technology stack. Explore modern web development in action.
              </p>
            </div>
            <div style={{ opacity:0, animation:"fadeUp 0.6s ease 0.35s forwards", display:"flex", gap:"16px", flexWrap:"wrap" }}>
              <button onClick={() => nav("projects")} style={{
                padding:"14px 32px", background:"linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", 
                color:"#ffffff", border:"none", borderRadius:"10px", cursor:"pointer",
                fontFamily:"'Poppins',sans-serif", fontSize:"14px", fontWeight:600, letterSpacing:"0.02em",
                transition:"all 0.3s ease", boxShadow:"0 4px 15px rgba(59,130,246,0.3)",
                position:"relative", overflow:"hidden",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(59,130,246,0.3)";
              }}>Browse projects ↓</button>
              <button onClick={() => nav("about")} style={{
                padding:"14px 32px", background:"rgba(255,255,255,0.9)", color:"#3b82f6",
                border:"2px solid #3b82f6", borderRadius:"10px", cursor:"pointer",
                fontFamily:"'Poppins',sans-serif", fontSize:"14px", fontWeight:600, letterSpacing:"0.02em",
                transition:"all 0.3s ease", boxShadow:"0 2px 8px rgba(0,0,0,0.04)",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.color = "#ffffff";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "rgba(255,255,255,0.9)";
                e.target.style.color = "#3b82f6";
                e.target.style.transform = "translateY(0)";
              }}>Learn more</button>
            </div>
          </div>

          {/* stat pills */}
          <div style={{
            position:"absolute", bottom:"48px", right:"48px",
            display:"flex", gap:"12px", flexWrap:"wrap",
            opacity:0, animation:"fadeUp 0.6s ease 0.45s forwards",
          }}>
            {[
              { n: JS_PROJECTS.length,   l:"JavaScript", c:"#f59e0b" },
              { n: REACT_PROJECTS.length, l:"React",      c:"#3b82f6" },
              { n: NEXT_PROJECTS.length,  l:"Next.js",    c:"#8b5cf6" },
            ].map(s => (
              <div key={s.l} style={{
                padding:"14px 22px", borderRadius:"12px",
                background:"rgba(255,255,255,0.8)", border:"1.5px solid rgba(0,0,0,0.08)",
                display:"flex", flexDirection:"column", alignItems:"center", gap:"4px",
                backdropFilter:"blur(10px)", cursor:"pointer",
                transition:"all 0.3s ease", boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.8)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              }}>
                <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"26px", fontWeight:700, color:s.c }}>{s.n}</span>
                <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"11px", color:"#6b7280", fontWeight:500 }}>{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section ref={aboutRef} style={{ padding:"120px 48px", borderTop:"1px solid rgba(0,0,0,0.06)", background:"#ffffff" }}>
          <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
            <div style={{ marginBottom:"68px" }}>
              <span style={{ opacity: aboutV?1:0, transition:"opacity 0.5s", fontFamily:"'Poppins',sans-serif", fontSize:"11px", color:"#3b82f6", letterSpacing:"0.12em", display:"block", marginBottom:"18px", fontWeight:600 }}>
                01 · ABOUT THIS PORTFOLIO
              </span>
              <h2 style={{ opacity: aboutV?1:0, transform: aboutV?"translateY(0)":"translateY(20px)", transition:"opacity 0.5s 0.1s, transform 0.5s 0.1s", fontFamily:"'Poppins',sans-serif", fontSize:"44px", fontWeight:800, color:"#1a202c", marginBottom:"16px", letterSpacing:"-0.02em", lineHeight:1.12 }}>
                What you'll find here
              </h2>
              <div style={{ height:"4px", width:"60px", background:"linear-gradient(90deg, #3b82f6, #8b5cf6)", borderRadius:"2px" }}/>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"32px" }}>
              {[
                { icon:"▲", color:"#f59e0b", title:"JavaScript", body:"Vanilla JS projects that run in the browser — games, editors, and utilities built without any framework overhead." },
                { icon:"◆", color:"#3b82f6", title:"React",      body:"Component-driven SPAs using React hooks, context, and composable UI patterns for richer interactivity." },
                { icon:"●", color:"#8b5cf6", title:"Next.js",    body:"Full-stack projects with the App Router, server components, server actions, and edge functions." },
                { icon:"✦", color:"#10b981", title:"Open Source",body:"Every project is free to explore. Tap ↗ on any card to open the source or live demo." },
              ].map((item, i) => (
                <div key={item.title} style={{ 
                  opacity: 1, 
                  transform: "translateY(0)", 
                  transition:`opacity 0.5s ease ${i*80}ms, transform 0.5s ease ${i*80}ms`,
                  padding:"32px", borderRadius:"12px", background:"#f9fafb", border:"1.5px solid rgba(0,0,0,0.05)",
                  cursor:"pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#f0f4f8";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(59,130,246,0.1)";
                  e.currentTarget.style.borderColor = `${item.color}20`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
                }}>
                  <span style={{ fontSize:"28px", display:"block", marginBottom:"14px" }}>{item.icon}</span>
                  <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:"20px", fontWeight:700, color:"#1a202c", marginBottom:"10px" }}>{item.title}</h3>
                  <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:"15px", color:"#6b7280", lineHeight:1.65, fontWeight:400 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef} style={{ padding:"120px 48px 140px", borderTop:"1px solid rgba(0,0,0,0.06)", background:"#fafbfc" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <div style={{ marginBottom:"72px" }}>
              <span style={{ opacity: projectsV?1:0, transition:"opacity 0.5s", fontFamily:"'Poppins',sans-serif", fontSize:"11px", color:"#3b82f6", letterSpacing:"0.12em", display:"block", marginBottom:"18px", fontWeight:600 }}>
                02 · FEATURED PROJECTS
              </span>
              <h2 style={{ opacity: projectsV?1:0, transform: projectsV?"translateY(0)":"translateY(20px)", transition:"opacity 0.5s 0.1s, transform 0.5s 0.1s", fontFamily:"'Poppins',sans-serif", fontSize:"44px", fontWeight:800, color:"#1a202c", letterSpacing:"-0.02em", lineHeight:1.12 }}>
                {total} projects across<br/><span style={{ background:"linear-gradient(90deg, #3b82f6, #8b5cf6)", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>3 stacks</span>
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
          padding:"40px 48px",
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"20px",
          background:"#ffffff",
        }}>
          <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"15px", fontWeight:700, color:"#1a202c" }}>
            Portfolio
          </span>
          <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"12px", color:"#9ca3af", letterSpacing:"0.05em", fontWeight:500 }}>
            © 2024–2026 · {total} PROJECTS · JS · REACT · NEXT.JS
          </span>
        </footer>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform:translateY(0px); }
          50% { transform:translateY(20px); }
        }
      `}</style>
    </>
  );
}
