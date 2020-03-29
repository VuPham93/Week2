function Toantu(){
    let inputWidth;
    let inputHeight;
    inputWidth = prompt("Chiều dài:");
    inputHeight = prompt("Chiều rộng");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;
    document.write("Diện tích: " + area);
}
