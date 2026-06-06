
import {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Contact Me
        </h2>

        <p className="mt-6 text-gray-300 text-lg flex flex-wrap justify-center gap-2">
          <span>Chennai, Tamil Nadu</span>
          <span>|</span>
          <span>+91 9597822100</span>
          <span>|</span>

          <a
            href="mailto:prssuriya2002@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            prssuriya2002@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mt-12 flex-wrap">

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


          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Suriyamoorthy_R/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              px-8 py-4 rounded-2xl font-semibold
              bg-gradient-to-r from-orange-500 to-amber-500
              hover:scale-105
              hover:shadow-lg hover:shadow-orange-500/30
              transition-all duration-300
            "
          >
            <SiLeetcode size={22} />
            LeetCode
          </a>

        
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-3
    px-8 py-4 rounded-2xl font-semibold
    bg-gradient-to-r from-violet-500 to-purple-600
    hover:scale-105
    hover:shadow-lg hover:shadow-violet-500/30
    transition-all duration-300
  "
>
  <FaFilePdf size={20} />
  Resume
</a>



        </div>

        {/* Main CTA Card */}
        <div className="glass mt-20 p-10 md:p-14 rounded-3xl border border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Collaborate on Your Next Project
          </h3>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-8">
            Passionate about Software Development, Full Stack Development,
            IT Support, Software Testing, Technical Operations, and building
            reliable technology solutions that solve real-world business challenges.
          </p>

          {/* Availability Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-emerald-300 font-medium">
              Available for Opportunities
            </span>
          </div>

          {/* Contact Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mt-8">

            <a
              href="mailto:prssuriya2002@gmail.com"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-cyan-500 to-teal-500
                font-semibold
                hover:scale-105
                transition-all duration-300
              "
            >
              <FaEnvelope />
                Send Email
            </a>

            <a
              href="tel:+919597822100"
              className="
                px-6 py-3 rounded-xl
                border border-cyan-500/30
                hover:bg-cyan-500/10
                transition-all duration-300
              "
            >
              <FaPhoneAlt />
              Call Me
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-gray-500">
            © 2026 R Suriyamoorthy. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
