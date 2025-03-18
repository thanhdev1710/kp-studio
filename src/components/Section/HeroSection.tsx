"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

export default function HeroSection({
  listSlide,
}: {
  listSlide: { img: string; blur: string }[];
}) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {listSlide.map((item) => (
        <SwiperSlide key={item.img}>
          <Link href={"/dich-vu"}>
            <Image
              alt="Wedding"
              className="w-full lg:aspect-[5/2] aspect-video h-auto object-cover select-none pointer-events-none cursor-pointer"
              src={item.img}
              width={1920}
              height={1080}
              placeholder="blur"
              blurDataURL={item.blur}
              quality={100}
              priority
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
