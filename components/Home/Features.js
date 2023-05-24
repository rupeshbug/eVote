import React from "react";
import {
  BiLockAlt,
  BiAccessibility,
  BiCheckCircle,
  BiTransferAlt,
} from "react-icons/bi";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 shadow-lg md:ml-3">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl text-center mb-8 tracking-wide">
        Discover the eVote Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <BiLockAlt className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Secure</h2>
          <p className="text-gray-600">
            eVote ensures the security of your voting data, personal information
            and maintain the integrity of the voting process.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <BiAccessibility className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Accessible</h2>
          <p className="text-gray-600">
            With eVote, everyone can participate in the voting process easily
            and conveniently from anywhere.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <BiCheckCircle className="text-4xl text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Accurate</h2>
          <p className="text-gray-600">
            eVote guarantees accurate and reliable voting results, providing a
            transparent and trustworthy platform for all participants.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <BiTransferAlt className="text-4xl text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Transparent</h2>
          <p className="text-gray-600">
            We ensure an open and verifiable voting process and show accurate
            results, which builds trust among voters and stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
