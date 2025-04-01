import Image from "next/image";

export default function InspirationSection() {
  const quotes = [
    {
      text: "Nhiếp ảnh là nghệ thuật đóng băng khoảnh khắc và biến nó thành vĩnh cửu.",
      author: "Ansel Adams",
      img: "/images/img1.jpg",
    },
    {
      text: "Một bức ảnh tốt không chỉ chụp bằng máy ảnh, mà bằng trái tim.",
      author: "David Alan Harvey",
      img: "/images/img2.jpg",
    },
    {
      text: "Khoảnh khắc đẹp nhất trong nhiếp ảnh là khi bạn quên mất mình đang cầm máy ảnh.",
      author: "Steve McCurry",
      img: "/images/img3.jpg",
    },
    {
      text: "Hình ảnh có thể kể câu chuyện mà ngôn từ không thể diễn tả.",
      author: "Destin Sparks",
      img: "/images/img4.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="containerCustom">
        <h3 className="fontPlayfairDisplay uppercase text-xl md:text-3xl text-center font-semibold mb-12 tracking-wider">
          Góc Cảm Hứng Nhiếp Ảnh
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {quotes.map((quote, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={quote.img}
                  alt="Ảnh cảm hứng"
                  width={500}
                  height={350}
                  className="w-full h-full aspect-[3/2] object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <p className="text-lg italic text-gray-700 mt-6 max-w-lg leading-relaxed">
                &quot;{quote.text}&quot;
              </p>
              <p className="font-semibold text-gray-900 mt-2 text-lg uppercase tracking-widest">
                - {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
