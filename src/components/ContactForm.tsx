"use client";
import { sendEmail } from "@/actions/contact";
import React from "react";

export default function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<null | {
    status: "success" | "error";
    message: string;
  }>(null);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const res = await sendEmail(formData);
        setLoading(false);
        setResult(res);
      }}
      className="bg-gray-50 p-8"
    >
      <h3 className="fontPlayfairDisplay text-2xl text-gray-800 mb-6">
        Đặt Lịch Chụp Hình
      </h3>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Họ và Tên *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Địa chỉ Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Số điện thoại *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ngày cưới (nếu đã biết)
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hãy chia sẻ về đám cưới của bạn *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
          ></textarea>
        </div>
        <div className="relative">
          {result && (
            <div
              className={`p-3 mb-4 flex items-center rounded-lg text-sm ${
                result.status === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {result.status === "success" ? (
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
              <span>{result.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-3 transition-colors duration-300 text-sm tracking-wider rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="w-5 h-5 mr-2 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 12a8 8 0 018-8"
                  ></path>
                </svg>
                Đang gửi...
              </>
            ) : (
              "GỬI TIN NHẮN"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
