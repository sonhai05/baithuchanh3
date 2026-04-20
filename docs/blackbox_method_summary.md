# TÓM TẮT PHƯƠNG PHÁP KIỂM THỬ HỘP ĐEN

## Mục tiêu

Kiểm tra 8 chức năng độc lập bằng kiểm thử hộp đen, không phụ thuộc vào chi tiết cài đặt bên trong.

## Kỹ thuật áp dụng

- Phân lớp tương đương:
  - Xây dựng các lớp dữ liệu hợp lệ và không hợp lệ cho từng chức năng.
  - Chọn dữ liệu đại diện cho mỗi lớp.
- Phân tích giá trị biên:
  - Tập trung vào các cận dưới/cận trên (ví dụ: tháng 0/1/12/13, n 0/1/20/21).
- Kiểm thử ngoại lệ:
  - Xác nhận hành vi khi nhập sai kiểu dữ liệu hoặc giá trị nằm ngoài miền chấp nhận.

## Kết quả chất lượng mong đợi

- Trả đúng kết quả cho toàn bộ lớp hợp lệ.
- Xử lý ổn định và trả lỗi rõ ràng cho lớp không hợp lệ/ngoại lệ.
- Bao phủ đầy đủ yêu cầu của cả 8 bài toán trong đề.
