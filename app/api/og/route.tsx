import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#09090B",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column" }}>
          {/* Availability badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "32px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10B981",
              }}
            />
            <span style={{ color: "#10B981", fontSize: "14px", fontWeight: 600 }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FAFAFA",
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-2px",
            }}
          >
            Hafiz Muhammad
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Tayyab Zia
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "22px",
              color: "#A1A1AA",
              marginBottom: "40px",
              fontWeight: 400,
            }}
          >
            Software Engineering Student @ NUST · AI & Computer Vision · NASTP Alumni
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "AI/ML", color: "#3B82F6" },
              { label: "Computer Vision", color: "#8B5CF6" },
              { label: "Flutter", color: "#06B6D4" },
              { label: "Full-Stack", color: "#10B981" },
              { label: "NUST '28", color: "#F59E0B" },
            ].map(({ label, color }) => (
              <div
                key={label}
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}40`,
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: color,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right side — stats */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {[
            { value: "4", label: "Internships", color: "#3B82F6" },
            { value: "7+", label: "Projects", color: "#8B5CF6" },
            { value: "30+", label: "Certificates", color: "#10B981" },
            { value: "1000+", label: "LinkedIn", color: "#0077B5" },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "16px 24px",
                textAlign: "center",
                minWidth: "140px",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: 800, color }}>
                {value}
              </div>
              <div style={{ fontSize: "12px", color: "#A1A1AA", marginTop: "4px" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "14px", color: "#52525B" }}>
            hafiztayyab.vercel.app
          </div>
          <div
            style={{
              height: "2px",
              flex: 1,
              marginLeft: "20px",
              marginRight: "20px",
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)",
            }}
          />
          <div style={{ fontSize: "14px", color: "#52525B" }}>
            Rawalpindi, Pakistan 🇵🇰
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}