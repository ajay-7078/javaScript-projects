import { useRef } from "react";
import useInView from "../hooks/useInView";
import ProjectCard from "./ProjectCard";

function StackSection({ sk, STACKS }) {
  const meta = STACKS[sk];
  const ref = useRef(null);
  const v = useInView(ref, 0.04);
  const shown = meta.projects;

  return (
    <section ref={ref} style={{ marginBottom: "92px" }}>
      {/* header */}
      <div style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(18px)", transition:"opacity 0.5s, transform 0.5s", marginBottom:"28px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"10px" }}>
          <span style={{
            padding:"4px 12px", borderRadius:"6px",
            background: meta.dim, border:`1px solid ${meta.border}`,
            fontSize:"11px", fontFamily:"'JetBrains Mono',monospace",
            color: meta.accent, letterSpacing:"0.08em", fontWeight:500,
          }}>{meta.badge}</span>
          <div style={{ flex:1, height:"1px", background:"rgba(0,0,0,0.06)" }} />
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(0,0,0,0.25)", letterSpacing:"0.08em" }}>
            {meta.projects.length} projects
          </span>
        </div>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"30px", fontWeight:700, color:"#333333", margin:"0 0 6px", letterSpacing:"-0.02em" }}>
          {meta.label}
        </h2>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", color:"rgba(0,0,0,0.45)", margin:0 }}>
          {meta.desc}
        </p>
      </div>

      {/* grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))", gap:"14px" }}>
        {shown.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  );
}

export default StackSection;