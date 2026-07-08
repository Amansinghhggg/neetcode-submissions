class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s= s.toLowerCase()
        let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
        let arr = []
        for(let ch of s){
         if(!alphabet.includes(ch)) continue
         arr.push(ch)
        }
        let l = 0
        let r = arr.length-1
        while(l<r){
            if(arr[l]!==arr[r]) return false
            l++
            r--
        }
        return true
        
    }
}
