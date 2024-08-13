
let boxes =document.querySelectorAll(".box");
let btnreset =document.querySelector("#reset")
let playerx=false;
let btnnew =document.querySelector("#new-game")
let winnermsg=document.querySelector(".winnera")
let msg=document.querySelector("#cong")
let turn=document.querySelector(".turn")

let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
      if(playerx){
        box.innerText="X";
        playerx = false
        
      }
      else{
        box.innerText="O";
        playerx=true
      }
      box.disabled=true;
      cheakwin()
    })
})


const reset=()=>{
    let playerx=false;
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText=" ";
        winnermsg.classList.add("hide")
    })

}
 

const disabled=() =>{
boxes.forEach((box) =>{
    box.disabled=true;
})
}


const showwinner=(abc)=>{
    winnermsg.classList.remove("hide");
  msg.innerText=`winner is ${abc}`
  disabled();

}

const cheakwin =() =>{
    for(let pattern of win){
    let pos1 =boxes[pattern[0]].innerHTML;
    let pos2=boxes[pattern[1]].innerHTML;
    let pos3=boxes[pattern[2]].innerHTML;
    // console.log(pos1);
    // console.log(pos2);
    // console.log(pos3);

    if(pos1 !=" " && pos2 !=" " && pos3 !=" "){
        if(pos1==pos2 && pos2==pos3){
            showwinner(pos1);
        }
    }

    }
}

btnnew.addEventListener("click",reset);
btnreset.addEventListener("click",reset);