import PhotoGallery from "@/components/PhotoGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding",
};

export type TabType = "studio" | "phimtruong" | "ngoaicanh";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ type: TabType }>;
}) {
  const { type = "studio" } = await searchParams;
  const tabs: TabType[] = ["studio", "phimtruong", "ngoaicanh"];
  const photos = {
    studio: [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
    ],
    phimtruong: ["/images/img3.jpg", "/images/img4.jpg"],
    ngoaicanh: [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
    ],
  };
  let activeTab: TabType;
  if (tabs.includes(type)) activeTab = type;
  else activeTab = "studio";

  return (
    <div>
      <PhotoGallery photos={photos[activeTab]} tabs={tabs} type={activeTab} />
    </div>
  );
}
