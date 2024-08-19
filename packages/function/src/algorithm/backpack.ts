/**
 * 01背包问题 就最大价值
 * [
 *  [0,0,5,5,5,5,5],
 *  [0,0,5,5,5,10,10],
 *  [0,3,5,8,8,10,13],
 *  [0,3,5,8,8,10,13],
 *  [0,3,5,8,8,10,13]
 * ]
 * 
 * Math.max(
        dp[i - 1][j - weight[i]] + goods[i],
        dp[i - 1][j]
    );
 */
const backpack = (goods: Array<number>, weight:Array<number>, maxWeight: number)=> {
    const dp = new Array(goods.length).fill(0).map(()=> new Array(maxWeight).fill(0));
    for (let i = 0; i < goods.length; i++) {
        for (let j = 0; j <= maxWeight; j++) {
            // 填入第一列 当背包重量能放下时 写入价值
            if (i === 0){
                dp[i][j] = weight[i] <= j ? goods[i] : 0;
            } else {
                // 重量放不下 放入上一个价值
                if (weight[i] > j) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = Math.max(
                        dp[i - 1][j - weight[i]] + goods[i],
                        dp[i - 1][j]
                    );
                }
            }
        }
    }
    return dp[goods.length - 1][maxWeight]
}

export default backpack;

/**
 * 空间复杂渡优化
 * Math.max(
        lineArr[j - weight[i]] + goods[i],
        lineArr[j]
    );
 */
const backpack2 = (goods: Array<number>, weight:Array<number>, maxWeight: number)=> {
    let lineArr = new Array(maxWeight).fill(0).map(_ => 0);
    // 填入第一行
    for (let i = 0; i < goods.length; i++) {
        const next = [];
        for (let j = 0; j <= maxWeight; j++) {
            // 填入第一列 当背包重量能放下时 写入价值
            if (i === 0){
                lineArr[j] = weight[i] <= j ? goods[i] : 0;
                next[j] = weight[i] <= j ? goods[i] : 0;
            } else {
                if (weight[i] > j) {
                    next[j] = lineArr[j];
                } else {
                    next[j] = Math.max(
                        lineArr[j - weight[i]] + goods[i],
                        lineArr[j]
                    );
                }
            }
        }
        lineArr = next;
    }
    return lineArr[maxWeight];
}
console.log(backpack([5,10,3,6,3], [2,5,1,4,3], 6));
console.log(backpack2([5,10,3,6,3], [2,5,1,4,3], 6));