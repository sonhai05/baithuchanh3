# DANH SÁCH TEST CASE HỘP ĐEN - BÀI THỰC HÀNH 03

## Phạm vi

Tài liệu này liệt kê test case kiểm thử hộp đen cho 8 chức năng, áp dụng:
- Phân lớp tương đương
- Phân tích giá trị biên
- Dữ liệu không hợp lệ/ngoại lệ

## 1. Chu vi hình chữ nhật: P = 2(a + b)

### Lớp hợp lệ
| ID | Đầu vào (a, b) | Đầu ra mong đợi |
|---|---|---|
| B1-V1 | (5, 3) | 16 |
| B1-V2 | (0.5, 2.5) | 6 |
| B1-V3 | (100, 20) | 240 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B1-I1 | (0, 5) | Biên/không hợp lệ | Ném `RangeError` |
| B1-I2 | (-1, 2) | Không hợp lệ | Ném `RangeError` |
| B1-I3 | ("abc", 2) | Ngoại lệ định dạng | Ném `TypeError` |

## 2. Diện tích hình chữ nhật: S = a * b

### Lớp hợp lệ
| ID | Đầu vào (a, b) | Đầu ra mong đợi |
|---|---|---|
| B2-V1 | (5, 3) | 15 |
| B2-V2 | (0.2, 0.4) | 0.08 |
| B2-V3 | (100, 20) | 2000 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B2-I1 | (0, 2) | Biên/không hợp lệ | Ném `RangeError` |
| B2-I2 | (-3, 2) | Không hợp lệ | Ném `RangeError` |
| B2-I3 | (1.5, "x") | Ngoại lệ định dạng | Ném `TypeError` |

## 3. Phương trình bậc 2: ax^2 + bx + c = 0

### Lớp hợp lệ
| ID | Đầu vào (a, b, c) | Đầu ra mong đợi |
|---|---|---|
| B3-V1 | (1, -3, 2) | 2 nghiệm phân biệt x1=2, x2=1 |
| B3-V2 | (1, 2, 1) | Nghiệm kép x=-1 |
| B3-V3 | (1, 0, 1) | Vô nghiệm thực |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B3-I1 | (0, 2, -4) | Biên | Nghiệm bậc 1 x=2 |
| B3-I2 | (0, 0, 1) | Ngoại lệ logic | Vô nghiệm |
| B3-I3 | (0, 0, 0) | Ngoại lệ logic | Vô số nghiệm |
| B3-I4 | ("a", 2, 1) | Ngoại lệ định dạng | Ném `TypeError` |

## 4. Số ngày của một tháng

### Lớp hợp lệ
| ID | Đầu vào (tháng, năm) | Đầu ra mong đợi |
|---|---|---|
| B4-V1 | (1, 2025) | 31 |
| B4-V2 | (4, 2025) | 30 |
| B4-V3 | (2, 2024) | 29 |
| B4-V4 | (2, 2023) | 28 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B4-I1 | (0, 2024) | Biên/không hợp lệ | Ném `RangeError` |
| B4-I2 | (13, 2024) | Biên/không hợp lệ | Ném `RangeError` |
| B4-I3 | (2, 0) | Năm không hợp lệ | Ném `RangeError` |
| B4-I4 | ("2a", 2024) | Ngoại lệ định dạng | Ném `TypeError` |

## 5. Kiểm tra số nguyên tố

### Lớp hợp lệ
| ID | Đầu vào n | Đầu ra mong đợi |
|---|---|---|
| B5-V1 | 2 | true |
| B5-V2 | 17 | true |
| B5-V3 | 97 | true |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B5-I1 | 1 | Biên | false |
| B5-I2 | 0 | Không hợp lệ theo miền nguyên tố | false |
| B5-I3 | -7 | Không hợp lệ theo miền nguyên tố | false |
| B5-I4 | "abc" | Ngoại lệ định dạng | Ném `TypeError` |

## 6. Tổng luân phiên: S = 1 - 2 + ... + n

### Lớp hợp lệ
| ID | Đầu vào n | Đầu ra mong đợi |
|---|---|---|
| B6-V1 | 1 | 1 |
| B6-V2 | 4 | -2 |
| B6-V3 | 5 | 3 |
| B6-V4 | 10 | -5 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B6-I1 | 0 | Biên/không hợp lệ | Ném `RangeError` |
| B6-I2 | -5 | Không hợp lệ | Ném `RangeError` |
| B6-I3 | 3.5 | Ngoại lệ định dạng | Ném `TypeError` |

## 7. UCLN(a, b)

### Lớp hợp lệ
| ID | Đầu vào (a, b) | Đầu ra mong đợi |
|---|---|---|
| B7-V1 | (12, 18) | 6 |
| B7-V2 | (7, 13) | 1 |
| B7-V3 | (24, 60) | 12 |
| B7-V4 | (-24, 60) | 12 |
| B7-V5 | (0, 15) | 15 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B7-I1 | (0, 0) | Ngoại lệ toán học | Ném `RangeError` |
| B7-I2 | ("x", 5) | Ngoại lệ định dạng | Ném `TypeError` |

## 8. Tổng giai thừa: S = 1! + 2! + ... + n!

### Lớp hợp lệ
| ID | Đầu vào n | Đầu ra mong đợi |
|---|---|---|
| B8-V1 | 1 | 1 |
| B8-V2 | 3 | 9 |
| B8-V3 | 5 | 153 |
| B8-V4 | 10 | 4037913 |

### Lớp không hợp lệ/biên/ngoại lệ
| ID | Đầu vào | Loại | Kết quả mong đợi |
|---|---|---|---|
| B8-I1 | 0 | Biên/không hợp lệ | Ném `RangeError` |
| B8-I2 | -2 | Không hợp lệ | Ném `RangeError` |
| B8-I3 | 21 | Vượt biên trên | Ném `RangeError` |
| B8-I4 | "abc" | Ngoại lệ định dạng | Ném `TypeError` |
