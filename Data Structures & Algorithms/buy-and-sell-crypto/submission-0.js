class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
for(let i=0;i<prices.length;i++){
  for(let j=i+1;j<prices.length;j++){

      let newProfit =  prices[j]-prices[i] 
        if(newProfit>profit){
          profit = newProfit
        }
   }
}
return profit
    }
}
