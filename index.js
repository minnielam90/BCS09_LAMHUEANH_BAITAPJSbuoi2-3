// Bài 1: Tính tiền lương nhân viên
// Đầu vào: khai báo biến
// - tiền lương 1 ngày = 100000
// - số ngày làm
// - tổng tiền lương
// Các bước xử lý: tiền lương nhân viên = tiền lương 1 ngày x số ngày làm
// Đầu ra: tổng tiền lương nhân viên

const tienLuong = 100000;

var btnTinhLuong = document.getElementById("btnTinhLuong");
console.log(btnTinhLuong);
btnTinhLuong.onclick = function () {
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  var tongTien = 0;
  if (soNgayLam > 0) {
    tongTien = tienLuong * soNgayLam;
  } else {
    alert("Số ngày làm phải lớn hơn 0");
  }

  console.log(tongTien);
  document.getElementById(
    "ketQuaLuong"
  ).innerHTML = `Tiền lương của bạn là ${tongTien.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};
// Bài 1 end

// Bài 2: Tính giá trị trung bình
// Đầu vào: khai báo
// - 5 giá trị biến
// - biến giá trị trung bình
// Các bước xử lý: cộng 5 giá trị và chia 5 để tính trung bình
// Đầu ra: Giá trị trung bình

var btnGiaTriTrungBinh = document.getElementById("btnGiaTriTrungBinh");
console.log(btnGiaTriTrungBinh);
btnGiaTriTrungBinh.onclick = function () {
  var giaTri1 = document.getElementById("giaTri1").value * 1;
  var giaTri2 = document.getElementById("giaTri2").value * 1;
  var giaTri3 = document.getElementById("giaTri3").value * 1;
  var giaTri4 = document.getElementById("giaTri4").value * 1;
  var giaTri5 = document.getElementById("giaTri5").value * 1;
  var giaTriTB = 0;
  giaTriTB = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5;
  console.log(giaTriTB);
  document.getElementById(
    "giaTriTrungBinh"
  ).innerHTML = `Giá trị trung bình là ${giaTriTB}`;
};
// Bài 2 end

// Bài 3: Quy đổi tiền
// Đầu vào: cần khai báo biến
// - giá usd hiện nay là 23500
// - số tiền cần quy đổi
// - số tiền sau quy đổi
// Các bước xử lý: số tiền sau quy đổi = giá usd hiện nay x số tiền cần quy đổi
// Đầu ra: Giá tiền sau quy đổi
var btnQuyDoiTien = document.getElementById("btnQuyDoiTien");
console.log(btnQuyDoiTien);
btnQuyDoiTien.onclick = function () {
  var giaUsd = 23500;
  var tienCanDoi = document.getElementById("tienCanDoi").value * 1;
  var tienDaQuyDoi = 0;
  if (tienCanDoi > 0) {
    tienDaQuyDoi = giaUsd * tienCanDoi;
  } else {
    alert("Số tiền quy đổi phải lớn hơn 0");
  }

  console.log(tienDaQuyDoi);
  document.getElementById(
    "tienSauQuyDoi"
  ).innerHTML = `Tiền sau quy đổi của bạn là ${tienDaQuyDoi.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};
// Bài 3 end

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Đầu vào: khai báo các biến
// - Chiều dài
// - Chiều rộng
// - chu vi
// - diện tích
// Các bước xử lý: diện tích = chiều dài x chiều rộng, chu vi = (chiều dài + chiều rộng) *2
// Đầu ra: Diện tích, chu vi hình chữ nhật
var btnTinh = document.getElementById("btnTinh");
console.log(btnTinh);
btnTinh.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = 0;
  var dienTich = 0;
  if (chieuDai > 0 && chieuRong > 0 && chieuDai > chieuRong) {
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
  } else {
    alert(
      "Chiều dài và chiều rộng hình chữ nhật phải lớn hơn 0 và chiều dài phải lớn hơn chiều rộng"
    );
  }
  console.log(dienTich);
  console.log(chuVi);
  document.getElementById(
    "ketQuaDienTich"
  ).innerHTML = `Diện tích: ${dienTich}`;
  document.getElementById("ketQuaChuVi").innerHTML = `Chu vi: ${chuVi}`;
};
// Bài 4 end

// Bài 5: Tính tổng 2 ký số
// Đầu vào: khai báo các biến
// - số có 2 chữ số
// - số hàng đơn vị
// - số hàng chục
// - tổng hai số vừa nhập
// Các bước xử lý:
// - Lấy số hàng đơn vị: int so_hang_dv = so % 10
// - lấy số hàng chục: int so_hang_chuc = so / 10
// Đầu ra: Tổng hai ký số của số vừa nhập
var btntinhTong = document.getElementById("btntinhTong");
console.log(btntinhTong);
btntinhTong.onclick = function () {
  var soHaiChuSo = document.getElementById("soHaiChuSo").value * 1;
  var value = soHaiChuSo,
    sum = 0;
  if (soHaiChuSo > 0 && soHaiChuSo < 100) {
    while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
    }
  } else {
    alert("Vui lòng chỉ nhập số nguyên dương có hai chữ số");
  }

  console.log(sum);
  document.getElementById("tongKySo").innerHTML = `Tổng 2 ký số: ${sum}`;
};
