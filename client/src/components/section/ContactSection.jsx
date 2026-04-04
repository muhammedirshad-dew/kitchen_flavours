import React, { useState, useRef } from "react";
import { Phone, Mail, MessageCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import BgImg from "../../assets/Contact/contact.jpg";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  // Check if all fields are filled to enable/disable button
  const isFormValid =
    formData.user_name.trim() !== "" &&
    formData.user_email.trim() !== "" &&
    formData.user_phone.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0tetack",
        "template_pu2ga3a",
        formRef.current,
        "XglxB9gu7tSdliUSQ",
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please check EmailJS configuration.");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white "
    >
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. We will get back to you
              soon!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-[#B38F6F] hover:bg-[#79604b] text-white rounded-md font-bold transition-colors shadow-lg active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="font-bold text-2xl sm:text-3xl"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div
              className="h-px w-10 sm:w-12 "
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="h-px w-10 sm:w-12"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
          </div>
          <p className="text-lime-100 max-w-3xl mx-auto mt-4 text-sm sm:text-base px-4">
            Get in touch with us for your next event! We are just a message
            away.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6 md:space-y-8 my-4 md:my-8">
            <a
              href="tel:9745484293"
              className="flex items-start gap-4 hover:scale-105 transition group p-2"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors shrink-0">
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-lg sm:text-xl">Phone</h3>
                <p className="text-[#B38F6F] text-sm sm:text-base">9745484293</p>
              </div>
            </a>

            <a
              href="mailto:irashimuahmmed@gmail.com"
              className="flex items-start gap-4 hover:scale-105 transition group p-2"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors shrink-0">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-lg sm:text-xl">Email</h3>
                <p className="text-[#B38F6F] text-sm sm:text-base break-all">irashimuahmmed@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/9745484293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:scale-105 transition group p-2"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors shrink-0">
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-lg sm:text-xl">
                  WhatsApp
                </h3>
                <p className="text-[#B38F6F] text-sm sm:text-base">9745484293</p>
              </div>
            </a>
          </div>

          {/* Right Form */}
          <div className="bg-white text-[#B38F6F] rounded-xl p-6 sm:p-8 shadow-lg mx-auto w-full max-w-lg md:max-w-none">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Send Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5 sm:space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-[#B38F6F] transition-colors text-sm sm:text-base bg-transparent"
                value={formData.user_name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-[#B38F6F] transition-colors text-sm sm:text-base bg-transparent"
                value={formData.user_email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-[#B38F6F] transition-colors text-sm sm:text-base bg-transparent"
                value={formData.user_phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Type your Message..."
                required
                className="w-full border-b border-gray-400 outline-none py-2 resize-none focus:border-[#B38F6F] transition-colors text-sm sm:text-base bg-transparent"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3 sm:py-4 rounded-md transition font-bold flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base ${
                  !isFormValid || loading
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-[#B38F6F] hover:bg-[#96765a] text-white active:scale-95"
                }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
