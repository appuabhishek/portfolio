import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Abhishek S, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a fresher in web development, I have a strong passion for
                building interactive and user-friendly web applications. With a
                solid foundation in JavaScript and a keen interest in web
                development, I am eager to apply my knowledge and skills to
                contribute to the exciting world of web development. As a
                fresher in blockchain, I bring a solid understanding of
                distributed ledger systems, cryptographic protocols, and smart
                contracts. I have practical experience with Ethereum and
                Hyperledger frameworks, and a passion for exploring blockchain's
                potential in various industries. Seeking real-world projects to
                deepen my expertise, I am eager to contribute to the growth of
                blockchain technology and be part of its transformative impact
                on decentralized systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
