import { listTab } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  const typeDefault = listTab.tabs.slice(1)[0].value;
  return redirect(`/wedding/${typeDefault}`);
}
