// Подмассив наибольшей суммы
/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, 
сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/
function getMaxSubSum(arr) {
    let maxSum = 0;
    let subSum = 0;

    for (let item of arr) {
        subSum += item;
        maxSum = Math.max(maxSum, subSum);
        if (subSum < 0) {
            subSum = 0
        }
    }

    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9])
getMaxSubSum([2, -1, 2, 3, -9]) 
getMaxSubSum([-1, 2, 3, -9, 11]) 
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3]) 