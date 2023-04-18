import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`navBar`}>
      <div className="navbar__div">
        <Link to="/" className="navbar__div__Link"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="navbar__div__Link__logo" />
          <p className="navbar__div__Link__titulo">Cristian &nbsp;<span className="navbar__div__Link__titulo__span">| Desarrollador Web</span></p>
        </Link>
        <ul className="navbar__div__list">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "active" : "notActive"} ac`}
              onClick={() => setActive(link.title)}
            >
              <a className="navbar__div__list__link" href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__div__responsive">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="navbar__div__responsive__img"
            onClick={() => setToggle(!toggle)}
            />
            <div className={!toggle ? "displayNone": "navbar__div__responsive__div"}>
              <ul className="navbar__div__responsive__div__list">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "active" : "notActive"} ac`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);}}
              >
                <Link className="navbar__div__list__link" to={`#${link.id}`}>{link.title}</Link>
              </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
