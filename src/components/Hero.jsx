import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden px-6">

      {/* Floating Particles */}
      <div className="particle top-20 left-20"></div>
      <div className="particle top-40 right-40"></div>
      <div className="particle bottom-20 left-1/3"></div>
      <div className="particle bottom-32 right-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-emerald-300 font-medium">
              Available for Opportunities
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            R <span className="gradient-text">Suriyamoorthy</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Software Developer", 2000,
              "IT Support Specialist", 2000,
              "Software Tester", 2000,
              "Technical Support Engineer", 2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl mt-6 text-cyan-300 font-semibold"
          />

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl">
            Electronics and Communication Engineering graduate with practical
            experience in Software Development,Technical Support, Software Testing, Microsoft 365 Administration,
            Network Troubleshooting, and IT Operations. Passionate about
            building reliable technology solutions and continuously expanding
            technical expertise through real-world projects and professional experience.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl">
            <div className="glass p-4 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-cyan-400">8.79</h3>
              <p className="text-sm text-gray-400">CGPA</p>
            </div>

            <div className="glass p-4 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-emerald-400">10+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="glass p-4 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-amber-400">5+</h3>
              <p className="text-sm text-gray-400">Awards</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="
                px-8 py-4 rounded-2xl font-semibold
                bg-gradient-to-r from-cyan-500 to-teal-500
                hover:scale-105
                hover:shadow-lg hover:shadow-cyan-500/30
                transition-all duration-300
              "
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 rounded-2xl font-semibold
                border border-amber-400
                text-amber-300
                hover:bg-amber-400
                hover:text-black
                transition-all duration-300
              "
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Surdhan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 rounded-2xl font-semibold
                border border-slate-500
                text-slate-300
                hover:bg-slate-700
                transition-all duration-300
              "
            >
              GitHub
            </a>

          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 blur-3xl opacity-30"></div>

            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">

                <img
                  src="/profile.png"
                  alt="R Suriyamoorthy"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=R+Suriyamoorthy";
                  }}
                />

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
