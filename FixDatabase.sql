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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.activity_log: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.bang_thong_ke
CREATE TABLE IF NOT EXISTS `bang_thong_ke` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nam` int DEFAULT NULL,
  `xp_tong_so` int DEFAULT NULL,
  `xp_dat_chuan` int DEFAULT NULL,
  `xp_ti_le` float DEFAULT NULL,
  `ka_tong_so` int DEFAULT NULL,
  `ka_dat_chuan` int DEFAULT NULL,
  `ka_ti_le` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cscc_sadec_db.bang_thong_ke: ~24 rows (approximately)
REPLACE INTO `bang_thong_ke` (`id`, `nam`, `xp_tong_so`, `xp_dat_chuan`, `xp_ti_le`, `ka_tong_so`, `ka_dat_chuan`, `ka_ti_le`) VALUES
	(1, 2000, 8, 2, 25, 33, 18, 54.55),
	(2, 2001, 8, 3, 37.5, 33, 22, 66.67),
	(3, 2002, 8, 2, 25, 33, 12, 36.36),
	(4, 2003, 8, 2, 25, 33, 14, 42.42),
	(5, 2004, 8, 2, 25, 33, 19, 57.58),
	(6, 2005, 9, 2, 22.22, 34, 13, 38.24),
	(7, 2006, 9, 3, 33.33, 37, 29, 78.38),
	(8, 2007, 9, 1, 11.11, 37, 17, 45.95),
	(9, 2008, 9, 3, 33.33, 37, 19, 51.35),
	(10, 2009, 9, 5, 55.56, 37, 25, 67.57),
	(11, 2010, 9, 3, 33.33, 37, 28, 75.68),
	(12, 2011, 9, 4, 44.44, 37, 27, 72.97),
	(13, 2012, 9, 3, 33.33, 37, 28, 75.68),
	(14, 2013, 9, 4, 44.44, 37, 32, 72.97),
	(15, 2014, 9, 9, 100, 37, 32, 75.68),
	(16, 2015, 9, 9, 100, 37, 25, 86.49),
	(17, 2016, 9, 9, 100, 37, 37, 86.49),
	(18, 2017, 9, 9, 100, 37, 37, 94.59),
	(19, 2018, 9, 9, 100, 37, 37, 100),
	(20, 2019, 9, 9, 100, 37, 37, 100),
	(21, 2020, 9, 9, 100, 37, 37, 100),
	(22, 2021, 9, 9, 100, 37, 37, 100),
	(23, 2022, 9, 9, 100, 37, 37, 100),
	(24, 2023, 9, 9, 100, 37, 37, 100);

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
  `phanLoai` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.donvihanhchinh: ~60 rows (approximately)
REPLACE INTO `donvihanhchinh` (`id`, `parentId`, `tenDonVi`, `image`, `email`, `dienThoai`, `trangThai`, `sapXep`, `phanLoai`, `created_at`, `updated_at`) VALUES
	(1, 0, 'UBND Thành phố Sa Đéc', NULL, NULL, NULL, 1, NULL, NULL, '2022-04-30 20:58:38', '2022-05-22 23:57:52'),
	(2, 1, 'Văn phòng HĐND và UBND Thành phố', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:01:55', '2022-05-22 23:58:12'),
	(3, 1, 'Phòng Nội vụ', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:02:17', '2022-04-30 21:21:36'),
	(4, 1, 'Phòng LĐTB và Xã hội', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:02:32', '2022-04-30 21:21:49'),
	(5, 1, 'Thanh tra Thành phố', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:02:40', '2022-05-22 23:57:37'),
	(6, 1, 'Phòng Giáo dục và Đào tạo', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:02:54', '2022-04-30 22:30:46'),
	(7, 1, 'Phòng Văn hoá và Thông tin', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:03:15', '2022-04-30 22:30:22'),
	(8, 1, 'Phòng Tài nguyên và Môi trường', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:03:28', '2022-04-30 22:30:11'),
	(9, 1, 'Phòng Quản lý Đô thị', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:03:41', '2022-05-22 23:58:42'),
	(10, 1, 'Phòng Kinh tế', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:03:52', '2022-04-30 21:22:40'),
	(11, 1, 'Phòng Tư pháp', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:03:59', '2022-05-22 23:58:57'),
	(12, 1, 'Phòng Y tế', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:04:05', '2022-05-22 23:59:11'),
	(13, 1, 'Phòng Tài chính Kế hoạch', NULL, NULL, NULL, 1, NULL, 0, '2022-04-30 21:04:14', '2022-05-22 23:59:27'),
	(14, 0, 'Công an Thành phố', NULL, NULL, NULL, 1, NULL, NULL, '2022-04-30 21:04:14', '2022-05-22 23:59:27'),
	(15, 1, 'UBND Phường 1', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:04:26', '2022-04-30 21:04:26'),
	(16, 1, 'UBND Phường 2', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:04:36', '2022-04-30 21:04:36'),
	(17, 1, 'UBND Phường 3', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:04:42', '2022-04-30 21:04:42'),
	(18, 1, 'UBND Phường 4', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:04:46', '2022-04-30 21:04:46'),
	(19, 1, 'UBND phường An Hòa', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:05:14', '2022-04-30 21:05:14'),
	(20, 1, 'UBND phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:05:27', '2022-05-22 23:59:39'),
	(21, 1, 'UBND xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:06:58', '2022-04-30 21:06:58'),
	(22, 1, 'UBND xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:07:59', '2022-04-30 21:07:59'),
	(23, 1, 'UBND xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 1, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(24, 15, 'Khóm 1 - Phường 1', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(25, 15, 'Khóm 2 - Phường 1', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(26, 15, 'Khóm 3 - Phường 1', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(27, 15, 'Khóm 4 - Phường 1', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(28, 15, 'Khóm 5 - Phường 1', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(29, 16, 'Khóm 1 - Phường 2', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(30, 16, 'Khóm 2 - Phường 2', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(31, 16, 'Khóm Hòa Khánh - Phường 2', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(32, 16, 'Khóm Hòa An - Phường 2', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(33, 17, 'Khóm 1 - Phường 3', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(34, 17, 'Khóm 2 - Phường 3', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(35, 17, 'Khóm 3 - Phường 3', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(36, 18, 'Khóm 1 - Phường 4', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(37, 18, 'Khóm 2 - Phường 4', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(38, 18, 'Khóm 3 - Phường 4', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(39, 19, 'Khóm Tân Bình - Phường An Hòa', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(40, 19, 'Khóm Tân An - Phường An Hòa', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(41, 19, 'Khóm Tân Thuận - Phường An Hòa', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(42, 19, 'Khóm Tân Hòa - Phường An Hòa', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(43, 20, 'Khóm Sa Nhiên - Phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(44, 20, 'Khóm Tân Mỹ - Phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(45, 20, 'Khóm Tân Huề - Phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(46, 20, 'Khóm Tân Hiệp - Phường Tân Quy Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(47, 21, 'Ấp Phú Long - Xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(48, 21, 'Ấp Phú Thành - Xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(49, 21, 'Ấp Phú Hòa - Xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(50, 21, 'Ấp Phú Thuận - Xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(51, 21, 'Ấp Phú An - Xã Tân Phú Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(52, 22, 'Ấp Phú Hòa - Xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(53, 22, 'Ấp Phú Thuận - Xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(54, 22, 'Ấp Phú An - Xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(55, 23, 'Ấp Khánh Nghĩa - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(56, 23, 'Ấp Khánh Hòa - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(57, 23, 'Ấp Khánh Nhơn - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(58, 23, 'Ấp Đông Huề - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(59, 23, 'Ấp Đông Quới - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35'),
	(60, 23, 'Ấp Đông Giang - Xã Tân Khánh Đông', NULL, NULL, NULL, 1, NULL, 2, '2022-04-30 21:08:35', '2022-04-30 21:08:35');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_bangdiem: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc: ~0 rows (approximately)

-- Dumping structure for table cscc_sadec_db.khaosat_danhmuc_donvi
CREATE TABLE IF NOT EXISTS `khaosat_danhmuc_donvi` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `maDanhMuc` bigint DEFAULT NULL,
  `maDonVi` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc_donvi: ~0 rows (approximately)

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
REPLACE INTO `khaosat_thoigian` (`id`, `tenThoiGian`, `batDau`, `ketThuc`, `created_at`, `updated_at`) VALUES
	(1, 'Thời gian tự đánh giá', '2024-01-01 01:00:00', '2024-12-31 23:59:00', '2024-01-01 01:00:00', '2024-01-01 01:00:00'),
	(2, 'Thời gian thẩm định', '2024-01-01 01:00:00', '2024-12-31 23:59:00', '2024-01-01 01:00:00', '2024-01-01 01:00:00');

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
	(6, 'Modules\\Users\\Entities\\User', 41),
	(6, 'Modules\\Users\\Entities\\User', 42),
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
REPLACE INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
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
REPLACE INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
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

-- Dumping structure for table cscc_sadec_db.sidebar_has_permissions
CREATE TABLE IF NOT EXISTS `sidebar_has_permissions` (
  `permissionId` bigint NOT NULL DEFAULT '0',
  `sidebarId` bigint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table cscc_sadec_db.users: ~0 rows (approximately)
REPLACE INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'e6e061838856bf47e1de730719fb2609', 'Administrators', NULL, NULL, NULL, 0, 0, 0, 1, 1, NULL, NULL, '2022-12-21 00:31:04');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
