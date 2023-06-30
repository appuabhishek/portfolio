import React from "react";
import code from "../assets/code2.png";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-2xl">Check out some of my project works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Blockchain Project
              </span>
              <p className="text-center">
                The counterfeit medicine authentication system using blockchain
                to verify the authenticity of medications and prevent the
                distribution of counterfeit drugs.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/appuabhishek/counterfeit-medicine.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                IoT Project
              </span>
              <p className="text-center">
                Extended feautre to blockchain project
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/appuabhishek/tempreature-api.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Full Stack Web Project
              </span>
              <p className="text-center">
                An full stack web project to demonstrate Nosql(mongoDB) database
                with express.js backend and bootstrap frontend with an account
                login, register and email subscription features
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/appuabhishek/watsonisite-SainInfomatrix.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
