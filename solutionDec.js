/**
 * Declarative approach
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

// ABCDEFGHIJKLMNOPQRSTUVWXYZ? 
const lettersRep = Array(H);

Array.from(Array(H).keys()).forEach(row => 
    lettersRep[row] = readline().match(new RegExp(`.{1,${L}}`, 'g'))
);

// print letters for debug purpose
printErr('\n   Alphabet  \n');
lettersRep.forEach(l => printErr(l));

// and solution
Array.from(Array(H).keys()).forEach(row => {
    Array.from(T)
        .map((l, index) => T.charCodeAt(index))
        .map(c => c - 65 < 0 ? 26 : c - 65)
        .forEach(calculatedIndex => putstr(lettersRep[row][calculatedIndex]));
    print();
});