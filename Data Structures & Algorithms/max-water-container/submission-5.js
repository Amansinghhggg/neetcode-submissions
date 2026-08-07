class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let max = 0
      let l = 0
      let r = heights.length-1
      while(l<r){
        let res = Math.min(heights[l],heights[r])*(r-l)
        max = Math.max(max,res)
        if(heights[l]>heights[r]){
            r--
        }else if(heights[l]<heights[r]){
            l++
        }else{
            r--
            l++
        }
      }
      return max
    }
}
