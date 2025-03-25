import { updateVideo } from "@/actions/videos";
import ButtonAction from "@/components/button/ButtonAction";
import { getVideosHomePage } from "@/services/videos";

export default async function AdminVideoSection() {
  const videos = await getVideosHomePage();

  return (
    <div className="containerCustom py-12">
      <h2 className="text-xl font-semibold text-center mb-8">Quản lý Video</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-4 font-semibold bg-gray-200 p-3 rounded-md">
          <div className="text-center">URL Video</div>
          <div className="text-center">Tiêu đề</div>
          <div className="text-center">Mô tả</div>
          <div className="text-center">Hành động</div>
        </div>

        {videos.map((video) => (
          <form
            key={video.id}
            action={updateVideo}
            className="grid grid-cols-4 items-center gap-2 p-3 border rounded-md shadow-sm"
          >
            <input name="id" type="hidden" defaultValue={video.id} />

            {/* Nhập URL YouTube */}
            <input
              type="text"
              name="url"
              required
              defaultValue={video.url}
              placeholder="Nhập URL YouTube"
              className="border p-2 rounded-md outline-none focus:border-gray-600 transition"
            />

            {/* Nhập Tiêu đề */}
            <input
              type="text"
              name="title"
              required
              defaultValue={video.title}
              placeholder="Nhập tiêu đề"
              className="border p-2 rounded-md outline-none focus:border-gray-600 transition"
            />

            {/* Nhập Nội dung mô tả (Chỉ dành cho video chính) */}
            {video.isMain ? (
              <textarea
                name="content"
                defaultValue={video.content}
                placeholder="Nhập mô tả video"
                className="border p-2 rounded-md outline-none focus:border-gray-600 transition"
              />
            ) : (
              <span className="text-center">Không có</span>
            )}

            <ButtonAction title="Lưu" titleLoading="Chờ..." type="edit" />
          </form>
        ))}
      </div>
    </div>
  );
}
