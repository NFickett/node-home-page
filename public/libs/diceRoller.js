
var turn = 0;
var playerScore = 0;
var enemyScore = 0 ;

function rollDice(){
    document.getElementById("taPlayerDie1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taPlayerDie2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taPlayerDie3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taPlayerDie4").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taPlayerDie5").value = Math.floor(Math.random()*6) + 1;
    //This will add the rolled total for the player
    document.getElementById("playerTotal").value = parseInt(document.getElementById("taPlayerDie1").value) +
    parseInt(document.getElementById("taPlayerDie2").value) +
    parseInt(document.getElementById("taPlayerDie3").value) +
    parseInt(document.getElementById("taPlayerDie4").value) +
    parseInt(document.getElementById("taPlayerDie5").value);
    //these will be called every turn to check for win and turn count
    checkWin()
    turnCount()
    document.getElementById("roll").focus();
}
//same as playerRoll, minus the game logic
function enemyRoll(){
    document.getElementById("taEnemyDie1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taEnemyDie2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taEnemyDie3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taEnemyDie4").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("taEnemyDie5").value = Math.floor(Math.random()*6) + 1;

    document.getElementById("enemyTotal").value = parseInt(document.getElementById("taEnemyDie1").value) +
    parseInt(document.getElementById("taEnemyDie2").value) +
    parseInt(document.getElementById("taEnemyDie3").value) +
    parseInt(document.getElementById("taEnemyDie4").value) +
    parseInt(document.getElementById("taEnemyDie5").value);
}

function turnCount(){
    turn+=1;
    document.getElementById("turnCount").value = turn;
    if(turn == 4){
        window.alert("You Lose");
        enemyScore +=1;
        document.getElementById("enemyScore").value = enemyScore;
        turn = 0;
        enemyRoll();
        rollDice();
    }
}

function checkWin(){
    if(document.getElementById("playerTotal").value > document.getElementById("enemyTotal").value){
        document.getElementById("victory").style="display: block";
    }
    else{
        document.getElementById("victory").style="display: none"
    }
}

function claimVictory(){
    window.alert("You Win");
    playerScore += 1;
    document.getElementById("playerScore").value = playerScore;
    turn = 0;
    enemyRoll();
    rollDice();
}