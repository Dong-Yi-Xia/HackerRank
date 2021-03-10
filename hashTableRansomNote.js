// Hash Tables: Ransom Note

// Given the words in the magazine and the words in the ransom note, print Yes if he can 
// replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains 
// only "attack at dawn". The magazine has all the right words, 
// but there's a case mismatch. The answer is .


// give me one grand today night
// give one grand today

// Output
// Yes


// two times three is not four
// two times two is four

// Output
// No


function checkMagazine(magazine, note) {
    let map = {};
    let same = true;
    for (let i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for (let i of note ) {
        map[i] = (map[i] || 0) - 1;
    }
    for (let key in map ) {
        if ( map[key] < 0 ) {
            same = false;
            break;
        }
    }
    console.log(same ? 'Yes' : 'No');
}