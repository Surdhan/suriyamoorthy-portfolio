import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10"
        >
          <p className="text-gray-300 text-lg leading-9">
            I am an Electronics and Communication Engineering graduate with a CGPA
            of 8.79 and a strong foundation in Software Development, Full-Stack
            Web Development, IT Support, Technical Troubleshooting, and Software
            Testing. Currently working as a Junior Information Technology Support
            Specialist, I provide end-user support, Office 365 administration,
            network troubleshooting, remote desktop assistance, system management,
            and technical issue resolution.

            <br />
            <br />

            My technical expertise includes Java, React.js, Node.js, MySQL,
            MongoDB, HTML, CSS, JavaScript, Manual Testing, Git, GitHub, and
            Microsoft 365 administration. Through internships, hackathons,
            award-winning projects, and real-world technical support experience,
            I have developed strong problem-solving, communication, and analytical
            skills.

            <br />
            <br />

            I am passionate about building reliable software solutions,
            optimizing business processes through technology, and helping users
            solve technical challenges. My goal is to contribute to innovative
            software engineering and IT operations projects while continuously
            expanding my technical expertise and professional growth.
          </p>


<div className="grid md:grid-cols-4 gap-6 mt-12">

  <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold text-cyan-400">8.79</h3>
    <p className="text-gray-300 mt-2">CGPA</p>
  </div>

  <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold text-emerald-400">500+</h3>
    <p className="text-gray-300 mt-2">Saplings Planted</p>
  </div>

  <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold text-violet-400">4+</h3>
    <p className="text-gray-300 mt-2">Major Projects</p>
  </div>

  <div className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold text-amber-400">5</h3>
    <p className="text-gray-300 mt-2">Professional Experiences</p>
  </div>

</div>

        </motion.div>
      </div>
    </section>
  )
}

