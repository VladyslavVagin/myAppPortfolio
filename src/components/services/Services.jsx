/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
   <ul>
    <li>
      <img src="/stack/html5.png" alt="HTML5"/>
      <p>HTML5</p>
    </li>
    <li>
      <img src="/stack/social.png" alt="CSS3"/>
      <p>CSS3</p>
    </li>
    <li>
      <img src="/stack/js.png" alt="Javascript"/>
      <p>JavaScript</p>
    </li>
    <li>
      <img src="/stack/physics.png" alt="React"/>
      <p>React.js</p>
    </li>
    <li>
    <img src="/stack/redux.svg" alt="Redux"/>
      <p>Redux</p>
    </li>
    <li>
    <img src="/stack/nextjs.svg" alt="Next.js" style={{backgroundColor: "white", borderRadius: "50%"}}/>
      <p>Next.js</p>
    </li>
    <li>
    <img src="/stack/file-type-scss2.svg" alt="SCSS"/>
      <p>SCSS</p>
    </li>
    <li>
    <img src="/stack/node-js.svg" alt="Node.js"/>
      <p>Node.js</p>
    </li>
    <li>
    <img src="/stack/file-type-mongo.svg" alt="Mongo DB"/>
      <p>Mongo DB</p>
    </li>
   </ul>
    </motion.div>
  );
};

export default Services;
