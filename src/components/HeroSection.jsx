import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/badusb-malicious.png', '/badusb-device.jpg'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="horizontal-section hero-section">
            <div className="hero-content">
                {/* Animated Background Elements */}
                <div className="hero-bg-elements">
                    <div className="hex-grid" />
                    <div className="circuit-lines" />
                </div>

                {/* Main Content */}
                <div className="hero-main">
                    {/* Left Side - Text */}
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            <span>SECURITY SOLUTION</span>
                        </div>

                        <GlitchText
                            text="BADUSB"
                            className="hero-title-main"
                        />
                        <h1 className="hero-title-sub">DETECTION</h1>

                        <p className="hero-description">
                            Advanced protection against malicious USB firmware attacks.
                            Detect, prevent, and neutralize BadUSB threats before they
                            compromise your systems.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number glow-text-red">99.9%</span>
                                <span className="stat-label">Detection Rate</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number glow-text-cyan">{"<"}1ms</span>
                                <span className="stat-label">Response Time</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number glow-text-purple">24/7</span>
                                <span className="stat-label">Monitoring</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <a href="/duckhunt (1).zip" download="duckhunt.zip" className="cyber-button primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                Download Now
                                <span className="button-glitch" />
                            </a>
                            <button className="cyber-button secondary">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side - 3D USB Image */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="usb-container">
                            <div className="usb-glow" />
                            <div className="usb-image-wrapper">
                                {images.map((src, index) => (
                                    <img
                                        key={src}
                                        src={src}
                                        alt={`BadUSB Device ${index + 1}`}
                                        className={`usb-image ${currentImage === index ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                            <div className="usb-scan-line" />

                            {/* Floating Elements */}
                            <div className="float-element float-1">
                                <span className="code-snippet">0x41</span>
                            </div>
                            <div className="float-element float-2">
                                <span className="code-snippet">HID</span>
                            </div>
                            <div className="float-element float-3">
                                <span className="code-snippet">INJECT</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span>SCROLL</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </div>

            <style>{`
        .hero-section {
          background: radial-gradient(ellipse at center, rgba(220, 38, 38, 0.1) 0%, transparent 70%);
        }

        .hero-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 5%;
          position: relative;
        }

        .hero-bg-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hex-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 15v30L30 60 0 45V15z' fill='none' stroke='%23dc2626' stroke-opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .circuit-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, transparent 49%, rgba(220, 38, 38, 0.1) 50%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(220, 38, 38, 0.1) 50%, transparent 51%);
          background-size: 100px 100px;
        }

        .hero-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-text {
          flex: 1;
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 50px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--color-red);
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--color-red);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title-main {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          color: var(--color-red);
          text-shadow: var(--glow-red);
          margin: 0;
        }

        .hero-title-sub {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1;
          color: var(--color-text-primary);
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(15, 15, 26, 0.5);
          border: 1px solid rgba(220, 38, 38, 0.2);
          border-radius: 8px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .cyber-button.primary {
          background: var(--color-red);
          color: white;
        }

        .cyber-button.secondary {
          border-color: var(--color-text-muted);
          color: var(--color-text-secondary);
        }

        .cyber-button.secondary:hover {
          border-color: var(--color-cyan);
          color: var(--color-cyan);
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .usb-container {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .usb-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 3s ease-in-out infinite;
        }

        .usb-image-wrapper {
          position: relative;
          width: 350px;
          height: 350px;
          animation: float 6s ease-in-out infinite;
        }

        .usb-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transform: scale(0.9) rotateY(90deg);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.5));
        }

        .usb-image.active {
          opacity: 1;
          transform: scale(1) rotateY(0deg);
        }

        .usb-scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-red), transparent);
          animation: scanLine 3s linear infinite;
        }

        @keyframes scanLine {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .float-element {
          position: absolute;
          padding: 0.5rem 1rem;
          background: rgba(15, 15, 26, 0.9);
          border: 1px solid var(--color-red);
          border-radius: 4px;
          font-family: var(--font-code);
          font-size: 0.875rem;
          color: var(--color-red);
          animation: float 4s ease-in-out infinite;
        }

        .float-1 {
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .float-2 {
          bottom: 20%;
          left: 5%;
          animation-delay: 1s;
        }

        .float-3 {
          top: 60%;
          right: 5%;
          animation-delay: 2s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          right: 5%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
        }

        .scroll-indicator svg {
          color: var(--color-red);
        }

        @media (max-width: 1024px) {
          .hero-main {
            flex-direction: column;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .usb-container {
            width: 300px;
            height: 300px;
          }

          .usb-image-wrapper {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
