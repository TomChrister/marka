import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6 items-center">
      <NavLink to="/">Hjem</NavLink>

      <NavLink to="/om-oss">Om oss</NavLink>

      <NavLink to="/kontakt">Kontakt</NavLink>
    </nav>
  );
};

export default Navbar;
