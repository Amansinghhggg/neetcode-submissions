class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        let right = []
        let left = []
        let ins = 1
        for(let i=0;i<nums.length;i++){
               right[i] = ins;
                ins *= nums[i]
                
        }
        ins=1
        for(let i = nums.length-1;i>=0;i--){
                left[i] = ins;
             ins *= nums[i]
               
        }
        let ans 
        for(let i=0;i<nums.length;i++){
                ans = right[i]*left[i]
                res.push(ans) 
        }
        return res
    }
}
