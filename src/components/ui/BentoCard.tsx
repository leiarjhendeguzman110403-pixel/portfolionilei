"use client";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  col?: string;
  row?: string;
  href?: string;
  accentHover?: boolean;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  onClick?: () => void; // 1. Added onClick here
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export default function BentoCard({
  children, col = "", row = "", href, accentHover = false, className = "", style, external = false, onClick
}: BentoCardProps) {

  const classes = [
    "bento-card",
    "bg-[#0a0a0a] border border-white/10 rounded-[10px]", 
    col,
    row,
    href || onClick ? "cursor-pointer" : "", // 2. Show pointer if clickable
    accentHover ? "hover:border-[#f55b14] transition-colors" : "",
    className,
  ].filter(Boolean).join(" ");

  if (href) {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, y: -4, transition: { type: "spring", stiffness: 400, damping: 10 } }}
        style={style}
        className={classes}
        onClick={onClick}
      >
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="w-full h-full flex flex-col justify-between"
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={cardVariants}
      className={classes} 
      style={style}
      onClick={onClick} // 3. Passed onClick to the wrapper
    >
      {children}
    </motion.div>
  );
}