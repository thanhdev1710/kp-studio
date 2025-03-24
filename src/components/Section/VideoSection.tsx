import { convertToEmbed } from "@/lib/utils";
import { VideoType } from "@/types/videos";
import React from "react";

export default function VideoSection({ videos }: { videos: VideoType[] }) {
  return (
    <section>
      <div className="bg-gray-100 text-gray-900 py-12">
        <div className="container flex lg:flex-row flex-col justify-center gap-10 mx-auto px-4 md:px-6">
          <div className="w-full">
            <iframe
              src={convertToEmbed(videos[0].url)}
              title={videos[0].title}
              width="560"
              height="315"
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
              {videos[0].title}
            </p>
            <p className="mt-4 text-gray-500 px-10 inline-block">
              {videos[0].content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="containerCustom py-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-3 bg-gray-100">
          {videos.slice(1).map((video) => (
            <div key={video.id} className="w-full">
              <iframe
                src={convertToEmbed(video.url)}
                title={video.title}
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto aspect-video"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
