class Solution {
    isAnagram(s, t) {
        if(s.length!==t.length) return false
       let map = new Map()
       for(let ch of s){
         map.set(ch, (map.get(ch) | 0) + 1);       } 
       for(let cn of t){
            if(map.get(cn)<1|!map.has(cn)) return false
            map.set(cn,map.get(cn)-1)
       }
       return true
    }
}
