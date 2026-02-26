// function printElements(arr) {
//     let i = 0;
    
//     do {
//     console.log(arr[i]);
//     i++;
//     } while (i< arr.length);
// }

// //2)

// function sumPositive(arr) {
//     let i = 0;
//     let sum =0;

//     if (arr.length === 0) return 0;

//     do {
//         if (arr[i] > 0){
//             sum += arr[i];
//         }
//         i++;
//     } while (i < arr.length);

//     return sum;
// }


// 3)

function filterAboveAverage(matrix) {
    let sum = 0;
    let count = 0;
    let i = 0;

    // FIRST PASS: sum + count
    do {
        let j = 0;
        do {
            sum += matrix[i][j];
            count++;
            j++;
        } while (j < matrix[i].length);
        i++;
    } while (i < matrix.length);

    let average = sum / count;

    // SECOND PASS: filter
    let result = [];
    i = 0;

    do {
        let j = 0;
        do {
            if (matrix[i][j] > average) {
                result.push(matrix[i][j]);
            }
            j++;
        } while (j < matrix[i].length);
        i++;
    } while (i < matrix.length);

    return result;
}

filterAboveAverage([[1, 2], [3, 4]])       // [3, 4]
filterAboveAverage([[10, 20], [30], [40, 50]]) // [40, 50]
filterAboveAverage([[5]])                 // []
