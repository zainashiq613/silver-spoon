"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

// Unified PinContainer
export const PinContainer = ({
  children,
  title,
  href,
  external = false, // 👈 add a flag
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () =>
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  const onMouseLeave = () =>
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");

  // Decide wrapper based on "external"
  const Wrapper = external ? "a" : Link;
  const wrapperProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { to: href };

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "relative group/pin z-50 w-full h-full cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute w-full h-full left-1/2 top-1/2 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute w-full h-full left-1/2 top-1/2 flex justify-start items-start border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50 w-full h-full", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} />
    </Wrapper>
  );
};

// Perspective overlay (no <a> anymore!)
export const PinPerspective = ({ title }) => {
  return (
    <motion.div className="pointer-events-none col-span-1 h-[500px] flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <span className="relative bg-primary flex items-center z-10 rounded-full py-0.5 px-4 text-white text-xs font-medium">
            {title}
          </span>
        </div>
        {/* 🔥 keep your animated circles + beams */}
      </div>
    </motion.div>
  );
};
