/**
 * Imperative approach
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

// ABCDEFGHIJKLMNOPQRSTUVWXYZ? 
const lettersRep = new Array(27);
for (let i = 0; i < 27; i++) {
    lettersRep[i] = new Array(H);
    for (let j = 0; j < H; j++) {
        lettersRep[i][j] = '';
    }
}

// transform ROW
for (let i = 0; i < H; i++) {
    const ROW = readline();
    for (let j = 0; j < 27 * L; j += L) {
        lettersRep[j / L][i] = ROW.slice(j, j + L);
    }
}

//print letters for debug purpose
printErr('\n   Alphabet  \n');
for (let j = 0; j < 27; j++) {
    for (let i = 0; i < H; i++) {
        printErr(lettersRep[j][i]);
    }
    printErr();
}

// solution data structure
const tRep = new Array(H);
for (let i = 0; i < H; i++) {
    tRep[i] = '';
}

// analyze the input and concat the output
for (let i = 0; i < T.length; i++) {
    const letterCode = T.charCodeAt(i);
    const repIndex = letterCode - 65 < 0 ? 26 : letterCode - 65;
    for (let j = 0; j < H; j++) {
        tRep[j] = tRep[j] + lettersRep[repIndex][j];
    }
}

printErr('\n   Solution  \n');
// Write an action using print()
for (let i = 0; i < H; i++) {
    print(tRep[i]);
}