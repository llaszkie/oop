/**
 * Objective approach
 **/

class Letter {
    static get alphabet() {
        return Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ?');
    }
    constructor(rows, letterIndex) {
        this.rows = rows;
        this.letterIndex = letterIndex;
    }
    get ascii() {
        return Letter.alphabet[this.letterIndex];
    }
    get letterCode() {
        return new String(this.ascii).charCodeAt(0);
    }
    row(line) {
        return this.rows[line];
    }
    print() {
        printErr(this.ascii);        
        this.rows.forEach(r => printErr(r));
    }
}

class LetterBuilder {
    constructor(letterIndex) {
        this.buffer = [];
        this.letterIndex = letterIndex;
    }
    newRow(row) {
        this.buffer.push(row);
    }
    build() {
        return new Letter(this.buffer, this.letterIndex);
    }
}

class WordBuilder {
    constructor(H, unknown) {
        this.letters = [];
        this.H = H;
        this.unknown = unknown;
    }
    addLeter(letter) {
        this.letters.push(letter);
    }
    print() {
        for (let i = 0; i < this.H; i++) {
            this.letters.forEach(l => {
                if (l) {
                    putstr(l.row(i));                                    
                } else {
                    putstr(this.unknown.row(i));                                    
                }
            })
            print();
        }
    }
}

class Solver {
    constructor() {
        let L = parseInt(readline());
        this.H = parseInt(readline());
        this.T = readline();
        
        let lettersBuilder = Array(Letter.alphabet.length).fill().map((e, index) => new LetterBuilder(index));
        for (let i = 0; i < this.H; i++) {
            const ROW = readline();
            for (let j = 0; j < Letter.alphabet.length * L; j += L) {
                lettersBuilder[j/L].newRow(ROW.slice(j, j + L));
            }
        }

        this.letters = Array(Letter.alphabet.length).fill().map((e, index) => lettersBuilder[index].build());
    }

    debug() {
        printErr('\n   Alphabet  \n');
        this.letters.forEach(l => l.print());
    }

    solve() {
        const wb = new WordBuilder(this.H, this.letters[Letter.alphabet.length - 1]);
        for (let i = 0; i < this.T.length; i++) {
            wb.addLeter(this.letters.find(l => l.letterCode === this.T.charCodeAt(i)));
        }
        wb.print();
    }

};

const solver = new Solver();
solver.debug();
solver.solve();