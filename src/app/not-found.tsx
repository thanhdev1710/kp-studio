import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl text-gray-700 font-medium mb-6">
        Oops! Trang bạn tìm không tồn tại.
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Có vẻ như bạn đã nhập sai địa chỉ hoặc trang này không còn tồn tại. Hãy
        quay lại trang chủ để tiếp tục khám phá.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
