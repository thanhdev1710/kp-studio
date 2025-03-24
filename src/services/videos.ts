import { VideoType } from "@/types/videos";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export async function getVideosHomePage(): Promise<VideoType[]> {
  try {
    if (!apiUrl || !apiKey) {
      throw new Error("API URL or API Key is missing.");
    }
    const res = await fetch(`${apiUrl}videos`, {
      headers: {
        "x-api-key": apiKey,
      },
      cache: "force-cache",
      next: { tags: ["video"] },
    });

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching wedding data:", error);
    throw error;
  }
}
