
// Complete the minimumAbsoluteDifference function in the editor below. It should 
// return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// [3 -7 0]
// 3 - (-7) = 10
// 3 - 0 = 3
// -7 - 0 = 7

//output 3 

function minimumAbsoluteDifference(arr) {
    let min = Number.POSITIVE_INFINITY
    arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length-1; i++){
        let diff = arr[i+1] - arr[i]
        min = Math.min(diff, min)
    }
    return min
}
