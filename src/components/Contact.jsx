import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            Let’s <span className="accent-text">Build Something Great</span>
          </h2>

          <p className="contact-subtext">
            I’m open to software developer roles, AI projects, fintech systems,
            and scalable product development opportunities.
          </p>

          <div className="contact-info">
            <div>
              <span className="contact-label">Email</span>
              <p>joshuamusembi499@gmail.com</p>
            </div>

            <div>
              <span className="contact-label">Phone</span>
              <p>0714 509 575</p>
            </div>
          </div>

          <motion.a
            href="mailto:joshuamusembi499@gmail.com"
            className="btn-premium contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}