class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
            let reqNum = target-nums[i]
            if(map.has(reqNum)) return [map.get(reqNum),i]
            map.set(nums[i],i)
        }
    }
}
