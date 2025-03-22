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

export interface ListTab {
  tabs: {
    value: string;
    label: string;
    children?: ListTab;
  }[];
}
