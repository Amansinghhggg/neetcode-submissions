class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      let set = new Set()
        for(let i=0;i<9;i++){
         for(let j=0;j<9;j++){
            if(board[i][j]===".") continue
            if(set.has(board[i][j])) return false
            set.add(board[i][j])
         }
         set.clear()
        }
        for(let k=0;k<9;k++){
            for(let l=0;l<9;l++){
            if(board[l][k]===".") continue
            if(set.has(board[l][k])) return false
            set.add(board[l][k])
            }
            set.clear()
        }
        for(let row=0;row<9;row +=3){
            for(let col=0;col<9;col +=3){
                 set.clear()
                for(let i=row;i<row+3;i++){
                    for(let j=col;j<col+3;j++){
                        if(board[i][j]===".") continue
                        if(set.has(board[i][j])) return false
                        set.add(board[i][j])
                    }
                   
                }
            }
        }

        return true
        }
    }
