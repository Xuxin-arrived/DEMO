var tabs = document.getElementById("seckillNav").getElementsByTagName("li");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showList;
}
var items = document.getElementById("showItems").getElementsByTagName("ul");

for (var i = 0; i < items.length; i++) {

}

function showList() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = "active";
            items[i].className = "clearFloat active";
        } else {
            tabs[i].className = "";
            items[i].className = "clearFloat";
        }

    }
}

// var scrollTop1 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
// console.log(scrollTop1);

var test = document.getElementById("abc");
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop >= 260) {
        test.className = "seckill-nav seckill-navfixed";
    } else {
        test.className = "seckill-nav";
    }
}