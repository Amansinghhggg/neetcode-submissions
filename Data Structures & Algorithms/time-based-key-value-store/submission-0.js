class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
        this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
         if (!this.keyStore.has(key)) return "";
        let arr = this.keyStore.get(key)
        for(let i = arr.length-1;i>=0;i--){
            if(arr[i][0]<=timestamp) return arr[i][1]
        }
        return ""
    }
}
