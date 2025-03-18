export interface ListWedding {
  data: Wedding[];
}

export interface Wedding {
  id: number;
  created_at: string;
  image_url: string;
  type: string;
  name: string;
  blur_data: string;
}

export type TabType = "studio" | "phimtruong" | "ngoaicanh" | "all";
