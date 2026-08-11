class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let max = 0
       let map = new Map()
        let l = 0
        let maxelem = 0
       for(let i = 0 ;i<s.length;i++){
        let count = (map.get(s[i])??0)+1
        map.set(s[i],count)
        maxelem = Math.max(maxelem,count)
        while(i-l+1-maxelem>k){
          map.set(s[l], map.get(s[l]) - 1);
          l++
        }
        max = Math.max(max,  i-l + 1);
       }
       return max

    }
}
