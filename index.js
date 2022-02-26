// code your solution here
function superbowlWin(array){
    let outcome = array.find( array => array.result === "W");
    return outcome ? outcome.year : undefined;
}

