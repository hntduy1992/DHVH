-- --------------------------------------------------------
-- Máy chủ:                      127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Phiên bản:           12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table cscc_sadec_db.activity_log: ~12 rows (approximately)
REPLACE INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
	(7200, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMuc', 'created', 6, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":6,"tenDanhMuc":"TI\\u00caU CHU\\u1ea8N DANH HI\\u1ec6U X\\u00c3, PH\\u01af\\u1edcNG, TH\\u1eca TR\\u1ea4N TI\\u00caU BI\\u1ec2U","namApDung":2024,"noiDung":"K\\u00e8m theo Quy\\u1ebft \\u0111\\u1ecbnh   \\/2024\\/Q\\u0110-UBND ng\\u00e0y       th\\u00e1ng      n\\u0103m 2024 c\\u1ee7a \\u1ee6y ban nh\\u00e2n d\\u00e2n t\\u1ec9nh \\u0110\\u1ed3ng Th\\u00e1p","trangThai":1,"created_at":"2024-08-23T06:56:56.000000Z","updated_at":"2024-08-23T06:56:56.000000Z"}}', NULL, '2024-08-22 23:56:56', '2024-08-22 23:56:56'),
	(7201, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 1092, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1092,"parentId":0,"maDanhMuc":6,"stt":"1","tenCauHoi":"Th\\u1ef1c hi\\u1ec7n t\\u1ed1t c\\u00e1c nhi\\u1ec7m v\\u1ee5 kinh t\\u1ebf - x\\u00e3 h\\u1ed9i, qu\\u1ed1c ph\\u00f2ng, an ninh, tr\\u1eadt t\\u1ef1, an to\\u00e0n x\\u00e3 h\\u1ed9i \\u0111\\u01b0\\u1ee3c giao","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":20,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":0,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T08:40:22.000000Z","updated_at":"2024-08-23T08:40:22.000000Z"}}', NULL, '2024-08-23 01:40:22', '2024-08-23 01:40:22'),
	(7202, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 1093, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1093,"parentId":1092,"maDanhMuc":6,"stt":"1.1","tenCauHoi":"B\\u1ea3o \\u0111\\u1ea3m tr\\u1eadt t\\u1ef1, an to\\u00e0n x\\u00e3 h\\u1ed9i, \\u0111\\u1ea5u tranh, ph\\u00f2ng, ch\\u1ed1ng t\\u1ed9i ph\\u1ea1m v\\u00e0 c\\u00e1c h\\u00e0nh vi vi ph\\u1ea1m ph\\u00e1p lu\\u1eadt kh\\u00e1c","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":1,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T08:41:02.000000Z","updated_at":"2024-08-23T08:41:02.000000Z"}}', NULL, '2024-08-23 01:41:02', '2024-08-23 01:41:02'),
	(7203, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 1094, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1094,"parentId":1093,"maDanhMuc":6,"stt":null,"tenCauHoi":"X\\u00e3, ph\\u01b0\\u1eddng, th\\u1ecb tr\\u1ea5n \\u0111\\u1ea1t ti\\u00eau chu\\u1ea9n \\u201cAn to\\u00e0n v\\u1ec1 an ninh tr\\u1eadt t\\u1ef1\\u201d theo H\\u01b0\\u1edbng d\\u1eabn s\\u1ed1 03-HD\\/BCDD138 ng\\u00e0y 02\\/6\\/2022 c\\u1ee7a Ban Ch\\u1ec9 \\u0111\\u1ea1o 138\\/\\u0110P T\\u1ec9nh.","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":2,"kieuNhapLieu":"Text","sapXep":1,"trangThai":1,"created_at":"2024-08-23T08:41:37.000000Z","updated_at":"2024-08-23T08:41:37.000000Z"}}', NULL, '2024-08-23 01:41:37', '2024-08-23 01:41:37'),
	(7204, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 215, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":215,"maDanhMuc":6,"maDonVi":14}}', NULL, '2024-08-23 01:53:12', '2024-08-23 01:53:12'),
	(7205, 'default', 'created', 'Modules\\KhaoSat\\Entities\\BangDiem', 'created', 3314, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":3314,"diem":8,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":8}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T08:54:58.000000Z"}}', NULL, '2024-08-23 01:54:58', '2024-08-23 01:54:58'),
	(7206, 'default', 'updated', 'Modules\\KhaoSat\\Entities\\BangDiem', 'updated', 3314, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":3314,"diem":7,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":7}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T09:11:00.000000Z"},"old":{"id":3314,"diem":8,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":8}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T08:54:58.000000Z"}}', NULL, '2024-08-23 02:11:00', '2024-08-23 02:11:00'),
	(7207, 'default', 'updated', 'Modules\\KhaoSat\\Entities\\BangDiem', 'updated', 3314, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":3314,"diem":0,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":0}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T10:19:25.000000Z"},"old":{"id":3314,"diem":7,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":7}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T09:11:00.000000Z"}}', NULL, '2024-08-23 03:19:25', '2024-08-23 03:19:25'),
	(7208, 'default', 'updated', 'Modules\\KhaoSat\\Entities\\BangDiem', 'updated', 3314, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":3314,"diem":5,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":5}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T10:23:28.000000Z"},"old":{"id":3314,"diem":0,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":0}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":1,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-08-23T10:19:25.000000Z"}}', NULL, '2024-08-23 03:23:28', '2024-08-23 03:23:28'),
	(7209, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoiThamDinh', 'created', 1606, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1606,"maDanhMuc":"6","maCauHoi":1093,"maDonVi":24,"created_at":"2024-09-04T02:42:54.000000Z","updated_at":"2024-09-04T02:42:54.000000Z"}}', NULL, '2024-09-03 19:42:54', '2024-09-03 19:42:54'),
	(7210, 'default', 'created', 'Modules\\KhaoSat\\Entities\\BienBan', 'created', 45, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":45,"maDanhMuc":6,"maDonVi":14,"fileName":"files\\/2024\\/organizations-14\\/ubnd-phuong-1.docx","maNguoiGuiDiem":48,"created_at":"2024-09-04T02:44:12.000000Z","updated_at":"2024-09-04T02:44:12.000000Z"}}', NULL, '2024-09-03 19:44:12', '2024-09-03 19:44:12'),
	(7211, 'default', 'updated', 'Modules\\KhaoSat\\Entities\\BangDiem', 'updated', 3314, 'Modules\\Users\\Entities\\User', 47, '{"attributes":{"id":3314,"diem":5,"diemThamDinh":4,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":5}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":24,"maNguoiThamDinh":47,"noiDungThamDinh":[{"id":1094,"diem":4}],"ghiChuThamDinh":"Kh\\u00f4ng ch\\u1ecbu","parentId":1092,"trangThai":2,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-09-04T08:57:37.000000Z"},"old":{"id":3314,"diem":5,"diemThamDinh":0,"maCauHoi":1093,"maDanhMuc":6,"noiDungTraLoi":[{"id":1094,"diem":5}],"maDonViDanhGia":14,"maNguoiDanhGia":48,"fileDanhGia":null,"ghiChuDanhGia":null,"maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1092,"trangThai":2,"created_at":"2024-08-23T08:54:58.000000Z","updated_at":"2024-09-04T02:44:12.000000Z"}}', NULL, '2024-09-04 01:57:37', '2024-09-04 01:57:37'),
	(7212, 'default', 'created', 'Modules\\KhaoSat\\Entities\\BangYKien', 'created', 618, 'Modules\\Users\\Entities\\User', 48, '{"attributes":{"id":618,"maDanhMuc":6,"maCauHoi":1093,"noiDung":"Ph\\u01b0\\u1eddng 1 \\u00fd ki\\u1ebfn l\\u1ea7n 1","maDonVi":14,"maNguoiYKien":48,"created_at":"2024-09-04T09:20:51.000000Z","updated_at":"2024-09-04T09:20:51.000000Z"}}', NULL, '2024-09-04 02:20:51', '2024-09-04 02:20:51'),
	(7213, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DiemTongHop', 'created', 30, 'Modules\\Users\\Entities\\User', 46, '{"attributes":{"id":30,"diem":3,"namApDung":2024,"maDanhMuc":6,"maDonVi":14,"maNguoiTongHop":46,"created_at":"2024-09-04T09:21:41.000000Z","updated_at":"2024-09-04T09:21:41.000000Z"}}', NULL, '2024-09-04 02:21:41', '2024-09-04 02:21:41'),
	(7214, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 216, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":216,"maDanhMuc":6,"maDonVi":14}}', NULL, '2024-09-06 02:28:47', '2024-09-06 02:28:47'),
	(7215, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 217, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":217,"maDanhMuc":6,"maDonVi":15}}', NULL, '2024-09-06 02:28:47', '2024-09-06 02:28:47');

-- Dumping data for table cscc_sadec_db.donvihanhchinh: ~22 rows (approximately)
REPLACE INTO `donvihanhchinh` (`id`, `parentId`, `tenDonVi`, `image`, `email`, `dienThoai`, `trangThai`, `sapXep`, `created_at`, `updated_at`, `hienThi`) VALUES
	(1, 0, 'UBND Thành phố Sa Đéc', NULL, NULL, NULL, 1, NULL, '2022-04-30 20:58:38', '2022-05-22 23:57:52', NULL),
	(2, 1, 'Văn phòng HĐND và UBND Thành phố', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:01:55', '2022-05-22 23:58:12', NULL),
	(3, 1, 'Phòng Nội vụ', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:17', '2022-04-30 21:21:36', NULL),
	(4, 1, 'Phòng LĐTB và Xã hội', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:32', '2022-04-30 21:21:49', NULL),
	(5, 1, 'Thanh tra Thành phố', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:40', '2022-05-22 23:57:37', NULL),
	(6, 1, 'Phòng Giáo dục và Đào tạo', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:54', '2022-04-30 22:30:46', NULL),
	(7, 1, 'Phòng Văn hoá và Thông tin', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:15', '2022-04-30 22:30:22', NULL),
	(8, 1, 'Phòng Tài nguyên và Môi trường', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:28', '2022-04-30 22:30:11', NULL),
	(9, 1, 'Phòng Quản lý Đô thị', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:41', '2022-05-22 23:58:42', NULL),
	(10, 1, 'Phòng Kinh tế', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:52', '2022-04-30 21:22:40', NULL),
	(11, 1, 'Phòng Tư pháp', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:59', '2022-05-22 23:58:57', NULL),
	(12, 1, 'Phòng Y tế', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:05', '2022-05-22 23:59:11', NULL),
	(13, 1, 'Phòng Tài chính Kế hoạch', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:14', '2022-05-22 23:59:27', NULL),
	(14, 1, 'UBND Phường 1', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:26', '2022-04-30 21:04:26', 1),
	(15, 1, 'UBND Phường 2', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:36', '2022-04-30 21:04:36', 1),
	(16, 1, 'UBND Phường 3', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:42', '2022-04-30 21:04:42', 1),
	(17, 1, 'UBND Phường 4', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:46', '2022-04-30 21:04:46', 1),
	(18, 1, 'UBND phường An Hòa', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:05:14', '2022-04-30 21:05:14', NULL),
	(19, 1, 'UBND phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:05:27', '2022-05-22 23:59:39', NULL),
	(20, 1, 'UBND xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:06:58', '2022-04-30 21:06:58', NULL),
	(21, 1, 'UBND xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:07:59', '2022-04-30 21:07:59', NULL),
	(22, 1, 'UBND xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:08:35', '2022-04-30 21:08:35', NULL),
	(24, 0, 'Công an Thành phố', NULL, NULL, NULL, 1, NULL, '2024-08-23 01:42:37', '2024-08-23 01:42:37', NULL);

-- Dumping data for table cscc_sadec_db.khaosat_bangdiem: ~0 rows (approximately)
REPLACE INTO `khaosat_bangdiem` (`id`, `diem`, `diemThamDinh`, `maCauHoi`, `maDanhMuc`, `noiDungTraLoi`, `maDonViDanhGia`, `maNguoiDanhGia`, `fileDanhGia`, `ghiChuDanhGia`, `maDonViThamDinh`, `maNguoiThamDinh`, `noiDungThamDinh`, `ghiChuThamDinh`, `parentId`, `trangThai`, `created_at`, `updated_at`) VALUES
	(3314, 5, 4, 1093, 6, '[{"id":1094,"diem":5}]', 14, 48, NULL, NULL, 24, 47, '[{"id":1094,"diem":4}]', 'Không chịu', 1092, 8, '2024-08-23 01:54:58', '2024-09-04 02:21:41');

-- Dumping data for table cscc_sadec_db.khaosat_bienban: ~0 rows (approximately)
REPLACE INTO `khaosat_bienban` (`id`, `maDanhMuc`, `maDonVi`, `fileName`, `maNguoiGuiDiem`, `created_at`, `updated_at`) VALUES
	(45, 6, 14, 'files/2024/organizations-14/ubnd-phuong-1.docx', 48, '2024-09-03 19:44:12', '2024-09-03 19:44:12');

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi: ~2 rows (approximately)
REPLACE INTO `khaosat_cauhoi` (`id`, `parentId`, `maDanhMuc`, `stt`, `tenCauHoi`, `diemNhoNhat`, `buocNhay`, `diemLonNhat`, `loaiCauHoi`, `loaiDieuKien`, `danhDauCau`, `kieuNhapLieu`, `sapXep`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1092, 0, 6, '1', 'Thực hiện tốt các nhiệm vụ kinh tế - xã hội, quốc phòng, an ninh, trật tự, an toàn xã hội được giao', 0, 0, 20, 1, 'AND', 0, NULL, 1, 1, '2024-08-23 01:40:22', '2024-08-23 01:40:22'),
	(1093, 1092, 6, '1.1', 'Bảo đảm trật tự, an toàn xã hội, đấu tranh, phòng, chống tội phạm và các hành vi vi phạm pháp luật khác', 0, 0, 7, 1, 'OR', 1, NULL, 1, 1, '2024-08-23 01:41:02', '2024-08-23 01:41:02'),
	(1094, 1093, 6, NULL, 'Xã, phường, thị trấn đạt tiêu chuẩn “An toàn về an ninh trật tự” theo Hướng dẫn số 03-HD/BCDD138 ngày 02/6/2022 của Ban Chỉ đạo 138/ĐP Tỉnh.', 0, 0, 7, 1, 'OR', 2, 'Text', 1, 1, '2024-08-23 01:41:37', '2024-08-23 01:41:37');

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi_thamdinh: ~0 rows (approximately)
REPLACE INTO `khaosat_cauhoi_thamdinh` (`id`, `maDanhMuc`, `maCauHoi`, `maDonVi`, `created_at`, `updated_at`) VALUES
	(1606, '6', 1093, 24, '2024-09-03 19:42:54', '2024-09-03 19:42:54');

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc: ~0 rows (approximately)
REPLACE INTO `khaosat_danhmuc` (`id`, `tenDanhMuc`, `namApDung`, `noiDung`, `trangThai`, `created_at`, `updated_at`) VALUES
	(6, 'TIÊU CHUẨN DANH HIỆU XÃ, PHƯỜNG, THỊ TRẤN TIÊU BIỂU', 2024, 'Kèm theo Quyết định   /2024/QĐ-UBND ngày       tháng      năm 2024 của Ủy ban nhân dân tỉnh Đồng Tháp', 1, '2024-08-22 23:56:56', '2024-08-22 23:56:56');

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc_donvi: ~0 rows (approximately)
REPLACE INTO `khaosat_danhmuc_donvi` (`id`, `maDanhMuc`, `maDonVi`) VALUES
	(216, 6, 14),
	(217, 6, 15);

-- Dumping data for table cscc_sadec_db.khaosat_diemtonghop: ~0 rows (approximately)
REPLACE INTO `khaosat_diemtonghop` (`id`, `diem`, `namApDung`, `maDanhMuc`, `maDonVi`, `maNguoiTongHop`, `created_at`, `updated_at`) VALUES
	(30, 3, 2024, 6, 14, 46, '2024-09-04 02:21:41', '2024-09-04 02:21:41');

-- Dumping data for table cscc_sadec_db.khaosat_thoigian: ~2 rows (approximately)
REPLACE INTO `khaosat_thoigian` (`id`, `tenThoiGian`, `batDau`, `ketThuc`, `created_at`, `updated_at`) VALUES
	(1, 'Thời gian tự đánh giá', '2023-10-21 17:00:00', '2025-11-02 17:00:00', '2022-04-20 08:47:01', '2024-08-23 01:47:45'),
	(2, 'Thời gian thẩm định', '2023-11-19 17:00:00', '2025-11-28 17:00:00', '2022-04-20 08:47:42', '2024-08-23 01:47:45');

-- Dumping data for table cscc_sadec_db.khaosat_ykien: ~0 rows (approximately)
REPLACE INTO `khaosat_ykien` (`id`, `maDanhMuc`, `maCauHoi`, `noiDung`, `maDonVi`, `maNguoiYKien`, `created_at`, `updated_at`) VALUES
	(618, 6, 1093, 'Phường 1 ý kiến lần 1', 14, 48, '2024-09-04 02:20:51', '2024-09-04 02:20:51');

-- Dumping data for table cscc_sadec_db.model_has_permissions: ~0 rows (approximately)

-- Dumping data for table cscc_sadec_db.model_has_roles: ~39 rows (approximately)
REPLACE INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
	(5, 'Modules\\Users\\Entities\\User', 1),
	(6, 'Modules\\Users\\Entities\\User', 2),
	(6, 'Modules\\Users\\Entities\\User', 3),
	(6, 'Modules\\Users\\Entities\\User', 4),
	(6, 'Modules\\Users\\Entities\\User', 5),
	(6, 'Modules\\Users\\Entities\\User', 6),
	(6, 'Modules\\Users\\Entities\\User', 7),
	(6, 'Modules\\Users\\Entities\\User', 8),
	(6, 'Modules\\Users\\Entities\\User', 9),
	(6, 'Modules\\Users\\Entities\\User', 10),
	(6, 'Modules\\Users\\Entities\\User', 11),
	(6, 'Modules\\Users\\Entities\\User', 12),
	(6, 'Modules\\Users\\Entities\\User', 13),
	(6, 'Modules\\Users\\Entities\\User', 14),
	(6, 'Modules\\Users\\Entities\\User', 15),
	(6, 'Modules\\Users\\Entities\\User', 16),
	(6, 'Modules\\Users\\Entities\\User', 17),
	(6, 'Modules\\Users\\Entities\\User', 18),
	(6, 'Modules\\Users\\Entities\\User', 19),
	(6, 'Modules\\Users\\Entities\\User', 20),
	(7, 'Modules\\Users\\Entities\\User', 21),
	(7, 'Modules\\Users\\Entities\\User', 22),
	(8, 'Modules\\Users\\Entities\\User', 22),
	(7, 'Modules\\Users\\Entities\\User', 24),
	(7, 'Modules\\Users\\Entities\\User', 28),
	(7, 'Modules\\Users\\Entities\\User', 29),
	(7, 'Modules\\Users\\Entities\\User', 30),
	(7, 'Modules\\Users\\Entities\\User', 37),
	(7, 'Modules\\Users\\Entities\\User', 38),
	(7, 'Modules\\Users\\Entities\\User', 39),
	(7, 'Modules\\Users\\Entities\\User', 40),
	(6, 'Modules\\Users\\Entities\\User', 41),
	(6, 'Modules\\Users\\Entities\\User', 42),
	(8, 'Modules\\Users\\Entities\\User', 43),
	(7, 'Modules\\Users\\Entities\\User', 44),
	(8, 'Modules\\Users\\Entities\\User', 45),
	(7, 'Modules\\Users\\Entities\\User', 46),
	(8, 'Modules\\Users\\Entities\\User', 46),
	(7, 'Modules\\Users\\Entities\\User', 47),
	(6, 'Modules\\Users\\Entities\\User', 48);

-- Dumping data for table cscc_sadec_db.modules: ~4 rows (approximately)
REPLACE INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Phân Quyền', '2022-04-08 11:40:21', NULL),
	(2, 'Đơn vị hành chính', '2022-04-08 11:40:35', NULL),
	(3, 'Người dùng', '2022-04-08 11:40:35', NULL),
	(4, 'Cải cách hành chính', '2022-04-08 11:40:35', NULL);

-- Dumping data for table cscc_sadec_db.permissions: ~18 rows (approximately)
REPLACE INTO `permissions` (`id`, `name`, `display_name`, `guard_name`, `module_id`, `created_at`, `updated_at`) VALUES
	(1, 'role-list', 'Danh sách', 'api', 1, '2022-04-08 11:41:07', NULL),
	(2, 'role-create', 'Thêm mới', 'api', 1, '2022-04-08 11:41:23', NULL),
	(3, 'role-edit', 'Chỉnh sửa', 'api', 1, '2022-04-08 11:41:49', NULL),
	(4, 'role-delete', 'Xóa', 'api', 1, '2022-04-08 11:42:02', NULL),
	(5, 'organization-list', 'Danh sách', 'api', 2, '2022-04-08 11:41:07', NULL),
	(6, 'organization-create', 'Thêm mới', 'api', 2, '2022-04-08 11:41:23', NULL),
	(7, 'organization-edit', 'Chỉnh sửa', 'api', 2, '2022-04-08 11:41:49', NULL),
	(8, 'organization-delete', 'Xóa', 'api', 2, '2022-04-08 11:42:02', NULL),
	(9, 'user-list', 'Danh sách', 'api', 3, '2022-04-08 11:41:07', NULL),
	(10, 'user-create', 'Thêm mới', 'api', 3, '2022-04-08 11:41:23', NULL),
	(11, 'user-edit', 'Chỉnh sửa', 'api', 3, '2022-04-08 11:41:49', NULL),
	(12, 'user-delete', 'Xóa', 'api', 3, '2022-04-08 11:42:02', NULL),
	(13, 'tudanhgia', 'Tự đánh giá', 'api', 4, '2022-04-08 11:42:02', NULL),
	(14, 'thamdinh', 'Thẩm định', 'api', 4, '2022-04-08 11:42:02', NULL),
	(15, 'xacnhandiem', 'Xác nhận điểm', 'api', 4, '2022-04-08 11:42:02', NULL),
	(16, 'botieuchi', 'Bộ tiêu chí', 'api', 4, '2022-04-08 11:42:02', NULL),
	(17, 'tieuchi', 'Tiêu chí', 'api', 4, '2022-04-08 11:42:02', NULL),
	(18, 'thoigian', 'Thời gian', 'api', 4, '2022-04-08 11:42:02', NULL);

-- Dumping data for table cscc_sadec_db.roles: ~4 rows (approximately)
REPLACE INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
	(5, 'admin', 'api', '2022-04-16 18:56:27', '2022-04-16 18:56:27'),
	(6, 'Tự đánh giá', 'api', '2022-04-30 21:23:35', '2022-05-03 20:10:50'),
	(7, 'Thẩm định', 'api', '2022-04-30 21:24:19', '2022-05-03 20:11:12'),
	(8, 'Xác nhận', 'api', '2022-04-30 21:24:32', '2022-05-03 20:50:53');

-- Dumping data for table cscc_sadec_db.role_has_permissions: ~18 rows (approximately)
REPLACE INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
	(1, 5),
	(2, 5),
	(3, 5),
	(4, 5),
	(5, 5),
	(6, 5),
	(7, 5),
	(8, 5),
	(9, 5),
	(10, 5),
	(11, 5),
	(12, 5),
	(16, 5),
	(17, 5),
	(18, 5),
	(13, 6),
	(14, 7),
	(15, 8);

-- Dumping data for table cscc_sadec_db.sidebars: ~30 rows (approximately)
REPLACE INTO `sidebars` (`id`, `parentId`, `name`, `icon`, `url`, `order`, `status`, `created_at`, `updated_at`) VALUES
	(1, 0, 'Dashboard', 'mdi-monitor-dashboard', '/auth/dashboard', 1, 1, '2022-04-16 16:42:08', NULL),
	(2, 0, 'Hệ thống', NULL, NULL, 2, 1, '2022-04-17 01:14:40', NULL),
	(3, 2, 'Đơn vị hành chính', 'mdi-office-building', '/Auth/DonViHanhChinh', 1, 1, '2022-04-17 01:15:41', NULL),
	(4, 2, 'Người dùng', 'mdi-account-group-outline', NULL, 2, 1, '2022-04-17 01:17:25', NULL),
	(5, 4, 'Tài khoản', 'mdi-label-outline', '/Auth/Users', 1, 1, '2022-04-17 01:17:28', NULL),
	(6, 4, 'Phân quyền', 'mdi-label-outline', '/Auth/Roles', 2, 1, '2022-04-17 01:17:30', NULL),
	(7, 0, 'Cải cách hành chính', NULL, NULL, 3, 1, '2022-04-17 01:17:30', NULL),
	(8, 7, 'Đánh giá', 'mdi-counter', NULL, 1, 1, '2022-04-17 01:17:30', NULL),
	(9, 8, 'Tự đánh giá', 'mdi-label-outline', '/Auth/KhaoSat/TuDanhGia/ChamDiem', 1, 1, '2022-04-17 01:17:30', NULL),
	(10, 8, 'Gửi đánh giá', 'mdi-label-outline', '/Auth/KhaoSat/TuDanhGia/GuiDiem', 2, 1, '2022-04-17 01:17:30', NULL),
	(11, 7, 'Thẩm định', 'mdi-counter', '/Auth/KhaoSat/ThamDinh', 3, 1, '2022-04-17 01:17:30', NULL),
	(12, 11, 'Thẩm định đánh giá', 'mdi-label-outline', '/Auth/KhaoSat/ThamDinh/DonVi', 1, 0, '2022-04-17 01:17:30', NULL),
	(13, 11, 'Gửi thẩm định', 'mdi-label-outline', '/Auth/KhaoSat/ThamDinh/GuiDiem', 2, 0, '2022-04-17 01:17:30', NULL),
	(14, 7, 'Xác nhận', 'mdi-label-outline', '/Auth/KhaoSat/XacNhan', 3, 1, '2022-04-17 01:17:30', NULL),
	(15, 7, 'Xã hội học', 'mdi-counter', NULL, 2, 0, '2022-04-17 01:17:30', NULL),
	(16, 15, 'Nhập điểm khảo sát', 'mdi-label-outline', '/auth/surveys', 1, 0, '2022-04-17 01:17:30', NULL),
	(17, 15, 'Gửi điểm khảo sát', 'mdi-label-outline', '/auth/surveys', 2, 0, '2022-04-17 01:17:30', NULL),
	(18, 0, 'Thống kê báo cáo', 'mdi-counter', NULL, 4, 0, '2022-04-17 01:17:30', NULL),
	(19, 18, 'Theo đơn vị', 'mdi-label-outline', '/auth/surveys', 1, 0, '2022-04-17 01:17:30', NULL),
	(20, 18, 'Theo abc', 'mdi-label-outline', '/auth/surveys', 2, 0, '2022-04-17 01:17:30', NULL),
	(21, 0, 'Cấu hình ứng dụng', NULL, NULL, 5, 1, '2022-04-17 01:17:30', NULL),
	(24, 21, 'Đánh giá', 'mdi-label-multiple-outline', NULL, 1, 1, '2022-04-17 01:17:30', NULL),
	(25, 24, 'Bộ tiêu chí', 'mdi-label-outline', '/Auth/KhaoSat/DanhMuc', 1, 1, '2022-04-17 01:17:30', NULL),
	(26, 24, 'Tiêu chí ', 'mdi-label-outline', '/Auth/KhaoSat/CauHoi', 2, 1, '2022-04-17 01:17:30', NULL),
	(27, 24, 'Câu trả lời', 'mdi-label-outline', '/Auth/KhaoSat/CauTraLoi', 3, 0, '2022-04-17 01:17:30', NULL),
	(37, 21, 'Cấu hình', 'mdi-cog-outline', NULL, 2, 1, '2022-04-17 01:17:30', NULL),
	(38, 37, 'Đơn vị', 'mdi-label-variant-outline', '/Auth/KhaoSat/CauHinh/DonVi', 1, 0, '2022-04-17 01:17:30', NULL),
	(39, 37, 'Thẩm định', 'mdi-label-variant-outline', '/Auth/KhaoSat/CauHinh/CauHoi', 2, 1, '2022-04-17 01:17:30', NULL),
	(41, 37, 'Thời gian', 'mdi-label-variant-outline', '/Auth/KhaoSat/CauHinh/ThoiGian', 3, 1, NULL, NULL),
	(42, 8, 'Gửi ý kiến', 'mdi-label-outline', '/Auth/KhaoSat/TuDanhGia/GuiYKien', 3, 1, '2022-04-17 01:17:30', NULL);

-- Dumping data for table cscc_sadec_db.sidebar_has_permissions: ~58 rows (approximately)
REPLACE INTO `sidebar_has_permissions` (`permissionId`, `sidebarId`) VALUES
	(5, 2),
	(6, 2),
	(7, 2),
	(8, 2),
	(9, 2),
	(10, 2),
	(11, 2),
	(12, 2),
	(5, 3),
	(6, 3),
	(7, 3),
	(8, 3),
	(9, 4),
	(10, 4),
	(11, 4),
	(12, 4),
	(9, 5),
	(10, 5),
	(11, 5),
	(12, 5),
	(1, 6),
	(2, 6),
	(3, 6),
	(4, 6),
	(13, 7),
	(14, 7),
	(15, 7),
	(16, 7),
	(17, 7),
	(18, 7),
	(13, 8),
	(13, 9),
	(13, 10),
	(14, 11),
	(14, 12),
	(14, 13),
	(15, 14),
	(13, 21),
	(14, 21),
	(15, 21),
	(16, 21),
	(17, 21),
	(18, 21),
	(5, 21),
	(6, 21),
	(7, 21),
	(8, 21),
	(16, 24),
	(17, 24),
	(16, 25),
	(17, 26),
	(18, 37),
	(14, 39),
	(16, 39),
	(17, 39),
	(18, 39),
	(18, 41),
	(13, 42);

-- Dumping data for table cscc_sadec_db.users: ~3 rows (approximately)
REPLACE INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', '0e7517141fb53f21ee439b355b5a1d0a', 'Administrators', NULL, NULL, NULL, 0, 0, 0, 1, 1, NULL, NULL, '2024-08-22 23:44:34'),
	(46, 'noivu', '0e7517141fb53f21ee439b355b5a1d0a', 'Nội vụ thẩm định', NULL, NULL, NULL, 0, 0, 0, 3, 1, NULL, '2024-08-22 23:51:21', '2024-08-27 02:06:17'),
	(47, 'congan_td', '0e7517141fb53f21ee439b355b5a1d0a', 'Công an thành phố', NULL, NULL, NULL, 0, 0, 0, 24, 1, NULL, '2024-08-23 01:44:56', '2024-08-23 01:44:56'),
	(48, 'phuong1', '0e7517141fb53f21ee439b355b5a1d0a', 'UBND Phường 1', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-23 01:53:59', '2024-08-23 01:53:59');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
