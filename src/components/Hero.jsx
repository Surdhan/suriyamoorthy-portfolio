import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const profileImg = `${import.meta.env.BASE_URL}profile.png`;
const resumePDF = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-16">

      {/* Floating Particles */}
      <div className="particle top-20 left-20"></div>
      <div className="particle top-40 right-40"></div>
      <div className="particle bottom-20 left-1/3"></div>
      <div className="particle bottom-32 right-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-emerald-300 font-medium">
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            R{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              Suriyamoorthy
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "IT Support Specialist",
              2000,
              "Software Tester",
              2000,
              "Technical Support Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl mt-6 text-cyan-300 font-semibold"
          />

          {/* Description */}
          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl">
            Electronics and Communication Engineering graduate with practical
            experience in Software Development, Technical Support,
            Software Testing, Microsoft 365 Administration,
            Network Troubleshooting, and IT Operations.
            Passionate about building reliable technology solutions
            and continuously expanding technical expertise through
            real-world projects and professional experience.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-5 mt-10 max-w-xl">

            <div className="glass p-5 rounded-2xl text-center border border-cyan-500/10">
              <h3 className="text-3xl font-bold text-cyan-400">8.79</h3>
              <p className="text-sm text-gray-400 mt-1">CGPA</p>
            </div>

            <div className="glass p-5 rounded-2xl text-center border border-emerald-500/10">
              <h3 className="text-3xl font-bold text-emerald-400">10+</h3>
              <p className="text-sm text-gray-400 mt-1">Projects</p>
            </div>

            <div className="glass p-5 rounded-2xl text-center border border-amber-500/10">
              <h3 className="text-3xl font-bold text-amber-400">5+</h3>
              <p className="text-sm text-gray-400 mt-1">Awards</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

            {/* Contact */}
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

            {/* Resume */}
           <a
  href={resumePDF}
  download="R_Suriyamoorthy_Resume.pdf"
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

            {/* GitHub */}
            <a
              href="https://github.com/Surdhan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-8 py-4 rounded-2xl font-semibold
                bg-gradient-to-r from-slate-700 to-slate-900
                hover:scale-105
                hover:shadow-lg hover:shadow-slate-500/30
                transition-all duration-300
              "
            >
              <FaGithub size={22} />
              GitHub
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~015cd095fa7de05e49?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-8 py-4 rounded-2xl font-semibold
                bg-gradient-to-r from-green-500 to-emerald-600
                hover:scale-105
                hover:shadow-lg hover:shadow-green-500/30
                transition-all duration-300
              "
            >
              <span className="text-xl font-bold">U</span>
              Upwork
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/suriyamoorthy-rameshkavitha-63b646237/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-8 py-4 rounded-2xl font-semibold
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:scale-105
                hover:shadow-lg hover:shadow-blue-500/30
                transition-all duration-300
              "
            >
              <FaLinkedin size={22} />
              LinkedIn
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 blur-3xl opacity-30"></div>

            {/* Border */}
            <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500 p-1 shadow-2xl">

              {/* Image */}
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">

               <img
  src={profileImg}
  alt="R Suriyamoorthy"
  className="w-full h-full object-cover rounded-full"
  onError={(e) => {
    console.log("Failed image path:", profileImg);
    e.currentTarget.src =
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

