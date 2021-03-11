
// Given two strings, determine if they share a common substring.
//  A substring may be as small as one character.

// Example
// s1 = 'ant'
// s2 = 'art'

// These share the common substring 'a' . return 'YES'

// Example
// s1 = 'be'
// s2 = 'hat'

// These do not share a substring. return 'NO'



function twoStrings(s1, s2) {
    let sorted = [s1,s2].sort((a,b) => a.length - b.length)
    for(let i of sorted[0]){
        if(sorted[1].includes(i)) return "YES"
    }
    return "NO"
}