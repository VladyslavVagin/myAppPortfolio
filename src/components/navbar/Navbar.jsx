import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VladVagin Dev
        </motion.span>
        <div className="social">
          <a href="#" target="_blank">
            <img src="/facebook.png" alt="Go to Facebook Page" />
          </a>
          <a href="#" target="_blank">
            <img src="/instagram.png" alt="Go to Instagram Page" />
          </a>
          <a href="#" target="_blank">
            <img src="/youtube.png" alt="Go to Youtube Page" />
          </a>
          <a href="#" target="_blank">
            <img src="/dribbble.png" alt="Go to Dribbble Page" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
