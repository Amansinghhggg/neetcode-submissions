class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let maxH=0
      for(let i=0;i<heights.length-1;i++){
        let count = 1
        for(let j=i+1;j<heights.length;j++){
            let lowest = Math.min(heights[i],heights[j])
            let val = lowest*count
            maxH= Math.max(maxH,val)
            count++
        }
      }
      return maxH
    }
}
