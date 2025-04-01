import { getWeddingByType } from "@/services/wedding";
import Image from "next/image";

export default async function InspirationSection() {
  const { data } = await getWeddingByType("goccamhung", "khoangkhacdep");

  const quotes = [
    {
      text: "Nhiếp ảnh là nghệ thuật đóng băng khoảnh khắc và biến nó thành vĩnh cửu.",
      author: "Ansel Adams",
      img: data[0].image_url,
      blur_data: data[0].blur_data,
    },
    {
      text: "Một bức ảnh tốt không chỉ chụp bằng máy ảnh, mà bằng trái tim.",
      author: "David Alan Harvey",
      img: data[1].image_url,
      blur_data: data[1].blur_data,
    },
    {
      text: "Khoảnh khắc đẹp nhất trong nhiếp ảnh là khi bạn quên mất mình đang cầm máy ảnh.",
      author: "Steve McCurry",
      img: data[2].image_url,
      blur_data: data[2].blur_data,
    },
    {
      text: "Hình ảnh có thể kể câu chuyện mà ngôn từ không thể diễn tả.",
      author: "Destin Sparks",
      img: data[3].image_url,
      blur_data: data[3].blur_data,
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="containerCustom">
        <h3 className="fontPlayfairDisplay uppercase text-xl text-gray-700 md:text-3xl text-center font-semibold mb-10">
          Góc Cảm Hứng Nhiếp Ảnh
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg"
            >
              <Image
                src={quote.img}
                alt="Ảnh cảm hứng"
                width={600}
                height={500}
                placeholder="blur"
                blurDataURL={quote.blur_data}
                className="rounded-md mb-4 object-cover aspect-[4/2] w-full h-auto"
              />
              <p className="text-lg italic text-gray-700">
                &quot;{quote.text}&quot;
              </p>
              <p className="font-semibold text-gray-900 mt-2">
                - {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
