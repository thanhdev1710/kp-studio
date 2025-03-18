import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      domain:
        process.env.NODE_ENV === "production" ? ".kpstudio.vn" : undefined,
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({
    success: false,
    message: "Sai tài khoản hoặc mật khẩu!",
  });
}
