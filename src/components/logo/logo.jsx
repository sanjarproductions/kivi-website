import "./logo.scss";
import logo from "../../assets/images/kiwi-svgrepo-com.svg";

export const Logo = ({ className = "" }) => {
  return (
    <a className={`logo ${className}`} href="/">
      {"Kivi".split("").map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
      {/* <img
        className="logo__img"
        src={logo}
        alt="site logo"
        width={60}
        height={60}
      /> */}
    </a>
  );
};
