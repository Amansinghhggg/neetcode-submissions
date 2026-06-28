class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let arrS =[]
    let arrT =[]
    for(let i=0;i<s.length;i++){
        arrS.push(s[i])
        arrT.push(t[i])
        }
        arrS.sort()
        arrT.sort()
        for(let  i=0;i<s.length;i++){
            if(arrS[i] !== arrT[i]){
                return false
            }
        }
        return true
    }
}
