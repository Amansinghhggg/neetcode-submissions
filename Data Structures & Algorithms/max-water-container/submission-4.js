class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;
        let l = 0
        let r = heights.length-1
        while(l<r){
            let  anss = Math.min(heights[l],heights[r]) * (r-l)
            ans = Math.max(anss , ans)
            if (heights[l] < heights[r]) {
        l++;
    } else {
        r--;
    }
        }
        return ans
    }

}
