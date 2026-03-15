import React from "react";

export default function Header() {
  return (
    <header
      style={{
        marginBottom: "3rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "700",
          margin: "0 0 0.75rem 0",
          color: "#f4f4f5",
          letterSpacing: "-0.02em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: '"ZCOOL XiaoWei", serif',
            fontSize: "3rem",
            color: "#ffffff",
            transform: "translateY(-2px)",
          }}
        >
          中文 Multi-Agent System
        </span>
      </h1>
      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1rem",
          fontStyle: "italic",
          margin: 0,
          maxWidth: "500px",
          lineHeight: "1.5",
        }}
      >
        Automated pipeline for transforming textbook vocabulary into reading
        materials.
      </p>
    </header>
  );
}
