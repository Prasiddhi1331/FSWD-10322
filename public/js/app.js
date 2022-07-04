//could also use nth child selector

let user_score = 0;
let computer_score = 0;

const user_board = document.querySelector('div.scoreboard .user')
const computer_board = document.querySelector('div.scoreboard .comp')

const message_box = document.querySelector("div.message")

console.log(user_score,computer_score)

const_rock = document.querySelector("#rock")
const_paper = document.querySelector("#paper")
const_scissors = document.querySelector("#scissors")

//variable choices
const choices =["rock","paper","scissors"]

//game functions

const generateComputerResponse = ()=>{
  const index = ((Math.random()*10).toFixed(0))%3
  return choices[index]
}

const result = (winner, userResponse, computerResponse)=>{
  switch(winner){
    case "user":
      message_box.innerHTML= 'User Wins'
      user_board.innerHTML=++user_score
      /*document.querySelector('#${userResponse}').style="border-color:green"*/
      break
    case "computer":
      message_box.innerHTML='Computer Wins'
      computer_board.innerHTML=++computer_score
      break
    default:
      window.alert("something went wrong") 
  }
}

const playGame = (userResponse)=>{
  const computerResponse = generateComputerResponse()
  console.log(userResponse===computerResponse)
  if(userResponse===computerResponse) return console.log("Tie!!")
  switch(userResponse){
    case "rock":
      switch(computerResponse){
        case "paper":
          return result("computer",userResponse,computerResponse)
          break
        case "scissors":
          return result("user",userResponse,computerResponse)
          break
      }
      break;
      case "paper":
        switch(computerResponse){
          case "rock":
            return result("user",userResponse,computerResponse)
            break
          case "scissors":
            return result("computer",userResponse,computerResponse)
            break
        }
        break;
      case "scissors":
        switch(computerResponse){
          case "rock":
            return result("computer",userResponse,computerResponse)
            break
          case "paper":
            return result("user",userResponse,computerResponse)
            break
        }
        break;
        default:
          window.alert('invalid response')
  }
}

// add event listeners
rock.addEventListener('click',(e)=>playGame(e.target.id))
paper.addEventListener('click',(e)=>playGame(e.target.id))
scissors.addEventListener('click',(e)=>playGame(e.target.id))
