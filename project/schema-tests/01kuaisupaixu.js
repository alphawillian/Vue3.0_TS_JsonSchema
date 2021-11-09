/*
 * @Author: willian126@126.com
 * @Description: 文件描述
 * @Date: 2021-11-08 15:17:43
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-08 18:01:03
 */
let arr = [8, 3, 10, 2, 7, 6, 9, 12]
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let midIndex = Math.floor(arr.length / 2)
  const valArr = arr.splice(midIndex, 1)
  const midIndexVal = valArr[0]
  const leftArr = []
  const rightArr = []
  arr.forEach(item => {
    if (item < midIndexVal) {
      leftArr.push(item)
    } else {
      rightArr.push(item)
    }
  })
  return quickSort(leftArr).concat(midIndexVal, quickSort(rightArr))
}
console.log(quickSort(arr))

// const quickSort1 = arr => {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	//取基准点
// 	const midIndex = Math.floor(arr.length / 2);
// 	//取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
// 	const valArr = arr.splice(midIndex, 1);
//   // console.log('valArr:', valArr)
// 	const midIndexVal = valArr[0];
//   // const midIndexVal = arr[midIndex]
// 	const left = []; //存放比基准点小的数组
// 	const right = []; //存放比基准点大的数组
// 	//遍历数组，进行判断分配
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < midIndexVal) {
// 			left.push(arr[i]); //比基准点小的放在左边数组
// 		} else {
// 			right.push(arr[i]); //比基准点大的放在右边数组
// 		}
// 	}
// 	//递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
// 	return quickSort1(left).concat(midIndexVal, quickSort1(right));
// };
// const array2 = [5, 4, 3, 2, 1];
// console.log('quickSort1 ', quickSort1(arr))
