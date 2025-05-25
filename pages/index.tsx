import { createFrames } from "frames.js/next";
import { Button, ImageResponse, TextInput } from "frames.js";

const frames = createFrames();

export const GET = frames(async () => {
  return {
    image: <div style={ fontSize: 32, textAlign: "center", padding: 40 }>🍪 Welcome to The Farcookie! 🍪</div>,
    buttons: [{ label: "Crack it open", action: "post", target: "/api/fortune" }]
  };
});