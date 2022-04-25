import { Link } from "react-router-dom";
import classes from "./GeneralNav.module.css";

const GeneralNav = () => {
  const links = [
    { href: "status_history", text: "Status History" },
    { href: "who_to_talk_to", text: "Who to talk to" },
    { href: "contact", text: "Contact" },
  ];
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__lists}>
        {links.map(({ href, text }) => (
          <li key={href} className={classes.nav__list}>
            <Link to={href} className={classes.nav__link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GeneralNav;
