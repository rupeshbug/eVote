import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white px-5 md:px-10 py-5 flex justify-between sm:flex-col md:flex-row w-full">
      <div>
        <Link href="/">
          <img
            className="cursor-pointer"
            style={{ height: "60px" }}
            src="/logo-no-bg.png"
            alt="hero background"
          />
        </Link>
        <p>Copyright © 2023 eVote</p>
      </div>
      <div className="flex flex-col align-center justify-center">
        <h1 className="mb-2">Connect with us</h1>
        <div className="flex">
          <Link href="https://www.facebook.com">
            <FaFacebook className="text-blue-500 text-4xl mr-3" />
          </Link>
          <Link href="https://www.instagram.com">
            <FaInstagram className="text-pink-800 text-4xl" />
          </Link>
        </div>
      </div>
      <ul className="hidden md:flex flex-col align-center justify-center">
        <Link href="/">
          <li className="mb-2">Home</li>
        </Link>
        <Link href="/about">
          <li className="mb-2">About</li>
        </Link>
        <Link href="/login">
          <li>Join Us</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
