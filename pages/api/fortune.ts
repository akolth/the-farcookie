import { createFrames } from "frames.js/next";

const fortunes = ['Your next bag will be a meme coin.', 'You will find alpha in the most unexpected thread.', 'WAGMI, but only if you hydrate.', 'Your digital karma is peaking today.', 'The next bull run begins with a single tap.'];

const frames = createFrames();

export const POST = frames(async () => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const shareLink = `https://warpcast.com/~/compose?text=${encodeURIComponent('🧧 ' + fortune)}`;

  return {
    image: <div style={ fontSize: 28, textAlign: "center", padding: 40 }>{fortune}</div>,
    buttons: [{ label: "Cast this 🍀", action: "link", target: shareLink }]
  };
});