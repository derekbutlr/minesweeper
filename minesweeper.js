document.addEventListener('DOMContentLoaded', startGame)
// Define your `board` object here!
var board = {
    cells: [
        {
            row: 0,
            col: 0,
            isMine: true,
            isMarked: false,
            hidden: true,
            surroundingMines: 0
        },
        {
            row: 0,
            col: 1,
            isMine: false,
            isMarked: false,
            hidden: true,
            surroundingMines: 0
        },
        {
            row: 1,
            col: 0,
            isMine: false,
            isMarked: false,
            hidden: true,
            surroundingMines: 0
        },
        {
            row: 1,
            col: 1,
            isMine: false,
            isMarked: false,
            hidden: true,
            surroundingMines: 0
        }
    ]
}
function startGame() {
    for (var i = 0; i < board.cells.length; i++) {
        var cell = board.cells[i]
        cell.surroundingMines = countSurroundingMines(cell)
    }
    lib.initBoard()
}
document.addEventListener("click", checkForWin)
document.addEventListener("contextmenu", checkForWin)
function checkForWin () {
    var imTheWinner = true
    for (var i = 0; i < board.cells.length; i++) {
        var cell = board.cells[i]
        if (cell.isMine == true && cell.isMarked == false) {
            imTheWinner = false
        }
    }
    if (imTheWinner) {
        alert("I'm the winner")
    }
}
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(cell) {
    var count = 0
    var surrounding = lib.getSurroundingCells(cell.row, cell.col)
    for (var i = 0; i < surrounding.length; i++) {
        var surroundingCell = surrounding[i]
        if (surroundingCell.isMine == true) {
            count++
        }
    }
    return count
}