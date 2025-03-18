import { listNavAdmin } from "@/constants/base";
import Header from "@/layouts/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return redirect("/login");
  }
  return (
    <div className="bg-white">
      <Header pathnameLevel={2} listNav={listNavAdmin} />
      <main className="min-h-screen h-full">{children}</main>
    </div>
  );
}
