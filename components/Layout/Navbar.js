// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav
//       className="h-20 px-10 bg-white shadow md:flex md:items-center md:justify-between"
//       style={{ backgroundColor: "#161635" }}
//     >
//       <div className="flex items-center text-xl font-bold w-1/2">
//         <Link href="/">
//           <img
//             className="cursor-pointer"
//             style={{ height: "64px" }}
//             src="/logo-no-bg.png"
//             alt="hero background"
//           />
//         </Link>
//       </div>
//       <ul className="flex justify-around w-1/2 text-white">
//         <Link href="/">
//           <li>Home</li>
//         </Link>
//         <Link href="/about">
//           <li>About Us</li>
//         </Link>
//         <Link href="/login">
//           <li>Create A Poll</li>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// ***************************** INITIAL***************************************

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2 px-10" style={{ backgroundColor: "#161635" }}>
      <div >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                style={{ height: "64px" }}
                className="cursor-pointer h-8 w-auto"
                src="/logo-no-bg.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block w-1/2">
            <div className="flex justify-between items-baseline space-x-4">
              <Link href="/">
                <div className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
                  About Us
                </div>
              </Link>
              <Link href="/login">
                <div className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
                  Create A Poll
                </div>
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="block h-6 w-6" />
              ) : (
                <AiOutlineMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <div className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
              About Us
            </div>
          </Link>
          <Link href="/login">
            <div className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
              Create A Poll
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
