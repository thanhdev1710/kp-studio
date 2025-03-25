import Image from "next/image";

export default function AlbumSection() {
  const listImg = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];
  return (
    <section className="px-4 md:px-6 py-12">
      <hr className="mb-6" />
      <div className="flex justify-center">
        <h3 className="fontPlayfairDisplay relative uppercase text-xl md:text-3xl text-center font-semibold mb-8">
          ALBUM ẢNH CƯỚI
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gray-700 transition-all duration-500 w-1/2"></span>
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {listImg.map((img, i) => (
          <div
            key={img + i}
            className="relative w-full h-auto aspect-square overflow-hidden group"
          >
            <Image
              alt={img}
              src={img}
              fill
              className="transition-all duration-500 object-cover group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
