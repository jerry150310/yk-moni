define(["mui"], (mui) => {
    function init() {
        mui.init(); //初始化mui
        addEvent(); //调用
    }

    function addEvent() {
        mui("#keyword").on("tap", "p", inputer);
    };

    function inputer() {
        let inpBox = document.getElementById("inpBox");
        let cName = this.className;
        let v = this.innerHTML;
        let txt = inpBox.innerHTML;
        if (cName === "del") {
            inpBox.innerHTML = txt.slice(0, -1);
            if (inpBox.innerHTML == "") {
                inpBox.innerHTML = "0.00";
            }
        } else if (cName === "done") {
            alert("完成添加")
        } else {
            if (txt === "0.00") {
                inpBox.innerHTML = "";
            }
            //判断如果点击的是点
            if (v === ".") {
                if (!txt.includes(".")) {
                    inpBox.innerHTML += v;
                }
            } else {
                let newV = inpBox.innerHTML;
                if (newV.slice(newV.indexOf(".") + 1).length >= 2) {
                    return;
                }
                inpBox.innerHTML += v;
            }
        }
    }
    init();
})