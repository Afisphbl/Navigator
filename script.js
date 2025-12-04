const lists = document.querySelectorAll(".li");
const op = document.querySelector(".op");

lists.forEach((list) => {
    list.addEventListener("click", () => {
        lists.forEach((list) => {
            list.classList.remove('active')
        })
        list.classList.add('active')
        let postionX = list.offsetLeft;
        console.log(postionX)
        op.style.left = postionX + "px";
    });
});