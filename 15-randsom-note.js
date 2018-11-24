const randsomNote = (magazine, note) => {
  // null pointer checks
  if (!magazine || !note) {
    return false;
  }

  // quick check if magazine has enough characters
  if (note.length > magazine.length) {
    return false;
  }

  // build histogram of the note
  let noteHistogram = [];
  for (let i = 0; i < note.length; i++) {
    // only count valid characters
    if (note[i] == ' ') {
      continue;
    }

    if (noteHistogram[note[i]] !== undefined) {
      noteHistogram[note[i]]++;
    } else {
      noteHistogram[note[i]] = 1;
    }
  }

  // loop over the magazine until you find all the letters
  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    if (noteHistogram[letter] !== undefined && noteHistogram[letter] > 0) {
      noteHistogram[letter]--;
      if (noteHistogram[letter] === 0) {
        delete noteHistogram[letter];
      }

      if (Object.keys (noteHistogram).length === 0) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Some edge cases:
 * - make sure to count only letters and numbers, and not to count spaces
 */
console.log (randsomNote ('goodtalktoday', 'day god'));
