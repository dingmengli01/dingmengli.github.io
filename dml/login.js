// 从localStorage中获取用户列表、密码列表和分数列表（尽管分数列表在代码中未使用）  
var user_list = getArr("user_list");  
var password_list = getArr("password_list");  
var score_list = getArr("score_list"); // 分数列表在代码中未使用  
  
// 获取登录按钮并添加点击事件监听器  
var login_btn = document.querySelector('#sign_in');  
login_btn.addEventListener('click', login);  
  
// 定义登录函数  
function login() {  
    // 获取用户名和密码输入  
    var ele = document.querySelector("#username");  
    var input_username = ele.value;  
    ele = document.querySelector("#password");  
    var input_password = ele.value;  
  
    // 检查用户名是否存在  
    if (user_list.indexOf(input_username) != -1) {  
        // 获取密码索引并比较密码  
        var index = user_list.indexOf(input_username);  
        var target_password = password_list[index];  
        if (input_password == target_password) {  
            // 登录成功，保存用户名到localStorage并重定向页面  
            localStorage.setItem("username", input_username);  
            alert("登录成功");  
            location.reload(); // 注意：这里重新加载页面可能不是最佳实践，因为用户可能会看到页面重新加载的过程  
        } else {  
            // 密码错误  
            alert("登录失败，密码不对");  
        }  
    } else {  
        // 用户不存在  
        alert('用户不存在， 请注册！')  
    }  
}  
  
// 获取注册按钮并添加点击事件监听器  
var regist_btn = document.querySelector('#sign_up');  
regist_btn.addEventListener('click', regist);  
  
// 定义注册函数  
function regist() {  
    // 获取用户名和密码输入  
    var ele = document.querySelector("#username");  
    var input_username = ele.value;  
    if (input_username == "" || input_username == null) {  
        // 用户名未输入  
        alert("请输入你的用户名!");  
        return;  
    }  
  
    ele = document.querySelector("#password");  
    var input_password = ele.value;  
    if (input_password == "" || input_password == null) {  
        // 密码未输入  
        alert("请输入你的密码!");  
        return;  
    }  
  
    // 检查用户名是否已存在  
    if (user_list.indexOf(input_username) == -1) {  
        // 用户名不存在，注册新用户  
        user_list.push(input_username);  
        password_list.push(input_password);  
        saveArr("user_list", user_list); // 保存用户列表  
        saveArr("password_list", password_list); // 保存密码列表  
        alert("注册成功");  
    } else {  
        // 用户名已存在  
        alert('用户已存在， 请登录！')  
    }  
}  
  
// 定义一个函数来保存数组到localStorage  
function saveArr(item, arr) {  
    var arrStr = JSON.stringify(arr); // 将数组转换为JSON字符串  
    localStorage.setItem(item, arrStr); // 保存到localStorage  
}  
  
// 定义一个函数来从localStorage获取数组  
function getArr(item) {  
    var json_str = localStorage.getItem(item); // 从localStorage获取JSON字符串  
    return JSON.parse(json_str) || []; // 尝试解析JSON字符串，如果失败则返回空数组  
}