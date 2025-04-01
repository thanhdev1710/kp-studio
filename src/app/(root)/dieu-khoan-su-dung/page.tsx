import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng & Chính sách bảo mật | KP Studio",
  description:
    "Tìm hiểu về điều khoản sử dụng và chính sách bảo mật của KP Studio. Chúng tôi cam kết bảo vệ quyền riêng tư và quyền lợi của khách hàng khi sử dụng dịch vụ chụp ảnh cưới chuyên nghiệp.",
  keywords:
    "điều khoản sử dụng, chính sách bảo mật, KP Studio, bảo vệ dữ liệu khách hàng",
};

export default function TermsPrivacyPage() {
  return (
    <div className="containerCustom mx-auto py-12 fontMontserrat">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
        Điều khoản sử dụng & Chính sách bảo mật
      </h1>

      {/* Điều khoản sử dụng */}
      <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
        1. Điều khoản sử dụng
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        Khi sử dụng dịch vụ của KP Studio, bạn đồng ý với các điều khoản và điều
        kiện sau đây:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        <li>
          Khách hàng có trách nhiệm cung cấp thông tin chính xác khi đặt dịch
          vụ.
        </li>
        <li>
          KP Studio cam kết cung cấp dịch vụ đúng với mô tả và thỏa thuận.
        </li>
        <li>
          Không sao chép, chỉnh sửa hoặc sử dụng hình ảnh từ KP Studio mà không
          có sự đồng ý.
        </li>
        <li>
          Chúng tôi có quyền thay đổi nội dung trang web mà không cần thông báo
          trước.
        </li>
      </ul>

      {/* Chính sách bảo mật */}
      <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
        2. Chính sách bảo mật
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        KP Studio cam kết bảo vệ quyền riêng tư của khách hàng và đảm bảo rằng
        thông tin cá nhân của bạn được xử lý một cách an toàn.
      </p>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Thông tin chúng tôi thu thập
      </h3>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        <li>Họ tên, số điện thoại và email khi bạn đặt dịch vụ.</li>
        <li>Thông tin thanh toán nếu bạn thực hiện giao dịch trên website.</li>
        <li>
          Hình ảnh được chụp trong quá trình sử dụng dịch vụ của KP Studio.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Cách chúng tôi sử dụng thông tin
      </h3>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        <li>Liên hệ và xác nhận lịch hẹn với khách hàng.</li>
        <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng.</li>
        <li>Bảo mật thông tin và ngăn chặn các hành vi gian lận.</li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Cam kết bảo vệ thông tin
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        KP Studio không chia sẻ thông tin khách hàng với bên thứ ba khi chưa có
        sự đồng ý của bạn, trừ khi pháp luật yêu cầu.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
        Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật hoặc điều khoản sử
        dụng, vui lòng liên hệ:
      </p>
      <p className="text-lg text-gray-700">📧 Email: kpstudio2496@gmail.com</p>
      <p className="text-lg text-gray-700">
        📞 Số điện thoại: 0327865275 - 0908048982
      </p>
    </div>
  );
}
