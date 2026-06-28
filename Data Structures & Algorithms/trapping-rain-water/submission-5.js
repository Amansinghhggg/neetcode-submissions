class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
  let w = 0
  let l = 0
  let r = height.length - 1
  let lmax = 0
  let rmax = 0
  while(l<r){
    if(height[l]<height[r]){
      lmax = Math.max(lmax,height[l])
      w += lmax - height[l]
      l++ 
    }else{
      rmax = Math.max(rmax,height[r])
      w += rmax-height[r]
      r-- 
    }
  }
  return w
}
}
