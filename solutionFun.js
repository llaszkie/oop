/**
 * Functional approach
 **/

 // define 
const Solver = function() {

    const L = parseInt(readline());
    const H = parseInt(readline());
    const T = readline();
    
    function readInput() {
        let letters = Array(H);
        Array.from(Array(H).keys()).forEach(row => 
            letters[row] = readline().match(new RegExp(`.{1,${L}}`, 'g'))
        );
        return letters;
    }

    return function() {
        let letters = readInput();
        Array.from(Array(H).keys()).forEach(row => {
            Array.from(T)
                .map((l, index) => T.charCodeAt(index))
                .map(c => c - 65 < 0 ? 26 : c - 65)
                .forEach(calculatedIndex => putstr(letters[row][calculatedIndex]));
            print();
        });
    }
}

// and call
Solver()();
