var img = document.createElement("img");
img.src = "http://vpngw.avalon.ru:23501/ru/figureimageru?n=64&pid=88";
img.width = "40"
img.height = "40"
img.style.margin = "10px"

var a=document.createElement('a');
a.href='https://vk.com/mkitsaish';
a.appendChild(img);

var body = document.getElementsByClassName("page_header")[0];
body.align = "center"
body.appendChild(a);
