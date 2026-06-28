class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
         let set = new Set(numbers)
    for(let num of set){
        for(let n of set){
            if(num+n == target){
             
                return [numbers.indexOf(num)+1,numbers.indexOf(n)+1]
            }
        continue
        }
    }
    }
}
