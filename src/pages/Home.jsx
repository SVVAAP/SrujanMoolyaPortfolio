import { motion } from "framer-motion";
import ThreeDBackground from "../components/ThreeDBackground";
import srujanImg from "/srujanmoolya.png";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/svvaap", icon: "fa-github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/srujanmoolya", icon: "fa-linkedin" },
  { name: "Twitter", url: "https://twitter.com/iamsrujanmoolya", icon: "fa-twitter" },
];

const skills = [
  "React", "Three.js", "Tailwind CSS", "Framer Motion", "Unity", "C#", "Firebase", "UI/UX Design"
];

const expertise = [
  {
    title: "Web Development",
    icon: "<svg class='w-8 h-8 text-sky-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M4 4h16v16H4z'/></svg>",
    desc: "Modern, responsive websites and web apps using React, Vite, and the latest tech."
  },
  {
    title: "Game Development",
    icon: "<svg class='w-8 h-8 text-green-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/></svg>",
    desc: "2D/3D games and interactive experiences with Unity, C#, and Three.js."
  },
  {
    title: "UI/UX Design",
    icon: "<svg class='w-8 h-8 text-pink-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='4'/></svg>",
    desc: "Beautiful, user-focused interfaces and smooth digital experiences."
  },
];

const projects = [
  {
    title: "MenuCraft",
    desc: "Digital menu & POS software for restaurants.",
    tech: ["React", "Supabase"],
    img: "https://menucraft.in/assets/menucraft-preview.png",
    link: "https://menucraft.in"
  },
  {
    title: "Ideogram",
    desc: "A platform for sharing and getting AI-generated ideas.",
    tech: ["React", "Firebase"],
    img: "https://ideogram.svvaap.in/preview.png",
    link: "https://ideogram.svvaap.in"
  },
  {
    title: "Jobhunt4u",
    desc: "Job listing platform connecting recruiters and job seekers.",
    tech: ["React", "Firebase"],
    img: "https://jobhunt4u.svvaap.in/preview.png",
    link: "https://jobhunt4u.svvaap.in"
  },
  {
    title: "Shri DeviPrasad Travels",
    desc: "Travel agency website for tour & transport services.",
    tech: ["React", "MySQL"],
    img: "https://shrideviprasadtravels.in/preview.png",
    link: "https://shrideviprasadtravels.in"
  },
  {
    title: "Portfolio Website",
    desc: "My own portfolio, built with React, Three.js, and Tailwind CSS.",
    tech: ["React", "Three.js", "Tailwind CSS"],
    img: "/srujanmoolya.png",
    link: "https://srujanmoolya.svvaap.in"
  }
];

const testimonials = [
  {
    name: "Amit Kumar",
    text: "Srujan is a rare talent who combines technical skill with creative vision. Our project exceeded expectations!",
    role: "CEO, MenuCraft"
  },
  {
    name: "Priya Sharma",
    text: "Working with Srujan was a pleasure. He delivered on time and brought our ideas to life beautifully.",
    role: "Founder, Ideogram"
  }
];

const experience = [
  {
    title: "Web Developer",
    org: "Svvaap Innovations",
    period: "2022 - Present",
    desc: "Developing modern web applications and digital products for startups and businesses."
  },
  {
    title: "Game Developer",
    org: "Freelance",
    period: "2020 - 2022",
    desc: "Designed and built 2D/3D games for indie studios and personal projects."
  }
];

const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    org: "PPC College, Udupi - Mangalore University",
    period: "2024 - 2026"
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    org: "St. Mary's College, Shirva - Mangalore University",
    period: "2021 - 2024"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.img 
            src={srujanImg}
            alt="Srujan Moolya"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-sky-400 shadow-lg mb-6 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Srujan Moolya
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-sky-100 mt-4 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Building digital experiences that inspire.
          </motion.p>
          <motion.div className="flex gap-4 justify-center mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-2xl text-sky-200 hover:text-sky-400 transition-colors">
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </motion.div>
          <motion.a 
            href="#about"
            className="mt-8 px-8 py-3 text-lg font-semibold rounded-lg bg-sky-600 hover:bg-sky-400 transition-all shadow-lg text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Learn More
          </motion.a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-sky-100 mt-4 drop-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I'm a passionate developer and designer with a knack for blending creativity and technology. I specialize in building modern web apps, immersive games, and beautiful user interfaces. My mission: deliver high-quality, impactful digital products that users love.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {skills.map(skill => (
              <span key={skill} className="bg-sky-900/80 text-sky-100 px-4 py-2 rounded-full text-sm font-semibold shadow-md border border-sky-700">
                {skill}
              </span>
            ))}
          </div>
          <a href="/resume" className="inline-block mt-8 px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow transition-all">Download Resume</a>
        </section>

        {/* Expertise Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <motion.h2 className="text-5xl font-bold text-center mb-12 text-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <motion.div key={item.title} className="bg-black/70 rounded-xl p-8 shadow-lg text-center border border-gray-700 flex flex-col items-center" whileHover={{ scale: 1.05, y: -8 }} transition={{ duration: 0.3 }}>
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="text-2xl font-bold mt-4 mb-2 text-sky-200">{item.title}</h3>
                <p className="text-sky-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-20 bg-gray-900/90 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-5xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map(project => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-black/70 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.04, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img src={project.img} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-sky-100 mb-2">{project.title}</h3>
                    <p className="text-sky-200 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="bg-sky-900/80 text-sky-100 px-3 py-1 rounded-full text-xs font-semibold border border-sky-700">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <motion.h2 className="text-5xl font-bold mb-12 text-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(t => (
              <motion.div key={t.name} className="bg-black/70 rounded-xl p-8 shadow-lg border border-gray-700" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <p className="text-lg text-sky-100 italic mb-4">"{t.text}"</p>
                <div className="font-bold text-sky-300">{t.name}</div>
                <div className="text-sky-400 text-sm">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <motion.h2 className="text-5xl font-bold text-center mb-12 text-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Experience & Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-sky-200 mb-4">Experience</h3>
              <ul className="space-y-6">
                {experience.map(exp => (
                  <li key={exp.title} className="bg-black/70 rounded-lg p-6 border border-gray-700 shadow">
                    <div className="font-bold text-lg text-white">{exp.title}</div>
                    <div className="text-sky-400">{exp.org}</div>
                    <div className="text-sky-300 text-sm mb-2">{exp.period}</div>
                    <div className="text-sky-100">{exp.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-200 mb-4">Education</h3>
              <ul className="space-y-6">
                {education.map(edu => (
                  <li key={edu.degree} className="bg-black/70 rounded-lg p-6 border border-gray-700 shadow">
                    <div className="font-bold text-lg text-white">{edu.degree}</div>
                    <div className="text-sky-400">{edu.org}</div>
                    <div className="text-sky-300 text-sm">{edu.period}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 max-w-2xl mx-auto text-center">
          <motion.h2 className="text-5xl font-bold mb-8 text-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Contact Me
          </motion.h2>
          <motion.p className="text-lg text-sky-100 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            Interested in working together or have a question? Reach out and I'll get back to you soon!
          </motion.p>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-sky-100 border border-gray-700 focus:outline-none focus:border-sky-400" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-sky-100 border border-gray-700 focus:outline-none focus:border-sky-400" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-900 text-sky-100 border border-gray-700 focus:outline-none focus:border-sky-400" />
            <button type="submit" className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-400 text-white font-bold text-lg transition-all">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-sky-400 text-sm bg-black/90 border-t border-gray-800">
          <div className="flex justify-center gap-4 mb-2">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-xl text-sky-400 hover:text-sky-200 transition-colors">
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <div>&copy; {new Date().getFullYear()} Srujan Moolya. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
