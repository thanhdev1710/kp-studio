/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function addService(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const body = JSON.stringify({
    name: formData.get("name") as string,
    details: formData.get("details") as string,
    price: formData.get("price") as string,
  });

  try {
    const res = await fetch(`${apiUrl}dichvu`, {
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
    revalidateTag("dichvu");
  }
}

export async function deleteService(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const id = formData.get("id");

  try {
    const res = await fetch(`${apiUrl}dichvu/${id}`, {
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
    revalidateTag("dichvu");
  }
}

export async function updateService(formData: FormData) {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  const id = formData.get("id");
  const body = JSON.stringify({
    name: formData.get("name") as string,
    details: formData.get("details") as string,
    price: formData.get("price") as string,
  });

  try {
    const res = await fetch(`${apiUrl}dichvu/${id}`, {
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
    revalidateTag("dichvu");
  }
}
