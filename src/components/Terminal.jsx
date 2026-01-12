import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Database, Globe } from "lucide-react";

const projects = [
  {
    name: "History in Motion",
    description: "history in motion",
    link: "https://motion-h.vercel.app/",
  },
  {
    name: "Smooth 3D Landing Page",
    description: "smooth 3d landing page",
    link: "https://gs-r3f.vercel.app/",
  },
  {
    name: "Nexo",
    description: "nexo",
    link: "https://nexo-orpin.vercel.app/",
  },
  {
    name: "Sanu Solar",
    description: "sanu solar",
    link: "https://sanusolar-six.vercel.app/",
  },
  {
    name: "Experience",
    description: "experience",
    link: "https://srijjan-experience.vercel.app/",
  },
];

const bioParagraphs = [
  "MERN Stack Developer, Three.js Developer, and 3D Environment Artist with 3+ years of experience, currently working as a Full-Stack Developer at Glinthawk Technologies.",
  "I specialize in building high-performance, scalable, and visually immersive web applications that merge engineering with real-time 3D.",
  "On the Development side, I architect full-stack systems using React, Node.js, TypeScript, JavaScript (ES6+), Express, MongoDB, and REST APIs. I build clean, modular, and enterprise-grade codebases following SOLID principles, advanced state management (Redux, RTK, Zustand), and optimized frontend setups using Vite, Webpack, TailwindCSS, Shadcn, Bootstrap and modern component patterns.",
  "I implement secure backend flows using JWT, AES encryption, Zod validation, parsers, role-based auth, and seamless third-party API integrations.",
];

const TypingText = ({ text, onComplete, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
      } else {
        clearInterval(timer);
        setIsComplete(true);
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse inline-block w-2 h-4 bg-neon-blue ml-1 align-middle">
          _
        </span>
      )}
    </span>
  );
};

const Terminal = () => {
  const [stage, setStage] = useState(0); // 0: Start, 1: Typing Intro, 2: Bio Step 1...
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showLastProjectPopup, setShowLastProjectPopup] = useState(false);
  const bottomRef = useRef(null);

  // Initial boot sequence
  const bootText = `> INITIALIZING SYSTEM...
> LOADING KERNEL... [OK]
> TARGET: SRIJAN_VERMA
> EXECUTING ./start.sh`;

  useEffect(() => {
    if (stage === 0) {
      setIsTyping(true);
    }
  }, [stage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping]);

  const handleIntroComplete = () => {
    setIsTyping(false);
    // Automatically move to first bio block
    setTimeout(() => setStage(1), 500);
  };

  const handleNext = () => {
    setStage((prev) => prev + 1);
    setIsTyping(true);
  };

  const buttonLabels = ["Next", "Ok", "Go on", "View Projects"];

  return (
    <div className="w-full min-h-full font-mono text-sm md:text-base leading-relaxed p-4 md:p-10 pb-20 relative">
      <AnimatePresence>
        {showLastProjectPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLastProjectPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-neon-blue p-8 max-w-md w-full shadow-[0_0_30px_rgba(0,255,255,0.2)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLastProjectPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-white"
              >
                [X]
              </button>
              <div className="text-neon-blue font-bold mb-4 text-xl glitch-text">
                SYSTEM MESSAGE
              </div>
              <p className="text-gray-300 font-mono mb-6 leading-relaxed">
                [there r more project but latest r not listed here]
              </p>
              <button
                onClick={() => setShowLastProjectPopup(false)}
                className="w-full border border-neon-blue text-neon-blue py-2 hover:bg-neon-blue hover:text-black transition-colors font-bold tracking-wider"
              >
                ACKNOWLEDGE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Boot Sequence */}
      <div className="mb-8 text-terminal-text/80">
        <TypingText
          text={bootText}
          onComplete={handleIntroComplete}
          speed={20}
        />
      </div>

      {/* Header (Always Visible after intro) */}
      {stage >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 border-l-4 border-neon-blue pl-6 py-2"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-2 text-white glitch-text">
            SRIJAN VERMA
          </h1>
          <p className="text-neon-blue font-bold tracking-[0.2em]">
            MERN Stack | Three.js Developer
          </p>
        </motion.div>
      )}

      {/* Dynamic Bio History */}
      <div className="space-y-6">
        {bioParagraphs.map((paragraph, index) => {
          // Only show paragraphs up to current stage-1
          // stage 1 = ready for para 0? No, let's map stage to index.
          // stage 1 -> show para 0.
          if (stage < index + 1) return null;

          const isCurrent = stage === index + 1;

          return (
            <div key={index} className="flex flex-col gap-2">
              {/* User Prompt Simulation */}
              <div className="text-gray-500 text-xs mb-1 font-bold">
                guest@srijan:~/bio_part_{index + 1}$
              </div>

              <div className="text-gray-200">
                {isCurrent ? (
                  <TypingText
                    text={paragraph}
                    onComplete={() => setIsTyping(false)}
                    speed={25}
                  />
                ) : (
                  <span>{paragraph}</span>
                )}
              </div>

              {/* Step Button */}
              {isCurrent && !isTyping && (
                <button
                  onClick={handleNext}
                  className="mt-2 text-xs border border-neon-blue/50 text-neon-blue px-4 py-1 self-start hover:bg-neon-blue hover:text-black transition-colors flex items-center gap-2"
                >
                  [ {buttonLabels[index] || "CONTINUE"} ]
                  <span className="animate-pulse w-2 h-2 bg-neon-blue rounded-full"></span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Projects (Revealed after all bio is done) */}
      {stage > bioParagraphs.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 space-y-8"
        >
          {projects.map((project, idx) => {
            // Determine if this project should be visible
            // Bio ends at stage = bioParagraphs.length (shows all bios)
            // Next click makes stage = bioParagraphs.length + 1 -> Show Project 0
            const projectStartStage = bioParagraphs.length + 1 + idx;
            if (stage < projectStartStage) return null;

            const isLast = idx === projects.length - 1;
            const isCurrent = stage === projectStartStage;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border-t border-dashed border-gray-700 pt-8"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      <span className="text-gray-500 mr-2">[Project]</span>
                      <span className="border-b border-gray-600">
                        {project.name}
                      </span>
                    </h3>
                    <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Visual Placeholder for Thumbnail (as per design) */}
                  <div className="hidden md:flex w-48 h-24 bg-gray-900 border border-gray-800 items-center justify-center text-xs text-gray-600">
                    [ PREVIEW ]
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:underline text-sm"
                  >
                    OPEN LINK
                  </a>

                  {/* NEXT Button - Show for all current projects including last */}
                  {isCurrent && (
                    <button
                      onClick={() => {
                        if (isLast) {
                          setShowLastProjectPopup(true);
                        } else {
                          handleNext();
                        }
                      }}
                      className="bg-gray-300 hover:bg-white text-black font-bold px-4 py-1 text-sm flex items-center gap-2"
                    >
                      NEXT <span className="text-[10px]">&gt;</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Footer - Only show after last project AND user has 'seen' it (maybe keep it always after last project but obscured? or logic same as before) 
             Wait, if we show popup on Next, we probably want the footer to be visible immediately when last project is shown? 
             Original logic: stage > bioParagraphs.length + projects.length - 1 
             This logic triggers when Last Project is 'Current'. 
             If we want footer to appear AFTER we "click next" on the last project... well, "next" on last now opens popup.
             So footer should probably be visible ALONG with the last project, or maybe after we close the popup?
             The original code showed footer when `stage > bioParagraphs.length + projects.length - 1`
             which means when the loop index reaches the last item (idx = projects.length - 1), 
             projectStartStage = bioP.len + 1 + (proj.len - 1) = bioP.len + proj.len.
             Current stage logic: If we are AT the last project, stage is bioP.len + proj.len.
             So the condition `stage > bioP.len + proj.len - 1` is TRUE when we are at the last project.
             So the Footer is ALREADY visible when we reach the last project. 
             This is likely fine/intent.
          */}
          {stage > bioParagraphs.length + projects.length - 1 && (
            <div className="pt-12 text-center text-gray-600 text-xs border-t border-dashed border-gray-800 mt-12">
              <p>END OF LINE_</p>
              <p className="mt-2">© 2024 SRIJAN VERMA. ALL RIGHTS RESERVED.</p>
            </div>
          )}
        </motion.div>
      )}

      <div ref={bottomRef} className="pb-12" />
    </div>
  );
};

export default Terminal;
