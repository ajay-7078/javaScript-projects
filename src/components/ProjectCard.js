import { useState, useRef } from "react";
import useInView from "../hooks/useInView";

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const v = useInView(ref);
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.5s ease ${(i%3)*65}ms, transform 0.5s ease ${(i%3)*65}ms, background 0.2s, border-color 0.2s`,
        background: hov ? "rgba(0,0,0,0.055)" : "rgba(0,0,0,0.02)",
        border: `1px solid ${hov ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.08)"}`,
        borderRadius: "12px", padding: "22px",
        display: "flex", flexDirection: "column", gap: "12px",
        position: "relative", overflow: "hidden",
      }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"2px", background: hov ? p.color : "transparent", transition:"background 0.25s", borderRadius:"12px 12px 0 0" }} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"10px" }}>
        <div>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(0,0,0,0.3)", letterSpacing:"0.1em", display:"block", marginBottom:"5px" }}>
            {p.type} · {p.year}
          </span>
          <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"18px", fontWeight:600, color:"#333333", margin:0, lineHeight:1.2 }}>
            {p.name}
          </h4>
        </div>
        <a href={p.link} target="_blank" rel="noreferrer" style={{
          width:"30px",height:"30px",borderRadius:"50%",
          border:`1px solid ${hov?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.12)"}`,
          display:"flex",alignItems:"center",justifyContent:"center",
          color: hov?"#333333":"rgba(0,0,0,0.28)",
          textDecoration:"none",fontSize:"13px",flexShrink:0,transition:"all 0.2s",marginTop:"2px",
        }}>↗</a>
      </div>
      <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"14.5px", color:"rgba(0,0,0,0.55)", margin:0, lineHeight:1.65, flex:1 }}>
        {p.about}
      </p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
        {p.tags.map(t => (
          <span key={t} style={{
            padding:"2px 9px",borderRadius:"999px",
            background:"rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.09)",
            fontSize:"10px",color:"rgba(0,0,0,0.4)",
            fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.04em",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;