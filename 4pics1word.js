var width = 4;

var col = 0;
var row = 0;

var gameOver = false;
var word = "BALL";

window.onload = function(){
    initialize();
}

function initialize(){

    for (let c = 0; c < width; c++){
        let tile = document.createElement("span");
        tile.id = c.toString() + "-";
        tile.classList.add("tile");
        tile.innerText = "";
        document.getElementById("board").appendChild(tile);
    }

    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        if("KeyA" <= e.code && e.code <= "KeyZ"){
            if(col < width){
                let currTile = document.getElementById(col.toString() + '-');
                if(currTile.innerText == ""){
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if(e.code == "Backspace"){
            if(0 < col && col <= width){
                col -= 1;
            }
            let currTile = document.getElementById(col.toString() + '-');
            currTile.innerText = "";
        }
        else if (e.code == "Enter"){
            update();
        }
        if (!gameOver && col == width){
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}

