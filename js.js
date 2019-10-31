
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
    if (laSoNguyenTo2(numInput)) {
        document.getElementById("kq_ex1").innerHTML = 'Kết quả kiểm tra: Là số nguyên tố';
    } else {
        document.getElementById("kq_ex1").innerHTML = 'Kết quả kiểm tra: Không là số nguyên tố';
    }
}

function daoNguocSo() {
    let numInput2 = document.getElementById('input_ex2').value;
    // console.log(typeof(numInput2));
    numInput2 = numInput2.split("").reverse().join("");
    // alert(typeof(numInput2));
    document.getElementById("kq_ex2").innerHTML = 'Kết quả đảo ngược: ' + numInput2;

}

function ketHopChuoi() {
    let strInput3 = document.getElementById('input_ex3').value;
    strInput3 = strInput3.replace(/\s/g, '');
    strInput3 = strInput3.split("");
    // console.log(typeof(strInput3));
    // alert(strInput3.length);
    let strResult = [];
    let index = 0;
    for (let i = 0; i < strInput3.length; i++) {
        for (let j = i; j < strInput3.length; j++) {
            if (j === i) {
                strResult[index] = strInput3[i];
            } else {
                // console.log(strResult[index]);
                // console.log(strInput3[j]);
                strResult[index] = strResult[index - 1] + strInput3[j];
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
    strInput4KhongLap = chuoiKhongLapLai(strInput4); //tao chuoi khong co chu lap lai
    strInput4ArrKhongLap = strInput4KhongLap.split(''); //tao mang khong co gia tri lap
    strInput4Arr = strInput4.split("");
    let tmpArr = [];
    let result = 'Số lần xuất hiện: ';

    /* 
        Lặp mảng các ký tự không lặp{
            số lần lặp của các ký tự = các ký tự trong mảng không lặp (strInput4ArrKhongLap[i]) MATCH với chuỗi có chứa các ký tự lặp (strInput4)
        }
        
    */
    for (let i = 0; i < strInput4ArrKhongLap.length; i++) {
        let soLanLapKyTu = (strInput4.match(new RegExp(strInput4ArrKhongLap[i], "g")) || []).length;
        result = result + '<br>' + strInput4ArrKhongLap[i] + " ----> " + soLanLapKyTu + " lần";

    }
    document.getElementById('kq_ex4').innerHTML = result;
}

function chuoiKhongLapLai(str = '') {

    /* 
        Tạo chuỗi mới không có phần tử lặp lại :
        split('') : chuyển chuổi sang array để reduce. (tạm gọi là array Y)

        reduce: sẽ trả về total. hàm có 2 đối số là 1 hàm (total, curent) và 1 mảng rỗng []
            mảng rỗng [] ở đây sẽ đưa vào total lần chạy đầu tiên.

            total.find : sẽ trả về giá trị (value) của phần tử đầu tiên trong mảng (total) thỏa mãn chức năng kiểm tra được cung cấp hoặc undefined. 
                Chức năng kiểm tra ở đây là: find sẽ duyệt qua mỗi value của total. (ổ đây là a) rồi lấy giá trị a để so sánh với current (giá trị đầu của array Y). Nếu thõa thì total = total, còn không thì total sẽ bằng [...total, current]  (mảng mới, có giá trị của total cũ và thêm vào giá trị current.)
        join: tạo lại chuỗi từ mảng.
    */
    return str.split('').reduce((total, current) =>
        total.find((a) => a === current) !== undefined ? total : [...total, current]
        , []).join('')
}


function phanTuLonHon() {
    let strInput5 = document.getElementById('input_ex5').value.replace(/\s/g, '');
    let strInput5So = document.getElementById('input_ex5_so').value;
    strInput5Arr = strInput5.split(',');
    // console.log(strInput5Arr);
    // Tao mang moi thoa man dieu kien chi toan so.
    strInput5Arr = strInput5Arr.map(
        function (elem) {
            if (isNaN(elem)) {
                return elem.split("").map(
                    function (x) {
                        if(isNaN(x)){
                            
                        } else{
                            return x;
                        }
                    }
                ).join("")
            }
            return elem;
        }
    );
    // console.log(strInput5Arr);

    // Thuc hien viec so sanh voi 1 so de tra ve mang cac phan tu lon hon
    let result = strInput5Arr.filter(
        function (x) {
            
            if (x > Number(strInput5So))
                return x;
        }
    );
    document.getElementById('kq_ex5').innerHTML = 'Mảng mới là: ' + '[ ' + result + ' ]';

}

function soLanKyTuOChuoi(str, kt) {
    return str.split(kt).length - 1;
}

function kyTuXuatHien() {
    let strInput = document.getElementById('input_ex6').value;
    let ktInput = document.getElementById('input_ex6_kt').value;
    let result = soLanKyTuOChuoi(strInput, ktInput);
    
    document.getElementById('kq_ex6').innerHTML = ktInput + ' xuất hiện: '+ result + ' lần';
}

