import ContactIcon from "@/components/Contact/ContactIcon";
import Logo from "@/components/Logo";

export function Footer({
  listNav,
}: {
  listNav: {
    title: string;
    link: string;
  }[];
}) {
  return (
    <footer className="bg-gray-50 py-16 fontMontserrat">
      <div className="containerCustom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-gray-600 mt-6 mb-8 max-w-md leading-relaxed">
              Tại <strong>KPStudio</strong>, chúng tôi tin rằng mỗi câu chuyện
              tình yêu đều mang một dấu ấn riêng và xứng đáng được lưu giữ bằng
              nghệ thuật và sự chân thực. Chúng tôi tận tâm ghi lại những khoảnh
              khắc quý giá của bạn, để chúng trở thành ký ức vẹn nguyên qua
              nhiều thế hệ.
            </p>
            <ContactIcon />
          </div>
          <div>
            <h3 className="fontPlayfairDisplay text-lg text-gray-800 mb-6">
              Truy cập nhanh
            </h3>
            <ul className="space-y-3">
              {listNav.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-pink-300 transition-colors duration-300 text-sm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="fontPlayfairDisplay text-lg text-gray-800 mb-6">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                <span className="text-gray-600 font-light text-sm">
                  23/14 Khiếu Năng Tĩnh, Phường An Lạc A, Quận Bình Tân
                  <br />
                  Hồ Chí Minh, Việt Nam
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                <span className="text-gray-600 font-light text-sm">
                  kpstudio2496@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
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
                <span className="text-gray-600 font-light text-sm">
                  0327865275 - 0908048982
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <strong>KP Studio</strong> . Tất cả
            quyền được bảo lưu.
          </p>
          <div className="flex space-x-6">
            <a
              href="/chinh-sach-bao-mat"
              className="text-gray-500 hover:text-pink-300 transition-colors duration-300 text-sm"
            >
              Chính sách bảo mật
            </a>
            <a
              href="/dieu-khoan-su-dung"
              className="text-gray-500 hover:text-pink-300 transition-colors duration-300 text-sm"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
