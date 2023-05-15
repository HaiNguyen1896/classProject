let a = parseFloat(prompt("Nhập vào số thứ 1"));
let b = parseFloat(prompt("Nhập vào số thứ 2"));
let c = parseFloat(prompt("Nhập vào số thứ 3"));
let max = a;
if (max < b) {
    max = b;
} else {
    if (max < c) {
        max = c;
    }
}
alert("Số lớn nhất = " + max);

