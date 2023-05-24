import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

const about = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">About Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center mb-10">
          <div className="md:w-1/2">
            <img
              src="./vision2.png"
              alt="Vision"
              className="rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              we are a team committed to creating an environment where every
              voice is valued and every individual has a say in shaping the
              future. Our vision is to revolutionize the way individuals engage
              in democratic processes by leveraging the power of technology to
              contribute to a more sustainable world. We plan to use different
              technologies to improve security, maintain transparency and
              increase inclusivity in democratic processes. We believe that
              together, we can create a future that is fair, transparent,
              accountable, and inclusive, where individuals have the power to
              shape their communities and the world at large.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:w-1/2">
            <img
              src="./team.png"
              alt="Team"
              className="rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:mr-10">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700">
              Our team consists of students pursuing a career in technology who
              are passionate about developing new technologies that make a
              positive impact on society and simplify people’s lives. With the same
              goal in mind, we developed this product with the aim to provide a secure platform to
              conduct the voting process.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
