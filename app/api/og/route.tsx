import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "#09090B",
            padding: "80px",
            position: "relative",
          }}
        >
          {/* Blue gradient orb */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "-80px",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Purple gradient orb */}
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Grid pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

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
              fontSize: "56px",
              fontWeight: 800,
              color: "#FAFAFA",
              lineHeight: 1.1,
              marginBottom: "8px",
              letterSpacing: "-2px",
            }}
          >
            Hafiz Muhammad
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-2px",
              color: "#3B82F6",
            }}
          >
            Tayyab Zia
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "20px",
              color: "#A1A1AA",
              marginBottom: "40px",
            }}
          >
            Software Engineer · AI & Computer Vision · NUST &apos;28
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "AI/ML", color: "#3B82F6" },
              { label: "Computer Vision", color: "#8B5CF6" },
              { label: "Full-Stack", color: "#10B981" },
              { label: "NUST '28", color: "#F59E0B" },
              { label: "Ex-NASTP", color: "#06B6D4" },
            ].map((tag) => (
              <div
                key={tag.label}
                style={{
                  background: `${tag.color}18`,
                  border: `1px solid ${tag.color}40`,
                  borderRadius: "8px",
                  padding: "6px 14px",
                  color: tag.color,
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {tag.label}
              </div>
            ))}
          </div>

          {/* Stats on right side */}
          <div
            style={{
              position: "absolute",
              right: "80px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {[
              { value: "4", label: "Internships", color: "#3B82F6" },
              { value: "7+", label: "Projects", color: "#8B5CF6" },
              { value: "30+", label: "Certificates", color: "#10B981" },
              { value: "1000+", label: "Connections", color: "#0077B5" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "14px 22px",
                  textAlign: "center",
                  minWidth: "130px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 800, color: stat.color }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "11px", color: "#A1A1AA", marginTop: "2px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              position: "absolute",
              bottom: "36px",
              left: "80px",
              right: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "13px", color: "#52525B" }}>
              hafiztayyab.vercel.app
            </div>
            <div style={{ fontSize: "13px", color: "#52525B" }}>
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
  } catch (e) {
    console.error("OG image error:", e);
    return new Response("Failed to generate image", { status: 500 });
  }
}