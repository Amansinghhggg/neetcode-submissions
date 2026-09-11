class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let map = new Map()
        for(let i = 0 ;i<strs.length;i++){
            let sort = strs[i].split("").sort().join("")
            if(!map.has(sort)) map.set(sort,[])
        }
         for(let i = 0 ;i<strs.length;i++){
            let sort = strs[i].split("").sort().join("")
            map.get(sort).push(strs[i])
        }
        return Array.from(map.values())
    }
}
