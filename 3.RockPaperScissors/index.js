let start = document.getElementById("start").getElementsByTagName("button")[0];
let prepare = document.getElementById("prepare");

let dialog = document.querySelector("dialog");
 // 显示对话框
function showDialog() {
    dialog.showModal();
}

// 隐藏对话框
function hideDialog() {
  dialog.close();
}