class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            let res = []
            let set = new Set()
            for(let w of strs){
                let word = w.split("").sort().join("")
                set.add(word)
            }
            for(let c of set){
                let addd =[]
                for(let v of strs){
                    if( c == v.split("").sort().join("")){
                         addd.push(v)
                    }else{
                        continue
                    }
            }
            res.push(addd)
        }
        return res
    }   
}
