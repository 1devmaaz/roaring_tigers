import { site } from "@/lib/site";

/** Shared Open Graph / Twitter card markup for ImageResponse. */
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 55%, #2a0a0a 100%)",
        padding: "56px 64px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -80,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: "rgba(214, 40, 40, 0.35)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -60,
          bottom: -100,
          width: 360,
          height: 360,
          borderRadius: 9999,
          background: "rgba(198, 90, 30, 0.22)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#D62828",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            RT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#F8F8F8",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Roaring Tigers
            </span>
            <span
              style={{
                color: "rgba(248,248,248,0.55)",
                fontSize: 14,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Shotokan Karate Club
            </span>
          </div>
        </div>
        <div
          style={{
            color: "#D62828",
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Sheikhupura · Pakistan
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            width: 72,
            height: 4,
            background: "linear-gradient(90deg, #D62828, #C65A1E)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#F8F8F8",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -1,
            textTransform: "uppercase",
          }}
        >
          <span>Empowering Minds</span>
          <span style={{ color: "#D62828" }}>Strengthening Bodies</span>
        </div>
        <div
          style={{
            color: "rgba(248,248,248,0.65)",
            fontSize: 24,
            lineHeight: 1.35,
            maxWidth: 780,
          }}
        >
          Traditional Shotokan Karate for kids, teens, adults and women.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(58,58,58,0.9)",
          paddingTop: 24,
        }}
      >
        <span
          style={{
            color: "rgba(248,248,248,0.5)",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Join Today · Book a Free Trial
        </span>
        <span
          style={{
            color: "#D4AF37",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {site.yearsActive}+ Years Active
        </span>
      </div>
    </div>
  );
}
