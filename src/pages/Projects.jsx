import React from "react";
import { FaExternalLinkAlt, FaGithub, FaFolder } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion"; 
import Layout from "../layout/layout";

const Projects = () => {
  // Featured Projects Data
  const featuredProjects = [
    {
      id: 1,
      title: "SMART BAZAAR - E-commerce Website",
      description:
        "Smart Bazaar is a vibrant ecommerce platform designed to celebrate the spirit of Durga Puja festival. The website combines traditional Bengali culture with modern web technology to create an engaging online shopping experience. It features festival-themed products, special discounts, and a user-friendly interface that reflects the joy and colors of Durga Puja.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://mohanlalmanna24.github.io/ecommerce/",
      sourceLink: "https://github.com/MohanlalManna24/ecommerce",
      image: "./ecommerceImg.png",
    },
    {
      id: 2,
      title: "02",
      description:
        "Another project description. Highlight the technologies used and your role in the development. Explain the key features and what makes this project unique.",
      technologies: ["Python", "HTML", "CSS"],
      liveLink: "https://example.com",
      sourceLink: "https://github.com",
      image: "02",
    },
  ];

  // Other Notable Projects Data
  const otherProjects = [
    {
      id: 3,
      title: "Project Name 3",
      description:
        "Describe your third project here. What makes it unique? What did you learn while building it?",
      technologies: ["JavaScript", "CSS", "Figma"],
      liveLink: "https://example.com",
      sourceLink: "https://github.com",
    },
    {
      id: 4,
      title: "Project Name 4",
      description:
        "A brief description of another project showcasing your skills and creativity.",
      technologies: ["React.js", "Python", "Tailwind CSS"],
      liveLink: "https://example.com",
      sourceLink: "https://github.com",
    },
    {
      id: 5,
      title: "Project Name 5",
      description:
        "Another project that demonstrates your technical abilities and problem-solving skills.",
      technologies: ["Node.js", "MongoDB", "Express"],
      liveLink: "https://example.com",
      sourceLink: "https://github.com",
    },
    {
      id: 6,
      title: "Project Name 6",
      description:
        "A project showcasing your versatility across different technologies and frameworks.",
      technologies: ["Vue.js", "Firebase", "TypeScript"],
      liveLink: "https://example.com",
      sourceLink: "https://github.com",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-linear-to-br from-slate-50 via-purple-50 to-blue-50 py-16"
    >
      <Layout>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-4 animate-pulse">
            <HiSparkles className="text-purple-500 text-xl" />
            <span className="text-sm md:text-base font-semibold text-purple-700">
              My Projects
            </span>
          </div>{" "}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Here are some projects I've worked on. Each one represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-5 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image/Number */}
              <motion.div className="lg:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="bg-linear-to-br from-cyan-100 via-blue-100 to-purple-100 rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <span className="text-8xl md:text-9xl font-bold text-cyan-200 group-hover:text-cyan-300 transition-colors duration-500">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              >
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <span className="text-sm font-semibold">View Live</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-semibold">Source Code</span>
                    <FaGithub className="text-base" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Other <span className="text-blue-600">Noteworthy</span> Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
                initial={{ opacity: 0.8, scaleX: 0.2 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Header with Icon and Links */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <FaFolder className="text-white text-xl" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-15">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-gray-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MohanlalManna24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>View More Projects</span>
            <FaGithub className="text-xl" />
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
