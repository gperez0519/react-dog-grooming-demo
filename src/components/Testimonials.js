import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const Testimonials = () => {

    return (
        <>
            <div className="my-9 p-5">
                <h2 className="text-4xl font-bold p-5 text-center">Testimonials</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="border border-gray-400 p-5">
                        <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
                            <BsPersonCircle className="text-2xl text-green-400 inline" />
                            <h2 className="inline ml-2">Janice Williams</h2>
                        </div>
                        <p>I love these guys! They gave my dog the best grooming I could ever ask for and they made her smell the best! Highly Recommended!</p>
                    </div>
                    <div className="border border-gray-400 p-5">
                        <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
                            <BsPersonCircle className="text-2xl text-green-400 inline" />
                            <h2 className="inline ml-2">John Anderson</h2>
                        </div>
                        <p>I love these guys! They gave my dog the best grooming I could ever ask for and they made her smell the best! Highly Recommended!</p>
                    </div>
                    <div className="border border-gray-400 p-5">
                        <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
                            <BsPersonCircle className="text-2xl text-green-400 inline" />
                            <h2 className="inline ml-2">Janelle Smith</h2>
                        </div>
                        <p>I love these guys! They gave my dog the best grooming I could ever ask for and they made her smell the best! Highly Recommended!</p>
                    </div>
                    <div className="border border-gray-400 p-5">
                        <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
                            <BsPersonCircle className="text-2xl text-green-400 inline" />
                            <h2 className="inline ml-2">Robert Jacob</h2>
                        </div>
                        <p>I love these guys! They gave my dog the best grooming I could ever ask for and they made her smell the best! Highly Recommended!</p>
                    </div>
                </div>
            </div>
            
        </>
    )
    
}

export default Testimonials;