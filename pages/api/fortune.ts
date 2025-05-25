import { createFrames } from "frames.js/next";
import React from "react";

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

const frames = createFrames();

export default frames(async () => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const shareLink = `https://warpcast.com/~/compose?text=${encodeURIComponent('🧧 ' + fortune + ' #farcookie')}`;

  return {
    image: (
      <div style={{ 
        fontSize: 28, 
        textAlign: "center", 
        padding: 40,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: 20, fontSize: 40 }}>🥠</div>
        <div style={{ maxWidth: '80%', lineHeight: 1.4 }}>
          {fortune}
        </div>
      </div>
    ),
    buttons: [
      { 
        label: "Cast this 🍀", 
        action: "link", 
        target: shareLink 
      },
      {
        label: "Another fortune",
        action: "post",
        target: "/api/fortune"
      }
    ]
  };
});



