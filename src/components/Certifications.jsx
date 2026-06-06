export default function Certifications() {
  const items = [
    {
      title: "Full Stack Development Certification",
      description: "Amizhth Techno Solutions • 2025",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "GATE Score",
      description: "Score: 17.89 • May 2024",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Naukri Young Turks",
      description: "Score: 94.05 • Oct 2024",
      color: "from-sky-500 to-cyan-600",
    },
    {
      title: "Innovate Tamil Nadu",
      description: "State Level 2nd Prize • Mar 2024",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "IDEATHON (MEPCO ACIC)",
      description: "2nd Prize • Feb 2024",
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "Hackathon Workshop Host",
      description:
        "Conducted sessions on Hackathons, Problem Solving & Project Pitching • Nov 2024",
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      title: "Cognizant Community Award",
      description: "State Level First Prize • Sept 2023",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Vortex '23 (NIT Trichy)",
      description: "2nd Prize - Poster Presentation • Mar 2023",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Python Diploma Certification",
      description: "GAT, Madurai • 2022",
      color: "from-violet-500 to-purple-600",
    },
  ]

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Certifications & Achievements
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
          Professional certifications, competitive achievements, academic
          recognitions, and leadership contributions demonstrating continuous
          learning and technical excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                glass
                rounded-3xl
                border
                border-white/10
                hover:border-cyan-400/30
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-500
              "
            >
              {/* Top Gradient Line */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${item.color}`}
              />

              <div className="p-8">
                {/* Achievement Number */}
                <div
                  className={`
                    w-12 h-12 rounded-2xl
                    bg-gradient-to-r ${item.color}
                    flex items-center justify-center
                    text-white font-bold text-lg
                    mb-6
                    group-hover:scale-110
                    transition-all duration-300
                  `}
                >
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-white leading-8">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                  {item.description}
                </p>

                <div
                  className={`
                    mt-6 h-1 rounded-full
                    bg-gradient-to-r ${item.color}
                    opacity-70
                  `}
                />
              </div>

              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-gradient-to-br
                  from-white/[0.02]
                  to-transparent
                  pointer-events-none
                "
              />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-cyan-400">9+</h3>
            <p className="text-gray-300 mt-2">Achievements</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-emerald-400">5+</h3>
            <p className="text-gray-300 mt-2">Awards Won</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-violet-400">2022</h3>
            <p className="text-gray-300 mt-2">Learning Journey Started</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-amber-400">2025</h3>
            <p className="text-gray-300 mt-2">Latest Certification</p>
          </div>
        </div>
      </div>
    </section>
  )
}