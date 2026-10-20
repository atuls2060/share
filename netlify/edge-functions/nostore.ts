const IMAGE = "https://de6wnduof49du.cloudfront.net/advisory/assets/dstreet.png";
const PAGE_URL = "https://verdant-meerkat-dcf4c4.netlify.app/nostore";

const HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NOSTORE page headers</title>
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="DreamStreet" />
    <meta property="og:url" content="${PAGE_URL}" />
    <meta property="og:title" content="NOSTORE page headers" />
    <meta property="og:description" content="View all details and updates on the app" />
    <meta property="og:image" content="${IMAGE}" />
    <meta property="og:image:alt" content="NOSTORE page headers" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NOSTORE page headers" />
    <meta name="twitter:description" content="View all details and updates on the app" />
    <meta name="twitter:image" content="${IMAGE}" />
  </head>
  <body>
    <h1>NOSTORE page headers</h1>
    <p>page Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate</p>
  </body>
</html>`;

export default async () =>
  new Response(HTML, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
    },
  });
