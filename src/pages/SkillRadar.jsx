import React, { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import { radarData, allSkills } from "./SkillsData";
import SkillIcon from "./SkillIcon";

/* ── custom tooltip ──────────────────────────────── */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { skill, value } = payload[0].payload;
  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl px-4 py-2 text-sm">
      <p className="font-semibold text-gray-800">{skill}</p>
      <p className="text-blue-600 font-bold">{value}%</p>
    </div>
  );
};

/* ── custom angle-axis tick ──────────────────────── */
const renderAxisTick = ({ payload, x, y, cx, cy }) => {
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const nx = dx / (dist || 1);
  const ny = dy / (dist || 1);
  const offset = 18;

  return (
    <text
      x={x + nx * offset}
      y={y + ny * offset}
      textAnchor={nx > 0.1 ? "start" : nx < -0.1 ? "end" : "middle"}
      dominantBaseline="central"
      className="fill-gray-500 text-[11px] sm:text-xs font-medium"
    >
      {payload.value}
    </text>
  );
};

/* ── main radar component ────────────────────────── */
const SkillRadar = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [animatedData, setAnimatedData] = useState(
    radarData.map((d) => ({ ...d, value: 0 }))
  );

  // Animate chart values on mount
  useEffect(() => {
    const id = setTimeout(() => setAnimatedData(radarData), 400);
    return () => clearTimeout(id);
  }, []);

  /* lay skills around the chart in an ellipse */
  const positionSkills = () => {
    const total = allSkills.length;
    return allSkills.map((skill, i) => {
      const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
      // Ellipse radii  (48% horiz, 44% vert keeps icons inside wrapper)
      const rx = 47;
      const ry = 44;
      const left = 50 + rx * Math.cos(angle);
      const top = 50 + ry * Math.sin(angle);
      return { ...skill, left, top, index: i };
    });
  };

  const positionedSkills = positionSkills();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{once:true}}
      className="relative w-full max-w-150 mx-auto aspect-square
        flex items-center justify-center"
    >
      {/* ── Concentric decorative rings ── */}
      {[200, 290, 380].map((size, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 * i, duration: 0.6, ease: "easeOut" }}
          className="absolute rounded-full border border-indigo-200/30 pointer-events-none"
          style={{ width: size, height: size }}
        />
      ))}

      {/* ── Central glowing dot ── */}
      <span className="absolute w-5 h-5 rounded-full bg-linear-to-br from-indigo-400 to-violet-500
        shadow-[0_0_24px_rgba(139,92,246,.5),0_0_48px_rgba(139,92,246,.2)] z-10 animate-pulse pointer-events-none" />

      {/* ── Radar chart ── */}
      <div className="absolute inset-[18%] z-5">
        <ResponsiveContainer width="100%" aspect={1}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={animatedData}>
            <defs>
              {/* Ultra-light pastel fill */}
              <radialGradient id="radarFill" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#c7d2fe" stopOpacity={0.25} />
                <stop offset="50%" stopColor="#a5b4fc" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#e0e7ff" stopOpacity={0.06} />
              </radialGradient>
              {/* Soft gradient stroke */}
              <linearGradient id="radarStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>
              {/* Glow filter for radar area */}
              <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <PolarGrid
              gridType="polygon"
              stroke="#c7d2fe"
              strokeOpacity={0.35}
            />
            <PolarAngleAxis dataKey="skill" tick={false} />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Proficiency"
              dataKey="value"
              fill="url(#radarFill)"
              stroke="url(#radarStroke)"
              strokeWidth={2}
              dot={{ r: 3.5, fill: "#a78bfa", stroke: "#fff", strokeWidth: 1.5 }}
              activeDot={{ r: 5, fill: "#7c3aed" }}
              isAnimationActive
              animationDuration={1200}
              animationEasing="ease-out"
              style={{ filter: "url(#radarGlow)" }}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Floating skill icons ── */}
      {positionedSkills.map((skill) => (
        <div
          key={skill.name}
          className="absolute z-20"
          style={{
            left: `${skill.left}%`,
            top: `${skill.top}%`,
            transform: "translate(-50%,-50%)",
          }}
        >
          <SkillIcon
            skill={skill}
            index={skill.index}
            isActive={activeSkill === skill.name}
            onHover={setActiveSkill}
            onLeave={() => setActiveSkill(null)}
          />
        </div>
      ))}

      {/* ── Connection lines (SVG) ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-3"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {positionedSkills.map((skill) => {
          const isActive = activeSkill === skill.name;
          return (
            <g key={`line-${skill.name}`}>
              {/* Subtle glow behind active line */}
              {isActive && (
                <line
                  x1="50" y1="50"
                  x2={skill.left} y2={skill.top}
                  stroke={skill.color}
                  strokeWidth="0.6"
                  strokeOpacity="0.15"
                  filter="url(#softGlow)"
                />
              )}
              {/* Main line */}
              <line
                x1="50" y1="50"
                x2={skill.left} y2={skill.top}
                stroke={isActive ? skill.color : "#d4d4d8"}
                strokeWidth={isActive ? "0.2" : "0.08"}
                strokeOpacity={isActive ? 0.55 : 0.25}
                strokeDasharray={isActive ? "none" : "0.6 0.6"}
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export default SkillRadar;
