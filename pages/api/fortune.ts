import { createFrames } from "frames.js/next";

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
import { createFrames } from "frames.js/next";

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
  const shareText = `🧧 ${fortune} #farcookie`;
  const shareLink = `https://warpcast.com/~/compose?text=${encodeURIComponent(shareText)}`;

  const imageUrl = `https://via.placeholder.com/600x400/667eea/ffffff?text=${encodeURIComponent('🥠 ' + fortune)}`;

  return {
    image: imageUrl,
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
