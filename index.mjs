import { knightsMoves } from "./knightstravail.mjs";

knightsMoves([0, 0], [3, 3]);
// [0,0] -> [2,1] -> [3,3] 2 moves
knightsMoves([3, 3], [4, 3]);
// [3,3] -> [1,4] -> [3,5] -> [4,3] 3 moves
knightsMoves([3, 3], [0, 0]);
// [3,3] -> [1,2] -> [0,0] 2 moves
knightsMoves([0, 0], [7, 7]);
// [0,0] -> [2,1] -> [0,2] -> [2,3] -> [4,4] -> [6,5] -> [7,7] 6 moves
