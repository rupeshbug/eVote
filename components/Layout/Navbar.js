import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2 px-10" style={{ backgroundColor: "#161635" }}>
      <div>
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
              {session ? (
                <Link href="/createPoll">
                  <div className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
                    Create A Poll
                  </div>
                </Link>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="flex items-center justify-center max-w-xs px-4 py-3 rounded-lg border-2 w-60"
                  style={{ color: "white" }}
                >
                  Sign In
                </button>
              )}
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center justify-center max-w-xs px-4 py-3 rounded-lg border-2 w-60"
                  style={{ color: "white" }}
                >
                  Sign Out
                </button>
              ) : null}
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
          {session ? (
            <Link href="/createPoll">
              <div className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
                Create A Poll
              </div>
            </Link>
          ) : (
            <div className="mx-auto mt-5">
              <button
                onClick={() => signIn({})}
                className="flex items-center justify-center max-w-xs px-4 py-3 rounded-lg border-2 w-60"
                style={{ color: "white" }}
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Sign In
              </button>
            </div>
          )}
          {session ? (
            <button
              onClick={() => signOut()}
              className="flex items-center justify-center max-w-xs px-4 py-3 rounded-lg border-2 w-60"
              style={{ color: "white" }}
            >
              Sign Out
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
