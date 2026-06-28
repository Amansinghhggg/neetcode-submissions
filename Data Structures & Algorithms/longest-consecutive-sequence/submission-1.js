class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seq = 0;
        let set = new Set(nums)
        for(let i of set){
            if(!set.has(i-1)){
                let count = 1
                let curr = i
                while(set.has(curr+1)){
                    curr++
                    count++
                }
                seq = Math.max(seq,count)
            }
        }
        return seq
    }
}
