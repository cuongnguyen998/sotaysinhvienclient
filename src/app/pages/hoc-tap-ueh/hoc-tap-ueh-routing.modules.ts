import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HocTapUehComponent } from "./hoc-tap-ueh.component";
import { PortalComponent } from "./portal/portal.component";
import { EmailComponent } from "./email/email.component";
import { TheSinhVienComponent } from "./the-sinh-vien/the-sinh-vien.component";
import { ELearningComponent } from "./e-learning/e-learning.component";
import { ThuVienComponent } from "./thu-vien/thu-vien.component";
import { KhungThoiGianComponent } from "./khung-thoi-gian/khung-thoi-gian.component";
import { ThoiGianHocComponent } from "./thoi-gian-hoc/thoi-gian-hoc.component";
import { DangKyHocPhanComponent } from "./dang-ky-hoc-phan/dang-ky-hoc-phan.component";
import { MoLopHocPhanComponent } from "./mo-lop-hoc-phan/mo-lop-hoc-phan.component";
import { HocPhiComponent } from "./hoc-phi/hoc-phi.component";
import { VangThiComponent } from "./vang-thi/vang-thi.component";
import { PhucKhaoComponent } from "./phuc-khao/phuc-khao.component";
import { DanhGiaRenLuyenComponent } from "./danh-gia-ren-luyen/danh-gia-ren-luyen.component";
import { ChuyenDiemComponent } from "./chuyen-diem/chuyen-diem.component";
import { NghiHocComponent } from "./nghi-hoc/nghi-hoc.component";
import { NghienCuuComponent } from "./nghien-cuu/nghien-cuu.component";
import { HocPhanKhoaLuanComponent } from "./hoc-phan-khoa-luan/hoc-phan-khoa-luan.component";
import { ChuanDauRaComponent } from "./chuan-dau-ra/chuan-dau-ra.component";
import { DieuKienTotNghiepComponent } from "./dieu-kien-tot-nghiep/dieu-kien-tot-nghiep.component";
import { XepHangTotNghiepComponent } from "./xep-hang-tot-nghiep/xep-hang-tot-nghiep.component";
import { ChuongTrinhClcComponent } from "./chuong-trinh-clc/chuong-trinh-clc.component";
import { ChuongTrinhCntnComponent } from "./chuong-trinh-cntn/chuong-trinh-cntn.component";
import { ChuongTrinhDtt2Component } from "./chuong-trinh-dtt2/chuong-trinh-dtt2.component";

const routes: Routes = [
  {
    path: "",
    component: HocTapUehComponent,
    children: [
      {
        path: "",
        component: PortalComponent
      },
      {
        path: "portal",
        component: PortalComponent
      },
      {
        path: "email",
        component: EmailComponent
      },
      {
        path: "the-sinh-vien",
        component: TheSinhVienComponent
      },
      {
        path: "elearning",
        component: ELearningComponent
      },
      {
        path: "thu-vien",
        component: ThuVienComponent
      },
      {
        path: "khung-thoi-gian",
        component: KhungThoiGianComponent
      },
      {
        path: "thoi-gian-hoc",
        component: ThoiGianHocComponent
      },
      {
        path: "dang-ky-hoc-phan",
        component: DangKyHocPhanComponent
      },
      {
        path: "mo-lop-hoc-phan",
        component: MoLopHocPhanComponent
      },
      {
        path: "hoc-phi",
        component: HocPhiComponent
      },
      {
        path: "vang-thi",
        component: VangThiComponent
      },
      {
        path: "phuc-khao",
        component: PhucKhaoComponent
      },
      {
        path: "danh-gia-ren-luyen",
        component: DanhGiaRenLuyenComponent
      },
      {
        path: "chuyen-diem",
        component: ChuyenDiemComponent
      },
      {
        path: "nghi-hoc",
        component: NghiHocComponent
      },
      {
        path: "nghien-cuu",
        component: NghienCuuComponent
      },
      {
        path: "hoc-phan-khoa-luan",
        component: HocPhanKhoaLuanComponent
      },
      {
        path: "chuan-dau-ra",
        component: ChuanDauRaComponent
      },
      {
        path: "dieu-kien-tot-nghiep",
        component: DieuKienTotNghiepComponent
      },
      {
        path: "xep-hang-tot-nghiep",
        component: XepHangTotNghiepComponent
      },
      {
        path: "chat-luong-cao",
        component: ChuongTrinhClcComponent
      },
      {
        path: "cu-nhan-tai-nang",
        component: ChuongTrinhCntnComponent
      },
      {
        path: "dao-tao-thu-hai",
        component: ChuongTrinhDtt2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HocTapUehRoutingModule {}
