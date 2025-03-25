import ButtonAction from "@/components/button/ButtonAction";
import { services } from "@/constants/base";

export default function Page() {
  const data = services;

  return (
    <div className="containerCustom py-12">
      <h2 className="text-xl font-semibold text-center mb-8">
        Quản lý Dịch Vụ
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-4 font-semibold gap-2 bg-gray-200 p-3 rounded-md">
          <div className="text-center">Dịch vụ</div>
          <div className="text-center">Chi tiết</div>
          <div className="text-center">Giá</div>
          <div className="text-center">Hành động</div>
        </div>

        {/* Form thêm mới */}
        <form className="grid grid-cols-4 items-center gap-2 p-3 border rounded-md shadow-sm">
          <input
            type="text"
            name="name"
            placeholder="Tên dịch vụ"
            required
            className="border p-2 w-full rounded-md"
          />
          <input
            type="text"
            name="details"
            placeholder="Chi tiết"
            required
            className="border p-2 w-full rounded-md"
          />
          <input
            type="text"
            name="price"
            placeholder="Giá"
            required
            className="border p-2 w-full rounded-md"
          />
          <ButtonAction type="add" title="Thêm" titleLoading="Chờ..." />
        </form>

        {/* Danh sách dịch vụ */}
        {data.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-[80%_20%] items-center gap-2 p-3 border rounded-md shadow-sm"
          >
            <form className="grid grid-cols-4 gap-2 items-center">
              <input
                type="text"
                name="name"
                defaultValue={service.name}
                className="border p-2 w-full rounded-md"
              />
              <input
                type="text"
                name="details"
                defaultValue={service.details}
                className="border p-2 w-full rounded-md"
              />
              <input
                type="text"
                name="price"
                defaultValue={service.price}
                className="border p-2 w-full rounded-md"
              />
              <input name="id" type="hidden" defaultValue={service.id} />
              <ButtonAction title="Lưu" titleLoading="Chờ..." type="edit" />
            </form>

            <form>
              <input name="id" type="hidden" defaultValue={service.id} />
              <ButtonAction title="Xoá" titleLoading="Chờ..." type="delete" />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
