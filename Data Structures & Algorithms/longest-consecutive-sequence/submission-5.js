class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
            if(nums.length===1) return 1
            let maxlen = 0
            nums.sort((a,b)=>a-b)
                for(let i=0;i<nums.length-1;i++){
                    let n = nums[i]
                    let len = 0
                    for(let j=i;j<nums.length;j++){
                        
                        if(nums[j]===n){
                            n++
                            len++
                        }
                    }
                    maxlen = Math.max(maxlen,len)
                }
                return maxlen

        }
    }
