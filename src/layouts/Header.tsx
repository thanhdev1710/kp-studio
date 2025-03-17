"use client";
import Logo from "@/components/Logo";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 88);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <div
        className={`flex items-center lg:justify-center bg-white justify-between py-6 px-12 ${
          isScrolled ? "max-lg:fixed w-full top-0 left-0 z-50" : ""
        }`}
      >
        <Logo />
        <MenuIcon onClick={() => setIsMenu(true)} className="lg:hidden" />
      </div>
      <hr />
      <Navbar isScrolled={isScrolled} isMenu={isMenu} setIsMenu={setIsMenu} />
    </header>
  );
}
