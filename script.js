const lists = document.querySelectorAll(".li");
const op = document.querySelector(".op");
const glass = document.querySelector(".glass");


lists.forEach((list) => {
    list.addEventListener("click", () => {
        lists.forEach((list) => {
            list.classList.remove('active')
        })
        list.classList.add('active')
        let postionX = list.offsetLeft;
        op.style.left = postionX + "px";
    });

    list.addEventListener('mousemove', () => {
        let postionX = list.offsetLeft;
        let postionY = list.offsetTop;
        glass.style.left = postionX + "px";
        glass.style.top = postionY + "px";
        glass.classList.add('h')
    })

    list.addEventListener('mouseleave', () => {
        glass.classList.remove('h')
    })
});
