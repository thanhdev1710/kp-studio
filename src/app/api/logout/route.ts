import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("/login", req.url);
  (await cookies()).set("token", "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    domain: process.env.NODE_ENV === "production" ? ".kpstudio.vn" : undefined,
    sameSite: "lax",
  });
  return NextResponse.redirect(url);
}
