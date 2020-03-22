export declare interface RouteInfo {
  path: string;
  childrenPath: Array<RouteInfo>;
  title: string;
  class: string;
  author: string;
  quote: string;
}

export const ROUTE: RouteInfo[] = [
  {
    path: "/tong-quan-ueh",
    childrenPath: [
      {
        path: "/van-hoa",
        childrenPath: [],
        title: "Văn hóa UEH",
        class: "",
        quote: "Đạo đức là sức mạnh của tâm hồn",
        author: "Rousseau"
      },
      {
        path: "/co-so",
        childrenPath: [],
        title: "Các cơ sở trực thuộc",
        class: "",
        quote:
          "Điều chúng ta biết chỉ là một giọt nước. Điều chúng ta không biết mênh mông như đại dương",
        author: "Einstein"
      }
    ],
    title: "Tổng quan",
    class: "",
    quote: "",
    author: ""
  },
  {
    path: "/hoc-tap-ueh",
    childrenPath: [
      {
        path: "/portal",
        childrenPath: [],
        title: "Portal sinh viên",
        class: "",
        quote: "Để thắng cuộc, bạn cần cả kỹ năng và ý chí",
        author: "Frank Tyger"
      },
      {
        path: "/email",
        childrenPath: [],
        title: "Email sinh viên",
        class: "",
        quote: "Trong cách học, phải lấy tự học làm cốt",
        author: "Hồ Chí Minh"
      },
      {
        path: "/the-sinh-vien",
        childrenPath: [],
        title: "Thẻ sinh viên",
        class: "",
        quote: "Ai không biết nghe, tất không biết nói chuyện",
        author: "Giarardin"
      },
      {
        path: "/elearning",
        childrenPath: [],
        title: "Hệ thống học trực tuyến (Elearning)",
        class: "",
        quote: "Người khôn ngoan là kẻ mà cái gì cũng thấy mới lạ",
        author: "Khuyết danh"
      },
      {
        path: "/thu-vien",
        childrenPath: [],
        title: "Thư viện UEH",
        class: "",
        quote:
          "Google can bring you back 100000 answers, a librarian can bring you back the right one",
        author: "Neil Gaiman"
      },
      {
        path: "/khung-thoi-gian",
        childrenPath: [],
        title: "Khung thời gian đào tạo hàng năm",
        class: "",
        quote:
          "Học tập có thể định nghĩa như là quá trình ghi nhớ những điều bạn thích",
        author: "Richard Saul Wurman"
      },
      {
        path: "/thoi-gian-hoc",
        childrenPath: [],
        title: "Thời gian học trong ngày",
        class: "",
        quote:
          "Cơ hội giống như bình minh, nếu bạn chờ đợi quá lâu, bạn có thể bỏ lỡ nó",
        author: "William Arthur"
      },
      {
        path: "/dang-ky-hoc-phan",
        childrenPath: [],
        title: "Đăng ký học phần, hủy học phần",
        class: "",
        quote:
          "Chúng ta không nên bỏ cuộc, chúng ta không nên để những khó khăn đánh bại mình",
        author: "A.P.J.Abdul Kalam"
      },
      {
        path: "/mo-lop-hoc-phan",
        childrenPath: [],
        title: "Mở lớp học phần theo nhu cầu",
        class: "",
        quote:
          "Trí tuệ con người trưởng thành trong tĩnh lặng còn tính cách con người trưởng thành trong bão táp",
        author: "W.Goethe"
      },
      {
        path: "/hoc-phi",
        childrenPath: [],
        title: "Học phí - cách thức nộp học phí",
        class: "",
        quote: "Dẫu có bạc vàng trăm vạn lạng. Chẳng bằng kinh sử một vài pho",
        author: "Lê Quý Đôn"
      },
      {
        path: "/vang-thi",
        childrenPath: [],
        title: "Vắng thi - Đăng ký thi ghép",
        class: "",
        quote: "Cái gì xuất phát từ trái tim thì sẽ đi đến trái tim",
        author: "Khuyết danh"
      },
      {
        path: "/phuc-khao",
        childrenPath: [],
        title: "Quy định liên quan về Thi - Phúc khảo",
        class: "",
        quote: "Thành công là việc sử dụng tối đa khả năng mà bạn có",
        author: "Zig Zilar"
      },
      {
        path: "/danh-gia-ren-luyen",
        childrenPath: [],
        title: "Đánh giá rèn luyện sinh viên",
        class: "",
        quote:
          "Không có hoàn cảnh nào tuyệt vọng, chỉ có người tuyệt vọng vì hoàn cảnh",
        author: "Khuyết danh"
      },
      {
        path: "/chuyen-diem",
        childrenPath: [],
        title: "Chuyển điểm",
        class: "",
        quote: "Thử thách lớn nhất của con người là lúc thành công rực rỡ",
        author: "G.Welles"
      },
      {
        path: "/nghi-hoc",
        childrenPath: [],
        title: "Nghỉ học tạm thời - Nhập học lại - Thôi học",
        class: "",
        quote: "Đầu tư vào tri thức đem lại lợi nhuận cao nhất",
        author: "Benjamin Franklin"
      },
      {
        path: "/nghien-cuu",
        childrenPath: [],
        title: "Nghiên cứu khoa học sinh viên",
        class: "",
        quote: "Mọi công việc trọng yếu đều bắt đầu đầy khó nhọc",
        author: "Spencer"
      },
      {
        path: "/hoc-phan-khoa-luan",
        childrenPath: [],
        title: "Học phần khóa luận tốt nghiệp",
        class: "",
        quote: "Học tập là vấn đề thái độ chứ không phải năng khiếu",
        author: "Georgi Lozanov"
      },
      {
        path: "/chuan-dau-ra",
        childrenPath: [],
        title: "Chuẩn đầu ra các ngành/ chuyên ngành",
        class: "",
        quote:
          "Nếu ta không gieo trồng tri thức khi còn trẻ, nó sẽ không cho ta bóng râm khi về già",
        author: "Lãnh chúa Chesterfield"
      },
      {
        path: "/dieu-kien-tot-nghiep",
        childrenPath: [],
        title: "Điều kiện xét và công nhận tốt nghiệp",
        class: "",
        quote: "Làm điều bạn thích là tự do. Thích điều bạn làm là hạnh phúc",
        author: "Frank Tyger"
      },
      {
        path: "/xep-hang-tot-nghiep",
        childrenPath: [],
        title: "Xếp hạng tốt nghiệp",
        class: "",
        quote: "ĐNếu cơ hội không gõ cửa, hãy tạo ra một cánh cửa",
        author: "Milton Berle"
      },
      {
        path: "/chat-luong-cao",
        childrenPath: [],
        title: "Chương trình chất lượng cao",
        class: "",
        quote: "Những gì ta cho đi thật lòng thì mãi mãi là của ta",
        author: "Georges Granville"
      },
      {
        path: "/cu-nhan-tai-nang",
        childrenPath: [],
        title: "Chương trình cử nhân tài năng",
        class: "",
        quote:
          "Đừng bao giờ khiêm tốn với kẻ kiêu căng, cũng đừng bao giờ kiêu căng với người khiêm tốn",
        author: "Thomas Jefferson"
      },
      {
        path: "/dao-tao-thu-hai",
        childrenPath: [],
        title: "Chương trình đào tạo thứ hai",
        class: "",
        quote: "Việc đọc đối với tâm trí cũng như thể dục đối với cơ thể",
        author: "Joseph Addison"
      }
    ],
    title: "Học tập",
    class: "",
    quote: "",
    author: ""
  },
  {
    path: "/dong-hanh-ueh",
    childrenPath: [
      {
        path: "/co-van-hoc-tap",
        childrenPath: [],
        title: "Cố vấn học tập",
        class: "",
        quote: "Thà học muộn còn hơn không bao giờ học",
        author: "Publilius Syrus"
      },
      {
        path: "/ky-tuc-xa",
        childrenPath: [],
        title: "Ký túc xá UEH",
        class: "",
        quote: "Thà học muộn còn hơn không bao giờ học",
        author: "Publilius Syrus"
      },
      {
        path: "/mien-giam-hoc-phi",
        childrenPath: [],
        title: "Chế độ miễn giảm học phí (MGHP)",
        class: "",
        quote: "Thà học muộn còn hơn không bao giờ học",
        author: "Publilius Syrus"
      },
      {
        path: "/hoc-bong-sinh-vien",
        childrenPath: [],
        title: "Học bổng cho sinh viên",
        class: "",
        quote: "Làm điều bạn thích là tự do. Thích điều bạn làm là hạnh phúc",
        author: "Frank Tyger"
      },
      {
        path: "/tin-dung-hoc-tap",
        childrenPath: [],
        title: "Tín dụng học tập",
        class: "",
        quote: "Hãy hiền dịu khoan dung với hết mọi người trừ bản thân mình",
        author: "Joubert"
      },
      {
        path: "/viec-lam",
        childrenPath: [],
        title: "Việc làm",
        class: "",
        quote: "Hãy học khi người khác ngủ; lao động khi người khác lười nhác",
        author: "William Arthur Ward"
      },
      {
        path: "/khoi-nghiep",
        childrenPath: [],
        title: "Khởi nghiệp",
        class: "",
        quote: "Mắt ta chỉ nhìn thấy những gì mà trí óc sẵn sàng để lĩnh hội",
        author: "Robertson Davies"
      }
    ],
    title: "Đồng hành cùng sinh viên",
    class: "",
    quote: "",
    author: ""
  },
  {
    path: "/san-choi-tai-ueh",
    childrenPath: [
      {
        path: "/thong-tin-doan-hoi",
        childrenPath: [],
        title: "Thông tin về Đoàn - hội",
        class: "",
        quote:
          "Một cuốn sách hay cho ta một điều tốt, một người bạn tốt cho ta một điều hay",
        author: "Gustave Le Bon"
      },
      {
        path: "/clb-doi-nhom",
        childrenPath: [],
        title: "Ban chuyên môn/ Câu lạc bộ/ Đội/nhóm",
        class: "",
        quote:
          "Lý trí có thể mách bảo ta điều phải tránh, còn con tim sẽ chỉ cho ta biết điều phải làm",
        author: "Joseph Joubert"
      },
      {
        path: "/hoat-dong-doan",
        childrenPath: [],
        title: "Các hoạt động đoàn - hội nổi bật trong năm",
        class: "",
        quote:
          "Nếu ta không gieo trồng tri thức khi còn trẻ, nó sẽ không cho ta bóng râm khi về già",
        author: "Lãnh chúa Chesterfield"
      },
      {
        path: "/hoat-dong-van-the-my",
        childrenPath: [],
        title: "Các hoạt động văn thể mỹ dành cho sinh viên đại học chính quy",
        class: "",
        quote:
          "Nếu ta không gieo trồng tri thức khi còn trẻ, nó sẽ không cho ta bóng râm khi về già",
        author: "Lãnh chúa Chesterfield"
      }
    ],
    title: "Sân chơi",
    class: "",
    quote: "",
    author: ""
  },
  {
    path: "/thong-tin-lien-he",
    childrenPath: [],
    title: "Thông tin liên hệ",
    class: "",
    quote: "Đừng mua thứ hữu ích mà hãy mua thứ cần thiết",
    author: "Caton Censeur"
  },
  {
    path: "/goc-tien-ich",
    childrenPath: [
      {
        path: "/bieu-mau",
        childrenPath: [],
        title: "Các biểu mẫu, logo",
        class: "",
        quote:
          "Nếu ta không gieo trồng tri thức khi còn trẻ, nó sẽ không cho ta bóng râm khi về già",
        author: "Lãnh chúa Chesterfield"
      },
      {
        path: "/phan-mem-ho-tro",
        childrenPath: [],
        title: "Các phần mềm hỗ trợ trong quá trình học tập của sinh viên",
        class: "",
        quote: "Thà học muộn còn hơn không bao giờ học",
        author: "Publilius Syrus"
      },
      {
        path: "/xe-buyt",
        childrenPath: [],
        title: "Xe buýt tại TP.HCM - Một số tuyến đi tới các cơ sở của UEH",
        class: "",
        quote: "Tâm hồn phản ánh cuộc sống, diện mạo phản ánh tâm hồn",
        author: "Balzac"
      }
    ],
    title: "Tiện ích bổ sung",
    class: "",
    quote: "",
    author: ""
  }
];
