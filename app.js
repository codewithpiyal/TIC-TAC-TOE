let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_btn");
let restart = document.querySelector("#restart_btn");
let msg = document.querySelector(".msg_container");
let msgText = document.getElementById("msg");

let ternSecond = true;
let ternFirst = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {

    ternFirst = true;
    enabledBoxes();
    msg.classList.add("hide");
}

boxes.forEach((cElem) => {
    cElem.addEventListener('click', () => {

        if (ternFirst) {
            cElem.innerText = "×";
            ternFirst = false;
        } else {
            cElem.innerText = "O";
            ternFirst = true;
        }
        cElem.disabled = true;

        checkWinner();
    })
})
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msgText.innerText = `Congratulation! winner is ${winner}`;
    msg.classList.remove("hide");
    disabledBoxes()
}
const checkWinner = () => {
    for (let pattern of winPattern) {

        let combination1 = boxes[pattern[0]].innerText;

        let combination2 = boxes[pattern[1]].innerText;

        let combination3 = boxes[pattern[2]].innerText;

        if (combination1 != "" && combination2 != "" && combination3 != "") {
            if (combination1 == combination2 && combination2 == combination3) {
                console.log("Got winner");
                showWinner(combination1);
            }
        }

    }
}

restart.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);