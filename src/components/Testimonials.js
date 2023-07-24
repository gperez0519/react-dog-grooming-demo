import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-container">
        <h2 className="text-4xl font-bold p-5 text-center">Testimonials</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="border border-gray-400 p-5">
            <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
              <BsPersonCircle className="text-2xl text-green-400 inline" />
              <h2 className="inline ml-2">Janice Williams</h2>
            </div>
            <p>
              I love these guys! They gave my dog the best grooming I could ever
              ask for and they made her smell the best! Highly Recommended!
            </p>
          </div>
          <div className="border border-gray-400 p-5">
            <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
              <BsPersonCircle className="text-2xl text-green-400 inline" />
              <h2 className="inline ml-2">John Anderson</h2>
            </div>
            <p>
              OMG! My pup looks so great now and this is wonderful! Will do
              business with again!
            </p>
          </div>
          <div className="border border-gray-400 p-5">
            <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
              <BsPersonCircle className="text-2xl text-green-400 inline" />
              <h2 className="inline ml-2">Janelle Smith</h2>
            </div>
            <p>
              I can't stress enough how amazing they are. They gave my pup the
              best grooming I've ever seen! They are amazing!
            </p>
          </div>
          <div className="border border-gray-400 p-5">
            <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
              <BsPersonCircle className="text-2xl text-green-400 inline" />
              <h2 className="inline ml-2">Robert Jacob</h2>
            </div>
            <p>
              Wow! They made my pup so happy and now he smells and looks like a
              new pup. I can't wait to go back!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
