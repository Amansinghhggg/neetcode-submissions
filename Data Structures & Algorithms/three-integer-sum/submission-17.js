class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
     threeSum(nums) {
    nums.sort((a, b) => a - b);

    const ans = [];
    const set = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                const key = `${nums[i]},${nums[l]},${nums[r]}`;

                if (!set.has(key)) {
                    ans.push([nums[i], nums[l], nums[r]]);
                    set.add(key);
                }

                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return ans;
}
}
