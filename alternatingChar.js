You are given a string containing characters A  and  B only. Your task is to 
change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

input
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

output
3
4
0
0
4

function alternatingCharacters(s) {
    let count = 0
    for(let i=0; i<s.length-1; i++){
        for(let j=i+1; j<s.length; j++){
            while(s[i] === s[j]){
                count++
                s=s.replace(s[j], '')
            }
            break
        }     
            
    }
    return count

}