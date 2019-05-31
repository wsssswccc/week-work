//get请求
let getInfor = document.getElementsByClassName('getInfor')[0];
getInfor.onclick = ()=>{
    let ajax = new XMLHttpRequest();
    //2.创建http请求,并设置请求地址
    ajax.open('get','https://easy-mock.com/mock/5ceeb21365dd5c3a44db261a/personal_information',true);
    //3.发送请求(get--null    post--数据)
    ajax.send();		
    //4.给AJAX设置事件
    ajax.onreadystatechange = ()=>{
    //判定状态
        if(ajax.readyState == 4 && ajax.status == 200){
            let msg = JSON.parse(ajax.response).data;
            window.console.log(msg);
            alert(JSON.parse(ajax.response).status.des);
            let text1 = document.getElementsByClassName('box2')[0];
            text1.innerHTML = msg.name + '<br>' + msg.age + '<br>' + msg.sex + '<br>' + msg.university + '<br>';
        }
    };
};

//post请求
let commit = document.getElementsByClassName('commit')[0];
commit.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://easy-mock.com/mock/5ceeb21365dd5c3a44db261a/', true);
    // POST请求需要设置此参数
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let data = 'name=' + name + '&age=' + age;
    xhr.send(data);
    window.console.log("你发送的数据是：" + data);
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState == 4 && xhr.status == 200){
            alert(JSON.parse(xhr.response).status.des);
            window.console.log(xhr.responseText);
        }
    };
}
