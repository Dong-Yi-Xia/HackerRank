// Given an array a of n integers and a number, d, perform d left rotations on the array.
//  Return the updated array to be printed as a single line of space-separated integers.

// 5 4
// 1 2 3 4 5

// 5 1 2 3 4

// When we perform  d=4 left rotations, the array undergoes the following sequence of changes:


function rotLeft(a, d) {
    // while(d > 0){
    //     let removed = a.shift()
    //     a.push(removed)
    //     d--
    // }
    // return a
    let first = a.slice(0,d)
    let second = a.slice(d)
    second.push(...first)
    return second
}
