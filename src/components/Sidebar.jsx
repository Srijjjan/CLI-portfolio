import React, { useState } from "react";
import WireframeAnimation from "./WireframeAnimation";
import { Send, Terminal } from "lucide-react";

const Sidebar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add actual submission logic later
  };

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto scrollbar-hide text-xs md:text-sm">
      {/* Brand / Logo */}
      <div className="mb-8 p-4 border-b border-neon-blue/30">
        <h1 className="text-4xl font-black tracking-tighter text-neon-blue glitch-effect animate-pulse">
          SRIJAN
        </h1>
        <div className="text-[10px] text-gray-400 mt-1 flex justify-between">
          <span>VER. 2.5.0</span>
          <span>SYSTEM_READY</span>
        </div>
      </div>

      {/* Wireframe Viz */}
      <WireframeAnimation />

      {/* Decorative Grid Block */}
      <div className="mb-8 p-4 relative h-32 border-y border-neon-blue/20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #00f3ff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue/50 animate-[scan_2s_linear_infinite]" />
      </div>

      {/* Contact Form */}
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 mb-4 text-neon-blue border-b border-neon-blue/30 pb-2">
          <Terminal size={14} />
          <span className="font-bold tracking-widest">SEND_TRANSMISSION</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="group">
            <label className="block text-[10px] text-gray-400 mb-1 group-focus-within:text-neon-blue">
              NAME_
            </label>
            <input
              type="text"
              className="w-full bg-black/40 border border-gray-700 p-2 text-neon-blue focus:border-neon-blue focus:outline-none focus:bg-neon-blue/5 transition-all"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="group">
            <label className="block text-[10px] text-gray-400 mb-1 group-focus-within:text-neon-blue">
              EMAIL_
            </label>
            <input
              type="email"
              className="w-full bg-black/40 border border-gray-700 p-2 text-neon-blue focus:border-neon-blue focus:outline-none focus:bg-neon-blue/5 transition-all"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="group">
            <label className="block text-[10px] text-gray-400 mb-1 group-focus-within:text-neon-blue">
              MESSAGE_
            </label>
            <textarea
              rows={3}
              className="w-full bg-black/40 border border-gray-700 p-2 text-neon-blue focus:border-neon-blue focus:outline-none focus:bg-neon-blue/5 transition-all resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full border border-neon-blue p-2 mt-2 flex items-center justify-center gap-2 hover:bg-neon-blue hover:text-black transition-all group font-bold"
          >
            <span>EXECUTE</span>
            <Send
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
