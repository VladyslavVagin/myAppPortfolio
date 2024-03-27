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
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{color: "orange"}}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: "orange"}}>For Your</motion.b>Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            laborum laboriosam quod facilis fugit sint. Quae voluptatum ratione
            alias, tenetur nam iure reprehenderit esse veritatis culpa
            consequuntur aperiam vero, voluptates sequi? Veritatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            laborum laboriosam quod facilis fugit sint. Quae voluptatum ratione
            alias, tenetur nam iure reprehenderit esse veritatis culpa
            consequuntur aperiam vero, voluptates sequi? Veritatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            laborum laboriosam quod facilis fugit sint. Quae voluptatum ratione
            alias, tenetur nam iure reprehenderit esse veritatis culpa
            consequuntur aperiam vero, voluptates sequi? Veritatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            laborum laboriosam quod facilis fugit sint. Quae voluptatum ratione
            alias, tenetur nam iure reprehenderit esse veritatis culpa
            consequuntur aperiam vero, voluptates sequi? Veritatis?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
