class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)  return false
      let map = new Map()
      for(let ch of s){
          map.set(ch,(map.get(ch)|0)+1)
      }
      for(let c of t){
        if(!map.get(c)) return false
        map.set(c,(map.get(c)|0)-1)
       
      }
      return true
    }
}
