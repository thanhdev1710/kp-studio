import { ListWedding } from "@/types/wedding";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getWeddingByType = async (
  type: string,
  typePage: string
): Promise<ListWedding> => {
  try {
    if (!apiUrl || !apiKey) {
      throw new Error("API URL or API Key is missing.");
    }
    const res = await fetch(`${apiUrl}images/${typePage}?type=${type}`, {
      headers: {
        "x-api-key": apiKey,
      },
      cache: "force-cache",
      next: { tags: ["img"] },
    });

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data: ListWedding = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching wedding data:", error);
    throw error;
  }
};
