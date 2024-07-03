// 初始化分数和题目列表  
var score = 0;  
var quiz_list = [];  
  
// 获取所有下拉菜单项（虽然这里实际上并未使用下拉菜单，可能是遗留或误用）  
btns = document.querySelector('.dropdown-menu').querySelectorAll('li');  
// 为每个按钮添加点击事件监听器，但实际上应该是为了展示题目  
for (var i = 0; i < btns.length; i++) {  
    btns[i].addEventListener('click', showQuiz);  
}  
  
// 获取提交按钮并添加点击事件监听器  
submit_btn = document.querySelector('.submit');  
submit_btn.addEventListener('click', () => {  
    // 遍历表格中的每一行，检查用户输入的答案是否与正确答案匹配  
    var trs = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr');  
    for (var i = 0; i < trs.length; i++) {  
        var input = trs[i].querySelector('input');  
        // 注意：这里eval的使用可能带来安全风险，且处理浮点数时精度可能有问题  
        if (Number(input.value) == Number(eval(quiz_list[i]).toFixed(2))) {  
            score++;  
        }  
    }  
    // 显示分数  
    showScore(score);  
    // 隐藏题目部分，显示提交后的内容  
    var node = document.querySelector("#quiz");  
    node.style.display = 'none';  
    node = document.querySelector('#post');  
    node.style.display = 'block';  
});  
  
// 展示题目的函数  
function showQuiz(event) {  
    // 重置题目列表和分数  
    quiz_list = [];  
    score = 0;  
    // 获取点击的题目难度（这里实际上是按钮的文本，但逻辑上可能不是最佳实践）  
    var difficulty = event.target.innerHTML;  
    console.log('我点啦, 点的是谁呢？', difficulty);  
    // 生成5个题目  
    for (var i = 0; i < 5; i++) {  
        quiz_list.push(generateQuiz());  
    }  
    // 更新表格中的题目  
    var ele = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr');  
    for (var i = 0; i < ele.length; i++) {  
        var td = ele[i].querySelector('td');  
        td.innerText = quiz_list[i];  
    }  
    // 隐藏提交后的内容，显示题目部分  
    var node = document.querySelector("#post");  
    node.style.display = 'none';  
    node = document.querySelector('#quiz');  
    node.style.display = 'block';  
}  
  
// 生成单个题目的函数  
function generateQuiz() {  
    var quiz = [];  
    for (var i = 0; i < 5; i++) {  
        if (i % 2 == 0) {  
            // 生成一个0到50之间的随机数（包括0和50）  
            quiz.push(Math.round(Math.random() * 50));  
        } else {  
            // 生成一个随机的运算符  
            quiz.push(generateOp());  
        }  
    }  
    // 将数组中的数字和运算符连接成一个字符串，作为题目  
    return quiz.join('');  
}  
  
// 生成随机运算符的函数  
function generateOp() {  
    var ops = ['+', '-', '*', '/'];  
    return ops[Math.floor(Math.random() * 4)];  
}  
  
// 显示分数的函数  
function showScore(score) {  
    var ele = document.querySelector('.ggscore');  
    ele.innerText = score;  
}  
  
// 检查一个数是否为整数的函数（虽然在这段代码中未被直接使用）  
function isInteger(num) {  
    return Math.floor(num) === num;  
}