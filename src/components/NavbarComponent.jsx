import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";

const CustomNavbarLink = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
        isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-500"
      }`}
    >
      {children}
    </Link>
  );
};

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar fluid rounded className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavbarBrand href="/">
          <span className="self-center text-xl font-semibold text-gray-900">
            🛒 Fajowy Sklepik
          </span>
        </NavbarBrand>

        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />

        <NavbarCollapse className={isOpen ? "block" : "hidden md:flex"}>
          <CustomNavbarLink href="/">Home</CustomNavbarLink>
          <CustomNavbarLink href="/cart">Koszyk</CustomNavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
