class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
    for(let n of nums){
      if(map.has(n)) return true
      map.set(n,(map.get(n)|1)+1)
    }
    return false
    }
}
