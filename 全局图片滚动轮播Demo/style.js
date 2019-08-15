
var shuzu = document.getElementsByClassName("pict");
console.log(shuzu);
// setInterval(function () {
//   for (var i = 0; i < shuzu.length; i++) {
//     shuzu[i].click();
//     if (i == 4) {
//       i = i % 4;
//     }
//   }
// }, 2000);
var i = 0;
var timer = setInterval(function () {
  shuzu[i].click();
  console.log("循环定时器");
  i++;
  if (i == 5) {
    i = i % 5;
  }
}, 10000);
