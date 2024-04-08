class Board {
  constructor(board) {
    this.board = board
    this.size = this.board[0].length - 1
    this.paths = 0
    this.visits = []
  }

  test(nextRow,nextCol,prev) {
    this.board.togglePiece(nextRow,nextCol)
    this.move(nextRow,nextCol,prev)
  }

  move(row,col,prev) {
    this.visits.push([row,col])

    //set its squares val to false so that we can go back to that square later
    if(row === this.size && col === this.size) {
      this.visits.push(prev)
      this.paths++
      this.board[row][col] = false
      return
    }
    //right check that move is possible and if its been visited (for each direction below)
    if(col < this.size && !this.board[row][col + 1]) this.test(row,col+1,[row,col]);
    //if we are back to the start from the first move right return two times the path number (perfect square cuts operations in half)
    if(row === 0 && col === 0) return this.paths * 2;
    //down
    if(row < this.size && !this.board[row + 1][col]) this.test(row + 1,col,[row,col]);
    //left
    if(col - 1 >= 0 && !this.board[row][col - 1]) this.test(row,col-1,[row,col]);
    //up
    if(row - 1 >= 0 && !this.board[row - 1][col]) this.test(row-1,col,[row,col]);
    this.board[row][col] = false
  }
}

function makeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

export default function nPaths(size) {
  if(size === 1) return 1
  const board = new Board(makeBoard(size))
  board.move(0,0) 
  return board.visits
}

nPaths(3)

