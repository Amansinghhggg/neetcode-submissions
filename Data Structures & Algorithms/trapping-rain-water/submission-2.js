class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let water = 0
   let left = Array(height.length)
   let right =Array(height.length)
   left[0] = height[0]
   right[height.length-1] = height[height.length-1]
   for(let i=1;i<height.length;i++){
        left[i] = Math.max(left[i-1],height[i])
   }
   for(let i=height.length-2;i>=0;i--){
    right[i]=Math.max(right[i+1],height[i])
   }
   for(let i=1;i<height.length;i++){
    water += Math.min(right[i],left[i])-height[i]
   }

    
return water
}
}
