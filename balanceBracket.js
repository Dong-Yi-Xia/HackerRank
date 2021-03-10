// The string {[()]} meets both criteria for being a balanced string, so we print YES on a new line.

// The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } 
// are not balanced: [(]).

// The string {{[[(())]]}} meets both criteria for being a balanced string, so we print YES on a new line.


function isBalanced(s) {
    let table = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    let extra = []
    for(let i of s){
        if("({[".includes(i)){
            extra.push(i)
        }
        else if(extra.pop() !== table[i]){
           return "NO"
        }
    }
    return extra.length === 0 ? "YES" : "NO"
}