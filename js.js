
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

function ketHopChuoi() {
    let strInput3 = document.getElementById('input_ex3').value;
    strInput3 = strInput3.replace(/\s/g, '');
    strInput3 = strInput3.split("");
    // console.log(typeof(strInput3));
    // alert(strInput3.length);
    let strResult= [];
    let index = 0;
    for (let i = 0; i < strInput3.length; i++) {
        for (let j = i; j < strInput3.length; j++) {
            if(j === i){
                strResult[index] = strInput3[i];
            } else{
                // console.log(strResult[index]);
                // console.log(strInput3[j]);
                strResult[index] = strResult[index-1] + strInput3[j];
            }
            index++;
        }
    }
    // console.log(strResult);
    document.getElementById('kq_ex3').innerHTML = 'Kết quả kết hợp chuỗi: ' + strResult.toString();
    
}

function lanXuatHien() {
    let strInput4 = document.getElementById('input_ex4').value;
    strInput4 = strInput4.replace(/\s/g, '');

    strInput4Arr = strInput4.split("");
    let tmpArr = []; //mang k co ky tu trung lap
    let result = 'Số lần xuất hiện: ';
    for (let i = 0; i < strInput4Arr.length; i++) {
        tmpArr.forEach(element => {
            if(element == strInput4Arr[i]){
                return
            } else{
                tmpArr.push(strInput4Arr[i]);
            }
        });
        console.log(tmpArr);
        let solan = (strInput4.match(new RegExp(strInput4Arr[i], "g")) || []).length;
        result = result + '<br>' + strInput4Arr[i] + " ----> " + solan + " lần";
    }
    // console.log(strInput4);
    console.log(tmpArr);
    document.getElementById('kq_ex4').innerHTML = result;
}