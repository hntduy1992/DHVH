-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th8 20, 2024 lúc 09:38 AM
-- Phiên bản máy phục vụ: 10.4.34-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cscc_sadec_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `activity_log`
--

CREATE TABLE `activity_log` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `log_name` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `subject_type` varchar(255) DEFAULT NULL,
  `event` varchar(255) DEFAULT NULL,
  `subject_id` bigint(20) UNSIGNED DEFAULT NULL,
  `causer_type` varchar(255) DEFAULT NULL,
  `causer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `batch_uuid` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donvihanhchinh`
--

CREATE TABLE `donvihanhchinh` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parentId` bigint(20) NOT NULL DEFAULT 0,
  `tenDonVi` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dienThoai` varchar(255) DEFAULT NULL,
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `sapXep` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `donvihanhchinh`
--

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
(22, 1, 'UBND xã Tân Quy Tây', NULL, NULL, NULL, 1, NULL, '2022-04-30 21:08:35', '2022-04-30 21:08:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khaosat_bangdiem`
--

CREATE TABLE `khaosat_bangdiem` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `diem` float DEFAULT NULL,
  `diemThamDinh` float DEFAULT 0,
  `maCauHoi` bigint(20) DEFAULT NULL,
  `maDanhMuc` bigint(20) DEFAULT NULL,
  `noiDungTraLoi` varchar(255) DEFAULT NULL,
  `maDonViDanhGia` bigint(20) DEFAULT NULL,
  `maNguoiDanhGia` bigint(20) DEFAULT NULL,
  `fileDanhGia` varchar(255) DEFAULT NULL,
  `ghiChuDanhGia` text DEFAULT NULL,
  `maDonViThamDinh` bigint(20) DEFAULT NULL,
  `maNguoiThamDinh` bigint(20) DEFAULT NULL,
  `noiDungThamDinh` varchar(255) DEFAULT NULL,
  `ghiChuThamDinh` text DEFAULT NULL,
  `parentId` bigint(20) DEFAULT 0 COMMENT 'Mã câu hỏi cấp trên',
  `trangThai` tinyint(4) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_bienban`
--

CREATE TABLE `khaosat_bienban` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maDanhMuc` bigint(20) NOT NULL DEFAULT 0,
  `maDonVi` bigint(20) NOT NULL DEFAULT 0,
  `fileName` varchar(255) DEFAULT NULL COMMENT 'File biên bản',
  `maNguoiGuiDiem` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khaosat_cauhoi`
--

CREATE TABLE `khaosat_cauhoi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parentId` bigint(20) DEFAULT 0,
  `maDanhMuc` bigint(20) DEFAULT 0,
  `stt` varchar(255) DEFAULT NULL,
  `tenCauHoi` text DEFAULT NULL,
  `diemNhoNhat` float DEFAULT 0,
  `buocNhay` float DEFAULT 0,
  `diemLonNhat` float DEFAULT 0,
  `loaiCauHoi` tinyint(4) DEFAULT 1 COMMENT '1: Đánh giá, 2: Điều tra XHH',
  `loaiDieuKien` varchar(255) DEFAULT 'AND' COMMENT 'AND, OR, MATH',
  `danhDauCau` tinyint(4) DEFAULT 0 COMMENT '1: là câu hỏi, 2: là câu trả lời, 0 là câu hỏi cấp trên, 3: câu đặc biệt',
  `kieuNhapLieu` varchar(255) DEFAULT NULL COMMENT 'Input, Select, Checkbox, Radio',
  `sapXep` int(11) DEFAULT 1,
  `trangThai` tinyint(4) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_cauhoi_thamdinh`
--

CREATE TABLE `khaosat_cauhoi_thamdinh` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maDanhMuc` varchar(255) DEFAULT NULL,
  `maCauHoi` bigint(20) DEFAULT NULL,
  `maDonVi` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_danhmuc`
--

CREATE TABLE `khaosat_danhmuc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenDanhMuc` varchar(255) DEFAULT NULL,
  `namApDung` int(11) DEFAULT NULL,
  `noiDung` text DEFAULT NULL,
  `trangThai` tinyint(4) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_danhmuc_donvi`
--

CREATE TABLE `khaosat_danhmuc_donvi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maDanhMuc` bigint(20) DEFAULT NULL,
  `maDonVi` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `khaosat_danhmuc_donvi`
--

--
-- Cấu trúc bảng cho bảng `khaosat_diemtonghop`
--

CREATE TABLE `khaosat_diemtonghop` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `diem` float DEFAULT NULL,
  `namApDung` int(11) DEFAULT NULL,
  `maDanhMuc` bigint(20) DEFAULT NULL,
  `maDonVi` bigint(20) DEFAULT NULL,
  `maNguoiTongHop` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_thoigian`
--

CREATE TABLE `khaosat_thoigian` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenThoiGian` varchar(255) DEFAULT NULL,
  `batDau` timestamp NULL DEFAULT NULL,
  `ketThuc` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `khaosat_ykien`
--

CREATE TABLE `khaosat_ykien` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maDanhMuc` bigint(20) DEFAULT NULL,
  `maCauHoi` bigint(20) DEFAULT NULL,
  `noiDung` text DEFAULT NULL,
  `maDonVi` bigint(20) DEFAULT NULL,
  `maNguoiYKien` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Cấu trúc bảng cho bảng `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `modules`
--

INSERT INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Phân Quyền', '2022-04-08 11:40:21', NULL),
(2, 'Đơn vị hành chính', '2022-04-08 11:40:35', NULL),
(3, 'Người dùng', '2022-04-08 11:40:35', NULL),
(4, 'Cải cách hành chính', '2022-04-08 11:40:35', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `module_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `permissions`
--

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(5, 'admin', 'api', '2022-04-16 18:56:27', '2022-04-16 18:56:27'),
(6, 'Tự đánh giá', 'api', '2022-04-30 21:23:35', '2022-05-03 20:10:50'),
(7, 'Thẩm định', 'api', '2022-04-30 21:24:19', '2022-05-03 20:11:12'),
(8, 'Xác nhận', 'api', '2022-04-30 21:24:32', '2022-05-03 20:50:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `role_has_permissions`
--

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sidebars`
--

CREATE TABLE `sidebars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parentId` bigint(20) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `sidebars`
--

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sidebar_has_permissions`
--

CREATE TABLE `sidebar_has_permissions` (
  `permissionId` bigint(20) NOT NULL DEFAULT 0,
  `sidebarId` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `sidebar_has_permissions`
--

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `provinceId` bigint(20) NOT NULL DEFAULT 0,
  `districtId` bigint(20) NOT NULL DEFAULT 0,
  `wardId` bigint(20) NOT NULL DEFAULT 0,
  `organizationId` bigint(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `userName`, `password`, `fullName`, `image`, `email`, `phone`, `provinceId`, `districtId`, `wardId`, `organizationId`, `status`, `remember_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '0e7517141fb53f21ee439b355b5a1d0a', 'Administrators', NULL, NULL, NULL, 0, 0, 0, 1, 1, NULL, NULL, '2022-12-21 00:31:04'),

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `subject` (`subject_type`,`subject_id`) USING BTREE,
  ADD KEY `causer` (`causer_type`,`causer_id`) USING BTREE,
  ADD KEY `activity_log_log_name_index` (`log_name`) USING BTREE;

--
-- Chỉ mục cho bảng `donvihanhchinh`
--
ALTER TABLE `donvihanhchinh`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_bangdiem`
--
ALTER TABLE `khaosat_bangdiem`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_bienban`
--
ALTER TABLE `khaosat_bienban`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_cauhoi`
--
ALTER TABLE `khaosat_cauhoi`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_cauhoi_thamdinh`
--
ALTER TABLE `khaosat_cauhoi_thamdinh`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_danhmuc`
--
ALTER TABLE `khaosat_danhmuc`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_danhmuc_donvi`
--
ALTER TABLE `khaosat_danhmuc_donvi`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_diemtonghop`
--
ALTER TABLE `khaosat_diemtonghop`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_thoigian`
--
ALTER TABLE `khaosat_thoigian`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `khaosat_ykien`
--
ALTER TABLE `khaosat_ykien`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`) USING BTREE,
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`) USING BTREE;

--
-- Chỉ mục cho bảng `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`) USING BTREE,
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`) USING BTREE;

--
-- Chỉ mục cho bảng `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`) USING BTREE;

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`) USING BTREE;

--
-- Chỉ mục cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`) USING BTREE,
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`) USING BTREE;

--
-- Chỉ mục cho bảng `sidebars`
--
ALTER TABLE `sidebars`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7199;

--
-- AUTO_INCREMENT cho bảng `donvihanhchinh`
--
ALTER TABLE `donvihanhchinh`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `khaosat_bangdiem`
--
ALTER TABLE `khaosat_bangdiem`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3314;

--
-- AUTO_INCREMENT cho bảng `khaosat_bienban`
--
ALTER TABLE `khaosat_bienban`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT cho bảng `khaosat_cauhoi`
--
ALTER TABLE `khaosat_cauhoi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1092;

--
-- AUTO_INCREMENT cho bảng `khaosat_cauhoi_thamdinh`
--
ALTER TABLE `khaosat_cauhoi_thamdinh`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1606;

--
-- AUTO_INCREMENT cho bảng `khaosat_danhmuc`
--
ALTER TABLE `khaosat_danhmuc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `khaosat_danhmuc_donvi`
--
ALTER TABLE `khaosat_danhmuc_donvi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=215;

--
-- AUTO_INCREMENT cho bảng `khaosat_diemtonghop`
--
ALTER TABLE `khaosat_diemtonghop`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `khaosat_thoigian`
--
ALTER TABLE `khaosat_thoigian`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `khaosat_ykien`
--
ALTER TABLE `khaosat_ykien`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=618;

--
-- AUTO_INCREMENT cho bảng `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `sidebars`
--
ALTER TABLE `sidebars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
