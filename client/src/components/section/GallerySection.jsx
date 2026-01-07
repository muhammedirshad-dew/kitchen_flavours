import React from "react";
import BgImg from "../../assets/Gallery/premium_photo-1674235766088-80d8410f9523.avif";

const GallerySection = () => {
  return (
    <div>
      <section>
        <div
          className="w-full py-10 px-6 bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Gallery
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <div className="h-px w-12 bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 bg-gray-100 min-h-screen">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
            <div class="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl bg-gray-800 text-white h-[50vh] md:h-auto">
              <img
                src="mountain.jpg"
                class="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div class="relative p-6 flex flex-col justify-end h-full">
                <span class="text-xs uppercase font-bold mb-2">
                  Destinations
                </span>
                <h2 class="text-xl font-bold">
                  A Guide To Rocky Mountain Vacations
                </h2>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl bg-orange-200 h-[50vh] md:h-auto">
              <img
                src="desert.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-lg font-bold">Traveling To USA</h2>
              </div>
            </div>

            <div
              class="relative overflow-hidden rounded-xl bg-blue-100
         h-[80vh] sm:h-[70vh]
         md:h-auto md:row-span-2"
            >
              <img
                src="beach.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-lg font-bold">
                  Party Jokes Starting But Unnecessary
                </h2>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl bg-brown-400 h-[50vh] md:h-auto">
              <img
                src="cliffs.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-lg font-bold">
                  Maui By Air: The Best Way Around The Island
                </h2>
              </div>
            </div>

            <div class="md:row-span-2 bg-gray-900 text-white p-10 flex items-center justify-center rounded-xl text-center h-[50vh] md:h-auto">
              <p class="italic text-lg">
                "Man cannot discover new oceans unless he has the courage to
                lose sight of the shore."
              </p>
            </div>

            <div class="relative overflow-hidden rounded-xl bg-orange-200 h-[50vh] md:h-auto">
              <img
                src="desert.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-lg font-bold">Traveling To USA</h2>
              </div>
            </div>

            <div class="md:col-span-2 relative overflow-hidden rounded-xl h-[50vh] md:h-auto">
              <img
                src="underwater.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-xl font-bold">
                  A Guide To Rocky Mountain Vacations
                </h2>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-xl bg-brown-400 h-[50vh] md:h-auto">
              <img
                src="cliffs.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 class="text-lg font-bold">
                  Maui By Air: The Best Way Around The Island
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
