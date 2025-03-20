import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    (await cookies()).set("token", process.env.TOKEN_LOGIN!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      domain:
        process.env.NODE_ENV === "production" ? ".kpstudio.vn" : undefined,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({
    success: false,
    message: "Sai tài khoản hoặc mật khẩu!",
  });
}
