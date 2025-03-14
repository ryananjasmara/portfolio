"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tab from "./__partials__/Tab";
import Resume from "./__partials__/Resume";
import About from "./__partials__/About";
import Portfolio from "./__partials__/Portfolio";
import Blog from "./__partials__/Blog";
import Contact from "./__partials__/Contact";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderMainContent = () => {
    const slideVariants = {
      enter: {
        x: 1000,
        opacity: 0,
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: {
        zIndex: 0,
        x: -1000,
        opacity: 0,
      },
    };

    return (
      <div className="flex flex-col w-full md:w-1/2 p-4 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentTab}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.3 },
              opacity: { duration: 0.2 },
            }}
          >
            {currentTab === "about" && <About />}
            {currentTab === "resume" && <Resume />}
            {currentTab === "portfolio" && <Portfolio />}
            {currentTab === "blog" && <Blog />}
            {currentTab === "contact" && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {renderMainContent()}
    </div>
  );
}
