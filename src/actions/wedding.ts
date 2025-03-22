/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function InsertWedding(formData: FormData, typePage: string) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const payload = {
    name: formData.get("name"),
    type: formData.get("typeLv1"),
    imageUrls: JSON.parse(formData.get("imageUrls") as string),
  };

  try {
    const res = await fetch(`${apiUrl}images/${typePage}`, {
      method: "POST",
      body: JSON.stringify(payload), // Gửi JSON thay vì FormData
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
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
    console.error("Lỗi gửi JSON:", error);
    return {
      status: "error",
      error: error.message || error.toString(),
    };
  } finally {
    revalidateTag("img");
  }
}

export async function DeleteWedding(id: number, typePage: string) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  try {
    const res = await fetch(`${apiUrl}images/${typePage}/${id}`, {
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
    revalidateTag("img");
  }
}

export async function ReloadWedding() {
  revalidateTag("img");
}
