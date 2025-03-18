/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.API_KEY;

export async function InsertWedding(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  try {
    const res = await fetch(`${apiUrl}wedding`, {
      method: "POST",
      body: formData,
      headers: { "x-api-key": apiKey },
    });

    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.error || "Lỗi không xác định từ API");
    }

    return {
      status: "success",
      data: result,
    };
  } catch (error: any) {
    console.error("Lỗi gửi FormData:", error);
    return {
      status: "error",
      error: error.message || error.toString(),
    };
  } finally {
    revalidateTag("wedding");
  }
}

export async function DeleteWedding(id: number) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  try {
    const res = await fetch(`${apiUrl}wedding/${id}`, {
      method: "DELETE",
      headers: { "x-api-key": apiKey },
    });

    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.error || "Lỗi không xác định từ API");
    }

    return {
      status: "success",
      data: result,
    };
  } catch (error: any) {
    console.error("Lỗi gửi FormData:", error);
    return {
      status: "error",
      error: error.message || error.toString(),
    };
  } finally {
    revalidateTag("wedding");
  }
}
