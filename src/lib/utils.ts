import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function convertToWebP(
  file: File,
  quality = 0.7,
  maxSize = 1500
): Promise<File> {
  return new Promise<File>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Canvas không được hỗ trợ");

        // Tính toán kích thước ảnh để không vượt quá maxSize
        let { width, height } = img;
        if (width > maxSize || height > maxSize) {
          const scaleFactor = Math.min(maxSize / width, maxSize / height);
          width = Math.round(width * scaleFactor);
          height = Math.round(height * scaleFactor);
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // Chuyển sang WebP với chất lượng tối ưu
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(
                new File(
                  [blob],
                  file.name.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
                  { type: "image/webp" }
                )
              );
            } else {
              reject("Không thể tạo blob từ ảnh");
            }
          },
          "image/webp",
          quality // Giảm chất lượng xuống mức phù hợp
        );
      };
    };
  });
}

export function convertToEmbed(url: string) {
  return url.replace("watch?v=", "embed/");
}
