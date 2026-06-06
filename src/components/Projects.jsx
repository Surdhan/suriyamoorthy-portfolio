import { motion } from "framer-motion";

const projects = [
  {
    title: "Bike Taxi Path Finder",
    description:
      "Real-time route optimization system developed using Java Socket Programming to improve communication efficiency between client and server modules.",
    tech: ["Java", "Socket Programming", "Client-Server"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "🚖",
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "Pettikadai Food Delivery",
    description:
      "Full-stack food delivery platform built using React, Node.js, Express, and MongoDB with authentication and dynamic product management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-emerald-500 to-green-600",
    icon: "🍔",
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "Speech-Enabled Explorer",
    description:
      "AI-powered accessibility solution using OCR and speech recognition to assist visually impaired users with navigation and interaction.",
    tech: ["OCR", "AI", "Speech Recognition"],
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "🎤",
    status: "Hackathon Project",
    github: "#",
    live: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern responsive portfolio showcasing projects, skills, achievements, and professional experience using React and JavaScript.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    gradient: "from-orange-500 to-amber-500",
    icon: "💻",
    status: "Live Project",
    github: "https://github.com/Surdhan",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="
                group relative overflow-hidden
                glass rounded-3xl
                border border-white/10
                hover:border-cyan-400/30
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all duration-500
              "
            >
              {/* Project Header */}
              <div
                className={`relative h-56 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}
              >
                <span className="absolute top-4 left-5 text-white/70 font-bold text-lg">
                  #{String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-6xl mb-4">
                  {project.icon}
                </span>

                <h3 className="text-3xl font-bold text-white text-center px-6">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">

                <span
                  className={`
                    inline-block px-4 py-2 rounded-full text-sm font-medium
                    bg-gradient-to-r ${project.gradient}
                  `}
                >
                  {project.status}
                </span>

                <p className="text-gray-300 leading-7 mt-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1
                        rounded-full
                        bg-white/10
                        border border-white/10
                        text-sm text-cyan-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-3 rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-teal-500
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    View Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-3 rounded-xl
                      border border-amber-400
                      text-amber-300
                      hover:bg-amber-400
                      hover:text-black
                      transition-all duration-300
                    "
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}