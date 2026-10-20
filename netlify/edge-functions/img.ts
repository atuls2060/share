const ALLOWED = ["de6wnduof49du.cloudfront.net", "d27culum87qcu8.cloudfront.net"];

export default async (request: Request) => {
  const src = new URL(request.url).searchParams.get("src");
  if (!src) return new Response("Invalid source", { status: 400 });

  let target: URL;
  try {
    target = new URL(src);
  } catch {
    return new Response("Invalid source", { status: 400 });
  }
  if (!ALLOWED.includes(target.hostname)) {
    return new Response("Invalid source", { status: 400 });
  }

  const upstream = await fetch(target.toString());
  if (!upstream.ok) return new Response("Upstream error", { status: 502 });

  const bytes = new Uint8Array(await upstream.arrayBuffer());

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(bytes);
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "image/jpeg",
      "cache-control": "public, immutable, no-transform, max-age=31536000",
    },
  });
};
