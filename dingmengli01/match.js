var matchButton = document.getElementById('matchButton');   
// 为按钮添加点击事件监听器  
matchButton.addEventListener('click', function() {  
    // 隐藏按钮上原本的内容，并显示“匹配中”  
    this.textContent = '匹配中'; 
    // 模拟异步操作（例如AJAX请求），完成后更新UI  
    setTimeout(function() {  
        // 假设匹配完成，更新按钮的文本或执行其他逻辑  
        matchButton.textContent = '匹配成功'; 
        // 你也可以在这里更新#result元素来显示匹配结果  
        document.getElementById('result').textContent = '这里是匹配结果';  
    }, 2000);  
});