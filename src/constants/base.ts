import { ListTab } from "@/types/wedding";

export const listNavRoot = [
  { title: "Trang chủ", link: "/" },
  { title: "Giới thiệu", link: "/gioi-thieu" },
  { title: "Wedding", link: "/wedding" },
  { title: "Events", link: "/events" },
  { title: "Tin tức", link: "/tin-tuc" },
  { title: "Liên hệ", link: "/lien-he" },
  { title: "Dịch vụ", link: "/dich-vu" },
];

export const listNavAdmin = [
  { title: "Admin", link: "/admin" },
  { title: "Trang chủ", link: "/admin/trang-chu" },
  { title: "Wedding", link: "/admin/wedding" },
  { title: "Events", link: "/admin/events" },
  { title: "Dịch vụ", link: "/admin/dich-vu" },
  { title: "Logout", link: "/api/logout" },
];

export const blur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNiYmJiYmIiLz48L3N2Zz4=";

export const listTab: ListTab = {
  tabs: [
    {
      label: "Tất cả",
      value: "all",
    },
    {
      label: "Studio",
      value: "studio",
    },
    {
      label: "Ngoại cảnh",
      value: "ngoaicanh",
      children: {
        tabs: [
          {
            label: "Phim trưởng",
            value: "phimtruong",
          },
          {
            label: "Ngoại cảnh 2",
            value: "ngoaicanh2",
          },
          {
            label: "Ngoại cảnh 3",
            value: "ngoaicanh3",
          },
        ],
      },
    },
    {
      label: "Trang phục cưới",
      value: "trangphucuoi",
    },
    {
      label: "Makeup",
      value: "makeup",
    },
  ],
};

export const listTabEvent: ListTab = {
  tabs: [
    {
      label: "Tất cả",
      value: "all",
    },
    {
      label: "Events 1",
      value: "events1",
    },
    {
      label: "Events 2",
      value: "events2",
    },
  ],
};

export const services = [
  {
    id: "8",
    name: "Chụp ảnh cưới ngoại cảnh",
    price: "10.000.000 VNĐ",
    details: "Thực hiện tại các địa điểm thiên nhiên đẹp, phong cách lãng mạn.",
  },
  {
    id: "7",
    name: "Chụp ảnh cưới phim trường",
    price: "7.000.000 VNĐ",
    details: "Chụp trong phim trường chuyên nghiệp với nhiều bối cảnh đa dạng.",
  },
  {
    id: "6",
    name: "Chụp ảnh pre-wedding",
    price: "8.500.000 VNĐ",
    details: "Concept sáng tạo, thể hiện câu chuyện tình yêu của bạn.",
  },
  {
    id: "5",
    name: "Quay phim cưới cinematic",
    price: "15.000.000 VNĐ",
    details: "Ghi lại toàn bộ quá trình lễ cưới theo phong cách điện ảnh.",
  },
  {
    id: "4",
    name: "Chụp ảnh gia đình",
    price: "5.000.000 VNĐ",
    details: "Lưu giữ những khoảnh khắc hạnh phúc bên gia đình bạn.",
  },
  {
    id: "3",
    name: "Chụp ảnh sự kiện",
    price: "Liên hệ",
    details: "Ghi lại những khoảnh khắc quan trọng của sự kiện.",
  },
  {
    id: "2",
    name: "Chụp ảnh chân dung nghệ thuật",
    price: "4.500.000 VNĐ",
    details: "Thể hiện phong cách cá nhân qua những bức ảnh chuyên nghiệp.",
  },
  {
    id: "1",
    name: "Chụp ảnh sản phẩm",
    price: "Liên hệ",
    details: "Dịch vụ chụp ảnh sản phẩm cho doanh nghiệp, thương mại điện tử.",
  },
];
