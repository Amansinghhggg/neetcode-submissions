class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         let arr = []
        for(let i=0;i<position.length;i++){
            let time = (target-position[i])/speed[i]
            arr.push([position[i],time])
        }
        arr.sort((a,b)=>(b[0]-a[0]))
         let prevtime = 0
         let fleets = 0
         for(let i = 0;i<arr.length;i++){
          let currtime = arr[i][1]
          if(currtime>prevtime){
            prevtime = currtime
            fleets++
          }
         }
         return fleets
    }
}
