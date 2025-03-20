export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white text-black space-y-8">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-600 text-lg italic font-medium animate-pulse">
        Đang tải, vui lòng chờ...
      </p>
    </div>
  );
}
