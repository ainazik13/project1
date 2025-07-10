const gmailInput =document.getElementById("gmail_input")
const gmailButton =document.getElementById("gmail_button")
const gmailResult =document.getElementById("gmail_result")


const regExp= /^(?=[a-zA-Z0-9._%+-]{3,})[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/


gmailButton.onclick=()=>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML="OK"
        gmailResult.style.color="green"
    }else {
        gmailResult.innerHTML="ERROR"
        gmailResult.style.color="red"
    }

}

const parentBlock=document.querySelector('.parent_block')
const childBlock=document.querySelector('.child_block')


let positionX=0
let positionY=0
const step=2
const maxX=parentBlock.clientWidth-childBlock.clientWidth
const maxY=parentBlock.clientHeight-childBlock.clientHeight



let direction = "right"

function move() {
  if (direction === "right") {
    if (positionX < maxX) {
      positionX += step;
    } else {
      direction = "down";
    }
  }

  if (direction === "down") {
    if (positionY < maxY) {
      positionY += step;
    } else {
      direction = "left";
    }
  }

  if (direction === "left") {
    if (positionX > 0) {
      positionX -= step;
    } else {
      direction = "up";
    }
  }

  if (direction === "up") {
    if (positionY > 0) {
      positionY -= step;
    } else {
      return;
    }
  }

  childBlock.style.left = positionX + "px";
  childBlock.style.top = positionY + "px";

  setTimeout(move, 10);
}

move()

const seconds = document.getElementById('seconds')
const btnStart=document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')

let count=0
let intervalId=null

function delayedDisplay(value){
  setTimeout(()=>{
    seconds.textContent= value
  },0)
}

btnStart.addEventListener('click',()=>{
  if (intervalId===null){
    intervalId=setInterval(()=>{
      count++
      delayedDisplay(count)
    },1000)
  }
})

//Ускоряется при каждом нажатий на start

// btnStart.addEventListener('click',()=>{
//   intervalId=setInterval(()=> {
//     count++
//     seconds.textContent= count
//   },1000)
// })

btnStop.addEventListener('click',()=>{
  clearInterval(intervalId)
  intervalId=null
})

btnReset.addEventListener('click',()=>{
  clearInterval(intervalId)
  intervalId=null
  count=0
  delayedDisplay(count)
})


