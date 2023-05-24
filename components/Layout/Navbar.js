import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="h-20 px-10 bg-white shadow md:flex md:items-center md:justify-between"
      style={{ backgroundColor: "#161635" }}
    >
      <div className="flex items-center text-xl font-bold w-1/2">
        <img
          className="cursor-pointer"
          style={{ height: "64px" }}
          src="/logo-no-bg.png"
          alt="hero background"
        />
      </div>
      <ul className="flex justify-around w-1/2 text-white">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About Us</li>
        </Link>
        <Link href="/login">
          <li>Create A Poll</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
