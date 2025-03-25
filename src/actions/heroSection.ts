/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function addHeroSection(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const body = JSON.stringify({
    url: formData.get("url") as string,
    title: formData.get("title") as string,
    image_url: formData.get("image_url") as string,
  });

  try {
    const res = await fetch(`${apiUrl}heroSection`, {
      method: "POST",
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
    revalidateTag("heroSection");
  }
}

export async function deleteHeroSection(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const id = formData.get("id");

  try {
    const res = await fetch(`${apiUrl}heroSection/${id}`, {
      method: "DELETE",
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
    revalidateTag("heroSection");
  }
}
