import React from "react";

import { RiShareBoxLine } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Layout from "../layout/layout";
import SocialMediaBtn from "../components/SocialMediaBtn";
import profileImg from "../assets/mohanlal.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="background min-h-max">
      <Layout>
        <div className="lg:flex items-center justify-between mt-20">
          <motion.div className="leftContainer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mt-10 lg:mt-20 mb-3 text-2xl font-mySoul-regular font-medium">
              Hello, My name is{" "}
            </h3>
            <h1 className="font-bold text-3xl lg:font-extrabold md:font-extrabold md:text-5xl lg:text-6xl mb-5">
              MOHANLAL MANNA
            </h1>

            <TypeAnimation
              className="text-xl md:text-3xl lg:text-4xl font-bold text-violet-600 "
              sequence={[
                "Aspiring Software Developer",
                1000,
                "Aspiring Full Stack Developer",
                1000,
                "Aspiring Web Developer",
                1000,
                "Aspiring Problem Solver",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
            <p className="text-lg mt-5 lg:pr-30 font-serif">
              I'm a BCA student passionate about crafting clean, user-friendly
              digital experiences. Currently focused on building accessible,
              pixel-perfect web applications with modern technologies.Strong
              understanding of programming fundamentals and problem-solving
              skills and growth in the field of software development.
            </p>
            <div className="btn flex gap-5 mt-5">
              <a href="#projects">
                <button className=" flex gap-2 items-center bg-blue-500 text-white cursor-pointer px-5 py-2 rounded hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition-colors duration-300">
                  <span>View Projects</span> <RiShareBoxLine />
                </button>
              </a>
                <a href="https://drive.google.com/file/d/1OCMhpMO59rZYyzKauSSyBCTr232E9yHh/view?usp=sharing"
                            target="_blank">
                <button className="border-2 border-blue-500 cursor-pointer text-blue-900 px-5 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  Resume
                  <FaFileAlt className="inline ml-2" />
                </button></a>
            </div>
            <SocialMediaBtn />
          </motion.div>

          <motion.div className="rightContainer hidden lg:flex items-center justify-center mt-20 mr-15"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-110 h-110 rounded-full  p-4 shadow-2xl bg-linear-to-br from-emerald-50 to-amber-50 outline-gray-500 outline-15 outline-offset-20">
                <img
                  src={profileImg}
                  alt="Frontend Developer portfolio website built with React"
                  className="rounded-full w-full h-full object-cover shadow-lg"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-linear-to-r from-emerald-200 to-amber-200 rounded-full blur-2xl opacity-40"></div>
            </div>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <div className="hidden md:block w-5 h-10 border-2 border-indigo-900/30 rounded-full mt-20 animate-bounce mx-auto">
          <span className="block w-3 h-3 bg-indigo-900/30 rounded-full mx-auto mt-1 animate-bounce"></span>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
