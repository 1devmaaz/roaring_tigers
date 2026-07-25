import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 96,
        }}
      >
        <div
          style={{
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#D62828",
            border: "18px solid #F8F8F8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 140,
            fontWeight: 800,
            letterSpacing: 2,
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
