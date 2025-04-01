import { getWeddingByType } from "@/services/wedding";
import Image from "next/image";

export default async function BeautifulMomentsSection() {
  const { data } = await getWeddingByType("khoangkhac", "khoangkhacdep");

  return (
    <section className="px-4 md:px-6 py-12">
      <hr className="mb-6" />
      <div className="flex justify-center">
        <h3 className="fontPlayfairDisplay relative uppercase text-xl md:text-3xl text-gray-500 text-center font-semibold mb-8">
          Khoảnh khắc đẹp
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gray-500 transition-all duration-500 w-1/2"></span>
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data.map((img) => (
          <div
            key={img.id}
            className="relative w-full h-auto aspect-square overflow-hidden group"
          >
            <Image
              alt={img.name}
              src={img.image_url}
              placeholder="blur"
              blurDataURL={img.blur_data}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="transition-all duration-500 object-cover group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
