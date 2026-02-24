import { motion } from "framer-motion";

const projects = [
  {
    title: "Gokijany Climate Platform",
    description:
    "A climate intelligence platform delivering actionable insights for sustainable and data-driven decision-making.",
    tech: "React · Node.js · CSS",
    github: "#",
    live: "https://www.gokijany.electrixitaty.com/",
  },
  {
    title: "Ruai Sacco Mobile App",
    description:
      "Mobile financial platform enabling deposits, withdrawals and loan management for Sacco members.",
    tech: "Angular · Ionic",
    github: "#",
    live: "#",
  },
 
  {
    title: "Kentours Sacco App",
    description:
      "Mobile-first financial services application supporting secure member transactions and loan processing.",
    tech: "Angular · Ionic",
    github: "#",
    live: "#",
  },
  {
    title: "PCEA Enchoro Enmuny",
    description:
      "Integrated E-learning system delivering modular digital education infrastructure.",
    tech: "PHP · CodeIgniter",
    github: "#",
    live: "#",
  },
  {
    title: "AI-Powered Retail POS",
    description:
      "AI-powered retail point-of-sale system built for intelligent analytics and modern commerce workflows.",
    tech: "React · Django",
    github: "#",
    live: "#",
  },
  {
    title: "AI Support Chatbot",
    description:
      "Intelligent customer support chatbot delivering automated, real-time assistance using AI integrations.",
    tech: "Laravel · Botman · OpenAI",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Selected <span className="accent-text">Work</span>
        </motion.h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >

              <div className="project-content">

                <h5>{project.title}</h5>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <div className="project-links">
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}