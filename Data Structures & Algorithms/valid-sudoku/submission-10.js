class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
          let row = []
    let col = []
    let box = []
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let val = board[i][j]
            if(val === "."){
                continue
            }
            if(
                row.includes(`row [${i}]-val=${val}`)||
                col.includes(`col [${j}]-val=${val}`)||
                box.includes(`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`)
            ){
                return false
            }
                row.push(`row [${i}]-val=${val}`)
                col.push(`col [${j}]-val=${val}`)
                box.push(`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`)
        }
    }
    return true
}
}
