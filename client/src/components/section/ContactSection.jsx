import React, { useState, useRef } from "react";
import { Phone, Mail, MessageCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="relative w-full min-h-screen bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for your next event! We are just a message away.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-8">
            <a href="tel:9745484293" className="flex items-start gap-4 hover:scale-105 transition group">
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-cyan-400 transition-colors">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-cyan-400 font-semibold text-xl">Phone</h3>
                <p className="text-gray-300">9745484293</p>
              </div>
            </a>

            <a href="mailto:irashimuahmmed@gamil.com" className="flex items-start gap-4 hover:scale-105 transition group">
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-cyan-400 transition-colors">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-cyan-400 font-semibold text-xl">Email</h3>
                <p className="text-gray-300">irashimuahmmed@gamil.com</p>
              </div>
            </a>

            <a href="https://wa.me/9745484293" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:scale-105 transition group">
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-green-500 transition-colors">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-green-500 font-semibold text-xl">WhatsApp</h3>
                <p className="text-gray-300">9745484293</p>
              </div>
            </a>
          </div>

          {/* Right Form */}
          <div className="bg-white text-black rounded-md p-8 shadow-lg">
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
                  : "bg-cyan-500 hover:bg-cyan-600 text-white active:scale-95"
                }`}
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
