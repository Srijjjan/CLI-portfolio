import React from "react";
import { motion } from "framer-motion";

const WireframeAnimation = () => {
  return (
    <div className="w-full h-48 relative flex items-center justify-center overflow-hidden border-y border-neon-blue/20 my-6 bg-black/20">
      {/* Container for 3D perspective */}
      <div style={{ perspective: "800px" }} className="relative w-32 h-32">
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {/* Cube Faces */}
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "translateZ(64px)" }}
          />
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "rotateY(180deg) translateZ(64px)" }}
          />
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "rotateY(90deg) translateZ(64px)" }}
          />
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "rotateY(-90deg) translateZ(64px)" }}
          />
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "rotateX(90deg) translateZ(64px)" }}
          />
          <div
            className="absolute inset-0 border border-neon-blue/60 bg-neon-blue/5"
            style={{ transform: "rotateX(-90deg) translateZ(64px)" }}
          />

          {/* Inner Cube (smaller, rotating opposite) */}
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "translateZ(32px)" }}
            />
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "rotateY(180deg) translateZ(32px)" }}
            />
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "rotateY(90deg) translateZ(32px)" }}
            />
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "rotateY(-90deg) translateZ(32px)" }}
            />
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "rotateX(90deg) translateZ(32px)" }}
            />
            <div
              className="absolute inset-0 border border-white/40"
              style={{ transform: "rotateX(-90deg) translateZ(32px)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,243,255,0.2)_100%),linear-gradient(90deg,transparent_95%,rgba(0,243,255,0.2)_100%)] bg-[length:20px_20px]" />
    </div>
  );
};

export default WireframeAnimation;
