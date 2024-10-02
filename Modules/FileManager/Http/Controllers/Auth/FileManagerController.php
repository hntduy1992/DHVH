<?php

namespace Modules\FileManager\Http\Controllers\Auth;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Modules\KhaoSat\Entities\CauHoi;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use PhpOffice\PhpWord\Element\Table;
use PhpOffice\PhpWord\Exception\CopyFileException;
use PhpOffice\PhpWord\Exception\CreateTemporaryFileException;
use PhpOffice\PhpWord\Shared\Converter;
use PhpOffice\PhpWord\SimpleType\Jc;
use PhpOffice\PhpWord\SimpleType\TblWidth;
use PhpOffice\PhpWord\TemplateProcessor;


class FileManagerController extends Controller
{
    public function singleUpload(Request $request): JsonResponse
    {
        $danhMucFolder = 'DanhMuc_' . $request->get('maDanhMuc');
        $donViFolder = 'DonVi_' . auth('api')->user()->organizationId;
        $cauHoiFolder = 'CauHoi_' . $request->get('maCauHoi');
        $namApDung = $request->get('namApDung');

        $path = "MinhChung" . DIRECTORY_SEPARATOR . $danhMucFolder . DIRECTORY_SEPARATOR . $namApDung . DIRECTORY_SEPARATOR . $donViFolder . DIRECTORY_SEPARATOR . $cauHoiFolder;
        if (!Storage::exists('public' . DIRECTORY_SEPARATOR . $path)) {
            Storage::makeDirectory($path);
        }
        $fileName = 'MC_' . Str::random(5) . '.' . $request->file('file')->getClientOriginalExtension();
        $file = Storage::disk('public')
            ->putFileAs($path, $request->file('file'), $fileName);
        return response()->json(['fileUrl' => $file, 'fileName' => $fileName, 'success' => true]);
    }

    public function singleUploadTongHop(Request $request): JsonResponse
    {
        $donViName = 'DonVi_' . auth('api')->user()->organizationId;
        $namApDung = $request->get('namApDung');

        $path = "TongHop" . DIRECTORY_SEPARATOR . $namApDung;
        if (!Storage::exists('public' . DIRECTORY_SEPARATOR . $path)) {
            Storage::makeDirectory($path);
        }
        //TH_DonVi_02.pdf
        $fileName = 'TH_' . $donViName . '.' . $request->file('file')->getClientOriginalExtension();
        $file = Storage::disk('public')
            ->putFileAs($path, $request->file('file'), $fileName);
        return response()->json(['fileUrl' => $file, 'fileName' => $fileName, 'success' => true]);
    }

    public function singleRemove(Request $request)
    {
        $file = $request->get('fileUrl');
        $file = Str::replace('\\', '/', $file);
        if (Storage::disk('public')->exists($file)) {
            Storage::disk('public')->delete($file);
            return response()->json(['message' => 'Xóa thành công file!', 'success' => true]);
        }
        return response()->json(['message' => "Không tìm thấy file ", 'path' => $file, 'success' => false]);
    }
//    public function singleUpload(Request $request): JsonResponse
//    {
//        $year = Carbon::now()->year;
//        $file = Storage::disk('public')
//            ->putFileAs('files/'.$year.'/organizations-' . auth('api')->user()->organizationId, $request->file('file'), $request->file('file')->getClientOriginalName());
//        return response()->json(['fileUrl' => $file, 'success' => true]);
//    }

    /**
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportToWord(Request $request): JsonResponse
    {
        $year = Carbon::now()->year;

        $url = Storage::disk('public')->path("$year/BienBanTuDanhGia.docx");

        $templateProcessor = new TemplateProcessor($url);

        $organ = DonViHanhChinh::where('id', $request->get('donVi', auth('api')->user()->organizationId))->first();

        $templateProcessor->setValue('TenDonVi', $organ->tenDonVi);

        $cellRowSpan = array('vMerge' => 'restart', 'valign' => 'center');
        $cellRowContinue = array('vMerge' => 'continue');
        $cellColSpan = array('gridSpan' => 2, 'valign' => 'center');
        $cellHCentered = array(
            'alignment' => Jc::CENTER,
            'spaceBefore' => 0,
            'spaceAfter' => 0,
            'spacing' => 15,
        );

        $cellVCentered = array('valign' => 'center');
        $styleFont = ['name' => 'Times New Roman', 'size' => 12];
        $table = new Table(['borderSize' => 0, 'borderColor' => 'black', 'unit' => TblWidth::AUTO]);

        $table->addRow();
        $table->addCell(150, $cellRowSpan)->addText('STT', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(150, $cellRowSpan)->addText('Tên tiêu chi', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(150, $cellRowSpan)->addText('Điểm tối đa', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(150, $cellRowSpan)->addText('Điểm tự đánh giá', array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $cauHoi = CauHoi::where(['maDanhMuc' => $request->get('danhMuc', 0), 'trangThai' => 1])
            ->orderBy('sapXep')
            ->orderBy('id')->get();
        $questions = collect();

        $bangTongHop = collect($request->get('cauHoi', []));
        $bangDiem = collect($request->get('bangDiem', []));


        foreach ($cauHoi->where('parentId', 0) as $item) {
            $row = $bangTongHop->where('maCauHoi', $item->id)->first();
            $item->diemDanhGia = $row['diem'];
            $questions->push($item);
            $this->children($questions, $cauHoi, $item, $bangTongHop, $bangDiem);
        }

        $tongDiem = 0;
        $tongDiemDanhGia = 0;
        $tongDiemThamDinh = 0;

        foreach ($questions as $question) {
            $table->addRow();
            $table->addCell(null, $cellVCentered)->addText($question->stt, array_merge($styleFont, ['bold' => $question->parentId == 0]), array_merge($cellHCentered, ['alignment' => Jc::LEFT]));
            $table->addCell(null)
                ->addText($question->tenCauHoi, array_merge(
                    $styleFont, ['bold' => $question->parentId == 0, 'italic' => $question->danhDauCau == 2, 'size' => $question->danhDauCau == 2 ? 11 : 12]
                ), array_merge($cellHCentered, ['alignment' => Jc::BOTH,]));
            $table->addCell(null, $cellVCentered)->addText(($question->danhDauCau !== 2 && $question->danhDauCau !== 3) ? $question->diemLonNhat : null, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);
            $table->addCell(null, $cellVCentered)->addText($question->diemDanhGia, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);

            if ($question->parentId == 0) {
                $tongDiem = $tongDiem + $question->diemLonNhat;
                $tongDiemDanhGia = $tongDiemDanhGia + $question->diemDanhGia;
            }

        }

        $table->addRow();
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellVCentered)->addText('Tổng điểm', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(null, $cellVCentered)->addText($tongDiem, array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText($tongDiemDanhGia, array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $templateProcessor->setComplexBlock('{table}', $table);
        $char = Str::random(10);
        $name = Str::slug($organ->tenDonVi);

        $templateProcessor->setValue('tongDiem', $tongDiem);
        $templateProcessor->setValue('tongDiemDanhGia', $tongDiemDanhGia);

        if (!Storage::exists("/public/TuDanhGia/{$year}")) {
            Storage::makeDirectory("/public/TuDanhGia/{$year}");
        }
        $fileName = "./storage/TuDanhGia/{$year}/{$name}.docx";

        $templateProcessor->saveAs($fileName);

        return response()->json(['file' => "{$year}/{$name}.docx"]);

    }

    /**
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportToWordBienBan(Request $request): JsonResponse
    {
        $year = Carbon::now()->year;

        $url = Storage::disk('public')->path("$year/BienBanTuDanhGia.docx");

        $templateProcessor = new TemplateProcessor($url);

        $organ = DonViHanhChinh::where('id', $request->get('donVi', auth('api')->user()->organizationId))->first();

        $templateProcessor->setValue('TenDonVi', $organ->tenDonVi);

        $cellRowSpan = array('vMerge' => 'restart', 'valign' => 'center');
        $cellRowContinue = array('vMerge' => 'continue');
        $cellColSpan = array('gridSpan' => 2, 'valign' => 'center');
        $cellHCentered = array(
            'alignment' => Jc::CENTER,
            'spaceBefore' => 0,
            'spaceAfter' => 0,
            'spacing' => 15,
        );

        $cellVCentered = array('valign' => 'center');
        $styleFont = ['name' => 'Times New Roman', 'size' => 12];
        $table = new Table(['borderSize' => 0, 'borderColor' => 'black', 'unit' => TblWidth::AUTO]);

        $table->addRow();
        $table->addCell(150, $cellRowSpan)->addText('STT', array_merge($styleFont, ['bold' => true]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
        $table->addCell(150, $cellRowSpan)->addText('Tên tiêu chi', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(150, $cellRowSpan)->addText('Điểm tối đa', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(5.32), $cellColSpan)->addText('Điểm đánh giá', array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $table->addRow();
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellRowContinue);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText('Điểm tự đánh giá', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText('Điểm thẩm định', array_merge($styleFont, ['bold' => true]), $cellHCentered);


        $cauHoi = CauHoi::where(['maDanhMuc' => $request->get('danhMuc', 0), 'trangThai' => 1])
            ->orderBy('sapXep')
            ->orderBy('id')->get();
        $questions = collect();

        $bangTongHop = collect($request->get('cauHoi', []));
        $bangDiem = collect($request->get('bangDiem', []));


        foreach ($cauHoi->where('parentId', 0) as $item) {
            $row = $bangTongHop->where('maCauHoi', $item->id)->first();
            $item->diemDanhGia = $row['diem'];
            $item->diemThamDinh = $row['diemThamDinh'];
            $questions->push($item);
            $this->children($questions, $cauHoi, $item, $bangTongHop, $bangDiem);
        }

        $tongDiem = 0;
        $tongDiemDanhGia = 0;
        $tongDiemThamDinh = 0;

        foreach ($questions as $question) {
            $table->addRow();
            $table->addCell(null, $cellVCentered)->addText($question->stt, array_merge($styleFont, ['bold' => $question->parentId == 0]), array_merge($cellHCentered, ['alignment' => Jc::LEFT]));
            $table->addCell(null)
                ->addText($question->tenCauHoi, array_merge(
                    $styleFont, ['bold' => $question->parentId == 0, 'italic' => $question->danhDauCau == 2, 'size' => $question->danhDauCau == 2 ? 11 : 12]
                ), array_merge($cellHCentered, ['alignment' => Jc::BOTH,]));
            $table->addCell(null, $cellVCentered)->addText(($question->danhDauCau !== 2 && $question->danhDauCau !== 3) ? $question->diemLonNhat : null, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);
            $table->addCell(null, $cellVCentered)->addText($question->diemDanhGia, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);
            $table->addCell(null, $cellVCentered)->addText($question->diemThamDinh, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);

            if ($question->parentId == 0) {
                $tongDiem = $tongDiem + $question->diemLonNhat;
                $tongDiemDanhGia = $tongDiemDanhGia + $question->diemDanhGia;
                $tongDiemThamDinh = $tongDiemThamDinh + $question->diemThamDinh;
            }

        }

        $table->addRow();
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellVCentered)->addText('Tổng điểm', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(null, $cellVCentered)->addText($tongDiem, array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText($tongDiemDanhGia, array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText($tongDiemThamDinh, array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $templateProcessor->setComplexBlock('{table}', $table);
        $char = Str::random(10);
        $name = Str::slug($organ->tenDonVi);

        $templateProcessor->setValue('tongDiem', $tongDiem);
        $templateProcessor->setValue('tongDiemDanhGia', $tongDiemDanhGia);
        $templateProcessor->setValue('tongDiemThamDinh', $tongDiemThamDinh);

        if (!Storage::exists("/public/BienBan/{$year}")) {
            Storage::makeDirectory("/public/BienBan/{$year}");
        }
        $fileName = "./storage/BienBan/{$year}/{$name}.docx";

        $templateProcessor->saveAs($fileName);

        return response()->json(['file' => "{$year}/{$name}.docx"]);

    }

    /**
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportToWordXacNhan(Request $request): JsonResponse
    {
        $year = Carbon::now()->year;

        $url = Storage::disk('public')->path("$year/BienBanTuDanhGia.docx");

        $templateProcessor = new TemplateProcessor($url);

        $organ = DonViHanhChinh::where('id', '=', $request->get('maDonVi'))->first();
        $templateProcessor->setValue('TenDonVi', $organ->tenDonVi);

        $cellRowSpan = array('vMerge' => 'restart', 'valign' => 'center');
        $cellRowContinue = array('vMerge' => 'continue');
        $cellColSpan = array('gridSpan' => 2, 'valign' => 'center');
        $cellHCentered = array(
            'alignment' => Jc::CENTER,
            'spaceBefore' => 0,
            'spaceAfter' => 0,
            'spacing' => 15,
        );

        $cellVCentered = array('valign' => 'center');
        $styleFont = ['name' => 'Times New Roman', 'size' => 12];
        $table = new Table(['borderSize' => 0, 'borderColor' => 'black', 'unit' => TblWidth::AUTO]);

        $table->addRow();
        $table->addCell(150, $cellRowSpan)->addText('STT', array_merge($styleFont, ['bold' => true]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
        $table->addCell(150, $cellRowSpan)->addText('Tên tiêu chi', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(150, $cellRowSpan)->addText('Điểm tối đa', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(5.32), $cellColSpan)->addText('Điểm đánh giá', array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $table->addRow();
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellRowContinue);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText('Điểm tự đánh giá', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText('Điểm thẩm định', array_merge($styleFont, ['bold' => true]), $cellHCentered);


        $cauHoi = CauHoi::where(['maDanhMuc' => $request->get('danhMuc', 0), 'trangThai' => 1])
            ->orderBy('sapXep')
            ->orderBy('id')->get();
        $questions = collect();

        $bangTongHop = collect($request->get('cauHoi', []));
        $bangDiem = collect($request->get('bangDiem', []));


        foreach ($cauHoi->where('parentId', 0) as $item) {
            $row = $bangTongHop->where('maCauHoi', $item->id)->first();
            $item->diemDanhGia = $row['diem'];
            $item->diemThamDinh = $row['diemThamDinh'];
            $questions->push($item);
            $this->children($questions, $cauHoi, $item, $bangTongHop, $bangDiem);
        }

        $tongDiem = 0;
        $tongDiemDanhGia = 0;
        $tongDiemThamDinh = 0;

        foreach ($questions as $question) {
            $table->addRow();
            $table->addCell(null, $cellVCentered)->addText($question->stt, array_merge($styleFont, ['bold' => $question->parentId == 0]), array_merge($cellHCentered, ['alignment' => Jc::LEFT]));
            $table->addCell(null)
                ->addText($question->tenCauHoi, array_merge(
                    $styleFont, ['bold' => $question->parentId == 0, 'italic' => $question->danhDauCau == 2, 'size' => $question->danhDauCau == 2 ? 11 : 12]
                ), array_merge($cellHCentered, ['alignment' => Jc::BOTH,]));
            $table->addCell(null, $cellVCentered)->addText(($question->danhDauCau !== 2 && $question->danhDauCau !== 3) ? $question->diemLonNhat : null, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);
            $table->addCell(null, $cellVCentered)->addText($question->diemDanhGia, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);
            $table->addCell(null, $cellVCentered)->addText($question->diemThamDinh, array_merge($styleFont, ['bold' => $question->parentId == 0]), $cellHCentered);

            if ($question->parentId == 0) {
                $tongDiem = $tongDiem + $question->diemLonNhat;
                $tongDiemDanhGia = $tongDiemDanhGia + $question->diemDanhGia;
                $tongDiemThamDinh = $tongDiemThamDinh + $question->diemThamDinh;
            }

        }

        $table->addRow();
        $table->addCell(null, $cellRowContinue);
        $table->addCell(null, $cellVCentered)->addText('Tổng điểm', array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(null, $cellVCentered)->addText($tongDiem, array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText($tongDiemDanhGia, array_merge($styleFont, ['bold' => true]), $cellHCentered);
        $table->addCell(Converter::cmToTwip(2.66), $cellVCentered)->addText($tongDiemThamDinh, array_merge($styleFont, ['bold' => true]), $cellHCentered);

        $templateProcessor->setComplexBlock('{table}', $table);
        $char = Str::random(10);

//

        $name = Str::slug($organ->tenDonVi);

        $templateProcessor->setValue('tongDiem', $tongDiem);
        $templateProcessor->setValue('tongDiemDanhGia', $tongDiemDanhGia);
        $templateProcessor->setValue('tongDiemThamDinh', $tongDiemThamDinh);


        if (!Storage::exists("/public/XacNhan/{$year}")) {
            Storage::makeDirectory("/public/XacNhan/{$year}");
        }
        $fileName = "./storage/XacNhan/{$year}/{$name}.docx";

        $templateProcessor->saveAs($fileName);

        return response()->json(['file' => "{$year}/{$name}.docx"]);

    }

    private function children(&$questions, $items, $target, $bangTongHop, $bangDiem)
    {
        $results = $items->where('parentId', $target->id);
        if (!empty($results) && count($results) > 0) {
            foreach ($results as $item) {
                $row = $bangTongHop->where('maCauHoi', $item->id)->first();
                $item->diemDanhGia = $item->danhDauCau != 2 ? $row['diem'] : null;
                $item->diemThamDinh = $row['diemThamDinh'] > 0 ? $row['diemThamDinh'] : null;
                // $item->diemThamDinh = null; // Bỏ điểm
                if ($item->danhDauCau == 2) {
                    $f = $bangDiem->where('maCauHoi', $item->parentId)->first();
                    if (!empty($f['noiDungTraLoi'])) {
                        foreach ($f['noiDungTraLoi'] as $q) {
                            if ($q['id'] == $item->id) {
                                $item->diemDanhGia = $q['diem'];
                            }
                        }
                    }

                    if (!empty($f['noiDungThamDinh'])) {
                        foreach ($f['noiDungThamDinh'] as $q) {
                            if ($q['id'] == $item->id) {
                                $item->diemThamDinh = $q['diem'];
                            }
                        }
                    }
                }

                $questions->push($item);
                $this->children($questions, $items, $item, $bangTongHop, $bangDiem);
            }
        }
        return;
    }


    public function exportToWordTongHop(Request $request)
    {
        $year = Carbon::now()->year;
        $url = Storage::disk('public')->path("$year/BienBanTongHop.docx");

        $templateProcessor = new TemplateProcessor($url);

        $organizations = DonViHanhChinh::with(['diemtong' => function (Builder $q) use ($request) {
            $q->where('maDanhMuc', $request->get('danhMuc', -1))
                ->where('namApDung', $request->get('namApDung', -1));

        }])
            ->where('trangThai', 1)
            ->orderBy('sapXep')
            ->orderBy('tenDonVi')
            ->get();

        $donViKhaoSat = DanhMucDonVi::where('maDanhMuc', $request->get('danhMuc', -1))->get();

        $list = collect();

        if (count($organizations) > 0) {
            foreach ($organizations->where('parentId', 0) as $organization) {
                $this->loadChildren($list, $organizations, $organization, $donViKhaoSat->pluck('maDonVi'));
            }
        }

        if (count($list) > 0) {
            $list->each(function ($item) {
                $item->children = $item->children->sortBy([['diem', 'desc'], ['tenDonVi', 'asc']]);
            });


            $cellRowSpan = array('vMerge' => 'restart', 'valign' => 'center');
            $cellRowContinue = array('vMerge' => 'continue');
            $cellColSpan = array('gridSpan' => 2, 'valign' => 'center');
            $cellHCentered = array(
                'alignment' => Jc::CENTER,
                'spaceBefore' => 0,
                'spaceAfter' => 0,
                'spacing' => 15,
            );

            $cellVCentered = array('valign' => 'center');
            $styleFont = ['name' => 'Times New Roman', 'size' => 12];
            $table = new Table(['borderSize' => 0, 'borderColor' => 'black', 'unit' => TblWidth::AUTO]);

            $table->addRow();
            $table->addCell(150, $cellRowSpan)->addText('STT', array_merge($styleFont, ['bold' => true]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
            $table->addCell(450, $cellRowSpan)->addText('Tên đơn vị', array_merge($styleFont, ['bold' => true]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
            $table->addCell(100)->addText('Điểm', array_merge($styleFont, ['bold' => true]), $cellHCentered);


            $i = 1;
            foreach ($list as $row) {
                $table->addRow();
                $table->addCell(null, $cellVCentered)->addText($this->tunhien2Lama($i), array_merge($styleFont, ['bold' => true]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
                $table->addCell(null, $cellVCentered)
                    ->addText(mb_strtoupper($row->tenDonVi), array_merge(
                        $styleFont, ['bold' => true, 'size' => 12]
                    ), array_merge($cellHCentered, ['alignment' => Jc::LEFT,]));
                $table->addCell(null, $cellVCentered)->addText(null);

                if ($row->children->count() > 0) {
                    $n = 1;
                    foreach ($row->children as $item) {
                        $table->addRow();
                        $table->addCell(null, $cellVCentered)->addText($n, array_merge($styleFont, ['bold' => false]), array_merge($cellHCentered, ['alignment' => Jc::CENTER]));
                        $table->addCell(null, $cellVCentered)
                            ->addText($item->tenDonVi, array_merge(
                                $styleFont, ['bold' => false, 'size' => 12]
                            ), array_merge($cellHCentered, ['alignment' => Jc::LEFT,]));
                        $table->addCell(null, $cellVCentered)->addText($item->diem, array_merge(
                            $styleFont, ['bold' => false, 'size' => 12]
                        ), array_merge($cellHCentered, ['alignment' => Jc::CENTER,]));

                        $n++;
                    }
                }

                $i++;
            }

            $templateProcessor->setComplexBlock('{table}', $table);
            $char = $request->get('namApDung', -1) . '_' . Str::random(10);
            $templateProcessor->saveAs("./storage/files/TongHop/$year/TongHop-{$char}.docx");

            return response()->json(['file' => "$year/TongHop-{$char}.docx"]);
        }


        return response()->json(['file' => $list]);
    }

    private function loadChildren(Collection &$list, $items, $target, $donViKhaoSat)
    {
        $results = $items->where('parentId', $target->id);
        $intersect = array_intersect($results->pluck('id')->toArray(), $donViKhaoSat->toArray());
        if (!empty($results) && count($results) > 0 && count($intersect) > 0) {
            $target->children = collect();
            foreach ($results as $item) {
                if (in_array($item->id, $donViKhaoSat->toArray())) {
                    $item->diem = $item->diemtong?->diem ?? 0;
                    $item->makeHidden('diemtong');
                    $target->children->push($item);
                }
            }
            $list->push($target);
        }
        return;
    }

    private function tunhien2Lama($number)
    {
        return match ($number) {
            1 => 'I',
            2 => 'II',
            3 => 'III',
            4 => 'IV',
            5 => 'V',
            6 => 'VI',
            7 => 'VII',
            8 => 'VIII',
            9 => 'IX',
            10 => 'X',
            11 => 'XI',
            12 => 'XII',
            13 => 'XIII',
            14 => 'XIV',
            15 => 'XV',
            16 => 'XVI',
            17 => 'XVII',
            18 => 'XVIII',
            19 => 'XIX',
            20 => 'XX',
            21 => 'XXI',
            22 => 'XXII',
            23 => 'XXIII',
            24 => 'XXIV',
            25 => 'XXV',
            26 => 'XXVI',
            27 => 'XXVII',
            28 => 'XXVIII',
            29 => 'XXIX',
            30 => 'XXX',
            default => $number,
        };
    }

}
