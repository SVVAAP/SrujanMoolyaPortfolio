import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Jobhunt4u",
    description: "A job listing platform to connect recruiters and job seekers.",
    techStack: ["React", "Vite", "Firebase", "Tailwind CSS"],
    github: "https://github.com/svvaap/jobhunt4u",
    liveDemo: "https://jobhunt4u.svvaap.in",
  },
  {
    title: "MenuCraft",
    description: "A digital menu and POS solution for restaurants.",
    techStack: ["Lovable AI", "React", "Supabase"],
    github: "https://github.com/svvaap/menucraft",
    liveDemo: "https://menucraft.in",
  },
  {
    title: "Shri DeviPrasad Travels",
    description: "A travel agency website for tour & transport services.",
    techStack: ["React", "MySQL", "cPanel Hosting"],
    github: "#",
    liveDemo: "https://shrideviprasadtravels.in",
  },
  {
    title: "Ideogram",
    description: "A platform where users can share and explore creative ideas.",
    techStack: ["React", "Firebase"],
    github: "https://github.com/svvaap/ideogram",
    liveDemo: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-sky-100 py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all group"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-sky-200 mb-2">{project.title}</h3>
              <p className="text-sky-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-sky-900/80 text-sky-100 px-3 py-1 rounded-full text-xs font-semibold border border-sky-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-200 font-semibold underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-200 font-semibold underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
