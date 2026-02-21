import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMediaBtn = () => {

    const socialMediaBtns = [
        { 
          icon: <FaFacebook size={30} />, 
          link: "https://www.facebook.com/developermohanlal", 
          name: "Facebook",
          fillColor: "bg-blue-600",
          tooltipColor: "bg-blue-600",
          gradientColor: "from-white via-violet-100 to-blue-200",
          textColor: "text-blue-600"
        },
        { 
          icon: <FaGithub size={30} />, 
          link: "https://github.com/MohanlalManna24", 
          name: "GitHub",
          fillColor: "bg-gray-900",
          tooltipColor: "bg-gray-900",
          gradientColor: "from-white to-gray-200",
          textColor: "text-gray-900"
        },
        { 
          icon: <FaLinkedin size={30} />, 
          link: "https://linkedin.com/in/mohanlal-manna-64206b343", 
          name: "LinkedIn",
          fillColor: "bg-blue-700",
          tooltipColor: "bg-blue-700",
          gradientColor: "from-white via-green-100 to-blue-200",
          textColor: "text-blue-700"
        },
        { 
          icon: <MdEmail size={30} />, 
          link: "mailto:mohanlalmanna533@gmail.com", 
          name: "Email",
          fillColor: "bg-red-600",
          tooltipColor: "bg-red-600",
          gradientColor: "from-white via-yellow-50 to-red-200",
          textColor: "text-red-600"
        }
    ]

  return (
    <div className="flex items-center gap-4 mt-10">
      {socialMediaBtns.map((btn, index) => (
        <div key={index} className="relative group">
          {/* Tooltip */}
          <span className={`
            absolute -bottom-8 left-1/2 -translate-x-1/2
            ${btn.tooltipColor} text-white text-sm
            px-3 py-1.5 rounded-md
            opacity-0 invisible pointer-events-none
            group-hover:opacity-100 group-hover:visible group-hover:-bottom-10
            transition-all duration-300 ease-in-out
            whitespace-nowrap
          `}>
            {btn.name}
          </span>

          {/* Icon Button */}
          <a
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative overflow-hidden
              flex justify-center items-center
              w-14 h-14 rounded-full
              bg-linear-to-br ${btn.gradientColor} ${btn.textColor}
              shadow-md hover:shadow-xl
              transition-all duration-300 ease-in-out
              group/btn
            `}
          >
            {/* Icon */}
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover/btn:text-white">
              {btn.icon}
            </span>

            {/* Fill Effect (Bottom to Top) */}
            <span className={`
              absolute bottom-0 left-0 w-full h-0
              ${btn.fillColor}
              group-hover/btn:h-full
              transition-all duration-300 ease-in-out
            `}></span>
          </a>
        </div>
      ))}
    </div>
  );
};
      
export default SocialMediaBtn;
