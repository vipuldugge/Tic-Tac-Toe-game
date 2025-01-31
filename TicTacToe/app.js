let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBtn");
let msg = document.querySelector(".msgContainer");

let turnO = true;//player O's turn

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        //alert(`button ${index+1} clicked`);
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){

        // console.log(pattern);
        // console.log(pattern[0]);
        // console.log(boxes[pattern[0]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                //alert("winner is "+pos1Val);
                msg.innerText="winner is "+pos1Val;
                msg.classList.remove("hide");
            }
        }
    }
}

resetBtn.addEventListener("click",()=>{
    boxes.innerText="";
});