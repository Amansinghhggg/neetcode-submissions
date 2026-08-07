class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let max = 0
      let minprice = Infinity
      for(let price of prices){
            if(price<minprice){
                minprice = price
            }else{
                max = Math.max(max,price-minprice)
            }
      }
      return max
    }
}
