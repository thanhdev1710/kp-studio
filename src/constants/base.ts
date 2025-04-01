import { ListTab } from "@/types/wedding";

export const listNavRoot = [
  { title: "Trang chủ", link: "/" },
  { title: "Giới thiệu", link: "/gioi-thieu" },
  { title: "Wedding", link: "/wedding" },
  { title: "Events", link: "/events" },
  { title: "Ảnh thời trang", link: "/anh-thoi-trang" },
  // { title: "Tin tức", link: "/tin-tuc" },
  { title: "Liên hệ", link: "/lien-he" },
  { title: "Dịch vụ", link: "/dich-vu" },
];

export const listNavAdmin = [
  { title: "Trang chủ", link: "/admin/trang-chu" },
  { title: "Khoảng khắc đẹp", link: "/admin/khoang-khac-dep" },
  { title: "Wedding", link: "/admin/wedding" },
  { title: "Events", link: "/admin/events" },
  { title: "Ảnh thời trang", link: "/admin/anh-thoi-trang" },
  { title: "Dịch vụ", link: "/admin/dich-vu" },
  { title: "Logout", link: "/api/logout" },
];

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
      label: "Sự kiện",
      value: "sukien",
    },
  ],
};

export const listTabAnhThoiTrang: ListTab = {
  tabs: [
    {
      label: "Tất cả",
      value: "all",
    },
    {
      label: "Chân dung",
      value: "chandung",
    },
    {
      label: "Concept",
      value: "concept",
    },
    {
      label: "Trend",
      value: "trend",
    },
  ],
};

export const listTabKhoangKhacDep: ListTab = {
  tabs: [
    {
      label: "Tất cả",
      value: "all",
    },
    {
      label: "Khoảng khắc",
      value: "khoangkhac",
    },
    {
      label: "Góc Cảm Hứng",
      value: "goccamhung",
    },
  ],
};
