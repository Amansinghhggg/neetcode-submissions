class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxx = 0
        for(let i=0;i<prices.length-1;i++){
            let l = i+1
            while(l<prices.length){
                let curr = prices[l] - prices[i]
                maxx = Math.max(curr,maxx)
                l++
            }
        }
        return maxx
    }
}
