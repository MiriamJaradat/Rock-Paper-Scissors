var game=['rock', 'paper', 'scissors']


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  /*console.log(getRandomInt(3));*/

var user = game[getRandomInt(3)]
var computer = game[getRandomInt(3)]

console.log('User choice:',user)
console.log('Computer choice:',computer)

function play(){
    var res=''
    if (user=='rock'){
        if (computer=='rock'){
            res='Game result: It\'s a tie'
        } else {
            if (computer=='paper'){
                res='Game result: Computer wins'
            } else {
                res='Game result: User wins'
            }  
        }     
    } else {
        if(user=='paper'){
            if (computer=='rock'){
                res='Game result: User wins'
            } else {
                if (computer=='paper'){
                    res='Game result: It\'s a tie'
                } else {
                    res='Game result: Computer wins'
                }
            }
        } else {
            if (computer=='rock'){
                res='Game result: Computer wins'
            } else {
                if (computer=='paper'){
                    res='Game result: User wins'
                } else {
                    res='Game result: It\'s a tie'
                }
            }
        }
    }
    return res
}

console.log(play())