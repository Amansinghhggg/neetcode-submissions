class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      
       for(let i = 0 ; i<s2.length;i++){
        let map = new Map
        for(let j =0;j<s1.length;j++){
          map.set(s1[j],(map.get(s1[j])??0)+1)
        }
        let l = i
        let r = i+s1.length
        let matched = 0
        while(l<r){
          if(!map.has(s2[l])) break
          if(map.get(s2[l])<1) break
          map.set(s2[l],(map.get(s2[l]))-1)
          matched++
          l++
          if(matched===s1.length) return true
        }
       }
       return false
    }
}
