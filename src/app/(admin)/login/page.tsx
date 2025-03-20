import LoginForm from "@/components/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const token =
    (await cookies()).get("token")?.value === process.env.TOKEN_LOGIN;

  if (token) {
    return redirect("/admin");
  }
  return <LoginForm />;
}
