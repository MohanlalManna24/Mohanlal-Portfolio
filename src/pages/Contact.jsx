import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import Layout from "../layout/Layout";
import SocialMediaBtn from "../components/SocialMediaBtn";
import { motion } from "framer-motion";

const web3FormData_secretKey = import.meta.env.VITE_WEB3FORMS_SECRET_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ show: false, type: "", message: "" });

    try {
      const web3FormData = new FormData(e.target);
      web3FormData.append("access_key", web3FormData_secretKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();

      if (data.success) {
        setNotification({
          show: true,
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        setNotification({
          show: true,
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setNotification({
        show: true,
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      info: "mohanlalmanna533@example.com",
      link: "mailto:mohanlalmanna533@example.com",
      linear: "from-blue-400 to-cyan-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      info: "+91 9800779047",
      link: "tel:+919800779047",
      linear: "from-purple-400 to-pink-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      info: "NandaKumar, Purba Medinipur, West Bengal, India",
      link: null,
      linear: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <>
      {/* Fixed Notification Toast - Top Right */}
      {notification.show && (
        <div
          className={`fixed top-20 right-3 sm:right-4 z-50 flex items-center gap-2 sm:gap-3 p-3 sm:p-4 sm:px-5 rounded-xl border shadow-2xl backdrop-blur-md w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-sm animate-[slideInRight_0.4s_ease-out] ${
            notification.type === "success"
              ? "bg-green-50/95 border-green-200 text-green-800"
              : "bg-red-50/95 border-red-200 text-red-800"
          }`}
        >
          {notification.type === "success" ? (
            <FaCheckCircle className="text-green-500 text-xl shrink-0" />
          ) : (
            <FaTimesCircle className="text-red-500 text-xl shrink-0" />
          )}
          <p className="font-medium text-sm">{notification.message}</p>
          <button
            onClick={() =>
              setNotification({ show: false, type: "", message: "" })
            }
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <div
        id="contact"
        className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-10 sm:py-14 md:py-20"
      >
        <Layout>
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 animate-pulse">
              <HiSparkles className="text-purple-500 text-lg sm:text-xl" />
              <span className="text-xs sm:text-sm md:text-base font-semibold text-purple-700">
                Let's Connect
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Have a question or want to work together? Feel free to reach out.
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Contact Information
                </h3>

                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200 cursor-pointer"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 bg-linear-to-br ${item.linear} rounded-xl flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                      >
                        <item.icon className="text-white text-lg sm:text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mb-0.5 sm:mb-1">
                          {item.title}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg hover:text-purple-600 transition-colors duration-300 break-all sm:break-normal"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg wrap-break-word">
                            {item.info}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                className="bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Connect With Me
                </h4>
                <SocialMediaBtn />
              </motion.div>

              {/* Decorative Quote */}
              <div className="hidden lg:block bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-purple-500">
                <p className="text-gray-700 italic text-lg">
                  "The best way to predict the future is to create it."
                </p>
                <p className="text-purple-600 font-semibold mt-2">
                  - Let's build something amazing together!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-gray-100"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === "name"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 hover:bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === "email"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 hover:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                {/* Mobile Input */}
                <div className="relative">
                  <label
                    htmlFor="mobile"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === "mobile"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 hover:bg-white"
                    placeholder="Enter your mobile number"
                  />
                </div>
                {/* Subject Input */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === "subject"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 hover:bg-white"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === "message"
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 resize-none bg-white/50 hover:bg-white"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-500 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <AiOutlineLoading className="animate-spin text-white text-lg" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom decorative elements */}
          <div className="mt-10 sm:mt-14 md:mt-16 text-center">
            <div className="inline-block bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full px-5 sm:px-8 py-2 sm:py-3">
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Contact;
