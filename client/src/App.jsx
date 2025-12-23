import React from 'react'
import "./index.css";


function App() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center p-10 bg-white shadow-2xl rounded-3xl border border-orange-200">
        <h1 className="text-6xl font-black text-orange-600 tracking-tighter">
          KITCHEN <span className="text-gray-800">FLAVOURS</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg font-medium">
          Premium Event Management & Catering
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg">
            Explore Menu
          </button>
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all">
            Book Event
          </button>
        </div>
      </div>

      <p className="mt-10 text-gray-400 text-sm italic">
        Tailwind CSS is now working! 🚀
      </p>
    </div>
  );
}

export default App;