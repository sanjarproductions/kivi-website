import { Container } from "../container";
import { Nav } from "../nav";
import "./drawer.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const Drawer = ({ className = "" }) => {
  return (
    <div className={`drawer ${className}`}>
      <Container>
        <div className="drawer__inner">
          {className === "drawer-open" ? (
            <div className="drawer__info">
              <motion.span
                {...variants}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="drawer__info-text"
              >
                get in touch
              </motion.span>

              <motion.a
                {...variants}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="drawer__info-link "
                href="mailto:kiviwebstudio@gmail.com"
              >
                kiviwebstudio@gmail.com
              </motion.a>
              <motion.a
                {...variants}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="drawer__info-link"
                href="tel:+998716606060"
              >
                +998 90 054 83 88
              </motion.a>
            </div>
          ) : null}

          <Nav className={className} />
        </div>
      </Container>
    </div>
  );
};
