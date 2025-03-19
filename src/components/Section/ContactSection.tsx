"use client";
import { useState } from "react";
import ContactIcon from "../ContactIcon";
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    // Simulate a successful form submission
    setFormStatus("success");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
    // Reset status after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="containerCustom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="fontPlayfairDisplay text-3xl md:text-4xl text-gray-800 mb-6">
              NHẬN TƯ VẤN CHI TIẾT
            </h2>
            <div className="w-20 h-0.5 bg-pink-200 mb-8"></div>
            <p className="fontMontserrat text-gray-600 mb-8 leading-relaxed">
              Chúng tôi rất mong được lắng nghe về kế hoạch đám cưới của bạn và
              cùng thảo luận cách ghi lại ngày trọng đại của bạn. Hãy điền vào
              biểu mẫu và chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-pink-200 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-1">Email</h3>
                  <p className="text-gray-600">kpstudio2496@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-pink-200 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-1">
                    Số điện thoại
                  </h3>
                  <p className="text-gray-600">0327865275 - 0908048982</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-pink-200 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-1">Địa chỉ</h3>
                  <p className="text-gray-600">
                    23/14 Khiếu Năng Tĩnh, Phường An Lạc A, Quận Bình Tân
                    <br />
                    Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-gray-800 font-medium mb-4">
                Theo dõi chúng tôi
              </h3>
              <ContactIcon />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8">
              <h3 className="fontPlayfairDisplay text-2xl text-gray-800 mb-6">
                Đặt Lịch Chụp Hình
              </h3>
              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ với bạn sớm.
                </div>
              )}
              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.
                </div>
              )}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.date}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none transition-colors duration-300"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 transition-colors duration-300 text-sm tracking-wider"
                  >
                    GỬI TIN NHẮN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
