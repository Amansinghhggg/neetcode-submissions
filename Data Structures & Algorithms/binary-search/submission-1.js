class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let start = Math.floor(nums.length/2)
       if(nums[start]>target){
        for(let i=start;i>=0;i--){
            if(nums[i]===target) return i
        }
        return -1
       }else{
        for(let i=start;i<nums.length;i++){
            if(nums[i]===target) return i
        }
        return -1
       }
    }
}
