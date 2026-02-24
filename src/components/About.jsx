import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <motion.div
          className="about-wrapper"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="about-content">
            <h2 className="section-title">
              About <span className="accent-text">Me</span>
            </h2>

            <p className="about-description">
              I am a results-driven Software Engineer focused on building 
              scalable AI-powered platforms, fintech systems, and 
              enterprise-grade applications.
            </p>

            <p className="about-description">
              My approach combines performance optimization, clean architecture,
              and business-oriented thinking to deliver measurable impact.
            </p>

            <motion.a
              href="/Mutisya_Joshua_Musembi_Resume.pdf"
              download
              className="btn-premium about-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Download My CV
            </motion.a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}