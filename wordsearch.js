const { transpose }  = require("../../d2/transpose/matrices");

const wordSearch = (puzzle, word) => { 
  if (Array.isArray(puzzle) && puzzle.length > 0 && word) {  
    const horizontalLines = puzzle.map(letters => letters.join(''));
    for (let line of horizontalLines) {
      if (line.includes(word)) {
        return true;
      }
    }

    const verticalLines = transpose(puzzle).map(letters => letters.join(''));
    for (let line of verticalLines) {
      if (line.includes(word)) {
        return true;
      }
    }

    return false;
  }

  return word ? "No valid puzzle given." : 'No word to look for.';
}

//Benny's adjustments:
// const checkWord = (word) => (puzzle) => puzzle
//   .map(letters => letters.join('').toLowerCase())
//   .some(line => line.includes(word.toLowerCase()));

//   const wordSearch = (puzzle= [''], word = '') => 
//   [puzzle, transpose(puzzle)].some(checkWord(word))

module.exports = wordSearch;