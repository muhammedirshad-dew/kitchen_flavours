import React, { useState, useEffect } from "react";
import { Star, Send, Loader2, Trash2, Edit, X } from "lucide-react";
import axios from "axios";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    review_text: "",
    rating: 5,
  });
  const [hover, setHover] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) {
        // PATCH update
        await axios.patch(`http://127.0.0.1:8000/api/reviews/${editingId}/`, formData);
        alert("Review updated successfully!");
      } else {
        // POST new
        await axios.post("http://127.0.0.1:8000/api/reviews/", formData);
        alert("Review posted successfully!");
      }
      cancelEdit();
      fetchReviews();
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/reviews/${id}/`);
        fetchReviews();
        alert("Review deleted!");
      } catch (error) {
        console.error("Delete Error:", error);
      }
    }
  };

  const startEdit = (review) => {
    console.log("Starting edit for:", review);
    setEditingId(review.id);
    setFormData({
      email: review.email,
      review_text: review.review_text,
      rating: review.rating,
    });
    // Form-ilekk focus aakan top-ilekk scroll cheyyunnu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ email: "", review_text: "", rating: 5 });
  };

  const getAvatar = (email) => {
    const seed = email ? email.trim().toLowerCase() : "default";
    return `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=fbbf24`;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Experiences</h2>

        {/* Form Container */}
        <div className={`p-8 rounded-3xl shadow-2xl mb-16 max-w-xl mx-auto border-4 transition-all duration-300 ${editingId ? 'bg-blue-50 border-blue-400' : 'bg-white border-transparent'}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {editingId ? "✏️ Edit Mode" : "✍️ Write a Review"}
            </h3>
            {editingId && (
              <button onClick={cancelEdit} className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition">
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-yellow-400 outline-none transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      className={`w-10 h-10 transition-transform active:scale-90 ${star <= (hover || formData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Thoughts</label>
              <textarea
                required
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-yellow-400 outline-none transition resize-none"
                value={formData.review_text}
                onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-95 ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-yellow-500 hover:bg-yellow-600'}`}
            >
              {submitting ? <Loader2 className="animate-spin w-6 h-6" /> : <span>{editingId ? "Update Now" : "Post Review"}</span>}
            </button>
          </form>
        </div>

        {/* List */}
        {loading ? (
          <div className="text-center py-10"><Loader2 className="animate-spin mx-auto w-10 h-10 text-yellow-500" /></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 py-10">No reviews yet. Be the first to post!</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition group">
                  <div className="flex items-center mb-4">
                    <img src={getAvatar(review.email)} className="w-14 h-14 rounded-full mr-4 border-2 border-yellow-200 shadow-inner" alt="User" />
                    <div className="flex-1 text-left">
                      <h4 className="font-bold text-gray-800">{review.email.split('@')[0]}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400" : "text-gray-200"}`} />)}
                      </div>
                    </div>
                    
                    {/* Buttons always visible on desktop, or on hover */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => startEdit(review)} 
                        className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition"
                        title="Edit Review"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(review.id)} 
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
                        title="Delete Review"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-left">"{review.review_text}"</p>
                  <div className="mt-4 text-xs text-gray-400 text-left font-medium">{new Date(review.created_at).toLocaleDateString()}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
