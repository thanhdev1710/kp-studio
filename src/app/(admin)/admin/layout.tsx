import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
// import { ReactNode } from "react";

// { children }: { children: ReactNode }
export default async function layout() {
  const token =
    (await cookies()).get("token")?.value === process.env.TOKEN_LOGIN;
  if (!token) {
    return redirect("/login");
  }
  // return (
  //   <div className="bg-white">
  //     <Header pathnameLevel={2} listNav={listNavAdmin} />
  //     <main className="min-h-screen h-full">{children}</main>
  //   </div>
  // );

  return notFound();
}
