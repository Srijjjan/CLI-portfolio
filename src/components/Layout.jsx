import React from "react";
import ScanlineEffect from "./ScanlineEffect";
import { motion } from "framer-motion";

const Layout = ({ children, sidebar }) => {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-text font-mono overflow-hidden relative selection:bg-neon-blue selection:text-black">
      <ScanlineEffect />

      <div className="relative z-10 flex h-screen w-full gap-0">
        {/* Sidebar - Hidden on mobile, fixed on desktop */}
        <aside className="hidden lg:flex w-[320px] flex-col h-full border-r border-neon-blue/30 pr-0 relative bg-black/80 backdrop-blur-md">
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-50" />
          {sidebar}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-full w-full overflow-hidden relative bg-black/40 box-border">
          <div className="h-full w-full overflow-auto scrollbar-hide p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
