class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
       let l = 0
       let r = nums.length -1
       let ans = Infinity
       while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]>nums[r]){
            l = mid + 1
        }else{
            r = mid -1
        }
        ans = Math.min(nums[mid],ans)
       }
        return ans
    }
}
