import React from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <div className="main-image flex items-center justify-center">
        <div className="p-5 m-5 bg-red-400 rounded-xl">
          <div className="text-white text-4xl">WE ARE WOOF DOG GROOMING!</div>
        </div>
      </div>
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;
