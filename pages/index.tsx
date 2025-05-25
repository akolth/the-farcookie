import { createFrames } from "frames.js/next";
import React from "react";

const frames = createFrames();

export default frames(async () => {
  return {
    image: (
      <div style={{ 
        fontSize: 32, 
        textAlign: "center", 
        padding: 40,
        background: '#f0f0f0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        🍪 Welcome to The Farcookie! 🍪
      </div>
    ),
    buttons: [{ 
      label: "Crack it open", 
      action: "post", 
      target: "/api/fortune" 
    }]
  };
});




