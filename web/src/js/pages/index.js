define(["mui"], (mui) => {
    let listBox = document.querySelector(".list");

    function init() {
        mui.init();
        getData(); //调用
        addEvent(); //调用
    }

    function getData() {
        mui.ajax("api/list", {
            success(rs) {
                render(rs.data)
            }
        })
    }

    function render(data) {
        listBox.innerHTML = data.map(item => {
            return ` <li>
            <span>${item.title}</span>
            <span>￥${item.money}</span>
        </li>`
        }).join('')
    }

    function addEvent() {
        const addBtn = document.querySelector(".add");
        addBtn.addEventListener("tap", function() {
            location.href = "add.html";
        })
    }
    init();
})