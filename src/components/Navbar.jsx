import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(() => !toggle);
  };
  return (
    <div className="w-full h-[80px] bg-white border-b-2">
      <div className="md:max-w-[1480px] sm:max-w-[600px]  w-full h-full flex justify-between m-auto px-4  items-center">
        <img src={logo} className="h-[25px]" />
        <div className="hidden md:flex items-cente ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Suport</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} />
            Login
          </button>
          <button className="bg-[#20b486] rounded-md px-8 py-3 text-white font-bold">
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={clickHandler}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul className="text-center">
          <li className="p-4 hover:bg-gray-100 rounded-sm">Home</li>
          <li className="p-4 hover:bg-gray-100 rounded-sm">About</li>
          <li className="p-4 hover:bg-gray-100 rounded-sm">Suport</li>
          <li className="p-4 hover:bg-gray-100 rounded-sm">Platform</li>
          <li className="p-4 hover:bg-gray-100 rounded-sm">Pricing</li>
          <div className="flex flex-col my-4 gap-4 ">
          <button className="flex justify-center items-center bg-transparent px-6 gap-2 border border-[#20b486] py-4 ">
            <img src={lock} />
            Login
          </button>
          <button className="bg-[#20b486] rounde d-md px-8 py-5 text-white font-bold">
            Sign Up For Free
          </button>
        </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
