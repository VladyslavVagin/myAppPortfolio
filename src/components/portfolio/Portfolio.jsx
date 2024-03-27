// @ts-nocheck
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Drink Master",
    img: "/portfolio/DrinkMaster_Desktop.jpg",
    desc: "Application for add and create Cocktails' or Drinks' Recipes. User should login first by confirming email. Then he can change name, avatar or dark/light theme (by default dark). On home page shows the latest drinks from each categories of drinks, on page Drinks user can find some drink or cocktail by using filters. On page Add drink user can create his own cocktail or drink, and look on 4 most popular drinks which all users added to Favorites. Also have pages with own cocktails and cocktails which user was added to Favorites.",
  },
  {
    id: 2,
    title: "DrukArmy",
    img: "/portfolio/ДрукАрмія.jpg",
    desc: "The frontend part for the volunteer project PrintArmy, which is involved in 3D printing products for Ukrainian military personnel and medics, manages the ordering and delivery process of products to customers.",
  },
  {
    id: 3,
    title: "BookShelf",
    img: "/portfolio/bookshelf_linkedn.jpg",
    desc: "Web application of Book Library. For posibility add/remove books from Favourites user should Sign Up first. Application based on API requests. Mobile First approach, adaptive/responsive design, using Firebase Authentification.",
  },
  {
    id: 4,
    title: "Focus-Frame",
    img: "/portfolio/focus-frame_linkedn.jpg",
    desc: "Landing-page website for school of photography. Using Mobile First, responsive/adaptive user interface, optimized for most types of screens and animation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
