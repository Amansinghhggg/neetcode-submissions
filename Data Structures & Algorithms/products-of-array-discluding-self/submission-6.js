class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
  let res =[]
  for(let i=0;i<nums.length;i++){
    let ans = 1
    for(let j=0;j<nums.length;j++){
      if(i===j){continue
      }else{
        ans = ans*nums[j]   
      }
    }
    res.push(ans)
  }
  return res
 }
}
