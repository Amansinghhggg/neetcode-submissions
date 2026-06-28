class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         let res = []
    let set = new Set()
    for(let ch of strs){
      set.add(ch.split("").sort().join(""))
    }
   set.forEach((val)=>{
    let append = []
      for(let ch of strs){
        if(val === ch.split("").sort().join("")){
          append.push(ch)
        }
        
      }
      res.push(append)
   })
   return res
    }
}
