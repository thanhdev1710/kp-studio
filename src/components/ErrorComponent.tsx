"use client";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset?: (() => void) | undefined;
}) {
  console.error(error.message);
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center bg-white">
      <h2 className="text-2xl font-bold text-red-600">Ôi! Đã xảy ra lỗi.</h2>
      <p className="text-gray-600 mt-2">
        Đã xảy ra lỗi trong quá trình xử lý, nhưng không có thông báo chi tiết.
      </p>
      {reset && (
        <button
          onClick={reset}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300"
        >
          Thử lại
        </button>
      )}
    </div>
  );
}
