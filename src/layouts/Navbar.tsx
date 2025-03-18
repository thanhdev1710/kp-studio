"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function Navbar({
  listNav,
  isMenu,
  setIsMenu,
  isScrolled,
  pathnameLevel,
}: {
  listNav: {
    title: string;
    link: string;
  }[];
  isMenu: boolean;
  isScrolled: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  pathnameLevel: number;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`transition-all max-lg:hidden duration-500 z-50 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <ul className="flex items-center justify-center">
          {listNav.map((item) => {
            const isActive =
              pathname.split("/")[pathnameLevel] ===
              item.link.split("/")[pathnameLevel];
            return (
              <li key={item.title}>
                <Link
                  className={`inline-block transition-all duration-300 py-6 px-6 fontMontserrat hover:bg-gray-800 hover:text-gray-200 ${
                    isActive
                      ? "bg-gray-800 text-gray-200 font-bold"
                      : "font-medium"
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <aside
        className={`py-6 fixed z-50 text-gray-200 flex flex-col transition-all duration-500 top-0 h-screen w-[300px] bg-gray-800 ${
          isMenu ? "right-0" : "-right-[300px]"
        }`}
      >
        <div className="px-12 self-end">
          <X onClick={() => setIsMenu(false)} />
        </div>
        <ul className="flex flex-col mt-10">
          {listNav.map((item) => {
            const isActive =
              pathname.split("/")[pathnameLevel] ===
              item.link.split("/")[pathnameLevel];
            return (
              <li key={item.title}>
                <Link
                  className={`inline-block py-6 px-6 w-full fontMontserrat  hover:bg-gray-800 hover:text-gray-200 ${
                    isActive ? "bg-gray-600 font-bold" : "font-medium"
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      {isMenu && (
        <div
          className="fixed top-0 left-0 z-40 w-full h-screen bg-gray-800/60"
          onClick={() => setIsMenu(false)}
        ></div>
      )}
    </>
  );
}
