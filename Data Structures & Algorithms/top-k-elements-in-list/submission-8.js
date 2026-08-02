class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     let map = new Map()
     for(let n of nums){
         map.set(n,(map.get(n)|0)+1)
     }
     let res = [...map.entries()]
     
       return res.sort((a,b)=>b[1]-a[1]).slice(0,k).map(num=>num[0])
    }
}
