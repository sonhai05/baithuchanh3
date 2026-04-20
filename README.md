# BÀI THỰC HÀNH 03 - KIỂM THỬ HỘP ĐEN

Repository này gồm 8 bài toán có chương trình và bộ test theo hướng kiểm thử hộp đen:

1. Tính chu vi hình chữ nhật
2. Tính diện tích hình chữ nhật
3. Giải phương trình bậc 2
4. Tính số ngày của một tháng
5. Kiểm tra n có là số nguyên tố hay không
6. Tính tổng S = 1 - 2 + 3 - 4 + ... + n
7. Tìm UCLN của a và b
8. Tính tổng S = 1! + 2! + 3! + ... + n!

## Cấu trúc

- `src/blackboxPractice.js`: Mã nguồn Node.js cho 8 bài toán
- `tests/blackboxPractice.test.js`: Test tự động bằng Node.js test runner
- `docs/blackbox_testcases.md`: Danh sách test case theo phân lớp tương đương, giá trị biên
- `docs/test_results.md`: Kết quả chạy test
- `docs/blackbox_method_summary.md`: Mô tả ngắn gọn cách áp dụng kiểm thử hộp đen
- `.github/ISSUE_TEMPLATE/`: Mẫu issue để tạo issue 1 và issue 2
- `docs/github_issue_commit_guide.md`: Hướng dẫn tạo issue và commit nhanh trên GitHub

## Cách chạy

```bash
npm test
```

## Yêu cầu GitHub

1. Tạo issue 1: Test case cho dữ liệu hợp lệ
2. Tạo issue 2: Test case cho dữ liệu không hợp lệ, biên, ngoại lệ
3. Giải quyết từng issue và tạo commit tương ứng

Đã chuẩn bị file hướng dẫn trong `docs/github_issue_commit_guide.md` để copy lên GitHub nhanh.

## Lưu ý

Repository hiện tại chỉ sử dụng hướng Node.js và test tự động để phù hợp yêu cầu nộp bài.
