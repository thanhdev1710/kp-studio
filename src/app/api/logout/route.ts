import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL("/login", req.url);
  (await cookies()).set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    domain: process.env.NODE_ENV === "production" ? ".kpstudio.vn" : undefined,
    maxAge: 0,
  });
  return NextResponse.redirect(url);
}
