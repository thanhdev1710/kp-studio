import { ContactSection } from "@/components/Section/ContactSection";
import MapsSection from "@/components/Section/MapsSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Giới thiệu | KP Studio - Studio Chụp Ảnh Cưới Chuyên Nghiệp",
  description:
    "KP Studio - Studio chụp ảnh cưới chuyên nghiệp tại TP.HCM. Lưu giữ khoảnh khắc hạnh phúc với dịch vụ chụp ảnh cưới cao cấp, sáng tạo và đầy cảm xúc.",
  keywords:
    "studio chụp ảnh cưới, chụp ảnh cưới đẹp, chụp ảnh cưới TP.HCM, KP Studio, chụp ảnh cưới chuyên nghiệp",
};

export default function AboutPage() {
  return (
    <>
      <div className="containerCustom mx-auto py-12 fontMontserrat">
        <Image
          src="/images/banner-kpstudio.jpeg"
          alt="KP Studio - Studio Chụp Ảnh Cưới"
          width={1200}
          height={600}
          className="w-full h-auto mb-6 object-cover md:aspect-[2/1] aspect-[3/2]"
        />

        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
          Giới thiệu về KP Studio
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          KP Studio là điểm đến lý tưởng cho các cặp đôi mong muốn lưu giữ những
          khoảnh khắc đáng nhớ của mình. Với hơn 10 năm kinh nghiệm trong ngành,
          chúng tôi mang đến những bộ ảnh cưới đầy cảm xúc, tinh tế và đẳng cấp.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Đội ngũ nhiếp ảnh gia chuyên nghiệp của KP Studio luôn sáng tạo và đổi
          mới, giúp các cặp đôi thể hiện tình yêu theo cách tự nhiên nhất. Chúng
          tôi cung cấp nhiều phong cách chụp khác nhau từ cổ điển, vintage đến
          hiện đại, trẻ trung để đáp ứng mọi nhu cầu.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Ngoài chụp ảnh cưới, KP Studio còn cung cấp dịch vụ chụp ảnh kỷ niệm,
          chụp ảnh gia đình và chụp ảnh sự kiện. Chúng tôi cam kết mang lại
          những sản phẩm chất lượng cao, giúp bạn lưu giữ những khoảnh khắc quý
          giá nhất.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Quy trình làm việc
        </h2>
        <ul className="text-lg text-gray-700 leading-relaxed mb-6 list-disc list-inside max-w-3xl">
          <li>Tư vấn phong cách và địa điểm chụp phù hợp</li>
          <li>Chuẩn bị trang phục, trang điểm và làm tóc chuyên nghiệp</li>
          <li>Chụp ảnh theo concept đã thống nhất</li>
          <li>Chỉnh sửa ảnh, điều chỉnh màu sắc và thiết kế album</li>
          <li>
            Bàn giao sản phẩm cuối cùng đến khách hàng dưới dạng file kỹ thuật
            số hoặc album in chất lượng cao
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Lý do chọn KP Studio
        </h2>
        <ul className="text-lg text-gray-700 leading-relaxed mb-6 list-disc list-inside max-w-3xl">
          <li>Đội ngũ nhiếp ảnh gia sáng tạo và chuyên nghiệp</li>
          <li>Trang thiết bị hiện đại, đảm bảo chất lượng hình ảnh</li>
          <li>Dịch vụ trọn gói từ tư vấn, chụp ảnh đến in ấn album</li>
          <li>Chi phí hợp lý với nhiều gói dịch vụ đa dạng</li>
          <li>Cam kết mang đến những khoảnh khắc đẹp nhất</li>
          <li>Hỗ trợ chỉnh sửa ảnh theo yêu cầu của khách hàng</li>
          <li>Các gói dịch vụ linh hoạt, phù hợp với từng nhu cầu riêng</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Đội ngũ của chúng tôi
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Chúng tôi sở hữu một đội ngũ chuyên gia dày dặn kinh nghiệm gồm nhiếp
          ảnh gia, stylist, chuyên viên trang điểm và đội ngũ hỗ trợ tận tâm.
          Mỗi thành viên đều được đào tạo chuyên sâu để mang đến dịch vụ tốt
          nhất cho khách hàng.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Nhiếp ảnh gia KP Studio"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Chuyên viên trang điểm KP Studio"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Stylist KP Studio"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Không gian làm việc tại KP Studio
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Không gian studio của chúng tôi được thiết kế với ánh sáng tự nhiên và
          trang thiết bị hiện đại, đảm bảo mỗi khung hình đều hoàn hảo. Chúng
          tôi có nhiều bối cảnh chụp đa dạng, từ không gian trong nhà ấm áp đến
          cảnh ngoài trời thơ mộng.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Không gian bên trong KP Studio"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Góc chụp ảnh tại KP Studio"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Thiết bị chụp ảnh hiện đại tại KP Studio"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/banner-kpstudio.jpeg"
            alt="Không gian chụp ảnh cưới lãng mạn"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Các gói dịch vụ
        </h2>
        <ul className="text-lg text-gray-700 leading-relaxed mb-10 list-disc list-inside max-w-3xl">
          <li>
            <strong>Gói chụp ảnh cưới ngoại cảnh:</strong> Thực hiện tại các địa
            điểm đẹp, thiên nhiên thơ mộng.
          </li>
          <li>
            <strong>Gói chụp ảnh cưới phim trường:</strong> Chụp trong không
            gian chuyên nghiệp với bối cảnh đa dạng.
          </li>
          <li>
            <strong>Gói chụp ảnh pre-wedding:</strong> Concept sáng tạo, chụp
            trước ngày cưới.
          </li>
          <li>
            <strong>Gói album cưới thiết kế riêng:</strong> Thiết kế album theo
            phong cách cá nhân.
          </li>
          <li>
            <strong>Gói quay phim cưới chuyên nghiệp:</strong> Ghi lại toàn bộ
            quá trình lễ cưới theo phong cách cinematic.
          </li>
          <li>
            <strong>Gói chụp ảnh gia đình:</strong> Lưu giữ kỷ niệm đáng nhớ bên
            người thân.
          </li>
          <li>
            <strong>Gói chụp ảnh sự kiện:</strong> Dành cho các buổi tiệc, sinh
            nhật, hội nghị.
          </li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-6">
          Liên hệ KP Studio
        </h2>
        <p className="text-lg text-gray-700">
          📍 Địa chỉ: 23/14 Khiếu Năng Tĩnh, Phường An Lạc A, Quận Bình Tân, Hồ
          Chí Minh, Việt Nam
        </p>
        <p className="text-lg text-gray-700">
          📞 Số điện thoại: 0327865275 - 0908048982
        </p>
        <p className="text-lg text-gray-700">
          📧 Email: kpstudio2496@gmail.com
        </p>
      </div>
      <MapsSection />
      <ContactSection />
    </>
  );
}
