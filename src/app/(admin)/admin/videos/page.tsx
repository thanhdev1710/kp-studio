import { updateVideo } from "@/actions/videos";
import { getVideosHomePage } from "@/services/videos";
import ButtonVideo from "./ButtonVideo";

export default async function Page() {
  const videos = await getVideosHomePage();

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-xl font-semibold text-center mb-8">Quản lý Video</h2>
      {videos.map((video) => (
        <form
          key={video.id}
          action={updateVideo}
          className="mb-6 p-6 border rounded-lg shadow-sm"
        >
          {/* Nhãn video chính/phụ */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              {video.isMain ? "Video Chính" : `Video Phụ ${video.id}`}
            </label>
          </div>

          <input name="id" type="hidden" defaultValue={video.id} />

          {/* Nhập URL YouTube */}
          <div className="mb-4">
            <label
              htmlFor={`url-${video.id}`}
              className="block text-sm font-medium mb-1"
            >
              URL Video
            </label>
            <input
              id={`url-${video.id}`}
              type="text"
              name="url"
              required
              defaultValue={video.url}
              placeholder="Nhập URL YouTube"
              className="w-full border p-2 rounded-md outline-none focus:border-gray-600 transition"
            />
          </div>

          {/* Nhập Tiêu đề */}
          <div className="mb-4">
            <label
              htmlFor={`title-${video.id}`}
              className="block text-sm font-medium mb-1"
            >
              Tiêu đề
            </label>
            <input
              id={`title-${video.id}`}
              type="text"
              name="title"
              required
              defaultValue={video.title}
              placeholder="Nhập tiêu đề"
              className="w-full border p-2 rounded-md outline-none focus:border-gray-600 transition"
            />
          </div>

          {/* Nhập Nội dung mô tả (Chỉ dành cho video chính) */}
          {video.isMain && (
            <div className="mb-4">
              <label
                htmlFor={`content-${video.id}`}
                className="block text-sm font-medium mb-1"
              >
                Nội dung mô tả
              </label>
              <textarea
                id={`content-${video.id}`}
                name="content"
                defaultValue={video.content}
                placeholder="Nhập mô tả video"
                className="w-full border p-2 rounded-md outline-none focus:border-gray-600 transition"
              />
            </div>
          )}

          <ButtonVideo />
        </form>
      ))}
    </div>
  );
}
