import { listTabEvent } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  // riêng event chỉ lấy all
  const typeDefault = listTabEvent.tabs[0].value;
  return redirect(`/events/${typeDefault}`);
}
