class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        for(let n of nums){
            if(n in obj) return true
            obj[n] = true
        }
        return false
    }
}
