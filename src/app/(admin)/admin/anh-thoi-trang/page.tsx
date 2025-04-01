import { listTabAnhThoiTrang } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  const typeDefault = listTabAnhThoiTrang.tabs[0].value;
  return redirect(`/admin/anh-thoi-trang/${typeDefault}`);
}
