class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let i=0;i<strs.length;i++){
            let arr = strs[i].split("").sort().join("")
            if(!map.has(arr)) map.set(arr,[])
            map.get(arr).push(strs[i])
        }
        return Array.from(map.values())
    }
}
