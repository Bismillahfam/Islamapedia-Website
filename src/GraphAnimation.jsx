import React from "react";

function GraphAnimation() {
  return (
    <div className="fixed bottom-0 right-0 w-1/2 h-1/3">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-bounce">
        {/* Connecting lines */}
        <line x1="50" y1="50" x2="150" y2="50" stroke="#fff" strokeWidth="2" />
        <line x1="50" y1="50" x2="100" y2="150" stroke="#fff" strokeWidth="2" />
        <line
          x1="150"
          y1="50"
          x2="100"
          y2="150"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Nodes with pulsating animation in Islamic green */}
        <circle cx="50" cy="50" r="8" fill="#006400">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="50" r="8" fill="#006400">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="100" cy="150" r="8" fill="#006400">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default GraphAnimation;
