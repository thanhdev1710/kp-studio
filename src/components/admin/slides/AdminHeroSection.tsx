import { addHeroSection, deleteHeroSection } from "@/actions/heroSection";
import ButtonAction from "@/components/button/ButtonAction";
import { getHeroSection } from "@/services/heroSection";
import Image from "next/image";

export default async function AdminVideoSection() {
  const data = await getHeroSection();

  return (
    <div className="containerCustom py-12">
      <h2 className="text-xl font-semibold text-center mb-8">Quản lý Slides</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-4 font-semibold gap-2 bg-gray-200 p-3 rounded-md">
          <div className="text-center">Ảnh</div>
          <div className="text-center">Tiêu đề</div>
          <div className="text-center">Đường dẫn</div>
          <div className="text-center">Hành động</div>
        </div>

        <form
          action={addHeroSection}
          className="grid grid-cols-4 items-center gap-2 p-3 border rounded-md shadow-sm"
        >
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            required
            className="border p-2 flex-1"
          />
          <input
            type="text"
            name="title"
            placeholder="Tiêu đề"
            required
            className="border p-2 flex-1"
          />
          <input
            type="text"
            name="url"
            placeholder="Đường dẫn"
            required
            className="border p-2 flex-1"
          />
          <ButtonAction type="add" title="Thêm" titleLoading="Chờ..." />
        </form>

        {data.map((e) => (
          <div
            key={e.id}
            className="grid grid-cols-4 items-center gap-2 p-3 border rounded-md shadow-sm"
          >
            <Image
              alt="Test"
              src={e.image_url}
              placeholder="blur"
              blurDataURL={e.blur_data}
              width={300}
              height={200}
              className="w-full h-auto aspect-[3/2]"
            />

            <p className="line-clamp-2 break-words whitespace-pre-wrap">
              {e.title}
            </p>
            <p className="line-clamp-2 break-words whitespace-pre-wrap">
              {e.url}
            </p>

            <form action={deleteHeroSection}>
              <input readOnly name="id" type="hidden" defaultValue={e.id} />
              <ButtonAction title="Xoá" titleLoading="Chờ..." type="delete" />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
