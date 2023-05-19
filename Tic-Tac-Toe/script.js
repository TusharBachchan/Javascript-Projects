const board = [[-1, -1, -1], 
               [-1, -1, -1], 
               [-1, -1, -1]];
const hm = new Map();
let startVal = 1;
const n = board.length;
const dirArr = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];
for(let i = 0; i < n; i++){
    for(let j = 0; j < n ; j++){
        hm.set(startVal++, "" + i + j );
    }
}
console.log(hm)
const players = ['O', 'X']
let initialState = 1;
function check(player, id){
    // console.log(hm.get(+id)[0])
    let i = +hm.get(+id)[0]
    let j = +hm.get(+id)[1]
    console.log(i, "", j)
    let east = true;
    for(let jj = 0; jj < n; jj++){
        if(board[i][jj] !== player) east = false;
    }
    let southEast = false;
    if( i + j === n - 1){
        southEast = true;
        for(let ii = 0; ii < n; ii++){
            let jj = ii;
            if(board[ii][jj] !== player) southEast = false;
        }
    }
    let northEast = false;
    if(i + j === n - 1){

    }
   
}
for(let i = 1; i <= 9; i++){
  let ele = document.getElementById('' + i)
    // console.dir(document)
  ele.addEventListener("click", function(e){
    let currentPlayer = players[initialState];
    // console.log(currentPlayer)
    e.target.innerText = currentPlayer;
    initialState = 1 - initialState;
    let hasWon = check(currentPlayer, e.target.id)
    hasWon ? alert(`${currentPlayer} wins!`) : null;
  });
}