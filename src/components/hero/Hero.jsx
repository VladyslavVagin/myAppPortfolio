// @ts-nocheck
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat:Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>VLADYSLAV VAGIN</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button type="button" variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button type="button" variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            src="/scroll.png"
            alt="Computer's mouse SVG"
            variants={textVariants}
          />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Photo of Vladyslav Web Developer" />
      </div>
    </div>
  );
};

export default Hero;
