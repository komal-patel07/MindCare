import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-5 md:px-10 lg:px-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div id="logo" className="px-5 md:px-18 font-[Snowburst_One] text-xl text-center md:text-left">
          <span className="text-6xl">M</span>ind Care.
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-5 md:gap-10 py-5 text-xl">
          <NavLink
            to="/"
            id="Provider"
            className=" hover:text-emerald-900 hover:underline transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="About"
            id="Condition"
            className="hover:text-emerald-900 hover:underline  transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="Services"
            id="Service"
            className="hover:text-emerald-900 hover:underline  transition duration-300"
          >
            Service
          </NavLink>
          <NavLink
            to="#"
            id="Resources"
            className="hover:text-emerald-900 hover:underline  transition duration-300"
          >
            Resources
          </NavLink>
          <NavLink
            to="Login"
            id="CurrentPatient"
            className="hover:text-emerald-900 hover:underline  transition duration-300"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}