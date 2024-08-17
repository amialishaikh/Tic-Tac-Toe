// let boxes = document.querySelectorAll (".box");
// let resetBtn = document.querySelector ("#reset-btn");
// let newGameBtn = document.querySelector ("#new-btn");
// let msgContainer = document.querySelector (".msg-container");
// let msg = document.querySelector ('#msg');
// let turn0 = true; //playerX, Player0

// const winpatterns = [
//     [0,1,2]
//     [0,3,6]
//     [0,4,8]
//     [1,4,7]
//     [2,5,8]
//     [2,4,6]
//     [3,4,5]
//     [6,7,8]
// ]

// boxes.forEach((box) => {
//     box.addeventlistener ('click', ()=> {
//         console.log ('box was clicked');
//         if (turn0) {
//             //Player0
//             box.innerText= "0";
//             turn0 = false;
//         } else{
//             // playerX
//             box.innerText='X';
//             turn0=true;
//         }
//         box.disabled = true;
//         checkWinner();
//     })
// });

// const showWinner = (winner) => {
//     msg.innerText = ("congratulations , Winner is ${winner}");
//     msgContainer.classList.remove ("hide");
// }

// const checkWinner = ()=>{
//     for (let pattern of winpatterns){
//         let pos1Val = boxes[pattern[0]].innerText
//         let pos2Val = boxes[pattern[1]].innerText
//         let pos3Val = boxes[pattern[2]].innerText

//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val=== pos2Val && pos2Val === pos3Val){
//                 console.log("winner", pos1Val);
//                 showWinner(pos1Val);
//             }
//         }    
//     }
// };

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // Player X is true, Player O is false

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '') {
            if (turn0) {
                box.innerText = 'O';
                turn0 = false;
            } else {
                box.innerText = 'X';
                turn0 = true;
            }
            checkWinner();
        }
    });
});

// Add click event listener to reset button
resetBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.classList.remove('disabled'); // Remove the disabled class
    });
    msgContainer.classList.add('hide');
    turn0 = true; // Reset turn to Player X
});

// Add click event listener to new game button
newGameBtn.addEventListener('click', () => {
    resetBtn.click(); // Trigger reset button functionality
});

// Show winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
}

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let pos1Val = boxes[a].innerText;
        let pos2Val = boxes[b].innerText;
        let pos3Val = boxes[c].innerText;

        if (pos1Val && pos1Val === pos2Val && pos1Val === pos3Val) {
            showWinner(pos1Val);
            return;
        }
    }
    // Check for a draw
    if ([...boxes].every(box => box.innerText !== '')) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove('hide');
    }
};
