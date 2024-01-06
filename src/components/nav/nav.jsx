import { navList } from "./nav-list";
import "./nav.scss";
import { motion } from "framer-motion";

export const Nav = ({ className }) => {
  return className === "drawer-open" ? (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map((item, index) => (
          <li className="nav__item" key={index}>
            <a className="nav__link" href={`/`}>
              <motion.span
                className="nav__link-text"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: item.delay,
                  type: "spring",
                }}
              >
                {item.title.split("").map((letter, i) => (
                  <span key={i}>{letter}</span>
                ))}
              </motion.span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};
