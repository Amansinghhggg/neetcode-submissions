class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let row = {}
    let col = {}
    let box = {}
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let val = board[i][j]
            if(val === "."){
                continue
            }
            if(
                row[`row [${i}]-val=${val}`]||
                col[`col [${j}]-val=${val}`]||
                box[`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`]
            ){
                return false
            }
                row[`row [${i}]-val=${val}`]=true
                col[`col [${j}]-val=${val}`]=true
                box[`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`]=true
        }
    }
    return true
}
}
