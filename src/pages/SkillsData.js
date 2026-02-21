// ─── Skill categories with icons, colors, and proficiency ───
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub,
  FaPython, FaFigma, FaLightbulb,
  FaFileExcel, FaFileWord, FaFilePowerpoint
} from "react-icons/fa";
import { SiC, SiAdobephotoshop } from "react-icons/si";
import { BsCpu, BsChatDots } from "react-icons/bs";
import { TbBrain } from "react-icons/tb";

// Radar chart data — each entry is one axis on the spider chart
export const radarData = [
  { skill: "HTML",            value: 90, fullMark: 100 },
  { skill: "CSS",             value: 85, fullMark: 100 },
  { skill: "JavaScript",      value: 88, fullMark: 100 },
  { skill: "React",           value: 85, fullMark: 100 },
  { skill: "Git",             value: 80, fullMark: 100 },
  { skill: "Problem Solving", value: 82, fullMark: 100 },
  { skill: "Communication",   value: 78, fullMark: 100 },
  { skill: "Excel",           value: 72, fullMark: 100 },
];

// All skills grouped into categories
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML",   proficiency: 90, icon: FaHtml5,      color: "#E44D26", bg: "#FFF0EC" },
      { name: "CSS",    proficiency: 85, icon: FaCss3Alt,     color: "#264DE4", bg: "#ECF0FF" },
      { name: "JavaScript", proficiency: 88, icon: FaJsSquare, color: "#F7DF1E", bg: "#FFFDE6" },
      { name: "C",      proficiency: 75, icon: SiC,           color: "#A8B9CC", bg: "#F0F4F8" },
      { name: "Python", proficiency: 80, icon: FaPython,      color: "#3776AB", bg: "#EBF4FF" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React",  proficiency: 85, icon: FaReact,  color: "#61DAFB", bg: "#E8F9FF" },
      { name: "Git",    proficiency: 80, icon: FaGitAlt, color: "#F05032", bg: "#FFEEEA" },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma",      proficiency: 70, icon: FaFigma,             color: "#F24E1E", bg: "#FFEDE8" },
      { name: "Photoshop",  proficiency: 65, icon: SiAdobephotoshop,    color: "#31A8FF", bg: "#E8F5FF" },
      { name: "GitHub",     proficiency: 83, icon: FaGithub,            color: "#181717", bg: "#F0F0F0" },
    ],
  },
  {
    title: "Core Competencies & Soft Skills",
    skills: [
      { name: "DSA",              proficiency: 78, icon: TbBrain,    color: "#8E44AD", bg: "#F5EEFF" },
      { name: "Problem Solving",  proficiency: 85, icon: FaLightbulb, color: "#F39C12", bg: "#FFF8E8" },
      { name: "Communication",    proficiency: 80, icon: BsChatDots, color: "#E74C3C", bg: "#FFECEC" },
      { name: "Computer Fundamentals", proficiency: 88, icon: BsCpu, color: "#0078D4", bg: "#E8F2FF" },
    ],
  },
  {
    title: "Office Tools",
    skills: [
      { name: "Excel",      proficiency: 72, icon: FaFileExcel,      color: "#217346", bg: "#EAFFF2" },
      { name: "Word",       proficiency: 75, icon: FaFileWord,       color: "#2B579A", bg: "#EBF0FF" },
      { name: "PowerPoint", proficiency: 70, icon: FaFilePowerpoint, color: "#D24726", bg: "#FFEDE8" },
    ],
  },
];

// Flat list of all skills (used for floating nodes around chart)
export const allSkills = skillCategories.flatMap((cat) => cat.skills);
