/*
//B1 Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhấ
let array = ['binh', 'Nam', 'Thanh', 'ducHieu'];

function allLongestStrings(inputArray) {
    // Duyet chuong trinh tim phan tu co so luong nhieu nhat 
    let max = 0;
    let tmp = [];
    if (array.length <= 0) { return tmp };
    array.forEach(element => {
        if (element.length > max) {
            if (tmp.length > 0) {
                tmp.splice(0, tmp.length);
            }
            max = element.length;
            tmp.push(element);
        } else if (element.length == max) {
            tmp.push(element);
        }
    });
    return tmp;
}
console.log(...array);
let result = allLongestStrings(array);
console.log(...result);
*/
/*
// B2 Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team

let a = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let tmpLeft = 0;
    let tmpRight = 0;
    let result = [];
    if (a.length <= 0) {
        return result;
    }
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (index % 2 != 0) {
            tmpRight = tmpRight + element;
        }
        if (index % 2 == 0) {
            tmpLeft = tmpLeft + element;
        }

    }
    result.push(tmpLeft);
    result.push(tmpRight);
    return result;
}

let result = alternatingSums(a);
console.log(...result);

*/
//Color Picker
let areaColor = document.getElementById('Color');
let Colorvalue = document.getElementById("hiddenColor");


function getRamdomColor() {
    const ramdomColor = Math.floor(Math.random() * 16777215).toString(16);
    areaColor.style.backgroundColor = '#' + ramdomColor;
    Colorvalue.value = '#' + ramdomColor;
    document.getElementById('colorinf').innerText = 'Color: #' + ramdomColor;
}

function copyColor() {
    if (Colorvalue.value == '' || Colorvalue.value == null) {
        alert('You must pick Color first');
        return;
    } else {
        navigator.clipboard.writeText(Colorvalue.value);
        alert('Color : ' + Colorvalue.value);
    }
}