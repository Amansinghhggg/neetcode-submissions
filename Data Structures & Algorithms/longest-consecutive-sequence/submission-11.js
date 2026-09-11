class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums){
        let set = new Set()
        for(let n of nums){
            set.add(n)
        }
        let maxx = 0
        for(let i = 0;i<nums.length;i++){
            let newmax = 1
            let prev = nums[i]
            if (set.has(nums[i] - 1)) continue;
            while(set.has(prev+1)){
                newmax++
                prev++
            }
            maxx = Math.max(maxx,newmax)
        }
        return maxx
    }
}
