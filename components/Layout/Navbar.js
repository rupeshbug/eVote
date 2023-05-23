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
        <li>Home</li>
        <li>About Us</li>
        <li>Signup</li>
        <li>Create Event</li>
      </ul>
    </nav>
  );
};

export default Navbar;
