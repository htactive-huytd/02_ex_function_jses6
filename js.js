
function ktSoNguyenTo() {
    let numInput = document.getElementById('input_ex1').value;
    
    //Ham kt so nguyen to voi buoc nhay 2
    function laSoNguyenTo2(numInput) {
        // Neu n < 2 thi khong phai la SNT
        if (numInput < 2) {
            return false;
        }
        // Neu n = 2 la SNT
        if (numInput == 2) {
            return true;
        }
        // Neu n la so chan thi ko phai la SNT
        if (numInput % 2 == 0) {
            return false;
        }
        // Lap qua cac so le
        for (let i = 3; i < (numInput - 1); i += 2) {
            if (numInput % i == 0) {
                return false;
            }
        }
        return true;
    }
    if(laSoNguyenTo2(numInput)){
        document.getElementById("kq_ex1").innerHTML = 'Kết quả kiểm tra: Là số nguyên tố';
    } else{
        document.getElementById("kq_ex1").innerHTML = 'Kết quả kiểm tra: Không là số nguyên tố';
    }   
}

function daoNguocSo() {
    let numInput2 = document.getElementById('input_ex2').value;
    // console.log(typeof(numInput2));
    numInput2 = numInput2.split("").reverse().join("");
    // alert(typeof(numInput2));
    document.getElementById("kq_ex2").innerHTML = 'Kết quả đảo ngược: ' +  numInput2;

}