"use server";

import { createTransport } from "nodemailer";

export async function sendEmail(formData: FormData): Promise<{
  status: "success" | "error";
  message: string;
}> {
  const values = Object.fromEntries(formData.entries());
  console.log(values);

  if (!values.name || !values.email || !values.phone || !values.message) {
    return { status: "error", message: "Vui lòng điền đầy đủ thông tin" };
  }

  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_ADMIN}`,
      subject: "Đặt Lịch Chụp Hình Mới",
      text: `
      Họ và Tên: ${values.name}
      Email: ${values.email}
      Số điện thoại: ${values.phone}
      Ngày cưới: ${values.date || "Chưa xác định"}
      Tin nhắn: ${values.message}
    `,
    });

    return { status: "success", message: "Gửi email thành công" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Gửi email thất bại" };
  }
}
