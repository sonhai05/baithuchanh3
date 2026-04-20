---
name: Issue 2 - Kiểm thử dữ liệu không hợp lệ, biên, ngoại lệ
about: Thiết kế và viết test case hộp đen cho dữ liệu không hợp lệ, giá trị biên và ngoại lệ
title: "[Issue 2] Test case hộp đen cho dữ liệu không hợp lệ, biên, ngoại lệ"
labels: [testing]
assignees: []
---

## Mục tiêu

Thiết kế và viết test case kiểm thử hộp đen cho các trường hợp:

- Dữ liệu không hợp lệ.
- Giá trị biên.
- Ngoại lệ input.

## Kỹ thuật áp dụng

- Phân tích giá trị biên.
- Phân lớp tương đương (lớp không hợp lệ).
- Kiểm thử input sai định dạng.

## Tài liệu liên quan

- docs/blackbox_testcases.md
- tests/blackboxPractice.test.js

## Điều kiện hoàn thành

- [ ] Mỗi bài có ít nhất 1 tình huống sai/ngoại lệ.
- [ ] Test case mô tả được kết quả mong đợi.
- [ ] Test tự động chạy pass bằng `npm test` cho nhóm dữ liệu không hợp lệ, biên, ngoại lệ.
- [ ] Có commit liên kết issue.

## Commit gợi ý

docs(test): thêm test case hộp đen cho dữ liệu không hợp lệ, biên, ngoại lệ (issue #2)
