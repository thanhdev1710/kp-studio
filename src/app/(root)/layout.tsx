import { Footer } from "@/layouts/Footer";
import Header from "@/layouts/Header";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="min-h-screen h-full">{children}</main>
      <Footer />
    </div>
  );
}
