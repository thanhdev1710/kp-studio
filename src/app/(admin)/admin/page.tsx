import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Trang Admin</h1>
      <p>Chào mừng bạn đến với trang quản trị!</p>
    </div>
  );
}
