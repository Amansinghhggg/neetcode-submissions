class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
          if(s.length===0) return 0
            let set = new Set()
            let max = 1

                for(let i=0;i<s.length-1;i++){
                    let newlen = 1
                    set.add(s[i])
                    for(let j=i+1;j<s.length;j++){
                        if(set.has(s[j])) break
                        set.add(s[j])
                        newlen++
                    }
                    max = Math.max(max,newlen)
                    set = new Set()
                }
               
                return max
    }
}
