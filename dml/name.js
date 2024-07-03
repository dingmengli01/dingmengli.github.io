// 尝试从localStorage中获取用户名  
var username = localStorage.getItem("username");  
  
// 如果用户名存在且长度大于0  
if (username != null && username.length > 0) {  

  // 尝试获取登录表单（但这里有一个潜在的问题，querySelector只返回第一个匹配的元素）  
  var btns = document.querySelector(".login_form");  

  // 如果.login_form是一个表单（不是元素集合），下面的循环将不会执行，因为btns不是数组  
  // 如果.login_form实际上应该是一个类，用于多个元素，应该使用querySelectorAll  
  for (var i = 0; i < btns.length; i++) {  
    btns[i].style.display = 'none'; // 这行代码在btns不是NodeList时不会执行  
  }  

  // 显示注销按钮  
  document.querySelector('.logout').style.display = 'block';  

  // 显示已登录的用户名  
  document.querySelector(".logged-user").innerHTML = username;  
}  

// 获取注销按钮并添加点击事件监听器  
var btn = document.querySelector('.logout');  
btn.addEventListener('click', logout); // 注意：这里假设页面上只有一个.logout元素  

// 定义注销函数  
function logout() {  
  // 从localStorage中移除用户名  
  localStorage.removeItem('username');  

  // 重新加载页面  
  location.reload();  
}  