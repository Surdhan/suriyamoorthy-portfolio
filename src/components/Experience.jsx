import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Increplus Technologies",
      role: "Junior Information Technology Support Specialist",
      period: "Jan 2026 – Present",
      color: "from-cyan-500 to-teal-500",
      description:
        "Providing end-user technical support, Microsoft 365 administration, Windows troubleshooting, remote desktop assistance, user account management, ticket resolution, IIS administration, network diagnostics, asset coordination, and infrastructure support while ensuring timely incident resolution and service continuity.",
      skills: ["Microsoft 365", "Windows", "Networking", "IIS", "Technical Support"],
    },

    {
      company: "BSH Home Appliances Group",
      role: "Logistics Intern",
      period: "Mar 2025 – Jul 2025",
      color: "from-blue-500 to-cyan-500",
      description:
        "Supported logistics operations, customs documentation, vendor payment processing, warehouse audit activities, inventory coordination, and Lean process improvement initiatives. Collaborated with cross-functional teams to improve operational efficiency and ensure smooth logistics workflows.",
      skills: ["Logistics", "Warehouse Operations", "Vendor Management", "Auditing", "Lean Process"],
    },

    {
      company: "Simpery Pvt Ltd",
      role: "Full Stack Developer Intern",
      period: "Jan 2025 – Mar 2025",
      color: "from-emerald-500 to-green-500",
      description:
        "Developed responsive user interfaces using React.js, collaborated with development teams, implemented frontend features, and improved application usability and user experience across web applications.",
      skills: ["React.js", "JavaScript", "Frontend", "UI Development", "Git"],
    },

    {
      company: "ACIC Kalasalingam Innovation Foundation",
      role: "Project Development Intern",
      period: "2024",
      color: "from-violet-500 to-fuchsia-500",
      description:
        "Worked on OCR-based AI projects using Python and Raspbian. Contributed to model development, testing, image processing, system validation, and project implementation activities.",
      skills: ["Python", "OCR", "AI", "Raspbian", "Testing"],
    },

    {
      company: "Real Sports AI",
      role: "Machine Learning Intern",
      period: "2023",
      color: "from-amber-500 to-orange-500",
      description:
        "Assisted in machine learning model training, data preparation, testing workflows, and AI solution development while gaining hands-on experience in real-world ML applications.",
      skills: ["Machine Learning", "Data Processing", "Model Training", "Testing", "Analytics"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500/5 blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
        >
          Professional Experience
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
          Professional experience across IT Support, Full Stack Development,
          Logistics Operations, Artificial Intelligence, and Machine Learning projects.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-300 mt-2">Professional Roles</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-emerald-400">1</h3>
            <p className="text-gray-300 mt-2">Current Position</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-violet-400">10+</h3>
            <p className="text-gray-300 mt-2">Technologies Used</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-amber-400">2023</h3>
            <p className="text-gray-300 mt-2">Career Journey Started</p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-teal-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute -left-[7px] top-10 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}
                />

                {/* Experience Card */}
                <div
                  className="
                    glass rounded-3xl p-8 md:ml-8
                    border border-white/10
                    hover:border-cyan-400/30
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:shadow-cyan-500/10
                    transition-all duration-500
                    overflow-hidden
                    relative
                  "
                >
                  {/* Top Gradient Line */}
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${exp.color}`}
                  />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-cyan-400 font-medium mt-2">
                        {exp.company}
                      </p>
                    </div>

                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-6 text-gray-300 leading-8">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3 py-1 text-sm
                          rounded-full
                          bg-cyan-500/10
                          border border-cyan-500/20
                          text-cyan-300
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
      </div>
    </section>
  );
}
