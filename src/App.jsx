import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ParticleBackground from './components/ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [activeSection, setActiveSection] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const sections = [
        { id: 'hero', title: 'Hero' },
        { id: 'discovery', title: '2014: Discovery' },
        { id: 'keystroke', title: 'Keystroke Injection' },
        { id: 'weaponization', title: 'Weaponization' },
        { id: 'badusb-c', title: 'BadUSB-C' },
        { id: 'multi-vector', title: 'Multi-Vector' },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const scroll = scrollRef.current;

        if (!container || !scroll) return;

        const totalWidth = scroll.scrollWidth;
        const viewportWidth = window.innerWidth;

        const horizontalScroll = gsap.to(scroll, {
            x: () => -(totalWidth - viewportWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                onUpdate: (self) => {
                    setScrollProgress(self.progress * 100);
                    const sectionIndex = Math.min(
                        Math.floor(self.progress * sections.length),
                        sections.length - 1
                    );
                    setActiveSection(sectionIndex);
                },
            },
        });

        return () => {
            horizontalScroll.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [sections.length]);

    const scrollToSection = (index) => {
        const scroll = scrollRef.current;
        if (!scroll) return;

        const totalWidth = scroll.scrollWidth - window.innerWidth;
        const targetProgress = index / (sections.length - 1);
        const targetScroll = totalWidth * targetProgress;

        gsap.to(window, {
            scrollTo: { y: targetScroll, autoKill: false },
            duration: 1,
            ease: 'power2.inOut',
        });
    };

    return (
        <div className="app">
            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Background Effects */}
            <div className="cyber-grid" />
            <div className="scanlines" />
            <ParticleBackground />

            {/* Navigation Dots */}
            <nav className="nav-dots">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        className={`nav-dot ${activeSection === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                        title={section.title}
                        aria-label={`Go to ${section.title}`}
                    />
                ))}
            </nav>

            {/* Horizontal Scroll Container */}
            <div ref={containerRef} className="horizontal-scroll-wrapper">
                <div ref={scrollRef} className="horizontal-scroll-container">
                    <HeroSection />

                    <TimelineSection
                        year="2014"
                        title="Discovery"
                        subtitle="The Birth of BadUSB"
                        description="Karsten Nohl and Jakob Lell demonstrated that USB firmware could be modified, allowing a device to impersonate keyboards, mice, or network cards. This groundbreaking research exposed a fundamental flaw in the USB protocol itself."
                        icon="🔓"
                        color="red"
                    />

                    <TimelineSection
                        year="2015"
                        title="Keystroke Injection"
                        subtitle="Initial Exploitation"
                        description="Early BadUSB attacks focused on emulating keyboards to open terminals, run hidden commands, or download malware. These attacks were often disguised as mundane hardware like USB drives or phone chargers."
                        icon="⌨️"
                        color="cyan"
                    />

                    <TimelineSection
                        year="2018"
                        title="Weaponization"
                        subtitle="Real-world Campaigns"
                        description="Attackers began using 'dropped' or mailed USB drives to target corporate networks. These devices became powerful tools in ransomware campaigns, phishing attacks, and corporate espionage operations."
                        icon="💣"
                        color="purple"
                    />

                    <TimelineSection
                        year="2021"
                        title="BadUSB-C"
                        subtitle="Modern Advancements"
                        description="The introduction of USB Type-C enabled more sophisticated attacks. Modern BadUSB-C devices can read and understand UI states, enabling precise, context-aware attacks that adapt to the target system in real-time."
                        icon="🔌"
                        color="green"
                    />

                    <TimelineSection
                        year="2024"
                        title="Multi-Vector"
                        subtitle="Current Threat Landscape"
                        description="Today's devices combine keyboard emulation with USB 3.x exploits for data exfiltration and wireless protocols for remote control. These multi-vector attacks represent the cutting edge of USB-based threats."
                        icon="🌐"
                        color="red"
                        isLast={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
