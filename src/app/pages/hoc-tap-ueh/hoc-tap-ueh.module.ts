import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import { HocTapUehRoutingModule } from "./hoc-tap-ueh-routing.modules";

@NgModule({
  declarations: [
    HocTapUehComponent,
    PortalComponent,
    EmailComponent,
    TheSinhVienComponent,
    ELearningComponent,
    ThuVienComponent,
    KhungThoiGianComponent,
    ThoiGianHocComponent,
    DangKyHocPhanComponent,
    MoLopHocPhanComponent,
    HocPhiComponent,
    VangThiComponent,
    PhucKhaoComponent,
    DanhGiaRenLuyenComponent,
    ChuyenDiemComponent,
    NghiHocComponent,
    NghienCuuComponent,
    HocPhanKhoaLuanComponent,
    ChuanDauRaComponent,
    DieuKienTotNghiepComponent,
    XepHangTotNghiepComponent,
    ChuongTrinhClcComponent,
    ChuongTrinhCntnComponent,
    ChuongTrinhDtt2Component
  ],
  imports: [CommonModule, HocTapUehRoutingModule]
})
export class HocTapUehModule {}
