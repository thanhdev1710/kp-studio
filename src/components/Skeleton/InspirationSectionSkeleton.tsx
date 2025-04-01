import React from "react";

export default function InspirationSectionSkeleton() {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="containerCustom">
        <div className="mb-10 animate-pulse">
          <div className="bg-gray-300 h-6 w-40 mx-auto mb-6 rounded-md"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg animate-pulse"
              >
                <div className="bg-gray-300 h-40 w-full mb-4 rounded-md"></div>
                <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded-md"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
