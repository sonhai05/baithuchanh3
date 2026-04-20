# HƯỚNG DẪN ISSUE VÀ COMMIT TRÊN GITHUB

## 1. Tạo Issue 1 (test case cho dữ liệu hợp lệ)

- Tiêu đề: `[Issue 1] Test case hộp đen cho dữ liệu hợp lệ`
- Nội dung nên tham chiếu:
  - `docs/blackbox_testcases.md` (nhóm phân lớp hợp lệ)
  - `tests/blackboxPractice.test.js` (test tự động)
- Commit gợi ý:

```text
docs(test): thêm test case hộp đen cho dữ liệu hợp lệ (issue #1)
```

## 2. Tạo Issue 2 (test case cho dữ liệu không hợp lệ, biên, ngoại lệ)

- Tiêu đề: `[Issue 2] Test case hộp đen cho dữ liệu không hợp lệ, biên, ngoại lệ`
- Nội dung nên tham chiếu:
  - `docs/blackbox_testcases.md` (nhóm phân lớp không hợp lệ/biên)
  - `tests/blackboxPractice.test.js` (test tự động)
- Commit gợi ý:

```text
docs(test): thêm test case hộp đen cho dữ liệu không hợp lệ, biên, ngoại lệ (issue #2)
```

## 3. Quy trình xử lý issue và commit

1. Thêm/cập nhật test và tài liệu cho issue 1.
2. Commit với message gắn với issue 1.
3. Thêm/cập nhật test và tài liệu cho issue 2.
4. Commit với message gắn với issue 2.
5. Push nhánh và tạo pull request.

## 4. Chuỗi lệnh gợi ý

```bash
git add docs/blackbox_testcases.md tests/blackboxPractice.test.js
git commit -m "docs(test): thêm test case hộp đen cho dữ liệu hợp lệ (issue #1)"

git add docs/blackbox_testcases.md tests/blackboxPractice.test.js docs/test_results.md
git commit -m "docs(test): thêm test case hộp đen cho dữ liệu không hợp lệ, biên, ngoại lệ (issue #2)"

git push origin <your-branch>
```
