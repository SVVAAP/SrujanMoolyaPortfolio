import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const GameDeveloper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = document.getElementById("portfolioIframe");
    const handleLoad = () => setLoading(false);
    if (iframe) iframe.addEventListener("load", handleLoad);
    return () => {
      if (iframe) iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-sky-100 py-12 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold text-center mb-6 text-white">Game Developer Portfolio</h2>
        <p className="text-lg text-sky-100 text-center mb-10 max-w-2xl mx-auto">
          Explore my work in game development, including 2D/3D games, interactive experiences, and creative coding projects. I use Unity, C#, and Three.js to build engaging digital worlds.
        </p>
        <div className="relative rounded-2xl overflow-hidden border-2 border-sky-900 shadow-2xl bg-black/80 min-h-[400px]">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/80 z-10">
              <DotLottieReact
                src="https://lottie.host/1ed789b2-ff04-4061-8fed-725c2a850675/uRM8e9uJnO.json"
                loop
                autoplay
                style={{ width: 120, height: 120 }}
              />
            </div>
          )}
          <iframe
            id="portfolioIframe"
            src="https://sen10games.in/SrujanPortfolio.html"
            width="100%"
            height="600px"
            className="block w-full rounded-2xl border-none bg-gray-900"
            style={{ display: loading ? "none" : "block" }}
            title="Srujan Moolya Portfolio"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDeveloper;
