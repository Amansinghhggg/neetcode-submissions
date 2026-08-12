class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map()
        map.set("(",")")
        map.set("{","}")
        map.set("[","]")
        let stack = []
        for(let i = 0 ;i<s.length;i++){
           let char = s[i]
           if(map.has(char)){
            stack.push(char)
           }else{
            if(stack.length===0) return false
             let top =  stack.pop()
             if(s[i]!==map.get(top)) return false
           }
        }
       return stack.length==0
      }
}
