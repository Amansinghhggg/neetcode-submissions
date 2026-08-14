class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 
        let r = nums.length-1
        while(l<=r){
            let mid = Math.floor((r+l)/2)
            if(nums[mid]===target) return mid
            if(nums[l]<=nums[mid]){
                if(nums[l]<=target&&nums[mid]>target){
                    r=mid-1
                }else{
                    l = mid +1
                }
            }else{
                if(nums[r]>=target&&nums[mid]<target){
                    l = mid +1
                }else{
                    r = mid - 1
                }
            }
        }
        if(nums[l]===target) return l
        return -1
    }
}
