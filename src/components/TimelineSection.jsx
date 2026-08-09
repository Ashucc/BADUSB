import { motion } from 'framer-motion';

const TimelineSection = ({ year, title, subtitle, description, icon, color = 'red', isLast = false }) => {
    const colorMap = {
        red: {
            primary: 'var(--color-red)',
            glow: 'var(--glow-red)',
            bg: 'rgba(220, 38, 38, 0.1)',
        },
        cyan: {
            primary: 'var(--color-cyan)',
            glow: 'var(--glow-cyan)',
            bg: 'rgba(34, 211, 238, 0.1)',
        },
        purple: {
            primary: 'var(--color-purple)',
            glow: 'var(--glow-purple)',
            bg: 'rgba(168, 85, 247, 0.1)',
        },
        green: {
            primary: 'var(--color-green)',
            glow: '0 0 20px #22c55e, 0 0 40px #22c55e',
            bg: 'rgba(34, 197, 94, 0.1)',
        },
    };

    const colors = colorMap[color] || colorMap.red;

    return (
        <section className="horizontal-section timeline-section">
            <div className="timeline-content">
                {/* Background Pattern */}
                <div className="timeline-bg-pattern" style={{ '--accent-color': colors.primary }} />

                {/* Year Display */}
                <motion.div
                    className="timeline-year"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        color: colors.primary,
                        textShadow: colors.glow
                    }}
                >
                    {year}
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    className="timeline-card cyber-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ '--card-accent': colors.primary }}
                >
                    <div className="card-header">
                        <div
                            className="card-icon"
                            style={{
                                background: colors.bg,
                                borderColor: colors.primary
                            }}
                        >
                            <span>{icon}</span>
                        </div>
                        <div className="card-titles">
                            <h2
                                className="card-title"
                                style={{ color: colors.primary }}
                            >
                                {title}
                            </h2>
                            <h3 className="card-subtitle">{subtitle}</h3>
                        </div>
                    </div>

                    <p className="card-description">{description}</p>

                    {/* Decorative Elements */}
                    <div className="card-decoration">
                        <div
                            className="deco-line"
                            style={{ background: colors.primary }}
                        />
                        <div
                            className="deco-dot"
                            style={{
                                background: colors.primary,
                                boxShadow: colors.glow
                            }}
                        />
                    </div>

                    {/* Code-like decoration */}
                    <div className="card-code">
                        <span className="code-line">
                            <span style={{ color: colors.primary }}>const</span> threat = {'{'}
                        </span>
                        <span className="code-line indent">
                            type: <span style={{ color: colors.primary }}>"{title.toLowerCase()}"</span>,
                        </span>
                        <span className="code-line indent">
                            severity: <span style={{ color: colors.primary }}>"CRITICAL"</span>
                        </span>
                        <span className="code-line">{'}'}</span>
                    </div>
                </motion.div>

                {/* Connection Line to next section */}
                {!isLast && (
                    <motion.div
                        className="timeline-connector"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ background: `linear-gradient(90deg, ${colors.primary}, transparent)` }}
                    />
                )}

                {/* Floating Elements */}
                <div className="floating-elements">
                    <motion.div
                        className="float-hex"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ borderColor: colors.primary }}
                    />
                    <motion.div
                        className="float-circle"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                        style={{
                            background: colors.bg,
                            borderColor: colors.primary
                        }}
                    />
                </div>
            </div>

            <style>{`
        .timeline-section {
          background: var(--color-bg-primary);
        }

        .timeline-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }

        .timeline-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, var(--accent-color) 0%, transparent 50%);
          opacity: 0.05;
          pointer-events: none;
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-size: clamp(6rem, 20vw, 15rem);
          font-weight: 900;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.1;
          z-index: 0;
          pointer-events: none;
          white-space: nowrap;
        }

        .timeline-card {
          max-width: 600px;
          width: 90%;
          z-index: 10;
          position: relative;
        }

        .timeline-card::before {
          background: var(--card-accent, var(--color-red));
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .card-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          border-radius: 12px;
          font-size: 2rem;
          flex-shrink: 0;
        }

        .card-titles {
          flex: 1;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          text-transform: uppercase;
        }

        .card-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 400;
          color: var(--color-text-secondary);
          margin: 0;
          text-transform: none;
        }

        .card-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .card-decoration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .deco-line {
          height: 2px;
          flex: 1;
          opacity: 0.5;
        }

        .deco-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .card-code {
          font-family: var(--font-code);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: 8px;
          border-left: 3px solid var(--card-accent, var(--color-red));
        }

        .code-line {
          display: block;
        }

        .code-line.indent {
          padding-left: 1.5rem;
        }

        .timeline-connector {
          position: absolute;
          right: 0;
          top: 50%;
          width: 150px;
          height: 2px;
          transform-origin: left center;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .float-hex {
          position: absolute;
          top: 20%;
          right: 15%;
          width: 60px;
          height: 60px;
          border: 2px solid;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          opacity: 0.3;
        }

        .float-circle {
          position: absolute;
          bottom: 25%;
          left: 10%;
          width: 100px;
          height: 100px;
          border: 1px solid;
          border-radius: 50%;
          opacity: 0.2;
        }

        @media (max-width: 768px) {
          .timeline-content {
            padding: 2rem;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
          }

          .timeline-connector {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default TimelineSection;
