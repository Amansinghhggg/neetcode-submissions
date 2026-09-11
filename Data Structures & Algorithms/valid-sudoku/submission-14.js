class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set()
        //row
        for(let i=0;i<board.length;i++){
            for(let j =0;j<board.length;j++){
                if(board[i][j]===".") continue
                if(set.has(board[i][j])) return false
                set.add(board[i][j])
            }
            set.clear()
        }
        //column
        for(let i=0;i<board.length;i++){
            for(let j =0;j<board.length;j++){
                if(board[j][i]===".") continue
                if(set.has(board[j][i])) return false
                set.add(board[j][i])
            }
            set.clear()
        }
         // boxes
         for(let i=0;i<board.length;i+=3){
            for(let j=0;j<board.length;j+=3){
                for(let k=i;k<i+3;k++){
                    for(let l=j;l<j+3;l++){
                        if(board[k][l]===".") continue
                         if(set.has(board[k][l])) return false
                         set.add(board[k][l])
                    }
                }
                set.clear()
            }
         }
         return true
    }
}
