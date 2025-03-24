/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function updateVideo(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const body = JSON.stringify({
    id: Number(formData.get("id")),
    url: formData.get("url") as string,
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });

  try {
    const res = await fetch(`${apiUrl}videos`, {
      method: "PATCH",
      body,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.error || "Lỗi không xác định từ API");
    }
  } catch (error: any) {
    console.error("Lỗi gửi JSON:", error);
    throw error;
  } finally {
    revalidateTag("video");
  }
}
