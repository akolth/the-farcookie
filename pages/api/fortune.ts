import { NextRequest, NextResponse } from 'next/server';

const fortunes = [
  'Your next bag will be a meme coin.',
  'You will find alpha in the most unexpected thread.',
  'WAGMI, but only if you hydrate.',
  'Your digital karma is peaking today.',
  'The next bull run begins with a single tap.',
  'A mysterious airdrop awaits in your future.',
  'Your diamond hands will be tested soon.',
  'The degen within you is awakening.',
  'Fortune favors the bold HODLer.',
  'Your next trade will surprise you.'
];

export async function POST(req: NextRequest) {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const shareText = `🧧 ${fortune} #farcookie`;
  const shareLink = `https://warpcast.com/~/compose?text=${encodeURIComponent(shareText)}`;
  
  const imageUrl = `https://via.placeholder.com/600x400/667eea/ffffff?text=${encodeURIComponent('🥠 ' + fortune)}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${imageUrl}" />
        <meta property="fc:frame:button:1" content="Cast this 🍀" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${shareLink}" />
        <meta property="fc:frame:button:2" content="Another fortune" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="${req.url}" />
      </head>
      <body>
        <h1>🥠 ${fortune}</h1>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
