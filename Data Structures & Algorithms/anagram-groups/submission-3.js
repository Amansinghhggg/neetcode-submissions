class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let main = new Set() 
        let res = []
        for(let i = 0 ;i<strs.length;i++){
            main.add(strs[i].split("").sort().join(""))
        }
        main.forEach((val)=>{
            let a = []
            for(let ch of strs){
            if(val===(ch.split("").sort().join(""))) {
                a.push(ch)
            }
         }
         res.push(a)
        })
        return res

    }
}
