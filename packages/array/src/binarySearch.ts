/**
 * 二分查找法
 * @param arr 要查找的有序数组, 默认升序
 * @param compare 比较方法, 接受参数element为数组元素, 返回值0表示查找成功, 返回大于0表示往左继续查, 返回小于零表示往右继续查
 * @param start 开始下标, 默认为0
 * @param end 截止下标, 默认数组长度 - 1
 */
type compareFn = (element: any) => number
export const binarySearch = (
    arr: any[],
    compare: compareFn,
    start: number = 0,
    end: number = arr.length - 1
): number => {
    if (!compare(arr[start])) return start
    if (!compare(arr[end])) return end
    const mid = Math.floor((start + end) / 2)
    if (mid === start) return -1
    const res = compare(arr[mid])
    if (!res) return mid
    return res > 0 ? binarySearch(arr, compare, start + 1, mid - 1) : binarySearch(arr, compare, mid + 1, end - 1)
}

// const arr1 = []
// for (let i = 0; i < 10000; i++) {
//     arr1.push(i + 1)
// }
// console.log(binarySearch(arr1, e => e - (10001)))

// const arr2 = []
// for (let i = 0; i < 10000; i++) {
//     arr2.push([i + 1, Math.random()])
// }
// console.log(binarySearch(arr2, e => e[0] - 3333))
