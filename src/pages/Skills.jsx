import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "./SkillsData";
import SkillIcon from "./SkillIcon";
import SkillRadar from "./SkillRadar";
import { HiSparkles } from 'react-icons/hi'
import "./Skills.css";

/* ── Floating particles background ─────────────── */
const Particle = ({ delay }) => {
  const size = Math.random() * 6 + 3;
  const left = Math.random() * 100;
  const duration = Math.random() * 12 + 14;

  return (
    <motion.span
      className="absolute rounded-full bg-violet-300/15 pointer-events-none"
      style={{ width: size, height: size, left: `${left}%`, bottom: "-5%" }}
      animate={{ y: [0, -800], opacity: [0, 0.6, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
};

/* ── Category sidebar card ─────────────────────── */
const CategoryCard = ({ category, index }) => {
  const Icon = category.skills[0].icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 + index * 0.12, type: "spring", stiffness: 120 }}
      className="group flex items-start gap-3 p-3 rounded-2xl
        bg-white/40 backdrop-blur-md border border-white/50
        shadow-sm hover:shadow-lg hover:bg-white/70
        transition-all duration-300 cursor-default"
    >
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center
          shadow-inner"
        style={{ backgroundColor: category.skills[0].bg }}
      >
        <Icon className="text-lg" style={{ color: category.skills[0].color }} />
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
          {category.title}
        </h3>
        <p className="text-[11px] text-gray-500 mt-0.5 flex flex-wrap gap-1">
          {category.skills.map((s) => (
            <span key={s.name} className="inline-flex items-center gap-0.5">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: s.color }}
              />
              {s.name}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

/* ── Main Skills Section ───────────────────────── */
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden
        bg-linear-to-br from-indigo-50/60 via-slate-50 to-violet-50/40
        py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <Particle key={i} delay={i * 1.1} />
        ))}
      </div>

    {/* Header Section */}
           <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-4 animate-pulse">
               <HiSparkles className="text-purple-500 text-xl" />
               <span className="text-sm md:text-base font-semibold text-purple-700">
                  My Skillset
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5">
               Technology and works
             </h2>
           </div>

      {/* Category cards — horizontal strip */}
      <div className="relative z-10 max-w-5xl mx-auto mb-6 flex flex-wrap justify-center gap-3">
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.title} category={cat} index={i} />
        ))}
      </div>

      {/* Centered radar graph */}
      <div className="relative z-10 flex justify-center items-center">
        <SkillRadar />
      </div>
    </section>
  );
};

export default Skills;
