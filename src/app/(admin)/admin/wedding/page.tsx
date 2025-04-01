import { redirect } from "next/navigation";
import { listTab } from "@/constants/base";

export default function page() {
  const typeDefault = listTab.tabs[0].value;
  return redirect("/admin/wedding/" + typeDefault);
}
