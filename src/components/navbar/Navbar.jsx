// @ts-nocheck
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VladVagin Dev
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/vladyslav-vagin-devfrontend?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIGv2PpvLRqGYiL%2FJEE2REA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/LinkedIn.png" alt="Go to LinkedIn Page" />
          </a>
          <a
            href="https://github.com/VladyslavVagin"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-icon.png" alt="Go to GitHub Page" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
