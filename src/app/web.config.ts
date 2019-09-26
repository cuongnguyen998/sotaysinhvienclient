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
  {
    path: "/hoc-tap-ueh",
    childrenPath: [
      {
        path: "/portal",
        childrenPath: [],
        title: "Portal sinh viên",
        class: ""
      },
      {
        path: "/email",
        childrenPath: [],
        title: "Email sinh viên",
        class: ""
      },
      {
        path: "/the-sinh-vien",
        childrenPath: [],
        title: "Thẻ sinh viên",
        class: ""
      },
      {
        path: "/elearning",
        childrenPath: [],
        title: "Hệ thống học trực tuyến (Elearning)",
        class: ""
      },
      {
        path: "/thu-vien",
        childrenPath: [],
        title: "Thư viện UEH",
        class: ""
      },
      {
        path: "/khung-thoi-gian",
        childrenPath: [],
        title: "Khung thời gian đào tạo hàng năm",
        class: ""
      },
      {
        path: "/thoi-gian-hoc",
        childrenPath: [],
        title: "Thời gian học trong ngày",
        class: ""
      },
      {
        path: "/dang-ky-hoc-phan",
        childrenPath: [],
        title: "Đăng ký học phần, hủy học phần",
        class: ""
      },
      {
        path: "/mo-lop-hoc-phan",
        childrenPath: [],
        title: "Mở lớp học phần theo nhu cầu",
        class: ""
      },
      {
        path: "/hoc-phi",
        childrenPath: [],
        title: "Học phí - cách thức nộp học phí",
        class: ""
      },
      {
        path: "/vang-thi",
        childrenPath: [],
        title: "Vắng thi - Đăng ký thi ghép",
        class: ""
      },
      {
        path: "/phuc-khao",
        childrenPath: [],
        title: "Quy định liên quan về Thi - Phúc khảo",
        class: ""
      },
      {
        path: "/danh-gia-ren-luyen",
        childrenPath: [],
        title: "Đánh giá rèn luyện sinh viên",
        class: ""
      },
      {
        path: "/chuyen-diem",
        childrenPath: [],
        title: "Chuyển điểm",
        class: ""
      },
      {
        path: "/nghi-hoc",
        childrenPath: [],
        title: "Nghỉ học tạm thời - Nhập học lại - Thôi học",
        class: ""
      },
      {
        path: "/nghien-cuu",
        childrenPath: [],
        title: "Nghiên cứu khoa học sinh viên",
        class: ""
      },
      {
        path: "/hoc-phan-khoa-luan",
        childrenPath: [],
        title: "Học phần khóa luận tốt nghiệp",
        class: ""
      },
      {
        path: "/chuan-dau-ra",
        childrenPath: [],
        title: "Chuẩn đầu ra các ngành/ chuyên ngành",
        class: ""
      },
      {
        path: "/dieu-kien-tot-nghiep",
        childrenPath: [],
        title: "Điều kiện xét và công nhận tốt nghiệp",
        class: ""
      },
      {
        path: "/xep-hang-tot-nghiep",
        childrenPath: [],
        title: "Xếp hạng tốt nghiệp",
        class: ""
      },
      {
        path: "/chat-luong-cao",
        childrenPath: [],
        title: "Chương trình chất lượng cao",
        class: ""
      },
      {
        path: "/cu-nhan-tai-nang",
        childrenPath: [],
        title: "Chương trình cử nhân tài năng",
        class: ""
      },
      {
        path: "/dao-tao-thu-hai",
        childrenPath: [],
        title: "Chương trình đào tạo thứ hai",
        class: ""
      }
    ],
    title: "Học tập",
    class: ""
  },
  {
    path: "/dong-hanh-ueh",
    childrenPath: [
      {
        path: "/co-van-hoc-tap",
        childrenPath: [],
        title: "Cố vấn học tập",
        class: ""
      },
      {
        path: "/ky-tuc-xa",
        childrenPath: [],
        title: "Ký túc xá UEH",
        class: ""
      },
      {
        path: "/mien-giam-hoc-phi",
        childrenPath: [],
        title: "Chế độ miễn giảm học phí (MGHP)",
        class: ""
      },
      {
        path: "/hoc-bong-sinh-vien",
        childrenPath: [],
        title: "Học bổng cho sinh viên",
        class: ""
      },
      {
        path: "/tin-dung-hoc-tap",
        childrenPath: [],
        title: "Tín dụng học tập",
        class: ""
      },
      {
        path: "/viec-lam",
        childrenPath: [],
        title: "Việc làm",
        class: ""
      },
      {
        path: "/khoi-nghiep",
        childrenPath: [],
        title: "Khởi nghiệp",
        class: ""
      }
    ],
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
        title: "Các Câu lạc bộ/ Đội/ Nhóm/ Ban Chuyên môn",
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
    path: "/thong-tin-lien-he",
    childrenPath: [],
    title: "Thông tin liên hệ",
    class: ""
  },
  {
    path: "/goc-tien-ich",
    childrenPath: [
      {
        path: "/bieu-mau",
        childrenPath: [],
        title: "Các biểu mẫu, logo",
        class: ""
      },
      {
        path: "/phan-mem-ho-tro",
        childrenPath: [],
        title: "Các phần mềm hỗ trợ trong quá trình học tập của sinh viên",
        class: ""
      },
      {
        path: "/xe-buyt",
        childrenPath: [],
        title: "Xe buýt tại TP.HCM - Một số tuyến đi tới các cơ sở của UEH",
        class: ""
      }
    ],
    title: "Tiện ích bổ sung",
    class: ""
  }
];
