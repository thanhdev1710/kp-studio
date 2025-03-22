import { NextRequest, NextResponse } from "next/server";

export function hello(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token =
    searchParams.get("token") || req.cookies.get("ACCESS_TOKEN")?.value; // Lấy token từ query hoặc cookies
  const validToken = process.env.ACCESS_TOKEN; // Token hợp lệ

  if (!token || token !== validToken) {
    return NextResponse.redirect(new URL("/error", req.url));
  }

  // Nếu token hợp lệ, lưu vào cookie để dùng cho lần sau
  const response = NextResponse.next();
  response.cookies.set("ACCESS_TOKEN", token, {
    httpOnly: true, // Bảo mật, chỉ có server đọc được
    secure: process.env.NODE_ENV === "production", // Chỉ bật secure trên production
    maxAge: 60 * 60 * 24, // Token tồn tại 1 ngày
  });

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/|favicon.ico|sitemap.xml|robots.txt|manifest.json|images/|error).*)",
};
