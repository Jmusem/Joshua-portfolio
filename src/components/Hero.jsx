import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">

          {/* TEXT SIDE */}
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Hi, I'm{" "}
              <span className="hero-name">
                Joshua Musembi
              </span>
            </motion.h1>

            <div className="typing-container">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Modern Software solutions",

                  "Startup Builder"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </div>

           <motion.div
  className="hero-cta"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>
  <motion.a
    href="#projects"
    className="btn-premium"
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.97 }}
  >
    View My Work
    <span className="arrow">→</span>
  </motion.a>
</motion.div>
          </div>

          {/* IMAGE SIDE */}
          <div className="hero-image-wrapper">

            {/* Soft radial glow background */}
            <div className="image-glow-bg"></div>

            {/* Elegant thread */}
            <motion.div
              className="glow-thread"
              animate={{ height: ["0%", "80%"] }}
              transition={{ duration: 1.2 }}
            />

            {/* Floating Image */}
            <motion.img
              src={profilePic}
              alt="Joshua Musembi"
              className="hero-image"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}