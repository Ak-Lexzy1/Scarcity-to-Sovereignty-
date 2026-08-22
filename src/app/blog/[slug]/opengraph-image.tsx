import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#16233D",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#C9A24B",
            marginBottom: 28,
          }}
        >
          Scarcity to Sovereignty
        </div>
        <div
          style={{
            fontSize: 56,
            color: "#F7F2E7",
            lineHeight: 1.25,
            fontWeight: 600,
            maxWidth: 950,
          }}
        >
          {post.title}
        </div>
      </div>
    ),
    { ...size }
  );
            }
