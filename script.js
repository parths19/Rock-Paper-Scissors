let userSC = 0;
let compSC = 0;
const user = document.querySelector("#user-sc");
const comp = document.querySelector("#comp-sc");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const compchoice = () => {
    const option = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3);
    return option[index];
}
const gameDraw = () => {
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "blue";
    msg.style.color = "white";

}
const showWinner = (userwin) => {
    if (userwin == true) {
        userSC++;
        msg.innerText = "YOU WIN";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        user.innerText = userSC;
    }
    else {
        compSC++;
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        comp.innerText = compSC;
    }

}

const playGame = (choiceid) => {
    const compid = compchoice();
    if (choiceid == compid) {
        gameDraw();
    }
    else {
        let userwin = true;
        if (choiceid == "rock") {
            if (compid == "paper") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }
        else if (choiceid == "paper") {
            if (compid == "scissors") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }
        else {
            if (compid == "rock") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        }
        showWinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        console.log("choice", choiceid);
        playGame(choiceid);
    })

})
