class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = Infinity
        let profit = 0
        for(let i = 0;i<prices.length;i++){
            let currprofit = prices[i] - lowest
            profit = Math.max(currprofit,profit)
            lowest = Math.min(lowest,prices[i])
        }
        return profit
    }
}
