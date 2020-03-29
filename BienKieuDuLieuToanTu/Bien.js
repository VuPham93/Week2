function Tinhdiemtrungbinh() {
    let Ly;
    let Hoa;
    let Sinh;
    Ly = prompt("Nhập điểm Vật lý");
    Hoa = prompt("Nhập điểm Hóa");
    Sinh = prompt("Nhập điểm Sinh");
    let DiemLy = parseInt(Ly);
    let Diemhoa = parseInt(Hoa);
    let Diemsinh =  parseInt(Sinh);
    let Trungbinh = (Diemhoa + DiemLy + Diemsinh)/3;
    document.write("Điểm trung bình: " +Trungbinh);
    document.write("<br>");
    let Tong = Diemhoa + DiemLy + Diemsinh;
    document.write("Tổng điểm: " + Tong);
}
function Chuyendoinhietdo() {
    let C;
    C = prompt("Nhập nhiệt độ theo thang độ C");
    let DoC = parseInt(C);
    let DoF = DoC * 9/5 +32;
    document.write(DoF + " độ F");
}
function Tinhdientichhinhtron() {
    let bankinh;
    bankinh = prompt("Nhập bán kính hình tròn");
    let r = parseInt(bankinh);
    let S = 3.14 * r^2;
    document.write("Diện tích = " + S);

}
function Tinhchuvihinhtron () {
    let bankinh;
    bankinh = prompt("Nhập bán kính hình tròn");
    let r = parseInt(bankinh);
    let P = 2 * r * 3.14;
    document.write("Chu vi = " + P);

}