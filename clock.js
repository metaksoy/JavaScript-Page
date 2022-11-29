// Selam, bu kod https://github.com/metaksoy tarafından hazırlanmıştır

//Kullanıcıdan İsim almak için
let takeName = prompt("Lütfen Adınızı Yazınız!");
let itsName = (document.getElementById("myName").innerHTML =
  takeName.toLocaleUpperCase());

// Tarih ve saat bilgisi
function nowTime() {
  var date = new Date().toLocaleString("tr-TR");
  document.getElementById("myClock").innerHTML = date;

  let now = new Date();
  let day = now.getDay();
  let nday = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let fullDate = (document.getElementById("gun").innerHTML = `${nday[day]}`);
}
// anlık olarak zaman bilgisi almak için eklenti
setInterval(nowTime, 10);
