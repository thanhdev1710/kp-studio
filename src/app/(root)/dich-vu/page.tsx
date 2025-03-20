import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ | KP Studio - Bảng Giá Dịch Vụ Chụp Ảnh Cưới",
  description:
    "Tham khảo bảng giá dịch vụ chụp ảnh cưới tại KP Studio. Chúng tôi cung cấp các gói dịch vụ chất lượng cao với chi phí hợp lý.",
  keywords:
    "bảng giá chụp ảnh cưới, dịch vụ chụp ảnh cưới, KP Studio, chụp ảnh cưới chuyên nghiệp",
};

export default function ServicesPage() {
  const services = [
    {
      name: "Chụp ảnh cưới ngoại cảnh",
      price: "10.000.000 VNĐ",
      details:
        "Thực hiện tại các địa điểm thiên nhiên đẹp, phong cách lãng mạn.",
    },
    {
      name: "Chụp ảnh cưới phim trường",
      price: "7.000.000 VNĐ",
      details:
        "Chụp trong phim trường chuyên nghiệp với nhiều bối cảnh đa dạng.",
    },
    {
      name: "Chụp ảnh pre-wedding",
      price: "8.500.000 VNĐ",
      details: "Concept sáng tạo, thể hiện câu chuyện tình yêu của bạn.",
    },
    {
      name: "Quay phim cưới cinematic",
      price: "15.000.000 VNĐ",
      details: "Ghi lại toàn bộ quá trình lễ cưới theo phong cách điện ảnh.",
    },
    {
      name: "Chụp ảnh gia đình",
      price: "5.000.000 VNĐ",
      details: "Lưu giữ những khoảnh khắc hạnh phúc bên gia đình bạn.",
    },
    {
      name: "Chụp ảnh sự kiện",
      price: "Liên hệ",
      details: "Ghi lại những khoảnh khắc quan trọng của sự kiện.",
    },
    {
      name: "Chụp ảnh chân dung nghệ thuật",
      price: "4.500.000 VNĐ",
      details: "Thể hiện phong cách cá nhân qua những bức ảnh chuyên nghiệp.",
    },
    {
      name: "Chụp ảnh sản phẩm",
      price: "Liên hệ",
      details:
        "Dịch vụ chụp ảnh sản phẩm cho doanh nghiệp, thương mại điện tử.",
    },
  ];

  return (
    <div className="containerCustom py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
        Dịch vụ của KP Studio
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Chúng tôi cung cấp nhiều gói dịch vụ chụp ảnh chuyên nghiệp, đảm bảo
        chất lượng cao với chi phí hợp lý.
      </p>
      <table className="w-full border-collapse border border-gray-300 text-left text-lg">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-4 border border-gray-300">Dịch vụ</th>
            <th className="p-4 border border-gray-300">Chi tiết</th>
            <th className="p-4 border border-gray-300 text-right">Giá</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-4 border border-gray-300 text-gray-800">
                {service.name}
              </td>
              <td className="p-4 border border-gray-300 text-gray-700">
                {service.details}
              </td>
              <td className="p-4 border border-gray-300 text-gray-900 font-semibold text-right">
                {service.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-gray-600 text-center mt-4">
        * Giá trên mang tính chất tham khảo, vui lòng liên hệ để biết thêm chi
        tiết.
      </p>
    </div>
  );
}
