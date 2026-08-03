class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i = 0;i<numbers.length-1;i++){
            let l = i
            let r = numbers.length
            while(l<r){
                if(numbers[l]+numbers[r]===target) return [l+1,r+1]
                r--
            }
        }
    }
}
