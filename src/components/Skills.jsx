import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    color: "from-cyan-500 to-blue-600",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    color: "from-emerald-500 to-green-600",
    icon: "🎨",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Database",
    color: "from-violet-500 to-purple-600",
    icon: "🗄️",
    skills: ["Node.js","MySQL", "MongoDB", "SQL"],
  },
  {
    title: "IT Support & Networking",
    color: "from-amber-500 to-orange-600",
    icon: "🌐",
    skills: [
      "Microsoft 365",
      "Windows Administration",
      "IP",
      "DNS",
      "HTTP/HTTPS",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Testing & Quality",
    color: "from-pink-500 to-rose-600",
    icon: "🧪",
    skills: [
      "Manual Testing",
      "SDLC",
      "STLC",
      "Test Case Design",
      "Smoke Testing",
      "Regression Testing",
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-teal-500 to-cyan-600",
    icon: "⚙️",
    skills: [
      "Git",
      "GitHub",
      "Jenkins",
      "Maven",
      "IntelliJ IDEA",
      "Eclipse",
      "Google Colab",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 gradient-text">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                group relative glass rounded-3xl
                border border-white/10
                hover:border-cyan-400/30
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />

              <div className="p-8">

                {/* Title */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-gray-300
                        hover:text-white
                        hover:border-cyan-400/30
                        hover:bg-white/10
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}