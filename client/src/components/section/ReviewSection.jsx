import React from "react";
import { Star } from "lucide-react";

const ReviewSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer 1"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Jane Doe</h3>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Fantastic service and delicious food. Highly recommend!
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Customer 2"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              A wonderful experience from start to finish.
            </p>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Customer 3"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Emily R.</h3>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Delicious food and excellent customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
