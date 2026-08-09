import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.char = this.getRandomChar();
                this.color = this.getRandomColor();
                this.life = Math.random() * 300 + 100;
                this.maxLife = this.life;
            }

            getRandomChar() {
                const chars = ['0', '1', '0x', 'A', 'F', 'C', 'E', '>', '<', '/', '#', '*'];
                return chars[Math.floor(Math.random() * chars.length)];
            }

            getRandomColor() {
                const colors = [
                    'rgba(220, 38, 38, ',   // Red
                    'rgba(34, 211, 238, ',  // Cyan
                    'rgba(168, 85, 247, ',  // Purple
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life--;

                if (this.life <= 0 ||
                    this.x < 0 || this.x > canvas.width ||
                    this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                const fadeOpacity = Math.min(this.life / 50, 1) * this.opacity;
                ctx.font = `${10 + this.size * 3}px 'Fira Code', monospace`;
                ctx.fillStyle = this.color + fadeOpacity + ')';
                ctx.fillText(this.char, this.x, this.y);
            }
        }

        // Create particles
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Draw connecting lines between nearby particles
        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(220, 38, 38, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections first (behind particles)
            drawConnections();

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                opacity: 0.6,
            }}
        />
    );
};

export default ParticleBackground;
