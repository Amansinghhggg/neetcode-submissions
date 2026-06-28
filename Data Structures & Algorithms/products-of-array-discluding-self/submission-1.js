class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
 let l = Array(nums.length)
let r = Array(nums.length)
l[0]=1;
r[nums.length-1]=1
for(let i=1;i<nums.length;i++){
    l[i]= l[i-1]*nums[i-1]
}
for(let i=nums.length-2;i>=0;i--){
    r[i]=r[i+1]*nums[i+1]
}
for(let i=0;i<nums.length;i++){
    nums[i]=l[i]*r[i]
}
return nums
        
    }
}
