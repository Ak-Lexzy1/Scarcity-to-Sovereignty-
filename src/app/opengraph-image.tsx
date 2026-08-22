import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#16233D",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A24B",
            marginBottom: 24,
          }}
        >
          Money &amp; Mindset
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#F7F2E7",
            textAlign: "center",
            lineHeight: 1.2,
            fontWeight: 600,
          }}
        >
          Scarcity to Sovereignty
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(247,242,231,0.7)",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Where Scarcity Thinking Ends & Wealth Clarity Starts
        </div>
      </div>
    ),
    { ...size }
  );
            }
