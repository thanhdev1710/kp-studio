/* eslint-disable @typescript-eslint/no-explicit-any */
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function getServices(): Promise<
  {
    id: number;
    created_at: string;
    name: string;
    details: string;
    price: string;
  }[]
> {
  if (!apiUrl || !apiKey) {
    throw new Error("API URL hoặc API Key bị thiếu.");
  }

  try {
    const res = await fetch(`${apiUrl}dichvu`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      cache: "force-cache",
      next: { tags: ["dichvu"] },
    });

    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.error || "Lỗi không xác định từ API");
    }

    return result.services;
  } catch (error: any) {
    console.error("Lỗi gửi JSON:", error);
    throw error;
  }
}
