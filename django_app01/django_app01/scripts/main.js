/*变量申明可以用var、let，尽量使用let*/
let myimg = document.querySelector('img');

myimg.onclick = function () {
    let info = myimg.getAttribute('src');
    if (info == 'django_app01\django_app01\img\20170427105430947.png') {
        myimg.setAttribute('src', 'django_app01\django_app01\img\7-201010221021b1.jpg');
    }
    else {
        myimg.setAttribute('src', 'django_app01\django_app01\img\20170427105430947.png');
    }
}

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setbutton() {
    // prompt弹出对话框输入数据
    let myname = prompt('请输入你的名字。');
    if (!myname || myname == null) {
        setbutton();
    }
    else {
        // localStorage 将数据存储在浏览器中供后续获取，关闭后打开能保存上次的输入
        localStorage.setItem('name', myname);
        myheading.textContent = 'Mollia 酷毙了, ' + myname + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mozilla 酷毙了，' + storedName + '!';
  }

mybutton.onclick = function() {
    setbutton();
}
