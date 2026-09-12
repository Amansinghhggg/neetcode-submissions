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
            let smallest = Math.min(heights[l],heights[r])
            let ans = smallest*(r-l)
            max = Math.max(ans,max)
            if(heights[l]<heights[r]){
                l++
            }else{
                r--
            }
        }
        return max
    }
}
