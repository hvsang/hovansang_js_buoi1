/**
 * bai 1: tinh tien luong nhan vien
 *  dau vao:
 *          + luong 1 ngay : 100000
 *          + so ngay lam  : 5
 *  xu ly:
 *          + tao bien luong 1 ngay : 100000
 *          + tao bien so ngay lam  : 5
 *          + tao bien result
 *          + result1 = luong 1 ngay * so ngay lam
 *  dau ra:
 *          + ket qua hien thi
 *  
 */

const SALARY = 100000;
const DAYS = 5;
const RESULT1 = SALARY * DAYS;
console.log(RESULT1);

/**
 * bai 2: tinh gia tri trung binh
 *  dau vao: 
 *          + 5 so thuc
 *  xu ly:
 *          + tao bien n1
 *          + tao bien n2
 *          + tao bien n3
 *          + tao bien n4
 *          + tao bien n5
 *          + tao bien result2
 *          + results = (n1 + n2 + n3 + n4 + n5) / 5
 *  dau ra:
 *          + ket qua hien thi
 */

const N1 = 1, N2 = 2, N3 = 3, N4 = 4, N5 = 5;
const RESULT2 = (N1 + N2 + N3 + N4 + N5) / 5;
console.log(RESULT2);

/**
 * bai 3: quy doi tien
 *  dau vao:
 *          + gia USD: 23500   
 *          + so tien USD
 *  xu ly:
 *          + tao bien USD
 *          + tao bien so tien USD
 *          + tao bien result3
 *          + result3 = so tien USD * USD
 *  dau ra:
 *          + ket qua hien thi
 */

const USD = 23500;
const QUYDOIUSD = 3;
const RESULT3 = QUYDOIUSD * USD;
console.log(RESULT3 + " VND");

/**
 * bai 4: tinh chu vi, dien tich HCN
 *  dau vao:
 *          + chieu dai
 *          + chieu rong
 *  xu ly:
 *          + tao bien chieu dai
 *          + tao bien chieu rong   
 *          + tao bien chu vi = (chieu dai + chieu rong ) * 2;
 *          + tao bien dien tich = chieu dai * chieu rong
 * dau ra:
 *          + ket qua hien thi
 */

const CHIEUDAI = 3;
const CHIEURONG = 4;
const CHUVI = (CHIEUDAI + CHIEURONG) * 2;
const DIENTICH = CHIEUDAI * CHIEURONG;
console.log("CHUVI: " + CHUVI);
console.log("DIENTICH: " + DIENTICH);

/**
 * bai 5: tinh tong 2 ky so
 *  dau vao: 
 *          + so co 2 chu so
 *  xu ly:
 *          + tao bien so co 2 chu so
 *          + tao bien ten = Math.floor(so co 2 chu so / 10)
 *          + tao bien unit = so co 2 chu so % 10;
 *          + result5 = ten + unit
 */

const n = 23;
const TEN = Math.floor(n / 10);
const UNIT = n % 10;
const RESULT5 = TEN + UNIT;
console.log(RESULT5);