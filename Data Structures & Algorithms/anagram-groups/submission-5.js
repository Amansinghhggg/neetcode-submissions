class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map
        for(let w of strs){
            if(map.has(w.split("").sort().join(""))){                       map.get(w.split("").sort().join("")).push(w)
            }else{
                map.set(w.split("").sort().join(""),[w])
            }
        }
        return[...map.values()]
    }
}
