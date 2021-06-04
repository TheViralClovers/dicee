var result;

var player1Roll = Math.floor(Math.random() * 6) + 1;
var player2Roll = Math.floor(Math.random() * 6) + 1;

console.log(player1Roll,player2Roll);

document.querySelector("img.img1").setAttribute("src" ,"images/dice"+player1Roll+".png");
document.querySelector("img.img2").setAttribute("src" ,"images/dice"+player2Roll+".png");

if(player1Roll > player2Roll) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins";
} else if(player2Roll > player1Roll) {
    document.querySelector("h1").innerText = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1").innerText = "Draw";
}