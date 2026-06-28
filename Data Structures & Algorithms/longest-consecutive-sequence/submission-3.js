class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
     if (nums.length == 0) return 0
    let set = new Set(nums)
    let arr = Array.from(set)
        arr.sort((a,b)=>a-b)
        let seq = 1
        let tSeq= 1
    for(let i=0;i<arr.length;i++){
        
        if(arr[i+1]==arr[i]+1){
            tSeq++
    }else{
        if(tSeq>seq){
            seq= tSeq
        }
        tSeq=1
    }
   

}
 return seq
}
    }
