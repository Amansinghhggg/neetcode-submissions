class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let set = new Set()
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let val = board[i][j]
            if(val === "."){
                continue
            }
            if(
                set.has(`row [${i}]-val=${val}`)||
                set.has(`col [${j}]-val=${val}`)||
                set.has(`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`)
            ){
                return false
            }
            set.add(`row [${i}]-val=${val}`)
            set.add(`col [${j}]-val=${val}`)
            set.add(`box [${Math.floor(i/3)}][${Math.floor(j/3)}]-val=${val}`)
        }
    }
    return true
}
}
