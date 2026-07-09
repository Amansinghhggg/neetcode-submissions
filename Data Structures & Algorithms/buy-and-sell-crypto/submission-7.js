class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        for(let i =0;i<prices.length-1;i++){
            let prof= 0
            for(let j=i+1;j<prices.length;j++){
                prof = prices[j]-prices[i]
                max=Math.max(max,prof)
            }
        }
        if(max<1){
            return 0
        }
        return max
    }
}

