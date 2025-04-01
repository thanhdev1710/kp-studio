import { listTabAnhThoiTrang } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  const typeDefault = listTabAnhThoiTrang.tabs.slice(1)[0].value;
  return redirect(`/anh-thoi-trang/${typeDefault}`);
}
