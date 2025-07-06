import React from "react";
import { motion } from "framer-motion";

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/svvaap",
    icon: "fa-github",
    handle: "@svvaap",
    color: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srujanmoolya",
    icon: "fa-linkedin",
    handle: "@srujanmoolya",
    color: "bg-blue-700",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yourusername",
    icon: "fa-instagram",
    handle: "@yourusername",
    color: "bg-pink-600",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "fa-twitter",
    handle: "@yourusername",
    color: "bg-blue-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/yourusername",
    icon: "fa-facebook",
    handle: "@yourusername",
    color: "bg-blue-900",
  },
];

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-sky-100 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Connect with Me</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {socialMediaLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center rounded-2xl p-8 shadow-lg border border-gray-800 group transition-all ${social.color} hover:scale-105 hover:shadow-2xl`}
              whileHover={{ y: -8, scale: 1.07 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mb-4">
                <i className={`fab ${social.icon} text-5xl md:text-6xl group-hover:text-sky-400 transition-colors`} />
              </span>
              <span className="text-xl font-bold text-white mb-1">{social.name}</span>
              <span className="text-sky-200 text-sm mb-2">{social.handle}</span>
              <span className="text-sky-400 font-semibold underline mt-2">Visit</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
