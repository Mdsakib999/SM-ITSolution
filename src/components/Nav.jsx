import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <>
    <div className="sticky top-0 w-full bg-white py-1 z-30">
      <div className="w-[92%] mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img
            src="https://i.ibb.co/Wzty2sw/SMIt-Solution-Logo.jpg"
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="SM IT Logo"
          />

          <span className="self-center font-mono whitespace-nowrap text-xl font-semibold dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90%">
            SM IT SOLUTION
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse >
          <Navbar.Link className="text-xl font-semibold" href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-xl font-semibold" href="#About">About</Navbar.Link>
          <Navbar.Link className="text-xl font-semibold" href="#Services">
          <div className="flex md:order-2">
          <Dropdown
            arrowIcon={true}
            inline
            label="Services"
          >
            <Dropdown.Item>Web Design</Dropdown.Item>
            <Dropdown.Item>Digital Marketing</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          {/* <Navbar.Toggle /> */}
        </div>
          </Navbar.Link>
          <Navbar.Link className="text-xl font-semibold" href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>

      </Navbar>
      </div>
    </div>

    {/* Practice item */}
    
    </>
  );
};

export default Nav;
