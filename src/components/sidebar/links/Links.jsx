import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { straggerChildren: 0.6 },
  },
  closed: {
    transition: { straggerChildren: 0.05, straggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {delay: 0.4}
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {delay: 0.4}
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
