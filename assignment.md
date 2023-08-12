# TechBootCamp Ödevleri

## Araştırma Ödevleri

1. Semantic ve non-semantic nedir ?

   ```
   - Semantik anlamsaldir. h1, p gibi girilen icerigin ne oldugunu ifade eder.  SEO'lar siteyi anlamlandırmada burayi kullanirlar.
   - Non semantic ise anlamsal olmayan gorunus ve tasarimi ilgilendiren kisimlardir.div,span gibi. Bunlar icerigin ne oldugunu ifade etmez. 
   ```

   

2. Unicode & Ascii character nedir ?

               1. ASCII (American Standard Code for Information Interchange): Ingilizce karakterleri iceren karakter kodlama bicimidir. 
               2. Unicode ise daha genis bir karakter kumesini kapsar. ASCII karakterleri unicode icinde vardir. UTF-8 ve UTF-16 en yaygin olanlar. 8 ve 16 bit sayisini ifade eder. 
               Ornekler
               ASCII:
               0: ASCII kodu 48
               !: ASCII kodu 33
               Unicode
               ©: Unicode kod noktası U+00A9
               ñ: Unicode kod noktası U+00F1

3. Framework & Library.

```
Framework: Projenin ana yapisini belirleyen yapidir. Gelistiricinin nasil hareket etmesi gerektigini kontrol eder ve cesitli yonergelerle onun yapmasi gerekenleri belirtir. Icerisinde libraryler bulunur. 
Library: Spesifik islemleri gerceklestirmek icin kullanilir. Kontrol gelistiricidedir.
```



## JS Örnek Ödevleri

**Örnek-1**: Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

```js
let userInput1 = prompt("İlk sayıyı giriniz:");
let num1 = parseInt(userInput1);
let userInput2 = prompt("İkinci sayıyı giriniz:");
let num2 = parseInt(userInput2);
let sum = num1 + num2;

alert(`Girilen iki sayının toplamı: ${sum}`);
console.log(`Girilen iki sayının toplamı: ${sum}`);

```

**Örnek-2:** Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 

```js
let derece = parseFloat(prompt("Sıcaklık değerini giriniz (Celsius)"));
let fahrenheit = (derece * 9 / 5) + 32;

alert(`${derece} Celsius derecesi ${fahrenheit.toFixed(2)} Fahrenheit derecesine eşittir.`);
console.log(`${derece} Celsius derecesi ${fahrenheit.toFixed(2)} Fahrenheit derecesine eşittir.`);

```

**Örnek-3: ** y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
 Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

```js
let xValue = prompt("X sayısını giriniz");
let kValue = prompt("K sayısını giriniz");
let equationResult = 3 * xValue + 4 * kValue;

alert(`Denklemin sonucu: ${equationResult}`);
console.log(`Denklemin sonucu: ${equationResult}`);

```

**Örnek-4:** operatör işlemleri: aşağıdaki örneği javascript ile yapalım
 4+3*2(3:3-1*6+9:1+(3:3))

```js
let calculationResult = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));

alert(`İşlem sonucu: ${calculationResult}`);
console.log(`İşlem sonucu: ${calculationResult}`);
```

 **Örnek-5:** Aşağıdaki örnekleri math ile çözelim ?

1. -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
   1. mutlak değeri alsın 5.9
   2. yuvarlama yapsın  6.0
   3. karesini alsın 36.00
   4. karekök alsın 6.0
   5. yuvarlama yapsın 6.0
   6. çıkan sonucu 5 bölsün 6/5=1
   7. iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
   8. küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

```js
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
```

 **Örnek-6 :** kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
 NOT: cast kullalım ?

```js
let num4 = parseFloat(prompt("Bir sayı giriniz"));

if (num4 < 0) {
    alert("Girilen sayı negatif");
    console.log("Girilen sayı negatif");
} else {
    alert("Girilen sayı pozitif");
    console.log("Girilen sayı pozitif");
}
```

 **Örnek-7 :** kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
 eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

```js
let password = prompt("Lütfen parolanızı girin:");
let repassword = prompt("Parolanızı tekrar girin:");

if (password === repassword) {
    alert("Giriş başarılı.");
    console.log("Giriş başarılı.");
} else {
    alert("Parolanızı kontrol ediniz.");
    console.log("Parolanızı kontrol ediniz.");
}
```

 **Örnek-8:**Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
 (Dikkat: normal  function ile yazınız)

```js
function determineSign(number) {
    if (number < 0) {
        return "Negatif";
    } else if (number > 0) {
        return "Pozitif";
    } else {
        return "Sıfır";
    }
}

let userInput = parseFloat(prompt("Bir sayı giriniz:"));
let result = determineSign(userInput);

alert(`Girilen sayı ${result}`);
console.log(`Girilen sayı ${result}`);
```

 **Örnek-9:** Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
 (Dikkat:anonymous function ve ternary ile yazınız). 

```js
const checkOddEven = function(number) {
    return (number % 2 === 0) ? "Girdiğiniz sayı çift sayıdır" : "Girdiğiniz sayı tek sayıdır";
};

const userNumber = parseFloat(prompt("Lütfen bir sayı giriniz"));
console.log(checkOddEven(userNumber));
```

 **Örnek-10:** Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
 Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

```js
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

const userNumber = parseInt(prompt("Lütfen bir sayı giriniz (1-7)"));
console.log(getWeekDay(userNumber));
```

  **Örnek-11:** Kullanıcı tarafından girilen bir kelimenin (prompt)
let userData= prompt("Lütfen bir şeyler yazınız")  ;
 S-1) Kaç karakterlidir ? (length)
 S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
 S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
 S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
 S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
 console.log(userData.replace("xxxxxxx"),"javascript");
 console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
 S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
 S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
 S-8) ilk harf nedir  ? (charAt())
 S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
 S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

```js
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
```



 **Örnek-12:** 0<=userData<=50
 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
 Örnek: 1<=user 1+2+3+...userdatası
 secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
 Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
 Bu sayının en fazla 50'e kadar toplama yapabilir (break)
 bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
 bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
 Dikkat: Bu algoritmayı Arrow Function ile yapalım.
 (Clean code kuralları çercevesinde ) algoritma yapan program ?

```js
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
```



**Örnek-13:**
 kullanıcıdan aldığımız isim soyisim (boşluk var)
 ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
 eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
 Hamit Mızrak
 H**** MIZ***
 ipucu: charAt, substring, indexOf, döngü, karar mekanizma

```js
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

```

