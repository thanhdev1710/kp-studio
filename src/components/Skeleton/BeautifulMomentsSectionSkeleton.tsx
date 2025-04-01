import React from "react";

export default function BeautifulMomentsSectionSkeleton() {
  return (
    <section className="px-4 md:px-6 py-12">
      <hr className="mb-6" />
      <div className="flex justify-center">
        <h3 className="fontPlayfairDisplay relative uppercase text-xl md:text-3xl text-gray-500 text-center font-semibold mb-8">
          <div className="bg-gray-300 h-6 w-32 mx-auto mb-2 animate-pulse"></div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gray-500 transition-all duration-500 w-1/2"></span>
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="relative w-full h-auto aspect-square overflow-hidden group animate-pulse"
            >
              <div className="bg-gray-300 w-full h-full rounded-md"></div>
            </div>
          ))}
      </div>
    </section>
  );
}
