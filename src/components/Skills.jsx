import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Php-Codeigniter", level: 85 },
   { name: "Angular/ionic", level: 90 },
  { name: "Laravel", level: 80 },
  { name: "Django", level: 85 },
  { name: "MySQL & PostgreSQL", level: 88 },
  { name: "Git & Version Control", level: 90 }


];

const getLevelLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 85) return "Advanced";
  if (level >= 75) return "Proficient";
  return "Intermediate";
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="accent-text">Stack</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card-modern"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="skill-card-content">
                <h5>{skill.name}</h5>
                <span className="skill-level">
                  {getLevelLabel(skill.level)}
                </span>
              </div>

              <div className="skill-glow"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}