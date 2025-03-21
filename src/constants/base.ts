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
  { title: "Wedding", link: "/admin/wedding" },
  { title: "Events", link: "/admin/events" },
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
            label: "Ngoại cảnh 1",
            value: "ngoaicanh1",
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
