class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1)
        }
        let ans = Array.from(map.entries())
        ans.sort((a,b)=>(b[1]-a[1]))
        return ans.slice(0,k).map((a)=> {return a[0]})
    }
}
