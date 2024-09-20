let board = new Array(8);

for (let x = 0; x < board.length; x++) {
  board[x] = new Array(8);
}

// Initializing Adjacency List
for (let x = 0; x < board.length; x++) {
  for (let y = 0; y < board[x].length; y++) {
    board[x][y] = [];
    let currPos = board[x][y];

    if (x - 2 >= 0) {
      if (y + 1 < 8) {
        currPos.push([x - 2, y + 1]);
      }
      if (y - 1 >= 0) {
        currPos.push([x - 2, y - 1]);
      }
    }

    if (x - 1 >= 0) {
      if (y + 2 < 8) {
        currPos.push([x - 1, y + 2]);
      }
      if (y - 2 >= 0) {
        currPos.push([x - 1, y - 2]);
      }
    }

    if (x + 2 < 8) {
      if (y + 1 < 8) {
        currPos.push([x + 2, y + 1]);
      }
      if (y - 1 >= 0) {
        currPos.push([x + 2, y - 1]);
      }
    }

    if (x + 1 < 8) {
      if (y + 2 < 8) {
        currPos.push([x + 1, y + 2]);
      }
      if (y - 2 >= 0) {
        currPos.push([x + 1, y - 2]);
      }
    }
  }
}

export function knightsMoves(startPos, endPos) {
  let prev = solve(startPos);

  let moves = reconstructPath(startPos, endPos, prev);

  console.log(`You made it in ${moves.length - 1} moves! Here's your path:`);

  for (let move of moves) {
    console.log(move);
  }
}

function solve(startPos) {
  let queue = [];
  queue.push(startPos);

  let visited = new Array(8);
  let prev = new Array(8);

  for (let i = 0; i < 8; i++) {
    visited[i] = new Array(8).fill(false);
    prev[i] = new Array(8).fill(null);
  }

  visited[startPos[0]][startPos[1]] = true;

  while (queue.length) {
    let currPos = queue.shift();
    let possiblePositions = board[currPos[0]][currPos[1]];

    for (let nextPos of possiblePositions) {
      if (!visited[nextPos[0]][nextPos[1]]) {
        queue.push(nextPos);
        visited[nextPos[0]][nextPos[1]] = true;
        prev[nextPos[0]][nextPos[1]] = currPos;
      }
    }
  }

  return prev;
}

function reconstructPath(startPos, endPos, prev) {
  let pathFromEndToStart = [];
  for (let at = endPos; at != null; at = prev[at[0]][at[1]]) {
    pathFromEndToStart.push(at);
  }

  let pathFromStartToEnd = pathFromEndToStart.reverse();

  if (pathFromStartToEnd[0] === startPos) {
    return pathFromStartToEnd;
  }

  return [];
}
