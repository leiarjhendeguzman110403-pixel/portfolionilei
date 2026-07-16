"use client";

import { useEffect, useRef, useState } from "react";
import { Alata } from "next/font/google";

const alata = Alata({ weight: "400", subsets: ["latin"] });

// ==========================================
// --- FOOTER LAYOUT CONTROLS ---
// ==========================================
const CONFIG = {
  // Set a fixed value like "160px" to lock the footer's total height.
  // Set to "auto" to let it size naturally based on content + paddingY below.
  footerHeight: "auto",

  paddingY: "18px",
  paddingX: "24px",
  borderColor: "#2a2a2a",
  backgroundColor: "#121212",
  accentColor: "#8593F0",

  // TAGLINE TEXT
  taglineSize: "11px",
  taglineColor: "#a1a1aa",
  taglinePaddingLeft: "0px",
  taglineMarginBottom: "16px", // space between the tagline and the divider below it
  taglineOffsetX: "490px", // nudges left/right without affecting footer width layout
  taglineOffsetY: "-2px", // nudges up/down without affecting footer height

  // DIVIDER LINE
  dividerMarginTop: "0px",
  dividerMarginBottom: "16px",
  dividerOffsetX: "0px", // nudges left/right without affecting footer width layout
  dividerOffsetY: "10px", // nudges up/down without affecting footer height

  // SOCIAL ICONS (centered, below the divider)
  iconSize: "16px",
  iconCircleSize: "36px",
  iconColor: "#a1a1aa",
  iconHoverColor: "#ffffff",
  iconBorderColor: "#4d4d4d",
  iconHoverBorderColor: "#8593F0",
  iconGap: "14px",
  iconsOffsetY: "20px", // nudges up/down without affecting footer height (use negative to move up)
  iconsPaddingLeft: "0px",
  iconHoverScale: 1.15, // how much icons pop up on hover

  // COPYRIGHT (centered, at the very bottom)
  copyrightMarginTop: "12px",
  copyrightOffsetX: "0px", // nudges left/right without affecting footer width layout
  copyrightOffsetY: "15px", // nudges up/down without affecting footer height
  copyrightSize: "12px",
  copyrightColor: "#71717a",

  // ANIMATION
  animationsEnabled: true, // flip to false to turn every animation off
  revealDuration: "700ms", // how long each section takes to fade/slide in
  revealDistance: "18px", // how far each section slides up while revealing
  revealStagger: 90, // ms delay added between tagline / divider / each icon / copyright
  shimmerDuration: "3.5s", // speed of the light sweep across the divider line
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/leiarjhen.deguzman",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leideguzman_/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/leiarjhendeguzman110403-pixel",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lei-de-guzman-1ba84039b/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:LEIARJHENDEGUZMAN110403@GMAIL.COM",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(!CONFIG.animationsEnabled);

  useEffect(() => {
    if (!CONFIG.animationsEnabled) return;
    const node = footerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Helper: builds a reveal (fade + slide up) transform/opacity that combines
  // cleanly with each section's existing offsetX/offsetY nudge transform.
  const reveal = (offsetX: string, offsetY: string, delayIndex: number) => {
    if (!CONFIG.animationsEnabled) {
      return { transform: `translate(${offsetX}, ${offsetY})` };
    }
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? `translate(${offsetX}, ${offsetY})`
        : `translate(${offsetX}, calc(${offsetY} + ${CONFIG.revealDistance}))`,
      transition: `opacity ${CONFIG.revealDuration} cubic-bezier(0.22, 1, 0.36, 1), transform ${CONFIG.revealDuration} cubic-bezier(0.22, 1, 0.36, 1)`,
      transitionDelay: `${delayIndex * CONFIG.revealStagger}ms`,
    };
  };

  return (
    <footer
      ref={footerRef}
      className="relative z-10 w-full border-t flex flex-col justify-center overflow-hidden"
      style={{
        borderColor: CONFIG.borderColor,
        backgroundColor: CONFIG.backgroundColor,
        height: CONFIG.footerHeight,
      }}
    >
      <div
        className="max-w-[1200px] w-full mx-auto"
        style={{ paddingTop: CONFIG.paddingY, paddingBottom: CONFIG.paddingY, paddingLeft: CONFIG.paddingX, paddingRight: CONFIG.paddingX }}
      >
        {/* TAGLINE TEXT (logo image and nav links removed) */}
        <p
          className={`${alata.className} uppercase tracking-widest`}
          style={{
            fontSize: CONFIG.taglineSize,
            color: CONFIG.taglineColor,
            paddingLeft: CONFIG.taglinePaddingLeft,
            marginBottom: CONFIG.taglineMarginBottom,
            ...reveal(CONFIG.taglineOffsetX, CONFIG.taglineOffsetY, 0),
          }}
        >
          Turning Ideas Into Digital Experiences.
        </p>

        {/* DIVIDER LINE — subtle animated light sweep */}
        <div
          className="w-full footer-divider"
          style={{
            height: "1px",
            marginTop: CONFIG.dividerMarginTop,
            marginBottom: CONFIG.dividerMarginBottom,
            backgroundColor: CONFIG.borderColor,
            backgroundImage: CONFIG.animationsEnabled
              ? `linear-gradient(90deg, transparent, ${CONFIG.borderColor} 35%, ${CONFIG.accentColor} 50%, ${CONFIG.borderColor} 65%, transparent)`
              : undefined,
            backgroundSize: "250% 100%",
            animation: CONFIG.animationsEnabled ? `footerShimmer ${CONFIG.shimmerDuration} ease-in-out infinite` : undefined,
            ...reveal(CONFIG.dividerOffsetX, CONFIG.dividerOffsetY, 1),
          }}
        />

        {/* SOCIAL ICONS (centered) — each one cascades in and pops on hover */}
        <div
          className="flex items-center justify-center"
          style={{
            gap: CONFIG.iconGap,
            paddingLeft: CONFIG.iconsPaddingLeft,
            ...reveal("0px", CONFIG.iconsOffsetY, 2),
          }}
        >
          {socialLinks.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="flex items-center justify-center rounded-full border footer-icon"
              style={{
                width: CONFIG.iconCircleSize,
                height: CONFIG.iconCircleSize,
                color: CONFIG.iconColor,
                borderColor: CONFIG.iconBorderColor,
                opacity: CONFIG.animationsEnabled ? (isVisible ? 1 : 0) : 1,
                transform: CONFIG.animationsEnabled && !isVisible ? "translateY(14px) scale(0.85)" : "translateY(0) scale(1)",
                transition: CONFIG.animationsEnabled
                  ? `opacity ${CONFIG.revealDuration} cubic-bezier(0.22, 1, 0.36, 1), transform ${CONFIG.revealDuration} cubic-bezier(0.22, 1, 0.36, 1), color 0.3s, border-color 0.3s, box-shadow 0.3s`
                  : "color 0.3s, border-color 0.3s, box-shadow 0.3s",
                transitionDelay: CONFIG.animationsEnabled ? `${(3 + i) * CONFIG.revealStagger}ms` : undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = CONFIG.iconHoverColor;
                e.currentTarget.style.borderColor = CONFIG.iconHoverBorderColor;
                e.currentTarget.style.transform = `translateY(0) scale(${CONFIG.iconHoverScale})`;
                e.currentTarget.style.boxShadow = `0 0 14px ${CONFIG.iconHoverBorderColor}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = CONFIG.iconColor;
                e.currentTarget.style.borderColor = CONFIG.iconBorderColor;
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              <span style={{ width: CONFIG.iconSize, height: CONFIG.iconSize }}>{social.icon}</span>
            </a>
          ))}
        </div>

        {/* COPYRIGHT (centered, at the very bottom) */}
        <p
          className={`${alata.className} text-center tracking-wide`}
          style={{
            fontSize: CONFIG.copyrightSize,
            color: CONFIG.copyrightColor,
            marginTop: CONFIG.copyrightMarginTop,
            ...reveal(CONFIG.copyrightOffsetX, CONFIG.copyrightOffsetY, 3 + socialLinks.length),
          }}
        >
          © 2026 Lei De Guzman. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @keyframes footerShimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -150% 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-divider {
            animation: none !important;
          }
          .footer-icon {
            transition: color 0.2s, border-color 0.2s !important;
          }
        }
      `}</style>
    </footer>
  );
}