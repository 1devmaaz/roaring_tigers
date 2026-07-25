import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: 9999,
            background: "#D62828",
            border: "8px solid #F8F8F8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 52,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          RT
        </div>
      </div>
    ),
    { ...size }
  );
}
