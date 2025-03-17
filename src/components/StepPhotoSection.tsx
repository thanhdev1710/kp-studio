export default function StepPhotoSection() {
  const listStepsPhoto = [
    "Đăng ký dịch vụ chụp ảnh cưới bằng cách điền thông tin vào form bên dưới.",
    "Đến trực tiếp studio để xem sản phẩm, chọn ngày chụp, ký hợp đồng và chọn ngày thử trang phục.",
    "Trang điểm & chụp ảnh cưới , quay video cưới và chọn ảnh sau khi chụp.",
    "Nhận file ảnh đã chỉnh sửa & duyệt in album để nhận sản phẩm cuối cùng.",
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <h3 className="fontPlayfairDisplay lg:text-4xl text-2xl text-center text-gray-800">
        Chụp ảnh cưới tại KPStudio như thế nào ?
      </h3>
      <hr className="mt-3 mb-6" />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        {listStepsPhoto.map((str, i) => (
          <div className="fontMontserrat text-gray-600" key={i}>
            <span className="uppercase md:text-2xl text-xl font-bold">
              Bước {i + 1}
            </span>
            <p className="md:text-base text-[14px] font-light mt-3">{str}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
