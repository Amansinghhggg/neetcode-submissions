class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = 1
        let right = []
       for(let i=0;i<nums.length;i++){
            right[i] = ans
            ans = ans*nums[i]
       }
       ans = 1
       let left = []
       for(let i = nums.length-1;i>=0;i--){
        left[i] = ans
        ans = ans * nums[i]
       }
       let res = []
       for(let i=0;i<nums.length;i++){
            res[i] = left[i]*right[i]
       }
       return res
    }
}
