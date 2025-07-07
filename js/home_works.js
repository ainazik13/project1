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

let position=0
const step=2
const maxPosition=parentBlock.clientWidth-childBlock.clientWidth

function moveRight(){
    if (position<maxPosition){
        position+=step
        childBlock.style.left=position+"px"
        setTimeout(moveRight,10)
    }else{
        console.log("STOP!")
    }
}

moveRight()