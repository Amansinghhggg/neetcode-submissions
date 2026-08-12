class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
      let op = ["+","-","*","/"]
      let stack = []
       for(let  i = 0 ;i<tokens.length;i++){
        if(op.includes(tokens[i])){
          let num1 = stack.pop()
          let num2 = stack.pop()
          if(tokens[i]==="+"){
            stack.push(num2+num1)
            continue
          }else if(tokens[i]==="-"){
            stack.push(num2-num1)
            continue
          }else if(tokens[i]==="*"){
            stack.push(num2*num1)
            continue
          }else if(tokens[i]==="/"){
            stack.push(Math.trunc(num2/num1))
            continue
          }
       }
       stack.push(Number(tokens[i]))
    }
    return stack[0]
  }
}
