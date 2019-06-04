//切换登录注册页面
let guide = document.getElementsByClassName('guide');
let main = document.getElementsByClassName('main');
guide[0].onclick = ()=>{
    main[0].style.display = 'flex';
}
guide[1].onclick = ()=>{
    main[0].style.display = 'none';
}
//注册页面
let data2 = document.getElementsByClassName('data2');
let warnings = document.getElementsByClassName('warnings');
//1.验证用户
function checkName(){   
    let englishreg = /^[a-zA-Z0-9]{1,15}$/; 
	let chinesereg = /^[\u4e00-\u9fa5 ]{1,8}$/;
    if(englishreg.test(data2[0].value) || chinesereg.test(data2[0].value)){
        warnings[0].innerHTML = "";
        return true;
    }
    else{
        warnings[0].innerHTML="*请重新输入用户名：只能为1~15位的字母、数字或1~8位的汉字";
        data2[0].value = "";
        return false;
    }
}
//2.验证是否为中国电话号码
function checkTel(){
    let regMobile=/^1(3|4|5|7|8)\d{9}$/;
    if(regMobile.test(data2[1].value)){
        warnings[1].innerHTML = "";
        return true;
        }
    else{
        warnings[1].innerHTML = "*输入格式错误，请输入正确的中国电话号码!";
        data2[1].value="";
        return false;
    }
}
//3.验证邮箱
function checkEmail(){
    let regemail=/^[A-Za-z0-9\u4e00-\u9fa5._%+-]+@(?!.*\.\..*)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regemail.test(data2[2].value)){
        warnings[2].innerHTML = "";
        return true;
        }
    else{
        warnings[2].innerHTML = "*邮箱格式有误，请重新输入!";
        data2[2].value="";
        return false;
    }
}
//4.验证密码格式
function checkPwd(){
    let regpwd=/^[a-zA-Z0-9]{6,16}$/;
    if(regpwd.test(data2[3].value)){
        warnings[3].innerHTML = "";
        return true;       
    }

    else{
        warnings[3].innerHTML = "*只能输入字母或数字，且长度为6-16!";
        data2[3].value="";
        return false;
    }
}
//5.再次验证密码
function checkRepwd(){
    if(data2[4].value == data2[3].value){
        warnings[4].innerHTML = "";
        return true;
        }
    else{
        warnings[4].innerHTML = "*两次密码不一致，请重新输入";
        data2[4].value="";
        return false;
    }
}
//6.注册成功
let register = document.getElementsByClassName('register');
register[0].onclick =()=>{
    if( checkName() && checkTel() && checkEmail() && checkPwd() && checkRepwd() ){
        alert("注册成功！");
        localStorage.setItem("userName",data2[0].value);
        localStorage.setItem("userPwd",data2[3].value);
    }else
        alert("注册失败，请正确填完所有信息！");
}
//登录页面
//验证登录是否成功
let login = document.getElementsByClassName('login');
login[0].onclick = ()=>{
    let name = localStorage.getItem("userName");
    let password = localStorage.getItem("userPwd");
    let data1 = document.getElementsByClassName('data1');
    let text = document.getElementsByClassName('text');
    if( data1[0].value == name && data1[1].value == password){
        text[0].innerHTML = "";
        alert("登陆成功");
    }else
        text[0].innerHTML = "*用户名或密码输入错误！";
}