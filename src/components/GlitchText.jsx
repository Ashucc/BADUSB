import { useState, useEffect } from 'react';

const GlitchText = ({ text, className = '' }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        // Random glitch intervals
        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000 + Math.random() * 2000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <span
            className={`glitch-container ${className} ${isGlitching ? 'glitching' : ''}`}
            data-text={text}
        >
            {text}
            <style>{`
        .glitch-container {
          position: relative;
          display: inline-block;
        }

        .glitch-container::before,
        .glitch-container::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .glitch-container::before {
          color: var(--color-cyan);
          z-index: -1;
        }

        .glitch-container::after {
          color: var(--color-red);
          z-index: -2;
        }

        .glitch-container.glitching::before {
          opacity: 0.8;
          animation: glitch-1 0.2s steps(2, end);
        }

        .glitch-container.glitching::after {
          opacity: 0.8;
          animation: glitch-2 0.2s steps(2, end);
        }

        .glitch-container:hover::before {
          opacity: 0.8;
          animation: glitch-1 0.3s infinite steps(2, end);
        }

        .glitch-container:hover::after {
          opacity: 0.8;
          animation: glitch-2 0.3s infinite steps(2, end);
        }

        @keyframes glitch-1 {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, -2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(2px, 2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, 2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-2px, 2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, 2px);
          }
        }

        @keyframes glitch-2 {
          0% {
            clip-path: inset(65% 0 14% 0);
            transform: translate(2px, 2px);
          }
          20% {
            clip-path: inset(10% 0 85% 0);
            transform: translate(-2px, -2px);
          }
          40% {
            clip-path: inset(36% 0 19% 0);
            transform: translate(2px, -2px);
          }
          60% {
            clip-path: inset(75% 0 9% 0);
            transform: translate(-2px, 2px);
          }
          80% {
            clip-path: inset(12% 0 52% 0);
            transform: translate(2px, -2px);
          }
          100% {
            clip-path: inset(29% 0 25% 0);
            transform: translate(-2px, -2px);
          }
        }
      `}</style>
        </span>
    );
};

export default GlitchText;
