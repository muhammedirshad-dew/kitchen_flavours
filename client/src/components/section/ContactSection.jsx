import React, { useState, useRef } from "react";
import { Phone, Mail, MessageCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import BgImg from "../../assets/Contact/contact.jpg";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
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
          alert("Message sent successfully to irashimuahmmed@gamil.com!");
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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-bold text-3xl"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px w-12 "
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
          </div>
          <p className="text-lime-100 max-w-3xl mx-auto">
            Get in touch with us for your next event! We are just a message
            away.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-8 my-8">
            <a
              href="tel:9745484293"
              className="flex items-start gap-4 hover:scale-105 transition group"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-xl">Phone</h3>
                <p className="text-[#B38F6F]">9745484293</p>
              </div>
            </a>

            <a
              href="mailto:irashimuahmmed@gamil.com"
              className="flex items-start gap-4 hover:scale-105 transition group"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-xl">Email</h3>
                <p className="text-[#B38F6F]">irashimuahmmed@gamil.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/9745484293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:scale-105 transition group"
            >
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-[#B38F6F] transition-colors">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-[#B38F6F] font-semibold text-xl">
                  WhatsApp
                </h3>
                <p className="text-[#B38F6F]">9745484293</p>
              </div>
            </a>
          </div>

          {/* Right Form */}
          <div className="bg-white text-[#B38F6F] rounded-md p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Send Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-cyan-500 transition-colors"
                value={formData.user_name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-cyan-500 transition-colors"
                value={formData.user_email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full border-b border-gray-400 outline-none py-2 focus:border-cyan-500 transition-colors"
                value={formData.user_phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Type your Message..."
                required
                className="w-full border-b border-gray-400 outline-none py-2 resize-none focus:border-cyan-500 transition-colors"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3 rounded-md transition font-bold flex items-center justify-center space-x-2 shadow-lg ${
                  !isFormValid || loading
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-[#B38F6F] hover:bg-[#79604b] text-white active:scale-95"
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
