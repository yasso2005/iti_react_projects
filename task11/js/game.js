/*var playeronechoice="rock";
var playerchoicetwo="scissors";*/

//var playeronechoice="rock";
//var playerchoicetwo="paper";
/*var playeronechoice="rock";
var playerchoicetwo="scissors";*/

var playeronechoice="scissors";
var playerchoicetwo="scissors";
 
if(playeronechoice=="rock"){
    if(playerchoicetwo=="rock"){
        console.log (`it is a tie`);
    } else if (playerchoicetwo=="paper"){
        console.log(`playerchoicetwo wins`);
    } else {
        console.log (`playeronechoice wins`);
    }
} else if(playeronechoice=="scissors"){
    if(playerchoicetwo=="scissors"){
        console.log (`it is a tie`);
    } else if (playerchoicetwo=="rock"){
        console.log(`playerchoicetwo wins`);
    } else {
        console.log (`playeronechoice wins`);
    }
}else {
    if(playerchoicetwo=="paper"){
        console.log (`it is a tie`);
    } else if (playerchoicetwo=="scissors"){
        console.log(`playerchoicetwo wins`);
    } else {
        console.log (`playeronechoice wins`);
    }
}
