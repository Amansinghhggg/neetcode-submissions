class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
          let maxWater = 0
        let l = 0
        let r = heights.length-1
        while(l<r){
        
        let newWater = Math.min(heights[l],heights[r])*(r-l)
       maxWater =Math.max(maxWater,newWater)
       if(heights[l]>heights[r]){
        r--
       }else[
        l++
       ]
    }
    return maxWater
    }
}
