export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const imageUrl = searchParams.get("url");
  
    if (!imageUrl || !imageUrl.startsWith("https://image.tmdb.org")) {
      return new Response(JSON.stringify({ error: "Invalid URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    try {
      const response = await fetch(imageUrl);
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const contentType = response.headers.get("content-type");
      const imageBuffer = await response.arrayBuffer();
  
      return new Response(imageBuffer, {
        status: 200,
        headers: {
          "Content-Type": contentType || "image/jpeg",
          "Cache-Control": "public, max-age=86400", // 1 روز کش بشه
        },
      });
    } catch (err) {
      console.error("Proxy error:", err);
      return new Response(JSON.stringify({ error: "Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  