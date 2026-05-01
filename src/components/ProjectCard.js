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
        opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${(i%3)*70}ms, transform 0.5s ease ${(i%3)*70}ms, all 0.3s ease`,
        background: hov ? "#ffffff" : "#f9fafb",
        border: `1.5px solid ${hov ? p.color + "25" : "rgba(0,0,0,0.08)"}`,
        borderRadius: "14px", padding: "28px",
        display: "flex", flexDirection: "column", gap: "16px",
        position: "relative", overflow: "hidden",
        boxShadow: hov ? `0 12px 32px ${p.color}12` : "0 2px 8px rgba(0,0,0,0.04)",
        cursor: "pointer",
      }}>
      {/* accent bar */}
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"3px", background: hov ? `linear-gradient(90deg, ${p.color}, ${p.color}80)` : "transparent", transition:"background 0.3s ease", borderRadius:"14px 14px 0 0" }} />
      
      {/* content */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"10px" }}>
        <div style={{ flex:1 }}>
          <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"11px", color:"#9ca3af", letterSpacing:"0.08em", display:"block", marginBottom:"6px", fontWeight:600 }}>
            {p.type} · {p.year}
          </span>
          <h4 style={{ fontFamily:"'Poppins',sans-serif", fontSize:"20px", fontWeight:700, color:"#1a202c", margin:0, lineHeight:1.2 }}>
            {p.name}
          </h4>
        </div>
        <a href={p.link} target="_blank" rel="noreferrer" style={{
          width:"36px",height:"36px",borderRadius:"10px",
          border:`1.5px solid ${hov?p.color:"rgba(0,0,0,0.12)"}`,
          display:"flex",alignItems:"center",justifyContent:"center",
          color: hov?p.color:"#6b7280",
          background: hov?p.color+"12":"transparent",
          textDecoration:"none",fontSize:"16px",flexShrink:0,transition:"all 0.3s ease",marginTop:"2px",
          cursor:"pointer",
        }}>↗</a>
      </div>
      
      {/* description */}
      <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:"15px", color:"#6b7280", margin:0, lineHeight:1.7, flex:1, fontWeight:400 }}>
        {p.about}
      </p>
      
      {/* tags */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"8px" }}>
        {p.tags.map(t => (
          <span key={t} style={{
            padding:"4px 12px",borderRadius:"20px",
            background:`${p.color}12`,border:`1px solid ${p.color}25`,
            fontSize:"11px",color:p.color,
            fontFamily:"'Poppins',sans-serif",letterSpacing:"0.03em", fontWeight:600,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;