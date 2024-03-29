// @ts-nocheck
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Drink Master",
    img: "/portfolio/DrinkMaster.jpg",
    link: "https://andriiskliar.github.io/drink-code-frontend/",
    desc: "Team Project. Created on Node.js, React and MongoDB. Application for create own drinks and cocktails. My section: Header, Popular drinks, Switcher, React Routes, Modals for User Menu, Mobile Menu, Change avatar and name of user. Backend: create routes for update user and get popular drinks.",
  },
  {
    id: 2,
    title: "DrukArmy",
    img: "/portfolio/DrukArmiya.jpg",
    link: "https://druk-army-project-woad.vercel.app/",
    desc: "Project created on Next.js. The frontend part for the volunteer project PrintArmy, which is involved in 3D printing products for Ukrainian military personnel and medics, manages the ordering and delivery process of products to customers. My sections: Header, Footer, Main page, Terms, 404 Page, switcher, i18n multilanguage, mobile menu and modals for video and createdBy.",
  },
  {
    id: 3,
    title: "BookShelf",
    img: "/portfolio/bookshelf-2.jpg",
    link: "https://vladyslavvagin.github.io/BookShelf_Team_Project/",
    desc: "Team Project. Web application of Book Library. Created on JavaScript and Vite bundler, based on API requests. For authentification use Firebase. My section: Bestsellers Books page, Categories, Authentification, Switcher, Pagination, Deleting books from Favorites.",
  },
  {
    id: 4,
    title: "Focus-Frame",
    img: "/portfolio/focus-frame.jpg",
    link: "https://vladyslavvagin.github.io/Team-project/",
    desc: "Team project. Landing page for school of photography. Created with HTML5, CSS3 and JavaScript (for animation). My section: Hero, Advertisment, Mobile menu, About Us.",
  },
  {
    id: 5,
    title: "Phonebook",
    img: "/portfolio/Phonebook.jpg",
    link: "https://vladyslavvagin.github.io/goit-react-hw-08-phonebook/",
    desc: "Individual project crteated on React.js with Redux Toolkit. Phonebook App for create and save contacts with",
  },
  {
    id: 6,
    title: "Pixabay Gallery",
    img: "/portfolio/pixabay.jpg",
    link: "https://vladyslavvagin.github.io/goit-react-hw-04-image-finder/",
    desc: "Gallery of images based on Pixabay API and React.js.",
  },
  {
    id: 7,
    title: "Simply Chocolate",
    img: "/portfolio/simply-chocolate.jpg",
    link: "https://vladyslavvagin.github.io/simply-choc/",
    desc: "Individual project of Landing Website for Simply Chocolate. Created with HTML5, CSS3, JavaScript and libraries. Imitation of product cart.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
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
            <a href={item.link} target="_blank" rel="noreferrer">See demo</a>
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
