import ContactIcon from "../ContactIcon";
import ContactForm from "../ContactForm";
export const ContactSection = () => {
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
