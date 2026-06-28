class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams(strs) {
        let map = new Map()
    for(let chars of strs){
        let sort = chars.split("").sort().join("")
        if(!map.has(sort)){
            map.set(sort,[])
        }
        map.get(sort).push(chars)
    }
    return Array.from(map.values())
 }
}
