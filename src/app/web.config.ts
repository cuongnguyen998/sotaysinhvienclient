export declare interface RouteInfo {
  path: string;
  childrenPath: Array<RouteInfo>;
  title: string;
  class: string;
}

export const ROUTE: RouteInfo[] = [
  {
    path: "/tong-quan-ueh",
    childrenPath: [
      {
        path: "/van-hoa",
        childrenPath: [],
        title: "Văn hóa UEH",
        class: ""
      },
      {
        path: "/co-so",
        childrenPath: [],
        title: "Các cơ sở trực thuộc",
        class: ""
      }
    ],
    title: "Tổng quan",
    class: ""
  },
  { path: "/hoc-tap-ueh", childrenPath: [], title: "Học tập", class: "" },
  {
    path: "/dong-hanh-ueh",
    childrenPath: [],
    title: "Đồng hành cùng sinh viên",
    class: ""
  },
  {
    path: "/san-choi-tai-ueh",
    childrenPath: [
      {
        path: "/thong-tin-doan-hoi",
        childrenPath: [],
        title: "Thông tin về Đoàn - hội",
        class: ""
      },
      {
        path: "/clb-doi-nhom",
        childrenPath: [],
        title: "Các câu lạc bộ/ đội/ nhóm",
        class: ""
      },
      {
        path: "/hoat-dong-doan",
        childrenPath: [],
        title: "Các hoạt động đoàn - hội nổi bật trong năm",
        class: ""
      },
      {
        path: "/hoat-dong-van-the-my",
        childrenPath: [],
        title: "Các hoạt động văn thể mỹ dành cho sinh viên đại học chính quy",
        class: ""
      }
    ],
    title: "Sân chơi",
    class: ""
  },
  {
    path: "/thong-tin-lien-he-cac-don-vi",
    childrenPath: [],
    title: "Thông tin liên hệ",
    class: ""
  },
  {
    path: "/goc-tien-ich",
    childrenPath: [],
    title: "Tiện ích bổ sung",
    class: ""
  }
];
