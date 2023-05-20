import backgroundImage from "../../public/background.webp";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex text-white"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-1/2 mt-20 px-10">
        <h1 className="text-5xl tracking-wide" style={{ lineHeight: "1.3" }}>
          Have a say in the decisions that impact your community.
        </h1>
        <p className="py-5 tracking-wide text-lg">
          An online voting platform you can trust.
        </p>
      </div>
      <div className="w-1/2 px-10">
        <img
          className="h object-cover w-full opacity-75"
          src="/Interface.png"
          alt="interface"
        />
      </div>
    </div>
  );
};

export default HeroSection;
