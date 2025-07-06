import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import WebDevResume from "./WebDevResume";
import GameDevResume from "./GameDevResume";
import { motion } from "framer-motion";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("web");
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: activeTab === "web" ? "SrujanWebDevResume" : "SrujanGameDevResume",
    removeAfterPrint: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-sky-100 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl bg-black/80 border border-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none border-2 ${
              activeTab === "web"
                ? "bg-sky-600 text-white border-sky-600 shadow"
                : "bg-gray-900 text-sky-200 border-gray-700 hover:bg-sky-800 hover:text-white"
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Developer Resume
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none border-2 ${
              activeTab === "game"
                ? "bg-sky-600 text-white border-sky-600 shadow"
                : "bg-gray-900 text-sky-200 border-gray-700 hover:bg-sky-800 hover:text-white"
            }`}
            onClick={() => setActiveTab("game")}
          >
            Game Developer Resume
          </button>
        </div>

        {/* Assign ref to div wrapping the printable content */}
        <motion.div
          ref={resumeRef}
          className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {activeTab === "web" ? <WebDevResume /> : <GameDevResume />}
        </motion.div>

        {/* Print Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-all shadow-lg text-lg"
            onClick={handlePrint}
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
}
