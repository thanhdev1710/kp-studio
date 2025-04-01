"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { HeroSection as HeroSectionType } from "@/types/heroSection";

export default function HeroSection({
  listSlide,
}: {
  listSlide: HeroSectionType[];
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
        <SwiperSlide key={item.id}>
          <Link href={item.url}>
            <Image
              alt="Wedding"
              className="w-full lg:aspect-[5/2] aspect-video h-auto object-cover select-none pointer-events-none cursor-pointer"
              src={item.image_url}
              width={1920}
              height={1080}
              placeholder="blur"
              blurDataURL={item.blur_data}
              quality={100}
              priority
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
