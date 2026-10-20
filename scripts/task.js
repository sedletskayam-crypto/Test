let check = false;

function verify() {
    let A = parseFloat(document.getElementsByName('A')[0].value);
    let H = parseFloat(document.getElementsByName('H')[0].value);
    let R = parseFloat(document.getElementsByName('R')[0].value);
    let M = parseFloat(document.getElementsByName('M')[0].value);
    console.log(A, H, R, M);

    if (isNaN(A) || isNaN(H) || isNaN(R) || isNaN(M) ||
        A <= 0 || H <= 0 || R <= 0 || M <= 0) {
        document.getElementById("result").value = "Ошибка: введите положительные числа";
        check = false;
        return;
    }

    let V1 = Math.pow(A, 3);
    let V2 = Math.PI * Math.pow(R, 2) * H;
    let result;

    if (M <= V1 && M <= V2) {
        result = "Поместится в обе ёмкости";
    } else if (M <= V1) {
        result = "Поместится только в кубическую ёмкость";
    } else if (M <= V2) {
        result = "Поместится только в цилиндрическую ёмкость";
    } else {
        result = "Не поместится ни в одну ёмкость";
    }

    document.getElementById("result").value = result;
    check = true;  
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Сначала введите корректные данные и нажмите «Проверить»");
    }
}

document.getElementById("verify").addEventListener("click", verify);
document.getElementById("send").addEventListener("click", send);
