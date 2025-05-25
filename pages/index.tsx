import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = "https://via.placeholder.com/600x400/ff9a9e/333333?text=🍪+Welcome+to+The+Farcookie!+🍪";
  const baseUrl = req.url.replace(/\/$/, '');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${imageUrl}" />
        <meta property="fc:frame:button:1" content="Crack it open 🥠" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="${baseUrl}/api/fortune" />
        <title>The Farcookie</title>
      </head>
      <body>
        <h1>🍪 Welcome to The Farcookie! 🍪</h1>
        <p>A fun Farcaster Frame that gives users random fortunes.</p>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
