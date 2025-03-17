import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import sharp from "sharp";

export async function generateBlurDataURL(imagePath: string) {
  const buffer = await sharp(imagePath)
    .resize(10, 10) // Resize ảnh nhỏ để làm blur
    .toBuffer();
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
