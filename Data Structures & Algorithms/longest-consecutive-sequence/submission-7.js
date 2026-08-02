class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums){
        let set = new Set(nums)
        let longest = 0
        for(let n of set){
            if(!set.has(n-1)){
            let longest2 = 1
            let curr = n
            while(set.has(curr+1)){
                curr++
                longest2++
            }
            longest=Math.max(longest2,longest)
        }
        }
        return longest
    }
}
