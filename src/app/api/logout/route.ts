import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("/login", req.url);
  (await cookies()).delete("token");
  return NextResponse.redirect(url);
}
