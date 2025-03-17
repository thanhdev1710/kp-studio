import Image from "next/image";
import Link from "next/link";

export default function PhotoPackageSection() {
  const ListPhotoPackage = [
    { img: "/images/img1.jpg", title: "Combo chụp ảnh cưới", link: "" },
    { img: "/images/img2.jpg", title: "Ảnh cưới Hàn Quốc", link: "" },
    { img: "/images/img3.jpg", title: "Ảnh cưới phim trường", link: "" },
    { img: "/images/img4.jpg", title: "Ảnh cưới Sài Gòn", link: "" },
    { img: "/images/img5.jpg", title: "Ảnh cưới Hồ Cốc", link: "" },
    { img: "/images/img1.jpg", title: "Ảnh cưới Đà Lạt", link: "" },
    { img: "/images/img2.jpg", title: "Ảnh phóng sự cưới", link: "" },
    { img: "/images/img3.jpg", title: "Trọn gói ngày cưới", link: "" },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="fontPlayfairDisplay uppercase text-xl text-gray-400 md:text-3xl text-center font-semibold mb-8">
          Gói chụp ảnh cưới
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {ListPhotoPackage.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="group flex flex-col items-center border-b border-gray-400 p-4 
                         transition-all duration-500 hover:bg-gray-200/50"
            >
              <div className="relative w-full flex justify-center overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  alt={item.title}
                  src={item.img}
                  className="object-cover w-full h-auto transition-transform duration-500 
                             group-hover:scale-105"
                />
              </div>
              <p className="fontMontserrat uppercase text-lg md:text-xl font-medium text-center text-gray-700 mt-4 relative">
                {item.title}
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 
                                 group-hover:w-full group-hover:left-0"
                ></span>
              </p>
            </Link>
          ))}
        </div>
        <div className="w-full flex items-center mt-10">
          <Link
            href="#"
            className="px-6 py-3 inline-block mx-auto bg-gray-900 text-white font-semibold uppercase 
                       transition-all duration-500 hover:bg-gray-700"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
