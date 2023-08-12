//test
console.log("test");
//ORNEK 1
console.log("**********ÖRNEK 1**********");
let userInput1 = prompt("İlk sayıyı giriniz:");
let num1 = parseInt(userInput1);
let userInput2 = prompt("İkinci sayıyı giriniz:");
let num2 = parseInt(userInput2);
let sum = num1 + num2;

alert(`Girilen iki sayının toplamı: ${sum}`);
console.log(`Girilen iki sayının toplamı: ${sum}`);

//ORNEK 2
console.log("**********ÖRNEK 2**********");
let derece = parseFloat(prompt("Sıcaklık değerini giriniz (Celsius)"));
let fahrenheit = (derece * 9 / 5) + 32;

alert(`${derece} Celsius derecesi ${fahrenheit.toFixed(2)} Fahrenheit derecesine eşittir.`);
console.log(`${derece} Celsius derecesi ${fahrenheit.toFixed(2)} Fahrenheit derecesine eşittir.`);


//ORNEK 3
console.log("**********ÖRNEK 3**********");
let xValue = prompt("X sayısını giriniz");
let kValue = prompt("K sayısını giriniz");
let equationResult = 3 * xValue + 4 * kValue;

alert(`Denklemin sonucu: ${equationResult}`);
console.log(`Denklemin sonucu: ${equationResult}`);


//ORNEK 4
console.log("**********ÖRNEK 4**********");
let calculationResult = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));

alert(`İşlem sonucu: ${calculationResult}`);
console.log(`İşlem sonucu: ${calculationResult}`);


//ORNEK 5
console.log("**********ÖRNEK 5**********");
// Kullanıcı tarafından verilen sayıyı saklıyoruz
const inputNumber = -5.9;

// Sayının mutlak değerini alarak karesini hesaplıyoruz
const squaredNumber = Math.pow(Math.round(Math.abs(inputNumber)), 2);

// Kare sayısını 5'e bölerek bölme sonucunu hesaplıyoruz
const divisionResult = squaredNumber / 5;

// Kare sayısının 5'e bölümünden kalanı hesaplıyoruz
const remainder = squaredNumber % 5;

// Bölme sonucuyla kalanın en küçüğünü hesaplıyoruz
let selectedValue = Math.min(divisionResult, remainder);

// Eğer seçilen değer tek ise 3 ekliyoruz
if (selectedValue % 2 !== 0) {
    selectedValue += 3;
}

// Sonucu kullanıcıya bildiriyoruz
alert(`İşlem sonucu: ${selectedValue}`);
console.log(`İşlem sonucu: ${selectedValue}`);


//ORNEK 6
console.log("**********ÖRNEK 6**********");
let num4 = parseFloat(prompt("Bir sayı giriniz"));

if (num4 < 0) {
    alert("Girilen sayı negatif");
    console.log("Girilen sayı negatif");
} else {
    alert("Girilen sayı pozitif");
    console.log("Girilen sayı pozitif");
}


//ORNEK 7
console.log("**********ÖRNEK 7**********");
let password = prompt("Lütfen parolanızı girin:");
let repassword = prompt("Parolanızı tekrar girin:");

if (password === repassword) {
    alert("Giriş başarılı.");
    console.log("Giriş başarılı.");
} else {
    alert("Parolanızı kontrol ediniz.");
    console.log("Parolanızı kontrol ediniz.");
}


//ORNEK 8
console.log("**********ÖRNEK 8**********");
function determineSign(number) {
    if (number < 0) {
        return "Negatif";
    } else if (number > 0) {
        return "Pozitif";
    } else {
        return "Sıfır";
    }
}

let userInput3 = parseFloat(prompt("Bir sayı giriniz:"));
let result = determineSign(userInput3);

alert(`Girilen sayı ${result}`);
console.log(`Girilen sayı ${result}`);


//ORNEK 9
console.log("**********ÖRNEK 9**********");
const checkOddEven = function(number) {
    return (number % 2 === 0) ? "Girdiğiniz sayı çift sayıdır" : "Girdiğiniz sayı tek sayıdır";
};

const userNumber = parseFloat(prompt("Lütfen bir sayı giriniz"));
console.log(checkOddEven(userNumber));


//ORNEK 10
console.log("**********ÖRNEK 10**********");
function getWeekDay(userInput) {
    switch (userInput) {
        case 1: return "Pazartesi";
        case 2: return "Salı";
        case 3: return "Çarşamba";
        case 4: return "Perşembe";
        case 5: return "Cuma";
        case 6: return "Cumartesi";
        case 7: return "Pazar";
        default: return "Geçersiz gün numarası";
    }
}

const userNumber2 = parseInt(prompt("Lütfen bir sayı giriniz (1-7)"));
console.log(getWeekDay(userNumber2));


//ORNEK 11
console.log("**********ÖRNEK 11**********");
const stringFunctions = () => {
    const userInput = prompt("Lütfen bir metin giriniz");
    console.log(`Girdiğiniz metnin karakter sayısı: ${userInput.length}`);
    console.log(`Girdiğiniz metine trim işlemi uygulandıktan sonra karakter sayısı: ${userInput.trim().length}`);
    console.log(`BÜYÜK HARFLERLE: ${userInput.toUpperCase()}`);
    console.log(`küçük harflerle: ${userInput.toLowerCase()}`);
    console.log(`İlk kelimeyi değiştiriyoruz : ${userInput.replace(userInput.substring(0, userInput.indexOf(" ")), "javascript")}`);
    console.log(`Metin "javascript" ile başlıyor mu? ${userInput.startsWith("javascript")}`);
    console.log(`Metin "javascript" ile bitiyor mu? ${userInput.endsWith("javascript")}`);
    console.log(`Metinin ilk karakteri: ${userInput.charAt(0)}`);
    console.log(userInput.concat("-ben js öğreniyorum"));
    console.log(`Metinin ilk dört karakteri: ${userInput.substring(0, 4)}`);
}
stringFunctions();


//ORNEK 12
console.log("**********ÖRNEK 12**********");
const calculateAndDisplayResults = () => {
    let userLimit = parseInt(prompt("Lütfen bitiş sayısını girin:"));
    let evenCount = 0;
    let evenSum = 0;
    let evenNumbers = "";
    let oddCount = 0;
    let oddSum = 0;
    let oddNumbers = "";
    let totalSum = 0;

    if (userLimit == 44) {
        console.log("Güvenli çıkış.");
        return;
    }

    for (let i = 1; i <= userLimit; i++) {
        if (i % 7 === 0) {
            continue;
        }

        if (i > 50) {
            break;
        }

        totalSum += i;

        if (i % 2 === 0) {
            evenCount++;
            evenSum += i;
            evenNumbers += `${i}, `;
        } else {
            oddCount++;
            oddSum += i;
            oddNumbers += `${i}, `;
        }

    }

    console.log(`Toplam Çift Sayı Adedi: ${evenCount}`);
    console.log(`Toplam Çift Sayılar: ${evenSum}`);
    console.log(`Çift Sayılar: ${evenNumbers}`);
    console.log(`Toplam Tek Sayı Adedi: ${oddCount}`);
    console.log(`Toplam Tek Sayılar: ${oddSum}`);
    console.log(`Tek Sayılar: ${oddNumbers}`);
    console.log(`Toplam: ${totalSum}`);
}

calculateAndDisplayResults();


//ORNEK 13
console.log("**********ÖRNEK 13**********");
// Fonksiyon, isim ve soyisimleri maskelemek için kullanılır.
const maskName = (fullName) => {
    // Girdiyi boşluk karakterine göre böler ve isim parçalarını bir diziye atar.
    const nameParts = fullName.split(" ");
    const maskedNameParts = [];

    // Her bir isim parçası üzerinde döngü yapar.
    for (const part of nameParts) {
        // İlk harfi büyük yapar.
        let maskedPart = part[0].toUpperCase();

        // İlk harften sonraki karakterleri '*' ile doldurur.
        maskedPart += '*'.repeat(part.length - 1);

        // Maskelenmiş isim parçasını diziye ekler.
        maskedNameParts.push(maskedPart);
    }

    // Maskelenmiş isim parçalarını boşlukla birleştirir.
    const maskedFullName = maskedNameParts.join(" ");
    return maskedFullName;
}

// Kullanıcıdan isim ve soyisim girdisi alınır.
const userInput = prompt("Lütfen isim ve soyisminizi giriniz:");

// Maskelenmiş isim ve soyisim hesaplanır.
const maskedName = maskName(userInput);

// Maskelenmiş isim ve soyisim sonucu ekrana yazdırılır.
console.log(`Maskelenmiş isim ve soyisim: ${maskedName}`);