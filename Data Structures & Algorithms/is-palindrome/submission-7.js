class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /[^a-zA-Z0-9]/g;
        let cleaned = s.replace(regex,"").toLowerCase()
        let l = 0
        let r = cleaned.length-1;
        while(l<r){
            if(cleaned[l]!==cleaned[r]) return false
            l++
            r--
        }
        return true
    }
}
