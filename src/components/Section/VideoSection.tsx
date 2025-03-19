import React from "react";

export default function VideoSection() {
  return (
    <section>
      <div className="bg-gray-100 text-gray-900 py-12">
        <div className="container flex lg:flex-row flex-col justify-center gap-10 mx-auto px-4 md:px-6">
          <div className="w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JUv_BSAfw5w?si=bsiP39M27_BvqBON"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <h3 className="fontPlayfairDisplay uppercase text-xl text-gray-600 md:text-3xl text-center font-semibold mb-2">
              VIDEO WEDDING
            </h3>
            <div className="w-full h-0.5 bg-gray-200" />
            <p className="fontPlayfairDisplay font-medium italic md:text-2xl text-lg mt-4">
              PRE WEDDING || Aloha x NCSG
            </p>
            <p className="mt-4 text-gray-500 px-10 inline-block">
              &quot;Ngoài kia có biết bao cám dỗ. Nhưng với anh, em vẫn là điều
              quan trọng nhất.
              <br />
              Em biết vì sao không?
              <br />
              Vì em ở nơi nào, nơi đó chính là BÌNH YÊN&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="containerCustom py-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-3 bg-gray-100">
          <div className="w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JUv_BSAfw5w?si=bsiP39M27_BvqBON"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <div className="w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JUv_BSAfw5w?si=bsiP39M27_BvqBON"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <div className="w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JUv_BSAfw5w?si=bsiP39M27_BvqBON"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
