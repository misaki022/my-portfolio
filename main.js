let img = document.getElementById("image_place");
const element1 = document.getElementById("cafe");
const element2 = document.getElementById("gohan");
const Omise = document.getElementById("omise");
const linkName1 = "coba cafe";
const linkUrl1 = "https://www.instagram.com/coba_cafe_dazaifu/";
const linkName2 = "前田屋";
const linkUrl2 = "https://motsunabe-maedaya.com/";
const linkName3 = "AIMAI";
const linkUrl3 = "https://www.instagram.com/aimai.hakata/";
const linkName4 = "一双";
const linkUrl4 = "http://www.hakata-issou.com/";
element1.onclick = function () {
  Omise.innerHTML =
    '<a href="' +
    linkUrl1 +
    '"target="_blank">' +
    linkName1 +
    "</a>" +
    " " +
    '<a href="' +
    linkUrl3 +
    '"target="_blank">' +
    linkName3 +
    "</a>";
};

element2.onclick = function () {
  Omise.innerHTML =
    '<a href="' +
    linkUrl2 +
    '"target="_blank">' +
    linkName2 +
    "</a>" +
    " " +
    '<a href="' +
    linkUrl4 +
    '"target="_blank">' +
    linkName4 +
    "</a>";
};
