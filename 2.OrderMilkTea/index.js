var formElement = document.getElementById('myForm');
formElement.addEventListener('submit', function (e) {
    //防止表单提交事件被触发，从而阻止浏览器默认的提交操作。
    e.preventDefault();  
    var formData = new FormData(formElement);
    const formJson = Object.fromEntries(formData.entries());
    for (var pair of formData.entries()) {
        console.log(pair);
    }
    console.log(formData);
    console.log(formJson);
    // console.log(formJson);
    const text = `
        【您的订单已经生成】
        ------------------------
        奶茶口味：${formJson.drink}
        数量：${formJson.num}
        杯型：${formJson.size}
        甜度：${formJson.sugar}
        免费小料：${formJson.free} 
        加价小料：${formJson.material}
        是否加冰：${formJson.ice}
        是否去茶底：${formJson.tea}
        地址：${formJson.address}
        手机号：${formJson.tel}
        期待送达时间：${formJson.time}
        备注：${formJson.comment}
        支付方式：${formJson.pay}
    `;
    alert(text);
});



document.getElementById("back").addEventListener("click", function () {
    topFunction();
});

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
