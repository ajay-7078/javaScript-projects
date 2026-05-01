import { useRef } from "react";
import useInView from "../hooks/useInView";
import ProjectCard from "./ProjectCard";

function StackSection({ sk, STACKS }) {
  const meta = STACKS[sk];
  const ref = useRef(null);
  const v = useInView(ref, 0.04);
  const shown = meta.projects;

  return (
    <section ref={ref} style={{ marginBottom: "100px" }}>
      {/* header */}
      <div style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(20px)", transition:"opacity 0.5s, transform 0.5s", marginBottom:"52px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"16px", flexWrap:"wrap" }}>
          <span style={{
            padding:"8px 16px", borderRadius:"8px",
            background: meta.dim, border:`2px solid ${meta.border}`,
            fontSize:"12px", fontFamily:"'Poppins',sans-serif",
            color: meta.accent, letterSpacing:"0.05em", fontWeight:700,
          }}>{meta.badge}</span>
          <div style={{ flex:1, minWidth:"40px", height:"1.5px", background:"linear-gradient(90deg, rgba(0,0,0,0.1), transparent)" }} />
          <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"12px", color:"#6b7280", letterSpacing:"0.05em", fontWeight:500 }}>
            {meta.projects.length} projects
          </span>
        </div>
        <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:"36px", fontWeight:800, color:"#1a202c", margin:"0 0 10px", letterSpacing:"-0.02em" }}>
          {meta.label}
        </h2>
        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:"16px", color:"#6b7280", margin:0, fontWeight:400 }}>
          {meta.desc}
        </p>
      </div>

      {/* grid */}
      <div className="stack-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))", gap:"20px" }}>
        {shown.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  );
}

export default StackSection;