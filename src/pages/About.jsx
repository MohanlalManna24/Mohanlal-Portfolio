import React from "react";
import { FaCode, FaDatabase, FaGraduationCap, FaRocket } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <div
      id="about"
      className="bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <Layout>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 pt-10 md:pt-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-indigo-100 px-6 py-2 rounded-full mb-4 animate-pulse">
            <HiSparkles className="text-indigo-500 text-xl" />
            <span className="text-sm md:text-base font-semibold text-indigo-700">
              Get to know me
            </span>
          </div>
        </div>

        <div className="main_container flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Container - Story & Education */}
          <motion.div
            className="left_container lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <FaRocket className="text-white text-xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                My Journey
              </h3>
            </div>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg hover:text-indigo-600 transition-colors duration-300">
                Hello! I'm a passionate{" "}
                <span className="font-semibold text-indigo-600">
                  BCA student
                </span>{" "}
                with a strong desire to become a skilled Software Developer or
                Software Engineer. My journey into the world of programming
                started with curiosity, and now it has become my career goal.
              </p>
              <p className="text-base md:text-lg hover:text-indigo-600 transition-colors duration-300">
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide{" "}
                <span className="font-semibold text-indigo-600">
                  pixel-perfect, performant experiences
                </span>
                .
              </p>
              <p className="text-base md:text-lg hover:text-indigo-600 transition-colors duration-300">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or expanding my knowledge
                through online courses and documentation.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-3 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-indigo-300">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-linear-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Education
                  </h3>
                </div>
                <span className="text-xs md:text-sm bg-indigo-100 px-2 py-1 rounded-full w-fit text-indigo-700">
                  2024-2028
                </span>
              </div>

              <h4 className="text-base md:text-lg font-bold text-indigo-800 mb-1">
                Bachelor of Computer Applications
              </h4>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-gray-700">
                <span className="font-medium text-sm md:text-base">
                  Global Group of Institutes, Haldia affiliated by MAKAUT
                  University
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Container - Skills Grid */}
          <div className="right_container lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {/* Frontend Development Card */}
              <motion.div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-linear-to-br hover:from-blue-50 hover:to-indigo-100 border border-blue-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, }}
              viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <FaCode className="text-white text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Frontend Development
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 text-sm md:text-base">
                  Building responsive and interactive web interfaces
                </p>
              </motion.div>

              {/* Software Engineering Card */}
              <motion.div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-linear-to-br hover:from-purple-50 hover:to-pink-100 border border-purple-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, }}
              viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <MdOutlineEngineering className="text-white text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Software Engineering
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 text-sm md:text-base">
                  Designing and building scalable software solutions
                </p>
              </motion.div>

              {/* UI/UX Design Card */}
              <motion.div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-linear-to-br hover:from-amber-50 hover:to-orange-100 border border-amber-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, }}
              viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <IoColorPalette className="text-white text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 text-sm md:text-base">
                  Creating intuitive and engaging user experiences
                </p>
              </motion.div>

              {/* Backend Logic Card */}
              <motion.div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-linear-to-br hover:from-emerald-50 hover:to-teal-100 border border-emerald-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, }}
              viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <FaDatabase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  Backend Logic
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 text-sm md:text-base">
                  Developing robust server-side logic and APIs
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
