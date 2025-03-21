import { listNavRoot } from "@/constants/base";
import { Footer } from "@/layouts/Footer";
import Header from "@/layouts/Header";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Header pathnameLevel={1} listNav={listNavRoot} />
      <main className="min-h-screen h-full">{children}</main>
      <Footer listNav={listNavRoot} />
    </div>
  );
}
