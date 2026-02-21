import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillIcon = ({ skill, index, isActive, onHover, onLeave }) => {
  const Icon = skill.icon;
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center gap-1 cursor-pointer group"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.06,
      }}
      onMouseEnter={() => {
        setShowTooltip(true);
        onHover?.(skill.name);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        onLeave?.();
      }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          className="absolute -top-11 left-1/2 -translate-x-1/2 z-30
            bg-gray-900/90 backdrop-blur-sm text-white text-xs font-semibold
            px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
        >
          {skill.name} — {skill.proficiency}%
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0
            border-l-[6px] border-r-[6px] border-t-[6px]
            border-l-transparent border-r-transparent border-t-gray-900/90" />
        </motion.div>
      )}

      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
          shadow-md transition-shadow duration-300
          group-hover:shadow-xl"
        style={{
          backgroundColor: skill.bg,
          boxShadow: isActive
            ? `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}20`
            : undefined,
        }}
      >
        {/* Animated glow ring */}
        {isActive && (
          <motion.span
            layoutId="active-ring"
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${skill.color}`,
              boxShadow: `0 0 12px ${skill.color}50`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}

        <Icon
          className="text-xl sm:text-2xl transition-transform duration-300"
          style={{ color: skill.color }}
        />
      </motion.div>

      {/* Label */}
      <span
        className="text-[10px] sm:text-[11px] font-medium text-gray-600 text-center
          leading-tight max-w-15 truncate"
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillIcon;
