import { listTabEvent } from "@/constants/base";
import { redirect } from "next/navigation";

export default function page() {
  const typeDefault = listTabEvent.tabs[0].value;
  return redirect(`/admin/events/${typeDefault}`);
}
