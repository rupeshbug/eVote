import backgroundImage from "../../public/background.webp";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col-reverse md:flex-row text-white"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-full md:w-1/2 mt-10 md:mt-20 px-10 order-2 md:order-1">
        <h1
          className="text-3xl md:text-5xl tracking-wide text-center md:text-left"
          style={{ lineHeight: "1.5" }}
        >
          Have a say in the decisions that impact your community.
        </h1>
        <p className="py-5 tracking-wide text-lg text-center md:text-left">
          An online voting platform you can trust.
        </p>
        <div className="text-center md:text-left mb-4">
          <button className="bg-teal-600 hover:bg-teal-700 rounded-lg px-5 py-2 text-xl">
            Register
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 order-1 md:order-2">
        <img
          className="h object-cover w-full opacity-75 sm:height-200"
          src="/Interface.png"
          alt="interface"
        />
      </div>
    </div>
  );
};

export default HeroSection;
