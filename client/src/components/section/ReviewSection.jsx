import React, { useState, useEffect, useRef } from "react";
import { Star, Send, Loader2, Trash2, Edit, X, PlusCircle, Instagram, Camera } from "lucide-react";
import axios from "axios";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    instagram_username: "",
    review_text: "",
    rating: 5,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [hover, setHover] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/reviews/");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append("email", formData.email);
    data.append("instagram_username", formData.instagram_username);
    data.append("review_text", formData.review_text);
    data.append("rating", formData.rating);
    if (selectedFile) {
      data.append("profile_image", selectedFile);
    }

    try {
      if (editingId) {
        await axios.patch(`http://127.0.0.1:8000/api/reviews/${editingId}/`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Review updated!");
      } else {
        await axios.post("http://127.0.0.1:8000/api/reviews/", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Review posted!");
      }
      cancelEdit();
      fetchReviews();
      setIsFormOpen(false);
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this review?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/reviews/${id}/`);
        fetchReviews();
      } catch (error) {
        alert("Failed to delete.");
      }
    }
  };

  const startEdit = (review) => {
    setEditingId(review.id);
    setFormData({
      email: review.email,
      instagram_username: review.instagram_username || "",
      review_text: review.review_text,
      rating: review.rating,
    });
    setSelectedFile(null);
    setIsFormOpen(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ email: "", instagram_username: "", review_text: "", rating: 5 });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (!editingId) setIsFormOpen(false);
  };

  // --- IMPROVED AVATAR LOGIC ---
  const getAvatar = (review) => {
    // 1. If user uploaded a photo, use it (PRIORITY)
    if (review.profile_image) {
      return review.profile_image;
    }
    // 2. If Instagram username exists, use Unavatar
    if (review.instagram_username) {
      return `https://unavatar.io/instagram/${review.instagram_username.trim().replace('@', '')}`;
    }
    // 3. Fallback to Initials
    const cleanEmail = review.email.trim().toLowerCase();
    return `https://api.dicebear.com/7.x/initials/svg?seed=${cleanEmail}`;
  };

  return (
    <section className="pb-16  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-left">
        <h2
          className="text-3xl font-extrabold mb-4 text-center "
          style={{ color: "#B38F6F" }}
        >
          Customer Experiences
        </h2>

        {/* --- 1. User Display Box (Reviews Grid) --- */}
        {loading ? (
          <div className="text-center py-10">
            <Loader2
              className="animate-spin mx-auto w-10 h-10"
              style={{ color: "#B38F6F" }}
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition group"
              >
                <div className="flex items-center mb-4">
                  {/* ROUND PROFILE IMAGE */}
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#B38F6F] bg-gray-100 flex items-center justify-center">
                    <img
                      src={getAvatar(review)}
                      className="w-full h-full object-cover"
                      alt="Profile"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${review.email}`;
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">
                      {review.instagram_username
                        ? `@${review.instagram_username}`
                        : review.email.split("@")[0]}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* CLICKABLE INSTAGRAM ICON */}
                    {review.instagram_username && (
                      <a
                        href={`https://instagram.com/${review.instagram_username.trim().replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-pink-600 hover:bg-pink-50 rounded-full transition"
                        title="View Instagram Profile"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => startEdit(review)}
                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="p-1.5 text-red-500 hover:bg-red-100 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{review.review_text}"
                </p>
                <div className="mt-4 text-xs text-gray-400 font-medium border-t pt-2">
                  {new Date(review.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- 2. Write Button --- */}
        {!isFormOpen && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#B38F6F] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition"
            >
              Write a Review
            </button>
          </div>
        )}

        {/* --- 3. Form Box --- */}
        {isFormOpen && (
          <div
            className={`w-full p-8 rounded-3xl shadow-2xl border-4 ${editingId ? "bg-blue-50 border-blue-400" : "bg-white border-[#B38F6F]"}`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h3 className="text-2xl font-bold">
                  {editingId ? "Edit Your Review" : "Share Your Experience"}
                </h3>
                <button
                  onClick={() => {
                    setIsFormOpen(false);
                    cancelEdit();
                  }}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-yellow-400 transition"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Instagram Username (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-yellow-400 transition"
                      placeholder="muhammed_123"
                      value={formData.instagram_username}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          instagram_username: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* --- PHOTO UPLOAD FIELD --- */}
                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <Camera className="w-4 h-4" /> Upload Profile Photo
                    (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100 transition"
                  />
                  <p className="mt-2 text-xs text-gray-400">
                    Supported formats: JPG, PNG, GIF
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-10 h-10 cursor-pointer ${s <= (hover || formData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                        onClick={() => setFormData({ ...formData, rating: s })}
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(0)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Thoughts
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-yellow-400 transition resize-none"
                    placeholder="Tell us what you think..."
                    value={formData.review_text}
                    onChange={(e) =>
                      setFormData({ ...formData, review_text: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#B38F6F] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-600 transition"
                >
                  {submitting ? (
                    <Loader2 className="animate-spin mx-auto w-6 h-6" />
                  ) : (
                    <span>{editingId ? "Update Now" : "Post Review"}</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
