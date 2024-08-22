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

-- Dumping data for table cscc_sadec_db.activity_log: ~6.536 rows (approximately)
REPLACE INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
	
-- Dumping data for table cscc_sadec_db.donvihanhchinh: ~22 rows (approximately)
REPLACE INTO `donvihanhchinh` (`id`, `parentId`, `tenDonVi`, `image`, `email`, `dienThoai`, `trangThai`, `sapXep`, `created_at`, `updated_at`) VALUES
	(1, 0, 'UBND Thành phố Sa Đéc', NULL, NULL, NULL, 1, NULL, '2022-04-30 20:58:38', '2022-05-22 23:57:52');
REPLACE INTO `donvihanhchinh` (`id`, `parentId`, `tenDonVi`, `image`, `email`, `dienThoai`, `trangThai`, `sapXep`, `created_at`, `updated_at`) VALUES
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
	(24, 14, 'Khóm 1 - Phường 1', NULL, NULL, NULL, 1, NULL, '2024-08-21 05:28:31', '2024-08-21 06:42:10'),
	(25, 14, 'Khóm 2', NULL, NULL, NULL, 1, NULL, '2024-08-21 05:28:38', '2024-08-21 05:28:38'),
	(26, 15, 'Khóm 1', NULL, NULL, NULL, 1, NULL, '2024-08-21 05:28:51', '2024-08-21 05:28:51'),
	(27, 0, 'Công an Thành phố', NULL, NULL, NULL, 1, NULL, '2024-08-21 07:44:30', '2024-08-21 07:44:30');

-- Dumping data for table cscc_sadec_db.khaosat_bangdiem: ~3.097 rows (approximately)
REPLACE INTO `khaosat_bangdiem` (`id`, `diem`, `diemThamDinh`, `maCauHoi`, `maDanhMuc`, `noiDungTraLoi`, `maDonViDanhGia`, `maNguoiDanhGia`, `fileDanhGia`, `ghiChuDanhGia`, `maDonViThamDinh`, `maNguoiThamDinh`, `noiDungThamDinh`, `ghiChuThamDinh`, `parentId`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1, 2, 2, 2, 2, '[{"id":3,"diem":2}]', 19, 17, 'files/organizations-19/1.1_capnhat.zip.rar', 'hoàn thành', 3, 44, '[{"id":3,"diem":2}]', 'Đề nghị bổ sung Báo cáo CCHC năm 2022', 1, 8, '2023-02-17 19:42:11', '2023-04-13 02:30:08');
REPLACE INTO `khaosat_bangdiem` (`id`, `diem`, `diemThamDinh`, `maCauHoi`, `maDanhMuc`, `noiDungTraLoi`, `maDonViDanhGia`, `maNguoiDanhGia`, `fileDanhGia`, `ghiChuDanhGia`, `maDonViThamDinh`, `maNguoiThamDinh`, `noiDungThamDinh`, `ghiChuThamDinh`, `parentId`, `trangThai`, `created_at`, `updated_at`) VALUES

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi: ~971 rows (approximately)
REPLACE INTO `khaosat_cauhoi` (`id`, `parentId`, `maDanhMuc`, `stt`, `tenCauHoi`, `diemNhoNhat`, `buocNhay`, `diemLonNhat`, `loaiCauHoi`, `loaiDieuKien`, `danhDauCau`, `kieuNhapLieu`, `sapXep`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1092, 0, 5, '1', 'Thực hiện tốt các nhiệm vụ kinh tế - xã hội, quốc phòng, an ninh, trật tự, an toàn xã hội được giao', 0, 0, 20, 1, 'AND', 0, NULL, 1, 1, '2024-08-21 07:31:23', '2024-08-21 07:32:53');
REPLACE INTO `khaosat_cauhoi` (`id`, `parentId`, `maDanhMuc`, `stt`, `tenCauHoi`, `diemNhoNhat`, `buocNhay`, `diemLonNhat`, `loaiCauHoi`, `loaiDieuKien`, `danhDauCau`, `kieuNhapLieu`, `sapXep`, `trangThai`, `created_at`, `updated_at`) VALUES
	(1093, 1092, 5, '1.1', 'Bảo đảm trật tự, an toàn xã hội, đấu tranh, phòng, chống tội phạm và các hành vi vi phạm pháp luật khác', 0, 0, 7, 1, 'OR', 1, NULL, 1, 1, '2024-08-21 07:32:23', '2024-08-21 07:49:19'),
	(1094, 1093, 5, NULL, 'Xã, phường , thị trấn đạt tiêu chuẩn “An toàn về an ninh trật tự” theo Hướng dẫn số 03- HD/BCDD138 ngày 02/6/2022  Của  Ban Chỉ đạo 138/ĐP Tỉnh', 0, 0, 7, 1, 'AND', 2, 'Text', 1, 1, '2024-08-21 07:37:59', '2024-08-21 07:50:06'),
	(1095, 1093, 5, NULL, 'Không đạt', 0, 0, 0, 1, 'OR', 2, 'Radio', 1, 1, '2024-08-21 07:38:00', '2024-08-21 07:47:03'),
	(1096, 1092, 5, '1.2', 'Hợp tác và liên kết phát triển kinh tế xã hội', 0, 0, 7, 1, 'OR', 1, NULL, 1, 1, '2024-08-21 07:51:48', '2024-08-21 07:51:48');

-- Dumping data for table cscc_sadec_db.khaosat_cauhoi_thamdinh: ~299 rows (approximately)
REPLACE INTO `khaosat_cauhoi_thamdinh` (`id`, `maDanhMuc`, `maCauHoi`, `maDonVi`, `created_at`, `updated_at`) VALUES
	(1609, '5', 1093, 6, '2024-08-21 09:06:21', '2024-08-21 09:06:21');
REPLACE INTO `khaosat_cauhoi_thamdinh` (`id`, `maDanhMuc`, `maCauHoi`, `maDonVi`, `created_at`, `updated_at`) VALUES
	(1610, '5', 1096, 10, '2024-08-21 09:06:21', '2024-08-21 09:06:21');

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc: ~4 rows (approximately)
REPLACE INTO `khaosat_danhmuc` (`id`, `tenDanhMuc`, `namApDung`, `noiDung`, `trangThai`, `created_at`, `updated_at`) VALUES
	(5, 'TIÊU CHUẨN DANH HIỆU XÃ, PHƯỜNG, THỊ TRẤN TIÊU BIỂU', 2024, 'Kèm theo Quyết định /2024/QĐ-UBND ngày tháng năm 2024 của Ủy ban nhân dân tỉnh Đồng Tháp', 1, '2024-08-21 07:29:29', '2024-08-21 07:29:29');
REPLACE INTO `khaosat_danhmuc` (`id`, `tenDanhMuc`, `namApDung`, `noiDung`, `trangThai`, `created_at`, `updated_at`) VALUES
	(6, 'TIÊU CHUẨN DANH HIỆU KHÓM, ẤP VĂN HÓA', 2024, 'Kèm theo Quyết định /2024/QĐ-UBND ngày tháng năm 2024 của Ủy ban nhân dân tỉnh Đồng Tháp', 1, '2024-08-21 07:30:03', '2024-08-21 07:30:03');

-- Dumping data for table cscc_sadec_db.khaosat_danhmuc_donvi: ~42 rows (approximately)
REPLACE INTO `khaosat_danhmuc_donvi` (`id`, `maDanhMuc`, `maDonVi`) VALUES
	(215, 5, 14);
REPLACE INTO `khaosat_danhmuc_donvi` (`id`, `maDanhMuc`, `maDonVi`) VALUES


-- Dumping data for table cscc_sadec_db.khaosat_diemtonghop: ~26 rows (approximately)
REPLACE INTO `khaosat_diemtonghop` (`id`, `diem`, `namApDung`, `maDanhMuc`, `maDonVi`, `maNguoiTongHop`, `created_at`, `updated_at`) VALUES
	(2, 92, 2022, 1, 3, 45, '2023-04-13 01:29:35', '2023-04-13 01:29:35');
REPLACE INTO `khaosat_diemtonghop` (`id`, `diem`, `namApDung`, `maDanhMuc`, `maDonVi`, `maNguoiTongHop`, `created_at`, `updated_at`) VALUES
	

-- Dumping data for table cscc_sadec_db.khaosat_thoigian: ~2 rows (approximately)
REPLACE INTO `khaosat_thoigian` (`id`, `tenThoiGian`, `batDau`, `ketThuc`, `created_at`, `updated_at`) VALUES
	(1, 'Thời gian tự đánh giá', '2024-06-30 17:00:00', '2024-11-30 17:00:00', '2022-04-20 15:47:01', '2024-08-21 07:48:25');
REPLACE INTO `khaosat_thoigian` (`id`, `tenThoiGian`, `batDau`, `ketThuc`, `created_at`, `updated_at`) VALUES
	(2, 'Thời gian thẩm định', '2024-07-31 17:00:00', '2024-12-30 17:00:00', '2022-04-20 15:47:42', '2024-08-21 07:48:25');

-- Dumping data for table cscc_sadec_db.khaosat_ykien: ~613 rows (approximately)
REPLACE INTO `khaosat_ykien` (`id`, `maDanhMuc`, `maCauHoi`, `noiDung`, `maDonVi`, `maNguoiYKien`, `created_at`, `updated_at`) VALUES
	(4, 1, 318, 'Báo cáo kết quả thực hiện 02 mô hình CCHC được UBND TP phê duyệt lồng ghép với báo cáo CCHC năm 2022 (mục 7, phần II) và BC kết quả thực hiện sáng kiến CCHC theo CV số 969/NV ngày 24/10/2022 của Phòng Nội vụ (ND này chưa có điểm)', 4, 4, '2023-03-30 01:43:46', '2023-04-02 18:37:33');
REPLACE INTO `khaosat_ykien` (`id`, `maDanhMuc`, `maCauHoi`, `noiDung`, `maDonVi`, `maNguoiYKien`, `created_at`, `updated_at`) VALUES


-- Dumping data for table cscc_sadec_db.model_has_permissions: ~0 rows (approximately)

-- Dumping data for table cscc_sadec_db.model_has_roles: ~36 rows (approximately)
REPLACE INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
	(5, 'Modules\\Users\\Entities\\User', 1);
REPLACE INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
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
	(6, 'Modules\\Users\\Entities\\User', 46),
	(7, 'Modules\\Users\\Entities\\User', 46),
	(8, 'Modules\\Users\\Entities\\User', 46),
	(7, 'Modules\\Users\\Entities\\User', 47),
	(8, 'Modules\\Users\\Entities\\User', 48),
	(6, 'Modules\\Users\\Entities\\User', 49),
	(7, 'Modules\\Users\\Entities\\User', 50);

-- Dumping data for table cscc_sadec_db.modules: ~4 rows (approximately)
REPLACE INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Phân Quyền', '2022-04-08 11:40:21', NULL);
REPLACE INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(2, 'Đơn vị hành chính', '2022-04-08 11:40:35', NULL),
	(3, 'Người dùng', '2022-04-08 11:40:35', NULL),
	(4, 'Cải cách hành chính', '2022-04-08 11:40:35', NULL);

-- Dumping data for table cscc_sadec_db.permissions: ~18 rows (approximately)
REPLACE INTO `permissions` (`id`, `name`, `display_name`, `guard_name`, `module_id`, `created_at`, `updated_at`) VALUES
	(1, 'role-list', 'Danh sách', 'api', 1, '2022-04-08 11:41:07', NULL);
REPLACE INTO `permissions` (`id`, `name`, `display_name`, `guard_name`, `module_id`, `created_at`, `updated_at`) VALUES
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
	(5, 'admin', 'api', '2022-04-16 18:56:27', '2022-04-16 18:56:27');
REPLACE INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
	(6, 'Tự đánh giá', 'api', '2022-04-30 21:23:35', '2022-05-03 20:10:50'),
	(7, 'Thẩm định', 'api', '2022-04-30 21:24:19', '2022-05-03 20:11:12'),
	(8, 'Xác nhận', 'api', '2022-04-30 21:24:32', '2022-05-03 20:50:53');

-- Dumping data for table cscc_sadec_db.role_has_permissions: ~18 rows (approximately)
REPLACE INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
	(1, 5);
REPLACE INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
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
	(1, 0, 'Dashboard', 'mdi-monitor-dashboard', '/auth/dashboard', 1, 1, '2022-04-16 16:42:08', NULL);
REPLACE INTO `sidebars` (`id`, `parentId`, `name`, `icon`, `url`, `order`, `status`, `created_at`, `updated_at`) VALUES
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
	(5, 2);
REPLACE INTO `sidebar_has_permissions` (`permissionId`, `sidebarId`) VALUES
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

-- Dumping data for table cscc_sadec_db.users: ~28 rows (approximately)
REPLACE INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', '0e7517141fb53f21ee439b355b5a1d0a', 'Administrators', NULL, NULL, NULL, 0, 0, 0, 1, 1, NULL, NULL, '2024-08-21 06:10:42');
REPLACE INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `createdAt`, `updatedAt`) VALUES
	(46, 'phuong1', '0e7517141fb53f21ee439b355b5a1d0a', 'UBND Phường 1', NULL, NULL, NULL, 0, 0, 0, 14, 1, NULL, '2024-08-21 05:45:21', '2024-08-21 06:21:48'),
	(47, 'noivu_td', 'e6e061838856bf47e1de730719fb2609', 'Phòng nội vụ', NULL, NULL, NULL, 0, 0, 0, 3, 1, NULL, '2024-08-21 05:46:23', '2024-08-21 05:46:23'),
	(48, 'noivu_xn', 'e6e061838856bf47e1de730719fb2609', 'Lê văn A', NULL, NULL, NULL, 0, 0, 0, 3, 1, NULL, '2024-08-21 05:46:49', '2024-08-21 05:46:49'),
	(49, 'phuong1_khom1', 'e6e061838856bf47e1de730719fb2609', 'Hồ Lê Thanh K', NULL, NULL, NULL, 0, 0, 0, 24, 1, NULL, '2024-08-21 05:50:16', '2024-08-21 05:50:16'),
	(50, 'congan', '0e7517141fb53f21ee439b355b5a1d0a', 'Công an thành phố', NULL, NULL, NULL, 0, 0, 0, 27, 1, NULL, '2024-08-21 07:54:55', '2024-08-21 07:54:55');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
