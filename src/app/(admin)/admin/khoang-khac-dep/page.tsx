import { listTabKhoangKhacDep } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  const typeDefault = listTabKhoangKhacDep.tabs[0].value;
  return redirect(`/admin/khoang-khac-dep/${typeDefault}`);
}
