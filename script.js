let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#winner");
let msgContainer = document.querySelector(".winner-msg");
let button = document.querySelectorAll(".whenClick");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;

    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((a) => {
    a.addEventListener(("click") , () => {
        if(turnO) {
            a.innerText = "O";
            turnO = false;

        } else {
            a.innerText = "X";
            turnO = true;
        }
        a.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Match is Draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const disableboxes = () => {
    for(let box of boxes ){
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , ${winner} `;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }   
    }
}
const buttonClick = () => {
    
    button.classList.add("whenClick");
    
};
newgamebtn.addEventListener("click" , resetGame) ;
resetbtn.addEventListener("click" , resetGame) ;
button.addEventListener("click" , buttonClick);
