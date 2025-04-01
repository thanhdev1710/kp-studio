import { getServices } from "@/services/dichVu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ | KP Studio - Bảng Giá Dịch Vụ Chụp Ảnh Cưới",
  description:
    "Tham khảo bảng giá dịch vụ chụp ảnh cưới tại KP Studio. Chúng tôi cung cấp các gói dịch vụ chất lượng cao với chi phí hợp lý.",
  keywords:
    "bảng giá chụp ảnh cưới, dịch vụ chụp ảnh cưới, KP Studio, chụp ảnh cưới chuyên nghiệp",
};

export default async function ServicesPage() {
  const services = await getServices();
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
