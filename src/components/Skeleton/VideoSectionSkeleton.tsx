import React from "react";

export default function VideoSectionSkeleton() {
  return (
    <section>
      <div className="bg-gray-100 text-gray-900 py-12">
        <div className="container flex lg:flex-row flex-col justify-center gap-10 mx-auto px-4 md:px-6">
          <div className="w-full animate-pulse">
            <div className="bg-gray-300 h-56 w-full rounded-md"></div>
          </div>
          <div className="flex flex-col items-center justify-start w-full animate-pulse">
            <div className="bg-gray-300 h-8 w-32 mb-4 rounded-md"></div>
            <div className="w-full h-0.5 bg-gray-200 mb-4" />
            <div className="bg-gray-300 h-6 w-1/2 mb-4 rounded-md"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md mb-2"></div>
          </div>
        </div>
      </div>
      <div className="containerCustom py-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-3 bg-gray-100">
          <div className="w-full animate-pulse">
            <div className="bg-gray-300 h-56 w-full rounded-md mb-4"></div>
          </div>
          <div className="w-full animate-pulse">
            <div className="bg-gray-300 h-56 w-full rounded-md mb-4"></div>
          </div>
          <div className="w-full animate-pulse">
            <div className="bg-gray-300 h-56 w-full rounded-md mb-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
