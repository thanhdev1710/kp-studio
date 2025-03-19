import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="fontPlayfairDisplay flex gap-2 items-center">
      <Image
        alt="KP Studio"
        src="/images/icon-512x512.png"
        width={100}
        height={100}
        className="size-[62px]"
      />
      <div className="flex gap-2 items-end uppercase">
        <span className="font-bold md:text-4xl text-xl text-gray-800">KP</span>
        <span className="fontMontserrat font-medium md:text-2xl text-base text-gray-600">
          Studio
        </span>
      </div>
    </Link>
  );
}
