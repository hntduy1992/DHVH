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

-- Dumping structure for table cscc_sadec_db.activity_log
CREATE TABLE IF NOT EXISTS `activity_log` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `log_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint unsigned DEFAULT NULL,
  `causer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint unsigned DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `batch_uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.activity_log: ~0 rows (approximately)
INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
	(1, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMuc', 'created', 1, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1,"tenDanhMuc":"TI\\u00caU CHU\\u1ea8N DANH HI\\u1ec6U X\\u00c3, PH\\u01af\\u1edcNG, TH\\u1eca TR\\u1ea4N TI\\u00caU BI\\u1ec2U 2024","namApDung":2024,"noiDung":"K\\u00e8m theo Quy\\u1ebft \\u0111\\u1ecbnh   \\/2024\\/Q\\u0110-UBND ng\\u00e0y       th\\u00e1ng      n\\u0103m 2024 c\\u1ee7a \\u1ee6y ban nh\\u00e2n d\\u00e2n t\\u1ec9nh \\u0110\\u1ed3ng Th\\u00e1p","trangThai":1,"created_at":"2024-08-23T15:16:55.000000Z","updated_at":"2024-08-23T15:16:55.000000Z"}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(2, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 1, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1,"maDanhMuc":1,"maDonVi":14}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(3, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 2, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":2,"maDanhMuc":1,"maDonVi":15}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(4, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 3, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":3,"maDanhMuc":1,"maDonVi":16}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(5, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 4, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":4,"maDanhMuc":1,"maDonVi":17}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(6, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 5, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":5,"maDanhMuc":1,"maDonVi":18}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(7, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 6, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":6,"maDanhMuc":1,"maDonVi":19}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(8, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 7, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":7,"maDanhMuc":1,"maDonVi":20}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(9, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 8, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":8,"maDanhMuc":1,"maDonVi":21}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(10, 'default', 'created', 'Modules\\KhaoSat\\Entities\\DanhMucDonVi', 'created', 9, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":9,"maDanhMuc":1,"maDonVi":22}}', NULL, '2024-08-23 08:16:55', '2024-08-23 08:16:55'),
	(11, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 1, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":1,"parentId":0,"maDanhMuc":1,"stt":"1","tenCauHoi":"Th\\u1ef1c hi\\u1ec7n t\\u1ed1t c\\u00e1c nhi\\u1ec7m v\\u1ee5 kinh t\\u1ebf - x\\u00e3 h\\u1ed9i, qu\\u1ed1c ph\\u00f2ng, an ninh, tr\\u1eadt t\\u1ef1, an to\\u00e0n x\\u00e3 h\\u1ed9i \\u0111\\u01b0\\u1ee3c giao","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":20,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":0,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:29:21.000000Z","updated_at":"2024-08-23T15:29:21.000000Z"}}', NULL, '2024-08-23 08:29:21', '2024-08-23 08:29:21'),
	(12, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 2, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":2,"parentId":1,"maDanhMuc":1,"stt":"1.1","tenCauHoi":"B\\u1ea3o \\u0111\\u1ea3m tr\\u1eadt t\\u1ef1, an to\\u00e0n x\\u00e3 h\\u1ed9i, \\u0111\\u1ea5u tranh, ph\\u00f2ng, ch\\u1ed1ng t\\u1ed9i ph\\u1ea1m v\\u00e0 c\\u00e1c h\\u00e0nh vi vi ph\\u1ea1m ph\\u00e1p lu\\u1eadt kh\\u00e1c","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":1,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:31:37.000000Z","updated_at":"2024-08-23T15:31:37.000000Z"}}', NULL, '2024-08-23 08:31:37', '2024-08-23 08:31:37'),
	(13, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 3, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":3,"parentId":2,"maDanhMuc":1,"stt":null,"tenCauHoi":"X\\u00e3, ph\\u01b0\\u1eddng, th\\u1ecb tr\\u1ea5n \\u0111\\u1ea1t ti\\u00eau chu\\u1ea9n \\u201cAn to\\u00e0n v\\u1ec1 an ninh tr\\u1eadt t\\u1ef1\\u201d theo H\\u01b0\\u1edbng d\\u1eabn s\\u1ed1 03-HD\\/BCDD138 ng\\u00e0y 02\\/6\\/2022 c\\u1ee7a Ban Ch\\u1ec9 \\u0111\\u1ea1o 138\\/\\u0110P T\\u1ec9nh.","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":2,"kieuNhapLieu":"Text","sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:32:19.000000Z","updated_at":"2024-08-23T15:32:19.000000Z"}}', NULL, '2024-08-23 08:32:19', '2024-08-23 08:32:19'),
	(14, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 4, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":4,"parentId":2,"maDanhMuc":1,"stt":null,"tenCauHoi":"Kh\\u00f4ng \\u0111\\u1ea1t","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":0,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":2,"kieuNhapLieu":"Radio","sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:32:56.000000Z","updated_at":"2024-08-23T15:32:56.000000Z"}}', NULL, '2024-08-23 08:32:56', '2024-08-23 08:32:56'),
	(15, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 5, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":5,"parentId":1,"maDanhMuc":1,"stt":"1.2","tenCauHoi":"H\\u1ee3p t\\u00e1c v\\u00e0 li\\u00ean k\\u1ebft ph\\u00e1t tri\\u1ec3n kinh t\\u1ebf x\\u00e3 h\\u1ed9i","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":0,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:33:27.000000Z","updated_at":"2024-08-23T15:33:27.000000Z"}}', NULL, '2024-08-23 08:33:27', '2024-08-23 08:33:27'),
	(16, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 6, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":6,"parentId":5,"maDanhMuc":1,"stt":null,"tenCauHoi":"C\\u00f3 m\\u1ed9t trong c\\u00e1c m\\u00f4 h\\u00ecnh: H\\u1ee3p t\\u00e1c x\\u00e3, T\\u1ed5 h\\u1ee3p t\\u00e1c, h\\u1ed9i qu\\u00e1n, li\\u00ean doanh, li\\u00ean k\\u1ebft trong s\\u1ea3n xu\\u1ea5t, kinh doanh\\u2026 ho\\u1eb7c h\\u00ecnh th\\u1ee9c kh\\u00e1c \\u0111\\u1ea1t hi\\u1ec7u qu\\u1ea3.","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":2,"kieuNhapLieu":"Text","sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:33:52.000000Z","updated_at":"2024-08-23T15:33:52.000000Z"}}', NULL, '2024-08-23 08:33:52', '2024-08-23 08:33:52'),
	(17, 'default', 'created', 'Modules\\KhaoSat\\Entities\\CauHoi', 'created', 7, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":7,"parentId":5,"maDanhMuc":1,"stt":null,"tenCauHoi":"Kh\\u00f4ng c\\u00f3 m\\u00f4 h\\u00ecnh n\\u00e0o ho\\u1eb7c m\\u00f4 h\\u00ecnh kh\\u00f4ng ho\\u1ea1t \\u0111\\u1ed9ng hi\\u1ec7u qu\\u1ea3","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":0,"loaiCauHoi":1,"loaiDieuKien":"AND","danhDauCau":2,"kieuNhapLieu":"Radio","sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:34:16.000000Z","updated_at":"2024-08-23T15:34:16.000000Z"}}', NULL, '2024-08-23 08:34:16', '2024-08-23 08:34:16'),
	(18, 'default', 'updated', 'Modules\\KhaoSat\\Entities\\CauHoi', 'updated', 5, 'Modules\\Users\\Entities\\User', 1, '{"attributes":{"id":5,"parentId":1,"maDanhMuc":1,"stt":"1.2","tenCauHoi":"H\\u1ee3p t\\u00e1c v\\u00e0 li\\u00ean k\\u1ebft ph\\u00e1t tri\\u1ec3n kinh t\\u1ebf x\\u00e3 h\\u1ed9i","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":1,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:33:27.000000Z","updated_at":"2024-08-23T15:38:23.000000Z"},"old":{"id":5,"parentId":1,"maDanhMuc":1,"stt":"1.2","tenCauHoi":"H\\u1ee3p t\\u00e1c v\\u00e0 li\\u00ean k\\u1ebft ph\\u00e1t tri\\u1ec3n kinh t\\u1ebf x\\u00e3 h\\u1ed9i","diemNhoNhat":0,"buocNhay":0,"diemLonNhat":7,"loaiCauHoi":1,"loaiDieuKien":"OR","danhDauCau":0,"kieuNhapLieu":null,"sapXep":1,"trangThai":1,"created_at":"2024-08-23T15:33:27.000000Z","updated_at":"2024-08-23T15:33:27.000000Z"}}', NULL, '2024-08-23 08:38:23', '2024-08-23 08:38:23'),
	(19, 'default', 'created', 'Modules\\KhaoSat\\Entities\\BangDiem', 'created', 1, 'Modules\\Users\\Entities\\User', 6, '{"attributes":{"id":1,"diem":5,"diemThamDinh":0,"maCauHoi":2,"maDanhMuc":1,"noiDungTraLoi":[{"id":3,"diem":5}],"maDonViDanhGia":14,"maNguoiDanhGia":6,"fileDanhGia":null,"ghiChuDanhGia":"\\u0110\\u00e2y l\\u00e0 ghi ch\\u00fa","maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1,"trangThai":1,"created_at":"2024-08-23T15:44:17.000000Z","updated_at":"2024-08-23T15:44:17.000000Z"}}', NULL, '2024-08-23 08:44:17', '2024-08-23 08:44:17'),
	(20, 'default', 'created', 'Modules\\KhaoSat\\Entities\\BangDiem', 'created', 2, 'Modules\\Users\\Entities\\User', 6, '{"attributes":{"id":2,"diem":5,"diemThamDinh":0,"maCauHoi":5,"maDanhMuc":1,"noiDungTraLoi":[{"id":6,"diem":5}],"maDonViDanhGia":14,"maNguoiDanhGia":6,"fileDanhGia":null,"ghiChuDanhGia":"\\u0110\\u00e2y l\\u00e0 ghi ch\\u00fa 2","maDonViThamDinh":null,"maNguoiThamDinh":null,"noiDungThamDinh":[],"ghiChuThamDinh":null,"parentId":1,"trangThai":1,"created_at":"2024-08-23T15:44:17.000000Z","updated_at":"2024-08-23T15:44:17.000000Z"}}', NULL, '2024-08-23 08:44:17', '2024-08-23 08:44:17');

-- Dumping structure for table cscc_sadec_db.donvihanhchinh
CREATE TABLE IF NOT EXISTS `donvihanhchinh` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `parentId` bigint NOT NULL DEFAULT '0',
  `tenDonVi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dienThoai` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trangThai` tinyint NOT NULL DEFAULT '1',
  `sapXep` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.donvihanhchinh: ~22 rows (approximately)
INSERT INTO `donvihanhchinh` (`id`, `parentId`, `tenDonVi`, `image`, `email`, `dienThoai`, `trangThai`, `sapXep`, `created_at`, `updated_at`) VALUES
	(1, 0, 'UBND Thành phố Sa Đéc', NULL, NULL, NULL, 1, NULL, '2022-04-30 20:58:38', '2022-05-22 23:57:52'),
	(2, 1, 'Văn phòng HĐND và UBND Thành phố', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:01:55', '2022-05-22 23:58:12'),
	(3, 1, 'Phòng Nội vụ', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:17', '2022-04-30 21:21:36'),
	(4, 1, 'Phòng LĐTB và Xã hội', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:32', '2022-04-30 21:21:49'),
	(5, 1, 'Thanh tra Thành phố', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:40', '2022-05-22 23:57:37'),
	(6, 1, 'Phòng Giáo dục và Đào tạo', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:02:54', '2022-04-30 22:30:46'),
	(7, 1, 'Phòng Văn hoá và Thông tin', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:15', '2022-04-30 22:30:22'),
	(8, 1, 'Phòng Tài nguyên và Môi trường', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:28', '2022-04-30 22:30:11'),
	(9, 1, 'Phòng Quản lý Đô thị', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:41', '2022-05-22 23:58:42'),
	(10, 1, 'Phòng Kinh tế', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:52', '2022-04-30 21:22:40'),
	(11, 1, 'Phòng Tư pháp', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:03:59', '2022-05-22 23:58:57'),
	(12, 1, 'Phòng Y tế', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:05', '2022-05-22 23:59:11'),
	(13, 1, 'Phòng Tài chính Kế hoạch', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:14', '2022-05-22 23:59:27'),
	(14, 1, 'UBND Phường 1', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:26', '2022-04-30 21:04:26'),
	(15, 1, 'UBND Phường 2', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:36', '2022-04-30 21:04:36'),
	(16, 1, 'UBND Phường 3', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:42', '2022-04-30 21:04:42'),
	(17, 1, 'UBND Phường 4', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:04:46', '2022-04-30 21:04:46'),
	(18, 1, 'UBND phường An Hòa', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:05:14', '2022-04-30 21:05:14'),
	(19, 1, 'UBND phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:05:27', '2022-05-22 23:59:39'),
	(20, 1, 'UBND xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:06:58', '2022-04-30 21:06:58'),
	(21, 1, 'UBND xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:07:59', '2022-04-30 21:07:59'),
	(22, 1, 'UBND xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(23, 1, 'Công an thành phố', NULL, NULL, NULL, 1, NULL, '2024-08-23 07:59:27', '2024-08-23 07:59:27'),
	(24, 14, 'Khóm 1 - P1', NULL, NULL, NULL, 1, NULL, '2024-08-23 08:01:28', '2024-08-23 08:01:28');

-- Dumping structure for table cscc_sadec_db.khaosat_bangdiem
CREATE TABLE IF NOT EXISTS `khaosat_bangdiem` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `diem` float DEFAULT NULL,
  `diemThamDinh` float DEFAULT '0',
  `maCauHoi` bigint DEFAULT NULL,
  `maDanhMuc` bigint DEFAULT NULL,
  `noiDungTraLoi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maDonViDanhGia` bigint DEFAULT NULL,
  `maNguoiDanhGia` bigint DEFAULT NULL,
  `fileDanhGia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ghiChuDanhGia` text COLLATE utf8mb4_unicode_ci,
  `maDonViThamDinh` bigint DEFAULT NULL,
  `maNguoiThamDinh` bigint DEFAULT NULL,
  `noiDungThamDinh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ghiChuThamDinh` text COLLATE utf8mb4_unicode_ci,
  `parentId` bigint DEFAULT '0' COMMENT 'Mã câu hỏi cấp trên',
  `trangThai` tinyint DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_bangdiem: ~2 rows (approximately)
INSERT INTO `khaosat_bangdiem` (`id`, `diem`, `diemThamDinh`, `maCauHoi`, `maDanhMuc`, `noiDungTraLoi`, `maDonViDanhGia`, `maNguoiDanhGia`, `fileDanhGia`, `ghiChuDanhGia`, `maDonViThamDinh`, `maNguoiThamDinh`, `noiDungThamDinh`, `ghiChuThamDinh`, `parentId`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1, 5, 0, 2, 1, '[{"id":3,"diem":5}]', 14, 6, NULL, 'Đây là ghi chú', NULL, NULL, '[]', NULL, 1, 1, '2024-08-23 08:44:17', '2024-08-23 08:44:17'),
	(2, 5, 0, 5, 1, '[{"id":6,"diem":5}]', 14, 6, NULL, 'Đây là ghi chú 2', NULL, NULL, '[]', NULL, 1, 1, '2024-08-23 08:44:17', '2024-08-23 08:44:17');

-- Dumping structure for table cscc_sadec_db.khaosat_bienban
CREATE TABLE IF NOT EXISTS `khaosat_bienban` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `maDanhMuc` bigint NOT NULL DEFAULT '0',
  `maDonVi` bigint NOT NULL DEFAULT '0',
  `fileName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'File biên bản',
  `maNguoiGuiDiem` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_bienban: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.khaosat_cauhoi
CREATE TABLE IF NOT EXISTS `khaosat_cauhoi` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `parentId` bigint DEFAULT '0',
  `maDanhMuc` bigint DEFAULT '0',
  `stt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tenCauHoi` text COLLATE utf8mb4_unicode_ci,
  `diemNhoNhat` float DEFAULT '0',
  `buocNhay` float DEFAULT '0',
  `diemLonNhat` float DEFAULT '0',
  `loaiCauHoi` tinyint DEFAULT '1' COMMENT '1: Đánh giá, 2: Điều tra XHH',
  `loaiDieuKien` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'AND' COMMENT 'AND, OR, MATH',
  `danhDauCau` tinyint DEFAULT '0' COMMENT '1: là câu hỏi, 2: là câu trả lời, 0 là câu hỏi cấp trên, 3: câu đặc biệt',
  `kieuNhapLieu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Input, Select, Checkbox, Radio',
  `sapXep` int DEFAULT '1',
  `trangThai` tinyint DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi: ~1 rows (approximately)
INSERT INTO `khaosat_cauhoi` (`id`, `parentId`, `maDanhMuc`, `stt`, `tenCauHoi`, `diemNhoNhat`, `buocNhay`, `diemLonNhat`, `loaiCauHoi`, `loaiDieuKien`, `danhDauCau`, `kieuNhapLieu`, `sapXep`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1, 0, 1, '1', 'Thực hiện tốt các nhiệm vụ kinh tế - xã hội, quốc phòng, an ninh, trật tự, an toàn xã hội được giao', 0, 0, 20, 1, 'AND', 0, NULL, 1, 1, '2024-08-23 08:29:21', '2024-08-23 08:29:21'),
	(2, 1, 1, '1.1', 'Bảo đảm trật tự, an toàn xã hội, đấu tranh, phòng, chống tội phạm và các hành vi vi phạm pháp luật khác', 0, 0, 7, 1, 'OR', 1, NULL, 1, 1, '2024-08-23 08:31:37', '2024-08-23 08:31:37'),
	(3, 2, 1, NULL, 'Xã, phường, thị trấn đạt tiêu chuẩn “An toàn về an ninh trật tự” theo Hướng dẫn số 03-HD/BCDD138 ngày 02/6/2022 của Ban Chỉ đạo 138/ĐP Tỉnh.', 0, 0, 7, 1, 'AND', 2, 'Text', 1, 1, '2024-08-23 08:32:19', '2024-08-23 08:32:19'),
	(4, 2, 1, NULL, 'Không đạt', 0, 0, 0, 1, 'AND', 2, 'Radio', 1, 1, '2024-08-23 08:32:56', '2024-08-23 08:32:56'),
	(5, 1, 1, '1.2', 'Hợp tác và liên kết phát triển kinh tế xã hội', 0, 0, 7, 1, 'OR', 1, NULL, 1, 1, '2024-08-23 08:33:27', '2024-08-23 08:38:23'),
	(6, 5, 1, NULL, 'Có một trong các mô hình: Hợp tác xã, Tổ hợp tác, hội quán, liên doanh, liên kết trong sản xuất, kinh doanh… hoặc hình thức khác đạt hiệu quả.', 0, 0, 7, 1, 'AND', 2, 'Text', 1, 1, '2024-08-23 08:33:52', '2024-08-23 08:33:52'),
	(7, 5, 1, NULL, 'Không có mô hình nào hoặc mô hình không hoạt động hiệu quả', 0, 0, 0, 1, 'AND', 2, 'Radio', 1, 1, '2024-08-23 08:34:16', '2024-08-23 08:34:16');

-- Dumping structure for table cscc_sadec_db.khaosat_cauhoi_thamdinh
CREATE TABLE IF NOT EXISTS `khaosat_cauhoi_thamdinh` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `maDanhMuc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maCauHoi` bigint DEFAULT NULL,
  `maDonVi` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi_thamdinh: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.khaosat_danhmuc
CREATE TABLE IF NOT EXISTS `khaosat_danhmuc` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tenDanhMuc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `namApDung` int DEFAULT NULL,
  `noiDung` text COLLATE utf8mb4_unicode_ci,
  `trangThai` tinyint DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc: ~0 rows (approximately)
INSERT INTO `khaosat_danhmuc` (`id`, `tenDanhMuc`, `namApDung`, `noiDung`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1, 'TIÊU CHUẨN DANH HIỆU XÃ, PHƯỜNG, THỊ TRẤN TIÊU BIỂU 2024', 2024, 'Kèm theo Quyết định   /2024/QĐ-UBND ngày       tháng      năm 2024 của Ủy ban nhân dân tỉnh Đồng Tháp', 1, '2024-08-23 08:16:55', '2024-08-23 08:16:55');

-- Dumping structure for table cscc_sadec_db.khaosat_danhmuc_donvi
CREATE TABLE IF NOT EXISTS `khaosat_danhmuc_donvi` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `maDanhMuc` bigint DEFAULT NULL,
  `maDonVi` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc_donvi: ~9 rows (approximately)
INSERT INTO `khaosat_danhmuc_donvi` (`id`, `maDanhMuc`, `maDonVi`) VALUES
	(1, 1, 14),
	(2, 1, 15),
	(3, 1, 16),
	(4, 1, 17),
	(5, 1, 18),
	(6, 1, 19),
	(7, 1, 20),
	(8, 1, 21),
	(9, 1, 22);

-- Dumping structure for table cscc_sadec_db.khaosat_diemtonghop
CREATE TABLE IF NOT EXISTS `khaosat_diemtonghop` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `diem` float DEFAULT NULL,
  `namApDung` int DEFAULT NULL,
  `maDanhMuc` bigint DEFAULT NULL,
  `maDonVi` bigint DEFAULT NULL,
  `maNguoiTongHop` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_diemtonghop: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.khaosat_thoigian
CREATE TABLE IF NOT EXISTS `khaosat_thoigian` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tenThoiGian` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batDau` timestamp NULL DEFAULT NULL,
  `ketThuc` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_thoigian: ~2 rows (approximately)
INSERT INTO `khaosat_thoigian` (`id`, `tenThoiGian`, `batDau`, `ketThuc`, `created_at`, `updated_at`) VALUES
	(1, 'Thời gian tự đánh giá', '2023-10-22 17:00:00', '2025-11-03 17:00:00', '2022-04-20 15:47:01', '2024-08-23 08:40:30'),
	(2, 'Thời gian thẩm định', '2023-11-20 17:00:00', '2025-11-29 17:00:00', '2022-04-20 15:47:42', '2024-08-23 08:40:30');

-- Dumping structure for table cscc_sadec_db.khaosat_ykien
CREATE TABLE IF NOT EXISTS `khaosat_ykien` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `maDanhMuc` bigint DEFAULT NULL,
  `maCauHoi` bigint DEFAULT NULL,
  `noiDung` text COLLATE utf8mb4_general_ci,
  `maDonVi` bigint DEFAULT NULL,
  `maNguoiYKien` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_ykien: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.model_has_permissions
CREATE TABLE IF NOT EXISTS `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.model_has_permissions: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.model_has_roles
CREATE TABLE IF NOT EXISTS `model_has_roles` (
  `role_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.model_has_roles: ~36 rows (approximately)
INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
	(5, 'Modules\\Users\\Entities\\User', 1),
	(5, 'Modules\\Users\\Entities\\User', 5),
	(6, 'Modules\\Users\\Entities\\User', 6),
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
	(6, 'Modules\\Users\\Entities\\User', 41),
	(6, 'Modules\\Users\\Entities\\User', 42),
	(7, 'Modules\\Users\\Entities\\User', 2),
	(7, 'Modules\\Users\\Entities\\User', 3),
	(7, 'Modules\\Users\\Entities\\User', 7),
	(7, 'Modules\\Users\\Entities\\User', 21),
	(7, 'Modules\\Users\\Entities\\User', 22),
	(7, 'Modules\\Users\\Entities\\User', 24),
	(7, 'Modules\\Users\\Entities\\User', 28),
	(7, 'Modules\\Users\\Entities\\User', 29),
	(7, 'Modules\\Users\\Entities\\User', 30),
	(7, 'Modules\\Users\\Entities\\User', 37),
	(7, 'Modules\\Users\\Entities\\User', 38),
	(7, 'Modules\\Users\\Entities\\User', 39),
	(7, 'Modules\\Users\\Entities\\User', 40),
	(7, 'Modules\\Users\\Entities\\User', 44),
	(8, 'Modules\\Users\\Entities\\User', 4),
	(8, 'Modules\\Users\\Entities\\User', 8),
	(8, 'Modules\\Users\\Entities\\User', 22),
	(8, 'Modules\\Users\\Entities\\User', 43),
	(8, 'Modules\\Users\\Entities\\User', 45);

-- Dumping structure for table cscc_sadec_db.modules
CREATE TABLE IF NOT EXISTS `modules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.modules: ~4 rows (approximately)
INSERT INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Phân Quyền', '2022-04-08 11:40:21', NULL),
	(2, 'Đơn vị hành chính', '2022-04-08 11:40:35', NULL),
	(3, 'Người dùng', '2022-04-08 11:40:35', NULL),
	(4, 'Cải cách hành chính', '2022-04-08 11:40:35', NULL);

-- Dumping structure for table cscc_sadec_db.permissions
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `module_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.permissions: ~18 rows (approximately)
INSERT INTO `permissions` (`id`, `name`, `display_name`, `guard_name`, `module_id`, `created_at`, `updated_at`) VALUES
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

-- Dumping structure for table cscc_sadec_db.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.roles: ~4 rows (approximately)
INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
	(5, 'admin', 'api', '2022-04-16 18:56:27', '2022-04-16 18:56:27'),
	(6, 'Tự đánh giá', 'api', '2022-04-30 21:23:35', '2022-05-03 20:10:50'),
	(7, 'Thẩm định', 'api', '2022-04-30 21:24:19', '2022-05-03 20:11:12'),
	(8, 'Xác nhận', 'api', '2022-04-30 21:24:32', '2022-05-03 20:50:53');

-- Dumping structure for table cscc_sadec_db.role_has_permissions
CREATE TABLE IF NOT EXISTS `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.role_has_permissions: ~18 rows (approximately)
INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
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
	(13, 6),
	(14, 7),
	(15, 8),
	(16, 5),
	(17, 5),
	(18, 5);

-- Dumping structure for table cscc_sadec_db.sidebars
CREATE TABLE IF NOT EXISTS `sidebars` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `parentId` bigint NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '1',
  `status` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.sidebars: ~30 rows (approximately)
INSERT INTO `sidebars` (`id`, `parentId`, `name`, `icon`, `url`, `order`, `status`, `created_at`, `updated_at`) VALUES
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

-- Dumping structure for table cscc_sadec_db.sidebar_has_permissions
CREATE TABLE IF NOT EXISTS `sidebar_has_permissions` (
  `permissionId` bigint NOT NULL DEFAULT '0',
  `sidebarId` bigint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.sidebar_has_permissions: ~58 rows (approximately)
INSERT INTO `sidebar_has_permissions` (`permissionId`, `sidebarId`) VALUES
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

-- Dumping structure for table cscc_sadec_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provinceId` bigint NOT NULL DEFAULT '0',
  `districtId` bigint NOT NULL DEFAULT '0',
  `wardId` bigint NOT NULL DEFAULT '0',
  `organizationId` bigint DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.users: ~1 rows (approximately)
INSERT INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', 'ca350b3d82c1c1c2099a265840334e37', 'Administrators', NULL, NULL, NULL, 0, 0, 0, 1, 1, NULL, NULL, '2022-12-21 00:31:04'),
	(2, 'congan_td', '0e7517141fb53f21ee439b355b5a1d0a', 'Công an Thẩm định', NULL, NULL, NULL, 0, 0, 0, 23, 1, NULL, '2024-08-23 08:03:16', '2024-08-23 08:03:16'),
	(3, 'noivu_td', '0e7517141fb53f21ee439b355b5a1d0a', 'Nội vụ thẩm định', NULL, NULL, NULL, 0, 0, 0, 3, 1, NULL, '2024-08-23 08:05:00', '2024-08-23 08:05:00'),
	(4, 'noivu_xn', '0e7517141fb53f21ee439b355b5a1d0a', 'Nội vụ xác nhận', NULL, NULL, NULL, 0, 0, 0, 3, 1, NULL, '2024-08-23 08:05:25', '2024-08-23 08:05:25'),
	(5, 'phuong1_ad', '0e7517141fb53f21ee439b355b5a1d0a', 'Phường 1 Quản trị', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-23 08:06:09', '2024-08-23 08:06:09'),
	(6, 'phuong1_tdg', '0e7517141fb53f21ee439b355b5a1d0a', 'Phường 1 tự chấm', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-23 08:06:49', '2024-08-23 08:06:49'),
	(7, 'phuong1_td', '0e7517141fb53f21ee439b355b5a1d0a', 'Phường 1 thẩm định', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-23 08:07:13', '2024-08-23 08:07:13'),
	(8, 'phuong1_xn', '0e7517141fb53f21ee439b355b5a1d0a', 'Phường 1 xác nhận', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-23 08:07:40', '2024-08-23 08:07:40'),
	(9, 'khom1_p1', '0e7517141fb53f21ee439b355b5a1d0a', 'Khóm 1 P1', NULL, NULL, NULL, 0, 0, 0, 24, 1, NULL, '2024-08-23 08:08:23', '2024-08-23 08:08:23');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
